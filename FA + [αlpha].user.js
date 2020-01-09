// ==UserScript==
// @name         FA + [αlpha]
// @namespace    https://vk.com/mrdearfox
// @website      https://www.furaffinity.net/user/dearfox/
// @website      https://github.com/DearFox/
// @website      https://www.youtube.com/DearFox
// @version      αlpha⠀1.1
// @description  FA plus - user script is designed to improve the use of the site furaffinity.net both visually and technically.
// @author       DearFox
// @match        http://www.furaffinity.net/*
// @match        https://www.furaffinity.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
//Настройни

    var settings_warning_msg = true; //Показывать предупреждение в случае известрой "несовместимости" в настройках этого скрипта. true - да, false - нет. Эта настройка нужна что-бы "правильно" настроить этот скрипт, и если есть конфликт в настройки скрипта - вы получите сообщение на сайте.
    var settings_old_fa_logo = true; //Заменять новый логотип ФА на свой? true - да, false - нет.
    var settings_btn_note_to_btn_url_img = true; //Заменять кнопку "note" на "URL img" (для открытия картинки в новой вкладке)? true - да, false - нет. ОТКЛЮЧИТЕ ЕСЛИ У  ВАС ВКЛЮЧАЕТСЯ МОБИЛЬНАЯ ВЕРСИЯ FA!!!
    var settings_menu = true; //Заменяет меню "уведомлений" на более практичное (доработать позже до большего удобства). true - влючить, false - отключить.
    var settings_watch_system_message_skip = true; //Пропускать\скипать системные сообщения при клике по "watch" на сайте? true - да, false - нет. ВНИМАНИЕ!!! ЭТА ФУНКЦИЯ НЕ ДАСТ ВАМ ПРОЧИТАТЬ СООБЩЕНИЕ В СЛУЧАЕ!!!
    var settings_controls_system_message_skip = true; //Пропускать\скипать системные сообщения в настройках ("controls") на сейте? true - да, false - нет. ВНИМАНИЕ!!! ЭТА ФУНКЦИЯ НЕ ДАСТ ВАМ ПРОЧИТАТЬ СООБЩЕНИЕ В СЛУЧАЕ ОШИБКИ!!! ТОЛЬКО ДЛЯ ТЕХ, КТО ЗНАЕТ ЧТО ДЕЛАЕТ!!!
    var settings_home_site_url_logo = true; //Заменяет иконку возле пункта "HOME SITE" в "User Profile" на иконку исходя из ссылки на их сайт. true - влючить, false - отключить. ВНИМАНИЕ!!! МЕНЯЕТ ЧАСТЬ СТИЛЕЙ САЙТА!!! МОЖЕТ ВЫХВАТЬ ВИЗУАЛЬНЫЕ БАГИ!!!
    var settings_border_site_block = true; //Отключить обводку блоков на сайте. true - да, false - нет. ИЗМЕНЯЕТ СТИЛЬ САЙТА!!! МОЖЕТ ВЫЗВАТЬ НЕБОЛЬШОЙ "ДЁРГ" САЙТА ПРИ ОБНОВЛЕНИИ ИЛИ ОТКРЫТИИ НОВОЙ СТРАНИЦЫ!!!
    var settings_web_baner_off = false; //Отключает банер в верху сайта. true - да, false - нет. ПРИ ОТКРЫТИИ НОВЫХ СТРАНИЦ БАНЕР БУДЕТ ВИДЕН НЕБОЛЬШОЕ КОЛИЧЕСТВО ВРЕМЕНИ И ПРОПОДАТЬ!!!
    var settings_web_baner_custom = true; //Включить свой собственный кастомный банер для сайта. Для работы нужно задать "false" в настройке "settings_web_baner_custom"
    var settings_type_here_custom_style = true; //Включить кастомный стиль для окон ввода. true - да, false - нет. ИЗМЕНЯЕТ СТИЛЬ САЙТА!!! МОЖЕТ ВЫЗВАТЬ НЕБОЛЬШОЙ "ДЁРГ" САЙТА ПРИ ОБНОВЛЕНИИ ИЛИ ОТКРЫТИИ НОВОЙ СТРАНИЦЫ!!!
//Настройки стиля сайта
    var settings_site_logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABnCAMAAACeuZiBAAAAKlBMVEVHcEz7s0P7uFD///791pn//vz9157+6Mf8wGP6rzr////6piP+7ND8vl948yKwAAAACXRSTlMA4MLg/pQwVofDArruAAAEkklEQVR42s2cW3brIAxFCyYYWTD/6V4/Etd2ASQQ5Kr5aleb7bPEASQ1Pz/EsNY5rbWSinn/q9NS8TXRgJ1WAIjbSyhwh7ZLTRCgZ6cEYT/M8FMP/SpqrAChQ6hDkCroOS+y7kMMgHp/g1cVtM2p3A0ZAF0D9HeQT+hJdh26nshr2Hro1Dq0qi/yB1pyHTrszSxvHro38sc8ZjHz6J8a8uZhsT8zQAN0xDwsjGBGUfMYo7Os441ihs854TU1m8co5rd5HO/J5X5Cq0E6g7rZlp1f9Y6nRzEDoNLz7d3pifLcB2FgIIB2d8FJ3HfHm4cy79z4l5sJDcOhD8GVnn8hXjzH019hfiYKD9p+jfmdKdT71/wNt0vaCR/afZkZQPOh61chXmPA9dzWCv0HMxxx/mQINFnoN1IIZgu/xv1Pem+MCcAHJ0PzhN5BNtonaCRW9sDkJkJPDOvYgVdexsFm5xZXeqJ7NAYW78lNx6ZCv6ibIYJfKoOOzYUu67zUh6ctcq7SxWXYBL0shiK2PLRZ+lMzocsqNEIvvkz9qTm9HjHFoQne4Zfu1Ne77u1qEod2A6AXg7T0KELPxNN/g+P9RsA6pV9xaFVeJItAFBKECQ3Q1/GICcKCtoOgl8Imo/QzMtDlykGz49GkRkCA6ytao5yp5iED7bHmgC0L7a8hYiDRJI9Da2DZ9HE1Cddb13HfKh+2DYopral7i/cmnLfAIwN/s/H4ZjBy+ZFoj87UvWW7hbwvfli63hix/HDRTiMVOuz3PdphHhGEoA+l7VKZ07xpjwy1kYMWnz8JMkkdh7ZUpbnUXgL6mBe6HPKmaTtfdyrxYlpqTvHtPeS0cs5r2HunRV7ptNSsimFu6KdDMT257we20ilo+D+hwQ5WOnSH7tFEaYdGOCcv15jn2TmntdIdG0ReQOljSvQ83Bwv1VFpCejYlCh2VBq9yIk6efTroXRH6Lmfe0AvaBB2D7y2jzpBn8WRVqV/21whhGCOWDpBOwGlL70j0uW2GXpuUxorWkftOd2yIx7A3gsXmcgpXaH0QdyhMkZOabbSiMF0KueRs4OpNGJoKFa3QV+qwXoYcjO0rVAaW1sCvgn6c8JjKY3t1VMZk2YojQI9rrb04N9cJLpFXsbvyEqLtDBalL5mNFFpGvNeuzbGBCPSC0hZB1FphPIgTQhQOpo2QD86drp1DZ6layw9Ywu05dY9MszeRIespKFvq5DWczG5uRmkO0019J92Lql9kToeI6vuUQuNyK4wpZIjbWCpxzQoktCUqatQMcLhJaGfCU1QOiV0hhlFoSPMJaVTQueve4LQ0ZkKXWUd2TUlqXR8DqSktK8QGsWgE7MrusbvfNWT8qFj+VxWOpHSZgx0irmktBGE5k58pHtFGsVTWgYala3suXwNGpOpUVQ6tSF3h0aV/cADXbO1lHLatEEjuPznSuSVloUmI9vCh2FUKe0roVEEuVLpfFJjtdIIioBcUhoqZovTFT/IPyqRuPjvIsnrYTKrc8NXEL2bHZNnSlOJN6Wzn+GDfkqESf2KmZIR/wWtnZvpwGv8AwugVGzjKG2SAAAAAElFTkSuQmCC'; //ссылка или код на картинку для логотипа сайта
    var settings_web_baner_custom_img = 'http://www.furaffinity.net/themes/beta/img/banners/logo/header-new.jpg'; //ссылка или код на картинку банера сайта. Для работы нужно задать "false" в настройке "settings_web_baner_custom". Если вам нужен банер сайта но в большем разрешении то зайдите на : https://imgur.com/a/rQO7kGR . Тут вы сможите найти x2 , x4 и даже x6 версии банеров! https://i.imgur.com/CsOX2Po.jpg - x2 ; https://i.imgur.com/m6JVOkH.jpg - x4 ; https://i.imgur.com/8lk7Mqi.jpg - x6. ВНИМАНИЕ! БОЛЬШИЕ КАРТИНКИ БУДУТ ДОЛЬШЕ ГРУЗИТСЯ!!!
    //Настройки оформления ввода текста
    var settings_style_type_here_border_radius = '0'; //Радиус закругления окон ввода текста. 7 - значение по умолчанию от сайта. 0 - значение по умолчанию FA +.
    var settings_style_type_here_border = '0'; //Обводка вокруг блока ввода текста. 1 - по умолчанию сайта. 0 - для отключения.

//скрипты "НЕ ЛЕЗЬ ДИБИЛ!!!"
    //Несовместимости в настройках
    if (settings_warning_msg == true){
        if (settings_web_baner_off == true && settings_web_baner_custom == true){
        alert('Внимание несовместимость настроек!\n settings_web_baner_off = true и settings_web_baner_custom = true\n Эти функции не могут правильно работать в месте!\n Зайдите в настройки скрипта и исравьте это!\n Зайдите в настройки своего расшерения для юзерскриптов и найдите там FA + . Несовместимость вызвана тем, что "settings_web_baner_off = true" - уберает баннер сайта, а "settings_web_baner_custom = true" - пытается после этого задать ваш банер для сайта. Вам нужно решить что для вас важнее. ;p');
        }else{console.log('Известных несовместимостей не найдено!\nСкорее всего ваши настройки верны!');};
        };
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
    //Убирание шапки сайта или замена на кастомную.
    if (settings_web_baner_off == true){
    var my_web_baner = document.getElementById("header");
    my_web_baner.innerHTML = "";}
    else{
        if (settings_web_baner_custom == true){
        GM_addStyle('.site-banner {background-image: url(' + settings_web_baner_custom_img + ');background-size: cover;}');
        };
    };
    //Оформление ввода текста
    if (settings_type_here_custom_style == true) {
    GM_addStyle('textarea,.textarea,.textbox,select,.uploadfield,.avataruploadfield,select {color: #e5e5e5;background-color:rgba(0,0,0,.25)!important;border: ' + settings_style_type_here_border + 'px solid rgba(255,255,255,.35)!important;border-radius:'+ settings_style_type_here_border_radius +'px;box-shadow:inset 0 0 10px 5px rgba(0,0,0,.3);}textarea:focus,.textarea:focus,.textbox:focus,select:focus,.uploadfield:focus,.avataruploadfield:focus,select:focus {border: ' + settings_style_type_here_border + 'px solid rgba(255,255,255,.5)!important;background-color: rgba(0,0,0,.35)!important}');
    };
//
})();
