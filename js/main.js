    $(function () {

      $('.hamburger').on('click', function() {
      
        if ($('header').hasClass('open')) {
          
          $('header').removeClass('open');
    
        } else {
          
          $('header').addClass('open');
        }
      });
    
      $("nav").on("click", function() {
        $("header").removeClass("open");
      });
    
      $("nav a").on("click", function() {
        $("header").removeClass("open")
      });



      $('a[href^="#"]').click(function () {

        let href = $(this).attr("href");
        
        let target = $(href == "#" || href == "" ? "html" : href);
        
        let position = target.offset().top;
        
        $("html, body").animate({ scrollTop: position }, 600, "swing");
  
        return false; 
      });
    
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 700,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        centerMode:true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
              arrows:false,
              centerMode:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
              arrows:false,
              centerMode:true,
            }
          },
          
        ]
      });

      function PageTopCheck(){
        var winScrollTop = $(this).scrollTop();
        var secondTop =  $("#area").offset().top - 150; //#area-2の上から150pxの位置まで来たら
        if(winScrollTop >= secondTop){
        $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
        $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
      } else {//元に戻ったら
        $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
        $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
      }
    
    }
    
    //クリックした際の動き
    $('.scroll-top a').click(function () {
      var elmHash = $(this).attr('href'); //hrefの内容を取得
      if (elmHash == "#area") {//もし、リンク先のhref の後が#area-2の場合
        var pos = $(elmHash).offset().top;
        $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
      }else{
        $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
      }
        return false;//リンク自体の無効化
    });
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
      PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
    });
    
    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
      PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
    });


  });