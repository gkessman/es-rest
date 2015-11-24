define([
	'backbone', 
	'events', 
	'collections/students', 
	'views/studentCollection', 
	'views/detailedStudent'
], function(Backbone, Events, Students, StudentCollectionView, DetailedStudentView) {
		var Router = Backbone.Router.extend({
			initialize: function() {
				var self = this;
				this._setupCollection();
				Events.on('router:navigate', function(url) {
					self.navigate(url, { trigger: true });
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
				$('.container').html(view.render().el);
			},

			index: function() {
				var view = new StudentCollectionView({
					collection: this.collection
				});
				this._renderView(view);
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