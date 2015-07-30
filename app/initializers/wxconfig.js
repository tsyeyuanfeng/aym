import Ember from "ember";

var wxconfig;

wxconfig = {
   name: 'wxconfig',
   initialize: function() {
   		console.log("当前页面链接" + window.location.href);
    	Ember.$.getJSON('http://cts.vaimian.com/api/wechat/config?url=http://aym.vaimian.com/').then(function(data) {    	   		
	    	wx.config(data);

	    	wx.ready(function() {
	    		wx.onMenuShareTimeline({
				    title: "按1秒，赢胡巴", // 分享标题
				    link: 'http://aym.vaimian.com', // 分享链接
				    imgUrl: 'http://aym.vaimian.com/assets/images/logo.jpg', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
	    	});
	    	
	    }); 

	    Ember.$.getJSON('http://statistics.vaimian.com/index.php/home/PageView/count/site/aym').then(function(data) {    	   		
	    	console.log(data);
	    });    
   }
};

export default wxconfig;