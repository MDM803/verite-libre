# Vérité Libre - Op-Ed Platform

A digital op-ed platform for Vérité Research staff and non-resident fellows.

## Getting Started

### Local Development
Simply open `index.html` in your browser.

### Deployment to Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/verite-libre.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Click "Deploy site"

3. **Enable Identity (for CMS)**
   - In Netlify dashboard, go to **Site settings** → **Identity**
   - Click **Enable Identity**
   - Under **Registration preferences**, select "Invite only"
   - Under **External providers**, add GitHub (optional)
   - Go to **Identity** → **Services** → **Git Gateway** → **Enable Git Gateway**

4. **Invite Users**
   - Go to **Identity** tab
   - Click **Invite users**
   - Enter email addresses of editors

5. **Access Admin Panel**
   - Go to `https://your-site.netlify.app/admin`
   - Login with your credentials
   - Start managing content!

## Project Structure

```
├── index.html          # Home page
├── article.html        # Article template
├── style.css           # Main styles
├── script.js           # JavaScript
├── admin/
│   ├── index.html      # CMS entry point
│   └── config.yml      # CMS configuration
├── content/
│   ├── articles/       # Op-ed markdown files
│   ├── authors/        # Author profiles
│   ├── pages/          # Static pages (About, Contact)
│   └── settings/       # Site settings
├── images/
│   ├── logo.png        # Site logo
│   └── uploads/        # CMS uploaded images
└── netlify.toml        # Netlify configuration
```

## Content Management

Access the admin panel at `/admin` to:
- Create and edit articles
- Manage author profiles
- Update site settings
- Upload images

## License

© Vérité Research. All rights reserved.
