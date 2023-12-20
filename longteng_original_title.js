// ==UserScript==
// @name         复制龙腾网文章标题
// @namespace    http://tampermonkey.net/
// @version      2023-12-20
// @description  复制龙腾网文章标题
// @author       ateveryuan@gmail.com
// @match        https://translate.ltaaa.cn/article/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("getContent");

    // 获取原文标题
    var remarkText = document.querySelector('.remark').innerHTML;

    // 提取原文标题后到<br>前的文字
    var startIndex = remarkText.indexOf('原文标题：') + '原文标题：'.length;
    var endIndex = remarkText.indexOf('<br>');
    var originalTitle = remarkText.substring(startIndex, endIndex).trim();

    // 输出原文标题
    console.log(originalTitle);

    // 复制文本到剪贴板
    navigator.clipboard.writeText(originalTitle).then(function() {
        alert("已成功复制到剪贴板: " + originalTitle);
    }).catch(function(err) {
        console.error('无法复制到剪贴板', err);
    });


})();
