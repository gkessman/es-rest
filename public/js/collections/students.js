define(['backbone', 'models/student'], function(Backbone, Student) {
	return Backbone.Collection.extend({

		model: Student,
		url: "/students"
		
	});
});