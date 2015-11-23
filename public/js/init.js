$(function() {
	var collection = new Students();
	collection.fetch({
		success: function(data) {
			var view = new StudentsView({ collection: data });
			$("body").append(view.render().el);
		}
	});
})