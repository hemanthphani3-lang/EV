// InnoVibe Service Worker for Clean URLs & Cache Busting
self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Intercept document navigations for clean URLs and cache-busting
    if (url.origin === location.origin && event.request.mode === 'navigate') {
        let pathname = url.pathname;
        
        // Map root / to /index
        if (pathname === '/') {
            pathname = '/index';
        } else if (pathname.endsWith('/') && pathname !== '/') {
            pathname = pathname.slice(0, -1);
        }
        
        const cleanPages = ['/about', '/services', '/blog', '/article', '/membership', '/contact', '/index', '/amc'];
        
        // Handle pages without .html extension
        if (cleanPages.includes(pathname)) {
            const fetchUrl = pathname + '.html?v=' + Date.now();
            event.respondWith(
                fetch(fetchUrl).catch(() => {
                    return fetch(event.request);
                })
            );
        }
        // Handle pages with .html extension directly
        else if (pathname.endsWith('.html')) {
            const pageWithoutExt = pathname.slice(0, -5);
            if (cleanPages.includes(pageWithoutExt)) {
                const fetchUrl = pathname + '?v=' + Date.now();
                event.respondWith(
                    fetch(fetchUrl).catch(() => {
                        return fetch(event.request);
                    })
                );
            }
        }
    }
});
