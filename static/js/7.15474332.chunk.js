(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{551:function(t,e,i){},584:function(t,e,i){"use strict";i.r(e);var n=i(334),s=i(7),o=i(8),a=i(10),p=i(9),r=i(11),l=i(0),h=i.n(l),u=i(550),c=i.n(u),d=(i(551),function(t){function e(){var t,i;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(i=Object(a.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).handleClickToPause=function(){i.anim.isPaused?i.anim.play():i.anim.pause()},i}return Object(r.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.options,i=t.eventListeners;console.log("Lottie.componentDidMount",i,this.props);var s=e.loop,o=e.autoplay,a=e.animationData,p=e.rendererSettings,r=e.segments;this.options={container:this.el,renderer:"svg",loop:Boolean(s),autoplay:Boolean(o),segments:Boolean(r),animationData:a,rendererSettings:p},this.options=Object(n.a)({},this.options,e),this.anim=c.a.loadAnimation(this.options),this.registerEvents(i)}},{key:"componentWillUpdate",value:function(t,e,i){this.options.animationData===t.options.animationData&&this.options.path===t.options.path||(this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options=Object(n.a)({},this.options,t.options),this.anim=c.a.loadAnimation(this.options),this.registerEvents(t.eventListeners))}},{key:"componentDidUpdate",value:function(t,e,i){console.log("Lottie.componentDidUpdate",this.props.eventListeners,this.props),this.props.isStopped?this.stop():this.props.segments?this.playSegments():this.play(),this.pause(),this.setSpeed(),this.setDirection()}},{key:"componentWillUnmount",value:function(){console.log("Lottie.componentWillUnmount",this.props.eventListeners,this.props),this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options.animationData=null,this.options.path=null,this.anim=null}},{key:"setSpeed",value:function(){this.anim.setSpeed(this.props.speed)}},{key:"setDirection",value:function(){this.anim.setDirection(this.props.direction)}},{key:"play",value:function(){this.anim.play()}},{key:"playSegments",value:function(){this.anim.playSegments(this.props.segments)}},{key:"stop",value:function(){this.anim.stop()}},{key:"pause",value:function(){this.props.isPaused&&!this.anim.isPaused?this.anim.pause():!this.props.isPaused&&this.anim.isPaused&&this.anim.pause()}},{key:"destroy",value:function(){this.anim.destroy()}},{key:"registerEvents",value:function(t){var e=this;t&&t.forEach(function(t){e.anim.addEventListener(t.eventName,t.callback)})}},{key:"deRegisterEvents",value:function(t){var e=this;t&&t.forEach(function(t){e.anim.removeEventListener(t.eventName,t.callback)})}},{key:"render",value:function(){var t=this,e=this.props,i=e.width,s=e.height,o=e.ariaRole,a=e.ariaLabel,p=e.isClickToPauseDisabled,r=e.title,l=function(t){return"number"===typeof t?"".concat(t,"px"):t||"100%"},u=Object(n.a)({width:l(i),height:l(s),overflow:"hidden",margin:"0 auto",outline:"none"},this.props.style),c=p?function(){return null}:this.handleClickToPause;return h.a.createElement("div",{ref:function(e){t.el=e},style:u,onClick:c,title:r,role:o,"aria-label":a,tabIndex:"0"})}}]),e}(h.a.Component));d.defaultProps={eventListeners:[],isStopped:!1,isPaused:!1,speed:1,ariaRole:"button",ariaLabel:"animation",isClickToPauseDisabled:!1,title:""},e.default=d}}]);
//# sourceMappingURL=7.15474332.chunk.js.map