(function(e){function t(t){for(var i,o,r=t[0],c=t[1],s=t[2],p=0,l=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},a={app:0},u=[];function r(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-17be0f13":1,"chunk-4741cb89":1,"chunk-50101882":1,"chunk-5d27206b":1,"chunk-7edf7b72":1,"chunk-ea9e21e0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+".css",a=c.p+i,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var s=u[r],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===i||p===a))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){s=l[r],p=s.getAttribute("data-href");if(p===i||p===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var i=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=i,delete o[e],m.parentNode.removeChild(m),n(u)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var u=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=r(e);var l=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}a[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kasparov-vue/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var m=p;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"098c":function(e,t,n){e.exports=n.p+"img/health.jpg"},"10b1":function(e,t,n){e.exports=n.p+"img/growth.jpg"},1771:function(e,t,n){var i={"./back-button-circle.png":"e71a","./close-button.svg":"f817","./images/consultation.jpg":"4118","./images/depression.jpg":"212f","./images/diet.jpg":"8afc","./images/farm.jpg":"bfc2","./images/growth.jpg":"10b1","./images/health.jpg":"098c","./images/management.jpg":"b8be","./images/supplement.jpg":"a05a","./images/training.jpg":"e86b","./instagram.svg":"54e6","./logo.png":"cf05","./samurai.png":"df17","./telegram.svg":"7dd3","./vadim-2.jpg":"2a0d","./vadim-kasparov.jpg":"974d","./vk.svg":"330c","./youtube.svg":"73dd"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id="1771"},"212f":function(e,t,n){e.exports=n.p+"img/depression.jpg"},"2a0d":function(e,t,n){e.exports=n.p+"img/vadim-2.jpg"},"2aac":function(e,t,n){"use strict";n("5be8")},"2b73":function(e,t,n){"use strict";n("e8d7")},"324b":function(e,t,n){},"330c":function(e,t,n){e.exports=n.p+"img/vk.svg"},"3f62":function(e,t,n){"use strict";n("80c4")},4118:function(e,t,n){e.exports=n.p+"img/consultation.jpg"},4126:function(e,t,n){},"54e6":function(e,t,n){e.exports=n.p+"img/instagram.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f5df1");var i=n("7a23");function o(e,t,n,o,a,u){var r=Object(i["u"])("Header"),c=Object(i["u"])("Main"),s=Object(i["u"])("Footer"),p=Object(i["u"])("Popup");return Object(i["o"])(),Object(i["d"])(i["a"],null,[Object(i["f"])(r),Object(i["f"])(c,{onOpenPopup:u.openPopup},null,8,["onOpenPopup"]),Object(i["f"])(s),Object(i["f"])(p,{ref:"popup",onEscape:u.handleEscapeClose},null,8,["onEscape"])],64)}var a={class:"header"},u={class:"header__title"},r=Object(i["e"])("Вадим Каспаров");function c(e,t,n,o,c,s){var p=Object(i["u"])("RouterLink"),l=Object(i["u"])("HeaderMenu"),m=Object(i["u"])("Logo");return Object(i["o"])(),Object(i["d"])("header",a,[Object(i["f"])("h1",u,[Object(i["f"])(p,{to:"/",class:"header__link"},{default:Object(i["z"])((function(){return[r]})),_:1})]),Object(i["f"])(l),Object(i["f"])(m)])}var s=n("cf05"),p=n.n(s),l={src:p.a,alt:"Логотип",class:"logo"};function m(e,t,n,o,a,u){return Object(i["o"])(),Object(i["d"])("img",l)}var d={name:"Logo"};n("8a8a");d.render=m;var f=d,b={class:"menu"},g={class:"menu__list"},j={class:"menu__list-item"},O=Object(i["e"])("Это кто такой?"),v={class:"menu__list-item"},h=Object(i["e"])("Услуги"),k={class:"menu__list-item"},_=Object(i["e"])("Вебинары"),x={class:"menu__list-item"},y=Object(i["e"])("Статьи");function P(e,t,n,o,a,u){var r=Object(i["u"])("RouterLink");return Object(i["o"])(),Object(i["d"])("nav",b,[Object(i["f"])("ul",g,[Object(i["f"])("li",j,[Object(i["f"])(r,{to:"/about",class:"menu__link"},{default:Object(i["z"])((function(){return[O]})),_:1})]),Object(i["f"])("li",v,[Object(i["f"])(r,{to:"/services",class:"menu__link"},{default:Object(i["z"])((function(){return[h]})),_:1})]),Object(i["f"])("li",k,[Object(i["f"])(r,{to:"/webinars",class:"menu__link"},{default:Object(i["z"])((function(){return[_]})),_:1})]),Object(i["f"])("li",x,[Object(i["f"])(r,{to:"/articles",class:"menu__link"},{default:Object(i["z"])((function(){return[y]})),_:1})])])])}var w={name:"HeaderMenu"};n("97f7");w.render=P;var L=w,q={name:"Header",components:{Logo:f,HeaderMenu:L}};n("2aac");q.render=c;var E=q,M={class:"main"};function z(e,t,n,o,a,u){var r=Object(i["u"])("RouterView");return Object(i["o"])(),Object(i["d"])("main",M,[Object(i["f"])(r,{onOpenPopup:u.openPopup},null,8,["onOpenPopup"])])}var D={name:"Main",methods:{openPopup:function(e){this.$emit("open-popup",e)}}};n("9eed");D.render=z;var C=D,S=(n("9911"),{class:"footer"}),A={class:"footer__list"},H=Object(i["f"])("p",{class:"footer__text"},"Когда взойдет солнце, будь готов переставить будильник (c)",-1),T={class:"footer__text"};function N(e,t,n,o,a,u){var r=Object(i["u"])("SocialIcon");return Object(i["o"])(),Object(i["d"])("footer",S,[Object(i["f"])("ul",A,[(Object(i["o"])(!0),Object(i["d"])(i["a"],null,Object(i["s"])(a.items,(function(e){return Object(i["o"])(),Object(i["d"])("li",{class:"footer__list-item",key:e.id},[Object(i["f"])(r,{link:e.link,image:e.image,text:e.text},null,8,["link","image","text"])])})),128))]),H,Object(i["f"])("p",T,"thedoft © "+Object(i["w"])((new Date).getFullYear()),1)])}var F=n("d5c7");function I(e,t,o,a,u,r){return Object(i["o"])(),Object(i["d"])("a",{href:o.link,class:"social-icon",target:"_blanc"},[Object(i["f"])("img",{src:n("1771")("./".concat(o.image)),alt:o.text,class:"social-icon__image"},null,8,["src","alt"])],8,["href"])}var $={name:"SocialIcon",props:["link","image","text"]};n("c8fc");$.render=I;var B=$,R={name:"Footer",components:{SocialIcon:B},data:function(){return{items:F["c"]}}};n("8a41");R.render=N;var U=R,J={class:"popup__container"},K={class:"popup__head-container"},V={class:"popup__title-container"},Y={class:"popup__title"},G={class:"popup__price"},Q={class:"popup__info"};function W(e,t,n,o,a,u){return Object(i["o"])(),Object(i["d"])("div",{class:["popup",a.isPopupOpened?"popup_opened":""],onClick:t[2]||(t[2]=Object(i["A"])((function(){return u.closePopup&&u.closePopup.apply(u,arguments)}),["self"]))},[Object(i["f"])("div",J,[Object(i["f"])("div",K,[Object(i["f"])("img",{src:a.item.image||"#",alt:a.item.title||"Картинка",class:"popup__image"},null,8,["src","alt"]),Object(i["f"])("div",V,[Object(i["f"])("h2",Y,Object(i["w"])(a.item.title||"Тут должен быть заголовок, но его нет"),1),Object(i["f"])("p",G,Object(i["w"])(a.item.price||"Здесь должна быть цена"),1)])]),Object(i["f"])("p",Q,Object(i["w"])(a.item.text||"Описание..."),1),Object(i["f"])("button",{type:"reset",class:"popup__close-button",onClick:t[1]||(t[1]=function(){return u.closePopup&&u.closePopup.apply(u,arguments)})})])],2)}var X={name:"Popup",props:["onEscape"],data:function(){return{item:{},isPopupOpened:!1}},methods:{closePopup:function(){this.isPopupOpened=!1}},mounted:function(){window.addEventListener("keyup",this.onEscape)},unmounted:function(){window.removeEventListener("keyup",this.onEscape)}};n("3f62");X.render=W;var Z=X,ee={name:"App",components:{Header:E,Main:C,Footer:U,Popup:Z},methods:{openPopup:function(e){this.$refs.popup.isPopupOpened=!0,this.$refs.popup.item=e},handleEscapeClose:function(e){"Escape"===e.key&&(this.$refs.popup.isPopupOpened=!1)}}};n("2b73");ee.render=o;var te=ee,ne=(n("d3b7"),n("6c02")),ie={class:"home-page"},oe=Object(i["f"])("div",{class:"home-page__overlay"},null,-1);function ae(e,t,n,o,a,u){return Object(i["o"])(),Object(i["d"])("section",ie,[oe])}var ue={name:"HomePage"};n("b2f1");ue.render=ae;var re=ue,ce=Object(ne["a"])({history:Object(ne["b"])(),routes:[{path:"/",component:re},{path:"/about",component:function(){return n.e("chunk-4741cb89").then(n.bind(null,"936d"))}},{path:"/services",component:function(){return n.e("chunk-7edf7b72").then(n.bind(null,"c464"))}},{path:"/webinars",component:function(){return n.e("chunk-50101882").then(n.bind(null,"27b1"))}},{path:"/articles",component:function(){return n.e("chunk-2d238266").then(n.bind(null,"fdc5"))},children:[{path:"",component:function(){return n.e("chunk-5d27206b").then(n.bind(null,"566d"))}},{path:"opened",component:function(){return n.e("chunk-ea9e21e0").then(n.bind(null,"4a71"))},alias:["closed","studies"]}]},{path:"/:catchAll(.*)",component:function(){return n.e("chunk-17be0f13").then(n.bind(null,"e614"))}}]});Object(i["c"])(te).use(ce).mount("#app")},"5be8":function(e,t,n){},"6d3a":function(e,t,n){},"73dd":function(e,t,n){e.exports=n.p+"img/youtube.svg"},"7b22":function(e,t,n){},"7dd3":function(e,t,n){e.exports=n.p+"img/telegram.svg"},"80c4":function(e,t,n){},"8a41":function(e,t,n){"use strict";n("d3a9")},"8a8a":function(e,t,n){"use strict";n("7b22")},"8afc":function(e,t,n){e.exports=n.p+"img/diet.jpg"},"8b12":function(e,t,n){},"974d":function(e,t,n){e.exports=n.p+"img/vadim-kasparov.jpg"},"97f7":function(e,t,n){"use strict";n("6d3a")},"9eed":function(e,t,n){"use strict";n("8b12")},a05a:function(e,t,n){e.exports=n.p+"img/supplement.jpg"},b2f1:function(e,t,n){"use strict";n("324b")},b8be:function(e,t,n){e.exports=n.p+"img/management.jpg"},bfc2:function(e,t,n){e.exports=n.p+"img/farm.jpg"},c8fc:function(e,t,n){"use strict";n("4126")},cf05:function(e,t,n){e.exports=n.p+"img/logo.png"},d3a9:function(e,t,n){},d5c7:function(e,t,n){"use strict";n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return L}));var i=n("b8be"),o=n.n(i),a=n("8afc"),u=n.n(a),r=n("10b1"),c=n.n(r),s=n("098c"),p=n.n(s),l=n("4118"),m=n.n(l),d=n("a05a"),f=n.n(d),b=n("e86b"),g=n.n(b),j=n("212f"),O=n.n(j),v=n("bfc2"),h=n.n(v),k=[{link:"#",image:"vk.svg",text:"Вконтакте"},{link:"#",image:"instagram.svg",text:"Инстаграм"},{link:"#",image:"youtube.svg",text:"Ютуб"},{link:"#",image:"telegram.svg",text:"Телеграм"}],_=[{image:m.a,title:"Консультация",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:f.a,title:"Корзина добавок",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:g.a,title:"Программа тренировок",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:o.a,title:"Ведение",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"}],x=[{image:u.a,title:"azaza",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:c.a,title:"azaza",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:p.a,title:"azaza",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:O.a,title:"azaza",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"},{image:h.a,title:"azaza",price:5e3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!"}],y={path:"opened",title:"opened articles",list:[{name:"opened",link:"#"},{name:"opened",link:"#"},{name:"opened",link:"#"},{name:"opened",link:"#"},{name:"opened",link:"#"}]},P={path:"closed",title:"closed articles",list:[{name:"closed",link:"#"},{name:"closed",link:"#"},{name:"closed",link:"#"},{name:"closed",link:"#"},{name:"closed",link:"#"}]},w={path:"studies",title:"bbp studies",list:[{name:"studies",link:"#"},{name:"studies",link:"#"},{name:"studies",link:"#"},{name:"studies",link:"#"},{name:"studies",link:"#"}]},L=[y,P,w]},df17:function(e,t,n){e.exports=n.p+"img/samurai.png"},e71a:function(e,t,n){e.exports=n.p+"img/back-button-circle.png"},e86b:function(e,t,n){e.exports=n.p+"img/training.jpg"},e8d7:function(e,t,n){},f817:function(e,t,n){e.exports=n.p+"img/close-button.svg"}});