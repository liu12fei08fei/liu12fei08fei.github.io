<?php
    // 1.将timestamp, nonce, token按字典序排序
    $timestamp = $_GET['timestamp']; //时间戳
    $nonce     = $_GET['noce']; //随机参数、随机字符串
    $token     = 'wechat'; //必须和微信公众平台上的token一致
    $signature = $_GET['signature']; //在微信平台已经加密好的字符串
    $array    = array( '$timestamp, $nonce, $token');
    sort( $array );
    // 2.将排序后的三个参数拼接之后用sha1加密
    $tmpstr = implode('', $array); //join
    $tmpstr = sha1( $tmpstr );
    // 3.将加密后的字符串与signature进行对比，判断该请求是否来自微信
    if( $tmpstr == $signature){
        echo $_GET['echostr'];
        exit;
    }
?>