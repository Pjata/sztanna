(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t.n(n),c=t(0),s=t.n(c),i=t(161),r=t(167),m=t.n(r),o=t(175),u=t(165),E=t(163),d=t.n(E),p=function(e){return s.a.createElement("header",{id:"header",className:"alt"},s.a.createElement("span",{className:"logo"},s.a.createElement("img",{src:d.a,alt:""})),s.a.createElement("h1",null,"Szent Anna Panzio"),s.a.createElement("p",null,"Esztergomi panzio nagyon jo"))},M=t(179),N=t.n(M),w=t(42),L=t.n(w),f=t(193),g=t.n(f),j=t(5),y=t.n(j),h=function(e){return e.children},b=function(e){function a(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(L()(a)),a}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){g.a.polyfill()},t.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,l=n.type,c=n.element,s=n.offset,i=n.timeout;if(l&&c)switch(l){case"class":t=!!(a=document.getElementsByClassName(c)[0]);break;case"id":t=!!(a=document.getElementById(c))}t?this.scrollTo(a,s,i):console.log("Element not found: "+c)},t.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},t.render=function(){return s.a.createElement(h,null,"object"==typeof this.props.children?s.a.cloneElement(this.props.children,{onClick:this.handleClick}):s.a.createElement("span",{onClick:this.handleClick},this.props.children))},a}(s.a.Component);b.propTypes={type:y.a.string,element:y.a.string,offset:y.a.number,timeout:y.a.number,children:y.a.node.isRequired};var z=b,D=function(e){return s.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},s.a.createElement(N.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},s.a.createElement("li",null,s.a.createElement(z,{type:"id",element:"intro"},s.a.createElement("a",{href:"#"},"Bemutatkozas"))),s.a.createElement("li",null,s.a.createElement(z,{type:"id",element:"first"},s.a.createElement("a",{href:"#"},"Szobak"))),s.a.createElement("li",null,s.a.createElement(z,{type:"id",element:"second"},s.a.createElement("a",{href:"#"},"Second Section"))),s.a.createElement("li",null,s.a.createElement(z,{type:"id",element:"cta"},s.a.createElement("a",{href:"#"},"Get Started")))))},k=t(194),C=t.n(k),v=function(e){return s.a.createElement("section",{id:"intro",className:"main"},s.a.createElement("div",{className:"spotlight"},s.a.createElement("div",{className:"content"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Rovid bemutatkozas, reklam szoveg")),s.a.createElement("p",null,"Ide lehet majd irni kicsit hosszabb szoveget ahol bemutatod milyen jo kis panzio ez mellette rakunk jo kepet stb ez kb 4-5 mondat kellene hogy legyen.valahogy igy mint ez. most mar mire ezt olvasod nagyjabol el is erted az idealis meretet.")),s.a.createElement("span",{className:"image"},s.a.createElement("img",{src:C.a,alt:""}))))},I=t(195),T=t.n(I),S=t(196),A=t.n(S),x=t(197),Q=t.n(x),Y=t(198),O=t.n(Y),B=function(e){return s.a.createElement("section",{id:"first",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Szobak nagyon jok")),s.a.createElement("ul",{className:"features"},s.a.createElement("li",null,s.a.createElement("div",{className:"szoba"},s.a.createElement("span",{className:"image icon major"},s.a.createElement("img",{src:T.a,alt:""}))),s.a.createElement("h3",null,"Ide lehetne a szoba tipusok"),s.a.createElement("p",null,"mindegyikrol lehet majd lapozni gyorsan a kepeket")),s.a.createElement("li",null,s.a.createElement("div",{className:"szoba"},s.a.createElement("span",{className:"image icon major"},s.a.createElement("img",{src:A.a,alt:""}))),s.a.createElement("h3",null,"Apartman kulon, stb"),s.a.createElement("p",null,"mindegyikrol lehet majd lapozni gyorsan a kepeket")),s.a.createElement("li",null,s.a.createElement("div",{className:"szoba"},s.a.createElement("span",{className:"image icon major"},s.a.createElement("img",{src:Q.a,alt:""}))),s.a.createElement("h3",null,"Galerias"),s.a.createElement("p",null,"mindegyikrol lehet majd lapozni gyorsan a kepeket")),s.a.createElement("li",null,s.a.createElement("div",{className:"szoba"},s.a.createElement("span",{className:"image icon major"},s.a.createElement("img",{src:O.a,alt:""}))),s.a.createElement("h3",null,"Roki"),s.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."))),s.a.createElement("footer",{className:"major"},s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement(i.a,{to:"/generic",className:"button"},"Learn More")))))},R=function(e){return s.a.createElement("section",{id:"second",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Szolgaltatasok"),s.a.createElement("p",null,"Vendegunk mindenben reszt vehet amit akar, kocsma latogatas, bicikli, kajak, fozocskezes")),s.a.createElement("ul",{className:"statistics"},s.a.createElement("li",{className:"style3"},s.a.createElement("span",{className:"icon fa-wifi"}),s.a.createElement("strong",null,"Wi-Fi")),s.a.createElement("li",{className:"style4"},s.a.createElement("span",{className:"icon fa-bicycle"}),s.a.createElement("strong",null,"Bicikli berles")),s.a.createElement("li",{className:"style5"},s.a.createElement("span",{className:"icon fa-ship"}),s.a.createElement("strong",null,"Hajokazas, kajak berles")," Tempus")),s.a.createElement("p",{className:"content"},"Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia."))},U=function(e){return s.a.createElement("section",{id:"cta",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Szoba foglalas"),s.a.createElement("p",null,"Amennyiben megtetszett a panzio johet a foglalas")),s.a.createElement("footer",{className:"major"},s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement(i.a,{to:"/generic",className:"button special"},"Foglalok")))))},W=function(e){function a(a){var t;return(t=e.call(this,a)||this)._handleWaypointEnter=function(){t.setState(function(){return{stickyNav:!1}})},t._handleWaypointLeave=function(){t.setState(function(){return{stickyNav:!0}})},t.state={stickyNav:!1},t}return l()(a,e),a.prototype.render=function(){return s.a.createElement(u.a,null,s.a.createElement(m.a,{title:"Szent Anna Panzio"}),s.a.createElement(p,null),s.a.createElement(o.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),s.a.createElement(D,{sticky:this.state.stickyNav}),s.a.createElement("div",{id:"main"},s.a.createElement(v,null),s.a.createElement(B,null),s.a.createElement(R,null),s.a.createElement(U,null)))},a}(s.a.Component);a.default=W},161:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(5),s=t.n(c),i=t(40),r=t.n(i);t.d(a,"a",function(){return r.a});t(162),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},162:function(e,a,t){var n;e.exports=(n=t(164))&&n.default||n},163:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},164:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),l=t.n(n),c=t(5),s=t.n(c),i=t(64),r=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};r.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=r},165:function(e,a,t){"use strict";var n=t(8),l=t.n(n),c=t(0),s=t.n(c),i=(t(166),t(161),t(163),function(e){return s.a.createElement("footer",{id:"footer"},s.a.createElement("section",null,s.a.createElement("h2",null,"Etiam feugiat"),s.a.createElement("dl",{className:"alt"},s.a.createElement("dt",null,"Address"),s.a.createElement("dd",null,"Esztergom, Erzsebet kiralyne ut 2"),s.a.createElement("dt",null,"Phone"),s.a.createElement("dd",null,"(06) 000-0000 x 0000"),s.a.createElement("dt",null,"Email"),s.a.createElement("dd",null,s.a.createElement("a",{href:"#"},"information@untitled.tld"))),s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-github alt"},s.a.createElement("span",{className:"label"},"GitHub"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-dribbble alt"},s.a.createElement("span",{className:"label"},"Dribbble"))))))}),r=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"body "+this.state.loading},s.a.createElement("div",{id:"wrapper"},e,s.a.createElement(i,null)))},a}(s.a.Component);a.a=r},194:function(e,a,t){e.exports=t.p+"static/door-6b5c5c0d4f5d4cf4c18b0bc0847dc85b.png"},195:function(e,a,t){e.exports=t.p+"static/szoba1-c48962c183ebd72f1107367d38ba82bc.png"},196:function(e,a,t){e.exports=t.p+"static/sarok-67bd35877446c3c2413640908ef74929.png"},197:function(e,a,t){e.exports=t.p+"static/szoba2-c741fa36bbfd3a59b835d178da4bb874.png"},198:function(e,a,t){e.exports=t.p+"static/szoba3-f6ac236526f786c747023ea93e0fcdde.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-786be1d79064564ec347.js.map