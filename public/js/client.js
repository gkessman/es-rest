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
	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
	},
	tagName: "ul",
	className: "students",
	render: function() {
		this.$el.html("");
		this.collection.each(function(student) {
			var studentView = new StudentView({ model: student });
			this.$el.append(studentView.render().el);
		}, this);
		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	initialize: function() {
		this._setupCollection();
	},

	routes: {
		"": "index",
		"student/:id": "singleStudent"
	},

	_setupCollection: function() {
		if(this.collection) return;
		var data = $('#initialContent').html();
		this.collection = new Students(JSON.parse(data));
	},

	_renderView: function(view) {
		$('.container').append(view.render().el);
	},

	index: function() {
		// var collection = new Students(JSON.parse(data));
		var view = new StudentsView({ collection: this.collection });
		this._renderView(view);
	},

	singleStudent: function(id) {

	}
});