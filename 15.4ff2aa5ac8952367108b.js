(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{n97Z:function(t,n,e){"use strict";e.r(n),e.d(n,"HiddenStopwatchModule",function(){return v});var s=e("ofXK"),o=e("tyNb"),i=e("fXoL"),a=e("jhN1"),r=e("TGby");function c(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.hours.toString().padStart(2,"0"))}}function p(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.hours.toString())}}function h(t,n){1&t&&(i.Lb(0,"span",5),i.kc(1,"h"),i.Kb())}function l(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.minutes.toString().padStart(2,"0"))}}function b(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.minutes.toString())}}function u(t,n){1&t&&(i.Lb(0,"span",5),i.kc(1,"m"),i.Kb())}function d(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.seconds.toString().padStart(2,"0"))}}function m(t,n){if(1&t&&(i.Lb(0,"span",10),i.kc(1),i.Kb()),2&t){const t=i.Vb();i.wb(1),i.lc(t.seconds.toString())}}const g=[{path:"",component:(()=>{class t{constructor(t,n){this.titleService=t,this.metaService=n,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0,this.stopwatchMessage="start",this.startTime=0,this.totalTime=0,this.savedTime=0}ngOnInit(){this.titleService.setTitle("Stopwatch | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal stopwatch project."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.stopwatchInterval&&clearInterval(this.stopwatchInterval)}startStopButton(){this.stopwatchInterval?this.stop():this.start()}start(){this.startTime=(new Date).getTime(),this.stopwatchMessage="stop",this.stopwatchInterval=setInterval(()=>{this.calculateAndOutPutTime()})}stop(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0,this.stopwatchMessage="start",this.savedTime=this.totalTime}reset(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0,this.stopwatchMessage="start",this.startTime=0,this.savedTime=0,this.totalTime=0,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}calculateAndOutPutTime(){var t=(new Date).getTime();this.totalTime=0!=this.savedTime?t-this.startTime+this.savedTime:t-this.startTime,this.hours=Math.floor(this.totalTime/36e5),this.minutes=Math.floor(this.totalTime%36e5/6e4),this.seconds=Math.floor(this.totalTime%6e4/1e3),this.milliseconds=Math.floor(this.totalTime%1e3/10)}}return t.\u0275fac=function(n){return new(n||t)(i.Gb(a.c),i.Gb(a.b))},t.\u0275cmp=i.Ab({type:t,selectors:[["app-hidden-timer"]],decls:22,vars:10,consts:[[1,"stopwatchWrapper"],[1,"stopwatch"],[1,"stopwatchOutput","noselect"],["class","digit",4,"ngIf"],["class","sepatrator",4,"ngIf"],[1,"sepatrator"],[1,"digitSmall"],[1,"customSeparator"],[1,"controls"],[3,"click"],[1,"digit"]],template:function(t,n){1&t&&(i.Hb(0,"app-hidden-side-navigation"),i.Lb(1,"div",0),i.Lb(2,"div",1),i.Lb(3,"div",2),i.jc(4,c,2,1,"span",3),i.jc(5,p,2,1,"span",3),i.jc(6,h,2,0,"span",4),i.jc(7,l,2,1,"span",3),i.jc(8,b,2,1,"span",3),i.jc(9,u,2,0,"span",4),i.jc(10,d,2,1,"span",3),i.jc(11,m,2,1,"span",3),i.Lb(12,"span",5),i.kc(13,"s"),i.Kb(),i.Lb(14,"span",6),i.kc(15),i.Kb(),i.Kb(),i.Hb(16,"div",7),i.Lb(17,"div",8),i.Lb(18,"button",9),i.Sb("click",function(){return n.startStopButton()}),i.kc(19),i.Kb(),i.Lb(20,"button",9),i.Sb("click",function(){return n.reset()}),i.kc(21,"reset"),i.Kb(),i.Kb(),i.Kb(),i.Kb()),2&t&&(i.wb(4),i.Yb("ngIf",n.hours>=10),i.wb(1),i.Yb("ngIf",0!=n.hours&&n.hours<10),i.wb(1),i.Yb("ngIf",0!=n.hours),i.wb(1),i.Yb("ngIf",0!=n.hours),i.wb(1),i.Yb("ngIf",0==n.hours&&0!=n.minutes),i.wb(1),i.Yb("ngIf",0!=n.minutes||0!=n.hours),i.wb(1),i.Yb("ngIf",0!=n.minutes||0!=n.hours),i.wb(1),i.Yb("ngIf",0==n.minutes&&0==n.hours),i.wb(4),i.lc(n.milliseconds.toString().padStart(2,"0")),i.wb(4),i.lc(n.stopwatchMessage))},directives:[r.a,s.k],styles:[".stopwatchWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.stopwatch[_ngcontent-%COMP%]{position:relative;width:320px;height:128px;margin:30px auto 0;border:2px solid var(--game-page-border-color);border-radius:3px;background-color:var(--game-page-background-color)}.stopwatch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 10px;text-align:center;font-size:16px;width:75px;margin:0 5px 0 0;outline:none;float:left}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 5px 5px}.customSeparator[_ngcontent-%COMP%]{width:100%;height:0;margin:0;border-bottom:2px solid var(--game-page-border-color)}.stopwatchOutput[_ngcontent-%COMP%]{margin:10px 0 9px 10px}.digit[_ngcontent-%COMP%]{font-size:50px}.digitSmall[_ngcontent-%COMP%], .sepatrator[_ngcontent-%COMP%]{font-size:30px}.sepatrator[_ngcontent-%COMP%]{margin-right:12px}.noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media only screen and (max-width:826px){.stopwatchWrapper[_ngcontent-%COMP%]{float:left;margin:unset;margin-left:9px}}@media only screen and (max-width:800px){.stopwatchWrapper[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(n){return new(n||t)},imports:[[o.d.forChild(g)],o.d]}),t})();var f=e("LnT8");let v=(()=>{class t{}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(n){return new(n||t)},imports:[[s.b,w,f.a]]}),t})()}}]);