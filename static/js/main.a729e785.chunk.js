(this["webpackJsonpgoit-react-hw-04-images"]=this["webpackJsonpgoit-react-hw-04-images"]||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){e.exports={button:"button_button__2pFT2"}},28:function(e,t,a){e.exports={loader:"react-spinner-loader_loader__1AK2v",spin:"react-spinner-loader_spin__XtRse"}},4:function(e,t,a){e.exports={container:"gallery_container__2fTHj",box:"gallery_box__3Y73A",list:"gallery_list__3ibTU",el:"gallery_el__1fAHU"}},5:function(e,t,a){e.exports={input:"style-bar_input__3iP-7",button:"style-bar_button___kAu7",sentform:"style-bar_sentform__1YRx8",header:"style-bar_header__Ypv1l"}},6:function(e,t,a){e.exports={popup:"popup_popup__29G1O",overlay:"popup_overlay__ZzVyZ",formBody:"popup_formBody__3aHJI",close:"popup_close__3LvBu",active:"popup_active__39TDQ",inactive:"popup_inactive__2DzXr"}},64:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a.n(o),n=a(25),r=a.n(n),c=a(26),l=a(12),i=a(27),p=a.n(i),d=a(0);var b=e=>Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{onClick:e.onClick,className:p.a.button,type:"submit",children:e.children})}),j=a(6),m=a.n(j);var u=e=>{let{button:t}=e;return Object(o.useEffect)((()=>{window.addEventListener("keydown",(e=>{"Escape"===e.code&&(void 0).button()}))}),[]),Object(d.jsx)("div",{className:m.a.popup,children:Object(d.jsx)("div",{className:m.a.overlay,children:Object(d.jsxs)("div",{className:m.a.formBody,children:[Object(d.jsx)(b,{clasName:m.a.close,onClick:t,children:"x"}),Object(d.jsx)("img",{src:"",alt:"",loading:"eager"})]})})})};class h extends o.Component{render(){const e=document.getElementById("another-root");return Object(d.jsx)(d.Fragment,{children:Object(l.createPortal)(Object(d.jsx)(u,{button:this.props.onActive}),e)})}}var _=a(30),g=a(4),x=a.n(g);const O=e=>{let{onShow:t,items:a,error:o,Children:s}=e;const n=a.map((e=>{let{id:a,largeImageURL:o,webformatURL:s,tags:n}=e;return Object(d.jsx)("div",{onClick:()=>t({largeImageURL:o,tags:n}),className:x.a.box,children:Object(d.jsx)("ul",{className:x.a.list,children:Object(d.jsx)("li",{className:x.a.el,children:Object(d.jsx)("img",{src:s,alt:n})})})},a)}));return Object(d.jsxs)("div",{className:x.a.distance,children:[o&&console.log("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430, c\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u043f\u0456\u0437\u043d\u0456\u0448\u0435"),Object(d.jsx)("div",{className:x.a.container,children:Boolean(a.length)&&n}),s]})};var v=O;O.defaultProps={items:[],searchName:""};var f=a(5),y=a.n(f);var w=e=>{const[t,a]=Object(o.useState)({pool:""});return Object(d.jsx)("header",{className:y.a.searchbar,children:Object(d.jsxs)("form",{onSubmit:a=>{a.preventDefault(),""!==t.pool?e(t.pool):alert("\u0424\u043e\u0442\u043e ".concat(t.pool," \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0438\u0441\u044f"))},className:y.a.form,children:[Object(d.jsx)("button",{type:"submit",className:y.a.button,children:Object(d.jsx)("span",{className:y.a.buttonLabel,children:"Search"})}),Object(d.jsx)("label",{htmlFor:"searchPhoto",children:Object(d.jsx)("input",{className:y.a.input,type:"text",name:"pool",id:"searchPhoto",placeholder:"Search images and photos",onChange:e=>{a({pool:e.currentTarget.value.toLowerCase()})}})})]})})},N=a(28),L=a.n(N);class k extends o.Component{render(){return Object(d.jsx)("div",{className:L.a.loader})}}a(15);var C,I=a(29),M=a.n(I);const S=_.a.button(C||(C=Object(c.a)(["\n  background-color: rgba(60, 60, 87, 0.9);\n  color: white;\n  width: 50px;\n  margin-left: 50px;\n"])));var B=()=>{const[e,t]=Object(o.useState)({pool:"",modalImages:{},showModal:!1,isLoading:!1,items:[],error:null,page:6});Object(o.useEffect)((()=>{M.a.get("https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=".concat(e.pool,"&page=").concat(e.page,"&per_page=12&image_type=photo")).then((e=>{let{data:a}=e;t({items:a.hits})})).catch((e=>console.log(e.messages)))}),[e.page,e.pool]);const{items:a,showModal:s,error:n,isLoading:r}=e;return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{onSubmit:e=>{t({pool:e})}}),s&&Object(d.jsx)(h,{onActive:()=>{t((e=>({showModal:!e.showModal})))}}),r?Object(d.jsx)(k,{}):Object(d.jsx)(v,{items:a,error:n,onLoader:()=>{t((e=>({isLoading:!e.isLoading})))},onBox:()=>{t((e=>({showModal:!e.showModal})))},onShow:e=>{let{largeImageURL:a,tags:o}=e;t({showModal:!0,modalImages:{largeImageURL:a,tags:o}})}}),Object(d.jsx)(S,{onClick:()=>{t((e=>({page:e.page+1})))},children:"Load More"})]})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(B,{})}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a729e785.chunk.js.map