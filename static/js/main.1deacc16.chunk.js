(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(331)},192:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(62),o=a.n(c),i=a(50),l=a(45),s=a(184),u=a(173),m=(a(192),a(46)),d=a(47),h=a(52),p=a(48),g=a(54),b=a(35),f=a(36),v=a(33),y=a(11),E=a(34),O="containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS",j="containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE",x="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST",w="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS",k="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE",C="containers/SearchPage/actions/SEARCH_REQUEST",S="containers/SearchPage/actions/SEARCH_SUCCESS",A="containers/SearchPage/actions/SEARCH_FAILURE";function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:S,data:e,dateLength:t}}function L(e){return{type:A,message:e}}var R="containers/MapPage/actions/SAVE_LOCATION",N="containers/MapPage/actions/SELECT_CRIME_CATEGORY";var P={"all-crime":"#d17f68","anti-social-behaviour":"#73b638","bicycle-theft":"#a45dcf",burglary:"#5fbc6e","criminal-damage-arson":"#c0489a",drugs:"#4b7d3c","other-theft":"#666dc6","possession-of-weapons":"#d99938","public-order":"#5e99d2",robbery:"#cc4f32",shoplifting:"#49b9a9","theft-from-the-person":"#c7496a","vehicle-crime":"#adac4d","violent-crime":"#c581bb","other-crime":"#8b6c2f"};function D(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n\n  .modal-title {\n    height: 3rem;\n    background-color: black;\n    color: white;\n    vertical-align: middle;\n    line-height: 3rem;\n    text-align: center;\n  }\n\n  .modal-main {\n    position: fixed;\n    background: white;\n    width: 100%;\n    height: calc(100% - 6rem);\n    overflow: auto;\n    top: 3rem;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .modal-footer {\n    position: fixed;\n    top: calc(100% - 3rem);\n    height: 3rem;\n    background-color: white;\n    width: 100%;\n    line-height: 3rem;\n    vertical-align: middle;\n    text-align: center;\n    border-top: 1px solid black;\n    box-sizing: border-box;\n\n    .close {\n      background-color: black;\n      color: white;\n      font-weight: bolder;\n      padding: 0.5rem 1rem;\n    }\n  }\n"]);return D=function(){return e},e}var I=f.a.div(D()),T=function(e){var t=e.title,a=e.show,n=e.onClose,c=e.children;return r.a.createElement(I,{className:"display-".concat(a?"block":"none")},r.a.createElement("div",{className:"modal-title"},t),r.a.createElement("div",{className:"modal-main"},c),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"close",onClick:n},"Close")))};function G(){var e=Object(b.a)(["\n  margin: 0.5rem auto;\n  display: table;\n\n  box-shadow: 1.5px 2px 1px 1px;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n\n  .tr {\n    display: table-row;\n  }\n\n  .th {\n    display: table-cell;\n    font-weight: 600;\n  }\n\n  .td {\n    display: table-cell;\n  }\n"]);return G=function(){return e},e}var U=f.a.div(G()),q=function(e){var t=e.children;return r.a.createElement(U,null,t)},M=function(e){var t=e.children;return r.a.createElement("div",{className:"tr"},t)},z=function(e){var t=e.children;return r.a.createElement("div",{className:"th"},t)},F=function(e){var t=e.children;return r.a.createElement("div",{className:"td"},t)};function H(){var e=Object(b.a)(["\n    order: 1;\n    margin: 0.5rem;\n    padding: 0.5rem;\n\n    .grid-container {\n      display: grid;\n      grid-template-rows: 2rem 2rem auto 2rem;\n      grid-template-columns: 4.5rem auto;\n\n      .grid-item {\n        padding: 0.5rem;\n        \n        &.whole-row {\n          grid-column-start: 1;\n          grid-column-end: 3;\n\n          .each-crime {\n            display: inline-block;\n            min-width: 50%;\n            font-size: small;\n            line-height: 1rem;\n            vertical-align: middle;\n\n            label {\n              font-size: smaller;\n            }\n\n            .color {\n              width: 0.75rem;\n              height: 0.75rem;\n              display: inline-block;\n              border-radius: 0.5rem;\n              margin: 0 0.3rem;\n            }\n          }\n        }\n      }\n\n      & > label {\n        font-size: smaller;\n        text-transform: capitalize;\n      }\n    }\n\n    button {\n      background-color: black;\n      color: white;\n      padding: 0.3rem 1rem;\n      font-weight: bolder;\n    }\n"]);return H=function(){return e},e}var W=f.a.div(H()),Y={url:"all-crime",name:"All crime"},K=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).changeDate=function(t){return function(a){var n=a.target.value;if(n){var r=Object(E.a)(e.state.minmax);r["min"===t?0:1]=n,r.sort(function(e,t){return e>t});var c=Object(y.a)({},e.state.date,Object(v.a)({},t,n));e.setState({minmax:r,date:c})}}},e.changeCategory=function(t){e.crimeCategory=t.target.value;var a=e.state.crimeCheckboxes.map(function(e){var a=t.target.value===Y.url||e.url===t.target.value;return Object(y.a)({},e,{checked:a})});e.setState({crimeCheckboxes:a,checkboxReadOnly:t.target.value!==Y.url})},e.checkCategory=function(t){return function(a){var n=e.state.crimeCheckboxes.map(function(e){return e.url===t?Object(y.a)({},e,{checked:a.target.checked}):e});e.setState({crimeCheckboxes:n});var r=n.reduce(function(e,t){return t.checked?Object(E.a)(e).concat([t.url]):e},[]);e.props.onSelectCrimeCategory(r)}},e.search=function(t){t.preventDefault();var a=e.state,n=a.minmax,r=a.date.dates.filter(function(e){return n[0]<=e&&e<=n[1]}).sort(function(e,t){return e>t}),c={url:e.crimeCategory||Y.url,dates:r};e.props.onSearch(c),e.setState({checkboxReadOnly:c.url!==Y.url})},e.toggleModal=function(){return e.setState({showError:!e.state.showError})},e.state={date:{},minmax:[],message:null,checkboxReadOnly:!1},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.availability,a=e.crimeCategory,n=e.message,r=this.props,c=r.availability,o=r.crimeCategory,i=r.message;if(t!==c){var l=c.reduce(function(e,t){return{min:e.min&&e.min<t.date?e.min:t.date,max:e.max&&e.max>t.date?e.max:t.date,dates:e.dates?Object(E.a)(e.dates).concat([t.date]):[t.date]}},{}),s=[l.min,l.max];this.setState({minmax:s,date:l})}if(a!==o){var u=this.props.crimeCategory.reduce(function(e,t){return t.url!==Y.url?Object(E.a)(e).concat([Object(y.a)({},t,{checked:!0,readOnly:!0})]):e},[]);this.setState({crimeCheckboxes:u})}n!==i&&this.setState({showError:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.date,n=(a=void 0===a?{}:a).min,c=a.max,o=a.dates,i=void 0===o?[]:o,l=t.crimeCheckboxes,s=t.showError,u=t.checkboxReadOnly,m=this.props,d=m.crimeCategory,h=void 0===d?[Y]:d,p=m.message;return r.a.createElement(W,null,r.a.createElement("form",{className:"grid-container"},r.a.createElement("label",{htmlFor:"select_date",className:"grid-item"},"date"),r.a.createElement("div",{className:"grid-item"},r.a.createElement("select",{id:"select_date",onChange:this.changeDate("min"),value:n},i.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("span",null," ~ "),r.a.createElement("select",{onChange:this.changeDate("max"),value:c},i.map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("label",{htmlFor:"select_category",className:"grid-item"},"category"),r.a.createElement("select",{id:"select_category",onChange:this.changeCategory,className:"grid-item"},h&&h.map(function(e){var t=e.url,a=e.name;return r.a.createElement("option",{key:t,value:t},a)})),l&&r.a.createElement("div",{className:"grid-item whole-row"},l&&l.map(function(t){return r.a.createElement("div",{className:"each-crime",key:t.url},r.a.createElement("input",{type:"checkbox",value:t.url,id:"checkbox_".concat(t.url),onChange:e.checkCategory(t.url),checked:t.checked,readOnly:u}),r.a.createElement("label",{htmlFor:"checkbox_".concat(t.url)},t.name),r.a.createElement("span",{className:"color",style:{backgroundColor:P[t.url]}}))})),r.a.createElement("button",{onClick:this.search,className:"grid-item whole-row"},"SEARCH")),r.a.createElement(T,{show:s,onClose:this.toggleModal},p))}}]),t}(r.a.PureComponent),B=Object(i.b)(function(e){return Object(y.a)({},e.search)},function(e){return{onLoadCrimeCategory:function(){return e({type:x,date:t});var t},onSearch:function(t){return e({type:C,params:t})},onSelectCrimeCategory:function(t){return e({type:N,data:t})}}})(K),Q=a(340),V=a(343),J=a(336),X=a(342),Z=a(341),$="containers/AnalysePage/LOAD_GRAPHS_REQUEST",ee="containers/AnalysePage/LOAD_GRAPHS_SUCCESS",te="containers/AnalysePage/LOAD_GRAPHS_FAILURE",ae="containers/AnalysePage/LOAD_NEWS_REQUEST",ne="containers/AnalysePage/LOAD_NEWS_SUCCESS",re="containers/AnalysePage/LOAD_NEWS_FAILURE";var ce=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){var t=e.latlng;a.props.onSaveLocation(t)},a.handleCircle=function(e,t){return function(){a.props.onLoadGraphRequest(e),a.props.onLoadNewsRequest(t)}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.latlng,n=t.selectedCrimes;return r.a.createElement(Q.a,{center:a,ref:function(t){e.map=t},zoom:13,onClick:this.handleClick},r.a.createElement(V.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a&&r.a.createElement(J.a,{position:[a.lat,a.lng]},r.a.createElement(X.a,null,"You clicked here!!\n            Latitude: ".concat(a.lat,"\n            Longitude: ").concat(a.lng))),n&&n.map(function(t){var a=t.category,n=t.latlng,c=t.street,o=t.count,i=t.opacity,l=void 0===i?.5:i;return r.a.createElement(Z.a,{fillColor:P[a],fillOpacity:l,stroke:!1,radius:o<10?25*o:250,center:n,key:n,onClick:e.handleCircle(c.id,n)},r.a.createElement(X.a,null,"Street Id: ".concat(c.id,"\n            Street Name: ").concat(c.name,"\n            Crime Count: ").concat(o)))}))}}]),t}(r.a.PureComponent),oe=Object(i.b)(function(e){return Object(y.a)({},e.map)},function(e){return{onSaveLocation:function(t){return e({type:R,data:t})},onLoadGraphRequest:function(t){return e(function(e){return{type:$,id:e}}(t))},onLoadNewsRequest:function(t){return e(function(e){return{type:ae,latlng:e}}(t))}}})(ce),ie=function(e){var t=e.news;return r.a.createElement("div",null,t&&t.map(function(e){var t=e.id,a=e.sectionName,n=e.pillarName,c=e.webTitle,o=e.webUrl,i=e.webPublicationDate;return r.a.createElement(q,{key:t},r.a.createElement(M,null,r.a.createElement(z,null,"Date"),r.a.createElement(F,null,new Date(i).toLocaleDateString())),r.a.createElement(M,null,r.a.createElement(z,null,"Section"),r.a.createElement(F,null,a)),r.a.createElement(M,null,r.a.createElement(z,null,"Pillar"),r.a.createElement(F,null,n)),r.a.createElement(M,null,r.a.createElement(z,null,"Title"),r.a.createElement(F,null,r.a.createElement("a",{href:o,target:"_new"},c))))}))},le=a(337),se=a(165),ue=a(166),me=a(332),de=a(338),he=a(310),pe=a(339),ge=a(333),be=function(e){var t=e.date,a=e.category,n=e.outcome,c=window.innerWidth-35;return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement("p",null,"The number of crimes per Date"),r.a.createElement(le.a,{width:c,height:c,data:t},r.a.createElement(se.a,{dataKey:"date"}),r.a.createElement(ue.a,{type:"number",yAxisId:0}),r.a.createElement(me.a,null),r.a.createElement(de.a,{stroke:"#f5f5f5"}),r.a.createElement(he.a,{type:"monotone",dataKey:"count",stroke:"#ff7300",yAxisId:0}))),a&&a.length>1&&r.a.createElement("div",null,r.a.createElement("p",null,"The number of crimes per Category"),r.a.createElement(pe.a,{width:c,height:c,data:a},r.a.createElement(se.a,{dataKey:"category"}),r.a.createElement(ue.a,{type:"number",yAxisId:0}),r.a.createElement(me.a,null),r.a.createElement(de.a,{stroke:"#f5f5f5"}),r.a.createElement(ge.a,{type:"monotone",dataKey:"count",fill:"#387908",yAxisId:0}))),n&&r.a.createElement("div",null,r.a.createElement("p",null,"The ratio of crimes per Outcome"),r.a.createElement(pe.a,{width:c,height:c,data:n},r.a.createElement(se.a,{dataKey:"outcome"}),r.a.createElement(ue.a,{type:"number",yAxisId:0}),r.a.createElement(me.a,null),r.a.createElement(de.a,{stroke:"#f5f5f5"}),r.a.createElement(ge.a,{type:"monotone",dataKey:"count",fill:"#38abc8",yAxisId:0}))))};function fe(){var e=Object(b.a)(["\n  .tr {\n    line-height: 2rem;\n\n    .th, .td {\n      padding: 0 0.5rem;\n      font-size: smaller;\n    }\n  }\n"]);return fe=function(){return e},e}var ve=f.a.div(fe()),ye=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dateGraph,a=e.categoryGraph,n=e.outcomeGraph,c=e.news;return r.a.createElement(ve,null,t&&r.a.createElement("h3",null,"Graphs"),r.a.createElement(be,{date:t,category:a,outcome:n}),c&&r.a.createElement("h3",null,"News"),c&&r.a.createElement(ie,{news:c}))}}]),t}(r.a.PureComponent),Ee=Object(i.b)(function(e){return Object(y.a)({},e.analyse)})(ye);function Oe(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  header {\n    order: 0;\n    background: darkslateblue;\n    color: yellow;\n    line-height: 2rem;\n    height: 4rem;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    position: relative;\n\n    .title {\n      text-align: center;\n      font-size: larger;\n      font-weight: bolder;\n    }\n\n    .email {\n      text-align: right;\n      padding: 0 1rem;\n      font-size: small;\n    }\n  }\n\n  aside {\n    order: 1;\n  }\n\n  .map {\n    order: 2;\n    height: 32.5rem;\n    z-index: 0;\n\n    .leaflet-container {\n      height: 100%;\n      margin: 0.5rem;\n      border-radius: 1.5rem;\n    }\n  }\n\n  .analyse {\n    order: 3;\n    padding: 1rem;\n  }\n"]);return Oe=function(){return e},e}var je=f.a.div(Oe()),xe=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(je,null,r.a.createElement("header",null,r.a.createElement("div",{className:"title"},"CRIME MAP"),r.a.createElement("div",{className:"email"},r.a.createElement("span",{className:"smaller"},"Contact me: melancholy14@hotmail.com"))),r.a.createElement("aside",null,r.a.createElement(B,null)),r.a.createElement("main",{className:"map"},r.a.createElement(oe,null)),r.a.createElement("main",{className:"analyse"},r.a.createElement(Ee,null)))}}]),t}(n.Component),we={availability:[],crimeCategory:[],message:null};var ke={latlng:{lat:51.505,lng:-.09},selectedCrimes:[],searchedCrimes:[]};var Ce={};var Se=Object(l.combineReducers)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(y.a)({},e,{latlng:t.data});case N:return Object(y.a)({},e,{selectedCrimes:e.searchedCrimes.filter(function(e){return t.data.find(function(t){return t===e.category})})});case S:var a=Object.values(t.data.reduce(function(e,a){var n=a.category,r=a.location,c=(r=void 0===r?{}:r).latitude,o=r.longitude,i=r.street,l=void 0===i?{}:i;return e[l.id]?Object(y.a)({},e,Object(v.a)({},l.id,Object(y.a)({},e[l.id],{count:e[l.id].count+1,opacity:(e[l.id].count+1)/t.dateLength}))):Object(y.a)({},e,Object(v.a)({},l.id,{category:n,street:l,count:1,opacity:1/t.dateLength,latlng:[parseFloat(c),parseFloat(o)]}))},{}));return Object(y.a)({},e,{selectedCrimes:Object(E.a)(a),searchedCrimes:Object(E.a)(a)});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(y.a)({},e,t.params);case O:return Object(y.a)({},e,{availability:t.data});case w:return Object(y.a)({},e,{crimeCategory:t.data});case S:return Object(y.a)({},e,{crimes:t.data});case j:case k:case A:return Object(y.a)({},e,{message:t.message});default:return e}},analyse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(y.a)({},e,t.data);case ne:return Object(y.a)({},e,{news:t.news});case re:case te:return Object(y.a)({},e,{message:t.message});default:return e}}}),Ae=a(15),_e=a.n(Ae),Le=a(13),Re=a(182),Ne=a(183),Pe=a.n(Ne),De={police:"https://data.police.uk/api",guardian:"https://content.guardianapis.com/search",mapquest:"http://open.mapquestapi.com/geocoding/v1"},Ie={guardian:"36ecd8a8-f9be-4d95-9643-4095fae41301",mapquest:"7qAl9AvfefdHSIOkkLrVvSc466ZoHenG"};function Te(e){return Ge.apply(this,arguments)}function Ge(){return(Ge=Object(Re.a)(_e.a.mark(function e(t){var a,n;return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t);case 4:return(a=new Error).response=t,e.prev=6,e.next=9,t.json();case 9:throw n=e.sent,a.body=n,a.message=n.message||t.statusText,a;case 15:throw e.prev=15,e.t0=e.catch(6),e.t0;case 18:case"end":return e.stop()}},e,this,[[6,15]])}))).apply(this,arguments)}function Ue(e){return 204===e.status||205===e.status?null:e}function qe(e,t){return Pe.a.get(e,t).then(Te).then(Ue)}var Me=_e.a.mark(We),ze=_e.a.mark(Ye),Fe=_e.a.mark(Ke),He=_e.a.mark(Be);function We(){var e;return _e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,qe("".concat(De.police,"/crimes-street-dates"));case 3:return e=t.sent,t.next=6,Object(Le.c)((n=e.data,{type:O,data:n}));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(Le.c)((a=t.t0.message,{type:j,message:a}));case 13:case"end":return t.stop()}var a,n},Me,this,[[0,8]])}function Ye(){var e,t,a,n,r=arguments;return _e.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=e.date,c.prev=1,a=t||(new Date).toLocaleDateString(),c.next=5,qe("".concat(De.police,"/crime-categories?date=").concat(a));case 5:return n=c.sent,c.next=8,Object(Le.c)((i=n.data,{type:w,data:i}));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),console.log(c.t0),c.next=15,Object(Le.c)((o=c.t0.message,{type:k,message:o}));case 15:case"end":return c.stop()}var o,i},ze,this,[[1,10]])}function Ke(e){var t,a,n,r,c,o,i,l;return _e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.params,s.prev=1,a=t.url,n=t.dates,s.next=5,Object(Le.d)(function(e){return e.map.latlng});case 5:if(r=s.sent,c=r.lat,o=r.lng,!(c&&o&&n&&n.length>0)){s.next=17;break}return s.next=11,Object(Le.a)(n.map(function(e){return qe("".concat(De.police,"/crimes-street/").concat(a,"?lat=").concat(c,"&lng=").concat(o,"&date=").concat(e))}));case 11:return i=s.sent,l=i&&i.reduce(function(e,t){return Object(E.a)(e).concat(Object(E.a)(t&&t.data))},[]),s.next=15,Object(Le.c)(_(l,n.length));case 15:s.next=19;break;case 17:return s.next=19,Object(Le.c)(L("There is no position info! Please, click the map and tell me where you want to know"));case 19:s.next=26;break;case 21:return s.prev=21,s.t0=s.catch(1),console.log(s.t0),s.next=26,Object(Le.c)(L(s.t0.message));case 26:case"end":return s.stop()}},Fe,this,[[1,21]])}function Be(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.b)(We);case 2:return e.next=4,Object(Le.b)(Ye);case 4:return e.next=6,Object(Le.e)(x,Ye);case 6:return e.next=8,Object(Le.e)(C,Ke);case 8:case"end":return e.stop()}},He,this)}var Qe=a(118),Ve=_e.a.mark(Ze),Je=_e.a.mark($e),Xe=_e.a.mark(et);function Ze(e){var t,a,n,r,c,o;return _e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.id,i.prev=1,i.next=4,Object(Le.d)(function(e){return e.search.crimes});case 4:return a=i.sent,n=a&&a.filter(function(e){var a=e.location,n=(a=void 0===a?{}:a).street;return(n=void 0===n?{}:n).id===t}),r=Object.entries(n.reduce(function(e,t){return Object(y.a)({},e,Object(v.a)({},t.month,e[t.month]>=0?e[t.month]+1:0))},{})).map(function(e){var t=Object(Qe.a)(e,2);return{date:t[0],count:t[1]}}),c=Object.entries(n.reduce(function(e,t){return Object(y.a)({},e,Object(v.a)({},t.category,e[t.category]>=0?e[t.category]+1:0))},{})).map(function(e){var t=Object(Qe.a)(e,2);return{category:t[0],count:t[1]}}),o=Object.entries(n.reduce(function(e,t){var a=t.outcome_status,n=t.outcomes,r=(n=void 0===n?a||{}:n).category;return r?Object(y.a)({},e,Object(v.a)({},r,e[r]>=0?e[r]+1:0)):e},{})).map(function(e){var t=Object(Qe.a)(e,2);return{outcome:t[0],count:t[1]}}),i.next=11,Object(Le.c)({type:ee,data:{dateGraph:r,categoryGraph:c,outcomeGraph:o}});case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(1),i.next=17,Object(Le.c)((l=i.t0.message,{type:te,message:l}));case 17:case"end":return i.stop()}var l},Ve,this,[[1,13]])}function $e(e){var t,a,n,r,c,o,i,l,s,u,m,d,h,p,g,b,f;return _e.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=e.latlng,v.prev=1,a="".concat(De.mapquest,"/reverse?key=").concat(Ie.mapquest,"&location=").concat(t.join(","),"&includeRoadMetadata=true&includeNearestIntersection=true"),v.next=5,qe(a);case 5:return n=v.sent,r=n.data,c=(r=void 0===r?{}:r).results,o=(void 0===c?[]:c)[0].locations,i=(void 0===o?[]:o)[0],l=i.street,s=i.adminArea5,u=i.postalCode,m="".concat(s," AND ").concat(l||u),v.next=14,Object(Le.d)(function(e){return e.search.dates});case 14:return d=v.sent,h="".concat(De.guardian,"?q=").concat(m,"&from-date=").concat(d[0],"-01&api-key=").concat(Ie.guardian),v.next=18,qe(h);case 18:return p=v.sent,g=p.data,b=(g=void 0===g?{}:g).response.results,(f=void 0===b?[]:b).sort(function(e,t){return e.webPublicationDate>t.webPublicationDate}),console.log(f),v.next=26,Object(Le.c)({type:ne,news:f});case 26:v.next=33;break;case 28:return v.prev=28,v.t0=v.catch(1),console.error(v.t0),v.next=33,Object(Le.c)((y=v.t0.message,{type:re,message:y}));case 33:case"end":return v.stop()}var y},Je,this,[[1,28]])}function et(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.e)($,Ze);case 2:return e.next=4,Object(Le.e)(ae,$e);case 4:case"end":return e.stop()}},Xe,this)}var tt=_e.a.mark(at);function at(){return _e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Be,et].map(Le.b));case 2:case"end":return e.stop()}},tt,this)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt=Object(s.a)(),rt=Object(l.createStore)(Se,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(nt)));nt.run(at),o.a.render(r.a.createElement(i.a,{store:rt},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,2,1]]]);
//# sourceMappingURL=main.1deacc16.chunk.js.map