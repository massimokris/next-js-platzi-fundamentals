# Course notes
## Routing

### Static pages
    These pages are create based on the file system automatically by Next
    pages/index.js/ -> site.com/
    pages/about.js -> site.com/about

### Dynamic pages
    These pages are create base on the syntax [].js and to create paths Next use agn the file system
    /pages/user/[name].js/ -> site.com/user/massi

    Also could be without new paths
    ` /pages/[name].js/ -> site.com/massi `

    The tag/identifier between [] is what determine how you could get that tag using 'useRouter' from 'next/router'
    ``` 
    route = useRoute()
    route.query.name
    ```

### How routing works
    Next.js applies by default optimizations such: code spliting, hash assets and SSR

## Prefetching
    Next.js automatically add preteching when you use Link component, making batter user experience for the end user and optimize your webapp

## Debug Next.js
    Enter to chrome://inspect and run "debug": "NODE_OPTIONS='--inspect' next"





