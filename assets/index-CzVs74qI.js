var w=Object.defineProperty;var _=(O,e,a)=>e in O?w(O,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):O[e]=a;var q=(O,e,a)=>(_(O,typeof e!="symbol"?e+"":e,a),a);import{C as L,E as k,s as B,t as P,L as M,a as E,i as j,d as D,f as A,b as H,c as N}from"./index-DEG7RVya.js";const f=63,p=64,u=1,I=2,y=3,F=4,Y=5,K=6,J=7,z=65,OO=66,eO=8,aO=9,rO=10,QO=11,PO=12,G=13,tO=19,oO=20,nO=29,sO=33,lO=34,fO=47,cO=0,T=1,g=2,d=3,x=4,i=class i{constructor(e,a,r){this.parent=e,this.depth=a,this.type=r,this.hash=(e?e.hash+e.hash<<8:0)+a+(a<<4)+r}};q(i,"top",new i(null,-1,cO));let s=i;function X(O,e){for(let a=0,r=e-O.pos-1;;r--,a++){let t=O.peek(r);if(o(t)||t==-1)return a}}function m(O){return O==32||O==9}function o(O){return O==10||O==13}function V(O){return m(O)||o(O)}function l(O){return O<0||V(O)}const XO=new L({start:s.top,reduce(O,e){return O.type==d&&(e==oO||e==lO)?O.parent:O},shift(O,e,a,r){if(e==y)return new s(O,X(r,r.pos),T);if(e==z||e==Y)return new s(O,X(r,r.pos),g);if(e==f)return O.parent;if(e==tO||e==sO)return new s(O,0,d);if(e==G&&O.type==x)return O.parent;if(e==fO){let t=/[1-9]/.exec(r.read(r.pos,a.pos));if(t)return new s(O,O.depth+ +t[0],x)}return O},hash(O){return O.hash}});function c(O,e,a=0){return O.peek(a)==e&&O.peek(a+1)==e&&O.peek(a+2)==e&&l(O.peek(a+3))}const dO=new k((O,e)=>{if(O.next==-1&&e.canShift(p))return O.acceptToken(p);let a=O.peek(-1);if((o(a)||a<0)&&e.context.type!=d){if(c(O,45))if(e.canShift(f))O.acceptToken(f);else return O.acceptToken(u,3);if(c(O,46))if(e.canShift(f))O.acceptToken(f);else return O.acceptToken(I,3);let r=0;for(;O.next==32;)r++,O.advance();(r<e.context.depth||r==e.context.depth&&e.context.type==T&&(O.next!=45||!l(O.peek(1))))&&O.next!=-1&&!o(O.next)&&O.next!=35&&O.acceptToken(f,-r)}},{contextual:!0}),RO=new k((O,e)=>{if(e.context.type==d){O.next==63&&(O.advance(),l(O.next)&&O.acceptToken(J));return}if(O.next==45)O.advance(),l(O.next)&&O.acceptToken(e.context.type==T&&e.context.depth==X(O,O.pos-1)?F:y);else if(O.next==63)O.advance(),l(O.next)&&O.acceptToken(e.context.type==g&&e.context.depth==X(O,O.pos-1)?K:Y);else{let a=O.pos;for(;;)if(m(O.next)){if(O.pos==a)return;O.advance()}else if(O.next==33)C(O);else if(O.next==38)$(O);else if(O.next==42){$(O);break}else if(O.next==39||O.next==34){if(h(O,!0))break;return}else if(O.next==91||O.next==123){if(!iO(O))return;break}else{Z(O,!0,!1,0);break}for(;m(O.next);)O.advance();if(O.next==58){if(O.pos==a&&e.canShift(nO))return;let r=O.peek(1);l(r)&&O.acceptTokenTo(e.context.type==g&&e.context.depth==X(O,a)?OO:z,a)}}},{contextual:!0});function SO(O){return O>32&&O<127&&O!=34&&O!=37&&O!=44&&O!=60&&O!=62&&O!=92&&O!=94&&O!=96&&O!=123&&O!=124&&O!=125}function U(O){return O>=48&&O<=57||O>=97&&O<=102||O>=65&&O<=70}function W(O,e){return O.next==37?(O.advance(),U(O.next)&&O.advance(),U(O.next)&&O.advance(),!0):SO(O.next)||e&&O.next==44?(O.advance(),!0):!1}function C(O){if(O.advance(),O.next==60){for(O.advance();;)if(!W(O,!0)){O.next==62&&O.advance();break}}else for(;W(O,!1););}function $(O){for(O.advance();!l(O.next)&&S(O.tag)!="f";)O.advance()}function h(O,e){let a=O.next,r=!1,t=O.pos;for(O.advance();;){let Q=O.next;if(Q<0)break;if(O.advance(),Q==a)if(Q==39)if(O.next==39)O.advance();else break;else break;else if(Q==92&&a==34)O.next>=0&&O.advance();else if(o(Q)){if(e)return!1;r=!0}else if(e&&O.pos>=t+1024)return!1}return!r}function iO(O){for(let e=[],a=O.pos+1024;;)if(O.next==91||O.next==123)e.push(O.next),O.advance();else if(O.next==39||O.next==34){if(!h(O,!0))return!1}else if(O.next==93||O.next==125){if(e[e.length-1]!=O.next-2)return!1;if(e.pop(),O.advance(),!e.length)return!0}else{if(O.next<0||O.pos>a||o(O.next))return!1;O.advance()}}const kO="iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";function S(O){return O<33?"u":O>125?"s":kO[O-33]}function b(O,e){let a=S(O);return a!="u"&&!(e&&a=="f")}function Z(O,e,a,r){if(S(O.next)=="s"||(O.next==63||O.next==58||O.next==45)&&b(O.peek(1),a))O.advance();else return!1;let t=O.pos;for(;;){let Q=O.next,n=0,R=r+1;for(;V(Q);){if(o(Q)){if(e)return!1;R=0}else R++;Q=O.peek(++n)}if(!(Q>=0&&(Q==58?b(O.peek(n+1),a):Q==35?O.peek(n-1)!=32:b(Q,a)))||!a&&R<=r||R==0&&!a&&(c(O,45,n)||c(O,46,n)))break;if(e&&S(Q)=="f")return!1;for(let v=n;v>=0;v--)O.advance();if(e&&O.pos>t+1024)return!1}return!0}const bO=new k((O,e)=>{if(O.next==33)C(O),O.acceptToken(PO);else if(O.next==38||O.next==42){let a=O.next==38?rO:QO;$(O),O.acceptToken(a)}else O.next==39||O.next==34?(h(O,!1),O.acceptToken(aO)):Z(O,!1,e.context.type==d,e.context.depth)&&O.acceptToken(eO)}),gO=new k((O,e)=>{let a=e.context.type==x?e.context.depth:-1,r=O.pos;O:for(;;){let t=0,Q=O.next;for(;Q==32;)Q=O.peek(++t);if(!t&&(c(O,45,t)||c(O,46,t))||!o(Q)&&(a<0&&(a=Math.max(e.context.depth+1,t)),t<a))break;for(;;){if(O.next<0)break O;let n=o(O.next);if(O.advance(),n)continue O;r=O.pos}}O.acceptTokenTo(G,r)}),xO=B({DirectiveName:P.keyword,DirectiveContent:P.attributeValue,"DirectiveEnd DocEnd":P.meta,QuotedLiteral:P.string,BlockLiteralHeader:P.special(P.string),BlockLiteralContent:P.content,Literal:P.content,"Key/Literal Key/QuotedLiteral":P.definition(P.propertyName),"Anchor Alias":P.labelName,Tag:P.typeName,Comment:P.lineComment,": , -":P.separator,"?":P.punctuation,"[ ]":P.squareBracket,"{ }":P.brace}),mO=M.deserialize({version:14,states:"5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",stateData:";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",goto:",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",nodeNames:"⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",maxTerm:74,context:XO,nodeProps:[["isolate",-3,8,9,14,""],["openedBy",18,"[",32,"{"],["closedBy",19,"]",33,"}"]],propSources:[xO],skippedNodes:[0],repeatNodeCount:6,tokenData:"-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",tokenizers:[dO,RO,bO,gO,0,1],topRules:{Stream:[0,15]},tokenPrec:0}),$O=E.define({name:"yaml",parser:mO.configure({props:[j.add({Stream:O=>{for(let e=O.node.resolve(O.pos,-1);e&&e.to>=O.pos;e=e.parent){if(e.name=="BlockLiteralContent"&&e.from<e.to)return O.baseIndentFor(e);if(e.name=="BlockLiteral")return O.baseIndentFor(e)+O.unit;if(e.name=="BlockSequence"||e.name=="BlockMapping")return O.column(e.from,1);if(e.name=="QuotedLiteral")return null;if(e.name=="Literal"){let a=O.column(e.from,1);if(a==O.lineIndent(e.from,1))return a;if(e.to>O.pos)return null}}return null},FlowMapping:D({closing:"}"}),FlowSequence:D({closing:"]"})}),A.add({"FlowMapping FlowSequence":H,"BlockSequence BlockMapping BlockLiteral":(O,e)=>({from:e.doc.lineAt(O.from).to,to:O.to})})]}),languageData:{commentTokens:{line:"#"},indentOnInput:/^\s*[\]\}]$/}});function qO(){return new N($O)}export{qO as yaml,$O as yamlLanguage};