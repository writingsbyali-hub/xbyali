# Deployment Guide

Your code is now on GitHub! 🎉

Repository: https://github.com/writingsbyali-hub/xbyali

## Step 1: Enable GitHub Pages

1. Go to your repo: https://github.com/writingsbyali-hub/xbyali
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The first deployment should start automatically
6. Wait 2-3 minutes for the build to complete
7. Your site will be live at: `https://writingsbyali-hub.github.io/xbyali/`

## Step 2: Set Up Custom Domain (xbyali.page)

### A. In GitHub Settings:

1. Still in **Settings** → **Pages**
2. Under "Custom domain", enter: `xbyali.page`
3. Click **Save**
4. Check the box for "Enforce HTTPS" (might need to wait a bit first)

### B. Configure DNS at Your Domain Registrar:

You need to add DNS records where you bought `xbyali.page` (e.g., Namecheap, Porkbun, etc.)

**Add these 4 A records:**

Record 1:
- Type: **A**
- Host/Name: **@** (or leave blank)
- Value/Points to: **185.199.108.153**
- TTL: **3600** (or Auto/Default)

Record 2:
- Type: **A**
- Host/Name: **@**
- Value/Points to: **185.199.109.153**
- TTL: **3600**

Record 3:
- Type: **A**
- Host/Name: **@**
- Value/Points to: **185.199.110.153**
- TTL: **3600**

Record 4:
- Type: **A**
- Host/Name: **@**
- Value/Points to: **185.199.111.153**
- TTL: **3600**

**Add a CNAME record for www:**
- Type: **CNAME**
- Host/Name: **www**
- Value/Points to: **writingsbyali-hub.github.io**
- TTL: **3600** (or Auto/Default)

**Note:** Different registrars use different terms:
- "Host" = "Name" (same thing)
- "Value" = "Points to" = "Target" (same thing)
- TTL = Time To Live (how long DNS caches the record - 3600 is fine, or use default)

### C. Wait for DNS Propagation

- DNS changes take 5 minutes to 48 hours (usually ~1 hour)
- Check status: https://www.whatsmydns.net/#A/xbyali.page
- Once propagated, your site will be live at `https://xbyali.page`

## Step 3: Verify Everything Works

Visit:
- ✓ `https://xbyali.page` - Your landing page
- ✓ `https://xbyali.page/library` - Your library
- ✓ `https://xbyali.page/about` - About page

## What Got Pushed to GitHub

**Included:**
- ✓ All your website code
- ✓ The cat hero image
- ✓ Example content templates
- ✓ GitHub Pages deployment workflow

**Excluded (private):**
- ✗ PROJECT_ROADMAP.md
- ✗ PHASE_1_COMPLETE.md
- ✗ CONTENT_GUIDE.md
- ✗ node_modules/
- ✗ build files

## Future Updates

To update your live site:

```bash
# Make your changes, then:
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically rebuild and deploy your site (takes 2-3 minutes).

## Troubleshooting

**Site not deploying?**
- Check the "Actions" tab on GitHub for build errors
- Make sure you selected "GitHub Actions" as the source in Pages settings

**Custom domain not working?**
- Verify DNS records are correct
- Wait longer (DNS can take time)
- Check GitHub Pages settings shows "DNS check successful"

**404 errors?**
- Make sure your domain is correctly set in Settings → Pages
- Verify HTTPS is enforced

---

Need help? Let me know!
