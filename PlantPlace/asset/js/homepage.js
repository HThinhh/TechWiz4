$(function () {
	var file = "../asset/json/data.json";
	$.getJSON(file, function (data) {
		$.each(data, function (i, field) {
			var temp = '<div class="product col-12 col-sm-6 col-lg-4">' 
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
});const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("product-list")
	const product = document.querySelectorAll(".product")
	const productname = document.getElementsByTagName("p")

	for(var i = 0; i < productname.length; i++){
		let match = product[i].getElementsByTagName("p")[0];

		if(match){
			let textvalue = match.textContent || match.innerHTML

			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
 }