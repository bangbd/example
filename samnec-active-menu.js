
$ = jQuery;
$(window).scroll(function() {
  $('.view-danh-muc').each(function() {
    var win_top = $(window).scrollTop();
    var height = $(this).height();
    var top_1 = $(this).offset().top - 100;
    var top_2 = top_1 + height;

    var class_text = $(this).attr('class');
    if( win_top >= top_1 && win_top <= top_2 ) {
      var title = $('.title', $(this)).attr('data-name');
      $('.fixed-menu li:not(.'+title+')').removeClass('active');
      $('.fixed-menu li.' + title).addClass('active');
    }
  });
});
