// ==UserScript==
// @name         FA + [αlpha]
// @namespace    https://vk.com/mrdearfox
// @website      https://www.furaffinity.net/user/dearfox/
// @website      https://github.com/DearFox/
// @website      https://www.youtube.com/DearFox
// @version      αlpha⠀1.0
// @description  FA plus - user script is designed to improve the use of the site furaffinity.net both visually and technically.
// @author       DearFox
// @match        http://www.furaffinity.net/*
// @match        https://www.furaffinity.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
//Настройни

    var settings_old_fa_logo = true; //Заменять новый логотип ФА на свой? true - да, false - нет.
    var settings_btn_note_to_btn_url_img = true; //Заменять кнопку "note" на "URL img" (для открытия картинки в новой вкладке)? true - да, false - нет. ОТКЛЮЧИТЕ ЕСЛИ У  ВАС ВКЛЮЧАЕТСЯ МОБИЛЬНАЯ ВЕРСИЯ FA!!!
    var settings_menu = true; //Заменяет меню "уведомлений" на более практичное (доработать позже до большего удобства). true - влючить, false - отключить.
    var settings_watch_system_message_skip = true; //Пропускать\скипать системные сообщения при клике по "watch" на сайте? true - да, false - нет. ВНИМАНИЕ!!! ЭТА ФУНКЦИЯ НЕ ДАСТ ВАМ ПРОЧИТАТЬ СООБЩЕНИЕ В СЛУЧАЕ!!!
    var settings_controls_system_message_skip = true; //Пропускать\скипать системные сообщения в настройках ("controls") на сейте? true - да, false - нет. ВНИМАНИЕ!!! ЭТА ФУНКЦИЯ НЕ ДАСТ ВАМ ПРОЧИТАТЬ СООБЩЕНИЕ В СЛУЧАЕ ОШИБКИ!!! ТОЛЬКО ДЛЯ ТЕХ, КТО ЗНАЕТ ЧТО ДЕЛАЕТ!!!
    var settings_home_site_url_logo = true; //Заменяет иконку возле пункта "HOME SITE" в "User Profile" на иконку исходя из ссылки на их сайт. true - влючить, false - отключить. ВНИМАНИЕ!!! МЕНЯЕТ ЧАСТЬ СТИЛЕЙ САЙТА!!! МОЖЕТ ВЫХВАТЬ ВИЗУАЛЬНЫЕ БАГИ!!!
    var settings_border_site_block = true; //Отключить обводку блоков на сайте. true - да, false - нет. ИЗМЕНЯЕТ СТИЛЬ САЙТА!!! МОЖЕТ ВЫЗВАТЬ НЕБОЛЬШОЙ "ДЁРГ" САЙТА ПРИ ОБНОВЛЕНИИ ИЛИ ОТКРЫТИИ НОВОЙ СТРАНИЦЫ!!!
    var settings_web_baner_off = true; //Отключает банер в верху сайта. true - да, false - нет. ПРИ ОТКРЫТИИ НОВЫХ СТРАНИЦ БАНЕР БУДЕТ ВИДЕН НЕБОЛЬШОЕ КОЛИЧЕСТВО ВРЕМЕНИ И ПРОПОДАТЬ!!!
    var settings_type_here_custom_style = true; //Включить кастомный стиль для окон ввода. true - да, false - нет. ИЗМЕНЯЕТ СТИЛЬ САЙТА!!! МОЖЕТ ВЫЗВАТЬ НЕБОЛЬШОЙ "ДЁРГ" САЙТА ПРИ ОБНОВЛЕНИИ ИЛИ ОТКРЫТИИ НОВОЙ СТРАНИЦЫ!!!
//Настройки стиля сайта
    var settings_site_logo = '/themes/beta/img/banners/fa_logo.png'; //ссылка на логотип в место нового (по умолчанию "/themes/beta/img/banners/fa_logo.png" - старый логотип ФА)
    //Настройки оформления ввода текста
    var settings_style_type_here_border_radius = '0'; //Радиус закругления окон ввода текста. 7 - значение по умолчанию от сайта. 0 - значение по умолчанию FA +.
    var settings_style_type_here_border = '0'; //Обводка вокруг блока ввода текста. 1 - по умолчанию сайта. 0 - для отключения.

//скрипты "НЕ ЛЕЗЬ ДИБИЛ!!!"
    var site_url = window.location.pathname;
    console.log(site_url);
    //console.log(site_url.substr(0, 9)); //testing
    //Замена нового логотипа на сарый
    if (settings_old_fa_logo == true) {
    var my_site_logo = document.getElementsByClassName("site-logo")[0]; //Ищем элимент по названию класса
    var my_nav_bar_logo = document.getElementsByClassName("nav-bar-logo")[0]; //Ищем элимент по названию класса
    my_nav_bar_logo.setAttribute("src", settings_site_logo ); //Изменяем атребуты найденого элимента
    my_site_logo.setAttribute("src", settings_site_logo ); //Изменяем атребуты найденого элимента
    };

    //заменя кнопки "note" на "URL img" для открытия картинки в новой вкладке.
    if (site_url.substr(0, 6) == '/view/' && settings_btn_note_to_btn_url_img == true){ //Проверка на нахождение на странице с нужными кнопками И на включенность этой функции в настройках
    var my_download = document.getElementsByClassName("download")[0]; //Ищем элимент по названию класса
    var my_note = document.getElementsByClassName("note")[0]; //Ищем элимент по названию класса

    my_note.innerHTML = '<a href="//d.facdn.net' + my_download.outerHTML.slice(53, -19) + ' target="_blank">URL img</a>'; //Изменяем атребуты найденого элимента
    console.log(my_download.outerHTML.slice(53, -19));
    };
    //меню
    if (settings_menu == true){
        var my_message_bar_desktop = document.getElementsByClassName("message-bar-desktop")[0];
        var menu_img_news = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEX///9HcExwQjx2AAAAAnRSTlP7AIHb9U4AAAB+SURBVCjPtdI9CoAwDAXgJ29w6R28qkcruAq9guDgKnTRSW2r0vRncDDTB3ltMgTHXXih4YoRjG/Yr3DvKeB6dmUKa39AGBojLBZjAEiBPKOhnn8U6hlNAXOY0IowNkxQyIAJ0oyGUhQo7dP0FMgzdcwe+4IJAIAWW0CH7FpOqL+L0rW1O3EAAAAASUVORK5CYII=';
        var menu_url_news = '/msg/submissions/';
        var menu_btn_news = '<a class="notification-container inline" href="' + menu_url_news + '" title="1,748 Submission Notifications"><img src="' + menu_img_news + '" width="24" height="24" align="middle" title="Dheksun" alt="Dheksun" style="margin-top: 50%;"></a>';
        my_message_bar_desktop.innerHTML = ''+menu_btn_news+'';
    };
    //автоскип system message (одно для двух настоек, скип при "watch" и отдельно скип сообщений в настройках)
    if (settings_watch_system_message_skip == true && site_url.substr(0, 7) == '/watch/' || settings_watch_system_message_skip == true && site_url.substr(0, 9) == '/unwatch/' || settings_controls_system_message_skip == true && site_url.substr(0, 10) == '/controls/'){
        var my_system_message_continue = document.getElementsByClassName("button standard go")[0];
        if (my_system_message_continue != undefined){ //проверка my_system_message_continue на пустоту (undefined), и если ее нет- выполнить флэкс.
        var my_system_message_url = my_system_message_continue.outerHTML.slice(36, -16);
        window.location.href = my_system_message_url;
        }};
    //фикс отсутствия иконки сайта
    if (settings_home_site_url_logo == true && site_url.substr(0, 6) == '/user/') {
    var my_web_logo_url = document.getElementsByClassName("contact-icon-website")[0];
    var my_test = document.getElementsByClassName("user-contact-user-info font-small");
    var search_test = /<i>(.*?)<.i>/gi;
    var my_test_index;
    for (my_test_index = my_test.length - 1; my_test_index >= 0; --my_test_index) {
        if (my_test[my_test_index].outerHTML.match(search_test) != null) {console.log(my_test[my_test_index].outerHTML.match(search_test).toString().slice(3,-4));
                                                                         GM_addStyle('.contact-icon-skype,.contact-icon-telegram,.contact-icon-discord,.contact-icon-battlenet,.contact-icon-steam,.contact-icon-xboxlive,.contact-icon-secondlife,.contact-icon-psn,.contact-icon-nintendo,.contact-icon-3ds,.contact-icon-switch,.contact-icon-imvu,.contact-icon-sofurry,.contact-icon-inkbunny,.contact-icon-deviantart,.contact-icon-furrynetwork,.contact-icon-transfur,.contact-icon-tumblr,.contact-icon-weasyl,.contact-icon-website,.contact-icon-youtube,.contact-icon-twitter,.contact-icon-facebook,.contact-icon-dealersden,.contact-icon-furbuy,.contact-icon-patreon,.contact-icon-kofi,.contact-icon-etsy,.contact-icon-picarto,.contact-icon-twitch,.contact-icon-wiiu > div {background: url(https://i.imgur.com/YWwZAvh.png) no-repeat top left; width: 32px; height: 32px!important;}.contact-icon-skype{background-position:0 -798px}.contact-icon-telegram{background-position:0 -924px}.contact-icon-discord{background-position:0 -168px}.contact-icon-battlenet{background-position:0 -42px}.contact-icon-steam{background-position:0 -882px}.contact-icon-xboxlive{background-position:0 -1302px}.contact-icon-secondlife{background-position:0 -756px}.contact-icon-psn{background-position:0 -672px}.contact-icon-nintendo{background-position:0 -504px}.contact-icon-3ds{background-position:0 0}.contact-icon-switch{background-position:0 -546px}.contact-icon-imvu{background-position:0 -378px}.contact-icon-sofurry{background-position:0 -840px}.contact-icon-inkbunny{background-position:0 -420px}.contact-icon-deviantart{background-position:0 -126px}.contact-icon-furrynetwork{background-position:0 -336px}.contact-icon-transfur{background-position:0 -966px}.contact-icon-tumblr{background-position:0 -1008px}.contact-icon-weasyl{background-position:0 -1176px}.contact-icon-website{background-position:0 -1218px}.contact-icon-youtube{background-position:0 -1386px}.contact-icon-twitter{background-position:0 -1092px}.contact-icon-facebook{background-position:0 -252px}.contact-icon-dealersden{background-position:0 -84px}.contact-icon-furbuy{background-position:0 -294px}.contact-icon-patreon{background-position:0 -588px}.contact-icon-kofi{background-position:0 -462px}.contact-icon-etsy{background-position:0 -210px}.contact-icon-picarto{background-position:0 -630px}.contact-icon-twitch{background-position:0 -1050px}.contact-icon-wiiu{background-position:0 -1260px}');
                                                                         my_web_logo_url.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=' + my_test[my_test_index].outerHTML.match(search_test).toString().slice(3,-4) + '" style="width: 32px;">';
                                                                         };};};
    //Отключение обводки вокруг блоков на сайте
    if (settings_border_site_block == true){
    GM_addStyle('#page-userpage .userpage-section-right,#page-userpage .userpage-section-left {border: 0px solid transparent;border-image: linear-gradient(to bottom right,#838399,#69697d);border-image-slice: 1;}');
    GM_addStyle('section,.stats-page,.fa-plus-benefit-item {border: 0px solid #69697d;}');
    };
    //Убирание шапки сайта
    if (settings_web_baner_off == true){
    var my_web_baner = document.getElementById("header");
    my_web_baner.innerHTML = "";};
    //Оформление ввода текста
    if (settings_type_here_custom_style == true) {
    GM_addStyle('textarea,.textarea,.textbox,select,.uploadfield,.avataruploadfield,select {color: #e5e5e5;background-color:rgba(0,0,0,.25)!important;border: ' + settings_style_type_here_border + 'px solid rgba(255,255,255,.35)!important;border-radius:'+ settings_style_type_here_border_radius +'px;box-shadow:inset 0 0 10px 5px rgba(0,0,0,.3);}textarea:focus,.textarea:focus,.textbox:focus,select:focus,.uploadfield:focus,.avataruploadfield:focus,select:focus {border: ' + settings_style_type_here_border + 'px solid rgba(255,255,255,.5)!important;background-color: rgba(0,0,0,.35)!important}');
    };
//
})();