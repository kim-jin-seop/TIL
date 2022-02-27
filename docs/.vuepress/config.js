// .vuepress/config.js
var path = require('path')
let {getArticles} = require(path.resolve('.vuepress/monthly.js'))

module.exports = {
  title: "TIL : Today I Learned",
  description: "매일 공부한 내용을 정리합니다.",
  themeConfig: {
    sidebar: [
           {
               title: 'Vuepress',
               collapsable: true,
               children: getArticles('vuejs/vuepress')
           }
       ],
    nav: [{ text: "Github", link: "https://github.com/kim-jin-seop" },
          { text: "Blog", link: "https://cnu-jinseop.tistory.com/"}],
    sidebar: getSidebarArr()
  },
  markdown: {
    lineNumbers: true
  },
  //가장 중요한 부분!
  //<username>.github.io 뒤에 주소가 붙으시면
  //아래와 같이 뒤 붙는 주소를 넣어주셔야합니다.
  //안그러면 css 가 반영이 안되요!! 꼭꼭 넣어주세요
  base: "/TIL/",
  plugins:[
    ["vuepress-plugin-code-copy"],
    ["@vuepress/back-to-top"]
  ]
};

function getSidebarArr() {
  var fs = require("fs");
  var docsPath = __dirname + "/../";
  var sidebarArr = [];
  var HomeFilelist = [];
  var filelist = fs.readdirSync(docsPath);
  filelist.forEach(function(file) {
    if (file === ".vuepress") return;
    var stat = fs.lstatSync(docsPath + "/" + file);
    if (stat.isDirectory()) {
      // directory
      // title is file, children is readdirSync
      var docsFolderPath = docsPath + "/" + file;
      var list = fs.readdirSync(docsFolderPath);
      sidebarArr.push(makeSidebarObject(file, list));
    } else {
      // NOT directory
      // title is '/' children is file
      HomeFilelist.push(file);
    }
  });
  sidebarArr.unshift(makeSidebarObject("", HomeFilelist));
  return sidebarArr;
}
function makeSidebarObject(folder, mdfileList) {
  var path = folder ? "/" + folder + "/" : "/";
  mdfileList = aheadOfReadme(mdfileList);
  var tmpMdfileList = [];
  // remove .md, add Path
  mdfileList.forEach(function(mdfile) {
    if (mdfile.substr(-3) === ".md") {
      mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);
      tmpMdfileList.push(path + mdfile);
    }
  });
  mdfileList = tmpMdfileList;
  // remove folder prefix number
  if (folder) {
    var dotIdx = folder.indexOf(".");
    var title = Number(folder.substr(0, dotIdx))
      ? folder.substr(dotIdx + 1)
      : folder;
  } else {
    title = "HOME";
  }
  return {
    title: title,
    children: mdfileList
  };
}
function aheadOfReadme(arr) {
  // ['1.test.md','README.md'] => ['README.md','1.test.md']
  var readmeIdx = arr.indexOf("README.md");
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }
  return arr;
}
