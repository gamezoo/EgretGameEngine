/**
 * Created by egret on 15-1-6.
 */
class DemoView extends BaseEuiView{
    public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);
 
        this.skinName = "resource/skins/DemoSkin.exml";
    }
 
    button:eui.Button;
 
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI():void{
        super.initUI();
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.buttonClickHandler,this);
    }
    
    private buttonClickHandler(e:egret.TouchEvent):void{
        App.ViewManager.open(ViewConst.Friend);
    }
    
    
}
