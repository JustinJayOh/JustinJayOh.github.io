
var brandLink = document.getElementById("brandLink");
var homeLink = document.getElementById("homeLink");
var aboutLink = document.getElementById("aboutLink");
var contactLink = document.getElementById("contactLink");
var links = document.querySelectorAll(".links");
var myContent = document.getElementById("myContent");
var currentPage = 0;

init();

function init() {
	initEventListeners();
}

function initEventListeners() {
	// Click Event Listener for Home Page
brandLink.addEventListener("click", changeToHome);
homeLink.addEventListener("click", changeToHome);

// Click Event Handler for About Page
aboutLink.addEventListener("click", changeToAbout);

// Click Event Handler for Contact Page
contactLink.addEventListener("click", changeToContact);
}

// Changes innerHTML of Content to Home (Page 0)
function changeToHome() {
	if (currentPage === 0) {
		return;
	}
	$("#myContent").fadeOut(1000, function() {
		myContent.innerHTML = homeHtml;
		$("#myContent").fadeIn(1000, function() {
			currentPage = 0;
		});
	});
}
// Changes innerHTML of Content to About (Page 1)
function changeToAbout() {
	if (currentPage === 1) {
			return;
		}
	$("#myContent").fadeOut(1000, function() {
		myContent.innerHTML = aboutHtml;
		$("#myContent").fadeIn(1000, function() {
			currentPage = 1;
		});
	});
}
// Changes innerHTML of Content to Contact (Page 2)
function changeToContact() {
	if (currentPage === 2) {
		return;
	}
	$("#myContent").fadeOut(1000, function() {
		myContent.innerHTML = contactHtml;
		$("#myContent").fadeIn(1000, function() {
			currentPage = 2;
		});
	});
}

// HTML Home
var homeHtml = 
	"<div id='myContent' class='container'>" +
		"<div class='row'>" +
			"<div class='col-lg-12'>" +
				"<div id='content'>" +
					"<h1 class='titleContent'>Justin Oh</h1>" +
					"<h4 class='titleContent'>Software Engineer: Class of 2020</h4>" +
					"<hr>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

// HTML About
var aboutHtml = 
	"<div id='myContent' class='container'>" +
		"<div class='row'>" +
			"<div class='col-lg-12'>" +
				"<div id='contentOther'>" +
					"<h1 class='titleContent'>About Me</h1>" +
					"<hr>" +
				"</div>" +
			"</div>" +
		"</div>" +
		"<div class='row'>" +
			"<p class='pAbout'>Hi there, my name is Justin Oh and I am a computer science student " +
			"at Auburn University Class of 2020. " +
			"My professional interest is to develop highly scalable full stack applications. " +
			"Previously, I have worked as an intern Firmware Engineer at Western Digital " + 
			"where I played a critical role in porting legacy tests suites to a current test framework " +
			"in a Linux environment.</p>" +

			"<p class='pAbout'>My current experience is with Java, Python, C#, .NET, HTML, CSS, Javascript, and Node.js</p>" + 

			"<p class='pAbout'><span class='universityName'>Auburn University</span>" +
			"<br>" +
			"Bachelors of Computer Science - Class of 2020" +
			"<br>" +
			"GPA - 4.0/4.0, Dean's List: All Semesters" +
			"<br><br>" + 
			"<span class='universityName'>University of California, Irvine</span>" +
			"<br>" +
			"Bachelors of Science in Chemistry - Class of 2016" +
		"</div>" +
	"</div>";

// HTML Contact
var contactHtml = 
	"<div id='myContent' class='container'>" +
		"<div class='row'>" +
			"<div class='col-lg-12'>" +
				"<div id='contentOther'>" +
					"<h1 class='titleContent'>Contact Me</h1>" +
					"<hr>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" +

	"<div class='container'>" +
		"<div class='row'>" +
			"<div class='col-sm-6 col-md-4'>" +
				"<div class='thumbnail'>" +
					"<a href='mailto:jjoh1993@gmail.com'><img class='contactImg' src='https://image.flaticon.com/icons/svg/561/561127.svg'></a>" +
					"<div class='caption'>" +
						"<h3>Email</h3>" +
						"<p>jjoh1993@gmail.com</p>" + 
					"</div>" +
				"</div>" +
			"</div>" +
			"<div class='col-sm-6 col-md-4'>" +
				"<div class='thumbnail'>" +
					"<a href='#'><img src='https://image.flaticon.com/icons/svg/34/34405.svg'></a>" +
					"<div class='caption'>" +
						"<h3>LinkedIn</h3>" +
						"<p>Not Available Yet</p>" +
					"</div>" +
				"</div>" +
			"</div>" +
			"<div class='col-sm-6 col-md-4'>" +
				"<div class='thumbnail'>" +
					"<a href='http://github.com/justinJayOh'><img src='https://image.flaticon.com/icons/svg/25/25231.svg'></a>" +
					"<div class='caption'>" +
						"<h3>Github</h3>" +
						"<p>/JustinJayOh</p>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";
