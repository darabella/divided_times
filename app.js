// Homework: reduce to under 30 lines of code

$(document).ready(function() {


  //  international
  $(".international").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //REmove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").show();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
      //Slide down content
      $("#slide-down").slideDown();
      // Remove class of active from any preexisting nav items
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
      // Show only the international section
    }
  });

  //  politics
  $(".politics").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //Remove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").hide();
      $("#politics-drop").show();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
      //Slide down content
      $("#slide-down").slideDown();
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
    }
  });

  //  business
  $(".business").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //Remove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").show();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
      //Slide down content
      $("#slide-down").slideDown();
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
    }
  });

  //  technology
  $(".technology").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //Remove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").show();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
      //Slide down content
      $("#slide-down").slideDown();
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
    }
  });

  //  culture
  $(".culture").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //Remove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").show();
      $("#blogs-drop").hide();
      //Slide down content
      $("#slide-down").slideDown();
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
    }
  });

  //  blogs
  $(".blogs").on("click", function(event) {
    // Stop link from trying to navigate away
    event.preventDefault();

    if ($(this).hasClass("active")) {
      //Slide out of view
      //Remove class of active
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      //Hide/show appropriate content
      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").show();
      //Slide down content
      $("#slide-down").slideDown();
      $("#primary-nav li").removeClass("active");
      //Add class of active
      $(this).addClass("active");
    }
  });

  // $("#slide-down").slideToggle(1000, function () {

  // $(".international").addClass("active");
  // $(".drop").css("display:none");
  // });



  //  get the nav to display when any of the links are clicked and add class of "active" to parent li element
  // $(".politics").on("click", function() {
  //   $("#international-drop").hide();
  //   $("#politics-drop").show();
  //   $("#business-drop").hide();
  //   $("#technology-drop").hide();
  //   $("#culture-drop").hide();
  //   $("#blogs-drop").hide();
  //   $("#slide-down").slideToggle(1000, function () {
  // $(this).addClass("active");
  // $(".politics").addClass("active");
  // $(".drop").css("display:none");
  // });
  // });
})
