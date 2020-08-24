const userRoutes = require('./events');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Welcome to the CloudWatch annotation API');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;
