"use strict";

$(function () {
  /* 目录 */
  (() => {
    $(".xz-sidenav-list").on("click", function (e) {
      let target = e.target;
      if (target.tagName.toLowerCase() == "a") {
        e.preventDefault();
        e.stopPropagation();
        let hash = "#" + decodeURIComponent(target.href.split("#")[1]);
        history.pushState(
          {
            url: location.href,
          },
          hash,
          location.href.split("#")[0] + hash
        );
        $("html").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          300
        );
      }
    });
    $("body").scrollspy({
      target: ".xz-sidenav",
    });
  })();

  /* 代码高亮 */
  (() => {
    $(".xz-content pre code").each(function () {
      $(this).html(
        "<ul><li>" +
          $(this)
            .html()
            .replace(/^\s+/, "")
            .replace(/\s+$/, "")
            .replace(/\n/g, "</li><li>") +
          "</li></ul>"
      );
      $(this)
        .find("li:last-child")
        .each(function () {
          if (!this.innerHTML) {
            $(this).remove();
          }
        });
    });
  })();

  /* 表注 */
  (() => {
    let tables = $("table"),
      i;
    for (i = 0; i < tables.length; i++) {
      let table = tables[i],
        caption = table.dataset["caption"],
        id = table.dataset["id"];
      if (caption) {
        $("<caption/>")
          .addClass("caption-table")
          .html(caption)
          .attr("id", id)
          .prependTo(table);
      }
    }
  })();

  /* 表格 */
  (() => {
    $(".xz-content-main article > table:not(.no-table)").each(function () {
      $(this).addClass("table");
      if (
        !$(this)
          .parentsUntil(".xz-content-main article")
          .find("div.table-responsive").length
      ) {
        $(this).wrap($("<div/>").addClass("table-responsive"));
      }
    });
  })();

  /* 图注、表注显示 */
  (() => {
    let figureCaptionId = {};
    $(".caption-figure").each(function (n) {
      if (this.id) {
        figureCaptionId[this.id] = n + 1;
      }
    });
    $("a.xref-figure").each(function () {
      let hash = this.href.split("#").slice(-1)[0];
      if (figureCaptionId[hash]) {
        $(this).text("图 " + figureCaptionId[hash]);
      }
    });
    let tableCaptionId = {};
    $(".caption-table").each(function (n) {
      if (this.id) {
        tableCaptionId[this.id] = n + 1;
      }
    });
    $("a.xref-table").each(function () {
      let hash = this.href.split("#").slice(-1)[0];
      if (tableCaptionId[hash]) {
        $(this).text("表 " + tableCaptionId[hash]);
      }
    });
  })();

  /* 参考文献显示 */
  (() => {
    let endnoteId = {};
    $(".list-endnote li").each(function (n) {
      if (this.id) {
        endnoteId[this.id] = n + 1;
      }
    });
    $(".ref-endnote > a").each(function () {
      let hash = this.href.split("#").slice(-1)[0];
      if (endnoteId[hash]) {
        $(this).text(endnoteId[hash]);
      }
    });
  })();

  /* 注释 */
  (() => {
    $("span.footnote").each(function (count) {
      $(this)
        .addClass("visible-print-inline")
        .after(
          $("<a/>")
            .addClass("footnote-icon")
            .text(count + 1)
            .attr({
              href: "",
            })
            .bind("click", function (e) {
              e.preventDefault();
            })
            .popover({
              content: this.innerHTML,
              html: true,
              placement: "bottom",
              toggle: "popover",
              trigger: "focus",
            })
        );
    });
  })();

  /* 返回页面顶端 */
  (() => {
    $(".xz-navtop").click(function (e) {
      e.preventDefault();
      $("html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
    $(".xz-navbottom").click(function (e) {
      e.preventDefault();
      $("html").animate(
        {
          scrollTop: $(document.body).height(),
        },
        500
      );
    });
  })();

  /* resize */
  (() => {
    window.windowResize = function () {
      $(".xz-footer").css("position", "initial");
      if ($("body").height() == $(window).height()) {
        $(".xz-footer").css("position", "absolute");
      }
      $(".xz-sidenav-list").affix({
        offset: {
          top: $(".xz-content-main").offset().top,
          bottom: $(".xz-footer").outerHeight(),
        },
      });
    };
    windowResize();
    $(window).bind("resize", windowResize);
  })();

  /* scroll */
  (() => {
    let scrollTimer;
    window.windowScroll = function () {
      $(".xz-footer-navtop")
        .css({
          bottom: Math.max(
            $(window).scrollTop() +
              $(window).innerHeight() -
              ($(".xz-content-main").offset().top +
                $(".xz-content-main").outerHeight()),
            25
          ),
        })
        .fadeIn(200);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        $(".xz-footer-navtop").fadeOut(500);
      }, 2000);
    };
    $(".xz-footer-navtop").bind({
      mouseenter: function () {
        clearTimeout(scrollTimer);
      },
      mouseleave: function () {
        scrollTimer = setTimeout(function () {
          $(".xz-footer-navtop").fadeOut(500);
        }, 2000);
      },
    });
    windowScroll();
    $(window).bind("scroll", windowScroll);
  })();

  /* 图片预览 */
  (() => {
    $(".figure-link, .video-link").on("click", function (e) {
      let link = $(this).attr("href");
      console.log(link);
      if (link.match(/\.mp4$/)) {
        $(`<video/>`)
          .addClass("xz-modal-video")
          .attr({
            src: link,
            controls: "controls",
            autoplay: "autoplay",
          })
          .appendTo($(".xz-modal-content").empty());
      } else if (link.match(/\.(?:bmp|jpe?g|gif|png|webp)$/)) {
        $(`<img/>`)
          .addClass("xz-modal-image")
          .attr("src", link)
          .appendTo($(".xz-modal-content").empty());
      } else if (link.match(/youtube\.com\/watch/)) {
        let video_id = link.match(/(?<=\/watch\?v=)[^\?&]+/)[0];
        let video_args = (link.match(/(?<=[\?&]).+$/) || "")[0];
        console.log(video_id, video_args);
        $(`<iframe/>`)
          .addClass("xz-modal-youtube")
          .attr({
            src: `https://youtube.com/embed/${video_id}?autoplay=1&controls=1&${video_args}`,
            allowfullscreen: "allowfullscreen",
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          })
          .appendTo($(".xz-modal-content").empty());
      }
      $(".xz-modal").modal("show");
      e.preventDefault();
    });
    $(".xz-modal").on("hide.bs.modal", function () {
      $(".xz-modal-content").empty();
    });
  })();

  /* PDF */
  (() => {
    if ($(".xz-infobox-top").length == 0) {
      $("<div/>")
        .addClass("xz-infobox-top no-print")
        .insertBefore($("article")[0]);
    }
    let hasedFileList = JSON.parse(localStorage.getItem("xz-pdf-list"));
    let renderAlert = function (pdfList) {
      let fileName = location.pathname
        .split("/")
        .reverse()[0]
        .replace(".html", ".pdf");
      if (pdfList.indexOf(fileName) > -1) {
        let div = $("<div/>")
          .addClass(["xz-info-pdf alert alert-success"])
          .append([
            $("<p/>").html(
              `本页面存在一个 <a href="https://cdn.jsdelivr.net/gh/Xzonn/xz-pdf/${fileName}" class="alert-link">已渲染的PDF版本</a>。`
            ),
          ])
          .appendTo($(".xz-infobox-top"));
        Han(div[0]).render();
      }
    };
    if (
      !hasedFileList ||
      new Date() - hasedFileList["update"] > 30 * 60 * 1000
    ) {
      $.get({
        url: "https://api.github.com/repos/Xzonn/xz-pdf/contents",
        timeout: 5000,
      })
        .done(function (data) {
          if (data instanceof Array) {
            let pdfList = data.map((x) => x["path"]);
            localStorage.setItem(
              "xz-pdf-list",
              JSON.stringify({
                update: +new Date(),
                list: pdfList,
              })
            );
            renderAlert(pdfList);
          }
        })
        .fail(function () {
          let div = $("<div/>")
              .addClass(["alert alert-danger"])
              .append([
                $("<p/>").html(
                  `无法链接至<strong><a href="https://api.github.com/">https://api.github.com/</a></strong>，请检查网络设置。`
                ),
              ])
              .appendTo($(".xz-infobox-top")),
            closeButton = $(
              `<button type="button" class="close" data-dismiss="alert">&times;</button>`
            ).appendTo($(".xz-infobox-top"));
          Han(div[0]).render();
          setTimeout((x) => closeButton.click(), 5000);
          renderAlert((hasedFileList || {})["list"] || []);
        });
    } else {
      renderAlert(hasedFileList["list"]);
    }
  })();

  /* Han.js */
  (() => {
    if (!window.MathJax) {
      Han(document.body).render();
      window.mathjaxRendered = true;
    }
  })();
});
