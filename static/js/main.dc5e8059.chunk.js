(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,n){e.exports=n(466)},264:function(e,t,n){},466:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(96),o=n.n(c),i=n(43),l=n(19),s=n(256),u=n(245),d=(n(264),n(38)),m=n(39),p=n(44),h=n(40),f=n(45),b=n(12),g=n(13);function v(){var e=Object(b.a)(["\n    order: 0;\n    background: darkslateblue;\n    color: yellow;\n    line-height: 2rem;\n    height: 4rem;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    position: relative;\n\n    .title {\n      text-align: center;\n      font-size: larger;\n      font-weight: bolder;\n    }\n\n    .email {\n      text-align: right;\n      padding: 0 1rem;\n      font-size: small;\n    }\n"]);return v=function(){return e},e}var y=g.a.header(v()),E=function(){return r.a.createElement(y,null,r.a.createElement("div",{className:"title"},"CRIME MAP"),r.a.createElement("div",{className:"email"},r.a.createElement("span",{className:"smaller"},"Contact me: melancholy8914@gmail.com")))},O=n(35),x=n(18),w="containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS",j="containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE",k="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST",S="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS",C="containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE",A="containers/SearchPage/actions/SEARCH_REQUEST",N="containers/SearchPage/actions/SEARCH_SUCCESS",L="containers/SearchPage/actions/SEARCH_FAILURE";function _(e){return{type:N,data:e}}function R(e){return{type:L,message:e}}var I=n(61),P={url:"all-crime",name:"All crime"},D={"all-crime":"#d17f68","anti-social-behaviour":"#73b638","bicycle-theft":"#a45dcf",burglary:"#5fbc6e","criminal-damage-arson":"#c0489a",drugs:"#4b7d3c","other-theft":"#666dc6","possession-of-weapons":"#d99938","public-order":"#5e99d2",robbery:"#cc4f32",shoplifting:"#49b9a9","theft-from-the-person":"#c7496a","vehicle-crime":"#adac4d","violent-crime":"#c581bb","other-crime":"#8b6c2f"},T=(n(64),"containers/MapPage/actions/SAVE_LOCATION"),M="containers/MapPage/actions/INITIAL_CRIME_CIRCLES",U="containers/MapPage/actions/FILTER_CRIME_CIRCLES";function $(e){return{type:T,data:e}}function z(e){var t=e.reduce(function(e,t){var n=t.category,a=t.location,r=(a=void 0===a?{}:a).latitude,c=a.longitude,o=a.street,i=void 0===o?{}:o;return e[i.id]?Object(x.a)({},e,Object(I.a)({},i.id,Object(x.a)({},e[i.id],{count:e[i.id].count+1}))):Object(x.a)({},e,Object(I.a)({},i.id,{category:n,fillColor:D[n],street:i,count:1,latlng:[parseFloat(r),parseFloat(c)]}))},{}),n=Object.values(t),a=Math.max.apply(Math,Object(O.a)(n.map(function(e){return e.count}))),r=n.map(function(e){return Object(x.a)({},e,{opacity:(t=e.count/a,.25*t+.75),radius:function(e){return 225*e+25}(e.count/a)});var t});return{type:M,data:r}}function F(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n\n  .modal-title {\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 4.5rem;\n    height: 3rem;\n    background-color: black;\n    color: white;\n    vertical-align: middle;\n    line-height: 3rem;\n    text-align: center;\n\n    @media screen and (min-width: 426px) {\n      top: 7rem;\n    }\n\n    @media screen and (min-width: 768px) {\n      right: 10%;\n      left: 10%;\n    }\n\n    .title {\n      display: inline-block;\n      width: calc(100% - 2rem);\n    }\n\n    .close {\n      display: inline-block;\n      width: 2rem;\n      font-size: large;\n      font-weight: bold;    \n      border: 0;\n      background-color: black;\n      color: white;\n    }\n  }\n\n  .modal-main {\n    position: fixed;\n    background: white;\n    min-height: 10rem;\n    // height: calc(50% - 6rem);\n    overflow: auto;\n    top: 7.5rem;\n    left: 0;\n    right: 0;\n    \n    @media screen and (min-width: 426px) {\n      top: 10rem;\n    }\n\n    @media screen and (min-width: 768px) {\n      right: 10%;\n      left: 10%;\n    }\n\n    &.fixed-bottom {\n      bottom: 6.5rem;\n\n      @media screen and (min-width: 426px) {\n        bottom: 10rem;\n      }\n    }\n  }\n\n  .modal-footer {\n    position: fixed;\n    background-color: white;\n    padding: 0.5rem;\n    right: 0;\n    left: 0;\n    text-align: right;\n\n    bottom: 4rem;\n    @media screen and (min-width: 426px) {\n      bottom: 6.5rem;\n      padding: 1rem;\n      right: 10%;\n      left: 10%;\n    }\n    \n    border-top: 1px dotted black;\n\n    .close {\n      border: none;\n      font-size: large;\n      background: transparent;\n    }\n  }\n"]);return F=function(){return e},e}var q=g.a.div(F()),G=function(e){var t=e.title,n=e.show,a=e.onClose,c=e.fixedBottom,o=void 0!==c&&c,i=e.children;return r.a.createElement(q,{className:"display-".concat(n?"block":"none")},t&&r.a.createElement("div",{className:"modal-title"},r.a.createElement("div",{className:"title"},t),a&&!o&&r.a.createElement("button",{className:"close",onClick:a},"X")),r.a.createElement("div",{className:"modal-main ".concat(o?"fixed-bottom":"")},i),a&&o&&r.a.createElement("div",{className:"modal-footer"},a&&r.a.createElement("button",{className:"close",onClick:a},"Close")))};function H(){var e=Object(b.a)(["\n  margin: 0.5rem auto;\n  display: table;\n\n  box-shadow: 1.5px 2px 1px 1px;\n  border-radius: 0.5rem;\n  width: -webkit-fill-available;\n  padding: 0.5rem;\n\n  .tr {\n    display: table-row;\n  }\n\n  .th {\n    display: table-cell;\n    font-weight: 600;\n    width: 4rem;\n  }\n\n  .td {\n    display: table-cell;\n  }\n"]);return H=function(){return e},e}var J=g.a.div(H()),B=function(e){var t=e.children;return r.a.createElement("div",{className:"th"},t)},W=function(e){var t=e.children;return r.a.createElement("div",{className:"td"},t)},K=function(e){var t=e.children;return r.a.createElement("div",{className:"tr"},t)},Y=function(e){var t=e.children;return r.a.createElement(J,{className:"table"},t)},V=n(247);function Q(){var e=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n\n  & > div {\n    margin: 15rem auto;\n  }\n"]);return Q=function(){return e},e}var X=g.a.div(Q()),Z=function(e){var t=e.loading;return r.a.createElement(X,{className:"display-".concat(t?"block":"none")},r.a.createElement(V.HashLoader,{color:"#fff",loading:t}))},ee=n(0),te=n.n(ee);function ne(){var e=Object(b.a)(["\n  margin: 1rem;\n  padding: 1rem 0.5rem;\n"]);return ne=function(){return e},e}var ae=g.a.div(ne()),re=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).toggleModal=function(){return e.setState({show:!e.state.show})},e.state={show:!1},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){e.message!==this.props.message&&this.toggleModal()}},{key:"render",value:function(){return r.a.createElement(G,{title:"Something goes wrong",show:this.state.show,onClose:this.toggleModal},r.a.createElement(ae,null,this.props.message))}}]),t}(r.a.PureComponent);re.propTyeps={message:te.a.string};var ce=re,oe=n(78);function ie(){var e=Object(b.a)(["\n  border: 1px solid lightgray;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  min-width: 5rem;\n  background-color: white;\n  font-family: inherit;\n"]);return ie=function(){return e},e}g.a.select(ie());function le(){var e=Object(b.a)(["\n  background-color: black;\n  color: white;\n  font-weight: bolder;\n  padding: 0.3rem 1rem;\n  border: 0;\n  border-radius: 0.5rem;\n  min-height: 1.5rem;\n  font-family: inherit;\n"]);return le=function(){return e},e}var se=g.a.button(le()),ue=function(e){var t=e.onClick,n=e.className,a=e.children,c=Object(oe.a)(e,["onClick","className","children"]);return r.a.createElement(se,Object.assign({onClick:t,className:n},c),a)};function de(){var e=Object(b.a)(["\n  .tabs {\n    overflow: hidden;\n    background-color: #f1f1f1;\n    border: 1px solid #ccc;\n\n    button {\n      background-color: inherit;\n      float: left;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      padding: 14px 16px;\n      transition: 0.3s;\n\n      &:hover {\n        background-color: #ddd;\n      }\n\n      .active {\n        background-color: #ccc;\n      }\n    }\n  }\n\n  .tab {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n\n    &.active {\n      display: block;\n    }\n  }\n"]);return de=function(){return e},e}var me=g.a.div(de()),pe=(r.a.Component,n(471)),he=n(476),fe=n(478);function be(){var e=Object(b.a)(["\n  border: 1px solid lightgray;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  min-width: 5rem;\n  font-family: inherit;\n"]);return be=function(){return e},e}var ge=Object(g.a)(fe.a)(be()),ve={Text:function(e){return r.a.createElement(ge,Object.assign({component:"input",type:"text"},e))},Select:function(e){var t=e.options,n=Object(oe.a)(e,["options"]);return r.a.createElement(ge,Object.assign({component:"select"},n),t&&t.map(function(e){var t=e.value,n=e.text,a=void 0===n?t:n;return r.a.createElement("option",{key:t,value:t},a)}))},Checkbox:function(e){return r.a.createElement(fe.a,Object.assign({component:"input",type:"checkbox"},e))}};function ye(){var e=Object(b.a)(["\n  padding: 0.5rem;\n\n  & > label {\n    font-size: smaller;\n    text-transform: capitalize;\n    font-weight: bold;\n  }\n\n  &.select {\n    padding: 0.25rem 0.5rem;\n  }\n\n  &.whole-row {\n    grid-column-start: 1;\n    grid-column-end: 3;\n\n    .each-crime {\n      display: inline-block;\n\n      min-width: 50%;\n      @media screen and (max-width: 400px) {\n        min-width: 75%;\n      }\n      @media screen and (min-width: 768px) {\n        min-width: calc(100%/3);\n      }\n      @media screen and (min-width: 1024px) {\n        min-width: 25%;\n      }\n\n      font-size: small;\n      line-height: 1rem;\n      vertical-align: middle;\n\n      label {\n        font-size: smaller;\n        font-weight: bolder;\n      }\n\n      .color {\n        width: 0.75rem;\n        height: 0.75rem;\n        display: inline-block;\n        border-radius: 0.5rem;\n        margin: 0 0.3rem;\n      }\n    }\n\n    button {\n      width: 100%;\n    }\n  }\n"]);return ye=function(){return e},e}var Ee=g.a.div(ye()),Oe=function(e){var t=e.id,n=e.className,a=e.children;return r.a.createElement(Ee,{id:t,className:n},a)};function xe(){var e=Object(b.a)(["\n  display: grid;\n  grid-template-rows: 2rem 2rem auto 2rem;\n  grid-template-columns: 4.5rem auto;\n"]);return xe=function(){return e},e}var we=Object(g.a)(pe.a)(xe()),je=Object(he.a)({form:"search"})(function(e){var t=e.dates,n=e.category,a=e.onCheckCategory,c=e.handleSubmit;return r.a.createElement(we,{onSubmit:c},r.a.createElement(Oe,null,r.a.createElement("label",{htmlFor:"select_date"},"date")),r.a.createElement(Oe,{className:"select",id:"select_date"},r.a.createElement(ve.Select,{name:"minDate",options:t}),r.a.createElement("span",null," ~ "),r.a.createElement(ve.Select,{name:"maxDate",options:t})),r.a.createElement(Oe,null,r.a.createElement("label",{htmlFor:"postcode"},"postcode")),r.a.createElement(Oe,{className:"select"},r.a.createElement(ve.Text,{name:"postcode",id:"postcode"})),r.a.createElement(Oe,{className:"whole-row"},n&&n.map(function(e){var t=e.url,n=e.checked,c=e.name;return r.a.createElement("div",{className:"each-crime",key:t},r.a.createElement(ve.Checkbox,{name:t,id:"checkbox_".concat(t),onChange:a,checked:n}),r.a.createElement("label",{htmlFor:"checkbox_".concat(t)},c),t!==P.url&&r.a.createElement("span",{className:"color",style:{backgroundColor:D[t]}}))})),r.a.createElement(Oe,{className:"whole-row"},r.a.createElement(ue,{type:"submit"},"SEARCH")))});function ke(){var e=Object(b.a)(["\n  order: 1;\n  margin: 0.5rem;\n  padding: 0.5rem;\n"]);return ke=function(){return e},e}var Se=g.a.aside(ke()),Ce=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).checkCategory=function(e,t,a,r){var c=[],o=(c=r===P.url?n.state.checkboxes.map(function(e){return Object(x.a)({},e,{checked:t})}):n.state.checkboxes.map(function(e){return e.url===r?Object(x.a)({},e,{checked:t}):e})).reduce(function(e,t){return t.checked?Object(O.a)(e).concat([t.url]):e},[]);n.props.onFilterCrimeCategory(o),n.setState({checkboxes:c})},n.search=function(e){var t=n.state.date,a=(t=void 0===t?{}:t).dates,r=Object(x.a)({},e,{dates:a});n.props.onSearch(r)},n.state={date:{min:"",max:"",dates:[]},checkboxes:[]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.availability,n=e.category,a=e.crimes,r=this.props,c=r.availability,o=r.category,i=r.crimes;if(JSON.stringify(t)!==JSON.stringify(c)){var l=c.reduce(function(e,t){return{min:e.min&&e.min<t.date?e.min:t.date,max:e.max&&e.max>t.date?e.max:t.date,dates:e.dates?Object(O.a)(e.dates).concat([{value:t.date}]):[{value:t.date}]}},Object(x.a)({},this.state.date));this.setState({date:l})}if(JSON.stringify(n)!==JSON.stringify(o)){var s=this.props.category.reduce(function(e,t){return Object(O.a)(e).concat([Object(x.a)({},t,{checked:!0})])},[]);this.setState({checkboxes:s})}if(JSON.stringify(a)!==JSON.stringify(i)){var u=[P.url].concat(Object(O.a)(i.map(function(e){return e.category}))),d=this.props.category.reduce(function(e,t){return Object(O.a)(e).concat([Object(x.a)({},t,{checked:u.includes(t.url)})])},[]);this.setState({checkboxes:d})}}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.loading,a=this.state,c=a.date.dates,o=a.checkboxes;return r.a.createElement(Se,null,r.a.createElement(je,{dates:c,category:o,onCheckCategory:this.checkCategory,onSubmit:this.search}),r.a.createElement(Z,{loading:n}),r.a.createElement(ce,{message:t}))}}]),t}(r.a.PureComponent);Ce.defaultProps={availability:[],category:[],crimes:[],message:null,loading:!1,onSelectCrimeCategory:function(){},onFilterCrimeCategory:function(){},onSearch:function(){}};var Ae=Object(i.b)(function(e){return Object(x.a)({},e.search)},function(e){return{onSearch:function(t){return e(function(e){var t=e.minDate,n=e.maxDate,a=e.dates,r=e.postcode,c=a[0].value,o=t||c,i=n||c,l=a.reduce(function(e,t){return o<=t.value&&t.value<=i?Object(O.a)(e).concat([t.value]):e},[]).sort(function(e,t){return e.localeCompare(t)});return{type:A,data:{dates:l,postcode:r}}}(t))},onFilterCrimeCategory:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:U,selected:e}}(t))}}})(Ce),Ne=n(477),Le=n(481),_e=n(472),Re=n(482),Ie=n(479),Pe="containers/AnalysePage/LOAD_GRAPHS_REQUEST",De="containers/AnalysePage/LOAD_GRAPHS_SUCCESS",Te="containers/AnalysePage/LOAD_GRAPHS_FAILURE",Me="containers/AnalysePage/LOAD_NEWS_REQUEST",Ue="containers/AnalysePage/LOAD_NEWS_SUCCESS",$e="containers/AnalysePage/LOAD_NEWS_FAILURE",ze="containers/AnalysePage/SAVE_STREET_DATA";function Fe(e){return{type:ze,data:e}}function qe(){var e=Object(b.a)(["\n  order: 2;\n    height: 32.5rem;\n    z-index: 0;\n\n    .leaflet-container {\n      height: 100%;\n      margin: 0.5rem;\n      border-radius: 1.5rem;\n    }\n"]);return qe=function(){return e},e}var Ge=g.a.main(qe()),He=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){return n.props.onSaveLocation(e.latlng)},n.handleLocationFound=function(e){n.setState({hasLocation:!0,latlng:e.latlng}),n.props.onSaveLocation(e.latlng)},n.handleCircle=function(e,t){return function(){n.props.onLoadGraphRequest(e),n.props.onLoadNewsRequest(t)}},n.state={latlng:e.latlng},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.map.leafletElement&&this.map.leafletElement.locate()}},{key:"componentDidUpdate",value:function(e){var t=e.latlng,n=this.props.latlng;t!==n&&this.setState({latlng:n})}},{key:"render",value:function(){var e=this,t=this.props.circles,n=this.state.latlng,a=void 0===n?{}:n;return r.a.createElement(Ge,{className:"map"},r.a.createElement(Ne.a,{center:a,ref:function(t){e.map=t},zoom:13,onClick:this.handleClick,onLocationfound:this.handleLocationFound},r.a.createElement(Le.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a&&r.a.createElement(_e.a,{position:[a.lat,a.lng]},r.a.createElement(Re.a,null,"You clicked here!!\n              Latitude: ".concat(a.lat,"\n              Longitude: ").concat(a.lng))),t&&t.map(function(t){var n=t.latlng,a=t.street,c=t.radius,o=t.count,i=t.opacity,l=void 0===i?.5:i,s=t.fillColor;return r.a.createElement(Ie.a,{fillColor:s,fillOpacity:l,stroke:!1,radius:c,center:n,key:n,onClick:e.handleCircle(a,n)},r.a.createElement(Re.a,null,"Street Id: ".concat(a.id,"\n              Street Name: ").concat(a.name,"\n              Crime Count: ").concat(o)))})))}}]),t}(r.a.PureComponent),Je=Object(i.b)(function(e){return Object(x.a)({},e.map)},function(e){return{onSaveLocation:function(t){return e($(t))},onLoadGraphRequest:function(t){return e({type:Pe,street:t})},onLoadNewsRequest:function(t){return e(function(e){return{type:Me,latlng:e}}(t))}}})(He);function Be(){var e=Object(b.a)(["\n  .table {\n    width: 90%;\n\n    @media screen and (min-width: 768px) {\n      display: inline-table;\n      width: 45%;\n      margin: 0.5rem;\n    }\n  }\n  .tr {\n    line-height: 2rem;\n\n    .th, .td {\n      padding: 0 0.5rem;\n      font-size: smaller;\n    }\n  }\n"]);return Be=function(){return e},e}var We=g.a.div(Be()),Ke=function(e){var t=e.news;return r.a.createElement(We,null,t&&t.map(function(e){var t=e.id,n=e.sectionName,a=e.pillarName,c=e.webTitle,o=e.webUrl,i=e.webPublicationDate;return r.a.createElement(Y,{key:t},r.a.createElement(K,null,r.a.createElement(B,null,"Date"),r.a.createElement(W,null,new Date(i).toLocaleDateString())),r.a.createElement(K,null,r.a.createElement(B,null,"Section"),r.a.createElement(W,null,n)),r.a.createElement(K,null,r.a.createElement(B,null,"Pillar"),r.a.createElement(W,null,a)),r.a.createElement(K,null,r.a.createElement(B,null,"Title"),r.a.createElement(W,null,r.a.createElement("a",{href:o,target:"_new"},c))))}))},Ye=n(473),Ve=n(151),Qe=n(152),Xe=n(467),Ze=n(474),et=n(445),tt=n(475),nt=n(468);function at(){var e=Object(b.a)(["\n  display: inline-block;\n  padding: 0 0.5rem;\n"]);return at=function(){return e},e}var rt=g.a.div(at()),ct=function(e){var t=e.graph,n=(t=void 0===t?{}:t).date,a=t.category,c=t.outcome,o=window.innerWidth+24;return o>=1024?o/=3:o>=768&&(o/=2),o=o-35-12,r.a.createElement("div",null,n&&n.length>0&&r.a.createElement(rt,null,r.a.createElement("p",null,"Number of crimes by date"),r.a.createElement(Ye.a,{width:o,height:o,data:n},r.a.createElement(Ve.a,{dataKey:"date"}),r.a.createElement(Qe.a,{type:"number",yAxisId:0}),r.a.createElement(Xe.a,null),r.a.createElement(Ze.a,{stroke:"#f5f5f5"}),r.a.createElement(et.a,{type:"monotone",dataKey:"count",stroke:"#ff7300",yAxisId:0}))),a&&a.length>1&&r.a.createElement(rt,null,r.a.createElement("p",null,"Number of crimes by category"),r.a.createElement(tt.a,{width:o,height:o,data:a},r.a.createElement(Ve.a,{dataKey:"category"}),r.a.createElement(Qe.a,{type:"number",yAxisId:0}),r.a.createElement(Xe.a,null),r.a.createElement(Ze.a,{stroke:"#f5f5f5"}),r.a.createElement(nt.a,{type:"monotone",dataKey:"count",fill:"#387908",yAxisId:0}))),c&&c.length>0&&r.a.createElement(rt,null,r.a.createElement("p",null,"Number of crimes by outcome"),r.a.createElement(tt.a,{width:o,height:o,data:c},r.a.createElement(Ve.a,{dataKey:"outcome"}),r.a.createElement(Qe.a,{type:"number",yAxisId:0}),r.a.createElement(Xe.a,null),r.a.createElement(Ze.a,{stroke:"#f5f5f5"}),r.a.createElement(nt.a,{type:"monotone",dataKey:"count",fill:"#38abc8",yAxisId:0}))))};function ot(){var e=Object(b.a)(["\n  position: relative;\n  height: 100%;\n\n  .tabs {\n    overflow: hidden;\n    background-color: #f1f1f1;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    button {\n      background-color: inherit;\n      // float: left;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      padding: 14px 16px;\n      transition: 0.3s;\n      font-size: medium;\n\n      &:hover {\n        background-color: #ddd;\n      }\n\n      &.active {\n        background-color: #ccc;\n      }\n    }\n  }\n\n  .tab {\n    display: none;\n    // padding: 6px 12px;\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid #ccc;\n    border-top: none;\n\n    position: absolute;\n    top: 3rem;\n    bottom: 0;\n    overflow: auto;\n\n    animation: fadeEffect 1s;\n    @keyframes fadeEffect {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    &.active {\n      display: block;\n    }\n  }\n"]);return ot=function(){return e},e}var it=g.a.div(ot()),lt=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).toggleShow=function(){return e.setState({show:!e.state.show})},e.select=function(t){return function(){return e.setState({select:t})}},e.state={show:!1,select:0},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(!t.show&&!this.state.show){var n=this.props,a=n.graph,r=n.news;this.setState({show:!!a||!!r})}}},{key:"render",value:function(){var e=this.props,t=e.graph,n=e.news,a=e.street,c=this.state,o=c.show,i=c.select;return r.a.createElement(G,{title:a.name,show:o,onClose:this.toggleShow,fixedBottom:!0},r.a.createElement(it,null,r.a.createElement("div",{className:"tabs"},r.a.createElement("button",{className:"".concat(0===i?"active":""),onClick:this.select(0)},"Graphs"),r.a.createElement("button",{className:"".concat(1===i?"active":""),onClick:this.select(1)},"News")),r.a.createElement("div",{className:"tab ".concat(0===i?"active":"")},r.a.createElement(ct,{graph:t})),r.a.createElement("div",{className:"tab ".concat(1===i?"active":"")},r.a.createElement(Ke,{news:n}))))}}]),t}(r.a.PureComponent),st=Object(i.b)(function(e){return Object(x.a)({},e.analyse)})(lt);function ut(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ut=function(){return e},e}var dt=g.a.div(ut()),mt=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(dt,null,r.a.createElement(E,null),r.a.createElement(Ae,null),r.a.createElement(Je,null),r.a.createElement(st,null))}}]),t}(a.Component),pt=n(30),ht=n.n(pt),ft={availability:[],category:[],crimes:[],message:"",loading:!1};var bt={latlng:{lat:51.505,lng:-.09},crimes:[],circles:[]};var gt={graph:{date:[],category:[],outcome:[]},street:{},news:[],message:""};var vt=n(480),yt=Object(l.combineReducers)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return ht()(e,{latlng:{$set:t.data}});case M:return ht()(e,{crimes:{$set:t.data},circles:{$set:t.data}});case U:var n=e.crimes.filter(function(e){var n=e.category;return t.selected.includes(n)});return ht()(e,{circles:{$set:n}});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return ht()(e,{$merge:Object(x.a)({},t.data,{loading:!0})});case w:return ht()(e,{availability:{$set:t.data}});case S:return ht()(e,{category:{$set:t.data}});case N:return ht()(e,{crimes:{$set:t.data},loading:{$set:!1}});case j:case C:return ht()(e,{message:{$set:t.message}});case L:return ht()(e,{message:{$set:t.message},loading:{$set:!1}});default:return e}},analyse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return ht()(e,{graph:{$set:t.data}});case Ue:return ht()(e,{news:{$set:t.data}});case ze:return ht()(e,{street:{$set:t.data}});case $e:case Te:return ht()(e,{message:{$set:t.message}});default:return e}},form:vt.a}),Et=n(21),Ot=n.n(Et),xt=n(14),wt=n(253),jt=n(254),kt=n.n(jt),St={police:"https://data.police.uk/api",guardian:"https://content.guardianapis.com/search",mapquest:"https://open.mapquestapi.com/geocoding/v1"},Ct={guardian:"36ecd8a8-f9be-4d95-9643-4095fae41301",mapquest:"7qAl9AvfefdHSIOkkLrVvSc466ZoHenG"};function At(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=Object(wt.a)(Ot.a.mark(function e(t){var n,a;return Ot.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t);case 4:return(n=new Error).response=t,e.prev=6,e.next=9,t.json();case 9:throw a=e.sent,n.body=a,n.message=a.message||t.statusText,n;case 15:throw e.prev=15,e.t0=e.catch(6),e.t0;case 18:case"end":return e.stop()}},e,this,[[6,15]])}))).apply(this,arguments)}function Lt(e){return 204===e.status||205===e.status?null:e}function _t(e,t){return kt.a.get(e,t).then(At).then(Lt)}var Rt=Ot.a.mark(Tt),It=Ot.a.mark(Mt),Pt=Ot.a.mark(Ut),Dt=Ot.a.mark($t);function Tt(){var e;return Ot.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_t("".concat(St.police,"/crimes-street-dates"));case 3:return e=t.sent,t.next=6,Object(xt.c)((a=e.data,{type:w,data:a}));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(xt.c)((n=t.t0.message,{type:j,message:n}));case 13:case"end":return t.stop()}var n,a},Rt,this,[[0,8]])}function Mt(){var e,t,n,a,r=arguments;return Ot.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t=e.date,c.prev=1,n=t||(new Date).toLocaleDateString(),c.next=5,_t("".concat(St.police,"/crime-categories?date=").concat(n));case 5:return a=c.sent,c.next=8,Object(xt.c)((i=a.data,{type:S,data:i}));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),console.log(c.t0),c.next=15,Object(xt.c)((o=c.t0.message,{type:C,message:o}));case 15:case"end":return c.stop()}var o,i},It,this,[[1,10]])}function Ut(){var e,t,n,a,r,c,o,i,l,s,u,d,m,p,h,f,b=arguments;return Ot.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return e=b.length>0&&void 0!==b[0]?b[0]:{},t=e.data,t.urls,n=t.dates,a=t.postcode,g.prev=1,g.next=4,Object(xt.d)(function(e){return e.map.latlng});case 4:if(r=g.sent,c=r.lat,o=r.lng,i=c,l=o,!a){g.next=18;break}return s={options:{},location:{street:"",city:"",state:"",postalCode:a,adminArea1:"GB"}},g.next=13,_t("".concat(St.mapquest,"/address?key=").concat(Ct.mapquest,"&json=").concat(JSON.stringify(s)));case 13:u=g.sent,d=u.data,(m=(d=void 0===d?{}:d).results)&&m.length>0&&(p=m[0].locations,i=p[0].latLng.lat,l=p[0].latLng.lng);case 18:if(!(i&&l&&n&&n.length>0)){g.next=31;break}return g.next=21,Object(xt.a)(n.map(function(e){return _t("".concat(St.police,"/crimes-street/all-crime?lat=").concat(i,"&lng=").concat(l,"&date=").concat(e))}));case 21:return h=g.sent,f=h&&h.reduce(function(e,t){return Object(O.a)(e).concat(Object(O.a)(t&&t.data))},[]),g.next=25,Object(xt.c)($({lat:i,lng:l}));case 25:return g.next=27,Object(xt.c)(_(f));case 27:return g.next=29,Object(xt.c)(z(f));case 29:g.next=33;break;case 31:return g.next=33,Object(xt.c)(R("There is no position info! Please, click the map and tell me where you want to know"));case 33:g.next=40;break;case 35:return g.prev=35,g.t0=g.catch(1),console.log(g.t0),g.next=40,Object(xt.c)(R(g.t0.message));case 40:case"end":return g.stop()}},Pt,this,[[1,35]])}function $t(){return Ot.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.b)(Tt);case 2:return e.next=4,Object(xt.b)(Mt);case 4:return e.next=6,Object(xt.e)(k,Mt);case 6:return e.next=8,Object(xt.e)(A,Ut);case 8:case"end":return e.stop()}},Dt,this)}var zt=n(198),Ft=Ot.a.mark(Ht),qt=Ot.a.mark(Jt),Gt=Ot.a.mark(Bt);function Ht(e){var t,n,a,r,c,o,i,l;return Ot.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.street,s.prev=1,s.next=4,Object(xt.d)(function(e){return e.search.crimes});case 4:return n=s.sent,a=n&&n.filter(function(e){var n=e.location,a=(n=void 0===n?{}:n).street;return(a=void 0===a?{}:a).id===t.id}),r=a.reduce(function(e,t){return Object(x.a)({},e,Object(I.a)({},t.month,e[t.month]?e[t.month]+1:1))},{}),s.next=9,Object(xt.d)(function(e){return e.search.dates});case 9:return c=s.sent,o=c.map(function(e){return{date:e,count:r[e]||0}}),i=Object.entries(a.reduce(function(e,t){return Object(x.a)({},e,Object(I.a)({},t.category,e[t.category]?e[t.category]+1:1))},{})).map(function(e){var t=Object(zt.a)(e,2);return{category:t[0],count:t[1]}}),l=Object.entries(a.reduce(function(e,t){var n=t.outcome_status,a=t.outcomes,r=(a=void 0===a?n||{}:a).category;return r?Object(x.a)({},e,Object(I.a)({},r,e[r]?e[r]+1:1)):e},{})).map(function(e){var t=Object(zt.a)(e,2);return{outcome:t[0],count:t[1]}}),s.next=15,Object(xt.c)({type:De,data:{date:o,category:i,outcome:l}});case 15:return s.next=17,Object(xt.c)(Fe(t));case 17:s.next=23;break;case 19:return s.prev=19,s.t0=s.catch(1),s.next=23,Object(xt.c)((u=s.t0.message,{type:Te,message:u}));case 23:case"end":return s.stop()}var u},Ft,this,[[1,19]])}function Jt(e){var t,n,a,r,c,o,i,l,s,u,d,m,p,h,f,b,g;return Ot.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=e.latlng,v.prev=1,n="".concat(St.mapquest,"/reverse?key=").concat(Ct.mapquest,"&location=").concat(t.join(","),"&includeRoadMetadata=true&includeNearestIntersection=true"),v.next=5,_t(n);case 5:return a=v.sent,r=a.data,c=(r=void 0===r?{}:r).results,o=(void 0===c?[]:c)[0].locations,i=(void 0===o?[]:o)[0],l=i.street,s=i.adminArea5,u=i.postalCode,d="".concat(s," AND ").concat(l||u),v.next=14,Object(xt.d)(function(e){return e.search.dates});case 14:return m=v.sent,p="".concat(St.guardian,"?q=").concat(d,"&from-date=").concat(m[0],"-01&api-key=").concat(Ct.guardian),v.next=18,_t(p);case 18:return h=v.sent,f=h.data,b=(f=void 0===f?{}:f).response.results,(g=void 0===b?[]:b).sort(function(e,t){return t.webPublicationDate.localeCompare(e.webPublicationDate)}),v.next=25,Object(xt.c)({type:Ue,data:g});case 25:v.next=32;break;case 27:return v.prev=27,v.t0=v.catch(1),console.error(v.t0),v.next=32,Object(xt.c)((y=v.t0.message,{type:$e,message:y}));case 32:case"end":return v.stop()}var y},qt,this,[[1,27]])}function Bt(){return Ot.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(Pe,Ht);case 2:return e.next=4,Object(xt.e)(Me,Jt);case 4:case"end":return e.stop()}},Gt,this)}var Wt=Ot.a.mark(Kt);function Kt(){return Ot.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([$t,Bt].map(xt.b));case 2:case"end":return e.stop()}},Wt,this)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Yt=Object(s.a)(),Vt=Object(l.createStore)(yt,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(Yt)));Yt.run(Kt),o.a.render(r.a.createElement(i.a,{store:Vt},r.a.createElement(mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t){}},[[257,2,1]]]);
//# sourceMappingURL=main.dc5e8059.chunk.js.map