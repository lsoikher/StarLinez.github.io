(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{TJee:function(e,t,s){"use strict";s.r(t),s.d(t,"MaplestoryWeekliesModule",(function(){return N}));var a=s("ofXK"),n=s("tyNb"),i=s("twyJ"),l=s("fXoL"),o=s("jhN1"),r=s("/SLC"),c=s("3Pt+"),d=s("i0ov");function k(e,t){if(1&e&&(l.Mb(0,"option",16),l.lc(1),l.Lb()),2&e){const e=t.$implicit,s=l.Wb(2);l.Zb("selected",s.resetUtcOffset==e.resetUtcOffset),l.xb(1),l.mc(e.name)}}function g(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",13),l.lc(1," Region: "),l.Mb(2,"select",14),l.Tb("change",(function(t){return l.hc(e),l.Wb().regionChange(t)})),l.kc(3,k,2,2,"option",15),l.Lb(),l.Lb()}if(2&e){const e=l.Wb();l.xb(3),l.Zb("ngForOf",e.regions)}}function m(e,t){1&e&&(l.Mb(0,"p",17),l.lc(1,"Edit mode active, click on the names of weeklies to disable them (this will prevent them from showing up outside of the edit mode)"),l.Ib(2,"br"),l.lc(3,"Adding custom weeklies is possible with the option at the bottom of each list (custom weeklies cannot be disabled but are instead removed)"),l.Lb())}function h(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",18),l.Mb(1,"div",19),l.Mb(2,"label",20),l.lc(3,"Character Name"),l.Lb(),l.Mb(4,"input",21),l.Tb("ngModelChange",(function(t){l.hc(e);const s=l.Wb();return s.weeklies[s.characterIndex].characterName=t})),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=l.Wb();l.xb(4),l.Zb("ngModel",e.weeklies[e.characterIndex].characterName)}}function p(e,t){1&e&&(l.Mb(0,"div"),l.lc(1,' All weeklies are disabled, click on the "Edit Weeklies" button to enable weeklies. '),l.Lb())}function b(e,t){if(1&e){const e=l.Nb();l.Mb(0,"input",34),l.Tb("ngModelChange",(function(t){return l.hc(e),l.Wb(2).$implicit.completed=t}))("change",(function(){return l.hc(e),l.Wb(4).weekliesChangeHandler()})),l.Lb()}if(2&e){const e=l.Wb(2),t=e.index,s=e.$implicit;l.bc("name","weeklyBosses",t,""),l.bc("id","weeklyBosses",t,""),l.Zb("ngModel",s.completed)}}function u(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",35),l.Mb(1,"i",36),l.Tb("click",(function(){l.hc(e);const t=l.Wb(2).index;return l.Wb(2).moveWeeklyBoss(t,"up")})),l.Lb(),l.Mb(2,"i",37),l.Tb("click",(function(){l.hc(e);const t=l.Wb(2).index;return l.Wb(2).moveWeeklyBoss(t,"down")})),l.Lb(),l.Lb()}}function y(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",28),l.Mb(1,"div",29),l.Ib(2,"img",30),l.Lb(),l.Mb(3,"label",31),l.Tb("click",(function(){l.hc(e);const t=l.Wb().index;return l.Wb(2).disableWeeklyBoss(t)})),l.lc(4),l.Lb(),l.Mb(5,"div",18),l.kc(6,b,1,3,"input",32),l.kc(7,u,3,0,"div",33),l.Lb(),l.Lb()}if(2&e){const e=l.Wb(),t=e.$implicit,s=e.index,a=l.Wb(2);l.Zb("ngClass",t.enabled?"enabledTask":"disabledTask"),l.xb(2),l.ac("alt",t.name),l.Zb("src","custom"!=t.type?"assets/Games/Maplestory/Weeklies/"+t.image:t.image,l.ic),l.xb(1),l.bc("for","weeklyBosses",s,""),l.xb(1),l.mc(t.name),l.xb(2),l.Zb("ngIf",!a.editModeActive),l.xb(1),l.Zb("ngIf",a.editModeActive)}}function f(e,t){if(1&e&&(l.Kb(0),l.kc(1,y,8,7,"div",27),l.Jb()),2&e){const e=t.$implicit,s=l.Wb(2);l.xb(1),l.Zb("ngIf",e.enabled||s.editModeActive)}}function w(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",38),l.Tb("click",(function(){return l.hc(e),l.Wb(2).addCustomWeekly("boss")})),l.Mb(1,"div",29),l.Ib(2,"img",39),l.Lb(),l.Mb(3,"label"),l.lc(4,"Add Custom Weekly"),l.Lb(),l.Mb(5,"div",18),l.Mb(6,"div",40),l.Ib(7,"i",41),l.Lb(),l.Lb(),l.Lb()}}function M(e,t){if(1&e&&(l.Mb(0,"div",22),l.Mb(1,"p",23),l.lc(2,"Weekly Bosses"),l.Lb(),l.Mb(3,"p",24),l.lc(4),l.Lb(),l.kc(5,f,2,1,"ng-container",25),l.kc(6,w,8,0,"div",26),l.Lb()),2&e){const e=l.Wb();l.xb(4),l.mc(e.timerWeeklyBossesString),l.xb(1),l.Zb("ngForOf",e.weeklies[e.characterIndex].weeklyBosses),l.xb(1),l.Zb("ngIf",e.editModeActive)}}function W(e,t){if(1&e){const e=l.Nb();l.Mb(0,"input",34),l.Tb("ngModelChange",(function(t){return l.hc(e),l.Wb(2).$implicit.completed=t}))("change",(function(){return l.hc(e),l.Wb(4).weekliesChangeHandler()})),l.Lb()}if(2&e){const e=l.Wb(2),t=e.index,s=e.$implicit;l.bc("name","weeklyTask",t,""),l.bc("id","weeklyTask",t,""),l.Zb("ngModel",s.completed)}}function x(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",35),l.Mb(1,"i",36),l.Tb("click",(function(){l.hc(e);const t=l.Wb(2).index;return l.Wb(2).moveWeeklyTask(t,"up")})),l.Lb(),l.Mb(2,"i",37),l.Tb("click",(function(){l.hc(e);const t=l.Wb(2).index;return l.Wb(2).moveWeeklyTask(t,"down")})),l.Lb(),l.Lb()}}function C(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",28),l.Mb(1,"div",29),l.Ib(2,"img",30),l.Lb(),l.Mb(3,"label",31),l.Tb("click",(function(){l.hc(e);const t=l.Wb().index;return l.Wb(2).disableWeeklyTask(t)})),l.lc(4),l.Lb(),l.Mb(5,"div",18),l.kc(6,W,1,3,"input",32),l.kc(7,x,3,0,"div",33),l.Lb(),l.Lb()}if(2&e){const e=l.Wb(),t=e.$implicit,s=e.index,a=l.Wb(2);l.Zb("ngClass",t.enabled?"enabledTask":"disabledTask"),l.xb(2),l.ac("alt",t.name),l.Zb("src","custom"!=t.type?"assets/Games/Maplestory/Weeklies/"+t.image:t.image,l.ic),l.xb(1),l.bc("for","weeklyTask",s,""),l.xb(1),l.mc(t.name),l.xb(2),l.Zb("ngIf",!a.editModeActive),l.xb(1),l.Zb("ngIf",a.editModeActive)}}function T(e,t){if(1&e&&(l.Kb(0),l.kc(1,C,8,7,"div",27),l.Jb()),2&e){const e=t.$implicit,s=l.Wb(2);l.xb(1),l.Zb("ngIf",e.enabled||s.editModeActive)}}function v(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",38),l.Tb("click",(function(){return l.hc(e),l.Wb(2).addCustomWeekly("task")})),l.Mb(1,"div",29),l.Ib(2,"img",42),l.Lb(),l.Mb(3,"label"),l.lc(4,"Add Custom Weekly"),l.Lb(),l.Mb(5,"div",18),l.Mb(6,"div",40),l.Ib(7,"i",41),l.Lb(),l.Lb(),l.Lb()}}function I(e,t){if(1&e&&(l.Mb(0,"div",22),l.Mb(1,"p",23),l.lc(2,"Weekly Tasks"),l.Lb(),l.Mb(3,"p",24),l.lc(4),l.Lb(),l.kc(5,T,2,1,"ng-container",25),l.kc(6,v,8,0,"div",26),l.Lb()),2&e){const e=l.Wb();l.xb(4),l.mc(e.timerWeeklyTasksString),l.xb(1),l.Zb("ngForOf",e.weeklies[e.characterIndex].weeklyTasks),l.xb(1),l.Zb("ngIf",e.editModeActive)}}function O(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",43),l.Mb(1,"div",44),l.Mb(2,"div",18),l.Mb(3,"div",19),l.Mb(4,"label",45),l.lc(5),l.Lb(),l.Mb(6,"input",46),l.Tb("ngModelChange",(function(t){return l.hc(e),l.Wb().customWeeklyName=t}))("keyup.enter",(function(){return l.hc(e),l.Wb().confirmAddingCustomWeekly()})),l.Lb(),l.Lb(),l.Mb(7,"div",19),l.Mb(8,"label",47),l.lc(9,"Optional custom image url"),l.Lb(),l.Mb(10,"input",48),l.Tb("ngModelChange",(function(t){return l.hc(e),l.Wb().customWeeklyImageUrl=t}))("keyup.enter",(function(){return l.hc(e),l.Wb().confirmAddingCustomWeekly()})),l.Lb(),l.Lb(),l.Lb(),l.Mb(11,"div",49),l.Mb(12,"button",50),l.Tb("click",(function(){return l.hc(e),l.Wb().confirmAddingCustomWeekly()})),l.lc(13,"Confirm"),l.Lb(),l.Mb(14,"button",51),l.Tb("click",(function(){return l.hc(e),l.Wb().cancelAddingCustomWeekly()})),l.lc(15,"Cancel"),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=l.Wb();l.xb(5),l.nc("Custom ",e.customWeeklyType," weekly name"),l.xb(1),l.Zb("ngModel",e.customWeeklyName),l.xb(4),l.Zb("ngModel",e.customWeeklyImageUrl)}}const B=[{path:"",component:(()=>{class e{constructor(e,t){this.titleService=e,this.metaService=t,this.regions=[{resetUtcOffset:0,name:"GMS"},{resetUtcOffset:8,name:"MSEA"},{resetUtcOffset:9,name:"KMS"}],this.selectedRegionIndex=0,this.resetUtcOffset=0,this.characterIndex=0,this.weeklies=[],this.allWeeklyBossesDisabled=!1,this.allWeeklyTasksDisabled=!1,this.editModeActive=!1,this.editButtonMessage="Edit Weeklies",this.addingCustomWeekly=!1,this.customWeeklyType="",this.customWeeklyName="",this.customWeeklyImageUrl=""}ngOnInit(){this.titleService.setTitle("Maplestory Weeklies Tracker | Random Stuff"),this.metaService.updateTag({name:"description",content:"A weeklies tracker for maplestory to keep track of your completed weekly tasks. Keep track of your weeklies across multiple different characters."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"}),this.initialise()}ngOnDestroy(){this.timerWeeklyBosses&&clearInterval(this.timerWeeklyBosses),this.timerWeeklyTasks&&clearInterval(this.timerWeeklyTasks)}initialise(){localStorage.getItem("mapleRegion")&&(this.selectedRegionIndex=JSON.parse(localStorage.getItem("mapleRegion")),this.resetUtcOffset=this.regions[this.selectedRegionIndex].resetUtcOffset),localStorage.getItem("weeklies")?(this.weeklies=JSON.parse(localStorage.getItem("weeklies")),this.weeklyBossDataChecker(),this.weeklyTaskDataChecker(),this.updateChecker(),this.checkIfWeeklyGroupsAreFullyDisabled(),localStorage.setItem("lastMapleWeeklyTrackerVisit",Date.now().toString())):(this.initiateData(),localStorage.setItem("lastMapleWeeklyTrackerVisit",Date.now().toString())),this.startWeeklyBossesTimer(),this.startWeeklyTasksTimer()}initiateData(){var e={characterName:"",weeklyBosses:i.weeklyBosses,weeklyTasks:i.weeklyTasks};for(let t=0;t<4;t++)e.characterName="Char"+(t+1),this.weeklies[t]=JSON.parse(JSON.stringify(e));localStorage.setItem("weekliesVersion",i.version),this.weekliesChangeHandler()}updateChecker(){if(localStorage.getItem("weekliesVersion")!=i.version){var e=JSON.parse(localStorage.getItem("weeklies"));this.initiateData();var t=JSON.parse(JSON.stringify(this.weeklies));for(let s=0;s<this.weeklies.length;s++){this.weeklies[s].characterName=e[s].characterName,this.weeklies[s].weeklyBosses=[];for(let a=0;a<e[s].weeklyBosses.length;a++)if("custom"!=e[s].weeklyBosses[a].type&&"Custom.png"!=e[s].weeklyBosses[a].image)for(let n=0;n<t[s].weeklyBosses.length;n++)e[s].weeklyBosses[a].name==t[s].weeklyBosses[n].name&&(this.weeklies[s].weeklyBosses.push({name:e[s].weeklyBosses[a].name,image:t[s].weeklyBosses[n].image,completed:e[s].weeklyBosses[a].completed,enabled:e[s].weeklyBosses[a].enabled,type:t[s].weeklyBosses[n].image}),t[s].weeklyBosses.splice(n,1));else e[s].weeklyBosses[a].type="custom","Custom.png"==e[s].weeklyBosses[a].image&&(e[s].weeklyBosses[a].image="assets/Games/Maplestory/Weeklies/Custom.png"),this.weeklies[s].weeklyBosses.push(e[s].weeklyBosses[a]);for(let e=0;e<t[s].weeklyBosses.length;e++)this.weeklies[s].weeklyBosses.push({name:t[s].weeklyBosses[e].name,image:t[s].weeklyBosses[e].image,completed:t[s].weeklyBosses[e].completed,enabled:t[s].weeklyBosses[e].enabled,type:t[s].weeklyBosses[e].image});this.weeklies[s].weeklyTasks=[];for(let a=0;a<e[s].weeklyTasks.length;a++)if("custom"!=e[s].weeklyTasks[a].type&&"Custom.png"!=e[s].weeklyTasks[a].image)for(let n=0;n<t[s].weeklyTasks.length;n++)e[s].weeklyTasks[a].name==t[s].weeklyTasks[n].name&&(this.weeklies[s].weeklyTasks.push({name:e[s].weeklyTasks[a].name,image:t[s].weeklyTasks[n].image,completed:e[s].weeklyTasks[a].completed,enabled:e[s].weeklyTasks[a].enabled,type:t[s].weeklyTasks[n].image}),t[s].weeklyTasks.splice(n,1));else e[s].weeklyTasks[a].type="custom","Custom.png"==e[s].weeklyTasks[a].image&&(e[s].weeklyTasks[a].image="assets/Games/Maplestory/Weeklies/Custom.png"),this.weeklies[s].weeklyTasks.push(e[s].weeklyTasks[a]);for(let e=0;e<t[s].weeklyTasks.length;e++)this.weeklies[s].weeklyTasks.push({name:t[s].weeklyTasks[e].name,image:t[s].weeklyTasks[e].image,completed:t[s].weeklyTasks[e].completed,enabled:t[s].weeklyTasks[e].enabled,type:t[s].weeklyTasks[e].image});this.weekliesChangeHandler(),localStorage.setItem("weekliesVersion",i.version)}}}weeklyBossDataChecker(){var e=this.getPreviousDayOfWeek(4);(localStorage.getItem("lastMapleWeeklyTrackerVisit")?localStorage.getItem("lastMapleWeeklyTrackerVisit"):0)<e&&this.resetWeeklyBossesCompletedValues()}weeklyTaskDataChecker(){var e=this.getPreviousDayOfWeek(1);(localStorage.getItem("lastMapleWeeklyTrackerVisit")?localStorage.getItem("lastMapleWeeklyTrackerVisit"):0)<e&&this.resetWeeklyTasksCompletedValues()}regionChange(e){this.selectedRegionIndex=e.target.selectedIndex,this.resetUtcOffset=this.regions[e.target.selectedIndex].resetUtcOffset,localStorage.setItem("mapleRegion",JSON.stringify(this.selectedRegionIndex)),this.initialise()}weekliesChangeHandler(){localStorage.setItem("weeklies",JSON.stringify(this.weeklies))}changeCharacter(e){this.characterIndex=e,this.checkIfWeeklyGroupsAreFullyDisabled()}disableWeeklyBoss(e){this.editModeActive&&("custom"!=this.weeklies[this.characterIndex].weeklyBosses[e].type&&"Custom.png"!=this.weeklies[this.characterIndex].weeklyBosses[e].image?this.weeklies[this.characterIndex].weeklyBosses[e].enabled=!this.weeklies[this.characterIndex].weeklyBosses[e].enabled:this.weeklies[this.characterIndex].weeklyBosses.splice(e,1))}disableWeeklyTask(e){this.editModeActive&&("custom"!=this.weeklies[this.characterIndex].weeklyTasks[e].type&&"Custom.png"!=this.weeklies[this.characterIndex].weeklyTasks[e].image?this.weeklies[this.characterIndex].weeklyTasks[e].enabled=!this.weeklies[this.characterIndex].weeklyTasks[e].enabled:this.weeklies[this.characterIndex].weeklyTasks.splice(e,1))}toggleEditMode(){this.editModeActive?(this.editModeActive=!1,this.editButtonMessage="Edit Weekies",this.weekliesChangeHandler(),this.checkIfWeeklyGroupsAreFullyDisabled()):(this.editModeActive=!0,this.editButtonMessage="Exit Edit Mode")}startWeeklyBossesTimer(){clearInterval(this.timerWeeklyBosses);var e=this.getNextDayOfWeek(4);this.calculateAndOutPutWeeklyBossesTime(e-(new Date).getTime()),this.timerWeeklyBosses=setInterval(()=>{var t=e-(new Date).getTime();this.calculateAndOutPutWeeklyBossesTime(t),t<0&&(clearInterval(this.timerWeeklyBosses),this.liveResetWeeklyBosses())},1e3)}startWeeklyTasksTimer(){clearInterval(this.timerWeeklyTasks);var e=this.getNextDayOfWeek(1);this.calculateAndOutPutWeeklyTasksTime(e-(new Date).getTime()),this.timerWeeklyTasks=setInterval(()=>{var t=e-(new Date).getTime();this.calculateAndOutPutWeeklyTasksTime(t),t<0&&(clearInterval(this.timerWeeklyTasks),this.liveResetWeeklyTasks())},1e3)}calculateAndOutPutWeeklyBossesTime(e){if(e<0)this.timerWeeklyBossesString="RESET!";else{var t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);this.timerWeeklyBossesString=t+"d "+s+"h "+a+"m "+("00"+n).slice(-2)+"s "}}calculateAndOutPutWeeklyTasksTime(e){if(e<0)this.timerWeeklyTasksString="RESET!";else{var t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);this.timerWeeklyTasksString=t+"d "+s+"h "+a+"m "+("00"+n).slice(-2)+"s "}}resetWeeklyBossesCompletedValues(){this.weeklies.forEach(e=>{e.weeklyBosses.forEach(e=>{e.completed=!1})}),this.weekliesChangeHandler()}resetWeeklyTasksCompletedValues(){this.weeklies.forEach(e=>{e.weeklyTasks.forEach(e=>{e.completed=!1})}),this.weekliesChangeHandler()}liveResetWeeklyBosses(){this.resetWeeklyBossesCompletedValues(),this.startWeeklyBossesTimer(),localStorage.setItem("lastMapleWeeklyTrackerVisit",(parseInt(Date.now().toString())+5e3).toString())}liveResetWeeklyTasks(){this.resetWeeklyTasksCompletedValues(),this.startWeeklyTasksTimer(),localStorage.setItem("lastMapleWeeklyTrackerVisit",(parseInt(Date.now().toString())+5e3).toString())}getNextDayOfWeek(e){var t=new Date,s=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),0,0,0,0));s.setTime(s.getTime()+24*((7+e-s.getUTCDay()-1)%7+1)*60*60*1e3);var a=s.valueOf();return(a-=60*this.resetUtcOffset*60*1e3)<t.getTime()&&(a+=6048e5),a}getPreviousDayOfWeek(e){return this.getNextDayOfWeek(e)-6048e5}moveWeeklyBoss(e,t){if("up"==t){if(0==e)return;var s=this.weeklies[this.characterIndex].weeklyBosses[e-1];this.weeklies[this.characterIndex].weeklyBosses[e-1]=this.weeklies[this.characterIndex].weeklyBosses[e],this.weeklies[this.characterIndex].weeklyBosses[e]=s}if("down"==t){if(e+1==this.weeklies[this.characterIndex].weeklyBosses.length)return;s=this.weeklies[this.characterIndex].weeklyBosses[e+1],this.weeklies[this.characterIndex].weeklyBosses[e+1]=this.weeklies[this.characterIndex].weeklyBosses[e],this.weeklies[this.characterIndex].weeklyBosses[e]=s}}moveWeeklyTask(e,t){if("up"==t){if(0==e)return;var s=this.weeklies[this.characterIndex].weeklyTasks[e-1];this.weeklies[this.characterIndex].weeklyTasks[e-1]=this.weeklies[this.characterIndex].weeklyTasks[e],this.weeklies[this.characterIndex].weeklyTasks[e]=s}if("down"==t){if(e+1==this.weeklies[this.characterIndex].weeklyTasks.length)return;s=this.weeklies[this.characterIndex].weeklyTasks[e+1],this.weeklies[this.characterIndex].weeklyTasks[e+1]=this.weeklies[this.characterIndex].weeklyTasks[e],this.weeklies[this.characterIndex].weeklyTasks[e]=s}}checkIfWeeklyGroupsAreFullyDisabled(){this.allWeeklyBossesDisabled=!this.weeklies[this.characterIndex].weeklyBosses.some(e=>e.enabled),this.allWeeklyTasksDisabled=!this.weeklies[this.characterIndex].weeklyTasks.some(e=>e.enabled)}addCustomWeekly(e){this.addingCustomWeekly=!0,this.customWeeklyType=e}confirmAddingCustomWeekly(){if(""!=this.customWeeklyName){""==this.customWeeklyImageUrl&&(this.customWeeklyImageUrl="assets/Games/Maplestory/Weeklies/Custom.png");var e={name:this.customWeeklyName,image:this.customWeeklyImageUrl,completed:!1,enabled:!0,type:"custom"};"boss"==this.customWeeklyType&&this.weeklies[this.characterIndex].weeklyBosses.push(e),"task"==this.customWeeklyType&&this.weeklies[this.characterIndex].weeklyTasks.push(e),this.weekliesChangeHandler(),this.addingCustomWeekly=!1,this.customWeeklyName="",this.customWeeklyImageUrl=""}}cancelAddingCustomWeekly(){this.addingCustomWeekly=!1,this.customWeeklyName="",this.customWeeklyImageUrl=""}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(o.c),l.Hb(o.b))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-maplestory-weeklies"]],decls:24,vars:17,consts:[[1,"gamePageContent"],[1,"topBar"],["class","regionSelector",4,"ngIf"],[1,"title"],[1,"editButton",3,"click"],[1,"characterNavigationBar"],[3,"ngClass","click"],["class","editModeMessage",4,"ngIf"],["class","inputWrapper",4,"ngIf"],[1,"weeklyGroups"],[4,"ngIf"],["class","taskGroupWrapper",4,"ngIf"],["class","customNameInputWrapper","scrollTo","",4,"ngIf"],[1,"regionSelector"],[1,"select",3,"change"],["value","r.resetUtcOffset",3,"selected",4,"ngFor","ngForOf"],["value","r.resetUtcOffset",3,"selected"],[1,"editModeMessage"],[1,"inputWrapper"],[1,"characterNameInput"],["for","characterName"],["type","text","id","characterName","name","characterName","maxlength","12",1,"textInput",3,"ngModel","ngModelChange"],[1,"taskGroupWrapper"],[1,"groupTitle"],[1,"timer"],[4,"ngFor","ngForOf"],["class","taskWrapper addTask",3,"click",4,"ngIf"],["class","taskWrapper",3,"ngClass",4,"ngIf"],[1,"taskWrapper",3,"ngClass"],[1,"imgWrapper"],["onerror","this.onerror=null; this.src='assets/Games/Maplestory/Weeklies/Custom.png'",3,"src","alt"],[3,"for","click"],["type","checkbox",3,"name","id","ngModel","ngModelChange","change",4,"ngIf"],["class","orderChanger",4,"ngIf"],["type","checkbox",3,"name","id","ngModel","ngModelChange","change"],[1,"orderChanger"],[1,"fa","fa-caret-up","fa-2x",3,"click"],[1,"fa","fa-caret-down","fa-2x",3,"click"],[1,"taskWrapper","addTask",3,"click"],["src","assets/Games/Maplestory/Dailies/Custom.png","alt","custom"],[1,"taskAdder"],[1,"fa","fa-plus","fa-2x"],["src","assets/Games/Maplestory/Weeklies/Custom.png","alt","custom"],["scrollTo","",1,"customNameInputWrapper"],[1,"customNameInput"],["for","customName"],["type","text","id","customName","name","customName","maxlength","30",1,"textInput",3,"ngModel","ngModelChange","keyup.enter"],["for","customUrl"],["type","text","id","customUrl","name","customUrl",1,"textInput",3,"ngModel","ngModelChange","keyup.enter"],[1,"buttonWrapper"],[1,"buttonStyle","left",3,"click"],[1,"buttonStyle","right",3,"click"]],template:function(e,t){1&e&&(l.Ib(0,"app-maplestory-side-navigation"),l.Mb(1,"div",0),l.Mb(2,"div",1),l.kc(3,g,4,1,"div",2),l.Mb(4,"p",3),l.lc(5),l.Lb(),l.Mb(6,"button",4),l.Tb("click",(function(){return t.toggleEditMode()})),l.lc(7),l.Lb(),l.Lb(),l.Mb(8,"div",5),l.Mb(9,"a",6),l.Tb("click",(function(){return t.changeCharacter(0)})),l.lc(10),l.Lb(),l.Mb(11,"a",6),l.Tb("click",(function(){return t.changeCharacter(1)})),l.lc(12),l.Lb(),l.Mb(13,"a",6),l.Tb("click",(function(){return t.changeCharacter(2)})),l.lc(14),l.Lb(),l.Mb(15,"a",6),l.Tb("click",(function(){return t.changeCharacter(3)})),l.lc(16),l.Lb(),l.Lb(),l.kc(17,m,4,0,"p",7),l.kc(18,h,5,1,"div",8),l.Mb(19,"div",9),l.kc(20,p,2,0,"div",10),l.kc(21,M,7,3,"div",11),l.kc(22,I,7,3,"div",11),l.Lb(),l.kc(23,O,16,3,"div",12),l.Lb()),2&e&&(l.xb(3),l.Zb("ngIf",t.editModeActive),l.xb(2),l.nc("Weekly Tracker ",t.weeklies[t.characterIndex].characterName,""),l.xb(2),l.mc(t.editButtonMessage),l.xb(2),l.Zb("ngClass",0==t.characterIndex?"selected":"notSelected"),l.xb(1),l.mc(t.weeklies[0].characterName),l.xb(1),l.Zb("ngClass",1==t.characterIndex?"selected":"notSelected"),l.xb(1),l.mc(t.weeklies[1].characterName),l.xb(1),l.Zb("ngClass",2==t.characterIndex?"selected":"notSelected"),l.xb(1),l.mc(t.weeklies[2].characterName),l.xb(1),l.Zb("ngClass",3==t.characterIndex?"selected":"notSelected"),l.xb(1),l.mc(t.weeklies[3].characterName),l.xb(1),l.Zb("ngIf",t.editModeActive),l.xb(1),l.Zb("ngIf",t.editModeActive),l.xb(2),l.Zb("ngIf",t.allWeeklyBossesDisabled&&t.allWeeklyTasksDisabled&&!t.editModeActive),l.xb(1),l.Zb("ngIf",!t.allWeeklyBossesDisabled||t.editModeActive),l.xb(1),l.Zb("ngIf",!t.allWeeklyTasksDisabled||t.editModeActive),l.xb(1),l.Zb("ngIf",t.editModeActive&&t.addingCustomWeekly))},directives:[r.a,a.k,a.i,a.j,c.i,c.l,c.b,c.d,c.e,c.h,c.a,d.a],styles:[".gamePageContent[_ngcontent-%COMP%]{position:relative}.taskWrapper[_ngcontent-%COMP%]{width:250px;height:54px;margin:5px 0;padding:5px;border-radius:10px}.taskWrapper[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative;float:left;width:52px;height:52px}.taskWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50px;max-height:50px;top:0;bottom:0;left:0;right:0;margin:auto}.taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:165px}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%], .taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;float:left;height:100%;justify-content:center;align-items:center}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]{width:25px}.disableMode[_ngcontent-%COMP%]{width:100px;height:50px}.enabledTask[_ngcontent-%COMP%]{border:1px solid var(--navigation-bar-settings-icon-font-color)}.disabledTask[_ngcontent-%COMP%]{border:1px solid red}.addTask[_ngcontent-%COMP%]{border:1px solid var(--game-page-accent-color)}.taskGroupWrapper[_ngcontent-%COMP%]{display:inline-block;margin:0 7px}.taskGroupWrapper[_ngcontent-%COMP%]   .groupTitle[_ngcontent-%COMP%]{text-align:center;margin:0;font-size:22px}.weeklyGroups[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;text-align:center}.topBar[_ngcontent-%COMP%]{width:100%;height:50px;position:relative}.topBar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;font-size:25px;text-decoration:underline;margin:5px 0 0}.topBar[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:3px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.editModeMessage[_ngcontent-%COMP%]{color:red;margin:0 0 10px;text-align:center}.timer[_ngcontent-%COMP%]{text-align:center;margin:0;font-size:14px}.regionSelector[_ngcontent-%COMP%]{position:absolute;top:0;left:0;margin:3px 0 0 8px}.regionSelector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:80px;margin:0}.characterNavigationBar[_ngcontent-%COMP%]{width:100%;margin-top:4px;margin-bottom:12px;text-align:center;overflow-wrap:break-word}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2px 4px;margin:4px 4px 0;font-size:18px;display:inline-block}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}.inputWrapper[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.characterNameInput[_ngcontent-%COMP%]{display:inline-block;margin-top:3px}.characterNameInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:center;font-size:15px}.characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;margin-top:3px;text-align:center;width:180px}.orderChanger[_ngcontent-%COMP%]{color:var(--navigation-bar-settings-icon-font-color)}.customNameInputWrapper[_ngcontent-%COMP%]{position:absolute;background-color:var(--custom-task-input-wrapper-color);width:100%;height:100%;z-index:50;top:0}.customNameInput[_ngcontent-%COMP%]{width:250px;height:170px;background-color:var(--custom-task-input-color);border-radius:4px;position:absolute;margin:auto;top:300px;left:0;right:0;border:2px solid var(--custom-task-input-border-color)}.customNameInput[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;height:100%;margin:0 auto}.customNameInput[_ngcontent-%COMP%]   .buttonStyle[_ngcontent-%COMP%]{width:80px}.buttonWrapper[_ngcontent-%COMP%]{width:175px;margin:0 auto}.buttonWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.buttonWrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{float:left}.buttonWrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right}.customNameInput[_ngcontent-%COMP%]   .characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:220px}@media only screen and (max-width:950px){.topBar[_ngcontent-%COMP%]{height:83px}.topBar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-top:48px}}"]}),e})()}];let P=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[n.d.forChild(B)],n.d]}),e})();var L=s("I9VR");let N=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[a.b,P,L.a]]}),e})()},twyJ:function(e){e.exports=JSON.parse('{"version":"4.0","weeklyBosses":[{"name":"Chaos Pink Bean","image":"ChaosPinkBean.png","completed":false,"enabled":true,"type":"default"},{"name":"Hard Hilla","image":"HardHilla.png","completed":false,"enabled":true,"type":"default"},{"name":"Cygnus","image":"Cygnus.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Zakum","image":"ChaosZakum.png","completed":false,"enabled":true,"type":"default"},{"name":"Princess No","image":"PrincessNo.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Crimson Queen","image":"ChaosCrimsonQueen.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Pierre","image":"ChaosPierre.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Von Bon","image":"ChaosVonBon.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Vellum","image":"ChaosVellum.png","completed":false,"enabled":true,"type":"default"},{"name":"Hard Magnus","image":"HardMagnus.png","completed":false,"enabled":true,"type":"default"},{"name":"Chaos Papulatus","image":"ChaosPapulatus.png","completed":false,"enabled":true,"type":"default"},{"name":"Lotus","image":"Lotus.png","completed":false,"enabled":true,"type":"default"},{"name":"Damien","image":"Damien.png","completed":false,"enabled":true,"type":"default"},{"name":"Lucid","image":"Lucid.png","completed":false,"enabled":true,"type":"default"},{"name":"Will","image":"Will.png","completed":false,"enabled":true,"type":"default"},{"name":"Gloom","image":"Gloom.png","completed":false,"enabled":true,"type":"default"},{"name":"Verus Hilla","image":"VerusHilla.png","completed":false,"enabled":true,"type":"default"},{"name":"Darknell","image":"Darknell.png","completed":false,"enabled":true,"type":"default"}],"weeklyTasks":[{"name":"Guild Buff","image":"GuildBuff.png","completed":false,"enabled":true,"type":"default"},{"name":"Scrapyard","image":"Scrapyard.png","completed":false,"enabled":true,"type":"default"},{"name":"Dark World Tree","image":"Dark World Tree.png","completed":false,"enabled":true,"type":"default"},{"name":"Mu Lung Dojo","image":"MuLungDojo.png","completed":false,"enabled":true,"type":"default"},{"name":"Kritias","image":"Kritias.png","completed":false,"enabled":true,"type":"default"}]}')}}]);