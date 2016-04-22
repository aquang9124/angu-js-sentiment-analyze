var unirest = require('unirest');
var mashKey = "bDPDcJeR9BmshPk8xl2oUBZ4mM14p1xzufRjsnWu3DBQ4E9fq0";

module.exports = {
	show: function(req, res) {
		var mashUrl = "https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + req.body.sentence;
		unirest.get(mashUrl)
		.header("X-Mashape-Key", mashKey)
		.header("Accept", "application/json")
		.end(function (result) {
		  console.log(result.status, result.headers, result.body);
		  res.json(result);
		});
	}
}