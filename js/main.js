$(function(){
    let introtNum = $('#intro').offset().top;
    console.log(introtNum)

    let aboutNum = $('#about').offset().top;
    console.log(aboutNum)

    let proNum = $('#profile').offset().top;
    console.log(proNum)

    let contNum = $('#contants').offset().top;
    console.log(contNum)

    $('.inner li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)

        let target = $($(this).attr('href')).offset().top;
        console.log(target);
        $('body, html').animate({scrollTop:target},1000)
    })

    $('.inner li:eq(0) a').css({color:'#285CAD'});

    $('.inner li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)

        let target = $($(this).attr('href')).offset().top;
        console.log(target);
        $('body, html').animate({scrollTop:target},1000)
    })
    $(window).scroll(function(){
        let num = $(this).scrollTop()
        console.log(num)
        // 스크롤 했을때 위치
        $('.xy').text(num)


        if(num> 0 && num < introtNum){
            $('.inner li a').css({color:'#fff'})
            $('.inner li:eq(0) a').css({color:'#285CAD'})
        }

        if(num >= introtNum && num <= aboutNum){
            $('.inner li a').css({color:'#fff'})
            $('.inner li:eq(1) a').css({color:'#285CAD'})
        }

        if(num >= aboutNum && num <= proNum){
            $('.inner li a').css({color:'#fff'})
            $('.inner li:eq(2) a').css({color:'#285CAD'})
        }

        if(num >= proNum){
            $('.inner li a').css({color:'#fff'})
            $('.inner li:eq(3) a').css({color:'#285CAD'})
        }
    })
    $('.contants .img_list li a').lightBox({

        overlayBgColor:"#000", //cover
        overlayOpacity:0.9, //cover투명도
        imageLoading:"./images/lightbox-ico-loading.gif", //이미지로딩
        imageBtnClose:"./images/lightbox-btn-close.gif", //닫기버튼이미지
        imageBtnPrev:"./images/lightbox-btn-prev.gif", //이전버튼
        imageBtnNext:"./images/lightbox-btn-next.gif", //다음버튼
        containerResizeSpeed: 500,//모달팝업창 속도조절

        txtImage:"작품" // 작품
    })
    $('.contants_web .webimg_list li a').lightBox({

        overlayBgColor:"#000", //cover
        overlayOpacity:0.9, //cover투명도
        imageLoading:"./images/lightbox-ico-loading.gif", //이미지로딩
        imageBtnClose:"./images/lightbox-btn-close.gif", //닫기버튼이미지
        imageBtnPrev:"./images/lightbox-btn-prev.gif", //이전버튼
        imageBtnNext:"./images/lightbox-btn-next.gif", //다음버튼
        containerResizeSpeed: 500,//모달팝업창 속도조절

        txtImage:"작품" // 작품
    })
})