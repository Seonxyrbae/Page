var toc_config = {containerId:'sitemaps', showNew:0, sortAlphabetically:{thePanel:true, theList:true}, activePanel:1, slideSpeed:{down:400, up:400}, slideEasing:{down: null, up: null}, slideCallback:{down:function(){}, up:function(){}}, clickCallback:function(){}, jsonCallback:'sitemaps',delayLoading: 0};
window.onload = function(){
!function(e,o){var t=o.getElementById(toc_config.containerId),c=o.getElementsByTagName("head")[0],n=[];e[toc_config.jsonCallback]=function(e){for(var o,c,i=e.feed.entry,a=e.feed.category,l="",s=0,d=a.length;d>s;++s)n.push(a[s].term);for(var r=0,f=i.length;f>r;++r)(toc_config.showNew||toc_config.showNew>0)&&r<toc_config.showNew+1&&(i[r].title.$t+=" %new%");i=toc_config.sortAlphabetically.theList?i.sort(function(e,o){return e.title.$t.localeCompare(o.title.$t)}):i,toc_config.sortAlphabetically.thePanel&&n.sort();for(var g=0,h=n.length;h>g;++g){l+='<div class=\"sitemapBox\"><h4 class=\"sitemapTitle\">'+n[g]+'</h4>',l+='<div class=\"sitemapContent\"><ol>';for(var _=0,p=i.length;p>_;++_){o=i[_].title.$t;for(var w=0,u=i[_].link.length;u>w;++w)if("alternate"==i[_].link[w].rel){c=i[_].link[w].href;break}for(var v=0,m=i[_].category.length;m>v;++v)n[g]==i[_].category[v].term&&(l+='<li><a href=\"'+c+'\" title=\"'+o.replace(/ \%new\%$/,"")+'\">'+o.replace(/ \%new\%$/,"")+'</a></li>')}l+='</ol></div></div>'}t.innerHTML=l }; var i=o.createElement("script");

i.src="/feeds/posts/summary?alt=json-in-script&max-results=9999&callback="+toc_config.jsonCallback,"onload"==toc_config.delayLoading?e.onload=function(){c.appendChild(i)}:e.setTimeout(function(){c.appendChild(i)},toc_config.delayLoading)}(window,document);
}
