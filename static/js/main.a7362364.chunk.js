(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=n(1),u=n(4),i=n(5),s=n(7),d=n(6),b=n(8),h=function(e){var t=e.good;return a.a.createElement("li",null,t)},g=function(e){var t=e.goods;return a.a.createElement("ul",null,t.map(function(e){return a.a.createElement(h,{good:e})}))},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(e){var t=e.goods,n=e.lengthKey;return e.currentKey===n?Object(l.a)(t).reverse():Object(l.a)(t).sort(function(e,t){return e.length-t.length})},f=function(e){var t=e.goods,n=e.alphabetKey;return e.currentKey===n?Object(l.a)(t).reverse():Object(l.a)(t).sort(function(e,t){return e.localeCompare(t)})},m=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={initialGoods:Object(l.a)(p),goods:Object(l.a)(p),isLoaded:!1,lengthKey:"length",alphabetKey:"alphabet",currentKey:""},n.handleClick=function(){n.setState({isLoaded:!0})},n.reverseGoods=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).reverse()}})},n.sortAlphabetically=function(e){n.setState(function(t){return{goods:f(t),currentKey:e}})},n.sortByLength=function(e){n.setState(function(t){return{goods:y(t),currentKey:e}})},n.returnInitial=function(){n.setState(function(e){return{goods:Object(l.a)(e.initialGoods),currentKey:""}})},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.goods,r=t.isLoaded;return a.a.createElement("div",{className:"App"},r?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Goods 1"),a.a.createElement("button",{type:"button",onClick:this.reverseGoods},"Reverse"),a.a.createElement("button",{type:"button",onClick:function(){return e.sortAlphabetically("alphabet")}},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:function(){return e.sortByLength("length")}},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.returnInitial},"Reset"),a.a.createElement(g,{goods:n})):a.a.createElement("button",{type:"button",onClick:this.handleClick,className:"load-btn"},"Load"))}}]),t}(a.a.Component);c.a.render(a.a.createElement(m,{test:123}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a7362364.chunk.js.map