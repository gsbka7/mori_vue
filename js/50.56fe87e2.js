"use strict";(self["webpackChunkmori"]=self["webpackChunkmori"]||[]).push([[50],{7269:function(t,s,a){a.d(s,{Z:function(){return l}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[t._v(" © 2022 此網站僅做為個人學習使用，非商業用途 ")])},n=[],i={name:"Footer-a"},e=i,c=a(1001),r=(0,c.Z)(e,o,n,!1,null,null,null),l=r.exports},9050:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"goods"},[s("nav-bar"),t._l(t.showGoods,(function(a,o){return s("div",{key:o,staticClass:"addCartIcon",class:{showing:a.showingIcon}},[t._v("已加入購物車")])})),s("div",{staticClass:"content"},[s("p",{staticClass:"title-g-t"},[t._v("商品一覽")]),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticStyle:{width:"200px",height:"30px"},attrs:{type:"text",placeholder:"請輸入商品名搜尋"},domProps:{value:t.name},on:{input:[function(s){s.target.composing||(t.name=s.target.value)},t.search]}})]),s("transition",{attrs:{appear:"",name:"show-g"}},[s("div",{staticClass:"title-g"},t._l(t.showGoods,(function(a,o){return s("div",{key:o,staticClass:"good-item"},[s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[t._v(t._s(a.name))]),s("div",{staticClass:"price"},[t._v("NT $"+t._s(a.price))]),s("img",{staticClass:"goods-img",attrs:{src:a.img}}),s("div",{staticClass:"add-cart",on:{click:function(s){t.addA(a),t.addIcon(a)}}},[s("span",[t._v("加入購物車")])])])])})),0)])],1),s("footer-i")],2)},n=[],i=a(8935),e=a(7269),c=a(3822),r={name:"goods",data(){return{name:""}},components:{NavBar:i.Z,FooterI:e.Z},methods:{search(){this.$store.dispatch("goodsList/searchA",this.name)},...(0,c.nv)("shopCart",["addA"]),addIcon(t){t.showingIcon=!0,setTimeout((()=>{t.showingIcon=!1}),800)}},computed:{...(0,c.rn)({goods:t=>t.goodsList.goods}),...(0,c.Se)("goodsList",["showGoods"])}},l=r,d=a(1001),m=(0,d.Z)(l,o,n,!1,null,null,null),u=m.exports},8935:function(t,s,a){a.d(s,{Z:function(){return l}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-bar"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:a(4668),alt:""}})]),s("div",{staticClass:"menu"},[s("div",{staticClass:"ham-mask",on:{click:function(s){return t.ham()}}}),s("div",{staticClass:"ham"}),s("div",{staticClass:"ham-content"},[s("router-link",{staticClass:"ham-about-t",attrs:{to:"/about"}},[t._v("關於我們")]),s("router-link",{staticClass:"ham-product-t",attrs:{to:"/goods"}},[t._v("商品一覽")]),s("div",{staticClass:"close"},[t._v("X")])],1),s("router-link",{staticClass:"about-t",attrs:{to:"/about"}},[t._v("關於我們")]),s("router-link",{staticClass:"product-t",attrs:{to:"/goods"}},[t._v("商品一覽")]),s("router-link",{staticClass:"cart-icon",attrs:{to:"/cart"}},[s("img",{staticClass:"cart-img",attrs:{src:a(9010),alt:""}}),s("transition",{attrs:{name:"icon"}},[t.iconNum()<=0?s("div"):s("div",{staticClass:"icon-amount"},[t._v(t._s(t.iconNum()))])])],1)],1)],1)},n=[],i={name:"NavBar",data(){return{iconNum(){return this.$store.state.shopCart.goods.length}}},methods:{ham(){let t=document.querySelector(".ham-mask"),s=document.querySelector(".ham"),a=document.querySelector(".ham-content"),o=document.querySelector(".close");t.addEventListener("click",(()=>{t.classList.add("ham-mask-close"),s.classList.add("ham-ani-close"),a.classList.add("ham-content-ani-open"),t.classList.remove("ham-mask-open"),s.classList.remove("ham-ani-open"),a.classList.remove("ham-content-ani-close")})),o.addEventListener("click",(()=>{a.classList.remove("ham-content-ani-open"),t.classList.remove("ham-mask-close"),s.classList.remove("ham-ani-close"),a.classList.add("ham-content-ani-close"),t.classList.add("ham-mask-open"),s.classList.add("ham-ani-open")}))}},mounted(){this.ham()}},e=i,c=a(1001),r=(0,c.Z)(e,o,n,!1,null,null,null),l=r.exports},4668:function(t,s,a){t.exports=a.p+"img/mori-logo.7ad2d2f4.png"},9010:function(t,s,a){t.exports=a.p+"img/shopping-cart_1.d35a5707.png"}}]);
//# sourceMappingURL=50.56fe87e2.js.map