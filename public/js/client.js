var Student = Backbone.Model.extend({

	idAttribute: "_id"

});

var Students = Backbone.Collection.extend({

	model: Student,
	url: "/students"

});

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
		router.navigate("student/" + id, {trigger: true});
	}
});

var MoreStudentView = Backbone.View.extend({
	render: function() {
		var template = $("#morestudenttemplate").html();
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
		$('.container').html(view.render().el);
	},

	index: function() {
		var view = new StudentsView({ collection: this.collection });
		this._renderView(view);
	},

	singleStudent: function(id) {
		console.log("singleStudentMethod", id);
		var student = this.collection.get(id);
		var view = new MoreStudentView({ model: student });
		this._renderView(view);
	}
});