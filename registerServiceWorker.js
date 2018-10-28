// Source: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// A service worker is a script your browser runs in the background that PWAs use
// for offline experience and periodic sync. To run our app in an offline environment,
// we need to cache its static assets and find a solution to check the network status
// and updates periodically
const isProduction = process.env.NODE_ENV === 'production';
const serviceWorker = 'serviceWorker' in navigator;
const register = isProduction && serviceWorker;

export function registerServiceWorker () {
  if (serviceWorker) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('registration', registration)
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

export function unregisterServiceWorker () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
