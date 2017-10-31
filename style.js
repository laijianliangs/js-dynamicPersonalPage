portfolio1.onclick = function () {
  portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function () {
  portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
  portfolioBar.className = 'bar state-3'
}

$(function (){
  $(window).scroll(function (){
      var scroll_top = $(window).scrollTop();
      var top_nav = $(".topNavBar");
      var top_nav_a = $(".topNavBar ul a");
      if (scroll_top > 80){
          top_nav.removeClass();
          top_nav_a.removeClass();
          top_nav.addClass("topNavBar top-nav-scroll");
          top_nav_a.addClass("scroll");
      } else {
          top_nav.removeClass();
          top_nav_a.removeClass();
          top_nav.addClass("topNavBar top-nav-noscroll");
          top_nav_a.addClass("noscroll");
      }
  })
});