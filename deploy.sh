set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

#git push -f https://github.com/깃헙이름/레포이름.git master:gh-pages
git push -f https://github.com/kim-jin-seop/TIL.git master:gh-pages

cd -
