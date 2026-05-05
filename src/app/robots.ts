import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/_next/', '/api/'],
        },
        sitemap: 'https://shashidhar-portfolio.netlify.app/sitemap.xml',
    }
}
