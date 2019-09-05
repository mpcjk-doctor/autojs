var commonFunction = require('modules/commonFunction.js');

//===================================================
var swipeCount = 1;

whileScanVideo();

function whileScanVideo() {
    while (true) {
        scanVideo();
    }
}

//===================================================================
function scanVideo() {
    click(300, 600);
    //随机滑动
    var randomNum = random(5, 15);
    sleep(randomNum * 1000);
    toast("sleep:" + randomNum + ", swipeCount:" + swipeCount);
    gesture(1500, [random(300, 600), 1600], [random(300, 600), 200])
    swipeCount++;
}
