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
			if( diff > 0 ) {
				return "离抢到胡巴还有" + diff + "秒";
			}
			else if (diff == 0) {
				return "恭喜你，你成功了地按出了1秒，棒棒的，截图领取胡巴吧！";
			}
			else {
				return "离抢到胡巴多了" + -diff + "秒";
			}
		}
		
	}.property("costTime"),

	actions: {
		press: function() {
			var curTime = parseFloat((new Date().getTime() / 1000).toFixed(3));
			this.set("startTime", curTime);
		},

		release: function() {
			var startTime = this.get("startTime");
			var curTime   = parseFloat((new Date().getTime() / 1000).toFixed(3));
			var costTime  = parseFloat((curTime - startTime).toFixed(3));
			this.set("costTime", costTime);
		}
	}

});

export default indexController;