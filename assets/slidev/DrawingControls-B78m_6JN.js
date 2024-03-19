import{n as O,C as T,D as Y,E as Z,F as Q,G as W,H as X,I as ee,J as ne,K as te,L as oe,M as se}from"../modules/unplugin-icons-U3OQhYcz.js";import{d as L,t as $,A as le,aC as ae,b as B,f as re,h as M,H as e,o as g,c as x,k as s,i as l,l as n,e as i,x as ie,a1 as m,a2 as ue,Z as ce,F as de,ai as b,g as _e}from"../modules/vue-Be3bPvwD.js";import{L as pe}from"../modules/shiki-GPPQWDsF.js";import{u as me}from"./DrawingPreview-DqRpjNu5.js";import{V as D}from"./SlidesShow-BMlk0A8Q.js";import{_ as z}from"../index-CLcW5-Tr.js";import{I as a}from"./IconButton-LQigKHiL.js";import"../monaco/bundled-types-BlgSCLB_.js";import"../modules/file-saver-DY7lxZlc.js";import"./bottom-D8vxKp6Q.js";import"./title-renderer-D_P4TKq7.js";const ge=L({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,f=$(null),w=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,w):$(w),{style:y}=ae(f,{initialValue:k});return(v,d)=>(g(),B("div",{ref_key:"el",ref:f,class:"fixed",style:M(e(y))},[re(v.$slots,"default")],4))}}),fe=z(ge,[["__file","/home/runner/work/foxy-reminder/foxy-reminder/slidev/node_modules/@slidev/client/internals/Draggable.vue"]]),we=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},Ce=L({__name:"DrawingControls",setup(h){const{brush:u,canClear:f,canRedo:w,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:c,brushColors:S}=me();function V(){v.undo()}function E(){v.redo()}let C="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function K(p){u.color=p,d.value=!0,r.value=C}return(p,t)=>{const U=O,A=T,F=Y,I=Z,N=Q,R=W,j=X,q=ee,H=ne,P=te,G=oe,J=se;return g(),x(fe,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:s(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:t[0]||(t[0]=o=>_("stylus"))},{default:s(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:t[1]||(t[1]=o=>_("line"))},{default:s(()=>[we]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:t[2]||(t[2]=o=>_("arrow"))},{default:s(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:t[3]||(t[3]=o=>_("ellipse"))},{default:s(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:t[4]||(t[4]=o=>_("rectangle"))},{default:s(()=>[n(I)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:t[5]||(t[5]=o=>_("eraseLine"))},{default:s(()=>[n(N)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:s(()=>[i("div",be,[i("div",ke,ie(e(u).size),1),i("div",ye,[m(i("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>e(u).size=o),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=o=>r.value=e(C))},null,544),[[ue,e(u).size]])])])]),default:s(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:s(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),B(de,null,ce(e(S),o=>(g(),x(a,{key:o,title:"Set brush color",class:l(e(u).color===o&&e(r)!=="eraseLine"?"active":"shallow"),onClick:xe=>K(o)},{default:s(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==o?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:M(e(d)?{background:o}:{borderColor:o})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=o=>V())},{default:s(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(w)}),onClick:t[9]||(t[9]=o=>E())},{default:s(()=>[n(j)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(f)}),onClick:t[10]||(t[10]=o=>e(y)())},{default:s(()=>[n(q)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=o=>c.value=!e(c))},{default:s(()=>[m(n(H,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(P,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=o=>d.value=!e(d))},{default:s(()=>[m(n(G,null,null,512),[[b,e(c)]]),m(n(J,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ue=z(Ce,[["__file","/home/runner/work/foxy-reminder/foxy-reminder/slidev/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ue as default};
