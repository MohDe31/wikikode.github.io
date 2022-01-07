yarn build

git checkout gh-pages
echo "SWITCHED TO NG-PAGE"
echo "REMOVING OLD FILES"
rm *
rm -r css js img
echo "OLD FILES REMOVED"
git checkout main dist
echo "GETTING THE DIST FOLDER"
mv dist/* .
rm -r dist
git add .
echo "DONE!!"
git commit -m "BUILD"
git push -u origin prod
git checkout main