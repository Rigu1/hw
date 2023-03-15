let wheelUp = function () {
  $("header").css("display", "flex");
};

let wheelDown = function () {
  $("header").css("display", "none");
};

let scrollDefault = function () {
  $("article").css("display", "none");
};

let scrollEnd = function () {
  $("article").css("display", "block");
};

let pushLight = function () {
  $("#lightMode").css("display", "none");
  $("#dackMode").css("display", "block");
  $("#search, #home, article, .list-button").css("filter", "invert(100%)");
  $("body, header, .list").css("background-color", "#000");
  $("h2, h3 ,h4, p, ul, ol, li, input").css("color", "#fff");
};

let pushDack = function () {
  $("#dackMode").css("display", "none");
  $("#lightMode").css("display", "block");
  $("#search, #home, article, .list-button").css("filter", "");
  $("body, header, .list").css("background-color", "#fff");
  $("h2, h3 ,h4, p, ul, ol, li, input").css("color", "#000");
};

let listUp = function () {
  $(".list").css("display", "flex");
};

let listDown = function () {
  $(".list").css("display", "none");
};

$(document).ready(function () {
  $("body").on("mousewheel", function (status) {
    let wheel = status.originalEvent.wheelDelta;

    if (wheel > 0) {
      // 스크롤을 올릴 때
      $("header").fadeIn(400, function () {
        wheelUp();
      });
    } else {
      // 스크롤을 내릴 때
      $("header").fadeOut(400, function () {
        wheelDown();
      });
    }
  });
});

$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  if (scrollValue >= 900) {
    $("article").fadeIn(500, function () {
      scrollEnd();
    });
  } else {
    $("article").fadeOut(500, function () {
      scrollDefault();
    });
  }
  if (scrollValue >= 100) {
    listDown();
  }
});

$(document).ready(function () {
  $("#lightMode").click(function () {
    $(this).fadeOut(500, function () {
      pushLight();
    });
  });
  $("#dackMode").click(function () {
    $(this).fadeOut(500, function () {
      pushDack();
    });
  });
});

$(document).ready(function () {
  $(".top").click(function () {
    $("header").fadeIn(1000, function(){
      wheelUp();
    });
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

$(document).ready(function () {
  $(".list-container").on("mouseleave", function () {
    $(".list").fadeOut(500, function () {
      listDown();
    });
  });
});

$(document).ready(function () {
  $(".list-container").on("mouseover", function () {
    $(".list").fadeIn(500, function () {
      listUp();
    });
  });
});

$(document).ready(function () {
  $("h3").on("mouseover", function (){
    $(this).css('color', 'aquamarine');
  })
  $("h3").on("mouseleave", function (){
    let textColor = $("p").css('color')
    $(this).css('color', textColor);
  })
})
