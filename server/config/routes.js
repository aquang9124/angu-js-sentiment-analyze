var mashapes = require('../controllers/mashapes.js');
module.exports = function(app) {
	app.get('/api/sentiments', function(req, res) {
		mashapes.show(req, res);
	});

	app.post('/api/sentiments', function(req, res) {
		mashapes.show(req, res);
	});
}