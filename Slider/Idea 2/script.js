function moveToSelected(direction) {
    if (direction == "next") {
      var selected = $(".carousel__item--selected").next();
      console.log($(".carousel__item--selected").next());
    } else if (direction == "prev") {
      var selected = $(".carousel__item--selected").prev();
    } else {
      var selected = direction;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected)
      .removeClass()
      .addClass(["carousel__item", "carousel__item--selected"]);
  
    $(prev)
      .removeClass()
      .addClass(["carousel__item", "carousel__item--prev"]);
    $(next)
      .removeClass()
      .addClass(["carousel__item", "carousel__item--next"]);
  
    $(next)
      .nextAll()
      .removeClass()
      .addClass(["carousel__item", "carousel__item--rhide"]);
    $(prev)
      .prevAll()
      .removeClass()
      .addClass(["carousel__item", "carousel__item--lhide"]); 
    
    $(selected).next().length == 0 ? $(".carousel__button--next").hide() : $(".carousel__button--next").show()
    
    $(selected).prev().length == 0 ? $(".carousel__button--prev").hide() : $(".carousel__button--prev").show()
    
  }
  
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        moveToSelected("prev");
        break;
  
      case 39:
        moveToSelected("next");
        break;
  
      default:
        return;
    }
    e.preventDefault();
  });
  
  $(".carousel div").click(function() {
    console.log($(this));
    moveToSelected($(this));
  });
  
  $(".carousel__button--prev").click(function() {
    moveToSelected("prev");
  });
  
  $(".carousel__button--next").click(function() {
    moveToSelected("next");
  });
  
  moveToSelected($(".carousel__item--selected"));
  