import Ember from "ember";

var wxconfig;

wxconfig = {
   name: 'wxconfig',
   initialize: function() {
    	Ember.$.getJSON('http://cts.vaimian.com/api/wechat/config').then(function(data) {    	   		
	    	wx.config(data);
	    });
   }
};

export default wxconfig;