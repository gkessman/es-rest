var Student = Backbone.Model.extend({
	idAttribute: "_id"
});

var Students = Backbone.Collection.extend({
	model: Student,

	url: "/students"
})