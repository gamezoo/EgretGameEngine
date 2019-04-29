var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by husong on 4/10/15.
 */
var EasyLoading = /** @class */ (function (_super_1) {
    __extends(EasyLoading, _super_1);
    function EasyLoading() {
        var _this = _super_1.call(this) || this;
        _this.content = null;
        _this.speed = 10 / (1000 / 60);
        _this.init();
        return _this;
    }
    EasyLoading.prototype.init = function () {
        this.averageUtils = new AverageUtils();
        this.content = new egret.Sprite();
        this.content.graphics.beginFill(0x000000, 0.2);
        this.content.graphics.drawRect(0, 0, App.StageUtils.getWidth(), App.StageUtils.getHeight());
        this.content.graphics.endFill();
        this.content.touchEnabled = true;
        this.uiImageContainer = new egret.DisplayObjectContainer();
        this.uiImageContainer.x = this.content.width * 0.5;
        this.uiImageContainer.y = this.content.height * 0.5;
        this.content.addChild(this.uiImageContainer);
        RES.getResByUrl("resource/assets/load_Reel.png", function (texture) {
            var img = new egret.Bitmap();
            img.texture = texture;
            img.x = -img.width * 0.5;
            img.y = -img.height * 0.5;
            this.uiImageContainer.addChild(img);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    EasyLoading.prototype.showLoading = function () {
        App.StageUtils.getStage().addChild(this.content);
        App.TimerManager.doFrame(1, 0, this.enterFrame, this);
    };
    EasyLoading.prototype.hideLoading = function () {
        if (this.content && this.content.parent) {
            App.StageUtils.getStage().removeChild(this.content);
            this.uiImageContainer.rotation = 0;
        }
        App.TimerManager.remove(this.enterFrame, this);
    };
    EasyLoading.prototype.enterFrame = function (time) {
        this.averageUtils.push(this.speed * time);
        this.uiImageContainer.rotation += this.averageUtils.getValue();
    };
    return EasyLoading;
}(SingtonClass));
//# sourceMappingURL=EasyLoading.js.map