# 🚀 Deployment Guide

This guide covers various deployment options for your terminal website, from simple hosting to advanced configurations.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ Node.js 16+ installed
- ✅ Git repository set up
- ✅ All dependencies installed (`npm install`)
- ✅ Configuration updated (`config.json`)
- ✅ Resume PDF added to `public/` directory

## 🎯 Quick Deploy Options

### **1. Vercel (Recommended)**

**Why Vercel?**
- ⚡ Zero configuration
- 🔄 Automatic deployments
- 📱 Optimized for Next.js
- 🌍 Global CDN
- 🔒 SSL certificates included

**Steps:**
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Environment Variables** (if needed)
   ```bash
   # In Vercel dashboard
   NODE_ENV=production
   ```

**Custom Domain:**
- Add custom domain in Vercel dashboard
- Configure DNS records
- SSL certificate automatically provisioned

### **2. Netlify**

**Steps:**
1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` directory
   - Or connect your GitHub repository

3. **Configure build settings**
   ```bash
   Build command: npm run build
   Publish directory: out
   ```

### **3. GitHub Pages**

**Steps:**
1. **Update next.config.js**
   ```javascript
   module.exports = {
     trailingSlash: true,
     exportPathMap: async function () {
       return {
         '/': { page: '/' }
       }
     }
   }
   ```

2. **Add GitHub Actions workflow**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '16'
         - run: npm install
         - run: npm run build
         - run: npm run export
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

## 🐳 Docker Deployment

### **1. Create Dockerfile**
```dockerfile
# Dockerfile
FROM node:16-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### **2. Build and Run**
```bash
# Build Docker image
docker build -t terminal-website .

# Run container
docker run -p 3000:3000 terminal-website

# Run with custom port
docker run -p 8080:3000 terminal-website
```

### **3. Docker Compose**
```yaml
# docker-compose.yml
version: '3.8'
services:
  terminal-website:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## ☁️ Cloud Platform Deployments

### **1. AWS (Elastic Beanstalk)**

**Steps:**
1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize EB application**
   ```bash
   eb init terminal-website
   eb create production
   ```

3. **Deploy**
   ```bash
   eb deploy
   ```

### **2. Google Cloud Platform**

**Steps:**
1. **Install gcloud CLI**
2. **Create app.yaml**
   ```yaml
   runtime: nodejs16
   env: standard
   instance_class: F1
   automatic_scaling:
     target_cpu_utilization: 0.65
     min_instances: 1
     max_instances: 10
   ```

3. **Deploy**
   ```bash
   gcloud app deploy
   ```

### **3. Azure (App Service)**

**Steps:**
1. **Install Azure CLI**
2. **Create web app**
   ```bash
   az webapp create --name terminal-website --resource-group myResourceGroup --plan myAppServicePlan
   ```

3. **Deploy**
   ```bash
   az webapp deployment source config-zip --resource-group myResourceGroup --name terminal-website --src deployment.zip
   ```

## 🔧 Advanced Configurations

### **1. Environment Variables**

**Production Environment:**
```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Development Environment:**
```bash
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### **2. Custom Domain Setup**

**DNS Configuration:**
```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

**SSL Certificate:**
- **Let's Encrypt**: Free SSL certificates
- **Cloudflare**: Free SSL and CDN
- **Hosting provider**: Usually included

### **3. CDN Configuration**

**Cloudflare Setup:**
1. Add domain to Cloudflare
2. Update nameservers
3. Enable SSL/TLS
4. Configure caching rules

**Vercel Edge Functions:**
```javascript
// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Edge!' })
}
```

## 📊 Performance Optimization

### **1. Build Optimization**
```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['your-domain.com'],
  },
}
```

### **2. Caching Strategy**
```javascript
// Cache static assets
app.use('/static', express.static('public', {
  maxAge: '1y',
  immutable: true
}));
```

### **3. Bundle Analysis**
```bash
# Analyze bundle size
npm run build
npm run analyze
```

## 🔒 Security Considerations

### **1. HTTPS Enforcement**
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ]
      }
    ]
  }
}
```

### **2. Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### **3. Environment Variables**
```bash
# Never commit sensitive data
NEXT_PUBLIC_API_KEY=your_api_key
DATABASE_URL=your_database_url
```

## 📈 Monitoring and Analytics

### **1. Google Analytics**
```javascript
// pages/_app.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
```

### **2. Error Tracking**
```javascript
// Sentry integration
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

### **3. Performance Monitoring**
```javascript
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // Send to your analytics service
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

## 🚨 Troubleshooting

### **Common Issues**

**Build Failures:**
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

**Deployment Issues:**
```bash
# Check logs
vercel logs
netlify logs
```

**Performance Issues:**
```bash
# Analyze bundle
npm run analyze
# Check Core Web Vitals
lighthouse https://your-domain.com
```

### **Debug Commands**
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check build output
npm run build

# Test production build
npm start
```

## 📋 Deployment Checklist

### **Pre-Deployment**
- [ ] All tests passing
- [ ] Configuration updated
- [ ] Environment variables set
- [ ] Resume PDF added
- [ ] Custom domain configured (if applicable)

### **Post-Deployment**
- [ ] Website loads correctly
- [ ] All commands work
- [ ] Mobile responsiveness tested
- [ ] SSL certificate active
- [ ] Analytics tracking working
- [ ] Performance optimized

### **Monitoring**
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Enable analytics
- [ ] Test backup procedures

## 🎯 Best Practices

### **1. Deployment Strategy**
- **Staging environment**: Test before production
- **Blue-green deployment**: Zero downtime
- **Rollback plan**: Quick recovery from issues

### **2. Security**
- **Regular updates**: Keep dependencies current
- **Security scanning**: Use tools like Snyk
- **Access control**: Limit deployment access

### **3. Performance**
- **CDN usage**: Distribute content globally
- **Caching strategy**: Optimize for speed
- **Bundle optimization**: Minimize JavaScript size

---

**Happy Deploying! 🚀**

*This deployment guide covers all major hosting platforms and provides best practices for production deployment.* 