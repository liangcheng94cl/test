webpackJsonp([3],{DyHx:function(t,e){},"sls/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{radioArr:[],vehicle:{price:0,unit:"元/辆"},checkedArr:[],inputArr:{}}},beforeRouteEnter:function(t,e,i){i(function(t){document.title="车辆技改"})},computed:{getCarInfo:function(){return this.$store.getters.GET_CAR_INFO},getServiceInfo:function(){return this.$store.getters.GET_SERVICE_INFO}},mounted:function(){this.$store.getters.GET_VEHICLE_INFO.price&&(this.vehicle.price=this.$store.getters.GET_VEHICLE_INFO.price);var t=this;this.$axios({url:this.$baseUrl+"?r=interfaces/car-valuation/get-technical-transformation-data",method:"post",data:{car_type:this.getCarInfo.car_type},transformRequest:[function(t){var e="";for(var i in t)e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0===e.data.errcode?(t.radioArr=e.data.data,t.$nextTick(function(){t.getServiceInfo.vehicleArr&&t.getServiceInfo.vehicleArr.length&&t.getServiceInfo.vehicleArr.forEach(function(e,i){$("#"+e).addClass("isCheck"),$("#"+e).find(".mint-radio-input")[0].checked=!0,$("#"+e).find(".input")[0].value=t.getServiceInfo.vehicleinputArr[$("#"+e).find(".input")[0].className]})})):t.$toast(e.data.msg)})},methods:{check:function(){var t=0;$(event.currentTarget.parentNode).find(".mint-radio-input").forEach(function(t){t.checked=!1}),$(event.currentTarget.parentNode).find(".mint-cell").removeClass("isCheck"),$(event.currentTarget).find(".mint-radio-input")[0].checked=!0,$(event.currentTarget).addClass("isCheck"),$(".isCheck").each(function(e,i){$(i).find(".input").length?t+=$(i).attr("price")*$(i).find(".input").val()*1:t+=1*$(i).attr("price")}),this.vehicle.price=t},inputFn:function(){var t=0,e=event.currentTarget.value;$(".isCheck").each(function(i,n){$(n).find(".input").length?t+=$(n).attr("price")*e*1:t+=1*$(n).attr("price")}),this.vehicle.price=t},save:function(){if(this.vehicle.price){var t=this;this.$store.commit("SET_VEHICLE_INFO",this.vehicle),this.checkedArr=[],this.inputArr={},$(".isCheck").each(function(e,i){t.checkedArr.push($(i).attr("id")),$(i).find(".input").length&&(t.inputArr[$(i).find(".input")[0].className]=$(i).find(".input").val())}),this.getServiceInfo.vehicleArr=this.checkedArr,this.getServiceInfo.vehicleinputArr=this.inputArr,this.$router.push("./")}else this.$toast("请选择")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrap"}},[i("div",{staticClass:"explain"},[t._v("车辆技改属于定制化服务，涉及的费用，需一次性支付，在首付款中进行结算。")]),t._v(" "),i("div",{staticClass:"container",staticStyle:{"margin-bottom":"48px"}},[i("div",{staticClass:"des"},t._l(t.radioArr,function(e,n){return i("div",{staticClass:"mint-radiolist"},[i("label",{staticClass:"mint-radiolist-title",staticStyle:{"font-size":"14px"}},[t._v(t._s(e.key))]),t._v(" "),t._l(e.value,function(e,n){return i("a",{staticClass:"mint-cell",attrs:{price:e.price,id:e.id},on:{click:function(e){t.check()}}},[i("div",{staticClass:"mint-cell-wrapper",staticStyle:{"background-image":"none","margin-bottom":"10px"}},[i("div",{staticClass:"mint-cell-title"},[i("label",{staticClass:"mint-radiolist-label"},[i("span",{staticClass:"mint-radio"},[i("input",{staticClass:"mint-radio-input",attrs:{type:"radio"},domProps:{value:e.id}}),t._v(" "),i("span",{staticClass:"mint-radio-core"})]),t._v(" "),i("span",{staticClass:"mint-radio-label"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"mint-price"},[t._v(t._s(e.price))]),t._v(" "),i("span",{staticClass:"mint-unit"},[t._v(t._s(e.unit))])]),t._v(" "),e.label?i("div",{staticClass:"label-input"},[i("span",[t._v(t._s(e.label))]),t._v(" "),i("input",{staticClass:"input",class:e.id,staticStyle:{width:"75px","margin-left":"5px",padding:"0 5px"},attrs:{type:"tel",value:"1"},on:{keyup:t.inputFn}})]):t._e()])])])})],2)}))]),t._v(" "),i("div",{staticClass:"footer"},[i("span",[t._v("技改价格")]),t._v(" "),i("span",{staticClass:"price"},[t._v(t._s(t.vehicle.price))]),t._v(" "),i("span",{staticClass:"unit"},[t._v(t._s(t.vehicle.unit))]),t._v(" "),i("mt-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存并返回")])],1)])},staticRenderFns:[]};var r=i("vSla")(n,a,!1,function(t){i("DyHx")},"data-v-341431b4",null);e.default=r.exports}});
//# sourceMappingURL=3.a9563bd462d653344a73.js.map