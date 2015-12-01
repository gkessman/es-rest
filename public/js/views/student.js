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
		el: '.content',
		render: function() {
			var compiled = Handlebars.compile(StudentTemplate);
			var html = compiled({students : this.model.models});
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