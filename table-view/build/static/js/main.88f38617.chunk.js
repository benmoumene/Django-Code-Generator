(this["webpackJsonpmonday-integration-quickstart-app"]=this["webpackJsonpmonday-integration-quickstart-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},32:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(17),r=a.n(l),c=(a(30),a(31),a(18)),i=a(19),s=a(24),m=a(23),d=(a(32),a(20)),u=a.n(d),p=a(10),f=a(6),g=a(5),h=a(22),E=a(21),v=u()(),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getContext=function(e){var t=e.data;console.log("context!",t),n.setState({context:t});var a=t.boardIds||[t.boardId];n.getData(a)},n.state={settings:{},tableRender:[],loader:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){v.listen("context",this.getContext)}},{key:"getData",value:function(e){var t=this;v.api("query { boards(ids:[".concat(e,"]) { id, items { id, column_values { id, value } } }}")).then((function(e){console.log(e);var a=[],n=[];e.data.boards[0].items.forEach((function(e,t){console.log(e.id),n.push(e.id);var o=[];e.column_values.forEach((function(e,t){if("subitems"==e.id&&null!=e.value){var a=JSON.parse(e.value);console.log(a),a.linkedPulseIds.forEach((function(e,t){o.push(String(e.linkedPulseId)),n.push(String(e.linkedPulseId))}))}})),a.push({tableItemId:e.id,tableColumnItemIds:o})})),t.getTableData(a,n)}))}},{key:"getTableData",value:function(e,t){var a=this;console.log(e,t);var n=[];v.api("query { items (ids:[".concat(t,"]) { id, name, column_values { id, text } }}")).then((function(t){console.log(t);var o={};t.data.items.forEach((function(e,t){o[e.id]=t}));var l={};e.forEach((function(e,a){console.log(t.data.items[o[e.tableItemId]].name),l[t.data.items[o[e.tableItemId]].name]=a,n.push({name:t.data.items[o[e.tableItemId]].name})})),console.log(o,l),e.forEach((function(e,a){var r=[];e.tableColumnItemIds.forEach((function(e,a){var n=void 0,c=void 0;t.data.items[o[e]].column_values.forEach((function(e,t){"dropdown"==e.id&&(n=e.text),"dropdown"!=e.id&&"creation_log"!=e.id&&"last_updated"!=e.id&&(c=e.text)})),"Foreign"==n?r.push({name:t.data.items[o[e]].name,type:n,forgienKeyTable:l[c]}):r.push({name:t.data.items[o[e]].name,type:n})})),n[a].columns=r})),console.log(n),a.setState({tableRender:n}),a.setState({loader:!1})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{fluid:!0},this.state.loader?o.a.createElement(f.a,null,o.a.createElement(g.a,{sm:12,className:"text-center"},o.a.createElement(E.a,{animation:"grow"}))):o.a.createElement(f.a,null,this.state.tableRender.map((function(t,a){return o.a.createElement(g.a,{sm:4,key:a},o.a.createElement(f.a,null,o.a.createElement(g.a,{sm:12},o.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"text-center"},o.a.createElement("th",{style:{color:"#dc3545"}},t.name))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(g.a,{sm:4,style:{color:"#007bff",paddingTop:10,paddingBottom:10}},o.a.createElement("b",null,t.name+"_ID"),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"green"}},"Integer")),t.columns.map((function(t,a){return o.a.createElement(g.a,{sm:4,key:a,style:{paddingTop:10,paddingBottom:10}},o.a.createElement("b",{style:{color:"#ffc107"}},t.name),o.a.createElement("br",null),"Foreign"==t.type?o.a.createElement("b",{style:{color:"#dc3545"}},e.state.tableRender[t.forgienKeyTable].name+"_ID"):o.a.createElement("span",{style:{color:"green"}},t.type))})))))))))))})))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.88f38617.chunk.js.map