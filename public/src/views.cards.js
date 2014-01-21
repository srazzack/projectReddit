var CardSelectView = Backbone.View.extend({
    el: "#app",
    templates: {
        t1: _.template($("#cardPresViewTemplate").html()),
        t2: _.template($("#cardPresViewTemplate").html())
    },

    selectedCard: null,

    initialize: function () {
        this.collection.on("change", this.render, this);
        this.collection.on("add", this.render, this);
        this.collection.on("remove", this.render, this);

        $(document).bind("keyup", _.bind(this.keypressHandler, this));
    },

    render: function () {
        this.$el.find("#cardsSelection").html(this.templates["t1"](this.collection));
    },

    events: {
        "click .card": "selectedCardRender",
            "click #removeCard": "deleteSelectedCard",
            "click #removerTargetCard": "deleteTargetCard",
            "click #moveCardUp": "moveUp",
            "click #moveCardDown": "moveDown"
    },

    keypressHandler: function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 46 || e.keyCode === 189) {
            this.removeSelectedCard();
        } else if (e.keyCode === 187) {
            this.addDefaultCard();
        }
    },

    getCard: function (e) {
        return this.collection.get($(e.currentTarget).attr("data-id"));
    },

    moveUp: function (e) {
        this.collection.moveUp(this.getCard(e));
    },

    moveDown: function (e) {
        this.collection.moveDown(this.getCard(e));
    },

    startCardShow: function () {
        console.log(sc);
        var cardShow = new CardShowView({
            collection: cardStack
        });
        cardShow.render();
    },

    selectedCardRender: function (e) {
        var sv = new ActiveCardView({
            model: this.getCard(e)
        });
        sv.render();
        this.selectedCard = this.getCard(e);
    },

    removeTargetCard: function (e) {
        var targetCard = this.getCard(e);
        console.log(targetCard);
        this.collection.deleteCard(targetCard);
        this.collection.remove(targetCard);
    },

    removerSelectedCard: function (e) {
        var selected = this.selectedCard;

        if (selected) {
            this.collection.remove(selected);
            this.collection.deleteCard(selected);
            console.log("here destory code ran: selected = true");
            console.log(this.collection.models.length);
        } else {
            var lastCard = this.collection.at(this.collection.models.length - 1);
            this.collection.remove(lastCard);
            this.collection.deleteCard(lastCard);
            console.log(this.collection.models.length);
        }
    },

    savePresentation: function () {
        var Card = this.collection.at(this.selectedCard);
        console.log(this.collection.saveCard(Card));
        this.collection.saveCard(Card);
    }
});