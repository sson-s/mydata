$(function(){
  // header
  $('.menu').mouseenter(function(){
    $('.header-bg, .header-bg2').show();
    $('.menu, .submenu').fadeIn(200);
  })
  $('.header-bg').mouseleave(function(){
    $('.header-bg, .header-bg2').hide();
    $('.submenu').fadeOut(200);
  })

  $(window).scroll(function(){
    if($(this).scrollTop() >= 350){
      $('.header-bg, .header-bg2').fadeOut();
    }
  })
 



  // banner
  var banner3 = new Swiper(".banner3", {
    slidesPerView: 5,
    loop: true,
    clickable: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".p-pagination3",
      type: "progressbar", 
    },
    navigation: {
      nextEl: ".p-b-next",
      prevEl: ".p-b-prev",
    },
  });
  banner3.autoplay.stop()

  var pagingSwiper = new Swiper(".banner3", {
    slidesPerView: 5,
    loop: true,
    clickable: true,
    // autoplay: true, 
    // autoplay: {
    //   // delay: 2000,
    //   disableOnInteraction: false,
    // },
    
  pagination: {
    el: ".p-pagination3_n",
    type: "fraction",
  },
});

banner3.controller.control = pagingSwiper;

  // 재생 -> 일시정지
  // const b_back = $('.p-b-prev')
  // const b_stop = $('.stop')
  // const b_forward = $('.p-b-next')
  const b_play = $('.play')

  b_play.click(function(){   // bannerplay 클릭했을 때 할일
    $(this).toggleClass('b-p-start')
    // bannerplay 가 toggleClass banner-play-start
    let temp = $(this).hasClass('b-p-start')
    if(temp){
      banner3.autoplay.start()
      // 슬라이드 작동 안함
      
    }else {
      // 슬라이드 작동
      banner3.autoplay.stop()
    }
  })



  // tap
  $('.n-top-line > li').click(function(e){
    e.preventDefault()
    $('.n-top-line > li').removeClass('on')
    $(this).addClass('on')

    $('.n-top-line > li>a').removeClass('c')
    $(this).find('a').addClass('c')

    $('li.info').hide()

    let idx = $(this).index()
    $('li.info').eq(idx).show()
  })
  $('li.info').eq(0).trigger('click')
  $('.n-tap').eq(0).trigger('click')


  // gotop
  $(window).scroll(function(){
    if($(this).scrollTop() >= 300){
      $('.top_btn').fadeIn();
    }else{
      $('.top_btn').fadeOut();
    }
  })
  $('.top_btn').click(function(e){
    e.preventDefault()
      $('html, body').stop().animate({
        scrollTop : 0
      }, 400);
  })
})



 
  

