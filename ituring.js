// ==UserScript==
// @name         图灵阅读-固定标题栏
// @namespace    https://github.com/atever/browserfork/edit/master/ituring.js
// @version      0.1.1
// @description  固定阅读页标题栏
// @license      MIT License
// @author       ateveryuan@gmail.com
// @match        *.ituring.com.cn/book/tupubarticle/*
// @grant        none
// ==/UserScript==


(function() {
  'use strict';
  document.getElementsByClassName("layout-head")[0].style='position: absolute';
})();
