@echo off
echo Adding all changes...
git add .

echo Committing changes...
git commit -m "Fix: Rename hero files to Hero for case-sensitive deployment"

echo Pushing to GitHub...
git push origin main

echo Done! Vercel will automatically redeploy.
pause
