module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/places', require('./placesCRUD.routes.js'))
    app.use('/api', require('./api.routes.js'))
}