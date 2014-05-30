/* global require */
'use strict';

require.config({
	baseUrl:'',
	paths: {
		'jquery': 'js/lib/jquery-2.1.0.min',
		'bootstrap': 'js/lib/bootstrap.min',
		'backbone': 'js/lib/backbone',
		'views' : 'views',
		'models': 'models',
		'routers': 'routers'
	}
});

require([
	'jquery',
	'underscore',
	'backbone',
	// 'views/AppView',
	// 'routers/AppRouter'
	],function($,_,Backbone,MainView){
		
		var _app = new AppView({
			el: '#appWrapper',
			router: new AppRouter(),
			onInit: function(){
				_app.options.router.app = _app;
				Backbone.history.start();
			}
		});
	});