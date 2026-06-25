// InnoVibe Service Worker for Clean URLs
self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Intercept document navigations for clean URLs
    if (url.origin === location.origin && event.request.mode === 'navigate') {
        let pathname = url.pathname;
        
        // Remove trailing slash if present
        if (pathname.endsWith('/') && pathname !== '/') {
            pathname = pathname.slice(0, -1);
        }
        
        const cleanPages = ['/about', '/services', '/blog', '/article', '/membership', '/contact', '/index'];
        if (cleanPages.includes(pathname)) {
            event.respondWith(
                fetch(pathname + '.html' + url.search + url.hash)
            );
        }
    }
});
