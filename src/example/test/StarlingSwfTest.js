/**
 * Created by yangsong on 15-3-27.
 * StarlingSwf测试
 */
var StarlingSwfTest = /** @class */ (function () {
    function StarlingSwfTest() {
        //StarlingSwf使用
        App.StarlingSwfFactory.addSwf("bossMC", RES.getRes("bossMC_swf_json"), RES.getRes("bossMC_json"));
        var mc = App.StarlingSwfFactory.makeMc("boss_whiteBear");
    }
    return StarlingSwfTest;
}());
//# sourceMappingURL=StarlingSwfTest.js.map