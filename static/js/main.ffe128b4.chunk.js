(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){e.exports=n.p+"static/media/iu.be3a3a56.gif"},178:function(e,t,n){e.exports=n.p+"static/media/boa.3096abdc.gif"},188:function(e,t,n){e.exports=n(334)},195:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(62),o=n.n(c),i=n(50),l=n(45),s=n(187),u=n(174),m=(n(195),n(46)),d=n(47),h=n(52),p=n(48),g=n(54),b=n(22),f=n(23),v=n(35),E=n(11),y=n(36),O="containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS",j="containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE",w="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST",x="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS",k="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE",C="containers/SearchPage/actions/SEARCH_REQUEST",S="containers/SearchPage/actions/SEARCH_SUCCESS",A="containers/SearchPage/actions/SEARCH_FAILURE";function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:S,data:e,dateLength:t}}function N(e){return{type:A,message:e}}var _={"all-crime":"#d17f68","anti-social-behaviour":"#73b638","bicycle-theft":"#a45dcf",burglary:"#5fbc6e","criminal-damage-arson":"#c0489a",drugs:"#4b7d3c","other-theft":"#666dc6","possession-of-weapons":"#d99938","public-order":"#5e99d2",robbery:"#cc4f32",shoplifting:"#49b9a9","theft-from-the-person":"#c7496a","vehicle-crime":"#adac4d","violent-crime":"#c581bb","other-crime":"#8b6c2f"},R="containers/MapPage/actions/SAVE_LOCATION",D="containers/MapPage/actions/FILTER_CRIME_CIRCLES";function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.values(e.reduce(function(e,n){var a=n.category,r=n.location,c=(r=void 0===r?{}:r).latitude,o=r.longitude,i=r.street,l=void 0===i?{}:i;return 0===t.length||t.find(function(e){return e===a})?e[l.id]?Object(E.a)({},e,Object(v.a)({},l.id,Object(E.a)({},e[l.id],{count:e[l.id].count+1}))):Object(E.a)({},e,Object(v.a)({},l.id,{category:a,fillColor:_[a],street:l,count:1,latlng:[parseFloat(c),parseFloat(o)]})):e},{})),a=Math.max.apply(Math,Object(y.a)(n.map(function(e){return e.count}))),r=n.map(function(e){return Object(E.a)({},e,{opacity:(e.count-e.count%100)/100>0?1:(e.count-e.count%10)/10>0?.75:.5,radius:25/a*e.count})});return{type:D,data:r}}function P(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n\n  .modal-title {\n    position: fixed;\n    top: 7rem;\n    width: 100%;\n    height: 3rem;\n    background-color: black;\n    color: white;\n    vertical-align: middle;\n    line-height: 3rem;\n    text-align: center;\n\n    .title {\n      display: inline-block;\n      width: calc(100% - 2rem);\n    }\n\n    .close {\n      display: inline-block;\n      width: 2rem;\n      font-size: large;\n      font-weight: bold;    \n      border: 0;\n      background-color: black;\n      color: white;\n    }\n  }\n\n  .modal-main {\n    position: fixed;\n    background: white;\n    width: 100%;\n    min-height: 10rem;\n    // height: calc(50% - 6rem);\n    overflow: auto;\n    top: 10rem;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  // .modal-footer {\n  //   position: fixed;\n  //   top: calc(50% - 6rem + 10rem);\n  //   height: 3rem;\n  //   background-color: white;\n  //   width: 100%;\n  //   line-height: 3rem;\n  //   vertical-align: middle;\n  //   text-align: center;\n  //   border-top: 1px solid black;\n  //   box-sizing: border-box;\n\n  //   .close {\n  //     background-color: black;\n  //     color: white;\n  //     font-weight: bolder;\n  //     padding: 0.5rem 1rem;\n  //     border: 0;\n  //   }\n  // }\n"]);return P=function(){return e},e}var T=f.a.div(P()),G=function(e){var t=e.title,n=e.show,a=e.onClose,c=e.children;return r.a.createElement(T,{className:"display-".concat(n?"block":"none")},r.a.createElement("div",{className:"modal-title"},r.a.createElement("div",{className:"title"},t),r.a.createElement("button",{className:"close",onClick:a},"X")),r.a.createElement("div",{className:"modal-main"},c))};function M(){var e=Object(b.a)(["\n  margin: 0.5rem auto;\n  display: table;\n\n  box-shadow: 1.5px 2px 1px 1px;\n  // border-radius: 0.5rem;\n  width: -webkit-fill-available;\n  padding: 0.5rem;\n\n  .tr {\n    display: table-row;\n  }\n\n  .th {\n    display: table-cell;\n    font-weight: 600;\n  }\n\n  .td {\n    display: table-cell;\n  }\n"]);return M=function(){return e},e}var U=f.a.div(M()),F=function(e){var t=e.children;return r.a.createElement(U,null,t)},q=function(e){var t=e.children;return r.a.createElement("div",{className:"tr"},t)},z=function(e){var t=e.children;return r.a.createElement("div",{className:"th"},t)},H=function(e){var t=e.children;return r.a.createElement("div",{className:"td"},t)},W=n(177),K=n.n(W),Y=n(178),B=n.n(Y);function Q(){var e=Object(b.a)([" \n  img {\n    width: 100%;\n  }\n"]);return Q=function(){return e},e}var V=f.a.div(Q()),J=function(e){var t=e.loading;return r.a.createElement(G,{title:"Loading...",show:t},r.a.createElement(V,null,r.a.createElement("img",{src:Math.round(Math.random())%2===0?B.a:K.a,alt:"loading..."})))};function X(){var e=Object(b.a)(["\n  border: 0;\n  height: 1rem;\n  min-width: 5rem;\n  background-color: white;\n"]);return X=function(){return e},e}var Z=f.a.select(X()),$=function(e){var t=e.id,n=e.value,a=e.options,c=e.onChange,o=e.className;return r.a.createElement(Z,{id:t,onChange:c,value:n,className:o},a&&a.map(function(e){var t=e.value,n=e.text,a=void 0===n?t:n;return r.a.createElement("option",{key:t,value:t},a)}))};function ee(){var e=Object(b.a)(["\n  background-color: black;\n  color: white;\n  font-weight: bolder;\n  padding: 0.3rem 1rem;\n  border: 0;\n  border-radius: 0.5rem;\n  min-height: 1.5rem;\n"]);return ee=function(){return e},e}var te=f.a.button(ee()),ne=function(e){var t=e.onClick,n=e.className,a=e.children;return r.a.createElement(te,{onClick:t,className:n},a)},ae=function(e){var t=e.id,n=e.value,a=e.checked,c=e.className,o=e.onChange;return r.a.createElement("input",{type:"checkbox",id:t,value:n,onChange:o,checked:a,className:c})};function re(){var e=Object(b.a)(["\n    order: 1;\n    margin: 0.5rem;\n    padding: 0.5rem;\n\n    .grid-container {\n      display: grid;\n      grid-template-rows: 2rem 2rem auto 2rem;\n      grid-template-columns: 4.5rem auto;\n\n      .grid-item {\n        padding: 0.5rem;\n        \n        &.whole-row {\n          grid-column-start: 1;\n          grid-column-end: 3;\n\n          .each-crime {\n            display: inline-block;\n            min-width: 50%;\n            font-size: small;\n            line-height: 1rem;\n            vertical-align: middle;\n\n            label {\n              font-size: smaller;\n            }\n\n            .color {\n              width: 0.75rem;\n              height: 0.75rem;\n              display: inline-block;\n              border-radius: 0.5rem;\n              margin: 0 0.3rem;\n            }\n          }\n        }\n      }\n\n      & > label {\n        font-size: smaller;\n        text-transform: capitalize;\n      }\n    }\n\n    button {     \n      padding: 0.3rem 1rem;\n    }\n"]);return re=function(){return e},e}var ce=f.a.div(re()),oe={url:"all-crime",name:"All crime"},ie=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).changeDate=function(t){return function(n){var a=n.target.value;if(a){var r=Object(y.a)(e.state.minmax);r["min"===t?0:1]=a,r.sort(function(e,t){return e.localeCompare(t)});var c=Object(E.a)({},e.state.date,Object(v.a)({},t,a));e.setState({minmax:r,date:c})}}},e.changeCategory=function(t){var n=e.state.crimeCheckboxes.map(function(e){var n=t.target.value===oe.url||e.url===t.target.value;return Object(E.a)({},e,{checked:n})});e.setState({crimeCheckboxes:n,selectedCategory:t.target.value})},e.checkCategory=function(t){return function(n){var a=e.state.crimeCheckboxes.map(function(e){return e.url===t?Object(E.a)({},e,{checked:n.target.checked}):e});console.log(t,n.target.checked),console.log(a),e.setState({crimeCheckboxes:a});var r=a.reduce(function(e,t){return t.checked?Object(y.a)(e).concat([t.url]):e},[]);e.props.onFilterCrimeCategory(e.props.crimes,r)}},e.search=function(t){t.preventDefault();var n=e.state,a=n.minmax,r=n.date,c=n.selectedCategory,o=r.dates.reduce(function(e,t){return a[0]<=t.value&&t.value<=a[1]?Object(y.a)(e).concat([t.value]):e},[]).sort(function(e,t){return e.localeCompare(t)}),i={url:c||oe.url,dates:o};e.props.onSearch(i)},e.toggleModal=function(){return e.setState({showError:!e.state.showError})},e.state={date:{min:"",max:"",dates:[]},minmax:[],crimeCheckboxes:[],selectedCategory:"",showError:!1},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.availability,n=e.category,a=e.message,r=this.props,c=r.availability,o=r.category,i=r.message;if(t!==c){var l=c.reduce(function(e,t){return{min:e.min&&e.min<t.date?e.min:t.date,max:e.max&&e.max>t.date?e.max:t.date,dates:e.dates?Object(y.a)(e.dates).concat([{value:t.date}]):[{value:t.date}]}},Object(E.a)({},this.state.date)),s=[l.min,l.max];this.setState({minmax:s,date:l})}if(n!==o){var u=this.props.category.reduce(function(e,t){return t.url!==oe.url?Object(y.a)(e).concat([Object(E.a)({},t,{checked:!0})]):e},[]);this.setState({crimeCheckboxes:u})}a!==i&&this.setState({showError:!0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.date,a=(n=void 0===n?{}:n).min,c=n.max,o=n.dates,i=void 0===o?[]:o,l=t.crimeCheckboxes,s=t.showError,u=this.props,m=u.category,d=void 0===m?[oe]:m,h=u.message,p=u.loading;return r.a.createElement(ce,null,r.a.createElement("form",{className:"grid-container"},r.a.createElement("label",{htmlFor:"select_date",className:"grid-item"},"date"),r.a.createElement("div",{className:"grid-item"},r.a.createElement($,{onChange:this.changeDate("min"),value:a,options:i}),r.a.createElement("span",null," ~ "),r.a.createElement($,{onChange:this.changeDate("max"),value:c,options:i})),r.a.createElement("label",{htmlFor:"select_category",className:"grid-item"},"category"),r.a.createElement("div",{className:"grid-item"},r.a.createElement($,{id:"select_category",onChange:this.changeCategory,options:d})),l&&r.a.createElement("div",{className:"grid-item whole-row"},l&&l.map(function(t){return r.a.createElement("div",{className:"each-crime",key:t.url},r.a.createElement(ae,{value:t.url,id:"checkbox_".concat(t.url),onChange:e.checkCategory(t.url),checked:t.checked}),r.a.createElement("label",{htmlFor:"checkbox_".concat(t.url)},t.name),r.a.createElement("span",{className:"color",style:{backgroundColor:_[t.url]}}))})),r.a.createElement(ne,{onClick:this.search,className:"grid-item whole-row"},"SEARCH")),r.a.createElement(J,{loading:p}),r.a.createElement(G,{show:s,onClose:this.toggleModal},h))}}]),t}(r.a.PureComponent);ie.defaultProps={availability:[],category:[],crimes:[],message:null,loading:!1,onSelectCrimeCategory:function(){},onFilterCrimeCategory:function(){},onSearch:function(){}};var le=Object(i.b)(function(e){return Object(E.a)({},e.search,{category:e.search.category.map(function(e){return Object(E.a)({},e,{value:e.url,text:e.name})})})},function(e){return{onSearch:function(t){return e({type:C,data:t})},onFilterCrimeCategory:function(t,n){return e(I(t,n))}}})(ie),se=n(343),ue=n(346),me=n(339),de=n(345),he=n(344),pe="containers/AnalysePage/LOAD_GRAPHS_REQUEST",ge="containers/AnalysePage/LOAD_GRAPHS_SUCCESS",be="containers/AnalysePage/LOAD_GRAPHS_FAILURE",fe="containers/AnalysePage/LOAD_NEWS_REQUEST",ve="containers/AnalysePage/LOAD_NEWS_SUCCESS",Ee="containers/AnalysePage/LOAD_NEWS_FAILURE";var ye=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){return n.props.onSaveLocation(e.latlng)},n.handleLocationFound=function(e){n.setState({hasLocation:!0,latlng:e.latlng}),n.props.onSaveLocation(e.latlng)},n.handleCircle=function(e,t){return function(){n.props.onLoadGraphRequest(e),n.props.onLoadNewsRequest(t)}},n.state={latlng:e.latlng},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.map.leafletElement&&this.map.leafletElement.locate()}},{key:"componentDidUpdate",value:function(e){e.latlng!==this.props.latlng&&this.setState({latlng:this.props.latlng})}},{key:"render",value:function(){var e=this,t=this.props.circles,n=this.state.latlng,a=void 0===n?{}:n;return r.a.createElement(se.a,{center:a,ref:function(t){e.map=t},zoom:13,onClick:this.handleClick,onLocationfound:this.handleLocationFound},r.a.createElement(ue.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a&&r.a.createElement(me.a,{position:[a.lat,a.lng]},r.a.createElement(de.a,null,"You clicked here!!\n            Latitude: ".concat(a.lat,"\n            Longitude: ").concat(a.lng))),t&&t.map(function(t){var n=t.latlng,a=t.street,c=t.radius,o=t.count,i=t.opacity,l=void 0===i?.5:i,s=t.fillColor;return r.a.createElement(he.a,{fillColor:s,fillOpacity:l,stroke:!1,radius:c<10?25*c:250,center:n,key:n,onClick:e.handleCircle(a.id,n)},r.a.createElement(de.a,null,"Street Id: ".concat(a.id,"\n            Street Name: ").concat(a.name,"\n            Crime Count: ").concat(o)))}))}}]),t}(r.a.PureComponent),Oe=Object(i.b)(function(e){return Object(E.a)({},e.map)},function(e){return{onSaveLocation:function(t){return e({type:R,data:t})},onLoadGraphRequest:function(t){return e(function(e){return{type:pe,id:e}}(t))},onLoadNewsRequest:function(t){return e(function(e){return{type:fe,latlng:e}}(t))}}})(ye),je=function(e){var t=e.news;return r.a.createElement("div",null,t&&t.map(function(e){var t=e.id,n=e.sectionName,a=e.pillarName,c=e.webTitle,o=e.webUrl,i=e.webPublicationDate;return r.a.createElement(F,{key:t},r.a.createElement(q,null,r.a.createElement(z,null,"Date"),r.a.createElement(H,null,new Date(i).toLocaleDateString())),r.a.createElement(q,null,r.a.createElement(z,null,"Section"),r.a.createElement(H,null,n)),r.a.createElement(q,null,r.a.createElement(z,null,"Pillar"),r.a.createElement(H,null,a)),r.a.createElement(q,null,r.a.createElement(z,null,"Title"),r.a.createElement(H,null,r.a.createElement("a",{href:o,target:"_new"},c))))}))},we=n(340),xe=n(126),ke=n(127),Ce=n(336),Se=n(341),Ae=n(313),Le=n(342),Ne=n(335),_e=function(e){var t=e.date,n=e.category,a=e.outcome,c=window.innerWidth-35;return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement("p",null,"The number of crimes per Date"),r.a.createElement(we.a,{width:c,height:c,data:t},r.a.createElement(xe.a,{dataKey:"date"}),r.a.createElement(ke.a,{type:"number",yAxisId:0}),r.a.createElement(Ce.a,null),r.a.createElement(Se.a,{stroke:"#f5f5f5"}),r.a.createElement(Ae.a,{type:"monotone",dataKey:"count",stroke:"#ff7300",yAxisId:0}))),n&&n.length>1&&r.a.createElement("div",null,r.a.createElement("p",null,"The number of crimes per Category"),r.a.createElement(Le.a,{width:c,height:c,data:n},r.a.createElement(xe.a,{dataKey:"category"}),r.a.createElement(ke.a,{type:"number",yAxisId:0}),r.a.createElement(Ce.a,null),r.a.createElement(Se.a,{stroke:"#f5f5f5"}),r.a.createElement(Ne.a,{type:"monotone",dataKey:"count",fill:"#387908",yAxisId:0}))),a&&r.a.createElement("div",null,r.a.createElement("p",null,"The ratio of crimes per Outcome"),r.a.createElement(Le.a,{width:c,height:c,data:a},r.a.createElement(xe.a,{dataKey:"outcome"}),r.a.createElement(ke.a,{type:"number",yAxisId:0}),r.a.createElement(Ce.a,null),r.a.createElement(Se.a,{stroke:"#f5f5f5"}),r.a.createElement(Ne.a,{type:"monotone",dataKey:"count",fill:"#38abc8",yAxisId:0}))))};function Re(){var e=Object(b.a)(["\n  .tr {\n    line-height: 2rem;\n\n    .th, .td {\n      padding: 0 0.5rem;\n      font-size: smaller;\n    }\n  }\n"]);return Re=function(){return e},e}var De=f.a.div(Re()),Ie=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dateGraph,n=e.categoryGraph,a=e.outcomeGraph,c=e.news;return r.a.createElement(De,null,t&&r.a.createElement("section",null,r.a.createElement("h3",null,"Graphs"),r.a.createElement(_e,{date:t,category:n,outcome:a})),c&&r.a.createElement("section",null,r.a.createElement("h3",null,"News"),r.a.createElement(je,{news:c})))}}]),t}(r.a.PureComponent),Pe=Object(i.b)(function(e){return Object(E.a)({},e.analyse)})(Ie);function Te(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  header {\n    order: 0;\n    background: darkslateblue;\n    color: yellow;\n    line-height: 2rem;\n    height: 4rem;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    position: relative;\n\n    .title {\n      text-align: center;\n      font-size: larger;\n      font-weight: bolder;\n    }\n\n    .email {\n      text-align: right;\n      padding: 0 1rem;\n      font-size: small;\n    }\n  }\n\n  aside {\n    order: 1;\n  }\n\n  .map {\n    order: 2;\n    height: 32.5rem;\n    z-index: 0;\n\n    .leaflet-container {\n      height: 100%;\n      margin: 0.5rem;\n      border-radius: 1.5rem;\n    }\n  }\n\n  .analyse {\n    order: 3;\n    padding: 1rem;\n  }\n"]);return Te=function(){return e},e}var Ge=f.a.div(Te()),Me=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(Ge,null,r.a.createElement("header",null,r.a.createElement("div",{className:"title"},"CRIME MAP"),r.a.createElement("div",{className:"email"},r.a.createElement("span",{className:"smaller"},"Contact me: melancholy14@hotmail.com"))),r.a.createElement("aside",null,r.a.createElement(le,null)),r.a.createElement("main",{className:"map"},r.a.createElement(Oe,null)),r.a.createElement("main",{className:"analyse"},r.a.createElement(Pe,null)))}}]),t}(a.Component),Ue={availability:[],category:[],crimes:[],message:"",loading:!1};var Fe={latlng:{lat:51.505,lng:-.09},circles:[]};var qe={dateGraph:[],categoryGraph:[],outcomeGraph:[],crimeTable:[],news:[],message:""};var ze=Object(l.combineReducers)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(E.a)({},e,{latlng:t.data});case D:return Object(E.a)({},e,{circles:t.data});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(E.a)({},e,t.data,{loading:!0});case O:return Object(E.a)({},e,{availability:t.data});case x:return Object(E.a)({},e,{category:t.data});case S:return Object(E.a)({},e,{crimes:t.data,loading:!1});case j:case k:case A:return Object(E.a)({},e,{message:t.message,loading:!1});default:return e}},analyse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(E.a)({},e,t.data);case ve:return Object(E.a)({},e,{news:t.data});case Ee:case be:return Object(E.a)({},e,{message:t.message});default:return e}}}),He=n(15),We=n.n(He),Ke=n(12),Ye=n(185),Be=n(186),Qe=n.n(Be),Ve={police:"https://data.police.uk/api",guardian:"https://content.guardianapis.com/search",mapquest:"https://open.mapquestapi.com/geocoding/v1"},Je={guardian:"36ecd8a8-f9be-4d95-9643-4095fae41301",mapquest:"7qAl9AvfefdHSIOkkLrVvSc466ZoHenG"};function Xe(e){return Ze.apply(this,arguments)}function Ze(){return(Ze=Object(Ye.a)(We.a.mark(function e(t){var n,a;return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t);case 4:return(n=new Error).response=t,e.prev=6,e.next=9,t.json();case 9:throw a=e.sent,n.body=a,n.message=a.message||t.statusText,n;case 15:throw e.prev=15,e.t0=e.catch(6),e.t0;case 18:case"end":return e.stop()}},e,this,[[6,15]])}))).apply(this,arguments)}function $e(e){return 204===e.status||205===e.status?null:e}function et(e,t){return Qe.a.get(e,t).then(Xe).then($e)}var tt=We.a.mark(ct),nt=We.a.mark(ot),at=We.a.mark(it),rt=We.a.mark(lt);function ct(){var e;return We.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,et("".concat(Ve.police,"/crimes-street-dates"));case 3:return e=t.sent,t.next=6,Object(Ke.c)((a=e.data,{type:O,data:a}));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(Ke.c)((n=t.t0.message,{type:j,message:n}));case 13:case"end":return t.stop()}var n,a},tt,this,[[0,8]])}function ot(){var e,t,n,a,r=arguments;return We.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=e.date,c.prev=1,n=t||(new Date).toLocaleDateString(),c.next=5,et("".concat(Ve.police,"/crime-categories?date=").concat(n));case 5:return a=c.sent,c.next=8,Object(Ke.c)((i=a.data,{type:x,data:i}));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),console.log(c.t0),c.next=15,Object(Ke.c)((o=c.t0.message,{type:k,message:o}));case 15:case"end":return c.stop()}var o,i},nt,this,[[1,10]])}function it(){var e,t,n,a,r,c,o,i,l,s=arguments;return We.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:{},t=e.data,n=t.url,a=t.dates,u.prev=1,u.next=4,Object(Ke.d)(function(e){return e.map.latlng});case 4:if(r=u.sent,c=r.lat,o=r.lng,!(c&&o&&a&&a.length>0)){u.next=18;break}return u.next=10,Object(Ke.a)(a.map(function(e){return et("".concat(Ve.police,"/crimes-street/").concat(n,"?lat=").concat(c,"&lng=").concat(o,"&date=").concat(e))}));case 10:return i=u.sent,l=i&&i.reduce(function(e,t){return Object(y.a)(e).concat(Object(y.a)(t&&t.data))},[]),u.next=14,Object(Ke.c)(L(l));case 14:return u.next=16,Object(Ke.c)(I(l));case 16:u.next=20;break;case 18:return u.next=20,Object(Ke.c)(N("There is no position info! Please, click the map and tell me where you want to know"));case 20:u.next=27;break;case 22:return u.prev=22,u.t0=u.catch(1),console.log(u.t0),u.next=27,Object(Ke.c)(N(u.t0.message));case 27:case"end":return u.stop()}},at,this,[[1,22]])}function lt(){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.b)(ct);case 2:return e.next=4,Object(Ke.b)(ot);case 4:return e.next=6,Object(Ke.e)(w,ot);case 6:return e.next=8,Object(Ke.e)(C,it);case 8:case"end":return e.stop()}},rt,this)}var st=n(134),ut=We.a.mark(ht),mt=We.a.mark(pt),dt=We.a.mark(gt);function ht(e){var t,n,a,r,c,o;return We.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.id,i.prev=1,i.next=4,Object(Ke.d)(function(e){return e.search.crimes});case 4:return n=i.sent,a=n&&n.filter(function(e){var n=e.location,a=(n=void 0===n?{}:n).street;return(a=void 0===a?{}:a).id===t}),r=Object.entries(a.reduce(function(e,t){return Object(E.a)({},e,Object(v.a)({},t.month,e[t.month]>=0?e[t.month]+1:0))},{})).map(function(e){var t=Object(st.a)(e,2);return{date:t[0],count:t[1]}}),c=Object.entries(a.reduce(function(e,t){return Object(E.a)({},e,Object(v.a)({},t.category,e[t.category]>=0?e[t.category]+1:0))},{})).map(function(e){var t=Object(st.a)(e,2);return{category:t[0],count:t[1]}}),o=Object.entries(a.reduce(function(e,t){var n=t.outcome_status,a=t.outcomes,r=(a=void 0===a?n||{}:a).category;return r?Object(E.a)({},e,Object(v.a)({},r,e[r]>=0?e[r]+1:0)):e},{})).map(function(e){var t=Object(st.a)(e,2);return{outcome:t[0],count:t[1]}}),i.next=11,Object(Ke.c)({type:ge,data:{dateGraph:r,categoryGraph:c,outcomeGraph:o}});case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(1),i.next=17,Object(Ke.c)((l=i.t0.message,{type:be,message:l}));case 17:case"end":return i.stop()}var l},ut,this,[[1,13]])}function pt(e){var t,n,a,r,c,o,i,l,s,u,m,d,h,p,g,b,f;return We.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=e.latlng,v.prev=1,n="".concat(Ve.mapquest,"/reverse?key=").concat(Je.mapquest,"&location=").concat(t.join(","),"&includeRoadMetadata=true&includeNearestIntersection=true"),v.next=5,et(n);case 5:return a=v.sent,r=a.data,c=(r=void 0===r?{}:r).results,o=(void 0===c?[]:c)[0].locations,i=(void 0===o?[]:o)[0],l=i.street,s=i.adminArea5,u=i.postalCode,m="".concat(s," AND ").concat(l||u),v.next=14,Object(Ke.d)(function(e){return e.search.dates});case 14:return d=v.sent,h="".concat(Ve.guardian,"?q=").concat(m,"&from-date=").concat(d[0],"-01&api-key=").concat(Je.guardian),v.next=18,et(h);case 18:return p=v.sent,g=p.data,b=(g=void 0===g?{}:g).response.results,(f=void 0===b?[]:b).sort(function(e,t){return e.webPublicationDate.localeCompare(t.webPublicationDate)}),v.next=25,Object(Ke.c)({type:ve,data:f});case 25:v.next=32;break;case 27:return v.prev=27,v.t0=v.catch(1),console.error(v.t0),v.next=32,Object(Ke.c)((E=v.t0.message,{type:Ee,message:E}));case 32:case"end":return v.stop()}var E},mt,this,[[1,27]])}function gt(){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.e)(pe,ht);case 2:return e.next=4,Object(Ke.e)(fe,pt);case 4:case"end":return e.stop()}},dt,this)}var bt=We.a.mark(ft);function ft(){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.a)([lt,gt].map(Ke.b));case 2:case"end":return e.stop()}},bt,this)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var vt=Object(s.a)(),Et=Object(l.createStore)(ze,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(vt)));vt.run(ft),o.a.render(r.a.createElement(i.a,{store:Et},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,2,1]]]);
//# sourceMappingURL=main.ffe128b4.chunk.js.map