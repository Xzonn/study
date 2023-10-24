"use strict";
/* global $ */

window.addEventListener("load", () => {
  window.pageInfo = window.pageInfo || {};
  /* 目录 */
  (() => {
    $(".xz-sidenav").on("click", (e) => {
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
    $(".xz-content pre code").each((n, code) => {
      let inner = $(code).html().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\n/g, "</li><li>");
      while (inner.search(/(<span class="[^"]+">)([^<>]+)(<\/li><li>)/) > -1) {
        inner = inner.replace(/(<span class="[^"]+">)([^<>]+)(<\/li><li>)/, "$1$2</span>$3$1");
      }
      $(code)
        .html(`<ul><li>${inner}</li></ul>`)
        .find("li:last-child")
        .each(() => {
          if (!code.innerHTML) {
            $(code).remove();
          }
        });
    });
  })();

  /* 表注 */
  (() => {
    $("table").each((i, table) => {
      let caption = $(table).find("caption");
      if (caption.length) {
        caption
          .addClass("caption-table")
          .attr("id", table.dataset["id"] || `table-${i + 1}`)
          .prependTo(table);
      }
    });
  })();

  /* 表格 */
  (() => {
    $(".xz-content-main article > table:not(.no-table)").each((i, table) => {
      $(table).addClass("table");
      if (!$(table).parentsUntil(".xz-content-main article").find("div.table-responsive").length) {
        $(table).wrap($("<div/>").addClass("table-responsive"));
      }
    });
  })();

  /* 交叉引用显示 */
  (() => {
    /* 图注 */
    let figure_caption_id = {};
    $(".caption-figure").each((n, caption) => {
      if (caption.id) {
        figure_caption_id[caption.id] = n + 1;
      }
    });
    $("a.xref-figure").each((n, link) => {
      let hash = link.href.split("#").slice(-1)[0];
      if (figure_caption_id[hash]) {
        $(link).text(`图{figure_caption_id[hash]}`);
      }
    });

    /* 表注 */
    let table_caption_id = {};
    $(".caption-table").each((n, caption) => {
      if (caption.id) {
        table_caption_id[caption.id] = n + 1;
      }
    });
    $("a.xref-table").each((n, link) => {
      let hash = link.href.split("#").slice(-1)[0];
      if (table_caption_id[hash]) {
        $(link).text(`表{table_caption_id[hash]}`);
      }
    });

    /* 参考文献 */
    let endnote_id = {};
    $(".list-endnote li").each((n, item) => {
      if (item.id) {
        endnote_id[item.id] = n + 1;
      }
    });
    $(".ref-endnote > a").each((n, link) => {
      let hash = link.href.split("#").slice(-1)[0];
      if (endnote_id[hash]) {
        $(link).text(endnote_id[hash]);
      }
    });
  })();

  /* 注释 */
  (() => {
    $("span.footnote").each((count, footnote) => {
      $(footnote)
        .addClass("visible-print-inline")
        .after(
          $("<a/>")
            .addClass("footnote-icon")
            .text(count + 1)
            .attr({
              href: "",
            })
            .on("click", (e) => e.preventDefault())
            .popover({
              content: footnote.innerHTML,
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
    $(".xz-navtop").on("click", (e) => {
      e.preventDefault();
      $("html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
    $(".xz-navbottom").on("click", (e) => {
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
    window.windowResize = () => {
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
    $(window).on("resize", windowResize);
  })();

  /* scroll */
  (() => {
    let scroll_timer;
    window.windowScroll = function () {
      $(".xz-footer-navtop")
        .css({
          bottom: Math.max(
            $(window).scrollTop() +
              $(window).innerHeight() -
              ($(".xz-content-main").offset().top + $(".xz-content-main").outerHeight()),
            25
          ),
        })
        .fadeIn(200);
      clearTimeout(scroll_timer);
      scroll_timer = setTimeout(function () {
        $(".xz-footer-navtop").fadeOut(500);
      }, 2000);
    };
    $(".xz-footer-navtop").on({
      mouseenter: function () {
        clearTimeout(scroll_timer);
      },
      mouseleave: function () {
        scroll_timer = setTimeout(function () {
          $(".xz-footer-navtop").fadeOut(500);
        }, 2000);
      },
    });
    windowScroll();
    $(window).on("scroll", windowScroll);
  })();

  /* 图片预览 */
  (() => {
    $(".figure-link, .video-link").on("click", (e) => {
      e.preventDefault();
      let link = $(e.target).attr("href") || "";
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
        $(`<img/>`).addClass("xz-modal-image").attr("src", link).appendTo($(".xz-modal-content").empty());
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
    });
    $(".xz-modal").on("hide.bs.modal", () => $(".xz-modal-content").empty());
  })();

  /* PDF */
  (() => {
    if ($(".xz-infobox-top").length == 0) {
      $("<div/>").addClass("xz-infobox-top no-print").insertBefore($("article")[0]);
    }
    let hasedFileList = JSON.parse(localStorage.getItem("xz-pdf-list"));
    let renderAlert = (pdfList) => {
      let fileName = location.pathname.split("/").reverse()[0].replace(".html", ".pdf");
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
    if (!hasedFileList || new Date() - hasedFileList["update"] > 30 * 60 * 1000) {
      $.get({
        url: "https://api.github.com/repos/Xzonn/xz-pdf/contents",
        timeout: 5000,
      })
        .done((data) => {
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
        .fail(() => {
          let div = $("<div/>")
              .addClass(["alert alert-danger"])
              .append([
                $("<p/>").html(
                  `无法链接至<strong><a href="https://api.github.com/">https://api.github.com/</a></strong>，请检查网络设置。`
                ),
              ])
              .appendTo($(".xz-infobox-top")),
            closeButton = $(`<button type="button" class="close" data-dismiss="alert">&times;</button>`).appendTo(
              $(".xz-infobox-top")
            );
          Han(div[0]).render();
          setTimeout(() => closeButton.trigger("click"), 5000);
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
