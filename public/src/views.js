var ActiveCardView = Backbone.View.extend({

    el: "#cardContainer",
    template: _.template($("#cardTemplate").html()),

    render: function () {
        var that = this;
        this.$el.find("#activeCard").html(this.template(this.model.toJSON()));

        this.$el.find("#cardComment").inline({
            callback: function (text) {
                that.model.set({
                    comment: text
                });
                that.model.save();
            }
        });
        return this;
    },

    events: {
        "click #saveCard": "saveCard",
            "dblclick #activeCard": "startCardShow"
    },

    //if we were to develop our own api to search 
    //the subreddit instead of using reddit's, we 
    //could push to our version of the subreddit json
    //this would be illegal but certainly an interesting concept
    saveCard: function (e) {
        console.log(this.model.save());
        this.model.save();
    },

    startCardShow: function () {
        var CardShow = new CardShowView({
            collection: sc
        });
        CardShow.render();
    }

});