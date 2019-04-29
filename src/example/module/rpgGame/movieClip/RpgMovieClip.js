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
 * Created by yangsong on 2017/10/11.
 */
var Dir;
(function (Dir) {
    Dir[Dir["Top"] = 0] = "Top";
    Dir[Dir["TopRight"] = 1] = "TopRight";
    Dir[Dir["Right"] = 2] = "Right";
    Dir[Dir["BottomRight"] = 3] = "BottomRight";
    Dir[Dir["Bottom"] = 4] = "Bottom";
    Dir[Dir["BottomLeft"] = 5] = "BottomLeft";
    Dir[Dir["Left"] = 6] = "Left";
    Dir[Dir["TopLeft"] = 7] = "TopLeft";
})(Dir || (Dir = {}));
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.Prepare = "prepare";
    Action.Attack = "attack";
    Action.Attacked = "attacked";
    Action.Die = "die";
    Action.Move = "move";
    Action.Stand = "stand";
    return Action;
}());
var RpgMovieClip = /** @class */ (function (_super_1) {
    __extends(RpgMovieClip, _super_1);
    function RpgMovieClip() {
        var _this = _super_1.call(this) || this;
        _this.McFrameTime = 1000 / 8;
        return _this;
    }
    RpgMovieClip.prototype.setBitmap = function (texture, scaleX) {
        this.texture = texture;
        this.scaleX = scaleX;
        App.AnchorUtils.setAnchorX(this, 0.5);
        App.AnchorUtils.setAnchorY(this, 1);
    };
    RpgMovieClip.prototype.setDefault = function (resName) {
        this.setBitmap(RES.getRes(resName), 1);
    };
    RpgMovieClip.prototype.setMcData = function (mcData) {
        this.mcData = mcData;
    };
    RpgMovieClip.prototype.runAction = function (advancedTime) {
        if (!this.mcData) {
            return;
        }
        this.currFrameTime += advancedTime;
        if (this.currFrameTime >= this.McFrameTime) {
            this.currFrameTime = 0;
            this.currFrame++;
            if (this.currFrame > this.endFrame) {
                this.currFrame = this.startFrame;
                this.currPlayNum++;
            }
            if (this.totalPlayNum && this.currPlayNum >= this.totalPlayNum) {
                this.complateAction && this.complateAction.apply(this.complateActionObj);
            }
            else {
                var bitmapTexture = this.mcData.getTextureByFrame(this.currFrame);
                this.setBitmap(bitmapTexture, this.scaleX);
            }
        }
    };
    RpgMovieClip.prototype.gotoAction = function (gotoAction, gotoDir, cover) {
        if (cover === void 0) { cover = false; }
        if (!this.mcData) {
            return;
        }
        if (!cover) {
            if (this.currAction == gotoAction && this.currDir == gotoDir) {
                return;
            }
        }
        var totalPlayNum = 0;
        if (gotoAction == Action.Attack
            || gotoAction == Action.Attacked
            || gotoAction == Action.Die) {
            totalPlayNum = 1;
        }
        //0上 1右上 2右 3右下 4下
        var dir;
        var scaleX;
        if (gotoDir == Dir.Top) {
            dir = 0;
            scaleX = 1;
        }
        else if (gotoDir == Dir.TopRight) {
            dir = 1;
            scaleX = 1;
        }
        else if (gotoDir == Dir.Right) {
            dir = 2;
            scaleX = 1;
        }
        else if (gotoDir == Dir.BottomRight) {
            dir = 3;
            scaleX = 1;
        }
        else if (gotoDir == Dir.Bottom) {
            dir = 4;
            scaleX = 1;
        }
        else if (gotoDir == Dir.BottomLeft) {
            dir = 3;
            scaleX = -1;
        }
        else if (gotoDir == Dir.Left) {
            dir = 2;
            scaleX = -1;
        }
        else if (gotoDir == Dir.TopLeft) {
            dir = 1;
            scaleX = -1;
        }
        var actionName = gotoAction + "_" + dir;
        var currLabel;
        for (var i = 0; i < this.mcData.labels.length; i++) {
            if (actionName == this.mcData.labels[i].name) {
                currLabel = this.mcData.labels[i];
            }
        }
        if (this.currAction == gotoAction && !cover) {
            this.currFrame = currLabel.frame + (this.currFrame - this.startFrame);
        }
        else {
            this.currFrame = currLabel.frame;
            this.currFrameTime = 0;
        }
        this.startFrame = currLabel.frame;
        this.endFrame = currLabel.end;
        this.currAction = gotoAction;
        this.currDir = gotoDir;
        this.totalPlayNum = totalPlayNum;
        this.currPlayNum = 0;
        var bitmapTexture = this.mcData.getTextureByFrame(this.currFrame);
        this.setBitmap(bitmapTexture, scaleX);
    };
    RpgMovieClip.prototype.setComplateAction = function (complateAction, complateActionObj) {
        this.complateAction = complateAction;
        this.complateActionObj = complateActionObj;
    };
    RpgMovieClip.prototype.destroy = function () {
        App.DisplayUtils.removeFromParent(this);
        ObjectPool.push(this);
        this.texture = null;
        this.mcData = null;
        this.currAction = null;
        this.currDir = null;
        this.currFrame = null;
        this.startFrame = null;
        this.endFrame = null;
        this.currFrameTime = null;
        this.totalPlayNum = null;
        this.currPlayNum = null;
        this.complateAction = null;
        this.complateActionObj = null;
    };
    RpgMovieClip.prototype.getCurrAction = function () {
        return this.currAction;
    };
    RpgMovieClip.prototype.getCurrDir = function () {
        return this.currDir;
    };
    return RpgMovieClip;
}(egret.Bitmap));
//# sourceMappingURL=RpgMovieClip.js.map