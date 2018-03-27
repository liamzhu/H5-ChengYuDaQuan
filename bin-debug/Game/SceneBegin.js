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
// TypeScript file
var SceneBegin = (function (_super) {
    __extends(SceneBegin, _super);
    function SceneBegin() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/SceneBeginSkin.exml";
        _this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_begin, _this);
        return _this;
    }
    SceneBegin.Shared = function () {
        if (SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    };
    SceneBegin.prototype.onclick_begin = function () {
        //console.log("game begin!");
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    };
    return SceneBegin;
}(eui.Component));
__reflect(SceneBegin.prototype, "SceneBegin");
//# sourceMappingURL=SceneBegin.js.map