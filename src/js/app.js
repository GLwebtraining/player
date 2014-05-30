$(document).ready(function(){

	'use strict';

	var AppRouter = Backbone.Router.extend({
	  routes: {
		'player':             'player',
		'favorites': 	      'favorites',
		'favorite':   		  'favorite',
		'favorite/:favId':    'favorite'
	  },

	  player: function() {
		console.log( 'player' );
	  },

	  favorites: function( ) {
		console.log( 'Favorites: ' + JSON.stringify( stations ) );
	  },

	  favorite: function( favoriteId ) {
		console.log( 'Favorite: ' + favoriteId );
	  }
	});
	
	var StationModel = Backbone.Model.extend({
		defaults: {
			'url': 'http://',
			'name': 'Station'
		},
		// unused at the moment
		getUrl: function() {
			return this.get( 'url' );
		}
	});
	
	var StationsCollection = Backbone.Collection.extend({
		model: StationModel
	});
	
	var stations = new StationsCollection([{
			'url': 'http://uwstream2.somafm.com:8400/;stream.mp3',
			'name': 'Dubstep Beyond'
		}, {
			'url': 'http://xstream1.somafm.com:9090/;stream.mp3',
			'name': 'BAGeL Radio'
		}, {
			'url': 'http://xstream1.somafm.com:8040/;stream.mp3',
			'name': 'Black Rock FM'
		}, {
			'url': 'http://uwstream2.somafm.com:5500/;stream.mp3',
			'name': 'South By Soma'
		}, {
			'url': 'http://xstream1.somafm.com:2504/;stream.mp3',
			'name': 'The Trip'
		}, {
			'url': 'http://xstream1.somafm.com:8062/;stream.mp3',
			'name': 'Cliq Hop IDM'
		}, {
			'url': 'http://xstream1.somafm.com:8300/;stream.mp3',
			'name': 'Doomed'
		}, {
			'url': 'http://xstream1.somafm.com:6200/;stream.mp3',
			'name': 'DEF CON Radio'
		}, {
			'url': 'http://uwstream2.somafm.com/;stream.mp3',
			'name': 'Drone Zone'
		}, {
			'url': 'http://xstream1.somafm.com:2020/;stream.mp3',
			'name': 'Mission Control'
		}, {
			'url': 'http://xstream1.somafm.com:2800/;stream.mp3',
			'name': 'Deep Space One'
		}, {
			'url': 'http://uwstream2.somafm.com:2040/;stream.mp3',
			'name': 'SF 10-33'
		}, {
			'url': 'http://xstream1.somafm.com:8500/;stream.mp3',
			'name': 'Illinois Street Lounge'
		}, {
			'url': 'http://xstream1.somafm.com:8000/;stream.mp3',
			'name': 'Space Station Soma'
		}, {
			'url': 'http://xstream1.somafm.com:8600/;stream.mp3',
			'name': 'Sonic Universe'
		}, {
			'url': 'http://xstream1.somafm.com:5100/;stream.mp3',
			'name': 'Earwaves'
		}, {
			'url': 'http://xstream1.somafm.com:8850/;stream.mp3',
			'name': 'Suburbs Of Goa'
		}, {
			'url': 'http://xstream1.somafm.com:8002/;stream.mp3',
			'name': 'Secret Agent'
		}, {
			'url': 'http://xstream1.somafm.com:8388/;stream.mp3',
			'name': 'Beat Blender'
		}, {
			'url': 'http://xstream1.somafm.com:8900/;stream.mp3',
			'name': 'Digitalis'
		}, {
			'url': 'http://xstream1.somafm.com:8090/;stream.mp3',
			'name': 'Indie Pop'
		}, {
			'url': 'http://xstream1.somafm.com:2200/;stream.mp3',
			'name': 'PopTron'
		}, {
			'url': 'http://xstream1.somafm.com:8800/;stream.mp3',
			'name': 'Lush'
		}, {
			'url': 'http://uwstream1.somafm.com/;stream.mp3',
			'name': 'Groove Salad'
		}, {
			'url': 'http://xstream1.somafm.com:8700/;stream.mp3',
			'name': 'Covers'
		}, {
			'url': 'http://xstream1.somafm.com:8880/;stream.mp3',
			'name': 'Underground 80s'
		}, {
			'url': 'http://uwstream2.somafm.com:7770/;stream.mp3',
			'name': 'Seven Inch Soul'
		}, {
			'url': 'http://xstream1.somafm.com:7000/;stream.mp3',
			'name': 'Boot Liquor'
		}, {
			'url': 'http://xstream1.somafm.com:7400/;stream.mp3',
			'name': 'Folk Forward'
		}, {
			'url': 'http://uwstream2.somafm.com:5400/;stream.mp3',
			'name': 'Iceland Airwawes'
		}]);
	
	var StationsListView = Backbone.View.extend({

		el: '.station-links',
		
		template: $( '#stations-template' ).html(),
		
		initialize: function(){
			this.tmpl = Handlebars.compile( this.template );
			this.render();
		},
		
		render: function(){
			var html = this.tmpl({ stations: stations.models });
			this.$el.html( html );

			$('.station-links a').bind( 'click', function( event ){
				event.preventDefault();
				var audio = document.querySelectorAll( '.player' )[0];
				audio.src = event.currentTarget.href;
				audio.play();
			});
		}
	});
	
	// Start the Backbone application
	new AppRouter();
	new StationsListView();
	Backbone.history.start({pushState: false});

});
