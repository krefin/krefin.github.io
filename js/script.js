// event pada saat di klik
$('.page-scroll').on('click', function(e){
    // Ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element ysb
    var elemenTujuan = $(tujuan);
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeOutBounce');
    e.preventDefault();
});

// About
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

// Parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll/1.2 +'%)'
    });

    // Portfolio
    if(wScroll > $('.portfolio').offset().top -250) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * (i+1));
        });
        
    }
});




$(document).on("click", '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose : true
    });
  });




// LIGHTBOX
// const materialbox = document.querySelectorAll('.materialboxed');
//      M.Materialbox.init(materialbox).onOpenStart;
