define([
	'backbone', 
	'views/student'
], function(Backbone, StudentView) {
	var StudentCollectionView = Backbone.View.extend({

		// tagName: 'tr',
		
		initialize: function() {
			this.listenTo(this.collection, "reset", this.render);
		},
		render: function() {
			this.$el.html("");
			this.collection.each(function(student) {
				var studentView = new StudentView({
					model: student
				});
				this.$el.append(studentView.render().el);
			}, this);
			return this;
		}
	});

	return StudentCollectionView;
});