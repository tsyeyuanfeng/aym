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
			else {
				return "离抢到胡巴多了" + -diff + "秒";
			}
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
			var costTime  = (curTime - startTime).toFixed(3);
			if(costTime != 1.000)
				this.set("costTime", costTime);
			else
				this.set("costTime", 0.999);

			var title = "我按了" + this.get("costTime") + "秒，" + this.get("resultText");
			
			wx.onMenuShareTimeline({
			    title: title, // 分享标题
			    link: 'http://aym.vaimian.com', // 分享链接
			    imgUrl: 'http://aym.vaimian.com/assets/images/logo.jpg', // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    }
			});
		}

	}

});

export default indexController;