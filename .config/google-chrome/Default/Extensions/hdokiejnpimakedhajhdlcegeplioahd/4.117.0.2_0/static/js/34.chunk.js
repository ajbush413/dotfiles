(window["webpackJsonp@lastpass/extension-ui"]=window["webpackJsonp@lastpass/extension-ui"]||[]).push([[34],{1044:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function n(){var e=[],n=[];return{getState:function(){return a(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,i.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return a(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!a(e))throw new Error("Expected the nextReducer to be a function.")}}}var o=r.applyMiddleware.apply(void 0,l(e))(n);return o()}};var o,r=n(81),c=n(1045),i=(o=c)&&o.__esModule?o:{default:o};function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=function(e){return"function"===typeof e}},1045:function(e,t){var n,o,r=Function.prototype,c=Object.prototype,i=r.toString,l=c.hasOwnProperty,a=i.call(Object),s=c.toString,u=(n=Object.getPrototypeOf,o=Object,function(e){return n(o(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=s.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=u(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&i.call(n)==a}},1049:function(e,t){},1050:function(e,t){},1052:function(e,t){},1053:function(e,t){},1457:function(e,t,n){"use strict";n.r(t);n(0);var o=n(1051),r=n(1889),c=n(1250),i=n(1044),l=n.n(i),a=n(6),s=n(28),u=n(1),f={id:0,type:"SetUpEmergencyAccess",visible:!0,completed:null,seenAt:null,color:r.a.GREY},p={hideExpandedSkillInDrawer:jest.fn(),hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openSetupEmergencyAccess:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",(function(){return{useSecondaryOnboardingActions:function(){return p}}})),it("should shallow render the SetUpEmergencyAccess component without crashing",(function(){var e=l()([])({login:{baseUrl:"https://dummy.com"}}),t=Object(o.shallow)(Object(u.jsx)(a.a,{store:e},Object(u.jsx)(c.default,{skill:f,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1)})),it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=false component without crashing and click the CTA",(function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},user:{type:s.a.ENTERPRISE_TRIAL}}),t=Object(o.mount)(Object(u.jsx)(a.a,{store:e},Object(u.jsx)(c.default,{skill:f,expanded:!0,fromAllSkillsDialog:!1})));t.find(".action-cta").at(1).simulate("click"),expect(p.openSetupEmergencyAccess).toHaveBeenCalled(),expect(p.hideExpandedSkillInDrawer).toHaveBeenCalled(),t.unmount()})),it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=true component without crashing and click the CTA",(function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},user:{type:s.a.ENTERPRISE_TRIAL}}),t=Object(o.mount)(Object(u.jsx)(a.a,{store:e},Object(u.jsx)(c.default,{skill:f,expanded:!0,fromAllSkillsDialog:!0})));console.log(t.html()),t.find(".action-cta").at(1).simulate("click"),expect(p.openSetupEmergencyAccess).toHaveBeenCalled(),expect(p.hideSkillDetailsDialog).toHaveBeenCalled(),t.unmount()}))}}]);