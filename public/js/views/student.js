define([
	'backbone', 
	'handlebars', 
	'jquery', 
	'events', 
	'text!templates/studentTemplate.html'
], function(Backbone, Handlebars, $, Events, StudentTemplate) {
	var StudentView = Backbone.View.extend({
		events: {
			"click .name": "singleStudentLink"
		},
		tagName: 'tr',
		className: 'student',
		render: function() {
			var compiled = Handlebars.compile(StudentTemplate);
			var html = compiled(this.model.attributes._source);
			this.$el.html(html);
			return this;
		},

		singleStudentLink: function(e) {
			e.preventDefault();
			var id = this.model.get("_id");
			var url = "student/" + id;
			Events.trigger('router:navigate', url);
		}
	});

	return StudentView;
});