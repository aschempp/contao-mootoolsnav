var MootoolsNav=new Class({Implements:[Options],Binds:["startTimer","clearTimer","hideMenu"],options:{level:0,trigger:"mouseover",delay:1500},activeIndex:-1,initialize:function(a,b){this.setOptions(b);this.container=document.id(a);this.togglers=this.container.getElements((".level_"+(this.options.level+1)+" > li.submenu"));this.elements=this.togglers.getFirst("ul");this.togglers.each(function(d,c){if(d.hasClass("active")||d.hasClass("trail")){this.activeIndex=c}}.bind(this));this.accordion=new Accordion(this.togglers,this.elements,{show:this.activeIndex,trigger:this.options.trigger,onActive:this.clearTimer});if(this.options.trigger=="click"){this.togglers.getFirst("a,span").addEvent("click",function(c){c.preventDefault()})}else{if(this.options.trigger=="mouseenter"){this.togglers.addEvents({mouseleave:this.startTimer,mouseenter:this.clearTimer})}}},startTimer:function(){this.clearTimer();this.timer=this.hideMenu.delay(this.options.delay)},clearTimer:function(){clearTimeout(this.timer)},hideMenu:function(){this.accordion.display(this.activeIndex)}});