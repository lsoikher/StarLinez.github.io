(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9wur":function(t,e,n){"use strict";n.r(e),n.d(e,"HiddenHexRGBConverterModule",function(){return f});var r=n("ofXK"),o=n("tyNb"),i=n("fXoL"),u=n("jhN1"),b=n("TGby"),p=n("3Pt+");function c(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",14),i.Lb(1,"div",15),i.Lb(2,"label",16),i.mc(3,"Hex color code (#RRGGBB)"),i.Kb(),i.Lb(4,"input",17),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().hexInput=e})("input",function(){return i.hc(t),i.Vb().convert()}),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Vb();i.wb(4),i.Yb("ngModel",t.hexInput)}}function a(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",18),i.Lb(1,"div",15),i.Lb(2,"label",19),i.mc(3,"Red (R)"),i.Kb(),i.Lb(4,"input",20),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().rgbRedInput=e})("input",function(){return i.hc(t),i.Vb().convert()}),i.Kb(),i.Kb(),i.Lb(5,"div",15),i.Lb(6,"label",21),i.mc(7,"Green (G)"),i.Kb(),i.Lb(8,"input",22),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().rgbGreenInput=e})("input",function(){return i.hc(t),i.Vb().convert()}),i.Kb(),i.Kb(),i.Lb(9,"div",15),i.Lb(10,"label",23),i.mc(11,"Blue (B)"),i.Kb(),i.Lb(12,"input",24),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().rgbBlueInput=e})("input",function(){return i.hc(t),i.Vb().convert()}),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Vb();i.wb(4),i.Yb("ngModel",t.rgbRedInput),i.wb(4),i.Yb("ngModel",t.rgbGreenInput),i.wb(4),i.Yb("ngModel",t.rgbBlueInput)}}function l(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",25),i.Lb(1,"div",26),i.Lb(2,"label",27),i.mc(3,"Hex color code"),i.Kb(),i.Lb(4,"input",28),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().hexOutput=e}),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Vb();i.wb(4),i.Yb("ngModel",t.hexOutput)}}function d(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",29),i.Lb(1,"div",26),i.Lb(2,"label",30),i.mc(3,"RGB color code"),i.Kb(),i.Lb(4,"input",31),i.Sb("ngModelChange",function(e){return i.hc(t),i.Vb().rgbOutput=e}),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Vb();i.wb(4),i.Yb("ngModel",t.rgbOutput)}}function g(t,e){if(1&t&&(i.Lb(0,"tr"),i.Hb(1,"td"),i.Lb(2,"td"),i.mc(3),i.Kb(),i.Hb(4,"td"),i.Lb(5,"td"),i.mc(6),i.Kb(),i.Hb(7,"td"),i.Kb()),2&t){const t=e.index,n=i.Vb();i.wb(1),i.kc("background",n.colorShades[t]),i.wb(2),i.nc(n.colorShades[t]),i.wb(3),i.nc(n.colorTints[t]),i.wb(1),i.kc("background",n.colorTints[t])}}const h=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.inputSetToHex=!0,this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.colorShades=new Array(11),this.colorTints=new Array(11)}ngOnInit(){this.titleService.setTitle("Hex & RGB Converter | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal Hex & RGB converter."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}swapConversion(){this.inputSetToHex=!this.inputSetToHex,this.clearInput()}convert(){if(this.inputSetToHex){var t=this.hexToRGB(this.hexInput);t?(this.rgbOutput="rgb("+t.red+", "+t.green+", "+t.blue+")",this.createTintsAndShades(this.hexInput)):(this.rgbOutput=null,this.clearShadesAndTintsOutput()),this.color=this.rgbOutput}else this.hexOutput="#"+this.rgbToHex(this.rgbRedInput,this.rgbGreenInput,this.rgbBlueInput),this.createTintsAndShades(this.hexOutput),this.color=this.hexOutput}createTintsAndShades(t){var e=this.hexToRGB(t);this.colorShades=this.calculateShades(e),this.colorTints=this.calculateTints(e)}calculateShades(t){for(var e=[],n=0;n<10;n++)e[n]="#"+this.rgbToHex(t.red*(1-.1*n),t.green*(1-.1*n),t.blue*(1-.1*n));return e.push("#000000"),e}calculateTints(t){for(var e=[],n=0;n<10;n++)e[n]="#"+this.rgbToHex(t.red+(255-t.red)*n*.1,t.green+(255-t.green)*n*.1,t.blue+(255-t.blue)*n*.1);return e.push("#FFFFFF"),e}hexToRGB(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{red:parseInt(e[1],16),green:parseInt(e[2],16),blue:parseInt(e[3],16)}:null}rgbToHex(t,e,n){return(this.intToHex(t)+this.intToHex(e)+this.intToHex(n)).toUpperCase()}intToHex(t){return this.pad(Math.min(Math.max(Math.round(t),0),255).toString(16),2)}pad(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n}clearInput(){this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.clearShadesAndTintsOutput()}clearShadesAndTintsOutput(){this.colorShades=new Array(11),this.colorTints=new Array(11)}}return t.\u0275fac=function(e){return new(e||t)(i.Gb(u.c),i.Gb(u.b))},t.\u0275cmp=i.Ab({type:t,selectors:[["app-hidden-hexrgb-converter"]],decls:23,vars:7,consts:[[1,"contentPageOverride"],[1,"inputWrapper"],["class","hexInputWrapper",4,"ngIf"],["class","rgbInputWrapper",4,"ngIf"],[1,"controlsWrapper"],[1,"buttonStyle","clear",3,"click"],[1,"buttonStyle","swap",3,"click"],[1,"outputWrapper"],["class","hexOutputWrapper",4,"ngIf"],["class","rgbOutputWrapper",4,"ngIf"],[1,"colorPreviewLabel"],[1,"colorPreview"],[1,"colorTable"],[4,"ngFor","ngForOf"],[1,"hexInputWrapper"],[1,"inputLabelWrapper"],["for","hexInput"],["name","hexInput","id","hexInput","type","text","placeholder","#000000",1,"textInput",3,"ngModel","ngModelChange","input"],[1,"rgbInputWrapper"],["for","rgbRedInput"],["name","rgbRedInput","id","rgbRedInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbGreenInput"],["name","rgbGreenInput","id","rgbGreenInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbBlueInput"],["name","rgbBlueInput","id","rgbBlueInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],[1,"hexOutputWrapper"],[1,"outputLabelWrapper"],["for","hexOutput"],["name","hexOutput","id","hexOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"],[1,"rgbOutputWrapper"],["for","rgbOutput"],["name","rgbOutput","id","rgbOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.Hb(0,"app-hidden-side-navigation"),i.Lb(1,"div",0),i.Lb(2,"div",1),i.lc(3,c,5,1,"div",2),i.lc(4,a,13,3,"div",3),i.Kb(),i.Lb(5,"div",4),i.Lb(6,"button",5),i.Sb("click",function(){return e.clearInput()}),i.Lb(7,"span"),i.mc(8,"\u2716"),i.Kb(),i.mc(9," Clear Input"),i.Kb(),i.Lb(10,"button",6),i.Sb("click",function(){return e.swapConversion()}),i.Lb(11,"span"),i.mc(12,"\u21c5"),i.Kb(),i.mc(13," Swap Conversion"),i.Kb(),i.Kb(),i.Lb(14,"div",7),i.lc(15,l,5,1,"div",8),i.lc(16,d,5,1,"div",9),i.Lb(17,"p",10),i.mc(18,"Color preview"),i.Kb(),i.Hb(19,"div",11),i.Kb(),i.Lb(20,"div",12),i.Lb(21,"table"),i.lc(22,g,8,6,"tr",13),i.Kb(),i.Kb(),i.Kb()),2&t&&(i.wb(3),i.Yb("ngIf",e.inputSetToHex),i.wb(1),i.Yb("ngIf",!e.inputSetToHex),i.wb(11),i.Yb("ngIf",!e.inputSetToHex),i.wb(1),i.Yb("ngIf",e.inputSetToHex),i.wb(3),i.kc("background",e.color),i.wb(3),i.Yb("ngForOf",e.colorShades))},directives:[b.a,r.k,r.j,p.b,p.e,p.h,p.j],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}#hexInput[_ngcontent-%COMP%], #hexOutput[_ngcontent-%COMP%], #rgbOutput[_ngcontent-%COMP%]{width:330px}#rgbBlueInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%], #rgbRedInput[_ngcontent-%COMP%]{width:100px}#rgbGreenInput[_ngcontent-%COMP%], #rgbRedInput[_ngcontent-%COMP%]{margin-right:15px}.inputWrapper[_ngcontent-%COMP%], .outputWrapper[_ngcontent-%COMP%]{width:330px;margin:0 auto}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:330px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}.colorPreviewLabel[_ngcontent-%COMP%]{margin:6px 0 2px 3px}.colorPreview[_ngcontent-%COMP%]{width:328px;height:65px;border:1px solid var(--input-box-border-color);border-radius:5px}.colorTable[_ngcontent-%COMP%]{width:330px;margin:15px auto 0;text-align:center}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:70px;height:30px;text-align:left;padding-left:3px}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:20px}@media only screen and (max-width:1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width:1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width:800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width:444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}"]}),t})()}];let s=(()=>{class t{}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)},imports:[[o.d.forChild(h)],o.d]}),t})();var x=n("LnT8");let f=(()=>{class t{}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)},imports:[[r.b,s,x.a]]}),t})()}}]);