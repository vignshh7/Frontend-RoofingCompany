$(document).ready(function() {
  $(".hero,.text-section").animate({
    top: 0,
    opacity: 1
  }, 2000);

  $(".qform").animate({
    left: -100,
    opacity: 1
  }, 2200);
});

function animateCount($el) {
  let target = +$el.data('target');
  $({ countNum: 0 }).animate({ countNum: target }, {
    duration: 1500,
    easing: 'swing',
    step: function() {
      $el.text(Math.floor(this.countNum));
    },
    complete: function() {
      $el.text(target);
    }
  });
}

$(window).on('scroll', function() {
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var $revbadge = $('.revbadge');
  var revPos = $revbadge.offset().top;

  if (scrollPos > revPos - windowHeight + 100) {
    if (!$revbadge.hasClass('show')) {
      $revbadge.addClass('show');
      animateCount($revbadge.find('.number'));
    }
  } else {
    $revbadge.removeClass('show');
    $revbadge.find('.number').text('0'); 
  }
});

  $(window).on('scroll', function () {
    $('#hh').each(function () {
      var elTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elTop + 50) {
        $(this).addClass('show');
      } else {
        $(this).removeClass('show'); // remove to allow re-animation
      }
    });
       $('#hh1').each(function () {
      var elTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elTop + 50) {
        $(this).addClass('show');
      } else {
        $(this).removeClass('show'); // remove to allow re-animation
      }
    });
  });

$(window).on('scroll', function () {
  $('#hh2').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          top: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          top: '50px',
          opacity: 0
        }, 1000);
      }
    }
  });
});

$(window).on('scroll', function () {
  $('#hh4').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 250) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          top: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          top: '110px',
          opacity: 0
        }, 1000);
      }
    }
  });
});
$(window).on('scroll', function () {
  $('.hh6').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 250) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '100px',
          opacity: 0
        }, 1000);
      }
    }
  });
});


  $(window).on('scroll', function () {
    $('#hh7').each(function () {
      var elTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elTop + 220) {
        $(this).addClass('show');
      } else {
        $(this).removeClass('show'); // remove to allow re-animation
      }
    });
  
  });

  


$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  // Animate #hh8 sliding in from left
  $('#hh8').each(function () {
    var elementTop = $(this).offset().top;
    if (scrollTop + windowHeight > elementTop + 220) {
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '-100px',
          opacity: 0
        }, 1000);
      }
    }
  });

  // Animate #hh9 sliding in from right
  $('#hh9').each(function () {
    var elementTop = $(this).offset().top;
    if (scrollTop + windowHeight > elementTop + 220) {
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '0px',   // use right for #hh9
          opacity: 1
        }, 1000);
      }
    } else {
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '200px',  
          opacity: 0
        }, 1000);
      }
    }
  });
});

$(window).on('scroll', function () {
  var $element = $('#hh10e');
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 100) {
    if (!$element.hasClass('animated')) {
      $element.removeClass('reverse-animated'); // Remove reverse
      $element.addClass('animated');
    }
  } else {
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
      $element.addClass('reverse-animated'); // Trigger reverse
    }
  }
});

$(window).on('scroll', function () {
  $('#hh11').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '-60px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '200px',
          opacity: 0
        }, 1000);
      }
    }
  });
});
$(window).on('scroll', function () {
  $('#jj2').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '200px',
          opacity: 0
        }, 1000);
      }
    }
  });
});
$(window).on('scroll', function () {
  $('#jj7').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          left: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          left: '-200px',
          opacity: 0
        }, 1000);
      }
    }
  });
});
$(window).on('scroll', function () {
  $('.scroll-animate').each(function () {
    var $el = $(this);
    var elementTop = $el.offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$el.hasClass('animated')) {
        $el.addClass('animated');
        $el.stop().animate({
          left: '0px',
          opacity: 1
        }, 800);
      }
    } else {
      // Animate OUT
      if ($el.hasClass('animated')) {
        $el.removeClass('animated');
        const originalLeft = $el.attr('id') === 'kk3' ? '250px' : '-150px';
        $el.stop().animate({
          left: originalLeft,
          opacity: 0
        }, 800);
      }
    }
  });
});


$(window).on('scroll', function () {
  $('#jj3').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          top: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          top: '200px',
          opacity: 0
        }, 1000);
      }
    }
  });
});
$(window).on('scroll', function () {
  $('#jj8').each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > elementTop + 220) {
      // Animate IN
      if (!$(this).hasClass('animated')) {
        $(this).addClass('animated').stop().animate({
          top: '0px',
          opacity: 1
        }, 1000);
      }
    } else {
      // Animate OUT
      if ($(this).hasClass('animated')) {
        $(this).removeClass('animated').stop().animate({
          top: '200px',
          opacity: 0
        }, 1000);
      }
    }
  });
});

$(window).on('scroll', function () {
  var $element = $('#jj1'); // Replace with your element ID or class
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 200) {
    // Animate IN
    if (!$element.hasClass('animated')) {
      $element.addClass('animated');
    }
  } else {
    // Animate OUT (remove effect)
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
    }
  }
});
$(window).on('scroll', function () {
  var $element = $('#jj4'); // Replace with your element ID or class
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 200) {
    // Animate IN
    if (!$element.hasClass('animated')) {
      $element.addClass('animated');
    }
  } else {
    // Animate OUT (remove effect)
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
    }
  }
});
$(window).on('scroll', function () {
  var $element = $('#jj6'); // Replace with your element ID or class
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 200) {
    // Animate IN
    if (!$element.hasClass('animated')) {
      $element.addClass('animated');
    }
  } else {
    // Animate OUT (remove effect)
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
    }
  }
});
$(window).on('scroll', function () {
  var $element = $('#jj5'); // Replace with your element ID or class
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 200) {
    // Animate IN
    if (!$element.hasClass('animated')) {
      $element.addClass('animated');
    }
  } else {
    // Animate OUT (remove effect)
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
    }
  }
});
$(window).on('scroll', function () {
  var $element = $('#jj9'); // Use your element ID/class here
  var elementTop = $element.offset().top;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop + windowHeight > elementTop + 100) {
    // Animate IN
    if (!$element.hasClass('animated')) {
      $element.addClass('animated');
    }
  } else {
    // Animate OUT (remove effect)
    if ($element.hasClass('animated')) {
      $element.removeClass('animated');
    }
  }
});
