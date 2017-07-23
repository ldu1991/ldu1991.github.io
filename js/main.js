jQuery(document).ready(function($){

/* ---------------------- owl-carousel ---------------------- */
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        dots: false,
        smartSpeed: 800,
        autoHeight: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        callbacks: true,
        responsiveClass:true,
        responsive:{
            0:{
                nav: false
            },
            768:{
                nav: true
            }
        }
    });

    $(".owl-carousel").on('changed.owl.carousel', function(event) {
        var current = event.item.index - 2,
            a = $('a.hash-tag'),
            href = a.eq(current).attr('href');
        a.removeClass('active');
        if(location.hash == href) {
            $('a.hash-tag[href="'+location.hash+'"]').addClass('active');
        }
    });

    if(location.hash != '') {
        var a = $('a.hash-tag');
        a.removeClass('active');
        $('a.hash-tag[href="'+location.hash+'"]').addClass('active');
    }
/* -------------------- End owl-carousel -------------------- */

/* ----------------------- Menu sticky ---------------------- */
    var menu = $("#sticky");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 120 && menu.hasClass("default") ){
            menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 120 && menu.hasClass("fixed")) {
            menu.removeClass("fixed").addClass("default");
        }
    });
/* --------------------- End Menu sticky -------------------- */

/* ----------------------- Menu Mobile ---------------------- */
    $('.mobile').append('<div class="mobile-button"></div><div class="mobile-menu"></div><div class="mobile-search"></div>');

    $('#menu').clone().removeClass().addClass('mobmenu').appendTo('.mobile-menu');
    $('.mobile-button').append('<span id="open-mobmenu" class="open-menu"></span>');
    $('#open-mobmenu').on('click',function(){
        if($(this).hasClass("open-menu")) {
            $('.mobmenu').show(500);
            $(this).removeClass().addClass('close-menu');
        } else {
            $('.mobmenu').hide(500);
            $(this).removeClass().addClass('open-menu');
        };
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mobile-menu, #open-mobmenu").length) {
            $('.mobmenu').hide(500);
            $('#open-mobmenu').removeClass().addClass('open-menu');
        }
        e.stopPropagation();
    });
/* --------------------- End Menu Mobile -------------------- */

/* ---------------------- Search Mobile --------------------- */
    $('#search').clone(true, true).addClass('mobsearch').appendTo('.mobile-search');
    $('.mobile-button').append('<span id="open-mobsearch" class="open-search"></span>');
    $('#open-mobsearch').on('click',function(){
        if($(this).hasClass("open-search")) {
            $('.mobsearch').show(300);
            $(this).removeClass().addClass('close-search');
        } else {
            $('.mobsearch').hide(300);
            $(this).removeClass().addClass('open-search');
        };
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mobile-search, #open-mobsearch").length) {
            $('.mobsearch').hide(300);
            $('#open-mobsearch').removeClass().addClass('open-search');
        }
        e.stopPropagation();
    });
/* -------------------- End Search Mobile ------------------- */

/* --------------------- Sidebar Footer --------------------- */
    function accordionSidebar() {
        var header = $('.clone-sidebar .title-sidebar'),
            active_class = 'state-active',
            block_ac = '.sidebar-item';

        header.append('<span class="header-icon"></span>');
        header.removeClass(active_class).next(block_ac).slideUp(300);
        header.click(function(){
            if(!$(this).hasClass(active_class)){
            	$(this).addClass(active_class);
            	$(this).next(block_ac).slideDown(300);
            } else {
            	$(this).removeClass(active_class).next(block_ac).slideUp(300);
            }
        });
    };

    var fnlogic = false;
    function footerResize() {
        if( $(window).width() <= 750 && !$('.sidebar-block').is('.clone-sidebar') && !fnlogic ) {
            $('.sidebar-block').clone(true, true).addClass('clone-sidebar').appendTo('.mobfooter');
            accordionSidebar();
            fnlogic = true;
        } else if( $(window).width() > 750 && $('.sidebar-block').is('.clone-sidebar') && fnlogic ) {
            $('.clone-sidebar').remove();
            fnlogic = false;
        };
    };
    footerResize();

    $(window).resize(function() {
        footerResize();
        //$( ".mobfooter" ).accordion( "refresh" ); // jQuery UI Accordion refresh
    });

    // jQuery UI Accordion
/*    var icons = {
      header: "icon-arrow-e",
      activeHeader: "icon-arrow-s"
    };
    $( ".mobfooter" ).accordion({
        header: '.title-sidebar',
        icons: icons
    });*/


/* ------------------- End Sidebar Footer ------------------- */

/* --------------- Deleting placeholder focus --------------- */
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
/* ------------- End Deleting placeholder focus ------------- */


});