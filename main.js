auto();
var commonFunction = require('modules/commonFunction.js');

var scriptName_appName = {
    zhifubao: "支付宝",
    shandianhezi: "闪电盒子",
    souhuzixun: "搜狐资讯",
    jukandian: "聚看点",
    xiangkan: "想看",
    weili: "微鲤",
    zhongqingkandian: "中青看点",
    diandianxinwen: "点点新闻",
    ertoutiao: "二头条",
    guangyingxinwen: "光影新闻",
    zhangshangredian: "掌上热点",
    wanzhuanxingqiu: "玩赚星球",
    tutoutiao: "兔头条",
    shuabaoduanshipin: "刷宝短视频",
    huoshanjisuban: "火山极速版",
    kuaishoujisuban: "快手极速版",
    quanminxiaoshipin: "全民小视频"
};

var scriptNameArray = commonFunction.objTransKeyArray(scriptName_appName);
var appZHNameArray = commonFunction.objTransValueArray(scriptName_appName);

//==============================程序启动区=======================================
//程序主入口
mainEntrence();
//==============================程序主要步骤=======================================
function mainEntrence() {

    

    //8点以前顺序刷小视频
    var isIExec = true;
    while (isIExec) {
        if (new Date().getHours() < 8) {
            isIExec = false;
        }
        sleep(60 * 1000);//每一分钟检测一次
    }
    //停止脚本
    toastLog(appZHNameArray[indexOption] + "执行停止");
    commonFunction.stopCurrent(exectuion);

    //顺序刷小视频
    scanLittlVideos();

}


//顺序刷小视频
function scanLittlVideos() {
    var littleVideoAppNameArray = [appName_shuabaoduanshipin, appName_huoshanjisuban, appName_kuaishoujisuban, appName_quanminxiaoshipin];
    var normalRumTime = 20 * 60;//每次阅读的时间(20分钟)
    while (true) {
        for (var i = 0; i < littleVideoAppNameArray.length; i++) {
            commonFunction.enterMainPage(littleVideoAppNameArray[i]);
            exec(littleVideoAppNameArray[i], normalRumTime);
        }
    }
}

//执行脚本
function exec(appName, seconds) {
    var startDate = new Date();//开始时间
    var exectuion = engines.execScriptFile("/sdcard/脚本/modules/xiaoshipin.js");
    //计时器，检测时间
    var isIExec = true;
    while (isIExec) {
        //计时
        var runSeconds = ((new Date().getTime()) - startDate.getTime()) / 1000;
        toastLog(appName + "已执行" + runSeconds + "秒");
        if (runSeconds > seconds) {
            isIExec = false;
        }
        sleep(60 * 1000);//每一分钟检测一次
    }
    //停止脚本
    toastLog(appName + "执行停止");
    commonFunction.stopCurrent(exectuion);
}