(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea9e21e0"],{"038d":function(t,e,n){"use strict";n("66a9")},"03cc":function(t,e,n){"use strict";n("9de8")},"077a":function(t,e,n){"use strict";n("e02f")},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),a=n("1d80"),o=n("4840"),u=n("8aa5"),l=n("50c4"),s=n("14c3"),f=n("9263"),p=n("d039"),d=[].push,h=Math.min,v=4294967295,g=!p((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,c);var o,u,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");while(o=f.call(g,r)){if(u=g.lastIndex,u>h&&(s.push(r.slice(h,o.index)),o.length>1&&o.index<r.length&&d.apply(s,o.slice(1)),l=o[0].length,h=u,s.length>=c))break;g.lastIndex===o.index&&g.lastIndex++}return h===r.length?!l&&g.test("")||s.push(""):s.push(r.slice(h)),s.length>c?s.slice(0,c):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var f=c(t),p=String(this),d=o(f,RegExp),b=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),E=new d(g?f:"^(?:"+f.source+")",x),S=void 0===i?v:i>>>0;if(0===S)return[];if(0===p.length)return null===s(E,p)?[p]:[];var y=0,m=0,O=[];while(m<p.length){E.lastIndex=g?m:0;var L,A=s(E,g?p:p.slice(m));if(null===A||(L=h(l(E.lastIndex+(g?0:m)),p.length))===y)m=u(p,m,b);else{if(O.push(p.slice(y,m)),O.length===S)return O;for(var R=1;R<=A.length-1;R++)if(O.push(A[R]),O.length===S)return O;m=y=L}}return O.push(p.slice(y)),O}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("17c2"),a=n("9112");for(var o in i){var u=r[o],l=u&&u.prototype;if(l&&l.forEach!==c)try{a(l,"forEach",c)}catch(s){l.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),c=n("ae40"),a=i("forEach"),o=c("forEach");t.exports=a&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2670:function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),a=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4a71":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("9911");var r=n("7a23"),i={class:"articles-list"};function c(t,e,n,c,a,o){var u=Object(r["v"])("BackButton"),l=Object(r["v"])("Article"),s=Object(r["v"])("Section");return Object(r["p"])(),Object(r["d"])(s,{title:o.articles.title},{default:Object(r["A"])((function(){return[Object(r["f"])(u,{class:"section__back-button"}),Object(r["f"])("ul",i,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(o.articles.list,(function(t){return Object(r["p"])(),Object(r["d"])(l,{key:t.id,name:t.name,link:t.link},null,8,["name","link"])})),128))])]})),_:1},8,["title"])}n("4160"),n("ac1f"),n("1276"),n("159b");var a=n("bbf6"),o={class:"article"};function u(t,e,n,i,c,a){return Object(r["p"])(),Object(r["d"])("li",o,[Object(r["f"])("a",{href:n.link,class:"article__link"},Object(r["x"])(n.name),9,["href"])])}var l={name:"Article",props:["name","link"]};n("6c37");l.render=u;var s=l;function f(t,e,n,i,c,a){return Object(r["p"])(),Object(r["d"])("button",{onClick:e[1]||(e[1]=function(){return a.goBack&&a.goBack.apply(a,arguments)}),class:[t.$props.class,"back-button"]},null,2)}var p={name:"BackButton",props:["class"],methods:{goBack:function(){return window.history.length>1?this.$router.go(-1):this.$router.push("/")}}};n("03cc");p.render=f;var d=p,h={name:"ArticlesListSection",props:["articlesList"],components:{Section:a["a"],Article:s,BackButton:d},computed:{articles:function(){return this.getCurrentArticles(this.articlesList)},currentPathEnd:function(){var t=this.$route.path.split("/");return t[t.length-1]}},methods:{getCurrentArticles:function(t){var e,n=this;return t.forEach((function(t){t.path===n.currentPathEnd&&(e=t)})),e}}};n("038d");h.render=c;e["default"]=h},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),c=function(t){return function(e,n){var c,a,o=String(i(e)),u=r(n),l=o.length;return u<0||u>=l?t?"":void 0:(c=o.charCodeAt(u),c<55296||c>56319||u+1===l||(a=o.charCodeAt(u+1))<56320||a>57343?t?o.charAt(u):c:t?o.slice(u,u+2):a-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),c=n("b622"),a=c("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"66a9":function(t,e,n){},"6c37":function(t,e,n){"use strict";n("2670")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,u=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(o=function(t){var e,n,i,o,f=this,p=l&&f.sticky,d=r.call(f),h=f.source,v=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",d)),s&&(n=new RegExp("^"+h+"$(?!\\s)",d)),u&&(e=f.lastIndex),i=c.call(p?n:f,g),p?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),s&&i&&i.length>1&&a.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"9de8":function(t,e,n){},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),c=n("5135"),a=Object.defineProperty,o={},u=function(t){throw t};t.exports=function(t,e){if(c(o,t))return o[t];e||(e={});var n=[][t],l=!!c(e,"ACCESSORS")&&e.ACCESSORS,s=c(e,0)?e[0]:u,f=c(e,1)?e[1]:void 0;return o[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,f)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,c=Function.prototype,a=c.toString,o=/^\s*function ([^ (]*)/,u="name";r&&!(u in c)&&i(c,u,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),c=n("7b0b"),a=n("50c4"),o=n("65f0"),u=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,s=4==t,f=6==t,p=7==t,d=5==t||f;return function(h,v,g,b){for(var x,E,S=c(h),y=i(S),m=r(v,g,3),O=a(y.length),L=0,A=b||o,R=e?A(h,O):n||p?A(h,0):void 0;O>L;L++)if((d||L in y)&&(x=y[L],E=m(x,L,S),t))if(e)R[L]=E;else if(E)switch(t){case 3:return!0;case 5:return x;case 6:return L;case 2:u.call(R,x)}else switch(t){case 4:return!1;case 7:u.call(R,x)}return f?-1:l||s?s:R}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bbf6:function(t,e,n){"use strict";var r=n("7a23"),i={class:"section"},c={class:"section__container"},a={class:"section__title"};function o(t,e,n,o,u,l){return Object(r["p"])(),Object(r["d"])("section",i,[Object(r["f"])("div",c,[Object(r["f"])("h2",a,Object(r["x"])(n.title),1),Object(r["u"])(t.$slots,"default")])])}var u={name:"Section",props:["title"]};n("077a");u.render=o;e["a"]=u},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),a=n("9263"),o=n("9112"),u=c("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=c(t),v=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!s||p)||"split"===t&&!d){var b=/./[h],x=n(h,""[t],(function(t,e,n,r,i){return e.exec===a?v&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=x[0],S=x[1];r(String.prototype,t,E),r(RegExp.prototype,h,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}f&&o(RegExp.prototype[h],"sham",!0)}},e02f:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);