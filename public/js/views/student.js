define(['backbone', 'handlebars', 'jquery', 'events'], function(Backbone, Handlebars, $, Events) {
	var StudentView = Backbone.View.extend({
		events: {
			"click .name": "singleStudentLink"
		},

		tagName: "li",
		className: "student",

		render: function() {
			var template = $("#studenttemplate").html();
			var compiled = Handlebars.compile(template);
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