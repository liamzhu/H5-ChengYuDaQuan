// TypeScript file
class LevelIcon extends eui.Button{
    public lb_level:eui.Label;
    public constructor() {
          super();
          this.skinName = "resource/eui_skins/LevelIconSkin.exml";
    }
    public get Level():number{
        return parseInt(this.lb_level.text);
    }
    public set Level(value:number){
        this.lb_level.text = value.toString();
    }
}