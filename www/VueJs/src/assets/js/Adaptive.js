// JavaScript Document
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {

      var clientWidth = docEl.clientWidth;
        docEl.style.fontSize = 100 * (clientWidth / 1242) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  recalc()
  doc.addEventListener('DOMContentLoaded', recalc, false);
  /*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
})(document, window);
