"use strict";(self["webpackChunkmori"]=self["webpackChunkmori"]||[]).push([[503],{7503:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart"},[s("nav-bar"),0==t.goods.length?s("div",{staticClass:"def"},[s("span",[t._v("購物車空無一物")]),s("span",[t._v("快去挑選喜歡的商品吧")])]):s("div",{staticClass:"title-c"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title-g-c"},[t._v("購物車")]),t._m(0),s("div",{staticClass:"deco-t"}),t._l(t.goods,(function(a,i){return s("div",{key:i,staticClass:"cart-item"},[s("div",{staticClass:"info-c-i"},[s("img",{attrs:{src:a.img,alt:""}}),s("div",{staticClass:"name-g"},[s("div",{staticClass:"name-g-t"},[t._v(t._s(a.name))]),s("div",{staticClass:"price-g"},[t._v("NT $"+t._s(a.price))])]),s("div",{staticClass:"amount-g"},[s("div",{staticClass:"amount-g-i"},[s("div",{staticClass:"sub",on:{click:function(s){a.num>1&&t.sub(a.num--)}}},[t._v("－")]),s("div",{staticClass:"amount"},[t._v(t._s(a.num))]),s("div",{staticClass:"add",on:{click:function(s){return t.add(a.num++)}}},[t._v("＋")])]),s("div",{staticClass:"del",on:{click:function(s){return t.delA(a)}}},[t._v("刪除")])]),s("div",{staticClass:"price-t"},[t._v("$"+t._s(a.price*a.num))])]),s("div",{staticClass:"deco"})])})),s("div",{staticClass:"total"},[t._v("合計：NT $"+t._s(t.totalPrice))]),t._m(1)],2)]),s("footer-i")],1)},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"title-c-i"},[s("div",{staticClass:"name-t"},[t._v("商品")]),s("div",{staticClass:"amount-t"},[t._v("數量")]),s("div",{staticClass:"total-t"},[t._v("合計")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"purchase"},[s("a",{attrs:{href:""}},[s("span",[t._v("確認訂單")])])])}],c=a(6286),r=a(8283),o=a(3822),l={name:"Cart",components:{NavBar:c.Z,FooterI:r.Z},methods:{...(0,o.nv)("shopCart",["delA"])},computed:{...(0,o.rn)({goods:t=>t.shopCart.goods}),...(0,o.Se)("shopCart",["totalPrice"])}},e=l,u=a(1001),v=(0,u.Z)(e,i,n,!1,null,null,null),d=v.exports},8283:function(t,s,a){a.d(s,{Z:function(){return e}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[t._v(" © 2022 此網站僅做為個人學習使用，非商業用途 ")])},n=[],c={name:"Footer-a"},r=c,o=a(1001),l=(0,o.Z)(r,i,n,!1,null,null,null),e=l.exports},6286:function(t,s,a){a.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-bar"},[t._m(0),s("div",{staticClass:"menu"},[s("router-link",{staticClass:"about-t",attrs:{to:"/about"}},[t._v("關於我們")]),s("router-link",{staticClass:"product-t",attrs:{to:"/goods"}},[t._v("商品一覽")]),s("router-link",{staticClass:"cart-icon",attrs:{to:"/cart"}},[s("img",{staticClass:"cart-img",attrs:{src:a(9010),alt:""}}),t.iconNum()<=0?s("div"):s("div",{staticClass:"icon-amount"},[t._v(t._s(t.iconNum()))])])],1)])},n=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/home"}},[s("img",{staticClass:"logo",attrs:{src:a(4668),alt:""}})])}],c=a(3822),r={name:"NavBar",data(){return{iconNum(){return this.$store.state.shopCart.goods.length}}},methods:{...(0,c.nv)("shopCart",["addA"])}},o=r,l=a(1001),e=(0,l.Z)(o,i,n,!1,null,null,null),u=e.exports},4668:function(t,s,a){t.exports=a.p+"img/mori-logo.7ad2d2f4.png"},9010:function(t,s,a){t.exports=a.p+"img/shopping-cart_1.d35a5707.png"}}]);
//# sourceMappingURL=503.6e61fcd6.js.map