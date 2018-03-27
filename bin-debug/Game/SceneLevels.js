var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneLevels = (function (_super) {
    __extends(SceneLevels, _super);
    function SceneLevels() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/SceneLevelsSkin.exml";
        _this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_back, _this);
        //创建地图选项
        var row = 20;
        var col = 10;
        var spanx = 720 / col; //计算行x间隔
        var spany = 1136 / row; //计算列y间隔
        var group = new eui.Group(); //地图背景
        group.width = 720;
        group.height = (spany * 200); //算出最大尺寸
        //填充背景
        for (var i = 0; i <= (group.height / 1138); i++) {
            var img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * 1138;
            img.touchEnabled = false;
            _this.group_levels.addChildAt(img, 0);
        }
        //以正弦曲线绘制关卡图标的路径
        for (var i = 0; i < 200; i++) {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i / 2;
            icon.y = group.height - icon.y - spany;
            group.addChild(icon);
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_level, _this);
        }
        //开启位图缓存模式
        group.cacheAsBitmap = true;
        _this.group_levels.addChild(group);
        //卷动到最底层
        _this.group_levels.scrollV = group.height - 1100;
        return _this;
    }
    SceneLevels.Shared = function () {
        if (SceneLevels.shared == null) {
            SceneLevels.shared = new SceneLevels();
        }
        return SceneLevels.shared;
    };
    SceneLevels.prototype.onclick_back = function () {
        this.parent.addChild(SceneBegin.Shared());
        this.parent.removeChild(this);
    };
    SceneLevels.prototype.onclick_level = function (e) {
        var icon = e.currentTarget;
        console.log(icon.Level);
    };
    return SceneLevels;
}(eui.Component));
__reflect(SceneLevels.prototype, "SceneLevels");
//# sourceMappingURL=SceneLevels.js.map