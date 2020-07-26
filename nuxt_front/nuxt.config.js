import axios from 'axios';
import _ from 'lodash';

module.exports = {
  ssr: false,
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'houseplants',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'HousePlants project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 
  css: [
    'node_modules/vue-snotify/styles/material.css',
    'C:/Users/honey/Desktop/HousePlants/plants-ww/houseplants/nuxt_front/src/assets/sass/common.sass'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: process.env.NUXT_APP_MODE === 'production'
    },
    vendor: [ 'axios-rest-client', 'vue-snotify','lodash', 'vue-clickaway', 'vue-bootstrap' ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },


  plugins: [
    '~/components',
    { src: '~/plugins/axios-rest-client', ssr: false },
    { src: '~/plugins/snotify', ssr: false },
  ],
  router: {
    prefetchLinks: process.env.NUXT_APP_MODE === 'production',
    middleware: 'router-auth'
  },
};

