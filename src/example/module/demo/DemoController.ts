/**
 * Created by yangsong on 15-1-6.
 */
class DemoController extends BaseController{
    
    //private proxy:DemoProxy;
    private demoView:DemoView;
    
    public constructor(){
        super();
 
        //this.proxy = new DemoProxy(this);
 
        this.demoView = new DemoView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Demo, this.demoView);
    }
}
