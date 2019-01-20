(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,r){"use strict";r.r(t);var a,s,n=r(94),o=r(6),c=r(7),l=r(32),i=r(31),u=r(33),m=r(208),p=r(2),h=r.n(p),b=r(12),f=r(11),d=Object(b.inject)("userStore")(a=Object(b.observer)(a=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={image:"",username:"",bio:"",email:"",password:""},r.updateState=function(e){return function(t){var a=r.state,s=Object.assign({},a,Object(n.a)({},e,t.target.value));r.setState(s)}},r.submitForm=function(e){e.preventDefault();var t=Object.assign({},r.state);t.password||delete t.password,r.props.onSubmitForm(t)},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.userStore.currentUser&&Object.assign(this.state,{image:this.props.userStore.currentUser.image||"",username:this.props.userStore.currentUser.username,bio:this.props.userStore.currentUser.bio||"",email:this.props.userStore.currentUser.email})}},{key:"render",value:function(){return h.a.createElement("form",{onSubmit:this.submitForm},h.a.createElement("fieldset",null,h.a.createElement("fieldset",{className:"form-group"},h.a.createElement("input",{className:"form-control",type:"text",placeholder:"URL of profile picture",value:this.state.image,onChange:this.updateState("image")})),h.a.createElement("fieldset",{className:"form-group"},h.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Username",value:this.state.username,onChange:this.updateState("username")})),h.a.createElement("fieldset",{className:"form-group"},h.a.createElement("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you",value:this.state.bio,onChange:this.updateState("bio")})),h.a.createElement("fieldset",{className:"form-group"},h.a.createElement("input",{className:"form-control form-control-lg",type:"email",placeholder:"Email",value:this.state.email,onChange:this.updateState("email")})),h.a.createElement("fieldset",{className:"form-group"},h.a.createElement("input",{className:"form-control form-control-lg",type:"password",placeholder:"New Password",value:this.state.password,onChange:this.updateState("password")})),h.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.props.userStore.updatingUser},"Update Settings")))}}]),t}(h.a.Component))||a)||a,g=Object(b.inject)("userStore","authStore","store")(s=Object(b.observer)(s=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(r=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).handleClickLogout=function(){return r.props.authStore.logout().then(function(){return r.props.store.router.goTo(f.a.home)})},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"settings-page"},h.a.createElement("div",{className:"container page"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},h.a.createElement("h1",{className:"text-xs-center"},"Your Settings"),h.a.createElement(m.a,{errors:this.props.userStore.updatingUserErrors}),h.a.createElement(d,{currentUser:this.props.userStore.currentUser,onSubmitForm:function(t){return e.props.userStore.updateUser(t)}}),h.a.createElement("hr",null),h.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.handleClickLogout},"Or click here to logout.")))))}}]),t}(h.a.Component))||s)||s;t.default=g},208:function(e,t,r){"use strict";var a=r(6),s=r(7),n=r(32),o=r(31),c=r(33),l=r(2),i=r.n(l),u=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.errors;return e?i.a.createElement("ul",{className:"error-messages"},Object.keys(e).map(function(t){return i.a.createElement("li",{key:t},t," ",e[t])})):null}}]),t}(i.a.Component);t.a=u}}]);
//# sourceMappingURL=7.e55f6597.chunk.js.map