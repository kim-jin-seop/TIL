import feedparser  

rss = feedparser.parse("https://cnu-jinseop.tistory.com/rss" )
with open("README.md", "r", encoding='utf-8') as f:
    content = f.read()
    
post = ""
for i, feed in enumerate(rss['entries']): 
    date = feed['published_parsed'] 
    check = f"{date.tm_year}.{date.tm_mon}.{date.tm_mday} : {feed['title']}"
    if(content.find(check)) == -1:
        post = f"[{date.tm_year}.{date.tm_mon}.{date.tm_mday} : {feed['title']}]({feed['link']}) <br>\n" + post
text = f"{content}{post}" 
with open("README.md", 'w', encoding='utf-8') as f:
    f.write(text)
