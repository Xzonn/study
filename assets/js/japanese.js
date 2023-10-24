"use strict";
/* global $ */

window.addEventListener("load", () => {
  $("jp").each((n, element) => {
    $(element).replaceWith(
      $("<span/>")
        .attr({
          "lang": "ja",
        })
        .html($(element).html())
    );
  });

  $("blockquote").attr({
    "lang": "ja",
  });

  $("blockquote em").attr({
    "lang": "zh",
  });
});
