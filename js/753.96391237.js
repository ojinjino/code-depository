"use strict";(self.webpackChunkvue3_element_admin=self.webpackChunkvue3_element_admin||[]).push([[753],{753:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var n=a(66252);const i=[(0,n._)("div",{id:"main",style:{width:"800px",height:"500px"}},null,-1)];var s=a(88811),d=a(9669),u=a.n(d),l={mounted:function(){this.getData()},methods:{getData:function(){const t=this;u().all([u().get("http://127.0.0.1:8088/DataObjectsGet")]).then(u().spread((function(e){t.dataTestObjects=e;for(var a=s.S1(document.getElementById("main")),n={title:{text:"第一个实例"},tooltip:{},legend:{data:["销"]},xAxis:{data:[],axisLabel:{show:!0,interval:0}},yAxis:{},series:[{name:"销",type:"bar",data:[5,20,36,10,10,20]}]},i=[],d=0;d<t.dataTestObjects.data.length;d++){var u=t.dataTestObjects.data[d];i.push(u.name)}n.xAxis.data=i,a.setOption(n),setTimeout((()=>{a.setOption(n)}),1)})))}}};var o=(0,a(83744).Z)(l,[["render",function(t,e,a,s,d,u){return(0,n.wg)(),(0,n.iD)("div",null,i)}]])}}]);