import Ember from "ember";

var wxconfig;

wxconfig = {
   name: 'wxconfig',
   initialize: function() {
   		console.log("当前页面链接" + window.location.href);
   		var url = encodeURI("http://www.vaimian.com:4200/");
    	Ember.$.getJSON('http://cts.vaimian.com/api/wechat/config/' + url).then(function(data) {    	   		
	    	wx.config(data);
	    });
   }
};

export default wxconfig;