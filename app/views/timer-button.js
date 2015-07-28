import Ember from "ember";

var timerButton;

timerButton = Ember.View.extend({
	isActive: false,
	tagName: 'button',
	classNameBindings: [':btn-press', 'isActive:active'],

	touchStart: function() {
		this.set("isActive", true);
		this.get('controller').send('press');
	},
	touchEnd: function() {
		this.set("isActive", false);
		this.get('controller').send('release');
	}
});

export default timerButton;