(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(13),o=n.n(c),r=n(8),i=n(11),u=n(4),j=(n(29),n(30),n(31),n.p+"static/media/muslim-woman.948c95bb.png"),l=n(0);var d=Object(u.b)((function(e){var t=e.authedUser,n=e.users;return{authedUserId:t.id,users:n}}))((function(e){var t=e.users[e.authedUserId];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)(r.c,{to:"/dashboard",className:function(e){return"nav__link"+(e.isActive?" active-link":"")},children:Object(l.jsx)("span",{className:"nav__text",children:"Dashboard"})}),Object(l.jsx)(r.c,{to:"/add",className:function(e){return"nav__link"+(e.isActive?" active-link":"")},children:Object(l.jsx)("span",{className:"nav__text",children:"Add Question"})}),Object(l.jsx)(r.c,{to:"/leaderboard",className:function(e){return"nav__link"+(e.isActive?" active-link":"")},children:Object(l.jsx)("span",{className:"nav__text",children:"Leaderboard"})})]}),Object(l.jsxs)("section",{className:"user-section",children:[Object(l.jsxs)("h2",{className:"user-name",children:[t.name||"User Name"," "]}),Object(l.jsx)("img",{src:t.avatarURL||j,alt:"",className:"user-avatar"}),Object(l.jsx)(r.b,{className:"logout__link",to:"/logout",children:"Log out"})]})]})})),b=n(6),h=(n(33),n(3)),O="SET_AUTHED_USER_TO_NULL",m="SET_AUTHED_USER";var x=Object(u.b)((function(e){return{users:e.users}}))((function(e){var t=Object(s.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1],o=Object(h.g)(),r=Object(h.f)();return Object(l.jsxs)("div",{className:"login-page",children:[Object(l.jsx)("h1",{children:"Would you rather? "}),Object(l.jsxs)("form",{action:"",className:"login-form",children:[Object(l.jsx)("h2",{className:"",children:"Login"}),Object(l.jsxs)("select",{className:"select-user",value:a,onChange:function(e){return c(e.target.value)},children:[Object(l.jsx)("option",{value:"",disabled:!0,checked:!0,children:"Select a user"}),e.users&&Object.keys(e.users).map((function(t){var n=e.users[t];return Object(l.jsx)("option",{value:n.id,children:n.name},t)}))]}),Object(l.jsx)("button",{className:"button",type:"submit",onClick:function(t){t.preventDefault(),e.dispatch({type:m,id:a}),"/"===r.pathname?o("/dashboard"):o(r.pathname)},children:"Submit"})]})]})})),p=Object(u.b)(null)((function(e){var t=e.dispatch;return Object(s.useEffect)((function(){t({type:O,id:null})}),[]),Object(l.jsx)(h.a,{to:"/"})})),v=(n(34),n(9)),f=n(2),g=n.p+"static/media/female-avatar.a521eb84.png",q=n.p+"static/media/male-avatar.1d8d364c.png",N=n.p+"static/media/man-avatar.74cc88a2.png",y={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:g,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:q,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:N,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},w={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function T(e){return new Promise((function(t,n){var s=e.author,a=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){w=Object(f.a)(Object(f.a)({},w),{},Object(v.a)({},a.id,a)),y=Object(f.a)(Object(f.a)({},y),{},Object(v.a)({},s,Object(f.a)(Object(f.a)({},y[s]),{},{questions:y[s].questions.concat([a.id])}))),t(a)}),1e3)}))}var k="RECEIVE_USERS",U="ADD_QUESTION_TO_USERS",S="ADD_ANSWER_TO_USERS";var _="ADD_QUESTION",D="ADD_ANSWER",E="RECEIVE_QUESTIONS";function z(e,t){return function(n,s){return function(e){var t=e.authedUser,n=e.questionId,s=e.answerText;return new Promise((function(e,a){setTimeout((function(){y=Object(f.a)(Object(f.a)({},y),{},Object(v.a)({},t,Object(f.a)(Object(f.a)({},y[t]),{},{answers:Object(f.a)(Object(f.a)({},y[t].answers),{},Object(v.a)({},n,s))}))),w=Object(f.a)(Object(f.a)({},w),{},Object(v.a)({},n,Object(f.a)(Object(f.a)({},w[n]),{},Object(v.a)({},s,Object(f.a)(Object(f.a)({},w[n][s]),{},{votes:w[n][s].votes.concat([t])}))))),e({users:y,questions:w})}),500)}))}({authedUser:s().authedUser.id,questionId:t,answerText:e}).then((function(e){var t,s;n((t=e.questions,{type:D,questions:t})),n((s=e.users,{type:S,users:s}))}))}}function A(e,t){return function(n,s){var a=s().authedUser;return T({optionOneText:e,optionTwoText:t,author:a.id}).then((function(e){n({type:_,question:e}),n(function(e){return{type:U,question:e}}(e))}))}}var I=Object(u.b)((function(e){return{userIn:e.authedUser}}))((function(e){var t=Object(h.g)(),n=Object(s.useState)(""),a=Object(b.a)(n,2),c=a[0],o=a[1],r=Object(s.useState)(""),i=Object(b.a)(r,2),u=i[0],j=i[1];return Object(l.jsx)("div",{className:"new-question-page",children:Object(l.jsxs)("form",{action:"",className:"question-form",children:[Object(l.jsx)("h2",{className:"form-title",children:"Add A New Question"}),Object(l.jsx)("p",{className:"form-text",children:"Would you rather..."}),Object(l.jsx)("input",{type:"text",minLength:"5",value:c,onChange:function(e){o(e.target.value)},className:"form-input",placeholder:"First thought ..."}),Object(l.jsx)("span",{className:"break",children:"OR"}),Object(l.jsx)("input",{type:"text",minLength:"5",value:u,onChange:function(e){j(e.target.value)},className:"form-input",placeholder:"Second thought ..."}),Object(l.jsx)("button",{className:"button",onClick:function(n){n.preventDefault(),c.length>5&&u.length>5?(e.dispatch(A(c,u)),t("/dashboard")):alert("Option text should be more than 5 characters")},children:"Submit Question"})]})})})),L=function(){var e=Object(h.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"404 Error"}),Object(l.jsx)("h2",{children:"Page Not Found"}),Object(l.jsx)("button",{className:"button",onClick:function(){e("/dashboard")},children:"Go Back to Dashboard"})]})};n(35);var R=Object(u.b)((function(e){var t=e.authedUser,n=e.users,s=e.questions;return{authedUserId:t.id,users:n,questions:s}}))((function(e){var t=Object(s.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1],o=Object(h.h)().id.slice(3),r=e.questions[o];if(void 0===r)return Object(l.jsx)(L,{});var i=e.users,u=e.authedUserId,j=r?r.author:"",d=r.timestamp,O=new Date(d).toLocaleDateString("en-US"),m=r.optionOne.votes,x=r.optionTwo.votes,p=m.length+x.length;return x.includes(u)||m.includes(u)?Object(l.jsx)("div",{className:"question-page",children:Object(l.jsxs)("div",{className:"question-card",children:[Object(l.jsx)("img",{src:q,alt:"",className:"question-image"}),Object(l.jsx)("h2",{className:"question-user",children:i[j].name||"User name"}),Object(l.jsx)("p",{className:"question-date",children:O||"2020"}),Object(l.jsx)("h2",{children:"Would you rather..."}),Object(l.jsxs)("div",{className:"question-options",children:[Object(l.jsxs)("div",{className:"option-sect",children:[Object(l.jsx)("p",{className:"option-text",children:"Option2: "+r.optionOne.text||!1}),Object(l.jsxs)("div",{className:"question-votes",children:[Object(l.jsx)("span",{className:"question-vote",children:"Votes: "+m.length}),Object(l.jsx)("span",{className:"question-vote",children:"Votes Percent: "+Math.trunc(m.length/p*100)+"%"})]})]}),Object(l.jsxs)("div",{className:"option-sect",children:[Object(l.jsx)("p",{className:"option-text",children:"Option2: "+r.optionTwo.text||!1}),Object(l.jsxs)("div",{className:"question-votes",children:[Object(l.jsx)("span",{className:"question-vote",children:"Votes: "+x.length}),Object(l.jsx)("span",{className:"question-vote",children:"Votes Percent: "+Math.trunc(x.length/p*100)+"%"})]})]})]}),Object(l.jsx)("p",{children:"You voted for "+(m.includes(u)?"Option 1":"Option 2")})]})}):Object(l.jsx)("div",{className:"question-page",children:Object(l.jsxs)("div",{className:"question-card",children:[Object(l.jsx)("img",{src:q,alt:"",className:"question-image"}),Object(l.jsx)("h2",{className:"question-user",children:i[j].name||"User name"}),Object(l.jsx)("p",{className:"question-date",children:O||"2020"}),Object(l.jsx)("h2",{children:"Would you rather..."}),Object(l.jsxs)("select",{className:"select-option",value:a,onChange:function(e){c(e.target.value)},children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Select an option..."}),Object(l.jsx)("option",{value:"optionOne",children:r.optionOne.text||"Be Telepathic"}),Object(l.jsx)("option",{value:"optionTwo",children:r.optionTwo.text||"Be Telekinetic"})]}),Object(l.jsx)("button",{className:"view-button button",onClick:function(){e.dispatch(z(a,o))},children:"Submit Option"})]})})})),C=(n(36),n(37),function(e){var t=e.cardData,n=e.users,s=Object(h.g)(),a=t.id,c=t.author,o=t.timestamp,r=new Date(o).toLocaleDateString("en-US");return Object(l.jsxs)("div",{className:"question-card",children:[Object(l.jsx)("img",{src:n[c].avatarURL||q,alt:"",className:"question-image"}),Object(l.jsx)("h2",{className:"question-user",children:n[c].name||"User name"}),Object(l.jsx)("p",{className:"question-date",children:r||"2020"}),Object(l.jsx)("button",{className:"view-button button",type:"submit",onClick:function(e){e.preventDefault(),s("/question/:id".concat(a))},children:"View Question"})]})});var Q=Object(u.b)((function(e){var t=e.questions,n=e.users,s=e.authedUser;return{answeredQuestions:Object.keys(s).length>0&&Object.keys(n).length>0?Object.keys(n[s.id].answers):{},questions:t,users:n,userIn:null===s}}))((function(e){var t=Object(s.useState)(0),n=Object(b.a)(t,2),a=n[0],c=n[1],o=e.answeredQuestions,r=e.questions,i=e.users,u=Object.keys(r).filter((function(e){return!o.some((function(t){return e===t}))})).map((function(e){return r[e]})).sort((function(e,t){return t.timestamp-e.timestamp})),j=o.map((function(e){return r[e]})).sort((function(e,t){return t.timestamp-e.timestamp}));return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsxs)("div",{className:"categories",children:[Object(l.jsx)("span",{className:"category"+(0===a?" active-category":""),onClick:function(){return c(0)},children:"Unanswered"}),Object(l.jsx)("span",{className:"category"+(1===a?" active-category":""),onClick:function(){return c(1)},children:"Answered"})]}),Object(l.jsx)("div",{className:"card-list",children:0===a?u.map((function(e){return Object(l.jsx)(C,{cardData:e,users:i},e.id)})):j.map((function(e){return Object(l.jsx)(C,{cardData:e,users:i},e.id)}))})]})})),P=(n(38),n(39),function(e){var t=e.userData,n=e.rank,s=Object.keys(t.answers).length,a=t.questions.length;return Object(l.jsxs)("div",{className:"leader-card",children:[Object(l.jsx)("p",{className:"leader-rank leader-text",children:n+1}),Object(l.jsx)("img",{src:t.avatarURL||q,alt:"",className:"leader-image"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"leader-user",children:t.name||"User name"}),Object(l.jsx)("p",{className:"leader-text",children:"Answered questions: "+s}),Object(l.jsx)("p",{className:"leader-text",children:"Asked questions: : "+a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"leader-text",children:"Score"}),Object(l.jsx)("p",{className:"leader-score",children:s+a})]})]})});var V=Object(u.b)((function(e){var t=e.users;return{leadersIds:Object.keys(t).sort((function(e,n){return Object.keys(t[n].answers).length+Object.keys(t[n].questions).length-(Object.keys(t[e].answers).length+Object.keys(t[e].questions).length)})),users:t}}))((function(e){var t=e.leadersIds,n=e.users;e.authedUser;return console.log(n,t),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Leaderboard"}),t.map((function(e,t){return Object(l.jsx)(P,{userData:n[e],rank:t},e)}))]})}));function M(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(f.a)({},w))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(f.a)({},y))}),1e3)}))]).then((function(t){var n,s;e((n=t[1],{type:k,users:n})),e((s=t[0],{type:E,questions:s}))}))}}var W=Object(u.b)((function(e){return{userIn:null===e.authedUser}}))((function(e){Object(s.useEffect)((function(){e.dispatch(M())}),[]);var t=Object(h.f)();return Object(l.jsx)("div",{className:"App",children:e.userIn?Object(l.jsxs)(h.d,{children:[Object(l.jsx)(h.b,{path:"/",element:Object(l.jsx)(x,{})}),Object(l.jsx)(h.b,{path:t.pathname,element:Object(l.jsx)(x,{})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h.d,{children:[Object(l.jsx)(h.b,{exact:!0,path:"/dashboard",element:Object(l.jsx)(Q,{})}),Object(l.jsx)(h.b,{exact:!0,path:"/leaderboard",element:Object(l.jsx)(V,{})}),Object(l.jsx)(h.b,{exact:!0,path:"/add",element:Object(l.jsx)(I,{})}),Object(l.jsx)(h.b,{exact:!0,path:"/question/:id",element:Object(l.jsx)(R,{})}),Object(l.jsx)(h.b,{exact:!0,path:"/logout",element:Object(l.jsx)(p,{})}),Object(l.jsx)(h.b,{exact:!0,path:"/pagenotfound",element:Object(l.jsx)(L,{})}),Object(l.jsx)(h.b,{path:"*",element:Object(l.jsx)(L,{})})]})]})})})),B=n(17),J=function(e){return function(t){return function(n){console.log("The action: ",n);var s=t(n);return console.log("The new state: ",e.getState()),s}}},F=Object(i.a)(B.a,J);var G=n(18);var H=Object(i.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(f.a)(Object(f.a)({},e),{},{id:t.id});case O:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case S:return Object(f.a)(Object(f.a)({},e),t.users);case U:return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t.question.author,Object(f.a)(Object(f.a)({},e[t.question.author]),{},{questions:[].concat(Object(G.a)(e[t.question.author].questions),[t.question.id])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case E:case D:return Object(f.a)(Object(f.a)({},e),t.questions);case _:return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t.question.id,t.question));default:return e}}}),$=Object(i.c)(H,F);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(u.a,{store:$,children:Object(l.jsx)(W,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5d6fd4b4.chunk.js.map