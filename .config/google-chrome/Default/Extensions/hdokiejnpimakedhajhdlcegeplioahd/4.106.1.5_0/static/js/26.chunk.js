(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[26],{1230:function(t,e,n){"use strict";n.r(e);var o=n(1),r=(n(0),n(891)),i=n.n(r),c=n(898),a=n(1616),l=n(1077),u=n(28),s=n(6),f={id:0,type:"AddNote",visible:!0,completed:null,seenAt:null,color:a.a.GREY},d={hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openCreateNotes:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return d}}});var p=i()([])({secondaryOnboarding:{isHowToOpen:!1},user:{type:u.a.ENTERPRISE_TRIAL}});it("should shallow render the AddNote component without crashing",function(){var t=Object(c.shallow)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(l.default,{skill:f,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1)}),it("should mount render the AddNote component without crashing and click the CTA",function(){var t=Object(c.mount)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(l.default,{skill:f,expanded:!0,fromAllSkillsDialog:!1})));t.find(".add-note-button").at(1).simulate("click"),t.unmount(),expect(d.openCreateNotes).toHaveBeenCalled(),expect(d.hideSkillDetailsDialog).toHaveBeenCalled(),expect(d.toggleShowAllSkills).toHaveBeenCalled()})},891:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))(function(){var t=[],n=[];return{getState:function(){return a(e)?e(t):e},getActions:function(){return t},dispatch:function(e){if(!(0,c.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(e));t.push(e);for(var o=0;o<n.length;o++)n[o]();return e},clearActions:function(){t=[]},subscribe:function(t){return a(t)&&n.push(t),function(){var e=n.indexOf(t);e<0||n.splice(e,1)}},replaceReducer:function(t){if(!a(t))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(92),i=n(892),c=(o=i)&&o.__esModule?o:{default:o};var a=function(t){return"function"===typeof t}},892:function(t,e){var n="[object Object]";var o,r,i=Function.prototype,c=Object.prototype,a=i.toString,l=c.hasOwnProperty,u=a.call(Object),s=c.toString,f=(o=Object.getPrototypeOf,r=Object,function(t){return o(r(t))});t.exports=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t))return!1;var e=f(t);if(null===e)return!0;var o=l.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&a.call(o)==u}},896:function(t,e){},897:function(t,e){},899:function(t,e){},900:function(t,e){}}]);