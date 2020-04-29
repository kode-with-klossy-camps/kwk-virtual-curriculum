$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  var currentCamp = currentPath.split('/')[2];
  var campPath = `/${currentCamp}/`

  if (linkPath.includes(currentCamp)) {
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/kwk-curriculum-site/") {
    $('.navbar-navigation--links a').removeClass('active-link');
  }
});

var allSpicyTitles = document.querySelectorAll(".spicy-click");

allSpicyTitles.forEach(function(title) {

  title.addEventListener("click", function(e) {
    var content = e.target.nextSibling.nextSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

});


var allDayLabels = document.querySelectorAll(".day-click");

allDayLabels.forEach(function(title) {

  title.addEventListener("click", function(e) {
    var content = e.target.nextSibling.nextSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });

});
