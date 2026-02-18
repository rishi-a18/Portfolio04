# Deploying to Vercel

This guide outlines the steps to deploy your portfolio to Vercel.

## Prerequisites

1.  **GitHub Account**: You need a GitHub account to host your code.
2.  **Vercel Account**: You can sign up using your GitHub account at [vercel.com](https://vercel.com).
3.  **Git Installed**: You already have this.

## Step-by-Step Process

### 1. Prepare your Code

Open your terminal in the project folder: `d:\ai external\MR\portfolio rishi04\rishitha-reddy-portfolio-main`

Run the following commands to save your recent changes:

```bash
git add .
git commit -m "Ready for deployment"
```

### 2. Create a GitHub Repository

1.  Go to [github.com/new](https://github.com/new).
2.  Name your repository (e.g., `my-portfolio`).
3.  Keep it **Public**.
4.  Do **not** initialize with README, .gitignore, or License (you already have them).
5.  Click **Create repository**.

### 3. Push Code to GitHub

Copy the commands shown on the GitHub page under "…or push an existing repository from the command line". They will look like this (replace `YOUR_USERNAME` and `YOUR_REPO` with actual values):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Run these commands in your terminal.

### 4. Deploy on Vercel

1.  Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** -> **Project**.
3.  Select your GitHub repository (`my-portfolio`).
4.  Click **Import**.
5.  **Configure Project**:
    *   **Framework Preset**: Vite (should be auto-detected).
    *   **Root Directory**: `rishitha-reddy-portfolio-main` (IMPORTANT: Since your project is in a subfolder, you might need to edit this. If your repository root *is* the project folder, leave it as `./`. If you pushed the entire `portfolio rishi04` folder, set this to `rishitha-reddy-portfolio-main`).
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
    *   **Install Command**: `npm install`
6.  Click **Deploy**.

### 5. Verify

Once deployed, Vercel will give you a URL (e.g., `my-portfolio.vercel.app`). Click it to verify your live site!
