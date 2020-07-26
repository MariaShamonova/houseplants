export default function({ store, redirect, route }) {

    if (route.path === '/') redirect('/auth')
    // store.getters['api/auth/isAuthenticated'] && route.name == 'login' ? redirect('/dashboard') : ''
    // !store.getters['api/auth/isAuthenticated'] && isAdminRoute(route) ? redirect('/') : ''
  }
  
  function isAdminRoute(route) {
    if (route.matched.some(record => record.path.indexOf('/dashboard')>-1)) {
      return true
    } else {
      return false
    }
  }
  