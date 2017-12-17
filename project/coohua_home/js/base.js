(function() {
    // 移动端导航栏控制
    $('.mobile__nav').on('click', function() {
        $('header nav').toggleClass('nav_toggle');
    });
    // 点击下载安卓版，滑屏-首页
    var ua = navigator.userAgent.toLowerCase();
    $('.click__download').click(function() {
        if (/iphone|ipad|ipod/.test(ua)) {
            // alert("酷划锁屏目前只能在安卓手机运行哦，请谅解。");//锁屏IOS
            var timer = null;
            clearTimeout(timer);
            $('.point__box').addClass('point__box-hover');
            timer = setTimeout(function() {
                $('.point__box').removeClass('point__box-hover');
            }, 1500);
        } else {
            window.location.href = "http://dd.myapp.com/16891/DA9F9023BC12CC43F8D52CBD8C6A4A75.apk?fsname=点此安装酷划锁屏.apk" //锁屏安卓
        }
    });
    // 淘新闻
    // 移动端下载
    $('.news__banner .mobile_btn').click(function() {
        if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href = "https://itunes.apple.com/cn/app/id1151319292?mt=8" //新闻赚IOS
        } else {
            window.location.href = "http://app.coohua.com/xinwenzhuan-shouji-guanwang.apk" //新闻赚安卓
        }
    });
    // pc端下载
    $('.news-ios').click(function() {
        window.location.href = "https://itunes.apple.com/cn/app/ku-hua-xin-wen-zhuan-zi-xun/id1151319292?mt=8" //新闻赚IOS
    });
    $('.news-android').click(function() {
        window.location.href = "http://app.coohua.com/xinwenzhuan-shouji-guanwang.apk" //新闻赚安卓
    });
    // 关于我们
    // pc交互显示相关模块
    $('.about__nav .item').hover(function(){
        $('.about__nav .item').removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        $('.about__content .content').css('display','none');
        $('.about__content .content').eq(idx).css('display','block');
    },function(){
        // console.log(2);
    });
    // 初始化模块
    var aIndex = window.location.search.split('=')[1];
    if(aIndex){
        $('.about__nav .item').removeClass('active');
        $('.about__nav .item').eq(aIndex).addClass('active');
        $('.about__content .content').css('display','none');
        $('.about__content .content').eq(aIndex).css('display','block');
    }
    // 广告合作
    // 媒体解决方案交互
    $('.advert__content .item').hover(function(){
        var idx = $(this).index();
        $('.advert__content .desc').removeClass('desc-hover');
        $('.advert__content .circle').removeClass('circle-hover');
        $('.advert__content .img').removeClass('img-hover');
        $('.advert__content .desc').eq(idx).addClass('desc-hover');
        $('.advert__content .circle').eq(idx).addClass('circle-hover');
        $('.advert__content .img').eq(idx).addClass('img-hover');
    },function(){});
    // 品牌类和效果类
    var whoData = {
        "brand":[{
            "logo":"../images/advert_icon/advert_3_brand_1.png",
            "desc":"提高兰芝在年轻女性护肤品市场中的品牌声量，进一步推广兰芝全球年轻高端化妆品品牌的形象ID，让兰芝“水分专家”助力女人“肌肤胜雪”的品牌理念深入人心",
            "info":[{
                "name":"投放时间",
                "desc":"2015.5.27-6.8"
            },{
                "name":"曝光次数",
                "desc":"2,153,011"
            },{
                "name":"点击率",
                "desc":"11.39%"
            },{
                "name":"点击次数",
                "desc":"245,294"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_1_1.png","../images/advert_icon/advert_3_brand_1_2.jpg","../images/advert_icon/advert_3_brand_1_2.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_brand_2.png",
            "desc":"强化海飞丝品牌知名度和“强力去屑”的产品优势，契合平台覆盖人群，以促销手段配合旺季销售，从而提升到店集客数。",
            "info":[{
                "name":"投放时间",
                "desc":"2016.3-2016.6"
            },{
                "name":"曝光次数",
                "desc":"29,083,500"
            },{
                "name":"点击率",
                "desc":"8%"
            },{
                "name":"点击次数",
                "desc":"2,326,680"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_2_1.png","../images/advert_icon/advert_3_brand_2_2.jpg","../images/advert_icon/advert_3_brand_2_2.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_brand_3.png",
            "desc":"汽车行业竞争激烈同质化营销严峻，MGGT需要一种新颖独立的传播渠道加强品牌影响力，通过酷划提供一个突围而出，加深品牌认知度和重塑产品差异化的契机，助力MGGT品牌打开营销新局。",
            "info":[{
                "name":"投放时间",
                "desc":"2015.6.2-2015.6.23"
            },{
                "name":"曝光次数",
                "desc":"3,427,786"
            },{
                "name":"点击率",
                "desc":"8.9%"
            },{
                "name":"定投时段点击",
                "desc":"305,073"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_3_1.png","../images/advert_icon/advert_3_brand_3_2.jpg","../images/advert_icon/advert_3_brand_3_2.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_brand_4.png",
            "desc":"聚焦三元奶粉的核心优势，提升品牌知名度同步提升品牌偏好度，在生活及媒介碎片化的环境下，通过酷划锁屏抓住年轻妈妈们的注意力与品牌进行深入沟通。",
            "info":[{
                "name":"投放时间",
                "desc":"2015.7.20-8.3"
            },{
                "name":"曝光次数",
                "desc":"13,918,845"
            },{
                "name":"点击率",
                "desc":"6.3%"
            },{
                "name":"点击次数",
                "desc":"844,968"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_4_1.png","../images/advert_icon/advert_3_brand_4_1.png","../images/advert_icon/advert_3_brand_4_1.png"]
        },{
            "logo":"../images/advert_icon/advert_3_brand_5.png",
            "desc":"迎合消费者对品牌的清晰需求，利用酷划首屏建立独树一帜的品牌形象，传递高品质品牌文化理念；以创意图片承载品牌与产品个性态度，第一时间打动消费者，高品质曝光同时进行线上引流购买。",
            "info":[{
                "name":"投放时间",
                "desc":"2017.1-2017.4"
            },{
                "name":"曝光次数",
                "desc":"41,774,604"
            },{
                "name":"点击率",
                "desc":"7.2%"
            },{
                "name":"点击次数",
                "desc":"3,018,192"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_5_1.png","../images/advert_icon/advert_3_brand_5_2.jpg","../images/advert_icon/advert_3_brand_5_3.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_brand_6.png",
            "desc":"与酷划锁屏深度合作，精准传播，覆盖品牌核心目标消费人群，提升品牌知名度，潜移默化影响目标消费者的选择偏好。",
            "info":[{
                "name":"投放时间",
                "desc":"2016.2.1-2016.2.14"
            },{
                "name":"曝光次数",
                "desc":"25,826,600"
            },{
                "name":"点击率",
                "desc":"8.3%"
            },{
                "name":"点击次数",
                "desc":"2,143,608"
            }],
            "imgs":["../images/advert_icon/advert_3_brand_6_1.png","../images/advert_icon/advert_3_brand_6_2.jpg","../images/advert_icon/advert_3_brand_6_2.jpg"]
        }],
        "effect":[{
            "logo":"../images/advert_icon/advert_3_effect_1.png",
            "desc":"与京东共享用户设备数据，个性化推荐和商品重定向，安装京东APP的用户直接唤起APP，未安装京东APP的用户唤起微信京东入口，通过定制京东优惠券抽奖互动活动引导用户跳转商城直接购买。",
            "info":[{
                "name":"投放时间",
                "desc":"2016.6"
            },{
                "name":"曝光次数",
                "desc":"18,750,000"
            },{
                "name":"点击率",
                "desc":"8%"
            },{
                "name":"点击次数",
                "desc":"15,502,000"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_1_1.png","../images/advert_icon/advert_3_effect_1_2.jpg","../images/advert_icon/advert_3_effect_1_3.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_effect_2.png",
            "desc":"春节期间让用户在品牌的新春祝福中感受浓浓温情，予以精神慰藉，触发用户以购物方式犒劳自己。通过锁屏传递唯品会品牌特色的祝福文案，以情感沟通带动品牌信息强势曝光，促进流量转化。",
            "info":[{
                "name":"投放时间",
                "desc":"2017.1.27-2017.2.2"
            },{
                "name":"曝光次数",
                "desc":"17,393,800"
            },{
                "name":"点击率",
                "desc":"11.4%"
            },{
                "name":"点击次数",
                "desc":"1,982,080"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_2_1.jpg","../images/advert_icon/advert_3_effect_2_2.jpg","../images/advert_icon/advert_3_effect_2_3.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_effect_3.png",
            "desc":"提升贝贝网的品牌曝光度，向目标消费者传递“领先母婴正品特卖商城”和“众多妈妈信赖”等关键信息，通过高曝光引发强关注度，将流量和关注转化为下载注册，助力提升业务表现。",
            "info":[{
                "name":"投放时间",
                "desc":"2016.8.4—2016.8.19"
            },{
                "name":"下载激活",
                "desc":"177,000"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_3_1.jpg","../images/advert_icon/advert_3_effect_3_2.jpg","../images/advert_icon/advert_3_effect_3_3.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_effect_4.png",
            "desc":"通过大范围高频次的首屏推送增加宜信指旺理财的品牌曝光，同时辅以“新用户下载注册送10000元理财金”的活动，吸引用户关注，带来新增用户转化。",
            "info":[{
                "name":"投放时间",
                "desc":"2015.6.11-2016.8.14"
            },{
                "name":"曝光次数",
                "desc":"85,267,238"
            },{
                "name":"点击率",
                "desc":"10.3%"
            },{
                "name":"点击次数",
                "desc":"8,798,327"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_4_1.jpg","../images/advert_icon/advert_3_effect_4_2.jpg","../images/advert_icon/advert_3_effect_4_2.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_effect_5.png",
            "desc":"通过大范围高频次的首屏推送增加人人贷的品牌曝光，同时辅以“新手专享标”活动吸引用户下载，带来新增用户。",
            "info":[{
                "name":"投放时间",
                "desc":"2015.6.11-2016.8.14"
            },{
                "name":"曝光次数",
                "desc":"85,267,238"
            },{
                "name":"点击率",
                "desc":"10.3%"
            },{
                "name":"点击次数",
                "desc":"8,798,327"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_5_1.jpg","../images/advert_icon/advert_3_effect_5_2.jpg","../images/advert_icon/advert_3_effect_5_3.jpg"]
        },{
            "logo":"../images/advert_icon/advert_3_effect_6.png",
            "desc":"塑造铜板街值得信赖的移动互联网理财平台形象，传递铜板街提供高效率、低成本投融资服务的产品信息，促进新增用户转化。",
            "info":[{
                "name":"投放时间",
                "desc":"2015.1.4-2015.6.10"
            },{
                "name":"曝光次数",
                "desc":"192,379,114"
            },{
                "name":"点击率",
                "desc":"8.5%"
            },{
                "name":"点击次数",
                "desc":"16,389,444"
            }],
            "imgs":["../images/advert_icon/advert_3_effect_6_1.jpg","../images/advert_icon/advert_3_effect_6_2.jpg","../images/advert_icon/advert_3_effect_6_3.jpg"]
        }]
    };
    // 当前显示类别
    var curType = 'brand';
    // 品牌类和效果类切换
    $('.advert__btn .btn').hover(function(){
        var idx = $(this).index();
        // title
        var bRtn = whoData.brand.map(function(val, index) {
            var cls = '';
            if(index==0){
                cls = 'active';
            }else{
                cls = '';
            }
            return '<div class="item item_'+(index+1)+' '+cls+'"></div>';
        });
        $('.advert__con .tab').html(bRtn);
        // content
        $('.advert__btn .btn').removeClass('active');
        $(this).addClass('active');
        if(idx==0){
            curType = 'brand';
            whoTitle(whoData.brand);
            whoHover(whoData.brand[0]);
        }else{
            curType = 'effect';
            whoTitle(whoData.effect);
            whoHover(whoData.effect[0]);
        }
    },function(){});
    // 类别切换
    $('.advert__con').on('mouseover','.item',function(){
        var idx = $(this).index();
        whoHover(whoData[curType][idx]);
    });
    // 默认显示品牌类，第一个品牌信息
    whoHover(whoData.brand[0]);
    /**
     * [whoTitle description]
     * @param  {[type]} arr [array]
     * @return {[type]}     [直接改变title选择栏]
     */
    function whoTitle(arr){
        // title
        var rtn = arr.map(function(val, index) {
            var cls = '';
            if(index==0){
                cls = 'active';
            }else{
                cls = '';
            }
            return '<div class="item item_'+(index+1)+' '+cls+'" style="background-image:url('+val.logo+');"></div>';
        });
        $('.advert__con .tab').html(rtn);
    }
    /**
     * [whoHover description]
     * @param  {[type]} data [json信息]
     * @return {[type]}      [直接改变相关内容]
     */
    function whoHover(data){
        // content
        $('.advert__con .logo').css('background-image','url('+data.logo+')');
        $('.advert__con .desc').text(data.desc);
        var rtn = data.info.map(function(val, idx) {
            return '<div class="data"><span>'+val.name+'：</span>'+val.desc+'</div>';
        });
        $('.advert__con .info').html(rtn);
        var iRtn = data.imgs.map(function(val, idx) {
            return '<div class="img img_'+(idx+1)+'" style="background-image:url('+val+');"></div>';
        });
        $('.advert__con .stage').html(iRtn);
    }
})();