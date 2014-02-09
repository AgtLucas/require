require.config({

  baseUrl: '/',

  paths: {
    'jquery': 'bower/jquery/jquery'
  },

  shim: {
    'alerter': {
      exports: 'app/src/js/wtf/alerter'
    }
  }

});