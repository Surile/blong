// build time:Fri Jul 26 2019 11:04:52 GMT+0800 (GMT+08:00)
(function(){var a="";var t=[10,20];var n="bold";var r=1500;var o=388;var e=0;$("html").click(function(i){var v=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var p=$("<span/>").text(v[e]);e=(e+1)%v.length;var l=i.pageX,c=i.pageY;var s="#"+("00000"+(Math.random()*16777216<<0).toString(16)).substr(-6);if(a.length>=4){s=a}var f=Math.random()*(t[1]-t[0])+t[0];f+="px";p.css({"z-index":99999,top:c-20,left:l,position:"absolute","font-weight":n,"font-size":f,color:s});$("html").append(p);p.animate({top:c-o,opacity:0},r,function(){p.remove()})})})();
//rebuild by neat 