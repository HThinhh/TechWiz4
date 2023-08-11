
const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("product-list")
	const product = document.querySelectorAll(".product")
	const productname = document.getElementsByTagName("p")
	let d=0;
	for(var i = 0; i < productname.length; i++){
		let match = product[i].getElementsByTagName("p")[0];

		if(match){
			let textvalue = match.textContent || match.innerHTML
			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display = "";
				d++;
			}else{
				product[i].style.display = "none";
			}
		}
		document.getElementById("sl").innerHTML=d;
	}
 }