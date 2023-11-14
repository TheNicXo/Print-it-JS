const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const urls = [];
const tagLines = [];

const n = slides.length;
//console.log(n);

for (var i = 0; i < n; ++i){
	urls.push(slides[i].image);
	tagLines.push(slides[i].tagLine);
}
//console.log(urls);
//console.log(tagLines);


const urlpref = "./assets/images/slideshow/"; 
const url0 = urlpref + urls[0];
//console.log(url0);
let tagLine0 = tagLines[0]
//console.log(tagLine0);

const mainImage = document.createElement("img");
mainImage.src = url0;
mainImage.classList = "banner-img";
const para = document.createElement("p");
const inpara = document.createTextNode(tagLine0);
para.appendChild(inpara);
const banner = document.getElementById('banner');
banner.appendChild(mainImage);
banner.appendChild(para);
//console.log(banner.innerHTML);


const arrowleft = document.querySelector(".arrow_left");
//console.log(left);
const arrowright = document.querySelector(".arrow_right");
//console.log(right);


var L = 0;
var R = 0;

arrowleft.addEventListener('click', (e) =>{
	//alert("left arrow");
	console.log(e.button); //output=0 => clic gauche
	--L;
})

arrowright.addEventListener('click', (e) =>{
	//alert("right arrow");
	console.log(e.button); //output=0 => clic gauche
	++R;
})


const dotsdiv = document.createElement("div");
dotsdiv.classList = "dots";
banner.appendChild(dotsdiv);

for (i = 0; i < n; ++i){
	const dotspan = document.createElement("span");
	dotsdiv.appendChild(dotspan);
	dotspan.classList = "dot";
}


