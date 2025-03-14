"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2325],{62325:(t,e,i)=>{i.d(e,{diagram:()=>O});var n=i(27740),s=i(15078);i(64054),i(56203),i(49400),i(3635);var r=i(70336),o=i(22553),a=i(85218),l=i(61565),c=i(45221),h=function(){var t=(0,o.K2)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[1,4],i=[1,13],n=[1,12],s=[1,15],r=[1,16],a=[1,20],l=[1,19],c=[6,7,8],h=[1,26],u=[1,24],g=[1,25],d=[6,7,11],p=[1,31],y=[6,7,11,24],f=[1,6,13,16,17,20,23],m=[1,35],_=[1,36],b=[1,6,7,11,13,16,17,20,23],k=[1,38],E={trace:(0,o.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:(0,o.K2)(function(t,e,i,n,s,r,o){var a=r.length-1;switch(s){case 6:case 7:return n;case 8:n.getLogger().trace("Stop NL ");break;case 9:n.getLogger().trace("Stop EOF ");break;case 11:n.getLogger().trace("Stop NL2 ");break;case 12:n.getLogger().trace("Stop EOF2 ");break;case 15:n.getLogger().info("Node: ",r[a-1].id),n.addNode(r[a-2].length,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 16:n.getLogger().info("Node: ",r[a].id),n.addNode(r[a-1].length,r[a].id,r[a].descr,r[a].type);break;case 17:n.getLogger().trace("Icon: ",r[a]),n.decorateNode({icon:r[a]});break;case 18:case 23:n.decorateNode({class:r[a]});break;case 19:n.getLogger().trace("SPACELIST");break;case 20:n.getLogger().trace("Node: ",r[a-1].id),n.addNode(0,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 21:n.getLogger().trace("Node: ",r[a].id),n.addNode(0,r[a].id,r[a].descr,r[a].type);break;case 22:n.decorateNode({icon:r[a]});break;case 27:n.getLogger().trace("node found ..",r[a-2]),this.$={id:r[a-1],descr:r[a-1],type:n.getType(r[a-2],r[a])};break;case 28:this.$={id:r[a],descr:r[a],type:0};break;case 29:n.getLogger().trace("node found ..",r[a-3]),this.$={id:r[a-3],descr:r[a-1],type:n.getType(r[a-2],r[a])};break;case 30:this.$=r[a-1]+r[a];break;case 31:this.$=r[a]}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:e},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:e},{6:i,7:[1,10],9:9,12:11,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},t(c,[2,3]),{1:[2,2]},t(c,[2,4]),t(c,[2,5]),{1:[2,6],6:i,12:21,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:i,9:22,12:11,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:h,7:u,10:23,11:g},t(d,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:a,23:l}),t(d,[2,19]),t(d,[2,21],{15:30,24:p}),t(d,[2,22]),t(d,[2,23]),t(y,[2,25]),t(y,[2,26]),t(y,[2,28],{20:[1,32]}),{21:[1,33]},{6:h,7:u,10:34,11:g},{1:[2,7],6:i,12:21,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},t(f,[2,14],{7:m,11:_}),t(b,[2,8]),t(b,[2,9]),t(b,[2,10]),t(d,[2,16],{15:37,24:p}),t(d,[2,17]),t(d,[2,18]),t(d,[2,20],{24:k}),t(y,[2,31]),{21:[1,39]},{22:[1,40]},t(f,[2,13],{7:m,11:_}),t(b,[2,11]),t(b,[2,12]),t(d,[2,15],{24:k}),t(y,[2,30]),{22:[1,41]},t(y,[2,27]),t(y,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:(0,o.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,o.K2)(function(t){var e=this,i=[0],n=[],s=[null],r=[],a=this.table,l="",c=0,h=0,u=0,g=r.slice.call(arguments,1),d=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);d.setInput(t,p.yy),p.yy.lexer=d,p.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var f=d.yylloc;r.push(f);var m=d.options&&d.options.ranges;function _(){var t;return"number"!=typeof(t=n.pop()||d.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.K2)(function(t){i.length=i.length-2*t,s.length=s.length-t,r.length=r.length-t},"popStack"),(0,o.K2)(_,"lex");for(var b,k,E,S,N,x,D,L,I,C={};;){if(E=i[i.length-1],this.defaultActions[E]?S=this.defaultActions[E]:(null==b&&(b=_()),S=a[E]&&a[E][b]),void 0===S||!S.length||!S[0]){var O="";for(x in I=[],a[E])this.terminals_[x]&&x>2&&I.push("'"+this.terminals_[x]+"'");O=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+I.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(O,{text:d.match,token:this.terminals_[b]||b,line:d.yylineno,loc:f,expected:I})}if(S[0]instanceof Array&&S.length>1)throw Error("Parse Error: multiple actions possible at state: "+E+", token: "+b);switch(S[0]){case 1:i.push(b),s.push(d.yytext),r.push(d.yylloc),i.push(S[1]),b=null,k?(b=k,k=null):(h=d.yyleng,l=d.yytext,c=d.yylineno,f=d.yylloc,u>0&&u--);break;case 2:if(D=this.productions_[S[1]][1],C.$=s[s.length-D],C._$={first_line:r[r.length-(D||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(D||1)].first_column,last_column:r[r.length-1].last_column},m&&(C._$.range=[r[r.length-(D||1)].range[0],r[r.length-1].range[1]]),void 0!==(N=this.performAction.apply(C,[l,h,c,p.yy,S[1],s,r].concat(g))))return N;D&&(i=i.slice(0,-1*D*2),s=s.slice(0,-1*D),r=r.slice(0,-1*D)),i.push(this.productions_[S[1]][0]),s.push(C.$),r.push(C._$),L=a[i[i.length-2]][i[i.length-1]],i.push(L);break;case 3:return!0}}return!0},"parse")};function S(){this.yy={}}return E.lexer={EOF:1,parseError:(0,o.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,o.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,o.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.K2)(function(){return this._more=!0,this},"more"),reject:(0,o.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,o.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,o.K2)(function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in s)this[r]=s[r];return!1},"test_match"),next:(0,o.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.K2)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,o.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,o.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,o.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,o.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.K2)(function(t,e,i,n){switch(i){case 0:return this.pushState("shapeData"),e.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:return e.yytext=e.yytext.replace(/\n\s*/g,"<br/>"),24;case 4:return 24;case 5:case 10:case 29:case 32:this.popState();break;case 6:return t.getLogger().trace("Found comment",e.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 11:t.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return t.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:t.getLogger().trace("end icon"),this.popState();break;case 16:return t.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return t.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return t.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return t.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:case 21:case 22:case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 30:t.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return t.getLogger().trace("description:",e.yytext),"NODE_DESCR";case 33:return this.popState(),t.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),t.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),t.getLogger().trace("node end ...",e.yytext),"NODE_DEND";case 36:case 39:case 40:return this.popState(),t.getLogger().trace("node end (("),"NODE_DEND";case 37:case 38:return this.popState(),t.getLogger().trace("node end (-"),"NODE_DEND";case 41:case 42:return t.getLogger().trace("Long description:",e.yytext),21}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}},(0,o.K2)(S,"Parser"),S.prototype=E,E.Parser=S,new S}();h.parser=h;var u=[],g=[],d=0,p={},y=(0,o.K2)(()=>{u=[],g=[],d=0,p={}},"clear"),f=(0,o.K2)(t=>{if(0===u.length)return null;let e=u[0].level,i=null;for(let t=u.length-1;t>=0;t--)if(u[t].level!==e||i||(i=u[t]),u[t].level<e)throw Error('Items without section detected, found section ("'+u[t].label+'")');return t===i?.level?null:i},"getSection"),m=(0,o.K2)(function(){return g},"getSections"),_=(0,o.K2)(function(){let t=[],e=m(),i=(0,o.D7)();for(let n of e){let e={id:n.id,label:(0,o.jZ)(n.label??"",i),isGroup:!0,ticket:n.ticket,shape:"kanbanSection",level:n.level,look:i.look};for(let s of(t.push(e),u.filter(t=>t.parentId===n.id))){let e={id:s.id,parentId:n.id,label:(0,o.jZ)(s.label??"",i),isGroup:!1,ticket:s?.ticket,priority:s?.priority,assigned:s?.assigned,icon:s?.icon,shape:"kanbanItem",level:s.level,rx:5,ry:5,cssStyles:["text-align: left"]};t.push(e)}}return{nodes:t,edges:[],other:{},config:(0,o.D7)()}},"getData"),b=(0,o.K2)((t,e,i,s,r)=>{let a=(0,o.D7)(),l=a.mindmap?.padding??o.UI.mindmap.padding;switch(s){case k.ROUNDED_RECT:case k.RECT:case k.HEXAGON:l*=2}let c={id:(0,o.jZ)(e,a)||"kbn"+d++,level:t,label:(0,o.jZ)(i,a),width:a.mindmap?.maxNodeWidth??o.UI.mindmap.maxNodeWidth,padding:l,isGroup:!1};if(void 0!==r){let t;t=r.includes("\n")?r+"\n":"{\n"+r+"\n}";let e=(0,n.H)(t,{schema:n.r});if(e.shape&&(e.shape!==e.shape.toLowerCase()||e.shape.includes("_")))throw Error(`No such shape: ${e.shape}. Shape names should be lowercase.`);e?.shape&&"kanbanItem"===e.shape&&(c.shape=e?.shape),e?.label&&(c.label=e?.label),e?.icon&&(c.icon=e?.icon.toString()),e?.assigned&&(c.assigned=e?.assigned.toString()),e?.ticket&&(c.ticket=e?.ticket.toString()),e?.priority&&(c.priority=e?.priority)}let h=f(t);h?c.parentId=h.id||"kbn"+d++:g.push(c),u.push(c)},"addNode"),k={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},E=(0,o.K2)((t,e)=>{switch(o.Rm.debug("In get type",t,e),t){case"[":return k.RECT;case"(":return")"===e?k.ROUNDED_RECT:k.CLOUD;case"((":return k.CIRCLE;case")":return k.CLOUD;case"))":return k.BANG;case"{{":return k.HEXAGON;default:return k.DEFAULT}},"getType"),S=(0,o.K2)((t,e)=>{p[t]=e},"setElementForId"),N=(0,o.K2)(t=>{if(!t)return;let e=(0,o.D7)(),i=u[u.length-1];t.icon&&(i.icon=(0,o.jZ)(t.icon,e)),t.class&&(i.cssClasses=(0,o.jZ)(t.class,e))},"decorateNode"),x=(0,o.K2)(t=>{switch(t){case k.DEFAULT:return"no-border";case k.RECT:return"rect";case k.ROUNDED_RECT:return"rounded-rect";case k.CIRCLE:return"circle";case k.CLOUD:return"cloud";case k.BANG:return"bang";case k.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),D=(0,o.K2)(()=>o.Rm,"getLogger"),L=(0,o.K2)(t=>p[t],"getElementById"),I=(0,o.K2)(async(t,e,i,n)=>{o.Rm.debug("Rendering kanban diagram\n"+t);let a=n.db.getData(),l=(0,o.D7)();l.htmlLabels=!1;let c=(0,r.D)(e),h=c.append("g");h.attr("class","sections");let u=c.append("g");u.attr("class","items");let g=a.nodes.filter(t=>t.isGroup),d=0,p=[],y=25;for(let t of g){let e=l?.kanban?.sectionWidth||200;t.x=e*(d+=1)+(d-1)*10/2,t.width=e,t.y=0,t.height=3*e,t.rx=5,t.ry=5,t.cssClasses=t.cssClasses+" section-"+d;let i=await (0,s.U)(h,t);y=Math.max(y,i?.labelBBox?.height),p.push(i)}let f=0;for(let t of g){let e=p[f];f+=1;let i=l?.kanban?.sectionWidth||200,n=-(3*i)/2+y,r=n;for(let e of a.nodes.filter(e=>e.parentId===t.id)){if(e.isGroup)throw Error("Groups within groups are not allowed in Kanban diagrams");e.x=t.x,e.width=i-15;let n=(await (0,s.on)(u,e,{config:l})).node().getBBox();e.y=r+n.height/2,await (0,s.U_)(e),r=e.y+n.height/2+5}let o=e.cluster.select("rect"),c=Math.max(r-n+30,50)+(y-25);o.attr("height",c)}(0,o.ot)(void 0,c,l.mindmap?.padding??o.UI.kanban.padding,l.mindmap?.useMaxWidth??o.UI.kanban.useMaxWidth)},"draw"),C=(0,o.K2)(t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,a.A)(t["lineColor"+e])?t["lineColor"+e]=(0,l.A)(t["lineColor"+e],20):t["lineColor"+e]=(0,c.A)(t["lineColor"+e],20);let i=(0,o.K2)((e,i)=>t.darkMode?(0,c.A)(e,i):(0,l.A)(e,i),"adjuster");for(let n=0;n<t.THEME_COLOR_LIMIT;n++){let s=""+(17-3*n);e+=`
    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} polygon, .section-${n-1} path  {
      fill: ${i(t["cScale"+n],10)};
      stroke: ${i(t["cScale"+n],10)};

    }
    .section-${n-1} text {
     fill: ${t["cScaleLabel"+n]};
    }
    .node-icon-${n-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+n]};
    }
    .section-edge-${n-1}{
      stroke: ${t["cScale"+n]};
    }
    .edge-depth-${n-1}{
      stroke-width: ${s};
    }
    .section-${n-1} line {
      stroke: ${t["cScaleInv"+n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    text-decoration: underline;
  }
    `}return e},"genSections"),O={db:{clear:y,addNode:b,getSections:m,getData:_,nodeType:k,getType:E,setElementForId:S,decorateNode:N,type2Str:x,getLogger:D,getElementById:L},renderer:{draw:I},parser:h,styles:(0,o.K2)(t=>`
  .edge {
    stroke-width: 3;
  }
  ${C(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${t.textColor};
    fill: ${t.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles")}}}]);