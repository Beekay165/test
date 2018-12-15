/*

	Template Name: Eventor - Conference & Event HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Eventor - Conference & Event HTML Template
	Version: 1.0

	1. Mobile Menu
	2. Main Slideshow
	3. Gallery popup
	4. Counter
	5. Contact form
	6. Back to top
  
*/


jQuery(function ($) {
	"use strict";


	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function () {
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  Event counter 
	/* -----------------------------------------------------------*/

	if ($('.countdown').length > 0) {
		$(".countdown").jCounter({
			date: '5 January 2019 09:30:00',
			fallback: function () { console.log("count finished!") }
		});
	}

	/* ----------------------------------------------------------- */
	/*  Event Map 
	/* -----------------------------------------------------------*/

	if ($('#map').length > 0) {

		var eventmap = { lat: 53.349349, lng: -6.260721 };

		$('#map')
			.gmap3({
				zoom: 13,
				center: eventmap,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			})

			.marker({
				position: eventmap
			})

			.infowindow({
				position: eventmap,
				content: "An Post, General Post Office"
			})

			.then(function (infowindow) {
				var map = this.get(0);
				var marker = this.get(1);
				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});
			});
	}




	/* ----------------------------------------------------------- */
	/*  Main slideshow
	/* ----------------------------------------------------------- */

	$('#main-slide').carousel({
		pause: true,
		interval: 100000,
	});


	/* ----------------------------------------------------------- */
	/*  Gallery popup
	/* ----------------------------------------------------------- */

	$(document).ready(function () {

		$(".gallery-popup").colorbox({ rel: 'gallery-popup', transition: "fade", innerHeight: "700" });

		$(".popup").colorbox({ iframe: true, innerWidth: 650, innerHeight: 450 });

	});



	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

	$('.counterUp').counterUp({
		delay: 10,
		time: 1000
	});



	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	//You can call the "event" variable whatever you wish
	// $("#contact-form").click(function (event) {
	// 	//Prevent the default action of the event: in this case, prevent form from submitting data 
	// 	event.preventDefault();
	// 	//Other code for click event here
	// });

	// Get all forms

	var simpleValidation = function () {
		console.log('simple validation')

		var validateForm = $('#contact-form');

		// Gets all forms to Validate
		validateForm.each(function () {
			// Defining basic variables, bro
			var validateForm = $(this);
			var validate = {};
			var validateThis = $(this).find('.validate');
			var validatingLength = $(this).find('.validate').length;
			var submitBtn = $(this).find('.submit');

			// For Loop Getting Elements to Validate
			for (var i = 1; i <= validatingLength; i++) {
				// Adding Inputs to object, false for default
				validate['input' + i] = false;
			}

			$('.validate').blur(function () {
				console.log(this);
				var index = $(this).prevAll().length + 1;
				var validateThisVal = $(this).val();
				var validateThisType = $(this).attr('type');
				console.log(validate)
				// Checks if input type is email
				if (validateThisType === "email") {

					// Email regex
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					// Condition to see if Email exists
					if (!validateThisVal.match(re)) {
						$(this).addClass('not-valid');
						$(this).removeClass('is-valid');
						return validate['input' + index] = false;
					} else {
						$(this).addClass('is-valid');
						$(this).removeClass('not-valid');
						return validate['input' + index] = true;
					}
				} else {
					// Makes sure input is filled out
					if (validateThisVal == "") {
						$(this).addClass('not-valid');
						$(this).removeClass('is-valid');
						return validate['input' + index] = false;
					} else {
						$(this).addClass('is-valid');
						$(this).removeClass('not-valid');
						return validate['input' + index] = true;
					}
				}
			});

			// $('.validate').click(function () {
			// 	console.log('click');
			// 	//setup before functions
			// 	var typingTimer;                //timer identifier
			// 	var doneTypingInterval = 5000;  //time in ms, 5 second for example
			// 	var field = this;

			// 	//on keyup, start the countdown
			// 	$(this).on('keyup', function () {
			// 		// console.log('keyup');
			// 		clearTimeout(typingTimer);
			// 		typingTimer = setTimeout(doneTyping, doneTypingInterval);
			// 	});

			// 	//on keydown, clear the countdown 
			// 	$(this).on('keydown', function () {
			// 		// console.log('keydown');
			// 		clearTimeout(typingTimer);
			// 	});

			// 	doneTyping(this, validate);
			// });

			function doneTyping(input, validate) {
				console.log('doneTyping');
				console.log(input)
				console.log(validate)
				var index = $(input).prevAll().length + 1;
				var validateThisVal = $(input).val();
				var validateThisType = $(input).attr('type');

				// Checks if input type is email
				if (validateThisType === "email") {

					// Email regex
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					// Condition to see if Email exists
					if (!validateThisVal.match(re)) {
						$(input).addClass('not-valid');
						$(input).removeClass('is-valid');
						return validate['input' + index] = false;
					} else {
						$(input).addClass('is-valid');
						$(input).removeClass('not-valid');
						return validate['input' + index] = true;
					}
				} else {
					// Makes sure input is filled out
					if (validateThisVal == "") {
						$(input).addClass('not-valid');
						$(input).removeClass('is-valid');
						return validate['input' + index] = false;
					} else {
						$(input).addClass('is-valid');
						$(input).removeClass('not-valid');
						return validate['input' + index] = true;
					}
				}
			}


			validateForm.submit(function (event) {
				// Prevents Default
				event.preventDefault();

				// Logging form errors
				var falseCtn = 0;
				for (var i = 1; i <= validatingLength; i++) {
					if (validate['input' + i] == false) {
						falseCtn++;
					}
				}

				// Checking if any falses exist
				if (falseCtn > 0) {
					$(this).unbind('submit').submit();
					$(this).click();
				} else {
				}

				return false;
			});

		});

	};

	simpleValidation()


	// $('#contact-form').submit(function () {
	// 	//Prevent the default action of the event: in this case, prevent form from submitting data 
	// 	// e.preventDefault();
	// 	console.log('submit');
	// 	var $form = $(this),
	// 		$error = $form.find('.error-container'),
	// 		action = $form.attr('action');

	// 	$error.slideUp(750, function () {
	// 		console.log('slide');
	// 		$error.hide();

	// 		var $name = $form.find('.form-control-name'),
	// 			$email = $form.find('.form-control-email'),
	// 			$subject = $form.find('.form-control-subject'),
	// 			$message = $form.find('.form-control-message');

	// 		$.post(action, {
	// 			name: $name.val(),
	// 			email: $email.val(),
	// 			subject: $subject.val(),
	// 			message: $message.val()
	// 		},
	// 			function (data) {
	// 				console.log('data')
	// 				$error.html(data);
	// 				$error.slideDown('slow');

	// 				if (data.match('success') != null) {
	// 					$name.val('');
	// 					$email.val('');
	// 					$subject.val('');
	// 					$message.val('');
	// 				}
	// 			}
	// 		);

	// 	});

	// 	return false;

	// });


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#back-to-top').on('click', function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('#back-to-top').tooltip('hide');

	// When the user scrolls the page, execute myFunction 
	window.onscroll = function () { myFunction() };

	// Get the header
	var header = document.getElementById("header");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		console.log('myfunc')
		if (window.pageYOffset > sticky) {
			header.classList.remove('header-transparent')
			header.classList.add("header-dark");
			header.classList.add("navbar-fixed-top");
			header.classList.add("fadeInDown");
			header.classList.add("animated");
		} else {
			header.classList.remove("navbar-fixed-top");
			header.classList.add('header-transparent')
			header.classList.remove("header-dark");
			header.classList.remove("fadeInDown");
			header.classList.remove("animated");
		}
	}
});