(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),i=(a(29),a(6)),c=a(7),s=a(9),m=a(8),u=a(10),h=(a(30),a(12)),p=(a(31),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("p",null,"Welcome at my web page"))}),d=(a(32),[{name:"Home",path:"/",exact:!0},{name:"To Do App",path:"/ToDoApp"},{name:"Api",path:"/Api"},{name:"About Me",path:"/AboutMe"},{name:"Admin",path:"/Admin"}]),f=function(){var e=d.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(h.b,{to:e.path,exact:!!e.exact&&e.exact},e.name," "))});return l.a.createElement("nav",{className:"main"},l.a.createElement("ul",null,e))},E=a(1),g=(a(38),function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement("h1",null,"To Do List!"),l.a.createElement("p",{className:"number1"},"To do lists don't need to be complicated\u2014plenty of people use a pen and paper for the job without any problem. And yet a new to do list app seems to come out every day. Why? Because keeping track of your tasks is an intensely personal thing, and people will reject anything that doesn't feel right pretty much instantly. That makes it hard to find the right app."),l.a.createElement("p",{className:"number2"},"To that end, we've been hard at work researching the best to do apps, trying to find the best ones for various use cases. We started by finding the best apps for every platform: Android, Windows, macOS, and iPhone/iPad. Research for these pieces was exhaustive: We tried the top-rated apps in every respective app store, spent a lot of time reading other roundups, and spent way too much time migrating our personal to do lists from one app to another. And now we\u2019re offering you what we feel is the cream of the crop."),l.a.createElement("h2",null,"What Makes a Great To Do List App?"),l.a.createElement("p",{className:"number1"},"When it comes to do lists everyone has different criteria. We kept this in mind as we tested applications and noticed a few features that made apps stand out. The best to do list apps:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Make it fast to add and organize tasks. Ideally a task is added and categorized in a couple taps or keystrokes."),l.a.createElement("li",null,"Offer multiple ways to organize your tasks. Tags, lists, projects, and due dates are all helpful, and the best apps offer at least a few categories like this."),l.a.createElement("li",null,"Remind you about self-imposed deadlines. Notifications, widgets, emails\u2014the best applications make it obvious when something needs to be completed."),l.a.createElement("li",null,"Offer clean user interfaces. Well-designed to do apps fit into your workflow so you can get back to what you're supposed to be doing."),l.a.createElement("li",null,"Sync between every platform you use. Which platforms is going to depend on what you personally use, but we didn't consider anything that doesn't sync between desktop and mobile.")),l.a.createElement("p",{className:"number1"},"We tried to find the best applications that balance these things in various ways. None of these apps will be right for everyone, but hopefully one of them is right for you. Let's dive in."))}),b=a(18),y=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleCheck=function(e){a.setState({checked:e.target.checked})},a.handleClick=function(){var e=a.state,t=e.text,n=e.checked,l=e.date;t.length>3?a.props.add(t,l,n)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("The task must be longer than 3 letters/numbers")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",l.a.createElement("div",{className:"addtask"},l.a.createElement("input",{type:"text",placeholder:"Add task",value:this.state.text,onChange:this.handleChange}),l.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleCheck}),l.a.createElement("label",{htmlFor:"important",className:"priority"},"Priority")," ",l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"date"},"until when to do it"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),l.a.createElement("button",{onClick:this.handleClick},"Add"))}}]),t}(n.Component)),v=function(e){var t={color:"red"},a=e.task,n=a.text,r=a.date,o=a.id,i=a.active,c=a.important,s=a.finishDate;if(i)return l.a.createElement("div",{className:"task"},l.a.createElement("p",null,l.a.createElement("strong",{style:c?t:null},n)," - to ",l.a.createElement("span",null,r),l.a.createElement("button",{onClick:function(){return e.change(o)}},"Has Been Done"),l.a.createElement("button",{onClick:function(){return e.delete(o)}},"X")));var m=new Date(s).toLocaleString();return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",{style:c?t:null},n),l.a.createElement("em",null,"(do to ",r,")")," ",l.a.createElement("br",null),l.a.createElement("span",null,"-confirmation of impementation ",m),l.a.createElement("button",{onClick:function(){return e.delete(o)}},"X")))},w=function(e){var t=e.task.filter(function(e){return e.active}),a=e.task.filter(function(e){return!e.active});a.sort(function(e,t){return t.finishDate-e.finishDate}),t.length>=2&&t.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0});var n=t.map(function(t){return l.a.createElement(v,{key:t.id,task:t,delete:e.delete,change:e.change})}),r=a.map(function(t){return l.a.createElement(v,{key:t.id,task:t,delete:e.delete,change:e.change})});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"active"},l.a.createElement("h1",null,"Tasks to do:"),n.length>0?n:l.a.createElement("h1",null,"No more tasks to do")),l.a.createElement("div",{className:"done"},l.a.createElement("h1",null,"Tasks done ",l.a.createElement("em",null,"(",a.length,")"),":"),r.length>7?l.a.createElement("h2",null,"the last 7 Tasks are displayed"):"",r.length>0?r.slice(0,5):l.a.createElement("h1",null,"Keep going")))},k=(a(40),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).couter=9,a.state={tasks:[{id:0,text:"Finally play Read Dead Redemtion",date:"2019-08-15",important:!0,active:!0,finishDate:null},{id:1,text:"Make some good things",date:"2020-11-12",important:!1,active:!0,finishDate:null},{id:2,text:"Paint house after last December",date:"2019-09-11",important:!1,active:!0,finishDate:null},{id:3,text:"Make bulk",date:"2019-05-20",important:!0,active:!0,finishDate:null},{id:4,text:"Sell bear",date:"2020-11-12",important:!1,active:!0,finishDate:null},{id:5,text:"Be nice :)",date:"2019-09-11",important:!1,active:!0,finishDate:null},{id:6,text:"Cut my hair!",date:"2019-05-20",important:!0,active:!0,finishDate:null},{id:7,text:"Don't do dumb things",date:"2020-11-12",important:!1,active:!0,finishDate:null},{id:8,text:"Live the whole life!",date:"2019-09-11",important:!1,active:!0,finishDate:null}]},a.deleteTask=function(e){console.log("delete of element with id: "+e);var t=Object(b.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.ChangeTaskStatus=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var l={id:a.couter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(b.a)(e.tasks),[l])}}),!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"todoapp"},l.a.createElement(y,{add:this.addTask}),l.a.createElement("hr",null),l.a.createElement(w,{task:this.state.tasks,delete:this.deleteTask,change:this.ChangeTaskStatus}))}}]),t}(n.Component)),x=function(e){return l.a.createElement("form",{onSubmit:e.submit,className:"api"},l.a.createElement("p",{className:"typein"},"Type in your City: "),l.a.createElement("input",{type:"text",placeholder:"Your City",value:e.text,onChange:e.change}),l.a.createElement("button",null,"chceck for the city"))},D=function(e){var t=e.weather,a=t.date,n=t.city,r=t.sunrise,o=t.sunset,i=t.temp,c=t.pressure,s=t.wind,m=t.err,u=null;if(!m&&n){var h=new Date(1e3*r).toLocaleTimeString(),p=new Date(1e3*o).toLocaleTimeString(),d=Math.floor(i-273.15);u=l.a.createElement("div",{className:"result"},l.a.createElement("p",null,"Data for... ",l.a.createElement("span",null,n,"...")),l.a.createElement("p",null,"Date of day and hour: ",l.a.createElement("span",null,a)),l.a.createElement("p",null,"Sunise: ",l.a.createElement("span",null,h)),l.a.createElement("p",null,"Sunset: ",l.a.createElement("span",null,p)),l.a.createElement("p",null,"Temperature: ",l.a.createElement("span",null,d,"\xb0C")),l.a.createElement("p",null,"Pressure: ",l.a.createElement("span",null,c,"hPa")),l.a.createElement("p",null,"Speed of wind: ",l.a.createElement("span",null,s," M/s")))}return l.a.createElement("div",{className:"result"},m?"There is no data for ".concat(n):u)},N=(a(41),"e03b99ab34f9e87612e569e0ec845e2d"),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:""},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.text,"&APPID=").concat(N);fetch(t).then(function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")}).then(function(e){return e.json()}).then(function(e){var t=(new Date).toLocaleString();a.setState(function(a){return{err:!1,date:t,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed,city:a.text}})}).catch(function(e){console.log(e),a.setState(function(e){return{err:!0,city:e.text}})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"api"},l.a.createElement(x,{submit:this.handleSubmit,text:this.state.text,change:this.handleChange}),l.a.createElement(D,{weather:this.state}))}}]),t}(n.Component),S=(a(42),function(){return l.a.createElement("div",{className:"aboutme"},l.a.createElement("h2",null,"Welcome!"),l.a.createElement("span",null,"My name is Pawe\u0142 and I have been programing since September 2018. Previously I was a YouTuber with over 22k subscribers, but I've met my passion in programming. I really enjoy the fact that I can welcome you at my WebPage."),l.a.createElement("h2",null,"I Love programming!"),l.a.createElement("span",null,"I've met my passion in development and SPA. I know, that it is a tool of future, which coresponds with not-ending learning, but I know that I'll do this and I will try to develop myself in best direction!"),l.a.createElement("h2",null,"I started my path..."),l.a.createElement("span",null,"After finishing 3 online courses from basics of programming I am trying my best to focus on that, because I know that this is what I want to do in future. I also know there is a long, long way ahead of me :) ",l.a.createElement("h2",null,"Enjoy Your Time")))}),C=(a(21),function(){return l.a.createElement("div",{className:"admin"},l.a.createElement("form",null,l.a.createElement("p",null,"Login:"),l.a.createElement("input",{type:"text",placeholder:"podaj login"}),l.a.createElement("p",null,"Password:"),l.a.createElement("input",{type:"password"})),l.a.createElement("button",null,"Submit"))}),T=function(){return l.a.createElement("div",{className:"admin"},l.a.createElement("form",null,l.a.createElement("p",null,"Login:"),l.a.createElement("input",{type:"text",placeholder:"podaj login"}),l.a.createElement("p",null,"Password:"),l.a.createElement("input",{type:"password"})),l.a.createElement("button",null,"Submit"))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{path:"/",component:g,exact:!0}),l.a.createElement(E.a,{path:"/ToDoApp",component:k}),l.a.createElement(E.a,{path:"/AboutMe",component:S}),l.a.createElement(E.a,{path:"/Api",component:j}),l.a.createElement(E.a,{path:"/Admin",component:C}),l.a.createElement(E.a,{path:"/login",component:T}))},A=(a(43),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"left"},l.a.createElement("h2",null,"company name: "),l.a.createElement("hr",null),l.a.createElement("section",{className:"sectionleft"},l.a.createElement("p",null,"Here you can put name of your company. Right now it is empty..."))),l.a.createElement("div",{className:"midleft"},l.a.createElement("h2",null,"products: "),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://pl.wikipedia.org/wiki/Opel_Astra_H"},"car")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.harley-davidson.com/us/en/motorcycles/2019/softail/fxdr-114.html"},"motorbike"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://store.hp.com/us/en/pdp/hp-laptop-15t-touch-optional-3lm40av-1"},"laptop"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://sprzedajemy.pl/chillblast-fusion-soul-blighter-gaming-pc-rybnik-2-0010c9-nr58515621"},"Personal Computer"),l.a.createElement("br",null)),l.a.createElement("div",{className:"midright"},l.a.createElement("h2",null,"useful links: "),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.google.com/"},"Google")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://reactjs.org/docs/getting-started.html"},"React Getting started"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://fontawesome.com/"},"Font awesome"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://blog.newrelic.com/engineering/8-ways-become-a-better-coder/"},"How to be better"),l.a.createElement("br",null)),l.a.createElement("div",{className:"right"},l.a.createElement("h2",null,"contact: "),l.a.createElement("hr",null),l.a.createElement("ul",{className:"contact"},l.a.createElement("li",null,"Phone number: 012 345 678"),l.a.createElement("li",null,"City: XYZ"),l.a.createElement("li",null,"Street: XYZ"),l.a.createElement("li",null,"Contact: XYZ@gmail.com"))))}),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement(p,null)),l.a.createElement("main",null,l.a.createElement("aside",null,l.a.createElement(f,null)),l.a.createElement("section",{className:"page"},l.a.createElement(O,null))),l.a.createElement("footer",null,l.a.createElement(A,null))))}}]),t}(n.Component);o.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7675c344.chunk.js.map