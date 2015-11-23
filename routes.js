var express = require('express');
var es = require("./elastic");

var router = express.Router();

router.use(express.static(__dirname + '/public'));

var students = [];

router.get('/', function (req, res) {
	res.render('index');
});

router.get('/students', function (req, res) {
	// load data from DB here
	es.search({
		index: 'students',
		type: 'student',
		body: {
			query: {
				match_all: {}
			}
		}
	}).then(function(resp) {
		var hits = resp.hits.hits;
		var students = [];
		for (i = 0; i < hits.length; i++) {
			students.push(hits[i]);
		}
		console.log(students);
		res.json(students);
	}, function(err) {
		console.trace(err.message);
	});
});

router.get('/students/:id', function (req, res) {

	var qId = req.params.id;

	es.search({
		index: 'students',
		type: 'student',
		body: {
			query: {
				match: {
					_id: qId
				}
			}
		}
	}).then(function(resp) {
		var hits = resp.hits.hits;
		var students = [];
		for (i = 0; i < hits.length; i++) {
			students.push(hits[i]);
		}
		console.log(students);
		res.json(students);
	}, function(err) {
		console.trace(err.message);
	});
});

router.post('/students', function(req, res) {
	es.index({
		index: 'students',
		type: 'student',
		body: req.body
	}).then(function(resp) {
		res.json(resp);
	}, function(err) {
		console.trace(err.message);
	})
});

router.post('/add', function(req, res) {
	var newItem = req.body.newItem;

	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');
});

module.exports = router;