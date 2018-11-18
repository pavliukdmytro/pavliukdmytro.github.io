$(document).ready(function(){
    $('#slider').slick({    
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
//   centerMode: true,
// //   centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

    // adaptive menu menu_inner
    var menu_inner = document.getElementById('nav_menu');
    var menu_btn = document.getElementById('menu_btn');
    var menu_item = document.querySelectorAll('.menu_item');
    var cancel_btn = document.getElementById('cancel_btn');


    menu_btn.addEventListener('click', function() {

      var openMenu = function() {
        for(var i = 0; i < menu_item.length; i++) {
          menu_item[i].classList.remove('item_none');
          menu_item[i].classList.add('item_on');
          cancel_btn.style.display = 'block';
          menu_inner.removeEventListener('animationend', openMenu)
        }
      }

      menu_inner.style.display = 'flex';
      menu_inner.classList.add('menu_inner');
      
      menu_inner.addEventListener('animationend', openMenu);
    });

    cancel_btn.addEventListener('click', function() {

      var menuOff = function() {
        menu_inner.classList.remove('menu_none');
        menu_inner.style.display = 'none';
        menu_inner.classList.remove('displayFlex');
        menu_inner.removeEventListener('animationend', menuOff);
      }
      for(var i = 0; i < menu_item.length; i++) {
        menu_item[i].classList.remove('item_on');
        menu_item[i].classList.add('item_none');
        cancel_btn.style.display = 'none';
      };
      menu_inner.classList.add('menu_none');
      menu_inner.classList.remove('menu_inner');
      
      menu_inner.addEventListener('animationend', menuOff);
    });

    window.onresize = function() {

      if(window.innerWidth < 768){
        menu_inner.style.display = 'none';
        for(var i = 0; i < menu_item.length; i++) {
          menu_item[i].classList.remove('item_on');
          menu_item[i].classList.add('item_none');
          cancel_btn.style.display = 'none';
        };
        menu_inner.classList.add('menu_none');
        menu_inner.classList.remove('menu_inner');

       menu_inner.classList.remove('menu_none');
        menu_inner.style.display = 'none';
        menu_inner.classList.remove('displayFlex');
      }else {
        menu_inner.style.display = 'flex';
      }
    }

    // fansybox
    $(".grouped_elements").fancybox({
      'transitionIn'	:	'fade',
      'transitionOut'	:	'fade',
      'speedIn'		:	600, 
      'speedOut'		:	200, 
      'overlayShow'	:	true,
      'padding': 20,
      'overlayOpacity': 0.5,
      'cyclic' : true,

    });
    
  });

