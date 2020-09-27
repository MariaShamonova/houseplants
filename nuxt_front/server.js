const express = require('express');
const server = express();
const webpack = require('webpack');
const config = require('./webpack.client.config');
const path = require('path');
const fs = require('fs');
 
const cors = require('cors');
const DB = require('./db');
const configAuth = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const db = new DB("sqlitedb")
const router = express.Router();

const NODE_ENV = process.env.NODE_ENV;
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);
 

const {createBundleRenderer} = require('vue-server-renderer');
const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
 
const createRenderer = bundle => createBundleRenderer(bundle, {
    runInNewContext: false,
    template
});

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
server.use(allowCrossDomain)
 
 
let renderer = createRenderer(require('./dist/vue-ssr-server-bundle.json'));
 
server.use(express.static(path.join(__dirname, '/dist')));

if (NODE_ENV === 'development') {
    
    server.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        logLevel: 'warn'
    }));
 
    server.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 2000
    }));
}

server.get('*', async (req, res) => {
    
    const context = {
        url: req.url || '/',
    }
 
    let html;
 
    try {
        html = await renderer.renderToString(context);
    } catch (err) {
        if (err.code === 404) {
            return res.status(404).send('404 | Page Not Found');
        }
        return res.status(500).send('500 | Internal Server Error');
    }
    console.log(html)
    res.end(html)
})
 
server.use(router)
router.post('/register', function(req, res) {
    db.insert([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8)
    ],
    function (err) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send("There was a problem getting user")
            let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        }); 
    }); 
});

router.get('/me', function(req, res) {
    let token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
 
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        res.status(200).send(decoded);
    });
});
 
router.post('/login', (req, res) => {
    console.log(req)
    db.selectByEmail(req.email, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user });
    });
})


 
server.listen(3000, () => {
    console.log(`Server started`)
});