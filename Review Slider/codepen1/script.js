function moveToSelected(direction) {
  let selected;
  if (direction == "next") {
    selected = $(".carousel__item--selected").next();
    if (selected.length === 0) {
      // Loop back to the first item if there's no next
      selected = $(".carousel__item").first();
    }
  } else if (direction == "prev") {
    selected = $(".carousel__item--selected").prev();
    if (selected.length === 0) {
      // Loop back to the last item if there's no previous
      selected = $(".carousel__item").last();
    }
  } else {
    selected = direction;
  }

  const next = $(selected).next();
  const prev = $(selected).prev();

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

  // Show/hide navigation buttons removed as it's now an infinite loop
}

$(document).keydown(function (e) {
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

$(".carousel div").click(function () {
  moveToSelected($(this));
});

$(".carousel__button--prev").click(function () {
  moveToSelected("prev");
});

$(".carousel__button--next").click(function () {
  moveToSelected("next");
});

moveToSelected($(".carousel__item--selected"));

// Automatically slide every 3 seconds
let autoSlideInterval = setInterval(() => {
  moveToSelected("next");
}, 3000);
