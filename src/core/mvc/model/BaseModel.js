/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
var BaseModel = /** @class */ (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseModel($controller) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
    return BaseModel;
}());
//# sourceMappingURL=BaseModel.js.map