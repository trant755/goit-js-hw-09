!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i");i.Notify.init({useIcon:!1});var r={form:document.querySelector(".form"),createBtn:document.querySelector("[type=submit]")},a={};r.form.addEventListener("input",(function(e){a[e.target.name]=e.target.value})),r.form.addEventListener("submit",(function(e){e.preventDefault();var t=0,n=Number(a.delay);setInterval((function(){var e,o,r;(t+=1)>a.amount||((e=t,o=n,r=Math.random()>.3,new Promise((function(t,n){setTimeout((function(){r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3})})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3})})),n+=Number(a.step))}),0)}))}();
//# sourceMappingURL=03-promises.f8285ac7.js.map
