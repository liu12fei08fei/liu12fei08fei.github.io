/*
* @Author: liufeifei
* @Date:   2017-03-01 15:21:44
* @Last Modified by:   liufeifei
* @Last Modified time: 2017-03-01 15:25:21
*/
// 基本交互+图形生成
(function(){
    // 导航
    var munuBoo = true;
    $('.header__box-menu').on('click',function(){
        if(munuBoo){
            $('.header__box-nav').addClass('header__box-nav_animate-done');
            munuBoo = !munuBoo;
        }else{
            $('.header__box-nav').removeClass('header__box-nav_animate-done');
            munuBoo = !munuBoo;
        }
    });
    // 效果展示，图表数据
    var showData = {
        'advantage__box-chart1':'70<span>%</span>',
        'advantage__box-chart2':'9377',
        'advantage__box-chart3':'73<span>%</span>',
        'advantage__box-chart4':'68<span>%</span>',
        'advantage__box-chart5':'74<span>%</span>',
        'advantage__box-chart6':'63<span>%</span>'
    };
    // window改变检测
    $(window).resize(function(){
        winHeiFn('.banner__box');
        // 清空canvas
        $('.advantage__box-chart').find('canvas').remove();
        // 重新调用canvas
        chartCircle();
    });
    // banner高度
    winHeiFn('.banner__box');
    // 默认启动canvas
    chartCircle();
    // 公司微信
    $('.self__box-wechat').on('click',function(){
        $('.up__qr').show();
    });
    $('.up__qr').on('click',function(){
        $('.up__qr').hide();
    });
    /**
     * [chartCircle 封装canvas图表]
     * @return {[type]} [canvas]
     */
    function chartCircle(){
        var winWdt = $(window).width();
        if(winWdt<=920&&winWdt>720){
            $.each(showData,function(idx,ele) {
                upfitShowFn('.'+idx,90,20);
            });
        }else if(winWdt<=720&&winWdt>600){
            $.each(showData,function(idx,ele) {
                upfitShowFn('.'+idx,74,16);
            });
        }else if(winWdt<=600&&winWdt>400){
            $.each(showData,function(idx,ele) {
                upfitShowFn('.'+idx,60,12);
            });
        }else if(winWdt<=400){
            $.each(showData,function(idx,ele) {
                upfitShowFn('.'+idx,50,10);
            });
        }else{
            $.each(showData,function(idx,ele) {
                upfitShowFn('.'+idx,104,25);
            });
        }
    }
    /**
     * [upfitShowFn 效果展示中环形图]
     * @param  {[type]} cls [元素选择器]
     * @param  {[type]} r   [radius]
     * @param  {[type]} b   [border width]
     * @return {[type]}     [canvas]
     */
    function upfitShowFn(cls,r,b){
        var num = showData[cls.substr(1)];
        $(cls).find('div').html(num);
        $(cls).radialIndicator({barBgColor:'#e0e0e0',barColor:'#fcbd0e',radius:r,barWidth:b,initValue:parseInt(num),roundCorner:true,percentage:true,fontColor:'#707070',fontSize:50,displayNumber:false,});
    }
    /**
     * [winHeiFn 设置banner高度为页面高度]
     * @param  {[type]} ele [选择器]
     * @return {[type]}     [高度值]
     */
    function winHeiFn(ele){
        var winHei = $(window).height();
        $(ele).height(winHei);
    }
})();