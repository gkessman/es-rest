define([
	'backbone',
	'events',
	'collections/students',
	'views/studentCollection',
	'views/detailedStudent',
	'views/student'
], function(Backbone, Events, Students, StudentCollectionView, DetailedStudentView, StudentView) {
	var Router = Backbone.Router.extend({
		initialize: function() {
			var self = this;
			this._setupCollection();
			Events.on('router:navigate', function(url) {
				self.navigate(url, {
					trigger: true
				});
			});
		},

		routes: {
			"": "index",
			"student/:id": "singleStudent"
		},

		_setupCollection: function() {
			if (this.collection) return;
			var data = $('#initialContent').html();
			this.collection = new Students(JSON.parse(data));
		},

		_renderView: function(view) {
			$('.content').html(view.render().el);
		},

		index: function() {
			var self = this;
			var view = new StudentCollectionView({
				collection: this.collection
			});
			console.log(this.collection);
			this.collection.each(function(student) {
				self.studentView = new StudentView({
					model: student
				});
				self.studentView.$el.append(self.studentView.render().el);
				console.log(self.studentView.$el);
			});
			console.log(self.studentView);
			this._renderView(self.studentView);
		},

		singleStudent: function(id) {
			var student = this.collection.get(id);
			var view = new DetailedStudentView({
				model: student
			});
			this._renderView(view);
		}
	});
	return Router;
});