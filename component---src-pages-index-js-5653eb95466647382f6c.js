(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/srX":function(e,t,r){},"7vDJ":function(e){e.exports=JSON.parse('{"data":{"github":{"viewer":{"GQL_store":{"name":"express-react-graphql-online-store","url":"https://github.com/jonbae/express-react-graphql-online-store","description":null,"stargazers":{"totalCount":0},"owner":{"__typename":"GitHub_User","login":"jonbae"}},"clone":{"name":"SheikahNote","url":"https://github.com/jonbae/SheikahNote","description":"SPA inspired by Evernote ","stargazers":{"totalCount":1},"owner":{"__typename":"GitHub_User","login":"jonbae"}},"viz":{"name":"GitCommitment","url":"https://github.com/jonbae/GitCommitment","description":null,"stargazers":{"totalCount":2},"owner":{"__typename":"GitHub_User","login":"jonbae"}},"repositories":{"nodes":[{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"gatsby-personal-site","url":"https://github.com/jonbae/gatsby-personal-site","description":"personal site","stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"gatsbyjs_portfolio_site","url":"https://github.com/jonbae/gatsbyjs_portfolio_site","description":"portfolio site tutorial","stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"yynot","url":"https://github.com/jonbae/yynot","description":"website for why/why not","stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"express-react-graphql-online-store","url":"https://github.com/jonbae/express-react-graphql-online-store","description":null,"stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"graphql-online-store","url":"https://github.com/jonbae/graphql-online-store","description":null,"stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"express-graphql","url":"https://github.com/jonbae/express-graphql","description":null,"stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"Algos","url":"https://github.com/jonbae/Algos","description":"data structures and algorithms","stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jc4883"},"name":"Cleansium","url":"https://github.com/jc4883/Cleansium","description":"Cleansium is a calendar web application that challenges users to build healthier dietary habits over four weeks.","stargazers":{"totalCount":0},"forkCount":0},{"owner":{"__typename":"GitHub_User","login":"jonbae"},"name":"jonbae.github.io","url":"https://github.com/jonbae/jonbae.github.io","description":null,"stargazers":{"totalCount":3},"forkCount":0}]}}}}}')},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function p(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),p()},l.componentDidUpdate=function(){p()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),p()},l.render=function(){return o.createElement(n,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(f,"canUseDOM",c),f}}},DNPW:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("pJeL");function l(e){var t=new Date(e);return t.toLocaleDateString("en-GB",{month:"short"})+" "+t.toLocaleDateString("en-GB",{day:"numeric"})+", "+t.toLocaleDateString("en-GB",{year:"numeric"})}t.a=function(e){var t=e.post,r=Object(i.a)().style;return a.a.createElement("div",{className:"height-full text-left "+("dark"===r?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},a.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},a.a.createElement("h1",{className:"f4 lh-condensed mb-1"},a.a.createElement(o.a,{to:t.fields.slug},t.frontmatter.title))),a.a.createElement("div",{className:"text-gray mb-2 ws-normal"},l(""+t.fields.postDate)))}},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!l(s))return!1;var u=e[s],p=t[s];if(!1===(a=r?r.call(n,u,p,s):void 0)||void 0===a&&u!==p)return!1}return!0}},OnZG:function(e){e.exports=JSON.parse('{"data":{"allDataYaml":{"edges":[{"node":{"topics":[{"name":"Angular","web_url":"https://github.com/topics/angular","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/angular/angular.png"},{"name":"React","web_url":"https://github.com/topics/react","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png"},{"name":"Redux","web_url":"https://github.com/topics/redux","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/redux/redux.png"},{"name":"GraphQL","web_url":"https://github.com/topics/graphql","image_url":"https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png"},{"name":"Ruby on Rails","web_url":"https://github.com/topics/rails","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/rails/rails.png"},{"name":".NET","web_url":"https://github.com/topics/dotnet","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/dotnet/dotnet.png"},{"name":"Sass","web_url":"https://github.com/topics/sass","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/sass/sass.png"},{"name":"Bootstrap","web_url":"https://github.com/topics/bootstrap","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/bootstrap/bootstrap.png"},{"name":"TypeScript","web_url":"https://github.com/topics/typescript","image_url":"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/typescript/typescript.png"}]}}]}}}')},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("/srX"),r("Bl7J")),i=r("pJeL"),l=r("a5BB"),c=r("7vDJ"),s=(r("f3/d"),r("6phC")),u=r.n(s);var p=function(e){var t=e.repository,r=Object(i.a)().style;return a.a.createElement("div",{className:"github-component height-full text-left "+("dark"===r?"box-shadow":"border border-gray-light")+" bg-white rounded-1 p-3"},a.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},a.a.createElement("h1",{className:"f4 lh-condensed mb-1"},a.a.createElement("a",{href:t.url},a.a.createElement("span",{className:"text-normal"},t.owner.login," /"),t.name))),a.a.createElement("div",{className:"text-gray mb-2 ws-normal"},a.a.createElement(u.a,{text:t.description||""})),a.a.createElement("div",{className:"d-flex f6"},a.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},a.a.createElement("svg",{className:"octicon octicon-star mr-1",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},a.a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),t.stargazers.totalCount),a.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},a.a.createElement("svg",{className:"octicon octicon-git-branch mr-1",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16","aria-hidden":"true"},a.a.createElement("path",{fillRule:"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),t.forkCount)))};var f=function(){var e=Object(i.a)().style,t=c.data.github.viewer,r=(t.repositories,[t.GQL_store,t.clone,t.viz]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Projects"),a.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"GitHub repositories that I've built."),a.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},r.map((function(e,t){return a.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},a.a.createElement(p,{repository:e}))}))))},m=r("OnZG");var d=function(e){var t=e.topic;return a.a.createElement(a.a.Fragment,null,t.web_url?a.a.createElement("a",{href:t.web_url,className:"github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5"},t.image_url?a.a.createElement("img",{src:t.image_url,width:"64",height:"64",className:"mx-auto rounded-1 mb-3",alt:t.name}):a.a.createElement("div",{className:"bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3",style:{width:"64px",height:"64px",lineHeight:"64px"}},"#"),a.a.createElement("p",{className:"f3 lh-condensed text-center link-gray-dark mb-0 mt-1"},t.name),t.description&&a.a.createElement("p",{className:"f5 text-gray text-center mb-0 mt-1"},t.description)):a.a.createElement("div",{className:"github-component position-relative height-full text-center border border-gray-light rounded-1 bg-white p-5"},t.image_url?a.a.createElement("img",{src:t.image_url,width:"64",height:"64",className:"mx-auto rounded-1 mb-3",alt:t.name}):a.a.createElement("div",{className:"bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3",style:{width:"64px",height:"64px",lineHeight:"64px"}},"#"),a.a.createElement("p",{className:"f3 lh-condensed text-center mb-0 mt-1"},t.name),t.description&&a.a.createElement("p",{className:"f5 text-gray text-center mb-0 mt-1"},t.description)))},T=function(){var e=Object(i.a)().style,t=m.data.allDataYaml.edges[0].node.topics;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Interests"),a.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"Topics that I want to learn more about."),a.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.map((function(e,t){return a.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},a.a.createElement(d,{topic:e}))}))))},h=r("hQ/I"),E=r("DNPW");var b=function(){var e=Object(i.a)().style,t=h.data.allMarkdownRemark.edges;return t.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Thoughts"),a.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"Articles I've written."),a.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.map((function(e,t){return a.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},a.a.createElement(E.a,{post:e.node}))})))):null},g=r("glku"),y=r("TJpk"),A=r.n(y);var _=function(){var e=g.data.github.viewer.name;return a.a.createElement(A.a,{htmlAttributes:{lang:"en"},title:e})},v=r("lU3/");t.default=function(){var e=Object(i.a)().style,t=Object(v.a)().layout;return a.a.createElement(o.a,null,a.a.createElement(_,null),"stacked"===t?a.a.createElement("div",{className:"container-lg py-5 p-responsive text-center"},a.a.createElement(l.a,{metaData:!0}),a.a.createElement("div",{className:"my-6"},a.a.createElement(f,null)),a.a.createElement("div",{className:"my-6"},a.a.createElement(T,null)),a.a.createElement("div",{className:"my-6"},a.a.createElement(b,null))):a.a.createElement("div",{className:"d-md-flex "+("dark"!==e&&"border-md-bottom")},a.a.createElement("div",{className:"flex-self-stretch "+("dark"===e?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-5"},a.a.createElement(l.a,{metaData:!0})),a.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9 px-4 py-5 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===e?"#2f363d":"#fafbfc"}},a.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},a.a.createElement(f,null),a.a.createElement(T,null)))))}},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=p(r("q1tI")),i=p(r("17x9")),l=p(r("8+s/")),c=p(r("bmMU")),s=r("v1p5"),u=r("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,h,E,b=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(T=b,E=h=function(e){function t(){return m(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=l,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),h.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=T.peek,h.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var l,c,s,u=n(t),p=n(r);if(u&&p){if((c=t.length)!=r.length)return!1;for(l=c;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(u!=p)return!1;var f=t instanceof Date,m=r instanceof Date;if(f!=m)return!1;if(f&&m)return t.getTime()==r.getTime();var d=t instanceof RegExp,T=r instanceof RegExp;if(d!=T)return!1;if(d&&T)return t.toString()==r.toString();var h=a(t);if((c=h.length)!==a(r).length)return!1;for(l=c;0!=l--;)if(!o.call(r,h[l]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(l=c;0!=l--;)if(!("_owner"===(s=h[l])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},glku:function(e){e.exports=JSON.parse('{"data":{"github":{"viewer":{"name":"Jonathan Bae"}}}}')},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"hQ/I":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Welcome to Jekyll2!","published":true},"fields":{"slug":"/2019/01/29/hello-world/","postDate":"2019-01-29"},"html":"<p><strong>Hello world</strong>, this is my first Jekyll blog post.</p>\\n<p>I hope you like it!</p>"}}]}}}')},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=c(r("q1tI")),i=c(r("MgzW")),l=r("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=h(e,l.TAG_NAMES.TITLE),r=h(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},T=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),c=0;c<o.length;c++){var s=o[c],u=(0,i.default)({},a[s],n[s]);a[s]=u}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},E=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){E(e)}),0)}),b=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,p=e.styleTags,f=e.title,m=e.titleAttributes;N(l.TAG_NAMES.BODY,n),N(l.TAG_NAMES.HTML,a),w(f,m);var d={baseTag:R(l.TAG_NAMES.BASE,r),linkTags:R(l.TAG_NAMES.LINK,o),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,c),scriptTags:R(l.TAG_NAMES.SCRIPT,u),styleTags:R(l.TAG_NAMES.STYLE,p)},T={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,T,h)},S=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),N(l.TAG_NAMES.TITLE,t)},N=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var p=o.indexOf(s);-1!==p&&o.splice(p,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},x=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,a=C(r,n),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=O(r),o=S(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){_&&y(_),e.defer?_=g((function(){v(e,(function(){_=null}))})):(v(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,p=e.title,f=void 0===p?"":p,m=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,n),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,a,n),link:x(l.TAG_NAMES.LINK,o,n),meta:x(l.TAG_NAMES.META,i,n),noscript:x(l.TAG_NAMES.NOSCRIPT,c,n),script:x(l.TAG_NAMES.SCRIPT,s,n),style:x(l.TAG_NAMES.STYLE,u,n),title:x(l.TAG_NAMES.TITLE,{title:f,titleAttributes:m},n)}},t.reducePropsToState=function(e){return{baseTag:d([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:h(e,l.HELMET_PROPS.DEFER),encode:h(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=A}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-5653eb95466647382f6c.js.map