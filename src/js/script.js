
/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }	
       
              
})(jQuery);

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
    $('.jh-loader').fadeOut(1000);
}

function init() {
    hideLoader();
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;