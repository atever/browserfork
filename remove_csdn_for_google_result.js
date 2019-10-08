// ==UserScript==
// @name         Google 搜索结果去除 CSDN
// @namespace    https://raw.githubusercontent.com/atever/browserfork/master/remove_csdn_for_google_result.js
// @version      0.1.1
// @description  搜索结果去除 CSDN
// @license      MIT License
// @author       ateveryuan@gmail.com
// @match        https://*.google.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var searchQuery = window.location.search;
    var reg = /(&q=|\?q=).*&oq=/;
    if(searchQuery.indexOf("csdn") === -1 && reg.test(searchQuery)) {
        window.location.href = addFWORD(searchQuery);
    }
    function addFWORD(searchQuery) {
        var str = searchQuery.split('&oq=');
        return str[0].concat('+-csdn&oq=').concat(str[1]);
    }
})();
