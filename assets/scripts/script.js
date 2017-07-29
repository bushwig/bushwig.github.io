$(document).ready(function() {

    $(window).scroll(function(e){
      parallax();
    });

    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.parallax').css('top',-(scrolled*0.15)+'px');
    }

    var current = location.pathname;
    $('#menu li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    });

    if (current == '/info.html') {
        $('#menu li img').attr('src','https://s3.amazonaws.com/ijadams/bushwig/lil-peace-bold.png');
    }

});
