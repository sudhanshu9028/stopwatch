(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(4),i=n.n(r),u=(n(9),function(t){var e=("0"+t%100).slice(-2),n=("0"+Math.floor(t/100%60)).slice(-2),c=("0"+Math.floor(t/6e3)%60).slice(-2);return("0"+Math.floor(t/36e4)).slice(-2)+":"+c+":"+n+":"+e}),a=n(2),o=(n(10),n(0)),l=function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Object(c.useState)(t),n=Object(a.a)(e,2),s=n[0],r=n[1],i=Object(c.useState)(!1),u=Object(a.a)(i,2),o=u[0],l=u[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),d=b[0],h=b[1],f=Object(c.useRef)(null);return{timer:s,isPaused:d,isActive:o,start:function(){l(!0),h(!0),f.current=setInterval((function(){r((function(t){return t+1}))}),10)},pause:function(){clearInterval(f.current),h(!1)},resume:function(){h(!0),f.current=setInterval((function(){r((function(t){return t+1}))}),10)},reset:function(){clearInterval(f.current),h(!1),l(!1),r(0)}}}(0),e=t.timer,n=t.isPaused,s=t.isActive,r=t.start,i=t.pause,l=t.resume,j=t.reset;return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"",children:"STOPWATCH"}),Object(o.jsxs)("div",{className:"timer-card",children:[Object(o.jsx)("p",{children:u(e)}),Object(o.jsxs)("div",{className:"buttons",children:[s||n?n?Object(o.jsx)("button",{onClick:i,children:"Pause"}):Object(o.jsx)("button",{onClick:l,children:"Resume"}):Object(o.jsx)("button",{onClick:r,children:"Start"}),Object(o.jsx)("button",{onClick:j,children:"Reset"})]})]})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),r(t),i(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d0a27dfc.chunk.js.map