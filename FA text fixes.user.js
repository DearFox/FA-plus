// ==UserScript==
// @name         FA text fixes
// @namespace    https://vk.com/mrdearfox
// @website      https://www.furaffinity.net/user/dearfox/
// @website      https://github.com/DearFox/
// @website      https://www.youtube.com/DearFox
// @version      0.1
// @description  text fixes
// @author       DearFox
// @match        http://www.furaffinity.net/*
// @match        https://www.furaffinity.net/*
// @require      https://code.jquery.com/jquery-3.5.0.min.js
// @grant        GM_addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==
//Решение данной проблемы было найдено тут: https://ru.stackoverflow.com/questions/834171/%d0%97%d0%b0%d0%bc%d0%b5%d0%bd%d0%b0-%d1%82%d0%b5%d0%b3%d0%b0-%d1%81-%d1%81%d0%be%d1%85%d1%80%d0%b0%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5%d0%bc-%d1%81%d0%be%d0%b4%d0%b5%d1%80%d0%b6%d0%b8%d0%bc%d0%be%d0%b3%d0%be
(function() {
    'use strict';

    // Your code here...
    //$("cdoe").replaceWith("div");
    //$('code').replaceWith(function(){
    //return $("<div />", {html: $(this).html()});
    //});

$('code').each(function(){
  $(this).replaceWith(function(){
    var $div = $('<div/>', { html: $(this).html() });

    $.each(this.attributes, function(i, attribute) {
      $div.attr(attribute.name, attribute.value);
    });

    return $div;
  });
});
})();