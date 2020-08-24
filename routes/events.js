var Annotations = require('../lib/annotations');
var cloudwatch = require('../lib/cloudwatch');


const eventRoutes = (app, fs) => {
	//POST
	app.post('/events', (req, res) => {
		console.log(req.body.time);
		
		let name = req.body.dashboardName;
    		let type = req.body.type;

    		cloudwatch.getDashboard(name).then(data => {
        		var body = Annotations.addTo(data, type, { title: req.body.eventTitle, 'widget-title':req.body.widgetTitle, value: req.body.time });
        		return cloudwatch.putDashboard(name, body).catch((err) => {
            			console.error(err.message);
            			process.exit(1);
        		});
    		}).catch((err) => {
        		console.error(err.message);
        		process.exit(1);
    		})

		res.status(200).send('New annotation added');
	});

};

module.exports = eventRoutes;
