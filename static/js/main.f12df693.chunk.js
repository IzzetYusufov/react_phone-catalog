(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c(26),i=c.n(n),r=c(4),l=(c(32),c(3)),o=c(7),d=c.n(o),j=c(1),b=c.n(j),u=(c(33),c(0)),h=function(e){var t=e.isActive;return d()("titles__link titles__link--footer",{"titles__link--is-active-footer":t})},m=function(){var e=Object(j.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.useEffect)((function(){window.scrollTo(0,0)}),[c]),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"main__container",children:Object(u.jsxs)("div",{className:"footer__container",children:[Object(u.jsx)("div",{className:"page__logo--footer",children:Object(u.jsx)(a.b,{to:"/",className:"page__logo--icon"})}),Object(u.jsx)("div",{className:"titles",children:Object(u.jsxs)("ul",{className:"titles__list",children:[Object(u.jsx)("li",{className:"titles__item",children:Object(u.jsx)(a.b,{to:"https://github.com/",target:"_blank",className:"titles__link titles__link--footer",children:"github"})}),Object(u.jsx)("li",{className:"titles__item",children:Object(u.jsx)(a.c,{to:"/contacts",className:h,children:"contacts"})}),Object(u.jsx)("li",{className:"titles__item",children:Object(u.jsx)(a.c,{to:"/rights",className:h,children:"rights"})})]})}),Object(u.jsxs)("ul",{className:"footer__list",children:[Object(u.jsx)("li",{className:"footer__back-to",children:"Back to top"}),Object(u.jsx)("li",{className:"footer__item",children:Object(u.jsx)("button",{type:"button","aria-label":"scroll-up",className:"arrow arrow--up",onClick:function(){return s(!c)}})})]})]})})})},O=(c(36),c(27)),_=c.n(O),p=c(12),x=c(10);function f(e,t){var c=Object(j.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(s){return t}})),s=Object(l.a)(c,2),a=s[0],n=s[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),n(t)}]}!function(e){e[e.hotProducts=0]="hotProducts",e[e.newProducts=1]="newProducts",e[e.allProducts=2]="allProducts",e[e.phoneInfo=3]="phoneInfo"}(s||(s={}));var g=c(9),v=c(6),N=c.n(v),y="https://mate-academy.github.io/react_phone-catalog/_new/",w="https://mate-academy.github.io/react_phone-catalog/_new/products.json",k="https://mate-academy.github.io/react_phone-catalog/_new/products/";function C(){return P.apply(this,arguments)}function P(){return(P=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(w).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(g.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(k+t,".json")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A,L=function(e){var t=Object(j.useState)([]),c=Object(l.a)(t,2),a=c[0],n=c[1],i=Object(j.useState)(!1),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(j.useState)(!1),u=Object(l.a)(b,2),h=u[0],m=u[1],O=null;return Object(j.useEffect)((function(){switch(d(!0),e){case s.allProducts:O=C();break;case s.hotProducts:O=C().then((function(e){return e.sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)}))}));break;case s.newProducts:O=C().then((function(e){var t=e.sort((function(e,t){return t.year-e.year})).sort((function(e,t){return t.price-e.price}));return t.filter((function(e){return t[0].year===e.year})).map((function(e){return Object(p.a)(Object(p.a)({},e),{},{fullPrice:0})}))}));break;default:O=C()}O.then(n).catch((function(){return m(!0)})).finally((function(){return d(!1)}))}),[]),[a,o,h]},q=b.a.createContext({cartStorage:[],likesStorage:[],existingLikes:[],addedProducts:[],totalAmountAndQnty:{amount:0,qnty:0},handleQntyOfProduct:function(){},handleDeleteProduct:function(){},handleAddToCart:function(){},handleAddToLikeStorage:function(){}}),T=function(e){var t=e.children,c=L(s.allProducts),a=Object(l.a)(c,1)[0],n=f("cart",[]),i=Object(l.a)(n,2),r=i[0],o=i[1],d=f("likes",[]),b=Object(l.a)(d,2),h=b[0],m=b[1],O=function(e){var t=a.find((function(t){return t.phoneId===e})),c={id:(null===t||void 0===t?void 0:t.id)||"",name:(null===t||void 0===t?void 0:t.name)||"",image:(null===t||void 0===t?void 0:t.image)||"",phoneId:(null===t||void 0===t?void 0:t.phoneId)||"",price:(null===t||void 0===t?void 0:t.price)||0,qnty:1};return o([].concat(Object(x.a)(r),[c]))},_=function(e){var t=a.find((function(t){return t.phoneId===e})),c=h.filter((function(e){return e.id!==(null===t||void 0===t?void 0:t.id)}));c.length===h.length?m([].concat(Object(x.a)(h),[t])):m(c)},g=function(e){var t=r.filter((function(t){return t.id!==e}));o(t)},v=function(e,t){var c=r.map((function(c){if(c.id===e){if("plus"===t)return Object(p.a)(Object(p.a)({},c),{},{qnty:c.qnty+1});if("minus"===t)return Object(p.a)(Object(p.a)({},c),{},{qnty:c.qnty-1})}return c}));o(c)},N=Object(j.useMemo)((function(){return{amount:r.reduce((function(e,t){return t.price*t.qnty+e}),0),qnty:r.reduce((function(e,t){return t.qnty+e}),0)}}),[r]),y=Object(j.useMemo)((function(){return h.map((function(e){return e.itemId}))}),[h]),w=Object(j.useMemo)((function(){return r.map((function(e){return e.phoneId}))}),[r]),k=Object(j.useMemo)((function(){return{cartStorage:r,likesStorage:h,existingLikes:y,addedProducts:w,totalAmountAndQnty:N,handleQntyOfProduct:v,handleDeleteProduct:g,handleAddToCart:O,setCartStorage:o,handleAddToLikeStorage:_}}),[r,h,a]);return Object(u.jsx)(q.Provider,{value:k,children:t})},I=function(e){var t=e.isActive;return d()("titles__link",{"titles__link--is-active":t})},R=function(){var e=Object(a.d)(),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(j.useState)(c.get("query")||""),i=Object(l.a)(n,2),o=i[0],b=i[1],h=Object(j.useContext)(q),m=h.likesStorage,O=h.cartStorage,p=Object(r.m)().pathname,x="/phones"===p||"/favorites"===p||"/tablets"===p||"/accessories"===p,f=Object(j.useCallback)(_()(s,1e3),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"nav",children:Object(u.jsx)("div",{className:"titles",children:Object(u.jsxs)("ul",{className:"titles__list",children:[Object(u.jsx)("li",{className:"titles__item titles__item--underline",children:Object(u.jsx)(a.c,{to:"/",className:I,children:"home"})}),Object(u.jsx)("li",{className:"titles__item titles__item--underline",children:Object(u.jsx)(a.c,{to:"/phones",className:I,children:"phones"})}),Object(u.jsx)("li",{className:"titles__item titles__item--underline",children:Object(u.jsx)(a.c,{to:"/tablets",className:I,children:"tablets"})}),Object(u.jsx)("li",{className:"titles__item titles__item--underline",children:Object(u.jsx)(a.c,{to:"/accessories",className:I,children:"accessories"})})]})})}),Object(u.jsxs)("div",{className:"header__container-right",children:[Object(u.jsxs)("div",{className:d()("search",{"search--is-shown":x}),children:[Object(u.jsx)("input",{type:"search",placeholder:"Search in phones...",value:o,hidden:!1,onChange:function(e){var t=new URLSearchParams(c);t.set("page","1"),t.set("query",e.target.value),e.target.value.trim()||t.delete("query"),f(t),b(e.target.value)},className:"search__input search__input--underline"}),o&&Object(u.jsx)("button",{type:"button","aria-label":"clear",className:"search__clear",onClick:function(){return function(){var e=new URLSearchParams(c);e.delete("query"),s(e),b("")}()}}),!o&&Object(u.jsx)("i",{className:"search__find"})]}),Object(u.jsxs)("div",{className:"icon__container",children:[Object(u.jsx)(a.c,{to:"/favorites",className:function(e){var t=e.isActive;return d()("icon icon--heart",{"icon--is-active":t})}}),m.length>0&&Object(u.jsx)("span",{className:"fav-qnty",children:Object(u.jsx)("p",{className:"fav-qnty__num",children:m.length})})]}),Object(u.jsxs)("div",{className:"icon__container",children:[Object(u.jsx)(a.c,{to:"/cart",className:function(e){var t=e.isActive;return d()("icon icon--cart",{"icon--is-active":t})}}),O.length>0&&Object(u.jsx)("span",{className:"fav-qnty",children:Object(u.jsx)("p",{className:"fav-qnty__num",children:O.length})})]})]})]})},E=(c(38),[{img:c.p+"static/media/banner-phones.b4eeda8b.png",to:"/phones"},{img:c.p+"static/media/banner-tablets.a962057c.png",to:"/tablets"},{img:c.p+"static/media/banner-accessories.bdd2e0fc.png",to:"/accessories"}]),M=1040,B=M*E.length,D=function(){var e=Object(j.useState)(0),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(j.useState)(0),i=Object(l.a)(n,2),r=i[0],o=i[1],b=function(){if(r===E.length-1)return s(0),void o(0);s((function(e){return e+M})),o((function(e){return e+1}))};return Object(j.useEffect)((function(){var e=setInterval(b,5e3);return function(){return clearInterval(e)}}),[r]),Object(u.jsxs)("section",{className:"section",children:[Object(u.jsxs)("div",{className:"slider",children:[Object(u.jsx)("button",{type:"button",className:"slider__button",onClick:function(){if(0===r)return s((function(){return B-M})),void o(E.length-1);s((function(e){return e-M})),o((function(e){return e-1}))},children:"<"}),Object(u.jsx)("div",{className:"slider__container",style:{width:"".concat(M,"px")},children:Object(u.jsx)("ul",{className:"slider__container-images",style:{transform:"translateX(".concat(-c,"px)"),width:"".concat(B,"px")},children:E.map((function(e){return Object(u.jsx)(a.b,{to:e.to,children:Object(u.jsx)("img",{src:e.img,alt:"category of products",width:1040,height:400,className:"slider__image"})},e.img)}))})}),Object(u.jsx)("button",{type:"button",className:"slider__button",onClick:b,children:">"})]}),Object(u.jsx)("div",{className:"slider__dots",children:E.map((function(e,t){return Object(u.jsx)("button",{type:"button","aria-label":"button",onClick:function(){return function(e){s(e*M),o(e)}(t)},className:d()("slider__dots-cell",{"slider__dots-cell--active":r===t})},e.to)}))})]})};c(39);!function(e){e.smallOn="Add to cart",e.bigOn="Add to cart",e.smallOff="Added to cart",e.bigOff="Added to cart"}(A||(A={}));var F,Q=function(e){var t=e.size,c=e.handleLike,s=e.handleAdd,a=e.phoneId,n=Object(j.useContext)(q).existingLikes;switch(t){case A.smallOn:return Object(u.jsxs)("div",{className:"btns-container",children:[Object(u.jsx)("button",{type:"button",className:"btn btn--small",onClick:function(){return s&&s(a)},children:A.smallOn}),Object(u.jsx)("button",{type:"button","aria-label":"favorite",onClick:function(){return c(a)},className:d()("fav fav--small",{"fav--is-active":n.includes(a)})})]});case A.bigOn:return Object(u.jsxs)("div",{className:"btns-container",children:[Object(u.jsx)("button",{type:"button",className:"btn btn--big",onClick:function(){return s&&s(a)},children:A.bigOn}),Object(u.jsx)("button",{type:"button","aria-label":"favorite",onClick:function(){return c(a)},className:d()("fav fav--big",{"fav--is-active":n.includes(a)})})]});case A.smallOff:return Object(u.jsxs)("div",{className:"btns-container",children:[Object(u.jsx)("button",{type:"button",className:"btn btn--small btn--disabled",disabled:!0,children:A.smallOff}),Object(u.jsx)("button",{type:"button","aria-label":"favorite",onClick:function(){return c(a)},className:d()("fav fav--small",{"fav--is-active":n.includes(a)})})]});case A.bigOff:return Object(u.jsxs)("div",{className:"btns-container",children:[Object(u.jsx)("button",{type:"button",className:"btn btn--big btn--disabled",disabled:!0,children:A.bigOff}),Object(u.jsx)("button",{type:"button","aria-label":"favorite",onClick:function(){return c(a)},className:d()("fav fav--big",{"fav--is-active":n.includes(a)})})]});default:return null}},$=(c(40),function(e){var t=e.phone,c=t.image,s=t.name,n=t.price,i=t.fullPrice,l=t.screen,o=t.capacity,d=t.ram,b=t.phoneId,h=Object(j.useContext)(q),m=h.addedProducts,O=h.handleAddToLikeStorage,_=h.handleAddToCart,p=Object(r.m)(),x=p.search,f=p.pathname;return Object(u.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(u.jsx)("div",{className:"card__img--error",children:Object(u.jsx)(a.b,{to:{pathname:"/phones/".concat(b)},state:{name:s,search:x,pathname:f},children:Object(u.jsx)("img",{src:y+c,width:208,height:208,alt:s,className:"card__img"})})}),Object(u.jsx)(a.b,{to:{pathname:"/phones/".concat(b)},className:"card__title",state:{name:s,search:x,pathname:f},children:s}),Object(u.jsxs)("div",{className:"card__price",children:[Object(u.jsx)("h2",{className:"card__price__actual",children:"$".concat(n)}),0!==i&&Object(u.jsx)("h2",{className:"card__price__deal",children:i})]}),Object(u.jsxs)("ul",{className:"card__list",children:[Object(u.jsxs)("li",{className:"card__item",children:[Object(u.jsx)("p",{className:"card__item__title",children:"Screen"}),Object(u.jsx)("p",{className:"card__item__charac",children:l})]}),Object(u.jsxs)("li",{className:"card__item",children:[Object(u.jsx)("p",{className:"card__item__title",children:"Capacity"}),Object(u.jsx)("p",{className:"card__item__charac",children:o})]}),Object(u.jsxs)("li",{className:"card__item",children:[Object(u.jsx)("p",{className:"card__item__title",children:"RAM"}),Object(u.jsx)("p",{className:"card__item__charac",children:d})]})]}),m.includes(b)?Object(u.jsx)(Q,{size:A.smallOff,handleLike:O,phoneId:b}):Object(u.jsx)(Q,{size:A.smallOn,handleLike:O,handleAdd:_,phoneId:b})]})}),z=(c(41),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),J=(c(42),1152),U=function(e){var t=e.title,c=e.phones,s=e.isError,a=e.isLoading,n=Object(j.useState)(-0),i=Object(l.a)(n,2),r=i[0],o=i[1],b=Object(j.useState)(!1),h=Object(l.a)(b,2),m=h[0],O=h[1],_=Object(j.useState)(!1),p=Object(l.a)(_,2),x=p[0],f=p[1],g=288*c.length-J;Object(j.useEffect)((function(){0!==r?r!==g?(O(!1),f(!1)):f(!0):O(!0)}),[r]);return Object(u.jsxs)("div",{className:"slider__section",children:[Object(u.jsxs)("div",{className:"slider__header",children:[Object(u.jsx)("h1",{className:"slider__header__title",children:t}),Object(u.jsxs)("div",{className:"slider__header__buttons",children:[Object(u.jsx)("button",{type:"button","aria-label":"arrow-left",className:d()("arrow arrow--left",{"arrow--left--is-disabled":m}),onClick:function(){o(r-J<=0?0:function(e){return e-J})},disabled:m}),Object(u.jsx)("button",{type:"button","aria-label":"arrow-right",className:d()("arrow arrow--right",{"arrow--right--is-disabled":x}),onClick:function(){o(r+J>g?g:function(e){return e+J})},disabled:x})]})]}),Object(u.jsxs)("div",{className:"slider__products",children:[a&&!s&&Object(u.jsx)(z,{}),Object(u.jsx)("div",{className:"slider__products__container",style:{transform:"translateX(-".concat(r,"px")},children:!a&&!s&&c.map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))})]})]})},X=(c(43),c(44),function(e){var t=e.img,c=e.title,s=e.qnty,n=e.to;return Object(u.jsxs)("div",{className:"category-card",children:[Object(u.jsx)(a.b,{to:n,children:Object(u.jsx)("img",{src:t,alt:"phones category"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(a.b,{to:n,className:"category-card__title",children:c}),Object(u.jsx)("p",{className:"category-card__title-extra",children:"".concat(s," models")})]})]})}),Y=[{img:c.p+"static/media/phonesCategory.a00f2a53.jpg",title:"Mobile phones",to:"/phones"},{img:c.p+"static/media/tabletsCategory.d9570974.jpg",title:"Tablets",to:"/tablets"},{img:c.p+"static/media/AccessoriesCategory.fcfc0e03.jpg",title:"Accessories",to:"/accessories"}],H=function(){var e=L(s.hotProducts),t=Object(l.a)(e,1)[0];return Object(u.jsxs)("div",{className:"page__section","data-cy":"categoryLinksContainer",children:[Object(u.jsx)("div",{className:"page__section__header",children:Object(u.jsx)("h1",{className:"page__section__title",children:"Shop by category"})}),Object(u.jsx)("div",{className:"category",children:Y.map((function(e){return Object(u.jsx)(X,{img:e.img,title:e.title,to:e.to,qnty:t.length},e.to)}))})]})};!function(e){e.hot="Hot prices",e.new="Brand new models",e.suggestions="You may also like"}(F||(F={}));var W=function(){var e=L(s.hotProducts),t=Object(l.a)(e,3),c=t[0],a=t[1],n=t[2],i=L(s.newProducts),r=Object(l.a)(i,3),o=r[0],d=r[1],j=r[2];return Object(u.jsxs)("div",{className:"page__container page__container--home",children:[Object(u.jsx)(D,{}),Object(u.jsx)(U,{title:F.hot,phones:c,isError:n,isLoading:a}),Object(u.jsx)(H,{}),Object(u.jsx)(U,{title:F.new,phones:o,isError:j,isLoading:d})]})},G=(c(45),function(e){var t=e.currentPageTitle,c=Object(r.m)().pathname.split("/");return Object(u.jsx)("nav",{className:"bread-crumbs",children:c.map((function(e,s){return 0===s?Object(u.jsxs)(b.a.Fragment,{children:[Object(u.jsx)(a.b,{to:"/",className:"bread-crumbs__home"},e),Object(u.jsx)("div",{className:"bread-crumbs__arrow"})]},e):s===c.length-1?Object(u.jsx)("p",{className:"bread-crumbs__paragraph",children:t||(n=e,n.split("-").map((function(e){var t;return"iphone"===e?"iPhone":(null===(t=e.at(0))||void 0===t?void 0:t.toUpperCase())+e.slice(1)})).join(" "))},e):Object(u.jsxs)(b.a.Fragment,{children:[Object(u.jsx)(a.b,{to:"/".concat(e),className:"bread-crumbs__link",children:e},e),Object(u.jsx)("div",{className:"bread-crumbs__arrow"})]},e);var n}))})});G.defaultProps={currentPageTitle:null};c(46);var K=function(e){var t=e.phonesLen,c=e.visiblePhonesLen,s=e.title,n=e.isLoading,i=e.isError,o=e.backArrow,d=Object(r.o)(),j=Object(a.d)(),b=Object(l.a)(j,1)[0].get("query")||"",h=Object(r.m)().state,m=function(){d({pathname:(null===h||void 0===h?void 0:h.pathname)||"..",search:null===h||void 0===h?void 0:h.search})};return t&&!o?Object(u.jsxs)("div",{className:"title-of-page",children:[Object(u.jsx)("h1",{className:"title-of-page__title",children:s}),Object(u.jsx)("p",{className:"title-of-page__paragraph",style:{visibility:n||i?"hidden":"visible"},children:b?"".concat(c," results"):"".concat(t||0," models")})]}):Object(u.jsxs)("div",{className:"title-of-page",children:[Object(u.jsxs)("div",{className:"title-of-page__container",children:[Object(u.jsx)("button",{type:"button","aria-label":"go back",className:"title-of-page__arrow",onClick:function(){return m()}}),Object(u.jsx)("button",{type:"button","aria-label":"go back",className:"title-of-page__back-link",onClick:function(){return m()},children:"Back"})]}),Object(u.jsx)("h1",{className:"title-of-page__title",children:s})]})},V=function(){var e=Object(j.useRef)(!1);return Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)("section",{className:"page__section",children:[Object(u.jsx)(G,{currentPageTitle:"Accessories"}),Object(u.jsx)(K,{title:"Accessories page is not finished yet",backArrow:e.current})]})})},Z=function(){var e=Object(j.useRef)(!1);return Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)("section",{className:"page__section",children:[Object(u.jsx)(G,{currentPageTitle:"Tablets"}),Object(u.jsx)(K,{title:"Tablets page is not finished yet",backArrow:e.current})]})})},ee=function(){var e=Object(j.useRef)(!1);return Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)("section",{className:"page__section",children:[Object(u.jsx)(G,{currentPageTitle:"Constacts"}),Object(u.jsx)(K,{title:"Constacts",backArrow:e.current})]})})},te=function(){var e=Object(j.useRef)(!1);return Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)("section",{className:"page__section",children:[Object(u.jsx)(G,{currentPageTitle:"Rights"}),Object(u.jsx)(K,{title:"Rights",backArrow:e.current})]})})},ce=function(){return Object(u.jsx)("h1",{children:"No matches for your request"})},se=(c(25),function(e){var t=e.visiblePhones,c=e.isLoading,s=e.isError,n=e.sortOptions,i=e.perPageOptions,r=e.handleSelect,o=Object(j.useState)(!1),b=Object(l.a)(o,2),h=b[0],m=b[1],O=Object(a.d)(),_=Object(l.a)(O,1)[0],p=_.get("sort")||"",x=_.get("perPage")||"",f=_.get("page")||"",g=x?+x:16,v=(f?+f:1)*g,N=v-g,y=p?n[p]:n.age,w=function(e){e.relatedTarget&&e.relatedTarget.classList.contains("dropdown__link")||m(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"selects-container",children:[Object(u.jsxs)("div",{className:"select",children:[Object(u.jsx)("p",{className:"select__paragraph",children:"Sort by"}),Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsxs)("button",{type:"button",className:"dropdown__btn",onBlur:function(e){return w(e)},onClick:function(){return m((function(e){return"sort"!==e&&"sort"}))},children:[Object(u.jsx)("span",{children:y}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:d()("dropdown__arrow dropdown__arrow--up",{"dropdown__arrow--down":"sort"===h})})})]}),Object(u.jsx)("div",{className:d()("dropdown__list",{"dropdown__list--is-active":"sort"===h}),children:Object.entries(n).map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(u.jsx)("div",{className:"dropdown__item",children:Object(u.jsx)(a.b,{to:{search:r("sort",c).toString()},className:d()("dropdown__link",{"dropdown__link--is-active":"sort"===h}),onClick:function(){return m(!1)},children:s})},s)}))})]})]}),Object(u.jsxs)("div",{className:"select",children:[Object(u.jsx)("p",{className:"select__paragraph",children:"Items on page"}),Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsxs)("button",{type:"button",className:"dropdown__btn",onBlur:function(e){return w(e)},onClick:function(){return m((function(e){return"items"!==e&&"items"}))},children:[Object(u.jsx)("span",{children:g||"all"}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:d()("dropdown__arrow dropdown__arrow--up",{"dropdown__arrow--down":"items"===h})})})]}),Object(u.jsx)("div",{className:d()("dropdown__list",{"dropdown__list--is-active":"items"===h}),children:Object.entries(i).map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(u.jsx)("div",{className:"dropdown__item",children:Object(u.jsx)(a.b,{to:{search:r("perPage",s).toString()},className:d()("dropdown__link",{"dropdown__link--is-active":"items"===h}),onClick:function(){return m(!1)},children:c})},s)}))})]})]})]}),Object(u.jsxs)("div",{className:"cataloge","data-cy":"productList",children:[c&&!s&&Object(u.jsx)(z,{}),t.length<1&&Object(u.jsx)(ce,{}),!c&&!s&&t.slice(N,"all"!==x?v:-1).map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))]})]})}),ae=(c(47),function(e){var t=e.handleSelect,c=e.phones,s=Object(a.d)(),n=Object(l.a)(s,1)[0],i=n.get("perPage")||"",r=n.get("page")||"",o=r?+r:1,j=i?+i:16,b=Math.ceil(c.length/j);return Object(u.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(u.jsx)(a.b,{"data-cy":"paginationLeft",to:{search:t("page","".concat(o-1)).toString()},onClick:function(e){return 1===o&&e.preventDefault()},type:"button","aria-label":"arrow-left",className:d()("arrow arrow--left",{"arrow--left--is-disabled":1===o})}),c.map((function(e,c){return c<b&&Object(u.jsx)(a.b,{to:{search:t("page","".concat(c+1)).toString()},type:"button",className:d()("pagination__btn",{"pagination__btn--is-active":o===c+1}),children:c+1},e.id)})),Object(u.jsx)(a.b,{"data-cy":"paginationRight",to:{search:t("page","".concat(o+1)).toString()},type:"button","aria-label":"arrow-right",onClick:function(e){return o===b&&e.preventDefault()},className:d()("arrow arrow--right",{"arrow--right--is-disabled":o===b})})]})}),ne={age:"Newest",name:"Alphabetically",price:"Cheapest"},ie={4:"4",8:"8",16:"16",all:"all"},re=function(){var e=L(s.allProducts),t=Object(l.a)(e,3),c=t[0],n=t[1],i=t[2],r=Object(j.useRef)(!1),o=Object(a.d)(),d=Object(l.a)(o,1)[0],b=d.get("sort")||"",h=d.get("query")||"",m=d.get("perPage")||"",O=function(e,t){var c=new URLSearchParams(d);return"perPage"===e&&c.set("page","1"),c.set(e,t),c},_=Object(j.useMemo)((function(){var e=Object(x.a)(c).filter((function(e){return e.name.toLowerCase().includes(h.trim().toLocaleLowerCase())}));return b||e.sort((function(e,t){return t.year-e.year})),e.sort((function(e,t){switch(b){case"age":return t.year-e.year;case"name":return t.name.localeCompare(e.name);case"price":return e.price-t.price;default:return 0}})),e}),[c,b,h]);return Object(u.jsxs)("div",{className:"page__container",children:[Object(u.jsx)(G,{}),Object(u.jsxs)("div",{className:"page__section",children:[Object(u.jsx)(K,{title:"Mobile phones",phonesLen:c.length,visiblePhonesLen:_.length,isLoading:i,isError:n,backArrow:r.current}),Object(u.jsx)(se,{isError:n,isLoading:i,visiblePhones:_,sortOptions:ne,perPageOptions:ie,handleSelect:O}),_.length>0&&"all"!==m&&Object(u.jsx)(ae,{handleSelect:O,phones:_})]})]})},le=(c(48),function(e){var t=e.images,c=Object(j.useState)(t[0]),s=Object(l.a)(c,2),a=s[0],n=s[1];return Object(u.jsxs)("div",{className:"product-card",children:[Object(u.jsx)("div",{className:"product-card__container",children:Object(u.jsx)("div",{className:"product-card__small-list",children:t.map((function(e){return Object(u.jsx)("button",{type:"button",className:"product-card__small-item",onClick:function(){return n(e)},children:Object(u.jsx)("img",{src:y+e,width:"66px",height:"66px",alt:"phone",className:"product-card__small-img"})},e)}))})}),Object(u.jsx)("img",{src:y+a,alt:"phone",width:"442",height:"442",className:"product-card__big-img"})]})}),oe=(c(49),c(50),function(e){var t=e.title;return Object(u.jsx)("div",{className:"not-found",children:Object(u.jsx)("h1",{className:"not-found__title",children:t})})}),de=function(){var e=L(s.hotProducts),t=Object(l.a)(e,3),c=t[0],n=t[1],i=t[2],o=Object(j.useState)(null),b=Object(l.a)(o,2),h=b[0],m=b[1],O=Object(j.useState)(!1),_=Object(l.a)(O,2),p=_[0],x=_[1],f=Object(j.useState)(!1),g=Object(l.a)(f,2),v=g[0],N=g[1],y=Object(r.m)().state,w=Object(r.q)().id,k=Object(j.useRef)(!0),C=w||"",P=Object(j.useContext)(q),T=P.addedProducts,I=P.handleAddToCart,R=P.handleAddToLikeStorage,E=function(e){return"/phones/".concat(null===h||void 0===h?void 0:h.namespaceId,"-").concat(null===h||void 0===h?void 0:h.capacity.toLowerCase(),"-").concat(e.toLowerCase())},M=function(e){return"/phones/".concat(null===h||void 0===h?void 0:h.namespaceId,"-").concat(e.toLowerCase(),"-").concat(null===h||void 0===h?void 0:h.color.toLowerCase())},B=function(e){return"spacegray"===e?"#5f5f5f":"midnightgreen"===e?"#004953":e};return Object(j.useEffect)((function(){N(!0),function(e){return S.apply(this,arguments)}(C).then(m).catch((function(){return x(!0)})).finally((function(){return N(!1)}))}),[w]),Object(u.jsxs)("div",{className:"page__container",children:[Object(u.jsx)(G,{currentPageTitle:h?null===y||void 0===y?void 0:y.name:"Phone was not found"}),v&&!p&&Object(u.jsx)(z,{}),!h&&!v&&Object(u.jsx)(oe,{title:"Phone was not found"}),h&&!v&&!p&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"page__section",children:Object(u.jsx)(K,{title:h.name,prevSearchParam:null===y||void 0===y?void 0:y.prevSearchParam,backArrow:k.current})}),Object(u.jsxs)("section",{className:"product-header",children:[Object(u.jsx)(le,{images:h.images}),Object(u.jsxs)("div",{className:"product-header__buy-container",children:[Object(u.jsxs)("div",{className:"colors",children:[Object(u.jsx)("h3",{className:"colors__title",children:"Available colors"}),Object(u.jsx)("div",{className:"colors__container",children:h.colorsAvailable.map((function(e){return Object(u.jsx)("div",{className:d()("colors__circle-border",{"colors__circle-border--is-active":h.color===e}),children:Object(u.jsx)(a.b,{to:{pathname:E(e)},style:{backgroundColor:B(e),border:"white"===e?"1px solid $elements-color":""},className:"colors__circle-color-button"})},e)}))})]}),Object(u.jsxs)("div",{className:"capacity",children:[Object(u.jsx)("h3",{className:"product-header__title",children:"Select capacity"}),Object(u.jsx)("div",{className:"capacity__container",children:h.capacityAvailable.map((function(e){return Object(u.jsx)(a.b,{to:{pathname:M(e)},className:d()("capacity__value",{"capacity__value--is-active":h.capacity===e}),children:e},e)}))})]}),Object(u.jsxs)("div",{className:"buy-it-now",children:[Object(u.jsxs)("div",{className:"buy-it-now__price-container",children:[Object(u.jsx)("h2",{className:"buy-it-now__reg-price",children:"$".concat(h.priceRegular)}),Object(u.jsx)("h2",{className:"buy-it-now__disc-price",children:"$".concat(h.priceDiscount)})]}),T.includes(C)?Object(u.jsx)(Q,{size:A.bigOff,handleLike:R,phoneId:C}):Object(u.jsx)(Q,{size:A.bigOn,handleLike:R,handleAdd:I,phoneId:C})]}),Object(u.jsxs)("ul",{className:"desc-list",children:[Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Screen"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.screen})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Resolution"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.resolution})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Processor"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.processor})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"RAM"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.ram})]})]})]})]}),Object(u.jsxs)("section",{className:"product-desc",children:[Object(u.jsxs)("div",{className:"product-desc__about",children:[Object(u.jsx)("div",{className:"product-desc__title-container",children:Object(u.jsx)("h2",{className:"product-desc__title",children:"About"})}),h.description.map((function(e){return Object(u.jsxs)("article",{className:"article",children:[Object(u.jsx)("h3",{className:"article__title",children:e.title}),e.text.map((function(e){return Object(u.jsx)("p",{className:"article__desc",children:e},e)}))]},e.title)}))]}),Object(u.jsxs)("div",{className:"product-desc__tech-specs",children:[Object(u.jsx)("div",{className:"product-desc__title-container",children:Object(u.jsx)("h2",{className:"product-desc__title",children:"Tech specs"})}),Object(u.jsx)("article",{className:"article",children:Object(u.jsxs)("ul",{className:"desc-list",children:[Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Screen"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.screen})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Resolution"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.resolution})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"Processor"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.processor})]}),Object(u.jsxs)("li",{className:"desc-item",children:[Object(u.jsx)("p",{className:"desc-item__title desc-item__title--gray",children:"RAM"}),Object(u.jsx)("p",{className:"desc-item__title",children:h.ram})]})]})})]})]}),Object(u.jsx)(U,{phones:c,title:F.suggestions,isError:i,isLoading:n})]})]})},je=function(){var e=Object(j.useContext)(q).likesStorage,t=Object(j.useRef)(!1),c=Object(a.d)(),s=Object(l.a)(c,1)[0].get("query");return Object(u.jsxs)("div",{className:"page__container",children:[!s&&Object(u.jsx)(G,{}),Object(u.jsx)("div",{className:"page__section",children:Object(u.jsx)(K,{title:"Favorites",phonesLen:e.length,visiblePhonesLen:e.length,backArrow:t.current})}),Object(u.jsx)("div",{className:"cataloge","data-cy":"productList",children:e.map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))})]})},be=(c(51),function(){var e=Object(j.useContext)(q),t=e.cartStorage,c=e.totalAmountAndQnty,s=e.handleDeleteProduct,a=e.handleQntyOfProduct,n=Object(j.useState)("Checkout"),i=Object(l.a)(n,2),r=i[0],o=i[1];return Object(j.useEffect)((function(){setTimeout((function(){o("Checkout")}),3e3)}),[r]),Object(u.jsxs)("div",{className:"cart-container",children:[t.length<1?Object(u.jsx)("div",{className:"empty-cart",children:Object(u.jsx)("h1",{className:"checkout__price",children:"Your cart is empty"})}):Object(u.jsx)("div",{className:"cards__container",children:t.map((function(e){return Object(u.jsxs)("div",{className:"added-card",children:[Object(u.jsx)("button",{type:"button","aria-label":"delete",className:"added-card__delete",onClick:function(){return s(e.id)}}),Object(u.jsx)("img",{src:y+e.image,alt:e.name,width:"66",height:"66",className:"added-card__img"}),Object(u.jsx)("h1",{className:"added-card__title",children:e.name}),Object(u.jsxs)("div",{className:"added-card__btn-container",children:[Object(u.jsx)("button",{type:"button","aria-label":"minus",className:d()("added-card__btn added-card__btn--minus",{"added-card__btn--disabled":e.qnty<1}),onClick:function(){return a(e.id,"minus")},disabled:e.qnty<1}),Object(u.jsx)("p",{className:"added-card__num",children:e.qnty}),Object(u.jsx)("button",{type:"button","aria-label":"plus",className:"added-card__btn added-card__btn--plus",onClick:function(){return a(e.id,"plus")}})]}),Object(u.jsx)("p",{className:"added-card__price",children:"".concat(e.price,"$")})]},e.id)}))}),Object(u.jsxs)("div",{className:"checkout",children:[Object(u.jsxs)("div",{className:"checkout__price-container",children:[Object(u.jsx)("h1",{className:"checkout__price",children:"$".concat(c.amount)}),Object(u.jsx)("p",{className:"checkout__qnty",children:"Total for ".concat(c.qnty," items")})]}),Object(u.jsx)("button",{type:"button","aria-label":"checkout",className:"checkout__btn",onClick:function(){return o("We are sorry, but this feature is not implemented yet")},children:r})]})]})}),ue=function(){var e=Object(j.useContext)(q).cartStorage,t=Object(j.useRef)(!0);return Object(u.jsxs)("div",{className:"page__container",children:[Object(u.jsx)("div",{className:"page__section",children:Object(u.jsx)(K,{title:"Cart",phonesLen:e.length,visiblePhonesLen:e.length,backArrow:t.current})}),Object(u.jsx)("div",{className:"cataloge","data-cy":"productList",children:Object(u.jsx)(be,{})})]})},he=function(){return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{className:"page__logo--header",children:Object(u.jsx)(a.b,{to:"/",className:"page__logo--icon"})}),Object(u.jsx)(R,{})]}),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("div",{className:"main__container",children:Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{path:"/",element:Object(u.jsx)(W,{})}),Object(u.jsx)(r.b,{path:"/home",element:Object(u.jsx)(r.a,{to:"/",replace:!0})}),Object(u.jsxs)(r.b,{path:"/phones",children:[Object(u.jsx)(r.b,{index:!0,element:Object(u.jsx)(re,{})}),Object(u.jsx)(r.b,{path:":id",element:Object(u.jsx)(de,{})})]}),Object(u.jsx)(r.b,{path:"/tablets",element:Object(u.jsx)(Z,{})}),Object(u.jsx)(r.b,{path:"/accessories",element:Object(u.jsx)(V,{})}),Object(u.jsx)(r.b,{path:"/contacts",element:Object(u.jsx)(ee,{})}),Object(u.jsx)(r.b,{path:"/rights",element:Object(u.jsx)(te,{})}),Object(u.jsx)(r.b,{path:"/favorites",element:Object(u.jsx)(je,{})}),Object(u.jsx)(r.b,{path:"/cart",element:Object(u.jsx)(ue,{})}),Object(u.jsx)(r.b,{path:"*",element:Object(u.jsx)(oe,{title:"Page not found"})})]})})}),Object(u.jsx)(m,{})]})};i.a.render(Object(u.jsx)(T,{children:Object(u.jsx)(a.a,{children:Object(u.jsx)(he,{})})}),document.getElementById("root"))}]),[[52,1,2]]]);
//# sourceMappingURL=main.f12df693.chunk.js.map