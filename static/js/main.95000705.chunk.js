(this.webpackJsonpmini=this.webpackJsonpmini||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),l=n(6),c=n(7),s=n(5),u=n(1),m=n(2),f=n(4),p=n(3),d=n(8),b=n.n(d),h=(n(18),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={time:b()().format("MMMM Do , h:mm:ss ")},e.componentDidMount=function(){setInterval((function(){e.setState((function(e){e.time;return{time:b()().format("MMMM Do , h:mm:ss ")}}))}),1e3)},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("h2",{className:"clock"},this.state.time)}}]),n}(a.Component)),g=(n(19),function(e){var t=e.like,n=e.dislike,a=e.all,o=e.important;return r.a.createElement("div",{className:"app-header d-flex"},r.a.createElement("h1",null,"To Do"),r.a.createElement(h,null),r.a.createElement("h2",null,"Total: ",a," records. ",t," Liked, ",n," disliked, ",o," important"))}),k=(n(20),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).btns=[{name:"all",label:"All"},{name:"like",label:"Like"},{name:"dislike",label:"Dislike"},{name:"important",label:"Important"}],e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.btns.map((function(t){var n=t.name,a=t.label,o=e.props.filter===n?" btn-info btn ":"btn btn-outline-secondary";return r.a.createElement("button",{onClick:function(){return e.props.onFiltered(n)},key:n,type:"button",className:o},a)}));return r.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component)),v=(n(21),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChangeInput=function(t){e.props.onSearch(t.target.value)},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{onChange:this.onChangeInput,className:"form-control search-input",type:"text",placeholder:"Type to search record"})}}]),n}(a.Component)),y=n(11),j=(n(22),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.important,a=e.like,o=e.dislike,i=e.onDeleted,l=e.onToggleLike,c=e.onToggleDisLike,s=e.onToggleImportant,u="d-flex app-list-item justify-content-between";return a&&(u+=" like"),o&&(u+=" dislike"),n&&(u+=" important"),r.a.createElement("div",{className:u},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{onClick:l,type:"button",className:"btn-status btn-sm"},r.a.createElement("i",{className:"fa fa-thumbs-up"})),r.a.createElement("button",{onClick:c,type:"button",className:"btn-status btn-sm"},r.a.createElement("i",{className:"fa fa-thumbs-down"})),r.a.createElement("i",{className:"fa fa-heart"}),r.a.createElement("i",{className:"fa fa-frown-o"})),r.a.createElement("span",{className:"app-list-item-label"},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{onClick:s,type:"button",className:"btn-star btn-sm"},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{onClick:i,type:"button",className:"btn-trash btn-sm"},r.a.createElement("i",{className:"fa fa-trash-o"}))))}}]),n}(a.Component)),E=(n(23),function(e){var t=e.posts,n=e.onDeleted,a=e.onToggleLike,o=e.onToggleDisLike,i=e.onToggleImportant,l=t.map((function(e){if("object"===typeof e&&function(e){for(var t in e)return!0;return!1}(e)){var t=e.id,l=Object(y.a)(e,["id"]);return r.a.createElement("li",{className:"list-group-item",key:t},r.a.createElement(j,Object.assign({},l,{onDeleted:function(){return n(t)},onToggleLike:function(){return a(t)},onToggleDisLike:function(){return o(t)},onToggleImportant:function(){return i(t)}})))}}));return r.a.createElement("ul",{className:"app-list list-group"},l)}),O=(n(24),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onAddItem=function(t){e.setState({text:t.target.value})},e.onFormSubmit=function(t){t.preventDefault();var n=e.state.text;if(!n)return alert("Message should not be empty!");e.props.onAdded(n),e.setState({text:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"bottom-panel d-flex"},r.a.createElement("input",{onChange:this.onAddItem,className:"form-control new-post-label",type:"text",placeholder:"What are you thinking about?",value:this.state.text}),r.a.createElement("button",{type:"submit",className:"btn-outline-secondary btn"},"Add"))}}]),n}(a.Component)),D=(n(25),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={postData:[e.createItem("I wish I knew react well"),e.createItem("Could we have some coffee?"),e.createItem("Lets play that amazing game altogether!")],term:"",filter:"all"},e.getIndex=function(e,t){return e.findIndex((function(e){return e.id===t}))},e.onDeleted=function(t){window.confirm("Are you sure you wish to delete this item?")&&e.setState((function(n){var a=n.postData,r=e.getIndex(a,t);return{postData:[].concat(Object(s.a)(a.slice(0,r)),Object(s.a)(a.slice(r+1)))}}))},e.onAdded=function(t){var n=e.createItem(t);e.setState((function(e){var t=e.postData;return{postData:[].concat(Object(s.a)(t),[n])}}))},e.onSearch=function(t){e.setState({term:t})},e.onFiltered=function(t){e.setState({filter:t})},e.searched=function(e,t){return t?e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})):e},e.filtered=function(e,t){switch(t){case"like":return e.filter((function(e){return e.like}));case"dislike":return e.filter((function(e){return e.dislike}));case"important":return e.filter((function(e){return e.important}));default:return e}},e.onToggleProps=function(t,n,a,r){var o,i=e.getIndex(t,n),u=t[i],m=Object(c.a)(Object(c.a)({},u),{},(o={},Object(l.a)(o,a,!u[a]),Object(l.a)(o,r,u[r=!1]),o));return[].concat(Object(s.a)(t.slice(0,i)),[m],Object(s.a)(t.slice(i+1)))},e.onToggleLike=function(t){e.setState((function(n){var a=n.postData;return{postData:e.onToggleProps(a,t,"like","dislike")}}))},e.onToggleDisLike=function(t){e.setState((function(n){var a=n.postData;return{postData:e.onToggleProps(a,t,"dislike","like")}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.postData;return{postData:e.onToggleProps(a,t,"important")}}))},e}return Object(m.a)(n,[{key:"createItem",value:function(e){return{label:e,important:!1,like:!1,dislike:!1,id:(Math.random()*Math.random()*23123).toFixed()}}},{key:"render",value:function(){var e=this.state,t=e.postData,n=e.term,a=e.filter,o=t.filter((function(e){return e.like})).length,i=t.filter((function(e){return e.dislike})).length,l=t.filter((function(e){return e.important})).length,c=t.length,s=this.searched(t,n),u=this.filtered(s,a);return r.a.createElement("div",{className:"app"},r.a.createElement(g,{all:c,like:o,dislike:i,important:l}),r.a.createElement("div",{className:"d-flex"},r.a.createElement(v,{onSearch:this.onSearch}),r.a.createElement(k,{filter:a,onFiltered:this.onFiltered})),r.a.createElement(E,{posts:u,onDeleted:this.onDeleted,onToggleLike:this.onToggleLike,onToggleDisLike:this.onToggleDisLike,onToggleImportant:this.onToggleImportant}),r.a.createElement(O,{onAdded:this.onAdded}))}}]),n}(a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.95000705.chunk.js.map