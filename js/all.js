$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 1000,
        autoplay:{
          delay: 2000,
        },
        effect: "coverflow",
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },        
      });
/* 回到頂部按鈕---------------------------------------------------------------------*/
    $('.slide-btn1 a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({scrollTop : 0},700);
    });
    $('.slide-btn2 a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({scrollTop : $('.content').offset().top},700)
    });
    $('.slide-btn3 a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({scrollTop : $('.footer').offset().top},700);
    });
});
