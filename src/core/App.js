/**
 * Created by yangsong on 2014/11/22.
 */
var App = /** @class */ (function () {
    function App() {
    }
    Object.defineProperty(App, "Http", {
        /**
         * Http请求
         * @type {Http}
         */
        get: function () {
            return Http.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Socket", {
        /**
         * Socket请求
         * @type {null}
         */
        get: function () {
            return Socket.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ControllerManager", {
        /**
         * 模块管理类
         * @type {ControllerManager}
         */
        get: function () {
            return ControllerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        /**
         * View管理类
         * @type {ViewManager}
         */
        get: function () {
            return ViewManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        /**
         * 场景管理类
         * @type {SceneManager}
         */
        get: function () {
            return SceneManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        /**
         * 调试工具
         * @type {DebugUtils}
         */
        get: function () {
            return DebugUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MessageCenter", {
        /**
         * 服务器返回的消息处理中心
         * @type {MessageCenter}
         */
        get: function () {
            return MessageCenter.getSingtonInstance(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TimerManager", {
        /**
         * 统一的计时器和帧刷管理类
         * @type {TimerManager}
         */
        get: function () {
            return TimerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DateUtils", {
        /**
         * 日期工具类
         * @type {DateUtils}
         */
        get: function () {
            return DateUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /**
         * 数学计算工具类
         * @type {MathUtils}
         */
        get: function () {
            return MathUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /**
         * 随机数工具类
         * @type {RandomUtils}
         */
        get: function () {
            return RandomUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        /**
         * 显示对象工具类
         * @type {DisplayUtils}
         */
        get: function () {
            return DisplayUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "BitmapNumber", {
        /*
         * 图片合成数字工具类
         * */
        get: function () {
            return BitmapNumber.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "GuideUtils", {
        /**
         * 引导工具类
         */
        get: function () {
            return GuideUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return StageUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EffectUtils", {
        /**
         * Effect工具类
         */
        get: function () {
            return EffectUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StringUtils", {
        /**
         * 字符串工具类
         */
        get: function () {
            return StringUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "CommonUtils", {
        /**
         * 通过工具类
         */
        get: function () {
            return CommonUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /**
         * 音乐管理类
         */
        get: function () {
            return SoundManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DeviceUtils", {
        /**
         * 设备工具类
         */
        get: function () {
            return DeviceUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EgretExpandUtils", {
        /**
         * 引擎扩展类
         */
        get: function () {
            return EgretExpandUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "KeyboardUtils", {
        /**
         * 键盘操作工具类
         */
        get: function () {
            return KeyboardUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RockerUtils", {
        /**
         * 摇杆操作工具类
         */
        get: function () {
            return RockerUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ShockUtils", {
        /**
         * 震动类
         */
        get: function () {
            return ShockUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        /**
         * 资源加载工具类
         */
        get: function () {
            return ResourceUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RenderTextureManager", {
        /**
         * RenderTextureManager
         */
        get: function () {
            return RenderTextureManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TextFlowMaker", {
        /**
         * TextFlow
         */
        get: function () {
            return TextFlowMaker.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "NotificationCenter", {
        get: function () {
            if (App._notificationCenter == null) {
                App._notificationCenter = new MessageCenter(1);
            }
            return App._notificationCenter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DelayOptManager", {
        /**
         * 分帧处理类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DelayOptManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ArrayUtils", {
        /**
         * 数组工具类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return ArrayUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EasyLoading", {
        /**
         * 通用Loading动画
         * @returns {any}
         * @constructor
         */
        get: function () {
            return EasyLoading.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DragonBonesFactory", {
        /**
         * DragonBones工厂类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DragonBonesFactory.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StarlingSwfFactory", {
        /**
         * StarlingSwf工厂类
         * @returns {StarlingSwfFactory}
         * @constructor
         */
        get: function () {
            return StarlingSwfFactory.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "AnchorUtils", {
        /**
         * AnchorUtils工具类
         */
        get: function () {
            return AnchorUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TouchEventHook", {
        /**
         * hack引擎的Touch事件
         */
        get: function () {
            return TouchEventHook.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "LocationPropertyUtils", {
        /**
         * H5地址栏参数操作工作类
         */
        get: function () {
            return LocationPropertyUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TweenUtils", {
        /**
         * Tween工具类
         */
        get: function () {
            return TweenUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化函数
     * @constructor
     */
    App.Init = function () {
        console.log("当前引擎版本: ", egret.Capabilities.engineVersion);
        //全局配置数据
        App.GlobalData = RES.getRes("global");
        //开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);
        App.DebugUtils.setThreshold(5);
        //扩展功能初始化
        App.EgretExpandUtils.init();
        //实例化Http请求
        App.Http.initServer(App.GlobalData.HttpSerever);
        //实例化ProtoBuf和Socket请求
        App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
    };
    /**
     * 请求服务器使用的用户标识
     * @type {string}
     */
    App.ProxyUserFlag = "";
    /**
     * 全局配置数据
     * @type {null}
     */
    App.GlobalData = null;
    /**
     * ProtoConfig
     * @type {null}
     */
    App.ProtoConfig = null;
    return App;
}());
//# sourceMappingURL=App.js.map