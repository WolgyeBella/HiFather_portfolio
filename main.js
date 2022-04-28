
            $(function(){
                // 기존 버튼형 슬라이더
$('.mainslide > .dotBox > div').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find(' > .mainimg > div.active');
    
    var $post = $slider.find(' > .mainimg > div').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
});

// 좌/우 버튼 추가 슬라이더
$('.mainslide > .sidebtn > div').click(function(){
    var $this = $(this);
    var $slider = $this.closest('.mainslide');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find(' > .dotBox > div.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .dotBox > div:last-child');
        }
        else {
            $post = $slider.find(' > .dotBox > div:first-child');
        }
    };
    
    $post.click();
});

setInterval(function(){
    $('.mainslide > .sidebtn > div').eq(1).click();
}, 5000);

                // 네비게이션
                $('header > .box4 > .nav > .menu > li ').mouseover(function(){
                    $(this).find('.submenu1').stop().slideDown();
                });
                $('header > .box4 > .nav > .menu > li ').mouseout(function(){
                    $(this).find('.submenu1').stop().slideUp();
                });

                // $('header > .box4 > .nav > .menu > li ').mouseover(function(){
                //     $(this).find('.submenu1').addClass('active');
                // });
                // $('header > .box4 > .nav > .menu > li ').mouseout(function(){
                //     $(this).find('.submenu1').removeClass('active');
                // });

                  // 사이드 메뉴
                $('#btnHamburger').on('click',function(){
                    $('header > .box4 > .infoBox').toggleClass('active');
                    if($('header > .box4 > .infoBox').hasClass('active')){
                        $('header > .box4 > .infoBox .side').css('height','635px');
                        $('header > .box4 > .infoBox .side').css('opacity','1');
                    }else{
                        $('header > .box4 > .infoBox .side').css('height','0px');
                        $('header > .box4 > .infoBox .side').css('opacity','0.3');
                    }
                });

                // 슬라이드이미지버튼
                $('main > .mainslide').mouseover(function(){
                    $('main > .mainslide > .sidebtn').addClass('up');
                });
                $('main > .mainslide').mouseout(function(){
                    $('main > .mainslide > .sidebtn').removeClass('up');
                });


                // 섹션1 탭메뉴
                $('.section1 .btnBox1 button').on('click',function(){
                    const num = $('.section1 .btnBox1 button').index($(this));

                    $('.section1 .btnBox1 button').removeClass('on');
                    $('.section1 .tabBox').removeClass('on');

                    $('.section1 .btnBox1 button:eq('+num+')').addClass('on');
                    $('.section1 .tabBox:eq('+num+')').addClass('on');
                });

                // 섹션2 탭메뉴
                $('.section2 .btnBox1 button').on('click',function(){
                    const num = $('.section2 .btnBox1 button').index($(this));

                    $('.section2 .btnBox1 button').removeClass('on');
                    $('.section2 .tabBox').removeClass('on');

                    $('.section2 .btnBox1 button:eq('+num+')').addClass('on');
                    $('.section2 .tabBox:eq('+num+')').addClass('on');
                });

                // 메인 상품이미지 
                $('.itemBox').mouseover(function(){
                    $(this).find('.hover').addClass('on');
                    $(this).find('.img').addClass('on');
                });
                $('.itemBox').mouseout(function(){
                    $(this).find('.hover').removeClass('on');
                    $(this).find('.img').removeClass('on');
                });
            });