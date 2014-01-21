var Card = Backbone.Model.extend({

	//urlRoot: '/slide',
	defaults: {
		title: "",
		image: "src",
		comment: "Paragraph"
	},
	initalize: function(){

		this.validate();
		this.on("change:comment", function(model){
			console.log("comment changed to: " + model.get("comment"));
		});
		this.on("change:image", function(model){
			console.log("An image has been modified");
		});
		this.on("destroy", function(){
			console.log("in the card model");
			console.log("destroying", arguments);
		}); 
	},
	validate: function (){
		if(this.get("title").length < 3) {
        	throw new Error("invalid card");
        }
	},
	addComment: function (comment) {
		this.set("title", comment);
	}
});