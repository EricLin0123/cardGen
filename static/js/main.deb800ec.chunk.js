(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a(78)},73:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(54),r=a.n(c),l=(a(73),a(119)),i=a(132),m=a(127),s=a(126),d=a(57),u=a(128),E=a(131),g=a(130),h=a(129);const p=Object(d.a)();p.typography.h3={fontSize:50},p.typography.h2={fontSize:30},p.typography.link={fontSize:10};var f=e=>{let{cards:t,Data:a}=e;var c=a;console.log(c);const[r,d]=Object(n.useState)(""),[f,v]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{v(!1)},[t]),o.a.createElement("div",{className:"card-list"},o.a.createElement(l.a,{direction:"column",spacing:2,divider:o.a.createElement(g.a,{orientation:"horizontal"})},o.a.createElement(u.a,{theme:p},o.a.createElement(l.a,{direction:"column",spacing:2,divider:o.a.createElement(g.a,{orientation:"horizontal"})},o.a.createElement(E.a,{variant:"h2"},t.category," +",t.point," Points"),o.a.createElement(E.a,{variant:"h2"},t.definition))),o.a.createElement(l.a,{direction:"row"},o.a.createElement(l.a,{direction:"column",spacing:2},o.a.createElement(i.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",required:!0,onSubmit:e=>{e.preventDefault(),r.toLocaleLowerCase()===t.answer.toLocaleLowerCase()?(alert("Correct!"),v(!0),delete c[t.id],console.log(c)):alert("Wrong!")}},o.a.createElement(s.a,{id:"outlined-basic",label:"Answer",variant:"outlined",onChange:e=>d(e.target.value)})),f?o.a.createElement(u.a,{theme:p},o.a.createElement(E.a,{variant:"h3"},t.answer)):null,o.a.createElement(m.a,{variant:"contained",onClick:()=>(console.log("see answer"),d(t.answer),v(!0),Object.keys(c).forEach(function(e){c[e].answer===t.answer&&(delete c[e],console.log("deleted"))}),void console.log(c))},"See answer")),f?o.a.createElement(l.a,{direction:"column",spacing:2},o.a.createElement("img",{src:t.img,width:"500",alt:"OKOK"}),o.a.createElement(h.a,{href:t.img,target:"_blank",rel:"noopener noreferrer",underline:"hover"},t.img)):null)))},v=a(125);var w=e=>{let{category:t}=e;const[a,c]=Object(n.useState)(null),[r,l]=Object(n.useState)(!0),[i,s]=Object(n.useState)([]),[d,u]=Object(n.useState)([]);return Object(n.useEffect)(()=>{fetch("http://localhost:8000/cards").then(e=>e.json()).then(e=>{s(e),c(e[0]),l(!1)})},[]),Object(n.useEffect)(()=>{console.log("category",t),0!==i.length&&u(i.filter(e=>e.category.toLocaleLowerCase()===t.toLocaleLowerCase()))},[t,i]),o.a.createElement("div",{className:"Home"},o.a.createElement(v.a,{direction:"row",spacing:2},o.a.createElement(m.a,{variant:"contained",onClick:()=>c(d[function(e){return Math.floor(Math.random()*e)}(d.length)])},"Shuffle"),o.a.createElement("h1",null,t)),r&&o.a.createElement("div",null,"Loading..."),a&&o.a.createElement(f,{cards:a,Data:i}))},b=a(45);const C=Object(d.a)({palette:{color1:{main:"#FFFFFF"},color2:{main:"#537DE6"},color3:{main:"#E8C015"},color4:{main:"#F41D97"},color5:{main:"#a200ff"}}});var y=function(){const[e,t]=Object(n.useState)(""),a=a=>{t(a.target.textContent),console.log(e)};return n.createElement("div",{className:"App",style:{backgroundColor:"#8DC82D",height:"100vh"}},n.createElement(l.a,{className:"Menu",direction:"row",gap:4},n.createElement("div",{className:"content"},n.createElement(l.a,{direction:"column",gap:3},n.createElement("h1",null,"EcoTerms"),n.createElement("p",null,"Welcome to the new game!"),n.createElement("p",null,"Code by \u6797\u842c\u8343"),n.createElement(u.a,{theme:C},n.createElement(m.a,{variant:"contained",color:"color1",onClick:a},Object(b.a)("Individual")),n.createElement(m.a,{variant:"contained",color:"color2",onClick:a},"Population"),n.createElement(m.a,{variant:"contained",color:"color3",onClick:a},"Community"),n.createElement(m.a,{variant:"contained",color:"color4",onClick:a},"Ecosystem"),n.createElement(m.a,{variant:"contained",color:"color5",onClick:a},"Biosphere")))),n.createElement(w,{category:e})))};var O=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then(t=>{let{getCLS:a,getFID:n,getFCP:o,getLCP:c,getTTFB:r}=t;a(e),n(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null))),O()}},[[65,1,2]]]);
//# sourceMappingURL=main.deb800ec.chunk.js.map