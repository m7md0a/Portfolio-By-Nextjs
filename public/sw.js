if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>n(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Gqr8SDtjLpmFjglh9bUGE/_buildManifest.js",revision:"87fc43d269cfbf683c3b241e6e7b5bc2"},{url:"/_next/static/Gqr8SDtjLpmFjglh9bUGE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/441-5f11aa49c37fb324.js",revision:"5f11aa49c37fb324"},{url:"/_next/static/chunks/675-94783329a13d0d54.js",revision:"94783329a13d0d54"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-0bd9ec80e456f666.js",revision:"0bd9ec80e456f666"},{url:"/_next/static/chunks/pages/404-e2c009ef5aa70593.js",revision:"e2c009ef5aa70593"},{url:"/_next/static/chunks/pages/_app-0703327189026791.js",revision:"0703327189026791"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-9c2b021b3d041608.js",revision:"9c2b021b3d041608"},{url:"/_next/static/chunks/pages/projects-3677850011cb9745.js",revision:"3677850011cb9745"},{url:"/_next/static/chunks/pages/projects/%5Bname%5D-7b11a99e675201a9.js",revision:"7b11a99e675201a9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/f9e2a2b47c48e8cb.css",revision:"f9e2a2b47c48e8cb"},{url:"/favicon.ico",revision:"342d62bccd8a9b32b3b77fbb0d280f4f"},{url:"/fonts/PlayfairDisplay-VariableFont_wght.ttf",revision:"c1accf346fc37deb1664493a562fff69"},{url:"/icon-192x192.png",revision:"de580843902c6c8243e08992a63a8b0b"},{url:"/icon-256x256.png",revision:"2060b0317db1b88435bfb525207a4bba"},{url:"/icon-384x384.png",revision:"78fa304bd3757cd6f3d9cd11fc388b13"},{url:"/icon-512x512.png",revision:"25f2bb1cb33497b542e1f3929c090d5c"},{url:"/icons/icon-128x128.png",revision:"c699bbeae111e8b4095004aad480e0ec"},{url:"/icons/icon-144x144.png",revision:"842f4291c9d2bcb438e3d39faf5c824e"},{url:"/icons/icon-152x152.png",revision:"0443336ab3f329c4c8e845a0ab58ede8"},{url:"/icons/icon-192x192.png",revision:"539fabf3ec3bfe4f12d2cc1c7397f64e"},{url:"/icons/icon-384x384.png",revision:"a92d8da8575cb58f6237c0ddc61fea71"},{url:"/icons/icon-48x48.png",revision:"6be79ce5dce0d6f778f7d2ab14af3626"},{url:"/icons/icon-512x512.png",revision:"6765d69fcebbe961e38872dba04eb044"},{url:"/icons/icon-72x72.png",revision:"60ca3043ee8db8cc06563a28664ee0a7"},{url:"/icons/icon-96x96.png",revision:"c73e1cc665dffbf8d2a7d0f3b9a14b8c"},{url:"/icons/maskable.png",revision:"539fabf3ec3bfe4f12d2cc1c7397f64e"},{url:"/img/hero-1.jpg",revision:"87fe87b714314b5741e28b112ecfbb87"},{url:"/img/icon-all.png",revision:"e85650f95adf2f39cdb31d5b5ef34f4e"},{url:"/img/notImg.jpg",revision:"b00c341789b4b006ddcc3baea0cc6822"},{url:"/manifest.json",revision:"8216d86261508c1550e9d5450fe3e480"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
