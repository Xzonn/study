"use strict";
/* global $ */

window.addEventListener("load", () => {
  let tempDiv = $("<div/>").appendTo($("body"));
  $(".xz-choice-question > li > ul")
    .removeClass("xz-choice-2 xz-choice-4")
    .each((n, choice) => {
      let itemWidth = $(choice)
          .find("li")
          .toArray()
          .map((x) => $("<span/>").text(x.innerText).appendTo(tempDiv).width()),
        listWidth = $(choice).width();
      if (itemWidth.every((x) => x < listWidth / 4 - 32)) {
        $(choice).addClass("xz-choice-4");
      } else if (itemWidth.every((x) => x < listWidth / 2 - 32)) {
        $(choice).addClass("xz-choice-2");
      }
    });
  tempDiv.remove();
});
