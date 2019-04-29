/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
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
var Main = /** @class */ (function (_super_1) {
    __extends(Main, _super_1);
    function Main() {
        var _this = _super_1.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //注入自定义的素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //适配方式(全屏适配)
        App.StageUtils.startFullscreenAdaptation(650, 1000, this.onResize);
        //初始化
        this.initLifecycle();
        this.initScene();
        //加载资源配置文件
        this.loadResConfig();
    };
    Main.prototype.initLifecycle = function () {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
            App.TimerManager.pause();
            App.TweenUtils.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
            App.TimerManager.resume();
            App.TweenUtils.resume();
        };
    };
    Main.prototype.onResize = function () {
        App.ControllerManager.applyFunc(ControllerConst.RpgGame, RpgGameConst.GameResize);
    };
    Main.prototype.loadResConfig = function () {
        //初始化Resource资源加载库
        App.ResourceUtils.addConfig("resource/default.res.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_core.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_ui.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_battle.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_rpg.json", "resource/");
        App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function () {
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    };
    /**
     * 主题文件加载完成
     */
    Main.prototype.onThemeLoadComplete = function () {
        //模块初始化
        this.initModule();
        //设置加载进度界面
        App.SceneManager.runScene(SceneConsts.LOADING);
        //开启游戏
        new RpgTest();
        new ProtoBufTest();
        // new EUITest();
    };
    /**
     * 初始化所有场景
     */
    Main.prototype.initScene = function () {
        App.SceneManager.register(SceneConsts.LOADING, new LoadingScene());
        App.SceneManager.register(SceneConsts.UI, new UIScene());
        App.SceneManager.register(SceneConsts.Game, new GameScene());
        App.SceneManager.register(SceneConsts.RpgGame, new RpgGameScene());
    };
    /**
     * 初始化所有模块
     */
    Main.prototype.initModule = function () {
        App.ControllerManager.register(ControllerConst.Loading, new LoadingController());
    };
    return Main;
}(egret.DisplayObjectContainer));
//# sourceMappingURL=Main.js.map