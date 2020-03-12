window.addEventListener('scroll', function(){
	let menuArea = document.getElementById('menu-area');
	let logoImage = document.querySelector('#menu-area img');

	if (window.pageYOffset > 0) {
		menuArea.classList.add('cus-nav');
		menuArea.classList.add('txt-white');
		menuArea.classList.add('adjust-ul');
		menuArea.classList.add('adjust-img');
	} else {
		menuArea.classList.remove('cus-nav');
		menuArea.classList.remove('txt-white');
		menuArea.classList.remove('adjust-ul');
		menuArea.classList.remove('adjust-img');
	}
})

let x = document.getElementById('login');
		let y = document.getElementById('register');
		let z = document.getElementById('btn');

		function register() {
			x.style.left = "-400px";
			y.style.left = "50px";
			z.style.left = "110px";
		}
		function login() {
			x.style.left = "50px";
			y.style.left = "450px";
			z.style.left = "0px";
		}


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("openbtn").style.display = "inline-block";
}