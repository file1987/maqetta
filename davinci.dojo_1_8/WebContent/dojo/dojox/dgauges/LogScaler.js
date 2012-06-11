//>>built
define("dojox/dgauges/LogScaler",["dojo/_base/lang","dojo/_base/declare","dojo/Stateful"],function(_1,_2,_3){return _2("dojox.dgauges.LogScaler",_3,{minimum:0,maximum:1000,multiplier:10,majorTicks:null,_computedMultiplier:NaN,constructor:function(){this.watchedProperties=["minimum","maximum","multiplier"];},_buildMajorTickItems:function(){var _4=[];this._computedMinimum=this.getComputedMinimum();this._computedMaximum=this.getComputedMaximum();this._computedMultiplier=this.getComputedMultiplier();if(this._computedMaximum>this._computedMinimum){var _5=Math.max(0,Math.floor(Math.log(this._computedMinimum+1e-9)/Math.LN10));var _6=Math.max(0,Math.floor(Math.log(this._computedMaximum+1e-9)/Math.LN10));for(var i=_5;i<=_6;i+=this._computedMultiplier){data={};data.value=Math.pow(10,i);data.position=(i-_5)/(_6-_5);_4.push(data);}}return _4;},getComputedMinimum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.minimum+1e-9)/Math.LN10)));},getComputedMaximum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.maximum+1e-9)/Math.LN10)));},getComputedMultiplier:function(){return Math.max(1,Math.floor(Math.log(this.multiplier+1e-9)/Math.LN10));},computeTicks:function(){this.majorTicks=this._buildMajorTickItems();return this.majorTicks.concat();},positionForValue:function(_7){if(this._computedMaximum<this._computedMinimum||_7<=this._computedMinimum||_7<1||isNaN(_7)){_7=this._computedMinimum;}if(_7>=this._computedMaximum){_7=this._computedMaximum;}_7=Math.log(_7)/Math.LN10;var sv=Math.log(this._computedMinimum)/Math.LN10;var ev=Math.log(this._computedMaximum)/Math.LN10;return (_7-sv)/(ev-sv);},valueForPosition:function(_8){var sv=Math.log(this._computedMinimum)/Math.LN10;var ev=Math.log(this._computedMaximum)/Math.LN10;return Math.pow(10,sv+_8*(ev-sv));}});});