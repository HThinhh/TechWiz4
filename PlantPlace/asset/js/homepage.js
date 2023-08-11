$(function () {
	var images = [];
	var file = "../asset/json/data.json";
	$.getJSON(file, function (data) {
		$.each(data, function (i, field) {
			$("#products-list").append(field.ID + " " + field.Commonname + "<br/>");
			images = field.Image;
			$("#products-list").append("<img src=\"../asset/image/products/"+ images[1] + "\"> <br/>");
		});	
		// generateAllProductsHTML(products);
		// $$$(window).trigger('hashchange');
	});
});

// $$$(window).on('hashchange', function(){
// 	render(decodeURI(window.location.hash));
// });
// 	/* template */
// 	function render(url) {
// 		var temp = url.split('/')[0];
// 		$$$('.main-content .page').removeClass('visible');
// 		var	map = {
// 			'': function() {
// 				filters = {};
// 				checkboxes.prop('checked',false);
// 				renderProductsPage(products);
// 			}
// 		};
// 		if(map[temp]){
// 			map[temp]();
// 		}
// 		else {
// 			renderErrorPage();
// 		}
// 	}
// 	/* all product */
// 	function generateAllProductsHTML(data){
// 		var list = $$$('.all-products .products-list');
// 		var theTemplateScript = $$$("#products-template").html();
// 		var theTemplate = Handlebars.compile (theTemplateScript);
// 		list.append (theTemplate(data));
// 		list.find('li').on('click', function (e) {
// 			e.preventDefault();
// 			var productIndex = $$$(this).data('index');
// 			window.location.hash = 'product/' + productIndex;
// 		})
// 	}

// 	function renderProductsPage(data){
// 		var page = $$$('.all-products'), p = $$$('.nonP'),
// 			allProducts = $$$('.all-products .products-list > li');
// 		allProducts.addClass('hidden');
// 		allProducts.each(function () {
// 			var that = $$$(this);
// 			data.forEach(function (item) {
// 				if(that.data('index') == item.id) {
// 					that.removeClass('hidden');
// 				}
// 			});
// 		});
// 		/* no product */
// 		if (data == "") p.addClass('show')
// 		else p.removeClass('show'); 
// 		page.addClass('visible');
// 	}

// 	function renderErrorPage(){
// 		var page = $$$('.error'), footer = $$$('footer'),
// 			headers = $$$('header'),
// 			main = $$$('.main-content');
// 		page.addClass('visible');
// 		main.addClass('hidden');
// 		headers.addClass('hidden');
// 		footer.addClass('hidden');
// 	}
// });