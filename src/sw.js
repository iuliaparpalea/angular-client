/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app/app-routing.module.ts",
    "revision": "771c4dee79857434938c19b7bb0cdc2f"
  },
  {
    "url": "app/app.component.html",
    "revision": "9e1fcbc60b6ada90f57beb171cd97b16"
  },
  {
    "url": "app/app.component.less",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app/app.component.spec.ts",
    "revision": "e67327467028fe091ccf341c47b81591"
  },
  {
    "url": "app/app.component.ts",
    "revision": "028785f16e5a81639d0506887e3307ca"
  },
  {
    "url": "app/app.module.ts",
    "revision": "dcb9b51bbfb720da10cc294377ad7409"
  },
  {
    "url": "environments/environment.prod.ts",
    "revision": "6de221395114600b523995704b7d1caa"
  },
  {
    "url": "environments/environment.ts",
    "revision": "16d694ab1d706495a17f06f417c2fa9b"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "f1962e24bbc805db54cef941e1c87e2f"
  },
  {
    "url": "karma.conf.js",
    "revision": "34be2a53649f03d8ff405d67aa72e934"
  },
  {
    "url": "main.ts",
    "revision": "a7bac54029a3b858d309f93044e546a9"
  },
  {
    "url": "polyfills.ts",
    "revision": "8e7f6abb3d2dca03b4dbb300e400a880"
  },
  {
    "url": "styles.less",
    "revision": "ac89bfdd6de82636b7680c8b96584c96"
  },
  {
    "url": "test.ts",
    "revision": "3ddc24a1929f2cfe1b835548aaaa54f3"
  },
  {
    "url": "tsconfig.app.json",
    "revision": "7b28dcba28159a67908d09a08e201c15"
  },
  {
    "url": "tsconfig.spec.json",
    "revision": "4709c740bba06f6a698d53b256b4fca8"
  },
  {
    "url": "tslint.json",
    "revision": "41bc41460b24c185914dcde3938c0154"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
