"use strict";var precacheConfig=[["/portfolio/index.html","26165df0565437c86970e2d17c31a17e"],["/portfolio/static/js/main.1db5b041.js","d96ffff531c96672ad019419cf93d583"],["/portfolio/static/media/bg.a791b152.svg","a791b152ee591c27fbc427be3e423b3e"],["/portfolio/static/media/css3.549a6229.svg","549a622977d50faeddb7b632ff5ce375"],["/portfolio/static/media/docker.401c1129.svg","401c1129c65e5153faf30cb24d7994af"],["/portfolio/static/media/firebase-colored.d1842f48.svg","d1842f486fefbea89874f12978dae490"],["/portfolio/static/media/firebase.e9cdd2bc.svg","e9cdd2bc0f0aef5628e8add4568908f9"],["/portfolio/static/media/gatsby-colored.d7e3f6a5.svg","d7e3f6a5cb4139709c53a5b4b96480fb"],["/portfolio/static/media/gatsby.f6e89b0c.svg","f6e89b0cb7b9a5d54458e6f31185527f"],["/portfolio/static/media/git.088b353a.svg","088b353a6de2a9a915553b352dd1ad4c"],["/portfolio/static/media/github.ff539b9a.svg","ff539b9afb4e6ca5115e02636ef5f73c"],["/portfolio/static/media/graphql.1.4ce0c89b.svg","4ce0c89b94bb9448bf15c160d899ad0d"],["/portfolio/static/media/graphql.95b7b0f1.svg","95b7b0f1ce8d3672e9134c2c7e369bea"],["/portfolio/static/media/html5.d84af59a.svg","d84af59a7dc3b0182ef6b1e07397bdde"],["/portfolio/static/media/javascript.a2353fc4.svg","a2353fc4a6b1cc6766b9d1b0840bdb96"],["/portfolio/static/media/jest.29f543bc.svg","29f543bc463c75aec07f013b01645d8f"],["/portfolio/static/media/mongodb.da9fcada.svg","da9fcada818eb6ac13e02efd3e7e1749"],["/portfolio/static/media/netlify.bdc63c82.svg","bdc63c827221d9cfb29113a5a914e0e2"],["/portfolio/static/media/node-dot-js.86579c7f.svg","86579c7f36cbb4dcfd90d241ab2380b4"],["/portfolio/static/media/npm.2a9af637.svg","2a9af63746293eed9296ac02aaae122f"],["/portfolio/static/media/profile-picture.eb92e734.jpeg","eb92e7346920d408f9340b51660f49c8"],["/portfolio/static/media/react-colored.57f85b0f.svg","57f85b0fe7f2174bbab4a1fdd65ba02b"],["/portfolio/static/media/react.41a1ccf8.svg","41a1ccf81c3a047f65b55e4e6796d827"],["/portfolio/static/media/redux.16f98df2.svg","16f98df260d74109943bc8862bd19e82"],["/portfolio/static/media/vscode.28258949.svg","282589492edfa43b888c8165de4e0f46"],["/portfolio/static/media/webpack.a19d580b.svg","a19d580b61cd1d0409efd100a0d95977"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});