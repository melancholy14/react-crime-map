(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){e.exports=n(331)},192:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(61),o=n.n(c),i=n(49),s=n(44),l=n(184),u=n(173),m=(n(192),n(45)),d=n(46),p=n(51),h=n(47),g=n(53),b=n(34),f=n(35),v=n(33),y=n(12),O=n(83),E="containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS",j="containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE",x="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST",w="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS",k="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE",C="containers/SearchPage/actions/SEARCH_REQUEST",S="containers/SearchPage/actions/SEARCH_SUCCESS",A="containers/SearchPage/actions/SEARCH_FAILURE";function _(e){return{type:S,data:e}}function I(e){return{type:A,message:e}}function T(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n\n  .modal-title {\n    height: 3rem;\n    background-color: black;\n    color: white;\n    vertical-align: middle;\n    line-height: 3rem;\n    text-align: center;\n  }\n\n  .modal-main {\n    position: fixed;\n    background: white;\n    width: 100%;\n    height: calc(100% - 6rem);\n    overflow: auto;\n    top: 3rem;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .modal-footer {\n    position: fixed;\n    top: calc(100% - 3rem);\n    height: 3rem;\n    background-color: white;\n    width: 100%;\n    line-height: 3rem;\n    vertical-align: middle;\n    text-align: center;\n    border-top: 1px solid black;\n    box-sizing: border-box;\n\n    .close {\n      background-color: black;\n      color: white;\n      font-weight: bolder;\n      padding: 0.5rem 1rem;\n    }\n  }\n"]);return T=function(){return e},e}var R=f.a.div(T()),L=function(e){var t=e.title,n=e.show,a=e.onClose,c=e.children;return r.a.createElement(R,{className:"display-".concat(n?"block":"none")},r.a.createElement("div",{className:"modal-title"},t),r.a.createElement("div",{className:"modal-main"},c),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"close",onClick:a},"Close")))};function N(){var e=Object(b.a)(["\n  margin: 0.5rem auto;\n  display: table;\n\n  box-shadow: 1.5px 2px 1px 1px;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n\n  .tr {\n    display: table-row;\n  }\n\n  .th {\n    display: table-cell;\n    font-weight: 600;\n  }\n\n  .td {\n    display: table-cell;\n  }\n"]);return N=function(){return e},e}f.a.div(N());function D(){var e=Object(b.a)(["\n    order: 1;\n    margin: 0.5rem;\n    padding: 0.5rem;\n\n    .grid-container {\n      display: grid;\n      grid-template-rows: 2rem 2rem 2rem;\n      grid-template-columns: 4.5rem auto;\n\n      .grid-item {\n        padding: 0.5rem;\n        \n        &.submit {\n          grid-column-start: 1;\n          grid-column-end: 3;\n        }\n      }\n    }\n\n    label {\n      font-size: smaller;\n      text-transform: capitalize;\n    }\n\n    button {\n      background-color: black;\n      color: white;\n      padding: 0.3rem 1rem;\n      font-weight: bolder;\n    }\n"]);return D=function(){return e},e}var P=f.a.div(D()),U=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changeDate=function(t){return function(n){var a=n.target.value;if(a){var r=Object(O.a)(e.state.minmax);r["min"===t?0:1]=a,r.sort(function(e,t){return e>t});var c=Object(y.a)({},e.state.date,Object(v.a)({},t,a));e.setState({minmax:r,date:c})}}},e.changeCategory=function(t){e.crimeCategory=t.target.value},e.search=function(t){t.preventDefault();var n=e.state,a=n.minmax,r=n.date.dates.filter(function(e){return a[0]<=e&&e<=a[1]}).sort(function(e,t){return e>t});e.props.onSearch({url:e.crimeCategory||"all-crimes",dates:r})},e.toggleModal=function(){return e.setState({showError:!e.state.showError})},e.state={date:{},minmax:[],message:null},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.availability,n=e.message,a=this.props,r=a.availability,c=a.message;if(t!==r){var o=r.reduce(function(e,t){return{min:e.min&&e.min<t.date?e.min:t.date,max:e.max&&e.max>t.date?e.max:t.date,dates:e.dates?Object(O.a)(e.dates).concat([t.date]):[t.date]}},{});this.setState({minmax:[o.min,o.max],date:o})}else n!==c&&this.setState({message:c})}},{key:"render",value:function(){var e=this.state,t=e.date,n=(t=void 0===t?{}:t).min,a=t.max,c=t.dates,o=void 0===c?[]:c,i=e.message,s=e.showError,l=this.props.crimeCategory,u=void 0===l?[{url:"all-crimes",name:"all crimes"}]:l;return r.a.createElement(P,null,r.a.createElement("form",{className:"grid-container"},r.a.createElement("label",{htmlFor:"select_date",className:"grid-item"},"date"),r.a.createElement("div",{className:"grid-item"},r.a.createElement("select",{id:"select_date",onChange:this.changeDate("min"),value:n},o.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("span",null," ~ "),r.a.createElement("select",{onChange:this.changeDate("max"),value:a},o.map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("label",{htmlFor:"select_category",className:"grid-item"},"category"),r.a.createElement("select",{id:"select_category",onChange:this.changeCategory,className:"grid-item"},u&&u.map(function(e){var t=e.url,n=e.name;return r.a.createElement("option",{key:t,value:t},n)})),r.a.createElement("button",{onClick:this.search,className:"grid-item submit"},"SEARCH")),r.a.createElement(L,{show:s,onClose:this.toggleModal},i))}}]),t}(r.a.PureComponent),G=Object(i.b)(function(e){return Object(y.a)({},e.search)},function(e){return{onLoadCrimeCategory:function(){return e({type:x,date:t});var t},onSearch:function(t){return e({type:C,params:t})}}})(U),M=n(340),z=n(343),F=n(336),K=n(342),Y=n(341),B="containers/MapPage/actions/SAVE_LOCATION";var H="containers/AnalysePage/SAVE_STREET_ID",V="containers/AnalysePage/EXTRACT_DATA_SUCCESS",W="containers/AnalysePage/EXTRACT_DATA_FAILURE";var X={"all-crime":"#d17f68","anti-social-behaviour":"#73b638","bicycle-theft":"#a45dcf",burglary:"#5fbc6e","criminal-damage-arson":"#c0489a",drugs:"#4b7d3c","other-theft":"#666dc6","possession-of-weapons":"#d99938","public-order":"#5e99d2",robbery:"#cc4f32",shoplifting:"#49b9a9","theft-from-the-person":"#c7496a","vehicle-crime":"#adac4d","violent-crime":"#c581bb","other-crime":"#8b6c2f"},q=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){var t=e.latlng;n.props.onSaveLocation(t)},n.clickCircle=function(e){return function(){n.props.onSaveStreetId(e)}},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.latlng,a=t.locations;return r.a.createElement(M.a,{center:n,ref:function(t){e.map=t},zoom:13,onClick:this.handleClick},r.a.createElement(z.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n&&r.a.createElement(F.a,{position:[n.lat,n.lng]},r.a.createElement(K.a,null,"You clicked here!!\n            Latitude: ".concat(n.lat,"\n            Longitude: ").concat(n.lng))),a&&a.map(function(t){var n=t.category,a=t.latlng,c=t.street,o=t.count;return r.a.createElement(Y.a,{fillColor:X[n],fillOpacity:.9,stroke:!1,radius:o<=20?25*o:500,center:a,key:a,onClick:e.clickCircle(c.id)},r.a.createElement(K.a,null,"Street Id: ".concat(c.id,"\n            Street Name: ").concat(c.name,"\n            Crime Count: ").concat(o)))}))}}]),t}(r.a.PureComponent),J=Object(i.b)(function(e){return Object(y.a)({},e.map)},function(e){return{onSaveLocation:function(t){return e({type:B,data:t})},onSaveStreetId:function(t){return e(function(e){return{type:H,id:e}}(t))}}})(q),Q=n(337),$=n(165),Z=n(166),ee=n(332),te=n(338),ne=n(310),ae=n(339),re=n(333),ce=function(e){var t=e.date,n=e.category,a=e.outcome;console.log("date",t);var c=window.innerWidth-35;return r.a.createElement("div",null,t&&r.a.createElement("p",null,"The number of crimes per Date"),t&&r.a.createElement(Q.a,{width:c,height:c,data:t},r.a.createElement($.a,{dataKey:"date"}),r.a.createElement(Z.a,{type:"number",yAxisId:0}),r.a.createElement(ee.a,null),r.a.createElement(te.a,{stroke:"#f5f5f5"}),r.a.createElement(ne.a,{type:"monotone",dataKey:"count",stroke:"#ff7300",yAxisId:0})),n&&r.a.createElement("p",null,"The number of crimes per Category"),n&&r.a.createElement(ae.a,{width:c,height:c,data:n},r.a.createElement($.a,{dataKey:"category"}),r.a.createElement(Z.a,{type:"number",yAxisId:0}),r.a.createElement(ee.a,null),r.a.createElement(te.a,{stroke:"#f5f5f5"}),r.a.createElement(re.a,{type:"monotone",dataKey:"count",fill:"#387908",yAxisId:0})),a&&r.a.createElement("p",null,"The ratio of crimes per Outcome"),a&&r.a.createElement(ae.a,{width:c,height:c,data:a},r.a.createElement($.a,{dataKey:"outcome"}),r.a.createElement(Z.a,{type:"number",yAxisId:0}),r.a.createElement(ee.a,null),r.a.createElement(te.a,{stroke:"#f5f5f5"}),r.a.createElement(re.a,{type:"monotone",dataKey:"count",fill:"#38abc8",yAxisId:0})))};function oe(){var e=Object(b.a)(["\n  .tr {\n    line-height: 2rem;\n\n    .th {\n      font-size: smaller;\n    }\n\n    .td {\n      padding: 0 0.5rem;\n    }\n  }\n"]);return oe=function(){return e},e}var ie=f.a.div(oe()),se=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dateGraph,n=e.categoryGraph,a=e.outcomeGraph;return r.a.createElement(ie,null,r.a.createElement("button",null,"Guardian News"),r.a.createElement(ce,{date:t,category:n,outcome:a}))}}]),t}(r.a.PureComponent),le=Object(i.b)(function(e){return Object(y.a)({},e.analyse)})(se);function ue(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  header {\n    order: 0;\n    background: darkslateblue;\n    color: yellow;\n    line-height: 2rem;\n    height: 4rem;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    position: relative;\n\n    .title {\n      text-align: center;\n      font-size: larger;\n      font-weight: bolder;\n    }\n\n    .email {\n      text-align: right;\n      padding: 0 1rem;\n      font-size: small;\n    }\n  }\n\n  aside {\n    order: 1;\n  }\n\n  .map {\n    order: 2;\n    height: 32.5rem;\n    z-index: 0;\n\n    .leaflet-container {\n      height: 100%;\n      margin: 0.5rem;\n      border-radius: 1.5rem;\n    }\n  }\n\n  .analyse {\n    order: 3;\n    height: 50rem;\n    padding: 1rem;\n  }\n"]);return ue=function(){return e},e}var me=f.a.div(ue()),de=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(me,null,r.a.createElement("header",null,r.a.createElement("div",{className:"title"},"CRIME MAP"),r.a.createElement("div",{className:"email"},r.a.createElement("span",{className:"smaller"},"Contact me: melancholy14@hotmail.com"))),r.a.createElement("aside",null,r.a.createElement(G,null)),r.a.createElement("main",{className:"map"},r.a.createElement(J,null)),r.a.createElement("main",{className:"analyse"},r.a.createElement(le,null)))}}]),t}(a.Component),pe={availability:[],crimeCategory:[],message:null};var he={latlng:{lat:51.505,lng:-.09}};var ge={streetId:0};var be=Object(s.combineReducers)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(y.a)({},e,{latlng:t.data});case S:return Object(y.a)({},e,{locations:Object.values(t.data.reduce(function(e,t){var n=t.category,a=t.location,r=(a=void 0===a?{}:a).latitude,c=a.longitude,o=a.street,i=void 0===o?{}:o;return e[i.id]?Object(y.a)({},e,Object(v.a)({},i.id,Object(y.a)({},e[i.id],{count:e[i.id].count+1}))):Object(y.a)({},e,Object(v.a)({},i.id,{category:n,street:i,count:1,latlng:[parseFloat(r),parseFloat(c)]}))},{}))});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)({},e,{availability:t.data});case w:return Object(y.a)({},e,{crimeCategory:t.data});case S:return Object(y.a)({},e,{crimes:t.data});case j:case k:case A:return Object(y.a)({},e,{message:t.message});default:return e}},analyse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(y.a)({},e,{streetId:t.id});case V:return Object(y.a)({},e,t.data);case W:return Object(y.a)({},e,{message:t.message});default:return e}}}),fe=n(17),ve=n.n(fe),ye=n(13),Oe=n(182),Ee=n(183),je=n.n(Ee),xe={police:"https://data.police.uk/api",guardian:"https://content.guardianapis.com/search"};function we(e){return ke.apply(this,arguments)}function ke(){return(ke=Object(Oe.a)(ve.a.mark(function e(t){var n,a;return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t);case 4:return(n=new Error).response=t,e.prev=6,e.next=9,t.json();case 9:throw a=e.sent,n.body=a,n.message=a.message||t.statusText,n;case 15:throw e.prev=15,e.t0=e.catch(6),e.t0;case 18:case"end":return e.stop()}},e,this,[[6,15]])}))).apply(this,arguments)}function Ce(e){return 204===e.status||205===e.status?null:e}function Se(e,t){return je.a.get(e,t).then(we).then(Ce)}var Ae=ve.a.mark(Re),_e=ve.a.mark(Le),Ie=ve.a.mark(Ne),Te=ve.a.mark(De);function Re(){var e;return ve.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Se("".concat(xe.police,"/crimes-street-dates"));case 3:return e=t.sent,t.next=6,Object(ye.c)((a=e.data,{type:E,data:a}));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(ye.c)((n=t.t0.message,{type:j,message:n}));case 13:case"end":return t.stop()}var n,a},Ae,this,[[0,8]])}function Le(){var e,t,n,a,r=arguments;return ve.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=e.date,c.prev=1,n=t||(new Date).toLocaleDateString(),c.next=5,Se("".concat(xe.police,"/crime-categories?date=").concat(n));case 5:return a=c.sent,c.next=8,Object(ye.c)((i=a.data,{type:w,data:i}));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),console.log(c.t0),c.next=15,Object(ye.c)((o=c.t0.message,{type:k,message:o}));case 15:case"end":return c.stop()}var o,i},_e,this,[[1,10]])}function Ne(e){var t,n,a,r,c,o,i,s;return ve.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.params,l.prev=1,n=t.url,a=t.dates,l.next=5,Object(ye.d)(function(e){return e.map.latlng});case 5:if(r=l.sent,c=r.lat,o=r.lng,!(c&&o&&a&&a.length>0)){l.next=17;break}return l.next=11,Object(ye.a)(a.map(function(e){return Se("".concat(xe.police,"/crimes-street/").concat(n,"?lat=").concat(c,"&lng=").concat(o,"&date=").concat(e))}));case 11:return i=l.sent,s=i&&i.reduce(function(e,t){return Object(O.a)(e).concat(Object(O.a)(t&&t.data))},[]),l.next=15,Object(ye.c)(_(s));case 15:l.next=19;break;case 17:return l.next=19,Object(ye.c)(I("There is no position info! Please, click the map and tell me where you want to know"));case 19:l.next=26;break;case 21:return l.prev=21,l.t0=l.catch(1),console.log(l.t0),l.next=26,Object(ye.c)(I(l.t0.message));case 26:case"end":return l.stop()}},Ie,this,[[1,21]])}function De(){return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.b)(Re);case 2:return e.next=4,Object(ye.b)(Le);case 4:return e.next=6,Object(ye.e)(x,Le);case 6:return e.next=8,Object(ye.e)(C,Ne);case 8:case"end":return e.stop()}},Te,this)}var Pe=n(118),Ue=ve.a.mark(Me),Ge=ve.a.mark(ze);function Me(e){var t,n,a,r,c,o,i;return ve.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.id,s.prev=1,s.next=4,Object(ye.d)(function(e){return e.search.crimes});case 4:return n=s.sent,a=n&&n.filter(function(e){var n=e.location,a=(n=void 0===n?{}:n).street;return(a=void 0===a?{}:a).id===t}),console.log("selectedCrimes",a),r=a.map(function(e){var t=e.id,n=e.month,a=e.category,r=e.outcome_status,c=e.outcomes;return{id:t,list:[["month",n],["category",a],["outcome",(c=void 0===c?r||{}:c).category]]}}),c=Object.entries(a.reduce(function(e,t){return Object(y.a)({},e,Object(v.a)({},t.month,e[t.month]>=0?e[t.month]+1:0))},{})).map(function(e){var t=Object(Pe.a)(e,2);return{date:t[0],count:t[1]}}),o=Object.entries(a.reduce(function(e,t){return Object(y.a)({},e,Object(v.a)({},t.category,e[t.category]>=0?e[t.category]+1:0))},{})).map(function(e){var t=Object(Pe.a)(e,2);return{category:t[0],count:t[1]}}),i=Object.entries(a.reduce(function(e,t){var n=t.outcome_status,a=t.outcomes,r=(a=void 0===a?n||{}:a).category;return r?Object(y.a)({},e,Object(v.a)({},r,e[r]>=0?e[r]+1:0)):e},{})).map(function(e){var t=Object(Pe.a)(e,2);return{outcome:t[0],count:t[1]}}),s.next=13,Object(ye.c)({type:V,data:{crimeTable:r,dateGraph:c,categoryGraph:o,outcomeGraph:i}});case 13:s.next=19;break;case 15:return s.prev=15,s.t0=s.catch(1),s.next=19,Object(ye.c)((l=s.t0.message,{type:W,message:l}));case 19:case"end":return s.stop()}var l},Ue,this,[[1,15]])}function ze(){return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(H,Me);case 2:case"end":return e.stop()}},Ge,this)}var Fe=ve.a.mark(Ke);function Ke(){return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([De,ze].map(ye.b));case 2:case"end":return e.stop()}},Fe,this)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=Object(l.a)(),Be=Object(s.createStore)(be,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(Ye)));Ye.run(Ke),o.a.render(r.a.createElement(i.a,{store:Be},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,2,1]]]);
//# sourceMappingURL=main.23df1931.chunk.js.map