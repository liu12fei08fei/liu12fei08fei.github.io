/*
* @Author: liufeifei
* @Date:   2017-03-01 19:18:42
* @Last Modified by:   liufeifei
* @Last Modified time: 2017-03-02 10:57:12
*/
(function(){
    // 滚动执行动画距离集合
    var animateArr = [];
    // 滚动调用对应元素集合
    var elementArr = [];
    // 添加动画的元素集合
    var animateEles = {
        '.banner__box':[
            '.header__box',
            '.header__box-logo',
            '.header__box-menu',
            '.header__box-nav_item1',
            '.header__box-nav_item2',
            '.header__box-nav_item3',
            '.banner__box-desc',
            '.banner__box-name'
        ],
        '.partner__box':[
            '.partner__box-item0',
            '.partner__box-item1',
            '.partner__box-item2',
            '.partner__box-item3',
            '.partner__box-item4',
            '.target__box-img',
            '.target__box-h2',
            '.target__box-item1',
            '.target__box-item2',
            '.target__box-item3',
            '.target__box-icon1',
            '.target__box-icon2',
            '.target__box-icon3'
        ],
        '.goal__box':[
            '.goal__box-img',
            '.goal__box-border',
            '.goal__box-item1',
            '.goal__box-item2',
            '.goal__box-item3',
            '.goal__box-item4',
            '.goal__box-item5',
            '.goal__box-icon1',
            '.goal__box-icon2',
            '.goal__box-icon3',
            '.goal__box-icon4',
            '.goal__box-icon5'
        ],
        '.solution__box':[
            '.solution__box-h2',
            '.solution__box-item1',
            '.solution__box-item2',
            '.solution__box-item3',
            '.solution__box-item4',
            '.solution__box-icon1',
            '.solution__box-icon2',
            '.solution__box-icon3',
            '.solution__box-icon4',
            '.solution__box-name1',
            '.solution__box-name2',
            '.solution__box-name3',
            '.solution__box-name4'
        ],
        '.weal__box':[
            '.weal__box-img',
            '.weal__box-name',
            '.weal__box-desc',
            '.weal__box-more'
        ],
        '.advantage__box':[
            '.advantage__box-h2',
            '.advantage__box-item1',
            '.advantage__box-item2',
            '.advantage__box-item3',
            '.advantage__box-item4',
            '.advantage__box-item5',
            '.advantage__box-item6'
        ],
        '.teamwork__box':[
            '.teamwork__box-item1',
            '.teamwork__box-item2',
            '.teamwork__box-item3',
            '.teamwork__box-item4',
            '.self__box-h2',
            '.self__box-item1',
            '.self__box-item2',
            '.self__box-item3'
        ]
    };
    $.each(animateEles,function(key,val) {
        // 集合滚动动画距离
        animateArr.push($(key).offset().top);
        // 集合滚动元素
        elementArr.push(key);
        // 为动画元素设置默认样式
        $.each(animateEles[key],function(idx,val) {
            $(val).removeClass(val.substr(1)+'_animate-done').addClass(val.substr(1)+'_animate-init');
        });
    });
    // 为第一页设置默认
    animateScrollFn(elementArr[0]);
    // 页面宽度
    var winWdt = $(window).width();
    var scrollEle = $(document);
    // 页面启动移动优化模式
    if(winWdt<=800){
        scrollEle = $('.page__box-webapp');
        // $('.header__box-nav_item').removeClass('header__box-nav_item1 header__box-nav_item2 header__box-nav_item3');
    }
    // 对应高度值
    var aWid = eleHeight('.teamwork__box');
    var bWid = eleHeight('.self__box');
    var cWid = eleHeight('.footer__box');
    var allWid = aWid+bWid+cWid+100;
    // 获得窗口高度
    var winHei = eleHeight(window);
    scrollEle.scroll(function(event) {
        // 获得滚动距离
        var top = scrollEle.scrollTop();
        // 导航智能设定
        var navPower = 0;
        // 执行对应组件
        $.each(animateArr,function(inx,val) {
            navPower = inx;
            if(top>=animateArr[inx]-100){
                animateScrollFn(elementArr[inx]);
            }else{
                return false;
            }
        });
        // 导航
        if(top>=80){
            $('.header__box').addClass('header__box-80');
        }else{
            $('.header__box').removeClass('header__box-80');
        }
        // 最后一页优化
        if(winHei>allWid&&navPower==6){
            setTimeout(function(){
                animateScrollFn(elementArr[elementArr.length-1]);
            },1750);
        }
    });
    /**
     * [eleHeight 获取元素块的高度值]
     * @param  {[type]} ele [选择器]
     * @return {[type]}     [高度值]
     */
    function eleHeight(ele){
        return $(ele).outerHeight(true);
    }
    /**
     * [animateScrollFn 滚动动画组件]
     * @param  {[type]} ele [元素选择器]
     * @return {[type]}     [为元素添加class]
     */
    function animateScrollFn(ele){
        $.each(animateEles[ele],function(idx,val) {
            $(val).removeClass(val.substr(1)+'_animate-init').addClass(val.substr(1)+'_animate-done');
        });
    }
    // 测试动画[废弃]
    // $.each(animateEles,function(key,val){
    //     animateClickFn(key);
    // });
    /**
     * [animateClickFn 用来检测动画效果，废弃]
     * @param  {[type]} ele [元素选择器]
     * @return {[type]}     [为元素添加和删除class]
     */
    function animateClickFn(ele){
        var animateBoo = true;
        $(ele).click(function(){
            if(animateBoo){
                $.each(animateEles[ele],function(idx,val) {
                    $(val).removeClass(val.substr(1)+'_animate-done').addClass(val.substr(1)+'_animate-init');
                });
                animateBoo = !animateBoo;
            }else{
                $.each(animateEles[ele],function(idx,val) {
                    $(val).removeClass(val.substr(1)+'_animate-init').addClass(val.substr(1)+'_animate-done');
                });
                animateBoo = !animateBoo;
            }
        });
    }
})();