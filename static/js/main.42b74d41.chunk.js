(this["webpackJsonpswaragade.github.io/age-calculator"]=this["webpackJsonpswaragade.github.io/age-calculator"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(7),o=a.n(r),c=a(2),l=a(3),d=a(5),i=a(4),u=a(0),b=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={age:""},e.onSubmitHandler=function(t){e.setState({age:t}),e.props.dobCallback(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"ui segment row center aligned",children:Object(u.jsx)("div",{className:"olive seven wide column center aligned",children:Object(u.jsx)("form",{className:"ui form",children:Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Birth Date"}),Object(u.jsx)("input",{type:"date",value:this.state.age,onChange:function(t){return e.onSubmitHandler(t.target.value)}})]})})})})})}}]),a}(s.a.Component),h=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).getAge=function(){var t=new Date,a=t.getYear(),n=t.getMonth(),s=t.getDate(),r=e.props.dob,o=new Date(r.substring(0,4),r.substring(5,7),r.substring(8,10));if(o>t)return"Please provide past date";console.log("dob",o);var c,l=o.getYear(),d=o.getMonth(),i=o.getDate(),u="",b="",h="",g=a-l,y=0;n>=d?y=n-d:(g--,y=12+n-d);var j=0;return s>=i?j=s-i:(j=31+s-i,--y<0&&(y=11,g--)),u=(c={years:g,months:y,days:j}).years>1?" years":" year",b=c.months>1?" months":" month",h=c.days>1?" days":" day",c.years>0&&c.months>0&&c.days>0?c.years+u+", "+c.months+b+" and "+c.days+h+" old.":0===c.years&&0===c.months&&c.days>0?"Only "+c.days+h+" old!":c.years>0&&0===c.months&&0===c.days?c.years+u+" old. Happy Birthday!!":c.years>0&&c.months>0&&0===c.days?c.years+u+" and "+c.months+b+" old.":0===c.years&&c.months>0&&c.days>0?c.months+b+" and "+c.days+h+" old.":c.years>0&&0===c.months&&c.days>0?c.years+u+" and "+c.days+h+" old.":0===c.years&&c.months>0&&0===c.days?c.months+b+" old.":"Oops! Could not calculate age!"},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"ui segment row center aligned",children:this.props.dob?this.getAge():null})}}]),a}(s.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={dob:null},e.dobCallback=function(t){e.setState({dob:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"ui segment grid center aligned",style:{boxShadow:null,border:"0px"},children:[Object(u.jsx)(b,{dobCallback:this.dobCallback}),this.state.dob?Object(u.jsx)("div",{className:"ui seven wide horizontal divider center aligned",children:"Result"}):null,Object(u.jsx)(h,{dob:this.state.dob})]})}}]),a}(s.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[13,1,2]]]);
//# sourceMappingURL=main.42b74d41.chunk.js.map