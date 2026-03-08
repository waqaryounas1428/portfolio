@echo off
echo ========================================
echo Fixing Case-Sensitivity Issue for Vercel
echo ========================================
echo.

echo Step 1: Configuring Git to be case-sensitive...
git config core.ignorecase false
echo Done!
echo.

echo Step 2: Removing old lowercase files from Git...
git rm --cached src/components/hero.jsx 2>nul
git rm --cached src/components/hero.css 2>nul
echo Done!
echo.

echo Step 3: Adding new uppercase files...
git add src/components/Hero.jsx
git add src/components/Hero.css
git add .
echo Done!
echo.

echo Step 4: Committing changes...
git commit -m "Fix: Rename hero to Hero for case-sensitive deployment (Vercel fix)"
echo Done!
echo.

echo Step 5: Pushing to GitHub...
git push origin main
echo Done!
echo.

echo ========================================
echo SUCCESS! Vercel will now redeploy automatically.
echo Check your Vercel dashboard in 1-2 minutes.
echo ========================================
pause
