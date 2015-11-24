define(['backbone', 'handlebars'], function(Backbone, Handlebars) {
	var DetailedStudentView = Backbone.View.extend({
		render: function() {
			var template = $("#morestudenttemplate").html();
			var compiled = Handlebars.compile(template);
			var html = compiled(this.model.attributes._source);
			this.$el.html(html);
			return this;
		}
	});
	return DetailedStudentView;
});