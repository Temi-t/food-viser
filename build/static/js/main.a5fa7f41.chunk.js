(this["webpackJsonpfood-viser"]=this["webpackJsonpfood-viser"]||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__BdaUe",foodHead:"recipe_foodHead__3dBNw",cal:"recipe_cal__1WefH"}},,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(12),a(3)),l=a.n(i),s=a(6),u=a(2),m=a(1),p=a.n(m);var d=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients;return r.a.createElement("div",{className:p.a.recipe},r.a.createElement("h1",{className:p.a.foodHead},t),r.a.createElement("p",{className:p.a.cal},"Calory estimate: ",a.toFixed(2)),r.a.createElement("strong",null,"Ingredients"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("img",{src:n,alt:n.title}))};a(14);var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],f=Object(n.useState)("pudding"),h=Object(u.a)(f,2),E=h[0],v=h[1],g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("e63e0510","&app_key=").concat("2c1330f7fd979365d424fe2ae1d7612f"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[E]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Welcome to Food-Viser"),r.a.createElement("p",{className:"intro"},"Your number-one-food-adviser is here to guide your daily-diet."),r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),v(m),p("")}},r.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Search")),r.a.createElement("div",{className:"recipes"},a.map((function(e){return r.a.createElement(d,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a5fa7f41.chunk.js.map