function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function h(){var e=p();if(O(e))return S(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?g(n,i-(e-c)):n}(e))}function S(e){return a=void 0,v&&o?y(e):(o=r=void 0,f)}function T(){var e=p(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:S(p())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");!function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})));console.log(e)}(),y.addEventListener("input",e(t)((function(e){let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(t)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.22e6dfed.js.map