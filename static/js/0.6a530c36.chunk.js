(this["webpackJsonparthurdayton116.git.io"]=this["webpackJsonparthurdayton116.git.io"]||[]).push([[0],{117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(1)),a=c(n(123)),u=c(n(14));function c(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)({}),l=i.Provider,s=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(s,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var f=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};f.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=f},119:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(117);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=l(a),c=l(n(122)),i=n(117);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,l=e.components,s=void 0===l?{}:l,f=e.Layout,d=e.layoutProps,m=s[n+"."+t]||s[t]||p[t]||t;return f?((0,c.default)(this,f),u.default.createElement(f,r({components:s},d),u.default.createElement(m,a,i))):u.default.createElement(m,a,i)}}]),t}(a.Component);t.default=(0,i.withMDXComponents)(d)},122:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(t,n,f){if("string"!==typeof n){if(s){var p=l(n);p&&p!==s&&e(t,p,f)}var d=u(n);c&&(d=d.concat(c(n)));for(var m=0;m<d.length;++m){var h=d[m];if(!r[h]&&!o[h]&&(!f||!f[h])){var v=i(n,h);try{a(t,h,v)}catch(y){}}}return t}return t}},123:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(1)),o=a(n(124));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},124:function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=(u(r),u(n(14))),a=u(n(125));u(n(126));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,u,f="__create-react-context-"+(0,a.default)()+"__",p=function(e){function n(){var t,r;c(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return t=r=i(this,e.call.apply(e,[this].concat(a))),r.emitter=s(r.props.value),i(r,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[f]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a===1/u:a!==a&&u!==u)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[f]=o.default.object.isRequired,n);var d=function(t){function n(){var e,r;c(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=i(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},i(r,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[f]?this.context[f].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return d.contextTypes=((u={})[f]=o.default.object,u),{Provider:p,Consumer:d}},e.exports=t.default},125:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(84))},126:function(e,t,n){"use strict";var r=n(127);e.exports=r},127:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},128:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t),n.d(t,"default",(function(){return r}))},177:function(e,t,n){"use strict";var r=n(119);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Repo=t.vpcConcepts=void 0;var o=r(n(128)),a=r(n(1)),u=n(120),c=n(2);const i="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html";t.vpcConcepts=i;const l="https://github.com/arthurdayton116/aws-terraform/tree/main/terraform_vpc";t.Repo=l;t.default=e=>{let t=e.components;(0,o.default)(e,["components"]);return a.default.createElement(u.MDXTag,{name:"wrapper",components:t},a.default.createElement(u.MDXTag,{name:"h4",components:t},"Using maps and for-each to kick it up a notch"),a.default.createElement(u.MDXTag,{name:"p",components:t},"In this post I am going to cover some of the basics of SOMETHING and show how I deploy one using TECHNOLOGY"),a.default.createElement("br",null),a.default.createElement(u.MDXTag,{name:"p",components:t},"For some basic terminology we can look at docs from AWS  - ",a.default.createElement(c.Link,{href:i,target:"_blank"},"Amazon VPC Concepts")),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(u.MDXTag,{name:"hr",components:t}),a.default.createElement(u.MDXTag,{name:"p",components:t},"Text of post"),a.default.createElement(u.MDXTag,{name:"p",components:t},"The following are the key concepts for VPCs:"),a.default.createElement(u.MDXTag,{name:"hr",components:t}),a.default.createElement("br",null),a.default.createElement(u.MDXTag,{name:"h4",components:t},"Header"),a.default.createElement(u.MDXTag,{name:"p",components:t},"Looking at Wikipedia we can see CIDR masks that give us a starting point for planning a network"),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(c.Link,{p:4,href:l,target:"_blank"},"Code located here"),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(u.MDXTag,{name:"p",components:t},"Some code"),a.default.createElement(u.MDXTag,{name:"pre",components:t},a.default.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'provider "aws" {\n  region = "us-west-2"\n}\n')),a.default.createElement(c.Image,{p:4,verticalAlign:"middle",src:"/images/5/frenchy.png"}),a.default.createElement(u.MDXTag,{name:"p",components:t},"Wrap it up"),a.default.createElement("br",null))}}}]);
//# sourceMappingURL=0.6a530c36.chunk.js.map