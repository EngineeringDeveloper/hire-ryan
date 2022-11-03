import{L as ci,M as Pt,N as En,A as Vr,O as Wn,S as Tt,i as Lt,s as Dt,F as dn,G as hn,H as fn,I as pn,f as Le,t as Re,K as yt,w as Qe,x as $e,y as et,z as tt,k as Gf,l as Hf,m as Wf,h as Et,n as jf,b as kt,P as qf,Q as wi,g as au,d as lu,D as Xf,o as Yf,R as _o,T as qn,U as Ps,V as fi,a as Vt,c as Ut,W as pi,X as it,B as Kf}from"../../chunks/index-0454ecba.js";import{d as Zf,w as Qt,r as Jf}from"../../chunks/index-96ef2005.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="146",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qf=0,Ml=1,$f=2,cu=1,uu=2,Nr=3,dr=0,cn=1,Hn=2,ui=0,cr=1,Sl=2,Cl=3,El=4,ep=5,ar=100,tp=101,np=102,Al=103,Pl=104,ip=200,rp=201,sp=202,op=203,du=204,hu=205,ap=206,lp=207,cp=208,up=209,dp=210,hp=0,fp=1,pp=2,$o=3,mp=4,gp=5,_p=6,vp=7,fu=0,bp=1,wp=2,Pn=0,xp=1,yp=2,Mp=3,pu=4,Sp=5,mu=300,hr=301,fr=302,ea=303,ta=304,Ts=306,na=1e3,wn=1001,ia=1002,qt=1003,Tl=1004,Ll=1005,on=1006,Cp=1007,Ls=1008,Ri=1009,Ep=1010,Ap=1011,gu=1012,Pp=1013,Ai=1014,Pi=1015,Ur=1016,Tp=1017,Lp=1018,ur=1020,Dp=1021,Rp=1022,xn=1023,Ip=1024,kp=1025,Li=1026,pr=1027,Op=1028,Np=1029,Fp=1030,Vp=1031,Up=1033,vo=33776,bo=33777,wo=33778,xo=33779,Dl=35840,Rl=35841,Il=35842,kl=35843,zp=36196,Ol=37492,Nl=37496,Fl=37808,Vl=37809,Ul=37810,zl=37811,Bl=37812,Gl=37813,Hl=37814,Wl=37815,jl=37816,ql=37817,Xl=37818,Yl=37819,Kl=37820,Zl=37821,Jl=36492,di=3e3,ct=3001,Bp=3200,Gp=3201,_u=0,Hp=1,Bn="srgb",Ti="srgb-linear",yo=7680,Wp=519,Ql=35044,$l="300 es",ra=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,ec=180/Math.PI;function Hr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Xt(s,e,t){return Math.max(e,Math.min(t,s))}function jp(s,e){return(s%e+e)%e}function So(s,e,t){return(1-t)*s+t*e}function tc(s){return(s&s-1)===0&&s!==0}function sa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rs(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class an{constructor(){an.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,a,u,c,h,f){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=h,p[6]=n,p[7]=u,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],p=n[4],m=n[7],g=n[2],w=n[5],y=n[8],_=r[0],v=r[3],b=r[6],E=r[1],S=r[4],C=r[7],A=r[2],L=r[5],F=r[8];return a[0]=u*_+c*E+h*A,a[3]=u*v+c*S+h*L,a[6]=u*b+c*C+h*F,a[1]=f*_+p*E+m*A,a[4]=f*v+p*S+m*L,a[7]=f*b+p*C+m*F,a[2]=g*_+w*E+y*A,a[5]=g*v+w*S+y*L,a[8]=g*b+w*C+y*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],p=e[8];return t*u*p-t*c*f-n*a*p+n*c*h+r*a*f-r*u*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],p=e[8],m=p*u-c*f,g=c*h-p*a,w=f*a-u*h,y=t*m+n*g+r*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=m*_,e[1]=(r*f-p*n)*_,e[2]=(c*n-r*u)*_,e[3]=g*_,e[4]=(p*t-r*h)*_,e[5]=(r*a-c*t)*_,e[6]=w*_,e[7]=(n*h-f*t)*_,e[8]=(u*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-r*f,r*h,-r*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,a=r[0],u=r[3],c=r[6],h=r[1],f=r[4],p=r[7];return r[0]=t*a+n*h,r[3]=t*u+n*f,r[6]=t*c+n*p,r[1]=-n*a+t*h,r[4]=-n*u+t*f,r[7]=-n*c+t*p,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Co={[Bn]:{[Ti]:Di},[Ti]:{[Bn]:Es}},gn={legacyMode:!0,get workingColorSpace(){return Ti},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Co[e]&&Co[e][t]!==void 0){const n=Co[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xt={r:0,g:0,b:0},_n={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Eo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function os(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ti){return this.r=e,this.g=t,this.b=n,gn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ti){if(e=jp(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Eo(u,a,e+1/3),this.g=Eo(u,a,e),this.b=Eo(u,a,e-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(e,t=Bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,gn.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,gn.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const h=parseFloat(a[1])/360,f=parseFloat(a[2])/100,p=parseFloat(a[3])/100;return n(a[4]),this.setHSL(h,f,p,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,gn.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,gn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Bn){const n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return gn.fromWorkingColorSpace(os(this,xt),e),Xt(xt.r*255,0,255)<<16^Xt(xt.g*255,0,255)<<8^Xt(xt.b*255,0,255)<<0}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ti){gn.fromWorkingColorSpace(os(this,xt),t);const n=xt.r,r=xt.g,a=xt.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let h,f;const p=(c+u)/2;if(c===u)h=0,f=0;else{const m=u-c;switch(f=p<=.5?m/(u+c):m/(2-u-c),u){case n:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-n)/m+2;break;case a:h=(n-r)/m+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Ti){return gn.fromWorkingColorSpace(os(this,xt),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Bn){return gn.fromWorkingColorSpace(os(this,xt),e),e!==Bn?`color(${e} ${xt.r} ${xt.g} ${xt.b})`:`rgb(${xt.r*255|0},${xt.g*255|0},${xt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=n,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(ss);const n=So(_n.h,ss.h,t),r=So(_n.s,ss.s,t),a=So(_n.l,ss.l,t);return this.setHSL(n,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=bu;let Xi;class wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=zr("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Di(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xu{constructor(e=null){this.isSource=!0,this.uuid=Hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(Ao(r[u].image)):a.push(Ao(r[u]))}else a=Ao(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class un extends ki{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=wn,r=wn,a=on,u=Ls,c=xn,h=Ri,f=1,p=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Hr(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new an,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=mu;class At{constructor(e=0,t=0,n=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,f=h[0],p=h[4],m=h[8],g=h[1],w=h[5],y=h[9],_=h[2],v=h[6],b=h[10];if(Math.abs(p-g)<.01&&Math.abs(m-_)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+_)<.1&&Math.abs(y+v)<.1&&Math.abs(f+w+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(f+1)/2,C=(w+1)/2,A=(b+1)/2,L=(p+g)/4,F=(m+_)/4,M=(y+v)/4;return S>C&&S>A?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=L/n,a=F/n):C>A?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=L/r,a=M/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=F/a,r=M/a),this.set(n,r,a,t),this}let E=Math.sqrt((v-y)*(v-y)+(m-_)*(m-_)+(g-p)*(g-p));return Math.abs(E)<.001&&(E=1),this.x=(v-y)/E,this.y=(m-_)/E,this.z=(g-p)/E,this.w=Math.acos((f+w+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends ki{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:on,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yu extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xp extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let h=n[r+0],f=n[r+1],p=n[r+2],m=n[r+3];const g=a[u+0],w=a[u+1],y=a[u+2],_=a[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=g,e[t+1]=w,e[t+2]=y,e[t+3]=_;return}if(m!==_||h!==g||f!==w||p!==y){let v=1-c;const b=h*g+f*w+p*y+m*_,E=b>=0?1:-1,S=1-b*b;if(S>Number.EPSILON){const A=Math.sqrt(S),L=Math.atan2(A,b*E);v=Math.sin(v*L)/A,c=Math.sin(c*L)/A}const C=c*E;if(h=h*v+g*C,f=f*v+w*C,p=p*v+y*C,m=m*v+_*C,v===1-c){const A=1/Math.sqrt(h*h+f*f+p*p+m*m);h*=A,f*=A,p*=A,m*=A}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],h=n[r+1],f=n[r+2],p=n[r+3],m=a[u],g=a[u+1],w=a[u+2],y=a[u+3];return e[t]=c*y+p*m+h*w-f*g,e[t+1]=h*y+p*g+f*m-c*w,e[t+2]=f*y+p*w+c*g-h*m,e[t+3]=p*y-c*m-h*g-f*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),p=c(r/2),m=c(a/2),g=h(n/2),w=h(r/2),y=h(a/2);switch(u){case"XYZ":this._x=g*p*m+f*w*y,this._y=f*w*m-g*p*y,this._z=f*p*y+g*w*m,this._w=f*p*m-g*w*y;break;case"YXZ":this._x=g*p*m+f*w*y,this._y=f*w*m-g*p*y,this._z=f*p*y-g*w*m,this._w=f*p*m+g*w*y;break;case"ZXY":this._x=g*p*m-f*w*y,this._y=f*w*m+g*p*y,this._z=f*p*y+g*w*m,this._w=f*p*m-g*w*y;break;case"ZYX":this._x=g*p*m-f*w*y,this._y=f*w*m+g*p*y,this._z=f*p*y-g*w*m,this._w=f*p*m+g*w*y;break;case"YZX":this._x=g*p*m+f*w*y,this._y=f*w*m+g*p*y,this._z=f*p*y-g*w*m,this._w=f*p*m-g*w*y;break;case"XZY":this._x=g*p*m-f*w*y,this._y=f*w*m-g*p*y,this._z=f*p*y+g*w*m,this._w=f*p*m+g*w*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],h=t[9],f=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const w=.5/Math.sqrt(g+1);this._w=.25/w,this._x=(p-h)*w,this._y=(a-f)*w,this._z=(u-r)*w}else if(n>c&&n>m){const w=2*Math.sqrt(1+n-c-m);this._w=(p-h)/w,this._x=.25*w,this._y=(r+u)/w,this._z=(a+f)/w}else if(c>m){const w=2*Math.sqrt(1+c-n-m);this._w=(a-f)/w,this._x=(r+u)/w,this._y=.25*w,this._z=(h+p)/w}else{const w=2*Math.sqrt(1+m-n-c);this._w=(u-r)/w,this._x=(a+f)/w,this._y=(h+p)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,h=t._y,f=t._z,p=t._w;return this._x=n*p+u*c+r*f-a*h,this._y=r*p+u*h+a*c-n*f,this._z=a*p+u*f+n*h-r*c,this._w=u*p-n*c-r*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const w=1-t;return this._w=w*u+t*this._w,this._x=w*n+t*this._x,this._y=w*r+t*this._y,this._z=w*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(h),p=Math.atan2(f,c),m=Math.sin((1-t)*p)/f,g=Math.sin(t*p)/f;return this._w=u*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,h=e.w,f=h*t+u*r-c*n,p=h*n+c*t-a*r,m=h*r+a*n-u*t,g=-a*t-u*n-c*r;return this.x=f*h+g*-a+p*-c-m*-u,this.y=p*h+g*-u+m*-a-f*-c,this.z=m*h+g*-c+f*-u-p*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=r*h-a*c,this.y=a*u-n*h,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new q,nc=new Ii;class Wr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,a=-1/0,u=-1/0,c=-1/0;for(let h=0,f=e.length;h<f;h+=3){const p=e[h],m=e[h+1],g=e[h+2];p<t&&(t=p),m<n&&(n=m),g<r&&(r=g),p>a&&(a=p),m>u&&(u=m),g>c&&(c=g)}return this.min.set(t,n,r),this.max.set(a,u,c),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,a=-1/0,u=-1/0,c=-1/0;for(let h=0,f=e.count;h<f;h++){const p=e.getX(h),m=e.getY(h),g=e.getZ(h);p<t&&(t=p),m<n&&(n=m),g<r&&(r=g),p>a&&(a=p),m>u&&(u=m),g>c&&(c=g)}return this.min.set(t,n,r),this.max.set(a,u,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let u=0,c=a.count;u<c;u++)xi.fromBufferAttribute(a,u).applyMatrix4(e.matrixWorld),this.expandByPoint(xi)}else n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox),To.applyMatrix4(e.matrixWorld),this.union(To);const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),as.subVectors(this.max,Rr),Yi.subVectors(e.a,Rr),Ki.subVectors(e.b,Rr),Zi.subVectors(e.c,Rr),ni.subVectors(Ki,Yi),ii.subVectors(Zi,Ki),yi.subVectors(Yi,Zi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!Lo(t,Yi,Ki,Zi,as)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Yi,Ki,Zi,as))?!1:(ls.crossVectors(ni,ii),t=[ls.x,ls.y,ls.z],Lo(t,Yi,Ki,Zi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,To=new Wr,Yi=new q,Ki=new q,Zi=new q,ni=new q,ii=new q,yi=new q,Rr=new q,as=new q,ls=new q,Mi=new q;function Lo(s,e,t,n,r){for(let a=0,u=s.length-3;a<=u;a+=3){Mi.fromArray(s,a);const c=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),h=e.dot(Mi),f=t.dot(Mi),p=n.dot(Mi);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>c)return!1}return!0}const Yp=new Wr,Ir=new q,Do=new q;class Ds{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Do)),this.expandByPoint(Ir.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new q,Ro=new q,cs=new q,ri=new q,Io=new q,us=new q,ko=new q;class ua{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ro.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ro);const a=e.distanceTo(t)*.5,u=-this.direction.dot(cs),c=ri.dot(this.direction),h=-ri.dot(cs),f=ri.lengthSq(),p=Math.abs(1-u*u);let m,g,w,y;if(p>0)if(m=u*h-c,g=u*c-h,y=a*p,m>=0)if(g>=-y)if(g<=y){const _=1/p;m*=_,g*=_,w=m*(m+u*g+2*c)+g*(u*m+g+2*h)+f}else g=a,m=Math.max(0,-(u*g+c)),w=-m*m+g*(g+2*h)+f;else g=-a,m=Math.max(0,-(u*g+c)),w=-m*m+g*(g+2*h)+f;else g<=-y?(m=Math.max(0,-(-u*a+c)),g=m>0?-a:Math.min(Math.max(-a,-h),a),w=-m*m+g*(g+2*h)+f):g<=y?(m=0,g=Math.min(Math.max(-a,-h),a),w=g*(g+2*h)+f):(m=Math.max(0,-(u*a+c)),g=m>0?a:Math.min(Math.max(-a,-h),a),w=-m*m+g*(g+2*h)+f);else g=u>0?-a:a,m=Math.max(0,-(u*g+c)),w=-m*m+g*(g+2*h)+f;return n&&n.copy(this.direction).multiplyScalar(m).add(this.origin),r&&r.copy(cs).multiplyScalar(g).add(Ro),w}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,h=n+u;return c<0&&h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,h;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,r=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,r=(e.min.x-g.x)*f),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),m>=0?(c=(e.min.z-g.z)*m,h=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,h=(e.min.z-g.z)*m),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,a){Io.subVectors(t,e),us.subVectors(n,e),ko.crossVectors(Io,us);let u=this.direction.dot(ko),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ri.subVectors(this.origin,e);const h=c*this.direction.dot(us.crossVectors(ri,us));if(h<0)return null;const f=c*this.direction.dot(Io.cross(ri));if(f<0||h+f>u)return null;const p=-c*ri.dot(ko);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,a,u,c,h,f,p,m,g,w,y,_,v){const b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=r,b[1]=a,b[5]=u,b[9]=c,b[13]=h,b[2]=f,b[6]=p,b[10]=m,b[14]=g,b[3]=w,b[7]=y,b[11]=_,b[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),a=1/Ji.setFromMatrixColumn(e,1).length(),u=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=u*p,w=u*m,y=c*p,_=c*m;t[0]=h*p,t[4]=-h*m,t[8]=f,t[1]=w+y*f,t[5]=g-_*f,t[9]=-c*h,t[2]=_-g*f,t[6]=y+w*f,t[10]=u*h}else if(e.order==="YXZ"){const g=h*p,w=h*m,y=f*p,_=f*m;t[0]=g+_*c,t[4]=y*c-w,t[8]=u*f,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=w*c-y,t[6]=_+g*c,t[10]=u*h}else if(e.order==="ZXY"){const g=h*p,w=h*m,y=f*p,_=f*m;t[0]=g-_*c,t[4]=-u*m,t[8]=y+w*c,t[1]=w+y*c,t[5]=u*p,t[9]=_-g*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const g=u*p,w=u*m,y=c*p,_=c*m;t[0]=h*p,t[4]=y*f-w,t[8]=g*f+_,t[1]=h*m,t[5]=_*f+g,t[9]=w*f-y,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,w=u*f,y=c*h,_=c*f;t[0]=h*p,t[4]=_-g*m,t[8]=y*m+w,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-f*p,t[6]=w*m+y,t[10]=g-_*m}else if(e.order==="XZY"){const g=u*h,w=u*f,y=c*h,_=c*f;t[0]=h*p,t[4]=-m,t[8]=f*p,t[1]=g*m+_,t[5]=u*p,t[9]=w*m-y,t[2]=y*m-w,t[6]=c*p,t[10]=_*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Zp)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),si.crossVectors(n,Zt),si.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),si.crossVectors(n,Zt)),si.normalize(),ds.crossVectors(Zt,si),r[0]=si.x,r[4]=ds.x,r[8]=Zt.x,r[1]=si.y,r[5]=ds.y,r[9]=Zt.y,r[2]=si.z,r[6]=ds.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],p=n[1],m=n[5],g=n[9],w=n[13],y=n[2],_=n[6],v=n[10],b=n[14],E=n[3],S=n[7],C=n[11],A=n[15],L=r[0],F=r[4],M=r[8],D=r[12],O=r[1],W=r[5],oe=r[9],U=r[13],X=r[2],z=r[6],B=r[10],Q=r[14],ee=r[3],K=r[7],Z=r[11],N=r[15];return a[0]=u*L+c*O+h*X+f*ee,a[4]=u*F+c*W+h*z+f*K,a[8]=u*M+c*oe+h*B+f*Z,a[12]=u*D+c*U+h*Q+f*N,a[1]=p*L+m*O+g*X+w*ee,a[5]=p*F+m*W+g*z+w*K,a[9]=p*M+m*oe+g*B+w*Z,a[13]=p*D+m*U+g*Q+w*N,a[2]=y*L+_*O+v*X+b*ee,a[6]=y*F+_*W+v*z+b*K,a[10]=y*M+_*oe+v*B+b*Z,a[14]=y*D+_*U+v*Q+b*N,a[3]=E*L+S*O+C*X+A*ee,a[7]=E*F+S*W+C*z+A*K,a[11]=E*M+S*oe+C*B+A*Z,a[15]=E*D+S*U+C*Q+A*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],h=e[9],f=e[13],p=e[2],m=e[6],g=e[10],w=e[14],y=e[3],_=e[7],v=e[11],b=e[15];return y*(+a*h*m-r*f*m-a*c*g+n*f*g+r*c*w-n*h*w)+_*(+t*h*w-t*f*g+a*u*g-r*u*w+r*f*p-a*h*p)+v*(+t*f*m-t*c*w-a*u*m+n*u*w+a*c*p-n*f*p)+b*(-r*c*p-t*h*m+t*c*g+r*u*m-n*u*g+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],p=e[8],m=e[9],g=e[10],w=e[11],y=e[12],_=e[13],v=e[14],b=e[15],E=m*v*f-_*g*f+_*h*w-c*v*w-m*h*b+c*g*b,S=y*g*f-p*v*f-y*h*w+u*v*w+p*h*b-u*g*b,C=p*_*f-y*m*f+y*c*w-u*_*w-p*c*b+u*m*b,A=y*m*h-p*_*h-y*c*g+u*_*g+p*c*v-u*m*v,L=t*E+n*S+r*C+a*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=E*F,e[1]=(_*g*a-m*v*a-_*r*w+n*v*w+m*r*b-n*g*b)*F,e[2]=(c*v*a-_*h*a+_*r*f-n*v*f-c*r*b+n*h*b)*F,e[3]=(m*h*a-c*g*a-m*r*f+n*g*f+c*r*w-n*h*w)*F,e[4]=S*F,e[5]=(p*v*a-y*g*a+y*r*w-t*v*w-p*r*b+t*g*b)*F,e[6]=(y*h*a-u*v*a-y*r*f+t*v*f+u*r*b-t*h*b)*F,e[7]=(u*g*a-p*h*a+p*r*f-t*g*f-u*r*w+t*h*w)*F,e[8]=C*F,e[9]=(y*m*a-p*_*a-y*n*w+t*_*w+p*n*b-t*m*b)*F,e[10]=(u*_*a-y*c*a+y*n*f-t*_*f-u*n*b+t*c*b)*F,e[11]=(p*c*a-u*m*a-p*n*f+t*m*f+u*n*w-t*c*w)*F,e[12]=A*F,e[13]=(p*_*r-y*m*r+y*n*g-t*_*g-p*n*v+t*m*v)*F,e[14]=(y*c*r-u*_*r-y*n*h+t*_*h+u*n*v-t*c*v)*F,e[15]=(u*m*r-p*c*r+p*n*h-t*m*h-u*n*g+t*c*g)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,f=a*u,p=a*c;return this.set(f*u+n,f*c-r*h,f*h+r*c,0,f*c+r*h,p*c+n,p*h-r*u,0,f*h-r*c,p*h+r*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,f=a+a,p=u+u,m=c+c,g=a*f,w=a*p,y=a*m,_=u*p,v=u*m,b=c*m,E=h*f,S=h*p,C=h*m,A=n.x,L=n.y,F=n.z;return r[0]=(1-(_+b))*A,r[1]=(w+C)*A,r[2]=(y-S)*A,r[3]=0,r[4]=(w-C)*L,r[5]=(1-(g+b))*L,r[6]=(v+E)*L,r[7]=0,r[8]=(y+S)*F,r[9]=(v-E)*F,r[10]=(1-(g+_))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ji.set(r[0],r[1],r[2]).length();const u=Ji.set(r[4],r[5],r[6]).length(),c=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const f=1/a,p=1/u,m=1/c;return vn.elements[0]*=f,vn.elements[1]*=f,vn.elements[2]*=f,vn.elements[4]*=p,vn.elements[5]*=p,vn.elements[6]*=p,vn.elements[8]*=m,vn.elements[9]*=m,vn.elements[10]*=m,t.setFromRotationMatrix(vn),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u){const c=this.elements,h=2*a/(t-e),f=2*a/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r),g=-(u+a)/(u-a),w=-2*u*a/(u-a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,u){const c=this.elements,h=1/(t-e),f=1/(n-r),p=1/(u-a),m=(t+e)*h,g=(n+r)*f,w=(u+a)*p;return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new q,vn=new ft,Kp=new q(0,0,0),Zp=new q(1,1,1),si=new q,ds=new q,Zt=new q,ic=new ft,rc=new Ii;class jr{constructor(e=0,t=0,n=0,r=jr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],h=r[1],f=r[5],p=r[9],m=r[2],g=r[6],w=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,w),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,w),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,w),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,w),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,w));break;case"XZY":this._z=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}jr.DefaultOrder="XYZ";jr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jp=0;const sc=new q,Qi=new Ii,Vn=new ft,hs=new q,kr=new q,Qp=new q,$p=new Ii,oc=new q(1,0,0),ac=new q(0,1,0),lc=new q(0,0,1),em={type:"added"},cc={type:"removed"};class ot extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new q,t=new jr,n=new Ii,r=new q(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new an}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(kr,hs,this.up):Vn.lookAt(hs,kr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(em)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const m=h[f];a(e.shapes,m)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),p=u(e.images),m=u(e.shapes),g=u(e.skeletons),w=u(e.animations),y=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),w.length>0&&(n.animations=w),y.length>0&&(n.nodes=y)}return n.object=r,n;function u(c){const h=[];for(const f in c){const p=c[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ot.DefaultUp=new q(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const bn=new q,Un=new q,Oo=new q,zn=new q,$i=new q,er=new q,uc=new q,No=new q,Fo=new q,Vo=new q;class Gn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){bn.subVectors(r,t),Un.subVectors(n,t),Oo.subVectors(e,t);const u=bn.dot(bn),c=bn.dot(Un),h=bn.dot(Oo),f=Un.dot(Un),p=Un.dot(Oo),m=u*f-c*c;if(m===0)return a.set(-2,-1,-1);const g=1/m,w=(f*h-c*p)*g,y=(u*p-c*h)*g;return a.set(1-w-y,y,w)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,r,a,u,c,h){return this.getBarycoord(e,t,n,r,zn),h.set(0,0),h.addScaledVector(a,zn.x),h.addScaledVector(u,zn.y),h.addScaledVector(c,zn.z),h}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Un.subVectors(e,t),bn.cross(Un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),bn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Gn.getUV(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;$i.subVectors(r,n),er.subVectors(a,n),No.subVectors(e,n);const h=$i.dot(No),f=er.dot(No);if(h<=0&&f<=0)return t.copy(n);Fo.subVectors(e,r);const p=$i.dot(Fo),m=er.dot(Fo);if(p>=0&&m<=p)return t.copy(r);const g=h*m-p*f;if(g<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(n).addScaledVector($i,u);Vo.subVectors(e,a);const w=$i.dot(Vo),y=er.dot(Vo);if(y>=0&&w<=y)return t.copy(a);const _=w*f-h*y;if(_<=0&&f>=0&&y<=0)return c=f/(f-y),t.copy(n).addScaledVector(er,c);const v=p*y-w*m;if(v<=0&&m-p>=0&&w-y>=0)return uc.subVectors(a,r),c=(m-p)/(m-p+(w-y)),t.copy(r).addScaledVector(uc,c);const b=1/(v+_+g);return u=_*b,c=g*b,t.copy(n).addScaledVector($i,u).addScaledVector(er,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tm=0;class gr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=cr,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=du,this.blendDst=hu,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new q,fs=new Oe;class Tn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ql,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),a=Kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Su extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nm=0;const sn=new ft,Uo=new ot,tr=new q,Jt=new Wr,Or=new Wr,Ct=new q;class en extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Cu:Su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new an().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Or.setFromBufferAttribute(c),this.morphTargetsRelative?(Ct.addVectors(Jt.min,Or.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,Or.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(Or.min),Jt.expandByPoint(Or.max))}Jt.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Ct.fromBufferAttribute(c,f),h&&(tr.fromBufferAttribute(e,f),Ct.add(tr)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,u=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,f=[],p=[];for(let O=0;O<c;O++)f[O]=new q,p[O]=new q;const m=new q,g=new q,w=new q,y=new Oe,_=new Oe,v=new Oe,b=new q,E=new q;function S(O,W,oe){m.fromArray(r,O*3),g.fromArray(r,W*3),w.fromArray(r,oe*3),y.fromArray(u,O*2),_.fromArray(u,W*2),v.fromArray(u,oe*2),g.sub(m),w.sub(m),_.sub(y),v.sub(y);const U=1/(_.x*v.y-v.x*_.y);!isFinite(U)||(b.copy(g).multiplyScalar(v.y).addScaledVector(w,-_.y).multiplyScalar(U),E.copy(w).multiplyScalar(_.x).addScaledVector(g,-v.x).multiplyScalar(U),f[O].add(b),f[W].add(b),f[oe].add(b),p[O].add(E),p[W].add(E),p[oe].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let O=0,W=C.length;O<W;++O){const oe=C[O],U=oe.start,X=oe.count;for(let z=U,B=U+X;z<B;z+=3)S(n[z+0],n[z+1],n[z+2])}const A=new q,L=new q,F=new q,M=new q;function D(O){F.fromArray(a,O*3),M.copy(F);const W=f[O];A.copy(W),A.sub(F.multiplyScalar(F.dot(W))).normalize(),L.crossVectors(M,W);const U=L.dot(p[O])<0?-1:1;h[O*4]=A.x,h[O*4+1]=A.y,h[O*4+2]=A.z,h[O*4+3]=U}for(let O=0,W=C.length;O<W;++O){const oe=C[O],U=oe.start,X=oe.count;for(let z=U,B=U+X;z<B;z+=3)D(n[z+0]),D(n[z+1]),D(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,w=n.count;g<w;g++)n.setXYZ(g,0,0,0);const r=new q,a=new q,u=new q,c=new q,h=new q,f=new q,p=new q,m=new q;if(e)for(let g=0,w=e.count;g<w;g+=3){const y=e.getX(g+0),_=e.getX(g+1),v=e.getX(g+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),u.fromBufferAttribute(t,v),p.subVectors(u,a),m.subVectors(r,a),p.cross(m),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,v),c.add(p),h.add(p),f.add(p),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,w=t.count;g<w;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),m.subVectors(r,a),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(c,h){const f=c.array,p=c.itemSize,m=c.normalized,g=new f.constructor(h.length*p);let w=0,y=0;for(let _=0,v=h.length;_<v;_++){c.isInterleavedBufferAttribute?w=h[_]*c.data.stride+c.offset:w=h[_]*p;for(let b=0;b<p;b++)g[y++]=f[w++]}return new Tn(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let p=0,m=f.length;p<m;p++){const g=f[p],w=e(g,n);h.push(w)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let m=0,g=f.length;m<g;m++){const w=f[m];p.push(w.toJSON(e.data))}p.length>0&&(r[h]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],m=a[f];for(let g=0,w=m.length;g<w;g++)p.push(m[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new ft,nr=new ua,zo=new Ds,oi=new q,ai=new q,li=new q,Bo=new q,Go=new q,Ho=new q,ps=new q,ms=new q,gs=new q,_s=new Oe,vs=new Oe,bs=new Oe,Wo=new q,ws=new q;class An extends ot{constructor(e=new en,t=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(a),e.ray.intersectsSphere(zo)===!1)||(dc.copy(a).invert(),nr.copy(e.ray).applyMatrix4(dc),n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1))return;let u;const c=n.index,h=n.attributes.position,f=n.morphAttributes.position,p=n.morphTargetsRelative,m=n.attributes.uv,g=n.attributes.uv2,w=n.groups,y=n.drawRange;if(c!==null)if(Array.isArray(r))for(let _=0,v=w.length;_<v;_++){const b=w[_],E=r[b.materialIndex],S=Math.max(b.start,y.start),C=Math.min(c.count,Math.min(b.start+b.count,y.start+y.count));for(let A=S,L=C;A<L;A+=3){const F=c.getX(A),M=c.getX(A+1),D=c.getX(A+2);u=xs(this,E,e,nr,h,f,p,m,g,F,M,D),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const _=Math.max(0,y.start),v=Math.min(c.count,y.start+y.count);for(let b=_,E=v;b<E;b+=3){const S=c.getX(b),C=c.getX(b+1),A=c.getX(b+2);u=xs(this,r,e,nr,h,f,p,m,g,S,C,A),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}else if(h!==void 0)if(Array.isArray(r))for(let _=0,v=w.length;_<v;_++){const b=w[_],E=r[b.materialIndex],S=Math.max(b.start,y.start),C=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let A=S,L=C;A<L;A+=3){const F=A,M=A+1,D=A+2;u=xs(this,E,e,nr,h,f,p,m,g,F,M,D),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const _=Math.max(0,y.start),v=Math.min(h.count,y.start+y.count);for(let b=_,E=v;b<E;b+=3){const S=b,C=b+1,A=b+2;u=xs(this,r,e,nr,h,f,p,m,g,S,C,A),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}}}function im(s,e,t,n,r,a,u,c){let h;if(e.side===cn?h=n.intersectTriangle(u,a,r,!0,c):h=n.intersectTriangle(r,a,u,e.side!==Hn,c),h===null)return null;ws.copy(c),ws.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(ws);return f<t.near||f>t.far?null:{distance:f,point:ws.clone(),object:s}}function xs(s,e,t,n,r,a,u,c,h,f,p,m){oi.fromBufferAttribute(r,f),ai.fromBufferAttribute(r,p),li.fromBufferAttribute(r,m);const g=s.morphTargetInfluences;if(a&&g){ps.set(0,0,0),ms.set(0,0,0),gs.set(0,0,0);for(let y=0,_=a.length;y<_;y++){const v=g[y],b=a[y];v!==0&&(Bo.fromBufferAttribute(b,f),Go.fromBufferAttribute(b,p),Ho.fromBufferAttribute(b,m),u?(ps.addScaledVector(Bo,v),ms.addScaledVector(Go,v),gs.addScaledVector(Ho,v)):(ps.addScaledVector(Bo.sub(oi),v),ms.addScaledVector(Go.sub(ai),v),gs.addScaledVector(Ho.sub(li),v)))}oi.add(ps),ai.add(ms),li.add(gs)}s.isSkinnedMesh&&(s.boneTransform(f,oi),s.boneTransform(p,ai),s.boneTransform(m,li));const w=im(s,e,t,n,oi,ai,li,Wo);if(w){c&&(_s.fromBufferAttribute(c,f),vs.fromBufferAttribute(c,p),bs.fromBufferAttribute(c,m),w.uv=Gn.getUV(Wo,oi,ai,li,_s,vs,bs,new Oe)),h&&(_s.fromBufferAttribute(h,f),vs.fromBufferAttribute(h,p),bs.fromBufferAttribute(h,m),w.uv2=Gn.getUV(Wo,oi,ai,li,_s,vs,bs,new Oe));const y={a:f,b:p,c:m,normal:new q,materialIndex:0};Gn.getNormal(oi,ai,li,y.normal),w.face=y}return w}class qr extends en{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const h=[],f=[],p=[],m=[];let g=0,w=0;y("z","y","x",-1,-1,n,t,e,u,a,0),y("z","y","x",1,-1,n,t,-e,u,a,1),y("x","z","y",1,1,e,n,t,r,u,2),y("x","z","y",1,-1,e,n,-t,r,u,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(p,3)),this.setAttribute("uv",new vt(m,2));function y(_,v,b,E,S,C,A,L,F,M,D){const O=C/F,W=A/M,oe=C/2,U=A/2,X=L/2,z=F+1,B=M+1;let Q=0,ee=0;const K=new q;for(let Z=0;Z<B;Z++){const N=Z*W-U;for(let se=0;se<z;se++){const re=se*O-oe;K[_]=re*E,K[v]=N*S,K[b]=X,f.push(K.x,K.y,K.z),K[_]=0,K[v]=0,K[b]=L>0?1:-1,p.push(K.x,K.y,K.z),m.push(se/F),m.push(1-Z/M),Q+=1}}for(let Z=0;Z<M;Z++)for(let N=0;N<F;N++){const se=g+N+z*Z,re=g+N+z*(Z+1),ue=g+(N+1)+z*(Z+1),Ce=g+(N+1)+z*Z;h.push(se,re,Ce),h.push(re,ue,Ce),ee+=6}c.addGroup(w,ee,D),w+=ee,g+=Q}}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=mr(s[t]);for(const r in n)e[r]=n[r]}return e}function rm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const Eu={clone:mr,merge:Wt};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ha extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends ha{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;a+=u.offsetX*r/h,t-=u.offsetY*n/f,r*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=90,rr=1;class am extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new $t(ir,rr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new q(1,0,0)),this.add(r);const a=new $t(ir,rr,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new q(-1,0,0)),this.add(a);const u=new $t(ir,rr,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(new q(0,1,0)),this.add(u);const c=new $t(ir,rr,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new q(0,-1,0)),this.add(c);const h=new $t(ir,rr,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new q(0,0,1)),this.add(h);const f=new $t(ir,rr,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new q(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,u,c,h,f]=this.children,p=e.getRenderTarget(),m=e.toneMapping,g=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,u),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(p),e.toneMapping=m,e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Au extends un{constructor(e,t,n,r,a,u,c,h,f,p){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,r,a,u,c,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lm extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Au(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),a=new jn({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:ui});a.uniforms.tEquirect.value=t;const u=new An(r,a),c=t.minFilter;return t.minFilter===Ls&&(t.minFilter=on),new am(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}const jo=new q,cm=new q,um=new an;class Si{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jo.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||um.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Ds,ys=new q;class Rs{constructor(e=new Si,t=new Si,n=new Si,r=new Si,a=new Si,u=new Si){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],u=n[2],c=n[3],h=n[4],f=n[5],p=n[6],m=n[7],g=n[8],w=n[9],y=n[10],_=n[11],v=n[12],b=n[13],E=n[14],S=n[15];return t[0].setComponents(c-r,m-h,_-g,S-v).normalize(),t[1].setComponents(c+r,m+h,_+g,S+v).normalize(),t[2].setComponents(c+a,m+f,_+w,S+b).normalize(),t[3].setComponents(c-a,m-f,_-w,S-b).normalize(),t[4].setComponents(c-u,m-p,_-y,S-E).normalize(),t[5].setComponents(c+u,m+p,_+y,S+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let s=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function dm(s,e){const t=e.isWebGL2,n=new WeakMap;function r(f,p){const m=f.array,g=f.usage,w=s.createBuffer();s.bindBuffer(p,w),s.bufferData(p,m,g),f.onUploadCallback();let y;if(m instanceof Float32Array)y=5126;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(m instanceof Int16Array)y=5122;else if(m instanceof Uint32Array)y=5125;else if(m instanceof Int32Array)y=5124;else if(m instanceof Int8Array)y=5120;else if(m instanceof Uint8Array)y=5121;else if(m instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:w,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version}}function a(f,p,m){const g=p.array,w=p.updateRange;s.bindBuffer(m,f),w.count===-1?s.bufferSubData(m,0,g):(t?s.bufferSubData(m,w.offset*g.BYTES_PER_ELEMENT,g,w.offset,w.count):s.bufferSubData(m,w.offset*g.BYTES_PER_ELEMENT,g.subarray(w.offset,w.offset+w.count)),w.count=-1)}function u(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p&&(s.deleteBuffer(p.buffer),n.delete(f))}function h(f,p){if(f.isGLBufferAttribute){const g=n.get(f);(!g||g.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);m===void 0?n.set(f,r(f,p)):m.version<f.version&&(a(m.buffer,f,p),m.version=f.version)}return{get:u,remove:c,update:h}}class Is extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(r),f=c+1,p=h+1,m=e/c,g=t/h,w=[],y=[],_=[],v=[];for(let b=0;b<p;b++){const E=b*g-u;for(let S=0;S<f;S++){const C=S*m-a;y.push(C,-E,0),_.push(0,0,1),v.push(S/c),v.push(1-b/h)}}for(let b=0;b<h;b++)for(let E=0;E<c;E++){const S=E+f*b,C=E+f*(b+1),A=E+1+f*(b+1),L=E+1+f*b;w.push(S,C,L),w.push(C,A,L)}this.setIndex(w),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm="vec3 transformed = vec3( position );",bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,xm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ym=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Im=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Eg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,i_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,r_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,s_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,o_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,a_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,l_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,g_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,__=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,G_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:hm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,begin_vertex:vm,beginnormal_vertex:bm,bsdfs:wm,iridescence_fragment:xm,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Em,color_fragment:Am,color_pars_fragment:Pm,color_pars_vertex:Tm,color_vertex:Lm,common:Dm,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Im,displacementmap_pars_vertex:km,displacementmap_vertex:Om,emissivemap_fragment:Nm,emissivemap_pars_fragment:Fm,encodings_fragment:Vm,encodings_pars_fragment:Um,envmap_fragment:zm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:jm,fog_pars_vertex:qm,fog_fragment:Xm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Km,lightmap_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:$m,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:rg,lights_phong_pars_fragment:sg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:ug,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:vg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:wg,morphcolor_vertex:xg,morphnormal_vertex:yg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:Cg,normal_fragment_maps:Eg,normal_pars_fragment:Ag,normal_pars_vertex:Pg,normal_vertex:Tg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:kg,output_fragment:Og,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Vg,dithering_fragment:Ug,dithering_pars_fragment:zg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:jg,shadowmask_pars_fragment:qg,skinbase_vertex:Xg,skinning_pars_vertex:Yg,skinning_vertex:Kg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:$g,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:r_,uv_vertex:s_,uv2_pars_fragment:o_,uv2_pars_vertex:a_,uv2_vertex:l_,worldpos_vertex:c_,background_vert:u_,background_frag:d_,backgroundCube_vert:h_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:__,distanceRGBA_vert:v_,distanceRGBA_frag:b_,equirect_vert:w_,equirect_frag:x_,linedashed_vert:y_,linedashed_frag:M_,meshbasic_vert:S_,meshbasic_frag:C_,meshlambert_vert:E_,meshlambert_frag:A_,meshmatcap_vert:P_,meshmatcap_frag:T_,meshnormal_vert:L_,meshnormal_frag:D_,meshphong_vert:R_,meshphong_frag:I_,meshphysical_vert:k_,meshphysical_frag:O_,meshtoon_vert:N_,meshtoon_frag:F_,points_vert:V_,points_frag:U_,shadow_vert:z_,shadow_frag:B_,sprite_vert:G_,sprite_frag:H_},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new an},uv2Transform:{value:new an},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}}},Cn={basic:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Wt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Wt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Wt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new an},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Wt([fe.common,fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Wt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Cn.physical={uniforms:Wt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function W_(s,e,t,n,r,a,u){const c=new qe(0);let h=a===!0?0:1,f,p,m=null,g=0,w=null;function y(v,b){let E=!1,S=b.isScene===!0?b.background:null;S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S));const C=s.xr,A=C.getSession&&C.getSession();A&&A.environmentBlendMode==="additive"&&(S=null),S===null?_(c,h):S&&S.isColor&&(_(S,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ts)?(p===void 0&&(p=new An(new qr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:mr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,F,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=S,p.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,(m!==S||g!==S.version||w!==s.toneMapping)&&(p.material.needsUpdate=!0,m=S,g=S.version,w=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):S&&S.isTexture&&(f===void 0&&(f=new An(new Is(2,2),new jn({name:"BackgroundMaterial",uniforms:mr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),f.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||g!==S.version||w!==s.toneMapping)&&(f.material.needsUpdate=!0,m=S,g=S.version,w=s.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null))}function _(v,b){n.buffers.color.setClear(v.r,v.g,v.b,b,u)}return{getClearColor:function(){return c},setClearColor:function(v,b=1){c.set(v),h=b,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,_(c,h)},render:y}}function j_(s,e,t,n){const r=s.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),u=n.isWebGL2||a!==null,c={},h=v(null);let f=h,p=!1;function m(X,z,B,Q,ee){let K=!1;if(u){const Z=_(Q,B,z);f!==Z&&(f=Z,w(f.object)),K=b(X,Q,B,ee),K&&E(X,Q,B,ee)}else{const Z=z.wireframe===!0;(f.geometry!==Q.id||f.program!==B.id||f.wireframe!==Z)&&(f.geometry=Q.id,f.program=B.id,f.wireframe=Z,K=!0)}ee!==null&&t.update(ee,34963),(K||p)&&(p=!1,M(X,z,B,Q),ee!==null&&s.bindBuffer(34963,t.get(ee).buffer))}function g(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function w(X){return n.isWebGL2?s.bindVertexArray(X):a.bindVertexArrayOES(X)}function y(X){return n.isWebGL2?s.deleteVertexArray(X):a.deleteVertexArrayOES(X)}function _(X,z,B){const Q=B.wireframe===!0;let ee=c[X.id];ee===void 0&&(ee={},c[X.id]=ee);let K=ee[z.id];K===void 0&&(K={},ee[z.id]=K);let Z=K[Q];return Z===void 0&&(Z=v(g()),K[Q]=Z),Z}function v(X){const z=[],B=[],Q=[];for(let ee=0;ee<r;ee++)z[ee]=0,B[ee]=0,Q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:Q,object:X,attributes:{},index:null}}function b(X,z,B,Q){const ee=f.attributes,K=z.attributes;let Z=0;const N=B.getAttributes();for(const se in N)if(N[se].location>=0){const ue=ee[se];let Ce=K[se];if(Ce===void 0&&(se==="instanceMatrix"&&X.instanceMatrix&&(Ce=X.instanceMatrix),se==="instanceColor"&&X.instanceColor&&(Ce=X.instanceColor)),ue===void 0||ue.attribute!==Ce||Ce&&ue.data!==Ce.data)return!0;Z++}return f.attributesNum!==Z||f.index!==Q}function E(X,z,B,Q){const ee={},K=z.attributes;let Z=0;const N=B.getAttributes();for(const se in N)if(N[se].location>=0){let ue=K[se];ue===void 0&&(se==="instanceMatrix"&&X.instanceMatrix&&(ue=X.instanceMatrix),se==="instanceColor"&&X.instanceColor&&(ue=X.instanceColor));const Ce={};Ce.attribute=ue,ue&&ue.data&&(Ce.data=ue.data),ee[se]=Ce,Z++}f.attributes=ee,f.attributesNum=Z,f.index=Q}function S(){const X=f.newAttributes;for(let z=0,B=X.length;z<B;z++)X[z]=0}function C(X){A(X,0)}function A(X,z){const B=f.newAttributes,Q=f.enabledAttributes,ee=f.attributeDivisors;B[X]=1,Q[X]===0&&(s.enableVertexAttribArray(X),Q[X]=1),ee[X]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,z),ee[X]=z)}function L(){const X=f.newAttributes,z=f.enabledAttributes;for(let B=0,Q=z.length;B<Q;B++)z[B]!==X[B]&&(s.disableVertexAttribArray(B),z[B]=0)}function F(X,z,B,Q,ee,K){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(X,z,B,ee,K):s.vertexAttribPointer(X,z,B,Q,ee,K)}function M(X,z,B,Q){if(n.isWebGL2===!1&&(X.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ee=Q.attributes,K=B.getAttributes(),Z=z.defaultAttributeValues;for(const N in K){const se=K[N];if(se.location>=0){let re=ee[N];if(re===void 0&&(N==="instanceMatrix"&&X.instanceMatrix&&(re=X.instanceMatrix),N==="instanceColor"&&X.instanceColor&&(re=X.instanceColor)),re!==void 0){const ue=re.normalized,Ce=re.itemSize,G=t.get(re);if(G===void 0)continue;const be=G.buffer,Pe=G.type,Ae=G.bytesPerElement;if(re.isInterleavedBufferAttribute){const pe=re.data,Xe=pe.stride,Ne=re.offset;if(pe.isInstancedInterleavedBuffer){for(let Se=0;Se<se.locationSize;Se++)A(se.location+Se,pe.meshPerAttribute);X.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Se=0;Se<se.locationSize;Se++)C(se.location+Se);s.bindBuffer(34962,be);for(let Se=0;Se<se.locationSize;Se++)F(se.location+Se,Ce/se.locationSize,Pe,ue,Xe*Ae,(Ne+Ce/se.locationSize*Se)*Ae)}else{if(re.isInstancedBufferAttribute){for(let pe=0;pe<se.locationSize;pe++)A(se.location+pe,re.meshPerAttribute);X.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let pe=0;pe<se.locationSize;pe++)C(se.location+pe);s.bindBuffer(34962,be);for(let pe=0;pe<se.locationSize;pe++)F(se.location+pe,Ce/se.locationSize,Pe,ue,Ce*Ae,Ce/se.locationSize*pe*Ae)}}else if(Z!==void 0){const ue=Z[N];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(se.location,ue);break;case 3:s.vertexAttrib3fv(se.location,ue);break;case 4:s.vertexAttrib4fv(se.location,ue);break;default:s.vertexAttrib1fv(se.location,ue)}}}}L()}function D(){oe();for(const X in c){const z=c[X];for(const B in z){const Q=z[B];for(const ee in Q)y(Q[ee].object),delete Q[ee];delete z[B]}delete c[X]}}function O(X){if(c[X.id]===void 0)return;const z=c[X.id];for(const B in z){const Q=z[B];for(const ee in Q)y(Q[ee].object),delete Q[ee];delete z[B]}delete c[X.id]}function W(X){for(const z in c){const B=c[z];if(B[X.id]===void 0)continue;const Q=B[X.id];for(const ee in Q)y(Q[ee].object),delete Q[ee];delete B[X.id]}}function oe(){U(),p=!0,f!==h&&(f=h,w(f.object))}function U(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:oe,resetDefaultState:U,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfProgram:W,initAttributes:S,enableAttribute:C,disableUnusedAttributes:L}}function q_(s,e,t,n){const r=n.isWebGL2;let a;function u(f){a=f}function c(f,p){s.drawArrays(a,f,p),t.update(p,a,1)}function h(f,p,m){if(m===0)return;let g,w;if(r)g=s,w="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[w](a,f,p,m),t.update(p,a,m)}this.setMode=u,this.render=c,this.renderInstances=h}function X_(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(F){if(F==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=s.getParameter(34930),g=s.getParameter(35660),w=s.getParameter(3379),y=s.getParameter(34076),_=s.getParameter(34921),v=s.getParameter(36347),b=s.getParameter(36348),E=s.getParameter(36349),S=g>0,C=u||e.has("OES_texture_float"),A=S&&C,L=u?s.getParameter(36183):0;return{isWebGL2:u,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:C,floatVertexTextures:A,maxSamples:L}}function Y_(s){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Si,c=new an,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g,w){const y=m.length!==0||g||n!==0||r;return r=g,t=p(m,w,0),n=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1,f()},this.setState=function(m,g,w){const y=m.clippingPlanes,_=m.clipIntersection,v=m.clipShadows,b=s.get(m);if(!r||y===null||y.length===0||a&&!v)a?p(null):f();else{const E=a?0:n,S=E*4;let C=b.clippingState||null;h.value=C,C=p(y,g,S,w);for(let A=0;A!==S;++A)C[A]=t[A];b.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,w,y){const _=m!==null?m.length:0;let v=null;if(_!==0){if(v=h.value,y!==!0||v===null){const b=w+_*4,E=g.matrixWorldInverse;c.getNormalMatrix(E),(v===null||v.length<b)&&(v=new Float32Array(b));for(let S=0,C=w;S!==_;++S,C+=4)u.copy(m[S]).applyMatrix4(E,c),u.normal.toArray(v,C),v[C+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function K_(s){let e=new WeakMap;function t(u,c){return c===ea?u.mapping=hr:c===ta&&(u.mapping=fr),u}function n(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===ea||c===ta)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new lm(h.height/2);return f.fromEquirectangularTexture(s,u),e.set(u,f),u.addEventListener("dispose",r),t(f.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ks extends ha{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,hc=[.125,.215,.35,.446,.526,.582],Ei=20,qo=new ks,fc=new qe;let Xo=null;const Ci=(1+Math.sqrt(5))/2,or=1/Ci,pc=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Ci,or),new q(0,Ci,-or),new q(or,0,Ci),new q(-or,0,Ci),new q(Ci,or,0),new q(-Ci,or,0)];class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ur,format:xn,encoding:di,depthBuffer:!1},r=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(a)),this._blurMaterial=J_(a,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,r){const c=new $t(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(fc),p.toneMapping=Pn,p.autoClear=!1;const w=new Mu({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new An(new qr,w);let _=!1;const v=e.background;v?v.isColor&&(w.color.copy(v),e.background=null,_=!0):(w.color.copy(fc),_=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,h[b],0),c.lookAt(f[b],0,0)):E===1?(c.up.set(0,0,h[b]),c.lookAt(0,f[b],0)):(c.up.set(0,h[b],0),c.lookAt(0,0,f[b]));const S=this._cubeSize;Ms(r,E*S,b>2?S:0,S,S),p.setRenderTarget(r),_&&p.render(y,c),p.render(e,c)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new An(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Ms(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=pc[(r-1)%pc.length];this._blur(e,r-1,r,a,u)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new An(this._lodPlanes[r],f),g=f.uniforms,w=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*w):2*Math.PI/(2*Ei-1),_=a/y,v=isFinite(a)?1+Math.floor(p*_):Ei;v>Ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ei}`);const b=[];let E=0;for(let F=0;F<Ei;++F){const M=F/_,D=Math.exp(-M*M/2);b.push(D),F===0?E+=D:F<v&&(E+=2*D)}for(let F=0;F<b.length;F++)b[F]=b[F]/E;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=b,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:S}=this;g.dTheta.value=y,g.mipInt.value=S-n;const C=this._sizeLods[r],A=3*C*(r>S-lr?r-S+lr:0),L=4*(this._cubeSize-C);Ms(t,A,L,3*C,2*C),h.setRenderTarget(t),h.render(m,qo)}}function Z_(s){const e=[],t=[],n=[];let r=s;const a=s-lr+1+hc.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);t.push(c);let h=1/c;u>s-lr?h=hc[u-s+lr-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],w=6,y=6,_=3,v=2,b=1,E=new Float32Array(_*y*w),S=new Float32Array(v*y*w),C=new Float32Array(b*y*w);for(let L=0;L<w;L++){const F=L%3*2/3-1,M=L>2?0:-1,D=[F,M,0,F+2/3,M,0,F+2/3,M+1,0,F,M,0,F+2/3,M+1,0,F,M+1,0];E.set(D,_*y*L),S.set(g,v*y*L);const O=[L,L,L,L,L,L];C.set(O,b*y*L)}const A=new en;A.setAttribute("position",new Tn(E,_)),A.setAttribute("uv",new Tn(S,v)),A.setAttribute("faceIndex",new Tn(C,b)),e.push(A),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gc(s,e,t){const n=new hi(s,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function J_(s,e,t){const n=new Float32Array(Ei),r=new q(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function _c(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function vc(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q_(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===ea||h===ta,p=h===hr||h===fr;if(f||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=e.get(c);return t===null&&(t=new mc(s)),m=f?t.fromEquirectangular(c,m):t.fromCubemap(c,m),e.set(c,m),m.texture}else{if(e.has(c))return e.get(c).texture;{const m=c.image;if(f&&m&&m.height>0||p&&m&&r(m)){t===null&&(t=new mc(s));const g=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,g),c.addEventListener("dispose",a),g.texture}else return null}}}return c}function r(c){let h=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function $_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ev(s,e,t,n){const r={},a=new WeakMap;function u(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",u),delete r[g.id];const w=a.get(g);w&&(e.remove(w),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,t.memory.geometries++),g}function h(m){const g=m.attributes;for(const y in g)e.update(g[y],34962);const w=m.morphAttributes;for(const y in w){const _=w[y];for(let v=0,b=_.length;v<b;v++)e.update(_[v],34962)}}function f(m){const g=[],w=m.index,y=m.attributes.position;let _=0;if(w!==null){const E=w.array;_=w.version;for(let S=0,C=E.length;S<C;S+=3){const A=E[S+0],L=E[S+1],F=E[S+2];g.push(A,L,L,F,F,A)}}else{const E=y.array;_=y.version;for(let S=0,C=E.length/3-1;S<C;S+=3){const A=S+0,L=S+1,F=S+2;g.push(A,L,L,F,F,A)}}const v=new(vu(g)?Cu:Su)(g,1);v.version=_;const b=a.get(m);b&&e.remove(b),a.set(m,v)}function p(m){const g=a.get(m);if(g){const w=m.index;w!==null&&g.version<w.version&&f(m)}else f(m);return a.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function tv(s,e,t,n){const r=n.isWebGL2;let a;function u(g){a=g}let c,h;function f(g){c=g.type,h=g.bytesPerElement}function p(g,w){s.drawElements(a,w,c,g*h),t.update(w,a,1)}function m(g,w,y){if(y===0)return;let _,v;if(r)_=s,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](a,w,c,g*h,y),t.update(w,a,y)}this.setMode=u,this.setIndex=f,this.render=p,this.renderInstances=m}function nv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case 4:t.triangles+=c*(a/3);break;case 1:t.lines+=c*(a/2);break;case 3:t.lines+=c*(a-1);break;case 2:t.lines+=c*a;break;case 0:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function iv(s,e){return s[0]-e[0]}function rv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sv(s,e,t){const n={},r=new Float32Array(8),a=new WeakMap,u=new At,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function h(f,p,m,g){const w=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=y!==void 0?y.length:0;let v=a.get(p);if(v===void 0||v.count!==_){let z=function(){U.dispose(),a.delete(p),p.removeEventListener("dispose",z)};v!==void 0&&v.texture.dispose();const S=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,A=p.morphAttributes.color!==void 0,L=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],M=p.morphAttributes.color||[];let D=0;S===!0&&(D=1),C===!0&&(D=2),A===!0&&(D=3);let O=p.attributes.position.count*D,W=1;O>e.maxTextureSize&&(W=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const oe=new Float32Array(O*W*4*_),U=new yu(oe,O,W,_);U.type=Pi,U.needsUpdate=!0;const X=D*4;for(let B=0;B<_;B++){const Q=L[B],ee=F[B],K=M[B],Z=O*W*4*B;for(let N=0;N<Q.count;N++){const se=N*X;S===!0&&(u.fromBufferAttribute(Q,N),oe[Z+se+0]=u.x,oe[Z+se+1]=u.y,oe[Z+se+2]=u.z,oe[Z+se+3]=0),C===!0&&(u.fromBufferAttribute(ee,N),oe[Z+se+4]=u.x,oe[Z+se+5]=u.y,oe[Z+se+6]=u.z,oe[Z+se+7]=0),A===!0&&(u.fromBufferAttribute(K,N),oe[Z+se+8]=u.x,oe[Z+se+9]=u.y,oe[Z+se+10]=u.z,oe[Z+se+11]=K.itemSize===4?u.w:1)}}v={count:_,texture:U,size:new Oe(O,W)},a.set(p,v),p.addEventListener("dispose",z)}let b=0;for(let S=0;S<w.length;S++)b+=w[S];const E=p.morphTargetsRelative?1:1-b;g.getUniforms().setValue(s,"morphTargetBaseInfluence",E),g.getUniforms().setValue(s,"morphTargetInfluences",w),g.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const y=w===void 0?0:w.length;let _=n[p.id];if(_===void 0||_.length!==y){_=[];for(let C=0;C<y;C++)_[C]=[C,0];n[p.id]=_}for(let C=0;C<y;C++){const A=_[C];A[0]=C,A[1]=w[C]}_.sort(rv);for(let C=0;C<8;C++)C<y&&_[C][1]?(c[C][0]=_[C][0],c[C][1]=_[C][1]):(c[C][0]=Number.MAX_SAFE_INTEGER,c[C][1]=0);c.sort(iv);const v=p.morphAttributes.position,b=p.morphAttributes.normal;let E=0;for(let C=0;C<8;C++){const A=c[C],L=A[0],F=A[1];L!==Number.MAX_SAFE_INTEGER&&F?(v&&p.getAttribute("morphTarget"+C)!==v[L]&&p.setAttribute("morphTarget"+C,v[L]),b&&p.getAttribute("morphNormal"+C)!==b[L]&&p.setAttribute("morphNormal"+C,b[L]),r[C]=F,E+=F):(v&&p.hasAttribute("morphTarget"+C)===!0&&p.deleteAttribute("morphTarget"+C),b&&p.hasAttribute("morphNormal"+C)===!0&&p.deleteAttribute("morphNormal"+C),r[C]=0)}const S=p.morphTargetsRelative?1:1-E;g.getUniforms().setValue(s,"morphTargetBaseInfluence",S),g.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:h}}function ov(s,e,t,n){let r=new WeakMap;function a(h){const f=n.render.frame,p=h.geometry,m=e.get(h,p);return r.get(m)!==f&&(e.update(m),r.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),m}function u(){r=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}const Tu=new un,Lu=new yu,Du=new Xp,Ru=new Au,bc=[],wc=[],xc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function _r(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=bc[r];if(a===void 0&&(a=new Float32Array(r),bc[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(a,c)}return a}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Os(s,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function av(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function cv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function uv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function dv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),St(t,n)}}function hv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;yc.set(n),s.uniformMatrix3fv(this.addr,!1,yc),St(t,n)}}function fv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;xc.set(n),s.uniformMatrix4fv(this.addr,!1,xc),St(t,n)}}function pv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function gv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function _v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function vv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function yv(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Tu,r)}function Mv(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Du,r)}function Sv(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ru,r)}function Cv(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lu,r)}function Ev(s){switch(s){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return dv;case 35675:return hv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return bv;case 36295:return wv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Av(s,e){s.uniform1fv(this.addr,e)}function Pv(s,e){const t=_r(e,this.size,2);s.uniform2fv(this.addr,t)}function Tv(s,e){const t=_r(e,this.size,3);s.uniform3fv(this.addr,t)}function Lv(s,e){const t=_r(e,this.size,4);s.uniform4fv(this.addr,t)}function Dv(s,e){const t=_r(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rv(s,e){const t=_r(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Iv(s,e){const t=_r(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kv(s,e){s.uniform1iv(this.addr,e)}function Ov(s,e){s.uniform2iv(this.addr,e)}function Nv(s,e){s.uniform3iv(this.addr,e)}function Fv(s,e){s.uniform4iv(this.addr,e)}function Vv(s,e){s.uniform1uiv(this.addr,e)}function Uv(s,e){s.uniform2uiv(this.addr,e)}function zv(s,e){s.uniform3uiv(this.addr,e)}function Bv(s,e){s.uniform4uiv(this.addr,e)}function Gv(s,e,t){const n=this.cache,r=e.length,a=Os(t,r);Mt(n,a)||(s.uniform1iv(this.addr,a),St(n,a));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||Tu,a[u])}function Hv(s,e,t){const n=this.cache,r=e.length,a=Os(t,r);Mt(n,a)||(s.uniform1iv(this.addr,a),St(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||Du,a[u])}function Wv(s,e,t){const n=this.cache,r=e.length,a=Os(t,r);Mt(n,a)||(s.uniform1iv(this.addr,a),St(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||Ru,a[u])}function jv(s,e,t){const n=this.cache,r=e.length,a=Os(t,r);Mt(n,a)||(s.uniform1iv(this.addr,a),St(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||Lu,a[u])}function qv(s){switch(s){case 5126:return Av;case 35664:return Pv;case 35665:return Tv;case 35666:return Lv;case 35674:return Dv;case 35675:return Rv;case 35676:return Iv;case 5124:case 35670:return kv;case 35667:case 35671:return Ov;case 35668:case 35672:return Nv;case 35669:case 35673:return Fv;case 5125:return Vv;case 36294:return Uv;case 36295:return zv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return jv}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ev(t.type)}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=qv(t.type)}}class Kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Sc(s,e){s.seq.push(e),s.map[e.id]=e}function Zv(s,e,t){const n=s.name,r=n.length;for(Yo.lastIndex=0;;){const a=Yo.exec(n),u=Yo.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===r){Sc(t,f===void 0?new Xv(c,s,e):new Yv(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new Kv(c),Sc(t,m)),t=m}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);Zv(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function Cc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Jv=0;function Qv(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}function $v(s){switch(s){case di:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ec(s,e,t){const n=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Qv(s.getShaderSource(e),u)}else return r}function eb(s,e){const t=$v(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tb(s,e){let t;switch(e){case xp:t="Linear";break;case yp:t="Reinhard";break;case Mp:t="OptimizedCineon";break;case pu:t="ACESFilmic";break;case Sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nb(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function ib(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rb(s,e){const t={},n=s.getProgramParameter(e,35721);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),u=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),t[u]={type:a.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function Fr(s){return s!==""}function Ac(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(s){return s.replace(sb,ob)}function ob(s,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oa(t)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(s){return s.replace(ab,lb)}function lb(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function ub(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hr:case fr:e="ENVMAP_TYPE_CUBE";break;case Ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function hb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function fb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pb(s,e,t,n){const r=s.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=cb(t),f=ub(t),p=db(t),m=hb(t),g=fb(t),w=t.isWebGL2?"":nb(t),y=ib(a),_=r.createProgram();let v,b,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[y].filter(Fr).join(`
`),v.length>0&&(v+=`
`),b=[w,y].filter(Fr).join(`
`),b.length>0&&(b+=`
`)):(v=[Lc(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),b=[w,Lc(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Pn?tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,eb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),u=oa(u),u=Ac(u,t),u=Pc(u,t),c=oa(c),c=Ac(c,t),c=Pc(c,t),u=Tc(u),c=Tc(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,b=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=E+v+u,C=E+b+c,A=Cc(r,35633,S),L=Cc(r,35632,C);if(r.attachShader(_,A),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),s.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(L).trim();let oe=!0,U=!0;if(r.getProgramParameter(_,35714)===!1){oe=!1;const X=Ec(r,A,"vertex"),z=Ec(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+D+`
`+X+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:oe,programLog:D,vertexShader:{log:O,prefix:v},fragmentShader:{log:W,prefix:b}})}r.deleteShader(A),r.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new As(r,_)),F};let M;return this.getAttributes=function(){return M===void 0&&(M=rb(r,_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=L,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _b(e),t.set(e,n)),n}}class _b{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function vb(s,e,t,n,r,a,u){const c=new da,h=new gb,f=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let w=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M,D,O,W,oe){const U=W.fog,X=oe.geometry,z=M.isMeshStandardMaterial?W.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),Q=!!B&&B.mapping===Ts?B.image.height:null,ee=y[M.type];M.precision!==null&&(w=r.getMaxPrecision(M.precision),w!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",w,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=K!==void 0?K.length:0;let N=0;X.morphAttributes.position!==void 0&&(N=1),X.morphAttributes.normal!==void 0&&(N=2),X.morphAttributes.color!==void 0&&(N=3);let se,re,ue,Ce;if(ee){const Xe=Cn[ee];se=Xe.vertexShader,re=Xe.fragmentShader}else se=M.vertexShader,re=M.fragmentShader,h.update(M),ue=h.getVertexShaderID(M),Ce=h.getFragmentShaderID(M);const G=s.getRenderTarget(),be=M.alphaTest>0,Pe=M.clearcoat>0,Ae=M.iridescence>0;return{isWebGL2:p,shaderID:ee,shaderName:M.type,vertexShader:se,fragmentShader:re,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:w,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:g,outputEncoding:G===null?s.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:di,map:!!M.map,matcap:!!M.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:Q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Hp,tangentSpaceNormalMap:M.normalMapType===_u,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ct,clearcoat:Pe,clearcoatMap:Pe&&!!M.clearcoatMap,clearcoatRoughnessMap:Pe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Pe&&!!M.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!M.iridescenceMap,iridescenceThicknessMap:Ae&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===cr,alphaMap:!!M.alphaMap,alphaTest:be,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!X.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:m,skinning:oe.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:N,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:Pn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===cn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function v(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)D.push(O),D.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(b(D,M),E(D,M),D.push(s.outputEncoding)),D.push(M.customProgramCacheKey),D.join()}function b(M,D){M.push(D.precision),M.push(D.outputEncoding),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.combine),M.push(D.vertexUvs),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function E(M,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.map&&c.enable(4),D.matcap&&c.enable(5),D.envMap&&c.enable(6),D.lightMap&&c.enable(7),D.aoMap&&c.enable(8),D.emissiveMap&&c.enable(9),D.bumpMap&&c.enable(10),D.normalMap&&c.enable(11),D.objectSpaceNormalMap&&c.enable(12),D.tangentSpaceNormalMap&&c.enable(13),D.clearcoat&&c.enable(14),D.clearcoatMap&&c.enable(15),D.clearcoatRoughnessMap&&c.enable(16),D.clearcoatNormalMap&&c.enable(17),D.iridescence&&c.enable(18),D.iridescenceMap&&c.enable(19),D.iridescenceThicknessMap&&c.enable(20),D.displacementMap&&c.enable(21),D.specularMap&&c.enable(22),D.roughnessMap&&c.enable(23),D.metalnessMap&&c.enable(24),D.gradientMap&&c.enable(25),D.alphaMap&&c.enable(26),D.alphaTest&&c.enable(27),D.vertexColors&&c.enable(28),D.vertexAlphas&&c.enable(29),D.vertexUvs&&c.enable(30),D.vertexTangents&&c.enable(31),D.uvsVertexOnly&&c.enable(32),M.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.physicallyCorrectLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.specularIntensityMap&&c.enable(15),D.specularColorMap&&c.enable(16),D.transmission&&c.enable(17),D.transmissionMap&&c.enable(18),D.thicknessMap&&c.enable(19),D.sheen&&c.enable(20),D.sheenColorMap&&c.enable(21),D.sheenRoughnessMap&&c.enable(22),D.decodeVideoTexture&&c.enable(23),D.opaque&&c.enable(24),M.push(c.mask)}function S(M){const D=y[M.type];let O;if(D){const W=Cn[D];O=Eu.clone(W.uniforms)}else O=M.uniforms;return O}function C(M,D){let O;for(let W=0,oe=f.length;W<oe;W++){const U=f[W];if(U.cacheKey===D){O=U,++O.usedTimes;break}}return O===void 0&&(O=new pb(s,D,M,a),f.push(O)),O}function A(M){if(--M.usedTimes===0){const D=f.indexOf(M);f[D]=f[f.length-1],f.pop(),M.destroy()}}function L(M){h.remove(M)}function F(){h.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:f,dispose:F}}function bb(){let s=new WeakMap;function e(a){let u=s.get(a);return u===void 0&&(u={},s.set(a,u)),u}function t(a){s.delete(a)}function n(a,u,c){s.get(a)[u]=c}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rc(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(m,g,w,y,_,v){let b=s[e];return b===void 0?(b={id:m.id,object:m,geometry:g,material:w,groupOrder:y,renderOrder:m.renderOrder,z:_,group:v},s[e]=b):(b.id=m.id,b.object=m,b.geometry=g,b.material=w,b.groupOrder=y,b.renderOrder=m.renderOrder,b.z=_,b.group=v),e++,b}function c(m,g,w,y,_,v){const b=u(m,g,w,y,_,v);w.transmission>0?n.push(b):w.transparent===!0?r.push(b):t.push(b)}function h(m,g,w,y,_,v){const b=u(m,g,w,y,_,v);w.transmission>0?n.unshift(b):w.transparent===!0?r.unshift(b):t.unshift(b)}function f(m,g){t.length>1&&t.sort(m||wb),n.length>1&&n.sort(g||Dc),r.length>1&&r.sort(g||Dc)}function p(){for(let m=e,g=s.length;m<g;m++){const w=s[m];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:h,finish:p,sort:f}}function xb(){let s=new WeakMap;function e(n,r){const a=s.get(n);let u;return a===void 0?(u=new Rc,s.set(n,[u])):r>=a.length?(u=new Rc,a.push(u)):u=a[r],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function yb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new qe};break;case"SpotLight":t={position:new q,direction:new q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function Mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sb=0;function Cb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Eb(s,e){const t=new yb,n=Mb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,u=new ft,c=new ft;function h(p,m){let g=0,w=0,y=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let _=0,v=0,b=0,E=0,S=0,C=0,A=0,L=0,F=0,M=0;p.sort(Cb);const D=m!==!0?Math.PI:1;for(let W=0,oe=p.length;W<oe;W++){const U=p[W],X=U.color,z=U.intensity,B=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)g+=X.r*z*D,w+=X.g*z*D,y+=X.b*z*D;else if(U.isLightProbe)for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(U.sh.coefficients[ee],z);else if(U.isDirectionalLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*D),U.castShadow){const K=U.shadow,Z=n.get(U);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=Q,r.directionalShadowMatrix[_]=U.shadow.matrix,C++}r.directional[_]=ee,_++}else if(U.isSpotLight){const ee=t.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(X).multiplyScalar(z*D),ee.distance=B,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,r.spot[b]=ee;const K=U.shadow;if(U.map&&(r.spotLightMap[F]=U.map,F++,K.updateMatrices(U),U.castShadow&&M++),r.spotLightMatrix[b]=K.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[b]=Z,r.spotShadowMap[b]=Q,L++}b++}else if(U.isRectAreaLight){const ee=t.get(U);ee.color.copy(X).multiplyScalar(z),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=ee,E++}else if(U.isPointLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*D),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const K=U.shadow,Z=n.get(U);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[v]=Z,r.pointShadowMap[v]=Q,r.pointShadowMatrix[v]=U.shadow.matrix,A++}r.point[v]=ee,v++}else if(U.isHemisphereLight){const ee=t.get(U);ee.skyColor.copy(U.color).multiplyScalar(z*D),ee.groundColor.copy(U.groundColor).multiplyScalar(z*D),r.hemi[S]=ee,S++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=w,r.ambient[2]=y;const O=r.hash;(O.directionalLength!==_||O.pointLength!==v||O.spotLength!==b||O.rectAreaLength!==E||O.hemiLength!==S||O.numDirectionalShadows!==C||O.numPointShadows!==A||O.numSpotShadows!==L||O.numSpotMaps!==F)&&(r.directional.length=_,r.spot.length=b,r.rectArea.length=E,r.point.length=v,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=L+F-M,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=M,O.directionalLength=_,O.pointLength=v,O.spotLength=b,O.rectAreaLength=E,O.hemiLength=S,O.numDirectionalShadows=C,O.numPointShadows=A,O.numSpotShadows=L,O.numSpotMaps=F,r.version=Sb++)}function f(p,m){let g=0,w=0,y=0,_=0,v=0;const b=m.matrixWorldInverse;for(let E=0,S=p.length;E<S;E++){const C=p[E];if(C.isDirectionalLight){const A=r.directional[g];A.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(b),g++}else if(C.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(b),y++}else if(C.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(b),c.identity(),u.copy(C.matrixWorld),u.premultiply(b),c.extractRotation(u),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),_++}else if(C.isPointLight){const A=r.point[w];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(b),w++}else if(C.isHemisphereLight){const A=r.hemi[v];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(b),v++}}}return{setup:h,setupView:f,state:r}}function Ic(s,e){const t=new Eb(s,e),n=[],r=[];function a(){n.length=0,r.length=0}function u(m){n.push(m)}function c(m){r.push(m)}function h(m){t.setup(n,m)}function f(m){t.setupView(n,m)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:f,pushLight:u,pushShadow:c}}function Ab(s,e){let t=new WeakMap;function n(a,u=0){const c=t.get(a);let h;return c===void 0?(h=new Ic(s,e),t.set(a,[h])):u>=c.length?(h=new Ic(s,e),c.push(h)):h=c[u],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pb extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rb(s,e,t){let n=new Rs;const r=new Oe,a=new Oe,u=new At,c=new Pb({depthPacking:Gp}),h=new Tb,f={},p=t.maxTextureSize,m={0:cn,1:dr,2:Hn},g=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),w=g.clone();w.defines.HORIZONTAL_PASS=1;const y=new en;y.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu,this.render=function(C,A,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const F=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ui),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let W=0,oe=C.length;W<oe;W++){const U=C[W],X=U.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const z=X.getFrameExtents();if(r.multiply(z),a.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/z.x),r.x=a.x*z.x,X.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/z.y),r.y=a.y*z.y,X.mapSize.y=a.y)),X.map===null){const Q=this.type!==Nr?{minFilter:qt,magFilter:qt}:{};X.map=new hi(r.x,r.y,Q),X.map.texture.name=U.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const B=X.getViewportCount();for(let Q=0;Q<B;Q++){const ee=X.getViewport(Q);u.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),O.viewport(u),X.updateMatrices(U,Q),n=X.getFrustum(),S(A,L,X.camera,U,this.type)}X.isPointLightShadow!==!0&&this.type===Nr&&b(X,L),X.needsUpdate=!1}v.needsUpdate=!1,s.setRenderTarget(F,M,D)};function b(C,A){const L=e.update(_);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,w.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,w.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hi(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,L,g,_,null),w.uniforms.shadow_pass.value=C.mapPass.texture,w.uniforms.resolution.value=C.mapSize,w.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,L,w,_,null)}function E(C,A,L,F,M,D){let O=null;const W=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0?O=W:O=L.isPointLight===!0?h:c,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const oe=O.uuid,U=A.uuid;let X=f[oe];X===void 0&&(X={},f[oe]=X);let z=X[U];z===void 0&&(z=O.clone(),X[U]=z),O=z}return O.visible=A.visible,O.wireframe=A.wireframe,D===Nr?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:m[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaTest,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=F,O.farDistance=M),O}function S(C,A,L,F,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Nr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const W=e.update(C),oe=C.material;if(Array.isArray(oe)){const U=W.groups;for(let X=0,z=U.length;X<z;X++){const B=U[X],Q=oe[B.materialIndex];if(Q&&Q.visible){const ee=E(C,Q,F,L.near,L.far,M);s.renderBufferDirect(L,null,W,ee,C,B)}}}else if(oe.visible){const U=E(C,oe,F,L.near,L.far,M);s.renderBufferDirect(L,null,W,U,C,null)}}const O=C.children;for(let W=0,oe=O.length;W<oe;W++)S(O[W],A,L,F,M)}}function Ib(s,e,t){const n=t.isWebGL2;function r(){let V=!1;const te=new At;let le=null;const he=new At(0,0,0,0);return{setMask:function(ye){le!==ye&&!V&&(s.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){V=ye},setClear:function(ye,Ve,gt,dt,Mn){Mn===!0&&(ye*=dt,Ve*=dt,gt*=dt),te.set(ye,Ve,gt,dt),he.equals(te)===!1&&(s.clearColor(ye,Ve,gt,dt),he.copy(te))},reset:function(){V=!1,le=null,he.set(-1,0,0,0)}}}function a(){let V=!1,te=null,le=null,he=null;return{setTest:function(ye){ye?be(2929):Pe(2929)},setMask:function(ye){te!==ye&&!V&&(s.depthMask(ye),te=ye)},setFunc:function(ye){if(le!==ye){switch(ye){case hp:s.depthFunc(512);break;case fp:s.depthFunc(519);break;case pp:s.depthFunc(513);break;case $o:s.depthFunc(515);break;case mp:s.depthFunc(514);break;case gp:s.depthFunc(518);break;case _p:s.depthFunc(516);break;case vp:s.depthFunc(517);break;default:s.depthFunc(515)}le=ye}},setLocked:function(ye){V=ye},setClear:function(ye){he!==ye&&(s.clearDepth(ye),he=ye)},reset:function(){V=!1,te=null,le=null,he=null}}}function u(){let V=!1,te=null,le=null,he=null,ye=null,Ve=null,gt=null,dt=null,Mn=null;return{setTest:function(rt){V||(rt?be(2960):Pe(2960))},setMask:function(rt){te!==rt&&!V&&(s.stencilMask(rt),te=rt)},setFunc:function(rt,Yt,Ot){(le!==rt||he!==Yt||ye!==Ot)&&(s.stencilFunc(rt,Yt,Ot),le=rt,he=Yt,ye=Ot)},setOp:function(rt,Yt,Ot){(Ve!==rt||gt!==Yt||dt!==Ot)&&(s.stencilOp(rt,Yt,Ot),Ve=rt,gt=Yt,dt=Ot)},setLocked:function(rt){V=rt},setClear:function(rt){Mn!==rt&&(s.clearStencil(rt),Mn=rt)},reset:function(){V=!1,te=null,le=null,he=null,ye=null,Ve=null,gt=null,dt=null,Mn=null}}}const c=new r,h=new a,f=new u,p=new WeakMap,m=new WeakMap;let g={},w={},y=new WeakMap,_=[],v=null,b=!1,E=null,S=null,C=null,A=null,L=null,F=null,M=null,D=!1,O=null,W=null,oe=null,U=null,X=null;const z=s.getParameter(35661);let B=!1,Q=0;const ee=s.getParameter(7938);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=Q>=2);let K=null,Z={};const N=s.getParameter(3088),se=s.getParameter(2978),re=new At().fromArray(N),ue=new At().fromArray(se);function Ce(V,te,le){const he=new Uint8Array(4),ye=s.createTexture();s.bindTexture(V,ye),s.texParameteri(V,10241,9728),s.texParameteri(V,10240,9728);for(let Ve=0;Ve<le;Ve++)s.texImage2D(te+Ve,0,6408,1,1,0,6408,5121,he);return ye}const G={};G[3553]=Ce(3553,3553,1),G[34067]=Ce(34067,34069,6),c.setClear(0,0,0,1),h.setClear(1),f.setClear(0),be(2929),h.setFunc($o),pt(!1),zt(Ml),be(2884),ut(ui);function be(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function Pe(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Ae(V,te){return w[V]!==te?(s.bindFramebuffer(V,te),w[V]=te,n&&(V===36009&&(w[36160]=te),V===36160&&(w[36009]=te)),!0):!1}function pe(V,te){let le=_,he=!1;if(V)if(le=y.get(te),le===void 0&&(le=[],y.set(te,le)),V.isWebGLMultipleRenderTargets){const ye=V.texture;if(le.length!==ye.length||le[0]!==36064){for(let Ve=0,gt=ye.length;Ve<gt;Ve++)le[Ve]=36064+Ve;le.length=ye.length,he=!0}}else le[0]!==36064&&(le[0]=36064,he=!0);else le[0]!==1029&&(le[0]=1029,he=!0);he&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Xe(V){return v!==V?(s.useProgram(V),v=V,!0):!1}const Ne={[ar]:32774,[tp]:32778,[np]:32779};if(n)Ne[Al]=32775,Ne[Pl]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(Ne[Al]=V.MIN_EXT,Ne[Pl]=V.MAX_EXT)}const Se={[ip]:0,[rp]:1,[sp]:768,[du]:770,[dp]:776,[cp]:774,[ap]:772,[op]:769,[hu]:771,[up]:775,[lp]:773};function ut(V,te,le,he,ye,Ve,gt,dt){if(V===ui){b===!0&&(Pe(3042),b=!1);return}if(b===!1&&(be(3042),b=!0),V!==ep){if(V!==E||dt!==D){if((S!==ar||L!==ar)&&(s.blendEquation(32774),S=ar,L=ar),dt)switch(V){case cr:s.blendFuncSeparate(1,771,1,771);break;case Sl:s.blendFunc(1,1);break;case Cl:s.blendFuncSeparate(0,769,0,1);break;case El:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case cr:s.blendFuncSeparate(770,771,1,771);break;case Sl:s.blendFunc(770,1);break;case Cl:s.blendFuncSeparate(0,769,0,1);break;case El:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}C=null,A=null,F=null,M=null,E=V,D=dt}return}ye=ye||te,Ve=Ve||le,gt=gt||he,(te!==S||ye!==L)&&(s.blendEquationSeparate(Ne[te],Ne[ye]),S=te,L=ye),(le!==C||he!==A||Ve!==F||gt!==M)&&(s.blendFuncSeparate(Se[le],Se[he],Se[Ve],Se[gt]),C=le,A=he,F=Ve,M=gt),E=V,D=null}function mt(V,te){V.side===Hn?Pe(2884):be(2884);let le=V.side===cn;te&&(le=!le),pt(le),V.blending===cr&&V.transparent===!1?ut(ui):ut(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const he=V.stencilWrite;f.setTest(he),he&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ke(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(32926):Pe(32926)}function pt(V){O!==V&&(V?s.frontFace(2304):s.frontFace(2305),O=V)}function zt(V){V!==Qf?(be(2884),V!==W&&(V===Ml?s.cullFace(1029):V===$f?s.cullFace(1028):s.cullFace(1032))):Pe(2884),W=V}function at(V){V!==oe&&(B&&s.lineWidth(V),oe=V)}function Ke(V,te,le){V?(be(32823),(U!==te||X!==le)&&(s.polygonOffset(te,le),U=te,X=le)):Pe(32823)}function Bt(V){V?be(3089):Pe(3089)}function Gt(V){V===void 0&&(V=33984+z-1),K!==V&&(s.activeTexture(V),K=V)}function R(V,te,le){le===void 0&&(K===null?le=33984+z-1:le=K);let he=Z[le];he===void 0&&(he={type:void 0,texture:void 0},Z[le]=he),(he.type!==V||he.texture!==te)&&(K!==le&&(s.activeTexture(le),K=le),s.bindTexture(V,te||G[V]),he.type=V,he.texture=te)}function P(){const V=Z[K];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(V){re.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),re.copy(V))}function we(V){ue.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ue.copy(V))}function Be(V,te){let le=m.get(te);le===void 0&&(le=new WeakMap,m.set(te,le));let he=le.get(V);he===void 0&&(he=s.getUniformBlockIndex(te,V.name),le.set(V,he))}function He(V,te){const he=m.get(te).get(V);p.get(V)!==he&&(s.uniformBlockBinding(te,he,V.__bindingPointIndex),p.set(V,he))}function nt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},K=null,Z={},w={},y=new WeakMap,_=[],v=null,b=!1,E=null,S=null,C=null,A=null,L=null,F=null,M=null,D=!1,O=null,W=null,oe=null,U=null,X=null,re.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),f.reset()}return{buffers:{color:c,depth:h,stencil:f},enable:be,disable:Pe,bindFramebuffer:Ae,drawBuffers:pe,useProgram:Xe,setBlending:ut,setMaterial:mt,setFlipSided:pt,setCullFace:zt,setLineWidth:at,setPolygonOffset:Ke,setScissorTest:Bt,activeTexture:Gt,bindTexture:R,unbindTexture:P,compressedTexImage2D:$,compressedTexImage3D:ce,texImage2D:ve,texImage3D:_e,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:j,texStorage3D:ge,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:Te,compressedTexSubImage3D:k,scissor:xe,viewport:we,reset:nt}}function kb(s,e,t,n,r,a,u){const c=r.isWebGL2,h=r.maxTextures,f=r.maxCubemapSize,p=r.maxTextureSize,m=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,w=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),y=new WeakMap;let _;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,P){return b?new OffscreenCanvas(R,P):zr("canvas")}function S(R,P,$,ce){let de=1;if((R.width>ce||R.height>ce)&&(de=ce/Math.max(R.width,R.height)),de<1||P===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const me=P?sa:Math.floor,Te=me(de*R.width),k=me(de*R.height);_===void 0&&(_=E(Te,k));const j=$?E(Te,k):_;return j.width=Te,j.height=k,j.getContext("2d").drawImage(R,0,0,Te,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+k+")."),j}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function C(R){return tc(R.width)&&tc(R.height)}function A(R){return c?!1:R.wrapS!==wn||R.wrapT!==wn||R.minFilter!==qt&&R.minFilter!==on}function L(R,P){return R.generateMipmaps&&P&&R.minFilter!==qt&&R.minFilter!==on}function F(R){s.generateMipmap(R)}function M(R,P,$,ce,de=!1){if(c===!1)return P;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me=P;return P===6403&&($===5126&&(me=33326),$===5131&&(me=33325),$===5121&&(me=33321)),P===33319&&($===5126&&(me=33328),$===5131&&(me=33327),$===5121&&(me=33323)),P===6408&&($===5126&&(me=34836),$===5131&&(me=34842),$===5121&&(me=ce===ct&&de===!1?35907:32856),$===32819&&(me=32854),$===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function D(R,P,$){return L(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==on?Math.log2(Math.max(P.width,P.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?P.mipmaps.length:1}function O(R){return R===qt||R===Tl||R===Ll?9728:9729}function W(R){const P=R.target;P.removeEventListener("dispose",W),U(P),P.isVideoTexture&&y.delete(P)}function oe(R){const P=R.target;P.removeEventListener("dispose",oe),z(P)}function U(R){const P=n.get(R);if(P.__webglInit===void 0)return;const $=R.source,ce=v.get($);if(ce){const de=ce[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&X(R),Object.keys(ce).length===0&&v.delete($)}n.remove(R)}function X(R){const P=n.get(R);s.deleteTexture(P.__webglTexture);const $=R.source,ce=v.get($);delete ce[P.__cacheKey],u.memory.textures--}function z(R){const P=R.texture,$=n.get(R),ce=n.get(P);if(ce.__webglTexture!==void 0&&(s.deleteTexture(ce.__webglTexture),u.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let de=0;de<6;de++)s.deleteFramebuffer($.__webglFramebuffer[de]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[de]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let de=0;de<$.__webglColorRenderbuffer.length;de++)$.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[de]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let de=0,me=P.length;de<me;de++){const Te=n.get(P[de]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),n.remove(P[de])}n.remove(P),n.remove(R)}let B=0;function Q(){B=0}function ee(){const R=B;return R>=h&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+h),B+=1,R}function K(R){const P=[];return P.push(R.wrapS),P.push(R.wrapT),P.push(R.wrapR||0),P.push(R.magFilter),P.push(R.minFilter),P.push(R.anisotropy),P.push(R.internalFormat),P.push(R.format),P.push(R.type),P.push(R.generateMipmaps),P.push(R.premultiplyAlpha),P.push(R.flipY),P.push(R.unpackAlignment),P.push(R.encoding),P.join()}function Z(R,P){const $=n.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const ce=R.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe($,R,P);return}}t.bindTexture(3553,$.__webglTexture,33984+P)}function N(R,P){const $=n.get(R);if(R.version>0&&$.__version!==R.version){Pe($,R,P);return}t.bindTexture(35866,$.__webglTexture,33984+P)}function se(R,P){const $=n.get(R);if(R.version>0&&$.__version!==R.version){Pe($,R,P);return}t.bindTexture(32879,$.__webglTexture,33984+P)}function re(R,P){const $=n.get(R);if(R.version>0&&$.__version!==R.version){Ae($,R,P);return}t.bindTexture(34067,$.__webglTexture,33984+P)}const ue={[na]:10497,[wn]:33071,[ia]:33648},Ce={[qt]:9728,[Tl]:9984,[Ll]:9986,[on]:9729,[Cp]:9985,[Ls]:9987};function G(R,P,$){if($?(s.texParameteri(R,10242,ue[P.wrapS]),s.texParameteri(R,10243,ue[P.wrapT]),(R===32879||R===35866)&&s.texParameteri(R,32882,ue[P.wrapR]),s.texParameteri(R,10240,Ce[P.magFilter]),s.texParameteri(R,10241,Ce[P.minFilter])):(s.texParameteri(R,10242,33071),s.texParameteri(R,10243,33071),(R===32879||R===35866)&&s.texParameteri(R,32882,33071),(P.wrapS!==wn||P.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,10240,O(P.magFilter)),s.texParameteri(R,10241,O(P.minFilter)),P.minFilter!==qt&&P.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(P.type===Pi&&e.has("OES_texture_float_linear")===!1||c===!1&&P.type===Ur&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(s.texParameterf(R,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function be(R,P){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,P.addEventListener("dispose",W));const ce=P.source;let de=v.get(ce);de===void 0&&(de={},v.set(ce,de));const me=K(P);if(me!==R.__cacheKey){de[me]===void 0&&(de[me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),de[me].usedTimes++;const Te=de[R.__cacheKey];Te!==void 0&&(de[R.__cacheKey].usedTimes--,Te.usedTimes===0&&X(P)),R.__cacheKey=me,R.__webglTexture=de[me].texture}return $}function Pe(R,P,$){let ce=3553;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ce=35866),P.isData3DTexture&&(ce=32879);const de=be(R,P),me=P.source;t.bindTexture(ce,R.__webglTexture,33984+$);const Te=n.get(me);if(me.version!==Te.__version||de===!0){t.activeTexture(33984+$),s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const k=A(P)&&C(P.image)===!1;let j=S(P.image,k,!1,p);j=Gt(P,j);const ge=C(j)||c,ve=a.convert(P.format,P.encoding);let _e=a.convert(P.type),xe=M(P.internalFormat,ve,_e,P.encoding,P.isVideoTexture);G(ce,P,ge);let we;const Be=P.mipmaps,He=c&&P.isVideoTexture!==!0,nt=Te.__version===void 0||de===!0,V=D(P,j,ge);if(P.isDepthTexture)xe=6402,c?P.type===Pi?xe=36012:P.type===Ai?xe=33190:P.type===ur?xe=35056:xe=33189:P.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Li&&xe===6402&&P.type!==gu&&P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Ai,_e=a.convert(P.type)),P.format===pr&&xe===6402&&(xe=34041,P.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=ur,_e=a.convert(P.type))),nt&&(He?t.texStorage2D(3553,1,xe,j.width,j.height):t.texImage2D(3553,0,xe,j.width,j.height,0,ve,_e,null));else if(P.isDataTexture)if(Be.length>0&&ge){He&&nt&&t.texStorage2D(3553,V,xe,Be[0].width,Be[0].height);for(let te=0,le=Be.length;te<le;te++)we=Be[te],He?t.texSubImage2D(3553,te,0,0,we.width,we.height,ve,_e,we.data):t.texImage2D(3553,te,xe,we.width,we.height,0,ve,_e,we.data);P.generateMipmaps=!1}else He?(nt&&t.texStorage2D(3553,V,xe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ve,_e,j.data)):t.texImage2D(3553,0,xe,j.width,j.height,0,ve,_e,j.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){He&&nt&&t.texStorage3D(35866,V,xe,Be[0].width,Be[0].height,j.depth);for(let te=0,le=Be.length;te<le;te++)we=Be[te],P.format!==xn?ve!==null?He?t.compressedTexSubImage3D(35866,te,0,0,0,we.width,we.height,j.depth,ve,we.data,0,0):t.compressedTexImage3D(35866,te,xe,we.width,we.height,j.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,te,0,0,0,we.width,we.height,j.depth,ve,_e,we.data):t.texImage3D(35866,te,xe,we.width,we.height,j.depth,0,ve,_e,we.data)}else{He&&nt&&t.texStorage2D(3553,V,xe,Be[0].width,Be[0].height);for(let te=0,le=Be.length;te<le;te++)we=Be[te],P.format!==xn?ve!==null?He?t.compressedTexSubImage2D(3553,te,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(3553,te,xe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,te,0,0,we.width,we.height,ve,_e,we.data):t.texImage2D(3553,te,xe,we.width,we.height,0,ve,_e,we.data)}else if(P.isDataArrayTexture)He?(nt&&t.texStorage3D(35866,V,xe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ve,_e,j.data)):t.texImage3D(35866,0,xe,j.width,j.height,j.depth,0,ve,_e,j.data);else if(P.isData3DTexture)He?(nt&&t.texStorage3D(32879,V,xe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ve,_e,j.data)):t.texImage3D(32879,0,xe,j.width,j.height,j.depth,0,ve,_e,j.data);else if(P.isFramebufferTexture){if(nt)if(He)t.texStorage2D(3553,V,xe,j.width,j.height);else{let te=j.width,le=j.height;for(let he=0;he<V;he++)t.texImage2D(3553,he,xe,te,le,0,ve,_e,null),te>>=1,le>>=1}}else if(Be.length>0&&ge){He&&nt&&t.texStorage2D(3553,V,xe,Be[0].width,Be[0].height);for(let te=0,le=Be.length;te<le;te++)we=Be[te],He?t.texSubImage2D(3553,te,0,0,ve,_e,we):t.texImage2D(3553,te,xe,ve,_e,we);P.generateMipmaps=!1}else He?(nt&&t.texStorage2D(3553,V,xe,j.width,j.height),t.texSubImage2D(3553,0,0,0,ve,_e,j)):t.texImage2D(3553,0,xe,ve,_e,j);L(P,ge)&&F(ce),Te.__version=me.version,P.onUpdate&&P.onUpdate(P)}R.__version=P.version}function Ae(R,P,$){if(P.image.length!==6)return;const ce=be(R,P),de=P.source;t.bindTexture(34067,R.__webglTexture,33984+$);const me=n.get(de);if(de.version!==me.__version||ce===!0){t.activeTexture(33984+$),s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const Te=P.isCompressedTexture||P.image[0].isCompressedTexture,k=P.image[0]&&P.image[0].isDataTexture,j=[];for(let te=0;te<6;te++)!Te&&!k?j[te]=S(P.image[te],!1,!0,f):j[te]=k?P.image[te].image:P.image[te],j[te]=Gt(P,j[te]);const ge=j[0],ve=C(ge)||c,_e=a.convert(P.format,P.encoding),xe=a.convert(P.type),we=M(P.internalFormat,_e,xe,P.encoding),Be=c&&P.isVideoTexture!==!0,He=me.__version===void 0||ce===!0;let nt=D(P,ge,ve);G(34067,P,ve);let V;if(Te){Be&&He&&t.texStorage2D(34067,nt,we,ge.width,ge.height);for(let te=0;te<6;te++){V=j[te].mipmaps;for(let le=0;le<V.length;le++){const he=V[le];P.format!==xn?_e!==null?Be?t.compressedTexSubImage2D(34069+te,le,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(34069+te,le,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+te,le,0,0,he.width,he.height,_e,xe,he.data):t.texImage2D(34069+te,le,we,he.width,he.height,0,_e,xe,he.data)}}}else{V=P.mipmaps,Be&&He&&(V.length>0&&nt++,t.texStorage2D(34067,nt,we,j[0].width,j[0].height));for(let te=0;te<6;te++)if(k){Be?t.texSubImage2D(34069+te,0,0,0,j[te].width,j[te].height,_e,xe,j[te].data):t.texImage2D(34069+te,0,we,j[te].width,j[te].height,0,_e,xe,j[te].data);for(let le=0;le<V.length;le++){const ye=V[le].image[te].image;Be?t.texSubImage2D(34069+te,le+1,0,0,ye.width,ye.height,_e,xe,ye.data):t.texImage2D(34069+te,le+1,we,ye.width,ye.height,0,_e,xe,ye.data)}}else{Be?t.texSubImage2D(34069+te,0,0,0,_e,xe,j[te]):t.texImage2D(34069+te,0,we,_e,xe,j[te]);for(let le=0;le<V.length;le++){const he=V[le];Be?t.texSubImage2D(34069+te,le+1,0,0,_e,xe,he.image[te]):t.texImage2D(34069+te,le+1,we,_e,xe,he.image[te])}}}L(P,ve)&&F(34067),me.__version=de.version,P.onUpdate&&P.onUpdate(P)}R.__version=P.version}function pe(R,P,$,ce,de){const me=a.convert($.format,$.encoding),Te=a.convert($.type),k=M($.internalFormat,me,Te,$.encoding);n.get(P).__hasExternalTextures||(de===32879||de===35866?t.texImage3D(de,0,k,P.width,P.height,P.depth,0,me,Te,null):t.texImage2D(de,0,k,P.width,P.height,0,me,Te,null)),t.bindFramebuffer(36160,R),Ke(P)?g.framebufferTexture2DMultisampleEXT(36160,ce,de,n.get($).__webglTexture,0,at(P)):(de===3553||de>=34069&&de<=34074)&&s.framebufferTexture2D(36160,ce,de,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(R,P,$){if(s.bindRenderbuffer(36161,R),P.depthBuffer&&!P.stencilBuffer){let ce=33189;if($||Ke(P)){const de=P.depthTexture;de&&de.isDepthTexture&&(de.type===Pi?ce=36012:de.type===Ai&&(ce=33190));const me=at(P);Ke(P)?g.renderbufferStorageMultisampleEXT(36161,me,ce,P.width,P.height):s.renderbufferStorageMultisample(36161,me,ce,P.width,P.height)}else s.renderbufferStorage(36161,ce,P.width,P.height);s.framebufferRenderbuffer(36160,36096,36161,R)}else if(P.depthBuffer&&P.stencilBuffer){const ce=at(P);$&&Ke(P)===!1?s.renderbufferStorageMultisample(36161,ce,35056,P.width,P.height):Ke(P)?g.renderbufferStorageMultisampleEXT(36161,ce,35056,P.width,P.height):s.renderbufferStorage(36161,34041,P.width,P.height),s.framebufferRenderbuffer(36160,33306,36161,R)}else{const ce=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0;de<ce.length;de++){const me=ce[de],Te=a.convert(me.format,me.encoding),k=a.convert(me.type),j=M(me.internalFormat,Te,k,me.encoding),ge=at(P);$&&Ke(P)===!1?s.renderbufferStorageMultisample(36161,ge,j,P.width,P.height):Ke(P)?g.renderbufferStorageMultisampleEXT(36161,ge,j,P.width,P.height):s.renderbufferStorage(36161,j,P.width,P.height)}}s.bindRenderbuffer(36161,null)}function Ne(R,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Z(P.depthTexture,0);const ce=n.get(P.depthTexture).__webglTexture,de=at(P);if(P.depthTexture.format===Li)Ke(P)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,ce,0,de):s.framebufferTexture2D(36160,36096,3553,ce,0);else if(P.depthTexture.format===pr)Ke(P)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,ce,0,de):s.framebufferTexture2D(36160,33306,3553,ce,0);else throw new Error("Unknown depthTexture format")}function Se(R){const P=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!P.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ne(P.__webglFramebuffer,R)}else if($){P.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(36160,P.__webglFramebuffer[ce]),P.__webglDepthbuffer[ce]=s.createRenderbuffer(),Xe(P.__webglDepthbuffer[ce],R,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),Xe(P.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function ut(R,P,$){const ce=n.get(R);P!==void 0&&pe(ce.__webglFramebuffer,R,R.texture,36064,3553),$!==void 0&&Se(R)}function mt(R){const P=R.texture,$=n.get(R),ce=n.get(P);R.addEventListener("dispose",oe),R.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=P.version,u.memory.textures++);const de=R.isWebGLCubeRenderTarget===!0,me=R.isWebGLMultipleRenderTargets===!0,Te=C(R)||c;if(de){$.__webglFramebuffer=[];for(let k=0;k<6;k++)$.__webglFramebuffer[k]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),me)if(r.drawBuffers){const k=R.texture;for(let j=0,ge=k.length;j<ge;j++){const ve=n.get(k[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&Ke(R)===!1){const k=me?P:[P];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){const ge=k[j];$.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,$.__webglColorRenderbuffer[j]);const ve=a.convert(ge.format,ge.encoding),_e=a.convert(ge.type),xe=M(ge.internalFormat,ve,_e,ge.encoding,R.isXRRenderTarget===!0),we=at(R);s.renderbufferStorageMultisample(36161,we,xe,R.width,R.height),s.framebufferRenderbuffer(36160,36064+j,36161,$.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),R.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(de){t.bindTexture(34067,ce.__webglTexture),G(34067,P,Te);for(let k=0;k<6;k++)pe($.__webglFramebuffer[k],R,P,36064,34069+k);L(P,Te)&&F(34067),t.unbindTexture()}else if(me){const k=R.texture;for(let j=0,ge=k.length;j<ge;j++){const ve=k[j],_e=n.get(ve);t.bindTexture(3553,_e.__webglTexture),G(3553,ve,Te),pe($.__webglFramebuffer,R,ve,36064+j,3553),L(ve,Te)&&F(3553)}t.unbindTexture()}else{let k=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?k=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,ce.__webglTexture),G(k,P,Te),pe($.__webglFramebuffer,R,P,36064,k),L(P,Te)&&F(k),t.unbindTexture()}R.depthBuffer&&Se(R)}function pt(R){const P=C(R)||c,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ce=0,de=$.length;ce<de;ce++){const me=$[ce];if(L(me,P)){const Te=R.isWebGLCubeRenderTarget?34067:3553,k=n.get(me).__webglTexture;t.bindTexture(Te,k),F(Te),t.unbindTexture()}}}function zt(R){if(c&&R.samples>0&&Ke(R)===!1){const P=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,ce=R.height;let de=16384;const me=[],Te=R.stencilBuffer?33306:36096,k=n.get(R),j=R.isWebGLMultipleRenderTargets===!0;if(j)for(let ge=0;ge<P.length;ge++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let ge=0;ge<P.length;ge++){me.push(36064+ge),R.depthBuffer&&me.push(Te);const ve=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(de|=256),R.stencilBuffer&&(de|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[ge]),ve===!0&&(s.invalidateFramebuffer(36008,[Te]),s.invalidateFramebuffer(36009,[Te])),j){const _e=n.get(P[ge]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,_e,0)}s.blitFramebuffer(0,0,$,ce,0,0,$,ce,de,9728),w&&s.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let ge=0;ge<P.length;ge++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,k.__webglColorRenderbuffer[ge]);const ve=n.get(P[ge]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function at(R){return Math.min(m,R.samples)}function Ke(R){const P=n.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Bt(R){const P=u.render.frame;y.get(R)!==P&&(y.set(R,P),R.update())}function Gt(R,P){const $=R.encoding,ce=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ra||$!==di&&($===ct?c===!1?e.has("EXT_sRGB")===!0&&ce===xn?(R.format=ra,R.minFilter=on,R.generateMipmaps=!1):P=wu.sRGBToLinear(P):(ce!==xn||de!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),P}this.allocateTextureUnit=ee,this.resetTextureUnits=Q,this.setTexture2D=Z,this.setTexture2DArray=N,this.setTexture3D=se,this.setTextureCube=re,this.rebindTextures=ut,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ke}function Ob(s,e,t){const n=t.isWebGL2;function r(a,u=null){let c;if(a===Ri)return 5121;if(a===Tp)return 32819;if(a===Lp)return 32820;if(a===Ep)return 5120;if(a===Ap)return 5122;if(a===gu)return 5123;if(a===Pp)return 5124;if(a===Ai)return 5125;if(a===Pi)return 5126;if(a===Ur)return n?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===Dp)return 6406;if(a===xn)return 6408;if(a===Ip)return 6409;if(a===kp)return 6410;if(a===Li)return 6402;if(a===pr)return 34041;if(a===Op)return 6403;if(a===Rp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===ra)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Np)return 36244;if(a===Fp)return 33319;if(a===Vp)return 33320;if(a===Up)return 36249;if(a===vo||a===bo||a===wo||a===xo)if(u===ct)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===vo)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===wo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===vo)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bo)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===wo)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xo)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Dl||a===Rl||a===Il||a===kl)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Dl)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rl)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Il)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===kl)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zp)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ol||a===Nl)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ol)return u===ct?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Nl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Fl||a===Vl||a===Ul||a===zl||a===Bl||a===Gl||a===Hl||a===Wl||a===jl||a===ql||a===Xl||a===Yl||a===Kl||a===Zl)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Fl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ul)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===jl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ql)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Yl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Kl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Zl)return u===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Jl)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Jl)return u===ct?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===ur?n?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class Nb extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fb={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(f.joints[_.jointName]===void 0){const E=new Ss;E.matrixAutoUpdate=!1,E.visible=!1,f.joints[_.jointName]=E,f.add(E)}const b=f.joints[_.jointName];v!==null&&(b.matrix.fromArray(v.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=v.radius),b.visible=v!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),w=.02,y=.005;f.inputState.pinching&&g>w+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=w-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Fb)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=u!==null),this}}class Vb extends un{constructor(e,t,n,r,a,u,c,h,f,p){if(p=p!==void 0?p:Li,p!==Li&&p!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Li&&(n=Ai),n===void 0&&p===pr&&(n=ur),super(null,r,a,u,c,h,p,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:qt,this.minFilter=h!==void 0?h:qt,this.flipY=!1,this.generateMipmaps=!1}}class Ub extends ki{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",h=null,f=null,p=null,m=null,g=null,w=null;const y=t.getContextAttributes();let _=null,v=null;const b=[],E=[],S=new $t;S.layers.enable(1),S.viewport=new At;const C=new $t;C.layers.enable(2),C.viewport=new At;const A=[S,C],L=new Nb;L.layers.enable(1),L.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=b[K];return Z===void 0&&(Z=new Ko,b[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=b[K];return Z===void 0&&(Z=new Ko,b[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=b[K];return Z===void 0&&(Z=new Ko,b[K]=Z),Z.getHandSpace()};function D(K){const Z=E.indexOf(K.inputSource);if(Z===-1)return;const N=b[Z];N!==void 0&&N.dispatchEvent({type:K.type,data:K.inputSource})}function O(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",W);for(let K=0;K<b.length;K++){const Z=E[K];Z!==null&&(E[K]=null,b[K].disconnect(Z))}F=null,M=null,e.setRenderTarget(_),g=null,m=null,p=null,r=null,v=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",O),r.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:g}),v=new hi(g.framebufferWidth,g.framebufferHeight,{format:xn,type:Ri,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let Z=null,N=null,se=null;y.depth&&(se=y.stencil?35056:33190,Z=y.stencil?pr:Li,N=y.stencil?ur:Ai);const re={colorFormat:32856,depthFormat:se,scaleFactor:a};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(re),r.updateRenderState({layers:[m]}),v=new hi(m.textureWidth,m.textureHeight,{format:xn,type:Ri,depthTexture:new Vb(m.textureWidth,m.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const ue=e.properties.get(v);ue.__ignoreDepthValues=m.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),h=null,u=await r.requestReferenceSpace(c),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(K){for(let Z=0;Z<K.removed.length;Z++){const N=K.removed[Z],se=E.indexOf(N);se>=0&&(E[se]=null,b[se].dispatchEvent({type:"disconnected",data:N}))}for(let Z=0;Z<K.added.length;Z++){const N=K.added[Z];let se=E.indexOf(N);if(se===-1){for(let ue=0;ue<b.length;ue++)if(ue>=E.length){E.push(N),se=ue;break}else if(E[ue]===null){E[ue]=N,se=ue;break}if(se===-1)break}const re=b[se];re&&re.dispatchEvent({type:"connected",data:N})}}const oe=new q,U=new q;function X(K,Z,N){oe.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(N.matrixWorld);const se=oe.distanceTo(U),re=Z.projectionMatrix.elements,ue=N.projectionMatrix.elements,Ce=re[14]/(re[10]-1),G=re[14]/(re[10]+1),be=(re[9]+1)/re[5],Pe=(re[9]-1)/re[5],Ae=(re[8]-1)/re[0],pe=(ue[8]+1)/ue[0],Xe=Ce*Ae,Ne=Ce*pe,Se=se/(-Ae+pe),ut=Se*-Ae;Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const mt=Ce+Se,pt=G+Se,zt=Xe-ut,at=Ne+(se-ut),Ke=be*G/pt*mt,Bt=Pe*G/pt*mt;K.projectionMatrix.makePerspective(zt,at,Ke,Bt,mt,pt)}function z(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;L.near=C.near=S.near=K.near,L.far=C.far=S.far=K.far,(F!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,M=L.far);const Z=K.parent,N=L.cameras;z(L,Z);for(let re=0;re<N.length;re++)z(N[re],Z);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),K.matrix.copy(L.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale);const se=K.children;for(let re=0,ue=se.length;re<ue;re++)se[re].updateMatrixWorld(!0);N.length===2?X(L,S,C):L.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(K){m!==null&&(m.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)};let B=null;function Q(K,Z){if(f=Z.getViewerPose(h||u),w=Z,f!==null){const N=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let se=!1;N.length!==L.cameras.length&&(L.cameras.length=0,se=!0);for(let re=0;re<N.length;re++){const ue=N[re];let Ce=null;if(g!==null)Ce=g.getViewport(ue);else{const be=p.getViewSubImage(m,ue);Ce=be.viewport,re===0&&(e.setRenderTargetTextures(v,be.colorTexture,m.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(v))}let G=A[re];G===void 0&&(G=new $t,G.layers.enable(re),G.viewport=new At,A[re]=G),G.matrix.fromArray(ue.transform.matrix),G.projectionMatrix.fromArray(ue.projectionMatrix),G.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),re===0&&L.matrix.copy(G.matrix),se===!0&&L.cameras.push(G)}}for(let N=0;N<b.length;N++){const se=E[N],re=b[N];se!==null&&re!==void 0&&re.update(se,Z,h||u)}B&&B(K,Z),w=null}const ee=new Pu;ee.setAnimationLoop(Q),this.setAnimationLoop=function(K){B=K},this.dispose=function(){}}}function zb(s,e){function t(_,v){_.fogColor.value.copy(v.color),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function n(_,v,b,E,S){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(_,v):v.isMeshToonMaterial?(r(_,v),p(_,v)):v.isMeshPhongMaterial?(r(_,v),f(_,v)):v.isMeshStandardMaterial?(r(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,S)):v.isMeshMatcapMaterial?(r(_,v),w(_,v)):v.isMeshDepthMaterial?r(_,v):v.isMeshDistanceMaterial?(r(_,v),y(_,v)):v.isMeshNormalMaterial?r(_,v):v.isLineBasicMaterial?(a(_,v),v.isLineDashedMaterial&&u(_,v)):v.isPointsMaterial?c(_,v,b,E):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map),v.alphaMap&&(_.alphaMap.value=v.alphaMap),v.bumpMap&&(_.bumpMap.value=v.bumpMap,_.bumpScale.value=v.bumpScale,v.side===cn&&(_.bumpScale.value*=-1)),v.displacementMap&&(_.displacementMap.value=v.displacementMap,_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap),v.normalMap&&(_.normalMap.value=v.normalMap,_.normalScale.value.copy(v.normalScale),v.side===cn&&_.normalScale.value.negate()),v.specularMap&&(_.specularMap.value=v.specularMap),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v).envMap;if(b&&(_.envMap.value=b,_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const C=s.physicallyCorrectLights!==!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*C}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity);let E;v.map?E=v.map:v.specularMap?E=v.specularMap:v.displacementMap?E=v.displacementMap:v.normalMap?E=v.normalMap:v.bumpMap?E=v.bumpMap:v.roughnessMap?E=v.roughnessMap:v.metalnessMap?E=v.metalnessMap:v.alphaMap?E=v.alphaMap:v.emissiveMap?E=v.emissiveMap:v.clearcoatMap?E=v.clearcoatMap:v.clearcoatNormalMap?E=v.clearcoatNormalMap:v.clearcoatRoughnessMap?E=v.clearcoatRoughnessMap:v.iridescenceMap?E=v.iridescenceMap:v.iridescenceThicknessMap?E=v.iridescenceThicknessMap:v.specularIntensityMap?E=v.specularIntensityMap:v.specularColorMap?E=v.specularColorMap:v.transmissionMap?E=v.transmissionMap:v.thicknessMap?E=v.thicknessMap:v.sheenColorMap?E=v.sheenColorMap:v.sheenRoughnessMap&&(E=v.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),_.uvTransform.value.copy(E.matrix));let S;v.aoMap?S=v.aoMap:v.lightMap&&(S=v.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),_.uv2Transform.value.copy(S.matrix))}function a(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity}function u(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function c(_,v,b,E){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=E*.5,v.map&&(_.map.value=v.map),v.alphaMap&&(_.alphaMap.value=v.alphaMap),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);let S;v.map?S=v.map:v.alphaMap&&(S=v.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),_.uvTransform.value.copy(S.matrix))}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map),v.alphaMap&&(_.alphaMap.value=v.alphaMap),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);let b;v.map?b=v.map:v.alphaMap&&(b=v.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),_.uvTransform.value.copy(b.matrix))}function f(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.roughness.value=v.roughness,_.metalness.value=v.metalness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),_.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===cn&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap)}function w(_,v){v.matcap&&(_.matcap.value=v.matcap)}function y(_,v){_.referencePosition.value.copy(v.referencePosition),_.nearDistance.value=v.nearDistance,_.farDistance.value=v.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Bb(s,e,t,n){let r={},a={},u=[];const c=t.isWebGL2?s.getParameter(35375):0;function h(E,S){const C=S.program;n.uniformBlockBinding(E,C)}function f(E,S){let C=r[E.id];C===void 0&&(y(E),C=p(E),r[E.id]=C,E.addEventListener("dispose",v));const A=S.program;n.updateUBOMapping(E,A);const L=e.render.frame;a[E.id]!==L&&(g(E),a[E.id]=L)}function p(E){const S=m();E.__bindingPointIndex=S;const C=s.createBuffer(),A=E.__size,L=E.usage;return s.bindBuffer(35345,C),s.bufferData(35345,A,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,S,C),C}function m(){for(let E=0;E<c;E++)if(u.indexOf(E)===-1)return u.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const S=r[E.id],C=E.uniforms,A=E.__cache;s.bindBuffer(35345,S);for(let L=0,F=C.length;L<F;L++){const M=C[L];if(w(M,L,A)===!0){const D=M.value,O=M.__offset;typeof D=="number"?(M.__data[0]=D,s.bufferSubData(35345,O,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):D.toArray(M.__data),s.bufferSubData(35345,O,M.__data))}}s.bindBuffer(35345,null)}function w(E,S,C){const A=E.value;if(C[S]===void 0)return typeof A=="number"?C[S]=A:C[S]=A.clone(),!0;if(typeof A=="number"){if(C[S]!==A)return C[S]=A,!0}else{const L=C[S];if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(E){const S=E.uniforms;let C=0;const A=16;let L=0;for(let F=0,M=S.length;F<M;F++){const D=S[F],O=_(D);if(D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=C,F>0){L=C%A;const W=A-L;L!==0&&W-O.boundary<0&&(C+=A-L,D.__offset=C)}C+=O.storage}return L=C%A,L>0&&(C+=A-L),E.__size=C,E.__cache={},this}function _(E){const S=E.value,C={boundary:0,storage:0};return typeof S=="number"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),C}function v(E){const S=E.target;S.removeEventListener("dispose",v);const C=u.indexOf(S.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function b(){for(const E in r)s.deleteBuffer(r[E]);u=[],r={},a={}}return{bind:h,update:f,dispose:b}}function Gb(){const s=zr("canvas");return s.style.display="block",s}function Iu(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Gb(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,u=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,h=s.powerPreference!==void 0?s.powerPreference:"default",f=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=s.alpha!==void 0?s.alpha:!1;let m=null,g=null;const w=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const _=this;let v=!1,b=0,E=0,S=null,C=-1,A=null;const L=new At,F=new At;let M=null,D=e.width,O=e.height,W=1,oe=null,U=null;const X=new At(0,0,D,O),z=new At(0,0,D,O);let B=!1;const Q=new Rs;let ee=!1,K=!1,Z=null;const N=new ft,se=new Oe,re=new q,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return S===null?W:1}let G=t;function be(T,J){for(let ne=0;ne<T.length;ne++){const Y=T[ne],ie=e.getContext(Y,J);if(ie!==null)return ie}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Be,!1),G===null){const J=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&J.shift(),G=be(J,T),G===null)throw be(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,Ae,pe,Xe,Ne,Se,ut,mt,pt,zt,at,Ke,Bt,Gt,R,P,$,ce,de,me,Te,k,j,ge;function ve(){Pe=new $_(G),Ae=new X_(G,Pe,s),Pe.init(Ae),k=new Ob(G,Pe,Ae),pe=new Ib(G,Pe,Ae),Xe=new nv,Ne=new bb,Se=new kb(G,Pe,pe,Ne,Ae,k,Xe),ut=new K_(_),mt=new Q_(_),pt=new dm(G,Ae),j=new j_(G,Pe,pt,Ae),zt=new ev(G,pt,Xe,j),at=new ov(G,zt,pt,Xe),de=new sv(G,Ae,Se),P=new Y_(Ne),Ke=new vb(_,ut,mt,Pe,Ae,j,P),Bt=new zb(_,Ne),Gt=new xb,R=new Ab(Pe,Ae),ce=new W_(_,ut,mt,pe,at,p,u),$=new Rb(_,at,Ae),ge=new Bb(G,Xe,Ae,pe),me=new q_(G,Pe,Xe,Ae),Te=new tv(G,Pe,Xe,Ae),Xe.programs=Ke.programs,_.capabilities=Ae,_.extensions=Pe,_.properties=Ne,_.renderLists=Gt,_.shadowMap=$,_.state=pe,_.info=Xe}ve();const _e=new Ub(_,G);this.xr=_e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(D,O,!1))},this.getSize=function(T){return T.set(D,O)},this.setSize=function(T,J,ne){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,O=J,e.width=Math.floor(T*W),e.height=Math.floor(J*W),ne!==!1&&(e.style.width=T+"px",e.style.height=J+"px"),this.setViewport(0,0,T,J)},this.getDrawingBufferSize=function(T){return T.set(D*W,O*W).floor()},this.setDrawingBufferSize=function(T,J,ne){D=T,O=J,W=ne,e.width=Math.floor(T*ne),e.height=Math.floor(J*ne),this.setViewport(0,0,T,J)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,J,ne,Y){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,J,ne,Y),pe.viewport(L.copy(X).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,J,ne,Y){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,J,ne,Y),pe.scissor(F.copy(z).multiplyScalar(W).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(T){pe.setScissorTest(B=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,J=!0,ne=!0){let Y=0;T&&(Y|=16384),J&&(Y|=256),ne&&(Y|=1024),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),Gt.dispose(),R.dispose(),Ne.dispose(),ut.dispose(),mt.dispose(),at.dispose(),j.dispose(),ge.dispose(),Ke.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",he),_e.removeEventListener("sessionend",ye),Z&&(Z.dispose(),Z=null),Ve.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=Xe.autoReset,J=$.enabled,ne=$.autoUpdate,Y=$.needsUpdate,ie=$.type;ve(),Xe.autoReset=T,$.enabled=J,$.autoUpdate=ne,$.needsUpdate=Y,$.type=ie}function Be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const J=T.target;J.removeEventListener("dispose",He),nt(J)}function nt(T){V(T),Ne.remove(T)}function V(T){const J=Ne.get(T).programs;J!==void 0&&(J.forEach(function(ne){Ke.releaseProgram(ne)}),T.isShaderMaterial&&Ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,J,ne,Y,ie,Ee){J===null&&(J=ue);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,Fe=zs(T,J,ne,Y,ie);pe.setMaterial(Y,De);let Ie=ne.index;const Ye=ne.attributes.position;if(Ie===null){if(Ye===void 0||Ye.count===0)return}else if(Ie.count===0)return;let Ue=1;Y.wireframe===!0&&(Ie=zt.getWireframeAttribute(ne),Ue=2),j.setup(ie,Y,Fe,ne,Ie);let je,st=me;Ie!==null&&(je=pt.get(Ie),st=Te,st.setIndex(je));const Ln=Ie!==null?Ie.count:Ye.count,Xn=ne.drawRange.start*Ue,Dn=ne.drawRange.count*Ue,bt=Ee!==null?Ee.start*Ue:0,We=Ee!==null?Ee.count*Ue:1/0,Yn=Math.max(Xn,bt),ht=Math.min(Ln,Xn+Dn,bt+We)-1,Ht=Math.max(0,ht-Yn+1);if(Ht!==0){if(ie.isMesh)Y.wireframe===!0?(pe.setLineWidth(Y.wireframeLinewidth*Ce()),st.setMode(1)):st.setMode(4);else if(ie.isLine){let mn=Y.linewidth;mn===void 0&&(mn=1),pe.setLineWidth(mn*Ce()),ie.isLineSegments?st.setMode(1):ie.isLineLoop?st.setMode(2):st.setMode(3)}else ie.isPoints?st.setMode(0):ie.isSprite&&st.setMode(4);if(ie.isInstancedMesh)st.renderInstances(Yn,Ht,ie.count);else if(ne.isInstancedBufferGeometry){const mn=Math.min(ne.instanceCount,ne._maxInstanceCount);st.renderInstances(Yn,Ht,mn)}else st.render(Yn,Ht)}},this.compile=function(T,J){function ne(Y,ie,Ee){Y.transparent===!0&&Y.side===Hn?(Y.side=cn,Y.needsUpdate=!0,Ot(Y,ie,Ee),Y.side=dr,Y.needsUpdate=!0,Ot(Y,ie,Ee),Y.side=Hn):Ot(Y,ie,Ee)}g=R.get(T),g.init(),y.push(g),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(J.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(_.physicallyCorrectLights),T.traverse(function(Y){const ie=Y.material;if(ie)if(Array.isArray(ie))for(let Ee=0;Ee<ie.length;Ee++){const De=ie[Ee];ne(De,T,Y)}else ne(ie,T,Y)}),y.pop(),g=null};let te=null;function le(T){te&&te(T)}function he(){Ve.stop()}function ye(){Ve.start()}const Ve=new Pu;Ve.setAnimationLoop(le),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(T){te=T,_e.setAnimationLoop(T),T===null?Ve.stop():Ve.start()},_e.addEventListener("sessionstart",he),_e.addEventListener("sessionend",ye),this.render=function(T,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(J),J=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,J,S),g=R.get(T,y.length),g.init(),y.push(g),N.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(N),K=this.localClippingEnabled,ee=P.init(this.clippingPlanes,K,J),m=Gt.get(T,w.length),m.init(),w.push(m),gt(T,J,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,U),ee===!0&&P.beginShadows();const ne=g.state.shadowsArray;if($.render(ne,T,J),ee===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(m,T),g.setupLights(_.physicallyCorrectLights),J.isArrayCamera){const Y=J.cameras;for(let ie=0,Ee=Y.length;ie<Ee;ie++){const De=Y[ie];dt(m,T,De,De.viewport)}}else dt(m,T,J);S!==null&&(Se.updateMultisampleRenderTarget(S),Se.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(_,T,J),j.resetDefaultState(),C=-1,A=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function gt(T,J,ne,Y){if(T.visible===!1)return;if(T.layers.test(J.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(J);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){Y&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(N);const De=at.update(T),Fe=T.material;Fe.visible&&m.push(T,De,Fe,ne,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Xe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Xe.render.frame),!T.frustumCulled||Q.intersectsObject(T))){Y&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(N);const De=at.update(T),Fe=T.material;if(Array.isArray(Fe)){const Ie=De.groups;for(let Ye=0,Ue=Ie.length;Ye<Ue;Ye++){const je=Ie[Ye],st=Fe[je.materialIndex];st&&st.visible&&m.push(T,De,st,ne,re.z,je)}}else Fe.visible&&m.push(T,De,Fe,ne,re.z,null)}}const Ee=T.children;for(let De=0,Fe=Ee.length;De<Fe;De++)gt(Ee[De],J,ne,Y)}function dt(T,J,ne,Y){const ie=T.opaque,Ee=T.transmissive,De=T.transparent;g.setupLightsView(ne),Ee.length>0&&Mn(ie,J,ne),Y&&pe.viewport(L.copy(Y)),ie.length>0&&rt(ie,J,ne),Ee.length>0&&rt(Ee,J,ne),De.length>0&&rt(De,J,ne),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Mn(T,J,ne){const Y=Ae.isWebGL2;Z===null&&(Z=new hi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Ur:Ri,minFilter:Ls,samples:Y&&a===!0?4:0})),_.getDrawingBufferSize(se),Y?Z.setSize(se.x,se.y):Z.setSize(sa(se.x),sa(se.y));const ie=_.getRenderTarget();_.setRenderTarget(Z),_.clear();const Ee=_.toneMapping;_.toneMapping=Pn,rt(T,J,ne),_.toneMapping=Ee,Se.updateMultisampleRenderTarget(Z),Se.updateRenderTargetMipmap(Z),_.setRenderTarget(ie)}function rt(T,J,ne){const Y=J.isScene===!0?J.overrideMaterial:null;for(let ie=0,Ee=T.length;ie<Ee;ie++){const De=T[ie],Fe=De.object,Ie=De.geometry,Ye=Y===null?De.material:Y,Ue=De.group;Fe.layers.test(ne.layers)&&Yt(Fe,J,ne,Ie,Ye,Ue)}}function Yt(T,J,ne,Y,ie,Ee){T.onBeforeRender(_,J,ne,Y,ie,Ee),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(_,J,ne,Y,T,Ee),ie.transparent===!0&&ie.side===Hn?(ie.side=cn,ie.needsUpdate=!0,_.renderBufferDirect(ne,J,Y,ie,T,Ee),ie.side=dr,ie.needsUpdate=!0,_.renderBufferDirect(ne,J,Y,ie,T,Ee),ie.side=Hn):_.renderBufferDirect(ne,J,Y,ie,T,Ee),T.onAfterRender(_,J,ne,Y,ie,Ee)}function Ot(T,J,ne){J.isScene!==!0&&(J=ue);const Y=Ne.get(T),ie=g.state.lights,Ee=g.state.shadowsArray,De=ie.state.version,Fe=Ke.getParameters(T,ie.state,Ee,J,ne),Ie=Ke.getProgramCacheKey(Fe);let Ye=Y.programs;Y.environment=T.isMeshStandardMaterial?J.environment:null,Y.fog=J.fog,Y.envMap=(T.isMeshStandardMaterial?mt:ut).get(T.envMap||Y.environment),Ye===void 0&&(T.addEventListener("dispose",He),Ye=new Map,Y.programs=Ye);let Ue=Ye.get(Ie);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===De)return Xr(T,Fe),Ue}else Fe.uniforms=Ke.getUniforms(T),T.onBuild(ne,Fe,_),T.onBeforeCompile(Fe,_),Ue=Ke.acquireProgram(Fe,Ie),Ye.set(Ie,Ue),Y.uniforms=Fe.uniforms;const je=Y.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=P.uniform),Xr(T,Fe),Y.needsLights=Gs(T),Y.lightsStateVersion=De,Y.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.directionalShadowMap.value=ie.state.directionalShadowMap,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotShadowMap.value=ie.state.spotShadowMap,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMap.value=ie.state.pointShadowMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix);const st=Ue.getUniforms(),Ln=As.seqWithValue(st.seq,je);return Y.currentProgram=Ue,Y.uniformsList=Ln,Ue}function Xr(T,J){const ne=Ne.get(T);ne.outputEncoding=J.outputEncoding,ne.instancing=J.instancing,ne.skinning=J.skinning,ne.morphTargets=J.morphTargets,ne.morphNormals=J.morphNormals,ne.morphColors=J.morphColors,ne.morphTargetsCount=J.morphTargetsCount,ne.numClippingPlanes=J.numClippingPlanes,ne.numIntersection=J.numClipIntersection,ne.vertexAlphas=J.vertexAlphas,ne.vertexTangents=J.vertexTangents,ne.toneMapping=J.toneMapping}function zs(T,J,ne,Y,ie){J.isScene!==!0&&(J=ue),Se.resetTextureUnits();const Ee=J.fog,De=Y.isMeshStandardMaterial?J.environment:null,Fe=S===null?_.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:di,Ie=(Y.isMeshStandardMaterial?mt:ut).get(Y.envMap||De),Ye=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ue=!!Y.normalMap&&!!ne.attributes.tangent,je=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,Ln=!!ne.morphAttributes.color,Xn=Y.toneMapped?_.toneMapping:Pn,Dn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=Dn!==void 0?Dn.length:0,We=Ne.get(Y),Yn=g.state.lights;if(ee===!0&&(K===!0||T!==A)){const Nt=T===A&&Y.id===C;P.setState(Y,T,Nt)}let ht=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yn.state.version||We.outputEncoding!==Fe||ie.isInstancedMesh&&We.instancing===!1||!ie.isInstancedMesh&&We.instancing===!0||ie.isSkinnedMesh&&We.skinning===!1||!ie.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ie||Y.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==P.numPlanes||We.numIntersection!==P.numIntersection)||We.vertexAlphas!==Ye||We.vertexTangents!==Ue||We.morphTargets!==je||We.morphNormals!==st||We.morphColors!==Ln||We.toneMapping!==Xn||Ae.isWebGL2===!0&&We.morphTargetsCount!==bt)&&(ht=!0):(ht=!0,We.__version=Y.version);let Ht=We.currentProgram;ht===!0&&(Ht=Ot(Y,J,ie));let mn=!1,Kn=!1,Oi=!1;const Rt=Ht.getUniforms(),tn=We.uniforms;if(pe.useProgram(Ht.program)&&(mn=!0,Kn=!0,Oi=!0),Y.id!==C&&(C=Y.id,Kn=!0),mn||A!==T){if(Rt.setValue(G,"projectionMatrix",T.projectionMatrix),Ae.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),A!==T&&(A=T,Kn=!0,Oi=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Nt=Rt.map.cameraPosition;Nt!==void 0&&Nt.setValue(G,re.setFromMatrixPosition(T.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ie.isSkinnedMesh)&&Rt.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(ie.isSkinnedMesh){Rt.setOptional(G,ie,"bindMatrix"),Rt.setOptional(G,ie,"bindMatrixInverse");const Nt=ie.skeleton;Nt&&(Ae.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Nt.boneTexture,Se),Rt.setValue(G,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vr=ne.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&Ae.isWebGL2===!0)&&de.update(ie,ne,Y,Ht),(Kn||We.receiveShadow!==ie.receiveShadow)&&(We.receiveShadow=ie.receiveShadow,Rt.setValue(G,"receiveShadow",ie.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tn.envMap.value=Ie,tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Kn&&(Rt.setValue(G,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Bs(tn,Oi),Ee&&Y.fog===!0&&Bt.refreshFogUniforms(tn,Ee),Bt.refreshMaterialUniforms(tn,Y,W,O,Z),As.upload(G,We.uniformsList,tn,Se)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(G,We.uniformsList,tn,Se),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(G,"center",ie.center),Rt.setValue(G,"modelViewMatrix",ie.modelViewMatrix),Rt.setValue(G,"normalMatrix",ie.normalMatrix),Rt.setValue(G,"modelMatrix",ie.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nt=Y.uniformsGroups;for(let Ni=0,Hs=Nt.length;Ni<Hs;Ni++)if(Ae.isWebGL2){const Yr=Nt[Ni];ge.update(Yr,Ht),ge.bind(Yr,Ht)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ht}function Bs(T,J){T.ambientLightColor.needsUpdate=J,T.lightProbe.needsUpdate=J,T.directionalLights.needsUpdate=J,T.directionalLightShadows.needsUpdate=J,T.pointLights.needsUpdate=J,T.pointLightShadows.needsUpdate=J,T.spotLights.needsUpdate=J,T.spotLightShadows.needsUpdate=J,T.rectAreaLights.needsUpdate=J,T.hemisphereLights.needsUpdate=J}function Gs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,J,ne){Ne.get(T.texture).__webglTexture=J,Ne.get(T.depthTexture).__webglTexture=ne;const Y=Ne.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ne===void 0,Y.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,J){const ne=Ne.get(T);ne.__webglFramebuffer=J,ne.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(T,J=0,ne=0){S=T,b=J,E=ne;let Y=!0,ie=null,Ee=!1,De=!1;if(T){const Ie=Ne.get(T);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),Y=!1):Ie.__webglFramebuffer===void 0?Se.setupRenderTarget(T):Ie.__hasExternalTextures&&Se.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const Ue=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ie=Ue[J],Ee=!0):Ae.isWebGL2&&T.samples>0&&Se.useMultisampledRTT(T)===!1?ie=Ne.get(T).__webglMultisampledFramebuffer:ie=Ue,L.copy(T.viewport),F.copy(T.scissor),M=T.scissorTest}else L.copy(X).multiplyScalar(W).floor(),F.copy(z).multiplyScalar(W).floor(),M=B;if(pe.bindFramebuffer(36160,ie)&&Ae.drawBuffers&&Y&&pe.drawBuffers(T,ie),pe.viewport(L),pe.scissor(F),pe.setScissorTest(M),Ee){const Ie=Ne.get(T.texture);G.framebufferTexture2D(36160,36064,34069+J,Ie.__webglTexture,ne)}else if(De){const Ie=Ne.get(T.texture),Ye=J||0;G.framebufferTextureLayer(36160,36064,Ie.__webglTexture,ne||0,Ye)}C=-1},this.readRenderTargetPixels=function(T,J,ne,Y,ie,Ee,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){pe.bindFramebuffer(36160,Fe);try{const Ie=T.texture,Ye=Ie.format,Ue=Ie.type;if(Ye!==xn&&k.convert(Ye)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ue===Ur&&(Pe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ue!==Ri&&k.convert(Ue)!==G.getParameter(35738)&&!(Ue===Pi&&(Ae.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=T.width-Y&&ne>=0&&ne<=T.height-ie&&G.readPixels(J,ne,Y,ie,k.convert(Ye),k.convert(Ue),Ee)}finally{const Ie=S!==null?Ne.get(S).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(T,J,ne=0){const Y=Math.pow(2,-ne),ie=Math.floor(J.image.width*Y),Ee=Math.floor(J.image.height*Y);Se.setTexture2D(J,0),G.copyTexSubImage2D(3553,ne,0,0,T.x,T.y,ie,Ee),pe.unbindTexture()},this.copyTextureToTexture=function(T,J,ne,Y=0){const ie=J.image.width,Ee=J.image.height,De=k.convert(ne.format),Fe=k.convert(ne.type);Se.setTexture2D(ne,0),G.pixelStorei(37440,ne.flipY),G.pixelStorei(37441,ne.premultiplyAlpha),G.pixelStorei(3317,ne.unpackAlignment),J.isDataTexture?G.texSubImage2D(3553,Y,T.x,T.y,ie,Ee,De,Fe,J.image.data):J.isCompressedTexture?G.compressedTexSubImage2D(3553,Y,T.x,T.y,J.mipmaps[0].width,J.mipmaps[0].height,De,J.mipmaps[0].data):G.texSubImage2D(3553,Y,T.x,T.y,De,Fe,J.image),Y===0&&ne.generateMipmaps&&G.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,J,ne,Y,ie=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Fe=T.max.z-T.min.z+1,Ie=k.convert(Y.format),Ye=k.convert(Y.type);let Ue;if(Y.isData3DTexture)Se.setTexture3D(Y,0),Ue=32879;else if(Y.isDataArrayTexture)Se.setTexture2DArray(Y,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,Y.flipY),G.pixelStorei(37441,Y.premultiplyAlpha),G.pixelStorei(3317,Y.unpackAlignment);const je=G.getParameter(3314),st=G.getParameter(32878),Ln=G.getParameter(3316),Xn=G.getParameter(3315),Dn=G.getParameter(32877),bt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;G.pixelStorei(3314,bt.width),G.pixelStorei(32878,bt.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),ne.isDataTexture||ne.isData3DTexture?G.texSubImage3D(Ue,ie,J.x,J.y,J.z,Ee,De,Fe,Ie,Ye,bt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ue,ie,J.x,J.y,J.z,Ee,De,Fe,Ie,bt.data)):G.texSubImage3D(Ue,ie,J.x,J.y,J.z,Ee,De,Fe,Ie,Ye,bt),G.pixelStorei(3314,je),G.pixelStorei(32878,st),G.pixelStorei(3316,Ln),G.pixelStorei(3315,Xn),G.pixelStorei(32877,Dn),ie===0&&Y.generateMipmaps&&G.generateMipmap(Ue),pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Se.setTextureCube(T,0):T.isData3DTexture?Se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Se.setTexture2DArray(T,0):Se.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){b=0,E=0,S=null,pe.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Hb extends Iu{}Hb.prototype.isWebGL1Renderer=!0;class Wb extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pa extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new q,Oc=new q,Nc=new ft,Zo=new ua,Cs=new Ds;class jb extends ot{constructor(e=new en,t=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)kc.fromBufferAttribute(t,r-1),Oc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=kc.distanceTo(Oc);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=a,e.ray.intersectsSphere(Cs)===!1)return;Nc.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Nc);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=new q,p=new q,m=new q,g=new q,w=this.isLineSegments?2:1,y=n.index,v=n.attributes.position;if(y!==null){const b=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let S=b,C=E-1;S<C;S+=w){const A=y.getX(S),L=y.getX(S+1);if(f.fromBufferAttribute(v,A),p.fromBufferAttribute(v,L),Zo.distanceSqToSegment(f,p,g,m)>h)continue;g.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(g);M<e.near||M>e.far||t.push({distance:M,point:m.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let S=b,C=E-1;S<C;S+=w){if(f.fromBufferAttribute(v,S),p.fromBufferAttribute(v,S+1),Zo.distanceSqToSegment(f,p,g,m)>h)continue;g.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(g);L<e.near||L>e.far||t.push({distance:L,point:m.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Fc=new q,Vc=new q;class ku extends jb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Fc.fromBufferAttribute(t,r),Vc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fc.distanceTo(Vc);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ma extends en{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(u+c,Math.PI);let f=0;const p=[],m=new q,g=new q,w=[],y=[],_=[],v=[];for(let b=0;b<=n;b++){const E=[],S=b/n;let C=0;b==0&&u==0?C=.5/t:b==n&&h==Math.PI&&(C=-.5/t);for(let A=0;A<=t;A++){const L=A/t;m.x=-e*Math.cos(r+L*a)*Math.sin(u+S*c),m.y=e*Math.cos(u+S*c),m.z=e*Math.sin(r+L*a)*Math.sin(u+S*c),y.push(m.x,m.y,m.z),g.copy(m).normalize(),_.push(g.x,g.y,g.z),v.push(L+C,1-S),E.push(f++)}p.push(E)}for(let b=0;b<n;b++)for(let E=0;E<t;E++){const S=p[b][E+1],C=p[b][E],A=p[b+1][E],L=p[b+1][E+1];(b!==0||u>0)&&w.push(S,C,L),(b!==n-1||h<Math.PI)&&w.push(C,A,L)}this.setIndex(w),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uc extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qb{constructor(e,t,n){const r=this;let a=!1,u=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,r.onProgress!==void 0&&r.onProgress(p,u,c),u===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const w=f[m],y=f[m+1];if(w.global&&(w.lastIndex=0),w.test(p))return y}return null}}}const Xb=new qb;class Ou{constructor(e){this.manager=e!==void 0?e:Xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Yb extends Ou{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=zc.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=zr("img");function h(){p(),zc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(m){p(),r&&r(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Bc extends Ou{constructor(e){super(e)}load(e,t,n,r){const a=new un,u=new Yb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Nu extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jo=new ft,Gc=new q,Hc=new q;class Kb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zb extends Kb{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jb extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new Zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qb extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wc(){return(typeof performance>"u"?Date:performance).now()}class $b{constructor(e,t,n=0,r=1/0){this.ray=new ua(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return aa(e,this,n,t),n.sort(jc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)aa(e[r],this,n,t);return n.sort(jc),n}}function jc(s,e){return s.distance-e.distance}function aa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const r=s.children;for(let a=0,u=r.length;a<u;a++)aa(r[a],e,t,!0)}}class qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class e0 extends ku{constructor(e=10,t=10,n=4473924,r=8947848){n=new qe(n),r=new qe(r);const a=t/2,u=e/t,c=e/2,h=[],f=[];for(let g=0,w=0,y=-c;g<=t;g++,y+=u){h.push(-c,0,y,c,0,y),h.push(y,0,-c,y,0,c);const _=g===a?n:r;_.toArray(f,w),w+=3,_.toArray(f,w),w+=3,_.toArray(f,w),w+=3,_.toArray(f,w),w+=3}const p=new en;p.setAttribute("position",new vt(h,3)),p.setAttribute("color",new vt(f,3));const m=new pa({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class t0 extends ku{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new en;r.setAttribute("position",new vt(t,3)),r.setAttribute("color",new vt(n,3));const a=new pa({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,n){const r=new qe,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const Xc={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ns{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const n0=new ks(-1,1,1,-1,0,1),ga=new en;ga.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3));ga.setAttribute("uv",new vt([0,2,0,0,2,0],2));class i0{constructor(e){this._mesh=new An(ga,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yc extends Ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eu.clone(e.uniforms),this.material=new jn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new i0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,u,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class r0 extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class s0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Oe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Xc===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Yc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Yc(Xc),this.clock=new Fu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const u=this.passes[r];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),u.needsSwap){if(n){const c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(u instanceof Kc?n=!0:u instanceof r0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new ks(-1,1,1,-1,0,1);const Vu=new en;Vu.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3));Vu.setAttribute("uv",new vt([0,2,0,0,2,0],2));class Uu extends Ns{constructor(e,t,n,r,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,u;this.overrideMaterial!==void 0&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=u),e.autoClear=r}}const o0=(s,e,t)=>{s.renderer=new Iu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new s0(s.renderer),s.composer.addPass(new Uu(s.scene,ci(s.camera)))},Zc=(s,e,t)=>{!s.renderer||(e?s.renderer.outputEncoding=di:s.renderer.outputEncoding=ct,t?s.renderer.toneMapping=Pn:s.renderer.toneMapping=pu)},Jc=(s,e,t)=>{!s.renderer||!s.composer||(s.renderer.setSize(e.width,e.height),s.renderer.setPixelRatio(t),s.composer.setSize(e.width,e.height),s.composer.setPixelRatio(t))},Qc=(s,e,t)=>{!s.renderer||(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},ln=s=>s.userData,a0=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},zu=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),l0=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,c0=(s,e,t)=>{let n=ci(s.camera);const r=s.camera.subscribe(f=>n=f);Pt(r);let a=ci(s.pointer);const u=s.pointer.subscribe(f=>a=f);Pt(u);let c;const h=f=>{var g,w;f.preventDefault();const p=f.type;s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,a0(s,f);const m=u0(e,a,n);if(p==="pointerdown"&&(c=m?{object:m.object,instanceId:m.instanceId}:null),p==="click"){if(!d0(m,c)){c=null;return}c=null}!m||(w=(g=ln(m.object)).eventDispatcher)==null||w.call(g,p,{...m,event:f})};return{onClick:h,onContextMenu:h,onPointerUp:h,onPointerDown:h,onPointerMove:h}};function u0(s,e,t){if(s.interactiveObjects.size===0||s.raycastableObjects.size===0)return null;const n=zu(s,e,t,Array.from(s.raycastableObjects));return n.length===0||!s.interactiveObjects.has(n[0].object)?null:n[0]}function d0(s,e){return!s||!e?!1:s.object.uuid===e.object.uuid&&s.instanceId===e.instanceId}const h0=(s,e)=>{let t=ci(s.pointerOverCanvas);const n=s.pointerOverCanvas.subscribe(f=>t=f);Pt(n);let r=ci(s.camera);const a=s.camera.subscribe(f=>r=f);Pt(a);let u=ci(s.pointer);const c=s.pointer.subscribe(f=>u=f);return Pt(c),{raycast:()=>{var m,g,w,y,_,v,b,E;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const f=t?zu(e,u,r,Array.from(e.raycastableObjects)):[],p=f.length&&e.interactiveObjects.has(f[0].object)?f[0]:null;p?e.lastIntersection?e.lastIntersection&&l0(e.lastIntersection,p)&&((v=(_=ln(e.lastIntersection.object)).eventDispatcher)==null||v.call(_,"pointerleave",e.lastIntersection),(E=(b=ln(p.object)).eventDispatcher)==null||E.call(b,"pointerenter",p)):(y=(w=ln(p.object)).eventDispatcher)==null||y.call(w,"pointerenter",p):e.lastIntersection&&((g=(m=ln(e.lastIntersection.object)).eventDispatcher)==null||g.call(m,"pointerleave",e.lastIntersection)),e.lastIntersection=p}}},Fs=typeof window<"u",f0=s=>{if(!Fs)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Pt(()=>{!e||cancelAnimationFrame(e)})},p0=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(a=>{a.debugFrameloopMessage?e.invalidations[a.debugFrameloopMessage]=a.debugFrameloopMessage in e.invalidations?e.invalidations[a.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,a)=>a.order?!0:r,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,a)=>{var u,c;return((u=r.order)!=null?u:0)>((c=a.order)!=null?c:0)?1:-1}).forEach(r=>r.fn(s,n)):e.frameHandlers.forEach(r=>r.fn(s,n))},m0=s=>{!s.debugFrameloop||(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},g0=(s,e,t,n)=>{let r=ci(s.camera);const a=s.camera.subscribe(c=>r=c);Pt(a);const{raycast:u}=h0(s,e);f0(()=>{n.dispose();const c=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(c||t.pointerInvalidated)&&(u(),t.pointerInvalidated=!1),c&&(!r||!s.composer||!s.renderer||(p0(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,r),m0(t),t.frameInvalidated=!1,t.advance=!1))})},_0=()=>{const s=new $t(75,0,.1,1e3);return ln(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},v0=s=>{const e=s.size.subscribe(t=>{ln(ci(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),r})});Pt(e)},b0=(s,e,t,n,r,a,u)=>{const c={audioListeners:new Map,addAudioListener:(b,E)=>{if(E=E!=null?E:"default",c.audioListeners.has(E)){console.warn(`An AudioListener with the id "${E}" has already been added, aborting.`);return}c.audioListeners.set(E,b)},removeAudioListener:b=>{if(b=b!=null?b:"default",!c.audioListeners.has(b)){console.warn(`No AudioListener with the id "${b}" found, aborting.`);return}c.audioListeners.delete(b)},getAudioListener:b=>{if(b=b!=null?b:"default",!c.audioListeners.has(b)){console.warn(`No AudioListener with the id "${b}" found, aborting.`);return}return c.audioListeners.get(b)}},h={debugFrameloop:a,frameloop:u,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},f={size:Zf([n,r],([b,E])=>b||E),pointer:Qt(new Oe),pointerOverCanvas:Qt(!1),clock:new Fu,camera:Qt(_0()),scene:new Wb,renderer:void 0,composer:void 0,invalidate:b=>{h.frameInvalidated=!0,h.debugFrameloop&&b&&(h.invalidations[b]=h.invalidations[b]?h.invalidations[b]+1:1)},advance:()=>{h.advance=!0}},p={flat:Qt(e),linear:Qt(s),dpr:Qt(t),setCamera:b=>{f.camera.set(b),f.composer&&(f.composer.passes.forEach(E=>{E instanceof Uu&&(E.camera=b)}),f.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new $b,lastIntersection:null,addRaycastableObject:b=>{p.raycastableObjects.add(b)},removeRaycastableObject:b=>{p.raycastableObjects.delete(b)},addInteractiveObject:b=>{p.interactiveObjects.add(b)},removeInteractiveObject:b=>{p.interactiveObjects.delete(b)},addPass:b=>{!f.composer||(f.composer.addPass(b),f.invalidate("Canvas: adding pass"))},removePass:b=>{!f.composer||(f.composer.removePass(b),f.invalidate("Canvas: removing pass"))}},m={dispose:async(b=!1)=>{await Vr(),!(!m.shouldDispose&&!b)&&(m.disposableObjects.forEach((E,S)=>{var C;(E===0||b)&&((C=S==null?void 0:S.dispose)==null||C.call(S),m.disposableObjects.delete(S))}),m.shouldDispose=!1)},collectDisposableObjects:(b,E)=>{const S=E!=null?E:[];return b&&((b==null?void 0:b.dispose)&&typeof b.dispose=="function"&&b.type!=="Scene"&&S.push(b),Object.entries(b).forEach(([C,A])=>{if(C==="parent"||C==="children"||typeof A!="object")return;const L=A;L!=null&&L.dispose&&m.collectDisposableObjects(L,S)})),S},addDisposableObjects:b=>{b.forEach(E=>{const S=m.disposableObjects.get(E);S?m.disposableObjects.set(E,S+1):m.disposableObjects.set(E,1)})},removeDisposableObjects:b=>{b.length!==0&&(b.forEach(E=>{const S=m.disposableObjects.get(E);S&&S>0&&m.disposableObjects.set(E,S-1)}),m.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return En("threlte",f),En("threlte-root",p),En("threlte-render-context",h),En("threlte-audio-context",c),En("threlte-disposal-context",m),{ctx:f,rootCtx:p,renderCtx:h,audioCtx:c,disposalCtx:m,getCtx:()=>f,getRootCtx:()=>p,getRenderCtx:()=>h,getAudioCtx:()=>c,getDisposalCtx:()=>m}};function Vs(s,e){const t=Qt(s);let n=s;const r=t.subscribe(c=>n=c);return Pt(r),{...t,set:c=>{if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const h=n;t.set(c),e==null||e(c,h)},update:c=>{const h=c(n);if((h==null?void 0:h.uuid)===(n==null?void 0:n.uuid))return;const f=n;t.set(h),e==null||e(h,f)}}}const yn=()=>Wn("threlte");function w0(s){let e;const t=s[8].default,n=dn(t,s,s[7],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,[a]){n&&n.p&&(!e||a&128)&&hn(n,t,r,r[7],e?pn(t,r[7],a,null):fn(r[7]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}const x0=()=>({onChildMount:Wn("threlte-hierarchical-object-on-mount"),onChildDestroy:Wn("threlte-hierarchical-object-on-destroy")}),Bu=()=>Wn("threlte-hierarchical-parent-context");function y0(s,e,t){var b;let n,{$$slots:r={},$$scope:a}=e,{object:u=void 0}=e,{children:c=[]}=e,{onChildMount:h=void 0}=e;const f=E=>{c.push(E),t(1,c),h==null||h(E)};let{onChildDestroy:p=void 0}=e;const m=E=>{const S=c.findIndex(C=>C.uuid===E.uuid);S!==-1&&c.splice(S,1),t(1,c),p==null||p(E)},{invalidate:g}=yn(),w=Bu();yt(s,w,E=>t(6,n=E));let{parent:y=n}=e;const _=x0();u&&((b=_.onChildMount)==null||b.call(_,u),g("HierarchicalObject: object added"));const v=Vs(u,(E,S)=>{var C,A;S&&((C=_.onChildDestroy)==null||C.call(_,S),g("HierarchicalObject: object added")),E&&((A=_.onChildMount)==null||A.call(_,E),g("HierarchicalObject: object removed"))});return Pt(()=>{var E;u&&((E=_.onChildDestroy)==null||E.call(_,u),g("HierarchicalObject: object removed"))}),En("threlte-hierarchical-object-on-mount",f),En("threlte-hierarchical-object-on-destroy",m),En("threlte-hierarchical-parent-context",v),s.$$set=E=>{"object"in E&&t(3,u=E.object),"children"in E&&t(1,c=E.children),"onChildMount"in E&&t(4,h=E.onChildMount),"onChildDestroy"in E&&t(5,p=E.onChildDestroy),"parent"in E&&t(2,y=E.parent),"$$scope"in E&&t(7,a=E.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t(2,y=n),s.$$.dirty&8&&v.set(u)},[w,c,y,u,h,p,n,a,r]}class M0 extends Tt{constructor(e){super(),Lt(this,e,y0,w0,Dt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function S0(s){let e;const t=s[1].default,n=dn(t,s,s[4],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&16)&&hn(n,t,r,r[4],e?pn(t,r[4],a,null):fn(r[4]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function C0(s){let e,t;return e=new M0({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[S0]},$$scope:{ctx:s}}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){et(e,n,r),t=!0},p(n,[r]){const a={};r&1&&(a.object=n[0]),r&1&&(a.onChildMount=n[2]),r&1&&(a.onChildDestroy=n[3]),r&16&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function E0(s,e,t){let{$$slots:n={},$$scope:r}=e,{object:a}=e;const u=h=>a.add(h),c=h=>a.remove(h);return s.$$set=h=>{"object"in h&&t(0,a=h.object),"$$scope"in h&&t(4,r=h.$$scope)},[a,n,u,c,r]}class _a extends Tt{constructor(e){super(),Lt(this,e,E0,C0,Dt,{object:0})}}const A0=()=>{const s=Qt({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(u=>e=u);Pt(t);let n;const r=()=>{const u=e;if(!n||!n.parentElement)return;const{clientWidth:c,clientHeight:h}=n.parentElement;(c!==u.width||h!==u.height)&&s.set({width:c,height:h})},a=u=>{n=u,r(),window.addEventListener("resize",r)};return Fs?(Pt(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:a,parentSize:s}):{parentSize:s,parentSizeAction:a}};function $c(s){let e,t;return e=new _a({props:{object:s[0].scene,$$slots:{default:[P0]},$$scope:{ctx:s}}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){et(e,n,r),t=!0},p(n,r){const a={};r[1]&4&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function P0(s){let e;const t=s[29].default,n=dn(t,s,s[33],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a[1]&4)&&hn(n,t,r,r[33],e?pn(t,r[33],a,null):fn(r[33]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function T0(s){let e,t,n,r,a=s[2]&&$c(s);return{c(){e=Gf("canvas"),a&&a.c(),this.h()},l(u){e=Hf(u,"CANVAS",{class:!0});var c=Wf(e);a&&a.l(c),c.forEach(Et),this.h()},h(){jf(e,"class","svelte-o3oskp")},m(u,c){kt(u,e,c),a&&a.m(e,null),s[30](e),t=!0,n||(r=[qf(s[3].call(null,e)),wi(e,"click",s[9]),wi(e,"contextmenu",s[10]),wi(e,"pointerup",s[13]),wi(e,"pointerdown",s[11]),wi(e,"pointermove",s[12]),wi(e,"pointerenter",s[31]),wi(e,"pointerleave",s[32])],n=!0)},p(u,c){u[2]?a?(a.p(u,c),c[0]&4&&Le(a,1)):(a=$c(u),a.c(),Le(a,1),a.m(e,null)):a&&(au(),Re(a,1,1,()=>{a=null}),lu())},i(u){t||(Le(a),t=!0)},o(u){Re(a),t=!1},d(u){u&&Et(e),a&&a.d(),s[30](null),n=!1,Xf(r)}}}const eu=new Set;function L0(s,e,t){let n,r,a,u,{$$slots:c={},$$scope:h}=e,{dpr:f=Fs?window.devicePixelRatio:1}=e,{flat:p=!1}=e,{linear:m=!1}=e,{frameloop:g="demand"}=e,{debugFrameloop:w=!1}=e,{shadows:y=!0}=e,{shadowMapType:_=uu}=e,{size:v=void 0}=e,{rendererParameters:b=void 0}=e,E,S=!1;const C=Qt(v),{parentSize:A,parentSizeAction:L}=A0(),F=b0(m,p,f,C,A,w,g),{getCtx:M,renderCtx:D,disposalCtx:O}=F,{ctx:W,rootCtx:oe,audioCtx:U}=F;v0(W),eu.add(W.invalidate),Pt(()=>{eu.delete(W.invalidate)});const{size:X,scene:z}=W;yt(s,X,be=>t(26,r=be));const{flat:B,linear:Q,dpr:ee}=oe;yt(s,B,be=>t(27,a=be)),yt(s,Q,be=>t(28,u=be)),yt(s,ee,be=>t(25,n=be)),En("threlte-parent",Qt(z)),Yf(()=>{!E||(o0(W,E,b),Zc(W,u,a),Jc(W,r,n),Qc(W,y,_),t(2,S=!0))}),g0(W,oe,D,O);const{onClick:K,onContextMenu:Z,onPointerDown:N,onPointerMove:se,onPointerUp:re}=c0(W,oe,D);Pt(()=>{O.dispose(!0)});function ue(be){qn[be?"unshift":"push"](()=>{E=be,t(1,E)})}const Ce=()=>M().pointerOverCanvas.set(!0),G=()=>M().pointerOverCanvas.set(!1);return s.$$set=be=>{"dpr"in be&&t(14,f=be.dpr),"flat"in be&&t(15,p=be.flat),"linear"in be&&t(16,m=be.linear),"frameloop"in be&&t(17,g=be.frameloop),"debugFrameloop"in be&&t(18,w=be.debugFrameloop),"shadows"in be&&t(19,y=be.shadows),"shadowMapType"in be&&t(20,_=be.shadowMapType),"size"in be&&t(21,v=be.size),"rendererParameters"in be&&t(22,b=be.rendererParameters),"$$scope"in be&&t(33,h=be.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&C.set(v),s.$$.dirty[0]&65536&&_o(Q,u=m,u),s.$$.dirty[0]&32768&&_o(B,a=p,a),s.$$.dirty[0]&16384&&_o(ee,n=f,n),s.$$.dirty[0]&402653184&&Zc(M(),u,a),s.$$.dirty[0]&100663296&&Jc(M(),r,n),s.$$.dirty[0]&1572864&&Qc(M(),y,_)},[W,E,S,L,M,X,B,Q,ee,K,Z,N,se,re,f,p,m,g,w,y,_,v,b,oe,U,n,r,a,u,c,ue,Ce,G,h]}class D0 extends Tt{constructor(e){super(),Lt(this,e,L0,T0,Dt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const va=()=>Wn("threlte-root"),R0=()=>Wn("threlte-disposal-context");function I0(s){let e;const t=s[9].default,n=dn(t,s,s[8],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,[a]){n&&n.p&&(!e||a&256)&&hn(n,t,r,r[8],e?pn(t,r[8],a,null):fn(r[8]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}const tu="threlte-disposable-object-context";function k0(s,e,t){var v;let n,r,{$$slots:a={},$$scope:u}=e;const{collectDisposableObjects:c,addDisposableObjects:h,removeDisposableObjects:f}=R0();let{object:p=void 0}=e,m=p,{dispose:g=void 0}=e;const w=Wn(tu);yt(s,w,b=>t(7,r=b));const y=Qt((v=g!=null?g:r)!=null?v:!0);yt(s,y,b=>t(6,n=b)),En(tu,y);let _=n?c(p):[];return h(_),Pt(()=>{f(_)}),s.$$set=b=>{"object"in b&&t(2,p=b.object),"dispose"in b&&t(3,g=b.dispose),"$$scope"in b&&t(8,u=b.$$scope)},s.$$.update=()=>{var b;s.$$.dirty&136&&y.set((b=g!=null?g:r)!=null?b:!0),s.$$.dirty&116&&p!==m&&(f(_),t(5,_=n?c(p):[]),h(_),t(4,m=p))},[w,y,p,g,m,_,n,r,u,a]}class Br extends Tt{constructor(e){super(),Lt(this,e,k0,I0,Dt,{object:2,dispose:3})}}function O0(s,e,t){let n,r,{object:a}=e;const u=Vs(a);yt(s,u,f=>t(4,r=f));const c=Wn("threlte-layers");yt(s,c,f=>t(3,n=f));const{invalidate:h}=yn();return s.$$set=f=>{"object"in f&&t(2,a=f.object)},s.$$.update=()=>{if(s.$$.dirty&4&&u.set(a),s.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let f=0;f<32;f+=1){const p=f;n.includes(p)?r.layers.enable(f):r.layers.disable(f)}else n!==void 0&&r.layers.set(n);h("LayerableObject")}},[u,c,a,n,r]}class N0 extends Tt{constructor(e){super(),Lt(this,e,O0,null,Dt,{object:2})}}const Us=(s,e)=>{var c;if(!Fs)return{start:()=>{},stop:()=>{},started:Jf(!1)};const t=Wn("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=Qt(!1),a=()=>{t.frameHandlers.delete(n),r.set(!1)},u=()=>{t.frameHandlers.add(n),r.set(!0)};return((c=e==null?void 0:e.autostart)==null||c)&&u(),Pt(()=>{a()}),{start:u,stop:a,started:{subscribe:r.subscribe}}},Gu=()=>{const s=Qt(!1);return(async()=>{await Vr(),s.set(!0)})(),s};function F0(s,e,t){let n,r,{object:a}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:h=void 0}=e,{lookAt:f=void 0}=e;const p=new q,m=Ps(),{invalidate:g}=yn(),w=Gu();yt(s,w,S=>t(8,r=S));const y=async()=>{r||await Vr(),m("transform")},_=async()=>{g("TransformableObject: transformed"),await y()};ln(a).onTransform=_;const{start:v,stop:b}=Us(async()=>{f&&!h&&f instanceof ot&&(f.getWorldPosition(p),a.lookAt(p),await y())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),E=Vs(a);return yt(s,E,S=>t(7,n=S)),s.$$set=S=>{"object"in S&&t(2,a=S.object),"position"in S&&t(3,u=S.position),"scale"in S&&t(4,c=S.scale),"rotation"in S&&t(5,h=S.rotation),"lookAt"in S&&t(6,f=S.lookAt)},s.$$.update=()=>{var S,C,A,L,F,M,D,O,W,oe,U,X,z;s.$$.dirty&4&&E.set(a),s.$$.dirty&232&&(u&&(n.position.set((S=u.x)!=null?S:0,(C=u.y)!=null?C:0,(A=u.z)!=null?A:0),_()),f&&!h&&(f instanceof ot?v():(b(),n.lookAt((L=f.x)!=null?L:0,(F=f.y)!=null?F:0,(M=f.z)!=null?M:0),_())),f||b()),s.$$.dirty&144&&c&&(typeof c=="number"?n.scale.set(c,c,c):n.scale.set((D=c.x)!=null?D:1,(O=c.y)!=null?O:1,(W=c.z)!=null?W:1),_()),s.$$.dirty&160&&h&&(n.rotation.set((oe=h.x)!=null?oe:0,(U=h.y)!=null?U:0,(X=h.z)!=null?X:0,(z=h.order)!=null?z:"XYZ"),_())},[w,E,a,u,c,h,f,n]}class ba extends Tt{constructor(e){super(),Lt(this,e,F0,null,Dt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function V0(s,e,t){let n,r,a,{object:u}=e,{viewportAware:c=!1}=e;const h=Ps(),{camera:f,invalidate:p}=yn();yt(s,f,L=>t(8,a=L));const m=new Rs,g=new ft,w=L=>L.type==="Mesh",y=new q,_=()=>a?(g.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),m.setFromProjectionMatrix(g),w(u)?m.intersectsObject(u):(u.getWorldPosition(y),m.containsPoint(y))):!0,v=Gu();yt(s,v,L=>t(7,r=L));let{inViewport:b=_()}=e;const E=async L=>{L?(r||await Vr(),h("viewportenter",u)):(r||await Vr(),h("viewportleave",u))},{start:S,stop:C,started:A}=Us(()=>{const L=_();b===void 0?(t(3,b=_()),E(b)):L!==b&&(E(L),t(3,b=L))},{autostart:c,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return yt(s,A,L=>t(6,n=L)),p("ViewportAwareObject"),s.$$set=L=>{"object"in L&&t(4,u=L.object),"viewportAware"in L&&t(5,c=L.viewportAware),"inViewport"in L&&t(3,b=L.inViewport)},s.$$.update=()=>{s.$$.dirty&96&&(c&&!n?S():!c&&n&&C())},[f,v,A,b,u,c,n]}class U0 extends Tt{constructor(e){super(),Lt(this,e,V0,null,Dt,{object:4,viewportAware:5,inViewport:3})}}function z0(s){let e;const t=s[14].default,n=dn(t,s,s[18],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&262144)&&hn(n,t,r,r[18],e?pn(t,r[18],a,null):fn(r[18]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function B0(s){let e,t;return e=new _a({props:{object:s[1],$$slots:{default:[z0]},$$scope:{ctx:s}}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){et(e,n,r),t=!0},p(n,r){const a={};r&2&&(a.object=n[1]),r&262144&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function G0(s){let e,t,n,r,a,u,c,h,f;e=new N0({props:{object:s[1]}}),n=new ba({props:{object:s[1],position:s[2],rotation:s[4],scale:s[3],lookAt:s[5]}}),a=new Br({props:{object:s[1],dispose:s[7],$$slots:{default:[B0]},$$scope:{ctx:s}}});function p(g){s[15](g)}let m={object:s[1],viewportAware:s[6]};return s[0]!==void 0&&(m.inViewport=s[0]),c=new U0({props:m}),qn.push(()=>fi(c,"inViewport",p)),c.$on("viewportenter",s[16]),c.$on("viewportleave",s[17]),{c(){Qe(e.$$.fragment),t=Vt(),Qe(n.$$.fragment),r=Vt(),Qe(a.$$.fragment),u=Vt(),Qe(c.$$.fragment)},l(g){$e(e.$$.fragment,g),t=Ut(g),$e(n.$$.fragment,g),r=Ut(g),$e(a.$$.fragment,g),u=Ut(g),$e(c.$$.fragment,g)},m(g,w){et(e,g,w),kt(g,t,w),et(n,g,w),kt(g,r,w),et(a,g,w),kt(g,u,w),et(c,g,w),f=!0},p(g,[w]){const y={};w&2&&(y.object=g[1]),e.$set(y);const _={};w&2&&(_.object=g[1]),w&4&&(_.position=g[2]),w&16&&(_.rotation=g[4]),w&8&&(_.scale=g[3]),w&32&&(_.lookAt=g[5]),n.$set(_);const v={};w&2&&(v.object=g[1]),w&128&&(v.dispose=g[7]),w&262146&&(v.$$scope={dirty:w,ctx:g}),a.$set(v);const b={};w&2&&(b.object=g[1]),w&64&&(b.viewportAware=g[6]),!h&&w&1&&(h=!0,b.inViewport=g[0],pi(()=>h=!1)),c.$set(b)},i(g){f||(Le(e.$$.fragment,g),Le(n.$$.fragment,g),Le(a.$$.fragment,g),Le(c.$$.fragment,g),f=!0)},o(g){Re(e.$$.fragment,g),Re(n.$$.fragment,g),Re(a.$$.fragment,g),Re(c.$$.fragment,g),f=!1},d(g){tt(e,g),g&&Et(t),tt(n,g),g&&Et(r),tt(a,g),g&&Et(u),tt(c,g)}}}function H0(s,e,t){let{$$slots:n={},$$scope:r}=e,{object:a}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:h=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{castShadow:g=void 0}=e,{receiveShadow:w=void 0}=e,{frustumCulled:y=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{dispose:b=void 0}=e,{userData:E=void 0}=e;const{invalidate:S}=yn(),C=()=>a;function A(M){m=M,t(0,m)}function L(M){it.call(this,s,M)}function F(M){it.call(this,s,M)}return s.$$set=M=>{"object"in M&&t(1,a=M.object),"position"in M&&t(2,u=M.position),"scale"in M&&t(3,c=M.scale),"rotation"in M&&t(4,h=M.rotation),"lookAt"in M&&t(5,f=M.lookAt),"viewportAware"in M&&t(6,p=M.viewportAware),"inViewport"in M&&t(0,m=M.inViewport),"castShadow"in M&&t(8,g=M.castShadow),"receiveShadow"in M&&t(9,w=M.receiveShadow),"frustumCulled"in M&&t(10,y=M.frustumCulled),"renderOrder"in M&&t(11,_=M.renderOrder),"visible"in M&&t(12,v=M.visible),"dispose"in M&&t(7,b=M.dispose),"userData"in M&&t(13,E=M.userData),"$$scope"in M&&t(18,r=M.$$scope)},s.$$.update=()=>{s.$$.dirty&16128&&(v!==void 0&&(C().visible=v),g!==void 0&&(C().castShadow=g),w!==void 0&&(C().receiveShadow=w),y!==void 0&&(C().frustumCulled=y),_!==void 0&&(C().renderOrder=_),E!==void 0&&(C().userData={...C().userData,...E}),S("Object3DInstance: props changed"))},[m,a,u,c,h,f,p,b,g,w,y,_,v,E,n,A,L,F,r]}class Gr extends Tt{constructor(e){super(),Lt(this,e,H0,G0,Dt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function W0(s){let e;const t=s[17].default,n=dn(t,s,s[21],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&2097152)&&hn(n,t,r,r[21],e?pn(t,r[21],a,null):fn(r[21]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function j0(s){let e,t,n;function r(u){s[18](u)}let a={object:s[1],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[W0]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new Gr({props:a}),qn.push(()=>fi(e,"inViewport",r)),e.$on("viewportenter",s[19]),e.$on("viewportleave",s[20]),{c(){Qe(e.$$.fragment)},l(u){$e(e.$$.fragment,u)},m(u,c){et(e,u,c),n=!0},p(u,[c]){const h={};c&2&&(h.object=u[1]),c&32&&(h.lookAt=u[5]),c&128&&(h.castShadow=u[7]),c&256&&(h.receiveShadow=u[8]),c&512&&(h.frustumCulled=u[9]),c&1024&&(h.renderOrder=u[10]),c&4&&(h.position=u[2]),c&8&&(h.scale=u[3]),c&16&&(h.rotation=u[4]),c&64&&(h.viewportAware=u[6]),c&2048&&(h.visible=u[11]),c&4096&&(h.userData=u[12]),c&8192&&(h.dispose=u[13]),c&2097152&&(h.$$scope={dirty:c,ctx:u}),!t&&c&1&&(t=!0,h.inViewport=u[0],pi(()=>t=!1)),e.$set(h)},i(u){n||(Le(e.$$.fragment,u),n=!0)},o(u){Re(e.$$.fragment,u),n=!1},d(u){tt(e,u)}}}function q0(s,e,t){let n,{$$slots:r={},$$scope:a}=e,{camera:u}=e,{position:c=void 0}=e,{scale:h=void 0}=e,{rotation:f=void 0}=e,{lookAt:p=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{castShadow:w=void 0}=e,{receiveShadow:y=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:v=void 0}=e,{visible:b=void 0}=e,{userData:E=void 0}=e,{dispose:S=void 0}=e,{useCamera:C=!1}=e;const A=Vs(u);yt(s,A,O=>t(16,n=O));const{setCamera:L}=va();function F(O){g=O,t(0,g)}function M(O){it.call(this,s,O)}function D(O){it.call(this,s,O)}return s.$$set=O=>{"camera"in O&&t(1,u=O.camera),"position"in O&&t(2,c=O.position),"scale"in O&&t(3,h=O.scale),"rotation"in O&&t(4,f=O.rotation),"lookAt"in O&&t(5,p=O.lookAt),"viewportAware"in O&&t(6,m=O.viewportAware),"inViewport"in O&&t(0,g=O.inViewport),"castShadow"in O&&t(7,w=O.castShadow),"receiveShadow"in O&&t(8,y=O.receiveShadow),"frustumCulled"in O&&t(9,_=O.frustumCulled),"renderOrder"in O&&t(10,v=O.renderOrder),"visible"in O&&t(11,b=O.visible),"userData"in O&&t(12,E=O.userData),"dispose"in O&&t(13,S=O.dispose),"useCamera"in O&&t(15,C=O.useCamera),"$$scope"in O&&t(21,a=O.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&A.set(u),s.$$.dirty&98304&&C&&L(n)},[g,u,c,h,f,p,m,w,y,_,v,b,E,S,A,C,n,r,F,M,D,a]}class X0 extends Tt{constructor(e){super(),Lt(this,e,q0,j0,Dt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function Y0(s){let e;const t=s[20].default,n=dn(t,s,s[24],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&16777216)&&hn(n,t,r,r[24],e?pn(t,r[24],a,null):fn(r[24]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function K0(s){let e,t,n;function r(u){s[21](u)}let a={camera:s[0],position:s[2],scale:s[3],rotation:s[4],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],userData:s[11],dispose:s[12],viewportAware:s[13],lookAt:s[5],useCamera:s[14],$$slots:{default:[Y0]},$$scope:{ctx:s}};return s[1]!==void 0&&(a.inViewport=s[1]),e=new X0({props:a}),qn.push(()=>fi(e,"inViewport",r)),e.$on("viewportenter",s[22]),e.$on("viewportleave",s[23]),{c(){Qe(e.$$.fragment)},l(u){$e(e.$$.fragment,u)},m(u,c){et(e,u,c),n=!0},p(u,[c]){const h={};c&1&&(h.camera=u[0]),c&4&&(h.position=u[2]),c&8&&(h.scale=u[3]),c&16&&(h.rotation=u[4]),c&64&&(h.castShadow=u[6]),c&128&&(h.receiveShadow=u[7]),c&256&&(h.frustumCulled=u[8]),c&512&&(h.renderOrder=u[9]),c&1024&&(h.visible=u[10]),c&2048&&(h.userData=u[11]),c&4096&&(h.dispose=u[12]),c&8192&&(h.viewportAware=u[13]),c&32&&(h.lookAt=u[5]),c&16384&&(h.useCamera=u[14]),c&16777216&&(h.$$scope={dirty:c,ctx:u}),!t&&c&2&&(t=!0,h.inViewport=u[1],pi(()=>t=!1)),e.$set(h)},i(u){n||(Le(e.$$.fragment,u),n=!0)},o(u){Re(e.$$.fragment,u),n=!1},d(u){tt(e,u)}}}function Z0(s,e,t){let n,{$$slots:r={},$$scope:a}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:h=void 0}=e,{lookAt:f=void 0}=e,{castShadow:p=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:w=void 0}=e,{visible:y=void 0}=e,{userData:_=void 0}=e,{dispose:v=void 0}=e,{viewportAware:b=!1}=e,{inViewport:E=!1}=e,{useCamera:S=!0}=e,{near:C=void 0}=e,{far:A=void 0}=e,{fov:L=void 0}=e;const{size:F,invalidate:M}=yn();yt(s,F,U=>t(19,n=U));const D=new $t(L,n.width/n.height,C,A);function O(U){E=U,t(1,E)}function W(U){it.call(this,s,U)}function oe(U){it.call(this,s,U)}return s.$$set=U=>{"position"in U&&t(2,u=U.position),"scale"in U&&t(3,c=U.scale),"rotation"in U&&t(4,h=U.rotation),"lookAt"in U&&t(5,f=U.lookAt),"castShadow"in U&&t(6,p=U.castShadow),"receiveShadow"in U&&t(7,m=U.receiveShadow),"frustumCulled"in U&&t(8,g=U.frustumCulled),"renderOrder"in U&&t(9,w=U.renderOrder),"visible"in U&&t(10,y=U.visible),"userData"in U&&t(11,_=U.userData),"dispose"in U&&t(12,v=U.dispose),"viewportAware"in U&&t(13,b=U.viewportAware),"inViewport"in U&&t(1,E=U.inViewport),"useCamera"in U&&t(14,S=U.useCamera),"near"in U&&t(16,C=U.near),"far"in U&&t(17,A=U.far),"fov"in U&&t(18,L=U.fov),"$$scope"in U&&t(24,a=U.$$scope)},s.$$.update=()=>{s.$$.dirty&524289&&(t(0,D.aspect=n.width/n.height,D),D.updateProjectionMatrix(),M("PerspectiveCamera: aspect changed")),s.$$.dirty&458753&&(C!==void 0&&t(0,D.near=C,D),A!==void 0&&t(0,D.far=A,D),L!==void 0&&t(0,D.fov=L,D),D.updateProjectionMatrix(),M("PerspectiveCamera: props changed"))},[D,E,u,c,h,f,p,m,g,w,y,_,v,b,S,F,C,A,L,n,r,O,W,oe,a]}class J0 extends Tt{constructor(e){super(),Lt(this,e,Z0,K0,Dt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const nu=[],Q0=(s,e)=>{const t=nu.find(r=>r instanceof s);if(t)return t;const n=e();return nu.push(n),n},iu={type:"change"},Qo={type:"start"},ru={type:"end"};class $0 extends ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Gt),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(iu),n.update(),a=r.NONE},this.update=function(){const k=new q,j=new Ii().setFromUnitVectors(e.up,new q(0,1,0)),ge=j.clone().invert(),ve=new q,_e=new Ii,xe=2*Math.PI;return function(){const Be=n.object.position;k.copy(Be).sub(n.target),k.applyQuaternion(j),c.setFromVector3(k),n.autoRotate&&a===r.NONE&&D(F()),n.enableDamping?(c.theta+=h.theta*n.dampingFactor,c.phi+=h.phi*n.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let He=n.minAzimuthAngle,nt=n.maxAzimuthAngle;return isFinite(He)&&isFinite(nt)&&(He<-Math.PI?He+=xe:He>Math.PI&&(He-=xe),nt<-Math.PI?nt+=xe:nt>Math.PI&&(nt-=xe),He<=nt?c.theta=Math.max(He,Math.min(nt,c.theta)):c.theta=c.theta>(He+nt)/2?Math.max(He,c.theta):Math.min(nt,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=f,c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),k.setFromSpherical(c),k.applyQuaternion(ge),Be.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),p.set(0,0,0)),f=1,m||ve.distanceToSquared(n.object.position)>u||8*(1-_e.dot(n.object.quaternion))>u?(n.dispatchEvent(iu),ve.copy(n.object.position),_e.copy(n.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",ut),n.domElement.removeEventListener("pointercancel",zt),n.domElement.removeEventListener("wheel",Bt),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",pt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Gt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const u=1e-6,c=new qc,h=new qc;let f=1;const p=new q;let m=!1;const g=new Oe,w=new Oe,y=new Oe,_=new Oe,v=new Oe,b=new Oe,E=new Oe,S=new Oe,C=new Oe,A=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function D(k){h.theta-=k}function O(k){h.phi-=k}const W=function(){const k=new q;return function(ge,ve){k.setFromMatrixColumn(ve,0),k.multiplyScalar(-ge),p.add(k)}}(),oe=function(){const k=new q;return function(ge,ve){n.screenSpacePanning===!0?k.setFromMatrixColumn(ve,1):(k.setFromMatrixColumn(ve,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(ge),p.add(k)}}(),U=function(){const k=new q;return function(ge,ve){const _e=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;k.copy(xe).sub(n.target);let we=k.length();we*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ge*we/_e.clientHeight,n.object.matrix),oe(2*ve*we/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ge*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),oe(ve*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(k){n.object.isPerspectiveCamera?f/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(k){n.object.isPerspectiveCamera?f*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(k){g.set(k.clientX,k.clientY)}function Q(k){E.set(k.clientX,k.clientY)}function ee(k){_.set(k.clientX,k.clientY)}function K(k){w.set(k.clientX,k.clientY),y.subVectors(w,g).multiplyScalar(n.rotateSpeed);const j=n.domElement;D(2*Math.PI*y.x/j.clientHeight),O(2*Math.PI*y.y/j.clientHeight),g.copy(w),n.update()}function Z(k){S.set(k.clientX,k.clientY),C.subVectors(S,E),C.y>0?X(M()):C.y<0&&z(M()),E.copy(S),n.update()}function N(k){v.set(k.clientX,k.clientY),b.subVectors(v,_).multiplyScalar(n.panSpeed),U(b.x,b.y),_.copy(v),n.update()}function se(k){k.deltaY<0?z(M()):k.deltaY>0&&X(M()),n.update()}function re(k){let j=!1;switch(k.code){case n.keys.UP:U(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),j=!0;break}j&&(k.preventDefault(),n.update())}function ue(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),j=.5*(A[0].pageY+A[1].pageY);g.set(k,j)}}function Ce(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),j=.5*(A[0].pageY+A[1].pageY);_.set(k,j)}}function G(){const k=A[0].pageX-A[1].pageX,j=A[0].pageY-A[1].pageY,ge=Math.sqrt(k*k+j*j);E.set(0,ge)}function be(){n.enableZoom&&G(),n.enablePan&&Ce()}function Pe(){n.enableZoom&&G(),n.enableRotate&&ue()}function Ae(k){if(A.length==1)w.set(k.pageX,k.pageY);else{const ge=Te(k),ve=.5*(k.pageX+ge.x),_e=.5*(k.pageY+ge.y);w.set(ve,_e)}y.subVectors(w,g).multiplyScalar(n.rotateSpeed);const j=n.domElement;D(2*Math.PI*y.x/j.clientHeight),O(2*Math.PI*y.y/j.clientHeight),g.copy(w)}function pe(k){if(A.length===1)v.set(k.pageX,k.pageY);else{const j=Te(k),ge=.5*(k.pageX+j.x),ve=.5*(k.pageY+j.y);v.set(ge,ve)}b.subVectors(v,_).multiplyScalar(n.panSpeed),U(b.x,b.y),_.copy(v)}function Xe(k){const j=Te(k),ge=k.pageX-j.x,ve=k.pageY-j.y,_e=Math.sqrt(ge*ge+ve*ve);S.set(0,_e),C.set(0,Math.pow(S.y/E.y,n.zoomSpeed)),X(C.y),E.copy(S)}function Ne(k){n.enableZoom&&Xe(k),n.enablePan&&pe(k)}function Se(k){n.enableZoom&&Xe(k),n.enableRotate&&Ae(k)}function ut(k){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",mt),n.domElement.addEventListener("pointerup",pt)),ce(k),k.pointerType==="touch"?R(k):at(k))}function mt(k){n.enabled!==!1&&(k.pointerType==="touch"?P(k):Ke(k))}function pt(k){de(k),A.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",pt)),n.dispatchEvent(ru),a=r.NONE}function zt(k){de(k)}function at(k){let j;switch(k.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case ji.DOLLY:if(n.enableZoom===!1)return;Q(k),a=r.DOLLY;break;case ji.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ee(k),a=r.PAN}else{if(n.enableRotate===!1)return;B(k),a=r.ROTATE}break;case ji.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;B(k),a=r.ROTATE}else{if(n.enablePan===!1)return;ee(k),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Qo)}function Ke(k){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;K(k);break;case r.DOLLY:if(n.enableZoom===!1)return;Z(k);break;case r.PAN:if(n.enablePan===!1)return;N(k);break}}function Bt(k){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(k.preventDefault(),n.dispatchEvent(Qo),se(k),n.dispatchEvent(ru))}function Gt(k){n.enabled===!1||n.enablePan===!1||re(k)}function R(k){switch(me(k),A.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;ue(),a=r.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;Ce(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),a=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Qo)}function P(k){switch(me(k),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(k),n.update();break;default:a=r.NONE}}function $(k){n.enabled!==!1&&k.preventDefault()}function ce(k){A.push(k)}function de(k){delete L[k.pointerId];for(let j=0;j<A.length;j++)if(A[j].pointerId==k.pointerId){A.splice(j,1);return}}function me(k){let j=L[k.pointerId];j===void 0&&(j=new Oe,L[k.pointerId]=j),j.set(k.pageX,k.pageY)}function Te(k){const j=k.pointerId===A[0].pointerId?A[1]:A[0];return L[j.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",ut),n.domElement.addEventListener("pointercancel",zt),n.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}function ew(s){let e,t,n,r;return e=new Br({props:{dispose:s[2],object:s[0]}}),n=new ba({props:{object:s[4],position:s[1]}}),n.$on("transform",s[5]),{c(){Qe(e.$$.fragment),t=Vt(),Qe(n.$$.fragment)},l(a){$e(e.$$.fragment,a),t=Ut(a),$e(n.$$.fragment,a)},m(a,u){et(e,a,u),kt(a,t,u),et(n,a,u),r=!0},p(a,u){const c={};u[0]&4&&(c.dispose=a[2]),u[0]&1&&(c.object=a[0]),e.$set(c);const h={};u[0]&2&&(h.position=a[1]),n.$set(h)},i(a){r||(Le(e.$$.fragment,a),Le(n.$$.fragment,a),r=!0)},o(a){Re(e.$$.fragment,a),Re(n.$$.fragment,a),r=!1},d(a){tt(e,a),a&&Et(t),tt(n,a)}}}function tw(s,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:a=void 0}=e,{dampingFactor:u=void 0}=e,{enableDamping:c=void 0}=e,{enabled:h=void 0}=e,{enablePan:f=void 0}=e,{enableRotate:p=void 0}=e,{enableZoom:m=void 0}=e,{keyPanSpeed:g=void 0}=e,{keys:w=void 0}=e,{maxAzimuthAngle:y=void 0}=e,{maxDistance:_=void 0}=e,{maxPolarAngle:v=void 0}=e,{maxZoom:b=void 0}=e,{minAzimuthAngle:E=void 0}=e,{minDistance:S=void 0}=e,{minPolarAngle:C=void 0}=e,{minZoom:A=void 0}=e,{mouseButtons:L=void 0}=e,{panSpeed:F=void 0}=e,{rotateSpeed:M=void 0}=e,{screenSpacePanning:D=void 0}=e,{touches:O=void 0}=e,{zoomSpeed:W=void 0}=e,{target:oe=void 0}=e,{dispose:U=void 0}=e;const X=Bu();yt(s,X,G=>t(30,n=G));const{renderer:z,invalidate:B}=yn();if(!z)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof ha))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const Q=Ps(),ee=()=>{B("Orbitcontrols: change event"),Q("change")},K=()=>Q("start"),Z=()=>Q("end"),N=new $0(n,z.domElement);ln(n).orbitControls=N,N.addEventListener("change",ee),N.addEventListener("start",K),N.addEventListener("end",Z),Pt(()=>{n&&delete ln(n).orbitControls,N.removeEventListener("change",ee),N.removeEventListener("start",K),N.removeEventListener("end",Z)});const{start:se,stop:re}=Us(()=>N.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ue=new ot,Ce=()=>{t(0,N.target=ue.position,N),N.update(),B("OrbitControls: target changed")};return s.$$set=G=>{"autoRotate"in G&&t(6,r=G.autoRotate),"autoRotateSpeed"in G&&t(7,a=G.autoRotateSpeed),"dampingFactor"in G&&t(8,u=G.dampingFactor),"enableDamping"in G&&t(9,c=G.enableDamping),"enabled"in G&&t(10,h=G.enabled),"enablePan"in G&&t(11,f=G.enablePan),"enableRotate"in G&&t(12,p=G.enableRotate),"enableZoom"in G&&t(13,m=G.enableZoom),"keyPanSpeed"in G&&t(14,g=G.keyPanSpeed),"keys"in G&&t(15,w=G.keys),"maxAzimuthAngle"in G&&t(16,y=G.maxAzimuthAngle),"maxDistance"in G&&t(17,_=G.maxDistance),"maxPolarAngle"in G&&t(18,v=G.maxPolarAngle),"maxZoom"in G&&t(19,b=G.maxZoom),"minAzimuthAngle"in G&&t(20,E=G.minAzimuthAngle),"minDistance"in G&&t(21,S=G.minDistance),"minPolarAngle"in G&&t(22,C=G.minPolarAngle),"minZoom"in G&&t(23,A=G.minZoom),"mouseButtons"in G&&t(24,L=G.mouseButtons),"panSpeed"in G&&t(25,F=G.panSpeed),"rotateSpeed"in G&&t(26,M=G.rotateSpeed),"screenSpacePanning"in G&&t(27,D=G.screenSpacePanning),"touches"in G&&t(28,O=G.touches),"zoomSpeed"in G&&t(29,W=G.zoomSpeed),"target"in G&&t(1,oe=G.target),"dispose"in G&&t(2,U=G.dispose)},s.$$.update=()=>{s.$$.dirty[0]&1073741761&&(r!==void 0&&t(0,N.autoRotate=r,N),a!==void 0&&t(0,N.autoRotateSpeed=a,N),u!==void 0&&t(0,N.dampingFactor=u,N),c!==void 0&&t(0,N.enableDamping=c,N),h!==void 0&&t(0,N.enabled=h,N),f!==void 0&&t(0,N.enablePan=f,N),p!==void 0&&t(0,N.enableRotate=p,N),m!==void 0&&t(0,N.enableZoom=m,N),g!==void 0&&t(0,N.keyPanSpeed=g,N),w!==void 0&&t(0,N.keys=w,N),y!==void 0&&t(0,N.maxAzimuthAngle=y,N),_!==void 0&&t(0,N.maxDistance=_,N),v!==void 0&&t(0,N.maxPolarAngle=v,N),b!==void 0&&t(0,N.maxZoom=b,N),E!==void 0&&t(0,N.minAzimuthAngle=E,N),S!==void 0&&t(0,N.minDistance=S,N),C!==void 0&&t(0,N.minPolarAngle=C,N),A!==void 0&&t(0,N.minZoom=A,N),L!==void 0&&t(0,N.mouseButtons=L,N),F!==void 0&&t(0,N.panSpeed=F,N),M!==void 0&&t(0,N.rotateSpeed=M,N),D!==void 0&&t(0,N.screenSpacePanning=D,N),O!==void 0&&t(0,N.touches=O,N),W!==void 0&&t(0,N.zoomSpeed=W,N),N.update(),B("OrbitControls: props changed")),s.$$.dirty[0]&576&&(r||c?se():re())},[N,oe,U,X,ue,Ce,r,a,u,c,h,f,p,m,g,w,y,_,v,b,E,S,C,A,L,F,M,D,O,W]}class nw extends Tt{constructor(e){super(),Lt(this,e,tw,ew,Dt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const iw=(s,e)=>e?new qe(s):new qe().setHex(new qe(s).getHex()).convertSRGBToLinear();function rw(s){let e;const t=s[18].default,n=dn(t,s,s[22],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&4194304)&&hn(n,t,r,r[22],e?pn(t,r[22],a,null):fn(r[22]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function sw(s){let e,t,n;function r(u){s[19](u)}let a={object:s[0],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[rw]},$$scope:{ctx:s}};return s[1]!==void 0&&(a.inViewport=s[1]),e=new Gr({props:a}),qn.push(()=>fi(e,"inViewport",r)),e.$on("viewportenter",s[20]),e.$on("viewportleave",s[21]),{c(){Qe(e.$$.fragment)},l(u){$e(e.$$.fragment,u)},m(u,c){et(e,u,c),n=!0},p(u,[c]){const h={};c&1&&(h.object=u[0]),c&32&&(h.lookAt=u[5]),c&128&&(h.castShadow=u[7]),c&256&&(h.receiveShadow=u[8]),c&512&&(h.frustumCulled=u[9]),c&1024&&(h.renderOrder=u[10]),c&4&&(h.position=u[2]),c&8&&(h.scale=u[3]),c&16&&(h.rotation=u[4]),c&64&&(h.viewportAware=u[6]),c&2048&&(h.visible=u[11]),c&4096&&(h.userData=u[12]),c&8192&&(h.dispose=u[13]),c&4194304&&(h.$$scope={dirty:c,ctx:u}),!t&&c&2&&(t=!0,h.inViewport=u[1],pi(()=>t=!1)),e.$set(h)},i(u){n||(Le(e.$$.fragment,u),n=!0)},o(u){Re(e.$$.fragment,u),n=!1},d(u){tt(e,u)}}}function ow(s,e,t){let n,{$$slots:r={},$$scope:a}=e,{light:u}=e,{position:c=void 0}=e,{scale:h=void 0}=e,{rotation:f=void 0}=e,{lookAt:p=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{castShadow:w=void 0}=e,{receiveShadow:y=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:v=void 0}=e,{visible:b=void 0}=e,{userData:E=void 0}=e,{dispose:S=void 0}=e,{color:C=void 0}=e,{intensity:A=void 0}=e;const{invalidate:L}=yn(),{linear:F}=va();yt(s,F,W=>t(17,n=W));function M(W){g=W,t(1,g)}function D(W){it.call(this,s,W)}function O(W){it.call(this,s,W)}return s.$$set=W=>{"light"in W&&t(0,u=W.light),"position"in W&&t(2,c=W.position),"scale"in W&&t(3,h=W.scale),"rotation"in W&&t(4,f=W.rotation),"lookAt"in W&&t(5,p=W.lookAt),"viewportAware"in W&&t(6,m=W.viewportAware),"inViewport"in W&&t(1,g=W.inViewport),"castShadow"in W&&t(7,w=W.castShadow),"receiveShadow"in W&&t(8,y=W.receiveShadow),"frustumCulled"in W&&t(9,_=W.frustumCulled),"renderOrder"in W&&t(10,v=W.renderOrder),"visible"in W&&t(11,b=W.visible),"userData"in W&&t(12,E=W.userData),"dispose"in W&&t(13,S=W.dispose),"color"in W&&t(15,C=W.color),"intensity"in W&&t(16,A=W.intensity),"$$scope"in W&&t(22,a=W.$$scope)},s.$$.update=()=>{s.$$.dirty&229376&&(A!==void 0&&t(0,u.intensity=A,u),C!==void 0&&t(0,u.color=iw(C,n),u),L("LightInstance: props changed"))},[u,g,c,h,f,p,m,w,y,_,v,b,E,S,F,C,A,n,r,M,D,O,a]}class Hu extends Tt{constructor(e){super(),Lt(this,e,ow,sw,Dt,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function aw(s){let e;const t=s[16].default,n=dn(t,s,s[20],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&1048576)&&hn(n,t,r,r[20],e?pn(t,r[20],a,null):fn(r[20]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function lw(s){let e,t,n;function r(u){s[17](u)}let a={light:s[15],lookAt:s[4],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],viewportAware:s[12],color:s[13],intensity:s[14],$$slots:{default:[aw]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new Hu({props:a}),qn.push(()=>fi(e,"inViewport",r)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),{c(){Qe(e.$$.fragment)},l(u){$e(e.$$.fragment,u)},m(u,c){et(e,u,c),n=!0},p(u,[c]){const h={};c&16&&(h.lookAt=u[4]),c&2&&(h.position=u[1]),c&4&&(h.scale=u[2]),c&8&&(h.rotation=u[3]),c&32&&(h.castShadow=u[5]),c&64&&(h.receiveShadow=u[6]),c&128&&(h.frustumCulled=u[7]),c&256&&(h.renderOrder=u[8]),c&512&&(h.visible=u[9]),c&1024&&(h.userData=u[10]),c&2048&&(h.dispose=u[11]),c&4096&&(h.viewportAware=u[12]),c&8192&&(h.color=u[13]),c&16384&&(h.intensity=u[14]),c&1048576&&(h.$$scope={dirty:c,ctx:u}),!t&&c&1&&(t=!0,h.inViewport=u[0],pi(()=>t=!1)),e.$set(h)},i(u){n||(Le(e.$$.fragment,u),n=!0)},o(u){Re(e.$$.fragment,u),n=!1},d(u){tt(e,u)}}}function cw(s,e,t){let{$$slots:n={},$$scope:r}=e,{position:a=void 0}=e,{scale:u=void 0}=e,{rotation:c=void 0}=e,{lookAt:h=void 0}=e,{castShadow:f=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:g=void 0}=e,{visible:w=void 0}=e,{userData:y=void 0}=e,{dispose:_=void 0}=e,{viewportAware:v=!1}=e,{inViewport:b=!1}=e,{color:E=void 0}=e,{intensity:S=void 0}=e;const C=new Qb(E,S);function A(M){b=M,t(0,b)}function L(M){it.call(this,s,M)}function F(M){it.call(this,s,M)}return s.$$set=M=>{"position"in M&&t(1,a=M.position),"scale"in M&&t(2,u=M.scale),"rotation"in M&&t(3,c=M.rotation),"lookAt"in M&&t(4,h=M.lookAt),"castShadow"in M&&t(5,f=M.castShadow),"receiveShadow"in M&&t(6,p=M.receiveShadow),"frustumCulled"in M&&t(7,m=M.frustumCulled),"renderOrder"in M&&t(8,g=M.renderOrder),"visible"in M&&t(9,w=M.visible),"userData"in M&&t(10,y=M.userData),"dispose"in M&&t(11,_=M.dispose),"viewportAware"in M&&t(12,v=M.viewportAware),"inViewport"in M&&t(0,b=M.inViewport),"color"in M&&t(13,E=M.color),"intensity"in M&&t(14,S=M.intensity),"$$scope"in M&&t(20,r=M.$$scope)},[b,a,u,c,h,f,p,m,g,w,y,_,v,E,S,C,n,A,L,F,r]}class uw extends Tt{constructor(e){super(),Lt(this,e,cw,lw,Dt,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}function su(s){let e,t,n,r,a,u;return e=new _a({props:{object:s[16]}}),n=new ba({props:{object:s[16],position:s[15]}}),a=new Br({props:{dispose:s[10],object:s[15]}}),{c(){Qe(e.$$.fragment),t=Vt(),Qe(n.$$.fragment),r=Vt(),Qe(a.$$.fragment)},l(c){$e(e.$$.fragment,c),t=Ut(c),$e(n.$$.fragment,c),r=Ut(c),$e(a.$$.fragment,c)},m(c,h){et(e,c,h),kt(c,t,h),et(n,c,h),kt(c,r,h),et(a,c,h),u=!0},p(c,h){const f={};h&32768&&(f.position=c[15]),n.$set(f);const p={};h&1024&&(p.dispose=c[10]),h&32768&&(p.object=c[15]),a.$set(p)},i(c){u||(Le(e.$$.fragment,c),Le(n.$$.fragment,c),Le(a.$$.fragment,c),u=!0)},o(c){Re(e.$$.fragment,c),Re(n.$$.fragment,c),Re(a.$$.fragment,c),u=!1},d(c){tt(e,c),c&&Et(t),tt(n,c),c&&Et(r),tt(a,c)}}}function dw(s){let e;const t=s[18].default,n=dn(t,s,s[22],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&4194304)&&hn(n,t,r,r[22],e?pn(t,r[22],a,null):fn(r[22]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function hw(s){let e,t,n,r,a=s[15]&&!(s[15]instanceof ot)&&su(s);function u(h){s[19](h)}let c={light:s[1],position:s[2],scale:s[3],rotation:s[4],castShadow:!!s[14],receiveShadow:s[5],frustumCulled:s[6],renderOrder:s[7],visible:s[8],userData:s[9],dispose:s[10],viewportAware:s[11],color:s[12],intensity:s[13],$$slots:{default:[dw]},$$scope:{ctx:s}};return s[0]!==void 0&&(c.inViewport=s[0]),t=new Hu({props:c}),qn.push(()=>fi(t,"inViewport",u)),t.$on("viewportenter",s[20]),t.$on("viewportleave",s[21]),{c(){a&&a.c(),e=Vt(),Qe(t.$$.fragment)},l(h){a&&a.l(h),e=Ut(h),$e(t.$$.fragment,h)},m(h,f){a&&a.m(h,f),kt(h,e,f),et(t,h,f),r=!0},p(h,[f]){h[15]&&!(h[15]instanceof ot)?a?(a.p(h,f),f&32768&&Le(a,1)):(a=su(h),a.c(),Le(a,1),a.m(e.parentNode,e)):a&&(au(),Re(a,1,1,()=>{a=null}),lu());const p={};f&2&&(p.light=h[1]),f&4&&(p.position=h[2]),f&8&&(p.scale=h[3]),f&16&&(p.rotation=h[4]),f&16384&&(p.castShadow=!!h[14]),f&32&&(p.receiveShadow=h[5]),f&64&&(p.frustumCulled=h[6]),f&128&&(p.renderOrder=h[7]),f&256&&(p.visible=h[8]),f&512&&(p.userData=h[9]),f&1024&&(p.dispose=h[10]),f&2048&&(p.viewportAware=h[11]),f&4096&&(p.color=h[12]),f&8192&&(p.intensity=h[13]),f&4194304&&(p.$$scope={dirty:f,ctx:h}),!n&&f&1&&(n=!0,p.inViewport=h[0],pi(()=>n=!1)),t.$set(p)},i(h){r||(Le(a),Le(t.$$.fragment,h),r=!0)},o(h){Re(a),Re(t.$$.fragment,h),r=!1},d(h){a&&a.d(h),h&&Et(e),tt(t,h)}}}function fw(s,e,t){let n,{$$slots:r={},$$scope:a}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:h=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:w=void 0}=e,{dispose:y=void 0}=e,{viewportAware:_=!1}=e,{inViewport:v=!1}=e,{color:b=void 0}=e,{intensity:E=void 0}=e,{shadow:S=void 0}=e,{target:C=void 0}=e;const A=new Jb(b,E),{invalidate:L}=yn(),F=A.target,{start:M,stop:D,started:O}=Us(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});yt(s,O,B=>t(23,n=B));const W=B=>{B&&B instanceof ot&&!n?(t(1,A.target=B,A),M(),L("DirectionalLight: target changed")):(!B||!(B instanceof ot))&&n&&(t(1,A.target=F,A),D(),L("DirectionalLight: target changed"))},oe=B=>{if(B){const{mapSize:Q=[512,512],camera:{left:ee=-5,bottom:K=-5,right:Z=5,top:N=5,near:se=.5,far:re=500}={},bias:ue=0,radius:Ce=1}=B===!0?{}:B;A.shadow.mapSize.set(Q[0],Q[1]),t(1,A.shadow.camera.left=ee,A),t(1,A.shadow.camera.top=N,A),t(1,A.shadow.camera.right=Z,A),t(1,A.shadow.camera.bottom=K,A),t(1,A.shadow.camera.near=se,A),t(1,A.shadow.camera.far=re,A),t(1,A.shadow.bias=ue,A),t(1,A.shadow.radius=Ce,A)}L("DirectionalLight: shadow changed")};function U(B){v=B,t(0,v)}function X(B){it.call(this,s,B)}function z(B){it.call(this,s,B)}return s.$$set=B=>{"position"in B&&t(2,u=B.position),"scale"in B&&t(3,c=B.scale),"rotation"in B&&t(4,h=B.rotation),"receiveShadow"in B&&t(5,f=B.receiveShadow),"frustumCulled"in B&&t(6,p=B.frustumCulled),"renderOrder"in B&&t(7,m=B.renderOrder),"visible"in B&&t(8,g=B.visible),"userData"in B&&t(9,w=B.userData),"dispose"in B&&t(10,y=B.dispose),"viewportAware"in B&&t(11,_=B.viewportAware),"inViewport"in B&&t(0,v=B.inViewport),"color"in B&&t(12,b=B.color),"intensity"in B&&t(13,E=B.intensity),"shadow"in B&&t(14,S=B.shadow),"target"in B&&t(15,C=B.target),"$$scope"in B&&t(22,a=B.$$scope)},s.$$.update=()=>{s.$$.dirty&32768&&W(C),s.$$.dirty&16384&&oe(S)},[v,A,u,c,h,f,p,m,g,w,y,_,b,E,S,C,F,O,r,U,X,z,a]}class pw extends Tt{constructor(e){super(),Lt(this,e,fw,hw,Dt,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function mw(s,e,t){let{object:n}=e,r=n,{interactive:a=!1}=e,{ignorePointer:u=!1}=e;const c=Ps(),{addInteractiveObject:h,removeInteractiveObject:f,addRaycastableObject:p,removeRaycastableObject:m}=va(),{invalidate:g}=yn(),w=_=>{m(_),f(_),delete ln(_).eventDispatcher},y=(_,v,b)=>{ln(_).eventDispatcher=c,v?(m(_),f(_)):(p(_),b?h(_):f(_))};return Pt(()=>{w(n),g("InteractiveObject: object removed")}),s.$$set=_=>{"object"in _&&t(0,n=_.object),"interactive"in _&&t(1,a=_.interactive),"ignorePointer"in _&&t(2,u=_.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(n!==r?(w(r),y(n,u,a),g("InteractiveObject: object changed"),t(3,r=n)):n===r&&(y(n,u,a),g("InteractiveObject: props changed")))},[n,a,u,r]}class gw extends Tt{constructor(e){super(),Lt(this,e,mw,null,Dt,{object:0,interactive:1,ignorePointer:2})}}function _w(s){let e;const t=s[16].default,n=dn(t,s,s[27],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&134217728)&&hn(n,t,r,r[27],e?pn(t,r[27],a,null):fn(r[27]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function vw(s){let e,t,n,r,a;function u(h){s[17](h)}let c={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],userData:s[12],dispose:s[13],viewportAware:s[6],$$slots:{default:[_w]},$$scope:{ctx:s}};return s[0]!==void 0&&(c.inViewport=s[0]),e=new Gr({props:c}),qn.push(()=>fi(e,"inViewport",u)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),r=new gw({props:{object:s[1],interactive:s[14],ignorePointer:s[15]}}),r.$on("click",s[20]),r.$on("contextmenu",s[21]),r.$on("pointerup",s[22]),r.$on("pointerdown",s[23]),r.$on("pointerenter",s[24]),r.$on("pointerleave",s[25]),r.$on("pointermove",s[26]),{c(){Qe(e.$$.fragment),n=Vt(),Qe(r.$$.fragment)},l(h){$e(e.$$.fragment,h),n=Ut(h),$e(r.$$.fragment,h)},m(h,f){et(e,h,f),kt(h,n,f),et(r,h,f),a=!0},p(h,[f]){const p={};f&2&&(p.object=h[1]),f&32&&(p.lookAt=h[5]),f&4&&(p.position=h[2]),f&8&&(p.scale=h[3]),f&16&&(p.rotation=h[4]),f&128&&(p.castShadow=h[7]),f&256&&(p.receiveShadow=h[8]),f&512&&(p.frustumCulled=h[9]),f&1024&&(p.renderOrder=h[10]),f&2048&&(p.visible=h[11]),f&4096&&(p.userData=h[12]),f&8192&&(p.dispose=h[13]),f&64&&(p.viewportAware=h[6]),f&134217728&&(p.$$scope={dirty:f,ctx:h}),!t&&f&1&&(t=!0,p.inViewport=h[0],pi(()=>t=!1)),e.$set(p);const m={};f&2&&(m.object=h[1]),f&16384&&(m.interactive=h[14]),f&32768&&(m.ignorePointer=h[15]),r.$set(m)},i(h){a||(Le(e.$$.fragment,h),Le(r.$$.fragment,h),a=!0)},o(h){Re(e.$$.fragment,h),Re(r.$$.fragment,h),a=!1},d(h){tt(e,h),h&&Et(n),tt(r,h)}}}function bw(s,e,t){let{$$slots:n={},$$scope:r}=e,{mesh:a}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:h=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{castShadow:g=void 0}=e,{receiveShadow:w=void 0}=e,{frustumCulled:y=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{userData:b=void 0}=e,{dispose:E=void 0}=e,{interactive:S=!1}=e,{ignorePointer:C=!1}=e;function A(z){m=z,t(0,m)}function L(z){it.call(this,s,z)}function F(z){it.call(this,s,z)}function M(z){it.call(this,s,z)}function D(z){it.call(this,s,z)}function O(z){it.call(this,s,z)}function W(z){it.call(this,s,z)}function oe(z){it.call(this,s,z)}function U(z){it.call(this,s,z)}function X(z){it.call(this,s,z)}return s.$$set=z=>{"mesh"in z&&t(1,a=z.mesh),"position"in z&&t(2,u=z.position),"scale"in z&&t(3,c=z.scale),"rotation"in z&&t(4,h=z.rotation),"lookAt"in z&&t(5,f=z.lookAt),"viewportAware"in z&&t(6,p=z.viewportAware),"inViewport"in z&&t(0,m=z.inViewport),"castShadow"in z&&t(7,g=z.castShadow),"receiveShadow"in z&&t(8,w=z.receiveShadow),"frustumCulled"in z&&t(9,y=z.frustumCulled),"renderOrder"in z&&t(10,_=z.renderOrder),"visible"in z&&t(11,v=z.visible),"userData"in z&&t(12,b=z.userData),"dispose"in z&&t(13,E=z.dispose),"interactive"in z&&t(14,S=z.interactive),"ignorePointer"in z&&t(15,C=z.ignorePointer),"$$scope"in z&&t(27,r=z.$$scope)},[m,a,u,c,h,f,p,g,w,y,_,v,b,E,S,C,n,A,L,F,M,D,O,W,oe,U,X,r]}class ww extends Tt{constructor(e){super(),Lt(this,e,bw,vw,Dt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function xw(s){let e;const t=s[20].default,n=dn(t,s,s[31],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a[1]&1)&&hn(n,t,r,r[31],e?pn(t,r[31],a,null):fn(r[31]),null)},i(r){e||(Le(n,r),e=!0)},o(r){Re(n,r),e=!1},d(r){n&&n.d(r)}}}function yw(s){let e,t,n,r,a,u,c;e=new Br({props:{dispose:s[11],object:s[15]}}),n=new Br({props:{dispose:s[11],object:s[16]}});function h(p){s[21](p)}let f={mesh:s[17],position:s[1],scale:s[2],rotation:s[3],lookAt:s[14],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[12],ignorePointer:s[13],userData:s[10],dispose:s[11],viewportAware:s[4],$$slots:{default:[xw]},$$scope:{ctx:s}};return s[0]!==void 0&&(f.inViewport=s[0]),a=new ww({props:f}),qn.push(()=>fi(a,"inViewport",h)),a.$on("click",s[22]),a.$on("contextmenu",s[23]),a.$on("pointerup",s[24]),a.$on("pointerdown",s[25]),a.$on("pointerenter",s[26]),a.$on("pointerleave",s[27]),a.$on("pointermove",s[28]),a.$on("viewportenter",s[29]),a.$on("viewportleave",s[30]),{c(){Qe(e.$$.fragment),t=Vt(),Qe(n.$$.fragment),r=Vt(),Qe(a.$$.fragment)},l(p){$e(e.$$.fragment,p),t=Ut(p),$e(n.$$.fragment,p),r=Ut(p),$e(a.$$.fragment,p)},m(p,m){et(e,p,m),kt(p,t,m),et(n,p,m),kt(p,r,m),et(a,p,m),c=!0},p(p,m){const g={};m[0]&2048&&(g.dispose=p[11]),m[0]&32768&&(g.object=p[15]),e.$set(g);const w={};m[0]&2048&&(w.dispose=p[11]),m[0]&65536&&(w.object=p[16]),n.$set(w);const y={};m[0]&2&&(y.position=p[1]),m[0]&4&&(y.scale=p[2]),m[0]&8&&(y.rotation=p[3]),m[0]&16384&&(y.lookAt=p[14]),m[0]&32&&(y.castShadow=p[5]),m[0]&64&&(y.receiveShadow=p[6]),m[0]&128&&(y.frustumCulled=p[7]),m[0]&256&&(y.renderOrder=p[8]),m[0]&512&&(y.visible=p[9]),m[0]&4096&&(y.interactive=p[12]),m[0]&8192&&(y.ignorePointer=p[13]),m[0]&1024&&(y.userData=p[10]),m[0]&2048&&(y.dispose=p[11]),m[0]&16&&(y.viewportAware=p[4]),m[1]&1&&(y.$$scope={dirty:m,ctx:p}),!u&&m[0]&1&&(u=!0,y.inViewport=p[0],pi(()=>u=!1)),a.$set(y)},i(p){c||(Le(e.$$.fragment,p),Le(n.$$.fragment,p),Le(a.$$.fragment,p),c=!0)},o(p){Re(e.$$.fragment,p),Re(n.$$.fragment,p),Re(a.$$.fragment,p),c=!1},d(p){tt(e,p),p&&Et(t),tt(n,p),p&&Et(r),tt(a,p)}}}function Mw(s,e,t){let{$$slots:n={},$$scope:r}=e,{position:a=void 0}=e,{scale:u=void 0}=e,{rotation:c=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:w=void 0}=e,{visible:y=void 0}=e,{userData:_=void 0}=e,{dispose:v=void 0}=e,{interactive:b=!1}=e,{ignorePointer:E=!1}=e,{lookAt:S=void 0}=e,{geometry:C}=e,{material:A}=e,L=A,F=C;const{invalidate:M}=yn(),D=new An(C,A),O=()=>D;function W(N){f=N,t(0,f)}function oe(N){it.call(this,s,N)}function U(N){it.call(this,s,N)}function X(N){it.call(this,s,N)}function z(N){it.call(this,s,N)}function B(N){it.call(this,s,N)}function Q(N){it.call(this,s,N)}function ee(N){it.call(this,s,N)}function K(N){it.call(this,s,N)}function Z(N){it.call(this,s,N)}return s.$$set=N=>{"position"in N&&t(1,a=N.position),"scale"in N&&t(2,u=N.scale),"rotation"in N&&t(3,c=N.rotation),"viewportAware"in N&&t(4,h=N.viewportAware),"inViewport"in N&&t(0,f=N.inViewport),"castShadow"in N&&t(5,p=N.castShadow),"receiveShadow"in N&&t(6,m=N.receiveShadow),"frustumCulled"in N&&t(7,g=N.frustumCulled),"renderOrder"in N&&t(8,w=N.renderOrder),"visible"in N&&t(9,y=N.visible),"userData"in N&&t(10,_=N.userData),"dispose"in N&&t(11,v=N.dispose),"interactive"in N&&t(12,b=N.interactive),"ignorePointer"in N&&t(13,E=N.ignorePointer),"lookAt"in N&&t(14,S=N.lookAt),"geometry"in N&&t(15,C=N.geometry),"material"in N&&t(16,A=N.material),"$$scope"in N&&t(31,r=N.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&327680&&(A!==L?(O().material=A,M("Mesh: material changed")):M("Mesh: material props changed"),t(18,L=A)),s.$$.dirty[0]&557056&&(C!==F?(O().geometry=C,M("Mesh: geometry changed")):M("Mesh: geometry props changed"),t(19,F=C))},[f,a,u,c,h,p,m,g,w,y,_,v,b,E,S,C,A,D,L,F,n,W,oe,U,X,z,B,Q,ee,K,Z,r]}class ou extends Tt{constructor(e){super(),Lt(this,e,Mw,yw,Dt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const Wu=new ot;Wu.scale.set(0,0,0);Wu.matrix;new ft().fromArray(new Array(16).fill(0));new qe(16777215);Q0(Bc,()=>new Bc);const Sw=Math.PI/180;var Cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},la={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(s,e){(function(t,n){n(e)})(Cw,function(t){class n{constructor(i){const[o,d]=i.split("-"),x=o.split(".");this.major=parseInt(x[0],10),this.minor=parseInt(x[1],10),this.patch=parseInt(x[2],10),this.prerelease=d!=null?d:null}toString(){const i=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[i,this.prerelease].join("-"):i}}class r{constructor(i){this.controller_=i}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(i){this.controller_.viewProps.set("disabled",i)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(i){this.controller_.viewProps.set("hidden",i)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(i){this.target=i}}class u extends a{constructor(i,o,d,x){super(i),this.value=o,this.presetKey=d,this.last=x!=null?x:!0}}class c extends a{constructor(i,o,d){super(i),this.value=o,this.presetKey=d}}class h extends a{constructor(i,o){super(i),this.expanded=o}}class f extends a{constructor(i,o){super(i),this.index=o}}function p(l){return l}function m(l){return l==null}function g(l,i){if(l.length!==i.length)return!1;for(let o=0;o<l.length;o++)if(l[o]!==i[o])return!1;return!0}const w={alreadydisposed:()=>"View has been already disposed",invalidparams:l=>`Invalid parameters for '${l.name}'`,nomatchingcontroller:l=>`No matching controller for '${l.key}'`,nomatchingview:l=>`No matching view for '${JSON.stringify(l.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:l=>`Property '${l.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class y{constructor(i){var o;this.message=(o=w[i.type](i.context))!==null&&o!==void 0?o:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=i.type}static alreadyDisposed(){return new y({type:"alreadydisposed"})}static notBindable(){return new y({type:"notbindable"})}static propertyNotFound(i){return new y({type:"propertynotfound",context:{name:i}})}static shouldNeverHappen(){return new y({type:"shouldneverhappen"})}}class _{constructor(i,o,d){this.obj_=i,this.key_=o,this.presetKey_=d!=null?d:o}static isBindable(i){return!(i===null||typeof i!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(i){this.obj_[this.key_]=i}writeProperty(i,o){const d=this.read();if(!_.isBindable(d))throw y.notBindable();if(!(i in d))throw y.propertyNotFound(i);d[i]=o}}class v extends r{get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get title(){var i;return(i=this.controller_.valueController.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.valueController.props.set("title",i)}on(i,o){const d=o.bind(this);return this.controller_.valueController.emitter.on(i,()=>{d(new a(this))}),this}}class b{constructor(){this.observers_={}}on(i,o){let d=this.observers_[i];return d||(d=this.observers_[i]=[]),d.push({handler:o}),this}off(i,o){const d=this.observers_[i];return d&&(this.observers_[i]=d.filter(x=>x.handler!==o)),this}emit(i,o){const d=this.observers_[i];!d||d.forEach(x=>{x.handler(o)})}}const E="tp";function S(l){return(o,d)=>[E,"-",l,"v",o?`_${o}`:"",d?`-${d}`:""].join("")}function C(l,i){return o=>i(l(o))}function A(l){return l.rawValue}function L(l,i){l.emitter.on("change",C(A,i)),i(l.rawValue)}function F(l,i,o){L(l.value(i),o)}function M(l,i,o){o?l.classList.add(i):l.classList.remove(i)}function D(l,i){return o=>{M(l,i,o)}}function O(l,i){L(l,o=>{i.textContent=o!=null?o:""})}const W=S("btn");class oe{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(W()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("button");d.classList.add(W("b")),o.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const x=i.createElement("div");x.classList.add(W("t")),O(o.props.value("title"),x),this.buttonElement.appendChild(x)}}class U{constructor(i,o){this.emitter=new b,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new oe(i,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class X{constructor(i,o){var d;this.constraint_=o==null?void 0:o.constraint,this.equals_=(d=o==null?void 0:o.equals)!==null&&d!==void 0?d:(x,I)=>x===I,this.emitter=new b,this.rawValue_=i}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(i){this.setRawValue(i,{forceEmit:!1,last:!0})}setRawValue(i,o){const d=o!=null?o:{forceEmit:!1,last:!0},x=this.constraint_?this.constraint_.constrain(i):i;!!this.equals_(this.rawValue_,x)&&!d.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=x,this.emitter.emit("change",{options:d,rawValue:x,sender:this}))}}class z{constructor(i){this.emitter=new b,this.value_=i}get rawValue(){return this.value_}set rawValue(i){this.setRawValue(i,{forceEmit:!1,last:!0})}setRawValue(i,o){const d=o!=null?o:{forceEmit:!1,last:!0};this.value_===i&&!d.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=i,this.emitter.emit("change",{options:d,rawValue:this.value_,sender:this}))}}function B(l,i){const o=i==null?void 0:i.constraint,d=i==null?void 0:i.equals;return!o&&!d?new z(l):new X(l,i)}class Q{constructor(i){this.emitter=new b,this.valMap_=i;for(const o in this.valMap_)this.valMap_[o].emitter.on("change",()=>{this.emitter.emit("change",{key:o,sender:this})})}static createCore(i){return Object.keys(i).reduce((d,x)=>Object.assign(d,{[x]:B(i[x])}),{})}static fromObject(i){const o=this.createCore(i);return new Q(o)}get(i){return this.valMap_[i].rawValue}set(i,o){this.valMap_[i].rawValue=o}value(i){return this.valMap_[i]}}function ee(l,i){const d=Object.keys(i).reduce((x,I)=>{if(x===void 0)return;const H=i[I],ae=H(l[I]);return ae.succeeded?Object.assign(Object.assign({},x),{[I]:ae.value}):void 0},{});return d}function K(l,i){return l.reduce((o,d)=>{if(o===void 0)return;const x=i(d);if(!(!x.succeeded||x.value===void 0))return[...o,x.value]},[])}function Z(l){return l===null?!1:typeof l=="object"}function N(l){return i=>o=>{if(!i&&o===void 0)return{succeeded:!1,value:void 0};if(i&&o===void 0)return{succeeded:!0,value:void 0};const d=l(o);return d!==void 0?{succeeded:!0,value:d}:{succeeded:!1,value:void 0}}}function se(l){return{custom:i=>N(i)(l),boolean:N(i=>typeof i=="boolean"?i:void 0)(l),number:N(i=>typeof i=="number"?i:void 0)(l),string:N(i=>typeof i=="string"?i:void 0)(l),function:N(i=>typeof i=="function"?i:void 0)(l),constant:i=>N(o=>o===i?i:void 0)(l),raw:N(i=>i)(l),object:i=>N(o=>{if(!!Z(o))return ee(o,i)})(l),array:i=>N(o=>{if(!!Array.isArray(o))return K(o,i)})(l)}}const re={optional:se(!0),required:se(!1)};function ue(l,i){const o=re.required.object(i)(l);return o.succeeded?o.value:void 0}function Ce(l){return l&&l.parentElement&&l.parentElement.removeChild(l),null}function G(){return["veryfirst","first","last","verylast"]}const be=S(""),Pe={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ae{constructor(i){this.parent_=null,this.blade=i.blade,this.view=i.view,this.viewProps=i.viewProps;const o=this.view.element;this.blade.value("positions").emitter.on("change",()=>{G().forEach(d=>{o.classList.remove(be(void 0,Pe[d]))}),this.blade.get("positions").forEach(d=>{o.classList.add(be(void 0,Pe[d]))})}),this.viewProps.handleDispose(()=>{Ce(o)})}get parent(){return this.parent_}}const pe="http://www.w3.org/2000/svg";function Xe(l){l.offsetHeight}function Ne(l,i){const o=l.style.transition;l.style.transition="none",i(),l.style.transition=o}function Se(l){return l.ontouchstart!==void 0}function ut(){return new Function("return this")()}function mt(){return ut().document}function pt(l){const i=l.ownerDocument.defaultView;return i&&"document"in i?l.getContext("2d"):null}const zt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function at(l,i){const o=l.createElementNS(pe,"svg");return o.innerHTML=zt[i],o}function Ke(l,i,o){l.insertBefore(i,l.children[o])}function Bt(l){l.parentElement&&l.parentElement.removeChild(l)}function Gt(l){for(;l.children.length>0;)l.removeChild(l.children[0])}function R(l){for(;l.childNodes.length>0;)l.removeChild(l.childNodes[0])}function P(l){return l.relatedTarget?l.relatedTarget:"explicitOriginalTarget"in l?l.explicitOriginalTarget:null}const $=S("lbl");function ce(l,i){const o=l.createDocumentFragment();return i.split(`
`).map(x=>l.createTextNode(x)).forEach((x,I)=>{I>0&&o.appendChild(l.createElement("br")),o.appendChild(x)}),o}class de{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add($()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("div");d.classList.add($("l")),F(o.props,"label",I=>{m(I)?this.element.classList.add($(void 0,"nol")):(this.element.classList.remove($(void 0,"nol")),R(d),d.appendChild(ce(i,I)))}),this.element.appendChild(d),this.labelElement=d;const x=i.createElement("div");x.classList.add($("v")),this.element.appendChild(x),this.valueElement=x}}class me extends Ae{constructor(i,o){const d=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{view:new de(i,{props:o.props,viewProps:d}),viewProps:d})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Te={id:"button",type:"blade",accept(l){const i=re,o=ue(l,{title:i.required.string,view:i.required.constant("button"),label:i.optional.string});return o?{params:o}:null},controller(l){return new me(l.document,{blade:l.blade,props:Q.fromObject({label:l.params.label}),valueController:new U(l.document,{props:Q.fromObject({title:l.params.title}),viewProps:l.viewProps})})},api(l){return!(l.controller instanceof me)||!(l.controller.valueController instanceof U)?null:new v(l.controller)}};class k extends Ae{constructor(i){super(i),this.value=i.value}}function j(){return new Q({positions:B([],{equals:g})})}class ge extends Q{constructor(i){super(i)}static create(i){const o={completed:!0,expanded:i,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},d=Q.createCore(o);return new ge(d)}get styleExpanded(){var i;return(i=this.get("temporaryExpanded"))!==null&&i!==void 0?i:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const i=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(i)?`${i}px`:"auto"}bindExpandedClass(i,o){const d=()=>{this.styleExpanded?i.classList.add(o):i.classList.remove(o)};F(this,"expanded",d),F(this,"temporaryExpanded",d)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ve(l,i){let o=0;return Ne(i,()=>{l.set("expandedHeight",null),l.set("temporaryExpanded",!0),Xe(i),o=i.clientHeight,l.set("temporaryExpanded",null),Xe(i)}),o}function _e(l,i){i.style.height=l.styleHeight}function xe(l,i){l.value("expanded").emitter.on("beforechange",()=>{l.set("completed",!1),m(l.get("expandedHeight"))&&l.set("expandedHeight",ve(l,i)),l.set("shouldFixHeight",!0),Xe(i)}),l.emitter.on("change",()=>{_e(l,i)}),_e(l,i),i.addEventListener("transitionend",o=>{o.propertyName==="height"&&l.cleanUpTransition()})}class we extends r{constructor(i,o){super(i),this.rackApi_=o}}function Be(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"button"}))}function He(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"folder"}))}function nt(l,i){const o=i!=null?i:{};return l.addBlade(Object.assign(Object.assign({},o),{view:"separator"}))}function V(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"tab"}))}class te{constructor(i){this.emitter=new b,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=i}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(i){for(const o of this.allItems())if(i(o))return o;return null}includes(i){return this.cache_.has(i)}add(i,o){if(this.includes(i))throw y.shouldNeverHappen();const d=o!==void 0?o:this.items_.length;this.items_.splice(d,0,i),this.cache_.add(i);const x=this.extract_(i);x&&(x.emitter.on("add",this.onSubListAdd_),x.emitter.on("remove",this.onSubListRemove_),x.allItems().forEach(I=>{this.cache_.add(I)})),this.emitter.emit("add",{index:d,item:i,root:this,target:this})}remove(i){const o=this.items_.indexOf(i);if(o<0)return;this.items_.splice(o,1),this.cache_.delete(i);const d=this.extract_(i);d&&(d.emitter.off("add",this.onSubListAdd_),d.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:o,item:i,root:this,target:this})}onSubListAdd_(i){this.cache_.add(i.item),this.emitter.emit("add",{index:i.index,item:i.item,root:this,target:i.target})}onSubListRemove_(i){this.cache_.delete(i.item),this.emitter.emit("remove",{index:i.index,item:i.item,root:this,target:i.target})}}class le extends r{constructor(i){super(i),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new b,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(i){const o=i.sender.target.read();this.emitter_.emit("change",{event:new u(this,o,this.controller_.binding.target.presetKey,i.options.last)})}}class he extends me{constructor(i,o){super(i,o),this.binding=o.binding}}class ye extends r{constructor(i){super(i),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new b,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(i){const o=i.sender.target.read();this.emitter_.emit("update",{event:new c(this,o,this.controller_.binding.target.presetKey)})}}class Ve extends me{constructor(i,o){super(i,o),this.binding=o.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function gt(l){return l instanceof rt?l.apiSet_:l instanceof we?l.rackApi_.apiSet_:null}function dt(l,i){const o=l.find(d=>d.controller_===i);if(!o)throw y.shouldNeverHappen();return o}function Mn(l,i,o){if(!_.isBindable(l))throw y.notBindable();return new _(l,i,o)}class rt extends r{constructor(i,o){super(i),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new b,this.apiSet_=new te(gt),this.pool_=o;const d=this.controller_.rack;d.emitter.on("add",this.onRackAdd_),d.emitter.on("remove",this.onRackRemove_),d.emitter.on("inputchange",this.onRackInputChange_),d.emitter.on("monitorupdate",this.onRackMonitorUpdate_),d.children.forEach(x=>{this.setUpApi_(x)})}get children(){return this.controller_.rack.children.map(i=>dt(this.apiSet_,i))}addInput(i,o,d){const x=d!=null?d:{},I=this.controller_.view.element.ownerDocument,H=this.pool_.createInput(I,Mn(i,o,x.presetKey),x),ae=new le(H);return this.add(ae,x.index)}addMonitor(i,o,d){const x=d!=null?d:{},I=this.controller_.view.element.ownerDocument,H=this.pool_.createMonitor(I,Mn(i,o),x),ae=new ye(H);return this.add(ae,x.index)}addFolder(i){return He(this,i)}addButton(i){return Be(this,i)}addSeparator(i){return nt(this,i)}addTab(i){return V(this,i)}add(i,o){this.controller_.rack.add(i.controller_,o);const d=this.apiSet_.find(x=>x.controller_===i.controller_);return d&&this.apiSet_.remove(d),this.apiSet_.add(i),i}remove(i){this.controller_.rack.remove(i.controller_)}addBlade(i){const o=this.controller_.view.element.ownerDocument,d=this.pool_.createBlade(o,i),x=this.pool_.createBladeApi(d);return this.add(x,i.index)}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}setUpApi_(i){this.apiSet_.find(d=>d.controller_===i)||this.apiSet_.add(this.pool_.createBladeApi(i))}onRackAdd_(i){this.setUpApi_(i.bladeController)}onRackRemove_(i){if(i.isRoot){const o=dt(this.apiSet_,i.bladeController);this.apiSet_.remove(o)}}onRackInputChange_(i){const o=i.bladeController;if(o instanceof he){const d=dt(this.apiSet_,o),x=o.binding;this.emitter_.emit("change",{event:new u(d,x.target.read(),x.target.presetKey,i.options.last)})}else if(o instanceof k){const d=dt(this.apiSet_,o);this.emitter_.emit("change",{event:new u(d,o.value.rawValue,void 0,i.options.last)})}}onRackMonitorUpdate_(i){if(!(i.bladeController instanceof Ve))throw y.shouldNeverHappen();const o=dt(this.apiSet_,i.bladeController),d=i.bladeController.binding;this.emitter_.emit("update",{event:new c(o,d.target.read(),d.target.presetKey)})}}class Yt extends we{constructor(i,o){super(i,new rt(i.rackController,o)),this.emitter_=new b,this.controller_.foldable.value("expanded").emitter.on("change",d=>{this.emitter_.emit("fold",{event:new h(this,d.sender.rawValue)})}),this.rackApi_.on("change",d=>{this.emitter_.emit("change",{event:d})}),this.rackApi_.on("update",d=>{this.emitter_.emit("update",{event:d})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(i){this.controller_.foldable.set("expanded",i)}get title(){return this.controller_.props.get("title")}set title(i){this.controller_.props.set("title",i)}get children(){return this.rackApi_.children}addInput(i,o,d){return this.rackApi_.addInput(i,o,d)}addMonitor(i,o,d){return this.rackApi_.addMonitor(i,o,d)}addFolder(i){return this.rackApi_.addFolder(i)}addButton(i){return this.rackApi_.addButton(i)}addSeparator(i){return this.rackApi_.addSeparator(i)}addTab(i){return this.rackApi_.addTab(i)}add(i,o){return this.rackApi_.add(i,o)}remove(i){this.rackApi_.remove(i)}addBlade(i){return this.rackApi_.addBlade(i)}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}}class Ot extends Ae{constructor(i){super({blade:i.blade,view:i.view,viewProps:i.rackController.viewProps}),this.rackController=i.rackController}}class Xr{constructor(i,o){const d=S(o.viewName);this.element=i.createElement("div"),this.element.classList.add(d()),o.viewProps.bindClassModifiers(this.element)}}function zs(l,i){for(let o=0;o<l.length;o++){const d=l[o];if(d instanceof he&&d.binding===i)return d}return null}function Bs(l,i){for(let o=0;o<l.length;o++){const d=l[o];if(d instanceof Ve&&d.binding===i)return d}return null}function Gs(l,i){for(let o=0;o<l.length;o++){const d=l[o];if(d instanceof k&&d.value===i)return d}return null}function T(l){return l instanceof Y?l.rack:l instanceof Ot?l.rackController.rack:null}function J(l){const i=T(l);return i?i.bcSet_:null}class ne{constructor(i){var o;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new b,this.blade_=i!=null?i:null,(o=this.blade_)===null||o===void 0||o.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new te(J),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(i,o){i.parent&&i.parent.remove(i),i.parent_=this,this.bcSet_.add(i,o)}remove(i){i.parent_=null,this.bcSet_.remove(i)}find(i){return this.bcSet_.allItems().filter(o=>o instanceof i)}onSetAdd_(i){this.updatePositions_();const o=i.target===i.root;if(this.emitter.emit("add",{bladeController:i.item,index:i.index,isRoot:o,sender:this}),!o)return;const d=i.item;if(d.viewProps.emitter.on("change",this.onChildViewPropsChange_),d.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),d.viewProps.handleDispose(this.onChildDispose_),d instanceof he)d.binding.emitter.on("change",this.onChildInputChange_);else if(d instanceof Ve)d.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(d instanceof k)d.value.emitter.on("change",this.onChildValueChange_);else{const x=T(d);if(x){const I=x.emitter;I.on("layout",this.onDescendantLayout_),I.on("inputchange",this.onDescendantInputChange_),I.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(i){this.updatePositions_();const o=i.target===i.root;if(this.emitter.emit("remove",{bladeController:i.item,isRoot:o,sender:this}),!o)return;const d=i.item;if(d instanceof he)d.binding.emitter.off("change",this.onChildInputChange_);else if(d instanceof Ve)d.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(d instanceof k)d.value.emitter.off("change",this.onChildValueChange_);else{const x=T(d);if(x){const I=x.emitter;I.off("layout",this.onDescendantLayout_),I.off("inputchange",this.onDescendantInputChange_),I.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const i=this.bcSet_.items.filter(x=>!x.viewProps.get("hidden")),o=i[0],d=i[i.length-1];this.bcSet_.items.forEach(x=>{const I=[];x===o&&(I.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&I.push("veryfirst")),x===d&&(I.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&I.push("verylast")),x.blade.set("positions",I)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(i){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(o=>o.viewProps.get("disposed")).forEach(o=>{this.bcSet_.remove(o)})}onChildInputChange_(i){const o=zs(this.find(he),i.sender);if(!o)throw y.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:o,options:i.options,sender:this})}onChildMonitorUpdate_(i){const o=Bs(this.find(Ve),i.sender);if(!o)throw y.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:o,sender:this})}onChildValueChange_(i){const o=Gs(this.find(k),i.sender);if(!o)throw y.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:o,options:i.options,sender:this})}onDescendantLayout_(i){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(i){this.emitter.emit("inputchange",{bladeController:i.bladeController,options:i.options,sender:this})}onDescendantMonitorUpdate_(i){this.emitter.emit("monitorupdate",{bladeController:i.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Y extends Ae{constructor(i,o){super(Object.assign(Object.assign({},o),{view:new Xr(i,{viewName:"brk",viewProps:o.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const d=new ne(o.root?void 0:o.blade);d.emitter.on("add",this.onRackAdd_),d.emitter.on("remove",this.onRackRemove_),this.rack=d,this.viewProps.handleDispose(()=>{for(let x=this.rack.children.length-1;x>=0;x--)this.rack.children[x].viewProps.set("disposed",!0)})}onRackAdd_(i){!i.isRoot||Ke(this.view.element,i.bladeController.view.element,i.index)}onRackRemove_(i){!i.isRoot||Bt(i.bladeController.view.element)}}const ie=S("cnt");class Ee{constructor(i,o){var d;this.className_=S((d=o.viewName)!==null&&d!==void 0?d:"fld"),this.element=i.createElement("div"),this.element.classList.add(this.className_(),ie()),o.viewProps.bindClassModifiers(this.element),this.foldable_=o.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),F(this.foldable_,"completed",D(this.element,this.className_(void 0,"cpl")));const x=i.createElement("button");x.classList.add(this.className_("b")),F(o.props,"title",Me=>{m(Me)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),o.viewProps.bindDisabled(x),this.element.appendChild(x),this.buttonElement=x;const I=i.createElement("div");I.classList.add(this.className_("t")),O(o.props.value("title"),I),this.buttonElement.appendChild(I),this.titleElement=I;const H=i.createElement("div");H.classList.add(this.className_("m")),this.buttonElement.appendChild(H);const ae=o.containerElement;ae.classList.add(this.className_("c")),this.element.appendChild(ae),this.containerElement=ae}}class De extends Ot{constructor(i,o){var d;const x=ge.create((d=o.expanded)!==null&&d!==void 0?d:!0),I=new Y(i,{blade:o.blade,root:o.root,viewProps:o.viewProps});super(Object.assign(Object.assign({},o),{rackController:I,view:new Ee(i,{containerElement:I.view.element,foldable:x,props:o.props,viewName:o.root?"rot":void 0,viewProps:o.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=o.props,this.foldable=x,xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Fe={id:"folder",type:"blade",accept(l){const i=re,o=ue(l,{title:i.required.string,view:i.required.constant("folder"),expanded:i.optional.boolean});return o?{params:o}:null},controller(l){return new De(l.document,{blade:l.blade,expanded:l.params.expanded,props:Q.fromObject({title:l.params.title}),viewProps:l.viewProps})},api(l){return l.controller instanceof De?new Yt(l.controller,l.pool):null}};class Ie extends k{constructor(i,o){const d=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{value:o.valueController.value,view:new de(i,{props:o.props,viewProps:d}),viewProps:d})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Ye extends r{}const Ue=S("spr");class je{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Ue()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("hr");d.classList.add(Ue("r")),this.element.appendChild(d)}}class st extends Ae{constructor(i,o){super(Object.assign(Object.assign({},o),{view:new je(i,{viewProps:o.viewProps})}))}}const Ln={id:"separator",type:"blade",accept(l){const o=ue(l,{view:re.required.constant("separator")});return o?{params:o}:null},controller(l){return new st(l.document,{blade:l.blade,viewProps:l.viewProps})},api(l){return l.controller instanceof st?new Ye(l.controller):null}},Xn=S("");function Dn(l,i){return D(l,Xn(void 0,i))}class bt extends Q{constructor(i){super(i)}static create(i){var o,d;const x=i!=null?i:{},I={disabled:(o=x.disabled)!==null&&o!==void 0?o:!1,disposed:!1,hidden:(d=x.hidden)!==null&&d!==void 0?d:!1},H=Q.createCore(I);return new bt(H)}bindClassModifiers(i){F(this,"disabled",Dn(i,"disabled")),F(this,"hidden",Dn(i,"hidden"))}bindDisabled(i){F(this,"disabled",o=>{i.disabled=o})}bindTabIndex(i){F(this,"disabled",o=>{i.tabIndex=o?-1:0})}handleDispose(i){this.value("disposed").emitter.on("change",o=>{o&&i()})}}const We=S("tbi");class Yn{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(We()),o.viewProps.bindClassModifiers(this.element),F(o.props,"selected",I=>{I?this.element.classList.add(We(void 0,"sel")):this.element.classList.remove(We(void 0,"sel"))});const d=i.createElement("button");d.classList.add(We("b")),o.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const x=i.createElement("div");x.classList.add(We("t")),O(o.props.value("title"),x),this.buttonElement.appendChild(x),this.titleElement=x}}class ht{constructor(i,o){this.emitter=new b,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new Yn(i,{props:o.props,viewProps:o.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ht{constructor(i,o){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new ht(i,{props:o.itemProps,viewProps:bt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Y(i,{blade:j(),viewProps:bt.create()}),this.props=o.props,F(this.props,"selected",d=>{this.itemController.props.set("selected",d),this.contentController.viewProps.set("hidden",!d)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class mn{constructor(i,o){this.controller_=i,this.rackApi_=o}get title(){var i;return(i=this.controller_.itemController.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.itemController.props.set("title",i)}get selected(){return this.controller_.props.get("selected")}set selected(i){this.controller_.props.set("selected",i)}get children(){return this.rackApi_.children}addButton(i){return this.rackApi_.addButton(i)}addFolder(i){return this.rackApi_.addFolder(i)}addSeparator(i){return this.rackApi_.addSeparator(i)}addTab(i){return this.rackApi_.addTab(i)}add(i,o){this.rackApi_.add(i,o)}remove(i){this.rackApi_.remove(i)}addInput(i,o,d){return this.rackApi_.addInput(i,o,d)}addMonitor(i,o,d){return this.rackApi_.addMonitor(i,o,d)}addBlade(i){return this.rackApi_.addBlade(i)}}class Kn extends we{constructor(i,o){super(i,new rt(i.rackController,o)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new b,this.pageApiMap_=new Map,this.rackApi_.on("change",d=>{this.emitter_.emit("change",{event:d})}),this.rackApi_.on("update",d=>{this.emitter_.emit("update",{event:d})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(d=>{this.setUpPageApi_(d)})}get pages(){return this.controller_.pageSet.items.map(i=>{const o=this.pageApiMap_.get(i);if(!o)throw y.shouldNeverHappen();return o})}addPage(i){const o=this.controller_.view.element.ownerDocument,d=new Ht(o,{itemProps:Q.fromObject({selected:!1,title:i.title}),props:Q.fromObject({selected:!1})});this.controller_.add(d,i.index);const x=this.pageApiMap_.get(d);if(!x)throw y.shouldNeverHappen();return x}removePage(i){this.controller_.remove(i)}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}setUpPageApi_(i){const o=this.rackApi_.apiSet_.find(x=>x.controller_===i.contentController);if(!o)throw y.shouldNeverHappen();const d=new mn(i,o);this.pageApiMap_.set(i,d)}onPageAdd_(i){this.setUpPageApi_(i.item)}onPageRemove_(i){if(!this.pageApiMap_.get(i.item))throw y.shouldNeverHappen();this.pageApiMap_.delete(i.item)}onSelect_(i){this.emitter_.emit("select",{event:new f(this,i.rawValue)})}}const Oi=-1;class Rt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=B(!0),this.selectedIndex=B(Oi),this.items_=[]}add(i,o){const d=o!=null?o:this.items_.length;this.items_.splice(d,0,i),i.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(i){const o=this.items_.indexOf(i);o<0||(this.items_.splice(o,1),i.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Oi,this.empty.rawValue=!0;return}const i=this.items_.findIndex(o=>o.rawValue);i<0?(this.items_.forEach((o,d)=>{o.rawValue=d===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((o,d)=>{o.rawValue=d===i}),this.selectedIndex.rawValue=i),this.empty.rawValue=!1}onItemSelectedChange_(i){if(i.rawValue){const o=this.items_.findIndex(d=>d===i.sender);this.items_.forEach((d,x)=>{d.rawValue=x===o}),this.selectedIndex.rawValue=o}else this.keepSelection_()}}const tn=S("tab");class vr{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(tn(),ie()),o.viewProps.bindClassModifiers(this.element),L(o.empty,D(this.element,tn(void 0,"nop")));const d=i.createElement("div");d.classList.add(tn("i")),this.element.appendChild(d),this.itemsElement=d;const x=o.contentsElement;x.classList.add(tn("c")),this.element.appendChild(x),this.contentsElement=x}}class Nt extends Ot{constructor(i,o){const d=new Y(i,{blade:o.blade,viewProps:o.viewProps}),x=new Rt;super({blade:o.blade,rackController:d,view:new vr(i,{contentsElement:d.view.element,empty:x.empty,viewProps:o.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new te(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=x}get pageSet(){return this.pageSet_}add(i,o){this.pageSet_.add(i,o)}remove(i){this.pageSet_.remove(this.pageSet_.items[i])}onPageAdd_(i){const o=i.item;Ke(this.view.itemsElement,o.itemController.view.element,i.index),this.rackController.rack.add(o.contentController,i.index),this.tab.add(o.props.value("selected"))}onPageRemove_(i){const o=i.item;Bt(o.itemController.view.element),this.rackController.rack.remove(o.contentController),this.tab.remove(o.props.value("selected"))}}const Ni={id:"tab",type:"blade",accept(l){const i=re,o=ue(l,{pages:i.required.array(i.required.object({title:i.required.string})),view:i.required.constant("tab")});return!o||o.pages.length===0?null:{params:o}},controller(l){const i=new Nt(l.document,{blade:l.blade,viewProps:l.viewProps});return l.params.pages.forEach(o=>{const d=new Ht(l.document,{itemProps:Q.fromObject({selected:!1,title:o.title}),props:Q.fromObject({selected:!1})});i.add(d)}),i},api(l){return l.controller instanceof Nt?new Kn(l.controller,l.pool):null}};function Hs(l,i){const o=l.accept(i.params);if(!o)return null;const d=re.optional.boolean(i.params.disabled).value,x=re.optional.boolean(i.params.hidden).value;return l.controller({blade:j(),document:i.document,params:Object.assign(Object.assign({},o.params),{disabled:d,hidden:x}),viewProps:bt.create({disabled:d,hidden:x})})}class Yr{constructor(){this.disabled=!1,this.emitter=new b}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ju{constructor(i,o){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=i,this.emitter=new b,this.interval_=o,this.setTimer_()}get disabled(){return this.disabled_}set disabled(i){this.disabled_=i,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const i=this.doc_.defaultView;i&&i.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const i=this.doc_.defaultView;i&&(this.timerId_=i.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class br{constructor(i){this.constraints=i}constrain(i){return this.constraints.reduce((o,d)=>d.constrain(o),i)}}function Sn(l,i){if(l instanceof i)return l;if(l instanceof br){const o=l.constraints.reduce((d,x)=>d||(x instanceof i?x:null),null);if(o)return o}return null}class wr{constructor(i){this.options=i}constrain(i){const o=this.options;return o.length===0||o.filter(x=>x.value===i).length>0?i:o[0].value}}class Fi{constructor(i){this.maxValue=i.max,this.minValue=i.min}constrain(i){let o=i;return m(this.minValue)||(o=Math.max(o,this.minValue)),m(this.maxValue)||(o=Math.min(o,this.maxValue)),o}}class Kr{constructor(i,o=0){this.step=i,this.origin=o}constrain(i){const o=this.origin%this.step,d=Math.round((i-o)/this.step);return o+d*this.step}}const Ws=S("lst");class qu{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.props_=o.props,this.element=i.createElement("div"),this.element.classList.add(Ws()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("select");d.classList.add(Ws("s")),F(this.props_,"options",I=>{Gt(d),I.forEach((H,ae)=>{const Me=i.createElement("option");Me.dataset.index=String(ae),Me.textContent=H.text,Me.value=String(H.value),d.appendChild(Me)})}),o.viewProps.bindDisabled(d),this.element.appendChild(d),this.selectElement=d;const x=i.createElement("div");x.classList.add(Ws("m")),x.appendChild(at(i,"dropdown")),this.element.appendChild(x),o.value.emitter.on("change",this.onValueChange_),this.value_=o.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class xr{constructor(i,o){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new qu(i,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(i){const d=i.currentTarget.selectedOptions.item(0);if(!d)return;const x=Number(d.dataset.index);this.value.rawValue=this.props.get("options")[x].value}}const wa=S("pop");class Xu{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(wa()),o.viewProps.bindClassModifiers(this.element),L(o.shows,D(this.element,wa(void 0,"v")))}}class xa{constructor(i,o){this.shows=B(!1),this.viewProps=o.viewProps,this.view=new Xu(i,{shows:this.shows,viewProps:this.viewProps})}}const ya=S("txt");class Yu{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.element=i.createElement("div"),this.element.classList.add(ya()),o.viewProps.bindClassModifiers(this.element),this.props_=o.props,this.props_.emitter.on("change",this.onChange_);const d=i.createElement("input");d.classList.add(ya("i")),d.type="text",o.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,o.value.emitter.on("change",this.onChange_),this.value_=o.value,this.refresh()}refresh(){const i=this.props_.get("formatter");this.inputElement.value=i(this.value_.rawValue)}onChange_(){this.refresh()}}class Zr{constructor(i,o){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=o.parser,this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new Yu(i,{props:o.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(i){const d=i.currentTarget.value,x=this.parser_(d);m(x)||(this.value.rawValue=x),this.view.refresh()}}function Ku(l){return String(l)}function Ma(l){return l==="false"?!1:!!l}function Sa(l){return Ku(l)}class Zu{constructor(i){this.text=i}evaluate(){return Number(this.text)}toString(){return this.text}}const Ju={"**":(l,i)=>Math.pow(l,i),"*":(l,i)=>l*i,"/":(l,i)=>l/i,"%":(l,i)=>l%i,"+":(l,i)=>l+i,"-":(l,i)=>l-i,"<<":(l,i)=>l<<i,">>":(l,i)=>l>>i,">>>":(l,i)=>l>>>i,"&":(l,i)=>l&i,"^":(l,i)=>l^i,"|":(l,i)=>l|i};class Qu{constructor(i,o,d){this.left=o,this.operator=i,this.right=d}evaluate(){const i=Ju[this.operator];if(!i)throw new Error(`unexpected binary operator: '${this.operator}`);return i(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $u={"+":l=>l,"-":l=>-l,"~":l=>~l};class ed{constructor(i,o){this.operator=i,this.expression=o}evaluate(){const i=$u[this.operator];if(!i)throw new Error(`unexpected unary operator: '${this.operator}`);return i(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function js(l){return(i,o)=>{for(let d=0;d<l.length;d++){const x=l[d](i,o);if(x!=="")return x}return""}}function yr(l,i){var o;const d=l.substr(i).match(/^\s+/);return(o=d&&d[0])!==null&&o!==void 0?o:""}function td(l,i){const o=l.substr(i,1);return o.match(/^[1-9]$/)?o:""}function Mr(l,i){var o;const d=l.substr(i).match(/^[0-9]+/);return(o=d&&d[0])!==null&&o!==void 0?o:""}function nd(l,i){const o=Mr(l,i);if(o!=="")return o;const d=l.substr(i,1);if(i+=1,d!=="-"&&d!=="+")return"";const x=Mr(l,i);return x===""?"":d+x}function qs(l,i){const o=l.substr(i,1);if(i+=1,o.toLowerCase()!=="e")return"";const d=nd(l,i);return d===""?"":o+d}function Ca(l,i){const o=l.substr(i,1);if(o==="0")return o;const d=td(l,i);return i+=d.length,d===""?"":d+Mr(l,i)}function id(l,i){const o=Ca(l,i);if(i+=o.length,o==="")return"";const d=l.substr(i,1);if(i+=d.length,d!==".")return"";const x=Mr(l,i);return i+=x.length,o+d+x+qs(l,i)}function rd(l,i){const o=l.substr(i,1);if(i+=o.length,o!==".")return"";const d=Mr(l,i);return i+=d.length,d===""?"":o+d+qs(l,i)}function sd(l,i){const o=Ca(l,i);return i+=o.length,o===""?"":o+qs(l,i)}const od=js([id,rd,sd]);function ad(l,i){var o;const d=l.substr(i).match(/^[01]+/);return(o=d&&d[0])!==null&&o!==void 0?o:""}function ld(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0b")return"";const d=ad(l,i);return d===""?"":o+d}function cd(l,i){var o;const d=l.substr(i).match(/^[0-7]+/);return(o=d&&d[0])!==null&&o!==void 0?o:""}function ud(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0o")return"";const d=cd(l,i);return d===""?"":o+d}function dd(l,i){var o;const d=l.substr(i).match(/^[0-9a-f]+/i);return(o=d&&d[0])!==null&&o!==void 0?o:""}function hd(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0x")return"";const d=dd(l,i);return d===""?"":o+d}const fd=js([ld,ud,hd]),pd=js([fd,od]);function md(l,i){const o=pd(l,i);return i+=o.length,o===""?null:{evaluable:new Zu(o),cursor:i}}function gd(l,i){const o=l.substr(i,1);if(i+=o.length,o!=="(")return null;const d=Aa(l,i);if(!d)return null;i=d.cursor,i+=yr(l,i).length;const x=l.substr(i,1);return i+=x.length,x!==")"?null:{evaluable:d.evaluable,cursor:i}}function _d(l,i){var o;return(o=md(l,i))!==null&&o!==void 0?o:gd(l,i)}function Ea(l,i){const o=_d(l,i);if(o)return o;const d=l.substr(i,1);if(i+=d.length,d!=="+"&&d!=="-"&&d!=="~")return null;const x=Ea(l,i);return x?(i=x.cursor,{cursor:i,evaluable:new ed(d,x.evaluable)}):null}function vd(l,i,o){o+=yr(i,o).length;const d=l.filter(x=>i.startsWith(x,o))[0];return d?(o+=d.length,o+=yr(i,o).length,{cursor:o,operator:d}):null}function bd(l,i){return(o,d)=>{const x=l(o,d);if(!x)return null;d=x.cursor;let I=x.evaluable;for(;;){const H=vd(i,o,d);if(!H)break;d=H.cursor;const ae=l(o,d);if(!ae)return null;d=ae.cursor,I=new Qu(H.operator,I,ae.evaluable)}return I?{cursor:d,evaluable:I}:null}}const wd=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((l,i)=>bd(l,i),Ea);function Aa(l,i){return i+=yr(l,i).length,wd(l,i)}function xd(l){const i=Aa(l,0);return!i||i.cursor+yr(l,i.cursor).length!==l.length?null:i.evaluable}function Rn(l){var i;const o=xd(l);return(i=o==null?void 0:o.evaluate())!==null&&i!==void 0?i:null}function Pa(l){if(typeof l=="number")return l;if(typeof l=="string"){const i=Rn(l);if(!m(i))return i}return 0}function yd(l){return String(l)}function It(l){return i=>i.toFixed(Math.max(Math.min(l,20),0))}const Md=It(0);function Jr(l){return Md(l)+"%"}function Ta(l){return String(l)}function Xs(l){return l}function La(l,i){for(;l.length<i;)l.push(void 0)}function Sd(l){const i=[];return La(i,l),B(i)}function Cd(l){const i=l.indexOf(void 0);return i<0?l:l.slice(0,i)}function Ed(l,i){const o=[...Cd(l),i];return o.length>l.length?o.splice(0,o.length-l.length):La(o,l.length),o}function Sr({primary:l,secondary:i,forward:o,backward:d}){let x=!1;function I(H){x||(x=!0,H(),x=!1)}l.emitter.on("change",H=>{I(()=>{i.setRawValue(o(l,i),H.options)})}),i.emitter.on("change",H=>{I(()=>{l.setRawValue(d(l,i),H.options)}),I(()=>{i.setRawValue(o(l,i),H.options)})}),I(()=>{i.setRawValue(o(l,i),{forceEmit:!1,last:!0})})}function jt(l,i){const o=l*(i.altKey?.1:1)*(i.shiftKey?10:1);return i.upKey?+o:i.downKey?-o:0}function Cr(l){return{altKey:l.altKey,downKey:l.key==="ArrowDown",shiftKey:l.shiftKey,upKey:l.key==="ArrowUp"}}function In(l){return{altKey:l.altKey,downKey:l.key==="ArrowLeft",shiftKey:l.shiftKey,upKey:l.key==="ArrowRight"}}function Ad(l){return l==="ArrowUp"||l==="ArrowDown"}function Da(l){return Ad(l)||l==="ArrowLeft"||l==="ArrowRight"}function Ys(l,i){var o,d;const x=i.ownerDocument.defaultView,I=i.getBoundingClientRect();return{x:l.pageX-(((o=x&&x.scrollX)!==null&&o!==void 0?o:0)+I.left),y:l.pageY-(((d=x&&x.scrollY)!==null&&d!==void 0?d:0)+I.top)}}class mi{constructor(i){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=i,this.emitter=new b,i.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),i.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),i.addEventListener("touchend",this.onTouchEnd_),i.addEventListener("mousedown",this.onMouseDown_)}computePosition_(i){const o=this.elem_.getBoundingClientRect();return{bounds:{width:o.width,height:o.height},point:i?{x:i.x,y:i.y}:null}}onMouseDown_(i){var o;i.preventDefault(),(o=i.currentTarget)===null||o===void 0||o.focus();const d=this.elem_.ownerDocument;d.addEventListener("mousemove",this.onDocumentMouseMove_),d.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:i.altKey,data:this.computePosition_(Ys(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onDocumentMouseMove_(i){this.emitter.emit("move",{altKey:i.altKey,data:this.computePosition_(Ys(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onDocumentMouseUp_(i){const o=this.elem_.ownerDocument;o.removeEventListener("mousemove",this.onDocumentMouseMove_),o.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:i.altKey,data:this.computePosition_(Ys(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onTouchStart_(i){i.preventDefault();const o=i.targetTouches.item(0),d=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:i.altKey,data:this.computePosition_(o?{x:o.clientX-d.left,y:o.clientY-d.top}:void 0),sender:this,shiftKey:i.shiftKey}),this.lastTouch_=o}onTouchMove_(i){const o=i.targetTouches.item(0),d=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:i.altKey,data:this.computePosition_(o?{x:o.clientX-d.left,y:o.clientY-d.top}:void 0),sender:this,shiftKey:i.shiftKey}),this.lastTouch_=o}onTouchEnd_(i){var o;const d=(o=i.targetTouches.item(0))!==null&&o!==void 0?o:this.lastTouch_,x=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:i.altKey,data:this.computePosition_(d?{x:d.clientX-x.left,y:d.clientY-x.top}:void 0),sender:this,shiftKey:i.shiftKey})}}function lt(l,i,o,d,x){const I=(l-i)/(o-i);return d+I*(x-d)}function Ra(l){return String(l.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function wt(l,i,o){return Math.min(Math.max(l,i),o)}function Ia(l,i){return(l%i+i)%i}const nn=S("txt");class Pd{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=i.createElement("div"),this.element.classList.add(nn(),nn(void 0,"num")),o.arrayPosition&&this.element.classList.add(nn(void 0,o.arrayPosition)),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("input");d.classList.add(nn("i")),d.type="text",o.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=o.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(nn()),this.inputElement.classList.add(nn("i"));const x=i.createElement("div");x.classList.add(nn("k")),this.element.appendChild(x),this.knobElement=x;const I=i.createElementNS(pe,"svg");I.classList.add(nn("g")),this.knobElement.appendChild(I);const H=i.createElementNS(pe,"path");H.classList.add(nn("gb")),I.appendChild(H),this.guideBodyElem_=H;const ae=i.createElementNS(pe,"path");ae.classList.add(nn("gh")),I.appendChild(ae),this.guideHeadElem_=ae;const Me=i.createElement("div");Me.classList.add(S("tt")()),this.knobElement.appendChild(Me),this.tooltipElem_=Me,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.refresh()}onDraggingChange_(i){if(i.rawValue===null){this.element.classList.remove(nn(void 0,"drg"));return}this.element.classList.add(nn(void 0,"drg"));const o=i.rawValue/this.props_.get("draggingScale"),d=o+(o>0?-1:o<0?1:0),x=wt(-d,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${d+x},0 L${d},4 L${d+x},8`,`M ${o},-1 L${o},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${o},4`);const I=this.props_.get("formatter");this.tooltipElem_.textContent=I(this.value.rawValue),this.tooltipElem_.style.left=`${o}px`}refresh(){const i=this.props_.get("formatter");this.inputElement.value=i(this.value.rawValue)}onChange_(){this.refresh()}}class Er{constructor(i,o){var d;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.parser_=o.parser,this.props=o.props,this.sliderProps_=(d=o.sliderProps)!==null&&d!==void 0?d:null,this.value=o.value,this.viewProps=o.viewProps,this.dragging_=B(null),this.view=new Pd(i,{arrayPosition:o.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const x=new mi(this.view.knobElement);x.emitter.on("down",this.onPointerDown_),x.emitter.on("move",this.onPointerMove_),x.emitter.on("up",this.onPointerUp_)}constrainValue_(i){var o,d;const x=(o=this.sliderProps_)===null||o===void 0?void 0:o.get("minValue"),I=(d=this.sliderProps_)===null||d===void 0?void 0:d.get("maxValue");let H=i;return x!==void 0&&(H=Math.max(H,x)),I!==void 0&&(H=Math.min(H,I)),H}onInputChange_(i){const d=i.currentTarget.value,x=this.parser_(d);m(x)||(this.value.rawValue=this.constrainValue_(x)),this.view.refresh()}onInputKeyDown_(i){const o=jt(this.baseStep_,Cr(i));o!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+o),{forceEmit:!1,last:!1})}onInputKeyUp_(i){jt(this.baseStep_,Cr(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(i){if(!i.point)return null;const o=i.point.x-i.bounds.width/2;return this.constrainValue_(this.originRawValue_+o*this.props.get("draggingScale"))}onPointerMove_(i){const o=this.computeDraggingValue_(i.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(i){const o=this.computeDraggingValue_(i.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Ks=S("sld");class Td{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=i.createElement("div"),this.element.classList.add(Ks()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("div");d.classList.add(Ks("t")),o.viewProps.bindTabIndex(d),this.element.appendChild(d),this.trackElement=d;const x=i.createElement("div");x.classList.add(Ks("k")),this.trackElement.appendChild(x),this.knobElement=x,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.update_()}update_(){const i=wt(lt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${i}%`}onChange_(){this.update_()}}class Ld{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.value=o.value,this.viewProps=o.viewProps,this.props=o.props,this.view=new Td(i,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){!i.point||this.value.setRawValue(lt(wt(i.point.x,0,i.bounds.width),0,i.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),o)}onPointerDownOrMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=jt(this.baseStep_,In(i));o!==0&&this.value.setRawValue(this.value.rawValue+o,{forceEmit:!1,last:!1})}onKeyUp_(i){jt(this.baseStep_,In(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Zs=S("sldtxt");class Dd{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Zs());const d=i.createElement("div");d.classList.add(Zs("s")),this.sliderView_=o.sliderView,d.appendChild(this.sliderView_.element),this.element.appendChild(d);const x=i.createElement("div");x.classList.add(Zs("t")),this.textView_=o.textView,x.appendChild(this.textView_.element),this.element.appendChild(x)}}class Js{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.sliderC_=new Ld(i,{baseStep:o.baseStep,props:o.sliderProps,value:o.value,viewProps:this.viewProps}),this.textC_=new Er(i,{baseStep:o.baseStep,parser:o.parser,props:o.textProps,sliderProps:o.sliderProps,value:o.value,viewProps:o.viewProps}),this.view=new Dd(i,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Ar(l,i){l.write(i)}function Qr(l){const i=re;if(Array.isArray(l))return i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))(l).value;if(typeof l=="object")return i.required.raw(l).value}function ka(l){if(l==="inline"||l==="popup")return l}function Zn(l){const i=re;return i.required.object({max:i.optional.number,min:i.optional.number,step:i.optional.number})(l).value}function Oa(l){if(Array.isArray(l))return l;const i=[];return Object.keys(l).forEach(o=>{i.push({text:o,value:l[o]})}),i}function Qs(l){return m(l)?null:new wr(Oa(l))}function $s(l){const i=l?Sn(l,wr):null;return i?i.options:null}function Rd(l){const i=l?Sn(l,Kr):null;return i?i.step:null}function $r(l,i){const o=l&&Sn(l,Kr);return o?Ra(o.step):Math.max(Ra(i),2)}function Vi(l){const i=Rd(l);return i!=null?i:1}function Ui(l,i){var o;const d=l&&Sn(l,Kr),x=Math.abs((o=d==null?void 0:d.step)!==null&&o!==void 0?o:i);return x===0?.1:Math.pow(10,Math.floor(Math.log10(x))-1)}const es=S("ckb");class Id{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.element=i.createElement("div"),this.element.classList.add(es()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("label");d.classList.add(es("l")),this.element.appendChild(d);const x=i.createElement("input");x.classList.add(es("i")),x.type="checkbox",d.appendChild(x),this.inputElement=x,o.viewProps.bindDisabled(this.inputElement);const I=i.createElement("div");I.classList.add(es("w")),d.appendChild(I);const H=at(i,"check");I.appendChild(H),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class kd{constructor(i,o){this.onInputChange_=this.onInputChange_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new Id(i,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(i){const o=i.currentTarget;this.value.rawValue=o.checked}}function Od(l){const i=[],o=Qs(l.options);return o&&i.push(o),new br(i)}const Nd={id:"input-bool",type:"input",accept:(l,i)=>{if(typeof l!="boolean")return null;const d=ue(i,{options:re.optional.custom(Qr)});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Ma,constraint:l=>Od(l.params),writer:l=>Ar},controller:l=>{var i;const o=l.document,d=l.value,x=l.constraint;return x&&Sn(x,wr)?new xr(o,{props:Q.fromObject({options:(i=$s(x))!==null&&i!==void 0?i:[]}),value:d,viewProps:l.viewProps}):new kd(o,{value:d,viewProps:l.viewProps})}},gi=S("col");class Fd{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(gi()),o.foldable.bindExpandedClass(this.element,gi(void 0,"expanded")),F(o.foldable,"completed",D(this.element,gi(void 0,"cpl")));const d=i.createElement("div");d.classList.add(gi("h")),this.element.appendChild(d);const x=i.createElement("div");x.classList.add(gi("s")),d.appendChild(x),this.swatchElement=x;const I=i.createElement("div");if(I.classList.add(gi("t")),d.appendChild(I),this.textElement=I,o.pickerLayout==="inline"){const H=i.createElement("div");H.classList.add(gi("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}function Vd(l,i,o){const d=wt(l/255,0,1),x=wt(i/255,0,1),I=wt(o/255,0,1),H=Math.max(d,x,I),ae=Math.min(d,x,I),Me=H-ae;let ke=0,Ze=0;const Je=(ae+H)/2;return Me!==0&&(Ze=Me/(1-Math.abs(H+ae-1)),d===H?ke=(x-I)/Me:x===H?ke=2+(I-d)/Me:ke=4+(d-x)/Me,ke=ke/6+(ke<0?1:0)),[ke*360,Ze*100,Je*100]}function Ud(l,i,o){const d=(l%360+360)%360,x=wt(i/100,0,1),I=wt(o/100,0,1),H=(1-Math.abs(2*I-1))*x,ae=H*(1-Math.abs(d/60%2-1)),Me=I-H/2;let ke,Ze,Je;return d>=0&&d<60?[ke,Ze,Je]=[H,ae,0]:d>=60&&d<120?[ke,Ze,Je]=[ae,H,0]:d>=120&&d<180?[ke,Ze,Je]=[0,H,ae]:d>=180&&d<240?[ke,Ze,Je]=[0,ae,H]:d>=240&&d<300?[ke,Ze,Je]=[ae,0,H]:[ke,Ze,Je]=[H,0,ae],[(ke+Me)*255,(Ze+Me)*255,(Je+Me)*255]}function zd(l,i,o){const d=wt(l/255,0,1),x=wt(i/255,0,1),I=wt(o/255,0,1),H=Math.max(d,x,I),ae=Math.min(d,x,I),Me=H-ae;let ke;Me===0?ke=0:H===d?ke=60*(((x-I)/Me%6+6)%6):H===x?ke=60*((I-d)/Me+2):ke=60*((d-x)/Me+4);const Ze=H===0?0:Me/H,Je=H;return[ke,Ze*100,Je*100]}function Na(l,i,o){const d=Ia(l,360),x=wt(i/100,0,1),I=wt(o/100,0,1),H=I*x,ae=H*(1-Math.abs(d/60%2-1)),Me=I-H;let ke,Ze,Je;return d>=0&&d<60?[ke,Ze,Je]=[H,ae,0]:d>=60&&d<120?[ke,Ze,Je]=[ae,H,0]:d>=120&&d<180?[ke,Ze,Je]=[0,H,ae]:d>=180&&d<240?[ke,Ze,Je]=[0,ae,H]:d>=240&&d<300?[ke,Ze,Je]=[ae,0,H]:[ke,Ze,Je]=[H,0,ae],[(ke+Me)*255,(Ze+Me)*255,(Je+Me)*255]}function Bd(l,i,o){const d=o+i*(100-Math.abs(2*o-100))/200;return[l,d!==0?i*(100-Math.abs(2*o-100))/d:0,o+i*(100-Math.abs(2*o-100))/(2*100)]}function Gd(l,i,o){const d=100-Math.abs(o*(200-i)/100-100);return[l,d!==0?i*o/d:0,o*(200-i)/(2*100)]}function _i(l){return[l[0],l[1],l[2]]}function Fa(l,i){return[l[0],l[1],l[2],i]}const Hd={hsl:{hsl:(l,i,o)=>[l,i,o],hsv:Bd,rgb:Ud},hsv:{hsl:Gd,hsv:(l,i,o)=>[l,i,o],rgb:Na},rgb:{hsl:Vd,hsv:zd,rgb:(l,i,o)=>[l,i,o]}};function ts(l,i){return[i==="float"?1:l==="rgb"?255:360,i==="float"?1:l==="rgb"?255:100,i==="float"?1:l==="rgb"?255:100]}function Wd(l,i,o){var d;const x=ts(i,o);return[i==="rgb"?wt(l[0],0,x[0]):Ia(l[0],x[0]),wt(l[1],0,x[1]),wt(l[2],0,x[2]),wt((d=l[3])!==null&&d!==void 0?d:1,0,1)]}function Va(l,i,o,d){const x=ts(i,o),I=ts(i,d);return l.map((H,ae)=>H/x[ae]*I[ae])}function jd(l,i,o){const d=Va(l,i.mode,i.type,"int"),x=Hd[i.mode][o.mode](...d);return Va(x,o.mode,"int",o.type)}function ns(l,i){return typeof l!="object"||m(l)?!1:i in l&&typeof l[i]=="number"}class Ge{constructor(i,o,d="int"){this.mode=o,this.type=d,this.comps_=Wd(i,o,d)}static black(i="int"){return new Ge([0,0,0],"rgb",i)}static fromObject(i,o="int"){const d="a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b];return new Ge(d,"rgb",o)}static toRgbaObject(i,o="int"){return i.toRgbaObject(o)}static isRgbColorObject(i){return ns(i,"r")&&ns(i,"g")&&ns(i,"b")}static isRgbaColorObject(i){return this.isRgbColorObject(i)&&ns(i,"a")}static isColorObject(i){return this.isRgbColorObject(i)}static equals(i,o){if(i.mode!==o.mode)return!1;const d=i.comps_,x=o.comps_;for(let I=0;I<d.length;I++)if(d[I]!==x[I])return!1;return!0}getComponents(i,o="int"){return Fa(jd(_i(this.comps_),{mode:this.mode,type:this.type},{mode:i!=null?i:this.mode,type:o}),this.comps_[3])}toRgbaObject(i="int"){const o=this.getComponents("rgb",i);return{r:o[0],g:o[1],b:o[2],a:o[3]}}}const Jn=S("colp");class qd{constructor(i,o){this.alphaViews_=null,this.element=i.createElement("div"),this.element.classList.add(Jn());const d=i.createElement("div");d.classList.add(Jn("hsv"));const x=i.createElement("div");x.classList.add(Jn("sv")),this.svPaletteView_=o.svPaletteView,x.appendChild(this.svPaletteView_.element),d.appendChild(x);const I=i.createElement("div");I.classList.add(Jn("h")),this.hPaletteView_=o.hPaletteView,I.appendChild(this.hPaletteView_.element),d.appendChild(I),this.element.appendChild(d);const H=i.createElement("div");if(H.classList.add(Jn("rgb")),this.textView_=o.textView,H.appendChild(this.textView_.element),this.element.appendChild(H),o.alphaViews){this.alphaViews_={palette:o.alphaViews.palette,text:o.alphaViews.text};const ae=i.createElement("div");ae.classList.add(Jn("a"));const Me=i.createElement("div");Me.classList.add(Jn("ap")),Me.appendChild(this.alphaViews_.palette.element),ae.appendChild(Me);const ke=i.createElement("div");ke.classList.add(Jn("at")),ke.appendChild(this.alphaViews_.text.element),ae.appendChild(ke),this.element.appendChild(ae)}}get allFocusableElements(){const i=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(o=>o.inputElement)];return this.alphaViews_&&i.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),i}}function Xd(l){return l==="int"?"int":l==="float"?"float":void 0}function eo(l){const i=re;return ue(l,{alpha:i.optional.boolean,color:i.optional.object({alpha:i.optional.boolean,type:i.optional.custom(Xd)}),expanded:i.optional.boolean,picker:i.optional.custom(ka)})}function vi(l){return l?.1:1}function bi(l){var i;return(i=l.color)===null||i===void 0?void 0:i.type}function Yd(l,i){return l.alpha===i.alpha&&l.mode===i.mode&&l.notation===i.notation&&l.type===i.type}function rn(l,i){const o=l.match(/^(.+)%$/);return Math.min(o?parseFloat(o[1])*.01*i:parseFloat(l),i)}const Kd={deg:l=>l,grad:l=>l*360/400,rad:l=>l*360/(2*Math.PI),turn:l=>l*360};function Ua(l){const i=l.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!i)return parseFloat(l);const o=parseFloat(i[1]),d=i[2];return Kd[d](o)}function za(l){const i=l.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[rn(i[1],255),rn(i[2],255),rn(i[3],255)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function Ba(l){return i=>{const o=za(i);return o?new Ge(o,"rgb",l):null}}function Ga(l){const i=l.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[rn(i[1],255),rn(i[2],255),rn(i[3],255),rn(i[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function Ha(l){return i=>{const o=Ga(i);return o?new Ge(o,"rgb",l):null}}function Wa(l){const i=l.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[Ua(i[1]),rn(i[2],100),rn(i[3],100)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function ja(l){return i=>{const o=Wa(i);return o?new Ge(o,"hsl",l):null}}function qa(l){const i=l.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[Ua(i[1]),rn(i[2],100),rn(i[3],100),rn(i[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function Xa(l){return i=>{const o=qa(i);return o?new Ge(o,"hsl",l):null}}function Ya(l){const i=l.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(i)return[parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16)];const o=l.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16)]:null}function Zd(l){const i=Ya(l);return i?new Ge(i,"rgb","int"):null}function Ka(l){const i=l.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(i)return[parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16),lt(parseInt(i[4]+i[4],16),0,255,0,1)];const o=l.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16),lt(parseInt(o[4],16),0,255,0,1)]:null}function Jd(l){const i=Ka(l);return i?new Ge(i,"rgb","int"):null}function Za(l){const i=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!i)return null;const o=[parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function Ja(l){return i=>{const o=Za(i);return o?new Ge(o,"rgb",l):null}}function Qa(l){const i=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!i)return null;const o=[parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3]),parseFloat(i[4])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function $a(l){return i=>{const o=Qa(i);return o?new Ge(o,"rgb",l):null}}const Qd=[{parser:Ya,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ka,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:za,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ga,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Wa,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:qa,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Za,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Qa,result:{alpha:!0,mode:"rgb",notation:"object"}}];function $d(l){return Qd.reduce((i,{parser:o,result:d})=>i||(o(l)?d:null),null)}function to(l,i="int"){const o=$d(l);return o?o.notation==="hex"&&i!=="float"?Object.assign(Object.assign({},o),{type:"int"}):o.notation==="func"?Object.assign(Object.assign({},o),{type:i}):null:null}const el={int:[Zd,Jd,Ba("int"),Ha("int"),ja("int"),Xa("int"),Ja("int"),$a("int")],float:[Ba("float"),Ha("float"),ja("float"),Xa("float"),Ja("float"),$a("float")]};function eh(l){const i=el[l];return o=>{if(typeof o!="string")return Ge.black(l);const d=i.reduce((x,I)=>x||I(o),null);return d!=null?d:Ge.black(l)}}function no(l){const i=el[l];return o=>i.reduce((d,x)=>d||x(o),null)}function tl(l){const i=wt(Math.floor(l),0,255).toString(16);return i.length===1?`0${i}`:i}function nl(l,i="#"){const o=_i(l.getComponents("rgb")).map(tl).join("");return`${i}${o}`}function io(l,i="#"){const o=l.getComponents("rgb"),d=[o[0],o[1],o[2],o[3]*255].map(tl).join("");return`${i}${d}`}function il(l,i){const o=It(i==="float"?2:0);return`rgb(${_i(l.getComponents("rgb",i)).map(x=>o(x)).join(", ")})`}function th(l){return i=>il(i,l)}function is(l,i){const o=It(2),d=It(i==="float"?2:0);return`rgba(${l.getComponents("rgb",i).map((I,H)=>(H===3?o:d)(I)).join(", ")})`}function nh(l){return i=>is(i,l)}function ih(l){const i=[It(0),Jr,Jr];return`hsl(${_i(l.getComponents("hsl")).map((d,x)=>i[x](d)).join(", ")})`}function rh(l){const i=[It(0),Jr,Jr,It(2)];return`hsla(${l.getComponents("hsl").map((d,x)=>i[x](d)).join(", ")})`}function rl(l,i){const o=It(i==="float"?2:0),d=["r","g","b"];return`{${_i(l.getComponents("rgb",i)).map((I,H)=>`${d[H]}: ${o(I)}`).join(", ")}}`}function sh(l){return i=>rl(i,l)}function sl(l,i){const o=It(2),d=It(i==="float"?2:0),x=["r","g","b","a"];return`{${l.getComponents("rgb",i).map((H,ae)=>{const Me=ae===3?o:d;return`${x[ae]}: ${Me(H)}`}).join(", ")}}`}function oh(l){return i=>sl(i,l)}const ah=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:nl},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:io},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:ih},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:rh},...["int","float"].reduce((l,i)=>[...l,{format:{alpha:!1,mode:"rgb",notation:"func",type:i},stringifier:th(i)},{format:{alpha:!0,mode:"rgb",notation:"func",type:i},stringifier:nh(i)},{format:{alpha:!1,mode:"rgb",notation:"object",type:i},stringifier:sh(i)},{format:{alpha:!0,mode:"rgb",notation:"object",type:i},stringifier:oh(i)}],[])];function ro(l){return ah.reduce((i,o)=>i||(Yd(o.format,l)?o.stringifier:null),null)}const Pr=S("apl");class lh{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(Pr()),o.viewProps.bindTabIndex(this.element);const d=i.createElement("div");d.classList.add(Pr("b")),this.element.appendChild(d);const x=i.createElement("div");x.classList.add(Pr("c")),d.appendChild(x),this.colorElem_=x;const I=i.createElement("div");I.classList.add(Pr("m")),this.element.appendChild(I),this.markerElem_=I;const H=i.createElement("div");H.classList.add(Pr("p")),this.markerElem_.appendChild(H),this.previewElem_=H,this.update_()}update_(){const i=this.value.rawValue,o=i.getComponents("rgb"),d=new Ge([o[0],o[1],o[2],0],"rgb"),x=new Ge([o[0],o[1],o[2],255],"rgb"),I=["to right",is(d),is(x)];this.colorElem_.style.background=`linear-gradient(${I.join(",")})`,this.previewElem_.style.backgroundColor=is(i);const H=lt(o[3],0,1,0,100);this.markerElem_.style.left=`${H}%`}onValueChange_(){this.update_()}}class ch{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new lh(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const d=i.point.x/i.bounds.width,x=this.value.rawValue,[I,H,ae]=x.getComponents("hsv");this.value.setRawValue(new Ge([I,H,ae,d],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=jt(vi(!0),In(i));if(o===0)return;const d=this.value.rawValue,[x,I,H,ae]=d.getComponents("hsv");this.value.setRawValue(new Ge([x,I,H,ae+o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){jt(vi(!0),In(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const zi=S("coltxt");function uh(l){const i=l.createElement("select"),o=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return i.appendChild(o.reduce((d,x)=>{const I=l.createElement("option");return I.textContent=x.text,I.value=x.value,d.appendChild(I),d},l.createDocumentFragment())),i}class dh{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(zi());const d=i.createElement("div");d.classList.add(zi("m")),this.modeElem_=uh(i),this.modeElem_.classList.add(zi("ms")),d.appendChild(this.modeSelectElement);const x=i.createElement("div");x.classList.add(zi("mm")),x.appendChild(at(i,"dropdown")),d.appendChild(x),this.element.appendChild(d);const I=i.createElement("div");I.classList.add(zi("w")),this.element.appendChild(I),this.textsElem_=I,this.textViews_=o.textViews,this.applyTextViews_(),L(o.colorMode,H=>{this.modeElem_.value=H})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(i){this.textViews_=i,this.applyTextViews_()}applyTextViews_(){Gt(this.textsElem_);const i=this.element.ownerDocument;this.textViews_.forEach(o=>{const d=i.createElement("div");d.classList.add(zi("c")),d.appendChild(o.element),this.textsElem_.appendChild(d)})}}function hh(l){return It(l==="float"?2:0)}function fh(l,i,o){const d=ts(l,i)[o];return new Fi({min:0,max:d})}function so(l,i,o){return new Er(l,{arrayPosition:o===0?"fst":o===3-1?"lst":"mid",baseStep:vi(!1),parser:i.parser,props:Q.fromObject({draggingScale:i.colorType==="float"?.01:1,formatter:hh(i.colorType)}),value:B(0,{constraint:fh(i.colorMode,i.colorType,o)}),viewProps:i.viewProps})}class ph{constructor(i,o){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=o.colorType,this.parser_=o.parser,this.value=o.value,this.viewProps=o.viewProps,this.colorMode=B(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(i),this.view=new dh(i,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(i){const o={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},d=[so(i,o,0),so(i,o,1),so(i,o,2)];return d.forEach((x,I)=>{Sr({primary:this.value,secondary:x.value,forward:H=>H.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[I],backward:(H,ae)=>{const Me=this.colorMode.rawValue,ke=H.rawValue.getComponents(Me,this.colorType_);return ke[I]=ae.rawValue,new Ge(Fa(_i(ke),ke[3]),Me,this.colorType_)}})}),d}onModeSelectChange_(i){const o=i.currentTarget;this.colorMode.rawValue=o.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const oo=S("hpl");class mh{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(oo()),o.viewProps.bindTabIndex(this.element);const d=i.createElement("div");d.classList.add(oo("c")),this.element.appendChild(d);const x=i.createElement("div");x.classList.add(oo("m")),this.element.appendChild(x),this.markerElem_=x,this.update_()}update_(){const i=this.value.rawValue,[o]=i.getComponents("hsv");this.markerElem_.style.backgroundColor=il(new Ge([o,100,100],"hsv"));const d=lt(o,0,360,0,100);this.markerElem_.style.left=`${d}%`}onValueChange_(){this.update_()}}class gh{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new mh(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const d=lt(wt(i.point.x,0,i.bounds.width),0,i.bounds.width,0,359),x=this.value.rawValue,[,I,H,ae]=x.getComponents("hsv");this.value.setRawValue(new Ge([d,I,H,ae],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=jt(vi(!1),In(i));if(o===0)return;const d=this.value.rawValue,[x,I,H,ae]=d.getComponents("hsv");this.value.setRawValue(new Ge([x+o,I,H,ae],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){jt(vi(!1),In(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ao=S("svp"),ol=64;class _h{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(ao()),o.viewProps.bindTabIndex(this.element);const d=i.createElement("canvas");d.height=ol,d.width=ol,d.classList.add(ao("c")),this.element.appendChild(d),this.canvasElement=d;const x=i.createElement("div");x.classList.add(ao("m")),this.element.appendChild(x),this.markerElem_=x,this.update_()}update_(){const i=pt(this.canvasElement);if(!i)return;const d=this.value.rawValue.getComponents("hsv"),x=this.canvasElement.width,I=this.canvasElement.height,H=i.getImageData(0,0,x,I),ae=H.data;for(let Ze=0;Ze<I;Ze++)for(let Je=0;Je<x;Je++){const On=lt(Je,0,x,0,100),Lr=lt(Ze,0,I,100,0),Dr=Na(d[0],On,Lr),Wi=(Ze*x+Je)*4;ae[Wi]=Dr[0],ae[Wi+1]=Dr[1],ae[Wi+2]=Dr[2],ae[Wi+3]=255}i.putImageData(H,0,0);const Me=lt(d[1],0,100,0,100);this.markerElem_.style.left=`${Me}%`;const ke=lt(d[2],0,100,100,0);this.markerElem_.style.top=`${ke}%`}onValueChange_(){this.update_()}}class vh{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new _h(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const d=lt(i.point.x,0,i.bounds.width,0,100),x=lt(i.point.y,0,i.bounds.height,100,0),[I,,,H]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([I,d,x,H],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){Da(i.key)&&i.preventDefault();const[o,d,x,I]=this.value.rawValue.getComponents("hsv"),H=vi(!1),ae=jt(H,In(i)),Me=jt(H,Cr(i));ae===0&&Me===0||this.value.setRawValue(new Ge([o,d+ae,x+Me,I],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){const o=vi(!1),d=jt(o,In(i)),x=jt(o,Cr(i));d===0&&x===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class bh{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.hPaletteC_=new gh(i,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new vh(i,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=o.supportsAlpha?{palette:new ch(i,{value:this.value,viewProps:this.viewProps}),text:new Er(i,{parser:Rn,baseStep:.1,props:Q.fromObject({draggingScale:.01,formatter:It(2)}),value:B(0,{constraint:new Fi({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Sr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:d=>d.rawValue.getComponents()[3],backward:(d,x)=>{const I=d.rawValue.getComponents();return I[3]=x.rawValue,new Ge(I,d.rawValue.mode)}}),this.textC_=new ph(i,{colorType:o.colorType,parser:Rn,value:this.value,viewProps:this.viewProps}),this.view=new qd(i,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:o.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const lo=S("colsw");class wh{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.element=i.createElement("div"),this.element.classList.add(lo()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("div");d.classList.add(lo("sw")),this.element.appendChild(d),this.swatchElem_=d;const x=i.createElement("button");x.classList.add(lo("b")),o.viewProps.bindDisabled(x),this.element.appendChild(x),this.buttonElement=x,this.update_()}update_(){const i=this.value.rawValue;this.swatchElem_.style.backgroundColor=io(i)}onValueChange_(){this.update_()}}class xh{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new wh(i,{value:this.value,viewProps:this.viewProps})}}class co{constructor(i,o){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=ge.create(o.expanded),this.swatchC_=new xh(i,{value:this.value,viewProps:this.viewProps});const d=this.swatchC_.view.buttonElement;d.addEventListener("blur",this.onButtonBlur_),d.addEventListener("click",this.onButtonClick_),this.textC_=new Zr(i,{parser:o.parser,props:Q.fromObject({formatter:o.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Fd(i,{foldable:this.foldable_,pickerLayout:o.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=o.pickerLayout==="popup"?new xa(i,{viewProps:this.viewProps}):null;const x=new bh(i,{colorType:o.colorType,supportsAlpha:o.supportsAlpha,value:this.value,viewProps:this.viewProps});x.view.allFocusableElements.forEach(I=>{I.addEventListener("blur",this.onPopupChildBlur_),I.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=x,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(x.view.element),Sr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:I=>I.rawValue,backward:(I,H)=>H.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(i){if(!this.popC_)return;const o=this.view.element,d=i.relatedTarget;(!d||!o.contains(d))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(i){if(!this.popC_)return;const o=this.popC_.view.element,d=P(i);d&&o.contains(d)||d&&d===this.swatchC_.view.buttonElement&&!Se(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(i){this.popC_?i.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&i.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function yh(l,i){return Ge.isColorObject(l)?Ge.fromObject(l,i):Ge.black(i)}function Mh(l){return _i(l.getComponents("rgb")).reduce((i,o)=>i<<8|Math.floor(o)&255,0)}function Sh(l){return l.getComponents("rgb").reduce((i,o,d)=>{const x=Math.floor(d===3?o*255:o)&255;return i<<8|x},0)>>>0}function Ch(l){return new Ge([l>>16&255,l>>8&255,l&255],"rgb")}function Eh(l){return new Ge([l>>24&255,l>>16&255,l>>8&255,lt(l&255,0,255,0,1)],"rgb")}function Ah(l){return typeof l!="number"?Ge.black():Ch(l)}function Ph(l){return typeof l!="number"?Ge.black():Eh(l)}function Th(l){const i=ro(l);return i?(o,d)=>{Ar(o,i(d))}:null}function Lh(l){const i=l?Sh:Mh;return(o,d)=>{Ar(o,i(d))}}function Dh(l,i,o){const d=i.toRgbaObject(o);l.writeProperty("r",d.r),l.writeProperty("g",d.g),l.writeProperty("b",d.b),l.writeProperty("a",d.a)}function Rh(l,i,o){const d=i.toRgbaObject(o);l.writeProperty("r",d.r),l.writeProperty("g",d.g),l.writeProperty("b",d.b)}function Ih(l,i){return(o,d)=>{l?Dh(o,d,i):Rh(o,d,i)}}function uo(l){var i;return!!((l==null?void 0:l.alpha)||((i=l==null?void 0:l.color)===null||i===void 0?void 0:i.alpha))}function kh(l){return l?i=>io(i,"0x"):i=>nl(i,"0x")}function Oh(l){return"color"in l||"view"in l&&l.view==="color"}const Nh={id:"input-color-number",type:"input",accept:(l,i)=>{if(typeof l!="number"||!Oh(i))return null;const o=eo(i);return o?{initialValue:l,params:o}:null},binding:{reader:l=>uo(l.params)?Ph:Ah,equals:Ge.equals,writer:l=>Lh(uo(l.params))},controller:l=>{const i=uo(l.params),o="expanded"in l.params?l.params.expanded:void 0,d="picker"in l.params?l.params.picker:void 0;return new co(l.document,{colorType:"int",expanded:o!=null?o:!1,formatter:kh(i),parser:no("int"),pickerLayout:d!=null?d:"popup",supportsAlpha:i,value:l.value,viewProps:l.viewProps})}};function Fh(l){return Ge.isRgbaColorObject(l)}function Vh(l){return i=>yh(i,l)}function Uh(l,i){return o=>l?sl(o,i):rl(o,i)}const zh={id:"input-color-object",type:"input",accept:(l,i)=>{if(!Ge.isColorObject(l))return null;const o=eo(i);return o?{initialValue:l,params:o}:null},binding:{reader:l=>Vh(bi(l.params)),equals:Ge.equals,writer:l=>Ih(Fh(l.initialValue),bi(l.params))},controller:l=>{var i;const o=Ge.isRgbaColorObject(l.initialValue),d="expanded"in l.params?l.params.expanded:void 0,x="picker"in l.params?l.params.picker:void 0,I=(i=bi(l.params))!==null&&i!==void 0?i:"int";return new co(l.document,{colorType:I,expanded:d!=null?d:!1,formatter:Uh(o,I),parser:no(I),pickerLayout:x!=null?x:"popup",supportsAlpha:o,value:l.value,viewProps:l.viewProps})}},Bh={id:"input-color-string",type:"input",accept:(l,i)=>{if(typeof l!="string"||"view"in i&&i.view==="text")return null;const o=to(l,bi(i));if(!o||!ro(o))return null;const x=eo(i);return x?{initialValue:l,params:x}:null},binding:{reader:l=>{var i;return eh((i=bi(l.params))!==null&&i!==void 0?i:"int")},equals:Ge.equals,writer:l=>{const i=to(l.initialValue,bi(l.params));if(!i)throw y.shouldNeverHappen();const o=Th(i);if(!o)throw y.notBindable();return o}},controller:l=>{const i=to(l.initialValue,bi(l.params));if(!i)throw y.shouldNeverHappen();const o=ro(i);if(!o)throw y.shouldNeverHappen();const d="expanded"in l.params?l.params.expanded:void 0,x="picker"in l.params?l.params.picker:void 0;return new co(l.document,{colorType:i.type,expanded:d!=null?d:!1,formatter:o,parser:no(i.type),pickerLayout:x!=null?x:"popup",supportsAlpha:i.alpha,value:l.value,viewProps:l.viewProps})}};class Qn{constructor(i){this.components=i.components,this.asm_=i.assembly}constrain(i){const o=this.asm_.toComponents(i).map((d,x)=>{var I,H;return(H=(I=this.components[x])===null||I===void 0?void 0:I.constrain(d))!==null&&H!==void 0?H:d});return this.asm_.fromComponents(o)}}const al=S("pndtxt");class Gh{constructor(i,o){this.textViews=o.textViews,this.element=i.createElement("div"),this.element.classList.add(al()),this.textViews.forEach(d=>{const x=i.createElement("div");x.classList.add(al("a")),x.appendChild(d.element),this.element.appendChild(x)})}}function Hh(l,i,o){return new Er(l,{arrayPosition:o===0?"fst":o===i.axes.length-1?"lst":"mid",baseStep:i.axes[o].baseStep,parser:i.parser,props:i.axes[o].textProps,value:B(0,{constraint:i.axes[o].constraint}),viewProps:i.viewProps})}class ho{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.acs_=o.axes.map((d,x)=>Hh(i,o,x)),this.acs_.forEach((d,x)=>{Sr({primary:this.value,secondary:d.value,forward:I=>o.assembly.toComponents(I.rawValue)[x],backward:(I,H)=>{const ae=o.assembly.toComponents(I.rawValue);return ae[x]=H.rawValue,o.assembly.fromComponents(ae)}})}),this.view=new Gh(i,{textViews:this.acs_.map(d=>d.view)})}}function ll(l,i){return"step"in l&&!m(l.step)?new Kr(l.step,i):null}function cl(l){return"max"in l&&!m(l.max)||"min"in l&&!m(l.min)?new Fi({max:l.max,min:l.min}):null}function Wh(l,i){const o=[],d=ll(l,i);d&&o.push(d);const x=cl(l);x&&o.push(x);const I=Qs(l.options);return I&&o.push(I),new br(o)}function jh(l){const i=l?Sn(l,Fi):null;return i?[i.minValue,i.maxValue]:[void 0,void 0]}function qh(l){const[i,o]=jh(l);return[i!=null?i:0,o!=null?o:100]}const Xh={id:"input-number",type:"input",accept:(l,i)=>{if(typeof l!="number")return null;const o=re,d=ue(i,{format:o.optional.function,max:o.optional.number,min:o.optional.number,options:o.optional.custom(Qr),step:o.optional.number});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Pa,constraint:l=>Wh(l.params,l.initialValue),writer:l=>Ar},controller:l=>{var i,o;const d=l.value,x=l.constraint;if(x&&Sn(x,wr))return new xr(l.document,{props:Q.fromObject({options:(i=$s(x))!==null&&i!==void 0?i:[]}),value:d,viewProps:l.viewProps});const I=(o="format"in l.params?l.params.format:void 0)!==null&&o!==void 0?o:It($r(x,d.rawValue));if(x&&Sn(x,Fi)){const[H,ae]=qh(x);return new Js(l.document,{baseStep:Vi(x),parser:Rn,sliderProps:Q.fromObject({maxValue:ae,minValue:H}),textProps:Q.fromObject({draggingScale:Ui(x,d.rawValue),formatter:I}),value:d,viewProps:l.viewProps})}return new Er(l.document,{baseStep:Vi(x),parser:Rn,props:Q.fromObject({draggingScale:Ui(x,d.rawValue),formatter:I}),value:d,viewProps:l.viewProps})}};class $n{constructor(i=0,o=0){this.x=i,this.y=o}getComponents(){return[this.x,this.y]}static isObject(i){if(m(i))return!1;const o=i.x,d=i.y;return!(typeof o!="number"||typeof d!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y}toObject(){return{x:this.x,y:this.y}}}const ul={toComponents:l=>l.getComponents(),fromComponents:l=>new $n(...l)},Bi=S("p2d");class Yh{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Bi()),o.viewProps.bindClassModifiers(this.element),L(o.expanded,D(this.element,Bi(void 0,"expanded")));const d=i.createElement("div");d.classList.add(Bi("h")),this.element.appendChild(d);const x=i.createElement("button");x.classList.add(Bi("b")),x.appendChild(at(i,"p2dpad")),o.viewProps.bindDisabled(x),d.appendChild(x),this.buttonElement=x;const I=i.createElement("div");if(I.classList.add(Bi("t")),d.appendChild(I),this.textElement=I,o.pickerLayout==="inline"){const H=i.createElement("div");H.classList.add(Bi("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}const ei=S("p2dp");class Kh{constructor(i,o){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=o.invertsY,this.maxValue_=o.maxValue,this.element=i.createElement("div"),this.element.classList.add(ei()),o.layout==="popup"&&this.element.classList.add(ei(void 0,"p"));const d=i.createElement("div");d.classList.add(ei("p")),o.viewProps.bindTabIndex(d),this.element.appendChild(d),this.padElement=d;const x=i.createElementNS(pe,"svg");x.classList.add(ei("g")),this.padElement.appendChild(x),this.svgElem_=x;const I=i.createElementNS(pe,"line");I.classList.add(ei("ax")),I.setAttributeNS(null,"x1","0"),I.setAttributeNS(null,"y1","50%"),I.setAttributeNS(null,"x2","100%"),I.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(I);const H=i.createElementNS(pe,"line");H.classList.add(ei("ax")),H.setAttributeNS(null,"x1","50%"),H.setAttributeNS(null,"y1","0"),H.setAttributeNS(null,"x2","50%"),H.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(H);const ae=i.createElementNS(pe,"line");ae.classList.add(ei("l")),ae.setAttributeNS(null,"x1","50%"),ae.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ae),this.lineElem_=ae;const Me=i.createElement("div");Me.classList.add(ei("m")),this.padElement.appendChild(Me),this.markerElem_=Me,o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[i,o]=this.value.rawValue.getComponents(),d=this.maxValue_,x=lt(i,-d,+d,0,100),I=lt(o,-d,+d,0,100),H=this.invertsY_?100-I:I;this.lineElem_.setAttributeNS(null,"x2",`${x}%`),this.lineElem_.setAttributeNS(null,"y2",`${H}%`),this.markerElem_.style.left=`${x}%`,this.markerElem_.style.top=`${H}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function dl(l,i,o){return[jt(i[0],In(l)),jt(i[1],Cr(l))*(o?1:-1)]}class Zh{constructor(i,o){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.baseSteps_=o.baseSteps,this.maxValue_=o.maxValue,this.invertsY_=o.invertsY,this.view=new Kh(i,{invertsY:this.invertsY_,layout:o.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const d=this.maxValue_,x=lt(i.point.x,0,i.bounds.width,-d,+d),I=lt(this.invertsY_?i.bounds.height-i.point.y:i.point.y,0,i.bounds.height,-d,+d);this.value.setRawValue(new $n(x,I),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onPadKeyDown_(i){Da(i.key)&&i.preventDefault();const[o,d]=dl(i,this.baseSteps_,this.invertsY_);o===0&&d===0||this.value.setRawValue(new $n(this.value.rawValue.x+o,this.value.rawValue.y+d),{forceEmit:!1,last:!1})}onPadKeyUp_(i){const[o,d]=dl(i,this.baseSteps_,this.invertsY_);o===0&&d===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Jh{constructor(i,o){var d,x;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=ge.create(o.expanded),this.popC_=o.pickerLayout==="popup"?new xa(i,{viewProps:this.viewProps}):null;const I=new Zh(i,{baseSteps:[o.axes[0].baseStep,o.axes[1].baseStep],invertsY:o.invertsY,layout:o.pickerLayout,maxValue:o.maxValue,value:this.value,viewProps:this.viewProps});I.view.allFocusableElements.forEach(H=>{H.addEventListener("blur",this.onPopupChildBlur_),H.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=I,this.textC_=new ho(i,{assembly:ul,axes:o.axes,parser:o.parser,value:this.value,viewProps:this.viewProps}),this.view=new Yh(i,{expanded:this.foldable_.value("expanded"),pickerLayout:o.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(d=this.view.buttonElement)===null||d===void 0||d.addEventListener("blur",this.onPadButtonBlur_),(x=this.view.buttonElement)===null||x===void 0||x.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Sr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:H=>H.rawValue,backward:(H,ae)=>ae.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(i){if(!this.popC_)return;const o=this.view.element,d=i.relatedTarget;(!d||!o.contains(d))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(i){if(!this.popC_)return;const o=this.popC_.view.element,d=P(i);d&&o.contains(d)||d&&d===this.view.buttonElement&&!Se(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(i){this.popC_?i.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&i.key==="Escape"&&this.view.buttonElement.focus()}}function Qh(l){return $n.isObject(l)?new $n(l.x,l.y):new $n}function $h(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y)}function kn(l,i){if(!l)return;const o=[],d=ll(l,i);d&&o.push(d);const x=cl(l);return x&&o.push(x),new br(o)}function ef(l,i){return new Qn({assembly:ul,components:[kn("x"in l?l.x:void 0,i.x),kn("y"in l?l.y:void 0,i.y)]})}function hl(l,i){var o,d;const x=l&&Sn(l,Fi);if(x)return Math.max(Math.abs((o=x.minValue)!==null&&o!==void 0?o:0),Math.abs((d=x.maxValue)!==null&&d!==void 0?d:0));const I=Vi(l);return Math.max(Math.abs(I)*10,Math.abs(i)*10)}function tf(l,i){const o=i instanceof Qn?i.components[0]:void 0,d=i instanceof Qn?i.components[1]:void 0,x=hl(o,l.x),I=hl(d,l.y);return Math.max(x,I)}function fl(l,i){return{baseStep:Vi(i),constraint:i,textProps:Q.fromObject({draggingScale:Ui(i,l),formatter:It($r(i,l))})}}function nf(l){if(!("y"in l))return!1;const i=l.y;return i&&"inverted"in i?!!i.inverted:!1}const rf={id:"input-point2d",type:"input",accept:(l,i)=>{if(!$n.isObject(l))return null;const o=re,d=ue(i,{expanded:o.optional.boolean,picker:o.optional.custom(ka),x:o.optional.custom(Zn),y:o.optional.object({inverted:o.optional.boolean,max:o.optional.number,min:o.optional.number,step:o.optional.number})});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Qh,constraint:l=>ef(l.params,l.initialValue),equals:$n.equals,writer:l=>$h},controller:l=>{const i=l.document,o=l.value,d=l.constraint;if(!(d instanceof Qn))throw y.shouldNeverHappen();const x="expanded"in l.params?l.params.expanded:void 0,I="picker"in l.params?l.params.picker:void 0;return new Jh(i,{axes:[fl(o.rawValue.x,d.components[0]),fl(o.rawValue.y,d.components[1])],expanded:x!=null?x:!1,invertsY:nf(l.params),maxValue:tf(o.rawValue,d),parser:Rn,pickerLayout:I!=null?I:"popup",value:o,viewProps:l.viewProps})}};class Gi{constructor(i=0,o=0,d=0){this.x=i,this.y=o,this.z=d}getComponents(){return[this.x,this.y,this.z]}static isObject(i){if(m(i))return!1;const o=i.x,d=i.y,x=i.z;return!(typeof o!="number"||typeof d!="number"||typeof x!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y&&i.z===o.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const pl={toComponents:l=>l.getComponents(),fromComponents:l=>new Gi(...l)};function sf(l){return Gi.isObject(l)?new Gi(l.x,l.y,l.z):new Gi}function of(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y),l.writeProperty("z",i.z)}function af(l,i){return new Qn({assembly:pl,components:[kn("x"in l?l.x:void 0,i.x),kn("y"in l?l.y:void 0,i.y),kn("z"in l?l.z:void 0,i.z)]})}function fo(l,i){return{baseStep:Vi(i),constraint:i,textProps:Q.fromObject({draggingScale:Ui(i,l),formatter:It($r(i,l))})}}const lf={id:"input-point3d",type:"input",accept:(l,i)=>{if(!Gi.isObject(l))return null;const o=re,d=ue(i,{x:o.optional.custom(Zn),y:o.optional.custom(Zn),z:o.optional.custom(Zn)});return d?{initialValue:l,params:d}:null},binding:{reader:l=>sf,constraint:l=>af(l.params,l.initialValue),equals:Gi.equals,writer:l=>of},controller:l=>{const i=l.value,o=l.constraint;if(!(o instanceof Qn))throw y.shouldNeverHappen();return new ho(l.document,{assembly:pl,axes:[fo(i.rawValue.x,o.components[0]),fo(i.rawValue.y,o.components[1]),fo(i.rawValue.z,o.components[2])],parser:Rn,value:i,viewProps:l.viewProps})}};class Hi{constructor(i=0,o=0,d=0,x=0){this.x=i,this.y=o,this.z=d,this.w=x}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(i){if(m(i))return!1;const o=i.x,d=i.y,x=i.z,I=i.w;return!(typeof o!="number"||typeof d!="number"||typeof x!="number"||typeof I!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y&&i.z===o.z&&i.w===o.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ml={toComponents:l=>l.getComponents(),fromComponents:l=>new Hi(...l)};function cf(l){return Hi.isObject(l)?new Hi(l.x,l.y,l.z,l.w):new Hi}function uf(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y),l.writeProperty("z",i.z),l.writeProperty("w",i.w)}function df(l,i){return new Qn({assembly:ml,components:[kn("x"in l?l.x:void 0,i.x),kn("y"in l?l.y:void 0,i.y),kn("z"in l?l.z:void 0,i.z),kn("w"in l?l.w:void 0,i.w)]})}function hf(l,i){return{baseStep:Vi(i),constraint:i,textProps:Q.fromObject({draggingScale:Ui(i,l),formatter:It($r(i,l))})}}const ff={id:"input-point4d",type:"input",accept:(l,i)=>{if(!Hi.isObject(l))return null;const o=re,d=ue(i,{x:o.optional.custom(Zn),y:o.optional.custom(Zn),z:o.optional.custom(Zn),w:o.optional.custom(Zn)});return d?{initialValue:l,params:d}:null},binding:{reader:l=>cf,constraint:l=>df(l.params,l.initialValue),equals:Hi.equals,writer:l=>uf},controller:l=>{const i=l.value,o=l.constraint;if(!(o instanceof Qn))throw y.shouldNeverHappen();return new ho(l.document,{assembly:ml,axes:i.rawValue.getComponents().map((d,x)=>hf(d,o.components[x])),parser:Rn,value:i,viewProps:l.viewProps})}};function pf(l){const i=[],o=Qs(l.options);return o&&i.push(o),new br(i)}const mf={id:"input-string",type:"input",accept:(l,i)=>{if(typeof l!="string")return null;const d=ue(i,{options:re.optional.custom(Qr)});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Ta,constraint:l=>pf(l.params),writer:l=>Ar},controller:l=>{var i;const o=l.document,d=l.value,x=l.constraint;return x&&Sn(x,wr)?new xr(o,{props:Q.fromObject({options:(i=$s(x))!==null&&i!==void 0?i:[]}),value:d,viewProps:l.viewProps}):new Zr(o,{parser:I=>I,props:Q.fromObject({formatter:Xs}),value:d,viewProps:l.viewProps})}},Tr={monitor:{defaultInterval:200,defaultLineCount:3}},gl=S("mll");class gf{constructor(i,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=i.createElement("div"),this.element.classList.add(gl()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("textarea");d.classList.add(gl("i")),d.style.height=`calc(var(--bld-us) * ${o.lineCount})`,d.readOnly=!0,o.viewProps.bindDisabled(d),this.element.appendChild(d),this.textareaElem_=d,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){const i=this.textareaElem_,o=i.scrollTop===i.scrollHeight-i.clientHeight,d=[];this.value.rawValue.forEach(x=>{x!==void 0&&d.push(this.formatter_(x))}),i.textContent=d.join(`
`),o&&(i.scrollTop=i.scrollHeight)}onValueUpdate_(){this.update_()}}class po{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new gf(i,{formatter:o.formatter,lineCount:o.lineCount,value:this.value,viewProps:this.viewProps})}}const _l=S("sgl");class _f{constructor(i,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=i.createElement("div"),this.element.classList.add(_l()),o.viewProps.bindClassModifiers(this.element);const d=i.createElement("input");d.classList.add(_l("i")),d.readOnly=!0,d.type="text",o.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){const i=this.value.rawValue,o=i[i.length-1];this.inputElement.value=o!==void 0?this.formatter_(o):""}onValueUpdate_(){this.update_()}}class mo{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new _f(i,{formatter:o.formatter,value:this.value,viewProps:this.viewProps})}}const vf={id:"monitor-bool",type:"monitor",accept:(l,i)=>{if(typeof l!="boolean")return null;const d=ue(i,{lineCount:re.optional.number});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Ma},controller:l=>{var i;return l.value.rawValue.length===1?new mo(l.document,{formatter:Sa,value:l.value,viewProps:l.viewProps}):new po(l.document,{formatter:Sa,lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:Tr.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}},ti=S("grl");class bf{constructor(i,o){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=i.createElement("div"),this.element.classList.add(ti()),o.viewProps.bindClassModifiers(this.element),this.formatter_=o.formatter,this.props_=o.props,this.cursor_=o.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const d=i.createElementNS(pe,"svg");d.classList.add(ti("g")),d.style.height=`calc(var(--bld-us) * ${o.lineCount})`,this.element.appendChild(d),this.svgElem_=d;const x=i.createElementNS(pe,"polyline");this.svgElem_.appendChild(x),this.lineElem_=x;const I=i.createElement("div");I.classList.add(ti("t"),S("tt")()),this.element.appendChild(I),this.tooltipElem_=I,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const i=this.svgElem_.getBoundingClientRect(),o=this.value.rawValue.length-1,d=this.props_.get("minValue"),x=this.props_.get("maxValue"),I=[];this.value.rawValue.forEach((Ze,Je)=>{if(Ze===void 0)return;const On=lt(Je,0,o,0,i.width),Lr=lt(Ze,d,x,i.height,0);I.push([On,Lr].join(","))}),this.lineElem_.setAttributeNS(null,"points",I.join(" "));const H=this.tooltipElem_,ae=this.value.rawValue[this.cursor_.rawValue];if(ae===void 0){H.classList.remove(ti("t","a"));return}const Me=lt(this.cursor_.rawValue,0,o,0,i.width),ke=lt(ae,d,x,i.height,0);H.style.left=`${Me}px`,H.style.top=`${ke}px`,H.textContent=`${this.formatter_(ae)}`,H.classList.contains(ti("t","a"))||(H.classList.add(ti("t","a"),ti("t","in")),Xe(H),H.classList.remove(ti("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class wf{constructor(i,o){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=o.props,this.value=o.value,this.viewProps=o.viewProps,this.cursor_=B(-1),this.view=new bf(i,{cursor:this.cursor_,formatter:o.formatter,lineCount:o.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Se(i))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const d=new mi(this.view.element);d.emitter.on("down",this.onGraphPointerDown_),d.emitter.on("move",this.onGraphPointerMove_),d.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(i){const o=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(lt(i.offsetX,0,o.width,0,this.value.rawValue.length))}onGraphPointerDown_(i){this.onGraphPointerMove_(i)}onGraphPointerMove_(i){if(!i.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(lt(i.data.point.x,0,i.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function go(l){return"format"in l&&!m(l.format)?l.format:It(2)}function xf(l){var i;return l.value.rawValue.length===1?new mo(l.document,{formatter:go(l.params),value:l.value,viewProps:l.viewProps}):new po(l.document,{formatter:go(l.params),lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:Tr.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}function yf(l){var i,o,d;return new wf(l.document,{formatter:go(l.params),lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:Tr.monitor.defaultLineCount,props:Q.fromObject({maxValue:(o="max"in l.params?l.params.max:null)!==null&&o!==void 0?o:100,minValue:(d="min"in l.params?l.params.min:null)!==null&&d!==void 0?d:0}),value:l.value,viewProps:l.viewProps})}function vl(l){return"view"in l&&l.view==="graph"}const Mf={id:"monitor-number",type:"monitor",accept:(l,i)=>{if(typeof l!="number")return null;const o=re,d=ue(i,{format:o.optional.function,lineCount:o.optional.number,max:o.optional.number,min:o.optional.number,view:o.optional.string});return d?{initialValue:l,params:d}:null},binding:{defaultBufferSize:l=>vl(l)?64:1,reader:l=>Pa},controller:l=>vl(l.params)?yf(l):xf(l)},Sf={id:"monitor-string",type:"monitor",accept:(l,i)=>{if(typeof l!="string")return null;const o=re,d=ue(i,{lineCount:o.optional.number,multiline:o.optional.boolean});return d?{initialValue:l,params:d}:null},binding:{reader:l=>Ta},controller:l=>{var i;const o=l.value;return o.rawValue.length>1||"multiline"in l.params&&l.params.multiline?new po(l.document,{formatter:Xs,lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:Tr.monitor.defaultLineCount,value:o,viewProps:l.viewProps}):new mo(l.document,{formatter:Xs,value:o,viewProps:l.viewProps})}};class Cf{constructor(i){this.onValueChange_=this.onValueChange_.bind(this),this.reader=i.reader,this.writer=i.writer,this.emitter=new b,this.value=i.value,this.value.emitter.on("change",this.onValueChange_),this.target=i.target,this.read()}read(){const i=this.target.read();i!==void 0&&(this.value.rawValue=this.reader(i))}write_(i){this.writer(this.target,i)}onValueChange_(i){this.write_(i.rawValue),this.emitter.emit("change",{options:i.options,rawValue:i.rawValue,sender:this})}}function Ef(l,i){const o=l.accept(i.target.read(),i.params);if(m(o))return null;const d=re,x={target:i.target,initialValue:o.initialValue,params:o.params},I=l.binding.reader(x),H=l.binding.constraint?l.binding.constraint(x):void 0,ae=B(I(o.initialValue),{constraint:H,equals:l.binding.equals}),Me=new Cf({reader:I,target:i.target,value:ae,writer:l.binding.writer(x)}),ke=d.optional.boolean(i.params.disabled).value,Ze=d.optional.boolean(i.params.hidden).value,Je=l.controller({constraint:H,document:i.document,initialValue:o.initialValue,params:o.params,value:Me.value,viewProps:bt.create({disabled:ke,hidden:Ze})}),On=d.optional.string(i.params.label).value;return new he(i.document,{binding:Me,blade:j(),props:Q.fromObject({label:On!=null?On:i.target.key}),valueController:Je})}class Af{constructor(i){this.onTick_=this.onTick_.bind(this),this.reader_=i.reader,this.target=i.target,this.emitter=new b,this.value=i.value,this.ticker=i.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const i=this.target.read();if(i===void 0)return;const o=this.value.rawValue,d=this.reader_(i);this.value.rawValue=Ed(o,d),this.emitter.emit("update",{rawValue:d,sender:this})}onTick_(i){this.read()}}function Pf(l,i){return i===0?new Yr:new ju(l,i!=null?i:Tr.monitor.defaultInterval)}function Tf(l,i){var o,d,x;const I=re,H=l.accept(i.target.read(),i.params);if(m(H))return null;const ae={target:i.target,initialValue:H.initialValue,params:H.params},Me=l.binding.reader(ae),ke=(d=(o=I.optional.number(i.params.bufferSize).value)!==null&&o!==void 0?o:l.binding.defaultBufferSize&&l.binding.defaultBufferSize(H.params))!==null&&d!==void 0?d:1,Ze=I.optional.number(i.params.interval).value,Je=new Af({reader:Me,target:i.target,ticker:Pf(i.document,Ze),value:Sd(ke)}),On=I.optional.boolean(i.params.disabled).value,Lr=I.optional.boolean(i.params.hidden).value,Dr=l.controller({document:i.document,params:H.params,value:Je.value,viewProps:bt.create({disabled:On,hidden:Lr})}),Wi=(x=I.optional.string(i.params.label).value)!==null&&x!==void 0?x:i.target.key;return new Ve(i.document,{binding:Je,blade:j(),props:Q.fromObject({label:Wi}),valueController:Dr})}class Lf{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(i){i.type==="blade"?this.pluginsMap_.blades.unshift(i):i.type==="input"?this.pluginsMap_.inputs.unshift(i):i.type==="monitor"&&this.pluginsMap_.monitors.unshift(i)}createInput(i,o,d){const x=o.read();if(m(x))throw new y({context:{key:o.key},type:"nomatchingcontroller"});const I=this.pluginsMap_.inputs.reduce((H,ae)=>H!=null?H:Ef(ae,{document:i,target:o,params:d}),null);if(I)return I;throw new y({context:{key:o.key},type:"nomatchingcontroller"})}createMonitor(i,o,d){const x=this.pluginsMap_.monitors.reduce((I,H)=>I!=null?I:Tf(H,{document:i,params:d,target:o}),null);if(x)return x;throw new y({context:{key:o.key},type:"nomatchingcontroller"})}createBlade(i,o){const d=this.pluginsMap_.blades.reduce((x,I)=>x!=null?x:Hs(I,{document:i,params:o}),null);if(!d)throw new y({type:"nomatchingview",context:{params:o}});return d}createBladeApi(i){if(i instanceof he)return new le(i);if(i instanceof Ve)return new ye(i);if(i instanceof Y)return new rt(i,this);const o=this.pluginsMap_.blades.reduce((d,x)=>d!=null?d:x.api({controller:i,pool:this}),null);if(!o)throw y.shouldNeverHappen();return o}}function Df(){const l=new Lf;return[rf,lf,ff,mf,Xh,Bh,zh,Nh,Nd,vf,Sf,Mf,Te,Fe,Ln,Ni].forEach(i=>{l.register(i)}),l}class bl extends r{constructor(i){super(i),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get options(){return this.controller_.valueController.props.get("options")}set options(i){this.controller_.valueController.props.set("options",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}}class wl extends r{constructor(i){super(i),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(i){this.controller_.valueController.sliderController.props.set("maxValue",i)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(i){this.controller_.valueController.sliderController.props.set("minValue",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}}class xl extends r{constructor(i){super(i),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(i){this.controller_.valueController.props.set("formatter",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const d=o.bind(this);return this.emitter_.on(i,x=>{d(x.event)}),this}}const Rf=function(){return{id:"list",type:"blade",accept(l){const i=re,o=ue(l,{options:i.required.custom(Qr),value:i.required.raw,view:i.required.constant("list"),label:i.optional.string});return o?{params:o}:null},controller(l){const i=new xr(l.document,{props:Q.fromObject({options:Oa(l.params.options)}),value:B(l.params.value),viewProps:l.viewProps});return new Ie(l.document,{blade:l.blade,props:Q.fromObject({label:l.params.label}),valueController:i})},api(l){return!(l.controller instanceof Ie)||!(l.controller.valueController instanceof xr)?null:new bl(l.controller)}}}();function If(l){return l.reduce((i,o)=>Object.assign(i,{[o.presetKey]:o.read()}),{})}function kf(l,i){l.forEach(o=>{const d=i[o.presetKey];d!==void 0&&o.write(d)})}class Of extends Yt{constructor(i,o){super(i,o)}get element(){return this.controller_.view.element}importPreset(i){const o=this.controller_.rackController.rack.find(he).map(d=>d.binding.target);kf(o,i),this.refresh()}exportPreset(){const i=this.controller_.rackController.rack.find(he).map(o=>o.binding.target);return If(i)}refresh(){this.controller_.rackController.rack.find(he).forEach(i=>{i.binding.read()}),this.controller_.rackController.rack.find(Ve).forEach(i=>{i.binding.read()})}}class Nf extends De{constructor(i,o){super(i,{expanded:o.expanded,blade:o.blade,props:o.props,root:!0,viewProps:o.viewProps})}}const Ff={id:"slider",type:"blade",accept(l){const i=re,o=ue(l,{max:i.required.number,min:i.required.number,view:i.required.constant("slider"),format:i.optional.function,label:i.optional.string,value:i.optional.number});return o?{params:o}:null},controller(l){var i,o;const d=(i=l.params.value)!==null&&i!==void 0?i:0,x=new Js(l.document,{baseStep:1,parser:Rn,sliderProps:Q.fromObject({maxValue:l.params.max,minValue:l.params.min}),textProps:Q.fromObject({draggingScale:Ui(void 0,d),formatter:(o=l.params.format)!==null&&o!==void 0?o:yd}),value:B(d),viewProps:l.viewProps});return new Ie(l.document,{blade:l.blade,props:Q.fromObject({label:l.params.label}),valueController:x})},api(l){return!(l.controller instanceof Ie)||!(l.controller.valueController instanceof Js)?null:new wl(l.controller)}},Vf=function(){return{id:"text",type:"blade",accept(l){const i=re,o=ue(l,{parse:i.required.function,value:i.required.raw,view:i.required.constant("text"),format:i.optional.function,label:i.optional.string});return o?{params:o}:null},controller(l){var i;const o=new Zr(l.document,{parser:l.params.parse,props:Q.fromObject({formatter:(i=l.params.format)!==null&&i!==void 0?i:d=>String(d)}),value:B(l.params.value),viewProps:l.viewProps});return new Ie(l.document,{blade:l.blade,props:Q.fromObject({label:l.params.label}),valueController:o})},api(l){return!(l.controller instanceof Ie)||!(l.controller.valueController instanceof Zr)?null:new xl(l.controller)}}}();function Uf(l){const i=l.createElement("div");return i.classList.add(S("dfw")()),l.body&&l.body.appendChild(i),i}function yl(l,i,o){if(l.querySelector(`style[data-tp-style=${i}]`))return;const d=l.createElement("style");d.dataset.tpStyle=i,d.textContent=o,l.head.appendChild(d)}class zf extends Of{constructor(i){var o,d;const x=i!=null?i:{},I=(o=x.document)!==null&&o!==void 0?o:mt(),H=Df(),ae=new Nf(I,{expanded:x.expanded,blade:j(),props:Q.fromObject({title:x.title}),viewProps:bt.create()});super(ae,H),this.pool_=H,this.containerElem_=(d=x.container)!==null&&d!==void 0?d:Uf(I),this.containerElem_.appendChild(this.element),this.doc_=I,this.usesDefaultWrapper_=!x.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw y.alreadyDisposed();return this.doc_}dispose(){const i=this.containerElem_;if(!i)throw y.alreadyDisposed();if(this.usesDefaultWrapper_){const o=i.parentElement;o&&o.removeChild(i)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(i){("plugin"in i?[i.plugin]:"plugins"in i?i.plugins:[]).forEach(d=>{this.pool_.register(d),this.embedPluginStyle_(d)})}embedPluginStyle_(i){i.css&&yl(this.document,`plugin-${i.id}`,i.css)}setUpDefaultPlugins_(){yl(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(i=>{this.embedPluginStyle_(i)}),this.registerPlugin({plugins:[Ff,Rf,Ni,Vf]})}}const Bf=new n("3.1.0");t.BladeApi=r,t.ButtonApi=v,t.FolderApi=Yt,t.InputBindingApi=le,t.ListApi=bl,t.MonitorBindingApi=ye,t.Pane=zf,t.SeparatorApi=Ye,t.SliderApi=wl,t.TabApi=Kn,t.TabPageApi=mn,t.TextApi=xl,t.TpChangeEvent=u,t.VERSION=Bf,Object.defineProperty(t,"__esModule",{value:!0})})})(la,la.exports);function Ew(s){let e,t;return e=new nw({props:{autoRotate:!0}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){et(e,n,r),t=!0},p:Kf,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function Aw(s){let e,t,n,r,a,u,c,h,f,p,m,g,w,y;return e=new Gr({props:{object:s[1]}}),n=new Gr({props:{object:s[2]}}),a=new J0({props:{position:{x:20,y:20,z:20},$$slots:{default:[Ew]},$$scope:{ctx:s}}}),c=new uw({props:{intensity:.2}}),f=new pw({props:{intensity:2,position:{x:10,y:20},shadow:{camera:{top:10}}}}),m=new ou({props:{geometry:new ma(4,64,64),material:new Uc({color:"red"}),castShadow:!0,position:s[0].position}}),w=new ou({props:{geometry:new Is(20,20),material:new Uc({color:"white",side:Hn}),rotation:{x:Sw*90},position:{y:-4},receiveShadow:!0}}),{c(){Qe(e.$$.fragment),t=Vt(),Qe(n.$$.fragment),r=Vt(),Qe(a.$$.fragment),u=Vt(),Qe(c.$$.fragment),h=Vt(),Qe(f.$$.fragment),p=Vt(),Qe(m.$$.fragment),g=Vt(),Qe(w.$$.fragment)},l(_){$e(e.$$.fragment,_),t=Ut(_),$e(n.$$.fragment,_),r=Ut(_),$e(a.$$.fragment,_),u=Ut(_),$e(c.$$.fragment,_),h=Ut(_),$e(f.$$.fragment,_),p=Ut(_),$e(m.$$.fragment,_),g=Ut(_),$e(w.$$.fragment,_)},m(_,v){et(e,_,v),kt(_,t,v),et(n,_,v),kt(_,r,v),et(a,_,v),kt(_,u,v),et(c,_,v),kt(_,h,v),et(f,_,v),kt(_,p,v),et(m,_,v),kt(_,g,v),et(w,_,v),y=!0},p(_,v){const b={};v&8&&(b.$$scope={dirty:v,ctx:_}),a.$set(b);const E={};v&1&&(E.position=_[0].position),m.$set(E)},i(_){y||(Le(e.$$.fragment,_),Le(n.$$.fragment,_),Le(a.$$.fragment,_),Le(c.$$.fragment,_),Le(f.$$.fragment,_),Le(m.$$.fragment,_),Le(w.$$.fragment,_),y=!0)},o(_){Re(e.$$.fragment,_),Re(n.$$.fragment,_),Re(a.$$.fragment,_),Re(c.$$.fragment,_),Re(f.$$.fragment,_),Re(m.$$.fragment,_),Re(w.$$.fragment,_),y=!1},d(_){tt(e,_),_&&Et(t),tt(n,_),_&&Et(r),tt(a,_),_&&Et(u),tt(c,_),_&&Et(h),tt(f,_),_&&Et(p),tt(m,_),_&&Et(g),tt(w,_)}}}function Pw(s){let e,t;return e=new D0({props:{$$slots:{default:[Aw]},$$scope:{ctx:s}}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){et(e,n,r),t=!0},p(n,[r]){const a={};r&9&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function Tw(s,e,t){const n=new e0(20,20),r=new t0(10),a={position:{x:0,y:0,z:0}};{const c=new la.exports.Pane({title:"Scene"}).addFolder({title:"Sphere"});c.addInput(a,"position"),c.on("change",({value:h})=>{t(0,a.position=h,a)})}return[a,n,r]}class Rw extends Tt{constructor(e){super(),Lt(this,e,Tw,Pw,Dt,{})}}export{Rw as default};
