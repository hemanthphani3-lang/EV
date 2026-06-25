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
        
        const cleanPages = ['/about', '/services', '/blog', '/article', '/membership', '/contact', '/index'];
        if (cleanPages.includes(pathname)) {
            // Force browser to fetch the fresh layout by adding a timestamp parameter to the fetch URL
            const fetchUrl = pathname + '.html?v=' + Date.now();
            event.respondWith(
                fetch(fetchUrl).catch(() => {
                    // Fallback to default request if fetch fails (e.g. offline)
                    return fetch(event.request);
                })
            );
        }
    }
});
