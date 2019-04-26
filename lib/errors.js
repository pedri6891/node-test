/**
 * Created by Arlen on 2/6/18.
 */

let configErrors = app => {

  // Catch error 404
  app.use((req, res, next) => {
    let err = Error('Not Found');

    if (err) {
      err.status = 404;
      return res.status(err.status || 404).render('errors/404', {
        title: '404 Error',
        meta: {
          robots: 'NOINDEX,NOFOLLOW'
        }
      });
    }

    next();
  });

  // Catch error 500
  app.use((err, req, res, next) => {
    if (err) {
      console.error(err.stack);
      return res.status(err.status || 500).render('errors/500', {
        title: '500 Error',
        meta: {
          robots: 'NOINDEX,NOFOLLOW'
        }
      });
    }

    next();
  });

};

module.exports = configErrors;
