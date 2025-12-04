# 🚀 Deploy to GitHub Pages - 3 Minutes

Follow these exact steps to deploy your documentation to GitHub Pages.

## Step 1: Create GitHub Repository (1 minute)

1. Go to https://github.com/new
2. Repository name: `telus-ai-factory-docs` (or any name you want)
3. Set to **Public** (required for free GitHub Pages)
4. Click **"Create repository"**
5. **Copy the repository URL** (you'll need this)

## Step 2: Push Your Code (1 minute)

Open terminal in the project folder and run:

```bash
# Navigate to the project
cd /Users/T998059/Documents/documentation/telus-ai-factory-docs

# Initialize git (if not already done)
git init

# Add all files
git add -A

# Commit
git commit -m "Initial commit: TELUS AI Factory Documentation"

# Add your GitHub repository (REPLACE with your actual URL)
git remote add origin https://github.com/YOUR-USERNAME/telus-ai-factory-docs.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages (30 seconds)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
5. Done! GitHub will automatically deploy

## Step 4: Wait for Deployment (1-2 minutes)

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running called **"Deploy to GitHub Pages"**
3. Wait for it to complete (green checkmark ✓)
4. Your site will be live!

## 🎉 Your Site is Live!

Your documentation will be available at:
```
https://YOUR-USERNAME.github.io/telus-ai-factory-docs/
```

Example: If your GitHub username is `john-doe`, the URL will be:
```
https://john-doe.github.io/telus-ai-factory-docs/
```

## 🔄 How to Update

Every time you push to the `main` branch, GitHub will automatically rebuild and deploy:

```bash
# Make your changes, then:
git add -A
git commit -m "Update documentation"
git push
```

Wait 1-2 minutes and your changes will be live!

## ⚡ Quick Troubleshooting

### If the build fails:

1. Go to the **Actions** tab
2. Click on the failed workflow
3. Check the error message
4. Usually it's a dependency issue - just push again

### If you see 404 errors:

1. Make sure the repository is **Public**
2. Check that GitHub Pages is enabled in Settings > Pages
3. Wait a few minutes - sometimes it takes time to propagate

### If styles are missing:

The `.nojekyll` file is already included to fix this!

## 📝 Notes

- ✅ GitHub Actions workflow is configured
- ✅ Static export enabled in `next.config.mjs`
- ✅ Base path automatically set
- ✅ `.nojekyll` file added
- ✅ Ready to deploy!

## 🎯 That's It!

Three simple steps and your documentation is live on GitHub Pages with automatic deployments on every push!
