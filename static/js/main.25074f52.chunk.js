(this["webpackJsonpmobx-simple-project"]=this["webpackJsonpmobx-simple-project"]||[]).push([[0],[,,,function(e,t,n){e.exports={modal:"Modal_modal__1QiOb",active:"Modal_active__hp7Wj",modal_content:"Modal_modal_content__1wW5H"}},,,,,,,function(e,t,n){e.exports={myInput:"NameForm_myInput__2eCkQ",myErr:"NameForm_myErr__1_Df1"}},function(e,t,n){e.exports={header:"App_header__1UX57"}},function(e,t,n){e.exports={button1:"Button_button1__ziRfJ"}},function(e,t,n){e.exports={container:"InputForm_container__9UZLC"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),s=(n(18),n(11)),i=n.n(s),u=n(8),l=n(7),m=n(5),j=n(6),d=n(2),h=new(function(){function e(){Object(m.a)(this,e),this.userName="",this.surname="",this.isSetted=!1,Object(d.d)(this)}return Object(j.a)(e,[{key:"setUserName",value:function(e){this.userName=e}},{key:"setSurname",value:function(e){this.surname=e}},{key:"setIsSeted",value:function(e){this.isSetted=e}}]),e}()),b=new(function(){function e(){Object(m.a)(this,e),this.nameError="",this.surnameError="",Object(d.d)(this)}return Object(j.a)(e,[{key:"setNameError",value:function(e){this.nameError=e}},{key:"clearNameError",value:function(){this.nameError=""}},{key:"setSurnameError",value:function(e){this.surnameError=e}},{key:"clearSurnameError",value:function(){this.surnameError=""}}]),e}()),f=n(10),p=n.n(f),v=n(1),O=Object(l.a)((function(e){var t=e.isName,n=e.placeholder,a=e.onClick,c=Object(r.useState)(t?h.userName:h.surname),o=Object(u.a)(c,2),s=o[0],i=o[1],l=function(e){t?h.setUserName(e):h.setSurname(e)},m=function(e){t?b.setNameError(e):b.setSurnameError(e)},j=function(e){i(e.currentTarget.value),l(e.currentTarget.value),m("")};return Object(v.jsxs)("div",{className:p.a.myInput,children:[Object(v.jsx)("div",{className:p.a.myErr,children:h.isSetted?t?b.nameError:b.surnameError:""}),Object(v.jsx)("input",{onBlur:j,autoFocus:!0,value:s,onChange:j,onKeyPress:function(e){"Enter"===e.key&&(s.trim()?(l(s),a()):(m(t?"\u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435: \u0418\u043c\u044f":"\u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435: \u0424\u0430\u043c\u0438\u043b\u0438\u044f"),l("")))},placeholder:n})]})})),_=n(12),x=n.n(_),N=function(e){var t=e.onClick,n=e.title;return Object(v.jsx)("button",{className:x.a.button1,onClick:t,children:n})},k=n(3),E=n.n(k),C=function(e){var t="".concat(E.a.modal," ").concat(E.a.active),n="".concat(E.a.modalb_content," ").concat(E.a.active);return Object(v.jsxs)("div",{className:e.active?t:E.a.modal,children:[Object(v.jsx)("div",{className:e.active?n:E.a.modal_content,onClick:function(e){return e.stopPropagation()},children:Object(v.jsxs)("div",{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, "+h.userName.toUpperCase()+"  "+h.surname.toUpperCase(),e.children]})}),Object(v.jsx)(N,{onClick:e.onClick,title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})},y=n(13),S=n.n(y),g=Object(l.a)((function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=function(){h.userName&&h.surname&&a(!0),h.userName||b.setNameError("\u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435: \u0418\u043c\u044f"),h.surname||b.setSurnameError("\u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435: \u0424\u0430\u043c\u0438\u043b\u0438\u044f"),h.setIsSeted(!0)};return Object(v.jsxs)("div",{className:S.a.container,children:[Object(v.jsx)(C,{onClick:function(){return a(!1)},active:n,setActive:function(e){a(e)}}),Object(v.jsx)(O,{isName:!0,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onClick:c}),Object(v.jsx)(O,{isName:!1,placeholder:"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",onClick:c}),Object(v.jsx)(N,{onClick:c,title:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})})),F=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("header",{className:i.a.header,children:Object(v.jsx)(g,{})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),I()}],[[21,1,2]]]);
//# sourceMappingURL=main.25074f52.chunk.js.map