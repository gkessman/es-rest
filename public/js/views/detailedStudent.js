define([
	'backbone',
	'handlebars',
	'text!templates/detailedStudentTemplate.jade'
], function(Backbone, Handlebars, DetailedStudentTemplate) {
	var DetailedStudentView = Backbone.View.extend({
		render: function() {
			var compiled = Handlebars.compile(DetailedStudentTemplate);
			var html = compiled(this.model.attributes._source);
			this.$el.html(html);
			return this;
		}
	});
	return DetailedStudentView;
});