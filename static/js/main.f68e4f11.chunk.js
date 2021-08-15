(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),a=n.n(s),o=(n(84),n(85),n(10)),l=(n(93),n(3)),i=function(){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)(o.p,{dark:!0,expand:"sm",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o.q,{href:"/",children:"Nearby"}),Object(l.jsx)(o.m,{className:"mr-auto",navbar:!0,children:Object(l.jsx)(o.n,{children:Object(l.jsx)(o.o,{href:"https://github.com/saivk7/nearby-dashboard",children:"GitHub"})})})]})}),Object(l.jsx)(o.k,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row row-header",children:Object(l.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(l.jsx)("h1",{children:"Know what's happeing around you with Nearby!"}),Object(l.jsx)("p",{children:"Search for the city you live in and look at the popular events around you! "})]})})})})]})},u=n(31),j=n.n(u),d=n(38),b=n(43),h=n(16),p=n(56),O=n(50),f=n(161),m=n(162),g=n(70),x=n.n(g),v=n(159),y=n(160),w=n(153),S=n(66),N=n.n(S),_=n(67),k=n.n(_);var I={current:null},R=Object(w.a)((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}}));function C(e){e.place;var t=e.setPlace,n=R(),c=r.a.useState(null),s=Object(h.a)(c,2),a=s[0],o=s[1],i=r.a.useState(""),u=Object(h.a)(i,2),j=u[0],b=u[1],p=r.a.useState([]),g=Object(h.a)(p,2),w=g[0],S=g[1],_=r.a.useRef(!1);"undefined"===typeof window||_.current||(document.querySelector("#google-maps")||function(e,t,n){if(t){var c=document.createElement("script");c.setAttribute("async",""),c.setAttribute("id",n),c.src=e,t.appendChild(c)}}("http://maps.googleapis.com/maps/api/js?key=&libraries=places",document.querySelector("head"),"google-maps"),_.current=!0);var C=r.a.useMemo((function(){return k()((function(e,t){I.current.getPlacePredictions(e,t)}),200)}),[]);return r.a.useEffect((function(){var e=!0;if(!I.current&&window.google&&(I.current=new window.google.maps.places.AutocompleteService),I.current){if(""!==j)return C({input:j},(function(n){if(e){var c=[];a&&(c=[a]),n&&(c=[].concat(Object(O.a)(c),Object(O.a)(n))),S(c),console.log("value from search ",a),a&&t((function(){return console.log("set Place Id is called"),a.place_id}))}})),function(){e=!1};S(a?[a]:[])}}),[a,j,C]),Object(l.jsx)(m.a,{id:"google-map-demo",style:{padding:"10px 0px"},getOptionLabel:function(e){return"string"===typeof e?e:e.description},filterOptions:function(e){return e},options:w,autoComplete:!0,includeInputInList:!0,filterSelectedOptions:!0,value:a,onChange:function(e,t){S(t?[t].concat(Object(O.a)(w)):w),o(t)},onInputChange:function(e,t){b(t)},renderInput:function(e){return Object(l.jsx)(f.a,Object(d.a)(Object(d.a)({},e),{},{label:"Select a City",variant:"outlined",fullWidth:!0}))},renderOption:function(e){var t=e.structured_formatting.main_text_matched_substrings,c=N()(e.structured_formatting.main_text,t.map((function(e){return[e.offset,e.offset+e.length]})));return Object(l.jsxs)(v.a,{container:!0,alignItems:"center",children:[Object(l.jsx)(v.a,{item:!0,children:Object(l.jsx)(x.a,{className:n.icon})}),Object(l.jsxs)(v.a,{item:!0,xs:!0,children:[c.map((function(e,t){return Object(l.jsx)("span",{style:{fontWeight:e.highlight?700:400},children:e.text},t)})),Object(l.jsx)(y.a,{children:e.structured_formatting.secondary_text})]})]})}})}var P=function(e){var t=e.place,n=e.setPlace,r=(e.results,e.setResults),s=(e.range,e.setRange),a=Object(c.useState)(t),i=Object(h.a)(a,2),u=i[0],j=i[1];return Object(l.jsxs)(o.h,{onSubmit:function(e){e.preventDefault(),console.log("submit called",e),r(e.target.resultsSelect.value),s(e.target.rangeSelect.value),n(u)},children:[Object(l.jsxs)(o.i,{row:!0,children:[Object(l.jsx)(o.l,{for:"placeName",sm:3}),Object(l.jsx)(o.g,{sm:4,children:Object(l.jsx)(C,{place:u,setPlace:j})})]}),Object(l.jsxs)(o.i,{row:!0,children:[Object(l.jsx)(o.l,{for:"rangeSelect",sm:3,children:"Range in Miles"}),Object(l.jsx)(o.g,{sm:4,children:Object(l.jsxs)(o.j,{type:"select",name:"range",id:"rangeSelect",children:[Object(l.jsx)("option",{children:"10"}),Object(l.jsx)("option",{children:"25"}),Object(l.jsx)("option",{children:"50"}),Object(l.jsx)("option",{children:"100"}),Object(l.jsx)("option",{children:"200"})]})})]}),Object(l.jsxs)(o.i,{row:!0,children:[Object(l.jsx)(o.l,{for:"resultsSelect",sm:3,children:"Results"}),Object(l.jsx)(o.g,{sm:4,children:Object(l.jsxs)(o.j,{type:"select",name:"resultsSelect",id:"resultsSelect",children:[Object(l.jsx)("option",{children:"5"}),Object(l.jsx)("option",{children:"10"}),Object(l.jsx)("option",{children:"25"}),Object(l.jsx)("option",{children:"50"})]})})]}),Object(l.jsx)(o.i,{row:!0,children:Object(l.jsx)(o.g,{sm:{size:10,offset:3},style:{padding:"10px"},children:Object(l.jsx)(o.a,{color:"primary",type:"submit",children:"Submit"})})}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{})]})},E=(n(116),function(e){var t=e.color,n=e.name,r=(e.id,Object(c.useState)(!1)),s=Object(h.a)(r,2),a=s[0],i=s[1],u=function(){return i(!a)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"pin bounce",style:{backgroundColor:t,cursor:"pointer"},id:"id",title:n,onClick:u}),Object(l.jsx)("div",{className:"pulse"}),Object(l.jsxs)(o.r,{placement:"top",isOpen:a,target:"id",toggle:u,children:[Object(l.jsx)(o.t,{children:"Popover Title"}),Object(l.jsx)(o.s,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."})]})]})}),M={10:11,25:10,50:9,100:7.5,200:6.5};function A(e){var t=e.events,n=e.center,r=e.forKey,s=e.range,a=Object(c.useState)(M[s]),o=Object(h.a)(a,2),i=o[0],u=o[1];return Object(c.useEffect)((function(){console.log("simple map render","center",n," key: ",r,"zoom setting to ",M[s]),u(M[s])}),[n.lat,n.lng,s]),Object(l.jsx)("div",{style:{height:"40rem",width:"100%"},children:Object(l.jsx)(p.a,{bootstrapURLKeys:{key:"",libraries:"places"},center:{lat:n.lat,lng:n.lng},defaultZoom:i,onGoogleApiLoaded:function(e){var t=e.map;e.maps;return function(e,t,n,c){console.log("radius is ",c),new google.maps.Circle({strokeColor:"#FF0000",strokeOpacity:.3,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.1,map:e,center:n,radius:c})}(t,0,{lat:n.lat,lng:n.lng},1609*s)},children:t.map((function(e){return Object(l.jsx)(E,{lat:e.lat,lng:e.lon},"marker_"+e.lat+e.lon+Math.random())}))},r)})}n(117);var q=function(e){var t=e.row;return Object(l.jsxs)(o.b,{children:[Object(l.jsx)(o.d,{tag:"h7",style:{color:"white",backgroundColor:"#3f80d4",borderColor:"#99c2f5"},children:t.group_name}),Object(l.jsxs)(o.c,{className:"card-body",children:[Object(l.jsxs)(o.f,{className:"title",children:[" ",new Date(Number.parseInt(t.event_time)).toLocaleDateString()," @ ",new Date(Number.parseInt(t.event_time)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," "]}),Object(l.jsx)(o.e,{className:"card-text",children:t.event_name}),Object(l.jsx)(o.a,{href:t.event_url,target:"_blank",color:"primary",children:"RSVP here!"})]})]})},L=function(e){var t=e.tableRows;return Object(c.useEffect)((function(){console.log("render of talbe componenet",t.length)})),Object(l.jsxs)(o.u,{responsive:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"List of Events"})]})}),t&&Object(l.jsx)("tbody",{children:t.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:t+1}),Object(l.jsx)(q,{row:e})]},"row_"+t)}))})]})},D=function(e){var t={};return e.filter((function(e){return!t.hasOwnProperty(e.group_name)&&(t[e.group_name]=!0,!0)}))},T=function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){var r,s,a,o,l,i,u,d,b,h,p,O,f,m,g,x,v,y,w;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return r=6371e3,s=Math.sin,a=Math.cos,o=Math.acos,l=Math.PI,i=t.lat,u=t.lng,d=1609.34*Number.parseInt(n),b=Number.parseInt(c)+20,h=i-d/r*180/l,p=i+d/r*180/l,O=u-d/r*180/l/a(i*l/180),f=u+d/r*180/l/a(i*l/180),"http://159.65.39.80/data",m="select event_name,event_url,event_time,group_name,sum(case when response='yes' then 1 else 0 end) as response_yes, sum(case when response='no' then 1 else 0 end) as response_no,lon, lat  FROM meetup_table group by event_name,event_url, event_time,group_name,lat, lon having (lat BETWEEN ".concat(h," AND ").concat(p,") AND (lon BETWEEN ").concat(O," AND ").concat(f,") LIMIT ").concat(b),console.log("the formed sql is ",m,"range",d),e.next=18,fetch("http://159.65.39.80/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:m})});case 18:return g=e.sent,e.next=21,g.json();case 21:return x=e.sent,v=x.rows,console.log("resultRows first",v),v.forEach((function(e){e.d=o(s(e.lat*l/180)*s(i*l/180)+a(e.lat*l/180)*a(i*l/180)*a(e.lon*l/180-u*l/180))*r})),y=v.filter((function(e){return e.d<d})).sort((function(e,t){return e.d-t.d})),w=D(y),console.log("resultRows after filtering duplicates",w),e.abrupt("return",w.slice(0,c));case 29:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("ChIJOwg_06VPwokRYv534QaPC8g"),a=Object(h.a)(s,2),o=a[0],i=a[1],u=Object(c.useState)(10),p=Object(h.a)(u,2),O=p[0],f=p[1],m=Object(c.useState)(5),g=Object(h.a)(m,2),x=g[0],v=g[1],y=Object(c.useState)({lat:40.73061,lng:-73.935242}),w=Object(h.a)(y,2),S=w[0],N=w[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(t){var n,c,s,a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="http://159.65.39.80/google?placeId=".concat(t),{},!t){e.next=26;break}return e.prev=3,e.next=6,fetch(n);case 6:if(c=e.sent,console.log("center [before] is ",S),!c.ok){e.next=21;break}return e.next=11,c.json();case 11:return s=e.sent,a=s.data,console.log("data for lat lng from api",a),N((function(e){return e.lat=a.lat,e.lng=a.lng,Object(d.a)({},e)})),console.log("center [after] is ",S,"range",O,"results",x),console.log("calling database for results rows"),e.next=19,T(S,O,x);case 19:o=e.sent,r(o);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),console.log("error fetching lat lon",e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[3,23]])})))).apply(this,arguments)}console.log("main render"),function(t){e.apply(this,arguments)}(o)}),[o,O,x]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row input-row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(P,{place:o,setPlace:i,range:O,results:x,setRange:f,setResults:v})})}),Object(l.jsxs)("div",{className:"row table ",children:[Object(l.jsx)("div",{className:"col col-12 col-sm-12 ",children:Object(l.jsx)(A,{forKey:S.lat+" "+S.lng+"range"+O,events:n,center:S,range:O})}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"col col-12 col-sm-12",children:Object(l.jsx)(L,{tableRows:n})})]})]})};var W=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsx)(F,{})]})};n(118);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root"))},84:function(e,t,n){},85:function(e,t,n){},93:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.f68e4f11.chunk.js.map