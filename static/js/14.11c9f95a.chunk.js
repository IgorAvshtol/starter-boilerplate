(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[14],{509:function(e,t,n){"use strict";n.r(t);var c=n(184);var r=n(142);function a(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(14),o=n(76),s=n(2),u=n(0),l=function(e){var t=e.rectangles;return Object(s.jsx)("div",{className:"coordinates-panel",children:t.map((function(e){return Object(s.jsxs)("div",{className:"coordinate",children:[Object(s.jsxs)("span",{children:[e.shape," ",e.id,": "]}),Object(s.jsxs)("span",{children:["X: ",e.x,", Y: ",e.y]})]},e.id)}))})};t.default=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(u.useEffect)((function(){var e=localStorage.getItem("rectangles");e&&c(JSON.parse(e))}),[]);var r=function(e){localStorage.setItem("rectangles",JSON.stringify(e))};return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("div",{className:"grid",onMouseDown:function(e){return e.preventDefault()},children:n.map((function(e){return Object(s.jsxs)("div",{className:"shape",style:{left:e.x,top:e.y},onMouseDown:function(t){return function(e,t){e.preventDefault();var a=e.clientX,o=e.clientY,s=a-t.x,u=o-t.y,l=t.x,d=t.y,f=function(e){e.preventDefault();var n=e.clientX,r=e.clientY;l=n-s,d=r-u,c((function(e){return e.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{x:l,y:d}):e}))}))};document.addEventListener("mousemove",f),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",e),r(n.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{x:l,y:d}):e})))}))}(t,e)},children:["\u0421\u0442\u043e\u043b"===e.shape&&Object(s.jsx)("img",{className:"shape",src:"/img/furniture/sofa.png",alt:"\u0441\u0442\u043e\u043b"}),"\u0421\u0442\u0443\u043b"===e.shape&&Object(s.jsx)("img",{className:"shape",src:"/img/furniture/stool-chair.png",alt:"\u0441\u0442\u0443\u043b"}),Object(s.jsx)("button",{className:"deleteButton",onClick:function(){return t=e.id,c((function(e){return e.filter((function(e){return e.id!==t}))})),void r(n.filter((function(e){return e.id!==t})));var t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"addButton",onClick:function(){var e={id:n.length+1,shape:"\u0421\u0442\u043e\u043b",x:0,y:0};c((function(t){return[].concat(a(t),[e])})),r([].concat(a(n),[e]))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0443\u043b"}),Object(s.jsx)("button",{className:"addButton",onClick:function(){var e={id:n.length+1,shape:"\u0421\u0442\u0443\u043b",x:0,y:0};c((function(t){return[].concat(a(t),[e])})),r([].concat(a(n),[e]))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b"}),Object(s.jsx)("button",{className:"addButton",onClick:function(){!function(){var e=JSON.stringify(n),t=new Blob([e],{type:"application/json"}),c=URL.createObjectURL(t),r=document.createElement("a");r.href=c,r.download="coordinates.json",r.click(),URL.revokeObjectURL(c)}()},children:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442"})]}),Object(s.jsx)(l,{rectangles:n})]})}}}]);
//# sourceMappingURL=14.11c9f95a.chunk.js.map