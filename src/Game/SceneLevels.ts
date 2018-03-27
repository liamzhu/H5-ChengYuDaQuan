class SceneLevels extends eui.Component {
    //单例
    private static shared: SceneLevels;
    public static Shared() {
        if(SceneLevels.shared == null) {
            SceneLevels.shared = new SceneLevels();
        }
        return SceneLevels.shared;
    }

    public btn_back: eui.Button;
    public group_levels:eui.Group;

    public constructor() {
        super();
        this.skinName = "resource/SceneLevelsSkin.exml";
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_back,this);

        //创建地图选项
        var row = 20;
        var col = 10;
        var spanx = 720 / col;      //计算行x间隔
        var spany = 1136 / row;     //计算列y间隔
        var group = new eui.Group();//地图背景
        group.width = 720;
        group.height = (spany * 200 );//算出最大尺寸
        //填充背景
        for(var i = 0;i <= (group.height / 1138) ;i++) {
            var img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * 1138;
            img.touchEnabled = false;
            this.group_levels.addChildAt(img,0);
        }
  
        //以正弦曲线绘制关卡图标的路径
        for(var i = 0; i<200;i++){
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i /2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i /2;
            icon.y = group.height - icon.y - spany;
            group.addChild(icon);
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_level,this);
        }   

        //开启位图缓存模式
        group.cacheAsBitmap = true;
        this.group_levels.addChild(group);
        //卷动到最底层
        this.group_levels.scrollV = group.height - 1100;
    }

    private onclick_back() {
        this.parent.addChild(SceneBegin.Shared());
        this.parent.removeChild(this);
    }

    private onclick_level(e:egret.TouchEvent){
        var icon = <LevelIcon>e.currentTarget;
        console.log(icon.Level);
    }    
}