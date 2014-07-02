
$(function(){
	Esgi.module = Esgi.module || {}
	Esgi.module.user = Esgi.module.user || {}

	Esgi.module.user.Test = function (cfg) {
		new Esgi.html.img({
			renderTo : cfg.id,
			src : 'http://drupal.org/files/issues/header_1.png'
		});
	}

});
