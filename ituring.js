// ==UserScript==
// @name         图灵阅读标题栏固定
// @version      0.1
// @description  固定阅读页标题栏
// @license      MIT License
// @author       ateveryuan@gmail.com
// @match        http://www.ituring.com.cn/book/tupubarticle/*
// @grant        none
// ==/UserScript==


(function() {
  'use strict';
  document.getElementsByClassName("layout-head")[0].style='position: absolute';
})();
