import Ember from "ember";

var wxconfig;

wxconfig = {
   name: 'wxconfig',
   initialize: function() {
   		console.log("当前页面链接" + window.location.href);
    	Ember.$.getJSON('http://cts.vaimian.com/api/wechat/config?url=http://aym.vaimian.com/').then(function(data) {    	   		
	    	wx.config(data);
	    });
   }
};

export default wxconfig;