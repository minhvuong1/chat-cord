(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{113:function(e,t){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(59),o=a.n(s),l=a(9),m=a(1),i=a(6),u=(a(71),function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),m=o[0],u=o[1];return c.a.createElement("div",{className:"joinOuterContainer"},c.a.createElement("div",{className:"joinInnerContainer"},c.a.createElement("h1",{className:"heading"},"ChatCord ",c.a.createElement("i",{className:"far fa-smile",style:{fontSize:"52px"}})),c.a.createElement("h1",{className:"subHeading"},"Invite your friends to a Room!"),c.a.createElement("div",{className:"innerContainerInputs"},c.a.createElement("input",{type:"text",placeholder:"Enter your name...",onChange:function(e){return n(e.target.value)},className:"joinInput"}),c.a.createElement("input",{type:"text",placeholder:"Enter a room...",onChange:function(e){return u(e.target.value)},className:"joinInput mt-20"})),c.a.createElement(l.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},c.a.createElement("button",{className:"button mt-20",type:"submit"},"Join Room"))))}),p=a(65),E=a(61),f=a.n(E),g=a(62),h=a.n(g),d=(a(116),a(117),a(63)),A=a.n(d),N=function(e){var t=e.room;return c.a.createElement("div",{className:"infoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("h3",null,c.a.createElement("span",{style:{opacity:"0.8"}},"Room:")," ",t.charAt(0).toUpperCase()+t.slice(1))),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:A.a,alt:"close"}))))},v=(a(118),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Send a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),C=a(64),b=a.n(C),y=(a(161),a(33)),j=a.n(y),S=function(e){var t=e.message,a=e.name,n=!1,r=t.user,s=a.trim().toLowerCase();return t.user===s&&(n=!0),n?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},c.a.createElement("span",{style:{paddingRight:"7px",fontSize:"10px",opacity:"0.5"}},(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})),r.charAt(0).toUpperCase()+r.slice(1)),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},j.a.emojify(t.text)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},j.a.emojify(t.text))),c.a.createElement("p",{className:"sentText pl-10"},c.a.createElement("span",null,r.charAt(0).toUpperCase()+r.slice(1)),c.a.createElement("span",{style:{paddingLeft:"7px",fontSize:"10px",opacity:"0.6"}},(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}))))},x=(a(162),function(e){var t=e.messages,a=e.name;return c.a.createElement(b.a,{className:"messages"},t.map((function(e,t){return c.a.createElement(S,{key:t,message:e,name:a})})))}),O=(a(163),function(e){e.users;var t=e.room;return c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",null,c.a.createElement("h1",null,"ChatCord ",c.a.createElement("i",{className:"far fa-smile",style:{fontSize:"36px"}})),c.a.createElement("p",null,"Invite your friends to join room",c.a.createElement("b",null,t.charAt(0).toUpperCase()+t.slice(1)),"!"),c.a.createElement("h2",null,"OR"),c.a.createElement("p",null,"Join Another Room",c.a.createElement(l.b,{to:"/"}," ",c.a.createElement("u",null,"Here")))),c.a.createElement("h3",null,"Creator: github.com/minhvuong1"))}),I=function(e){var t=e.location,a=Object(r.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],m=Object(r.useState)(""),u=Object(i.a)(m,2),E=u[0],g=u[1],d=Object(r.useState)([]),A=Object(i.a)(d,2),C=A[0],b=A[1],y=Object(r.useState)([]),j=Object(i.a)(y,2),S=j[0],I=j[1];Object(r.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,r=e.room;return n=h()("localhost:5000"),l(a),g(r),n.emit("join",{name:a,room:r},(function(){})),function(){n.emit("disconnect"),n.off()}}),["localhost:5000",t.search]),Object(r.useEffect)((function(){n.on("message",(function(e){I([].concat(Object(p.a)(S),[e]))}))}),[S]);return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"container"},c.a.createElement(N,{room:E}),c.a.createElement(x,{messages:S,name:o}),c.a.createElement(v,{message:C,setMessage:b,sendMessage:function(e){e.preventDefault(),C&&n.emit("sendMessage",C,(function(){return b("")}))}})),c.a.createElement(O,{users:S,room:E,name:o}))},U=(a(164),function(){return c.a.createElement(l.a,null,c.a.createElement(m.a,{exact:!0,path:"/",component:u}),c.a.createElement(m.a,{path:"/chat",component:I}))});o.a.render(c.a.createElement(U,null),document.querySelector("#root"))},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},66:function(e,t,a){e.exports=a(165)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.b8d9d119.chunk.js.map