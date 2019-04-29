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
 * Created by egret on 15-1-16.
 */
var MyButton = /** @class */ (function (_super_1) {
    __extends(MyButton, _super_1);
    function MyButton(buttonName, $x, $y, func, target) {
        var _this = _super_1.call(this) || this;
        _this._func = func;
        _this._target = target;
        _this.width = 100;
        _this.height = 40;
        _this.graphics.beginFill(0x333333, 1);
        _this.graphics.drawRect(0, 0, _this.width, _this.height);
        _this.graphics.endFill();
        var txt = new egret.TextField();
        txt.textColor = 0xFFFFFF;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.text = buttonName;
        txt.width = _this.width;
        txt.height = 20;
        txt.size = 20;
        txt.y = (_this.height - txt.height) * 0.5;
        _this.addChild(txt);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        _this.x = $x;
        _this.y = $y;
        return _this;
    }
    MyButton.prototype.onClick = function (e) {
        e.stopPropagation();
        if (this._func)
            this._func.call(this._target);
    };
    return MyButton;
}(egret.Sprite));
//# sourceMappingURL=MyButton.js.map