$(function () {
	var file = "../asset/json/data.json";
	$.getJSON(file, function (data) {
		$.each(data, function (i, field) {
			var temp = '<div class="col-12 col-sm-6 col-lg-4">' 
				+ '<div class="single-product-area mb-50">'
				+ '<div class="product-img">'
				+ '<a href="#!/details"><img src="../asset/image/products/'+ field.Image[1] +'" alt=""></a>'
				+ '<!-- Product Tag -->'
				+ '<div class="product-meta d-flex">'
				+ '<a href="#!/cart" class="add-to-cart-btn">Add to cart</a>'
				+ '</div>'
				+ '</div>'
				+ '<!-- Product Info -->'
				+ '<div class="product-info mt-15 text-center">'
				+ '<a href="#!/details">'
				+ '<p>'+ field.Commonname+'</p>'
				+ '</a>'
				+ '<h6>$10.99</h6>'
				+ '</div>'
				+ '</div>'
				+ '</div>';
			$("#all-products").append(temp);
		});
		// generateAllProductsHTML(products);
		// $$$(window).trigger('hashchange');
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

			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
 }