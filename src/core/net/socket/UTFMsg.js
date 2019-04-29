/**
 * Created by yangsong on 15-2-11.
 */
var UTFMsg = /** @class */ (function () {
    /**
     * 构造函数
     */
    function UTFMsg() {
    }
    /**
     * 接收消息处理
     * @param msg
     */
    UTFMsg.prototype.receive = function (socket) {
        var msg = socket.readUTF();
        var obj = this.decode(msg);
        if (obj) {
            App.MessageCenter.dispatch(obj.key, obj.body);
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    UTFMsg.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    UTFMsg.prototype.decode = function (msg) {
        Log.warn("decode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    UTFMsg.prototype.encode = function (msg) {
        Log.warn("encode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    return UTFMsg;
}());
//# sourceMappingURL=UTFMsg.js.map