(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{39:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(12),o=n.n(a),i=n(27),l=n(14),u=n(15),s=n(18),b=n(16),d=n(8),j=n(41),O=n(6),f={addContact:Object(O.b)("phoneBook/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(j.a)(),name:e,number:n}}})),delContact:Object(O.b)("phoneBook/del"),filter:Object(O.b)("phoneBook/filter")},h=n(1),p=function(t,e){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))},m=Object(d.b)((function(t){var e=t.contacts,n=e.filter,r=e.items;return{contacts:p(n,r)}}),(function(t){return{deleteContact:function(e){return t(f.delContact(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(h.jsxs)("li",{children:[Object(h.jsxs)("p",{children:[r,":",c]}),Object(h.jsx)("button",{id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),x=n(10),v=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputHandler=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(x.a)({},r,c))},t.submitHandler=function(e){e.preventDefault(),t.props.addContact(t.state)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{onChange:this.inputHandler,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Tel",Object(h.jsx)("input",{onChange:this.inputHandler,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(r.Component),C=Object(d.b)(null,(function(t){return{addContact:function(e){return t(f.addContact(e))}}}))(v);var g,k=Object(d.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{filterHandler:function(e){return t(f.filter(e.target.value))}}}))((function(t){var e=t.filterHandler,n=t.filter;return Object(h.jsxs)("label",{children:["find",Object(h.jsx)("input",{value:n,onChange:e})]})})),y=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(C,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(k,{}),Object(h.jsx)(m,{})]})}}]),n}(r.Component),w=n(17),A=n(24),H=n.n(A),z=n(25),B=n.n(z),L=n(3),J=Object(O.c)([],(g={},Object(x.a)(g,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(w.a)(t),[n])})),Object(x.a)(g,f.delContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),g)),S=Object(O.c)("",Object(x.a)({},f.filter,(function(t,e){return e.payload}))),Z=Object(L.b)({items:J,filter:S}),q=n(7),D={key:"contacts",storage:B.a,blacklist:["filter"]},M=[].concat(Object(w.a)(Object(O.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),[H.a]),E=Object(O.a)({reducer:{contacts:Object(q.g)(D,Z)},middleware:M}),I={store:E,persistor:Object(q.h)(E)},N=n(26);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d.a,{store:I.store,children:Object(h.jsx)(N.a,{loading:null,persistor:I.persistor,children:Object(h.jsx)(i.a,{children:Object(h.jsx)(y,{})})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.477ec9db.chunk.js.map