(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),o=n.n(r);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(18),i=n(5),s=n(21),h=n(8),A=n(9),u=n(11),p=n(10),d=[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],m=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getAllCheckedValue=function(){return 3===e.props.value.length},e.getChecked=function(t){return e.props.value.some((function(e){return e===t}))},e}return Object(A.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",checked:this.getAllCheckedValue(),onChange:this.props.checkAll}),a.a.createElement("span",null,"\u5df2\u9009\u4e2d",this.props.value.length,"\u4e2a\u6587\u4ef6"),a.a.createElement("div",{className:"warp"},this.props.pictures.map((function(t){return a.a.createElement("div",{className:"check",key:t.id},a.a.createElement("input",{type:"checkbox",checked:e.getChecked(t.id),onChange:function(){e.props.onChange(t.id)}}),a.a.createElement("img",{src:t.url,alt:""}),a.a.createElement("p",{style:{textAlign:"center"}},t.id,".jpg"))}))))}}]),n}(a.a.Component),f=(n(28),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={checkedArr:[]},e.checkAll=function(){3===e.state.checkedArr.length?e.setState({checkedArr:[]}):e.setState({checkedArr:["1","2","3"]})},e.changeCheck=function(t){e.state.checkedArr.find((function(e){return e===t}))?e.setState((function(e){var n=e.checkedArr.filter((function(e){return e!==t}));return console.log(n),{checkedArr:n}})):e.setState((function(e){var n=[].concat(Object(s.a)(e.checkedArr),[t]);return console.log(n),{checkedArr:n}}))},e}return Object(A.a)(n,[{key:"render",value:function(){return a.a.createElement(m,{onChange:this.changeCheck,value:this.state.checkedArr,pictures:d,checkAll:this.checkAll})}}]),n}(a.a.Component));o.a.render(a.a.createElement(l.a,null,a.a.createElement(i.a,{component:f,path:"/"})),document.body),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.cb284c82.chunk.js.map