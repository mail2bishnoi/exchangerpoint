(this["webpackJsonpexchanger-point"]=this["webpackJsonpexchanger-point"]||[]).push([[0],{114:function(e,a,t){e.exports=t.p+"static/media/user.2e13e06d.jpg"},129:function(e,a,t){e.exports=t(238)},137:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"signin",(function(){return _}));var r=t(0),c=t.n(r),i=t(21),l=t.n(i),s=t(17),o=t(32),m=t(7),u=t(110),d=(t(137),t(10)),p=t(11),b=t(13),h=t(12),E=t(14),f=t(33),v=t(261),g=t(259),j=t(81),O=t.n(j),y=t(111),_=function(e,a){return function(){var e=Object(y.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a()}catch(t){}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},N=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(b.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).onSubmit=function(e){t.props.signin(e,(function(){t.props.history.push("/")}))},t.renderInput=function(e){var a=e.input,n=e.label,r=e.type,i=e.meta;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("input",Object.assign({},a,{autoComplete:"off",type:r})),t.renderError(i))},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"renderError",value:function(e){var a=e.error;if(e.touched&&a)return c.a.createElement("div",null,c.a.createElement("div",null,a))}},{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("section",{className:"section-signin"},c.a.createElement("div",{className:"signin"},c.a.createElement("h2",{className:"signin__heading"},"ExchangerPoint"),c.a.createElement("nav",null,c.a.createElement("ul",{className:"signin__navigation"},c.a.createElement("li",{className:"signin__item"},c.a.createElement(s.b,{to:"#",className:"signin__link signin__link--active"},"Login")),c.a.createElement("li",{className:"signin__item"},c.a.createElement(s.b,{to:"#",className:"signin__link"},"Signup")))),c.a.createElement("div",{className:"signin__box"},c.a.createElement("form",{onSubmit:e(this.onSubmit),className:"form"},c.a.createElement(v.a,{name:"email",type:"email",component:this.renderInput,label:"Email:"}),c.a.createElement(v.a,{name:"password",type:"password",component:this.renderInput,label:"Password:"}),c.a.createElement("button",{type:"submit"},"Login to your account"))),c.a.createElement(s.b,{to:"#",className:"forgot-pasword"},"Forgot Your Password?")))}}]),a}(r.Component);var k=Object(m.d)(Object(o.b)((function(e){return{errorMessage:e.auth.errorMessage}}),n),Object(g.a)({form:"signin",validate:function(e){var a={};return e.email||(a.email="You must enter an Email"),e.password||(a.password="You must enter a password"),a}}))(N),x=t(85),w=t.n(x),S=t(114),C=t.n(S),I=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null},t.onClickHandle=function(e){t.setState({anchorEl:e.currentTarget})},t.onHandleClose=function(){t.setState({anchorEl:null})},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"left-nav"},c.a.createElement("div",{className:"left-nav__icon-box"},c.a.createElement("svg",{className:"logo"},c.a.createElement("use",{xlinkHref:w.a+"#icon-loop2"}))),c.a.createElement("div",{className:"left-nav__icon-box"},c.a.createElement(s.b,{to:"/dashboard/buy",className:"left-nav_link"},"Buy")),c.a.createElement("div",{className:"left-nav__icon-box"},c.a.createElement(s.b,{to:"/dashboard/sell",className:"left-nav_link"},"Sell"))),c.a.createElement("nav",{className:"user-nav"},c.a.createElement("div",{className:"user-nav__icon-box"},c.a.createElement(s.b,{to:"/dashboard/deposite",className:"user-nav_link"},"Deposite")),c.a.createElement("div",{className:"user-nav__icon-box"},c.a.createElement(s.b,{to:"/dashboard/withdraw",className:"user-nav_link"},"Withdraw")),c.a.createElement("div",{className:"user-nav__icon-box"},c.a.createElement("svg",{className:"user-nav__icon"},c.a.createElement("use",{xlinkHref:w.a+"#icon-chat"})),c.a.createElement("span",{className:"user-nav__notifications"},"13")),c.a.createElement("div",{className:"user-nav__user",onClick:this.onClickHandle},c.a.createElement("img",{src:C.a,className:"user-nav__user-photo",alt:"user avtar"}),c.a.createElement("span",{className:"user-nav__user-name"},"Ashutosh"))))}}]),a}(r.Component),L=t(123),A=t(124),F=t(257),H=t(260),M=t(258),P=t(116),D=t.n(P),Y=t(115),B=t.n(Y),J=t(262);function T(e){var a,t=e.depthStep,n=void 0===t?18:t,r=e.depth,i=void 0===r?0:r,l=(e.expanded,e.item),o=Object(A.a)(e,["depthStep","depth","expanded","item"]),m=c.a.useState(!0),u=Object(L.a)(m,2),d=u[0],p=u[1],b=l.label,h=l.items,E=l.Icon,f=l.Link,v=l.onItemClick;return Array.isArray(h)&&h.length&&(a=d?c.a.createElement(D.a,{className:"sidebar-item-expand-arrow"}):c.a.createElement(B.a,{className:"sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"})),c.a.createElement(c.a.Fragment,null,c.a.createElement(H.a,Object.assign({className:"sidebar-item",onClick:function(e){Array.isArray(h)&&p((function(e){return!e})),v&&v(e,l)},button:!0},o),c.a.createElement("div",{style:{paddingLeft:i*n},className:"sidebar-item-content"},E&&c.a.createElement(E,{className:"sidebar-item-icon"}),c.a.createElement(s.b,{to:f,className:"sidebar-item-text"},b)),a),c.a.createElement(J.a,{in:!d,timeout:"auto",unmountOnExit:!0},Array.isArray(h)?c.a.createElement(F.a,null,h.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:"".concat(e.name).concat(a)},"divider"===e?c.a.createElement(M.a,{style:{margin:"6px 0"}}):c.a.createElement(T,{depth:i+1,depthStep:n,item:e}))}))):null))}var W=function(e){var a=e.items,t=e.depthStep,n=e.depth,r=e.expanded;return c.a.createElement(F.a,null,a.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:"".concat(e.name).concat(a)},"divider"===e?c.a.createElement(M.a,{style:{margin:"0"}}):c.a.createElement(T,{depthStep:t,depth:n,expanded:r,item:e}))})))},q=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"AppFooter")}}]),a}(r.Component),U=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"Setting")}}]),a}(r.Component),V=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"User Profile")}}]),a}(r.Component),z=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"AppDashboard")}}]),a}(r.Component),G=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("main",{className:"dashboard-view"},c.a.createElement(f.d,null,c.a.createElement(f.b,{exact:!0,path:"/dashboard",component:z}),c.a.createElement(f.b,{path:"/dashboard/profile",component:V}),c.a.createElement(f.b,{path:"/dashboard/setting",component:U}),c.a.createElement(f.a,{from:"/",to:"/dashboard"})))}}]),a}(r.Component),K=t(117),Q=t.n(K),R=t(118),X=t.n(R),Z=t(119),$=t.n(Z),ee=t(120),ae=t.n(ee),te=t(121),ne=t.n(te),re=t(122),ce=t.n(re),ie=[{name:"dashboard",label:"Dashboard",Link:"/dashboard",Icon:Q.a},{name:"wallet",label:"Wallet",Link:"/wallet",Icon:X.a},{name:"trade",label:"Trade",Link:"/trade",Icon:$.a},{name:"verification",label:"Verification",Link:"/verification",Icon:ae.a},{name:"settings",label:"Settings",Icon:ne.a,Link:"#",items:[{name:"basicinfo",label:"Basic Info",Link:"/basicinfo"},{name:"apimanagement",label:"API Management",Link:"/apimanagement"}]},{name:"logout",label:"Logout",Link:"/signin",Icon:ce.a}],le=function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(I,null),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"sidebar"},c.a.createElement(W,{items:ie})),c.a.createElement(G,null)),c.a.createElement(q,null))}}]),a}(r.Component),se=(t(237),function(e){function a(){return Object(d.a)(this,a),Object(b.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement(f.d,null,c.a.createElement(f.b,{exact:!0,path:"/signin",component:k}),c.a.createElement(f.b,{path:"/",component:le})))}}]),a}(r.Component)),oe=t(263),me=t(86),ue={authenticated:"",errorMessage:""},de=Object(m.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"auth_user":return Object(me.a)({},e,{authenticated:a.payload});case"auth_error":return Object(me.a)({},e,{errorMessage:a.payload});default:return e}},form:oe.a}),pe=Object(m.e)(de,{auth:{authenticated:localStorage.getItem("token")}},Object(m.a)(u.a));l.a.render(c.a.createElement(o.a,{store:pe},c.a.createElement(s.a,null,c.a.createElement(se,null))),document.querySelector("#root"))},85:function(e,a,t){e.exports=t.p+"static/media/sprite.3ca06f17.svg"}},[[129,1,2]]]);
//# sourceMappingURL=main.dfb44a62.chunk.js.map