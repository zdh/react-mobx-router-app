(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,a){"use strict";a.r(t);var r,n=a(6),o=a(7),s=a(32),l=a(31),c=a(33),m=a(208),i=a(2),u=a.n(i),p=a(12),h=a(11),d=a(5),f=Object(p.inject)("authStore","store")(r=Object(p.observer)(r=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleUsernameChange=function(e){return a.props.authStore.setUsername(e.target.value)},a.handleEmailChange=function(e){return a.props.authStore.setEmail(e.target.value)},a.handlePasswordChange=function(e){return a.props.authStore.setPassword(e.target.value)},a.handleSubmitForm=function(e){e.preventDefault(),a.props.authStore.register().then(function(){return a.props.store.router.goTo(h.a.home)})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.props.authStore.reset()}},{key:"render",value:function(){var e=this.props.authStore,t=e.values,a=e.errors,r=e.inProgress;return u.a.createElement("div",{className:"auth-page"},u.a.createElement("div",{className:"container page"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},u.a.createElement("h1",{className:"text-xs-center"},"Sign Up"),u.a.createElement("p",{className:"text-xs-center"},u.a.createElement(d.Link,{view:h.a.login,store:this.props.store},"Have an account?")),u.a.createElement(m.a,{errors:a}),u.a.createElement("form",{onSubmit:this.handleSubmitForm},u.a.createElement("fieldset",null,u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Username",value:t.username,onChange:this.handleUsernameChange})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:"Email",value:t.email,onChange:this.handleEmailChange})),u.a.createElement("fieldset",{className:"form-group"},u.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",value:t.password,onChange:this.handlePasswordChange})),u.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:r},"Sign in")))))))}}]),t}(u.a.Component))||r)||r;t.default=f},208:function(e,t,a){"use strict";var r=a(6),n=a(7),o=a(32),s=a(31),l=a(33),c=a(2),m=a.n(c),i=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.errors;return e?m.a.createElement("ul",{className:"error-messages"},Object.keys(e).map(function(t){return m.a.createElement("li",{key:t},t," ",e[t])})):null}}]),t}(m.a.Component);t.a=i}}]);
//# sourceMappingURL=6.cfa6ced5.chunk.js.map