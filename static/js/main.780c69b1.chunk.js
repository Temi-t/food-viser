(this["webpackJsonpfood-viser"]=this["webpackJsonpfood-viser"]||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__BdaUe",foodHead:"recipe_foodHead__3dBNw",chol:"recipe_chol__2n0qu"}},,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=(a(12),a(3)),l=a.n(i),s=a(6),u=a(2),m=a(1),p=a.n(m);var d=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,o=e.cholesterol;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",{className:p.a.foodHead},t),c.a.createElement("strong",null,"Ingredients"),c.a.createElement("ul",null,r.map((function(e,t){return c.a.createElement("li",{key:"ingredient_"+t},e.text)}))),c.a.createElement("img",{src:n,alt:n.title}),c.a.createElement("p",{className:p.a.chol},"Calory estimate: ",a.toFixed(2)),c.a.createElement("p",{className:p.a.chol},o.toFixed(2),"% of your daily cholesterol(300mg/day)"))};a(14);var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],f=Object(n.useState)("pudding"),h=Object(u.a)(f,2),E=h[0],g=h[1],v=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("e63e0510","&app_key=").concat("2c1330f7fd979365d424fe2ae1d7612f"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[E]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Welcome to Food-Viser"),c.a.createElement("p",{className:"intro"},"Your number-one-food-adviser is here to guide your daily-diet."),c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),g(m),p("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)},placeholder:"pancakes?"}),c.a.createElement("button",{type:"submit",className:"search-button"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(d,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,cholesterol:e.recipe.totalDaily.CHOLE.quantity})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.780c69b1.chunk.js.map