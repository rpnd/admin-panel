"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[242],{7393:function(t,e,a){a.d(e,{Z:function(){return s}});a(2791);var r="Button_btn__H-LYw",o="Button_button__NKO70",i="Button_outline__lb-bk",n=a(184),s=function(t){return(0,n.jsx)("button",{className:"".concat(r," ").concat(t.outline?i:o," "),type:t.type||"button",onClick:t.onClick,children:t.children})}},2182:function(t,e,a){a.d(e,{Z:function(){return i}});a(2791);var r="Card_card__CxMAQ",o=a(184),i=function(t){return(0,o.jsx)("div",{className:r,children:t.children})}},9361:function(t,e,a){a.d(e,{Z:function(){return T}});var r=a(907);var o=a(9199),i=a(181);function n(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,o.Z)(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=a(9439),c=a(2791),l=a(3504),d=a(2182),u=a(3168),f=a(184),m=function(t){var e=(0,u.$)().t;return(0,f.jsx)("span",{className:"status ".concat(t.content),children:e(t.content)})},x=a(4164),p="Modal_backdrop__4X7BZ",h="Modal_modal__b+br0",b="Modal_header__yOQYP",w="Modal_content__izJIp",j="Modal_actions__7M2ko",_="Modal_delete__2g4WP",y=a(7393),g=function(t){return(0,f.jsx)("div",{className:p,onClick:t.onConfirm})},D=function(t){var e=(0,u.$)().t;return(0,f.jsx)(d.Z,{children:(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("header",{className:b,children:(0,f.jsx)("h3",{children:t.title})}),(0,f.jsx)("div",{className:w,children:(0,f.jsx)("p",{children:t.message})}),(0,f.jsxs)("footer",{className:j,children:[(0,f.jsx)(y.Z,{outline:!0,onClick:t.onConfirm,children:e("cancel")}),(0,f.jsx)("button",{className:_,onClick:t.onConfirm,children:e("delete")})]})]})})},M=function(t){var e=document.getElementById("backdrop-root"),a=document.getElementById("overlay-root");return(0,f.jsxs)(f.Fragment,{children:[x.createPortal((0,f.jsx)(g,{onConfirm:t.onConfirm}),e),x.createPortal((0,f.jsx)(D,{title:t.title,message:t.message,onConfirm:t.onConfirm}),a)]})},v=a(1526),H="CustomTable_container__xAreZ",N="CustomTable_wrapper__MH46W",B="CustomTable_table__wrapper__-HGF5",G="CustomTable_table__hO19m",C="CustomTable_largeTable__MSld6",A="CustomTable_userName__jYLRS",S="CustomTable_product_name__FDbCW",I="CustomTable_avatar__T0nXJ",W="CustomTable_product_img__WWynH",k="CustomTable_actions__pZ7eF",Z="CustomTable_actions__box__8pWNP",$="CustomTable_actions__edit__mBT3R",q="CustomTable_actions__delete__CiSBV",V="CustomTable_table__pagination__lTFWy",Y="CustomTable_table__pagination_item__s+RHV",O="CustomTable_active__Us9b4",T=function(t){var e=(0,c.useState)(!1),a=(0,s.Z)(e,2),r=a[0],o=a[1];function i(){o((function(t){return!t}))}var x=(0,c.useState)((function(){return t.limit&&t.bodyData?t.bodyData.slice(0,Number(t.limit)):t.bodyData})),p=(0,s.Z)(x,2),h=p[0],b=p[1],w=1,j=[];if(void 0!==t.limit){var _=Math.floor(t.bodyData.length/Number(t.limit));w=t.bodyData.length%Number(t.limit)===0?_:_+1,j=n(Array(w).keys())}var y=(0,c.useState)(0),g=(0,s.Z)(y,2),D=g[0],T=g[1],J=(0,u.$)().t;return(0,f.jsxs)(f.Fragment,{children:[r?(0,f.jsx)(M,{title:J("deleteCustomer"),message:"".concat(J("modalMessage")),onConfirm:i}):null,(0,f.jsx)("div",{className:H,children:(0,f.jsx)(d.Z,{children:(0,f.jsxs)("div",{className:N,children:[(0,f.jsx)("div",{className:B,children:(0,f.jsxs)("table",{className:t.limit?C:G,children:[t.headData?(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:t.headData.map((function(t,e){return(0,f.jsx)("th",{children:J(t)},e)}))})}):null,(0,f.jsx)("tbody",{children:h.map((function(t,e){return function(t,e){return"username"in t?(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:t.username}),(0,f.jsx)("td",{children:t.order}),(0,f.jsx)("td",{children:t.price})]},e):"orderId"in t?(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:t.orderId}),(0,f.jsx)("td",{children:t.customer}),(0,f.jsx)("td",{children:t.totalPrice}),(0,f.jsx)("td",{children:t.date}),(0,f.jsx)("td",{children:(0,f.jsx)(m,{content:t.status})})]},e):"email"in t?(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:t.ID}),(0,f.jsxs)("td",{className:A,children:[(0,f.jsx)("img",{className:I,src:t.avatar,alt:"user avatar"}),t.userName]}),(0,f.jsx)("td",{className:"ltr",children:t.email}),(0,f.jsx)("td",{className:"ltr",children:t.phoneNumber}),(0,f.jsx)("td",{children:t.totalOrders}),(0,f.jsx)("td",{children:t.totalSpend}),(0,f.jsx)("td",{children:t.location}),(0,f.jsxs)("td",{className:k,children:[(0,f.jsx)(v.JO,{icon:"charm:menu-kebab"}),(0,f.jsxs)("div",{className:Z,children:[(0,f.jsx)("div",{className:q,onClick:i,children:(0,f.jsx)(v.JO,{icon:"fluent:delete-24-regular",width:"24"})}),(0,f.jsx)("div",{className:$,children:(0,f.jsx)(l.rU,{to:"/customers/".concat(t.ID),children:(0,f.jsx)(v.JO,{icon:"fluent:edit-16-regular",width:"24"})})})]})]})]},e):"category"in t?(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:t.ID}),(0,f.jsxs)("td",{className:S,children:[(0,f.jsx)("img",{className:W,src:t.pic,alt:"user avatar"}),t.product]}),(0,f.jsx)("td",{children:t.inventory}),(0,f.jsx)("td",{children:t.price}),(0,f.jsx)("td",{children:t.category}),(0,f.jsxs)("td",{className:k,children:[(0,f.jsx)(v.JO,{icon:"charm:menu-kebab"}),(0,f.jsxs)("div",{className:Z,children:[(0,f.jsx)("div",{className:q,onClick:i,children:(0,f.jsx)(v.JO,{icon:"fluent:delete-24-regular",width:"24"})}),(0,f.jsx)("div",{className:$,children:(0,f.jsx)(l.rU,{to:"/products/".concat(t.ID),children:(0,f.jsx)(v.JO,{icon:"fluent:edit-16-regular",width:"24"})})})]})]})]},e):void 0}(t,e)}))})]})}),w>1?(0,f.jsx)("div",{className:V,children:j.map((function(e,a){return(0,f.jsx)("div",{className:"".concat(Y," ").concat(D===a?O:""),onClick:function(){return function(e){var a,r=Number(t.limit)*e,o=r+Number(t.limit);b(null===(a=t.bodyData)||void 0===a?void 0:a.slice(r,o)),T(e)}(a)},children:e+1},a)}))}):null]})})})]})}},2191:function(t,e,a){a.d(e,{Gq:function(){return r},J6:function(){return o},ZU:function(){return i},RB:function(){return n}});var r=["ID","userName","email","phoneNumber","totalOrders","totalSpending","location","actions"],o=[{ID:0,avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",userName:"Zahra Mirzaei",email:"zahra_mirzaei@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:804,totalSpend:"$120.00",location:"UK"},{ID:1,avatar:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:230,totalSpend:"$120.00",location:"UK"},{ID:2,avatar:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",userName:"Kyle Simpson",email:"Kyle_simpson@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:120,totalSpend:"$120.00",location:"USA"},{ID:3,avatar:"https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",userName:"\tMaximilian Doe",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:15,totalSpend:"$120.00",location:"USA"},{ID:4,avatar:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:270,totalSpend:"$120.00",location:"USA"},{ID:5,avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:310,totalSpend:"$120.00",location:"USA"},{ID:6,avatar:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:804,totalSpend:"$120.00",location:"USA"},{ID:7,avatar:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",userName:"Andrei Neagoie",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:803,totalSpend:"$120.00",location:"USA"},{ID:8,avatar:"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:110,totalSpend:"$120.00",location:"USA"},{ID:9,avatar:"https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",userName:"John Smith",email:"john_smith@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:804,totalSpend:"$120.00",location:"USA"},{ID:10,avatar:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",userName:"Jason Bourne",email:"test@gmail.com",phoneNumber:"+98 918 123 45 67",totalOrders:460,totalSpend:"$260.00",location:"UK"}],i=["ID","product","inventory","price","category","actions"],n=[{ID:0,pic:"https://images.unsplash.com/photo-1628773193539-ad29c647c071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",product:"Apple AirPods",inventory:30,price:"$200.00",category:"digital"},{ID:1,pic:"https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",product:"NUBWO G06",inventory:28,price:"$120.00",category:"digital"},{ID:2,pic:"https://images.unsplash.com/photo-1607860087860-c46e865f6ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=426&q=80",product:"Hooded Sweatshirt",inventory:10,price:"$10.00",category:"clothing"},{ID:3,pic:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",product:"Keyboard",inventory:50,price:"$50.00",category:"digital"},{ID:4,pic:"https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",product:"T-Shirt",inventory:20,price:"$75.00",category:"clothing"},{ID:5,pic:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",product:"LED Monitor",inventory:31,price:"$510.00",category:"digital"},{ID:6,pic:"https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",product:"Socks",inventory:5,price:"$10.00",category:"clothing"},{ID:7,pic:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",product:"Mouse",inventory:3,price:"$16.00",category:"digital"},{ID:8,pic:"https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",product:"Mielle",inventory:36,price:"$170.00",category:"beauty"},{ID:9,pic:"https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",product:"hat cap",inventory:17,price:"$25.00",category:"clothing"},{ID:10,pic:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",product:"CeraVe",inventory:7,price:"$220.00",category:"beauty"},{ID:11,pic:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",product:"Neutrogena",inventory:30,price:"$205.00",category:"beauty"}]},3035:function(t,e,a){function r(t,e,a,r,o,i,n){try{var s=t[i](n),c=s.value}catch(l){return void a(l)}s.done?e(c):Promise.resolve(c).then(r,o)}a.d(e,{Z:function(){return l}});var o=a(9439),i=a(1413),n=a(7757),s=a.n(n),c=a(2791);var l=function(t,e){var a=(0,c.useRef)({}),n=(0,c.useRef)(!1),l={error:void 0,data:void 0,status:""},d=(0,c.useReducer)((function(t,e){switch(e.type){case"loading":return(0,i.Z)((0,i.Z)({},l),{},{status:e.type});case"fetched":return(0,i.Z)((0,i.Z)({},l),{},{data:e.payload,status:e.type});case"error":return(0,i.Z)((0,i.Z)({},l),{},{error:e.payload,status:e.type});default:return t}}),l),u=(0,o.Z)(d,2),f=u[0],m=u[1];return(0,c.useEffect)((function(){if(t){var o=function(){var o,i=(o=s().mark((function r(){var o,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(m({type:"loading"}),!a.current[t]){r.next=4;break}return m({type:"fetched",payload:a.current[t]}),r.abrupt("return");case 4:return r.prev=4,r.next=7,fetch(t,e);case 7:if((o=r.sent).ok){r.next=10;break}throw new Error(o.statusText);case 10:if(!o.ok||200===o.status){r.next=13;break}throw console.log(o.status),new Error("302 error happen. Maybe you forgat .json");case 13:return r.next=15,o.json();case 15:if(i=r.sent,a.current[t]=i,!n.current){r.next=19;break}return r.abrupt("return");case 19:m({type:"fetched",payload:i}),r.next=27;break;case 22:if(r.prev=22,r.t0=r.catch(4),!n.current){r.next=26;break}return r.abrupt("return");case 26:m({type:"error",payload:r.t0});case 27:case"end":return r.stop()}}),r,null,[[4,22]])})),function(){var t=this,e=arguments;return new Promise((function(a,i){var n=o.apply(t,e);function s(t){r(n,a,i,s,c,"next",t)}function c(t){r(n,a,i,s,c,"throw",t)}s(void 0)}))});return function(){return i.apply(this,arguments)}}();return o(),function(){n.current=!0}}}),[t]),f}},2242:function(t,e,a){a.r(e);a(2791);var r=a(3168),o=a(3035),i=a(9361),n=a(2191),s=a(1358),c=a(184);e.default=function(){var t,e=(0,r.$)().t,a=(0,o.Z)("https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/customers.json"),l=a.data,d=a.error,u=a.status;return"loading"===u&&(t=(0,c.jsx)(s.Z,{})),d&&(t=(0,c.jsx)(i.Z,{limit:10,headData:n.Gq,bodyData:n.J6})),"fetched"===u&&l&&(t=(0,c.jsx)(i.Z,{limit:10,headData:n.Gq,bodyData:l})),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{className:"title",children:e("customers")}),t]})}}}]);
//# sourceMappingURL=242.bbc0a0a3.chunk.js.map