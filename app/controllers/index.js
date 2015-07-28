import Ember from "ember";

var indexController;

indexController = Ember.Controller.extend({
	startTime: 0,
	costTime: 0,
	resultText: function() {
		var costTime = this.get("costTime");

		if(costTime === 0) {
			return "";
		}
		else {
			var diff = (1 - costTime).toFixed(3);
			if( diff > 0 )
				return "离抢到胡巴还有" + diff + "秒";
			else
				return "离抢到胡巴仅仅多了" + -diff + "秒";
		}
		
	}.property("costTime"),

	actions: {
		press: function() {
			console.log("press ....");
			this.set("startTime", (new Date().getTime() / 1000).toFixed(3) );
		},

		release: function() {
			console.log("release....");
			var startTime = this.get("startTime");
			var curTime   = new Date().getTime() / 1000;
			this.set("costTime", (curTime - startTime).toFixed(3));
		}

	}

});

export default indexController;