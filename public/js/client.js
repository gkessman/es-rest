var Student = Backbone.Model.extend({

	idAttribute: "_id"

});

var Students = Backbone.Collection.extend({

	model: Student,
	url: "/students"

});

var StudentView = Backbone.View.extend({
	tagName: "li",
	className: "student",
	render: function() {
		var template = $("#studenttemplate").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes._source);
		this.$el.html(html);
		return this;
	}
});

var StudentsView = Backbone.View.extend({
	tagName: "ul",
	className: "students",
	render: function() {
		this.collection.each(function(student) {
			var studentView = new StudentView({ model: student });
			this.$el.append(studentView.render().el);
		}, this);
		return this;
	}
});