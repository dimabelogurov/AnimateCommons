// EdgeCommons for Edge Animate v1.3.1 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

function hex_sha1(a){return binb2hex(core_sha1(str2binb(a),a.length*chrsz))}function b64_sha1(a){return binb2b64(core_sha1(str2binb(a),a.length*chrsz))}function str_sha1(a){return binb2str(core_sha1(str2binb(a),a.length*chrsz))}function hex_hmac_sha1(a,b){return binb2hex(core_hmac_sha1(a,b))}function b64_hmac_sha1(a,b){return binb2b64(core_hmac_sha1(a,b))}function str_hmac_sha1(a,b){return binb2str(core_hmac_sha1(a,b))}function sha1_vm_test(){return"a9993e364706816aba3e25717850c26c9cd0d89d"==hex_sha1("abc")}function core_sha1(a,b){a[b>>5]|=128<<24-b%32,a[(b+64>>9<<4)+15]=b;for(var c=Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,i=0;i<a.length;i+=16){for(var j=d,k=e,l=f,m=g,n=h,o=0;80>o;o++){c[o]=16>o?a[i+o]:rol(c[o-3]^c[o-8]^c[o-14]^c[o-16],1);var p=safe_add(safe_add(rol(d,5),sha1_ft(o,e,f,g)),safe_add(safe_add(h,c[o]),sha1_kt(o)));h=g,g=f,f=rol(e,30),e=d,d=p}d=safe_add(d,j),e=safe_add(e,k),f=safe_add(f,l),g=safe_add(g,m),h=safe_add(h,n)}return Array(d,e,f,g,h)}function sha1_ft(a,b,c,d){return 20>a?b&c|~b&d:40>a?b^c^d:60>a?b&c|b&d|c&d:b^c^d}function sha1_kt(a){return 20>a?1518500249:40>a?1859775393:60>a?-1894007588:-899497514}function core_hmac_sha1(a,b){var c=str2binb(a);c.length>16&&(c=core_sha1(c,a.length*chrsz));for(var d=Array(16),e=Array(16),f=0;16>f;f++)d[f]=909522486^c[f],e[f]=1549556828^c[f];var g=core_sha1(d.concat(str2binb(b)),512+b.length*chrsz);return core_sha1(e.concat(g),672)}function safe_add(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function rol(a,b){return a<<b|a>>>32-b}function str2binb(a){for(var b=Array(),c=(1<<chrsz)-1,d=0;d<a.length*chrsz;d+=chrsz)b[d>>5]|=(a.charCodeAt(d/chrsz)&c)<<24-d%32;return b}function binb2str(a){for(var b="",c=(1<<chrsz)-1,d=0;d<32*a.length;d+=chrsz)b+=String.fromCharCode(a[d>>5]>>>24-d%32&c);return b}function binb2hex(a){for(var b=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>8*(3-d%4)+4&15)+b.charAt(a[d>>2]>>8*(3-d%4)&15);return c}function binb2b64(a){for(var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="",d=0;d<4*a.length;d+=3)for(var e=(a[d>>2]>>8*(3-d%4)&255)<<16|(a[d+1>>2]>>8*(3-(d+1)%4)&255)<<8|a[d+2>>2]>>8*(3-(d+2)%4)&255,f=0;4>f;f++)c+=8*d+6*f>32*a.length?b64pad:b.charAt(e>>6*(3-f)&63);return c}!function(a){function b(a,b){if(a)if("offset"in a){var c=a.data("jquery-collision-coordinates");if(c)this.x1=c.x1,this.y1=c.y1,this.x2=c.x2,this.y2=c.y2;else if(b&&b.length&&b.length>=4)this.x1=b[0],this.y1=b[1],this.x2=b[2]+a.outerWidth(!0),this.y2=b[3]+a.outerHeight(!0);else if(a.parent().length<=0)this.x1=parseInt(a.css("left"))||0,this.y1=parseInt(a.css("top"))||0,this.x2=parseInt(a.css("width"))||0,this.y2=parseInt(a.css("height"))||0,this.x2+=this.x1,this.x2+=(parseInt(a.css("margin-left"))||0)+(parseInt(a.css("border-left"))||0)+(parseInt(a.css("padding-left"))||0)+(parseInt(a.css("padding-right"))||0)+(parseInt(a.css("border-right"))||0)+(parseInt(a.css("margin-right"))||0),this.y2+=this.y1,this.y2+=(parseInt(a.css("margin-top"))||0)+(parseInt(a.css("border-top"))||0)+(parseInt(a.css("padding-top"))||0)+(parseInt(a.css("padding-bottom"))||0)+(parseInt(a.css("border-bottom"))||0)+(parseInt(a.css("margin-bottom"))||0);else{var d=a.offset();this.x1=d.left-(parseInt(a.css("margin-left"))||0),this.y1=d.top-(parseInt(a.css("margin-top"))||0),this.x2=this.x1+a.outerWidth(!0),this.y2=this.y1+a.outerHeight(!0)}this.proto=a}else"x1"in a&&(this.x1=a.x1,this.y1=a.y1,this.x2=a.x2,this.y2=a.y2,this.proto=a);else this.x1=this.y1=this.x2=this.y2=0,this.proto=null;"dir"in a&&(this.dir=a.dir)}function d(a,b,c,d){this.target=a,this.obstacle=b,this.overlap=c,this.overlapType=d}function e(a,b,c){this.targets=a,this.obstacles=b,this.collisions=null,this.cache=null,this.containment=c?c:null}function f(c){return a(c).get().map(function(c){return new b(a(c))})}function g(b){for(var c=a(),d=0;d<b.length;d++)c=c.add(b[d]);return c}b.prototype.innerContainer=function(){var a=new b(this);return this.proto.css&&(a.x1+=parseInt(this.proto.css("margin-left"))||0,a.x1+=parseInt(this.proto.css("border-left"))||0,a.x1+=parseInt(this.proto.css("padding-left"))||0,a.x2-=parseInt(this.proto.css("padding-right"))||0,a.x2-=parseInt(this.proto.css("border-right"))||0,a.x2-=parseInt(this.proto.css("margin-right"))||0,a.y1+=parseInt(this.proto.css("margin-top"))||0,a.y1+=parseInt(this.proto.css("border-top"))||0,a.y1+=parseInt(this.proto.css("padding-top"))||0,a.y2-=parseInt(this.proto.css("padding-bottom"))||0,a.y2-=parseInt(this.proto.css("border-bottom"))||0,a.y2-=parseInt(this.proto.css("margin-bottom"))||0),a},b.prototype.move=function(a,b){return this.x1+=a,this.x2+=a,this.y1+=b,this.y2+=b,this},b.prototype.update=function(a){if("x1"in a&&(this.x1=a.x1),"x2"in a&&(this.x1=a.x2),"y1"in a&&(this.x1=a.y1),"y2"in a&&(this.x1=a.y2),"left"in a){var b=this.x2-this.x1;this.x1=a.left,this.x2=this.x1+b}if("top"in a){var c=this.y2-this.y1;this.y1=a.top,this.y2=this.y1+c}if("offset"in a){var d=a.offset();this.update(d),this.x2=this.x1+a.width(),this.y2=this.y1+a.height()}return"dir"in a&&(this.x1=a.dir),this},b.prototype.width=function(){return this.x2-this.x1},b.prototype.height=function(){return this.y2-this.y1},b.prototype.centerx=function(){return(this.x1+this.x2)/2},b.prototype.centery=function(){return(this.y1+this.y2)/2},b.prototype.toString=function(){return(this.proto.get?"#"+this.proto.get(0).id:"")+"["+[this.x1,this.y1,this.x2,this.y2].join(",")+"]"},b.EPSILON=.001,b.prototype.containsPoint=function(a,c,d){d||(d=!1);var e=(d?-1:1)*b.EPSILON;return a>this.x1+e&&a<this.x2-e&&c>this.y1+e&&c<this.y2-e?!0:!1},b.prototype.overlaps=function(a,b){var c=this._overlaps(a,b);return c.length>0?c:(c=a._overlaps(this,b),c.length>0&&(c[0].dir="Inside"==c[0].dir?"Outside":"Outside"==c[0].dir?"Inside":"N"==c[0].dir?"S":"S"==c[0].dir?"N":"W"==c[0].dir?"E":"E"==c[0].dir?"W":"NE"==c[0].dir?"SW":"SW"==c[0].dir?"NE":"SE"==c[0].dir?"NW":"NW"==c[0].dir?"SE":void 0),c||[])},b.prototype._overlaps=function(a,c){var d=a,e=this;c||(c=!1);for(var f=d.centerx(),g=d.centery(),h=[[d.x1,d.y1,"SE"],[d.x2,d.y1,"SW"],[d.x2,d.y2,"NW"],[d.x1,d.y2,"NE"],[f,d.y1,"S"],[d.x2,g,"W"],[f,d.y2,"N"],[d.x1,g,"E"],[f,g,void 0]],i=null,j={NW:!1,N:!1,NE:!1,E:!1,SE:!1,S:!1,SW:!1,W:!1},k=0;k<h.length;k++)if(this.containsPoint(h[k][0],h[k][1],c)){if(h[k][2]&&(j[h[k][2]]=!0),i)continue;i=[new b({x1:Math.max(d.x1,e.x1),y1:Math.max(d.y1,e.y1),x2:Math.min(d.x2,e.x2),y2:Math.min(d.y2,e.y2),dir:h[k][2]})]}return i&&(j.NW&&j.NE&&(i[0].dir="N"),j.NE&&j.SE&&(i[0].dir="E"),j.SE&&j.SW&&(i[0].dir="S"),j.SW&&j.NW&&(i[0].dir="W"),j.NW&&j.NE&&j.SE&&j.SW&&(i[0].dir="Outside"),j.NW||j.NE||j.SE||j.SW||j.N||j.E||j.S||j.W||(i[0].dir="Inside")),i||[]},b.prototype._protrusion=function(a,c,d){var e=this.overlaps(new b(a),!1);return e.length<=0?d:(e[0].dir=c,d.push(e[0]),d)},b.prototype.protrusions=function(a){var b=[],c=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,e=a.x1,f=a.x2,g=a.y1,h=a.y2;return b=this._protrusion({x1:e,y1:c,x2:f,y2:g},"N",b),b=this._protrusion({x1:f,y1:c,x2:d,y2:g},"NE",b),b=this._protrusion({x1:f,y1:g,x2:d,y2:h},"E",b),b=this._protrusion({x1:f,y1:h,x2:d,y2:d},"SE",b),b=this._protrusion({x1:e,y1:h,x2:f,y2:d},"S",b),b=this._protrusion({x1:c,y1:h,x2:e,y2:d},"SW",b),b=this._protrusion({x1:c,y1:g,x2:e,y2:h},"W",b),b=this._protrusion({x1:c,y1:c,x2:e,y2:g},"NW",b)},d.prototype.distance=function(){var a=c.target,b=c.overlap;return Math.sqrt((a.centerx()-b.centerx())*(a.centerx()-b.centerx())+(a.centery()-b.centery())*(a.centery()-b.centery()))},e.prototype.getCollisions=function(a){if(null!==this.collisions)return this.collisions;if(this.cache={},this.collisions=[],a||(a="collision"),"collision"!=a&&"protrusion"!=a)return[];for(var b=[],c=this.targets,e=this.obstacles,f=0;f<c.length;f++)for(var g=c[f],h=0;h<e.length;h++)for(var i=e[h],j="collision"==a?g.overlaps(i):g.protrusions(i.innerContainer()),k=0;k<j.length;k++)b.push(new d(c[f],e[h],j[k],a));return this.collisions=b,b},a.fn.collision=function(b,c){c||(c={});var d="collision",h=null,i=null,j=null,k=null,l="body";"protrusion"==c.mode&&(d=c.mode),c.as&&(h=c.as),c.colliderData&&(i=c.colliderData),c.obstacleData&&(j=c.obstacleData),c.directionData&&(k=c.directionData),c.relative&&(l=c.relative);var m,n=new e(f(this),f(b)),o=n.getCollisions(d);return m=h?a.map(o,function(b){var c=b.overlap.x1,d=b.overlap.y1;if(l&&"body"!=l){var e="collider"==l?a(b.target.proto):"obstacle"==l?a(b.obstacle.proto):a(l);if(e.length>0){var f=e.offset();c-=f.left,d-=f.top}}var g=a(h).offset({left:c,top:d}).width(b.overlap.width()).height(b.overlap.height());return i&&g.data(i,a(b.target.proto)),j&&g.data(j,a(b.obstacle.proto)),k&&b.overlap.dir&&g.data(k,b.overlap.dir),g}):a.map(o,function(a){return a.obstacle.proto}),g(m)}}(jQuery),function(a){var b=function(){};b.VERSION="0.0.1";var c=a.$,d=function(a){this.sym=a,this.el=a.getSymbolElement(),this.startX=this.el.position().left};d.prototype.move=function(){},d.prototype.stop=function(){};var e=b.App=function(a,b,c){this.stage=a,this.stageEl=a.getSymbolElement(),this.player=b,this.playerEl=this.player.getSymbolElement(),this.playerStartX=this.playerEl.position().left,this.hotspots,this.parallaxes,this.config=c?c:{player:{step:300,duration:1e4}}};e.prototype.run=function(){console.log("App::setup");var b=this,d=this.stage.getComposition().getSymbols();this.hotspots=[];for(var e in d){var f=d[e];f.getSymbolElement().is(".hotspot")&&this.hotspots.push({symbol:f,element:f.getSymbolElement(),isActive:!1})}this.parallaxes=[];var g=c("div[class^=parallax-],div[class*=' parallax-']");c.each(g,function(a,d){var e=1,f=d.className.split(" ");for(var a in f){var g=f[a];0==g.indexOf("parallax-")&&(e=Number(g.replace("parallax-","")))}b.parallaxes.push({element:d,startX:c(d).position().left,factor:e})}),console.log("Parallaxes length: ",this.parallaxes.length),this.registerControllers(),this.stageEl.on(a.CLICK_OR_TOUCH,function(a){var d=c(this).offset(),e=a.pageX-d.left,f=Math.floor(e-(b.playerEl.position().left+b.playerEl.width()/2)),g=Math.floor(Math.abs(6*f));b.playerEl.queue("fx",[]),b.playerEl.stop();var h=b.playerEl.animate({left:"+="+f/4},{duration:g,queue:!1,easing:"linear",complete:function(){b.stopPlayer()},done:function(){console.log("anim done")}});f>0?(b.player.setVariable("anim",h),b.player.setVariable("dir","right"),"right_run"!=b.player.getVariable("state")&&(b.player.setVariable("state","right_run"),b.player.play("right_run"))):(b.player.setVariable("anim",h),b.player.setVariable("dir","left"),"left_run"!=b.player.getVariable("state")&&(b.player.setVariable("state","left_run"),b.player.play("left_run")))}),setInterval(function(){b.tick()},1)},e.prototype.registerControllers=function(){var b=this;c(window).keydown(function(a){switch(a.keyCode){case 39:b.movePlayer("right");break;case 37:b.movePlayer("left")}}),c(window).keyup(function(){b.stopPlayer()}),a.isMobile()&&gyro&&gyro.startTracking(function(a){var c=Math.round(a.beta/8);if(-1>c){{12*Math.abs(c)}b.movePlayer("right")}else if(c>1){{12*Math.abs(c)}b.movePlayer("left")}})},e.prototype.stopPlayer=function(){this.playerEl.queue("fx",[]),this.playerEl.stop(!0),this.player.setVariable("state","stop"),this.player.stop("stop")},e.prototype.movePlayer=function(a){switch(a){case"left":var b=this.playerEl.animate({left:"-="+this.config.player.step},{duration:this.config.player.duration,queue:!1,easing:"linear"});this.player.setVariable("anim",b),this.player.setVariable("dir","left"),"left_run"!=this.player.getVariable("state")&&(this.player.setVariable("state","left_run"),this.player.play("left_run"));break;case"right":var b=this.playerEl.animate({left:"+="+this.config.player.step},{duration:this.config.player.duration,queue:!1,easing:"linear"});this.player.setVariable("anim",b),this.player.setVariable("dir","right"),"right_run"!=this.player.getVariable("state")&&(this.player.setVariable("state","right_run"),this.player.play("right_run"))}},e.prototype.tick=function(){var a=[],b=this.playerEl.collision(".hotspot",{relative:"collider",obstacleData:"odata",colliderData:"cdata",directionData:"ddata",as:"<div/>"});if(b&&b.length)for(var d in b){var e=c(b).data("odata")[0];for(var f in this.hotspots){var g=this.hotspots[f];if(g.element[0]==e&&g.element.is(".action")&&a.push(g),g.element[0]==e&&g.element.is(".obstacle")){g.isActive=!0;var h=c(b).data("ddata"),i=this.player.getVariable("dir");"S"!=h&&"SE"!=h&&"NE"!=h||"right"!=i?"W"!=h&&"NW"!=h&&"SW"!=h||"left"!=i||(this.player.getVariable("anim").stop(!0),this.stopPlayer()):(this.player.getVariable("anim").stop(!0),this.stopPlayer())}}}for(var d in this.hotspots){var g=this.hotspots[d];c.inArray(g,a)>-1&&!g.isActive&&g.element.is(".action")?(g.isActive=!0,g.symbol.play()):-1==c.inArray(g,a)&&g.isActive&&g.element.is(".action")&&(g.isActive=!1,g.symbol.playReverse())}{var j=this.playerEl.position().left;this.stageEl.width()}for(var d in this.parallaxes){var k=this.parallaxes[d],l=Math.floor(k.startX+(this.playerStartX-j)*(k.factor/4));c(k.element).css({left:l,"-webkit-translate":"translate(0, 372px)"})}},a.Explore=b}(EdgeCommons);var hexcase=0,b64pad="",chrsz=8,IMAGETYPE_GIF=1,IMAGETYPE_JPEG=2,IMAGETYPE_PNG=3;Array.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0;c<this.length;c++)if(this[c]==a)return c;return-1});var Codebird=function(){function parse_str(str,array){var glue1="=",glue2="&",array2=String(str).replace(/^&?([\s\S]*?)&?$/,"$1").split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,that=this,fixStr=function(a){return unescape(a).replace(/([\\"'])/g,"\\$1").replace(/\n/g,"\\n").replace(/\r/g,"\\r")};for(array||(array=this.window),i=0;i<array2.length;i++){for(tmp=array2[i].split(glue1),tmp.length<2&&(tmp=[tmp,""]),key=fixStr(tmp[0]),value=fixStr(tmp[1]);" "===key.charAt(0);)key=key.substr(1);if(-1!==key.indexOf("\x00")&&(key=key.substr(0,key.indexOf("\x00"))),key&&"["!==key.charAt(0)){for(keys=[],bracket=0,j=0;j<key.length;j++)if("["!==key.charAt(j)||bracket){if("]"===key.charAt(j)&&bracket&&(keys.length||keys.push(key.substr(0,bracket-1)),keys.push(key.substr(bracket,j-bracket)),bracket=0,"["!==key.charAt(j+1)))break}else bracket=j+1;for(keys.length||(keys=[key]),j=0;j<keys[0].length&&(chr=keys[0].charAt(j),(" "===chr||"."===chr||"["===chr)&&(keys[0]=keys[0].substr(0,j)+"_"+keys[0].substr(j+1)),"["!==chr);j++);for(evalStr="array",j=0;j<keys.length;j++)key=keys[j],key=""!==key&&" "!==key||0===j?"'"+key+"'":eval(evalStr+".push([]);")-1,evalStr+="["+key+"]",j!==keys.length-1&&"undefined"===eval("typeof "+evalStr)&&eval(evalStr+" = [];");evalStr+=" = '"+value+"';\n",eval(evalStr)}}}var _oauth_consumer_key=null,_oauth_consumer_secret=null,_oauth_bearer_token=null,_endpoint_base="https://api.twitter.com/",_endpoint=_endpoint_base+"1.1/",_endpoint_oauth=_endpoint_base,_endpoint_proxy="https://api.jublo.net/codebird/",_use_jsonp="undefined"!=typeof navigator&&"undefined"!=typeof navigator.userAgent&&(navigator.userAgent.indexOf("Trident/4")>-1||navigator.userAgent.indexOf("Trident/5")>-1||navigator.userAgent.indexOf("MSIE 7.0")>-1),_use_proxy=!0,_oauth_token=null,_oauth_token_secret=null,_supported_media_files=[IMAGETYPE_GIF,IMAGETYPE_JPEG,IMAGETYPE_PNG],_version="2.3.3",setConsumerKey=function(a,b){_oauth_consumer_key=a,_oauth_consumer_secret=b},setBearerToken=function(a){_oauth_bearer_token=a},getVersion=function(){return _version},setToken=function(a,b){_oauth_token=a,_oauth_token_secret=b},setUseProxy=function(a){_use_proxy=!!a},__call=function(a,b,c,d){if("undefined"==typeof b)var b={};if("undefined"==typeof d)var d=!1;if("function"!=typeof c&&"function"==typeof b)c=b,b={},"bool"==typeof c&&(d=c);else if("undefined"==typeof c)var c=function(){};switch(a){case"oauth_authenticate":case"oauth_authorize":return this[a](b,c);case"oauth2_token":return this[a](c)}var e={};"object"==typeof b?e=b:parse_str(b,e);for(var f="",g=a.split("_"),h=0;h<g.length;h++)h>0&&(f+="/"),f+=g[h];var i=["screen_name"];for(h=0;h<i.length;h++){var k=i[h].toUpperCase(),l=k.split("_").join("/");f=f.split(l).join(k)}var m=f,n=[];if(n=f.match(/[A-Z_]{2,}/))for(var h=0;h<n.length;h++){var k=n[h],o=k.toLowerCase();if(m=m.split(k).join(":"+o),"undefined"==typeof e[o]){for(j=0;26>j;j++)m=m.split(String.fromCharCode(65+j)).join("_"+String.fromCharCode(97+j));console.warn('To call the templated method "'+m+'", specify the parameter value for "'+o+'".')}f=f.split(k).join(e[o]),delete e[o]}for(h=0;26>h;h++)f=f.split(String.fromCharCode(65+h)).join("_"+String.fromCharCode(97+h)),m=m.split(String.fromCharCode(65+h)).join("_"+String.fromCharCode(97+h));var p=_detectMethod(m,e),q=_detectMultipart(m);return _callApi(p,f,m,e,q,d,c)},oauth_authenticate=function(a,b){"undefined"==typeof a.force_login&&(a.force_login=null),"undefined"==typeof a.screen_name&&(a.screen_name=null),null==_oauth_token&&console.warn("To get the authenticate URL, the OAuth token must be set.");var c=_endpoint_oauth+"oauth/authenticate?oauth_token="+_url(_oauth_token);return a.force_login===!0&&(c+="?force_login=1",null!==a.screen_name&&(c+="&screen_name="+a.screen_name)),b(c),!0},oauth_authorize=function(a,b){"undefined"==typeof a.force_login&&(a.force_login=null),"undefined"==typeof a.screen_name&&(a.screen_name=null),null==_oauth_token&&console.warn("To get the authorize URL, the OAuth token must be set.");var c=_endpoint_oauth+"oauth/authorize?oauth_token="+_url(_oauth_token);return a.force_login===!0&&(c+="?force_login=1",null!==a.screen_name&&(c+="&screen_name="+a.screen_name)),b(c),!0},oauth2_token=function(a){if(null==_oauth_consumer_key&&console.warn("To obtain a bearer token, the consumer key must be set."),"undefined"==typeof a)var a=function(){};var b="grant_type=client_credentials",c=_endpoint_oauth+"oauth2/token";_use_proxy&&(c=c.replace(_endpoint_base,_endpoint_proxy));var d;try{d=new XMLHttpRequest}catch(e){d=new ActiveXObject("Microsoft.XMLHTTP")}d.open("POST",c,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.setRequestHeader((_use_proxy?"X-":"")+"Authorization","Basic "+base64_encode(_oauth_consumer_key+":"+_oauth_consumer_secret)),d.onreadystatechange=function(){if(d.readyState>=4){var b=12027;try{b=d.status}catch(c){}var e=_parseApiReply("oauth2/token",d.responseText);e.httpstatus=b,200==b&&setBearerToken(e.access_token),a(e)}},d.send(b)},_url=function(a){return"array"==typeof a?array_map([this,"_url"],a):/boolean|number|string/.test(typeof a)?encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"):""},_sha1=function(a){return null==_oauth_consumer_secret&&console.warn("To generate a hash, the consumer secret must be set."),"function"!=typeof b64_hmac_sha1&&console.warn("To generate a hash, the Javascript SHA1.js must be available."),b64pad="=",b64_hmac_sha1(_oauth_consumer_secret+"&"+(null!=_oauth_token_secret?_oauth_token_secret:""),a)},base64_encode=function(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k=0,l=0,m="",n=[];if(!a)return a;do b=a.charCodeAt(k++),c=a.charCodeAt(k++),d=a.charCodeAt(k++),i=b<<16|c<<8|d,e=i>>18&63,f=i>>12&63,g=i>>6&63,h=63&i,n[l++]=j.charAt(e)+j.charAt(f)+j.charAt(g)+j.charAt(h);while(k<a.length);m=n.join("");var o=a.length%3;return(o?m.slice(0,o-3):m)+"===".slice(o||3)},http_build_query=function(a,b,c){var d,e,f=[],g=function(a,b,c){var d,e=[];if(b===!0?b="1":b===!1&&(b="0"),null!=b){if("object"==typeof b){for(d in b)null!=b[d]&&e.push(g(a+"["+d+"]",b[d],c));return e.join(c)}if("function"!=typeof b)return _url(a)+"="+_url(b);throw new Error("There was an error processing for http_build_query().")}return""};c||(c="&");for(e in a){d=a[e],b&&!isNaN(e)&&(e=String(b)+e);var h=g(e,d,c);""!=h&&f.push(h)}return f.join(c)},_nonce=function(a){if("undefined"==typeof a)var a=8;1>a&&console.warn("Invalid nonce length.");for(var b="",c=0;a>c;c++){var d=Math.floor(61*Math.random());b+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(d,d+1)}return b},_ksort=function(a){var b,c,d=[];b=function(a,b){var c=parseFloat(a),d=parseFloat(b),e=c+""===a,f=d+""===b;return e&&f?c>d?1:d>c?-1:0:e&&!f?1:!e&&f?-1:a>b?1:b>a?-1:0};for(c in a)a.hasOwnProperty(c)&&d.push(c);return d.sort(b),d},_clone=function(a){var b={};for(var c in a)b[c]="object"==typeof a[c]?b(a[c]):a[c];return b},_sign=function(a,b,c,d){if("undefined"==typeof c)var c={};if("undefined"==typeof d)var d=!1;null==_oauth_consumer_key&&console.warn("To generate a signature, the consumer key must be set.");var e={consumer_key:_oauth_consumer_key,version:"1.0",timestamp:Math.round((new Date).getTime()/1e3),nonce:_nonce(),signature_method:"HMAC-SHA1"},f={};for(var g in e){var h=e[g];f["oauth_"+g]=_url(h)}null!=_oauth_token&&(f.oauth_token=_url(_oauth_token)),oauth_params=_clone(f);for(var g in c){var h=c[g];f[g]=_url(h)}for(var i=_ksort(f),j="",k=0;k<i.length;k++){var g=i[k],h=f[g];j+=g+"="+h+"&"}j=j.substring(0,j.length-1);var l=_sha1(a+"&"+_url(b)+"&"+_url(j));if(c=d?f:oauth_params,c.oauth_signature=l,d){var m="";for(var g in c){var h=c[g];m+=g+"="+_url(h)+"&"}return m.substring(0,m.length-1)}var m="OAuth ";for(var g in c){var h=c[g];m+=g+'="'+_url(h)+'", '}return m.substring(0,m.length-2)},_detectMethod=function(a,b){switch(a){case"account/settings":a=b.length?a+"__post":a}var c={};c.GET=["statuses/mentions_timeline","statuses/user_timeline","statuses/home_timeline","statuses/retweets_of_me","statuses/retweets/:id","statuses/show/:id","statuses/oembed","search/tweets","direct_messages","direct_messages/sent","direct_messages/show","friendships/no_retweets/ids","friends/ids","followers/ids","friendships/lookup","friendships/incoming","friendships/outgoing","friendships/show","friends/list","followers/list","account/settings","account/verify_credentials","blocks/list","blocks/ids","users/lookup","users/show","users/search","users/contributees","users/contributors","users/profile_banner","users/suggestions/:slug","users/suggestions","users/suggestions/:slug/members","favorites/list","lists/list","lists/statuses","lists/memberships","lists/subscribers","lists/subscribers/show","lists/members/show","lists/members","lists/show","lists/subscriptions","saved_searches/list","saved_searches/show/:id","geo/id/:place_id","geo/reverse_geocode","geo/search","geo/similar_places","trends/place","trends/available","trends/closest","oauth/authenticate","oauth/authorize","help/configuration","help/languages","help/privacy","help/tos","application/rate_limit_status"],c.POST=["statuses/destroy/:id","statuses/update","statuses/retweet/:id","statuses/update_with_media","direct_messages/destroy","direct_messages/new","friendships/create","friendships/destroy","friendships/update","account/settings__post","account/update_delivery_device","account/update_profile","account/update_profile_background_image","account/update_profile_colors","account/update_profile_image","blocks/create","blocks/destroy","account/update_profile_banner","account/remove_profile_banner","favorites/destroy","favorites/create","lists/members/destroy","lists/subscribers/create","lists/subscribers/destroy","lists/members/create_all","lists/members/create","lists/destroy","lists/update","lists/create","lists/members/destroy_all","saved_searches/create","saved_searches/destroy/:id","geo/place","users/report_spam","oauth/access_token","oauth/request_token","oauth2/token","oauth2/invalidate_token"];for(var d in c)if(c[d].indexOf(a)>-1)return d;console.warn("Can't find HTTP method to use for \""+a+'".')},_detectMultipart=function(a){var b=["statuses/update_with_media","account/update_profile_background_image","account/update_profile_image","account/update_profile_banner"];return b.indexOf(a)>-1},_getEndpoint=function(a){return url="oauth"==a.substring(0,5)?_endpoint_oauth+a:_endpoint+a+".json"},_callApi=function(a,b,c,d,e,f,g){if("undefined"==typeof d)var d={};if("undefined"==typeof e)var e=!1;if("undefined"==typeof f)var f=!1;if("function"!=typeof g)var g=function(){};url=_getEndpoint(b,c);var h,i=null;try{h=new XMLHttpRequest}catch(j){h=new ActiveXObject("Microsoft.XMLHTTP")}if("GET"==a){var k=url;if("{}"!=JSON.stringify(d)&&(k+="?"+http_build_query(d)),i=_sign(a,url,d),_use_jsonp){k+="{}"!=JSON.stringify(d)?"&":"?";var l=_nonce();window[l]=function(a){a.httpstatus=200,g(a)},d.callback=l,k=url+"?"+_sign(a,url,d,!0);var m=document.createElement("script");m.type="text/javascript",m.src=k;var n=document.getElementsByTagName("body")[0];return n.appendChild(m),void 0}_use_proxy&&(k=k.replace(_endpoint_base,_endpoint_proxy)),h.open(a,k,!0)}else{if(_use_jsonp)return console.warn("Sending POST requests is not supported for IE7-9."),void 0;i=_sign(a,url,{}),e||(i=_sign(a,url,d),d=http_build_query(d)),post_fields=d,_use_proxy&&(url=url.replace(_endpoint_base,_endpoint_proxy)),h.open(a,url,!0),e?h.setRequestHeader("Content-Type","multipart/form-data"):h.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(f){if(null==_oauth_consumer_key&&console.warn("To make an app-only auth API request, the consumer key must be set."),null==_oauth_bearer_token)return oauth2_token(function(){_callApi(a,b,c,d,e,f,g)});i="Bearer "+_oauth_bearer_token}return null!==i&&h.setRequestHeader((_use_proxy?"X-":"")+"Authorization",i),h.onreadystatechange=function(){if(h.readyState>=4){var a=12027;try{a=h.status}catch(b){}var d=_parseApiReply(c,h.responseText);d.httpstatus=a,g(d)}},h.send("GET"==a?null:post_fields),!0},_parseApiReply=function(a,b){if("[]"==b)return[];var c=!1;try{c=JSON.parse(b)}catch(d){if(c={},0===b.indexOf('<?xml version="1.0" encoding="UTF-8"?>'))c.request=b.match(/<request>(.*)<\/request>/)[1],c.error=b.match(/<error>(.*)<\/error>/)[1];else for(var e=b.split("&"),f=0;f<e.length;f++){var g=e[f].split("=",2);c[g[0]]=g.length>1?unescape(g[1]):null}}return c};return{setConsumerKey:setConsumerKey,getVersion:getVersion,setToken:setToken,setBearerToken:setBearerToken,setUseProxy:setUseProxy,__call:__call,oauth_authenticate:oauth_authenticate,oauth_authorize:oauth_authorize,oauth2_token:oauth2_token}};