"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5596],{45596:(t,e,a)=>{a.d(e,{diagram:()=>T});var i,r=a(95468);a(24480),a(66250),a(16),a(99456),a(50595),a(74438),a(35145),a(46287);var d=a(64341),n=a(80391),s=a(65291),o=a(53940),g=a(28487),l={},p=(0,n.K2)((t,e)=>{l[t]=e},"set"),h=(t=>l[t],(0,n.K2)(()=>Object.keys(l),"keys")),c=(()=>h().length,{set:p}),x=(0,n.K2)(t=>t.append("circle").attr("class","start-state").attr("r",(0,n.D7)().state.sizeUnit).attr("cx",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit).attr("cy",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit),"drawStartState"),D=(0,n.K2)(t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,n.D7)().state.textHeight).attr("class","divider").attr("x2",2*(0,n.D7)().state.textHeight).attr("y1",0).attr("y2",0),"drawDivider"),u=(0,n.K2)((t,e)=>{let a=t.append("text").attr("x",2*(0,n.D7)().state.padding).attr("y",(0,n.D7)().state.textHeight+2*(0,n.D7)().state.padding).attr("font-size",(0,n.D7)().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",(0,n.D7)().state.padding).attr("y",(0,n.D7)().state.padding).attr("width",i.width+2*(0,n.D7)().state.padding).attr("height",i.height+2*(0,n.D7)().state.padding).attr("rx",(0,n.D7)().state.radius),a},"drawSimpleState"),f=(0,n.K2)((t,e)=>{let a=(0,n.K2)(function(t,e,a){let i=t.append("tspan").attr("x",2*(0,n.D7)().state.padding).text(e);a||i.attr("dy",(0,n.D7)().state.textHeight)},"addTspan"),i=t.append("text").attr("x",2*(0,n.D7)().state.padding).attr("y",(0,n.D7)().state.textHeight+1.3*(0,n.D7)().state.padding).attr("font-size",(0,n.D7)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),r=i.height,d=t.append("text").attr("x",(0,n.D7)().state.padding).attr("y",r+.4*(0,n.D7)().state.padding+(0,n.D7)().state.dividerMargin+(0,n.D7)().state.textHeight).attr("class","state-description"),s=!0,o=!0;e.descriptions.forEach(function(t){s||(a(d,t,o),o=!1),s=!1});let g=t.append("line").attr("x1",(0,n.D7)().state.padding).attr("y1",(0,n.D7)().state.padding+r+(0,n.D7)().state.dividerMargin/2).attr("y2",(0,n.D7)().state.padding+r+(0,n.D7)().state.dividerMargin/2).attr("class","descr-divider"),l=d.node().getBBox(),p=Math.max(l.width,i.width);return g.attr("x2",p+3*(0,n.D7)().state.padding),t.insert("rect",":first-child").attr("x",(0,n.D7)().state.padding).attr("y",(0,n.D7)().state.padding).attr("width",p+2*(0,n.D7)().state.padding).attr("height",l.height+r+2*(0,n.D7)().state.padding).attr("rx",(0,n.D7)().state.radius),t},"drawDescrState"),y=(0,n.K2)((t,e,a)=>{let i;let r=(0,n.D7)().state.padding,d=2*(0,n.D7)().state.padding,s=t.node().getBBox(),o=s.width,g=s.x,l=t.append("text").attr("x",0).attr("y",(0,n.D7)().state.titleShift).attr("font-size",(0,n.D7)().state.fontSize).attr("class","state-title").text(e.id),p=l.node().getBBox().width+d,h=Math.max(p,o);h===o&&(h+=d);let c=t.node().getBBox();e.doc,i=g-r,p>o&&(i=(o-h)/2+r),Math.abs(g-c.x)<r&&p>o&&(i=g-(p-o)/2);let x=1-(0,n.D7)().state.textHeight;return t.insert("rect",":first-child").attr("x",i).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",c.height+(0,n.D7)().state.textHeight+(0,n.D7)().state.titleShift+1).attr("rx","0"),l.attr("x",i+r),p<=o&&l.attr("x",g+(h-d)/2-p/2+r),t.insert("rect",":first-child").attr("x",i).attr("y",(0,n.D7)().state.titleShift-(0,n.D7)().state.textHeight-(0,n.D7)().state.padding).attr("width",h).attr("height",3*(0,n.D7)().state.textHeight).attr("rx",(0,n.D7)().state.radius),t.insert("rect",":first-child").attr("x",i).attr("y",(0,n.D7)().state.titleShift-(0,n.D7)().state.textHeight-(0,n.D7)().state.padding).attr("width",h).attr("height",c.height+3+2*(0,n.D7)().state.textHeight).attr("rx",(0,n.D7)().state.radius),t},"addTitleAndBox"),w=(0,n.K2)(t=>(t.append("circle").attr("class","end-state-outer").attr("r",(0,n.D7)().state.sizeUnit+(0,n.D7)().state.miniPadding).attr("cx",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit+(0,n.D7)().state.miniPadding).attr("cy",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit+(0,n.D7)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,n.D7)().state.sizeUnit).attr("cx",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit+2).attr("cy",(0,n.D7)().state.padding+(0,n.D7)().state.sizeUnit+2)),"drawEndState"),m=(0,n.K2)((t,e)=>{let a=(0,n.D7)().state.forkWidth,i=(0,n.D7)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,n.D7)().state.padding).attr("y",(0,n.D7)().state.padding)},"drawForkJoinState"),b=(0,n.K2)((t,e,a,i)=>{let r=0,d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let s=t.replace(/\r\n/g,"<br/>"),o=(s=s.replace(/\n/g,"<br/>")).split(n.Y2.lineBreakRegex),g=1.25*(0,n.D7)().state.noteMargin;for(let t of o){let i=t.trim();if(i.length>0){let t=d.append("tspan");t.text(i),0===g&&(g+=t.node().getBBox().height),r+=g,t.attr("x",e+(0,n.D7)().state.noteMargin),t.attr("y",a+r+1.25*(0,n.D7)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:r}},"_drawLongText"),B=(0,n.K2)((t,e)=>{e.attr("class","state-note");let a=e.append("rect").attr("x",0).attr("y",(0,n.D7)().state.padding),{textWidth:i,textHeight:r}=b(t,0,0,e.append("g"));return a.attr("height",r+2*(0,n.D7)().state.noteMargin),a.attr("width",i+2*(0,n.D7)().state.noteMargin),a},"drawNote"),k=(0,n.K2)(function(t,e){let a=e.id,i={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&x(r),"end"===e.type&&w(r),("fork"===e.type||"join"===e.type)&&m(r,e),"note"===e.type&&B(e.note.text,r),"divider"===e.type&&D(r),"default"===e.type&&0===e.descriptions.length&&u(r,e),"default"===e.type&&e.descriptions.length>0&&f(r,e);let d=r.node().getBBox();return i.width=d.width+2*(0,n.D7)().state.padding,i.height=d.height+2*(0,n.D7)().state.padding,c.set(a,i),i},"drawState"),N=0,E=(0,n.K2)(function(t,e,a){let i=(0,n.K2)(function(t){switch(t){case r.iP.relationType.AGGREGATION:return"aggregation";case r.iP.relationType.EXTENSION:return"extension";case r.iP.relationType.COMPOSITION:return"composition";case r.iP.relationType.DEPENDENCY:return"dependency"}},"getRelationType");e.points=e.points.filter(t=>!Number.isNaN(t.y));let o=e.points,g=(0,s.n8j)().x(function(t){return t.x}).y(function(t){return t.y}).curve(s.qrM),l=t.append("path").attr("d",g(o)).attr("id","edge"+N).attr("class","transition"),p="";if((0,n.D7)().state.arrowMarkerAbsolute&&(p=(p=(p=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),l.attr("marker-end","url("+p+"#"+i(r.iP.relationType.DEPENDENCY)+"End)"),void 0!==a.title){let i=t.append("g").attr("class","stateLabel"),{x:r,y:s}=d._K.calcLabelPosition(e.points),o=n.Y2.getRows(a.title),g=0,l=[],p=0,h=0;for(let t=0;t<=o.length;t++){let e=i.append("text").attr("text-anchor","middle").text(o[t]).attr("x",r).attr("y",s+g),a=e.node().getBBox();p=Math.max(p,a.width),h=Math.min(h,a.x),n.Rm.info(a.x,r,s+g),0===g&&(g=e.node().getBBox().height,n.Rm.info("Title height",g,s)),l.push(e)}let c=g*o.length;if(o.length>1){let t=(o.length-1)*g*.5;l.forEach((e,a)=>e.attr("y",s+a*g-t)),c=g*o.length}let x=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",r-p/2-(0,n.D7)().state.padding/2).attr("y",s-c/2-(0,n.D7)().state.padding/2-3.5).attr("width",p+(0,n.D7)().state.padding).attr("height",c+(0,n.D7)().state.padding),n.Rm.info(x)}N++},"drawEdge"),S={},M=(0,n.K2)(function(){},"setConf"),v=(0,n.K2)(function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),K=(0,n.K2)(function(t,e,a,r){let d;i=(0,n.D7)().state;let o=(0,n.D7)().securityLevel;"sandbox"===o&&(d=(0,s.Ltv)("#i"+e));let g="sandbox"===o?(0,s.Ltv)(d.nodes()[0].contentDocument.body):(0,s.Ltv)("body"),l="sandbox"===o?d.nodes()[0].contentDocument:document;n.Rm.debug("Rendering diagram "+t);let p=g.select(`[id='${e}']`);v(p),z(r.db.getRootDoc(),p,void 0,!1,g,l,r);let h=i.padding,c=p.node().getBBox(),x=c.width+2*h,D=c.height+2*h;(0,n.a$)(p,D,1.75*x,i.useMaxWidth),p.attr("viewBox",`${c.x-i.padding}  ${c.y-i.padding} `+x+" "+D)},"draw"),R=(0,n.K2)(t=>t?t.length*i.fontSizeFactor:1,"getLabelWidth"),z=(0,n.K2)((t,e,a,r,d,s,l)=>{let p;let h=new g.T({compound:!0,multigraph:!0}),c=!0;for(p=0;p<t.length;p++)if("relation"===t[p].stmt){c=!1;break}a?h.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:c?1:i.edgeLengthFactor,nodeSep:c?1:50,isMultiGraph:!0}):h.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:c?1:i.edgeLengthFactor,nodeSep:c?1:50,ranker:"tight-tree",isMultiGraph:!0}),h.setDefaultEdgeLabel(function(){return{}}),l.db.extract(t);let x=l.db.getStates(),D=l.db.getRelations();for(let t of Object.keys(x)){let n;let o=x[t];if(a&&(o.parentId=a),o.doc){let t=e.append("g").attr("id",o.id).attr("class","stateGroup");n=z(o.doc,t,o.id,!r,d,s,l);{let e=(t=y(t,o,r)).node().getBBox();n.width=e.width,n.height=e.height+i.padding/2,S[o.id]={y:i.compositTitleSize}}}else n=k(e,o,h);if(o.note){let t=k(e,{descriptions:[],id:o.id+"-note",note:o.note,type:"note"},h);"left of"===o.note.position?(h.setNode(n.id+"-note",t),h.setNode(n.id,n)):(h.setNode(n.id,n),h.setNode(n.id+"-note",t)),h.setParent(n.id,n.id+"-group"),h.setParent(n.id+"-note",n.id+"-group")}else h.setNode(n.id,n)}n.Rm.debug("Count=",h.nodeCount(),h);let u=0;D.forEach(function(t){u++,n.Rm.debug("Setting edge",t),h.setEdge(t.id1,t.id2,{relation:t,width:R(t.title),height:i.labelHeight*n.Y2.getRows(t.title).length,labelpos:"c"},"id"+u)}),(0,o.Zp)(h),n.Rm.debug("Graph after layout",h.nodes());let f=e.node();h.nodes().forEach(function(t){void 0!==t&&void 0!==h.node(t)?(n.Rm.warn("Node "+t+": "+JSON.stringify(h.node(t))),d.select("#"+f.id+" #"+t).attr("transform","translate("+(h.node(t).x-h.node(t).width/2)+","+(h.node(t).y+(S[t]?S[t].y:0)-h.node(t).height/2)+" )"),d.select("#"+f.id+" #"+t).attr("data-x-shift",h.node(t).x-h.node(t).width/2),s.querySelectorAll("#"+f.id+" #"+t+" .divider").forEach(t=>{let e=t.parentElement,a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),Number.isNaN(i=parseInt(e.getAttribute("data-x-shift"),10))&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)})):n.Rm.debug("No Node "+t+": "+JSON.stringify(h.node(t)))});let w=f.getBBox();h.edges().forEach(function(t){void 0!==t&&void 0!==h.edge(t)&&(n.Rm.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(h.edge(t))),E(e,h.edge(t),h.edge(t).relation))});let m={id:a||"root",label:a||"root",width:0,height:0};return m.width=(w=f.getBBox()).width+2*i.padding,m.height=w.height+2*i.padding,n.Rm.debug("Doc rendered",m,h),m},"renderDoc"),T={parser:r.Zk,db:r.iP,renderer:{setConf:M,draw:K},styles:r.tM,init:(0,n.K2)(t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.iP.clear()},"init")}}}]);