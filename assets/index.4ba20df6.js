import{j as l,r as d,b as f,R as h,a as m}from"./vendor.afef8027.js";const p=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};p();var v="/assets/servicios.874b48ba.png",_="/assets/contactos.f8073961.png",g="/assets/gestion-de-proyectos.dab25836.png",N="/assets/buscar.dcf9ba5a.png",b="/assets/Francisco Javier Baez Gutierrez (4).81067599.pdf";const e=l.exports.jsx,r=l.exports.jsxs,u=l.exports.Fragment,y=()=>r("a",{target:"_blank",href:b,className:"header__btn",children:["Descargar CV",r("div",{className:"flecha",children:[e("span",{className:"f-1"}),e("span",{className:"f-2"})]})]}),x=({tipo:n})=>r(u,{children:[r("nav",{className:`${n}__navegacion `,children:[r("a",{className:"navegacion__link",href:"",children:[e("p",{children:"Services"}),e("img",{className:"navegacion__link__icon",src:v,alt:""})]}),r("a",{className:"navegacion__link",href:"",children:[e("p",{children:"Projects"}),e("img",{className:"navegacion__link__icon",src:g,alt:""})]}),r("a",{className:"navegacion__link",href:"",children:[e("p",{children:"About Me"}),e("img",{className:"navegacion__link__icon",src:N,alt:""})]}),r("a",{className:"navegacion__link",href:"",children:[e("p",{children:"Contact"}),e("img",{className:"navegacion__link__icon",src:_,alt:""})]})]}),e(y,{})]}),k=()=>{const[n,c]=d.exports.useState(!1),o=()=>{c(t=>!t)};return e("header",{className:`header ${n?"abierto":"cerrado"} `,children:r("div",{className:` header__contenido container ${n?"abierto":"cerrado"} `,children:[r("div",{className:"header__logo",children:[r("a",{children:["Javier ",e("span",{children:"Baez Gutierrez"})]}),r("a",{onClick:o,className:"btn__ham ",children:[e("span",{className:"ham-1"}),e("span",{className:"ham-2"})]})]}),e(x,{tipo:"header"})]})})};var j="/assets/audrey-amaro-qgViEVE8cfA-unsplash.4db260fb.jpg";const C=()=>(d.exports.useEffect(()=>{let n=f(".baffle");n.set({characters:"\u2592\u2588/ /\u2591<\u2591\u2588 \u2591/>\u2588\u2592 \u2588/\u2592 \u2593<\u2593\u2591\u2593 \u2592\u2588>< /\u2592\u2592 >\u2593>> >\u2591>\u2588",speed:220,loopCount:!1,loop:!0}),n.start(),n.reveal(4e3)},[]),r("div",{className:"hero",children:[e("img",{src:j,alt:""}),e("div",{className:"hero__contenido",children:r("div",{className:"hero__grid",children:[e("p",{className:"titulo baffle",children:"Front-End Developer"}),e("p",{className:"ubicacion baffle",children:"Tlaxcala, Mx"})]})})]})),E=()=>r(u,{children:[e(k,{}),e(C,{})]});h.render(e(m.StrictMode,{children:e(E,{})}),document.getElementById("root"));
