import { APP_URL } from '@/core/constants'
import type { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${APP_URL}/sitemap.xml`
  }
}
