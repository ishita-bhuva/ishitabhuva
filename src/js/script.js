

// $(document).ready(function() {
//     $('.navbar-toggler').on('click', function(e) {
//         if ($(this).hasClass('ib-close')) {
//             $('body').addClass('ib-menu-close');
//             $('.ib-menu').addClass('ib-show');
//             setTimeout(() => {
//                 $('body').removeClass('ib-menu-open');
//                 $('body').removeClass('ib-menu-close');
//                 $(this).removeClass('ib-close');
//             }, 1400);
//         } else {
//             $('body').addClass('ib-menu-open');
//             setTimeout(() => {
//                 $(this).addClass('ib-close');
//             }, 1000);
//         }
//     });
// });

function hideLoader() {
    $('.ib-loader').fadeOut(600);
}

function init() {
    hideLoader();
}
window.onload = init;


$(function (){
	
	$(window).mousemove(function(event) {
		$('#mouse-pointer').css({
			'top' : event.pageY + 'px',
			'left' : event.pageX + 'px'
		});
	});

});