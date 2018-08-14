webpackJsonp([4],{GzxM:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{car_notice_number:"",car_assure_price_short:"",car_assure_price_short_sum:"",car_device_assure_price:"",car_device_assure_price_sum:"",traffic_assure_price_short:"",traffic_assure_price_short_sum:"",operate_assure_price:"",operate_assure_price_sum:"",vehicle:"",Vehicle_sum:"",car_price:0,car_price_sum:"",down_money:0,down_money_sum:"",num:0,day:0,value:[],options:[{label:"是否周边城市报价",value:"200"}],selectData:{}}},beforeRouteEnter:function(s,e,t){t(function(s){document.title="在线报价"})},computed:{getCarInfo:function(){return this.$store.getters.GET_CAR_INFO},getServiceInfo:function(){return this.$store.getters.GET_SERVICE_INFO},getVehicle:function(){return this.$store.getters.GET_VEHICLE_INFO}},mounted:function(){this.car_notice_number=this.getCarInfo.car_notice_number,this.car_assure_price_short=this.getCarInfo.car_assure_price_short,this.car_device_assure_price=this.getCarInfo.car_device_assure_price,this.traffic_assure_price_short=this.getCarInfo.traffic_assure_price_short,this.operate_assure_price=this.getCarInfo.operate_assure_price,this.vehicle=void 0===this.getVehicle.price?0:this.getVehicle.price,this.selectData.main_id=this.getCarInfo.id,this.selectData.price_mode=this.getServiceInfo.choosePriceMode,this.selectData.service_price=this.getServiceInfo.price},methods:{count:function(){var s=this.num,e=this;this.car_assure_price_short_sum=this.car_assure_price_short*s,this.car_device_assure_price_sum=this.car_device_assure_price*s,this.traffic_assure_price_short_sum=this.traffic_assure_price_short*s,this.operate_assure_price_sum=this.operate_assure_price*s,this.Vehicle_sum=this.vehicle*s,this.selectData.nearby_price=this.$refs.nearby_price.value,this.selectData.cycle_num=this.day,this.$axios({url:this.$baseUrl+"?r=interfaces/car-valuation/get-car-price",method:"post",data:this.selectData,transformRequest:[function(s){var e="";for(var t in s)e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){0===t.data.errcode?(e.car_price=t.data.data.car_price,e.car_price_sum=e.car_price*s,e.down_money=t.data.data.down_payment,e.down_money_sum=e.down_money*s):e.$toast(t.data.msg)})}}},r={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"renting",attrs:{id:"wrap"}},[t("div",{staticClass:"header"},[t("span",{staticClass:"type"},[s._v("短租")]),s._v(" "),t("span",{staticClass:"car"},[s._v(s._s(s.car_notice_number))])]),s._v(" "),t("div",{staticClass:"input-content"},[t("div",[t("span",[s._v("租赁车辆数（台）")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.num,expression:"num"}],attrs:{type:"tel"},domProps:{value:s.num},on:{input:function(e){e.target.composing||(s.num=e.target.value)}}})]),s._v(" "),t("div",[t("span",[s._v("租赁周期（1周期3个月）")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.day,expression:"day"}],attrs:{type:"tel"},domProps:{value:s.day},on:{input:function(e){e.target.composing||(s.day=e.target.value)}}})])]),s._v(" "),t("div",{staticClass:"offer-content",staticStyle:{"margin-bottom":"100px"}},[s._m(0),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("短租车辆保证金（元/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.car_assure_price_short))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.car_assure_price_short_sum))])]),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("车载设备保证金（元/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.car_device_assure_price))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.car_device_assure_price_sum))])]),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("短租交通违法保证金（元/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.traffic_assure_price_short))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.traffic_assure_price_short_sum))])]),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("运营保证金（元/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.operate_assure_price))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.operate_assure_price_sum))])]),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("车辆技改（元/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.vehicle))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.Vehicle_sum))])]),s._v(" "),t("div",{staticClass:"offer-wrap"},[t("span",{staticClass:"project"},[s._v("车辆租金（元/月/辆）")]),s._v(" "),t("span",{staticClass:"price"},[s._v(s._s(s.car_price))]),s._v(" "),t("span",{staticClass:"sum"},[s._v(s._s(s.car_price_sum))])])]),s._v(" "),t("div",{staticClass:"footer-btn"},[t("mt-checklist",{ref:"nearby_price",attrs:{options:s.options},model:{value:s.value,callback:function(e){s.value=e},expression:"value"}}),s._v(" "),t("mt-button",{staticClass:"nextBtn",attrs:{type:"primary"},on:{click:s.count}},[s._v("计算")])],1)])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"offer-wrap"},[e("span",{staticClass:"project bolder"},[this._v("报价项目")]),this._v(" "),e("span",{staticClass:"price bolder"},[this._v("单价")]),this._v(" "),e("span",{staticClass:"sum bolder"},[this._v("合计")])])}]},i=t("vSla")(a,r,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=4.ddc544efa895dcd288a8.js.map