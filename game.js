(()=>{var Xh="169";var Yp=0,Vu=1,$p=2;var af=1,qh=2,cn=3,Rn=0,We=1,Te=2,$e=0,Fs=1,ki=2,Gu=3,Wu=4,Yh=5,Ii=100,Zp=101,Kp=102,Jp=103,jp=104,lr=200,Qp=201,t0=202,e0=203,Mc=204,bc=205,ka=206,i0=207,La=208,n0=209,s0=210,r0=211,o0=212,a0=213,l0=214,Ec=0,Sc=1,wc=2,Ws=3,Tc=4,Ac=5,Rc=6,Cc=7,lf=0,c0=1,h0=2,An=0,$h=1,Zh=2,Kh=3,Jh=4,u0=5,hs=6,jh=7,Xu="attached",d0="detached",cf=300,Xs=301,qs=302,Pc=303,Ic=304,Da=306,di=1e3,es=1001,kc=1002,ni=1003,f0=1004;var go=1005;var Vi=1006,Ul=1007;var is=1008;var Gi=1009,hf=1010,uf=1011,Br=1012,Qh=1013,ns=1014,Ki=1015,ai=1016,tu=1017,eu=1018,Cn=1020,df=35902,ff=1021,pf=1022,yi=1023,mf=1024,gf=1025,Hs=1026,Pn=1027,xf=1028,iu=1029,vf=1030,nu=1031;var su=1033,Zo=33776,Ko=33777,Jo=33778,jo=33779,Lc=35840,Dc=35841,Uc=35842,Nc=35843,zc=36196,Bc=37492,Oc=37496,Fc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,$c=37816,Zc=37817,Kc=37818,Jc=37819,jc=37820,Qc=37821,Qo=36492,th=36494,eh=36495,yf=36283,ih=36284,nh=36285,sh=36286;var ea=2300,rh=2301,Nl=2302,qu=2400,Yu=2401,$u=2402;var p0=3200,m0=3201;var ru=0,g0=1,wn="",qe="srgb",Nn="srgb-linear",ou="display-p3",Ua="display-p3-linear",ia="linear",we="srgb",na="rec709",sa="p3";var _s=7680;var Zu=519,x0=512,v0=513,y0=514,_f=515,_0=516,M0=517,b0=518,E0=519,oh=35044;var Ku="300 es",un=2e3,ra=2001,In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zl=Math.PI/180,oa=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]+"-"+ri[t&255]+ri[t>>8&255]+"-"+ri[t>>16&15|64]+ri[t>>24&255]+"-"+ri[e&63|128]+ri[e>>8&255]+"-"+ri[e>>16&255]+ri[e>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function ii(s,t,e){return Math.max(t,Math.min(e,s))}function S0(s,t){return(s%t+t)%t}function Bl(s,t,e){return(1-e)*s+e*t}function Zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ii(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],v=n[4],b=n[7],R=n[2],T=n[5],A=n[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*v+l*T,r[6]=o*p+a*b+l*A,r[1]=c*x+h*y+u*R,r[4]=c*m+h*v+u*T,r[7]=c*p+h*b+u*A,r[2]=f*x+d*y+g*R,r[5]=f*m+d*v+g*T,r[8]=f*p+d*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new jt;function Mf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function w0(){let s=aa("canvas");return s.style.display="block",s}var Ju={};function ta(s){s in Ju||(Ju[s]=!0,console.warn(s))}function T0(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function A0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function R0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ju=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qu=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[Nn]:{transfer:ia,primaries:na,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[qe]:{transfer:we,primaries:na,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ua]:{transfer:ia,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Qu),fromReference:s=>s.applyMatrix3(ju)},[ou]:{transfer:we,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Qu),fromReference:s=>s.applyMatrix3(ju).convertLinearToSRGB()}},C0=new Set([Nn,Ua]),de={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!C0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Er[t].toReference,n=Er[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Er[s].primaries},getTransfer:function(s){return s===wn?ia:Er[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Er[t].luminanceCoefficients)}};function Vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ms,ah=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=aa("canvas")),Ms.width=t.width,Ms.height=t.height;let i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vs(e[i]/255)*255):e[i]=Vs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},P0=0,la=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Hl(n[o].image)):r.push(Hl(n[o]))}else r=Hl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Hl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ah.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var I0=0,_i=class s extends In{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=es,n=es,r=Vi,o=is,a=yi,l=Gi,c=s.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ji(),this.name="",this.source=new la(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=cf;_i.DEFAULT_ANISOTROPY=1;var me=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(d+1)/2,R=(p+1)/2,T=(h+f)/4,A=(u+x)/4,P=(g+m)/4;return v>b&&v>R?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):b>R?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=T/n,r=P/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=A/r,n=P/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lh=class extends In{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _i(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new la(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends lh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ca=class extends _i{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends _i{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let b=a*y;if(l=l*m+f*b,c=c*m+d*b,h=h*m+g*b,u=u*m+x*b,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ii(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ii(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new _,td=new Wi,kn=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oi):Oi.fromBufferAttribute(r,o),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),vo.subVectors(this.max,Sr),bs.subVectors(t.a,Sr),Es.subVectors(t.b,Sr),Ss.subVectors(t.c,Sr),yn.subVectors(Es,bs),_n.subVectors(Ss,Es),Yn.subVectors(bs,Ss);let e=[0,-yn.z,yn.y,0,-_n.z,_n.y,0,-Yn.z,Yn.y,yn.z,0,-yn.x,_n.z,0,-_n.x,Yn.z,0,-Yn.x,-yn.y,yn.x,0,-_n.y,_n.x,0,-Yn.y,Yn.x,0];return!Gl(e,bs,Es,Ss,vo)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,bs,Es,Ss,vo))?!1:(yo.crossVectors(yn,_n),e=[yo.x,yo.y,yo.z],Gl(e,bs,Es,Ss,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new _,new _,new _,new _,new _,new _,new _,new _],Oi=new _,xo=new kn,bs=new _,Es=new _,Ss=new _,yn=new _,_n=new _,Yn=new _,Sr=new _,vo=new _,yo=new _,$n=new _;function Gl(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){$n.fromArray(s,r);let a=n.x*Math.abs($n.x)+n.y*Math.abs($n.y)+n.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=i.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var k0=new kn,wr=new _,Wl=new _,dn=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):k0.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(wr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Wl)),this.expandByPoint(wr.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},rn=new _,Xl=new _,_o=new _,Mn=new _,ql=new _,Mo=new _,Yl=new _,Ys=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Xl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Mn.dot(this.direction),l=-Mn.dot(_o),c=Mn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Xl).addScaledVector(_o,f),d}intersectSphere(t,e){rn.subVectors(t.center,this.origin);let i=rn.dot(this.direction),n=rn.dot(rn)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,i,n,r){ql.subVectors(e,t),Mo.subVectors(i,t),Yl.crossVectors(ql,Mo);let o=this.direction.dot(Yl),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);let l=a*this.direction.dot(Mo.crossVectors(Mn,Mo));if(l<0)return null;let c=a*this.direction.dot(ql.cross(Mn));if(c<0||l+c>o)return null;let h=-a*Mn.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,D0)}lookAt(t,e,i){let n=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),bn.crossVectors(i,wi),bn.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),bn.crossVectors(i,wi)),bn.normalize(),bo.crossVectors(wi,bn),n[0]=bn.x,n[4]=bo.x,n[8]=wi.x,n[1]=bn.y,n[5]=bo.y,n[9]=wi.y,n[2]=bn.z,n[6]=bo.z,n[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],b=i[11],R=i[15],T=n[0],A=n[4],P=n[8],B=n[12],M=n[1],E=n[5],L=n[9],D=n[13],H=n[2],tt=n[6],V=n[10],st=n[14],X=n[3],lt=n[7],ut=n[11],gt=n[15];return r[0]=o*T+a*M+l*H+c*X,r[4]=o*A+a*E+l*tt+c*lt,r[8]=o*P+a*L+l*V+c*ut,r[12]=o*B+a*D+l*st+c*gt,r[1]=h*T+u*M+f*H+d*X,r[5]=h*A+u*E+f*tt+d*lt,r[9]=h*P+u*L+f*V+d*ut,r[13]=h*B+u*D+f*st+d*gt,r[2]=g*T+x*M+m*H+p*X,r[6]=g*A+x*E+m*tt+p*lt,r[10]=g*P+x*L+m*V+p*ut,r[14]=g*B+x*D+m*st+p*gt,r[3]=y*T+v*M+b*H+R*X,r[7]=y*A+v*E+b*tt+R*lt,r[11]=y*P+v*L+b*V+R*ut,r[15]=y*B+v*D+b*st+R*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,v=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,b=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=e*y+i*v+n*b+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(x*f*r-u*m*r-x*n*d+i*m*d+u*n*p-i*f*p)*A,t[2]=(a*m*r-x*l*r+x*n*c-i*m*c-a*n*p+i*l*p)*A,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*A,t[4]=v*A,t[5]=(h*m*r-g*f*r+g*n*d-e*m*d-h*n*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*d+e*l*d)*A,t[8]=b*A,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*p-e*u*p)*A,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*A,t[12]=R*A,t[13]=(h*x*n-g*u*n+g*i*f-e*x*f-h*i*m+e*u*m)*A,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*A,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,v=l*h,b=l*u,R=i.x,T=i.y,A=i.z;return n[0]=(1-(x+p))*R,n[1]=(d+b)*R,n[2]=(g-v)*R,n[3]=0,n[4]=(d-b)*T,n[5]=(1-(f+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+v)*A,n[9]=(m-y)*A,n[10]=(1-(f+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=ws.set(n[0],n[1],n[2]).length(),o=ws.set(n[4],n[5],n[6]).length(),a=ws.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Fi.copy(this);let c=1/r,h=1/o,u=1/a;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,e.setFromRotationMatrix(Fi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=un){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,g;if(a===un)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ra)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=un){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),f=(e+t)*c,d=(i+n)*h,g,x;if(a===un)g=(o+r)*u,x=-2*u;else if(a===ra)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ws=new _,Fi=new Wt,L0=new _(0,0,0),D0=new _(1,1,1),bn=new _,bo=new _,wi=new _,ed=new Wt,id=new Wi,Li=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(ii(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ii(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ii(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ii(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ii(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ii(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U0=0,nd=new _,Ts=new Wi,on=new Wt,Eo=new _,Tr=new _,N0=new _,z0=new Wi,sd=new _(1,0,0),rd=new _(0,1,0),od=new _(0,0,1),ad={type:"added"},B0={type:"removed"},As={type:"childadded",child:null},$l={type:"childremoved",child:null},Be=class s extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new _,e=new Li,i=new Wi,n=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Wt},normalMatrix:{value:new jt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(rd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return nd.copy(t).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(rd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Tr,Eo,this.up):on.lookAt(Eo,Tr,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),Ts.setFromRotationMatrix(on),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B0),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,N0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Be.DEFAULT_UP=new _(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new _,an=new _,Zl=new _,ln=new _,Rs=new _,Cs=new _,ld=new _,Kl=new _,Jl=new _,jl=new _,Ql=new me,tc=new me,ec=new me,Tn=class s{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Hi.subVectors(t,e),n.cross(Hi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Hi.subVectors(n,e),an.subVectors(i,e),Zl.subVectors(t,e);let o=Hi.dot(Hi),a=Hi.dot(an),l=Hi.dot(Zl),c=an.dot(an),h=an.dot(Zl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,i),ec.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,i,n){return Hi.subVectors(i,e),an.subVectors(t,e),Hi.cross(an).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Hi.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Rs.subVectors(n,i),Cs.subVectors(r,i),Kl.subVectors(t,i);let l=Rs.dot(Kl),c=Cs.dot(Kl);if(l<=0&&c<=0)return e.copy(i);Jl.subVectors(t,n);let h=Rs.dot(Jl),u=Cs.dot(Jl);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Rs,o);jl.subVectors(t,r);let d=Rs.dot(jl),g=Cs.dot(jl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Cs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ld.subVectors(r,n),a=(u-h)/(u-h+(d-g)),e.copy(n).addScaledVector(ld,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},So={h:0,s:0,l:0};function ic(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=de.workingColorSpace){if(t=S0(t,1),e=ii(e,0,1),i=ii(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ic(o,r,t+1/3),this.g=ic(o,r,t),this.b=ic(o,r,t-1/3)}return de.toWorkingColorSpace(this,n),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=bf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=Fl(t.r),this.g=Fl(t.g),this.b=Fl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return de.fromWorkingColorSpace(oi.copy(this),t),Math.round(ii(oi.r*255,0,255))*65536+Math.round(ii(oi.g*255,0,255))*256+Math.round(ii(oi.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(oi.copy(this),e);let i=oi.r,n=oi.g,r=oi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=qe){de.fromWorkingColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,n=oi.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(So);let i=Bl(En.h,So.h,e),n=Bl(En.s,So.s,e),r=Bl(En.l,So.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new Pt;Pt.NAMES=bf;var O0=0,Xi=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Fs,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mc&&(i.blendSrc=this.blendSrc),this.blendDst!==bc&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$t=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new _,wo=new it,Ae=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=oh,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}};var ua=class extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var da=class extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}},F0=0,Pi=new Wt,nc=new Be,Ps=new _,Ti=new kn,Ar=new kn,Je=new _,he=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?da:ua)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Ti.min,Ar.min),Ti.expandByPoint(Je),Je.addVectors(Ti.max,Ar.max),Ti.expandByPoint(Je)):(Ti.expandByPoint(Ar.min),Ti.expandByPoint(Ar.max))}Ti.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),Je.add(Ps)),n=Math.max(n,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new _,l[P]=new _;let c=new _,h=new _,u=new _,f=new it,d=new it,g=new it,x=new _,m=new _;function p(P,B,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,B),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,B),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(x),a[B].add(x),a[M].add(x),l[P].add(m),l[B].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,B=y.length;P<B;++P){let M=y[P],E=M.start,L=M.count;for(let D=E,H=E+L;D<H;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new _,b=new _,R=new _,T=new _;function A(P){R.fromBufferAttribute(n,P),T.copy(R);let B=a[P];v.copy(B),v.sub(R.multiplyScalar(R.dot(B))).normalize(),b.crossVectors(T,B);let E=b.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,B=y.length;P<B;++P){let M=y[P],E=M.start,L=M.count;for(let D=E,H=E+L;D<H;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new _,r=new _,o=new _,a=new _,l=new _,c=new _,h=new _,u=new _;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cd=new Wt,Zn=new Ys,To=new dn,hd=new _,Ao=new _,Ro=new _,Co=new _,sc=new _,Po=new _,ud=new _,Io=new _,Y=class extends Be{constructor(t=new he,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sc.fromBufferAttribute(u,t),o?Po.addScaledVector(sc,h):Po.addScaledVector(sc.sub(e),h))}e.add(Po)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(To.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(To,hd)===null||Zn.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(cd.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(cd),!(i.boundingBox!==null&&Zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,R=v;b<R;b+=3){let T=a.getX(b),A=a.getX(b+1),P=a.getX(b+2);n=ko(this,p,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);n=ko(this,o,t,i,c,h,u,y,v,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,R=v;b<R;b+=3){let T=b,A=b+1,P=b+2;n=ko(this,p,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,b=m+2;n=ko(this,o,t,i,c,h,u,y,v,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function H0(s,t,e,i,n,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Rn,a),l===null)return null;Io.copy(a),Io.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:s}}function ko(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Ao),s.getVertexPosition(l,Ro),s.getVertexPosition(c,Co);let h=H0(s,t,e,i,Ao,Ro,Co,ud);if(h){let u=new _;Tn.getBarycoord(ud,Ao,Ro,Co,u),n&&(h.uv=Tn.getInterpolatedAttribute(n,a,l,c,u,new it)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};Tn.getNormal(Ao,Ro,Co,f.normal),h.face=f,h.barycoord=u}return h}var fe=class s extends he{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(x,m,p,y,v,b,R,T,A,P,B){let M=b/A,E=R/P,L=b/2,D=R/2,H=T/2,tt=A+1,V=P+1,st=0,X=0,lt=new _;for(let ut=0;ut<V;ut++){let gt=ut*E-D;for(let kt=0;kt<tt;kt++){let Qt=kt*M-L;lt[x]=Qt*y,lt[m]=gt*v,lt[p]=H,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[p]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(kt/A),u.push(1-ut/P),st+=1}}for(let ut=0;ut<P;ut++)for(let gt=0;gt<A;gt++){let kt=f+gt+tt*ut,Qt=f+gt+tt*(ut+1),$=f+(gt+1)+tt*(ut+1),O=f+(gt+1)+tt*ut;l.push(kt,Qt,O),l.push(Qt,$,O),X+=6}a.addGroup(d,X,B),d+=X,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $s(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ui(s){let t={};for(let e=0;e<s.length;e++){let i=$s(s[e]);for(let n in i)t[n]=i[n]}return t}function V0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ef(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var li={clone:$s,merge:ui},G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=V0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},fa=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sn=new _,dd=new it,fd=new it,Ye=class extends fa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,dd,fd),e.subVectors(fd,dd)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zl*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,ks=1,hh=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ye(Is,ks,t,e);n.layers=this.layers,this.add(n);let r=new Ye(Is,ks,t,e);r.layers=this.layers,this.add(r);let o=new Ye(Is,ks,t,e);o.layers=this.layers,this.add(o);let a=new Ye(Is,ks,t,e);a.layers=this.layers,this.add(a);let l=new Ye(Is,ks,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Is,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===un)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pa=class extends _i{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new pa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new fe(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:$e});r.uniforms.tEquirect.value=e;let o=new Y(n,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Vi),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},rc=new _,X0=new _,q0=new jt,hn=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=rc.subVectors(i,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(rc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||q0.getNormalMatrix(t),n=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new dn,Lo=new _,Or=class{constructor(t=new hn,e=new hn,i=new hn,n=new hn,r=new hn,o=new hn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=un){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],v=n[14],b=n[15];if(i[0].setComponents(l-r,f-c,m-d,b-p).normalize(),i[1].setComponents(l+r,f+c,m+d,b+p).normalize(),i[2].setComponents(l+o,f+h,m+g,b+y).normalize(),i[3].setComponents(l-o,f-h,m-g,b-y).normalize(),i[4].setComponents(l-a,f-u,m-x,b-v).normalize(),e===un)i[5].setComponents(l+a,f+u,m+x,b+v).normalize();else if(e===ra)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Lo.x=n.normal.x>0?t.max.x:t.min.x,Lo.y=n.normal.y>0?t.max.y:t.min.y,Lo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Y0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var se=class s extends he{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let v=0;v<c;v++){let b=v*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;d.push(v,b,T),d.push(b,R,T)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},$0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ng=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ix=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dx=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gx=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:$0,alphahash_pars_fragment:Z0,alphamap_fragment:K0,alphamap_pars_fragment:J0,alphatest_fragment:j0,alphatest_pars_fragment:Q0,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:im,batching_vertex:nm,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:_m,displacementmap_vertex:Mm,emissivemap_fragment:bm,emissivemap_pars_fragment:Em,colorspace_fragment:Sm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Fm,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:km,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Bm,lights_pars_begin:Om,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:$m,lights_fragment_end:Zm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ig,map_particle_pars_fragment:ng,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:_g,opaque_fragment:Mg,packing:bg,premultiplied_alpha_fragment:Eg,project_vertex:Sg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:kg,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:zg,specularmap_pars_fragment:Bg,tonemapping_fragment:Og,tonemapping_pars_fragment:Fg,transmission_fragment:Hg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Kg,cube_vert:Jg,cube_frag:jg,depth_vert:Qg,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:ix,equirect_vert:nx,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:yx,meshtoon_frag:_x,points_vert:Mx,points_frag:bx,shadow_vert:Ex,shadow_frag:Sx,sprite_vert:wx,sprite_frag:Tx},ft={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},$i={basic:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ui([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ui([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ui([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ui([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ui([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ui([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ui([ft.common,ft.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ui([ft.lights,ft.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};$i.physical={uniforms:ui([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Do={r:0,b:0,g:0},Jn=new Li,Ax=new Wt;function Rx(s,t,e,i,n,r,o){let a=new Pt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===Da)?(h===void 0&&(h=new Y(new fe(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:$s($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Jn.copy(v.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Jn)),h.material.toneMapped=de.getTransfer(b.colorSpace)!==we,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Y(new se(2,2),new be({name:"BackgroundMaterial",uniforms:$s($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=de.getTransfer(b.colorSpace)!==we,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Do,Ef(s)),i.buffers.color.setClear(Do.r,Do.g,Do.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function Cx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(M,E,L,D,H){let tt=!1,V=u(D,L,E);r!==V&&(r=V,c(r.object)),tt=d(M,D,L,H),tt&&g(M,D,L,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,b(M,E,L,D),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,E,L){let D=L.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let tt=H[E.id];tt===void 0&&(tt={},H[E.id]=tt);let V=tt[D];return V===void 0&&(V=f(l()),tt[D]=V),V}function f(M){let E=[],L=[],D=[];for(let H=0;H<e;H++)E[H]=0,L[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,E,L,D){let H=r.attributes,tt=E.attributes,V=0,st=L.getAttributes();for(let X in st)if(st[X].location>=0){let ut=H[X],gt=tt[X];if(gt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function g(M,E,L,D){let H={},tt=E.attributes,V=0,st=L.getAttributes();for(let X in st)if(st[X].location>=0){let ut=tt[X];ut===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),H[X]=gt,V++}r.attributes=H,r.attributesNum=V,r.index=D}function x(){let M=r.newAttributes;for(let E=0,L=M.length;E<L;E++)M[E]=0}function m(M){p(M,0)}function p(M,E){let L=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;L[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),H[M]!==E&&(s.vertexAttribDivisor(M,E),H[M]=E)}function y(){let M=r.newAttributes,E=r.enabledAttributes;for(let L=0,D=E.length;L<D;L++)E[L]!==M[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function v(M,E,L,D,H,tt,V){V===!0?s.vertexAttribIPointer(M,E,L,H,tt):s.vertexAttribPointer(M,E,L,D,H,tt)}function b(M,E,L,D){x();let H=D.attributes,tt=L.getAttributes(),V=E.defaultAttributeValues;for(let st in tt){let X=tt[st];if(X.location>=0){let lt=H[st];if(lt===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){let ut=lt.normalized,gt=lt.itemSize,kt=t.get(lt);if(kt===void 0)continue;let Qt=kt.buffer,$=kt.type,O=kt.bytesPerElement,j=$===s.INT||$===s.UNSIGNED_INT||lt.gpuType===Qh;if(lt.isInterleavedBufferAttribute){let nt=lt.data,mt=nt.stride,xt=lt.offset;if(nt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Dt=0;Dt<X.locationSize;Dt++)v(X.location+Dt,gt/X.locationSize,$,ut,mt*O,(xt+gt/X.locationSize*Dt)*O,j)}else{if(lt.isInstancedBufferAttribute){for(let nt=0;nt<X.locationSize;nt++)p(X.location+nt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let nt=0;nt<X.locationSize;nt++)m(X.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let nt=0;nt<X.locationSize;nt++)v(X.location+nt,gt/X.locationSize,$,ut,gt*O,gt/X.locationSize*nt*O,j)}}else if(V!==void 0){let ut=V[st];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(X.location,ut);break;case 3:s.vertexAttrib3fv(X.location,ut);break;case 4:s.vertexAttrib4fv(X.location,ut);break;default:s.vertexAttrib1fv(X.location,ut)}}}}y()}function R(){P();for(let M in i){let E=i[M];for(let L in E){let D=E[L];for(let H in D)h(D[H].object),delete D[H];delete E[L]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let E=i[M.id];for(let L in E){let D=E[L];for(let H in D)h(D[H].object),delete D[H];delete E[L]}delete i[M.id]}function A(M){for(let E in i){let L=i[E];if(L[M.id]===void 0)continue;let D=L[M.id];for(let H in D)h(D[H].object),delete D[H];delete L[M.id]}}function P(){B(),o=!0,r!==n&&(r=n,c(r.object))}function B(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Px(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ix(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==yi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Gi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ki&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:R,maxSamples:T}}function kx(s){let t=this,e=null,i=0,n=!1,r=!1,o=new hn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,b=p.clippingState||null;l.value=b,b=h(g,f,v,d);for(let R=0;R!==v;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=d;v!==x;++v,b+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Lx(s){let t=new WeakMap;function e(o,a){return a===Pc?o.mapping=Xs:a===Ic&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Ic)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Zs=class extends fa{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bs=4,pd=[.125,.215,.35,.446,.526,.582],ts=20,oc=new Zs,md=new Pt,ac=null,lc=0,cc=0,hc=!1,Qn=(1+Math.sqrt(5))/2,Ls=1/Qn,gd=[new _(-Qn,Ls,0),new _(Qn,Ls,0),new _(-Ls,0,Qn),new _(Ls,0,Qn),new _(0,Qn,-Ls),new _(0,Qn,Ls),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],Ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,lc,cc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:ai,format:yi,colorSpace:Nn,depthBuffer:!1},n=xd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dx(r)),this._blurMaterial=Ux(r,t,e)}return n}_compileMaterial(t){let e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,oc)}_sceneToCubeUV(t,e,i,n){let a=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(md),h.toneMapping=An,h.autoClear=!1;let d=new $t({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Y(new fe,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(md),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Uo(n,y*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Xs||t.mapping===qs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Uo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,oc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gd[(n-r-1)%gd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ts-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);let p=[],y=0;for(let A=0;A<ts;++A){let P=A/x,B=Math.exp(-P*P/2);p.push(B),A===0?y+=B:A<m&&(y+=2*B)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let b=this._sizeLods[n],R=3*b*(n>v-Bs?n-v+Bs:0),T=4*(this._cubeSize-b);Uo(e,R,T,3*b,2*b),l.setRenderTarget(e),l.render(u,oc)}};function Dx(s){let t=[],e=[],i=[],n=s,r=s-Bs+1+pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Bs?l=pd[o-s+Bs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,P=T>2?0:-1,B=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(B,x*g*T),v.set(f,m*g*T);let M=[T,T,T,T,T,T];b.set(M,p*g*T)}let R=new he;R.setAttribute("position",new Ae(y,x)),R.setAttribute("uv",new Ae(v,m)),R.setAttribute("faceIndex",new Ae(b,p)),t.push(R),n>Bs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xd(s,t,e){let i=new Xe(s,t,e);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ux(s,t,e){let i=new Float32Array(ts),n=new _(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:au(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function vd(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function yd(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function Nx(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pc||l===Ic,h=l===Xs||l===qs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ks(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Ks(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zx(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&ta("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Bx(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,b=y.length;v<b;v+=3){let R=y[v+0],T=y[v+1],A=y[v+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let R=v+0,T=v+1,A=v+2;f.push(R,T,T,A,A,R)}}else return;let m=new(Mf(f)?da:ua)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ox(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y];for(let y=0;y<x.length;y++)e.update(p,i,x[y])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Hx(s,t,e){let i=new WeakMap,n=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let B=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*R*4*u),A=new ca(T,b,R,u);A.type=Ki,A.needsUpdate=!0;let P=v*4;for(let M=0;M<u;M++){let E=m[M],L=p[M],D=y[M],H=b*R*4*M;for(let tt=0;tt<E.count;tt++){let V=tt*P;d===!0&&(n.fromBufferAttribute(E,tt),T[H+V+0]=n.x,T[H+V+1]=n.y,T[H+V+2]=n.z,T[H+V+3]=0),g===!0&&(n.fromBufferAttribute(L,tt),T[H+V+4]=n.x,T[H+V+5]=n.y,T[H+V+6]=n.z,T[H+V+7]=0),x===!0&&(n.fromBufferAttribute(D,tt),T[H+V+8]=n.x,T[H+V+9]=n.y,T[H+V+10]=n.z,T[H+V+11]=D.itemSize===4?n.w:1)}}f={count:u,texture:A,size:new it(b,R)},i.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Vx(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Js=class extends _i{constructor(t,e,i,n,r,o,a,l,c,h=Hs){if(h!==Hs&&h!==Pn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=ns),i===void 0&&h===Pn&&(i=Cn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wf=new _i,_d=new Js(1,1),Tf=new ca,Af=new ch,Rf=new pa,Md=[],bd=[],Ed=new Float32Array(16),Sd=new Float32Array(9),wd=new Float32Array(4);function cr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Md[n];if(r===void 0&&(r=new Float32Array(n),Md[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Na(s,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function Yx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,i))return;wd.set(i),s.uniformMatrix2fv(this.addr,!1,wd),Ke(e,i)}}function $x(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,i))return;Sd.set(i),s.uniformMatrix3fv(this.addr,!1,Sd),Ke(e,i)}}function Zx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,i))return;Ed.set(i),s.uniformMatrix4fv(this.addr,!1,Ed),Ke(e,i)}}function Kx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function Qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function tv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ev(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function iv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function sv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=_f,r=_d):r=wf,e.setTexture2D(t||r,n)}function rv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Af,n)}function ov(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Rf,n)}function av(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Tf,n)}function lv(s){switch(s){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return tv;case 36294:return ev;case 36295:return iv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}function cv(s,t){s.uniform1fv(this.addr,t)}function hv(s,t){let e=cr(t,this.size,2);s.uniform2fv(this.addr,e)}function uv(s,t){let e=cr(t,this.size,3);s.uniform3fv(this.addr,e)}function dv(s,t){let e=cr(t,this.size,4);s.uniform4fv(this.addr,e)}function fv(s,t){let e=cr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pv(s,t){let e=cr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mv(s,t){let e=cr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gv(s,t){s.uniform1iv(this.addr,t)}function xv(s,t){s.uniform2iv(this.addr,t)}function vv(s,t){s.uniform3iv(this.addr,t)}function yv(s,t){s.uniform4iv(this.addr,t)}function _v(s,t){s.uniform1uiv(this.addr,t)}function Mv(s,t){s.uniform2uiv(this.addr,t)}function bv(s,t){s.uniform3uiv(this.addr,t)}function Ev(s,t){s.uniform4uiv(this.addr,t)}function Sv(s,t,e){let i=this.cache,n=t.length,r=Na(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||wf,r[o])}function wv(s,t,e){let i=this.cache,n=t.length,r=Na(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Af,r[o])}function Tv(s,t,e){let i=this.cache,n=t.length,r=Na(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Rf,r[o])}function Av(s,t,e){let i=this.cache,n=t.length,r=Na(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Tf,r[o])}function Rv(s){switch(s){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return _v;case 36294:return Mv;case 36295:return bv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}var dh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}},fh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Td(s,t){s.seq.push(t),s.map[t.id]=t}function Cv(s,t,e){let i=s.name,n=i.length;for(uc.lastIndex=0;;){let r=uc.exec(i),o=uc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Td(e,c===void 0?new dh(a,s,t):new fh(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ph(a),Td(e,u)),e=u}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Cv(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Ad(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Pv=37297,Iv=0;function kv(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Lv(s){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(s),i;switch(t===e?i="":t===sa&&e===na?i="LinearDisplayP3ToLinearSRGB":t===na&&e===sa&&(i="LinearSRGBToLinearDisplayP3"),s){case Nn:case Ua:return[i,"LinearTransferOETF"];case qe:case ou:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Rd(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+kv(s.getShaderSource(t),o)}else return n}function Dv(s,t){let e=Lv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Uv(s,t){let e;switch(t){case $h:e="Linear";break;case Zh:e="Reinhard";break;case Kh:e="Cineon";break;case Jh:e="ACESFilmic";break;case hs:e="AgX";break;case jh:e="Neutral";break;case u0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var No=new _;function Nv(){de.getLuminanceCoefficients(No);let s=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Bv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ov(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Lr(s){return s!==""}function Cd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(s){return s.replace(Fv,Vv)}var Hv=new Map;function Vv(s,t){let e=Jt[t];if(e===void 0){let i=Hv.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mh(e)}var Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(s){return s.replace(Gv,Wv)}function Wv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function kd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===af?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function qv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lf:t="ENVMAP_BLENDING_MULTIPLY";break;case c0:t="ENVMAP_BLENDING_MIX";break;case h0:t="ENVMAP_BLENDING_ADD";break}return t}function Zv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kv(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Xv(e),c=qv(e),h=Yv(e),u=$v(e),f=Zv(e),d=zv(e),g=Bv(r),x=n.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Jt.tonemapping_pars_fragment:"",e.toneMapping!==An?Uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Dv("linearToOutputTexel",e.outputColorSpace),Nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=mh(o),o=Cd(o,e),o=Pd(o,e),a=mh(a),a=Cd(a,e),a=Pd(a,e),o=Id(o),a=Id(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,b=y+p+a,R=Ad(n,n.VERTEX_SHADER,v),T=Ad(n,n.FRAGMENT_SHADER,b);n.attachShader(x,R),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(E){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(x).trim(),D=n.getShaderInfoLog(R).trim(),H=n.getShaderInfoLog(T).trim(),tt=!0,V=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,R,T);else{let st=Rd(n,R,"vertex"),X=Rd(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+st+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||H==="")&&(V=!1);V&&(E.diagnostics={runnable:tt,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:H,prefix:p}})}n.deleteShader(R),n.deleteShader(T),P=new Gs(n,x),B=Ov(n,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let B;this.getAttributes=function(){return B===void 0&&A(this),B};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(x,Pv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Jv=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xh(t),e.set(t,i)),i}},xh=class{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}};function jv(s,t,e,i,n,r,o){let a=new ha,l=new gh,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.reverseDepthBuffer,d=n.vertexTextures,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,E,L,D,H){let tt=D.fog,V=H.geometry,st=M.isMeshStandardMaterial?D.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||st),lt=X&&X.mapping===Da?X.image.height:null,ut=x[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,kt=gt!==void 0?gt.length:0,Qt=0;V.morphAttributes.position!==void 0&&(Qt=1),V.morphAttributes.normal!==void 0&&(Qt=2),V.morphAttributes.color!==void 0&&(Qt=3);let $,O,j,nt;if(ut){let vi=$i[ut];$=vi.vertexShader,O=vi.fragmentShader}else $=M.vertexShader,O=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),nt=l.getFragmentShaderID(M);let mt=s.getRenderTarget(),xt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,Kt=!!M.map,Tt=!!M.matcap,I=!!X,xe=!!M.aoMap,ee=!!M.lightMap,oe=!!M.bumpMap,Nt=!!M.normalMap,_e=!!M.displacementMap,zt=!!M.emissiveMap,C=!!M.metalnessMap,S=!!M.roughnessMap,F=M.anisotropy>0,J=M.clearcoat>0,rt=M.dispersion>0,K=M.iridescence>0,wt=M.sheen>0,dt=M.transmission>0,vt=F&&!!M.anisotropyMap,ie=J&&!!M.clearcoatMap,at=J&&!!M.clearcoatNormalMap,yt=J&&!!M.clearcoatRoughnessMap,Ft=K&&!!M.iridescenceMap,Ht=K&&!!M.iridescenceThicknessMap,Et=wt&&!!M.sheenColorMap,ae=wt&&!!M.sheenRoughnessMap,Yt=!!M.specularMap,ue=!!M.specularColorMap,k=!!M.specularIntensityMap,pt=dt&&!!M.transmissionMap,q=dt&&!!M.thicknessMap,Q=!!M.gradientMap,_t=!!M.alphaMap,bt=M.alphaTest>0,ce=!!M.alphaHash,Ve=!!M.extensions,xi=An;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(xi=s.toneMapping);let pe={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:O,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:xt,instancingColor:xt&&H.instanceColor!==null,instancingMorph:xt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Nn,alphaToCoverage:!!M.alphaToCoverage,map:Kt,matcap:Tt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:lt,aoMap:xe,lightMap:ee,bumpMap:oe,normalMap:Nt,displacementMap:d&&_e,emissiveMap:zt,normalMapObjectSpace:Nt&&M.normalMapType===g0,normalMapTangentSpace:Nt&&M.normalMapType===ru,metalnessMap:C,roughnessMap:S,anisotropy:F,anisotropyMap:vt,clearcoat:J,clearcoatMap:ie,clearcoatNormalMap:at,clearcoatRoughnessMap:yt,dispersion:rt,iridescence:K,iridescenceMap:Ft,iridescenceThicknessMap:Ht,sheen:wt,sheenColorMap:Et,sheenRoughnessMap:ae,specularMap:Yt,specularColorMap:ue,specularIntensityMap:k,transmission:dt,transmissionMap:pt,thicknessMap:q,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:_t,alphaTest:bt,alphaHash:ce,combine:M.combine,mapUv:Kt&&m(M.map.channel),aoMapUv:xe&&m(M.aoMap.channel),lightMapUv:ee&&m(M.lightMap.channel),bumpMapUv:oe&&m(M.bumpMap.channel),normalMapUv:Nt&&m(M.normalMap.channel),displacementMapUv:_e&&m(M.displacementMap.channel),emissiveMapUv:zt&&m(M.emissiveMap.channel),metalnessMapUv:C&&m(M.metalnessMap.channel),roughnessMapUv:S&&m(M.roughnessMap.channel),anisotropyMapUv:vt&&m(M.anisotropyMap.channel),clearcoatMapUv:ie&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(M.sheenRoughnessMap.channel),specularMapUv:Yt&&m(M.specularMap.channel),specularColorMapUv:ue&&m(M.specularColorMap.channel),specularIntensityMapUv:k&&m(M.specularIntensityMap.channel),transmissionMapUv:pt&&m(M.transmissionMap.channel),thicknessMapUv:q&&m(M.thicknessMap.channel),alphaMapUv:_t&&m(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Nt||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(Kt||_t),fog:!!tt,useFog:M.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xi,decodeVideoTexture:Kt&&M.map.isVideoTexture===!0&&de.getTransfer(M.map.colorSpace)===we,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Te,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function y(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(E,M),b(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function R(M){let E=x[M.type],L;if(E){let D=$i[E];L=li.clone(D.uniforms)}else L=M.uniforms;return L}function T(M,E){let L;for(let D=0,H=h.length;D<H;D++){let tt=h[D];if(tt.cacheKey===E){L=tt,++L.usedTimes;break}}return L===void 0&&(L=new Kv(s,E,M,r),h.push(L)),L}function A(M){if(--M.usedTimes===0){let E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:B}}function Qv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ty(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ld(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dd(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||ty),i.length>1&&i.sort(f||Ld),n.length>1&&n.sort(f||Ld)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function ey(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Dd,s.set(i,[o])):n>=r.length?(o=new Dd,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function iy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new Pt};break;case"SpotLight":e={position:new _,direction:new _,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new _,halfWidth:new _,halfHeight:new _};break}return s[t.id]=e,e}}}function ny(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var sy=0;function ry(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oy(s){let t=new iy,e=ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let n=new _,r=new Wt,o=new Wt;function a(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,v=0,b=0,R=0,T=0,A=0;c.sort(ry);for(let B=0,M=c.length;B<M;B++){let E=c[B],L=E.color,D=E.intensity,H=E.distance,tt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*D,u+=L.g*D,f+=L.b*D;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],D);A++}else if(E.isDirectionalLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let st=E.shadow,X=e.get(E);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=tt,i.directionalShadowMatrix[d]=E.shadow.matrix,y++}i.directional[d]=V,d++}else if(E.isSpotLight){let V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(L).multiplyScalar(D),V.distance=H,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[x]=V;let st=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,st.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[x]=st.matrix,E.castShadow){let X=e.get(E);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=tt,b++}x++}else if(E.isRectAreaLight){let V=t.get(E);V.color.copy(L).multiplyScalar(D),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){let st=E.shadow,X=e.get(E);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=E.shadow.matrix,v++}i.point[g]=V,g++}else if(E.isHemisphereLight){let V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(D),V.groundColor.copy(E.groundColor).multiplyScalar(D),i.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=A,i.version=sy++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ud(s){let t=new oy(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ay(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Ud(s),t.set(n,[a])):r>=o.length?(a=new Ud(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var vh=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yh=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function hy(s,t,e){let i=new Or,n=new it,r=new it,o=new me,a=new vh({depthPacking:m0}),l=new yh,c={},h=e.maxTextureSize,u={[Rn]:We,[We]:Rn,[Te]:Te},f=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let B=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending($e),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==cn&&this.type===cn,H=p===cn&&this.type!==cn;for(let tt=0,V=T.length;tt<V;tt++){let st=T[tt],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let lt=X.getFrameExtents();if(n.multiply(lt),r.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/lt.x),n.x=r.x*lt.x,X.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/lt.y),n.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||D===!0||H===!0){let gt=this.type!==cn?{minFilter:ni,magFilter:ni}:{};X.map!==null&&X.map.dispose(),X.map=new Xe(n.x,n.y,gt),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let ut=X.getViewportCount();for(let gt=0;gt<ut;gt++){let kt=X.getViewport(gt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),L.viewport(o),X.updateMatrices(st,gt),i=X.getFrustum(),b(A,P,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===cn&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(B,M,E)};function y(T,A){let P=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xe(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,d,x,null)}function v(T,A,P,B){let M=null,E=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)M=E;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=M.uuid,D=A.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let tt=H[D];tt===void 0&&(tt=M.clone(),H[D]=tt,A.addEventListener("dispose",R)),M=tt}if(M.visible=A.visible,M.wireframe=A.wireframe,B===cn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=P}return M}function b(T,A,P,B,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===cn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let D=t.update(T),H=T.material;if(Array.isArray(H)){let tt=D.groups;for(let V=0,st=tt.length;V<st;V++){let X=tt[V],lt=H[X.materialIndex];if(lt&&lt.visible){let ut=v(T,lt,B,M);T.onBeforeShadow(s,T,A,P,D,ut,X),s.renderBufferDirect(P,null,D,ut,T,X),T.onAfterShadow(s,T,A,P,D,ut,X)}}}else if(H.visible){let tt=v(T,H,B,M);T.onBeforeShadow(s,T,A,P,D,tt,null),s.renderBufferDirect(P,null,D,tt,T,null),T.onAfterShadow(s,T,A,P,D,tt,null)}}let L=T.children;for(let D=0,H=L.length;D<H;D++)b(L[D],A,P,B,M)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let B=c[P],M=T.target.uuid;M in B&&(B[M].dispose(),delete B[M])}}}var uy={[Ec]:Sc,[wc]:Rc,[Tc]:Cc,[Ws]:Ac,[Sc]:Ec,[Rc]:wc,[Cc]:Tc,[Ac]:Ws};function dy(s){function t(){let k=!1,pt=new me,q=null,Q=new me(0,0,0,0);return{setMask:function(_t){q!==_t&&!k&&(s.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){k=_t},setClear:function(_t,bt,ce,Ve,xi){xi===!0&&(_t*=Ve,bt*=Ve,ce*=Ve),pt.set(_t,bt,ce,Ve),Q.equals(pt)===!1&&(s.clearColor(_t,bt,ce,Ve),Q.copy(pt))},reset:function(){k=!1,q=null,Q.set(-1,0,0,0)}}}function e(){let k=!1,pt=!1,q=null,Q=null,_t=null;return{setReversed:function(bt){pt=bt},setTest:function(bt){bt?j(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(bt){q!==bt&&!k&&(s.depthMask(bt),q=bt)},setFunc:function(bt){if(pt&&(bt=uy[bt]),Q!==bt){switch(bt){case Ec:s.depthFunc(s.NEVER);break;case Sc:s.depthFunc(s.ALWAYS);break;case wc:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case Tc:s.depthFunc(s.EQUAL);break;case Ac:s.depthFunc(s.GEQUAL);break;case Rc:s.depthFunc(s.GREATER);break;case Cc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=bt}},setLocked:function(bt){k=bt},setClear:function(bt){_t!==bt&&(s.clearDepth(bt),_t=bt)},reset:function(){k=!1,q=null,Q=null,_t=null}}}function i(){let k=!1,pt=null,q=null,Q=null,_t=null,bt=null,ce=null,Ve=null,xi=null;return{setTest:function(pe){k||(pe?j(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(pe){pt!==pe&&!k&&(s.stencilMask(pe),pt=pe)},setFunc:function(pe,vi,nn){(q!==pe||Q!==vi||_t!==nn)&&(s.stencilFunc(pe,vi,nn),q=pe,Q=vi,_t=nn)},setOp:function(pe,vi,nn){(bt!==pe||ce!==vi||Ve!==nn)&&(s.stencilOp(pe,vi,nn),bt=pe,ce=vi,Ve=nn)},setLocked:function(pe){k=pe},setClear:function(pe){xi!==pe&&(s.clearStencil(pe),xi=pe)},reset:function(){k=!1,pt=null,q=null,Q=null,_t=null,bt=null,ce=null,Ve=null,xi=null}}}let n=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,y=null,v=null,b=null,R=null,T=new Pt(0,0,0),A=0,P=!1,B=null,M=null,E=null,L=null,D=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,V=0,st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(st)[1]),tt=V>=1):st.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),tt=V>=2);let X=null,lt={},ut=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),kt=new me().fromArray(ut),Qt=new me().fromArray(gt);function $(k,pt,q,Q){let _t=new Uint8Array(4),bt=s.createTexture();s.bindTexture(k,bt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<q;ce++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(pt+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return bt}let O={};O[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),O[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),O[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(s.DEPTH_TEST),r.setFunc(Ws),ee(!1),oe(Vu),j(s.CULL_FACE),I($e);function j(k){c[k]!==!0&&(s.enable(k),c[k]=!0)}function nt(k){c[k]!==!1&&(s.disable(k),c[k]=!1)}function mt(k,pt){return h[k]!==pt?(s.bindFramebuffer(k,pt),h[k]=pt,k===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=pt),k===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function xt(k,pt){let q=f,Q=!1;if(k){q=u.get(pt),q===void 0&&(q=[],u.set(pt,q));let _t=k.textures;if(q.length!==_t.length||q[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,ce=_t.length;bt<ce;bt++)q[bt]=s.COLOR_ATTACHMENT0+bt;q.length=_t.length,Q=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Q=!0);Q&&s.drawBuffers(q)}function Dt(k){return d!==k?(s.useProgram(k),d=k,!0):!1}let Kt={[Ii]:s.FUNC_ADD,[Zp]:s.FUNC_SUBTRACT,[Kp]:s.FUNC_REVERSE_SUBTRACT};Kt[Jp]=s.MIN,Kt[jp]=s.MAX;let Tt={[lr]:s.ZERO,[Qp]:s.ONE,[t0]:s.SRC_COLOR,[Mc]:s.SRC_ALPHA,[s0]:s.SRC_ALPHA_SATURATE,[La]:s.DST_COLOR,[ka]:s.DST_ALPHA,[e0]:s.ONE_MINUS_SRC_COLOR,[bc]:s.ONE_MINUS_SRC_ALPHA,[n0]:s.ONE_MINUS_DST_COLOR,[i0]:s.ONE_MINUS_DST_ALPHA,[r0]:s.CONSTANT_COLOR,[o0]:s.ONE_MINUS_CONSTANT_COLOR,[a0]:s.CONSTANT_ALPHA,[l0]:s.ONE_MINUS_CONSTANT_ALPHA};function I(k,pt,q,Q,_t,bt,ce,Ve,xi,pe){if(k===$e){g===!0&&(nt(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),k!==Yh){if(k!==x||pe!==P){if((m!==Ii||v!==Ii)&&(s.blendEquation(s.FUNC_ADD),m=Ii,v=Ii),pe)switch(k){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ki:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ki:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,y=null,b=null,R=null,T.set(0,0,0),A=0,x=k,P=pe}return}_t=_t||pt,bt=bt||q,ce=ce||Q,(pt!==m||_t!==v)&&(s.blendEquationSeparate(Kt[pt],Kt[_t]),m=pt,v=_t),(q!==p||Q!==y||bt!==b||ce!==R)&&(s.blendFuncSeparate(Tt[q],Tt[Q],Tt[bt],Tt[ce]),p=q,y=Q,b=bt,R=ce),(Ve.equals(T)===!1||xi!==A)&&(s.blendColor(Ve.r,Ve.g,Ve.b,xi),T.copy(Ve),A=xi),x=k,P=!1}function xe(k,pt){k.side===Te?nt(s.CULL_FACE):j(s.CULL_FACE);let q=k.side===We;pt&&(q=!q),ee(q),k.blending===Fs&&k.transparent===!1?I($e):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),n.setMask(k.colorWrite);let Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){B!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),B=k)}function oe(k){k!==Yp?(j(s.CULL_FACE),k!==M&&(k===Vu?s.cullFace(s.BACK):k===$p?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),M=k}function Nt(k){k!==E&&(tt&&s.lineWidth(k),E=k)}function _e(k,pt,q){k?(j(s.POLYGON_OFFSET_FILL),(L!==pt||D!==q)&&(s.polygonOffset(pt,q),L=pt,D=q)):nt(s.POLYGON_OFFSET_FILL)}function zt(k){k?j(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function C(k){k===void 0&&(k=s.TEXTURE0+H-1),X!==k&&(s.activeTexture(k),X=k)}function S(k,pt,q){q===void 0&&(X===null?q=s.TEXTURE0+H-1:q=X);let Q=lt[q];Q===void 0&&(Q={type:void 0,texture:void 0},lt[q]=Q),(Q.type!==k||Q.texture!==pt)&&(X!==q&&(s.activeTexture(q),X=q),s.bindTexture(k,pt||O[k]),Q.type=k,Q.texture=pt)}function F(){let k=lt[X];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(k){kt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function Et(k){Qt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Qt.copy(k))}function ae(k,pt){let q=l.get(pt);q===void 0&&(q=new WeakMap,l.set(pt,q));let Q=q.get(k);Q===void 0&&(Q=s.getUniformBlockIndex(pt,k.name),q.set(k,Q))}function Yt(k,pt){let Q=l.get(pt).get(k);a.get(pt)!==Q&&(s.uniformBlockBinding(pt,Q,k.__bindingPointIndex),a.set(pt,Q))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,lt={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,y=null,v=null,b=null,R=null,T=new Pt(0,0,0),A=0,P=!1,B=null,M=null,E=null,L=null,D=null,kt.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),o.reset()}return{buffers:{color:n,depth:r,stencil:o},enable:j,disable:nt,bindFramebuffer:mt,drawBuffers:xt,useProgram:Dt,setBlending:I,setMaterial:xe,setFlipSided:ee,setCullFace:oe,setLineWidth:Nt,setPolygonOffset:_e,setScissorTest:zt,activeTexture:C,bindTexture:S,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:yt,texImage3D:Ft,updateUBOMapping:ae,uniformBlockBinding:Yt,texStorage2D:ie,texStorage3D:at,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ht,viewport:Et,reset:ue}}function Nd(s,t,e,i){let n=fy(i);switch(e){case ff:return s*t;case mf:return s*t;case gf:return s*t*2;case xf:return s*t/n.components*n.byteLength;case iu:return s*t/n.components*n.byteLength;case vf:return s*t*2/n.components*n.byteLength;case nu:return s*t*2/n.components*n.byteLength;case pf:return s*t*3/n.components*n.byteLength;case yi:return s*t*4/n.components*n.byteLength;case su:return s*t*4/n.components*n.byteLength;case Zo:case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jo:case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:case Nc:return Math.max(s,16)*Math.max(t,8)/4;case Lc:case Uc:return Math.max(s,8)*Math.max(t,8)/2;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qo:case th:case eh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yf:case ih:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nh:case sh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fy(s){switch(s){case Gi:case hf:return{byteLength:1,components:1};case Br:case uf:case ai:return{byteLength:2,components:1};case tu:case eu:return{byteLength:2,components:4};case ns:case Qh:case Ki:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function py(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):aa("canvas")}function x(C,S,F){let J=1,rt=zt(C);if((rt.width>F||rt.height>F)&&(J=F/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(J*rt.width),wt=Math.floor(J*rt.height);u===void 0&&(u=g(K,wt));let dt=S?g(K,wt):u;return dt.width=K,dt.height=wt,dt.getContext("2d").drawImage(C,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+K+"x"+wt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ni&&C.minFilter!==Vi}function p(C){s.generateMipmap(C)}function y(C,S,F,J,rt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),S===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){let wt=rt?ia:de.getTransfer(J);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=wt===we?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,S){let F;return C?S===null||S===ns||S===Cn?F=s.DEPTH24_STENCIL8:S===Ki?F=s.DEPTH32F_STENCIL8:S===Br&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ns||S===Cn?F=s.DEPTH_COMPONENT24:S===Ki?F=s.DEPTH_COMPONENT32F:S===Br&&(F=s.DEPTH_COMPONENT16),F}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ni&&C.minFilter!==Vi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){let S=C.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),B(S)}function A(C){let S=i.get(C);if(S.__webglInit===void 0)return;let F=C.source,J=f.get(F);if(J){let rt=J[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&P(C),Object.keys(J).length===0&&f.delete(F)}i.remove(C)}function P(C){let S=i.get(C);s.deleteTexture(S.__webglTexture);let F=C.source,J=f.get(F);delete J[S.__cacheKey],o.memory.textures--}function B(C){let S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let rt=0;rt<S.__webglFramebuffer[J].length;rt++)s.deleteFramebuffer(S.__webglFramebuffer[J][rt]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=C.textures;for(let J=0,rt=F.length;J<rt;J++){let K=i.get(F[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(F[J])}i.remove(C)}let M=0;function E(){M=0}function L(){let C=M;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),M+=1,C}function D(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){let F=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(F,C,S);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function tt(C,S){let F=i.get(C);if(C.version>0&&F.__version!==C.version){Qt(F,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function V(C,S){let F=i.get(C);if(C.version>0&&F.__version!==C.version){Qt(F,C,S);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function st(C,S){let F=i.get(C);if(C.version>0&&F.__version!==C.version){$(F,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let X={[di]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[kc]:s.MIRRORED_REPEAT},lt={[ni]:s.NEAREST,[f0]:s.NEAREST_MIPMAP_NEAREST,[go]:s.NEAREST_MIPMAP_LINEAR,[Vi]:s.LINEAR,[Ul]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},ut={[x0]:s.NEVER,[E0]:s.ALWAYS,[v0]:s.LESS,[_f]:s.LEQUAL,[y0]:s.EQUAL,[b0]:s.GEQUAL,[_0]:s.GREATER,[M0]:s.NOTEQUAL};function gt(C,S){if(S.type===Ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Vi||S.magFilter===Ul||S.magFilter===go||S.magFilter===is||S.minFilter===Vi||S.minFilter===Ul||S.minFilter===go||S.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,X[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,X[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,X[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,lt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ni||S.minFilter!==go&&S.minFilter!==is||S.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function kt(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));let J=S.source,rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));let K=D(S);if(K!==C.__cacheKey){rt[K]===void 0&&(rt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),rt[K].usedTimes++;let wt=rt[C.__cacheKey];wt!==void 0&&(rt[C.__cacheKey].usedTimes--,wt.usedTimes===0&&P(S)),C.__cacheKey=K,C.__webglTexture=rt[K].texture}return F}function Qt(C,S,F){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);let rt=kt(C,S),K=S.source;e.bindTexture(J,C.__webglTexture,s.TEXTURE0+F);let wt=i.get(K);if(K.version!==wt.__version||rt===!0){e.activeTexture(s.TEXTURE0+F);let dt=de.getPrimaries(de.workingColorSpace),vt=S.colorSpace===wn?null:de.getPrimaries(S.colorSpace),ie=S.colorSpace===wn||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let at=x(S.image,!1,n.maxTextureSize);at=_e(S,at);let yt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Ht=y(S.internalFormat,yt,Ft,S.colorSpace,S.isVideoTexture);gt(J,S);let Et,ae=S.mipmaps,Yt=S.isVideoTexture!==!0,ue=wt.__version===void 0||rt===!0,k=K.dataReady,pt=b(S,at);if(S.isDepthTexture)Ht=v(S.format===Pn,S.type),ue&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Ht,at.width,at.height,0,yt,Ft,null));else if(S.isDataTexture)if(ae.length>0){Yt&&ue&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,ae[0].width,ae[0].height);for(let q=0,Q=ae.length;q<Q;q++)Et=ae[q],Yt?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Ft,Et.data):e.texImage2D(s.TEXTURE_2D,q,Ht,Et.width,Et.height,0,yt,Ft,Et.data);S.generateMipmaps=!1}else Yt?(ue&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,at.width,at.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,yt,Ft,at.data)):e.texImage2D(s.TEXTURE_2D,0,Ht,at.width,at.height,0,yt,Ft,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ht,ae[0].width,ae[0].height,at.depth);for(let q=0,Q=ae.length;q<Q;q++)if(Et=ae[q],S.format!==yi)if(yt!==null)if(Yt){if(k)if(S.layerUpdates.size>0){let _t=Nd(Et.width,Et.height,S.format,S.type);for(let bt of S.layerUpdates){let ce=Et.data.subarray(bt*_t/Et.data.BYTES_PER_ELEMENT,(bt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,bt,Et.width,Et.height,1,yt,ce,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,at.depth,yt,Et.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ht,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,at.depth,yt,Ft,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ht,Et.width,Et.height,at.depth,0,yt,Ft,Et.data)}else{Yt&&ue&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,ae[0].width,ae[0].height);for(let q=0,Q=ae.length;q<Q;q++)Et=ae[q],S.format!==yi?yt!==null?Yt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Ft,Et.data):e.texImage2D(s.TEXTURE_2D,q,Ht,Et.width,Et.height,0,yt,Ft,Et.data)}else if(S.isDataArrayTexture)if(Yt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ht,at.width,at.height,at.depth),k)if(S.layerUpdates.size>0){let q=Nd(at.width,at.height,S.format,S.type);for(let Q of S.layerUpdates){let _t=at.data.subarray(Q*q/at.data.BYTES_PER_ELEMENT,(Q+1)*q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,yt,Ft,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Ft,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,yt,Ft,at.data);else if(S.isData3DTexture)Yt?(ue&&e.texStorage3D(s.TEXTURE_3D,pt,Ht,at.width,at.height,at.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Ft,at.data)):e.texImage3D(s.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,yt,Ft,at.data);else if(S.isFramebufferTexture){if(ue)if(Yt)e.texStorage2D(s.TEXTURE_2D,pt,Ht,at.width,at.height);else{let q=at.width,Q=at.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ht,q,Q,0,yt,Ft,null),q>>=1,Q>>=1}}else if(ae.length>0){if(Yt&&ue){let q=zt(ae[0]);e.texStorage2D(s.TEXTURE_2D,pt,Ht,q.width,q.height)}for(let q=0,Q=ae.length;q<Q;q++)Et=ae[q],Yt?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt,Ft,Et):e.texImage2D(s.TEXTURE_2D,q,Ht,yt,Ft,Et);S.generateMipmaps=!1}else if(Yt){if(ue){let q=zt(at);e.texStorage2D(s.TEXTURE_2D,pt,Ht,q.width,q.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Ft,at)}else e.texImage2D(s.TEXTURE_2D,0,Ht,yt,Ft,at);m(S)&&p(J),wt.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,F){if(S.image.length!==6)return;let J=kt(C,S),rt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+F);let K=i.get(rt);if(rt.version!==K.__version||J===!0){e.activeTexture(s.TEXTURE0+F);let wt=de.getPrimaries(de.workingColorSpace),dt=S.colorSpace===wn?null:de.getPrimaries(S.colorSpace),vt=S.colorSpace===wn||wt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ie=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!ie&&!at?yt[Q]=x(S.image[Q],!0,n.maxCubemapSize):yt[Q]=at?S.image[Q].image:S.image[Q],yt[Q]=_e(S,yt[Q]);let Ft=yt[0],Ht=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),ae=y(S.internalFormat,Ht,Et,S.colorSpace),Yt=S.isVideoTexture!==!0,ue=K.__version===void 0||J===!0,k=rt.dataReady,pt=b(S,Ft);gt(s.TEXTURE_CUBE_MAP,S);let q;if(ie){Yt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ae,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){q=yt[Q].mipmaps;for(let _t=0;_t<q.length;_t++){let bt=q[_t];S.format!==yi?Ht!==null?Yt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,bt.width,bt.height,Ht,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ae,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,bt.width,bt.height,Ht,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ae,bt.width,bt.height,0,Ht,Et,bt.data)}}}else{if(q=S.mipmaps,Yt&&ue){q.length>0&&pt++;let Q=zt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ae,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ht,Et,yt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ae,yt[Q].width,yt[Q].height,0,Ht,Et,yt[Q].data);for(let _t=0;_t<q.length;_t++){let ce=q[_t].image[Q].image;Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,ce.width,ce.height,Ht,Et,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ae,ce.width,ce.height,0,Ht,Et,ce.data)}}else{Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ht,Et,yt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ae,Ht,Et,yt[Q]);for(let _t=0;_t<q.length;_t++){let bt=q[_t];Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Ht,Et,bt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ae,Ht,Et,bt.image[Q])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=rt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function O(C,S,F,J,rt,K){let wt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),vt=y(F.internalFormat,wt,dt,F.colorSpace);if(!i.get(S).__hasExternalTextures){let at=Math.max(1,S.width>>K),yt=Math.max(1,S.height>>K);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,K,vt,at,yt,S.depth,0,wt,dt,null):e.texImage2D(rt,K,vt,at,yt,0,wt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),oe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,rt,i.get(F).__webglTexture,0,ee(S)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,rt,i.get(F).__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function j(C,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let J=S.depthTexture,rt=J&&J.isDepthTexture?J.type:null,K=v(S.stencilBuffer,rt),wt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=ee(S);oe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,K,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,C)}else{let J=S.textures;for(let rt=0;rt<J.length;rt++){let K=J[rt],wt=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),vt=y(K.internalFormat,wt,dt,K.colorSpace),ie=ee(S);F&&oe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,vt,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,vt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,vt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let J=i.get(S.depthTexture).__webglTexture,rt=ee(S);if(S.depthTexture.format===Hs)oe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Pn)oe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function mt(C){let S=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,C)}else if(F){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),j(S.__webglDepthbuffer[J],C,!1);else{let rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),j(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(C,S,F){let J=i.get(C);S!==void 0&&O(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&mt(C)}function Dt(C){let S=C.texture,F=i.get(C),J=i.get(S);C.addEventListener("dispose",T);let rt=C.textures,K=C.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)F.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else F.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)F.__webglFramebuffer[dt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(wt)for(let dt=0,vt=rt.length;dt<vt;dt++){let ie=i.get(rt[dt]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){let vt=rt[dt];F.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);let ie=r.convert(vt.format,vt.colorSpace),at=r.convert(vt.type),yt=y(vt.internalFormat,ie,at,vt.colorSpace,C.isXRRenderTarget===!0),Ft=ee(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),j(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),gt(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)O(F.__webglFramebuffer[dt][vt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else O(F.__webglFramebuffer[dt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,vt=rt.length;dt<vt;dt++){let ie=rt[dt],at=i.get(ie);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),gt(s.TEXTURE_2D,ie),O(F.__webglFramebuffer,C,ie,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(ie)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),gt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)O(F.__webglFramebuffer[vt],C,S,s.COLOR_ATTACHMENT0,dt,vt);else O(F.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,dt,0);m(S)&&p(dt),e.unbindTexture()}C.depthBuffer&&mt(C)}function Kt(C){let S=C.textures;for(let F=0,J=S.length;F<J;F++){let rt=S[F];if(m(rt)){let K=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,wt=i.get(rt).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}let Tt=[],I=[];function xe(C){if(C.samples>0){if(oe(C)===!1){let S=C.textures,F=C.width,J=C.height,rt=s.COLOR_BUFFER_BIT,K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=i.get(C),dt=S.length>1;if(dt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let ie=i.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,F,J,0,0,F,J,rt,s.NEAREST),l===!0&&(Tt.length=0,I.length=0,Tt.push(s.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Tt.push(K),I.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let ie=i.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,ie,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ee(C){return Math.min(n.maxSamples,C.samples)}function oe(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _e(C,S){let F=C.colorSpace,J=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Nn&&F!==wn&&(de.getTransfer(F)===we?(J!==yi||rt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=tt,this.setTexture3D=V,this.setTextureCube=st,this.rebindTextures=xt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=O,this.useMultisampledRTT=oe}function my(s,t){function e(i,n=wn){let r,o=de.getTransfer(n);if(i===Gi)return s.UNSIGNED_BYTE;if(i===tu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===df)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return s.BYTE;if(i===uf)return s.SHORT;if(i===Br)return s.UNSIGNED_SHORT;if(i===Qh)return s.INT;if(i===ns)return s.UNSIGNED_INT;if(i===Ki)return s.FLOAT;if(i===ai)return s.HALF_FLOAT;if(i===ff)return s.ALPHA;if(i===pf)return s.RGB;if(i===yi)return s.RGBA;if(i===mf)return s.LUMINANCE;if(i===gf)return s.LUMINANCE_ALPHA;if(i===Hs)return s.DEPTH_COMPONENT;if(i===Pn)return s.DEPTH_STENCIL;if(i===xf)return s.RED;if(i===iu)return s.RED_INTEGER;if(i===vf)return s.RG;if(i===nu)return s.RG_INTEGER;if(i===su)return s.RGBA_INTEGER;if(i===Zo||i===Ko||i===Jo||i===jo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lc||i===Dc||i===Uc||i===Nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Bc||i===Oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Bc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Kc||i===Jc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===th||i===eh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yf||i===ih||i===nh||i===sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var _h=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},gy={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new _i,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new be({vertexShader:xy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new se(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends In{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Mh,m=e.getContextAttributes(),p=null,y=null,v=[],b=[],R=new it,T=null,A=new Ye;A.layers.enable(1),A.viewport=new me;let P=new Ye;P.layers.enable(2),P.viewport=new me;let B=[A,P],M=new _h;M.layers.enable(1),M.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let O=v[$];return O===void 0&&(O=new Dr,v[$]=O),O.getTargetRaySpace()},this.getControllerGrip=function($){let O=v[$];return O===void 0&&(O=new Dr,v[$]=O),O.getGripSpace()},this.getHand=function($){let O=v[$];return O===void 0&&(O=new Dr,v[$]=O),O.getHandSpace()};function D($){let O=b.indexOf($.inputSource);if(O===-1)return;let j=v[O];j!==void 0&&(j.update($.inputSource,$.frame,c||o),j.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",tt);for(let $=0;$<v.length;$++){let O=b[$];O!==null&&(b[$]=null,v[$].disconnect(O))}E=null,L=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,y=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",H),n.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),n.renderState.layers===void 0){let O={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,O),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xe(d.framebufferWidth,d.framebufferHeight,{format:yi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,j=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=m.stencil?Pn:Hs,j=m.stencil?Cn:ns);let mt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(mt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Xe(f.textureWidth,f.textureHeight,{format:yi,type:Gi,depthTexture:new Js(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function tt($){for(let O=0;O<$.removed.length;O++){let j=$.removed[O],nt=b.indexOf(j);nt>=0&&(b[nt]=null,v[nt].disconnect(j))}for(let O=0;O<$.added.length;O++){let j=$.added[O],nt=b.indexOf(j);if(nt===-1){for(let xt=0;xt<v.length;xt++)if(xt>=b.length){b.push(j),nt=xt;break}else if(b[xt]===null){b[xt]=j,nt=xt;break}if(nt===-1)break}let mt=v[nt];mt&&mt.connect(j)}}let V=new _,st=new _;function X($,O,j){V.setFromMatrixPosition(O.matrixWorld),st.setFromMatrixPosition(j.matrixWorld);let nt=V.distanceTo(st),mt=O.projectionMatrix.elements,xt=j.projectionMatrix.elements,Dt=mt[14]/(mt[10]-1),Kt=mt[14]/(mt[10]+1),Tt=(mt[9]+1)/mt[5],I=(mt[9]-1)/mt[5],xe=(mt[8]-1)/mt[0],ee=(xt[8]+1)/xt[0],oe=Dt*xe,Nt=Dt*ee,_e=nt/(-xe+ee),zt=_e*-xe;if(O.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(zt),$.translateZ(_e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),mt[10]===-1)$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let C=Dt+_e,S=Kt+_e,F=oe-zt,J=Nt+(nt-zt),rt=Tt*Kt/S*C,K=I*Kt/S*C;$.projectionMatrix.makePerspective(F,J,rt,K,C,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,O){O===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(O.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let O=$.near,j=$.far;x.texture!==null&&(x.depthNear>0&&(O=x.depthNear),x.depthFar>0&&(j=x.depthFar)),M.near=P.near=A.near=O,M.far=P.far=A.far=j,(E!==M.near||L!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,L=M.far);let nt=$.parent,mt=M.cameras;lt(M,nt);for(let xt=0;xt<mt.length;xt++)lt(mt[xt],nt);mt.length===2?X(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ut($,M,nt)};function ut($,O,j){j===null?$.matrix.copy(O.matrixWorld):($.matrix.copy(j.matrixWorld),$.matrix.invert(),$.matrix.multiply(O.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=oa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let gt=null;function kt($,O){if(h=O.getViewerPose(c||o),g=O,h!==null){let j=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let nt=!1;j.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let xt=0;xt<j.length;xt++){let Dt=j[xt],Kt=null;if(d!==null)Kt=d.getViewport(Dt);else{let I=u.getViewSubImage(f,Dt);Kt=I.viewport,xt===0&&(t.setRenderTargetTextures(y,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let Tt=B[xt];Tt===void 0&&(Tt=new Ye,Tt.layers.enable(xt),Tt.viewport=new me,B[xt]=Tt),Tt.matrix.fromArray(Dt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Dt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),xt===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(Tt)}let mt=n.enabledFeatures;if(mt&&mt.includes("depth-sensing")){let xt=u.getDepthInformation(j[0]);xt&&xt.isValid&&xt.texture&&x.init(t,xt,n.renderState)}}for(let j=0;j<v.length;j++){let nt=b[j],mt=v[j];nt!==null&&mt!==void 0&&mt.update(nt,O,c||o)}gt&&gt($,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}let Qt=new Sf;Qt.setAnimationLoop(kt),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}},jn=new Li,yy=new Wt;function _y(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ef(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,b=y.envMapRotation;v&&(m.envMap.value=v,jn.copy(b),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(jn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function My(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=n[y.id];b===void 0&&(g(y),b=h(y),n[y.id]=b,y.addEventListener("dispose",m));let R=v.program;i.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let b=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=n[y.id],b=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=b.length;T<A;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let B=0,M=P.length;B<M;B++){let E=P[B];if(d(E,T,B,R)===!0){let L=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],H=0;for(let tt=0;tt<D.length;tt++){let V=D[tt],st=x(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+H,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,H),H+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,b,R){let T=y.value,A=v+"_"+b;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){let v=y.uniforms,b=0,R=16;for(let A=0,P=v.length;A<P;A++){let B=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,E=B.length;M<E;M++){let L=B[M],D=Array.isArray(L.value)?L.value:[L.value];for(let H=0,tt=D.length;H<tt;H++){let V=D[H],st=x(V),X=b%R,lt=X%st.boundary,ut=X+lt;b+=lt,ut!==0&&R-ut<st.storage&&(b+=R-ut),L.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=st.storage}}}let T=b%R;return T>0&&(b+=R-T),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}var js=class{constructor(t={}){let{canvas:e=w0(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=An,this.toneMappingExposure=1;let v=this,b=!1,R=0,T=0,A=null,P=-1,B=null,M=new me,E=new me,L=null,D=new Pt(0),H=0,tt=e.width,V=e.height,st=1,X=null,lt=null,ut=new me(0,0,tt,V),gt=new me(0,0,tt,V),kt=!1,Qt=new Or,$=!1,O=!1,j=new Wt,nt=new Wt,mt=new _,xt=new me,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Tt(){return A===null?st:1}let I=i;function xe(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",bt,!1),I===null){let U="webgl2";if(I=xe(U,w),I===null)throw xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,oe,Nt,_e,zt,C,S,F,J,rt,K,wt,dt,vt,ie,at,yt,Ft,Ht,Et,ae,Yt,ue,k;function pt(){ee=new zx(I),ee.init(),Yt=new my(I,ee),oe=new Ix(I,ee,t,Yt),Nt=new dy(I),oe.reverseDepthBuffer&&Nt.buffers.depth.setReversed(!0),_e=new Fx(I),zt=new Qv,C=new py(I,ee,Nt,zt,oe,Yt,_e),S=new Lx(v),F=new Nx(v),J=new Y0(I),ue=new Cx(I,J),rt=new Bx(I,J,_e,ue),K=new Vx(I,rt,J,_e),Ht=new Hx(I,oe,C),at=new kx(zt),wt=new jv(v,S,F,ee,oe,ue,at),dt=new _y(v,zt),vt=new ey,ie=new ay(ee),Ft=new Rx(v,S,F,Nt,K,f,l),yt=new hy(v,K,oe),k=new My(I,_e,oe,Nt),Et=new Px(I,ee,_e),ae=new Ox(I,ee,_e),_e.programs=wt.programs,v.capabilities=oe,v.extensions=ee,v.properties=zt,v.renderLists=vt,v.shadowMap=yt,v.state=Nt,v.info=_e}pt();let q=new bh(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(tt,V,!1))},this.getSize=function(w){return w.set(tt,V)},this.setSize=function(w,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,V=U,e.width=Math.floor(w*st),e.height=Math.floor(U*st),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(tt*st,V*st).floor()},this.setDrawingBufferSize=function(w,U,G){tt=w,V=U,st=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,U,G,W){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,U,G,W),Nt.viewport(M.copy(ut).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,U,G,W){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,G,W),Nt.scissor(E.copy(gt).multiplyScalar(st).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){Nt.setScissorTest(kt=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let N=!1;if(A!==null){let ht=A.texture.format;N=ht===su||ht===nu||ht===iu}if(N){let ht=A.texture.type,Mt=ht===Gi||ht===ns||ht===Br||ht===Cn||ht===tu||ht===eu,St=Ft.getClearColor(),At=Ft.getClearAlpha(),Vt=St.r,Gt=St.g,It=St.b;Mt?(d[0]=Vt,d[1]=Gt,d[2]=It,d[3]=At,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=Vt,g[1]=Gt,g[2]=It,g[3]=At,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),ie.dispose(),zt.dispose(),S.dispose(),F.dispose(),K.dispose(),ue.dispose(),k.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Du),q.removeEventListener("sessionend",Uu),qn.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=_e.autoReset,U=yt.enabled,G=yt.autoUpdate,W=yt.needsUpdate,N=yt.type;pt(),_e.autoReset=w,yt.enabled=U,yt.autoUpdate=G,yt.needsUpdate=W,yt.type=N}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let U=w.target;U.removeEventListener("dispose",ce),Ve(U)}function Ve(w){xi(w),zt.remove(w)}function xi(w){let U=zt.get(w).programs;U!==void 0&&(U.forEach(function(G){wt.releaseProgram(G)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,N,ht){U===null&&(U=Dt);let Mt=N.isMesh&&N.matrixWorld.determinant()<0,St=Gp(w,U,G,W,N);Nt.setMaterial(W,Mt);let At=G.index,Vt=1;if(W.wireframe===!0){if(At=rt.getWireframeAttribute(G),At===void 0)return;Vt=2}let Gt=G.drawRange,It=G.attributes.position,Me=Gt.start*Vt,Re=(Gt.start+Gt.count)*Vt;ht!==null&&(Me=Math.max(Me,ht.start*Vt),Re=Math.min(Re,(ht.start+ht.count)*Vt)),At!==null?(Me=Math.max(Me,0),Re=Math.min(Re,At.count)):It!=null&&(Me=Math.max(Me,0),Re=Math.min(Re,It.count));let Ne=Re-Me;if(Ne<0||Ne===1/0)return;ue.setup(N,W,St,G,At);let Ei,ve=Et;if(At!==null&&(Ei=J.get(At),ve=ae,ve.setIndex(Ei)),N.isMesh)W.wireframe===!0?(Nt.setLineWidth(W.wireframeLinewidth*Tt()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(N.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),Nt.setLineWidth(Lt*Tt()),N.isLineSegments?ve.setMode(I.LINES):N.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else N.isPoints?ve.setMode(I.POINTS):N.isSprite&&ve.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,ei=N._multiDrawCounts,ye=N._multiDrawCount,Bi=At?J.get(At).bytesPerElement:1,ys=zt.get(W).currentProgram.getUniforms();for(let Si=0;Si<ye;Si++)ys.setValue(I,"_gl_DrawID",Si),ve.render(Lt[Si]/Bi,ei[Si])}else if(N.isInstancedMesh)ve.renderInstances(Me,Ne,N.count);else if(G.isInstancedBufferGeometry){let Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ei=Math.min(G.instanceCount,Lt);ve.renderInstances(Me,Ne,ei)}else ve.render(Me,Ne)};function pe(w,U,G){w.transparent===!0&&w.side===Te&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,mo(w,U,G),w.side=Rn,w.needsUpdate=!0,mo(w,U,G),w.side=Te):mo(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),m=ie.get(G),m.init(U),y.push(m),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ht=N.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){let St=ht[Mt];pe(St,G,N),W.add(St)}else pe(ht,G,N),W.add(ht)}),y.pop(),m=null,W},this.compileAsync=function(w,U,G=null){let W=this.compile(w,U,G);return new Promise(N=>{function ht(){if(W.forEach(function(Mt){zt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){N(w);return}setTimeout(ht,10)}ee.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let vi=null;function nn(w){vi&&vi(w)}function Du(){qn.stop()}function Uu(){qn.start()}let qn=new Sf;qn.setAnimationLoop(nn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){vi=w,q.setAnimationLoop(w),w===null?qn.stop():qn.start()},q.addEventListener("sessionstart",Du),q.addEventListener("sessionend",Uu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),m=ie.get(w,y.length),m.init(U),y.push(m),nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(nt),O=this.localClippingEnabled,$=at.init(this.clippingPlanes,O),x=vt.get(w,p.length),x.init(),p.push(x),q.enabled===!0&&q.isPresenting===!0){let ht=v.xr.getDepthSensingMesh();ht!==null&&Il(ht,U,-1/0,v.sortObjects)}Il(w,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(X,lt),Kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Kt&&Ft.addToRenderList(x,w),this.info.render.frame++,$===!0&&at.beginShadows();let G=m.state.shadowsArray;yt.render(G,w,U),$===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){let ht=U.cameras;if(N.length>0)for(let Mt=0,St=ht.length;Mt<St;Mt++){let At=ht[Mt];zu(W,N,w,At)}Kt&&Ft.render(w);for(let Mt=0,St=ht.length;Mt<St;Mt++){let At=ht[Mt];Nu(x,w,At,At.viewport)}}else N.length>0&&zu(W,N,w,U),Kt&&Ft.render(w),Nu(x,w,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),ue.resetDefaultState(),P=-1,B=null,y.pop(),y.length>0?(m=y[y.length-1],$===!0&&at.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Il(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qt.intersectsSprite(w)){W&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);let Mt=K.update(w),St=w.material;St.visible&&x.push(w,Mt,St,G,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qt.intersectsObject(w))){let Mt=K.update(w),St=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),xt.copy(Mt.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(St)){let At=Mt.groups;for(let Vt=0,Gt=At.length;Vt<Gt;Vt++){let It=At[Vt],Me=St[It.materialIndex];Me&&Me.visible&&x.push(w,Mt,Me,G,xt.z,It)}}else St.visible&&x.push(w,Mt,St,G,xt.z,null)}}let ht=w.children;for(let Mt=0,St=ht.length;Mt<St;Mt++)Il(ht[Mt],U,G,W)}function Nu(w,U,G,W){let N=w.opaque,ht=w.transmissive,Mt=w.transparent;m.setupLightsView(G),$===!0&&at.setGlobalState(v.clippingPlanes,G),W&&Nt.viewport(M.copy(W)),N.length>0&&po(N,U,G),ht.length>0&&po(ht,U,G),Mt.length>0&&po(Mt,U,G),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function zu(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Xe(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?ai:Gi,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let ht=m.state.transmissionRenderTarget[W.id],Mt=W.viewport||M;ht.setSize(Mt.z,Mt.w);let St=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(D),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Ft.render(G);let At=v.toneMapping;v.toneMapping=An;let Vt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&at.setGlobalState(v.clippingPlanes,W),po(w,G,W),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let It=0,Me=U.length;It<Me;It++){let Re=U[It],Ne=Re.object,Ei=Re.geometry,ve=Re.material,Lt=Re.group;if(ve.side===Te&&Ne.layers.test(W.layers)){let ei=ve.side;ve.side=We,ve.needsUpdate=!0,Bu(Ne,G,W,Ei,ve,Lt),ve.side=ei,ve.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}v.setRenderTarget(St),v.setClearColor(D,H),Vt!==void 0&&(W.viewport=Vt),v.toneMapping=At}function po(w,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ht=w.length;N<ht;N++){let Mt=w[N],St=Mt.object,At=Mt.geometry,Vt=W===null?Mt.material:W,Gt=Mt.group;St.layers.test(G.layers)&&Bu(St,U,G,At,Vt,Gt)}}function Bu(w,U,G,W,N,ht){w.onBeforeRender(v,U,G,W,N,ht),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,G,W,w,ht),N.transparent===!0&&N.side===Te&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,v.renderBufferDirect(G,U,W,N,w,ht),N.side=Rn,N.needsUpdate=!0,v.renderBufferDirect(G,U,W,N,w,ht),N.side=Te):v.renderBufferDirect(G,U,W,N,w,ht),w.onAfterRender(v,U,G,W,N,ht)}function mo(w,U,G){U.isScene!==!0&&(U=Dt);let W=zt.get(w),N=m.state.lights,ht=m.state.shadowsArray,Mt=N.state.version,St=wt.getParameters(w,N.state,ht,U,G),At=wt.getProgramCacheKey(St),Vt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",ce),Vt=new Map,W.programs=Vt);let Gt=Vt.get(At);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===Mt)return Fu(w,St),Gt}else St.uniforms=wt.getUniforms(w),w.onBeforeCompile(St,v),Gt=wt.acquireProgram(St,At),Vt.set(At,Gt),W.uniforms=St.uniforms;let It=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=at.uniform),Fu(w,St),W.needsLights=Xp(w),W.lightsStateVersion=Mt,W.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Ou(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Fu(w,U){let G=zt.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Gp(w,U,G,W,N){U.isScene!==!0&&(U=Dt),C.resetTextureUnits();let ht=U.fog,Mt=W.isMeshStandardMaterial?U.environment:null,St=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nn,At=(W.isMeshStandardMaterial?F:S).get(W.envMap||Mt),Vt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,Me=!!G.morphAttributes.normal,Re=!!G.morphAttributes.color,Ne=An;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=v.toneMapping);let Ei=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ve=Ei!==void 0?Ei.length:0,Lt=zt.get(W),ei=m.state.lights;if($===!0&&(O===!0||w!==B)){let Ci=w===B&&W.id===P;at.setState(W,w,Ci)}let ye=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ei.state.version||Lt.outputColorSpace!==St||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==At||W.fog===!0&&Lt.fog!==ht||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==Vt||Lt.vertexTangents!==Gt||Lt.morphTargets!==It||Lt.morphNormals!==Me||Lt.morphColors!==Re||Lt.toneMapping!==Ne||Lt.morphTargetsCount!==ve)&&(ye=!0):(ye=!0,Lt.__version=W.version);let Bi=Lt.currentProgram;ye===!0&&(Bi=mo(W,U,N));let ys=!1,Si=!1,kl=!1,ze=Bi.getUniforms(),vn=Lt.uniforms;if(Nt.useProgram(Bi.program)&&(ys=!0,Si=!0,kl=!0),W.id!==P&&(P=W.id,Si=!0),ys||B!==w){oe.reverseDepthBuffer?(j.copy(w.projectionMatrix),A0(j),R0(j),ze.setValue(I,"projectionMatrix",j)):ze.setValue(I,"projectionMatrix",w.projectionMatrix),ze.setValue(I,"viewMatrix",w.matrixWorldInverse);let Ci=ze.map.cameraPosition;Ci!==void 0&&Ci.setValue(I,mt.setFromMatrixPosition(w.matrixWorld)),oe.logarithmicDepthBuffer&&ze.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ze.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,Si=!0,kl=!0)}if(N.isSkinnedMesh){ze.setOptional(I,N,"bindMatrix"),ze.setOptional(I,N,"bindMatrixInverse");let Ci=N.skeleton;Ci&&(Ci.boneTexture===null&&Ci.computeBoneTexture(),ze.setValue(I,"boneTexture",Ci.boneTexture,C))}N.isBatchedMesh&&(ze.setOptional(I,N,"batchingTexture"),ze.setValue(I,"batchingTexture",N._matricesTexture,C),ze.setOptional(I,N,"batchingIdTexture"),ze.setValue(I,"batchingIdTexture",N._indirectTexture,C),ze.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ze.setValue(I,"batchingColorTexture",N._colorsTexture,C));let Ll=G.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0)&&Ht.update(N,G,Bi),(Si||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,ze.setValue(I,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vn.envMap.value=At,vn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),Si&&(ze.setValue(I,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Wp(vn,kl),ht&&W.fog===!0&&dt.refreshFogUniforms(vn,ht),dt.refreshMaterialUniforms(vn,W,st,V,m.state.transmissionRenderTarget[w.id]),Gs.upload(I,Ou(Lt),vn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Gs.upload(I,Ou(Lt),vn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ze.setValue(I,"center",N.center),ze.setValue(I,"modelViewMatrix",N.modelViewMatrix),ze.setValue(I,"normalMatrix",N.normalMatrix),ze.setValue(I,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ci=W.uniformsGroups;for(let Dl=0,qp=Ci.length;Dl<qp;Dl++){let Hu=Ci[Dl];k.update(Hu,Bi),k.bind(Hu,Bi)}}return Bi}function Wp(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Xp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,G){zt.get(w.texture).__webglTexture=U,zt.get(w.depthTexture).__webglTexture=G;let W=zt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let G=zt.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){A=w,R=U,T=G;let W=!0,N=null,ht=!1,Mt=!1;if(w){let At=zt.get(w);if(At.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(At.__hasExternalTextures)C.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(At.__boundDepthTexture!==It){if(It!==null&&zt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);let Gt=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][G]:N=Gt[U],ht=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[G]:N=Gt,M.copy(w.viewport),E.copy(w.scissor),L=w.scissorTest}else M.copy(ut).multiplyScalar(st).floor(),E.copy(gt).multiplyScalar(st).floor(),L=kt;if(Nt.bindFramebuffer(I.FRAMEBUFFER,N)&&W&&Nt.drawBuffers(w,N),Nt.viewport(M),Nt.scissor(E),Nt.setScissorTest(L),ht){let At=zt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,G)}else if(Mt){let At=zt.get(w.texture),Vt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Vt)}P=-1},this.readRenderTargetPixels=function(w,U,G,W,N,ht,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){Nt.bindFramebuffer(I.FRAMEBUFFER,St);try{let At=w.texture,Vt=At.format,Gt=At.type;if(!oe.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N&&I.readPixels(U,G,W,N,Yt.convert(Vt),Yt.convert(Gt),ht)}finally{let At=A!==null?zt.get(A).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,W,N,ht,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){let At=w.texture,Vt=At.format,Gt=At.type;if(!oe.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N){Nt.bindFramebuffer(I.FRAMEBUFFER,St);let It=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.bufferData(I.PIXEL_PACK_BUFFER,ht.byteLength,I.STREAM_READ),I.readPixels(U,G,W,N,Yt.convert(Vt),Yt.convert(Gt),0);let Me=A!==null?zt.get(A).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,Me);let Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await T0(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ht),I.deleteBuffer(It),I.deleteSync(Re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),N=Math.floor(w.image.width*W),ht=Math.floor(w.image.height*W),Mt=U!==null?U.x:0,St=U!==null?U.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Mt,St,N,ht),Nt.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,W=null,N=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let ht,Mt,St,At,Vt,Gt;G!==null?(ht=G.max.x-G.min.x,Mt=G.max.y-G.min.y,St=G.min.x,At=G.min.y):(ht=w.image.width,Mt=w.image.height,St=0,At=0),W!==null?(Vt=W.x,Gt=W.y):(Vt=0,Gt=0);let It=Yt.convert(U.format),Me=Yt.convert(U.type);C.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Re=I.getParameter(I.UNPACK_ROW_LENGTH),Ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ei=I.getParameter(I.UNPACK_SKIP_PIXELS),ve=I.getParameter(I.UNPACK_SKIP_ROWS),Lt=I.getParameter(I.UNPACK_SKIP_IMAGES),ei=w.isCompressedTexture?w.mipmaps[N]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ei.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ei.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Vt,Gt,ht,Mt,It,Me,ei.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Vt,Gt,ei.width,ei.height,It,ei.data):I.texSubImage2D(I.TEXTURE_2D,N,Vt,Gt,ht,Mt,It,Me,ei),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt),N===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,W=null,N=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let ht,Mt,St,At,Vt,Gt,It,Me,Re,Ne=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(ht=G.max.x-G.min.x,Mt=G.max.y-G.min.y,St=G.max.z-G.min.z,At=G.min.x,Vt=G.min.y,Gt=G.min.z):(ht=Ne.width,Mt=Ne.height,St=Ne.depth,At=0,Vt=0,Gt=0),W!==null?(It=W.x,Me=W.y,Re=W.z):(It=0,Me=0,Re=0);let Ei=Yt.convert(U.format),ve=Yt.convert(U.type),Lt;if(U.isData3DTexture)C.setTexture3D(U,0),Lt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),Lt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let ei=I.getParameter(I.UNPACK_ROW_LENGTH),ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bi=I.getParameter(I.UNPACK_SKIP_PIXELS),ys=I.getParameter(I.UNPACK_SKIP_ROWS),Si=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Lt,N,It,Me,Re,ht,Mt,St,Ei,ve,Ne.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,N,It,Me,Re,ht,Mt,St,Ei,Ne.data):I.texSubImage3D(Lt,N,It,Me,Re,ht,Mt,St,Ei,ve,Ne),I.pixelStorei(I.UNPACK_ROW_LENGTH,ei),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bi),I.pixelStorei(I.UNPACK_SKIP_ROWS,ys),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Si),N===0&&U.generateMipmaps&&I.generateMipmap(Lt),Nt.unbindTexture()},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Nt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ou?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Ua?"display-p3":"srgb"}};var ma=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ln=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hi=new _,Fr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix4(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyNormalMatrix(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.transformDirection(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fi=class extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,Rr=new _,Us=new _,Ns=new _,zs=new it,Cr=new it,Cf=new Wt,zo=new _,Pr=new _,Bo=new _,zd=new it,dc=new it,Bd=new it,Mi=class extends Be{constructor(t=new fi){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ga(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Fr(i,3,0,!1)),Ds.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Oo(zo.set(-.5,-.5,0),Ns,o,Us,n,r),Oo(Pr.set(.5,-.5,0),Ns,o,Us,n,r),Oo(Bo.set(.5,.5,0),Ns,o,Us,n,r),zd.set(0,0),dc.set(1,0),Bd.set(1,1);let a=t.ray.intersectTriangle(zo,Pr,Bo,!1,Rr);if(a===null&&(Oo(Pr.set(-.5,.5,0),Ns,o,Us,n,r),dc.set(0,1),a=t.ray.intersectTriangle(zo,Bo,Pr,!1,Rr),a===null))return;let l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:Tn.getInterpolation(Rr,zo,Pr,Bo,zd,dc,Bd,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Oo(s,t,e,i,n,r){zs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Cr.x=r*zs.x-n*zs.y,Cr.y=n*zs.x+r*zs.y):Cr.copy(zs),s.copy(t),s.x+=Cr.x,s.y+=Cr.y,s.applyMatrix4(Cf)}var Od=new _,Fd=new me,Hd=new me,by=new _,Vd=new Wt,Fo=new _,fc=new dn,Gd=new Wt,pc=new Ys,xa=class extends Y{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xu,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fo),this.boundingSphere.expandByPoint(Fo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(n),t.ray.intersectsSphere(fc)!==!1&&(Gd.copy(n).invert(),pc.copy(t.ray).applyMatrix4(Gd),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,pc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new me,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Fd.fromBufferAttribute(n.attributes.skinIndex,t),Hd.fromBufferAttribute(n.attributes.skinWeight,t),Od.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Hd.getComponent(r);if(o!==0){let a=Fd.getComponent(r);Vd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(by.copy(Od).applyMatrix4(Vd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends Be{constructor(){super(),this.isBone=!0,this.type="Bone"}},ss=class extends _i{constructor(t=null,e=1,i=1,n,r,o,a,l,c=ni,h=ni,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wd=new Wt,Ey=new Wt,va=class s{constructor(t=[],e=[]){this.uuid=Ji(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Wt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Ey;Wd.multiplyMatrices(a,e[r]),Wd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new ss(e,t,t,yi,Ki);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new Wt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){let o=e[n];t.bones.push(o.uuid);let a=i[n];t.boneInverses.push(a.toArray())}return t}};var Dn=class extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ya=new _,_a=new _,Xd=new Wt,Ir=new Ys,Ho=new dn,mc=new _,qd=new _,Qs=class extends Be{constructor(t=new he,e=new Dn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)ya.fromBufferAttribute(e,n-1),_a.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ya.distanceTo(_a);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(n),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Xd.copy(n).invert(),Ir.copy(t.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),v=Vo(this,t,Ir,l,p,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Vo(this,t,Ir,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Vo(this,t,Ir,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Vo(this,t,Ir,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vo(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(ya.fromBufferAttribute(o,n),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ya,_a,mc,qd)>i)return;mc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(mc);if(!(l<t.near||l>t.far))return{distance:l,point:qd.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Yd=new _,$d=new _,Ma=class extends Qs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Yd.fromBufferAttribute(e,n),$d.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Yd.distanceTo($d);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zd=new Wt,Eh=new Ys,Go=new dn,Wo=new _,Vr=class extends Be{constructor(t=new he,e=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(n),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;Zd.copy(n).invert(),Eh.copy(t.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Wo.fromBufferAttribute(u,m),Kd(Wo,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Wo.fromBufferAttribute(u,g),Kd(Wo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kd(s,t,e,i,n,r,o){let a=Eh.distanceSqToPoint(s);if(a<e){let l=new _;Eh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fn=class extends _i{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(o-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new it:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new _,n=[],r=[],o=[],a=new _,l=new Wt;for(let d=0;d<=t;d++){let g=d/t;n[d]=this.getTangentAt(g,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ii(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(ii(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gr=class extends Di{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sh=class extends Gr{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,n(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Xo=new _,gc=new lu,xc=new lu,vc=new lu,wh=class extends Di{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new _){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Xo.subVectors(n[0],n[1]).add(n[0]),c=Xo);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Xo.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),gc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),xc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),vc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(gc.calc(l),xc.calc(l),vc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new _().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jd(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Sy(s,t){let e=1-s;return e*e*t}function wy(s,t){return 2*(1-s)*s*t}function Ty(s,t){return s*s*t}function Ur(s,t,e,i){return Sy(s,t)+wy(s,e)+Ty(s,i)}function Ay(s,t){let e=1-s;return e*e*e*t}function Ry(s,t){let e=1-s;return 3*e*e*s*t}function Cy(s,t){return 3*(1-s)*s*s*t}function Py(s,t){return s*s*s*t}function Nr(s,t,e,i,n){return Ay(s,t)+Ry(s,e)+Cy(s,i)+Py(s,n)}var ba=class extends Di{constructor(t=new it,e=new it,i=new it,n=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new it){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,n.x,r.x,o.x,a.x),Nr(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Th=class extends Di{constructor(t=new _,e=new _,i=new _,n=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new _){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,n.x,r.x,o.x,a.x),Nr(t,n.y,r.y,o.y,a.y),Nr(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends Di{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ah=class extends Di{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends Di{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,n.x,r.x,o.x),Ur(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rh=class extends Di{constructor(t=new _,e=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,n.x,r.x,o.x),Ur(t,n.y,r.y,o.y),Ur(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Jd(a,l.x,c.x,h.x,u.x),Jd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new it().fromArray(n))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:Sh,CatmullRomCurve3:wh,CubicBezierCurve:ba,CubicBezierCurve3:Th,EllipseCurve:Gr,LineCurve:Ea,LineCurve3:Ah,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:Rh,SplineCurve:wa}),Ch=class extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jd[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new jd[n.type]().fromJSON(n))}return this}},Wr=class extends Ch{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ea(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Sa(this.currentPoint.clone(),new it(t,e),new it(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new ba(this.currentPoint.clone(),new it(t,e),new it(i,n),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new wa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new Gr(t,e,i,n,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rs=class s extends he{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ii(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new _,f=new it,d=new _,g=new _,x=new _,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let v=i+y*h*n,b=Math.sin(v),R=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*b,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let A=l[3*T+0]*b,P=l[3*T+1],B=l[3*T+0]*R;c.push(A,P,B)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let b=v+y*t.length,R=b,T=b+t.length,A=b+t.length+1,P=b+1;r.push(R,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ui=class s extends rs{constructor(t=1,e=1,i=4,n=8){let r=new Wr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},pi=class s extends he{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new _,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mi=class s extends he{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function y(){let b=new _,R=new _,T=0,A=(e-t)/i;for(let P=0;P<=r;P++){let B=[],M=P/r,E=M*(e-t)+t;for(let L=0;L<=n;L++){let D=L/n,H=D*l+a,tt=Math.sin(H),V=Math.cos(H);R.x=E*tt,R.y=-M*i+m,R.z=E*V,u.push(R.x,R.y,R.z),b.set(tt,A,V).normalize(),f.push(b.x,b.y,b.z),d.push(D,1-M),B.push(g++)}x.push(B)}for(let P=0;P<n;P++)for(let B=0;B<r;B++){let M=x[B][P],E=x[B+1][P],L=x[B+1][P+1],D=x[B][P+1];t>0&&(h.push(M,E,D),T+=3),e>0&&(h.push(E,L,D),T+=3)}c.addGroup(p,T,0),p+=T}function v(b){let R=g,T=new it,A=new _,P=0,B=b===!0?t:e,M=b===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let E=g;for(let L=0;L<=n;L++){let H=L/n*l+a,tt=Math.cos(H),V=Math.sin(H);A.x=B*V,A.y=m*M,A.z=B*tt,u.push(A.x,A.y,A.z),f.push(0,M,0),T.x=tt*.5+.5,T.y=V*.5*M+.5,d.push(T.x,T.y),g++}for(let L=0;L<n;L++){let D=R+L,H=E+L;b===!0?h.push(H,H+1,D):h.push(H+1,H,D),P+=3}c.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ai=class s extends mi{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ta=class s extends he{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new _,b=new _,R=new _;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],b),d(e[T+2],R),l(v,b,R,y)}function l(y,v,b,R){let T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];let B=y.clone().lerp(b,P/T),M=v.clone().lerp(b,P/T),E=T-P;for(let L=0;L<=E;L++)L===0&&P===T?A[P][L]=B:A[P][L]=B.clone().lerp(M,L/E)}for(let P=0;P<T;P++)for(let B=0;B<2*(T-P)-1;B++){let M=Math.floor(B/2);B%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function c(y){let v=new _;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(y),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let y=new _;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let b=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],R=o[y+4],T=Math.max(v,b,R),A=Math.min(v,b,R);T>.9&&A<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let b=y*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let y=new _,v=new _,b=new _,R=new _,T=new it,A=new it,P=new it;for(let B=0,M=0;B<r.length;B+=9,M+=6){y.set(r[B+0],r[B+1],r[B+2]),v.set(r[B+3],r[B+4],r[B+5]),b.set(r[B+6],r[B+7],r[B+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(y).add(v).add(b).divideScalar(3);let E=m(R);x(T,M+0,y,E),x(A,M+2,v,E),x(P,M+4,b,E)}}function x(y,v,b,R){R<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Aa=class s extends Ta{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Xr=class extends Wr{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Wr().fromJSON(n))}return this}},Iy={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Pf(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=Ny(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return qr(r,o,e,a,l,d,0),o}};function Pf(s,t,e,i,n){let r,o;if(n===Yy(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Qd(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Qd(r,s[r],s[r+1],o);return o&&za(o,o.next)&&($r(o),o=o.next),o}function os(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(za(e,e.next)||ke(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qr(s,t,e,i,n,r,o){if(!s)return;!o&&r&&Hy(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ly(s,i,n,r):ky(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),$r(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Dy(os(s),t,e),qr(s,t,e,i,n,r,2)):o===2&&Uy(s,t,e,i,n,r):qr(os(s),t,e,i,n,r,1);break}}}function ky(s){let t=s.prev,e=s,i=s.next;if(ke(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=n>r?n>o?n:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Os(n,a,r,l,o,c,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ly(s,t,e,i){let n=s.prev,r=s,o=s.next;if(ke(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ph(d,g,t,e,i),y=Ph(x,m,t,e,i),v=s.prevZ,b=s.nextZ;for(;v&&v.z>=p&&b&&b.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Os(a,h,l,u,c,f,v.x,v.y)&&ke(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==n&&b!==o&&Os(a,h,l,u,c,f,b.x,b.y)&&ke(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Os(a,h,l,u,c,f,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==n&&b!==o&&Os(a,h,l,u,c,f,b.x,b.y)&&ke(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Dy(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!za(n,r)&&If(n,i,i.next,r)&&Yr(n,r)&&Yr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),$r(i),$r(i.next),i=s=r),i=i.next}while(i!==s);return os(i)}function Uy(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wy(o,a)){let l=kf(o,a);o=os(o,o.next),l=os(l,l.next),qr(o,t,e,i,n,r,0),qr(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ny(s,t,e,i){let n=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Pf(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Gy(c));for(n.sort(zy),r=0;r<n.length;r++)e=By(n[r],e);return e}function zy(s,t){return s.x-t.x}function By(s,t){let e=Oy(s,t);if(!e)return t;let i=kf(e,s);return os(i,i.next),os(e,e.next)}function Oy(s,t){let e=t,i=-1/0,n,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,c=n.y,h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Os(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yr(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Fy(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function Fy(s,t){return ke(s.prev,s,t.prev)<0&&ke(t.next,s,s.next)<0}function Hy(s,t,e,i){let n=s;do n.z===0&&(n.z=Ph(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Vy(n)}function Vy(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function Ph(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Gy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Os(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function Wy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Xy(s,t)&&(Yr(s,t)&&Yr(t,s)&&qy(s,t)&&(ke(s.prev,s,t.prev)||ke(s,t.prev,t))||za(s,t)&&ke(s.prev,s,s.next)>0&&ke(t.prev,t,t.next)>0)}function ke(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function za(s,t){return s.x===t.x&&s.y===t.y}function If(s,t,e,i){let n=Yo(ke(s,t,e)),r=Yo(ke(s,t,i)),o=Yo(ke(e,i,s)),a=Yo(ke(e,i,t));return!!(n!==r&&o!==a||n===0&&qo(s,e,t)||r===0&&qo(s,i,t)||o===0&&qo(e,s,i)||a===0&&qo(e,t,i))}function qo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Yo(s){return s>0?1:s<0?-1:0}function Xy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yr(s,t){return ke(s.prev,s,s.next)<0?ke(s,t,s.next)>=0&&ke(s,s.prev,t)>=0:ke(s,t,s.prev)<0||ke(s,s.next,t)<0}function qy(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function kf(s,t){let e=new Ih(s.i,s.x,s.y),i=new Ih(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Qd(s,t,e,i){let n=new Ih(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function $r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ih(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yy(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var zr=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];tf(t),ef(i,t);let o=t.length;e.forEach(tf);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,ef(i,e[l]);let a=Iy.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function tf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ef(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var er=class s extends Ta{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ir=class s extends he{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/n,d=new _,g=new it;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,b=y+i+1,R=y+i+2,T=y+1;a.push(v,b,T),a.push(b,R,T)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ra=class s extends he{constructor(t=new Xr([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Zt(n,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let u=n.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;zr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];zr.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=zr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];n.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,b=y[1]+u,R=y[2]+u;i.push(v,b,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $y(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function $y(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Xt=class s extends he{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new _,f=new _,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,b=0;p===0&&o===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(n+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+b,1-v),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let v=h[p][y+1],b=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(v,b,T),(p!==i-1||l<Math.PI)&&d.push(b,R,T)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var je=class s extends he{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new _,u=new _,f=new _;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){let x=g/n*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){let x=(n+1)*d+g-1,m=(n+1)*(d-1)+g-1,p=(n+1)*(d-1)+g,y=(n+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ca=class extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pa=class extends Xi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function $o(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var nr=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends nr{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qu,endingEnd:qu}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=t,a=2*e-i;break;case $u:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:o=t,l=2*i-e;break;case $u:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+v*o[l+R]+b*o[u+R];return r}},Lh=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Dh=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},qi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$o(e,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$o(t.times,Array),values:$o(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case rh:e=this.InterpolantFactoryMethodLinear;break;case Nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return rh;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Zy(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=rh;var as=class extends qi{constructor(t,e,i){super(t,e,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ea;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Uh=class extends qi{};Uh.prototype.ValueTypeName="color";var Nh=class extends qi{};Nh.prototype.ValueTypeName="number";var zh=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Wi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ia=class extends qi{InterpolantFactoryMethodLinear(t){return new zh(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends qi{constructor(t,e,i){super(t,e,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ea;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Bh=class extends qi{};Bh.prototype.ValueTypeName="vector";var Oh=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ky=new Oh,Fh=class{constructor(t){this.manager=t!==void 0?t:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},cs=class extends sr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yc=new Wt,nf=new _,sf=new _,Zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(nf),sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sf),e.updateMatrixWorld(),yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hh=class extends Zr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=oa*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},rr=class extends sr{constructor(t,e,i=0,n=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},rf=new Wt,kr=new _,_c=new _,Vh=class extends Zr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),kr.setFromMatrixPosition(t.matrixWorld),i.position.copy(kr),_c.copy(i.position),_c.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(_c),i.updateMatrixWorld(),n.makeTranslation(-kr.x,-kr.y,-kr.z),rf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf)}},or=class extends sr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gh=class extends Zr{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Un=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ar=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=of();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function of(){return performance.now()}var cu="\\[\\]\\.:\\/",Jy=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",jy="[^"+cu.replace("\\.","")+"]",Qy=/((?:WC+[\/:])*)/.source.replace("WC",hu),t1=/(WCOD+)?/.source.replace("WCOD",jy),e1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),i1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),n1=new RegExp("^"+Qy+t1+e1+i1+"$"),s1=["material","materials","bones","map"],Wh=class{constructor(t,e,i){let n=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jy,"")}static parseTrackName(t){let e=n1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);s1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Wh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);var zn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},r1=new Zs(-1,1,1,-1,0,1),uu=class extends he{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},o1=new uu,ji=class{constructor(t){this._mesh=new Y(o1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,r1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ba=class extends gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ji(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kr=class extends gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Oa=class extends gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Fa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new it);this._width=i.width,this._height=i.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ba(zn),this.copyPass.material.blending=$e,this.clock=new ar}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kr!==void 0&&(o instanceof Kr?i=!0:o instanceof Oa&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ha=class extends gi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var hr=class s extends gi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Xe(r,o,{type:ai});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Xe(r,o,{type:ai});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=zn;this.copyUniforms=li.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new ji(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};hr.BlurDirectionX=new it(1,0);hr.BlurDirectionY=new it(0,1);var Df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Va=class extends gi{constructor(){super();let t=Df;this.uniforms=li.clone(t.uniforms),this.material=new Ca({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===we&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$h?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Wt},cameraProjectionMatrixInverse:{value:new Wt},cameraWorldMatrix:{value:new Wt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new _(-1,-1,-1)},sceneBoxMax:{value:new _(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},jr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ga={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Uf(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=a1(t),i=e.length,n=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=e[o],l=2*Math.PI*a/i,c=new _(Math.cos(l),Math.sin(l),0).normalize();n[o*4]=(c.x*.5+.5)*255,n[o*4+1]=(c.y*.5+.5)*255,n[o*4+2]=127,n[o*4+3]=255}let r=new ss(n,t,t);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}function a1(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(n===-1&&r===t?(r=t-2,n=0):(r===t&&(r=0),n<0&&(n=t-1)),i[n*t+r]!==0){r-=2,n++;continue}else i[n*t+r]=o++;r++,n--}return i}var Qr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:du(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraProjectionMatrixInverse:{value:new Wt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function du(s,t,e){let i=l1(s,t,e),n="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=i[r];n+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return n}function l1(s,t,e){let i=[];for(let n=0;n<s;n++){let r=2*Math.PI*t*n/s,o=Math.pow(n/(s-1),e);i.push(new _(Math.cos(r),Math.sin(r),o))}return i}var Wa=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,r){return t[0]*e+t[1]*i+t[2]*n+t[3]*r}noise(t,e){let i,n,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=t-f,x=e-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+h,v=x-p+h,b=g-1+2*h,R=x-1+2*h,T=l&255,A=c&255,P=this.perm[T+this.perm[A]]%12,B=this.perm[T+m+this.perm[A+p]]%12,M=this.perm[T+1+this.perm[A+1]]%12,E=.5-g*g-x*x;E<0?i=0:(E*=E,i=E*E*this.dot(this.grad3[P],g,x));let L=.5-y*y-v*v;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[B],y,v));let D=.5-b*b-R*R;return D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[M],b,R)),70*(i+n+r)}noise3d(t,e,i){let n,r,o,a,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(i+c),d=1/6,g=(h+u+f)*d,x=h-g,m=u-g,p=f-g,y=t-x,v=e-m,b=i-p,R,T,A,P,B,M;y>=v?v>=b?(R=1,T=0,A=0,P=1,B=1,M=0):y>=b?(R=1,T=0,A=0,P=1,B=0,M=1):(R=0,T=0,A=1,P=1,B=0,M=1):v<b?(R=0,T=0,A=1,P=0,B=1,M=1):y<b?(R=0,T=1,A=0,P=0,B=1,M=1):(R=0,T=1,A=0,P=1,B=1,M=0);let E=y-R+d,L=v-T+d,D=b-A+d,H=y-P+2*d,tt=v-B+2*d,V=b-M+2*d,st=y-1+3*d,X=v-1+3*d,lt=b-1+3*d,ut=h&255,gt=u&255,kt=f&255,Qt=this.perm[ut+this.perm[gt+this.perm[kt]]]%12,$=this.perm[ut+R+this.perm[gt+T+this.perm[kt+A]]]%12,O=this.perm[ut+P+this.perm[gt+B+this.perm[kt+M]]]%12,j=this.perm[ut+1+this.perm[gt+1+this.perm[kt+1]]]%12,nt=.6-y*y-v*v-b*b;nt<0?n=0:(nt*=nt,n=nt*nt*this.dot3(this.grad3[Qt],y,v,b));let mt=.6-E*E-L*L-D*D;mt<0?r=0:(mt*=mt,r=mt*mt*this.dot3(this.grad3[$],E,L,D));let xt=.6-H*H-tt*tt-V*V;xt<0?o=0:(xt*=xt,o=xt*xt*this.dot3(this.grad3[O],H,tt,V));let Dt=.6-st*st-X*X-lt*lt;return Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[j],st,X,lt)),32*(n+r+o+a)}noise4d(t,e,i,n){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(t+e+i+n)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(i+x),v=Math.floor(n+x),b=(m+p+y+v)*c,R=m-b,T=p-b,A=y-b,P=v-b,B=t-R,M=e-T,E=i-A,L=n-P,D=B>M?32:0,H=B>E?16:0,tt=M>E?8:0,V=B>L?4:0,st=M>L?2:0,X=E>L?1:0,lt=D+H+tt+V+st+X,ut=o[lt][0]>=3?1:0,gt=o[lt][1]>=3?1:0,kt=o[lt][2]>=3?1:0,Qt=o[lt][3]>=3?1:0,$=o[lt][0]>=2?1:0,O=o[lt][1]>=2?1:0,j=o[lt][2]>=2?1:0,nt=o[lt][3]>=2?1:0,mt=o[lt][0]>=1?1:0,xt=o[lt][1]>=1?1:0,Dt=o[lt][2]>=1?1:0,Kt=o[lt][3]>=1?1:0,Tt=B-ut+c,I=M-gt+c,xe=E-kt+c,ee=L-Qt+c,oe=B-$+2*c,Nt=M-O+2*c,_e=E-j+2*c,zt=L-nt+2*c,C=B-mt+3*c,S=M-xt+3*c,F=E-Dt+3*c,J=L-Kt+3*c,rt=B-1+4*c,K=M-1+4*c,wt=E-1+4*c,dt=L-1+4*c,vt=m&255,ie=p&255,at=y&255,yt=v&255,Ft=a[vt+a[ie+a[at+a[yt]]]]%32,Ht=a[vt+ut+a[ie+gt+a[at+kt+a[yt+Qt]]]]%32,Et=a[vt+$+a[ie+O+a[at+j+a[yt+nt]]]]%32,ae=a[vt+mt+a[ie+xt+a[at+Dt+a[yt+Kt]]]]%32,Yt=a[vt+1+a[ie+1+a[at+1+a[yt+1]]]]%32,ue=.6-B*B-M*M-E*E-L*L;ue<0?h=0:(ue*=ue,h=ue*ue*this.dot4(r[Ft],B,M,E,L));let k=.6-Tt*Tt-I*I-xe*xe-ee*ee;k<0?u=0:(k*=k,u=k*k*this.dot4(r[Ht],Tt,I,xe,ee));let pt=.6-oe*oe-Nt*Nt-_e*_e-zt*zt;pt<0?f=0:(pt*=pt,f=pt*pt*this.dot4(r[Et],oe,Nt,_e,zt));let q=.6-C*C-S*S-F*F-J*J;q<0?d=0:(q*=q,d=q*q*this.dot4(r[ae],C,S,F,J));let Q=.6-rt*rt-K*K-wt*wt-dt*dt;return Q<0?g=0:(Q*=Q,g=Q*Q*this.dot4(r[Yt],rt,K,wt,dt)),27*(h+u+f+d+g)}};var ur=class s extends gi{constructor(t,e,i,n,r,o,a){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Uf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Xe(this.width,this.height,{type:ai}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new be({defines:Object.assign({},Jr.defines),uniforms:li.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pa,this.normalMaterial.blending=$e,this.pdMaterial=new be({defines:Object.assign({},Qr.defines),uniforms:li.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new be({defines:Object.assign({},jr.defines),uniforms:li.clone(jr.uniforms),vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:$e}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new be({uniforms:li.clone(zn.uniforms),vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:La,blendDst:lr,blendEquation:Ii,blendSrcAlpha:ka,blendDstAlpha:lr,blendEquationAlpha:Ii}),this.blendMaterial=new be({uniforms:li.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yh,blendSrc:La,blendDst:lr,blendEquation:Ii,blendSrcAlpha:ka,blendDstAlpha:lr,blendEquationAlpha:Ii}),this.fsQuad=new ji(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=Pn,this.depthTexture.type=Cn,this.normalRenderTarget=new Xe(this.width,this.height,{minFilter:ni,magFilter:ni,type:ai,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=du(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=$e,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$e,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$e,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$e,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=$e,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,i,n,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,r=e.clearAlpha||r,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Wa,i=t*t*4,n=new Uint8Array(i);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;n[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,n[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new ss(n,t,t,yi,Gi);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}};ur.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bt=(s,t,e)=>s<t?t:s>e?e:s,Ri=(s,t,e)=>s+(t-s)*e,Xa=s=>s*s*(3-2*s),qa=(s,t,e)=>Xa(Bt((e-s)/(t-s),0,1)),Ya=(s,t,e,i)=>Ri(s,t,1-Math.exp(-e*i)),Nf=Math.PI*2;function c1(s){for(;s>Math.PI;)s-=Nf;for(;s<-Math.PI;)s+=Nf;return s}function us(s,t,e,i){return s+c1(t-s)*(1-Math.exp(-e*i))}function Ce(s,t,e,i){let n=s-e,r=t-i;return Math.sqrt(n*n+r*r)}function Le(s=1){let t=s%2147483647;t<=0&&(t+=2147483646);let e=()=>(t=t*16807%2147483647)/2147483647;return e.range=(i,n)=>i+(n-i)*e(),e.int=(i,n)=>Math.floor(i+(n-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}var et=(s,t)=>s+(t-s)*Math.random(),te=s=>s[Math.floor(Math.random()*s.length)],re=s=>Math.random()<s,h1="\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",le=s=>String(s).replace(/[0-9]/g,t=>h1[t]);function zf(s){s=Math.max(0,Math.ceil(s));let t=Math.floor(s/60),e=s%60;return le(String(t).padStart(2,"0")+":"+String(e).padStart(2,"0"))}function $a(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new he,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Bf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Bf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bf(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}var Of=new Map;function z(s,t=.85,e){let i=s+"|"+t+(e?JSON.stringify(e):""),n=Of.get(i);return n||(n=new Rt(Object.assign({color:s,roughness:t,metalness:0},e||{})),Of.set(i,n)),n}var Ff=new Map;function Ut(s,t){let e=Ff.get(s);return e||(e=t(),Ff.set(s,e)),e}function Bn(s,t,e=12){return Ut("tp_"+s,()=>{let i=[...t].reverse().map(([n,r])=>new it(n,r));return new rs(i,e)})}var Ni={thigh:[[0,.03],[.07,.02],[.087,-.02],[.084,-.12],[.075,-.24],[.062,-.35],[.053,-.42],[0,-.445]],pantsThigh:[[0,.035],[.08,.025],[.095,-.02],[.092,-.14],[.084,-.28],[.072,-.4],[.066,-.43],[0,-.445]],shortsLeg:[[0,.04],[.09,.03],[.102,-.03],[.1,-.15],[.098,-.23],[0,-.24]],shin:[[0,.03],[.05,.02],[.055,-.03],[.062,-.1],[.056,-.19],[.043,-.3],[.034,-.39],[0,-.42]],pantsShin:[[0,.03],[.064,.02],[.066,-.06],[.064,-.2],[.062,-.34],[.064,-.4],[0,-.415]],sock:[[0,0],[.046,-0],[.047,-.1],[.04,-.14],[0,-.141]],upperArm:[[0,.03],[.05,.02],[.054,-.04],[.05,-.12],[.043,-.22],[.037,-.28],[0,-.3]],sleeveArm:[[0,.035],[.06,.025],[.063,-.04],[.058,-.14],[.051,-.24],[.047,-.29],[0,-.3]],shortSleeve:[[0,.03],[.058,.025],[.062,-.04],[.06,-.12],[.059,-.15],[0,-.152]],forearm:[[0,.025],[.037,.015],[.043,-.05],[.037,-.14],[.028,-.235],[0,-.25]],sleeveFore:[[0,.025],[.048,.015],[.05,-.06],[.045,-.16],[.04,-.23],[0,-.235]],neck:[[0,.09],[.044,.08],[.047,.03],[.056,-.01],[0,-.02]]};function to(s,t,e,i=1,n=1,r=1,o=0){return Ut("cap_"+s,()=>{let a=new Ui(t,e,4,8);return o&&a.rotateX(o),a.scale(i,n,r),a})}function Ct(s,t,e=!0){let i=new Y(s,t);return i.castShadow=e,i.receiveShadow=!1,i}var fu=new Map;function u1(s,t){let e=s+t;if(fu.has(e))return fu.get(e);let i=document.createElement("canvas");i.width=i.height=128;let n=i.getContext("2d");n.fillStyle=t,n.font="900 96px Cairo, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),64,70);let r=new fn(i);return r.colorSpace=qe,fu.set(e,r),r}var Xf=.92,pu=.42,d1=1.04,Za=.41,mu=.28,Ka=.25,Hf=s=>z(s,.58),Vf=(s,t)=>"#"+new Pt(s).multiplyScalar(t).getHexString();function dr(s){let t=new ne,e=s.scale||1,i=s.build||1;t.scale.setScalar(e);let n=Hf(s.skin),r=Hf(Vf(s.skin,.72)),o=s.top||{type:"tshirt",color:"#c33"},a=s.bottom||{type:"pants",color:"#333"},l=z(o.color,.9),c=z(o.color2||"#ffffff",.9),h=z(a.color,.92),u=z(s.shoes||"#e8e4dc",.75),f=z(s.slippers?Vf(s.shoes||"#2e8b57",.7):"#f2f0ea",.8),d=z(s.hair||"#1a1210",.95),g={},x=(O,j,nt,mt,xt)=>{let Dt=new Hr;return Dt.name=j,Dt.position.set(nt,mt,xt),O.add(Dt),g[j]=Dt,Dt},m=x(t,"hips",0,Xf,0),p=o.type==="galabeya"||o.type==="dress",y=Ct(Ut("pelvis",()=>new Xt(1,18,12)),p?l:h);y.scale.set(.168*i,.13,.125*i),y.position.y=0,m.add(y);let v=Ct(Ut("belt",()=>new je(.152,.018,6,22)),p?l:h,!1);v.rotation.x=Math.PI/2,v.scale.set(i,.8*i,1),v.position.y=.08,m.add(v);let b=x(m,"spine",0,.06,0),R=Ut("torso",()=>{let O=[[0,-.03],[.128,-.02],[.138,.06],[.132,.15],[.145,.25],[.163,.34],[.176,.4],[.172,.45],[.14,.49],[.085,.51],[0,.515]].map(([j,nt])=>new it(j,nt));return new rs(O,22)}),T=Ct(R,l);T.scale.set(1.08*i,1,.66*i),b.add(T);let A=Ut("pec",()=>new Xt(.075,12,8));for(let O of[-1,1]){let j=Ct(A,(o.type==="tank",l),!1);j.position.set(O*.06*i,.36,.055*i),j.scale.set(1,.75,.55),b.add(j)}let P=Ct(Ut("backM",()=>new Xt(.15,14,8)),l,!1);if(P.position.set(0,.36,-.035*i),P.scale.set(1.05*i,.6,.5*i),b.add(P),!["galabeya","dress","suit"].includes(o.type)){let O=Ct(Ut("hem",()=>new je(.14,.014,6,22)),l,!1);O.rotation.x=Math.PI/2,O.scale.set(1.08*i,.7*i,1),O.position.y=-.015,b.add(O)}if(o.type==="tank"){let O=Ut("tankShoulder",()=>new Xt(.07,12,8));for(let nt of[-1,1]){let mt=Ct(O,n);mt.position.set(nt*.15*i,.45,0),mt.scale.set(1.1,.75,.95),b.add(mt)}let j=Ct(Ut("tankV",()=>new Xt(.06,10,8)),n,!1);j.position.set(0,.47,.06*i),j.scale.set(1,.6,.5),b.add(j)}else if(["tshirt","jersey"].includes(o.type)){let O=Ct(Ut("crew",()=>new je(.06,.012,6,16)),o.type==="jersey"?c:l,!1);O.rotation.x=Math.PI/2-.25,O.position.set(0,.5,.008),b.add(O)}if(o.type==="tracksuit"){let O=Ct(Ut("zip",()=>new fe(.012,.44,.01)),c,!1);O.position.set(0,.25,.098*i),b.add(O);let j=Ct(Ut("tsCollar",()=>new mi(.068,.075,.06,14,1,!0)),l,!1);j.position.y=.52,b.add(j)}if(o.type==="shirt"){let O=Ct(Ut("collar",()=>new je(.062,.02,6,14)),c,!1);O.rotation.x=Math.PI/2-.2,O.position.y=.505,b.add(O);for(let j=0;j<4;j++){let nt=Ct(Ut("btn",()=>new Xt(.008,6,4)),c,!1);nt.position.set(0,.42-j*.1,.1*i+(j===0?.008:0)),b.add(nt)}}if(o.type==="suit"){let O=Ct(Ut("tie",()=>new fe(.035,.26,.012)),z(o.color2||"#7a1f1f"),!1);O.position.set(0,.36,.098*i),b.add(O);let j=Ct(Ut("shirtV",()=>new fe(.08,.14,.01)),z("#f2f2f2"),!1);j.position.set(0,.44,.094*i),b.add(j)}if(o.number!=null){let O=Ct(Ut("numPlane",()=>new se(.19,.19)),new Rt({map:u1(o.number,o.numColor||"#fff"),transparent:!0,roughness:.9}),!1);O.position.set(0,.3,-.105*i),O.rotation.y=Math.PI,O.userData.keep=!0,b.add(O)}if(o.type==="galabeya"||o.type==="dress"){let O=Ct(Ut("skirt",()=>{let j=[[.165,.1],[.2,-.1],[.26,-.45],[.31,-.8]].map(([nt,mt])=>new it(nt,mt));return new rs(j,22)}),z(o.color,.9,{side:Te}));O.scale.set(i,1,.8*i),x(m,"skirt",0,0,0).add(O)}let B=x(b,"neck",0,.5,0),M=Ct(Bn("neck",Ni.neck,12),n);B.add(M);let E=x(B,"head",0,.062,0);E.scale.setScalar(d1);let L=Ct(Ut("cranium",()=>new Xt(.105,22,16)),n);L.scale.set(.88,1,1),L.position.set(0,.125,-.008),E.add(L);let D=Ct(Ut("jaw",()=>new Xt(.08,16,12)),n);D.scale.set(.82,.9,.95),D.position.set(0,.068,.018),E.add(D);for(let O of[-1,1]){let j=Ct(to("ear",.016,.03,.55,1,1),n,!1);j.position.set(O*.091,.112,-.006),j.rotation.z=O*.15,E.add(j)}let H=z("#f2eee6",.35),tt=z("#2a1a10",.3);for(let O of[-1,1]){let j=Ct(Ut("eyeW",()=>new Xt(.0125,10,8)),H,!1);j.position.set(O*.033,.122,.083),j.scale.set(1.25,.8,.6),E.add(j);let nt=Ct(Ut("eyeP",()=>new Xt(.0075,8,6)),tt,!1);nt.position.set(O*.033,.122,.0905),E.add(nt);let mt=Ct(Ut("lid",()=>new Xt(.014,10,6,0,Math.PI*2,0,Math.PI*.45)),n,!1);mt.position.set(O*.033,.124,.081),mt.scale.set(1.25,.8,.75),E.add(mt);let xt=Ct(Ut("brow",()=>new fe(.034,.008,.012)),d,!1);xt.position.set(O*.034,.141,.088),xt.rotation.z=O*-.14,E.add(xt)}let V=Ct(Ut("nose",()=>{let O=new Ai(.016,.042,6);return O.rotateX(Math.PI/2+.55),O}),n,!1);V.position.set(0,.1,.098),E.add(V);let st=Ct(Ut("nostril",()=>new Xt(.014,8,6)),n,!1);st.position.set(0,.088,.1),st.scale.set(1.2,.7,.8),E.add(st);let X=Ct(Ut("lip",()=>new Ui(.008,.026,3,6)),r,!1);if(X.rotation.z=Math.PI/2,X.position.set(0,.062,.09),E.add(X),s.mustache){let O=Ct(Ut("mustache",()=>new Ui(.009,.04,3,6)),d,!1);O.rotation.z=Math.PI/2,O.position.set(0,.075,.095),E.add(O)}if(s.beard){let O=Ct(Ut("beard",()=>new Xt(.085,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2)),d,!1);O.position.set(0,.08,.02),O.scale.set(.9,.7,1),E.add(O)}if(s.glasses){let O=z("#111",.3);for(let nt of[-1,1]){let mt=Ct(Ut("glass",()=>new je(.019,.0035,5,14)),O,!1);mt.position.set(nt*.034,.122,.095),E.add(mt)}let j=Ct(Ut("gbridge",()=>new fe(.03,.004,.004)),O,!1);j.position.set(0,.124,.097),E.add(j)}let lt=new ne;E.add(lt),x1(lt,s.hairStyle||"short",d,s);let ut=["tracksuit","shirt","galabeya","suit","dress","jacket"].includes(o.type),gt=["tshirt","jersey"].includes(o.type);for(let O of["l","r"]){let j=O==="l"?1:-1,nt=x(b,O+"Sh",j*.19*i,.435,0),mt=Ct(Ut("delt",()=>new Xt(.055,12,8)),o.type==="tank"?n:l);if(mt.scale.set(1.05,.95,1),nt.add(mt),nt.add(Ct(Bn(ut?"sleeveArm":"upperArm",ut?Ni.sleeveArm:Ni.upperArm),ut?l:n)),gt&&nt.add(Ct(Bn("shortSleeve",Ni.shortSleeve),l)),o.type==="tracksuit"){let I=Ct(Ut("armStripe",()=>{let xe=new fe(.012,mu,.02);return xe.translate(0,-mu/2,0),xe}),c,!1);I.position.x=j*.05,nt.add(I)}let xt=x(nt,O+"El",0,-mu+.02,0);if(xt.add(Ct(Bn(ut?"sleeveFore":"forearm",ut?Ni.sleeveFore:Ni.forearm),ut?l:n)),o.type==="tracksuit"){let I=Ct(Ut("foreStripe",()=>{let xe=new fe(.012,Ka-.04,.02);return xe.translate(0,-(Ka-.04)/2,0),xe}),c,!1);I.position.x=j*.044,xt.add(I)}if(ut){let I=Ct(Ut("wrist",()=>new mi(.027,.03,.03,8)),n,!1);I.position.y=-Ka+.01,xt.add(I)}let Dt=x(xt,O+"Hand",0,-Ka-.01,0),Kt=Ct(to("palm",.032,.05,1.15,1,.62),n);Kt.position.y=-.035,Dt.add(Kt);let Tt=Ct(to("thumb",.012,.03),n,!1);Tt.position.set(0,-.03,.03),Tt.rotation.x=.6,Dt.add(Tt)}let kt=a.type==="shorts",Qt=o.type==="galabeya"||o.type==="dress";for(let O of["l","r"]){let j=O==="l"?1:-1,nt=x(m,O+"Th",j*.09*i,-.03,0),mt=Ct(Bn(kt||Qt?"thigh":"pantsThigh",kt||Qt?Ni.thigh:Ni.pantsThigh),kt?n:h);if(mt.scale.set(Math.sqrt(i),1,Math.sqrt(i)),nt.add(mt),kt){let Tt=Ct(Bn("shortsLeg",Ni.shortsLeg),h);Tt.scale.set(Math.sqrt(i),1,Math.sqrt(i)),nt.add(Tt)}if(!kt&&(a.type==="tracksuit"||o.type==="tracksuit")){let Tt=Ct(Ut("legStripe",()=>{let I=new fe(.014,pu,.022);return I.translate(0,-pu/2,0),I}),c,!1);Tt.position.x=j*.088,nt.add(Tt)}let xt=x(nt,O+"Kn",0,-pu,0),Dt=Ct(Bn(kt?"shin":"pantsShin",kt?Ni.shin:Ni.pantsShin),kt?n:h);if(Dt.position.z=kt?-.006:0,xt.add(Dt),kt&&s.socks){let Tt=Ct(Bn("sock",Ni.sock),z(s.socks,.95),!1);Tt.position.y=-Za+.14,xt.add(Tt)}if(!kt&&(a.type==="tracksuit"||o.type==="tracksuit")){let Tt=Ct(Ut("shinStripe",()=>{let I=new fe(.014,Za-.04,.02);return I.translate(0,-(Za-.04)/2,0),I}),c,!1);Tt.position.x=j*.064,xt.add(Tt)}let Kt=x(xt,O+"An",0,-Za,0);if(s.slippers){let Tt=Ct(to("bareFoot",.036,.14,1.05,.62,1,Math.PI/2),n);Tt.position.set(0,-.032,.045),Kt.add(Tt);let I=Ct(Ut("slipSole",()=>new fe(.095,.018,.25)),f);I.position.set(0,-.062,.045),Kt.add(I);let xe=Ct(Ut("slipStrap",()=>new fe(.1,.03,.05)),u,!1);xe.position.set(0,-.035,.07),Kt.add(xe)}else{let Tt=Ct(to("shoe",.046,.16,1.08,.72,1,Math.PI/2),u);Tt.position.set(0,-.032,.045),Kt.add(Tt);let I=Ct(Ut("sole",()=>new fe(.096,.02,.255)),f);I.position.set(0,-.063,.045),Kt.add(I);let xe=Ct(Ut("tongue",()=>new fe(.05,.03,.06)),f,!1);xe.position.set(0,-.004,.06),xe.rotation.x=-.4,Kt.add(xe)}}let $=g1(t);return{root:t,J:g,look:s,scale:e,mesh:$}}function qf(s){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=s==="cloth"?7:13,n=()=>(i=i*16807%2147483647)/2147483647;if(e.fillStyle="#f2f2f2",e.fillRect(0,0,256,256),s==="cloth"){for(let o=0;o<40;o++){let a=n()*256,l=n()*256,c=30+n()*90,h=n()*Math.PI,u=e.createLinearGradient(a,l,a+Math.cos(h)*c,l+Math.sin(h)*c);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,`rgba(0,0,0,${.06+n()*.08})`),u.addColorStop(1,"rgba(0,0,0,0)"),e.strokeStyle=u,e.lineWidth=4+n()*8,e.lineCap="round",e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+n()*30,l+n()*30,a+Math.cos(h)*c,l+Math.sin(h)*c),e.stroke()}for(let o=0;o<256;o+=2)e.fillStyle=`rgba(0,0,0,${.035+(o%4?.02:0)})`,e.fillRect(0,o,256,1);for(let o=0;o<256;o+=2)e.fillStyle="rgba(255,255,255,0.03)",e.fillRect(o,0,1,256)}else{for(let o=0;o<9e3;o++)e.fillStyle=`rgba(${n()<.5?"90,40,30":"255,230,220"},${n()*.06})`,e.fillRect(n()*256,n()*256,1+n(),1+n());for(let o=0;o<25;o++){let a=n()*256,l=n()*256,c=10+n()*40,h=e.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(160,70,60,0.05)"),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(a-c,l-c,c*2,c*2)}}let r=new fn(t);return r.colorSpace=qe,r.wrapS=r.wrapT=di,r.repeat.set(s==="cloth"?3:2,s==="cloth"?3:2),r.anisotropy=4,r}var Ja=qf("cloth"),Gf=qf("skin"),f1=new Rt({vertexColors:!0,roughness:.9,metalness:0,map:Ja,bumpMap:Ja,bumpScale:2.2}),p1=new Rt({vertexColors:!0,roughness:.52,metalness:0,map:Gf,bumpMap:Gf,bumpScale:.6}),m1=new Rt({vertexColors:!0,roughness:.9,metalness:0,side:Te,map:Ja,bumpMap:Ja,bumpScale:2.2});function g1(s){s.updateMatrixWorld(!0);let t=new Wt().copy(s.matrixWorld).invert(),e=[];s.traverse(c=>{c.isBone&&e.push(c)});let i=new Map(e.map((c,h)=>[c,h])),n={body:[],skin:[],skirt:[]},r=[],o=new Wt;s.traverse(c=>{if(!c.isMesh||c.userData.keep)return;let h=c.parent;for(;h&&!h.isBone;)h=h.parent;if(!h)return;let u=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let y of Object.keys(u.attributes))y!=="position"&&y!=="normal"&&y!=="uv"&&u.deleteAttribute(y);u.attributes.uv||u.setAttribute("uv",new Ae(new Float32Array(u.attributes.position.count*2),2)),o.multiplyMatrices(t,c.matrixWorld),u.applyMatrix4(o);let f=u.attributes.position.count,d=new Float32Array(f*3),g=c.material.color;for(let y=0;y<f;y++)d[y*3]=g.r,d[y*3+1]=g.g,d[y*3+2]=g.b;u.setAttribute("color",new Ae(d,3));let x=new Uint16Array(f*4),m=new Float32Array(f*4),p=i.get(h);for(let y=0;y<f;y++)x[y*4]=p,m[y*4]=1;u.setAttribute("skinIndex",new Ae(x,4)),u.setAttribute("skinWeight",new Ae(m,4)),(c.material.side===Te?n.skirt:c.material.roughness<.65?n.skin:n.body).push(u),r.push(c)});for(let c of r)c.parent.remove(c);let a=new va(e),l=null;for(let[c,h]of Object.entries(n)){if(!h.length)continue;let u=$a(h,!1);h.forEach(d=>d.dispose());let f=new xa(u,c==="skirt"?m1:c==="skin"?p1:f1);f.castShadow=!0,f.frustumCulled=!1,s.add(f),f.bind(a),l||(l=f)}return l}function x1(s,t,e,i){let n=(a,l,c,h,u=1,f=1,d=1,g=0)=>{let x=Ct(a,e,!1);return x.position.set(l,c,h),x.scale.set(u,f,d),x.rotation.x=g,s.add(x),x},r=Ut("hairCap2",()=>new Xt(.112,20,12,0,Math.PI*2,0,Math.PI*.6)),o=Ut("hairVol",()=>new Xt(.08,14,8));switch(t){case"bald":break;case"buzz":n(r,0,.128,-.01,.86,.97,.98,-.5);break;case"curly":{n(r,0,.13,-.01,.9,1,1,-.5);let a=Ut("curl",()=>new Xt(.032,8,6));for(let l=0;l<16;l++){let c=l/16*Math.PI*2;n(a,Math.cos(c)*.075,.205+Math.sin(l*1.7)*.012,Math.sin(c)*.085-.012)}n(o,0,.215,-.01,1,.6,1.1);break}case"cap":{let a=z(i.capColor||"#e8e2d0",.8),l=Ut("capDome",()=>new Xt(.114,20,10,0,Math.PI*2,0,Math.PI*.52)),c=Ct(l,a,!1);c.position.set(0,.13,-.008),c.scale.set(.92,1,1.02),c.rotation.x=-.25,s.add(c);let h=Ct(Ut("brim2",()=>new mi(.075,.075,.01,16,1,!1,-Math.PI/2,Math.PI)),a,!1);h.position.set(0,.162,.07),h.rotation.set(.2,Math.PI/2,0),h.scale.set(1.15,1,1),s.add(h),n(r,0,.122,-.016,.86,.9,.95,-.7);break}case"scarf":{let a=z(i.scarfColor||"#3b2a4a",.95),l=Ct(Ut("scarf",()=>new Xt(.128,18,14,0,Math.PI*2,0,Math.PI*.62)),a,!1);l.position.set(0,.115,-.014),l.scale.set(.92,1,1),l.rotation.x=-.3,s.add(l);let c=Ct(Ut("drape",()=>new mi(.11,.19,.24,16,1,!0)),a,!1);c.position.set(0,-.02,-.02),s.add(c);break}case"gray":n(r,0,.12,-.014,.89,.85,.98,-.95);break;case"short":default:{n(r,0,.13,-.01,.89,1,1,-.5),n(o,0,.198,.006,.95,.42,1.12);let a=Ut("fringe2",()=>new Ui(.018,.1,3,6)),l=n(a,0,.165,.078);l.rotation.z=Math.PI/2;break}}}var Fn=["hy","hrx","hry","hrz","srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex","ltx","ltz","lkx","lax","rtx","rtz","rkx","rax"],gu=["srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex"],eo={hy:0,hrx:0,hry:0,hrz:0,srx:0,sry:0,srz:0,nrx:0,nry:0,lsx:0,lsz:.1,lex:-.15,rsx:0,rsz:-.1,rex:-.15,ltx:0,ltz:0,lkx:0,lax:0,rtx:0,rtz:0,rkx:0,rax:0};function Oe(s){let t=s.channels==="upper"?gu:s.channels||Fn,e=Object.assign({},eo),i=s.frames.map(([n,r])=>{let o=Object.assign({},r==="def"?eo:e,r==="def"?{}:r);return e=o,[n,o]});return{dur:s.dur??i[i.length-1][0],loop:!!s.loop,hold:!!s.hold,fadeIn:s.fadeIn??.07,fadeOut:s.fadeOut??.15,channels:t,frames:i}}function Wf(s){return Oe({dur:1.5,frames:[[0,"def"],[.12,{hy:-.16,ltx:-.35,lkx:.75,rtx:-.35,rkx:.75,lax:.3,rax:.3,lsx:-1,rsx:-1,srx:.2}],[.38,{hy:-.48,hrz:s*1.3,srx:0,srz:s*.15,lsx:-2.9,rsx:-2.9,lsz:.25,rsz:-.25,lex:-.1,rex:-.1,ltx:-.1,rtx:-.1,ltz:-s*.35,rtz:-s*.25,lkx:.3,rkx:.4,lax:0,rax:0,nrx:0}],[.8,{hy:-.74,hrz:s*1.52}],[1.15,{hy:-.4,hrz:s*.6,lsx:-.6,rsx:-.6,lkx:.9,rkx:.9,ltx:-.5,rtx:-.5}],[1.5,"def"]]})}var v1={kick:Oe({frames:[[0,"def"],[.13,{rtx:.78,rkx:1.5,rax:.35,ltx:-.12,lkx:.28,hy:-.04,lsx:-.7,lsz:.6,rsx:.6,rsz:-.3,srx:.08,sry:.35,nry:-.25,hry:.12}],[.21,{rtx:-1.25,rkx:.12,rax:.4,ltx:.08,lkx:.22,lax:-.1,lsx:.55,lsz:.75,rsx:-.55,rsz:-.45,srx:-.12,sry:-.35,nry:.1,hry:-.15,hy:-.02}],[.36,{rtx:-.75,rkx:.55,rax:.15,srx:-.04,sry:-.15,hry:-.05}],[.52,"def"]]}),header:Oe({frames:[[0,"def"],[.1,{hy:-.09,ltx:-.35,lkx:.7,lax:.3,rtx:-.35,rkx:.7,rax:.3,lsx:-.4,rsx:-.4,srx:.15}],[.24,{hy:.3,ltx:.05,lkx:.35,lax:.4,rtx:.15,rkx:.6,rax:.4,srx:-.32,nrx:-.45,lsx:-1.1,lsz:.7,rsx:-1.1,rsz:-.7}],[.34,{hy:.26,srx:.38,nrx:.55}],[.48,{hy:.02,srx:.12,nrx:.1,ltx:-.2,lkx:.5,rtx:-.2,rkx:.5}],[.6,"def"]]}),volley:Oe({frames:[[0,"def"],[.1,{rtx:.6,rkx:1.4,rax:.3,lkx:.3,hrx:-.1,lsx:-.5,lsz:.9,rsz:-.8,sry:.3}],[.2,{rtx:-1.55,rkx:.08,rax:.4,hrx:-.28,srx:-.15,lsz:1.1,rsz:-1,sry:-.3,hy:-.04}],[.36,{rtx:-.9,rkx:.5,hrx:-.1,srx:0}],[.5,"def"]]}),pass:Oe({frames:[[0,"def"],[.1,{rtx:.45,rtz:.12,rkx:.85,rax:.1,lkx:.2,lsx:-.3,lsz:.45,rsz:-.4,sry:.2,hry:.18,hy:-.03}],[.17,{rtx:-.62,rtz:-.22,rkx:.22,rax:.15,sry:-.18,hry:-.28,lsz:.5,rsz:-.35}],[.27,{rtx:-.3,rtz:-.08,rkx:.32,hry:-.1}],[.4,"def"]]}),slide:Oe({fadeIn:.05,frames:[[0,"def"],[.13,{hy:-.7,hrx:-.78,srx:.18,nrx:.45,rtx:-.88,rkx:.05,rax:.35,ltx:-1.25,ltz:.35,lkx:1.9,lax:.3,lsx:-.7,lsz:.75,lex:-.3,rsx:.55,rsz:-1.05,rex:-.1}],[.72,{hy:-.7}],[.98,{hy:-.38,hrx:-.1,srx:.3,rtx:-.55,rkx:.9,ltx:-1.3,lkx:1.7,ltz:.1,rsx:.2,rsz:-.5,lsx:-.4,lsz:.4,nrx:0}],[1.22,"def"]]}),fall:Oe({fadeIn:.05,frames:[[0,"def"],[.18,{hy:-.1,hrx:.45,lsx:-1.6,lsz:.5,rsx:-1.4,rsz:-.5,lex:-.3,rex:-.3,ltx:.4,lkx:.6,rtx:-.3,rkx:.3,nrx:-.3}],[.42,{hy:-.73,hrx:1.5,srx:0,lsx:-2.7,lsz:.4,rsx:-2.5,rsz:-.4,lex:-.2,rex:-.2,ltx:.05,lkx:.25,rtx:.1,rkx:.4,nrx:-.65}],[.6,{hy:-.75}],[1,{rkx:1.7,rtx:.25,rax:.5,lsx:-2.2,rsx:-1.2,rsz:-.9,nry:.5,nrx:-.9}],[1.35,{rkx:1.3,lsx:-2.6,rsx:-1.6,nry:.2}],[1.7,{rkx:1.75,lsx:-2.3,rsx:-1.1,nry:.5}],[2.05,{hy:-.44,hrx:.35,srx:.2,ltx:-1.45,lkx:1.7,lax:.25,rtx:.15,rkx:1.6,rax:0,lsx:-.4,lsz:.35,rsx:-.3,rsz:-.35,lex:-.4,rex:-.4,nrx:0,nry:0}],[2.45,{hy:-.14,hrx:.12,srx:.12,ltx:-.5,lkx:.7,lax:0,rtx:.05,rkx:.35,lsx:0,rsx:0,lsz:.15,rsz:-.15,lex:-.2,rex:-.2}],[2.75,"def"]]}),pull:Oe({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.18,{srx:-.18,lsx:-1.45,lsz:.12,lex:-.15,rsx:-1.35,rsz:-.12,rex:-.25,nrx:.12}],[.25,{}]]}),pulled:Oe({channels:"upper",loop:!0,frames:[[0,{srx:.32,lsx:-2.3,lsz:.6,lex:-.3,rsx:-1.2,rsz:-.9,rex:-.4,nrx:-.35}],[.22,{lsx:-1.3,lsz:.95,rsx:-2.25,rsz:-.5}],[.44,{lsx:-2.3,lsz:.6,rsx:-1.2,rsz:-.9}]]}),airplane:Oe({channels:"upper",loop:!0,frames:[[0,{lsx:-.1,lsz:1.45,rsx:-.1,rsz:-1.45,lex:0,rex:0,srz:.18,srx:.05}],[.6,{srz:-.18}],[1.2,{srz:.18}]]}),jump:Oe({loop:!0,frames:[[0,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8,lsz:.35,rsz:-.35,lex:-.2,rex:-.2}],[.32,{hy:.22,ltx:.05,lkx:.15,rtx:.05,rkx:.15,lax:.4,rax:.4,lsx:-3,rsx:-3}],[.64,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8}]]}),sad:Oe({channels:"upper",hold:!0,dur:.5,frames:[[0,"def"],[.4,{srx:.15,nrx:.35,lsx:-2.5,lsz:.95,lex:-2,rsx:-2.5,rsz:-.95,rex:-2}],[.5,{}]]}),cheer:Oe({channels:"upper",loop:!0,frames:[[0,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,lsz:.2,rsx:-2.95,rsz:-.2,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}]]}),wave:Oe({channels:"upper",loop:!0,frames:[[0,{rsx:-2.5,rsz:-.45,rex:-.7,lsx:-.2,nrx:.15}],[.25,{rsz:-.95,rex:-.4}],[.5,{rsz:-.45,rex:-.7}]]}),point:Oe({channels:"upper",hold:!0,dur:.3,frames:[[0,"def"],[.25,{rsx:-1.55,rsz:-.15,rex:-.05,srx:-.05,nrx:.05}],[.3,{}]]}),holdBall:Oe({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.2,{lsx:-1.05,rsx:-1.05,lsz:.15,rsz:-.15,lex:-1.15,rex:-1.15}],[.25,{}]]}),throw:Oe({channels:"upper",frames:[[0,{lsx:-1.05,rsx:-1.05,lex:-1.15,rex:-1.15}],[.25,{rsx:-2.95,rsz:-.25,rex:-.9,lsx:-.6,sry:.45,srx:-.15}],[.4,{rsx:-.9,rex:-.1,sry:-.35,srx:.18}],[.7,"def"]]}),dazed:Oe({channels:"upper",loop:!0,frames:[[0,{nry:.32,srz:.08,nrx:.15,lsz:.25,rsz:-.25}],[.8,{nry:-.32,srz:-.08}],[1.6,{nry:.32,srz:.08}]]}),sit:Oe({hold:!0,dur:.4,fadeIn:.2,frames:[[0,"def"],[.35,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,lax:0,rax:0,srx:.06,lsx:-.5,rsx:-.5,lex:-.8,rex:-.8,lsz:.15,rsz:-.15}],[.4,{}]]}),sitCheer:Oe({loop:!0,frames:[[0,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,srx:.02,lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,rsx:-2.95,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,rsx:-2.7,lex:-.3,rex:-.3}]]}),diveL:Wf(-1),diveR:Wf(1),ready:Oe({hold:!0,dur:.3,fadeIn:.2,channels:["hy","srx","ltx","lkx","lax","rtx","rkx","rax","lsz","rsz","lex","rex","lsx","rsx","ltz","rtz"],frames:[[0,"def"],[.3,{hy:-.1,srx:.22,ltx:-.38,lkx:.75,lax:-.38,rtx:-.38,rkx:.75,rax:-.38,ltz:.12,rtz:-.12,lsz:.45,rsz:-.45,lsx:-.4,rsx:-.4,lex:-.7,rex:-.7}]]})},On=class{constructor(t){this.c=t,this.phase=Math.random()*Math.PI*2,this.spd=0,this.t=Math.random()*10,this.loco=Object.assign({},eo),this.out=Object.assign({},eo),this.layers=[],this.mode="normal",this.stepLenScale=1,this.ampScale=1,this.onStep=null,this.accel=0,this.turn=0,this.look=0,this.lookX=0}play(t,{speed:e=1,restart:i=!0}={}){let n=v1[t];if(!n)return;let r=n.channels===gu;for(let o of this.layers){if(o.name===t&&!i&&!o.stopping)return;(o.a.channels===gu===r||!r)&&(o.stopping=!0)}this.layers.push({name:t,a:n,t:0,w:0,speed:e,stopping:!1})}stop(t){for(let e of this.layers)(!t||e.name===t)&&(e.stopping=!0)}isPlaying(t){return this.layers.some(e=>e.name===t&&!e.stopping)}update(t,e){this.t+=t,this.spd=Ya(this.spd,e,10,t),this.locomotion(t);let i=this.out;for(let n of Fn)i[n]=this.loco[n];for(let n=0;n<this.layers.length;n++){let r=this.layers[n],o=r.a;r.t+=t*r.speed;let a=!1;r.t>=o.dur&&(o.loop?r.t%=o.dur:o.hold?r.t=o.dur:(r.t=o.dur,a=!0));let l=a||r.stopping?0:1,c=l>r.w?1/Math.max(.01,o.fadeIn):1/Math.max(.01,o.fadeOut);if(r.w=Bt(r.w+Math.sign(l-r.w)*c*t,0,1),(a||r.stopping)&&r.w<=0){this.layers.splice(n--,1);continue}let h=o.frames,u=0;for(;u<h.length-2&&h[u+1][0]<r.t;)u++;let[f,d]=h[u],[g,x]=h[Math.min(u+1,h.length-1)],m=g>f?Xa(Bt((r.t-f)/(g-f),0,1)):1,p=Xa(r.w);for(let y of o.channels)i[y]=Ri(i[y],Ri(d[y],x[y],m),p)}this.apply(i)}locomotion(t){let e=this.loco,i=this.spd,n=this.t;if(this.mode==="ride"){this.phase+=t*(1.5+i*1.2);let D=this.phase;Object.assign(e,eo),e.hy=-.32,e.srx=.32,e.nrx=-.25,e.ltx=-1.15+.38*Math.sin(D),e.lkx=1.35+.45*Math.cos(D),e.rtx=-1.15-.38*Math.sin(D),e.rkx=1.35-.45*Math.cos(D),e.lsx=-1.05,e.rsx=-1.05,e.lex=-.35,e.rex=-.35,e.lsz=.22,e.rsz=-.22;return}let r=qa(2.2,5.2,i),o=qa(.05,.7,i),a=1-o,l=Ri(.6,1.3,r)*this.c.scale*this.stepLenScale,c=this.phase;this.phase+=i/l*Math.PI*t,this.onStep&&Math.floor(c/Math.PI)!==Math.floor(this.phase/Math.PI)&&o>.5&&this.onStep(r);let h=this.phase,u=Math.sin(h),f=Math.cos(h),d=qa(5.6,7.2,i),g=(Ri(.36,.7,r)+d*.08)*o*this.ampScale,x=(Ri(.72,1.6,r)+d*.15)*o,m=Ri(.05,.26,r)*o+.06*a,p=-.12*r,y=Math.max(0,f),v=Math.max(0,-f);e.ltx=-g*u+p,e.rtx=g*u+p,e.lkx=m+x*y*y,e.rkx=m+x*v*v;let b=Math.pow(Math.max(0,u),3),R=Math.pow(Math.max(0,-u),3),T=Math.max(0,-u)*Math.max(0,-f),A=Math.max(0,u)*Math.max(0,f);e.lax=-(e.ltx+e.lkx)*.75*o+y*.3*o-.06*a-b*.22*o+T*.45*o,e.rax=-(e.rtx+e.rkx)*.75*o+v*.3*o-.06*a-R*.22*o+A*.45*o,e.ltz=.02,e.rtz=-.02;let P=Math.abs(u);e.hy=o*Ri(-.028*P,.055*(P-.6),r)-.025*r-.012*a,e.hry=-.09*u*o;let B=Bt(-this.turn*i*.022,-.13,.13);e.hrz=.03*u*o*(1-.5*r)+a*.018*Math.sin(n*.7)+B,e.hrx=0,e.srx=Ri(.03,.13,r)*o+a*.015*Math.sin(n*2.1)+Bt(this.accel*.02,-.1,.14),e.sry=-e.hry*1.5,e.srz=-e.hrz*.8,e.nrx=-e.srx*.6;let M=a*.25*Math.sin(n*.37+this.phase);e.nry=-e.sry*.85+Bt(this.look+M,-1.15,1.15),e.nrx+=Bt(this.lookX,-.3,.45);let E=Ri(.32,.85,r)*o*this.ampScale;e.lsx=E*u,e.rsx=-E*u,e.lsz=Ri(.09,.17,r)+a*.01*Math.sin(n*2.1),e.rsz=-e.lsz;let L=Ri(.22,1.3,r)*o+.15*a;e.lex=-L-Math.max(0,-e.lsx)*.45,e.rex=-L-Math.max(0,-e.rsx)*.45}apply(t){let e=this.c.J;e.hips.position.y=Xf+t.hy,e.hips.rotation.set(t.hrx,t.hry,t.hrz),e.spine.rotation.set(t.srx,t.sry,t.srz),e.neck.rotation.set(t.nrx*.5,t.nry*.5,0),e.head.rotation.set(t.nrx*.5,t.nry*.5,0),e.lSh.rotation.set(t.lsx,0,t.lsz),e.rSh.rotation.set(t.rsx,0,t.rsz),e.lEl.rotation.x=t.lex,e.rEl.rotation.x=t.rex,e.lTh.rotation.set(t.ltx,0,t.ltz),e.rTh.rotation.set(t.rtx,0,t.rtz),e.lKn.rotation.x=t.lkx,e.rKn.rotation.x=t.rkx,e.lAn.rotation.x=t.lax,e.rAn.rotation.x=t.rax,e.skirt&&(e.skirt.rotation.x=(t.ltx+t.rtx)*.25)}};function Fe(s,t,e,{repeat:i,color:n=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=s,o.height=t;let a=o.getContext("2d");e(a,s,t);let l=new fn(o);return n&&(l.colorSpace=qe),l.anisotropy=r,i&&(l.wrapS=l.wrapT=di,l.repeat.set(i[0],i[1])),l}function pn(s,t,e,i,n,r,o=1,a=4){for(let l=0;l<n;l++){s.fillStyle=r[Math.floor(i()*r.length)];let c=o+i()*(a-o);s.fillRect(i()*t,i()*e,c,c*(.5+i()))}}function ci(s,t,e,i,n,r,o,a){for(let l=0;l<n;l++){let c=i()*t,h=i()*e,u=o+i()*(a-o),f=s.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,r),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.beginPath(),s.ellipse(c,h,u,u*(.4+i()*.6),i()*3,0,7),s.fill()}}function vu(s,t,e,i,n,r,o=8,a=22){s.strokeStyle=r;for(let l=0;l<n;l++){let c=i()*t,h=i()*e;s.lineWidth=1+i()*1.5,s.beginPath(),s.moveTo(c,h);for(let u=0;u<o;u++)c+=(i()-.5)*a*2,h+=(i()-.5)*a,s.lineTo(c,h),i()<.15&&s.moveTo(c,h);s.stroke()}}function Qf(s,t,e,i,n=3){let r=Le(n),o=48,a=Math.min(4096,Math.round(t*o)),l=Math.min(2048,Math.round(e*o)),c=a/t,h=l/e,u=d=>(d+t/2)*c,f=d=>(d+e/2)*h;return Fe(a,l,d=>{if(s==="asphalt"){d.fillStyle="#7d766a",d.fillRect(0,0,a,l),ci(d,a,l,r,60,"rgba(60,55,48,0.35)",40,160),ci(d,a,l,r,40,"rgba(150,130,100,0.35)",40,140),pn(d,a,l,r,6e4,["rgba(40,36,32,0.25)","rgba(200,190,170,0.18)","rgba(120,110,95,0.3)"],1,3);for(let p=0;p<8;p++){d.fillStyle="rgba(60,57,54,0.28)";let y=r()*a,v=r()*l,b=50+r()*120,R=30+r()*60;d.beginPath(),d.moveTo(y,v);for(let T=1;T<=9;T++){let A=T/9*Math.PI*2;d.lineTo(y+Math.cos(A)*b*(.7+r()*.3),v+Math.sin(A)*R*(.7+r()*.3))}d.fill()}ci(d,a,l,r,8,"rgba(20,20,25,0.45)",20,50),vu(d,a,l,r,60,"rgba(30,26,22,0.55)"),d.fillStyle="rgba(55,50,45,0.4)",d.fillRect(0,f(0)-3,a,6)}else if(s==="dirt"){d.fillStyle="#a58a64",d.fillRect(0,0,a,l),ci(d,a,l,r,90,"rgba(130,105,75,0.22)",40,200),ci(d,a,l,r,60,"rgba(195,170,130,0.3)",40,160),pn(d,a,l,r,7e4,["rgba(80,60,40,0.3)","rgba(220,200,165,0.25)","rgba(140,115,85,0.35)"],1,4),pn(d,a,l,r,3e3,["#8d8577","#c9c1b2","#6f675b"],3,7);for(let p=0;p<900;p++){let y=r()<.5?r()*l*.12:l-r()*l*.12,v=r()*a;d.strokeStyle=r()<.5?"rgba(120,130,60,0.6)":"rgba(150,140,70,0.6)",d.lineWidth=1.5,d.beginPath(),d.moveTo(v,y),d.lineTo(v+(r()-.5)*8,y-6-r()*8),d.stroke()}ci(d,a,l,r,30,"rgba(140,110,75,0.2)",60,120)}else if(s==="tiles"){d.fillStyle="#b9b3a6",d.fillRect(0,0,a,l);let p=.5*c;for(let y=0;y<l;y+=p)for(let v=0;v<a;v+=p){let b=165+Math.floor(r()*30);d.fillStyle=`rgb(${b},${b-6},${b-16})`,d.fillRect(v+1,y+1,p-2,p-2),r()<.06&&(d.fillStyle="rgba(90,85,75,0.5)",d.fillRect(v+1,y+1,p-2,p-2)),r()<.04&&y1(d,v+p/2,y+p/2,p,r)}ci(d,a,l,r,50,"rgba(70,65,55,0.25)",40,160),pn(d,a,l,r,25e3,["rgba(60,55,50,0.2)","rgba(240,235,225,0.2)"],1,3)}else if(s==="sand"){d.fillStyle="#d8bf8c",d.fillRect(0,0,a,l),ci(d,a,l,r,80,"rgba(190,160,110,0.28)",40,200),ci(d,a,l,r,60,"rgba(240,220,180,0.32)",40,160),pn(d,a,l,r,9e4,["rgba(150,120,80,0.3)","rgba(250,240,215,0.3)","rgba(120,100,70,0.25)"],1,3);for(let y=0;y<260;y++){let v=r()*a,b=r()*l,R=r()*6.28;d.fillStyle="rgba(150,120,80,0.25)",d.beginPath(),d.ellipse(v,b,5,9,R,0,7),d.fill()}pn(d,a,l,r,900,["#f4ece0","#e8d4c0","#c9b8a8"],2,4);let p=d.createLinearGradient(0,0,0,l*.14);p.addColorStop(0,"rgba(120,100,70,0.55)"),p.addColorStop(1,"rgba(120,100,70,0)"),d.fillStyle=p,d.fillRect(0,0,a,l*.14)}else s==="roof"&&(d.fillStyle="#9b9488",d.fillRect(0,0,a,l),ci(d,a,l,r,30,"rgba(50,48,50,0.22)",40,140),ci(d,a,l,r,40,"rgba(180,170,150,0.35)",30,120),pn(d,a,l,r,5e4,["rgba(60,55,50,0.25)","rgba(220,215,200,0.2)"],1,3),vu(d,a,l,r,50,"rgba(40,35,30,0.5)"),ci(d,a,l,r,6,"rgba(70,75,80,0.35)",60,140));d.save(),d.strokeStyle=s==="dirt"?"rgba(240,235,220,0.55)":s==="sand"?"rgba(110,85,55,0.55)":"rgba(245,245,238,0.7)",d.lineWidth=6,d.lineCap="round";let g=(p,y,v,b)=>{d.beginPath(),d.moveTo(p,y);let R=12;for(let T=1;T<=R;T++){let A=T/R;d.lineTo(p+(v-p)*A+(r()-.5)*4,y+(b-y)*A+(r()-.5)*4)}d.stroke()},x=i.halfL,m=i.halfW;if((s==="asphalt"||s==="tiles"||s==="roof")&&(d.setLineDash([22,14]),g(u(0),f(-m),u(0),f(m)),d.setLineDash([]),d.beginPath(),d.arc(u(0),f(0),1.6*c,0,7),d.stroke()),s==="tiles"){d.strokeRect(u(-x),f(-m),2*x*c,2*m*h);for(let v of[-1,1]){let b=u(v*x),R=u(v*(x-3.5));d.beginPath(),d.moveTo(b,f(-3.5)),d.lineTo(R,f(-3.5)),d.lineTo(R,f(3.5)),d.lineTo(b,f(3.5)),d.stroke()}d.lineWidth=4;let p=u(-x+2),y=f(m+1.2);for(let v=0;v<6;v++)d.strokeRect(p+v*.6*c,y,.6*c,.6*h)}if(s==="dirt"||s==="sand"){d.lineWidth=8;for(let p of[-1,1])g(u(p*x),f(-m+.5),u(p*x),f(m-.5)),g(u(p*x),f(-4.5),u(p*(x-4)),f(-4.5)),g(u(p*(x-4)),f(-4.5),u(p*(x-4)),f(4.5)),g(u(p*(x-4)),f(4.5),u(p*x),f(4.5));g(u(0),f(-m+.5),u(0),f(m-.5))}d.restore()})}function y1(s,t,e,i,n){s.strokeStyle="rgba(60,55,45,0.6)",s.lineWidth=1,s.beginPath(),s.moveTo(t-i/2,e+(n()-.5)*i),s.lineTo(t,e),s.lineTo(t+i/2,e+(n()-.5)*i),s.stroke()}var xu=new Map;function He(s,t=1,e={}){let i=s+t+JSON.stringify(e);if(xu.has(i))return xu.get(i);let n=Le(t),r=Fe(512,512,(o,a,l)=>{o.fillStyle=s,o.fillRect(0,0,a,l),ci(o,a,l,n,30,"rgba(0,0,0,0.08)",30,120),ci(o,a,l,n,20,"rgba(255,255,255,0.07)",30,100),pn(o,a,l,n,9e3,["rgba(0,0,0,0.07)","rgba(255,255,255,0.06)"],1,3);for(let c=0;c<6;c++){let h=n()*a,u=o.createLinearGradient(0,0,0,l*.6);u.addColorStop(0,"rgba(40,35,30,0.18)"),u.addColorStop(1,"rgba(40,35,30,0)"),o.fillStyle=u,o.fillRect(h,0,6+n()*18,l*.6)}if(e.bricks!==!1)for(let c=0;c<3;c++){let h=n()*a*.8,u=l*.3+n()*l*.6,f=40+n()*60,d=20+n()*40;o.fillStyle="#9a5a3c",o.fillRect(h,u,f,d),o.strokeStyle="rgba(200,190,170,0.6)",o.lineWidth=1;for(let g=u;g<u+d;g+=8)o.beginPath(),o.moveTo(h,g),o.lineTo(h+f,g),o.stroke()}vu(o,a,l,n,8,"rgba(50,40,30,0.35)",6,14),e.band&&(o.fillStyle=e.band,o.fillRect(0,l*.86,a,l*.14),pn(o,a,l*.14,n,800,["rgba(0,0,0,0.12)"],1,4))},{repeat:[1,1]});return xu.set(i,r),r}function tp(s="#6f7378"){return Fe(128,256,(t,e,i)=>{t.fillStyle=s,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=8)t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,r,e,2),t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,r+3,e,2);let n=Le(9);ci(t,e,i,n,10,"rgba(120,60,30,0.35)",10,40)})}function yu(s,{w:t=512,h:e=128,bg:i=null,color:n="#fff",font:r="900 72px Cairo",stroke:o=null,rot:a=0,shadow:l=null}={}){return Fe(t,e,c=>{i&&(c.fillStyle=i,c.fillRect(0,0,t,e)),c.translate(t/2,e/2),c.rotate(a),c.font=r,c.textAlign="center",c.textBaseline="middle",c.direction="rtl",l&&(c.shadowColor=l,c.shadowBlur=8),o&&(c.strokeStyle=o,c.lineWidth=8,c.strokeText(s,0,4)),c.fillStyle=n,c.fillText(s,0,4)})}function Qi(s,t,e="#fff",i=null){return Fe(512,128,(n,r,o)=>{n.fillStyle=t,n.fillRect(0,0,r,o),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=6,n.strokeRect(6,6,r-12,o-12),n.fillStyle=e,n.font=i?"900 58px Cairo":"900 68px Cairo",n.textAlign="center",n.textBaseline="middle",n.direction="rtl",n.fillText(s,r/2,i?52:68),i&&(n.font="700 30px Cairo",n.fillText(i,r/2,102));let a=Le(s.length);ci(n,r,o,a,6,"rgba(0,0,0,0.15)",10,50)})}var Yf,$f,Zf,Kf,Jf;var jf;function Hn(){return Yf||(Yf=Fe(128,128,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.6)"),e.addColorStop(.5,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)}))}function ep(){return $f||($f=Fe(128,128,(s,t)=>{let e=Le(5);for(let i=0;i<9;i++){let n=t/2+(e()-.5)*t*.4,r=t/2+(e()-.5)*t*.4,o=t*(.18+e()*.14),a=s.createRadialGradient(n,r,0,n,r,o);a.addColorStop(0,"rgba(255,255,255,0.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.beginPath(),s.arc(n,r,o,0,7),s.fill()}}))}function ip(){return Zf||(Zf=Fe(64,64,(s,t)=>{s.translate(t/2,t/2),s.fillStyle="#ffd23f",s.strokeStyle="#7a5200",s.lineWidth=3,s.beginPath();for(let e=0;e<10;e++){let i=e%2?11:26,n=e/10*Math.PI*2-Math.PI/2;s.lineTo(Math.cos(n)*i,Math.sin(n)*i)}s.closePath(),s.fill(),s.stroke()}))}function np(){return Kf||(Kf=Fe(64,256,(s,t,e)=>{let i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(.35,"rgba(255,255,255,0.18)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)},{aniso:1}))}function sp(){return Jf||(Jf=Fe(128,128,(s,t)=>{s.clearRect(0,0,t,t),s.strokeStyle="rgba(240,240,235,0.9)",s.lineWidth=2.5;for(let e=0;e<=t;e+=16)s.beginPath(),s.moveTo(e,0),s.lineTo(e,t),s.stroke(),s.beginPath(),s.moveTo(0,e),s.lineTo(t,e),s.stroke()},{repeat:[1,1]}))}function _u(){return jf||(jf=Fe(128,128,(s,t)=>{s.fillStyle="#20262a",s.fillRect(0,0,t,t),s.strokeStyle="rgba(220,235,245,0.9)",s.lineWidth=2;let e=t*.45,i=t*.55;for(let n=0;n<12;n++){let r=n/12*Math.PI*2+n*.3;s.beginPath(),s.moveTo(e,i),s.lineTo(e+Math.cos(r)*t*.3,i+Math.sin(r)*t*.3),s.lineTo(e+Math.cos(r+.2)*t,i+Math.sin(r+.2)*t),s.stroke()}for(let n=12;n<t;n+=18)s.beginPath(),s.arc(e,i,n,0,7),s.stroke();s.clearRect(e-18,i-14,34,30)}))}function Vn(s,t="rgba(30,30,30,0.75)",e=1024,i=256){return Fe(e,i,n=>{n.clearRect(0,0,e,i),n.textAlign="center",n.textBaseline="middle",n.direction="rtl",s.forEach((r,o)=>{n.font=r.font||"900 90px Cairo",n.fillStyle=r.color||t,n.save(),n.translate(e*(r.x??.5),i*(r.y??.5)),n.rotate(r.rot||0),n.fillText(r.text,0,0),n.restore()})})}function Z(s,t,e,i,n=0,r=0,o=0,a){let l=new Y(new fe(s,t,e),i);return l.position.set(n,r,o),l.castShadow=!0,l.receiveShadow=!0,a&&a.add(l),l}function Ot(s,t,e,i,n=0,r=0,o=0,a,l=14){let c=new Y(new mi(s,t,e,l),i);return c.position.set(n,r,o),c.castShadow=!0,c.receiveShadow=!0,a&&a.add(c),c}var Mu=new Map;function _1(s,t,e){let i=s+t+e;return Mu.has(i)||Mu.set(i,new Rt({map:He(s,t,{band:e}),roughness:.95})),Mu.get(i)}function tn(s,{x0:t,x1:e,z:i,face:n=1,h:r=12,color:o="#c9a982",seed:a=1,floors:l=3,shop:c=null,depth:h=5,roofStuff:u=!0,lit:f=.5,door:d=!1}){let g=s.static,x=Le(a*31+7),m=e-t,p=(t+e)/2,y=_1(o,a,"rgba(70,60,50,0.35)"),v=z(new Pt(o).multiplyScalar(.82).getStyle(),.95),b=z("#6a6058",.95),R=[v,v,b,v,n>0?y:v,n>0?v:y],T=new Y(new fe(m,r,h),R);T.position.set(p,r/2,i-n*h/2),T.castShadow=!0,T.receiveShadow=!0,g.add(T),s.colliders.push({min:new _(t,0,Math.min(i,i-n*h)),max:new _(e,r,Math.max(i,i-n*h)),tag:"wall",face:n}),Z(m+.1,.25,.3,z("#d8cfc0"),p,r-.1,i+n*.1,g);for(let E=1;E<l+1;E++)Z(m,.12,.12,z("#b8ad9c"),p,E*3.1,i+n*.04,g);let A=1.05,P=1.35,B=Math.max(1,Math.floor(m/2.4)),M=m/B;for(let E=c?1:0;E<l+1;E++){let L=E*3.1+1.6;if(L+P/2>r-.4)break;for(let D=0;D<B;D++){let H=t+M*(D+.5);d&&E===0&&D===Math.floor(B/2)||M1(s,H,L,i,n,A,P,x,f)}}if(d){let E=Math.floor(B/2),L=t+M*(E+.5),D=z("#5a3a22",.8);Z(1.3,2.4,.12,D,L,1.2,i+n*.04,g),Z(1.5,.15,.2,z("#c9c0b0"),L,2.48,i+n*.08,g),Z(1.8,.16,.5,z("#a39a8a"),L,.08,i+n*.25,g),s.doors.push(new _(L,0,i+n*.6))}if(c&&b1(s,t+.3,e-.3,i,n,c),u){let E=1+Math.floor(x()*3);for(let L=0;L<E;L++){let D=t+.8+x()*(m-1.6),H=x();H<.4?ja(g,D,r,i-n*(1+x()*2),n):H<.7?io(g,D,r,i-n*2.5):Z(1.2,1.4,1.2,z("#8a7f70"),D,r+.7,i-n*2.5,g)}}x()<.7&&E1(g,t+.8+x()*(m-1.6),4.4+Math.floor(x()*2)*3.1,i,n)}function M1(s,t,e,i,n,r,o,a,l){let c=s.static,h=z("#e2dccf",.8);Z(r+.16,.1,.18,h,t,e-o/2-.05,i+n*.06,c),Z(r+.16,.08,.12,h,t,e+o/2+.04,i+n*.04,c);let u=a(),f=z(a()<.5?"#6b4a2e":"#4f6a52",.85);if(u<.28){let m=Z(r,o,.06,f,t,e,i+n*.03,c);m.castShadow=!1;return}for(let m of[-1,1]){let p=Z(r/2,o,.04,f,t+m*(r/2+r/4+.02),e,i+n*.05,c);p.castShadow=!1}let d=a()<l,g=new Rt({color:d?"#3a3020":"#2c3a42",roughness:.15,metalness:.3,emissive:d?"#ffb85a":"#000000",emissiveIntensity:0}),x=new Y(new se(r,o),g);if(x.position.set(t,e,i+n*.015),n<0&&(x.rotation.y=Math.PI),s.dynamic.add(x),Z(.05,o,.03,h,t,e,i+n*.03,c).castShadow=!1,Z(r,.05,.03,h,t,e+.15,i+n*.03,c).castShadow=!1,a()<.6){let m=new Rt({color:a()<.5?"#c9a0a0":"#a8b8c8",roughness:1,emissive:d?"#ffb070":"#000",emissiveIntensity:0}),p=new Y(new se(r*.35,o*.9),m);p.position.set(t-r*.3,e,i+n*.02),n<0&&(p.rotation.y=Math.PI),s.dynamic.add(p),s.litMats.push({m,lit:d,k:.5})}s.litMats.push({m:g,lit:d,k:1}),s.windows.push({mesh:x,x0:t-r/2,x1:t+r/2,y0:e-o/2,y1:e+o/2,z:i,face:n,broken:!1,lit:d})}function b1(s,t,e,i,n,r){let o=s.static,a=e-t,l=(t+e)/2,c=new Rt({map:tp(r.shutter||"#6f7378"),roughness:.6,metalness:.4});if(r.open){let u=z("#2a2420",1);Z(a*.8,2.5,.1,u,l,1.25,i+n*.02,o);let f=Le(a*10);for(let x=0;x<3;x++){Z(a*.75,.05,.3,z("#6a4a2a"),l,.6+x*.6,i+n*.15,o);for(let m=0;m<10;m++){let p=["#d84b4b","#f2d24b","#4a8bd8","#3c9a4a","#f08a30","#eee"][Math.floor(f()*6)];Z(.15,.25,.15,z(p),l-a*.35+m/9*a*.7,.75+x*.6,i+n*.18,o).castShadow=!1}}let d={pos:new _(l,2.3,i+n*.8),color:"#ffe0a0",intensity:6,dist:7,shadow:!1};s.pointLights.push(d);let g=new Y(new Xt(.08,8,6),new $t({color:"#fff3c8"}));g.position.copy(d.pos),s.dynamic.add(g),s.nightOnly.push(g)}else{let u=Z(a*.8,2.5,.08,c,l,1.25,i+n*.04,o);u.castShadow=!1}let h=new Y(new se(Math.min(a*.85,4.2),1),new Rt({map:Qi(r.name,r.bg,"#fff",r.sub),roughness:.7,emissive:"#ffffff",emissiveIntensity:0}));if(h.position.set(l,3,i+n*.1),n<0&&(h.rotation.y=Math.PI),o.add(h),s.litMats.push({m:h.material,lit:!0,k:.25,emissiveMap:!0}),r.awning){let u=Math.floor(a/.5);for(let f=0;f<u;f++){let d=Z(.5,.06,1.3,z(f%2?"#e9e2cf":r.awning),t+.25+f*.5+(a-u*.5)/2,2.6,i+n*.6,o);d.rotation.x=n*.28}}}function mn(s,t,e,i,n,r=3.2){let o=s.static,a=1.15;Z(r,.16,a,z("#8a8070"),t,e,i+n*a/2,o);let l=z("#2f2a24",.6,{metalness:.5});Z(r,.06,.06,l,t,e+.95,i+n*a,o),Z(.06,.06,a,l,t-r/2,e+.95,i+n*a/2,o),Z(.06,.06,a,l,t+r/2,e+.95,i+n*a/2,o);for(let h=0;h<=14;h++){let u=t-r/2+h/14*r;Z(.035,.9,.035,l,u,e+.5,i+n*a,o).castShadow=!0}for(let h of[-1,1])for(let u=1;u<5;u++)Z(.035,.9,.035,l,t+h*r/2,e+.5,i+n*(u/5)*a,o);Z(1.1,2.1,.06,z("#5a3a22"),t-.4,e+1.1,i+n*.03,o),Ot(.18,.13,.3,z("#a4532e"),t+1.1,e+.23,i+n*.35,o);let c=new Y(new Xt(.28,10,8),z("#3c7a3a"));c.position.set(t+1.1,e+.6,i+n*.35),c.castShadow=!0,o.add(c),s.balconies.push({min:new _(t-r/2,e+.08,Math.min(i,i+n*a)),max:new _(t+r/2,e+1,Math.max(i,i+n*a)),momPos:new _(t+.2,e+.08,i+n*.45),face:n}),s.colliders.push({min:new _(t-r/2,e-.08,Math.min(i,i+n*a)),max:new _(t+r/2,e+.08,Math.max(i,i+n*a)),tag:"balconyFloor"})}function E1(s,t,e,i,n){let r=z("#e8e4dc",.6);Z(.85,.5,.45,r,t,e,i+n*.25,s);let o=z("#9a9a9a");for(let a=0;a<6;a++)Z(.05,.38,.02,o,t-.3+a*.12,e,i+n*.48,s).castShadow=!1;Z(.03,.03,.3,z("#555"),t+.3,e-.27,i+n*.3,s)}function ja(s,t,e,i,n=1){let r=z("#e4e4e0",.5),o=new Y(new Xt(.55,16,8,0,Math.PI*2,0,Math.PI*.28),r);o.material=z("#e4e4e0",.5,{side:Te}),o.position.set(t,e+.9,i),o.rotation.x=n*1.9,o.castShadow=!0,s.add(o),Ot(.03,.03,.9,z("#666"),t,e+.45,i,s),Ot(.02,.02,.6,z("#666"),t,e+1,i+n*.3,s).rotation.x=n*.8}function io(s,t,e,i){let n=z("#2f2f33",.6);Ot(.6,.6,1.4,n,t,e+1.3,i,s,18),Ot(.3,.3,.12,n,t,e+2.05,i,s);for(let r of[-1,1])for(let o of[-1,1])Z(.06,.6,.06,z("#555"),t+r*.4,e+.3,i+o*.4,s)}function Qa(s,t,e,i,n=.4){let r=[];for(let h=0;h<=10;h++){let u=h/10,f=new _().lerpVectors(t,e,u);f.y-=Math.sin(u*Math.PI)*n,r.push(f)}let o=new Qs(new he().setFromPoints(r),new Dn({color:"#222"}));s.add(o);let a=["#e0e0ff","#d84b4b","#f2d24b","#4a8bd8","#ffffff","#3c9a4a","#f08a30","#c070c0"],l=[],c=Math.floor(t.distanceTo(e)/.8);for(let h=1;h<c;h++){if(i()<.25)continue;let u=h/c,f=new _().lerpVectors(t,e,u);f.y-=Math.sin(u*Math.PI)*n;let d=.4+i()*.35,g=.45+i()*.45,x=new se(d,g);x.translate(0,-g/2,0);let m=new Y(x,z(a[Math.floor(i()*a.length)],.95,{side:Te}));m.position.copy(f),m.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,m.castShadow=!0,m.userData.dyn=!0,s.add(m),l.push(m)}return l}function ds(s,t,e,i=.6,n="#151515"){let r=[];for(let o=0;o<=16;o++){let a=o/16,l=new _().lerpVectors(t,e,a);l.y-=Math.sin(a*Math.PI)*i,r.push(l)}s.add(new Qs(new he().setFromPoints(r),new Dn({color:n})))}function si(s,t,e,i,{flicker:n=!1,h:r=5.6,arm:o=1.3,wall:a=!1}={}){let l=s.static,c=z("#2a2a2a",.5,{metalness:.6});a||(Ot(.07,.1,r,c,t,r/2,e,l,8),s.colliders.push({min:new _(t-.1,0,e-.1),max:new _(t+.1,r,e+.1),tag:"pole"}));let h=Z(.06,.06,o,c,t,r,e+i*o/2,l);h.castShadow=!1;let u=new Y(new mi(.08,.28,.18,12),z("#333",.5));u.position.set(t,r-.05,e+i*o),l.add(u);let f=new Rt({color:"#fff5d6",emissive:"#ffd27a",emissiveIntensity:0}),d=new Y(new Xt(.11,10,8),f);d.position.set(t,r-.16,e+i*o),s.dynamic.add(d),s.lamps.push({pos:d.position.clone(),bulbMat:f,flicker:n,face:i,wall:a,color:n?"#ffc070":"#ffd28a"})}function tl(s,t,e,i=0){let n=new ne;n.position.set(t,0,e),n.rotation.y=i,s.static.add(n);let r=z("#2d6aa8",.6);Z(2.4,.9,1.1,r,0,.85,0,n),Z(2.45,.08,1.15,z("#f1c232"),0,1,0,n),Z(2.5,.06,1.2,z("#c8c8c8",.4,{metalness:.6}),0,1.33,0,n);let o=z("#c9c9c9",.3,{metalness:.85});Ot(.32,.36,.55,o,-.6,1.62,0,n),Ot(.25,.28,.45,o,.25,1.58,.1,n),Ot(.3,.3,.04,o,-.6,1.92,0,n);for(let h of[-1,1]){let u=Ot(.35,.35,.12,z("#222"),h*.75,.35,.6,n,16);u.rotation.x=Math.PI/2}let a=new Y(new se(2.2,.45),new Rt({map:Qi("\u0641\u0648\u0644 \u0648\u0641\u0644\u0627\u0641\u0644","#2d6aa8","#fff"),roughness:.7}));a.position.set(0,.75,.56),n.add(a),Ot(.025,.025,1.4,z("#555"),.95,2,0,n,6);let l=new _(.95,2.65,0).applyEuler(new Li(0,i,0)).add(new _(t,0,e));s.pointLights.push({pos:l,color:"#ffeab0",intensity:9,dist:9,shadow:!1});let c=new Y(new Xt(.09,8,6),new $t({color:"#fff6d0"}));c.position.copy(l),s.dynamic.add(c),s.nightOnly.push(c),rp(s,n,2.5,1.4,1.2,.85)}function rp(s,t,e,i,n,r=i/2){let o=Math.abs(Math.cos(t.rotation.y))>.5,a=(o?e:n)/2,l=(o?n:e)/2;s.colliders.push({min:new _(t.position.x-a,0,t.position.z-l),max:new _(t.position.x+a,r+i/2,t.position.z+l),tag:"obj",solid:!0})}function op(s,t,e,i=0,n="#c9b48a"){let r=new ne;r.position.set(t,0,e),r.rotation.y=i,s.static.add(r);let o=z(n,.45,{metalness:.3});Z(3.9,.6,1.6,o,0,.62,0,r),Z(2,.55,1.45,o,-.2,1.18,0,r);let a=z("#2a3540",.1,{metalness:.5});Z(2.02,.42,1.3,a,-.2,1.2,0,r),Z(1.6,.44,1.47,a,-.2,1.2,0,r);let l=z("#d0d0d0",.25,{metalness:.9});Z(.12,.18,1.62,l,1.97,.45,0,r),Z(.12,.18,1.62,l,-1.97,.45,0,r);for(let c of[-1,1]){let h=new Y(new pi(.12,12),z("#fff8e0",.2));h.position.set(1.96,.72,c*.55),h.rotation.y=Math.PI/2,r.add(h)}for(let c of[-1.25,1.25])for(let h of[-.78,.78]){let u=Ot(.3,.3,.2,z("#1b1b1b"),c,.3,h,r,16);u.rotation.x=Math.PI/2}Z(1.8,.04,1.3,z("#8a7f6a"),-.2,1.47,0,r).castShadow=!1,rp(s,r,3.9,1.5,1.6,.75)}function ap(){let s=new ne,t=z("#e0a21c",.4,{metalness:.3}),e=z("#1b1b1b",.7);Z(2.2,.8,1.2,t,0,.75,0,s),Z(1.6,.9,1.25,e,-.25,1.55,0,s).material=z("#111",.9),Z(2.3,.08,1.35,e,-.1,2.05,0,s),Z(.08,.9,1.15,z("#2a3540",.1,{metalness:.5}),.85,1.55,0,s);let i=Ot(.25,.45,.6,t,1.2,.75,0,s);i.rotation.z=Math.PI/2,Z(.4,.04,1.1,z("#ffd23f"),.2,1.15,0,s);let n=new Y(new se(1.1,.35),new $t({map:yu("\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",{color:"#b81f1f",font:"900 70px Cairo"}),transparent:!0}));n.position.set(-1.11,1,0),n.rotation.y=-Math.PI/2,s.add(n);let r=[];for(let[l,c]of[[1.25,0],[-.75,.62],[-.75,-.62]]){let h=Ot(.26,.26,.16,e,l,.26,c,s,14);h.rotation.x=Math.PI/2,r.push(h)}let o=new Y(new Xt(.1,8,6),new $t({color:"#fff4c0"}));o.position.set(1.45,.95,0),s.add(o);let a=[];for(let l=0;l<6;l++){let c=new Y(new Xt(.045,6,4),new $t({color:["#ff3355","#33ff88","#3388ff","#ffdd33"][l%4]}));c.position.set(-1.2+l*.42,2.1,.68),s.add(c),a.push(c)}return s.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),{grp:s,wheels:r,disco:a}}function lp(s,t,e,i){let n=z("#a8452c",.9),r=z("#c65a3c",.9);for(let o of[-1,1]){let a=o*e,l=Z(.45,.22,.22,n,t,.11,a,s.static);l.rotation.y=.15*o;let c=Z(.45,.22,.22,r,t+.03,.33,a+.02,s.static);c.rotation.y=-.1*o,s.colliders.push({min:new _(t-.24,0,a-.13),max:new _(t+.24,.45,a+.13),tag:"post"})}if(i<0){let o=Z(.26,.03,.1,z("#2e8b57"),t+.2,.015,e+.45,s.static);o.rotation.y=.6}}function cp(s,t,e){let i=["#2e8b57","#3a6fd8","#e05a30","#222"],n=0;for(let r of[-1,1]){let o=r*e;for(let a of[-.06,.08]){let l=Z(.28,.035,.11,z(i[n++%4],.8),t+a,.018,o+a,s.static);l.rotation.y=r*.4+a*4;let c=Z(.04,.05,.12,z("#eee"),t+a+.05,.04,o+a,s.static);c.rotation.y=l.rotation.y}s.colliders.push({min:new _(t-.18,0,o-.12),max:new _(t+.18,.08,o+.12),tag:"post"})}}function hp(s,t,e,i,n){let r=z("#8a5a3a",.6,{metalness:.5}),o=z("#d8d4c8",.5,{metalness:.3}),a=1.4,l=.06;for(let f of[-1,1]){let d=Ot(l,l,i,f>0?o:r,t,i/2,f*e,s.static,10);s.colliders.push({min:new _(t-l,0,f*e-l),max:new _(t+l,i,f*e+l),tag:"post",metal:!0});let g=Ot(.03,.03,Math.hypot(a,i),r,t+n*a/2,i/2,f*e,s.static,6);g.rotation.z=n*Math.atan2(a,i),Z(.05,.05,.05,r,t+n*a,.02,f*e,s.static)}let c=Ot(l,l,e*2,o,t,i,0,s.static,10);c.rotation.x=Math.PI/2,s.colliders.push({min:new _(t-l,i-l,-e),max:new _(t+l,i+l,e),tag:"post",metal:!0});let h=new Rt({map:sp(),transparent:!0,alphaTest:.3,side:Te,roughness:1});h.map.repeat.set(6,3);let u=new Y(new se(e*2,Math.hypot(a,i)),h);u.position.set(t+n*a/2,i/2,0),u.rotation.y=Math.PI/2,u.rotation.order="YXZ",u.rotation.x=-n*Math.atan2(a,i),s.static.add(u);for(let f of[-1,1]){let d=new Xr;d.moveTo(0,0),d.lineTo(n*a,0),d.lineTo(0,i),d.closePath();let g=new Y(new Ra(d),h);g.position.set(t,0,f*e),s.static.add(g)}s.colliders.push({min:new _(Math.min(t+n*a,t+n*(a+.1)),0,-e),max:new _(Math.max(t+n*a,t+n*(a+.1)),i,e),tag:"net"}),s.colliders.push({min:new _(Math.min(t,t+n*a),0,-e-.05),max:new _(Math.max(t,t+n*a),i,-e),tag:"net"}),s.colliders.push({min:new _(Math.min(t,t+n*a),0,e),max:new _(Math.max(t,t+n*a),i,e+.05),tag:"net"}),s.colliders.push({min:new _(Math.min(t,t+n*a),i,-e),max:new _(Math.max(t,t+n*a),i+.05,e),tag:"net"})}function up(s,t,e,i,n){let r=yu("",{w:8,h:8}),o=new $t({color:"#f4f2ea",transparent:!0,opacity:.85}),a=.07,l=(c,h,u,f)=>{let d=new Y(new se(c,h),o);d.position.set(t+n*.012,f,u),d.rotation.y=n*Math.PI/2,s.static.add(d)};l(a,i,-e,i/2),l(a,i,e,i/2),l(e*2+a,a,0,i);for(let c=0;c<5;c++)l(.03,i*.9,-e+(c+1)*(e*2)/6,i*.45);for(let c=0;c<3;c++)l(e*2,.03,0,(c+1)*i/4);r.dispose()}function fr(s,t,e,i=1,n=Math.random){let r=Ot(.14*i,.22*i,2.6*i,z("#5a4030",.95),t,1.3*i,e,s,8);r.rotation.z=(n()-.5)*.15;let o=z(n()<.5?"#4f7a3a":"#5d8a40",.9);for(let a=0;a<6;a++){let l=new Y(new er((.9+n()*.5)*i,1),o);l.position.set(t+(n()-.5)*1.4*i,(2.8+n()*1.2)*i,e+(n()-.5)*1.4*i),l.castShadow=!0,s.add(l)}}function fs(s,t,e,i="#3a5a8a"){let n=Ot(.32,.32,.9,z(i,.6,{metalness:.4}),t,.45,e,s,14);for(let r of[.2,.7])Ot(.335,.335,.04,z("#5a3a2a",.6,{metalness:.4}),t,r,e,s,14);return n}function no(s,t,e,i=3){for(let n=0;n<i;n++){let r=new Y(new je(.32,.13,8,16),z("#1c1c1c",.9));r.rotation.x=Math.PI/2,r.position.set(t+n%2*.05,.13+n*.24,e),r.castShadow=!0,s.add(r)}}function Gn(s,t,e,i=0,n="#e8e8e2"){let r=new ne;r.position.set(t,0,e),r.rotation.y=i;let o=z(n,.5);Z(.45,.05,.45,o,0,.45,0,r),Z(.45,.45,.04,o,0,.7,-.21,r);for(let a of[-1,1])for(let l of[-1,1])Z(.04,.45,.04,o,a*.19,.22,l*.19,r);return s.add(r),r}function so(s,t,e){Ot(.35,.35,.04,z("#d8d0c0",.5),t,.72,e,s,16),Ot(.04,.04,.72,z("#666"),t,.36,e,s,6),Z(.4,.04,.25,z("#6a3a1a"),t,.76,e,s);for(let i of[-1,1])Ot(.03,.025,.08,z("#c8603a",.2),t+i*.25,.78,e+.1,s,8)}function dp(s,t,e){let i=s.static,n=z("#7a5a3a",.9),r=z("#3a3a3a",.7);for(let a of[-1,1])for(let l of[-1,1])Z(.1,2.2,.1,n,t+a*1.2,1.1,e+l*.9,i);Z(2.6,1.6,2,n,t,2.9,e,i),Z(2.5,1.4,.02,r,t,2.9,e+1.01,i);let o=Z(3,.08,2.4,z("#8a8a8a",.5,{metalness:.5}),t,3.8,e,i);o.rotation.z=.08;for(let a=0;a<6;a++)Z(.5,.04,.06,n,t-1.6,.3+a*.38,e+1,i);Z(.05,2.4,.06,n,t-1.85,1.2,e+1,i),Z(.05,2.4,.06,n,t-1.35,1.2,e+1,i),s.colliders.push({min:new _(t-1.3,0,e-1),max:new _(t+1.3,3.8,e+1),tag:"obj",solid:!0})}function fp(s,t,e){let i=s.static;Ot(.05,.07,8,z("#c0c0c0",.3,{metalness:.8}),t,4,e,i,8);let n=new ne;n.position.set(t,7.3,e);let r=["#ce1126","#ffffff","#000000"];for(let a=0;a<3;a++){let l=new Y(new se(1.5,.33),z(r[a],.9,{side:Te}));l.position.set(.78,.33-a*.33,0),n.add(l)}let o=new Y(new pi(.1,10),z("#c09a30",.6,{side:Te}));o.position.set(.78,0,.005),n.add(o),n.userData.dyn=!0,i.add(n),s.flags.push(n)}function De(s,t,e,i,n,r,o,{thick:a=.3,collide:l=!0,collideH:c=null,cap:h=!0}={}){let u=Math.hypot(i-t,n-e),f=new Y(new fe(u,r,a),o);if(f.position.set((t+i)/2,r/2,(e+n)/2),f.rotation.y=-Math.atan2(n-e,i-t),f.castShadow=!0,f.receiveShadow=!0,s.static.add(f),h){let d=new Y(new fe(u+.05,.08,a+.08),z("#b3aa9a"));d.position.set(f.position.x,r+.04,f.position.z),d.rotation.y=f.rotation.y,d.castShadow=!0,s.static.add(d)}if(l){let d=Math.abs(i-t)/2+a/2,g=Math.abs(n-e)/2+a/2;s.colliders.push({min:new _((t+i)/2-d,0,(e+n)/2-g),max:new _((t+i)/2+d,c??r,(e+n)/2+g),tag:"wall"})}return f}var Wn={alley:{id:"alley",name:"\u0627\u0644\u062D\u0627\u0631\u0629",desc:"\u062D\u0627\u0631\u0629 \u0636\u064A\u0642\u0629\u060C \u062C\u0648\u0646 \u0628\u0637\u0648\u0628\u062A\u064A\u0646\u060C \u0648\u0627\u0644\u062D\u064A\u0637\u0627\u0646 \u0628\u062A\u0631\u062C\u0651\u0639 \u0627\u0644\u0643\u0648\u0631\u0629. \u062E\u0644\u064A \u0628\u0627\u0644\u0643 \u0645\u0646 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643!",halfL:17,halfW:4.6,goal:{type:"bricks",hw:1.25,h:1.05},teamSize:4},yard:{id:"yard",name:"\u0627\u0644\u062D\u0648\u0634 \u0627\u0644\u0648\u0627\u0633\u0639",desc:"\u0623\u0631\u0636 \u062A\u0631\u0627\u0628 \u0648\u0627\u0633\u0639\u0629 \u0648\u0639\u0627\u0631\u0636\u062A\u064A\u0646 \u062D\u062F\u064A\u062F \u0635\u062F\u064A\u0629. \u0641\u064A\u0647 \u0645\u0633\u0627\u062D\u0629 \u062A\u062C\u0631\u064A \u0641\u064A\u0647\u0627.",halfL:21,halfW:10,goal:{type:"frame",hw:2,h:2},teamSize:5},school:{id:"school",name:"\u062D\u0648\u0634 \u0627\u0644\u0645\u062F\u0631\u0633\u0629",desc:"\u0627\u0644\u062C\u0648\u0646 \u0645\u062A\u0637\u0628\u0627\u0634\u0631 \u0639\u0644\u0649 \u0627\u0644\u062D\u064A\u0637\u0629. \u0648\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u064A\u0637\u0644\u0639 \u0643\u0644 \u0634\u0648\u064A\u0629\u060C \u0644\u0648 \u0634\u0627\u0641\u0643 \u0628\u062A\u0641\u0627\u0648\u0644 \u0647\u064A\u0637\u0631\u062F\u0643!",halfL:18,halfW:8,goal:{type:"chalk",hw:1.6,h:1.9},teamSize:5},roof:{id:"roof",name:"\u0627\u0644\u0633\u0637\u062D",desc:"\u0633\u0637\u062D \u0639\u0645\u0627\u0631\u0629 \u062C\u0646\u0628 \u063A\u064A\u0629 \u0627\u0644\u062D\u0645\u0627\u0645. \u0644\u0648 \u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A \u062D\u062F \u0644\u0627\u0632\u0645 \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!",halfL:12,halfW:6.2,goal:{type:"slippers",hw:1,h:.9},teamSize:3},microbus:{id:"microbus",name:"\u0645\u0648\u0642\u0641 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0628\u0627\u0635",desc:"\u0627\u0644\u062C\u0648\u0646 \u0643\u0627\u0648\u062A\u0634\u064A\u0646\u060C \u0648\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0628\u0627\u0635\u0627\u062A \u0631\u0627\u0643\u0646\u0629 \u062D\u0648\u0627\u0644\u064A\u0643. \u0627\u0644\u062A\u0628\u0627\u0639 \u0628\u064A\u0632\u0639\u0642 \u0648\u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643 \u0645\u0639\u062F\u0651\u064A.",halfL:17.5,halfW:6.2,goal:{type:"tires",hw:1.4,h:1.1},teamSize:4},mosque:{id:"mosque",name:"\u0642\u062F\u0627\u0645 \u0627\u0644\u062C\u0627\u0645\u0639",desc:"\u0628\u0639\u062F \u0635\u0644\u0627\u0629 \u0627\u0644\u0639\u0635\u0631\u060C \u0627\u0644\u0643\u0628\u0627\u0631 \u0642\u0627\u0639\u062F\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u062F\u0643\u0629. \u0627\u0644\u062C\u0648\u0646 \u0634\u0628\u0634\u0628\u064A\u0646\u060C \u0648\u0627\u0648\u0639\u0649 \u0627\u0644\u0643\u0648\u0631\u0629 \u062A\u062E\u0628\u0637 \u0641\u064A \u0627\u0644\u0628\u0627\u0628!",halfL:15.5,halfW:6.4,goal:{type:"slippers",hw:1.2,h:1},teamSize:4},beach:{id:"beach",name:"\u0627\u0644\u0628\u0644\u0627\u062C",desc:"\u0631\u0645\u0644\u0629 \u062A\u0642\u064A\u0644\u0629 \u0628\u062A\u0647\u062F\u0651\u064A \u0627\u0644\u0643\u0648\u0631\u0629\u060C \u0648\u0627\u0644\u062C\u0648\u0646 \u0634\u0646\u0637\u062A\u064A\u0646 \u0628\u062D\u0631. \u0627\u0644\u0628\u062D\u0631 \u0648\u0631\u0627 \u0648\u0627\u0644\u0634\u0645\u0627\u0633\u064A \u0641\u064A \u0643\u0644 \u062D\u062A\u0629.",halfL:19,halfW:8.5,goal:{type:"bags",hw:1.6,h:1.2},teamSize:5},market:{id:"market",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0633\u0648\u0642",desc:"\u0628\u064A\u0646 \u0641\u0631\u0634\u0627\u062A \u0627\u0644\u062E\u0636\u0627\u0631 \u0648\u0627\u0644\u0633\u0645\u0643. \u0627\u0644\u062C\u0648\u0646 \u0623\u0642\u0641\u0627\u0635 \u0628\u0631\u062A\u0642\u0627\u0646\u060C \u0648\u0644\u0645\u0628\u0627\u062A \u0627\u0644\u0633\u0648\u0642 \u0645\u0646\u0648\u0631\u0629 \u0628\u0627\u0644\u0644\u064A\u0644.",halfL:16.5,halfW:5.6,goal:{type:"crates",hw:1.3,h:1.1},teamSize:4}},el=["alley","yard","school","roof","microbus","mosque","beach","market"],zi={home:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0627\u0631\u0629",short:"\u0627\u0644\u062D\u064F\u0645\u0631",colors:["#c8322a","#d0342a","#b81f1f","#e04a2f","#a82424"],accent:"#ffffff",ui:"#c8322a"},away:{name:"\u0634\u0644\u0629 \u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0644\u064A \u0648\u0631\u0627",short:"\u0627\u0644\u0632\u064F\u0651\u0631\u0642",colors:["#2a63c8","#3b82d6","#1f4ea0","#2f6fe0","#2456b0"],accent:"#ffffff",ui:"#2a63c8"},green:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0648\u0634",short:"\u0627\u0644\u062E\u064F\u0636\u0631",colors:["#2f8f46","#3aa356","#237a3a","#2d9a4f","#1f6b33"],accent:"#ffffff",ui:"#2f8f46"},yellow:{name:"\u0648\u0644\u0627\u062F \u062A\u0627\u0644\u062A\u0629 \u062A\u0627\u0644\u062A",short:"\u0627\u0644\u0635\u064F\u0651\u0641\u0631",colors:["#e2b21c","#f0c22a","#d4a00e","#e8b820","#c99a10"],accent:"#222222",ui:"#d4a00e"},black:{name:"\u0634\u0628\u0627\u0628 \u0627\u0644\u0633\u0637\u0648\u062D",short:"\u0627\u0644\u0633\u064F\u0651\u0648\u062F",colors:["#2b2b30","#3a3a40","#222226","#35353b","#2e2e34"],accent:"#ffd23f",ui:"#3a3a40"},white:{name:"\u0643\u0628\u0627\u0631 \u0627\u0644\u062D\u062A\u0629",short:"\u0627\u0644\u0628\u064A\u0636",colors:["#ecebe6","#f4f2ea","#dedcd4","#e8e6de","#d8d6ce"],accent:"#c8322a",ui:"#8d8a80"}},pp=["\u062D\u0645\u0627\u062F\u0629","\u0632\u064A\u0632\u0648","\u0628\u064A\u0628\u0648","\u0634\u064A\u0643\u0627","\u0639\u0628\u062F\u0647","\u062A\u064A\u062A\u0648","\u0645\u064A\u062F\u0648","\u062D\u0648\u062F\u0629","\u0633\u064A\u0643\u0627","\u0623\u0648\u0643\u0627","\u0643\u0631\u064A\u0645","\u0645\u0635\u0637\u0641\u0649","\u0625\u0633\u0644\u0627\u0645","\u0628\u0644\u0628\u0644","\u0634\u0631\u064A\u0641","\u0639\u0645\u0631\u0648","\u0637\u0627\u0631\u0642","\u0633\u0639\u064A\u062F","\u064A\u0627\u0633\u064A\u0646","\u062D\u0633\u0648\u0646\u0629","\u0645\u0627\u0632\u0646","\u0648\u0644\u064A\u062F","\u0631\u0627\u0645\u064A","\u0628\u0648\u062F\u064A","\u0641\u0627\u0631\u0633","\u0633\u0627\u0645\u062D","\u062D\u0633\u0627\u0645","\u0646\u0627\u062F\u0631","\u062A\u0627\u0645\u0631","\u0639\u0635\u0627\u0645"],ro=["#c98b5a","#a86b43","#d9a173","#8a5634","#bf7f50","#e0b088","#9a6040"],ps=["#1a1210","#20140e","#120c08","#2a1a10","#0f0a07"],qt={argueHigh:["\u062F\u064A \u0639\u0627\u0644\u064A\u0629!","\u0641\u0648\u0642 \u0627\u0644\u0637\u0648\u0628\u0629 \u064A\u0627 \u0639\u0645!","\u062F\u064A \u0641\u0648\u0642 \u0631\u0627\u0633 \u0627\u0644\u062D\u0627\u0631\u0633!","\u0639\u0627\u0644\u064A\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u0645\u062A\u0636\u062D\u0643\u0634 \u0639\u0644\u0649 \u0646\u0641\u0633\u0643"],argueGoalHigh:["\u062C\u0648\u0646 \u064A\u0627 \u0639\u0645\u060C \u0643\u0627\u0646\u062A \u062A\u062D\u062A!","\u062F\u064A \u0639\u0644\u0649 \u0642\u062F \u0627\u0644\u062D\u0627\u0631\u0633 \u0628\u0627\u0644\u0638\u0628\u0637!","\u062C\u0648\u0648\u0648\u0648\u0646\u060C \u0647\u0648 \u0642\u0635\u064A\u0631 \u0628\u0633!","\u0644\u0648 \u0627\u0644\u062D\u0627\u0631\u0633 \u0637\u0648\u064A\u0644 \u0643\u0627\u0646 \u0645\u0633\u0643\u0647\u0627"],arguePost:["\u062F\u064A \u062E\u0628\u0637\u062A \u0641\u064A \u0627\u0644\u0637\u0648\u0628\u0629!","\u0628\u0631\u0629! \u0644\u0645\u0633\u062A \u0627\u0644\u0637\u0648\u0628\u0629!","\u0627\u0644\u0642\u0627\u064A\u0645 \u064A\u0627 \u0639\u0645!"],argueGoalPost:["\u062C\u0648\u0646! \u062F\u062E\u0644\u062A \u062C\u0648\u0647!","\u062F\u064A \u062C\u0648\u0647 \u0627\u0644\u0637\u0648\u0628\u0629 \u0628\u0634\u0628\u0631!","\u0625\u0646\u062A\u0648\u0627 \u0628\u062A\u0633\u0631\u0642\u0648\u0627!"],bigGood:["\u062C\u0648\u0646. \u062E\u0644\u0627\u0635. \u0645\u062D\u062F\u0634 \u064A\u062A\u0643\u0644\u0645.","\u062C\u0648\u0646\u060C \u0648\u0631\u062C\u0651\u0639\u0648\u0627 \u0648\u0631\u0627","\u0623\u0646\u0627 \u0634\u0627\u064A\u0641\u0647\u0627 \u062C\u0648\u0646\u060C \u062E\u0644\u0635\u0646\u0627"],bigBad:["\u0645\u0634 \u062C\u0648\u0646. \u0636\u0631\u0628\u0629 \u0645\u0631\u0645\u0649.","\u0639\u0627\u0644\u064A\u0629\u060C \u0643\u0645\u0651\u0644\u0648\u0627","\u0645\u0641\u064A\u0634 \u062C\u0648\u0646\u060C \u064A\u0644\u0627 \u0627\u0644\u0639\u0628\u0648\u0627"],betWin:["\u0627\u0644\u0639\u0632\u0648\u0645\u0629 \u0639\u0644\u064A\u0643\u0645 \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647!","\u0647\u0646\u0627\u0643\u0644 \u0639\u0644\u0649 \u062D\u0633\u0627\u0628\u0643\u0645!"],betLose:["\u064A\u0644\u0627 \u0647\u0627\u062A \u0627\u0644\u0639\u0632\u0648\u0645\u0629 \u0628\u0642\u0649","\u0647\u062A\u0639\u0632\u0645\u0646\u0627 \u064A\u0627 \u0645\u0639\u0644\u0645"],goal:["\u062C\u0648\u0648\u0648\u0648\u0648\u0646!","\u062C\u0648\u0648\u0648\u0648\u0646 \u064A\u0627 \u0645\u0639\u0644\u0645!","\u0641\u064A \u0627\u0644\u062C\u0648\u0648\u0648\u0646!","\u064A\u0627 \u0633\u0644\u0627\u0627\u0627\u0645!","\u062C\u0648\u0646 \u0648\u0644\u0627 \u0623\u062D\u0644\u0649!"],goalBricks:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628\u062A\u064A\u0646!","\u062C\u0648\u0646 \u0646\u0636\u064A\u0641 \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628!"],goalSlippers:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0634\u0628\u0634\u0628\u064A\u0646!"],goalChalk:["\u062E\u0628\u0637\u062A \u062C\u0648\u0647 \u0627\u0644\u0637\u0628\u0627\u0634\u064A\u0631!"],goalTires:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u064A\u0646!"],goalCrates:["\u0628\u064A\u0646 \u0627\u0644\u0623\u0642\u0641\u0627\u0635 \u0628\u0627\u0644\u0638\u0628\u0637!"],goalBags:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0634\u0646\u0637\u062A\u064A\u0646!"],miss:["\u064A\u0627\u0627\u0627\u0647! \u062C\u0646\u0628 \u0627\u0644\u0637\u0648\u0628\u0629!","\u0643\u0627\u0646\u062A \u0647\u062A\u062F\u062E\u0644!","\u0637\u0627\u0634\u062A!","\u062F\u0647 \u0625\u0646\u062A \u062A\u0634\u0648\u0637 \u0645\u0646 \u0627\u0644\u0628\u064A\u062A \u0623\u062D\u0633\u0646!"],foul:["\u0641\u0627\u0648\u0648\u0648\u0648\u0644!","\u0641\u0627\u0648\u0644 \u064A\u0627 \u0639\u0645!","\u0625\u064A\u0647 \u062F\u0647\u061F! \u062F\u0647 \u0643\u0633\u0631\u0647!","\u062D\u0631\u0627\u0645 \u0639\u0644\u064A\u0643!"],hurt:["\u0622\u0622\u0622\u0647 \u064A\u0627 \u0631\u062C\u0644\u064A!","\u0622\u0647 \u064A\u0627 \u0631\u0643\u0628\u062A\u064A!","\u0647\u0648 \u0623\u0646\u0627 \u0639\u0645\u0644\u062A\u0644\u0643 \u0625\u064A\u0647\u061F!","\u0631\u062C\u0644\u064A \u0627\u062A\u0643\u0633\u0631\u062A!"],pull:["\u0633\u064A\u0628 \u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u064A\u0627 \u0639\u0645!","\u0647\u062A\u0642\u0637\u0639\u0644\u064A \u0627\u0644\u0641\u0627\u0646\u0644\u0629!","\u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u062F\u064A \u062C\u062F\u064A\u062F\u0629!"],nutmeg:["\u0643\u0648\u0628\u0631\u064A!","\u0627\u062A\u0643\u0628\u0631\u0649 \u062E\u0627\u0644\u0635!","\u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0647!"],nutmegged:["\u0625\u064A\u0647 \u062F\u0647\u061F!","\u0645\u0634 \u0634\u0627\u064A\u0641 \u062D\u0627\u062C\u0629!"],save:["\u0635\u062F\u0651\u0647\u0627!","\u064A\u0627 \u0639\u0645 \u0627\u0644\u062D\u0627\u0631\u0633!","\u0625\u064A\u062F\u064A\u0646 \u0645\u0646 \u062D\u062F\u064A\u062F!"],callPass:["\u0628\u0627\u0635\u064A \u064A\u0627 \u0639\u0645!","\u0647\u0646\u0627! \u0647\u0646\u0627!","\u0623\u0646\u0627 \u0641\u0627\u0636\u064A!"],momCall:s=>`\u064A\u0627 ${s}! \u0627\u0644\u0623\u0643\u0644 \u0647\u064A\u0628\u0631\u062F\u060C \u0627\u0637\u0644\u0639 \u062D\u0627\u0644\u064B\u0627!`,momCallOut:["\u062D\u0627\u0636\u0631 \u064A\u0627 \u0645\u0627\u0645\u0627...","\u062C\u0627\u064A \u0623\u0647\u0648!"],momBack:s=>`${s} \u0631\u062C\u0639 \u0628\u0639\u062F \u0645\u0627 \u0627\u062A\u063A\u062F\u0649!`,fight:["\u062E\u0646\u0627\u0642\u0629! \u062E\u0646\u0627\u0642\u0629!","\u062D\u0648\u0634\u0648\u0627! \u062D\u0648\u0634\u0648\u0627!","\u0633\u064A\u0628\u0648\u0647! \u0633\u064A\u0628\u0648\u0647!"],fightOver:["\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635.. \u0635\u0627\u0641\u064A \u064A\u0627 \u0644\u0628\u0646","\u062E\u0644\u0627\u0635 \u064A\u0627 \u062C\u0645\u0627\u0639\u0629.. \u0646\u0643\u0645\u0644"],balcony:["\u0627\u0644\u0643\u0648\u0631\u0629 \u062F\u062E\u0644\u062A \u0627\u0644\u0628\u0644\u0643\u0648\u0646\u0629!","\u064A\u0627 \u062E\u0628\u0631! \u0628\u0644\u0643\u0648\u0646\u0629 \u0627\u0644\u062D\u0627\u062C\u0629!"],balconyBack:["\u062E\u062F\u0648\u0627 \u0643\u0648\u0631\u062A\u0643\u0645 \u0648\u0627\u062A\u0644\u0647\u0648\u0627!","\u0622\u062E\u0631 \u0645\u0631\u0629 \u0647\u0631\u062C\u0639\u0647\u0627\u0644\u0643\u0645!","\u0627\u0644\u0639\u0628\u0648\u0627 \u0628\u0639\u064A\u062F \u0639\u0646 \u0627\u0644\u0634\u0628\u0627\u0628\u064A\u0643!"],windowBreak:["\u0645\u064A\u0646 \u0627\u0644\u0644\u064A \u0643\u0633\u0631 \u0627\u0644\u0625\u0632\u0627\u0632 \u062F\u0647\u061F!","\u0623\u0646\u0627 \u0646\u0627\u0632\u0644\u0643\u0645!","\u0647\u0642\u0648\u0644 \u0644\u0623\u0628\u0648\u0643!"],run:["\u0627\u062C\u0631\u0631\u0631\u0631\u064A!","\u0627\u0647\u0631\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!"],roofDrop:["\u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A!","\u062D\u062F \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!"],roofBack:["\u062C\u0628\u062A\u0647\u0627 \u0623\u0647\u0648!"],headmaster:["\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u0631\u0629! \u0627\u062A\u0644\u0645\u0651\u0648\u0627!"],headmasterCatch:s=>`\u0625\u0646\u062A \u064A\u0627 ${s}! \u0627\u0637\u0644\u0639 \u0628\u0631\u0629!`,sentOff:s=>`${s} \u0627\u062A\u0637\u0631\u062F!`,toktok:["\u062A\u0648\u0643\u062A\u0648\u0643 \u062C\u0627\u064A!","\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u0631\u0628\u064A\u0629!","\u0648\u0633\u0651\u0639\u0648\u0627 \u064A\u0627 \u0634\u0628\u0627\u0628!"],walkerHit:["\u062D\u0627\u0633\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!","\u0647\u0648 \u062F\u0647 \u0645\u0643\u0627\u0646 \u0643\u0648\u0631\u0629\u061F!","\u064A\u0627 \u0633\u0627\u062A\u0631!","\u0625\u064A\u0647 \u062F\u0647 \u064A\u0627 \u0648\u0644\u062F\u061F!"],kickoff:["\u064A\u0644\u0627 \u0628\u064A\u0646\u0627!","\u064A\u0644\u0627 \u064A\u0627 \u0631\u062C\u0627\u0644\u0629!","\u0627\u0644\u0639\u0628\u0648\u0627!"],win:["\u0643\u0633\u0628\u0646\u0627! \u0643\u0633\u0628\u0646\u0627!","\u0627\u0644\u062D\u0627\u0631\u0629 \u0628\u062A\u0627\u0639\u062A\u0646\u0627!"],lose:["\u062E\u0633\u0631\u0646\u0627 \u0627\u0644\u0645\u0631\u0629 \u062F\u064A...","\u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0647\u0646\u0643\u0633\u0628\u0647\u0645!"],draw:["\u062A\u0639\u0627\u062F\u0644.. \u0645\u0627\u062A\u0634 \u0631\u062C\u0627\u0644\u0629"]},ms={win:60,draw:25,goal:10,nutmeg:5,cleanSheet:15},mp=[{id:"ful",icon:"\u{1F96A}",name:"\u0633\u0627\u0646\u062F\u0648\u062A\u0634 \u0641\u0648\u0644 \u0648\u0637\u0639\u0645\u064A\u0629",stake:15},{id:"kebda",icon:"\u{1F32F}",name:"\u0633\u0627\u0646\u062F\u0648\u062A\u0634\u064A\u0646 \u0643\u0628\u062F\u0629",stake:35},{id:"koshary",icon:"\u{1F372}",name:"\u0643\u0634\u0631\u064A \u0644\u0644\u0641\u0631\u064A\u0642 \u0643\u0644\u0647",stake:70}],il=[{id:"ball",name:"\u0643\u0648\u0631\u0629 \u062C\u0644\u062F \u0623\u0635\u0644\u064A\u0629",desc:"\u0627\u0644\u0634\u0648\u0637\u0629 \u0623\u0642\u0648\u0649 \u0648\u0627\u0644\u0643\u0648\u0631\u0629 \u0645\u0627\u0633\u0643\u0629 \u0641\u064A \u0631\u062C\u0644\u0643 \u0623\u0643\u062A\u0631",price:120,max:1},{id:"shoes",name:"\u0643\u0648\u062A\u0634\u064A \u062C\u062F\u064A\u062F",desc:"\u0628\u062F\u0644 \u0627\u0644\u0634\u0628\u0634\u0628.. \u0633\u0631\u0639\u0629 \u0627\u0644\u0641\u0631\u064A\u0642 \u062A\u0632\u064A\u062F",price:140,max:1},{id:"kits",name:"\u0641\u0627\u0646\u0644\u0627\u062A \u0645\u0648\u062D\u062F\u0629",desc:"\u0634\u0643\u0644 \u0627\u0644\u0641\u0631\u064A\u0642 \u0645\u062A\u0648\u062D\u062F\u060C \u0648\u0627\u0644\u0646\u064E\u0641\u064E\u0633 \u0623\u0637\u0648\u0644",price:90,max:1},{id:"foul",name:"\u0633\u0627\u0646\u062F\u0648\u062A\u0634 \u0641\u0648\u0644 \u0642\u0628\u0644 \u0627\u0644\u0645\u0627\u062A\u0634",desc:"\u0637\u0627\u0642\u0629 \u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A \u0628\u0633",price:15,max:99,consumable:!0}],pr=[{map:"alley",time:"day",opp:"away",title:"\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u0623\u0648\u0644: \u0645\u0627\u062A\u0634 \u0627\u0644\u062D\u0627\u0631\u0629"},{map:"market",time:"night",opp:"green",title:"\u062F\u0648\u0631 \u0627\u0644\u0633\u062A\u0627\u0634\u0631"},{map:"beach",time:"sunset",opp:"yellow",title:"\u062F\u0648\u0631 \u0627\u0644\u062A\u0645\u0627\u0646\u064A\u0629"},{map:"roof",time:"night",weather:"rain",opp:"black",title:"\u0646\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"},{map:"alley",time:"night",opp:"white",title:"\u0627\u0644\u0646\u0647\u0627\u0626\u064A: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629"}],oo={easy:{name:"\u0633\u0647\u0644",react:.45,skill:.45,speed:.9,steal:.8,dirty:.15},normal:{name:"\u0639\u0627\u062F\u064A",react:.28,skill:.65,speed:.97,steal:1,dirty:.3},hard:{name:"\u0635\u0639\u0628",react:.15,skill:.85,speed:1.02,steal:1.25,dirty:.45}},Pe={jog:5.2,sprint:7.2,withBallMul:.9,accel:22,decel:26,turnRate:13,staminaDrain:.22,staminaRegen:.14,playerRadius:.36,ballRadius:.11,controlDist:.62,stealPerSec:1.15,slideSpeed:8.2,slideTime:1,fallTime:2.75,pullMax:1.6,scandalTackle:30,scandalCleanTrip:8,scandalPullPerSec:14,scandalWindow:35};var gp=["position","normal","uv"];function S1(s,t){let e=s.index?s.toNonIndexed():s.clone();for(let i of Object.keys(e.attributes))gp.includes(i)||e.deleteAttribute(i);return e.attributes.uv||e.setAttribute("uv",new Zt(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.morphAttributes={},e.applyMatrix4(t),e.clearGroups(),e}function w1(s){let t=s.index?s.toNonIndexed():s;if(!s.groups.length)return[{geo:t,mi:0}];let e=[];for(let i of s.groups){let n=new he;for(let r of gp){let o=t.attributes[r];if(!o)continue;let a=o.array.slice(i.start*o.itemSize,(i.start+i.count)*o.itemSize);n.setAttribute(r,new Ae(a,o.itemSize))}e.push({geo:n,mi:i.materialIndex})}return e}function xp(s){s.updateMatrixWorld(!0);let t=new Map,e=[];s.traverse(r=>{if(!r.isMesh||r.isSkinnedMesh||r.userData.dyn||r.userData.keep)return;let o=r.parent;for(;o&&o!==s;){if(o.userData.dyn)return;o=o.parent}let a=Array.isArray(r.material)?r.material:[r.material];for(let{geo:l,mi:c}of w1(r.geometry)){let h=a[c]||a[0],u=h.uuid+(r.castShadow?"s":"n"),f=t.get(u);f||(f={m:h,cast:r.castShadow,geos:[]},t.set(u,f)),f.geos.push(S1(l,r.matrixWorld))}e.push(r)});for(let r of e)r.parent.remove(r);let i=new Wt().copy(s.matrixWorld).invert(),n=0;for(let r of t.values()){let o=$a(r.geos,!1);if(!o)continue;o.applyMatrix4(i),o.computeBoundingSphere();let a=new Y(o,r.m);a.castShadow=r.cast,a.receiveShadow=!0,a.matrixAutoUpdate=!1,s.add(a),n++;for(let l of r.geos)l.dispose()}return n}function ao(s,t,e,i,n="#f2efe6",r="#2a63c8"){let o=new ne;o.position.set(t,0,e),o.rotation.y=i,s.static.add(o);let a=z(n,.55);Z(4.6,1.55,1.85,a,0,1.25,0,o),Z(4,.5,1.8,a,-.2,2.2,0,o),Z(4.62,.16,1.87,z(r,.5),0,1.05,0,o);let l=z("#2a3540",.15,{metalness:.4});for(let d of[-1,1])for(let g=0;g<4;g++)Z(.75,.42,.02,l,-1.6+g*.95,2.15,d*.93,o);Z(.02,.7,1.6,l,2.31,1.95,0,o),Z(.04,.3,1.6,z("#bbb",.4,{metalness:.6}),2.32,.65,0,o);for(let d of[-1.5,1.5])for(let g of[-1,1]){let x=Ot(.36,.36,.24,z("#1a1a1a",.9),d,.36,g*.86,o,16);x.rotation.x=Math.PI/2}let c=new Y(new se(1.3,.28),new Rt({map:Qi(["\u0627\u0644\u0645\u0646\u064A\u0628","\u0631\u0645\u0633\u064A\u0633","\u0627\u0644\u062C\u064A\u0632\u0629","\u0627\u0644\u0639\u062A\u0628\u0629"][Math.abs(Math.round(t))%4],"#111","#ffd23f"),roughness:.7}));c.position.set(2.33,2.45,0),c.rotation.y=Math.PI/2,o.add(c);let h=Math.abs(Math.cos(i))>.5,u=h?2.35:.95,f=h?.95:2.35;s.colliders.push({min:new _(t-u,0,e-f),max:new _(t+u,2.5,e+f),tag:"obj",solid:!0,metal:!0})}function T1(s,t,e,i,n){let r=s.static;Z(2.2,2.4,1.6,z(n,.6),t,1.2,e,r),Z(2.5,.1,1.9,z("#d8d0c0",.5),t,2.45,e+.1,r),Z(1.6,.9,.05,z("#20262a",.2,{metalness:.3}),t,1.5,e+.81,r),Z(.7,1.4,.6,z("#c8202a",.4),t+1.5,.7,e+.2,r);let o=new Y(new se(2.2,.45),new Rt({map:Qi(i,"#1f4e7a","#fff"),roughness:.7}));o.position.set(t,2.15,e+.82),r.add(o),s.colliders.push({min:new _(t-1.1,0,e-.8),max:new _(t+1.9,2.5,e+.85),tag:"obj",solid:!0})}function A1(s,t,e){for(let i of[-1,1])no(s.static,t,i*e,2),s.colliders.push({min:new _(t-.42,0,i*e-.42),max:new _(t+.42,.5,i*e+.42),tag:"post"})}function R1(s,t,e){let i=z("#b08a55",.9),n=[z("#e8762a",.6),z("#c8282a",.6),z("#5a9a3a",.7)],r=0;for(let o of[-1,1]){for(let a=0;a<2;a++)Z(.5,.3,.38,i,t,.15+a*.31,o*e,s.static);for(let a=0;a<4;a++){let l=new Y(new Xt(.07,8,6),n[r++%3]);l.position.set(t-.12+a%2*.24,.66,o*e-.08+Math.floor(a/2)*.16),s.static.add(l)}s.colliders.push({min:new _(t-.26,0,o*e-.2),max:new _(t+.26,.7,o*e+.2),tag:"post"})}}function C1(s,t,e){let i=["#2a63c8","#e05a30","#e8c020","#2e8b57"],n=0;for(let r of[-1,1]){let o=Z(.5,.32,.3,z(i[n++%4],.8),t,.16,r*e,s.static);o.rotation.y=.3*r,Z(.55,.06,.35,z(i[n++%4],.95),t+.02,.35,r*e,s.static).rotation.y=-.2*r,s.colliders.push({min:new _(t-.28,0,r*e-.2),max:new _(t+.28,.4,r*e+.2),tag:"post"})}}var P1={tires:A1,crates:R1,bags:C1};function yp(s,t,e,i){let n=P1[t];return n&&n(s,e,i),!!n}function nl(s,t,e,i,{w:n=3,awning:r="#c8322a",goods:o="veg"}={}){let a=s.static,l=z("#8a6a42",.9);Z(n,.8,1.1,l,t,.4,e,a);let c=o==="veg"?["#c8282a","#e8762a","#5a9a3a","#7a3a8a","#e8c020"]:o==="fish"?["#9aa6b0","#b8c4cc","#7a8a96"]:["#e8d8b0","#c8a070","#f0ece0"],h=Le(Math.round(t*13+e*7));for(let d=0;d<Math.round(n*3);d++){let g=new Y(new Xt(.2+h()*.08,8,5,0,Math.PI*2,0,Math.PI/2),z(c[d%c.length],.65));g.position.set(t-n/2+.25+d%Math.round(n*1.5)*(n-.5)/Math.max(1,Math.round(n*1.5)-1),.8,e+(d<n*1.5?-.25:.25)),g.scale.y=.7,a.add(g)}let u=new Rt({map:Fe(128,32,(d,g,x)=>{for(let m=0;m<8;m++)d.fillStyle=m%2?"#f2efe6":r,d.fillRect(m*g/8,0,g/8,x)}),roughness:.9,side:Te}),f=new Y(new se(n+.4,1.6),u);f.position.set(t,2.25,e-i*.1),f.rotation.x=-Math.PI/2+i*.25,f.castShadow=!0,a.add(f);for(let d of[-1,1])Ot(.03,.03,2.3,z("#555"),t+d*(n/2+.1),1.15,e+i*.6,a,6);s.colliders.push({min:new _(t-n/2,0,e-.55),max:new _(t+n/2,.9,e+.55),tag:"obj",solid:!0})}function vp(s,t,e,i,n=.5){ds(s.static,t,e,n,"#222");for(let r=1;r<i;r++){let o=r/i,a=new _().lerpVectors(t,e,o);a.y-=Math.sin(o*Math.PI)*n+.06;let l=new Y(new Xt(.07,6,4),new $t({color:"#ffe6a0"}));l.position.copy(a),s.dynamic.add(l),s.nightOnly.push(l),r%Math.ceil(i/3)===0&&s.pointLights.push({pos:a.clone(),color:"#ffcf80",intensity:4,dist:7,shadow:!1})}}function I1(s,t,e,i,n){Ot(.03,.03,2.3,z("#ddd",.5),t,1.15,e,s,6).rotation.z=(n()-.5)*.2;let r=new Y(new Ai(1.3,.5,12,1,!0),new Rt({map:Fe(128,16,(o,a,l)=>{for(let c=0;c<12;c++)o.fillStyle=c%2?"#f6f2e8":i,o.fillRect(c*a/12,0,a/12,l)}),roughness:.8,side:Te}));r.position.set(t,2.4,e),r.castShadow=!0,s.add(r)}function sl(s,t,e,i=1,n=Math.random){let r=z("#7a6040",.95),o=t,a=0,l=(n()-.5)*.3;for(let h=0;h<7;h++){let u=Ot(.16*i,.2*i,.75*i,r,o,a+.37*i,e,s,7);u.rotation.z=l,o-=Math.sin(l)*.75*i,a+=.73*i}let c=z("#4a7a32",.85);for(let h=0;h<8;h++){let u=h/8*Math.PI*2,f=Z(2.2*i,.04,.42*i,c,o+Math.cos(u)*1*i,a+.1,e+Math.sin(u)*1*i,s);f.rotation.y=-u,f.rotation.z=-.45}}function k1(){return Fe(512,256,(s,t,e)=>{let i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,"#1d5a7a"),i.addColorStop(.7,"#2a7f96"),i.addColorStop(1,"#4aa8b0"),s.fillStyle=i,s.fillRect(0,0,t,e);for(let n=0;n<260;n++){s.strokeStyle=`rgba(255,255,255,${.08+Math.random()*.15})`,s.lineWidth=1+Math.random()*2;let r=Math.random()*t,o=Math.random()*e;s.beginPath(),s.moveTo(r,o),s.quadraticCurveTo(r+10,o-3,r+22+Math.random()*20,o),s.stroke()}})}function _p(s){let t=Le(61),e=s.def.halfL+1.6,i=s.def.halfW+2.2;gn(s,"asphalt",52,28,31),s.bounds={minX:-e+.4,maxX:e-.4,minZ:-i+.4,maxZ:i-.4},s.camZ=.6,Z(52,.18,2.2,z("#a39a8a",.95),0,.09,-i-1.1,s.static);let n=["#c4a07a","#bfae94","#b98d6a","#d7c3a0","#a9907a","#c9a982"];for(let a=0;a<7;a++){let l=-27+a*7.7;tn(s,{x0:l,x1:l+7.7,z:-i-2.2,face:1,h:11+t()*6,color:n[a%6],seed:120+a,floors:4,lit:.5,...a===2?{shop:{name:"\u0643\u0634\u0631\u064A \u0627\u0644\u062A\u062D\u0631\u064A\u0631",bg:"#a8321a",open:!0}}:a===4?{shop:{name:"\u0639\u0635\u064A\u0631 \u0642\u0635\u0628",bg:"#2f7a48",open:!0,awning:"#3a8a52"}}:{door:!0}})}mn(s,2,6.4,-i-2.2,1,3),s.colliders.push({min:new _(-30,0,-i-3),max:new _(30,20,-i),tag:"wall",invisible:!0}),ao(s,-e-.4,-3.2,Math.PI/2,"#f2efe6","#2a63c8"),ao(s,-e-.6,3,Math.PI/2+.06,"#f4f0e0","#c8322a"),ao(s,e+.5,-2.6,-Math.PI/2,"#efeadc","#2f8f46"),ao(s,-9,-i+.9,.02,"#f2efe6","#e2b21c"),ao(s,10,-i+.9,-.03,"#f6f2ea","#2a63c8"),s.colliders.push({min:new _(-e-3,0,-i),max:new _(-e,20,i),tag:"wall",invisible:!0}),s.colliders.push({min:new _(e,0,-i),max:new _(e+3,20,i),tag:"wall",invisible:!0}),T1(s,1,-i+.9,"\u0643\u0634\u0643 \u0627\u0644\u0623\u0645\u0627\u0646\u0629","#e8e0d0");let r=new Rt({map:He("#b9a888",125,{band:"rgba(60,50,40,0.4)",bricks:!1}),roughness:.95});De(s,-e-3,i,e+3,i,.8,r,{thick:.35,collideH:30});let o=new Y(new se(7,1.2),new $t({map:Vn([{text:"\u0645\u0648\u0642\u0641 \u0627\u0644\u0645\u0646\u064A\u0628",color:"rgba(250,245,230,0.9)",font:"900 110px Cairo"}]),transparent:!0}));o.position.set(-6,3.6,-i-2.15),s.static.add(o),so(s.static,6.5,-i+.9),Gn(s.static,5.7,-i+.9,Math.PI/2,"#2a6ad8"),Gn(s.static,7.3,-i+.9,-Math.PI/2,"#d8402a"),Ee(s,5.7,-i+.9,Math.PI/2,"old"),Ee(s,7.3,-i+.9,-Math.PI/2,"old"),Ee(s,-3.5,i-.45,Math.PI,"kid"),Ee(s,3.8,i-.45,Math.PI,"kid"),fs(s.static,-e+1.2,i-1.4,"#2f5a8a"),s.colliders.push({min:new _(-e+.8,0,i-1.8),max:new _(-e+1.6,.9,i-1),tag:"obj",solid:!0});for(let[a,l]of[[-14,!1],[-4.5,!0],[5,!1],[14.5,!1]])si(s,a,-i+.1,1,{arm:2.2,h:6,flicker:l});for(let[a,l]of[[-14,-4.5],[-4.5,5],[5,14.5]])ds(s.static,new _(a,5.9,-i+.1),new _(l,5.9,-i+.1),.5);s.walkerPaths.push({a:new _(-e+1,0,-i+2.2),b:new _(e-1,0,-i+2.2)}),s.walkerPaths.push({a:new _(e-1,0,i-1),b:new _(-e+1,0,i-1)}),s.walkerPaths.push({cross:!0,z0:-i+2.2,z1:i-1}),s.extras.toktok={z:1.5,from:-e-2,to:e+2},xn(s)}function Mp(s){let t=Le(71),e=s.def.halfL+1.2,i=s.def.halfW+1.6;gn(s,"tiles",48,26,41),s.bounds={minX:-e+.4,maxX:e-.4,minZ:-i+.4,maxZ:i-.4},s.camZ=.6;let n=-i,r=new Rt({map:Fe(1024,256,(x,m,p)=>{x.fillStyle="#e6dcc4",x.fillRect(0,0,m,p),x.fillStyle="rgba(160,140,110,0.25)";for(let y=0;y<300;y++)x.fillRect(Math.random()*m,Math.random()*p,3,2);x.fillStyle="#3a7a5a",x.fillRect(0,26,m,10);for(let y=0;y<9;y++){let v=(y+.5)*m/9;x.fillStyle="#5a4a38",x.beginPath(),x.moveTo(v-34,p-20),x.lineTo(v-34,120),x.arc(v,120,34,Math.PI,0),x.lineTo(v+34,p-20),x.fill(),x.strokeStyle="#c9a040",x.lineWidth=4,x.stroke()}}),roughness:.9});Z(e*2+10,7,1,r,0,3.5,n-.5,s.static),Z(e*2+10.4,.4,1.3,z("#d8ccb0",.85),0,7.2,n-.5,s.static),Z(2.4,3.4,.1,z("#2f6a4a",.6),0,1.7,n+.02,s.static);for(let x of[-1,1])Ot(.04,.04,.3,z("#c9a040",.3,{metalness:.8}),x*.18,1.6,n+.1,s.static,6);let o=new Y(new se(6,1.1),new Rt({map:Qi("\u0645\u0633\u062C\u062F \u0627\u0644\u0646\u0648\u0631","#2f6a4a","#fff4c8"),roughness:.7}));o.position.set(0,4.4,n+.03),s.static.add(o);let a=new Y(new Xt(4,24,12,0,Math.PI*2,0,Math.PI/2),z("#d8ccb0",.7));a.position.set(0,7.3,n-5),s.static.add(a);let l=new Y(new je(.3,.06,6,16,Math.PI*1.4),z("#d8b040",.3,{metalness:.8}));l.position.set(0,11.9,n-5),s.static.add(l);let c=new ne,h=z("#e8dcc0",.8);Ot(.9,1.1,14,h,0,7,0,c,10),Ot(1.4,1.4,.4,h,0,12,0,c,12),Ot(.7,.85,4,h,0,16,0,c,10);let u=new Y(new Ai(.75,2,10),z("#3a7a5a",.6));u.position.y=19,c.add(u);for(let x of[.6,2.4]){let m=Ot(.12,.25,.4,z("#ccc",.4),Math.cos(x)*.9,14.5,Math.sin(x)*.9,c,8);m.rotation.z=Math.PI/2}let f=new Y(new je(1.42,.05,6,24),new $t({color:"#7dffb0"}));f.rotation.x=Math.PI/2,f.position.y=12.25,c.add(f),s.nightOnly.push(f),c.position.set(e-2,0,n-2.2),s.static.add(c),s.colliders.push({min:new _(-40,0,n-1),max:new _(40,20,n),tag:"wall"});let d=z("#7a5a3a",.9);for(let x of[-1,1]){Z(1.8,.9,.4,d,x*2.6,.45,n+.25,s.static);for(let m=0;m<6;m++)Z(.24,.05,.1,z(["#222","#6a4a2a","#2e8b57","#3a6fd8"][m%4],.8),x*2.6-.6+m%3*.6,.47+Math.floor(m/3)*.4,n+.4,s.static);s.colliders.push({min:new _(x*2.6-.9,0,n),max:new _(x*2.6+.9,.9,n+.45),tag:"obj",solid:!0})}Z(.9,1.5,.5,z("#c8c8c8",.3,{metalness:.7}),-7,.75,n+.3,s.static),s.colliders.push({min:new _(-7.5,0,n),max:new _(-6.5,1.5,n+.55),tag:"obj",solid:!0});for(let x of[-11,8.5])Z(3,.45,.6,z("#c8bca0",.9),x,.22,n+.5,s.static),s.colliders.push({min:new _(x-1.5,0,n),max:new _(x+1.5,.45,n+.8),tag:"obj",solid:!0});Ee(s,-11.8,n+.55,0,"old"),Ee(s,-10.3,n+.55,0,"old"),Ee(s,8.5,n+.55,0,"old"),tn(s,{x0:-e-9,x1:-e,z:n+.5,face:1,h:12,color:"#c4a07a",seed:131,floors:4,lit:.5,door:!0}),tn(s,{x0:e,x1:e+9,z:n+.5,face:1,h:13,color:"#bfae94",seed:132,floors:4,lit:.5,shop:{name:"\u0639\u0637\u0627\u0631\u0629 \u0627\u0644\u062D\u0627\u062C \u0633\u064A\u062F",bg:"#6a3a1a",open:!0}}),mn(s,-e-4.5,6.4,n+.5,1,3);let g=new Rt({map:He("#c9b896",133,{band:"rgba(60,50,40,0.4)"}),roughness:.95});De(s,-e,n,-e,i,2.6,g,{thick:.4,collideH:30}),De(s,e,n,e,i,2.6,g,{thick:.4,collideH:30}),De(s,-e,i,e,i,.75,new Rt({map:He("#c9b896",134,{bricks:!1}),roughness:.95}),{thick:.35,collideH:30}),sl(s.static,-e+1.2,i-1.3,1,t),sl(s.static,e-1.3,i-1.4,.9,t),s.colliders.push({min:new _(-e+.9,0,i-1.6),max:new _(-e+1.5,4,i-1),tag:"obj",solid:!0}),s.colliders.push({min:new _(e-1.6,0,i-1.7),max:new _(e-1,4,i-1.1),tag:"obj",solid:!0});for(let[x,m]of[[-9,!1],[-3.2,!1],[3.2,!0],[9,!1]])si(s,x,n+.05,1,{h:5.2,arm:.8,wall:!0,flicker:m});s.walkerPaths.push({a:new _(-e+1,0,n+1.4),b:new _(e-1,0,n+1.4)}),s.walkerPaths.push({a:new _(e-1,0,n+1.4),b:new _(0,0,n+.4)}),s.extras.bike={z:i-1.2},xn(s)}function bp(s){let t=Le(83),e=s.def.halfL+2.5,i=s.def.halfW+2;gn(s,"sand",64,32,51),s.bounds={minX:-e+.4,maxX:e-.4,minZ:-i+.4,maxZ:i-.4},s.camZ=.8;let n=new Rt({map:k1(),roughness:.15,metalness:.1,color:"#ffffff"});n.map.wrapS=n.map.wrapT=di,n.map.repeat.set(6,3);let r=new Y(new se(400,160),n);r.rotation.x=-Math.PI/2,r.position.set(0,.03,-i-1-80),s.root.add(r),s.extras.sea=n.map;let o=new $t({color:"#f4f8f8",transparent:!0,opacity:.6,depthWrite:!1}),a=new Y(new se(200,.6),o);a.rotation.x=-Math.PI/2,a.position.set(0,.04,-i-1.2),s.dynamic.add(a),s.extras.foam=a,s.colliders.push({min:new _(-60,0,-i-4),max:new _(60,20,-i),tag:"wall",invisible:!0});let l=z("#8a8478",.95);for(let d of[-1,1]){for(let g=0;g<9;g++){let x=new Y(new Aa(.8+t()*.6,0),l);x.position.set(d*(e+.6+t()*.8),.4,-i+g*(i*2/8)),x.rotation.set(t()*3,t()*3,t()*3),x.castShadow=!0,s.static.add(x)}s.colliders.push({min:new _(d>0?e:-e-3,0,-i-2),max:new _(d>0?e+3:-e,20,i+2),tag:"wall",invisible:!0})}let c=new Rt({map:He("#d8d0c0",141,{bricks:!1,band:"rgba(40,90,140,0.5)"}),roughness:.9});De(s,-e-4,i,e+4,i,.7,c,{thick:.4,collideH:30});for(let[d,g]of[[-e+2,!1],[-4,!1],[4,!0],[e-2,!1]])si(s,d,-i+.3,1,{h:6.5,arm:1.8,flicker:g});let h=["#e05a30","#2a63c8","#e8c020","#2e8b57","#c8322a"];[[-15,-i+1.6],[-9,-i+1.2],[8,-i+1.4],[14.5,-i+1.6],[-19,i-2],[18.5,i-2.2]].forEach(([d,g],x)=>{I1(s.static,d,g,h[x%h.length],t),Gn(s.static,d+.7,g+.2,-.5+t(),"#f2f2ec"),s.colliders.push({min:new _(d-.08,0,g-.08),max:new _(d+.08,2.4,g+.08),tag:"pole"})}),Ee(s,-15+.7,-i+1.8,.4,"old"),Ee(s,8.7,-i+1.6,-.3,"kid"),Ee(s,-4,i-.45,Math.PI,"kid"),Ee(s,3,i-.45,Math.PI,"kid");let f=new ne;Z(1.2,.8,.7,z("#4a4a4a",.6,{metalness:.4}),0,.4,0,f);for(let d=0;d<5;d++){let g=Ot(.04,.04,.3,z("#e8c040",.7),-.4+d*.2,.86,0,f,6);g.rotation.z=Math.PI/2}f.position.set(-1.5,0,i-1),s.static.add(f),s.pointLights.push({pos:new _(-1.5,1.2,i-1),color:"#ff7a30",intensity:3,dist:4,shadow:!1}),s.colliders.push({min:new _(-2.1,0,i-1.4),max:new _(-.9,.9,i-.6),tag:"obj",solid:!0}),sl(s.static,-e+1,i-1,1.1,t),sl(s.static,e-1.2,i-1.1,1,t),s.walkerPaths.push({a:new _(-e+1,0,-i+.6),b:new _(e-1,0,-i+.6)}),s.walkerPaths.push({a:new _(e-1,0,i-.8),b:new _(-e+1,0,i-.8)}),xn(s)}function Ep(s){let t=Le(97),e=s.def.halfL+1.4,i=s.def.halfW+2.2;gn(s,"asphalt",50,26,61),s.bounds={minX:-e+.4,maxX:e-.4,minZ:-i+.4,maxZ:i-.4},s.camZ=.6;let n=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#c7b7a0"];[{name:"\u062C\u0632\u0627\u0631\u0629 \u0627\u0644\u0623\u0645\u0627\u0646\u0629",bg:"#8a2a2a",open:!0},{door:!0},{name:"\u062D\u0644\u0648\u0627\u0646\u064A \u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A",bg:"#c07a1a",open:!0,awning:"#d08a2a"},{door:!0},{name:"\u062E\u0631\u062F\u0648\u0627\u062A \u0648\u0645\u0646\u0638\u0641\u0627\u062A",bg:"#1f4e7a",open:!1},{door:!0},{name:"\u0639\u064A\u0634 \u0648\u0641\u064A\u0646\u0648",bg:"#6a3a1a",open:!0}].forEach((l,c)=>{let h=-25+c*7.2;tn(s,{x0:h,x1:h+7.2,z:-i-1.6,face:1,h:10+t()*6,color:n[c%n.length],seed:150+c,floors:3,lit:.6,...l.door?{door:!0}:{shop:l}})}),mn(s,-3.5,3.3,-i-1.6,1,3),mn(s,11,6.4,-i-1.6,1,3),s.colliders.push({min:new _(-30,0,-i-3),max:new _(30,20,-i-1.6),tag:"wall",invisible:!0}),nl(s,-12,-i+.2,1,{w:3.2,awning:"#c8322a",goods:"veg"}),nl(s,-6,-i+.2,1,{w:2.6,awning:"#2a63c8",goods:"bread"}),nl(s,6.5,-i+.2,1,{w:3,awning:"#2f8f46",goods:"veg"}),nl(s,12.5,-i+.2,1,{w:2.8,awning:"#e2b21c",goods:"fish"});for(let[l,c]of[[-e+1.2,-2],[-e+1,-1.2],[e-1.1,2.2]])Z(.6,.4,.45,z("#b08a55",.9),l,.2,c,s.static);s.colliders.push({min:new _(-e+.7,0,-2.4),max:new _(-e+1.6,.4,-.8),tag:"obj",solid:!0}),s.colliders.push({min:new _(e-1.5,0,1.9),max:new _(e-.7,.4,2.5),tag:"obj",solid:!0});let o=new Rt({map:He("#b9a888",161,{band:"rgba(60,50,40,0.4)"}),roughness:.95});De(s,-e-.2,-i,-e-.2,i,3.6,o,{thick:.4,collideH:20}),De(s,e+.2,-i,e+.2,i,3.6,o,{thick:.4,collideH:20});let a=new Y(new se(8,2),new $t({map:Vn([{text:"\u0633\u0648\u0642 \u0627\u0644\u062C\u0645\u0639\u0629",y:.45,color:"rgba(30,30,30,0.8)",font:"900 110px Cairo"}]),transparent:!0}));a.position.set(-e+.01,2.2,0),a.rotation.y=Math.PI/2,s.static.add(a),De(s,-e,i,e,i,.8,new Rt({map:He("#b9a888",162,{bricks:!1}),roughness:.95}),{thick:.35,collideH:30}),tl(s,e-3,i-1.2,Math.PI),Ee(s,-6,i-.45,Math.PI,"kid"),Ee(s,1.5,i-.45,Math.PI,"kid"),Ee(s,-12.6,-i+1,0,"old"),Ee(s,12.9,-i+1,0,"old"),vp(s,new _(-e,5.5,-i-1),new _(e,5.5,i-.4),22,1),vp(s,new _(e,5.2,-i-1),new _(-e,5.2,i-.4),22,1);for(let[l,c]of[[-16,!1],[-1,!0],[16,!1]])si(s,l,-i-1.4,1,{arm:2,h:5.6,flicker:c});s.walkerPaths.push({a:new _(-e+1,0,-i+1.2),b:new _(e-1,0,-i+1.2)}),s.walkerPaths.push({a:new _(e-1,0,i-.9),b:new _(-e+1,0,i-.9)}),s.walkerPaths.push({cross:!0,z0:-i+1.2,z1:i-.9}),s.extras.bike={z:.5},xn(s)}function L1(s){return{def:s,root:new ne,static:new ne,dynamic:new ne,colliders:[],windows:[],balconies:[],lamps:[],pointLights:[],litMats:[],nightOnly:[],dayOnly:[],doors:[],flags:[],clothes:[],walkerPaths:[],spectators:[],goals:[],animals:[],extras:{},bounds:null,ballOut:null,camZ:0}}function gn(s,t,e,i,n){let r=s.def,o=Qf(t,e,i,r,n),a=new Y(new se(e,i),new Rt({map:o,roughness:1}));return a.rotation.x=-Math.PI/2,a.receiveShadow=!0,s.root.add(a),s.groundMesh=a,a}function xn(s){let t=s.def,e=t.goal.type==="chalk"?t.halfL+1:t.halfL-.4;for(let i of[-1,1]){let n=i*e;t.goal.type==="bricks"?lp(s,n,t.goal.hw,i):t.goal.type==="slippers"?cp(s,n,t.goal.hw):t.goal.type==="frame"?hp(s,n,t.goal.hw,t.goal.h,i):t.goal.type==="chalk"?up(s,n,t.goal.hw,t.goal.h,-i):yp(s,t.goal.type,n,t.goal.hw),s.goals.push({side:i,x:n,hw:t.goal.hw,h:t.goal.h,type:t.goal.type})}}function Ee(s,t,e,i,n="kid"){s.spectators.push({pos:new _(t,0,e),rotY:i,kind:n})}function D1(s){let t=s.def,e=Le(11);gn(s,"asphalt",46,15,4);let i=20.5,n=-6.2,r=6.2;s.bounds={minX:-i+.5,maxX:i-.5,minZ:n+.4,maxZ:r-.4},s.camZ=.4;let o=z("#a39a8a",.95);Z(46,.16,1.2,o,0,.08,n+.6,s.static),Z(46,.16,1.2,o,0,.08,r-.6,s.static),Z(46,.05,.1,z("#e8e2d0"),0,.17,n+1.2,s.static);let a=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#c7b7a0","#b0a08a"];[[-24,-17,10.5,{door:!0}],[-17,-9.5,13,{shop:{name:"\u0642\u0647\u0648\u0629 \u0627\u0644\u0645\u0639\u0644\u0645",bg:"#6a3a1a",open:!0,sub:"\u0634\u0627\u064A \u2022 \u0642\u0647\u0648\u0629 \u2022 \u0634\u064A\u0634\u0629"}}],[-9.5,-2.5,11.5,{door:!0}],[-2.5,4.5,14.5,{shop:{name:"\u0628\u0642\u0627\u0644\u0629 \u0627\u0644\u0623\u0645\u0644",bg:"#1f6b3a",open:!0,awning:"#2f7a48"}}],[4.5,11.5,12,{door:!0}],[11.5,18,13.5,{shop:{name:"\u0645\u0643\u0648\u062C\u064A \u0631\u0650\u062C\u0644",bg:"#8a2a2a",open:!1}}],[18,25,11,{door:!0}]].forEach(([d,g,x,m],p)=>tn(s,{x0:d,x1:g,z:n,face:1,h:x,color:a[p%a.length],seed:p+3,floors:3,lit:.55,...m})),mn(s,-6.2,3.3,n,1,3),mn(s,8,6.4,n,1,3),s.extras.momBalcony=0;let c=z("#3a332c",1);for(let d=0;d<7;d++){let g=-24+d*7,x=g+7,m=a[(d+3)%a.length],p=.7+d%2*.15,y=new Rt({map:He(m,d+20,{band:"rgba(70,60,50,0.35)",bricks:!1}),roughness:.95}),v=Z(7,p,.35,y,(g+x)/2,p/2,r+.18,s.static);Z(7,.04,.36,c,(g+x)/2,p+.02,r+.18,s.static).castShadow=!1,d%2===0&&Z(1.6,.18,.6,z("#a39a8a"),(g+x)/2,.09,r-.2,s.static)}s.colliders.push({min:new _(-30,0,r),max:new _(30,20,r+3),tag:"wall",invisible:!0});let h=new Rt({map:He("#b9a888",40,{band:"rgba(60,50,40,0.4)"}),roughness:.95});De(s,-i-.2,n,-i-.2,r,4.2,h,{thick:.4,collideH:20});let u=new Y(new se(9,2.2),new $t({map:Vn([{text:"\u0645\u0645\u0646\u0648\u0639 \u0644\u0639\u0628 \u0627\u0644\u0643\u0648\u0631\u0629",y:.33,color:"rgba(160,20,20,0.85)",font:"900 96px Cairo"},{text:"\u0628\u0623\u0645\u0631 \u0627\u0644\u0633\u0643\u0627\u0646",y:.72,color:"rgba(30,30,30,0.8)",font:"900 70px Cairo"}]),transparent:!0}));u.position.set(-i+.01,2.4,0),u.rotation.y=Math.PI/2,s.static.add(u),De(s,i+.2,n,i+.2,r,3.6,new Rt({map:He("#7d9a7a",41,{band:"rgba(40,50,40,0.4)"}),roughness:.95}),{thick:.4,collideH:20});let f=new Y(new se(8,2),new $t({map:Vn([{text:"\u062D\u0627\u0631\u0629 \u0627\u0644\u0623\u0628\u0637\u0627\u0644",y:.45,color:"rgba(250,245,230,0.9)",font:"900 110px Cairo"}]),transparent:!0}));f.position.set(i-.01,2.3,0),f.rotation.y=-Math.PI/2,s.static.add(f),op(s,i-1.8,3.6,Math.PI/2+.08,"#d8c9a0"),fs(s.static,i-1,-4.2,"#2f5a8a"),fs(s.static,i-1.7,-4.6,"#8a3a2a"),s.colliders.push({min:new _(i-2.1,0,-5.2),max:new _(i,.9,-3.8),tag:"obj",solid:!0}),tl(s,13.2,n+1.75,0),so(s.static,-14.5,n+1.9),so(s.static,-11.8,n+1.9),Gn(s.static,-15.2,n+1.9,Math.PI/2),Gn(s.static,-13.8,n+1.9,-Math.PI/2,"#d8402a"),Gn(s.static,-12.5,n+1.9,Math.PI/2,"#2a6ad8"),Ee(s,-15.2,n+1.9,Math.PI/2,"old"),Ee(s,-12.5,n+1.9,Math.PI/2,"old"),Ee(s,-7,r-.35,Math.PI,"kid"),Ee(s,-6.2,r-.35,Math.PI,"kid"),Ee(s,4.5,r-.35,Math.PI,"kid"),Ee(s,9.5,n+.45,0,"kid"),si(s,-15.5,n+.9,1,{arm:2.2}),si(s,-5,n+.9,1,{arm:2.4}),si(s,4.8,n+.9,1,{flicker:!0,arm:2.4}),si(s,15.5,n+.9,1,{arm:2.2});for(let[d,g]of[[-15.5,-5],[-5,4.8],[4.8,15.5]])ds(s.static,new _(d,5.5,n+.9),new _(g,5.5,n+.9),.5);ds(s.static,new _(-20,9,n),new _(20,8.5,n+.3),1.2,"#222"),s.clothes.push(...Qa(s.static,new _(-9,7.5,n+.35),new _(-3.2,7.4,n+.35),e,.25)),s.clothes.push(...Qa(s.static,new _(5,10.6,n+.35),new _(11,10.6,n+.35),e,.2)),Z(1.4,1,.8,z("#2f6a3a",.6,{metalness:.3}),-19,.5,n+.8,s.static),Z(.6,.4,.5,z("#b08a5a"),-18,.2,n+1.4,s.static).rotation.y=.4,s.colliders.push({min:new _(-19.7,0,n+.4),max:new _(-18.3,1,n+1.2),tag:"obj",solid:!0}),s.animals.push({kind:"cat",pos:new _(-18,.4,n+1.4),rot:.4}),s.walkerPaths.push({a:new _(-22,0,n+.7),b:new _(22,0,n+.7)}),s.walkerPaths.push({a:new _(22,0,r-.8),b:new _(-22,0,r-.8)}),s.walkerPaths.push({cross:!0,z0:n+.3,z1:r-.3}),s.extras.toktok={z:.6,from:-i-2,to:i+2},s.extras.bike={z:-2.5},xn(s)}function U1(s){let t=s.def,e=Le(23),i=23.5,n=11.5;gn(s,"dirt",62,34,9),s.bounds={minX:-i+.5,maxX:i-.5,minZ:-n+.5,maxZ:n-.5},s.camZ=.8;let r=new Rt({map:He("#bdb3a0",50,{band:"rgba(80,70,60,0.35)"}),roughness:.95});r.map.repeat.set(6,1),De(s,-i,-n,i,-n,3,r,{thick:.35,collideH:30}),De(s,-i,-n,-i,n,3,r,{thick:.35,collideH:30}),De(s,i,-n,i,n,3,r,{thick:.35,collideH:30});let o=new Rt({map:He("#bdb3a0",51,{band:"rgba(80,70,60,0.35)",bricks:!1}),roughness:.95});De(s,-i,n,i,n,.9,o,{thick:.35,collideH:30});let a=[{x:-12,text:"\u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u062C\u0645\u0629",bg:"#1f4e9a"},{x:0,text:"\u062D\u0648\u0634 \u0627\u0644\u0634\u0628\u0627\u0628",bg:"#8a2a2a",sub:"\u0644\u0644\u062A\u0623\u062C\u064A\u0631 \u2022 \u0643\u0648\u0631\u0629 \u062E\u0645\u0627\u0633\u064A"},{x:12,text:"\u0645\u062E\u0628\u0632 \u0627\u0644\u062D\u0631\u064A\u0629",bg:"#c07a1a",sub:"\u0639\u064A\u0634 \u0628\u0644\u062F\u064A \u0648\u0641\u064A\u0646\u0648"}];for(let f of a){let d=new Y(new se(5.5,1.4),new Rt({map:Qi(f.text,f.bg,"#fff",f.sub),roughness:.9}));d.position.set(f.x,1.7,-n+.19),s.static.add(d)}let l=new Y(new se(10,2.2),new $t({map:Vn([{text:"\u0627\u0644\u0643\u0648\u0631\u0629 \u0644\u0644\u062C\u0645\u064A\u0639",color:"rgba(30,30,30,0.7)",font:"900 100px Cairo",rot:-.04}]),transparent:!0}));l.position.set(-i+.19,1.6,0),l.rotation.y=Math.PI/2,s.static.add(l);let c=z("#3a5a7a",.6,{metalness:.5});Z(.1,2.6,3,c,i-.15,1.3,-6,s.static);for(let f=0;f<8;f++)Z(.12,2.6,.05,z("#2a4a6a",.6,{metalness:.5}),i-.2,1.3,-7.4+f*.4,s.static);s.doors.push(new _(i-1,0,-6));let h=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94"];for(let f=0;f<8;f++){let d=-30+f*7.5;tn(s,{x0:d,x1:d+7.5,z:-n-4,face:1,h:10+e()*9,color:h[f%6],seed:60+f,floors:5,lit:.45,roofStuff:!0})}mn(s,-4,6.4,-n-4,1,3);for(let f of[-1,1])tn(s,{x0:f>0?i+3:-i-30,x1:f>0?i+30:-i-3,z:-n-4,face:1,h:14,color:"#b0a08a",seed:70+f,floors:4,lit:.4,roofStuff:!1});fr(s.static,-i+1.6,-n+1.6,1.1,e),fr(s.static,i-1.8,n-2.2,1,e),fr(s.static,-i+2,n-2,.9,e),s.colliders.push({min:new _(-i+1.3,0,-n+1.3),max:new _(-i+1.9,3,-n+1.9),tag:"obj",solid:!0}),no(s.static,i-1.4,-n+1.4,4),no(s.static,i-2.3,-n+1.2,2),fs(s.static,-i+1.2,2.5,"#8a3a2a"),fs(s.static,-i+1,3.4,"#3a6a3a"),s.colliders.push({min:new _(-i+.6,0,2),max:new _(-i+1.6,.9,3.9),tag:"obj",solid:!0});let u=new ne;for(let f of[-1,1])for(let d of[-1,1])Ot(.08,.08,6,z("#5a5a5a",.5,{metalness:.6}),f*1,3,d*1,u,6);Ot(1.4,1.4,2.2,z("#d8d4c8",.6),0,7.1,0,u,20),u.position.set(16,0,-n-2.2),s.static.add(u);for(let f of[-8,6]){Z(3,.08,.5,z("#7a5a3a"),f,.45,-n+.7,s.static);for(let d of[-1,1])Z(.08,.45,.4,z("#5a4030"),f+d*1.3,.22,-n+.7,s.static)}Ee(s,-8.8,-n+.75,0,"kid"),Ee(s,-7.6,-n+.75,0,"kid"),Ee(s,5.4,-n+.75,0,"old"),Ee(s,6.8,-n+.75,0,"kid"),s.animals.push({kind:"sheep",pos:new _(-i+3.2,0,n-3),rot:.8}),s.colliders.push({min:new _(-i+2.6,0,n-3.5),max:new _(-i+3.8,.9,n-2.5),tag:"sheep",solid:!0});for(let[f,d,g,x]of[[-i+.6,-n+.6,1,!1],[i-.6,-n+.6,1,!0],[-i+.6,n-.6,-1,!1],[i-.6,n-.6,-1,!1]])si(s,f,d,g,{h:8.5,arm:.8,flicker:x}),s.lamps[s.lamps.length-1].flood=!0;s.walkerPaths.push({a:new _(i-1,0,-6),b:new _(-i+1,0,-n+1.2)}),s.walkerPaths.push({a:new _(-i+1,0,n-1.2),b:new _(i-1,0,-6)}),s.extras.bike={z:n-1.3},xn(s)}function N1(s){let t=s.def,e=Le(37),i=t.halfL+1,n=9.6;gn(s,"tiles",48,26,13),s.bounds={minX:-i+.4,maxX:i-.4,minZ:-n+.4,maxZ:n-.4},s.camZ=.6;let r=-n;tn(s,{x0:-i-6,x1:i+6,z:r,face:1,h:13,color:"#e0c98f",seed:81,floors:3,lit:.25,roofStuff:!1,door:!0});let o=new Y(new se(9,1.5),new Rt({map:Qi("\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0646\u0635\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u064A\u0629 \u0628\u0646\u064A\u0646","#1f4e7a","#fff","\u0625\u062F\u0627\u0631\u0629 \u0634\u0631\u0642 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629"),roughness:.8}));o.position.set(0,10.6,r+.08),s.static.add(o),fp(s,6.5,r+1.2),s.colliders.push({min:new _(6.4,0,r+1.1),max:new _(6.6,8,r+1.3),tag:"pole"});let a=new Y(new se(6,1.4),new $t({map:Vn([{text:"\u0627\u0644\u0639\u0644\u0645 \u0646\u0648\u0631",color:"rgba(30,80,150,0.9)",font:"900 120px Cairo"}]),transparent:!0}));a.position.set(-10,1.3,r+.02),s.static.add(a);let l=new Rt({map:He("#d8cba8",85,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95});l.map.repeat.set(3,1),De(s,-i,r,-i,n,3.4,l,{thick:.4,collideH:30}),De(s,i,r,i,n,3.4,l,{thick:.4,collideH:30}),De(s,-i,n,i,n,.9,new Rt({map:He("#d8cba8",86,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95}),{thick:.35,collideH:30}),Z(1,1.4,.5,z("#c8c8c8",.3,{metalness:.7}),13,.7,r+.3,s.static),Z(.5,.06,.2,z("#666"),13,1,r+.6,s.static),s.colliders.push({min:new _(12.5,0,r),max:new _(13.5,1.4,r+.6),tag:"obj",solid:!0});for(let c of[-13,-3,9]){Z(2.6,.08,.45,z("#3a6a9a"),c,.45,r+.6,s.static);for(let h of[-1,1])Z(.08,.45,.4,z("#2a4a6a"),c+h*1.1,.22,r+.6,s.static)}Ee(s,-13.6,r+.65,0,"kid"),Ee(s,-12.4,r+.65,0,"kid"),Ee(s,8.4,r+.65,0,"kid"),fr(s.static,-i-2,n+2,1.3,e),fr(s.static,i+2,n+2.5,1.2,e);for(let[c,h]of[[-12,!1],[-1.5,!1],[8,!0],[15,!1]])si(s,c,r+.05,1,{h:4.6,arm:.9,wall:!0,flicker:h});s.extras.headmaster=!0,s.walkerPaths.push({a:new _(-i+1,0,r+1.2),b:new _(i-1,0,r+1.2)}),xn(s)}function z1(s){let t=s.def,e=Le(51),i=-17,n=13.2,r=7.2,o=gn(s,"roof",n-i,r*2,21);o.position.x=(i+n)/2,s.bounds={minX:-t.halfL-.8,maxX:n-.4,minZ:-r+.4,maxZ:r-.4},s.camZ=.4;let a=new Rt({map:He("#c7bba5",91,{band:"rgba(60,55,50,0.3)",bricks:!1}),roughness:.95});a.map.repeat.set(8,.3);let l=1;De(s,i,-r,n,-r,l,a,{thick:.3}),De(s,i,r,n,r,l,a,{thick:.3}),De(s,n,-r,n,r,l,a,{thick:.3}),De(s,i,-r,i,r,l,a,{thick:.3});let c=new Rt({map:He("#bfae94",92,{}),roughness:.95});Z(n-i+.3,30,r*2+.3,c,(i+n)/2,-15.01,0,s.static).castShadow=!1;let h=-14.6,u=4.6,f=Z(3.6,2.8,3.2,new Rt({map:He("#cdbfa6",93,{}),roughness:.95}),h,1.4,u,s.static);Z(3.8,.15,3.4,z("#8a8070"),h,2.85,u,s.static),Z(1,2.1,.06,z("#4a3a2a"),h+1,1.05,u-1.62,s.static),s.colliders.push({min:new _(h-1.8,0,u-1.6),max:new _(h+1.8,2.9,u+1.6),tag:"wall",solid:!0}),s.doors.push(new _(h+1,0,u-2)),dp(s,-14.8,-4.6),s.extras.pigeons=new _(-14.8,3.9,-4.6),io(s.static,-3,0,-r+1),io(s.static,1,0,-r+1),s.colliders.push({min:new _(-3.7,0,-r+.3),max:new _(1.7,2.1,-r+1.7),tag:"obj",solid:!0});for(let M of[-9,-6.5,5,8])ja(s.static,M,.6,-r+.4,1);s.clothes.push(...Qa(s.static,new _(4,2.3,-r+.2),new _(12.8,2.3,-r+.2),e,.25));for(let M of[4,12.8])Ot(.03,.03,2.3,z("#555"),M,1.15,-r+.2,s.static,6);let d=["#ff4455","#44dd66","#4488ff","#ffcc33","#ff66cc"],g=new _(-12.6,2.7,u-1.6),x=new _(12.8,2.5,-r+.2);ds(s.static,g,x,.6,"#222");let m=[];for(let M=1;M<28;M++){let E=M/28,L=new _().lerpVectors(g,x,E);L.y-=Math.sin(E*Math.PI)*.6+.05;let D=new Y(new Xt(.06,6,4),new $t({color:d[M%d.length]}));D.position.copy(L),s.dynamic.add(D),m.push(D)}s.extras.fairy=m;let p=new ne,y=z("#c9a040",.35,{metalness:.8});Ot(.02,.18,.18,y,0,.62,0,p,8);let v=new Rt({color:"#ffb040",emissive:"#ff9a30",emissiveIntensity:.4,roughness:.3,transparent:!0,opacity:.9});Ot(.2,.2,.5,v,0,.3,0,p,8),Ot(.2,.08,.15,y,0,-.02,0,p,8),p.position.set(-12.6+.4,1.9,u-1.7),s.static.add(p),s.litMats.push({m:v,lit:!0,k:2.5,dayK:.3}),s.pointLights.push({pos:new _(-12.2,2.1,u-1.9),color:"#ff9a40",intensity:5,dist:6,shadow:!1}),si(s,h+1.9,u-.6,-1,{h:2.6,arm:.5,wall:!0,flicker:!0}),si(s,12.6,-r+.4,1,{h:3.4,arm:.7}),si(s,-4,-r+.3,1,{h:3.6,arm:.9}),si(s,-9.5,-r+.3,1,{h:3.6,arm:1.6}),si(s,6,-r+.3,1,{h:3.6,arm:1.6});let b=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#9a8a78"];for(let M=0;M<26;M++){let E=M/26*Math.PI*2,L=34+e()*22,D=Math.cos(E)*L*1.2,H=Math.sin(E)*L;if(H>8&&Math.abs(D)<30)continue;let tt=-8+e()*14,V=8+e()*8,st=8+e()*8,X=new Rt({map:He(b[M%b.length],100+M,{}),roughness:.95}),lt=Z(V,30,st,X,D,tt-15,H,s.static);lt.castShadow=!1;for(let ut=0;ut<6;ut++){let gt=new Rt({color:"#2a2a2a",emissive:"#ffb860",emissiveIntensity:0}),kt=new Y(new se(.9,1.1),gt),Qt=H>0?H-st/2-.01:H+st/2+.01;kt.position.set(D-V/2+1+e()*(V-2),tt-1.5-Math.floor(e()*4)*3,Qt),H>0&&(kt.rotation.y=Math.PI),s.dynamic.add(kt),s.litMats.push({m:gt,lit:e()<.7,k:1})}e()<.5&&io(s.static,D,tt,H),e()<.5&&ja(s.static,D+2,tt,H,H<0?1:-1)}let R=new ne,T=z("#e8dcc0",.8);Ot(1.2,1.4,22,T,0,11,0,R,10),Ot(1.7,1.7,.5,T,0,18,0,R,12),Ot(.9,1.1,6,T,0,24,0,R,10),Ot(1.3,1.3,.4,T,0,27,0,R,12);let A=new Y(new Ai(.9,2.5,10),z("#3a7a5a",.6));A.position.y=28.6,R.add(A);let P=new Y(new je(.35,.07,6,16,Math.PI*1.4),z("#d8b040",.3,{metalness:.8}));P.position.y=30.3,R.add(P);let B=new Y(new je(1.72,.06,6,24),new $t({color:"#7dffb0"}));B.rotation.x=Math.PI/2,B.position.y=18.3,R.add(B),s.nightOnly.push(B),R.position.set(-30,-12,-48),s.static.add(R),s.ballOut=M=>M.x<i+.1||M.x>n-.1||Math.abs(M.z)>r-.1,s.extras.parapet={X0:i,X1:n,W:r,h:l},s.colliders.push({min:new _(-40,-40,r+.15),max:new _(40,-2,r+3),tag:"void"}),s.walkerPaths.length=0,xn(s)}var B1={alley:D1,yard:U1,school:N1,roof:z1,microbus:_p,mosque:Mp,beach:bp,market:Ep};function Sp(s){let t=Wn[s],e=L1(t);B1[s](e);let i={alley:"#5f5950",yard:"#7a6a50",school:"#8a857a",roof:"#6a5f52",microbus:"#5f5950",mosque:"#8a857a",beach:"#c8b088",market:"#5f5950"}[s],n=new Y(new se(400,400),new Rt({color:i,roughness:1}));n.rotation.x=-Math.PI/2,n.position.y=s==="roof"?-14:-.02,n.receiveShadow=!0,e.root.add(n),e.root.add(e.static),e.root.add(e.dynamic);for(let o of[...e.nightOnly,...e.dayOnly])o.userData.keep=!0;let r=new Set;return e.root.traverse(o=>{if(o.isMesh)for(let a of Array.isArray(o.material)?o.material:[o.material])!a||r.has(a)||!a.isMeshStandardMaterial||!a.map||a.bumpMap||a.transparent||(r.add(a),a.bumpMap=a.map,a.bumpScale=o===e.groundMesh?3.5:2.5,a.needsUpdate=!0)}),xp(e.static),e.static.traverse(o=>{o.isMesh&&(o.receiveShadow=!0,o.userData.dyn||(o.matrixAutoUpdate=!1,o.updateMatrix()))}),e.static.updateMatrixWorld(!0),e}var rl=class extends Ln{constructor(){super();let t=new fe;t.deleteAttribute("uv");let e=new Rt({side:We}),i=new Rt,n=new or(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new Y(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Y(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Y(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Y(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Y(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Y(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Y(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Y(t,mr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Y(t,mr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Y(t,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Y(t,mr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Y(t,mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Y(t,mr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function mr(s){let t=new $t;return t.color.setScalar(s),t}var lo=class s extends Y{constructor(){let t=s.SkyShader,e=new be({name:t.name,uniforms:li.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:We,depthWrite:!1});super(new fe(1,1,1),e),this.isSky=!0}};lo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new _},up:{value:new _(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var wp=new _(14,30,16).normalize(),Tp=new _(36,6,14).normalize(),bu=null;function O1(s){if(!bu){let t=new Ks(s);bu=t.fromScene(new rl,.04).texture,t.dispose()}return bu}function F1(s){let t=new Xt(400,32,16),e=new be({side:We,depthWrite:!1,fog:!1,uniforms:{top:{value:new Pt(s?"#050a1e":"#4f8fd0")},mid:{value:new Pt(s?"#1c2850":"#9cc7e8")},bottom:{value:new Pt(s?"#2a2030":"#e8dcc0")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.6, h)) : mix(mid, bottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0); }`}),i=new Y(t,e);return i.renderOrder=-10,i}function H1(){let t=new Float32Array(2700);for(let i=0;i<900;i++){let n=Math.random()*Math.PI*2,r=Math.random()*.45+.08;t[i*3]=Math.cos(n)*Math.cos(r*Math.PI/2)*380,t[i*3+1]=Math.sin(r*Math.PI/2)*380,t[i*3+2]=Math.sin(n)*Math.cos(r*Math.PI/2)*380}let e=new he;return e.setAttribute("position",new Ae(t,3)),new Vr(e,new tr({color:"#ffffff",size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1}))}var ol=class{constructor(t,e,{night:i,sunset:n=!1,weather:r="clear",quality:o,renderer:a}){this.scene=t,this.ctx=e,this.night=i,this.sunset=n=n&&!i,this.weather=r;let l=r==="rain",c=r==="dust";if(this.quality=o,this.group=new ne,t.add(this.group),this.flickers=[],this.t=0,i)this.group.add(F1(i));else{let p=new lo;p.scale.setScalar(450);let y=p.material.uniforms;y.turbidity.value=n?9:c?18:l?20:7,y.rayleigh.value=n?2.8:l?.4:c?.9:1.6,y.mieCoefficient.value=n?.012:c?.03:l?.02:.006,y.mieDirectionalG.value=n?.9:.8,y.sunPosition.value.copy(n?Tp:wp),p.material.depthWrite=!1,p.renderOrder=-10,this.group.add(p)}a&&(t.environment=O1(a),t.environmentIntensity=i?l?.1:.06:n?.14:l?.3:.32);let h=i?c?"#2a2018":l?"#10141c":"#0a0f22":c?"#c49a5c":l?"#727a84":n?"#e09a68":"#c8d4d8",u=c?i?10:14:l?i?22:28:i?30:60,f=c?i?55:72:l?i?85:110:i?110:170;t.fog=new ma(h,u,f),t.background=new Pt(i?"#050a1e":h);let d=o==="high";if(i){this.group.add(H1());let p=new Mi(new fi({map:Hn(),color:"#dfe8ff",fog:!1,depthWrite:!1}));p.position.set(-120,160,-260),p.scale.setScalar(40),this.group.add(p);let y=new Y(new pi(6,24),new $t({color:"#f4f6ff",fog:!1}));y.position.copy(p.position),y.lookAt(0,0,0),this.group.add(y),this.group.add(new cs("#3a4a80","#120e10",.7));let v=new Un("#8a9ad8",.55);v.position.set(8,30,30),this.group.add(v)}else{let p=n?"#ffb47c":c?"#f0d8a8":l?"#aab4c0":"#dfefff";this.group.add(new cs(p,n?"#4a2c34":l?"#3a3c40":"#7a6a55",n?.6:l?.85:1));let y=new Un(n?"#ff8c3a":c?"#ffd9a0":"#fff0d4",n?3.6:c?1.5:l?.45:2.6);y.position.copy(n?Tp:wp).multiplyScalar(n?40:38),y.castShadow=!0;let v=d?4096:2048;y.shadow.mapSize.set(v,v);let b=y.shadow.camera;b.left=-36,b.right=36,b.top=26,b.bottom=-26,b.near=1,b.far=120,y.shadow.bias=-4e-4,y.shadow.normalBias=.03,this.group.add(y),this.group.add(y.target),this.sun=y}let g=d?3:o==="medium"?1:0,x=Hn(),m=i?1:n?.3:0;for(let p of e.lamps){if(p.bulbMat.emissiveIntensity=3*Math.sqrt(m),!m)continue;let y=new Pt(p.color),v=new rr(y,(p.flood?170:55)*m,p.flood?48:20,p.flood?.8:1.05,.65,1.5);v.position.copy(p.pos);let b=p.pos.clone();b.y=0,p.flood?(b.x*=.55,b.z*=.4):b.z+=(p.face||0)*(p.wall?5:2.5),v.target.position.copy(b),g>0&&!p.flicker&&(v.castShadow=!0,v.shadow.mapSize.set(d?1024:512,d?1024:512),v.shadow.bias=-6e-4,v.shadow.normalBias=.04,g--),this.group.add(v,v.target);let R=new Mi(new fi({map:x,color:y,blending:ki,depthWrite:!1,transparent:!0,opacity:.9}));R.position.copy(p.pos),R.scale.setScalar((p.flood?3.2:2)*(i?1:.6)),this.group.add(R);let T=p.pos.y,A=p.flood?6:T*.62,P=new mi(.12,A,T,24,1,!0);P.translate(0,-T/2,0);let B=new $t({map:np(),color:y,transparent:!0,opacity:i?l||c?.24:.16:.04,blending:ki,depthWrite:!1,side:Te,fog:!1}),M=new Y(P,B);M.position.copy(p.pos),this.group.add(M);let E={L:p,spot:v,sprite:R,cone:M,base:v.intensity,coneBase:B.opacity,level:1,target:1,timer:0};p.flicker&&this.flickers.push(E)}this.lampK=m;for(let p of e.pointLights){if(!i)continue;let y=new or(p.color,p.intensity*1.2,p.dist,1.6);y.position.copy(p.pos),this.group.add(y);let v=new Mi(new fi({map:x,color:p.color,blending:ki,depthWrite:!1,transparent:!0,opacity:.7}));v.position.copy(p.pos),v.scale.setScalar(1.4),this.group.add(v)}for(let p of e.litMats)p.m.emissiveIntensity=i?p.lit?p.k*et(.7,1.2):0:n&&p.lit&&Math.random()<.5?p.k*.5:p.dayK||0,p.emissiveMap&&i&&(p.m.emissiveMap=p.m.map,p.m.emissiveIntensity=p.k);for(let p of e.nightOnly)p.visible=i;for(let p of e.dayOnly)p.visible=!i;if(e.extras.fairy)for(let p of e.extras.fairy)p.visible=!0;if(l&&this.makeRain(o),c&&this.makeDust(o),l&&e.groundMesh){let p=e.groundMesh.material;p.roughness=.28,p.color.multiplyScalar(.6),p.envMapIntensity=1.6}}makeRain(t){let e=t==="high"?4200:t==="medium"?2400:1200,i=new Float32Array(e*6);this.rainData={n:e,pos:i,speed:new Float32Array(e)};for(let o=0;o<e;o++)this.resetDrop(o,!0);let n=new he;n.setAttribute("position",new Ae(i,3));let r=new Dn({color:this.night?"#9fb2d8":"#eef3f8",transparent:!0,opacity:this.night?.45:.55,depthWrite:!1});this.rain=new Ma(n,r),this.rain.frustumCulled=!1,this.group.add(this.rain)}resetDrop(t,e){let{pos:i,speed:n}=this.rainData,r=et(-34,34),o=et(-24,24),a=e?et(0,22):et(18,24),l=t*6;i[l]=r,i[l+1]=a,i[l+2]=o,i[l+3]=r+.08,i[l+4]=a+.55,i[l+5]=o,n[t]=et(16,22)}makeDust(t){let e=t==="high"?2600:t==="medium"?1500:700,i=new Float32Array(e*3);for(let o=0;o<e;o++)i[o*3]=et(-36,36),i[o*3+1]=et(0,9),i[o*3+2]=et(-26,26);let n=new he;n.setAttribute("position",new Ae(i,3));let r=new tr({map:Hn(),color:this.night?"#8a7050":"#d8b880",size:.35,transparent:!0,opacity:.55,depthWrite:!1});this.dust=new Vr(n,r),this.dust.frustumCulled=!1,this.group.add(this.dust)}update(t){this.t+=t;for(let e of this.flickers){if(e.timer-=t,e.timer<=0){let n=Math.random();n<.12?(e.target=.02,e.timer=et(.05,.35)):n<.45?(e.target=et(.15,.6),e.timer=et(.03,.12)):(e.target=et(.75,1),e.timer=et(.1,.9))}e.level+=(e.target-e.level)*Math.min(1,t*40);let i=e.level*(.92+.08*Math.sin(this.t*90));e.spot.intensity=e.base*i,e.sprite.material.opacity=.9*i,e.cone.material.opacity=e.coneBase*i,e.L.bulbMat.emissiveIntensity=3*Math.sqrt(this.lampK)*i}if(this.ctx.extras.fairy){let e=this.ctx.extras.fairy;for(let i=0;i<e.length;i++)e[i].visible=(Math.floor(this.t*2.5)+i)%3!==0||!this.night}for(let e of this.ctx.flags)e.children.forEach((i,n)=>{i.rotation.y=Math.sin(this.t*3+i.position.x*2)*.25});for(let e of this.ctx.clothes)e.rotation.x=Math.sin(this.t*1.7+e.position.x)*.12;if(this.ctx.extras.sea&&(this.ctx.extras.sea.offset.x=this.t*.01,this.ctx.extras.sea.offset.y=Math.sin(this.t*.4)*.02),this.ctx.extras.foam){let e=this.ctx.extras.foam;e.position.z=-this.ctx.bounds.maxZ-1.6+Math.sin(this.t*.8)*.5,e.material.opacity=.35+.3*Math.max(0,Math.sin(this.t*.8))}if(this.rain){let{n:e,pos:i,speed:n}=this.rainData;for(let r=0;r<e;r++){let o=r*6,a=n[r]*t;i[o+1]-=a,i[o+4]-=a,i[o]-=a*.05,i[o+3]-=a*.05,i[o+1]<0&&this.resetDrop(r,!1)}this.rain.geometry.attributes.position.needsUpdate=!0}if(this.dust){let e=this.dust.geometry.attributes.position.array;for(let i=0;i<e.length;i+=3)e[i]+=t*(5+Math.sin(i+this.t)*1.5),e[i+1]+=t*Math.sin(this.t*1.3+i)*.6,e[i+2]+=t*Math.cos(this.t*.7+i)*.8,e[i]>36&&(e[i]=-36,e[i+1]=et(0,9)),e[i+1]<0&&(e[i+1]=9),e[i+1]>9&&(e[i+1]=0);this.dust.geometry.attributes.position.needsUpdate=!0}}dispose(){this.scene.remove(this.group)}};function V1(){return Fe(512,256,(s,t,e)=>{s.fillStyle="#f4f1e8",s.fillRect(0,0,t,e);let i=[];i.push([0,90],[0,-90]);for(let n=0;n<5;n++)i.push([n*72,27]),i.push([n*72+36,-27]);s.fillStyle="#1b1b1b";for(let[n,r]of i)for(let o of[-360,0,360]){let a=(n+o+180)/360*t,l=(90-r)/180*e,c=26/Math.max(.35,Math.cos(r*Math.PI/180));s.beginPath();for(let h=0;h<5;h++){let u=h/5*Math.PI*2-Math.PI/2;s.lineTo(a+Math.cos(u)*c,l+Math.sin(u)*24)}s.closePath(),s.fill()}s.strokeStyle="rgba(80,70,60,0.35)",s.lineWidth=2;for(let n=0;n<40;n++){s.beginPath();let r=Math.random()*t,o=Math.random()*e;s.moveTo(r,o),s.lineTo(r+Math.random()*30-15,o+Math.random()*10-5),s.stroke()}})}var Xn=new _,Eu=new _,al=class{constructor(t){this.r=Pe.ballRadius,this.mesh=new Y(new Xt(this.r,24,16),new Rt({map:V1(),roughness:.55})),this.mesh.castShadow=!0,t.add(this.mesh),this.blob=new Y(new pi(this.r*1.3,16),new $t({color:"#000",transparent:!0,opacity:.35,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=1,t.add(this.blob),this.glow=new Mi(new fi({map:Hn(),color:"#fff6e0",transparent:!0,opacity:0,depthWrite:!1,blending:ki})),this.glow.scale.setScalar(.9),t.add(this.glow),this.pos=new _(0,this.r,0),this.vel=new _,this.lastTouch=null,this.lastKickTeam=-1,this.frozen=!1,this.friction=.85,this.onBounce=null,this.onHit=null,this.spinAxis=new _(1,0,0)}place(t,e,i=this.r){this.pos.set(t,i,e),this.vel.set(0,0,0)}kick(t,e,i,n){this.vel.set(t,e,i),this.curl=0,this.curlT=0,n&&(this.lastTouch=n,this.lastKickTeam=n.team)}speed(){return this.vel.length()}groundSpeed(){return Math.hypot(this.vel.x,this.vel.z)}update(t,e,i){if(this.frozen){this.syncMesh(t,0);return}if(i){this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z));return}let n=this.vel.length(),r=Math.min(8,Math.max(1,Math.ceil(n*t/.08))),o=t/r;for(let a=0;a<r;a++)this.step(o,e);this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z))}step(t,e){let i=this.vel,n=this.pos,r=this.r,o=n.y>r+.02;if(i.y-=9.81*t,this.curlT>0){this.curlT-=t;let l=Math.hypot(i.x,i.z);l>2&&(i.x+=-i.z/l*this.curl*t,i.z+=i.x/l*this.curl*t)}let a=o?.12:0;if(i.multiplyScalar(1-a*t),n.addScaledVector(i,t),n.y<r)if(n.y=r,i.y<-.6){let l=-i.y;i.y=l*.56,i.x*=.88,i.z*=.88,this.onBounce&&this.onBounce(l)}else i.y=0;if(n.y<=r+.01){let l=this.friction*t,c=Math.hypot(i.x,i.z);if(c>0){let h=Math.max(0,c-(l*1.4+c*l*.35));i.x*=h/c,i.z*=h/c}}for(let l of e){if(l.tag==="void")continue;Eu.set(Math.max(l.min.x,Math.min(n.x,l.max.x)),Math.max(l.min.y,Math.min(n.y,l.max.y)),Math.max(l.min.z,Math.min(n.z,l.max.z))),Xn.subVectors(n,Eu);let c=Xn.length();if(c>=r)continue;if(c<1e-5){let u=n.x-l.min.x,f=l.max.x-n.x,d=n.z-l.min.z,g=l.max.z-n.z,x=l.max.y-n.y,m=Math.min(u,f,d,g,x);Xn.set(m===u?-1:m===f?1:0,m===x?1:0,m===d?-1:m===g?1:0),c=0,n.addScaledVector(Xn,m+r)}else Xn.divideScalar(c),n.copy(Eu).addScaledVector(Xn,r);let h=i.dot(Xn);if(h<0){let u=l.tag==="net"?.08:l.metal?.72:l.tag==="sheep"?.4:.58;i.addScaledVector(Xn,-(1+u)*h),l.tag==="net"?i.multiplyScalar(.3):i.multiplyScalar(.94),this.onHit&&this.onHit(l,-h,n)}}}syncMesh(t,e){this.mesh.position.copy(this.pos),e>.05&&(this.spinAxis.set(this.vel.z,0,-this.vel.x).normalize(),this.mesh.rotateOnWorldAxis(this.spinAxis,e*t/this.r)),this.blob.position.set(this.pos.x,.012,this.pos.z);let i=Math.max(0,this.pos.y-this.r),n=Math.max(.25,1-i*.25);this.blob.scale.setScalar(n),this.blob.material.opacity=.35*n,this.glow.position.copy(this.pos)}setNight(t){this.glow.material.opacity=t?.22:0}dispose(t){t.remove(this.mesh,this.blob,this.glow)}};var bi=new _,Ap,ll;function G1(){return Ap||(Ap=new pi(.55,24))}function W1(){if(ll)return ll;let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.5,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new fn(s);return ll=new $t({map:i,transparent:!0,depthWrite:!1}),ll}var XM=new _,cl=class{constructor(t,e,i,n,r){this.match=t,this.team=e,this.idx=i,this.name=r.name,this.number=r.number,this.isGK=!!r.isGK,this.char=dr(n),this.anim=new On(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new _,this.vel=new _,this.facing=e===0?Math.PI/2:-Math.PI/2,this.want=new it,this.wantSprint=!1,this.lookAt=null,this.state="play",this.stateT=0,this.stateDur=0,this.stamina=1,this.ctrl=null,this.ai={t:Math.random()*.3,plan:null,target:new _,dirty:0},this.mods={speed:1,shot:1,control:1,stamina:1},this.cool={kick:0,steal:0,slide:0,touch:0,pull:0,call:0},this.pending=null,this.pullTarget=null,this.pulledBy=null,this.pullT=0,this.walkTo=null,this.onArrive=null,this.home=new _,this.radius=Pe.playerRadius*this.char.scale,this.stats={goals:0,fouls:0,nutmegs:0};let o=new $t({color:t.teamColor(e),transparent:!0,opacity:.5,depthWrite:!1});this.ring=new Y(new ir(.36,.41,32),o),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=2,t.scene.add(this.ring),this.contact=new Y(G1(),W1()),this.contact.rotation.x=-Math.PI/2,this.contact.renderOrder=1,t.scene.add(this.contact),this.marker=null,this.anim.onStep=a=>t.onFootstep(this,a)}get dir(){return this.team===0?1:-1}get hasBall(){return this.match.owner===this}get active(){return!["out","hidden","leaving","returning","fetch","fetched"].includes(this.state)}get canAct(){return this.state==="play"&&!this.pending}get down(){return this.state==="fallen"||this.state==="slide"||this.state==="nutmegged"||this.state==="dive"}fwd(t=bi){return t.set(Math.sin(this.facing),0,Math.cos(this.facing))}headPos(t=new _){return t.set(this.pos.x,(this.state==="fallen"?.8:2.2)*this.char.scale,this.pos.z)}setMarker(t){if(this.marker&&(this.root.remove(this.marker),this.marker=null),!t)return;let e=new ne,i=new Y(new Ai(.13,.26,4),new $t({color:t,depthTest:!1}));i.rotation.x=Math.PI,i.renderOrder=10,e.add(i),e.position.y=2.45,this.marker=e,this.root.add(e),this.ring.material.opacity=1}setState(t,e=0){this.state=t,this.stateT=0,this.stateDur=e}place(t,e,i){this.pos.set(t,0,e),this.vel.set(0,0,0),i!==void 0&&(this.facing=i),this.sync()}show(t){this.root.visible=t,this.ring.visible=t,this.contact&&(this.contact.visible=t)}update(t){for(let d in this.cool)this.cool[d]>0&&(this.cool[d]-=t);if(this.stateT+=t,this.pending&&(this.pending.t-=t,this.pending.t<=0)){let d=this.pending.fn;this.pending=null,d()}let e=this.state;if(e==="out"||e==="hidden"||e==="fetched")return;let i=1,n=!0;switch(e){case"kick":i=.3,this.stateT>=this.stateDur&&this.setState("play");break;case"slide":{n=!1;let d=Math.max(0,1-this.stateT/.75);this.fwd(bi),this.vel.set(bi.x*this.slideSpeed*d,0,bi.z*this.slideSpeed*d),this.stateT>=Pe.slideTime+.2&&(this.setState("play"),this.cool.slide=.6);break}case"fallen":case"nutmegged":case"dive":n=!1,this.vel.multiplyScalar(Math.max(0,1-t*(e==="dive"?2.2:5))),this.stateT>=this.stateDur&&this.setState("play");break;case"gkhold":n=!1,this.vel.set(0,0,0);break;case"dazed":i=.35,this.stateT>=this.stateDur&&(this.setState("play"),this.anim.stop("dazed"));break;case"leaving":case"returning":case"fetch":n=!1,this.walkStep(t,e==="fetch"?4.2:2.4),this.walkTo&&this.stateT>9&&(this.pos.copy(this.walkTo),this.walkStep(t,1));break;default:break}n&&this.locomote(t,i),this.pos.addScaledVector(this.vel,t);let r=Math.hypot(this.vel.x,this.vel.z);e==="slide"||e==="fallen"||e==="dive"||(r>.45&&e!=="gkhold"?this.facing=us(this.facing,Math.atan2(this.vel.x,this.vel.z),Pe.turnRate,t):this.lookAt&&(this.facing=us(this.facing,Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z),6,t)));let o=this.anim,a=this.prevSp??r,l=this.prevFacing??this.facing,c=this.facing-l;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;o.accel+=((r-a)/Math.max(t,.001)-o.accel)*Math.min(1,t*6),o.turn+=(c/Math.max(t,.001)-o.turn)*Math.min(1,t*8),this.prevSp=r,this.prevFacing=this.facing;let h=0,u=0,f=this.lookAt||this.match.ball.pos;if(f&&e!=="fallen"&&e!=="slide"){let d=Math.atan2(f.x-this.pos.x,f.z-this.pos.z)-this.facing;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;Math.abs(d)<2.2&&(h=d*.7);let g=Math.hypot(f.x-this.pos.x,f.z-this.pos.z);u=g<3?(3-g)*.12:0}o.look+=(h-o.look)*Math.min(1,t*5),o.lookX+=(u-o.lookX)*Math.min(1,t*5),o.update(t,e==="slide"||e==="fallen"||e==="dive"?0:r),this.sync()}locomote(t,e){let i=this.want,n=Math.min(1,i.length()),r=this.wantSprint&&this.stamina>.05&&n>.3,o=(r?Pe.sprint:Pe.jog)*this.mods.speed*e;this.hasBall&&(o*=Pe.withBallMul),this.pulledBy&&(o*=.42),this.pullTarget&&(o*=.85),this.state==="celebrate"&&(o*=.9),r?this.stamina=Math.max(0,this.stamina-Pe.staminaDrain*t/this.mods.stamina):this.stamina=Math.min(1,this.stamina+Pe.staminaRegen*t*this.mods.stamina*(n<.2?1.6:1));let a=n>.01?i.x/Math.max(1e-6,i.length())*n*o:0,l=n>.01?i.y/Math.max(1e-6,i.length())*n*o:0,c=a-this.vel.x,h=l-this.vel.z,u=Math.hypot(c,h),d=(a*a+l*l>this.vel.x*this.vel.x+this.vel.z*this.vel.z?Pe.accel:Pe.decel)*t;u<=d?(this.vel.x=a,this.vel.z=l):(this.vel.x+=c/u*d,this.vel.z+=h/u*d)}walkStep(t,e){if(!this.walkTo)return;let i=this.walkTo.x-this.pos.x,n=this.walkTo.z-this.pos.z,r=Math.hypot(i,n);if(r<.25){this.vel.set(0,0,0);let o=this.onArrive;this.onArrive=null,this.walkTo=null,o&&o();return}this.vel.set(i/r*e,0,n/r*e)}sync(){if(this.root.position.copy(this.pos),this.root.rotation.y=this.facing,this.ring.position.set(this.pos.x,.02,this.pos.z),this.contact){this.contact.position.set(this.pos.x,.015,this.pos.z);let t=this.state==="fallen"||this.state==="slide"||this.state==="dive";this.contact.scale.set(t?1.6:1,t?1.6:1,1),this.contact.visible=this.root.visible}}pass(t,e=0,i=0,n=.4,r=!1){if(!this.hasBall||!this.canAct)return!1;let o=this.match,a,l;if(t){let c=o.ball.pos,h=0;for(let d=0;d<2;d++){let g=t.pos.x+t.vel.x*h*.8,x=t.pos.z+t.vel.z*h*.8,m=Math.hypot(g-c.x,x-c.z);h=o.passTime(m,o.passSpeedFor(m,6.5))}let f=t.vel.x*t.dir>2.5?1.2:.8;a=t.pos.x+t.vel.x*h*f,l=t.pos.z+t.vel.z*h*f}else{let c=Math.hypot(e,i)||1,h=3+Bt(n,0,1)*19;a=this.pos.x+e/c*h,l=this.pos.z+i/c*h}return this.faceTo(bi.set(a,0,l)),this.setState("kick",.32),this.anim.play("pass",{speed:1.3}),this.pending={t:.12,fn:()=>{if(!this.hasBall)return;let c=o.ball.pos,h=a-c.x,u=l-c.z,f=Math.max(.5,Math.hypot(h,u)),d=t?o.passSpeedFor(f,6.5):o.passSpeedFor(f,0),g=.3;if(r){let p=Bt(f/8,.8,1.9);d=f/p*1.03,g=4.9*p}else if(t&&o.lineBlocked(c.x,c.z,a,l,this.team)){let p=Bt(f/11,.5,1.6);d=f/p,g=4.9*p}let x=(this.ctrl?.025:(1-o.aiSkill(this))*.08)*Math.min(1,f/15),m=Math.atan2(h,u)+et(-x,x);o.kickBall(this,Math.sin(m)*d,g,Math.cos(m)*d,{pass:t,kind:"pass"})}},!0}shoot(t,e=0,i=0,n=0){if(!this.hasBall||!this.canAct)return!1;let r=this.match,o=r.goalFor(this.team);return this.faceTo(bi.set(o.x,0,e*o.hw)),this.setState("kick",.5),this.anim.play("kick",{speed:1.15}),this.pending={t:.17,fn:()=>{if(!this.hasBall)return;let a=r.ball.pos,l=this.ctrl?1:this.match.aiSkill(this),c=r.pressureOn(this),h=(1-l*.75)*.9+c*.4+Math.max(0,t-.92)*2.5,u=Bt(e,-1,1)*o.hw*.78+et(-1,1)*h*o.hw*.7,f=o.x+Math.sign(o.x)*.6,d=f-a.x,g=u-a.z,x=Math.max(1,Math.hypot(d,g)),m=(10.5+t*15.5)*this.mods.shot;n&&(m*=.86);let p=x/m,v=(Bt(o.h*(.15+i*.55)+et(-.1,.35)*h+t*.12,.12,o.h*1.6)-a.y+.5*9.81*p*p)/p;if(v=Bt(v,.2,14),n){let R=-(Math.abs(e)>.2?Math.sign(e):n)*Math.sign(d||1)*8,T=.5*R*p*p,A=f- -g/x*T,P=u-d/x*T,B=A-a.x,M=P-a.z,E=Math.hypot(B,M);r.kickBall(this,B/E*m,v,M/E*m,{kind:"shot",power:t,curl:R,curlT:p*1.1});return}r.kickBall(this,d/x*m,v,g/x*m,{kind:"shot",power:t})}},!0}airPlay(t,e=0,i=0){let n=this.match,r=n.ball;if(!this.canAct||n.owner||this.cool.touch>0)return!1;let o=Math.hypot(r.pos.x-this.pos.x,r.pos.z-this.pos.z),a=r.pos.y/this.char.scale,l=a>=1.05&&a<=2.45&&o<.95,c=a>=.3&&a<1.05&&o<1.05&&r.speed()>3;if(!l&&!c)return!1;let h,u,f,d;if(t==="shot"){let R=n.goalFor(this.team);h=R.x+Math.sign(R.x)*.5,f=Bt(i,-1,1)*R.hw*.7+et(-.6,.6),u=l?.35:R.h*.45,d=l?et(10,13):et(17,22)}else{let R=e||i?{x:e,z:i}:{x:Math.sin(this.facing),z:Math.cos(this.facing)},T=n.bestPassTarget(this,R,!1,this.ctrl?n.passCone():.6);if(T)h=T.player.pos.x,f=T.player.pos.z;else{let A=Math.hypot(R.x,R.z)||1;h=this.pos.x+R.x/A*10,f=this.pos.z+R.z/A*10}u=.3,d=l?9:12}this.faceTo(bi.set(h,0,f)),this.anim.play(l?"header":"volley"),this.setState("kick",l?.55:.45);let g=h-r.pos.x,x=f-r.pos.z,p=Math.max(1,Math.hypot(g,x))/d,y=Bt((u-r.pos.y+4.9*p*p)/p,-6,9),v=this.ctrl?.04:(1-n.aiSkill(this))*.12,b=Math.atan2(g,x)+et(-v,v);return n.kickBall(this,Math.sin(b)*d,y,Math.cos(b)*d,{kind:t==="shot"?"shot":"pass",power:.7,air:l?"header":"volley"}),!0}slide(){if(!this.canAct||this.hasBall||this.cool.slide>0||this.isGK&&!this.ctrl&&re(.5))return!1;this.releasePull(),this.setState("slide",Pe.slideTime);let t=Math.hypot(this.vel.x,this.vel.z);return this.slideSpeed=Math.max(t*1.15,Pe.slideSpeed),this.slideHit=new Set,this.slideBallFirst=!1,this.slideTouchedBall=!1,this.anim.play("slide"),this.match.onSlide(this),!0}pull(t){return!this.canAct||this.hasBall||!t||t.pulledBy||this.cool.pull>0||t.state!=="play"&&t.state!=="kick"?!1:(this.pullTarget=t,t.pulledBy=this,this.pullT=0,this.anim.play("pull"),t.anim.play("pulled"),this.match.onPullStart(this,t),!0)}releasePull(t=!1){let e=this.pullTarget;e&&(this.pullTarget=null,e.pulledBy=null,this.anim.stop("pull"),e.anim.stop("pulled"),this.cool.pull=1.2,this.match.onPullEnd(this,e,t))}nutmeg(){if(!this.hasBall||!this.canAct)return!1;let t=this.match,e=t.nutmegVictim(this);return e?(this.faceTo(e.pos),this.setState("kick",.25),this.anim.play("pass",{speed:1.6}),this.pending={t:.09,fn:()=>{if(!this.hasBall)return;let i=t.ball.pos,n=e.pos.x-i.x,r=e.pos.z-i.z,o=Math.max(.3,Math.hypot(n,r)),a=e.pos.x+n/o*2.2,l=e.pos.z+r/o*2.2,c=a-i.x,h=l-i.z,u=Math.hypot(c,h),f=7.5;t.kickBall(this,c/u*f,.2,h/u*f,{kind:"nutmeg",victim:e})}},!0):(this.setState("kick",.3),this.anim.play("pass",{speed:1.5}),this.pending={t:.1,fn:()=>{this.hasBall&&(this.fwd(bi),t.kickBall(this,bi.x*6.5,3.4,bi.z*6.5,{kind:"chip"}))}},!0)}fall(t=Pe.fallTime){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.hasBall&&this.match.loseBall(this,3),this.pending=null,this.setState("fallen",t),this.anim.play("fall",{speed:Pe.fallTime/t})}gkCatch(){this.setState("gkhold"),this.anim.play("holdBall")}gkThrow(t){if(this.state!=="gkhold")return;let e=this.match;this.faceTo(t?t.pos:bi.set(this.pos.x+this.dir*8,0,this.pos.z)),this.anim.stop("holdBall"),this.anim.play("throw"),this.setState("kick",.6),this.pending={t:.36,fn:()=>{if(!this.hasBall)return;let i=e.ball.pos,n=t?t.pos.x:this.pos.x+this.dir*9,r=t?t.pos.z:this.pos.z,o=n-i.x,a=r-i.z,l=Math.max(1,Math.hypot(o,a)),c=Bt(5+l*.8,7,14);e.kickBall(this,o/l*c,2.6,a/l*c,{pass:t,kind:"throw"})}}}dive(t,e=5.5){this.setState("dive",1.4),this.anim.play(t>0?"diveR":"diveL"),this.fwd(bi),this.vel.set(-bi.z*t*e,0,bi.x*t*e)}faceTo(t){this.facing=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)}celebrate(t){this.setState("celebrate"),this.anim.play(t)}stopCelebrate(){this.anim.stop("airplane"),this.anim.stop("jump"),this.anim.stop("sad"),this.anim.stop("cheer"),this.state==="celebrate"&&this.setState("play")}resetForKickoff(){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.pending=null,this.anim.stop(),this.active&&this.setState("play"),this.stamina=Math.max(this.stamina,.6),this.want.set(0,0)}dispose(){this.match.scene.remove(this.root),this.match.scene.remove(this.ring),this.match.scene.remove(this.contact)}};var gr=new _,en=new _;function gs(s,t,e,i=2,n=6){let r=t-s.pos.x,o=e-s.pos.z,a=Math.hypot(r,o);if(a<.15)return s.want.set(0,0),s.wantSprint=!1,a;let l=Math.min(1,a/i);return s.want.set(r/a*l,o/a*l),s.wantSprint=a>n&&s.stamina>.25,a}function X1(s,t,e,i){let n=s.ai,r=t.goalFor(s.team),o=r.x,a=t.def,l=o-s.pos.x,c=0-s.pos.z,h=Math.hypot(l,c);if(n.t-=e,n.t<=0){n.t=et(.12,.28)+i.react*.5;let u=t.pressureDist(s),f=Math.min(13,a.halfL*.72);if(h<f&&s.cool.kick<=0){let x=!t.lineBlocked(s.pos.x,s.pos.z,o,0,s.team,.6),p=h<f*.45?.85:x?.55:.18;if(re(p*(.6+i.skill*.5))){let y=t.goalkeeper(1-s.team),v=et(.35,.9)*(re(.5)?1:-1);y&&Math.abs(y.pos.z)>.2&&(v=-Math.sign(y.pos.z)*et(.45,.95));let b=Bt(h/f+et(-.1,.15),.5,.93);if(s.shoot(b,v,r.type==="frame"||r.type==="chalk"?et(0,.8):et(0,.25)))return}}if(h<11&&Math.abs(s.pos.z)>a.halfW*.45&&re(.35+i.skill*.2)){let x=t.teams[s.team].find(m=>m!==s&&m.active&&!m.isGK&&Math.abs(m.pos.z)<2.5&&Math.abs(o-m.pos.x)<7);if(x&&s.pass(x,0,0,.5,!0))return}let d=t.bestPassTarget(s,null);if(d&&(u<1.7&&d.score>-.4&&re(.55+i.skill*.3)||d.score>.55&&re(.25))&&s.pass(d.player)||u<2&&re(.1+i.skill*.12)&&t.nutmegVictim(s)&&s.nutmeg())return;en.set(l,0,c).normalize(),gr.set(0,0,0);for(let x of t.teams[1-s.team]){if(!x.active||x.down)continue;let m=s.pos.x-x.pos.x,p=s.pos.z-x.pos.z,y=Math.hypot(m,p);if(y>4.5||y<.01||-(m*en.x+p*en.z)/y<-.2)continue;let b=(4.5-y)/4.5,R=Math.sign(m*en.z-p*en.x)||(re(.5)?1:-1);gr.x+=-en.z*R*b*1.6+m/y*b*.6,gr.z+=en.x*R*b*1.6+p/y*b*.6}let g=t.ctx.bounds;s.pos.z<g.minZ+1.5&&(gr.z+=1),s.pos.z>g.maxZ-1.5&&(gr.z-=1),en.add(gr).normalize(),n.dribble=n.dribble||new it,n.dribble.set(en.x,en.z),n.sprint=t.pressureDist(s)>2.5&&s.stamina>.4&&re(.6)}n.dribble&&(s.want.copy(n.dribble),s.wantSprint=n.sprint)}function q1(s,t,e,i){let n=t.ball,r=t.owner;if(r&&r.team!==s.team){let g=t.ownGoal(s.team).x-r.pos.x,x=-r.pos.z,m=Math.hypot(g,x)||1,p=Math.hypot(r.pos.x-s.pos.x,r.pos.z-s.pos.z),y=p>2?1.2:.35;if(gs(s,r.pos.x+g/m*y+r.vel.x*.2,r.pos.z+x/m*y+r.vel.z*.2,1,3),s.wantSprint=p>1.5&&s.stamina>.2,s.ai.dirtyT=(s.ai.dirtyT||0)-e,s.ai.dirtyT<=0&&s.canAct){s.ai.dirtyT=et(.35,.7);let v=(r.pos.x-s.pos.x)*Math.sin(r.facing)+(r.pos.z-s.pos.z)*Math.cos(r.facing)>0;if(p<2.6&&p>.9&&re(i.dirty*.45)){let b=Math.sin(s.facing),R=Math.cos(s.facing);if(((n.pos.x-s.pos.x)*b+(n.pos.z-s.pos.z)*R)/Math.max(.1,Math.hypot(n.pos.x-s.pos.x,n.pos.z-s.pos.z))>.75){s.faceTo(n.pos),s.slide();return}}p<1.15&&v&&re(i.dirty*.5)&&s.pull(r)&&(s.ai.pullFor=et(.6,1.3))}return}let o=n.pos.x,a=n.pos.z,l=Math.hypot(o-s.pos.x,a-s.pos.z),c=Bt(l/6.5,0,1.4),h=o+n.vel.x*c*.7,u=a+n.vel.z*c*.7,f=t.ctx.bounds;h=Bt(h,f.minX+.3,f.maxX-.3),u=Bt(u,f.minZ+.3,f.maxZ-.3),gs(s,h,u,.6,2.5)}function Y1(s,t,e,i,n,r){let o=t.def,a=t.ball.pos,l=t.ctx.bounds,c=s.dir,h=n<=1?[0]:n===2?[-.5,.5]:[-.62,0,.62],u=h[i%h.length]*o.halfW,f,d;if(r)f=a.x+c*(4+i%2*3.5),d=u+Math.sin(t.time*.6+s.idx)*1.2,f=Bt(f,-o.halfL+2,o.halfL-2.5);else{let g=t.ownGoal(s.team),x=.42+i%2*.18;f=g.x+(a.x-g.x)*x,d=a.z*.45+u*.6;let m=null,p=4.5;for(let y of t.teams[1-s.team]){if(!y.active||y===t.owner)continue;let v=Math.hypot(y.pos.x-f,y.pos.z-d);v<p&&(p=v,m=y)}if(m){let y=g.x-m.pos.x,v=-m.pos.z,b=Math.hypot(y,v)||1;f=m.pos.x+y/b*1.4,d=m.pos.z+v/b*1.4}}f=Bt(f,l.minX+.6,l.maxX-.6),d=Bt(d,l.minZ+.6,l.maxZ-.6),gs(s,f,d,2.2,7)}function $1(s,t,e,i){let n=t.ownGoal(s.team),r=t.ball,o=s.dir,a=n.x+o*(n.type==="chalk"?1.1:.9);if(s.lookAt=r.pos,s.state==="gkhold"){if(s.ai.holdT=(s.ai.holdT||0)+e,s.ai.holdT>.9){s.ai.holdT=0;let d=t.bestPassTarget(s,null,!0);s.gkThrow(d?d.player:null)}return}if(!s.canAct)return;let l=r.vel.x;if(!t.owner&&l*o<-3.5){let d=(a-r.pos.x)/l;if(d>0&&d<1.1){let g=r.pos.z+r.vel.z*d,x=r.pos.y+r.vel.y*d-4.9*d*d,m=g-s.pos.z;if(s.ai.seen=(s.ai.seen||0)+e,s.ai.seen>i.react*.6&&Math.abs(g)<n.hw+.6&&x<n.h+.4){if(Math.abs(m)>.75&&d<.55){let p=m*Math.sin(s.facing)>0?1:-1;s.dive(p,Bt(Math.abs(m)/Math.max(.25,d)*.8,3,7.5)),s.ai.seen=0;return}gs(s,a,Bt(g,-n.hw,n.hw),.4,1),s.wantSprint=!0;return}}}else s.ai.seen=0;let c=Math.hypot(r.pos.x-n.x,r.pos.z);if(!t.owner&&c<5.5&&t.nearestTo(r.pos,s.team)===s&&r.speed()<9){gs(s,r.pos.x,r.pos.z,.5,2);return}let u=t.owner&&t.owner.team!==s.team&&c<6?1.6:0,f=Bt(r.pos.z*.5,-n.hw*.85,n.hw*.85);gs(s,a+o*u,f,.8,3)}function Su(s,t,e){if(!s.active)return;let i=t.aiLevel(s.team);if(s.lookAt=t.ball.pos,s.pullTarget){s.ai.pullFor=(s.ai.pullFor||1)-e;let o=s.pullTarget;gs(s,o.pos.x-Math.sin(o.facing)*.6,o.pos.z-Math.cos(o.facing)*.6,.5,1),s.ai.pullFor<=0&&s.releasePull(re(.4));return}if(s.state==="celebrate")return;if(s.isGK){$1(s,t,e,i);return}if(!s.canAct&&s.state!=="kick"){s.want.set(0,0);return}if(s.hasBall){X1(s,t,e,i);return}let n=t.roles[s.team];if(n.chaser===s){q1(s,t,e,i);return}if(t.pendingPass&&t.pendingPass.target===s&&!t.owner){t.receiveSteer(s);return}let r=t.owner?t.owner.team===s.team:t.ball.lastKickTeam===s.team&&t.ball.groundSpeed()>3;Y1(s,t,e,n.slots.get(s)??0,n.nSlots,r)}var co=["#26262b","#3b4a6b","#4a4038","#2f3a4a","#555046"],wu=["short","curly","buzz","short","cap","short","curly"];function Rp(s,t,e,{kits:i=!1,shoes:n=!1,isGK:r=!1}={}){let o=Le(e*97+t*13+5),a=s.colors[t%s.colors.length],l=o.pick(ro),c=o.pick(ps),h=[1,7,10,9,4,11,8,5,3,6][t%10],u=!n&&o.chance(.35);if(i)return{skin:l,hair:c,hairStyle:o.pick(wu),top:{type:"jersey",color:r?"#2f2f33":s.colors[0],number:h,numColor:s.accent},bottom:{type:"shorts",color:r?"#2f2f33":s.accent==="#ffffff"?"#f2f2f2":"#222"},socks:s.colors[0],shoes:"#1a1a1a",scale:o.range(.92,1),build:o.range(.95,1.08),capColor:s.colors[0]};let f=r?"tracksuit":o.pick(["tracksuit","tshirt","tank","jersey","tshirt","shirt"]),d,g;switch(f){case"tracksuit":d={type:"tracksuit",color:a,color2:"#ffffff"},g={type:"pants",color:o.chance(.6)?a:"#26262b"};break;case"tank":d={type:"tank",color:a},g={type:o.chance(.5)?"shorts":"pants",color:o.pick(co)};break;case"jersey":d={type:"jersey",color:a,number:h,numColor:s.accent},g={type:"shorts",color:o.chance(.5)?"#f2f2f2":"#222"};break;case"shirt":d={type:"shirt",color:a,color2:"#ffffff"},g={type:"pants",color:o.pick(co)};break;default:d={type:"tshirt",color:a,number:o.chance(.4)?h:null,numColor:s.accent},g={type:o.chance(.4)?"shorts":"pants",color:o.pick(co)}}return r&&(d={type:"tracksuit",color:"#2f2f33",color2:a},g={type:"pants",color:"#2f2f33"}),{skin:l,hair:c,hairStyle:o.pick(wu),capColor:o.pick([a,"#222","#eee"]),top:d,bottom:g,slippers:u,shoes:u?o.pick(["#2e8b57","#3a6fd8","#e05a30","#222"]):o.pick(["#e8e4dc","#e8e4dc","#222","#c8c0b0"]),socks:o.chance(.5)?"#f2f2f2":null,scale:o.range(.9,1),build:o.range(.94,1.1)}}function xr(s,t){let e=Le(t*31+3),i=e.pick(ro);switch(s){case"woman":return{skin:i,hairStyle:"scarf",scarfColor:e.pick(["#3b2a4a","#1c1c24","#6a2a3a","#2a4a5a","#a07a5a"]),top:{type:"dress",color:e.pick(["#2e2e3a","#4a1f3a","#3a4a2a","#5a4a3a","#222"])},bottom:{type:"pants",color:"#222"},shoes:"#1a1a1a",scale:e.range(.92,.98)};case"mom":return{skin:i,hairStyle:"scarf",scarfColor:"#1c1c24",top:{type:"dress",color:"#4a1f3a"},bottom:{type:"pants",color:"#222"},shoes:"#222",scale:.96,build:1.15};case"old":return{skin:i,hair:"#9a9a9a",hairStyle:e.pick(["gray","bald","gray"]),mustache:!0,top:{type:"galabeya",color:e.pick(["#8a7a5e","#d8d4c8","#5a6a7a","#7a6a5a","#c8c0a8"])},bottom:{type:"pants",color:"#555"},shoes:"#4a3a2a",slippers:e.chance(.5),scale:e.range(.94,1),build:e.range(1,1.15)};case"headmaster":return{skin:i,hair:"#555",hairStyle:"bald",mustache:!0,glasses:!0,top:{type:"suit",color:"#4a4a52",color2:"#7a1f1f"},bottom:{type:"pants",color:"#4a4a52"},shoes:"#111",scale:1.02,build:1.2};case"kid":return{skin:i,hair:e.pick(ps),hairStyle:e.pick(wu),top:{type:"tshirt",color:e.pick(["#e8b830","#3aa356","#e05a30","#7a5ad8","#eee","#30a0c0"])},bottom:{type:"shorts",color:e.pick(co)},slippers:e.chance(.6),shoes:"#2e8b57",scale:e.range(.72,.82)};case"baker":return{skin:i,hair:e.pick(ps),hairStyle:"buzz",mustache:!0,top:{type:"tshirt",color:"#e8e4dc"},bottom:{type:"pants",color:"#5a5a5a"},shoes:"#333",scale:.98};case"man":default:return{skin:i,hair:e.pick(ps),hairStyle:e.pick(["short","buzz","gray"]),mustache:e.chance(.6),top:{type:e.pick(["shirt","tshirt","galabeya"]),color:e.pick(["#8a7a5e","#5a7a9a","#d8d4c8","#7a4a3a","#3a5a4a"]),color2:"#eee"},bottom:{type:"pants",color:e.pick(co)},shoes:"#2a2a2a",scale:e.range(.95,1.02),build:e.range(1,1.15)}}}var Tu=100,xs=class{constructor(t,e){this.m=t,this.char=dr(e),this.anim=new On(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new _,this.facing=0,this.radius=.32,this.height=1.75*this.char.scale}headPos(t=new _){return t.set(this.pos.x,this.height+.35,this.pos.z)}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}remove(){this.m.scene.remove(this.root)}},hl=class extends xs{constructor(t,e){let i=te(["man","woman","old","man","woman","kid"]);if(super(t,xr(i,Tu++)),this.kind=i,(i==="old"||this.char.look.top.type==="galabeya")&&(this.anim.ampScale=.55),i==="woman"&&(this.anim.ampScale=.6),this.speed=i==="old"?.95:i==="kid"?1.9:et(1.15,1.45),e.cross){let n=t.ctx.bounds,r=et(n.minX*.7,n.maxX*.7),o=re(.5);this.a=new _(r,0,o?e.z0:e.z1),this.b=new _(r+et(-3,3),0,o?e.z1:e.z0)}else{let n=re(.5);this.a=(n?e.b:e.a).clone(),this.b=(n?e.a:e.b).clone()}if(this.pos.copy(this.a),this.state="walk",this.t=0,this.done=!1,this.carry=null,i==="woman"&&re(.6)){let n=Z(.28,.32,.18,z("#f0f0f0"),0,-.2,0);this.char.J.rHand.add(n)}if(i==="man"&&re(.4)){let n=Z(.25,.32,.03,z("#dcd8cc"),0,-.1,.05);this.char.J.lHand.add(n)}}hitByBall(t){this.state!=="walk"||t<2.5||(this.state="react",this.t=0,this.facing=Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),this.anim.play("point"),this.m.say(this,te(qt.walkerHit),{color:"#fff"}),this.m.audio.play("ouch"))}update(t){this.t+=t;let e=0;if(this.state==="walk"){let i=this.b.x-this.pos.x,n=this.b.z-this.pos.z,r=Math.hypot(i,n);if(r<.3){this.done=!0;return}let o=!1;for(let a of this.m.allPlayers){if(!a.active)continue;let l=a.pos.x-this.pos.x,c=a.pos.z-this.pos.z;if(Math.hypot(l,c)<.75&&l*i+c*n>0){o=!0;break}}e=o?0:this.speed,this.pos.x+=i/r*e*t,this.pos.z+=n/r*e*t,this.facing=us(this.facing,Math.atan2(i,n),6,t)}else this.state==="react"&&this.t>1.8&&(this.state="walk",this.anim.stop("point"));this.anim.update(t,e),this.sync()}},ul=class extends xs{constructor(t,e){super(t,xr("baker",Tu++)),this.anim.mode="ride";let i=t.ctx.bounds;this.dir=re(.5)?1:-1,this.pos.set(this.dir>0?i.minX-3:i.maxX+3,0,e),this.end=this.dir>0?i.maxX+3:i.minX-3,this.facing=this.dir>0?Math.PI/2:-Math.PI/2,this.speed=3.4,this.radius=.55,this.done=!1;let n=new ne,r=z("#1b1b1b",.6);for(let c of[-.55,.55]){let h=new Y(new je(.33,.035,6,20),r);h.rotation.y=Math.PI/2,h.position.set(0,.35,c),h.castShadow=!0,n.add(h)}let o=z("#2a5a8a",.5,{metalness:.5}),a=Z(.05,.05,1,o,0,.62,0,n);a.rotation.x=.1,Z(.05,.5,.05,o,0,.6,-.2,n),Z(.5,.04,.04,o,0,1,.45,n),Z(.18,.05,.25,z("#222"),0,.88,-.25,n),this.bike=n,this.root.add(n),this.char.J.hips.position.z=-.25;let l=new ne;Z(1.1,.06,.55,z("#8b5a2b"),0,0,0,l);for(let c=0;c<10;c++){let h=new Y(new Xt(.11,8,6),z("#d8a860"));h.scale.set(1,.4,1),h.position.set(-.42+c%5*.21,.06,c<5?-.12:.12),l.add(h)}l.position.set(0,.32,0),this.char.J.head.add(l),this.char.J.head.scale.multiplyScalar(1),this.rang=!1}hitByBall(){this.m.say(this,"\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u064A\u0634 \u064A\u0627 \u0627\u0628\u0646\u064A!")}update(t){this.pos.x+=this.dir*this.speed*t,(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),!this.rang&&Math.abs(this.pos.x-this.m.ball.pos.x)<8&&(this.rang=!0,this.m.audio.play("bell")),this.anim.update(t,this.speed),this.sync()}},dl=class{constructor(t,e){this.m=t;let{grp:i,wheels:n,disco:r}=ap();if(this.grp=i,this.wheels=n,this.disco=r,t.scene.add(i),this.dir=re(.5)?1:-1,this.pos=new _(this.dir>0?e.from:e.to,0,e.z),this.end=this.dir>0?e.to:e.from,this.speed=5.2,this.grp.rotation.y=this.dir>0?0:Math.PI,this.done=!1,this.t=0,this.honked=0,this.collider={min:new _,max:new _,tag:"toktok",solid:!0},t.night){let o=new rr("#fff0c0",120,18,.5,.5,1.5);o.position.set(1.45,.95,0),o.target.position.set(8,0,0),i.add(o,o.target)}this.update(0)}update(t){this.t+=t;let e=1;for(let n of this.m.allPlayers){if(!n.active)continue;let r=(n.pos.x-this.pos.x)*this.dir;r>0&&r<3.5&&Math.abs(n.pos.z-this.pos.z)<1.3&&(e=Math.min(e,.25))}this.vx=this.dir*this.speed*e,this.pos.x+=this.vx*t,this.honked-=t,e<1&&this.honked<=0&&(this.m.audio.play("horn"),this.honked=1.4),(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),this.grp.position.copy(this.pos),this.grp.position.y=Math.abs(Math.sin(this.t*14))*.02;for(let n of this.wheels)n.rotation.y+=this.vx*t*3;this.disco.forEach((n,r)=>{n.visible=(Math.floor(this.t*6)+r)%2===0});let i=this.collider;i.min.set(this.pos.x-1.6,0,this.pos.z-.7),i.max.set(this.pos.x+1.6,2.1,this.pos.z+.7)}remove(){this.m.scene.remove(this.grp)}},ho=class extends xs{constructor(t,e){super(t,xr(e.kind,Tu++)),this.pos.copy(e.pos),this.facing=e.rotY,this.anim.play("sit"),this.cheerT=0,this.sync(),this.anim.update(1,0)}cheer(t=3){this.cheerT=t,this.anim.play("sitCheer")}update(t){this.cheerT>0&&(this.cheerT-=t,this.cheerT<=0&&this.anim.play("sit")),this.anim.update(t,0),this.sync()}},fl=class extends xs{constructor(t,e){super(t,xr("mom",7)),this.balc=e,this.pos.copy(e.momPos),this.facing=e.face>0?0:Math.PI,this.root.visible=!1,this.t=0,this.mode=null,this.anim.ampScale=.6,this.sync()}headPos(t=new _){return t.set(this.pos.x,this.pos.y+2.1,this.pos.z)}call(t){this.root.visible=!0,this.mode="call",this.t=0,this.anim.play("wave"),this.m.say(this,qt.momCall(t),{color:"#ffe9f0",dur:3.6}),this.m.audio.play("mom")}catchBall(){this.root.visible=!0,this.mode="ball",this.t=0,this.anim.stop(),this.anim.play("holdBall")}update(t){if(this.t+=t,this.mode==="call"&&this.t>4&&(this.mode=null,this.root.visible=!1,this.anim.stop()),this.mode==="ball"){let e=this.m,i=new _;if(this.char.J.rHand.getWorldPosition(i),this.t<2.6&&e.ball.place(i.x,i.z+(this.balc.face>0?.25:-.25),i.y),this.t>.6&&this.t<.7&&e.say(this,te(qt.balconyBack),{color:"#ffe9f0",dur:2.6}),this.t>2&&!this.thrown&&(this.thrown=!0,this.anim.play("throw")),this.t>2.38&&!this.released){this.released=!0,e.ball.frozen=!1;let n=et(-3,3),r=0,o=n-e.ball.pos.x,a=r-e.ball.pos.z,l=Math.hypot(o,a);e.ball.kick(o/l*6,3,a/l*6,null),e.onBalconyReturn()}this.t>3.6&&(this.mode=null,this.root.visible=!1,this.thrown=this.released=!1,this.anim.stop())}this.root.visible&&(this.anim.update(t,0),this.sync())}},pl=class extends xs{constructor(t,e){super(t,xr("headmaster",3)),this.door=e.clone(),this.pos.copy(e),this.root.visible=!1,this.state="inside",this.t=0,this.wait=et(25,40),this.anim.ampScale=.8;let i=Ot(.015,.015,.8,z("#6a4a2a"),0,-.35,.05);i.rotation.x=.4,this.char.J.rHand.add(i),this.target=new _}get watching(){return this.state==="patrol"||this.state==="out"}update(t){this.t+=t;let e=0,i=(n,r,o)=>{let a=n-this.pos.x,l=r-this.pos.z,c=Math.hypot(a,l);return c<.2?!0:(this.pos.x+=a/c*o*t,this.pos.z+=l/c*o*t,this.facing=us(this.facing,Math.atan2(a,l),6,t),e=o,!1)};switch(this.state){case"inside":this.t>this.wait&&(this.state="out",this.t=0,this.root.visible=!0,this.target.set(this.door.x+et(-8,8),0,this.door.z+et(1,2)),this.m.onHeadmaster(!0));break;case"out":i(this.target.x,this.target.z,1.2)&&(this.state="patrol",this.t=0);break;case"patrol":this.facing=us(this.facing,Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),3,t),this.t>11&&(this.state="back",this.t=0,this.anim.stop("point"));break;case"back":i(this.door.x,this.door.z,1.3)&&(this.state="inside",this.t=0,this.wait=et(30,50),this.root.visible=!1,this.m.onHeadmaster(!1));break}this.root.visible&&(this.anim.update(t,e),this.sync())}scold(t){this.anim.play("point"),this.m.say(this,qt.headmasterCatch(t.name),{color:"#ffeaa0",dur:3}),this.m.audio.play("whistle")}},ml=class{constructor(t,e){this.m=t;let i=new ne,n=z("#d98a3a",.95),r=new Y(new Ui(.11,.26,4,8),n);r.rotation.z=Math.PI/2,r.position.y=.12,i.add(r);let o=new Y(new Xt(.09,10,8),n);o.position.set(.25,.18,0),i.add(o);for(let l of[-1,1]){let c=new Y(new Ai(.03,.06,4),n);c.position.set(.26,.27,l*.045),i.add(c)}let a=new Y(new Ui(.02,.25,3,6),n);a.position.set(-.25,.18,0),a.rotation.z=.9,i.add(a),this.tail=a,i.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.position.copy(e.pos),i.rotation.y=e.rot,t.scene.add(i),this.g=i,this.t=Math.random()*5,this.run=0}update(t){this.t+=t,this.tail.rotation.x=Math.sin(this.t*2)*.4;let e=this.m.ball.pos;!this.run&&Math.hypot(e.x-this.g.position.x,e.z-this.g.position.z)<1.4&&this.m.ball.speed()>2&&(this.run=1,this.m.audio.play("meow")),this.run&&(this.g.position.x-=t*6,this.g.position.y=Math.max(0,this.g.position.y-t),this.g.position.x<-40&&(this.g.visible=!1))}},gl=class{constructor(t,e){this.m=t;let i=new ne,n=z("#efeadf",1),r=new Y(new er(.42,1),n);r.scale.set(1.4,.95,1),r.position.y=.62,i.add(r);let o=new Y(new Xt(.15,10,8),z("#3a3030"));o.scale.set(1.3,1,.9),o.position.set(.62,.78,0),i.add(o),this.head=o;for(let[a,l]of[[.3,.18],[.3,-.18],[-.32,.18],[-.32,-.18]]){let c=new Y(new mi(.04,.04,.42,6),z("#3a3030"));c.position.set(a,.21,l),i.add(c)}i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),i.position.copy(e.pos),i.rotation.y=e.rot,t.scene.add(i),this.g=i,this.t=0,this.hop=0}hit(){this.hop=.5,this.m.audio.play("baa"),this.m.say({headPos:(t=new _)=>t.set(this.g.position.x,1.6,this.g.position.z)},"\u0645\u0627\u0627\u0627\u0627\u0621!")}update(t){this.t+=t,this.head.position.y=.78+Math.sin(this.t*1.3)*.05,this.head.rotation.z=Math.sin(this.t*.7)*.2,this.hop>0&&(this.hop-=t,this.g.position.y=Math.sin((.5-this.hop)*Math.PI*2)*.25*(this.hop>0?1:0))}},xl=class{constructor(t,e){this.m=t,this.center=e,this.birds=[];for(let i=0;i<9;i++){let n=new ne,r=re(.3)?"#e8e4dc":re(.5)?"#7a7a88":"#5a4a3a",o=new Y(new Xt(.09,8,6),z(r));o.scale.set(1.6,.9,.9),n.add(o);let a=[];for(let l of[-1,1]){new se(.28,.12).translate(0,0,l*.14);let h=new Y(new fe(.16,.01,.26),z(r,.9));h.geometry.translate(0,0,l*.13),n.add(h),a.push(h)}this.m.scene.add(n),this.birds.push({g:n,wings:a,a:i/9*Math.PI*2,r:et(4,8),h:et(5,9),sp:et(.6,.9),ph:Math.random()*6})}this.t=0}update(t){this.t+=t;for(let e of this.birds){e.a+=e.sp*t;let i=this.center.x+Math.cos(e.a)*e.r*1.6+6,n=this.center.z+Math.sin(e.a)*e.r;e.g.position.set(i,e.h+Math.sin(this.t+e.ph)*.6,n),e.g.rotation.y=-e.a;let r=Math.sin(this.t*14+e.ph)*.8;e.wings[0].rotation.x=r,e.wings[1].rotation.x=-r}}};var vl=class{constructor(t){this.scene=t,this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[],this.puffTex=ep(),this.starTex=ip(),this.shardGeo=new he,this.shardGeo.setAttribute("position",new Zt([0,0,0,.12,.02,0,.03,.14,0],3)),this.shardGeo.computeVertexNormals(),this.shardMat=new $t({color:"#cfe8f5",transparent:!0,opacity:.85,side:Te})}puff(t,{color:e="#c8b08a",n:i=6,size:n=.6,spread:r=.4,up:o=.6,life:a=.9,opacity:l=.7}={}){for(let c=0;c<i;c++){let h=new Mi(new fi({map:this.puffTex,color:e,transparent:!0,opacity:l,depthWrite:!1}));h.position.set(t.x+et(-r,r),t.y+et(0,r*.5),t.z+et(-r,r));let u=n*et(.7,1.2);h.scale.setScalar(u),this.scene.add(h),this.puffs.push({s:h,vx:et(-.6,.6),vy:et(.2,o),vz:et(-.6,.6),life:a,t:0,sc:u,op:l})}}shatter(t,e){for(let i=0;i<26;i++){let n=new Y(this.shardGeo,this.shardMat);n.position.set(t.x+et(-.4,.4),t.y+et(-.5,.5),t.z),n.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(n),this.shards.push({m:n,v:new _(et(-2,2),et(0,2.5),e*et(1,4)),w:new _(et(-9,9),et(-9,9),0),t:0})}}trail(t,e){let i=new Mi(new fi({map:Hn(),color:e?"#fff0c0":"#ffffff",transparent:!0,opacity:.55,depthWrite:!1,blending:ki}));i.position.copy(t),i.scale.setScalar(.32),this.scene.add(i),this.puffs.push({s:i,vx:0,vy:0,vz:0,life:.22,t:0,sc:.32,op:.55})}impact(t){this.impactTex||(this.impactTex=Fe(256,256,(i,n)=>{i.translate(n/2,n/2),i.beginPath();for(let r=0;r<24;r++){let o=r%2?62:118,a=r/24*Math.PI*2;i.lineTo(Math.cos(a)*o,Math.sin(a)*o)}i.closePath(),i.fillStyle="#ffd23f",i.fill(),i.lineWidth=10,i.strokeStyle="#c8322a",i.stroke(),i.fillStyle="#c8322a",i.font="900 78px Cairo",i.textAlign="center",i.textBaseline="middle",i.fillText("\u0637\u0627\u062E!",0,8)}));let e=new Mi(new fi({map:this.impactTex,transparent:!0,depthTest:!1}));e.position.copy(t),e.renderOrder=20,this.scene.add(e),this.puffs.push({s:e,vx:0,vy:.4,vz:0,life:.55,t:0,sc:1.1,op:1,pop:!0})}dizzy(t,e=2.5){let i=new ne;for(let n=0;n<3;n++){let r=new Mi(new fi({map:this.starTex,depthWrite:!1,transparent:!0}));r.scale.setScalar(.28),i.add(r)}this.scene.add(i),this.stars.push({g:i,getPos:t,t:0,dur:e})}fight(t,e=4){let i={pos:t.clone(),t:0,dur:e,spawn:0};return this.clouds.push(i),i}update(t){for(let e=this.puffs.length-1;e>=0;e--){let i=this.puffs[e];i.t+=t;let n=i.t/i.life;if(n>=1){this.scene.remove(i.s),i.s.material.dispose(),this.puffs.splice(e,1);continue}i.s.position.x+=i.vx*t,i.s.position.y+=i.vy*t,i.s.position.z+=i.vz*t,i.pop?(i.s.scale.setScalar(i.sc*(n<.15?n/.15:1+(n-.15)*.3)),i.s.material.opacity=n<.7?1:(1-n)/.3):(i.s.scale.setScalar(i.sc*(1+n*1.4)),i.s.material.opacity=i.op*(1-n))}for(let e=this.shards.length-1;e>=0;e--){let i=this.shards[e];i.t+=t,i.v.y-=9.8*t,i.m.position.addScaledVector(i.v,t),i.m.position.y<.01&&(i.m.position.y=.01,i.v.set(0,0,0),i.w.set(0,0,0)),i.m.rotation.x+=i.w.x*t,i.m.rotation.y+=i.w.y*t,i.t>8&&(this.scene.remove(i.m),this.shards.splice(e,1))}for(let e=this.stars.length-1;e>=0;e--){let i=this.stars[e];if(i.t+=t,i.t>i.dur){this.scene.remove(i.g),this.stars.splice(e,1);continue}let n=i.getPos();i.g.position.copy(n),i.g.children.forEach((r,o)=>{let a=i.t*5+o/3*Math.PI*2;r.position.set(Math.cos(a)*.32,Math.sin(i.t*7+o)*.05,Math.sin(a)*.32)})}for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];if(i.t+=t,i.spawn-=t,i.t<i.dur&&i.spawn<=0){if(i.spawn=.045,this.puff(new _(i.pos.x,.6+Math.random()*1,i.pos.z),{color:"#efe4d0",n:3,size:1.9,spread:1.1,up:.6,life:.8,opacity:.95}),Math.random()<.7){let n=new Y(new Ui(.08,.5,3,6),new Rt({color:Math.random()<.5?"#c98b5a":"#a86b43"})),r=Math.random()*Math.PI*2;n.position.set(i.pos.x+Math.cos(r)*1.3,.5+Math.random()*1.2,i.pos.z+Math.sin(r)*1.3),n.rotation.set(Math.random()*3,0,Math.PI/2+r),this.scene.add(n),this.limbs.push({m:n,t:0})}if(Math.random()<.3){let n=new Mi(new fi({map:this.starTex,transparent:!0,depthWrite:!1}));n.position.set(i.pos.x+et(-1,1),et(.8,2),i.pos.z+et(-1,1)),n.scale.setScalar(.45),this.scene.add(n),this.limbs.push({m:n,t:0})}}i.t>i.dur+1&&this.clouds.splice(e,1)}for(let e=this.limbs.length-1;e>=0;e--){let i=this.limbs[e];i.t+=t,i.t>.22&&(this.scene.remove(i.m),this.limbs.splice(e,1))}}clear(){for(let t of this.puffs)this.scene.remove(t.s);for(let t of this.shards)this.scene.remove(t.m);for(let t of this.stars)this.scene.remove(t.g);for(let t of this.limbs)this.scene.remove(t.m);this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[]}};var yl=class{constructor(t,e,i){this.cam=t,this.def=e,this.ctx=i,this.focus=new _,this.zoom=1,this.zoomTarget=1,this.shakeT=0,this.shakeA=0,this.baseD=11+e.halfW*1.15,this.orbit=0,this.mode="follow"}shake(t=.3,e=.35){this.shakeA=Math.max(this.shakeA,t),this.shakeT=Math.max(this.shakeT,e)}snap(t){this.focus.copy(t),this.update(.001,t,!0)}update(t,e,i=!1){let n=this.ctx.bounds,r=this.cam.aspect,o=this.baseD*this.zoom,a=o*.62,l=Math.tan(this.cam.fov*Math.PI/360)*Math.hypot(o,a)*r*.9,c=e.x,h=n.minX+l*.7,u=n.maxX-l*.7;c=h<u?Bt(c,h,u):(n.minX+n.maxX)/2;let f=e.y>1.6,d=f?e.z+2.5:Bt(e.z*.45,-this.def.halfW*.4,this.def.halfW*.4)+this.ctx.camZ,g=f?e.y*.8:0,x=i?1:1-Math.exp(-3.2*t);this.focus.x+=(c-this.focus.x)*x,this.focus.z+=(d-this.focus.z)*x,this.focus.y+=(g-this.focus.y)*x,this.zoom=Ya(this.zoom,this.zoomTarget,2.5,t);let m,p,y;if(this.mode==="orbit"){this.orbit+=t*.12;let v=o*1.2;m=this.focus.x+Math.sin(this.orbit)*v*.6,y=this.focus.z+Math.cos(this.orbit)*v*.35+o*.7,p=a*.75}else m=this.focus.x,p=a+this.focus.y*.6,y=this.focus.z+o;if(this.shakeT>0){this.shakeT-=t;let v=this.shakeA*Math.max(0,this.shakeT)*3;m+=et(-v,v),p+=et(-v,v)*.5,this.shakeT<=0&&(this.shakeA=0)}this.cam.position.set(m,p,y),this.cam.lookAt(this.focus.x,.6+this.focus.y,this.focus.z-.8)}};var Au=class{constructor(){this.ctx=null,this.master=null,this.volume=.8,this.muted=!1,this.amb=null,this.toktokLoop=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination);let i=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,i,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let r=0;r<i;r++)n[r]=Math.random()*2-1}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=this.muted?0:t)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:this.volume)}env(t,e,i,n,r,o=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(n,e+i),t.gain.exponentialRampToValueAtTime(o,e+i+r)}noise(t,e,{type:i="bandpass",f:n=1e3,q:r=1,gain:o=.5,a=.005,f2:l=null,dest:c=null}={}){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;let f=h.createBiquadFilter();f.type=i,f.frequency.setValueAtTime(n,t),f.Q.value=r,l&&f.frequency.exponentialRampToValueAtTime(l,t+e);let d=h.createGain();return this.env(d,t,a,o,e),u.connect(f),f.connect(d),d.connect(c||this.master),u.start(t,Math.random()),u.stop(t+a+e+.05),d}tone(t,e,{type:i="sine",f:n=440,f2:r=null,gain:o=.3,a=.005,dest:l=null,vib:c=0,vibF:h=6}={}){let u=this.ctx,f=u.createOscillator();if(f.type=i,f.frequency.setValueAtTime(n,t),r&&f.frequency.exponentialRampToValueAtTime(r,t+e),c){let g=u.createOscillator(),x=u.createGain();g.frequency.value=h,x.gain.value=c,g.connect(x),x.connect(f.frequency),g.start(t),g.stop(t+a+e+.05)}let d=u.createGain();return this.env(d,t,a,o,e),f.connect(d),d.connect(l||this.master),f.start(t),f.stop(t+a+e+.05),f}play(t,e=1){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.005;switch(t){case"kick":{let n=Math.min(1.4,e);this.tone(i,.12,{f:140,f2:50,gain:.5*n,type:"sine"}),this.noise(i,.06,{type:"lowpass",f:1800,gain:.35*n});break}case"pass":this.tone(i,.08,{f:160,f2:70,gain:.3}),this.noise(i,.04,{type:"lowpass",f:1500,gain:.18});break;case"bounce":this.tone(i,.07,{f:110,f2:60,gain:Math.min(.35,.05*e)});break;case"wall":this.noise(i,.12,{type:"lowpass",f:600,gain:Math.min(.5,.05*e)}),this.tone(i,.09,{f:90,f2:50,gain:Math.min(.4,.04*e)});break;case"metal":for(let n of[520,1310,2150])this.tone(i,.9,{f:n,gain:.12,type:"sine",a:.002});this.noise(i,.05,{type:"highpass",f:3e3,gain:.2});break;case"brick":this.noise(i,.08,{type:"bandpass",f:900,q:2,gain:.4});break;case"whistle":{let n=e>1;this.tone(i,n?.9:.35,{f:2900,gain:.18,vib:140,vibF:28,type:"sine"}),this.noise(i,n?.9:.35,{type:"bandpass",f:2900,q:8,gain:.08}),e>2&&(this.tone(i+1.1,.35,{f:2900,gain:.18,vib:140,vibF:28}),this.tone(i+1.6,1,{f:2900,gain:.18,vib:140,vibF:28}));break}case"cheer":this.noise(i,2.6,{type:"bandpass",f:1300,q:.6,gain:.35,a:.25}),this.noise(i+.1,2.2,{type:"bandpass",f:700,q:.8,gain:.25,a:.3});for(let n=0;n<6;n++)this.tone(i+et(0,.8),et(.4,.9),{type:"sawtooth",f:et(380,650),f2:et(500,900),gain:.025,a:.05,vib:20});break;case"ooh":for(let n=0;n<5;n++)this.tone(i+et(0,.1),.9,{type:"triangle",f:et(260,420),f2:et(170,240),gain:.05,a:.1});this.noise(i,.9,{type:"bandpass",f:500,q:1,gain:.12,a:.1});break;case"glass":this.noise(i,.5,{type:"highpass",f:2500,gain:.5,f2:6e3});for(let n=0;n<14;n++)this.tone(i+et(0,.6),et(.05,.25),{f:et(2500,7e3),gain:.06,a:.001});this.noise(i,.15,{type:"lowpass",f:400,gain:.4});break;case"bell":for(let n of[0,.22])this.tone(i+n,.7,{f:2100,gain:.15,a:.001}),this.tone(i+n,.5,{f:3370,gain:.06,a:.001});break;case"horn":this.tone(i,.32,{type:"square",f:440,gain:.07}),this.tone(i,.32,{type:"square",f:554,gain:.05}),this.tone(i+.4,.2,{type:"square",f:440,gain:.07});break;case"ouch":this.tone(i,.35,{type:"sawtooth",f:520,f2:260,gain:.06,vib:12});break;case"thud":this.tone(i,.2,{f:90,f2:40,gain:.45}),this.noise(i,.12,{type:"lowpass",f:500,gain:.3});break;case"slide":this.noise(i,.45,{type:"bandpass",f:1200,q:.7,gain:.25,f2:500,a:.02});break;case"rip":for(let n=0;n<8;n++)this.noise(i+n*.035,.03,{type:"highpass",f:2500,gain:.15});break;case"meow":this.tone(i,.45,{type:"triangle",f:700,f2:450,gain:.08,vib:30,vibF:8});break;case"baa":this.tone(i,.7,{type:"sawtooth",f:330,f2:300,gain:.07,vib:25,vibF:11});break;case"mom":this.tone(i,.35,{type:"triangle",f:620,gain:.07,vib:8}),this.tone(i+.38,.6,{type:"triangle",f:520,f2:480,gain:.07,vib:8});break;case"schoolbell":for(let n=0;n<14;n++)this.tone(i+n*.08,.08,{type:"square",f:1450,gain:.04,a:.001});break;case"fight":for(let n=0;n<18;n++)this.noise(i+n*.15+et(0,.1),.06,{type:"lowpass",f:700,gain:.35}),n%3===0&&this.tone(i+n*.15,.12,{type:"sawtooth",f:et(300,600),f2:200,gain:.04});break;case"click":this.tone(i,.04,{f:900,gain:.08,type:"triangle"});break;case"coin":this.tone(i,.08,{f:988,gain:.08,type:"square"}),this.tone(i+.08,.3,{f:1319,gain:.08,type:"square"});break;case"save":this.tone(i,.12,{f:200,f2:90,gain:.4}),this.noise(i,.1,{type:"bandpass",f:1200,gain:.25});break;case"buzz":this.tone(i,.08,{type:"sawtooth",f:100,gain:.03});break;default:break}}startAmbience(t,e,i="clear"){if(this.stopAmbience(),!this.ctx)return;let n=this.ctx,r=n.createGain();r.gain.value=1e-4,r.gain.exponentialRampToValueAtTime(1,n.currentTime+2),r.connect(this.master);let o=[],a=n.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=t?220:380;let c=n.createGain();if(c.gain.value=t?.05:.09,a.connect(l),l.connect(c),c.connect(r),a.start(),o.push(a),i==="rain"||i==="dust"){let h=n.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0,h.playbackRate.value=i==="rain"?1:.6;let u=n.createBiquadFilter();u.type=i==="rain"?"highpass":"bandpass",u.frequency.value=i==="rain"?1800:520,u.Q.value=i==="rain"?.5:.9;let f=n.createGain();if(f.gain.value=i==="rain"?.16:.11,h.connect(u),u.connect(f),f.connect(r),h.start(),o.push(h),i==="dust"){let d=n.createOscillator();d.frequency.value=.13;let g=n.createGain();g.gain.value=260,d.connect(g),g.connect(u.frequency),d.start(),o.push(d)}}this.amb={g:r,nodes:o,night:t,kind:e,timer:0}}tickAmbience(t){let e=this.amb;if(!e||!this.ctx||this.muted||(e.timer-=t,e.timer>0))return;let i=this.ctx.currentTime;if(e.night){e.timer=et(.4,1.2);let n=et(4200,5200);for(let r=0;r<3;r++)this.tone(i+r*.07,.04,{f:n,gain:.018,a:.002,dest:e.g});Math.random()<.04&&this.bark(i,e.g)}else{e.timer=et(1.5,4);let n=Math.random();if(n<.25)this.tone(i,.25,{type:"square",f:et(380,480),gain:.012,dest:e.g});else if(n<.6)for(let r=0;r<3;r++)this.tone(i+r*.12,.08,{f:et(2800,3800),f2:et(2400,3200),gain:.015,dest:e.g})}}bark(t,e){for(let i=0;i<2;i++)this.tone(t+i*.28,.12,{type:"sawtooth",f:420,f2:250,gain:.03,dest:e}),this.noise(t+i*.28,.1,{type:"bandpass",f:800,gain:.04,dest:e})}stopAmbience(){if(this.amb){try{this.amb.nodes.forEach(t=>t.stop())}catch{}this.amb.g.disconnect(),this.amb=null}}toktokMusic(t){if(this.ctx)if(t&&!this.toktokLoop){let e=this.ctx,i=e.createGain();i.gain.value=.05,i.connect(this.master);let n=[392,440,466,440,392,349,392,440],r=0,o=setInterval(()=>{if(this.muted)return;let a=e.currentTime;this.tone(a,.12,{type:"square",f:n[r%n.length],gain:.5,dest:i}),r%2===0&&this.tone(a,.08,{f:110,f2:60,gain:.8,dest:i}),r++},160);this.toktokLoop={g:i,id:o}}else!t&&this.toktokLoop&&(clearInterval(this.toktokLoop.id),this.toktokLoop.g.disconnect(),this.toktokLoop=null)}},ct=new Au;var vr=["pass","shoot","tackle","pull","skill","sprint","switch","press"],Z1={solo:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyA"],shoot:["KeyS"],tackle:["KeyD"],pull:["KeyF"],skill:["KeyW"],sprint:["ShiftLeft","ShiftRight"],switch:["Space"],press:["KeyE"]},p1:{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],pass:["KeyF"],shoot:["KeyG"],tackle:["KeyH"],pull:["KeyR"],skill:["KeyT"],sprint:["ShiftLeft"],switch:["KeyQ"],press:["KeyC"]},p2:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyK","Numpad1"],shoot:["KeyL","Numpad2"],tackle:["Semicolon","Numpad3"],pull:["KeyO","Numpad4"],skill:["KeyP","Numpad5"],sprint:["ShiftRight","Numpad0"],switch:["Enter","NumpadEnter"],press:["KeyI","Numpad6"]}},Mr={rot:!1};function yr(s,t){return Mr.rot?[t,window.innerWidth-s]:[s,t]}function uo(s){let t=s.getBoundingClientRect();if(!Mr.rot)return{left:t.left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height};let e=window.innerWidth;return{left:t.top,right:t.bottom,top:e-t.right,bottom:e-t.left,width:t.height,height:t.width}}var K1=()=>Mr.rot?window.innerHeight:window.innerWidth,J1=()=>Mr.rot?window.innerWidth:window.innerHeight,_l=new Set,Ru=new Set,Cp=!1;function j1(){Cp||(Cp=!0,window.addEventListener("keydown",s=>{s.target&&(s.target.tagName==="INPUT"||s.target.tagName==="SELECT")||(_l.add(s.code),s.repeat||Ru.add(s.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(s.code)&&s.preventDefault())}),window.addEventListener("keyup",s=>_l.delete(s.code)),window.addEventListener("blur",()=>_l.clear()))}var _r=class{constructor({keymap:t=null,gamepad:e=null,touch:i=null,color:n="#ffd23f",label:r=""}={}){j1(),this.keymap=t?Z1[t]:null,this.gamepad=e,this.touch=i,this.color=n,this.label=r,this.axis={x:0,z:0},this.b={};for(let o of vr)this.b[o]={down:!1,pressed:!1,released:!1,t:0,touch:!1};this.gest={pass:null,shoot:null}}update(t){let e=0,i=0,n={};for(let l of vr)n[l]=!1;let r=this.keymap;if(r){let l=c=>c.some(h=>_l.has(h)||Ru.has(h));l(r.left)&&(e-=1),l(r.right)&&(e+=1),l(r.up)&&(i-=1),l(r.down)&&(i+=1);for(let c of vr)l(r[c])&&(n[c]=!0)}if(this.gamepad!==null){let l=navigator.getGamepads?navigator.getGamepads():[],c=l&&l[this.gamepad];if(c){let h=c.axes[0]||0,u=c.axes[1]||0;Math.hypot(h,u)>.2&&(e+=h,i+=u);let f=d=>c.buttons[d]&&c.buttons[d].pressed;f(14)&&(e-=1),f(15)&&(e+=1),f(12)&&(i-=1),f(13)&&(i+=1),n.pass||(n.pass=f(0)),n.tackle||(n.tackle=f(1)),n.shoot||(n.shoot=f(2)),n.skill||(n.skill=f(3)),n.pull||(n.pull=f(4)||f(6)),n.switch||(n.switch=f(5)),n.sprint||(n.sprint=f(7))}}let o={};if(this.touch){e+=this.touch.axis.x,i+=this.touch.axis.z;for(let l of vr)this.touch.btn[l]&&(o[l]=!0),n[l]||(n[l]=!!this.touch.btn[l]);for(let l of["pass","shoot"])this.touch.btn[l]&&(this.gest[l]=this.touch.gest[l]||null)}let a=Math.hypot(e,i);a>1&&(e/=a,i/=a),this.axis.x=e,this.axis.z=i;for(let l of vr){let c=this.b[l];c.pressed=n[l]&&!c.down,c.pressed&&(c.touch=!!o[l],(l==="pass"||l==="shoot")&&(this.gest[l]=this.touch?.gest[l]||null)),c.released=!n[l]&&c.down,c.t=n[l]?c.t+t:0,c.down=n[l]}}clear(){for(let t of vr){let e=this.b[t];e.pressed=e.released=!1}}};function kp(){Ru.clear()}var Q1={shoot:'<circle cx="15" cy="12" r="5.2"/><path d="M2.5 9h5M1.5 12h6M2.5 15h5"/>',pass:'<path d="M3 12h15M13 6.5l5.5 5.5-5.5 5.5"/>',sprint:'<path d="M4 6l6 6-6 6M11 6l6 6-6 6"/>',press:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.4"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>',tackle:'<path d="M2.5 17.5h8l7-6.5"/><path d="M6 13.5l4.5 4"/><circle cx="20" cy="9" r="2.5"/>',pull:'<path d="M8 12V6.2a1.4 1.4 0 012.8 0V11M10.8 10.5V4.6a1.4 1.4 0 012.8 0v5.9M13.6 10.5V5.8a1.4 1.4 0 012.8 0V13c0 4.5-2.5 7.5-6.5 7.5-3 0-4.6-1.8-5.6-4L3.6 13a1.4 1.4 0 012.4-1.4L8 14"/>',skill:'<path d="M3 19C6 6 18 6 21 19"/><circle cx="12" cy="18.5" r="2.4"/>',switch:'<path d="M4.5 9.5A8 8 0 0118 6.5M19.5 14.5A8 8 0 016 17.5"/><path d="M18.5 2.5v4.5H14M5.5 21.5V17H10"/>'},Pp={shoot:"\u0634\u0648\u0637\u0629",pass:"\u0628\u0627\u0635\u0629",sprint:"\u062C\u0631\u064A",press:"\u0642\u0637\u0639",tackle:"\u0643\u0639\u0628\u0644\u0629",pull:"\u0634\u062F\u0651",skill:"\u0643\u0648\u0628\u0631\u064A",switch:"\u0628\u062F\u0651\u0644"},Ip={shoot:[86,8,62],pass:[76,104,8],sprint:[62,202,10],press:[66,106,98],tackle:[60,18,164],pull:[54,92,186],skill:[54,160,160],switch:[46,212,96]},t_=["shoot","skill"],e_=["press","tackle","pull"],Ml=class s{constructor(t){this.axis={x:0,z:0},this.btn={},this.el=document.createElement("div"),this.el.className="touchpad";let e='<div class="tzone"><div class="stick"><i class="tick t1"></i><i class="tick t2"></i><i class="tick t3"></i><i class="tick t4"></i><div class="knob"></div></div></div><div class="tcluster">';for(let u of Object.keys(Ip))e+=`<button data-b="${u}" class="tb tb-${u}"><svg viewBox="0 0 24 24">${Q1[u]}</svg><span>${Pp[u]}</span></button>`;e+="</div>",this.el.innerHTML=e,t.appendChild(this.el),this.cluster=this.el.querySelector(".tcluster");let i=this.el.querySelector(".tzone"),n=this.el.querySelector(".stick"),r=this.el.querySelector(".knob"),o=null,a=0,l=0;i.addEventListener("touchstart",u=>{if(o!==null||this.editing)return;let f=u.changedTouches[0];o=f.identifier;let d=uo(i),g=uo(n);[a,l]=yr(f.clientX,f.clientY),n.style.left=a-d.left-g.width/2+"px",n.style.top=l-d.top-g.height/2+"px",n.style.bottom="auto",n.classList.add("on"),u.preventDefault()},{passive:!1});let c=u=>{for(let f of u.changedTouches){for(let b of["pass","shoot"]){let R=this.btnTouch[b];if(!R||R.id!==f.identifier||!this.btn[b])continue;let[T,A]=yr(f.clientX,f.clientY),P=T-R.x,B=A-R.y;B<-26&&Math.abs(B)>Math.abs(P)?this.gest[b]="up":Math.abs(P)>26&&(this.gest[b]=P>0?"right":"left")}if(f.identifier!==o)continue;let[d,g]=yr(f.clientX,f.clientY),x=d-a,m=g-l,p=Math.hypot(x,m),y=this.R;p>y&&(x*=y/p,m*=y/p),r.style.transform=`translate(${x}px,${m}px)`;let v=Math.min(1,p/y);this.axis.x=p>6?x/Math.max(p,.001)*Math.max(v,.35):0,this.axis.z=p>6?m/Math.max(p,.001)*Math.max(v,.35):0}},h=u=>{for(let f of u.changedTouches)f.identifier===o&&(o=null,this.axis.x=this.axis.z=0,r.style.transform="",n.classList.remove("on"),n.style.left="",n.style.top="",n.style.bottom="")};window.addEventListener("touchmove",c,{passive:!0}),window.addEventListener("touchend",h),window.addEventListener("touchcancel",h),this.gest={pass:null,shoot:null},this.btnTouch={},this.el.querySelectorAll(".tb").forEach(u=>{let f=u.dataset.b,d=x=>{if(this.editing)return;this.btn[f]=!0,u.classList.add("on"),x.preventDefault();let m=x.changedTouches[0];if(m&&(f==="pass"||f==="shoot")){let[p,y]=yr(m.clientX,m.clientY);this.btnTouch[f]={id:m.identifier,x:p,y},this.gest[f]=null}},g=x=>{this.btn[f]=!1,u.classList.remove("on"),x.preventDefault()};u.addEventListener("touchstart",d,{passive:!1}),u.addEventListener("touchend",g,{passive:!1}),u.addEventListener("touchcancel",g,{passive:!1})}),this.ctx="",this.stick=n,this.zone=i,this.editing=!1,this.layout=s.defaults(),this.applyLayout(),this.setupEditing()}static defaults(){let t={buttons:{},stick:{left:26,bottom:22,scale:1},opacity:1};for(let[e,[i,n,r]]of Object.entries(Ip))t.buttons[e]={size:i,r:n,b:r,scale:1};return t}setLayout(t){let e=s.defaults();if(t&&typeof t=="object"){for(let i of Object.keys(e.buttons))Object.assign(e.buttons[i],t.buttons?.[i]||{});Object.assign(e.stick,t.stick||{}),typeof t.opacity=="number"&&(e.opacity=t.opacity)}this.layout=e,this.applyLayout()}applyLayout(){let t=this.layout;this.el.querySelectorAll(".tb").forEach(n=>{let r=t.buttons[n.dataset.b],o=Math.round(r.size*r.scale);n.style.width=n.style.height=o+"px",n.style.right=Math.round(r.r+(r.size-o)/2)+"px",n.style.bottom=Math.round(r.b+(r.size-o)/2)+"px"});let e=this.stick,i=Math.round(132*t.stick.scale);e.style.width=e.style.height=i+"px",e.style.setProperty("--rest-left",t.stick.left+"px"),e.style.setProperty("--rest-bottom",t.stick.bottom+"px"),this.el.style.setProperty("--tp-opacity",t.opacity),this.R=52*t.stick.scale}setupEditing(){let t=null,e=r=>{if(!this.editing)return;let o=r.target.closest(".tb, .stick");if(!o)return;r.preventDefault();let a=o.classList.contains("stick")?"stick":o.dataset.b,l=uo(o),[c,h]=yr(r.clientX,r.clientY);t={key:a,el:o,dx:c-(l.left+l.width/2),dy:h-(l.top+l.height/2),id:r.pointerId},this.select(a)},i=r=>{if(!t||r.pointerId!==t.id)return;let[o,a]=yr(r.clientX,r.clientY),l=o-t.dx,c=a-t.dy,h=K1(),u=J1();if(t.key==="stick"){let f=this.layout.stick,d=132*f.scale,g=uo(this.zone);f.left=Math.round(Math.min(Math.max(0,l-g.left-d/2),h-d)),f.bottom=Math.round(Math.min(Math.max(0,g.bottom-c-d/2),u-d))}else{let f=this.layout.buttons[t.key],d=uo(this.cluster),g=d.width/300||1;f.r=Math.round(Math.min(Math.max(0,(d.right-l)/g-f.size/2),h/g-f.size)),f.b=Math.round(Math.min(Math.max(0,(d.bottom-c)/g-f.size/2),u/g-f.size))}this.applyLayout()},n=r=>{t&&r.pointerId===t.id&&(t=null,this.onChange&&this.onChange())};this.el.addEventListener("pointerdown",e),window.addEventListener("pointermove",i),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n)}select(t){this.selected=t,this.el.querySelectorAll(".tb, .stick").forEach(e=>e.classList.toggle("sel",(e.dataset.b||"stick")===t)),this.onSelect&&this.onSelect(t)}setEditing(t){this.editing=t,this.el.classList.toggle("editing",t);for(let e in this.btn)this.btn[e]=!1;this.axis.x=this.axis.z=0,t?(this.setContext(""),this.select(this.selected||"shoot")):this.el.querySelectorAll(".sel").forEach(e=>e.classList.remove("sel"))}label(t){return t==="stick"?"\u0627\u0644\u0627\u0633\u062A\u064A\u0643":Pp[t]}setContext(t){t!==this.ctx&&(this.ctx=t,this.cluster.querySelectorAll(".tb").forEach(e=>{let i=e.dataset.b;e.classList.toggle("dim",t==="attack"&&e_.includes(i)||t==="defend"&&t_.includes(i)),e.classList.toggle("hint",t==="defend"&&i==="press")}))}show(t){this.el.style.display=t?"":"none"}},Cu=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;var bl=30,i_=5,vs=4+Fn.length,El=class{constructor(t){this.m=t,this.n=t.allPlayers.length,this.size=this.n*vs+7,this.cap=bl*i_,this.buf=new Float32Array(this.cap*this.size),this.count=0,this.head=0,this.acc=0}record(t){if(this.acc+=t,this.acc<1/bl)return;this.acc=0;let e=this.m,i=this.head*this.size,n=this.buf;e.allPlayers.forEach((a,l)=>{let c=i+l*vs;n[c]=a.pos.x,n[c+1]=a.pos.z,n[c+2]=a.facing,n[c+3]=a.root.visible?1:0;let h=a.anim.out;for(let u=0;u<Fn.length;u++)n[c+4+u]=h[Fn[u]]});let r=i+this.n*vs,o=e.ball.mesh;n[r]=o.position.x,n[r+1]=o.position.y,n[r+2]=o.position.z,n[r+3]=o.quaternion.x,n[r+4]=o.quaternion.y,n[r+5]=o.quaternion.z,n[r+6]=o.quaternion.w,this.head=(this.head+1)%this.cap,this.count=Math.min(this.cap,this.count+1)}frame(t){return(this.head-this.count+t+this.cap*2)%this.cap*this.size}reset(){this.count=0,this.head=0}},Lp=new Wi,Dp=new Wi,Up={},Sl=class{constructor(t,e,{seconds:i=3.6,speed:n=.45}={}){this.m=t,this.rec=e,this.frames=Math.min(e.count,Math.round(i*bl)),this.start=e.count-this.frames,this.speed=n,this.t=0,this.done=this.frames<10;let r=t.lastGoal;this.goalX=r?r.x:0,this.side=Math.random()<.5?1:-1}update(t){if(this.done)return;this.t+=t*this.speed;let e=this.t*bl;if(e>=this.frames-1){this.done=!0;return}let i=Math.floor(e),n=e-i,r=this.rec.frame(this.start+i),o=this.rec.frame(this.start+i+1),a=this.rec.buf,l=this.m;l.allPlayers.forEach((v,b)=>{let R=r+b*vs,T=o+b*vs;v.pos.x=a[R]+(a[T]-a[R])*n,v.pos.z=a[R+1]+(a[T+1]-a[R+1])*n;let A=a[T+2]-a[R+2];for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;v.facing=a[R+2]+A*n,v.show(a[R+3]>.5);for(let P=0;P<Fn.length;P++)Up[Fn[P]]=a[R+4+P]+(a[T+4+P]-a[R+4+P])*n;v.anim.apply(Up),v.sync()});let c=r+l.allPlayers.length*vs,h=o+l.allPlayers.length*vs,u=l.ball.mesh;u.position.set(a[c]+(a[h]-a[c])*n,a[c+1]+(a[h+1]-a[c+1])*n,a[c+2]+(a[h+2]-a[c+2])*n),Lp.set(a[c+3],a[c+4],a[c+5],a[c+6]),Dp.set(a[h+3],a[h+4],a[h+5],a[h+6]),u.quaternion.slerpQuaternions(Lp,Dp,n),l.ball.blob.position.set(u.position.x,.012,u.position.z);let f=l.camera,d=this.goalX,g=Math.sign(d)||1,x=u.position.x,m=u.position.z,p=d-g*5.5+(x-d)*.35,y=this.side*8+m*.3;f.position.lerp(new _(p,3.2,y),this.t<.05?1:.06),f.lookAt(x,.7+u.position.y*.4,m)}};var zp="karat-elshawarea-player-v1",wl=[...ro].sort((s,t)=>Np(t)-Np(s));function Np(s){let t=parseInt(s.slice(1),16);return(t>>16)*.3+(t>>8&255)*.59+(t&255)*.11}var Bp={hairStyle:[["short","\u0639\u0627\u062F\u064A"],["curly","\u0643\u064A\u0631\u0644\u064A"],["buzz","\u0632\u064A\u0631\u0648"],["cap","\u0643\u0627\u0628"],["bald","\u0623\u0642\u0631\u0639"]],face:[["none","\u062F\u0642\u0646 \u0646\u0627\u0639\u0645\u0629"],["mustache","\u0634\u0646\u0628"],["beard","\u062F\u0642\u0646"],["glasses","\u0646\u0636\u0627\u0631\u0629"]],top:[["tshirt","\u062A\u064A\u0634\u064A\u0631\u062A"],["jersey","\u0641\u0627\u0646\u0644\u0629 \u0646\u0627\u062F\u064A"],["tank","\u062D\u0645\u0627\u0644\u0627\u062A"],["tracksuit","\u062A\u0631\u064A\u0646\u062C"],["shirt","\u0642\u0645\u064A\u0635"]],bottom:[["shorts","\u0634\u0648\u0631\u062A"],["pants","\u0628\u0646\u0637\u0644\u0648\u0646"]],shoes:[["white","\u0643\u0648\u062A\u0634\u064A \u0623\u0628\u064A\u0636"],["black","\u0643\u0648\u062A\u0634\u064A \u0623\u0633\u0648\u062F"],["slippers","\u0634\u0628\u0634\u0628"]],height:[["short","\u0642\u0635\u064A\u0631"],["mid","\u0645\u062A\u0648\u0633\u0637"],["tall","\u0637\u0648\u064A\u0644"]],build:[["thin","\u0631\u0641\u064A\u0639"],["mid","\u0639\u0627\u062F\u064A"],["big","\u0645\u0644\u064A\u0627\u0646"]]};function n_(){return{name:"\u062D\u0645\u0627\u062F\u0629",number:7,skin:3,hairStyle:"short",face:"none",top:"tshirt",bottom:"shorts",shoes:"white",height:"mid",build:"mid"}}function Tl(){let s=n_();try{Object.assign(s,JSON.parse(localStorage.getItem(zp)||"{}"))}catch{}return s}function Op(s){try{localStorage.setItem(zp,JSON.stringify(s))}catch{}}function Pu(s){return(s||"").replace(/[<>&"']/g,"").trim().slice(0,12)||"\u062D\u0645\u0627\u062F\u0629"}function Al(s,t,{kits:e=!1}={}){let i=t.colors[0],n=wl[Math.max(0,Math.min(wl.length-1,s.skin|0))],r=s.number|0||7,o={skin:n,hair:ps[0],hairStyle:s.hairStyle,capColor:i,mustache:s.face==="mustache"||s.face==="beard",beard:s.face==="beard",glasses:s.face==="glasses",scale:{short:.9,mid:.95,tall:1}[s.height]||.95,build:{thin:.94,mid:1.02,big:1.1}[s.build]||1.02};if(e)return Object.assign(o,{top:{type:"jersey",color:i,number:r,numColor:t.accent},bottom:{type:"shorts",color:t.accent==="#ffffff"?"#f2f2f2":"#222"},socks:i,shoes:"#1a1a1a"});let a=s.top==="tracksuit"?i:"#26262b";return o.top={type:s.top,color:i,color2:"#ffffff",number:s.top==="jersey"||s.top==="tshirt"?r:null,numColor:t.accent},o.bottom={type:s.bottom,color:s.bottom==="shorts"&&s.top==="jersey"?"#f2f2f2":a},o.slippers=s.shoes==="slippers",o.shoes=s.shoes==="black"?"#222":s.shoes==="slippers"?"#3a6fd8":"#e8e4dc",o.socks=s.bottom==="shorts"&&s.shoes!=="slippers"?"#f2f2f2":null,o}var Ue=new _,ge=new _,Fp={3:[[.06,0],[.62,-.38],[.62,.38]],4:[[.06,0],[.42,0],[.78,-.45],[.78,.45]],5:[[.06,0],[.38,-.38],[.38,.38],[.78,-.28],[.78,.28]]},fo=class{constructor(t,e){this.game=t,this.ui=t.ui,this.audio=ct,this.opts=e,this.scene=new Ln,this.camera=t.camera,this.def=Wn[e.mapId],this.night=e.night,this.sunset=!!e.sunset&&!e.night,this.weather=e.weather||"clear",this.teamKeys=[e.home,e.away],this.difficulty=e.difficulty||"normal",this.humanTeams=e.controllers.map(a=>!!a),this.controllers=e.controllers,this.time=0,this.clock=e.rule.type==="time"?e.rule.seconds:0,this.score=[0,0],this.scandal=[0,0],this.stats={fouls:[0,0],nutmegs:[0,0],shots:[0,0],goals:[],windows:0,fights:0,momCalls:0},this.owner=null,this.pendingPass=null,this.reserved=null,this.state="intro",this.stateT=0,this.queue=[],this.headmasterWatching=!1,this.roles=[{chaser:null,slots:new Map,nSlots:1},{chaser:null,slots:new Map,nSlots:1}],this.charge=0,this.lastSwitch=[0,0],this.stretch=new Map,this.timers=[],this.ctx=Sp(e.mapId),this.scene.add(this.ctx.root),this.env=new ol(this.scene,this.ctx,{night:this.night,sunset:this.sunset,weather:this.weather,quality:t.quality,renderer:t.renderer}),this.ball=new al(this.scene),this.ball.setNight(this.night),this.ball.friction=({yard:1.15,school:.75,beach:1.7,mosque:.8}[e.mapId]||.85)*(this.weather==="rain"?.62:1),this.ball.onBounce=a=>{a>1.5&&ct.play("bounce",a),a>2&&(e.mapId==="yard"||e.mapId==="beach")&&this.weather!=="rain"&&this.fx.puff(this.ball.pos,{n:2,size:.4,life:.6,up:.3,opacity:.5}),a>1.2&&this.weather==="rain"&&this.fx.puff(this.ball.pos,{n:4,size:.25,life:.4,up:.6,opacity:.45,color:"#c8d4e0"})},this.ball.onHit=(a,l,c)=>this.onBallHit(a,l,c),this.fx=new vl(this.scene),this.rig=new yl(this.camera,this.def,this.ctx);let i=[...pp].sort(()=>Math.random()-.5),n=0;this.teams=[[],[]];let r=Math.floor(Math.random()*1e3),o=Tl();for(let a=0;a<2;a++){let l=zi[this.teamKeys[a]],c=e.mods?.[a]||{};for(let h=0;h<this.def.teamSize;h++){let u=i[n++%i.length],f=a===0&&h===1&&this.humanTeams[0]&&!e.demo;for(f&&(u=o.name);!f&&(u===o.name||u==="\u062D\u0645\u0627\u062F\u0629");)u=i[n++%i.length];let d=f?Al(o,l,{kits:!!c.kits}):Rp(l,h,r+a*50,{kits:!!c.kits,shoes:!!c.shoes,isGK:h===0}),g=new cl(this,a,h,d,{name:u,number:f?o.number:[1,7,10,9,4,11,8][h%7],isGK:h===0});g.mods.speed=(c.speed||1)*(this.humanTeams[a]?1:oo[this.difficulty].speed),g.mods.shot=c.shot||1,g.mods.control=c.control||1,g.mods.stamina=c.stamina||1,this.teams[a].push(g)}}this.allPlayers=[...this.teams[0],...this.teams[1]],this.npcs=[],this.walkers=[];for(let a of this.ctx.spectators)this.npcs.push(new ho(this,a));this.mom=this.ctx.balconies.length?new fl(this,this.ctx.balconies[0]):null,this.mom&&this.npcs.push(this.mom),this.headmaster=this.ctx.extras.headmaster?new pl(this,this.ctx.doors[0]):null,this.headmaster&&this.npcs.push(this.headmaster),this.animals=this.ctx.animals.map(a=>a.kind==="cat"?new ml(this,a):new gl(this,a)),this.ctx.extras.pigeons&&this.npcs.push(new xl(this,this.ctx.extras.pigeons)),this.walkerT=et(4,9),this.toktok=null,this.toktokT=this.ctx.extras.toktok?et(35,60):1/0,this.bike=null,this.bikeT=this.ctx.extras.bike?et(15,30):1/0,this.dynColliders=[];for(let a=0;a<2;a++)this.controllers[a]&&this.setControl(a,this.teams[a][1]);if(this.recorder=new El(this),this.placeKickoff(re(.5)?0:1),this.rig.snap(new _(0,0,0)),this.rig.mode="orbit",this.rig.zoomTarget=1.15,this.rig.zoom=1.3,this.ui.matchStart(this),!e.demo&&(ct.startAmbience(this.night,e.mapId,this.weather),e.mapId==="school"&&this.after(.6,()=>ct.play("schoolbell")),e.bet)){let a=e.bet;this.after(.4,()=>this.say(this.teams[1][1],`\u0639\u0644\u0649 ${a.name} ${a.icon}`,{dur:2.6})),this.after(1.4,()=>this.say(this.teams[0][1],"\u0645\u0627\u0634\u064A\u060C \u062C\u0647\u0651\u0632 \u0641\u0644\u0648\u0633\u0643",{dur:2.2}))}}teamColor(t){return zi[this.teamKeys[t]].ui}teamDef(t){return zi[this.teamKeys[t]]}aiLevel(t){return oo[this.humanTeams[t]?"normal":this.difficulty]}aiSkill(t){return this.aiLevel(t.team).skill}goalFor(t){return this.pens?this.pens.goal:this.ctx.goals.find(e=>e.side===(t===0?1:-1))}ownGoal(t){return this.pens?this.pens.goal:this.ctx.goals.find(e=>e.side===(t===0?-1:1))}goalkeeper(t){return this.teams[t].find(e=>e.isGK&&e.active)}nearestTo(t,e,i){let n=null,r=1/0;for(let o of this.teams[e]){if(!o.active||i&&!i(o))continue;let a=Ce(o.pos.x,o.pos.z,t.x,t.z);a<r&&(r=a,n=o)}return n}pressureDist(t){let e=99;for(let i of this.teams[1-t.team]){if(!i.active||i.down)continue;let n=Ce(i.pos.x,i.pos.z,t.pos.x,t.pos.z);n<e&&(e=n)}return e}pressureOn(t){return Bt((2.5-this.pressureDist(t))/2.5,0,1)}lineBlocked(t,e,i,n,r,o=.8){let a=i-t,l=n-e,c=a*a+l*l;if(c<.01)return!1;for(let h of this.teams[1-r]){if(!h.active||h.down)continue;let u=((h.pos.x-t)*a+(h.pos.z-e)*l)/c;if(u<.08||u>.95)continue;let f=t+a*u,d=e+l*u;if(Ce(f,d,h.pos.x,h.pos.z)<o)return!0}return!1}bestPassTarget(t,e,i=!1,n=null){let r=null,o=this.goalFor(t.team).x,a=e&&(e.x||e.z);if(a&&n!==null&&n<=0)return null;for(let l of this.teams[t.team]){if(l===t||!l.active||l.isGK||l.state==="fallen")continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z,u=Math.hypot(c,h);if(u<1.5||u>30)continue;let f=0;if(a){let d=Math.atan2(e.x,e.z),g=c+l.vel.x*.5,x=h+l.vel.z*.5,m=(v,b)=>{let R=Math.atan2(v,b)-d;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;return Math.abs(R)},p=Math.min(m(c,h),m(g,x));if(p>(n??.6))continue;f=-p*4-u/40+Math.min(4,this.pressureDist(l))/4*.3,this.lineBlocked(t.pos.x,t.pos.z,l.pos.x,l.pos.z,t.team)&&(f-=.3)}else{let d=(Math.abs(o-t.pos.x)-Math.abs(o-l.pos.x))/10;f+=d*(i?.3:1);let g=Math.min(4,this.pressureDist(l))/4;f+=g*.8-u/28,this.lineBlocked(t.pos.x,t.pos.z,l.pos.x,l.pos.z,t.team)&&(f-=.7)}(!r||f>r.score)&&(r={player:l,score:f})}return r}passSpeedFor(t,e){let i=this.ball.friction,n=1/60,r=2,o=30;for(let a=0;a<18;a++){let l=(r+o)/2,c=l,h=0;for(;h<t&&c>.05;)h+=c*n,c=Math.max(0,c-(i*n*1.4+c*i*n*.35));h>=t&&c>=e?o=l:r=l}return Math.min(22,o)}passTime(t,e){let i=this.ball.friction,n=1/30,r=e,o=0,a=0;for(;o<t&&r>.05&&a<4;)o+=r*n,a+=n,r=Math.max(0,r-(i*n*1.4+r*i*n*.35));return a}receiveSteer(t){let e=this.ball,i=e.groundSpeed(),n=e.pos.x,r=e.pos.z;if(i>1.5){let c=e.vel.x/i,h=e.vel.z/i,u=Math.max(0,(t.pos.x-e.pos.x)*c+(t.pos.z-e.pos.z)*h);n=e.pos.x+c*u,r=e.pos.z+h*u}let o=n-t.pos.x,a=r-t.pos.z,l=Math.hypot(o,a);l>.12?t.want.set(o/l*Math.min(1,l/1.2),a/l*Math.min(1,l/1.2)):t.want.set(0,0),t.wantSprint=l>3,t.lookAt=e.pos}nutmegVictim(t){let e=Math.sin(t.facing),i=Math.cos(t.facing),n=null,r=2.4;for(let o of this.teams[1-t.team]){if(!o.active||o.down||o.state==="gkhold")continue;let a=o.pos.x-t.pos.x,l=o.pos.z-t.pos.z,c=Math.hypot(a,l);c>r||c<.3||(a*e+l*i)/c<.55||(r=c,n=o)}return n}kickBall(t,e,i,n,r={}){let o=this.ball;this.owner===t&&(this.owner=null),o.frozen=!1,o.pos.y=Math.max(o.pos.y,o.r),o.kick(e,i,n,t),r.curl&&(o.curl=r.curl,o.curlT=r.curlT||1),t.cool.touch=.28,t.cool.kick=.4,this.pendingPass=null;let a=Math.hypot(e,i,n);if(r.kind==="shot"?(ct.play("kick",.6+(r.power||.5)*.8),t.ctrl&&this.buzz(25+Math.round((r.power||.5)*30)),this.pens||this.stats.shots[t.team]++,this.lastShot={team:t.team,t:this.time,by:t},r.power>.8&&this.rig.shake(.12,.2),this.fx.puff(Ue.set(o.pos.x,.05,o.pos.z),{n:3,size:.4,life:.6})):ct.play("pass",a/10),r.pass&&(this.pendingPass={target:r.pass,t:0,from:t},t.ctrl&&r.pass&&!r.pass.isGK&&this.setControl(t.team,r.pass)),r.kind==="nutmeg"){let l=r.victim;this.reserved={p:t,t:1.7},l.pending=null,l.setState("nutmegged",1),l.anim.play("dazed"),this.after(.9,()=>l.anim.stop("dazed")),t.stats.nutmegs++,this.stats.nutmegs[t.team]++,this.say(t,te(qt.nutmeg),{color:"#ffd23f",big:!0}),this.say(l,te(qt.nutmegged),{delay:.4}),ct.play("ooh"),this.ui.banner("\u0643\u0648\u0628\u0631\u064A!",`${t.name} \u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 ${l.name}`,"nut"),this.slowmo(.4,.5),this.game.onEvent?.("nutmeg",t.team)}}loseBall(t,e=2){if(this.owner!==t)return;this.owner=null;let i=this.ball;i.vel.set(t.vel.x*.6+et(-e,e),.5,t.vel.z*.6+et(-e,e)),i.lastTouch=t,t.cool.touch=.5,t.state==="gkhold"&&t.setState("play")}giveBall(t){this.owner&&this.owner!==t&&(this.owner.cool.touch=.4),this.owner=t,this.ball.frozen=!1,this.ball.lastTouch=t,this.ball.lastKickTeam=t.team,this.pendingPass=null,this.reserved=null,t.cool.steal=.45,t.ai.t=0,this.humanTeams[t.team]&&!t.isGK&&!t.ctrl&&this.teams[t.team].find(i=>i.ctrl)&&this.setControl(t.team,t)}setControl(t,e){let i=this.controllers[t];if(!(!i||!e)){for(let n of this.teams[t])n.ctrl&&(n.ctrl=null,n.setMarker(null),n.ring.material.opacity=.5);e.ctrl=i,e.setMarker(i.color),this.lastSwitch[t]=this.time,this.ui.controlChanged(t,e)}}passCone(){let t=this.game.settings.passAssist||"normal";return t==="high"?.62:t==="manual"?0:.36}humanControl(t,e,i){let n=this.ball;if(t.want.set(e.axis.x,e.axis.z),t.wantSprint=e.b.sprint.down,t.lookAt=n.pos,t.pullTarget){e.b.pull.down||t.releasePull(!1);return}if(t.active){if(t.hasBall||(this.passHeld=!1),this.pendingPass&&this.pendingPass.target===t&&!this.owner&&this.pendingPass.t<1.8&&t.canAct){this.receiveSteer(t);return}if(t.hasBall){if(e.b.pass.pressed&&(this.passHeld=!0),this.passHeld&&e.b.pass.down&&e.b.pass.t>.15&&this.ui.power(Math.min(1,(e.b.pass.t-.15)/.85),"\u0628\u0627\u0635\u0629"),this.passHeld&&e.b.pass.released){this.passHeld=!1;let r=this.lastPassT||0,o=r<.15?.15:Math.min(1,.15+(r-.15)/.85*.85);this.ui.power(0);let l=Math.hypot(e.axis.x,e.axis.z)>.25?{x:e.axis.x,z:e.axis.z}:{x:Math.sin(t.facing),z:Math.cos(t.facing)},c=this.bestPassTarget(t,l,!1,this.passCone()),h=e.gest.pass==="up"||!e.b.pass.touch&&e.b.sprint.down;t.pass(c?c.player:null,l.x,l.z,o,h)}if(e.b.pass.down&&(this.lastPassT=e.b.pass.t),e.b.shoot.down&&(this.charge=Math.min(1,e.b.shoot.t/.85),this.ui.power(this.charge)),e.b.shoot.released){let r=Math.max(.25,this.charge),o=e.gest.shoot,a=o==="left"?-1:o==="right"?1:o==="hard"||!e.b.shoot.touch&&e.b.sprint.down?e.axis.z>=0?1:-1:0;t.shoot(r,e.axis.z,r*.35,a),this.charge=0,this.ui.power(0)}e.b.skill.pressed&&t.nutmeg()}else{this.charge&&(this.charge=0,this.ui.power(0));let r=this.owner&&this.owner.team!==t.team,o=e.b.press.down||e.b.pass.down&&(r||!this.owner);if(t.pressing=o,o&&Math.hypot(e.axis.x,e.axis.z)<.25&&t.canAct){let a,l;if(r){let f=this.owner,g=this.ownGoal(t.team).x-f.pos.x,x=-f.pos.z,m=Math.hypot(g,x)||1,y=Ce(f.pos.x,f.pos.z,t.pos.x,t.pos.z)>2.5?.9:.25;a=f.pos.x+f.vel.x*.25+g/m*y,l=f.pos.z+f.vel.z*.25+x/m*y}else{let f=Bt(Ce(n.pos.x,n.pos.z,t.pos.x,t.pos.z)/7,0,1);a=n.pos.x+n.vel.x*f*.7,l=n.pos.z+n.vel.z*f*.7}let c=a-t.pos.x,h=l-t.pos.z,u=Math.hypot(c,h);u>.15?t.want.set(c/u*Math.min(1,u/.6),h/u*Math.min(1,u/.6)):t.want.set(0,0)}if((e.b.shoot.pressed||e.b.pass.pressed&&!r)&&n.pos.y>.3&&!this.owner&&(t.airIntent={kind:e.b.shoot.pressed?"shot":"pass",t:.5,x:e.axis.x,z:e.axis.z}),e.b.tackle.pressed&&(e.axis.x||e.axis.z?t.facing=Math.atan2(e.axis.x,e.axis.z):t.faceTo(r&&Ce(this.owner.pos.x,this.owner.pos.z,t.pos.x,t.pos.z)<4?this.owner.pos:n.pos),t.slide()),e.b.pull.pressed){let a=null,l=1.35;for(let c of this.teams[1-t.team]){if(!c.active||c.down)continue;let h=Ce(c.pos.x,c.pos.z,t.pos.x,t.pos.z);h<l&&(l=h,a=c)}a&&t.pull(a)}if((e.b.pass.pressed||e.b.press.pressed)&&this.owner&&this.owner.team===t.team&&!this.owner.ctrl&&t.cool.call<=0){t.cool.call=1.2,this.say(t,te(qt.callPass));let a=this.owner;this.after(.18,()=>{this.owner===a&&a.canAct&&a.pass(t)})}}e.b.switch.pressed&&this.switchNext(t.team)}}switchNext(t){let e=this.teams[t].find(r=>r.ctrl),i=this.ball.pos,n=this.teams[t].filter(r=>r.active&&!r.isGK&&r!==e&&r.state!=="fallen");n.length&&(n.sort((r,o)=>Ce(r.pos.x,r.pos.z,i.x,i.z)-Ce(o.pos.x,o.pos.z,i.x,i.z)),this.setControl(t,n[0]))}autoSwitch(t){let e=this.teams[t].find(a=>a.ctrl);if(!e){this.switchNext(t);return}if(!e.active){this.switchNext(t);return}if(e.hasBall||e.pullTarget||e.state==="slide"||e.pending||this.time-this.lastSwitch[t]<.9||this.owner&&this.owner.team===t)return;let i=this.ball.pos,n=Ce(e.pos.x,e.pos.z,i.x,i.z),r=null,o=n-3;for(let a of this.teams[t]){if(a===e||!a.active||a.isGK||a.down)continue;let l=Ce(a.pos.x,a.pos.z,i.x,i.z);l<o&&(o=l,r=a)}r&&this.setControl(t,r)}computeRoles(){let t=this.ball.pos;for(let e=0;e<2;e++){let i=this.roles[e];i.slots.clear();let n=this.teams[e].find(c=>c.ctrl),r=this.teams[e].filter(c=>c.active&&!c.isGK&&!c.ctrl&&c.state!=="fallen"),o=null,a=1/0;for(let c of r){let h=Ce(c.pos.x,c.pos.z,t.x,t.z)+(c.state==="play"?0:3);h<a&&(a=h,o=c)}if(n&&o){let c=Ce(n.pos.x,n.pos.z,t.x,t.z),h=this.owner&&this.owner.team!==e;a<c-1.5||h&&a<7||(o=null)}this.owner&&this.owner.team===e&&(o=null),i.chaser=o;let l=r.filter(c=>c!==o).sort((c,h)=>c.pos.z-h.pos.z);l.forEach((c,h)=>i.slots.set(c,h)),i.nSlots=Math.max(1,l.length)}}placeKickoff(t){let e=this.def;this.owner=null,this.pendingPass=null,this.reserved=null,this.kickTeam=t;for(let i=0;i<2;i++){let n=Fp[e.teamSize]||Fp[4],r=this.ownGoal(i),o=i===0?1:-1,a=this.teams[i];a.forEach((l,c)=>{if(l.resetForKickoff(),!l.active)return;let[h,u]=n[c]||[.5,0],f=r.x+o*h*(Math.abs(r.x)-.6),d=u*e.halfW;i===t&&c===a.length-1&&(f=-o*.5,d=0),i!==t&&(f=o>0?Math.min(f,-1.8):Math.max(f,1.8)),l.place(f,d,i===0?Math.PI/2:-Math.PI/2),l.anim.update(.016,0)})}this.ball.place(0,0),this.ball.frozen=!1}startPlay(){let t=this.teams[this.kickTeam][this.teams[this.kickTeam].length-1];this.setState("play"),t&&t.active&&this.giveBall(t),ct.play("whistle"),this.humanTeams[this.kickTeam]&&t&&!t.ctrl&&this.setControl(this.kickTeam,t)}setState(t){this.state=t,this.stateT=0}after(t,e){this.timers.push({t,fn:e})}runTimers(t){if(!this.timers.length)return;let e=[];for(let i of this.timers)i.t-=t,i.t<=0&&e.push(i);if(e.length){this.timers=this.timers.filter(i=>i.t>0);for(let i of e)i.fn()}}buzz(t){if(!(this.opts.demo||!this.game.touch||this.game.settings.vibrate==="off"))try{navigator.vibrate&&navigator.vibrate(t)}catch{}}slowmo(t,e){this.slow={scale:t,t:e}}update(t){t=Math.min(t,1/20),this.slow&&(this.slow.t-=t,t*=this.slow.scale,this.slow.t<=0&&(this.slow=null)),this.time+=t,this.stateT+=t;for(let r of this.controllers)r&&r.update(t);let e=this.controllers[0];switch(e&&e.touch&&e.touch.setContext(this.owner&&this.owner.team===0?"attack":"defend"),kp(),this.env.update(t),ct.tickAmbience(t),this.runTimers(t),this.state){case"intro":if(this.opts.demo){this.stateT>1&&this.setState("kickoff");break}(this.stateT>2.6||this.anyPressed())&&(this.rig.mode="follow",this.rig.zoomTarget=1,this.setState("kickoff"),this.ui.banner(te(qt.kickoff),`${this.teamDef(0).name} \xD7 ${this.teamDef(1).name}`,"start"),!this.opts.versus&&!this.game.touch&&this.after(3,()=>this.ui.toast("\u062F\u0648\u0633 S \u0643\u062A\u064A\u0631 = \u0634\u0648\u0637\u0629 \u0623\u0642\u0648\u0649 \u2022 D \u0643\u0639\u0628\u0644\u0629 \u2022 F \u0634\u062F\u0651 \u0645\u0646 \u0627\u0644\u0647\u062F\u0648\u0645 \u2022 W \u0643\u0648\u0628\u0631\u064A")));break;case"kickoff":this.stateT>1.3&&this.startPlay();break;case"play":this.opts.rule.type==="time"?(this.clock-=t,this.clock<=0&&(this.clock=0,this.endMatch())):this.clock+=t;break;case"goal":if(this.stateT>3&&!this.replayed&&!this.opts.demo&&this.game.settings.replay!=="off"&&(this.replayed=!0,this.replay=new Sl(this,this.recorder),!this.replay.done)){this.setState("replay"),this.ui.replay(!0);break}this.stateT>4.2&&this.afterGoal();break;case"replay":this.replay.update(t),(this.replay.done||this.stateT>.6&&this.anyPressed())&&(this.ui.replay(!1),this.replay=null,this.afterGoal());break;case"freekick":this.updateFreekick(t);break;case"event":this.updateEvent(t);break;case"end":this.stateT>3.2&&!this.resultShown&&(this.resultShown=!0,this.ui.showResult(this));break;case"pens":this.updatePens(t);break}if(this.state==="replay"){this.ui.hud(this,t);return}(this.state==="play"||this.state==="goal"&&this.stateT<1.2)&&this.recorder.record(t);let i=this.state==="play";(i||this.state==="freekick"||this.state==="event")&&this.computeRoles();for(let r of this.allPlayers)i?r.ctrl?this.humanControl(r,r.ctrl,t):this.freezeAI?r.want.set(0,0):Su(r,this,t):this.state==="freekick"||this.state==="event"?r.ctrl&&r.state==="play"?(r.want.set(r.ctrl.axis.x,r.ctrl.axis.z),r.wantSprint=r.ctrl.b.sprint.down):r.ctrl||this.idleAI(r):this.state==="goal"||this.state==="end"?this.celebrateAI(r):(r.want.set(0,0),r.lookAt=this.ball.pos),r.update(t);if(i)for(let r=0;r<2;r++)this.controllers[r]&&this.autoSwitch(r);this.resolveCollisions(),i&&this.updateAirIntents(t),i&&(this.updatePulls(t),this.updateSlides()),this.updateBall(t,i),!this.owner&&this.ball.speed()>13&&!this.ball.frozen&&this.fx.trail(this.ball.pos,this.night),i&&(this.checkGoal(),this.checkSpecialBall()),this.updateNPCs(t),this.fx.update(t);for(let r of this.animals)r.update(t);this.reserved&&(this.reserved.t-=t,this.reserved.t<=0&&(this.reserved=null)),this.pendingPass&&(this.pendingPass.t+=t,this.pendingPass.t>2.5&&(this.pendingPass=null));let n=this.ball.pos;this.state==="goal"&&this.scorer&&this.scorer.active&&(n=this.scorer.pos),this.focusOverride&&(n=this.focusOverride),this.rig.update(t,n),this.updateStretch(),this.ui.hud(this,t)}anyPressed(){return this.controllers.some(t=>t&&Object.values(t.b).some(e=>e.pressed))}idleAI(t){if(!t.active||t.state!=="play")return;t.lookAt=this.ball.pos;let e=this.ball.pos,i=Ce(t.pos.x,t.pos.z,e.x,e.z);if(this.freekick&&t.team!==this.freekick.team&&i<3.2){let n=(3.2-i)/3.2;t.want.set((t.pos.x-e.x)/Math.max(.1,i)*n*1.5,(t.pos.z-e.z)/Math.max(.1,i)*n*1.5)}else if(this.fleeFrom){let n=t.pos.x-this.fleeFrom.x,r=t.pos.z-this.fleeFrom.z,o=Math.hypot(n,r)||1;t.want.set(n/o,r/o),t.wantSprint=!0}else Su(t,this,.016),t.hasBall&&t.want.set(0,0)}celebrateAI(t){if(t.want.set(0,0),t.wantSprint=!1,t===this.scorer&&t.state==="celebrate"){let i=this.def.halfW*.8-t.pos.z;Math.abs(i)>.6&&t.want.set(-t.dir*.25,Math.sign(i)*.9),t.wantSprint=!0}else if(this.scorer&&t.team===this.scorer.team&&t.state==="celebrate"&&!t.isGK){let e=this.scorer.pos.x-t.pos.x,i=this.scorer.pos.z-t.pos.z,n=Math.hypot(e,i);n>1.6&&t.want.set(e/n,i/n)}t.lookAt=this.scorer?this.scorer.pos:this.ball.pos}resolveCollisions(){let t=this.allPlayers;for(let i=0;i<t.length;i++){let n=t[i];if(!(!n.active||n.state==="fallen")){for(let r=i+1;r<t.length;r++){let o=t[r];if(!o.active||o.state==="fallen"||n.pullTarget===o||o.pullTarget===n||n.state==="slide"||o.state==="slide")continue;let a=o.pos.x-n.pos.x,l=o.pos.z-n.pos.z,c=Math.hypot(a,l),h=n.radius+o.radius;if(c<h&&c>1e-4){let u=(h-c)/2,f=a/c,d=l/c;n.pos.x-=f*u,n.pos.z-=d*u,o.pos.x+=f*u,o.pos.z+=d*u}}for(let r of this.walkers){let o=n.pos.x-r.pos.x,a=n.pos.z-r.pos.z,l=Math.hypot(o,a),c=n.radius+r.radius;l<c&&l>1e-4&&(n.pos.x+=o/l*(c-l),n.pos.z+=a/l*(c-l))}}}let e=this.ctx.colliders.filter(i=>i.solid||i.tag==="wall"||i.tag==="pole");this.toktok&&e.push(this.toktok.collider);for(let i of t){if(!i.active&&i.state!=="leaving"&&i.state!=="returning"&&i.state!=="fetch")continue;let n=i.radius;for(let r of e){if(r.min.y>1.2)continue;let o=Bt(i.pos.x,r.min.x,r.max.x),a=Bt(i.pos.z,r.min.z,r.max.z),l=i.pos.x-o,c=i.pos.z-a,h=Math.hypot(l,c);if(h<n)if(h>1e-4)i.pos.x=o+l/h*n,i.pos.z=a+c/h*n;else{let u=[[r.min.x-n-i.pos.x,0],[r.max.x+n-i.pos.x,0],[0,r.min.z-n-i.pos.z],[0,r.max.z+n-i.pos.z]];u.sort((f,d)=>Math.hypot(...f)-Math.hypot(...d)),i.pos.x+=u[0][0],i.pos.z+=u[0][1]}}if(i.active){let r=this.ctx.bounds;i.pos.x=Bt(i.pos.x,r.minX,r.maxX),i.pos.z=Bt(i.pos.z,r.minZ,r.maxZ)}i.sync()}}updateBall(t,e){let i=this.ball,n=this.owner;if(n&&(!n.active||n.state==="fallen"||n.state==="nutmegged")&&this.loseBall(n,2),this.owner){let l=this.owner;if(l.state==="gkhold"||l.isGK&&l.anim.isPlaying("throw"))l.char.J.rHand.getWorldPosition(Ue),l.char.J.lHand.getWorldPosition(ge),Ue.add(ge).multiplyScalar(.5),l.fwd(ge),i.pos.set(Ue.x+ge.x*.12,Math.max(i.r,Ue.y),Ue.z+ge.z*.12),i.vel.set(0,0,0);else{l.fwd(ge);let c=Math.hypot(l.vel.x,l.vel.z),h=(l.anim.phase%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2),f=.36+Bt((c-1.2)*.13,0,.8)*(1-h)*(1-h*.3),d=l.pos.x+ge.x*f,g=l.pos.z+ge.z*f,x=1-Math.exp(-(c>1.5?11:22)*t);i.pos.x+=(d-i.pos.x)*x,i.pos.z+=(g-i.pos.z)*x,i.pos.y=i.r,i.vel.set(l.vel.x+ge.x*.5,0,l.vel.z+ge.z*.5)}i.update(t,null,!0),e&&this.updateSteals(t);return}let r=this.dynColliders.length||this.toktok?[...this.ctx.colliders,...this.toktok?[this.toktok.collider]:[]]:this.ctx.colliders;if(i.update(t,r,!1),!e&&this.state!=="freekick"||(this.ballVsPeople(),!e))return;let o=null,a=1/0;for(let l of this.allPlayers){if(!l.active||l.cool.touch>0||l.state!=="play"&&l.state!=="dive"&&!(l.state==="kick"&&!l.pending)||this.reserved&&this.reserved.p!==l)continue;l.fwd(ge);let c=l.pos.x+ge.x*.28,h=l.pos.z+ge.z*.28,u=Ce(c,h,i.pos.x,i.pos.z),f=l.isGK&&this.inOwnBox(l)?l.state==="dive"?1.25:.95:0,d=Math.max(Pe.controlDist,f),g=f?2.3:.75;u<d&&i.pos.y<g&&u<a&&(a=u,o=l)}o&&this.touchBall(o)}inOwnBox(t){let e=this.ownGoal(t.team);return Math.abs(t.pos.x-e.x)<4.5&&Math.abs(t.pos.z)<e.hw+3}touchBall(t){let e=this.ball,i=Math.hypot(e.vel.x-t.vel.x,e.vel.z-t.vel.z);if(t.isGK&&this.inOwnBox(t)){let o=t.ctrl?.8:this.aiSkill(t),a=e.speed()>9&&e.lastKickTeam!==t.team;if(!a||re(Bt(o*1.15-(e.speed()-12)*.04,.25,.95))){if(this.owner=t,this.pendingPass=null,e.lastTouch=t,e.lastKickTeam=t.team,t.gkCatch(),a){ct.play("save"),this.say(t,te(qt.save),{color:"#ffd23f"});for(let l of this.npcs)l.cheer&&l.cheer(1.5)}t.ai.holdT=0;return}e.vel.x*=-.45,e.vel.z=e.vel.z*.5+et(-4,4),e.vel.y=Math.abs(e.vel.y)*.5+2,t.cool.touch=.5,e.lastTouch=t,ct.play("save"),this.say(t,"\u0635\u062F\u0651\u0647\u0627!",{color:"#ffd23f"});return}let n=this.pendingPass&&this.pendingPass.target===t,r=Bt(1.25-(i-9)*.06*(1/t.mods.control)+(n?.35:0),.35,1);if(i>9&&!re(r)){e.vel.x=e.vel.x*-.35+t.vel.x*.5+et(-1.5,1.5),e.vel.z=e.vel.z*-.35+t.vel.z*.5+et(-1.5,1.5),e.vel.y=Math.abs(e.vel.y)*.3+.8,t.cool.touch=.35,e.lastTouch=t,ct.play("bounce",6);return}this.giveBall(t)}updateSteals(t){let e=this.owner;if(!(!e||e.state==="gkhold"||e.cool.steal>0))for(let i of this.teams[1-e.team]){if(!i.active||i.state!=="play"||i.cool.touch>0||i.pulledBy)continue;i.fwd(ge);let n=i.pos.x+ge.x*.3,r=i.pos.z+ge.z*.3;if(Ce(n,r,this.ball.pos.x,this.ball.pos.z)>.68)continue;let a=i.ctrl?i.pressing?1.7:1:this.aiLevel(i.team).steal,l=Pe.stealPerSec*a*(e.wantSprint?1.25:1)/(e.mods.control*(e.ctrl?1.15:1));if(Math.random()<l*t){this.owner=null,ct.play("pass",.5),this.giveBall(i),e.cool.touch=.5;return}}}ballVsPeople(){let t=this.ball,e=t.pos,i=(n,r,o,a,l)=>{if(e.y>a)return;let c=e.x-n,h=e.z-r,u=Math.hypot(c,h),f=o+t.r;if(u>=f||u<1e-4)return;let d=c/u,g=h/u;e.x=n+d*f,e.z=r+g*f;let x=t.vel.x*d+t.vel.z*g;x<0&&(t.vel.x-=1.5*x*d,t.vel.z-=1.5*x*g,l&&l(-x))};for(let n of this.walkers)i(n.pos.x,n.pos.z,n.radius,n.height,r=>{n.hitByBall(r),ct.play("bounce",r)});this.bike&&i(this.bike.pos.x,this.bike.pos.z,.5,2.2,n=>{n>3&&this.bike.hitByBall()});for(let n of this.animals)n.hit&&i(n.g.position.x,n.g.position.z,.6,1,r=>{r>2.5&&n.hit()});for(let n of this.allPlayers)n.active&&(n.state==="fallen"||n.state==="slide"||t.pos.y>.75&&t.pos.y<2&&n.cool.touch<=0&&!(n.isGK&&this.inOwnBox(n))&&Ce(n.pos.x,n.pos.z,e.x,e.z)<.42&&(t.vel.x=t.vel.x*-.25+n.vel.x*.6,t.vel.z=t.vel.z*-.25+n.vel.z*.6,t.vel.y=Math.max(.5,t.vel.y*-.2),n.cool.touch=.3,t.lastTouch=n,t.lastKickTeam=n.team,ct.play("bounce",5)))}onSlide(t){ct.play("slide"),this.fx.puff(Ue.set(t.pos.x,.1,t.pos.z),{n:4,size:.5,life:.7})}updateSlides(){let t=this.ball;for(let e of this.allPlayers){if(e.state!=="slide"||e.stateT<.05||e.stateT>.78)continue;e.fwd(ge);let i=e.pos.x+ge.x*.6,n=e.pos.z+ge.z*.6;if(Math.random()<.3&&this.fx.puff(Ue.set(e.pos.x,.05,e.pos.z),{n:1,size:.45,life:.6,up:.3}),!e.slideTouchedBall&&Ce(i,n,t.pos.x,t.pos.z)<.7&&t.pos.y<.55){if(e.slideTouchedBall=!0,e.slideHit.size===0&&(e.slideBallFirst=!0),this.owner){let r=this.owner;this.owner=null,r.cool.touch=.6}t.kick(ge.x*7+et(-2,2),1.2,ge.z*7+et(-2,2),e),e.cool.touch=.4,ct.play("kick",.6)}for(let r of this.allPlayers){if(r===e||!r.active||e.slideHit.has(r)||r.down||r.state==="gkhold"&&!1||Ce(i,n,r.pos.x,r.pos.z)>.78&&Ce(e.pos.x+ge.x*.25,e.pos.z+ge.z*.25,r.pos.x,r.pos.z)>.6)continue;e.slideHit.add(r);let o=r.team!==e.team&&!e.slideBallFirst;if(r.fall(),ct.play("thud"),(r.ctrl||e.ctrl)&&this.buzz([60,40,90]),this.after(.25,()=>ct.play("ouch")),this.rig.shake(.25,.4),this.fx.dizzy(()=>r.headPos(Ue.set(0,0,0)).add(ge.set(0,-.6,0)),2.6),this.fx.puff(Ue.set(r.pos.x,.15,r.pos.z),{n:6,size:.6}),r.team===e.team){this.say(r,"\u0625\u0646\u062A \u0628\u062A\u0643\u0639\u0628\u0644\u0646\u064A \u0623\u0646\u0627\u061F!");continue}if(this.addScandal(e.team,o?Pe.scandalTackle:Pe.scandalCleanTrip),this.after(.5,()=>this.say(r,te(qt.hurt),{color:"#ffe0e0"})),this.fx.impact(Ue.set(r.pos.x,.9,r.pos.z)),o){this.slowmo(.35,.45),e.stats.fouls++,this.stats.fouls[e.team]++;let a=this.nearestTo(r.pos,r.team,l=>l!==r)||r;this.say(a,te(qt.foul),{color:"#ffd23f",big:!0});for(let l of this.npcs)l.cheer&&re(.4)&&l.cheer(1);this.headmasterWatching&&this.expel(e),this.callFoul(r.team,r.pos,e,r)}}}}onPullStart(t,e){ct.play("rip"),this.say(e,te(qt.pull),{color:"#ffe0e0"}),this.headmasterWatching&&this.expel(t);let i=new Y(new fe(.22,.12,1),new Rt({color:e.char.look.top.color,roughness:.9}));i.castShadow=!0,this.scene.add(i),this.stretch.set(t,{m:i,t:e})}onPullEnd(t,e,i){let n=this.stretch.get(t);n&&(this.scene.remove(n.m),this.stretch.delete(t)),i&&e.active&&(e.fall(2.2),ct.play("thud"),this.addScandal(t.team,15),this.stats.fouls[t.team]++,t.stats.fouls++,this.say(e,"\u0648\u0642\u0639\u0646\u064A \u0645\u0646 \u0627\u0644\u0641\u0627\u0646\u0644\u0629!",{color:"#ffe0e0"}),this.state==="play"&&this.callFoul(e.team,e.pos,t,e))}updatePulls(t){for(let e of this.allPlayers){if(!e.pullTarget)continue;let i=e.pullTarget;e.pullT+=t,this.addScandal(e.team,Pe.scandalPullPerSec*t,!0);let n=Ce(e.pos.x,e.pos.z,i.pos.x,i.pos.z);if(n>.9){let r=Math.min(1,(n-.9)*4*t*10);e.pos.x+=(i.pos.x-e.pos.x)/n*r*.2,e.pos.z+=(i.pos.z-e.pos.z)/n*r*.2}i.hasBall&&e.pullT>.7&&this.loseBall(i,1.5),(n>1.9||e.pullT>Pe.pullMax||!i.active||i.down||e.down)&&e.releasePull(e.pullT>1.2&&re(.35))}}updateStretch(){for(let[t,e]of this.stretch){t.char.J.rHand.getWorldPosition(Ue),e.t.char.J.spine.getWorldPosition(ge),ge.y+=.25*e.t.char.scale;let i=Ue.distanceTo(ge);e.m.position.copy(Ue).add(ge).multiplyScalar(.5),e.m.lookAt(ge),e.m.scale.set(1,1,Math.max(.05,i))}}addScandal(t,e,i=!1){let n=this.scandal[t];this.scandal[t]=Math.min(100,this.scandal[t]+e),n<100&&this.scandal[t]>=100&&this.queue.push({type:re(.5)?"fight":"mom",team:t}),!i&&e>10&&this.ui.scandalPulse(t)}callFoul(t,e,i,n){if(this.state!=="play")return;this.foulInfo={fouler:i,victim:n};let r=e.clone();this.after(.65,()=>{this.state==="play"&&this.startFreekick(t,r)})}startFreekick(t,e){let i=this.ctx.bounds,n=Bt(e.x,i.minX+1.2,i.maxX-1.2),r=Bt(e.z,i.minZ+1,i.maxZ-1);if(this.owner){let o=this.owner;this.owner=null,o.state==="gkhold"&&o.setState("play")}this.ball.place(n,r),this.freekick={team:t,x:n,z:r},this.setState("freekick"),ct.play("whistle");for(let o of this.allPlayers)o.pullTarget&&o.releasePull();this.queue.length&&this.runQueuedEvent()}updateFreekick(t){let e=this.freekick;if(this.state!=="freekick")return;let i=this.nearestTo(this.ball.pos,e.team,n=>!n.isGK&&n.state==="play");if(i){i.want.set(0,0);let n=i.dir;Ue.set(e.x-n*.55,0,e.z);let r=Ue.x-i.pos.x,o=Ue.z-i.pos.z,a=Math.hypot(r,o);a>.2&&(i.want.set(r/a,o/a),i.wantSprint=a>3),i.lookAt=this.ball.pos}this.stateT>1.6&&!this.eventActive&&(this.setState("play"),this.freekick=null,i&&(i.place(e.x-i.dir*.45,e.z,i.dir>0?Math.PI/2:-Math.PI/2),this.giveBall(i),this.humanTeams[e.team]&&this.setControl(e.team,i)),ct.play("whistle"))}runQueuedEvent(){let t=this.queue.shift();if(!t)return;let e=t.team;t.type==="fight"?this.startFight(e):this.momCalls(e),this.scandal[e]=0}startFight(t){let e=this.foulInfo?.fouler?.active?this.foulInfo.fouler:this.teams[t].find(l=>l.active&&!l.isGK),i=this.foulInfo?.victim?.active?this.foulInfo.victim:this.nearestTo(e.pos,1-t,l=>!l.isGK);if(!e||!i)return;let n=Ue.copy(e.pos).add(i.pos).multiplyScalar(.5).clone(),r=[this.nearestTo(n,t,l=>l!==e&&!l.isGK),this.nearestTo(n,1-t,l=>l!==i&&!l.isGK)].filter(Boolean),o=[e,i,...r];this.eventActive={type:"fight",t:0,who:o,center:n},this.setState("event"),this.stats.fights++,this.focusOverride=n,this.rig.zoomTarget=.78;for(let l of o)l.releasePull(),this.owner===l&&(this.owner=null),l.setState("hidden"),l.show(!1);this.fx.fight(n,4),ct.play("fight"),this.rig.shake(.18,3.5),this.ui.banner("\u062E\u0646\u0627\u0642\u0629!",`${e.name} \u0648${i.name} \u0627\u062A\u062E\u0627\u0646\u0642\u0648\u0627`,"fight");for(let l of this.npcs)l.cheer&&l.cheer(4);let a=this.npcs.filter(l=>l instanceof ho);a.length&&this.say(te(a),te(qt.fight),{color:"#fff"})}momCalls(t){let e=this.teams[t].filter(n=>n.active&&!n.isGK);if(e.length<=1){this.startFight(t);return}let i=this.foulInfo?.fouler&&e.includes(this.foulInfo.fouler)?this.foulInfo.fouler:te(e);if(this.stats.momCalls++,this.mom)this.mom.call(i.name),this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.after(2.6,()=>{this.focusOverride=null});else{let n=this.ctx.doors[0]||new _(0,0,this.ctx.bounds.minZ);this.say({headPos:(r=new _)=>r.set(n.x,3.2,n.z)},qt.momCall(i.name),{color:"#ffe9f0",dur:3.6}),ct.play("mom")}this.ui.banner("\u0623\u0645\u0647 \u0646\u0627\u062F\u062A \u0639\u0644\u064A\u0647!",`${i.name} \u0644\u0627\u0632\u0645 \u064A\u0637\u0644\u0639 \u0627\u0644\u0628\u064A\u062A`,"mom"),this.after(1.5,()=>this.say(i,te(qt.momCallOut))),this.sendAway(i,40,()=>this.ui.toast(qt.momBack(i.name)))}expel(t){!t.active||t.expelled||(t.expelled=!0,this.headmaster?.scold(t),this.ui.banner("\u0627\u062A\u0637\u0631\u062F!",qt.sentOff(t.name)+" (\u0627\u0644\u0646\u0627\u0638\u0631 \u0634\u0627\u0641\u0647)","red"),this.sendAway(t,45,()=>{t.expelled=!1,this.ui.toast(`${t.name} \u0631\u062C\u0639 \u0627\u0644\u0645\u0644\u0639\u0628`)}))}sendAway(t,e,i){if(t.releasePull(),this.owner===t&&this.loseBall(t,1),t.ctrl){let r=t.team;t.ctrl=null,t.setMarker(null),this.after(0,()=>this.switchNext(r))}let n=this.nearestDoor(t.pos);t.pending=null,t.anim.stop(),t.setState("leaving"),t.walkTo=n,t.onArrive=()=>{t.setState("out"),t.show(!1),this.after(e,()=>{t.place(n.x,n.z),t.show(!0),t.setState("returning"),t.walkTo=new _(n.x*.8,0,Bt(n.z,this.ctx.bounds.minZ+1,this.ctx.bounds.maxZ-1)),t.onArrive=()=>{t.setState("play"),i&&i()}})}}nearestDoor(t){let e=null,i=1/0;for(let n of this.ctx.doors){let r=Ce(n.x,n.z,t.x,t.z);r<i&&(i=r,e=n)}return(!e||i>25)&&(e=new _(t.x,0,this.ctx.bounds.maxZ+2.5)),e.clone()}updateEvent(t){let e=this.eventActive;if(!e){this.setState("play");return}if(e.t+=t,e.type==="fight"&&e.t>4.2){this.ui.banner(te(qt.fightOver),"","small");for(let i of e.who){i.show(!0),i.setState("dazed",2.6),i.anim.play("dazed");let n=i;this.fx.dizzy(()=>n.headPos(Ue.set(0,0,0)),2.6),i.pos.x+=et(-1,1),i.pos.z+=et(-1,1)}this.focusOverride=null,this.rig.zoomTarget=1,this.eventActive=null,this.setState("freekick"),this.stateT=.3}else e.type==="balcony"?e.t>4.2&&!this.ball.frozen&&this.endBallEvent():e.type==="window"?e.t>2.6&&(this.fleeFrom=null,this.focusOverride=null,this.eventActive=null,this.startFreekick(1-e.team,new _(e.pos.x*.7,0,0))):e.type==="roof"?this.updateRoofFetch(e,t):e.type==="argue"&&this.updateArgue(e)}endBallEvent(){this.eventActive=null,this.focusOverride=null,this.setState("play")}updateAirIntents(t){let e=this.ball;for(let i of this.allPlayers){if(!i.active)continue;if(!i.ctrl&&!this.owner&&e.pos.y>.4&&i.canAct&&!i.isGK&&Ce(i.pos.x,i.pos.z,e.pos.x,e.pos.z)<1.1&&e.speed()>3&&!i.airIntent){let o=this.goalFor(i.team),a=Math.abs(o.x-i.pos.x)<this.def.halfL*.6;i.airIntent={kind:a?"shot":"pass",t:.3,x:0,z:0}}let n=i.airIntent;n&&(n.t-=t,(i.airPlay(n.kind,n.x,n.z)||n.t<=0)&&(i.airIntent=null))}}afterGoal(){for(let t of this.allPlayers)t.stopCelebrate(),t.show(t.active);this.recorder.reset(),this.opts.rule.type==="goals"&&Math.max(...this.score)>=this.opts.rule.n?this.endMatch():this.opts.rule.type==="time"&&this.clock<=0?this.endMatch():(this.placeKickoff(this.concededTeam),this.setState("kickoff"))}checkGoal(){let t=this.ball.pos;for(let e of this.ctx.goals){if(this.checkArgue(e))return;if(!(!(e.type==="chalk"?Math.abs(t.x)>Math.abs(e.x)-this.ball.r-.08:Math.abs(t.x)>Math.abs(e.x)+(e.type==="frame"?.15:.05))||Math.sign(t.x)!==Math.sign(e.x))){if(Math.abs(t.z)<e.hw-.02&&t.y<e.h){let n=e.side>0?0:1;this.goalScored(n,e);return}this.lastShot&&this.time-this.lastShot.t<2.5&&this.lastShot.team===(e.side>0?0:1)&&Math.abs(t.z)<e.hw+2.5&&(this.lastShot=null,this.say(this.nearestTo(t,e.side>0?0:1)||this.ball,te(qt.miss)),ct.play("ooh"))}}}checkArgue(t){if(this.pens||this.opts.demo||t.type==="frame"||this.time<(this.argueAt||0))return!1;let e=this.ball.pos,i=Math.abs(t.x)+.05;if(Math.sign(e.x)!==Math.sign(t.x)||Math.abs(e.x)<i||Math.abs(e.x)>i+.7)return!1;let n=Math.abs(e.z),r=n<t.hw&&e.y>=t.h*.82&&e.y<t.h*1.45,o=e.y<t.h&&n>t.hw-.22&&n<t.hw+.18;if(!r&&!o||(this.argueAt=this.time+20,!re(.7)))return!1;let a=t.side>0?0:1,l=r?1-(e.y-t.h*.82)/(t.h*.63):e.y<t.h&&n<t.hw?.75:.3;return this.startArgue(a,t,r?"high":"post",Bt(l,.15,.85)),!0}startArgue(t,e,i,n){let r=this.ball;r.frozen=!0,r.vel.set(0,0,0),this.owner=null,this.pendingPass=null;for(let a of this.allPlayers)a.releasePull();this.setState("event");let o=new _(e.x*.9,0,0);this.eventActive={type:"argue",t:0,team:t,g:e,kind:i,k:n,spot:o,said:0},this.focusOverride=o.clone().setY(1),this.rig.zoomTarget=.8,ct.play("whistle"),this.ui.banner(i==="high"?"\u0639\u0627\u0644\u064A\u0629 \u0648\u0644\u0627 \u062C\u0648\u0646\u061F":"\u062E\u0628\u0637\u062A \u0641\u064A \u0627\u0644\u0637\u0648\u0628\u0629\u061F","\u0627\u0644\u0639\u064A\u0627\u0644 \u0627\u062A\u062E\u0627\u0646\u0642\u0648\u0627 \u0639\u0644\u0649 \u0627\u0644\u0642\u0627\u0646\u0648\u0646","small"),this.eventActive.who=[0,1].flatMap(a=>this.teams[a].filter(l=>l.active&&l.state!=="fallen").sort((l,c)=>l.pos.distanceToSquared(o)-c.pos.distanceToSquared(o)).slice(0,2));for(let a of this.eventActive.who)a.faceTo(o),a.anim.play("point")}updateArgue(t){let e=t.kind==="high"?qt.argueGoalHigh:qt.argueGoalPost,i=t.kind==="high"?qt.argueHigh:qt.arguePost;if(t.t>.5+t.said*.75&&t.said<4){let n=t.who.filter(o=>o.team===(t.said%2===0?t.team:1-t.team)),r=n[Math.floor(t.said/2)%Math.max(1,n.length)];r&&(this.say(r,te(t.said%2===0?e:i)),r.anim.play(t.said%2?"point":"wave")),t.said++,r&&this.addScandal(r.team,4,!0)}if(t.t>3.8&&!t.ruled){t.ruled=!0,t.good=Math.random()<t.k;let n=this.npcs.filter(o=>o.cheer).sort((o,a)=>o.pos.distanceToSquared(t.spot)-a.pos.distanceToSquared(t.spot))[0],r=te(t.good?qt.bigGood:qt.bigBad);n&&(this.say(n,"\u0627\u0644\u0643\u0628\u064A\u0631: "+r,{big:!0,color:"#ffd23f"}),n.cheer(1.5)),this.ui.banner(t.good?"\u0627\u0644\u0643\u0628\u064A\u0631 \u0642\u0627\u0644: \u062C\u0648\u0646!":"\u0627\u0644\u0643\u0628\u064A\u0631 \u0642\u0627\u0644: \u0645\u0634 \u062C\u0648\u0646",n?"":r,t.good?"goal":"small",t.team);for(let o of t.who)o.anim.play(o.team===t.team===t.good?"cheer":"sad")}if(t.t>5.4){if(this.eventActive=null,this.focusOverride=null,this.rig.zoomTarget=1,this.ball.frozen=!1,t.good){this.ball.place(t.g.x+Math.sign(t.g.x)*.6,0),this.goalScored(t.team,t.g);return}let n=this.goalkeeper(1-t.team)||this.teams[1-t.team].find(o=>o.active),r=Math.sign(t.g.x);n.place(t.g.x-r*1.6,0,r>0?-Math.PI/2:Math.PI/2),n.setState("play"),this.ball.place(n.pos.x-r*.4,n.pos.z),this.giveBall(n),this.setState("play")}}goalScored(t,e){this.score[t]++,this.lastGoal=e,this.replayed=!1,this.concededTeam=1-t;let i=this.ball.lastTouch,n=i&&i.team===t?i:null,r=i&&i.team!==t;n&&n.stats.goals++,this.stats.goals.push({team:t,name:n?n.name:i?i.name:"\u061F",own:r,t:this.clock}),this.scorer=n||this.teams[t].find(a=>a.active&&!a.isGK)||null,this.owner=null,this.pendingPass=null,this.setState("goal");for(let a of this.allPlayers)a.releasePull();let o={bricks:qt.goalBricks,slippers:qt.goalSlippers,chalk:qt.goalChalk,tires:qt.goalTires,crates:qt.goalCrates,bags:qt.goalBags}[e.type]||[];this.ui.banner(te(qt.goal),r?`\u062C\u0648\u0646 \u0641\u064A \u0646\u0641\u0633\u0647! (${i.name})`:`${this.scorer?this.scorer.name:""} ${o.length?"\u2022 "+te(o):""}`,"goal",t),ct.play("cheer"),this.buzz(this.humanTeams[t]?[120,60,120,60,240]:[200]),ct.play("whistle"),this.rig.zoomTarget=.82,this.rig.shake(.2,.5),this.slowmo(.3,.9),this.after(.5,()=>{this.ball.vel.multiplyScalar(.2)});for(let a of this.allPlayers)!a.active||a.state==="fallen"||(a===this.scorer?a.celebrate("airplane"):a.team===t?a.celebrate("jump"):a.celebrate("sad"));for(let a of this.npcs)a.cheer&&a.cheer(3.5);this.game.onEvent?.("goal",t)}checkSpecialBall(){let t=this.ball;if(this.mom)for(let e of this.ctx.balconies){let i=t.pos;if(i.x>e.min.x&&i.x<e.max.x&&i.y>e.min.y&&i.y<e.max.y&&i.z>e.min.z&&i.z<e.max.z&&this.mom.balc===e){this.ballOnBalcony();return}}this.ctx.ballOut&&this.ctx.ballOut(t.pos)&&t.pos.y>this.ctx.extras.parapet.h*.6&&this.ballOffRoof(),t.pos.y<-2&&this.ballOffRoof()}ballOnBalcony(){let t=this.ball;t.frozen=!0,t.vel.set(0,0,0),this.owner=null,this.setState("event"),this.eventActive={type:"balcony",t:0},this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.rig.zoomTarget=.85,this.ui.banner(te(qt.balcony),"","small"),ct.play("ooh"),this.after(.7,()=>this.mom.catchBall())}onBalconyReturn(){this.focusOverride=null,this.rig.zoomTarget=1,this.after(.3,()=>{this.state==="event"&&this.endBallEvent()})}onBallHit(t,e,i){if(t.tag==="post")ct.play(t.metal?"metal":"brick"),e>6&&this.say(this.ball.lastTouch||this.ball,t.metal?"\u0627\u0644\u0639\u0627\u0631\u0636\u0629!":"\u0627\u0644\u0637\u0648\u0628\u0629!");else if(t.tag==="wall"||t.tag==="obj"||t.tag==="balconyFloor")ct.play("wall",e);else if(t.tag==="toktok"&&this.toktok){ct.play("metal");let n=this.toktok;this.say({headPos:(r=new _)=>r.set(n.pos.x,2.6,n.pos.z)},"\u062D\u0627\u0633\u0628 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643 \u064A\u0627 \u0639\u0645!")}else if(t.tag==="sheep"){let n=this.animals.find(r=>r.hit);n&&n.hit()}if(t.tag==="wall"&&e>9.5&&this.state==="play"){for(let n of this.ctx.windows)if(!n.broken&&!(Math.abs(i.z-n.z)>.4||i.x<n.x0-.05||i.x>n.x1+.05||i.y<n.y0-.05||i.y>n.y1+.05)){this.breakWindow(n);break}}}breakWindow(t){t.broken=!0;let e=t.mesh.material;e.map=_u(),e.color.set("#ffffff"),e.emissiveIntensity=0,e.needsUpdate=!0,this.fx.shatter(Ue.set((t.x0+t.x1)/2,(t.y0+t.y1)/2,t.z+t.face*.1),t.face),ct.play("glass"),this.buzz([40,30,40,30,80]),this.rig.shake(.3,.5),this.stats.windows++;let i=this.ball.lastKickTeam>=0?this.ball.lastKickTeam:0;this.addScandal(i,Pe.scandalWindow);let n=new _((t.x0+t.x1)/2,t.y1+.6,t.z+t.face*.3);this.after(.4,()=>this.say({headPos:(r=new _)=>r.copy(n)},te(qt.windowBreak),{color:"#ffe0e0",dur:3})),this.ui.banner("\u0627\u0644\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631!",te(qt.run),"red"),this.owner=null,this.setState("event"),this.eventActive={type:"window",t:0,team:i,pos:n},this.fleeFrom=n;for(let r of this.allPlayers)r.active&&re(.5)&&this.after(et(.2,.9),()=>this.say(r,te(qt.run)))}ballOffRoof(){if(this.state!=="play")return;let t=this.ball,e=t.lastKickTeam>=0?t.lastKickTeam:0;t.frozen=!0,t.mesh.visible=!1,t.blob.visible=!1,t.place(0,0,-50),this.owner=null,this.setState("event");let i=this.nearestTo(this.ctx.doors[0]||new _,e,r=>!r.isGK&&r.state==="play")||this.teams[e][1];this.eventActive={type:"roof",t:0,team:e,fetcher:i,phase:0},this.ui.banner(te(qt.roofDrop),`${i.name} \u0646\u0627\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627`,"small"),ct.play("ooh"),i.ctrl&&(i.ctrl=null,i.setMarker(null),this.after(0,()=>this.switchNext(e)));let n=this.nearestDoor(i.pos);i.setState("fetch"),i.walkTo=n,i.onArrive=()=>{i.setState("fetched"),i.show(!1)},this.eventActive.door=n}updateRoofFetch(t){let e=t.fetcher;if(t.phase===0&&e.state==="fetched"&&(t.phase=1,t.t=0),t.phase===1&&t.t>3){t.phase=2,e.place(t.door.x,t.door.z),e.show(!0),e.setState("play"),this.say(e,te(qt.roofBack));let i=this.ball;i.mesh.visible=!0,i.blob.visible=!0,i.frozen=!1,this.eventActive=null,this.startFreekick(1-t.team,new _(t.door.x+3,0,t.door.z-1))}}onHeadmaster(t){this.headmasterWatching=t,t&&(this.ui.banner(te(qt.headmaster),"\u0623\u064A \u0641\u0627\u0648\u0644 \u062F\u0644\u0648\u0642\u062A\u064A = \u0637\u0631\u062F!","warn"),ct.play("whistle")),this.ui.headmaster(t)}updateNPCs(t){for(let e of this.npcs)e.update(t);this.walkerT-=t,this.walkerT<=0&&this.ctx.walkerPaths.length&&this.walkers.length<3&&(this.walkerT=et(7,16),this.walkers.push(new hl(this,te(this.ctx.walkerPaths))));for(let e=this.walkers.length-1;e>=0;e--){let i=this.walkers[e];i.update(t),i.done&&(i.remove(),this.walkers.splice(e,1))}if(this.toktokT-=t,this.toktokT<=0&&!this.toktok&&this.state==="play"&&this.ctx.extras.toktok&&(this.toktok=new dl(this,this.ctx.extras.toktok),this.ui.banner(te(qt.toktok),"","warn"),ct.play("horn"),ct.toktokMusic(!0)),this.toktok){this.toktok.update(t);for(let e of this.allPlayers){if(!e.active||e.ctrl)continue;let i=e.pos.z-this.toktok.pos.z,n=(e.pos.x-this.toktok.pos.x)*this.toktok.dir;n>-2&&n<6&&Math.abs(i)<2.2&&(e.want.y+=Math.sign(i||1)*1.2)}this.toktok.done&&(this.toktok.remove(),this.toktok=null,this.toktokT=et(60,100),ct.toktokMusic(!1))}this.bikeT-=t,this.bikeT<=0&&!this.bike&&(this.bike=new ul(this,this.ctx.extras.bike.z)),this.bike&&(this.bike.update(t),this.bike.done&&(this.bike.remove(),this.bike=null,this.bikeT=et(35,60)))}onFootstep(t,e){(this.opts.mapId==="yard"||this.opts.mapId==="beach")&&e>.6&&Math.random()<.35&&this.fx.puff(Ue.set(t.pos.x,.05,t.pos.z),{n:1,size:.35,life:.5,up:.2,opacity:.45})}say(t,e,i={}){this.ui.bubble(t,e,i)}startPens(){let t=this.ctx.goals.find(n=>n.side>0),e={bricks:6,slippers:5,chalk:6.5,frame:7.5}[t.type]||6;this.pens={goal:t,spotX:t.x-Math.sign(t.x)*e,kicks:[[],[]],turn:this.kickTeam===0?1:0,phase:"setup",t:0,aim:0,charge:0},this.setState("pens"),this.owner=null;for(let n of this.allPlayers)n.releasePull(),n.stopCelebrate(),!(!n.active&&n.state!=="out")&&(n.show(!0),n.setState("play"));ct.play("whistle",2),this.ui.banner("\u0636\u0631\u0628\u0627\u062A \u062C\u0632\u0627\u0621!","\u0627\u0644\u062A\u0639\u0627\u062F\u0644 \u0628\u064A\u062A\u062D\u0633\u0645 \u0645\u0646 \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062C\u0632\u0627\u0621","warn");let i=new Y(new pi(.12,16),new $t({color:"#f4f2ea"}));i.rotation.x=-Math.PI/2,i.position.set(this.pens.spotX,.012,0),this.scene.add(i),this.pens.aimMark=new Y(new ir(.11,.16,24),new $t({color:"#ffd23f",depthTest:!1,transparent:!0,opacity:.9})),this.pens.aimMark.renderOrder=12,this.pens.aimMark.rotation.y=-Math.PI/2*Math.sign(t.x),this.pens.aimMark.visible=!1,this.scene.add(this.pens.aimMark),this.ui.pens(this.pens,this)}pensSetupKick(){let t=this.pens,e=t.goal,i=Math.sign(e.x),n=t.turn,r=1-n,o=t.kicks[n].length,a=this.teams[n].filter(c=>!c.isGK);t.kicker=a[(o+1)%a.length]||this.teams[n][1],t.keeper=this.teams[r].find(c=>c.isGK)||this.teams[r][0],this.allPlayers.forEach((c,h)=>{c===t.kicker||c===t.keeper||(c.place(-i*1.5+(c.team?-1:1)*.6,-this.def.halfW*.7+h%8*(this.def.halfW*1.4/7),i>0?Math.PI/2:-Math.PI/2),c.want.set(0,0))}),t.kicker.place(t.spotX-i*.75,0,i>0?Math.PI/2:-Math.PI/2),t.keeper.place(e.x-i*.5,0,i>0?-Math.PI/2:Math.PI/2),t.keeper.setState("play"),t.keeper.anim.play("ready"),this.owner=null,this.ball.place(t.spotX,0),this.ball.vel.set(0,0,0),this.giveBall(t.kicker),t.kicker.cool.steal=99,t.phase="aim",t.t=0,t.aim=0,t.charge=0,t.lift=.3,t.result=null,t.dove=!1;let l=this.controllers[n];t.humanKick=!!l,t.humanKeep=!!this.controllers[r],t.aiAim=re(.15)?0:(re(.5)?1:-1)*et(.45,.95),t.aiPower=et(.55,.85),t.aimMark.visible=t.humanKick,this.focusOverride=new _((t.spotX+e.x)/2,0,0),this.rig.zoomTarget=.62,this.say(t.kicker,t.humanKick?"\u064A\u0644\u0627 \u0628\u064A\u0646\u0627..":"\u0647\u062C\u064A\u0628\u0647\u0627!"),this.ui.pens(t,this),(t.humanKick||t.humanKeep)&&this.ui.toast(t.humanKick?"\u0648\u062C\u0651\u0647 \u0628\u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0648\u062F\u0648\u0633 \u0634\u0648\u0637\u0629 (\u0643\u0644 \u0645\u0627 \u062A\u0641\u0636\u0644 \u062F\u0627\u0633\u0633 \u0623\u0642\u0648\u0649)":"\u0625\u0646\u062A \u0627\u0644\u062D\u0627\u0631\u0633: \u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0633\u0627\u0639\u0629 \u0627\u0644\u0634\u0648\u0637\u0629 \u0628\u064A\u062D\u062F\u062F \u0647\u062A\u0646\u0637 \u0641\u064A\u0646")}updatePens(t){let e=this.pens;e.t+=t;let i=e.goal,n=Math.sign(i.x);if(e.phase==="setup"){e.t>(e.kicks[0].length+e.kicks[1].length===0?2.2:1.2)&&this.pensSetupKick();return}let r=e.kicker,o=e.keeper;if(e.phase==="aim"){o.lookAt=this.ball.pos;let a=this.controllers[r.team];e.humanKick?(e.aim=Bt(e.aim+a.axis.z*t*1.6,-1,1),a.b.shoot.down&&(e.charge=Math.min(1,a.b.shoot.t/.9),this.ui.power(e.charge)),e.aimMark.position.set(i.x-n*.05,.25+e.charge*i.h*.7,e.aim*i.hw*.85),(a.b.shoot.released||e.t>8)&&this.pensKick(Math.max(.35,e.charge),e.aim)):e.t>1.4&&this.pensKick(e.aiPower,e.aiAim);return}if(e.phase==="kick"){if(!e.dove&&!this.owner){e.dove=!0;let a=0,l=this.controllers[o.team];if(e.humanKeep?a=Math.abs(l.axis.z)>.3?Math.sign(l.axis.z):0:a=re(this.aiSkill(o)*.4)?Math.sign(this.ball.vel.z):re(.2)?0:re(.5)?1:-1,a!==0){let c=Math.sin(o.facing);o.dive(Math.sign(a*c)||1,5.5)}}if(!e.result&&e.dove){let a=this.ball.pos;o.char.J.lHand.getWorldPosition(Ue),o.char.J.rHand.getWorldPosition(ge),Math.min(Ue.distanceTo(a),ge.distanceTo(a),Ce(o.pos.x,o.pos.z,a.x,a.z)+Math.abs(a.y-.9))<.42&&this.ball.speed()>2&&(e.result="save",this.ball.vel.x*=-.35,this.ball.vel.z=this.ball.vel.z*.4+et(-3,3),this.ball.vel.y=Math.abs(this.ball.vel.y)*.4+2,ct.play("save"),this.say(o,te(qt.save),{color:"#ffd23f",big:!0}))}if(!e.result){let a=this.ball.pos;(a.x-i.x)*n>(i.type==="chalk"?-this.ball.r-.08:.05)?e.result=Math.abs(a.z)<i.hw-.02&&a.y<i.h?"goal":"miss":(e.t>2.6||this.ball.speed()<.6&&e.t>.8)&&(e.result="miss")}if(e.result&&!e.shown){e.shown=!0;let a=e.result==="goal";e.kicks[r.team].push(a),a?(ct.play("cheer"),this.ui.banner("\u062C\u0648\u0648\u0648\u0646!",`${r.name} \u0633\u062C\u0651\u0644\u0647\u0627`,"goal",r.team),this.buzz([100,50,150])):(ct.play("ooh"),this.ui.banner(e.result==="save"?"\u0635\u062F\u0651\u0647\u0627!":"\u0637\u0627\u0634\u062A!",e.result==="save"?o.name:r.name,"small")),r.anim.play(a?"airplane":"sad"),this.ui.pens(e,this),e.after=0}if(e.shown&&(e.after+=t,e.after>2.2)){r.anim.stop("airplane"),r.anim.stop("sad"),e.shown=!1;let a=this.pensDecided();if(a!==null)return this.finishPens(a);e.turn=1-e.turn,e.phase="setup",e.t=1}}}pensKick(t,e){let i=this.pens;if(i.aimMark.visible=!1,this.ui.power(0),!i.kicker.shoot(t,e,t*.4)){this.giveBall(i.kicker);return}i.phase="kick",i.t=0}pensDecided(){let[t,e]=this.pens.kicks,i=t.filter(Boolean).length,n=e.filter(Boolean).length;if(t.length<=5&&e.length<=5){let r=5-t.length,o=5-e.length;return i+r<n?1:n+o<i?0:t.length===5&&e.length===5&&i!==n?i>n?0:1:null}return t.length===e.length&&i!==n?i>n?0:1:null}finishPens(t){let[e,i]=this.pens.kicks;this.pensResult=[e.filter(Boolean).length,i.filter(Boolean).length],this.pensWinner=t,this.pensDone=!0,this.scene.remove(this.pens.aimMark),this.pens=null,this.focusOverride=null,this.rig.zoomTarget=1,this.state="postpens",this.endMatch()}endMatch(){if(this.state==="end"||this.state==="pens")return;if(this.score[0]===this.score[1]&&!this.opts.demo&&!this.pensDone){this.startPens();return}this.setState("end"),this.owner=null,ct.play("whistle",3);let[t,e]=this.score,i=t>e?0:e>t?1:this.pensWinner??-1;this.winner=i;for(let r of this.allPlayers)r.releasePull(),!(!r.active||r.state==="fallen")&&(r.setState("celebrate"),i!==-1&&r.anim.play(r.team===i?"jump":"sad"));this.scorer=null;let n=this.pensResult?` (\u0636\u0631\u0628\u0627\u062A \u062C\u0632\u0627\u0621 ${le(this.pensResult[0])} - ${le(this.pensResult[1])})`:"";if(this.ui.banner("\u062E\u0644\u0635 \u0627\u0644\u0645\u0627\u062A\u0634!",`${this.teamDef(0).short} ${le(this.score[0])} \u2022 ${this.teamDef(1).short} ${le(this.score[1])}${n}`,"end"),this.ui.pens(null),ct.toktokMusic(!1),this.opts.bet&&i!==-1){let r=this.teams[i].find(o=>o.active&&!o.isGK);r&&this.after(1.2,()=>this.say(r,te(i===0?qt.betWin:qt.betLose)+" "+this.opts.bet.icon,{dur:2.4}))}}dispose(){this.disposed=!0,ct.toktokMusic(!1),ct.stopAmbience(),this.fx.clear(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.ui.matchEnd()}};var Rl=class{constructor(t){this.canvas=t,this.renderer=new js({canvas:t,antialias:!0,alpha:!0}),this.renderer.outputColorSpace=qe,this.renderer.toneMapping=hs,this.renderer.toneMappingExposure=1.2,this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.scene=new Ln,this.camera=new Ye(30,.75,.1,50),this.scene.add(new cs("#fff4e0","#4a3c30",1.6));let e=new Un("#fff1d6",2.4);e.position.set(2,4,3),this.scene.add(e);let i=new Un("#9ec3ff",1.4);i.position.set(-3,2,-3),this.scene.add(i);let n=new Y(new pi(.6,32),new $t({color:"#000",transparent:!0,opacity:.3,depthWrite:!1}));n.rotation.x=-Math.PI/2,this.scene.add(n),this.spin=.4,this.drag=null,this.running=!1,this.t=0,t.addEventListener("pointerdown",o=>{this.drag=o.clientX,t.setPointerCapture?.(o.pointerId)}),t.addEventListener("pointermove",o=>{this.drag!=null&&(this.spin+=(o.clientX-this.drag)*.012,this.drag=o.clientX)});let r=()=>{this.drag=null};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}setLook(t){this.char&&(this.scene.remove(this.char.root),this.char.root.traverse(e=>{e.isSkinnedMesh&&e.geometry.dispose()})),this.char=dr(t),this.anim=new On(this.char),this.scene.add(this.char.root),this.anim.play("wave")}start(){if(this.running)return;this.running=!0,this.last=performance.now();let t=()=>{if(!this.running)return;requestAnimationFrame(t);let e=performance.now(),i=Math.min(.05,(e-this.last)/1e3);this.last=e,this.frame(i)};t()}stop(){this.running=!1}frame(t){let e=this.canvas,i=e.clientWidth||240,n=e.clientHeight||320;(e.width!==Math.round(i*this.renderer.getPixelRatio())||e.height!==Math.round(n*this.renderer.getPixelRatio()))&&(this.renderer.setSize(i,n,!1),this.camera.aspect=i/n,this.camera.updateProjectionMatrix()),this.t+=t,this.drag==null&&(this.spin+=t*.35),this.char&&(this.t>5&&(this.t=0,this.anim.play(["cheer","wave","point"][Math.floor(Math.random()*3)])),this.anim.update(t,0),this.char.root.rotation.y=this.spin,this.char.root.updateMatrixWorld(!0));let r=.95*(this.char?.scale||1);this.camera.position.set(0,r+.1,4.8),this.camera.lookAt(0,r,0),this.renderer.render(this.scene,this.camera)}};var ot=(s,t=document)=>t.querySelector(s),ti=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Yi=new _,br=(s,t)=>`<span>${le(s)}</span><i>-</i><span>${le(t)}</span>`,Cl=class{constructor(t){this.game=t,this.root=ot("#ui"),this.bubbles=[],this.tags=new Map,this.screens={},this.build()}build(){let t=this.root;t.innerHTML=`
      <div id="hud" class="hidden">
        <div class="scoreboard">
          <div class="sb-team sb-home"><span class="sw"></span><b class="nm"></b></div>
          <div class="sb-score"><span class="s0">\u0660</span><i>-</i><span class="s1">\u0660</span></div>
          <div class="sb-team sb-away"><b class="nm"></b><span class="sw"></span></div>
          <div class="sb-clock">\u0660\u0660:\u0660\u0660</div>
        </div>
        <div class="meters">
          <div class="meter m0"><div class="mlabel">\u0639\u062F\u0651\u0627\u062F \u0627\u0644\u0641\u0636\u064A\u062D\u0629 <small></small></div><div class="bar"><i></i></div></div>
          <div class="meter m1"><div class="mlabel">\u0639\u062F\u0651\u0627\u062F \u0627\u0644\u0641\u0636\u064A\u062D\u0629 <small></small></div><div class="bar"><i></i></div></div>
        </div>
        <div class="mapname"><b></b><small></small></div>
        <div class="hm hidden">\u{1F440} \u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u0631\u0629!</div>
        <div class="power hidden"><i></i><span>\u0634\u0648\u0637\u0629</span></div>
        <div class="replaytag hidden"><i></i>\u0625\u0639\u0627\u062F\u0629<small>\u0623\u064A \u0632\u0631\u0627\u0631 \u064A\u0639\u062F\u0651\u064A\u0647\u0627</small></div>
        <div class="pensbar hidden"><div class="pr p0"><b></b><span></span></div><div class="pr p1"><b></b><span></span></div></div>
        <div class="who w0 hidden"><b></b><div class="stam"><i></i></div></div>
        <div class="who w1 hidden"><b></b><div class="stam"><i></i></div></div>
        <div class="keys"></div>
        <button class="pausebtn" title="\u0648\u0642\u0641">II</button>
      </div>
      <div id="bubbles"></div>
      <div id="banner" class="hidden"><div class="bt"></div><div class="bs"></div></div>
      <div id="toast" class="hidden"></div>
      <div id="screens"></div>
      <div id="touch"></div>
    `,ot(".pausebtn",t).onclick=()=>this.game.togglePause(),this.hudEl=ot("#hud",t),this.bubbleLayer=ot("#bubbles",t),this.screenRoot=ot("#screens",t),this.makeScreens()}makeScreens(){let t=this.screenRoot,e=(u,f)=>{let d=ti("div","screen hidden",f);return d.id=u,t.appendChild(d),this.screens[u]=d,d};e("menu",`
      <div class="logo"><img class="logoimg" src="assets/logo/icon-512.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><p>\u0628\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u062D\u062A\u0629</p></div>
      <div class="menu-btns">
        <button data-a="quick" class="big">\u26BD \u0645\u0627\u062A\u0634 \u0633\u0631\u064A\u0639</button>
        <button data-a="tourney">\u{1F3C6} \u0627\u0644\u0628\u0637\u0648\u0644\u0629: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</button>
        <button data-a="versus">\u{1F465} \u0627\u062A\u0646\u064A\u0646 \u0639\u0644\u0649 \u0643\u064A\u0628\u0648\u0631\u062F \u0648\u0627\u062D\u062F</button>
        <button data-a="player">\u{1F9CD} \u0627\u0639\u0645\u0644 \u0644\u0627\u0639\u064A\u0628\u0643</button>
        <button data-a="controls">\u{1F3AE} \u0627\u0644\u062A\u062D\u0643\u0645</button>
        <button data-a="settings">\u2699\uFE0F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
      </div>
      <div class="foot">\u0643\u0644 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A \u0645\u0639\u0645\u0648\u0644\u0629 \u0628\u0627\u0644\u0643\u0648\u062F \u2022 \u0627\u0644\u0639\u0628 \u0628\u0627\u0644\u0643\u064A\u0628\u0648\u0631\u062F \u0623\u0648 \u0627\u0644\u062F\u0631\u0627\u0639 \u0623\u0648 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</div>
    `).querySelectorAll("button").forEach(u=>u.onclick=()=>{ct.init(),ct.play("click"),this.menuAction(u.dataset.a)});let n={hairStyle:"\u0627\u0644\u0634\u0639\u0631",face:"\u0627\u0644\u0648\u0634",top:"\u0627\u0644\u0644\u0628\u0633 \u0641\u0648\u0642",bottom:"\u062A\u062D\u062A",shoes:"\u0641\u064A \u0631\u062C\u0644\u0647",height:"\u0627\u0644\u0637\u0648\u0644",build:"\u0627\u0644\u062C\u0633\u0645"},r=e("creator",`
      <div class="panel wide creator">
        <h2 class="ttl">\u0627\u0639\u0645\u0644 \u0644\u0627\u0639\u064A\u0628\u0643</h2>
        <div class="cr-body">
          <div class="cr-prev"><canvas></canvas><div class="cr-tag"><b class="cr-nm"></b><span class="cr-no"></span></div><small>\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0644\u0641\u0651\u0647</small></div>
          <div class="cr-opts">
            <div class="row">
              <div class="sec"><h3>\u0627\u0633\u0645\u0643</h3><input class="cr-name" maxlength="12" dir="rtl"></div>
              <div class="sec"><h3>\u0631\u0642\u0645\u0643</h3><input class="cr-num" type="number" min="1" max="99"></div>
            </div>
            <div class="sec"><h3>\u0644\u0648\u0646 \u0627\u0644\u0628\u0634\u0631\u0629</h3><div class="seg skins">${wl.map((u,f)=>`<button data-v="${f}" class="sw" style="background:${u}"></button>`).join("")}</div></div>
            ${Object.entries(Bp).map(([u,f])=>`<div class="sec"><h3>${n[u]}</h3><div class="seg" data-k="${u}">${f.map(([d,g])=>`<button data-v="${d}">${g}</button>`).join("")}</div></div>`).join("")}
            <p class="cr-note">\u0644\u0648\u0646 \u0647\u062F\u0648\u0645\u0643 \u0628\u064A\u062A\u063A\u064A\u0631 \u0639\u0644\u0649 \u062D\u0633\u0628 \u0627\u0644\u0641\u0631\u064A\u0642 \u0627\u0644\u0644\u064A \u0628\u062A\u0644\u0639\u0628 \u0628\u064A\u0647</p>
          </div>
        </div>
        <div class="actions"><button class="back">\u0631\u062C\u0648\u0639</button><button class="go big">\u0627\u062D\u0641\u0638</button></div>
      </div>
    `);r.querySelectorAll(".seg[data-k]").forEach(u=>u.querySelectorAll("button").forEach(f=>f.onclick=()=>{ct.play("click"),this.prof[u.dataset.k]=f.dataset.v,this.refreshCreator(!0)})),ot(".skins",r).querySelectorAll("button").forEach(u=>u.onclick=()=>{ct.play("click"),this.prof.skin=+u.dataset.v,this.refreshCreator(!0)}),ot(".cr-name",r).oninput=u=>{this.prof.name=u.target.value,this.refreshCreator(!1)},ot(".cr-num",r).oninput=u=>{let f=Math.round(+u.target.value);f>=1&&f<=99&&(this.prof.number=f,this.refreshCreator(!0))},r.querySelectorAll("input").forEach(u=>u.addEventListener("keydown",f=>f.stopPropagation())),ot(".back",r).onclick=()=>{ct.play("click"),this.closeCreator(!1)},ot(".go",r).onclick=()=>{ct.play("coin"),this.closeCreator(!0)};let o=e("setup",`
      <div class="panel wide">
        <h2 class="ttl">\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F</h2>
        <div class="sec"><h3>\u0627\u0644\u0645\u0643\u0627\u0646</h3><div class="maps"></div><p class="mapdesc"></p></div>
        <div class="row">
          <div class="sec"><h3>\u0627\u0644\u0648\u0642\u062A</h3><div class="seg" data-k="time"><button data-v="day">\u2600\uFE0F \u0627\u0644\u0636\u0647\u0631</button><button data-v="sunset">\u{1F307} \u0627\u0644\u0645\u063A\u0631\u0628</button><button data-v="night">\u{1F319} \u0628\u0627\u0644\u0644\u064A\u0644</button></div></div>
          <div class="sec"><h3>\u0627\u0644\u062C\u0648</h3><div class="seg" data-k="weather"><button data-v="clear">\u0635\u0627\u0641\u064A</button><button data-v="dust">\u{1F32A}\uFE0F \u062E\u0645\u0627\u0633\u064A\u0646</button><button data-v="rain">\u{1F327}\uFE0F \u0645\u0637\u0631</button></div></div>
          <div class="sec"><h3>\u0627\u0644\u0635\u0639\u0648\u0628\u0629</h3><div class="seg" data-k="diff">${Object.entries(oo).map(([u,f])=>`<button data-v="${u}">${f.name}</button>`).join("")}</div></div>
          <div class="sec"><h3>\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0627\u062A\u0634</h3><div class="seg" data-k="rule">
            <button data-v="t120">\u062F\u0642\u064A\u0642\u062A\u064A\u0646</button><button data-v="t180">\u0663 \u062F\u0642\u0627\u064A\u0642</button><button data-v="t300">\u0665 \u062F\u0642\u0627\u064A\u0642</button><button data-v="g3">\u0627\u0644\u0644\u064A \u064A\u062C\u064A\u0628 \u0663</button><button data-v="g5">\u0627\u0644\u0644\u064A \u064A\u062C\u064A\u0628 \u0665</button>
          </div></div>
        </div>
        <div class="row">
          <div class="sec"><h3>\u0641\u0631\u064A\u0642\u0643</h3><div class="teams" data-k="home"></div></div>
          <div class="sec"><h3>\u0627\u0644\u062E\u0635\u0645</h3><div class="teams" data-k="away"></div></div>
        </div>
        <div class="actions"><button class="back">\u0631\u062C\u0648\u0639</button><button class="go big">\u064A\u0644\u0627 \u0646\u0644\u0639\u0628!</button></div>
      </div>
    `);this.setupSel={map:"alley",time:"day",weather:"clear",diff:"normal",rule:"t180",home:"home",away:"away",versus:!1};let a=ot(".maps",o);el.forEach(u=>{let f=Wn[u],d=ti("button","mapcard",`<div class="mc-art mc-${u}"></div><b>${f.name}</b><small>${f.desc}</small><em>${le(f.teamSize)} \xD7 ${le(f.teamSize)}</em>`);d.dataset.v=u,d.onclick=()=>{ct.play("click"),this.setupSel.map=u,this.refreshSetup()},a.appendChild(d)}),o.querySelectorAll(".seg").forEach(u=>u.querySelectorAll("button").forEach(f=>f.onclick=()=>{ct.play("click"),this.setupSel[u.dataset.k]=f.dataset.v,this.refreshSetup()})),o.querySelectorAll(".teams").forEach(u=>{Object.entries(zi).forEach(([f,d])=>{let g=ti("button","teambtn",`<span style="background:${d.ui}"></span>${d.name}`);g.dataset.v=f,g.onclick=()=>{ct.play("click");let x=u.dataset.k==="home"?"away":"home";this.setupSel[x]===f&&(this.setupSel[x]=this.setupSel[u.dataset.k]),this.setupSel[u.dataset.k]=f,this.refreshSetup()},u.appendChild(g)})}),ot(".back",o).onclick=()=>{ct.play("click"),this.show("menu")},ot(".go",o).onclick=()=>{ct.play("click"),this.game.startFromSetup(this.setupSel)},e("controls",`
      <div class="panel wide">
        <h2 class="ttl">\u0627\u0644\u062A\u062D\u0643\u0645</h2>
        <div class="ctrl-grid">
          <div class="ccard"><h3>\u0644\u0627\u0639\u0628 \u0648\u0627\u062D\u062F</h3>
            <table>
              <tr><td><kbd>\u2191</kbd><kbd>\u2193</kbd><kbd>\u2190</kbd><kbd>\u2192</kbd></td><td>\u062C\u0631\u064A</td></tr>
              <tr><td><kbd>A</kbd></td><td>\u0628\u0627\u0635\u0629: \u0644\u0644\u0632\u0645\u064A\u0644 \u0627\u0644\u0644\u064A \u0641\u064A \u0627\u062A\u062C\u0627\u0647\u0643\u060C \u0648\u0644\u0648 \u0645\u0641\u064A\u0634 \u062A\u0645\u0634\u064A \u0641\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647. \u0641\u0636\u0644 \u062F\u0627\u0633\u0633 = \u0623\u0628\u0639\u062F. <kbd>Shift</kbd>+<kbd>A</kbd> = \u0628\u0627\u0635\u0629 \u0639\u0627\u0644\u064A\u0629</td></tr>
              <tr><td><kbd>S</kbd></td><td>\u0634\u0648\u0637\u0629 (\u062F\u0648\u0633 \u0643\u062A\u064A\u0631 = \u0623\u0642\u0648\u0649). <kbd>Shift</kbd>+<kbd>S</kbd> = \u0634\u0648\u0637\u0629 \u0628\u0644\u0641\u0651\u0629. \u0648\u0627\u0644\u0643\u0648\u0631\u0629 \u0641\u064A \u0627\u0644\u0647\u0648\u0627 = \u0631\u0627\u0633\u064A\u0629/\u0637\u0627\u064A\u0631\u0629</td></tr>
              <tr><td><kbd>E</kbd></td><td class="hot">\u0642\u0637\u0639 (\u064A\u062C\u0631\u064A \u0644\u0648\u062D\u062F\u0647 \u0639\u0644\u0649 \u0627\u0644\u0644\u064A \u0645\u0639\u0627\u0647 \u0627\u0644\u0643\u0648\u0631\u0629\u060C \u0648<kbd>A</kbd> \u0628\u0631\u0636\u0647 \u0648\u0627\u0646\u062A \u0628\u062A\u062F\u0627\u0641\u0639)</td></tr>
              <tr><td><kbd>D</kbd></td><td class="hot">\u0643\u0639\u0628\u0644\u0629</td></tr>
              <tr><td><kbd>F</kbd></td><td class="hot">\u0634\u062F\u0651 \u0645\u0646 \u0627\u0644\u0647\u062F\u0648\u0645 (\u0641\u0636\u0644 \u062F\u0627\u0633\u0633)</td></tr>
              <tr><td><kbd>W</kbd></td><td>\u0643\u0648\u0628\u0631\u064A (\u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0647)</td></tr>
              <tr><td><kbd>Shift</kbd></td><td>\u0633\u0628\u0631\u0646\u062A</td></tr>
              <tr><td><kbd>Space</kbd></td><td>\u063A\u064A\u0651\u0631 \u0627\u0644\u0644\u0639\u0651\u064A\u0628</td></tr>
              <tr><td><kbd>Esc</kbd> / <kbd>P</kbd></td><td>\u0648\u0642\u0651\u0641 \u0627\u0644\u0644\u0639\u0628</td></tr>
            </table></div>
          <div class="ccard"><h3>\u0627\u062A\u0646\u064A\u0646 \u0639\u0644\u0649 \u0643\u064A\u0628\u0648\u0631\u062F \u0648\u0627\u062D\u062F</h3>
            <table>
              <tr><th></th><th>\u0627\u0644\u0623\u0648\u0644 (\u0627\u0644\u062D\u0645\u0631)</th><th>\u0627\u0644\u062A\u0627\u0646\u064A (\u0627\u0644\u0632\u0631\u0642)</th></tr>
              <tr><td>\u062C\u0631\u064A</td><td><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></td><td>\u0627\u0644\u0623\u0633\u0647\u0645</td></tr>
              <tr><td>\u0628\u0627\u0635\u0629</td><td><kbd>F</kbd></td><td><kbd>K</kbd> / <kbd>Num1</kbd></td></tr>
              <tr><td>\u0634\u0648\u0637\u0629</td><td><kbd>G</kbd></td><td><kbd>L</kbd> / <kbd>Num2</kbd></td></tr>
              <tr><td>\u0643\u0639\u0628\u0644\u0629</td><td><kbd>H</kbd></td><td><kbd>;</kbd> / <kbd>Num3</kbd></td></tr>
              <tr><td>\u0634\u062F\u0651</td><td><kbd>R</kbd></td><td><kbd>O</kbd> / <kbd>Num4</kbd></td></tr>
              <tr><td>\u0643\u0648\u0628\u0631\u064A</td><td><kbd>T</kbd></td><td><kbd>P</kbd> / <kbd>Num5</kbd></td></tr>
              <tr><td>\u0633\u0628\u0631\u0646\u062A</td><td><kbd>Shift</kbd> \u0634\u0645\u0627\u0644</td><td><kbd>Shift</kbd> \u064A\u0645\u064A\u0646 / <kbd>Num0</kbd></td></tr>
              <tr><td>\u0642\u0637\u0639</td><td><kbd>C</kbd></td><td><kbd>I</kbd> / <kbd>Num6</kbd></td></tr>
              <tr><td>\u063A\u064A\u0651\u0631</td><td><kbd>Q</kbd></td><td><kbd>Enter</kbd></td></tr>
              <tr><td>\u0648\u0642\u0651\u0641</td><td colspan="2"><kbd>Esc</kbd></td></tr>
            </table></div>
          <div class="ccard"><h3>\u0627\u0644\u062F\u0631\u0627\u0639 (Gamepad)</h3>
            <table>
              <tr><td>\u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0627\u0644\u0634\u0645\u0627\u0644</td><td>\u062C\u0631\u064A</td></tr>
              <tr><td><kbd>A</kbd></td><td>\u0628\u0627\u0635\u0629 (\u0648\u0627\u0646\u062A \u0628\u062A\u062F\u0627\u0641\u0639: \u0642\u0637\u0639)</td></tr><tr><td><kbd>X</kbd></td><td>\u0634\u0648\u0637\u0629</td></tr>
              <tr><td><kbd>B</kbd></td><td>\u0643\u0639\u0628\u0644\u0629</td></tr><tr><td><kbd>LB</kbd> / <kbd>LT</kbd></td><td>\u0634\u062F\u0651</td></tr>
              <tr><td><kbd>Y</kbd></td><td>\u0643\u0648\u0628\u0631\u064A</td></tr><tr><td><kbd>RT</kbd></td><td>\u0633\u0628\u0631\u0646\u062A</td></tr><tr><td><kbd>RB</kbd></td><td>\u063A\u064A\u0651\u0631</td></tr>
            </table>
            <p class="note">\u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644: \u0627\u0633\u062D\u0628 \u0639\u0644\u0649 \u0632\u0631\u0627\u0631 \u0627\u0644\u0628\u0627\u0635\u0629 \u0644\u0641\u0648\u0642 = \u0628\u0627\u0635\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u0648\u0627\u0633\u062D\u0628 \u0639\u0644\u0649 \u0632\u0631\u0627\u0631 \u0627\u0644\u0634\u0648\u0637\u0629 \u064A\u0645\u064A\u0646 \u0623\u0648 \u0634\u0645\u0627\u0644 (\u0623\u0648 \u0627\u0636\u063A\u0637 \u062C\u0627\u0645\u062F) = \u0634\u0648\u0637\u0629 \u0628\u0644\u0641\u0651\u0629. \u0648\u0639\u0644\u0649 \u0627\u0644\u062F\u0631\u0627\u0639: <kbd>RT</kbd> \u0645\u0639 \u0627\u0644\u0628\u0627\u0635\u0629 \u0623\u0648 \u0627\u0644\u0634\u0648\u0637\u0629.</p></div>
          <div class="ccard"><h3>\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u062D\u0627\u0631\u0629</h3>
            <ul class="rules">
              <li><b>\u0639\u062F\u0651\u0627\u062F \u0627\u0644\u0641\u0636\u064A\u062D\u0629:</b> \u0643\u0644 \u0643\u0639\u0628\u0644\u0629 \u0623\u0648 \u0634\u062F\u0651\u0629 \u0628\u062A\u0645\u0644\u0627\u0647. \u0644\u0648 \u0627\u062A\u0645\u0644\u0649: \u064A\u0627 \u0625\u0645\u0627 <b>\u062E\u0646\u0627\u0642\u0629</b> \u064A\u0627 \u0625\u0645\u0627 <b>\u0623\u0645\u0647 \u062A\u0646\u0627\u062F\u064A \u0639\u0644\u064A\u0647</b> \u0648\u064A\u0631\u0648\u0651\u062D!</li>
              <li><b>\u0627\u0644\u0628\u0644\u0643\u0648\u0646\u0629:</b> \u0644\u0648 \u0627\u0644\u0643\u0648\u0631\u0629 \u062F\u062E\u0644\u062A \u0627\u0644\u0628\u0644\u0643\u0648\u0646\u0629\u060C \u0627\u0644\u062D\u0627\u062C\u0629 \u0647\u062A\u0645\u0633\u0643\u0647\u0627 \u0648\u062A\u0631\u062C\u0639\u0647\u0627 \u0628\u0639\u062F \u0645\u0627 \u062A\u0632\u0639\u0651\u0642.</li>
              <li><b>\u0627\u0644\u0625\u0632\u0627\u0632:</b> \u0634\u0648\u0637\u0629 \u062C\u0627\u0645\u062F\u0629 \u0641\u064A \u0627\u0644\u0634\u0628\u0627\u0643 = \u0625\u0632\u0627\u0632 \u0645\u0643\u0633\u0648\u0631 \u0648\u0627\u0644\u0643\u0644 \u064A\u062C\u0631\u064A!</li>
              <li><b>\u0627\u0644\u0646\u0627\u0638\u0631:</b> \u0641\u064A \u062D\u0648\u0634 \u0627\u0644\u0645\u062F\u0631\u0633\u0629\u060C \u0644\u0648 \u0634\u0627\u0641\u0643 \u0628\u062A\u0641\u0627\u0648\u0644 \u0647\u064A\u0637\u0631\u062F\u0643.</li>
              <li><b>\u0627\u0644\u0643\u0648\u0628\u0631\u064A:</b> \u0639\u062F\u0651\u064A \u0627\u0644\u0643\u0648\u0631\u0629 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 \u0627\u0644\u062E\u0635\u0645 \u0648\u0647\u064A\u0642\u0641 \u0645\u0634 \u0641\u0627\u0647\u0645 \u062D\u0627\u062C\u0629.</li>
              <li><b>\u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643 \u0648\u0628\u064A\u0627\u0639 \u0627\u0644\u0639\u064A\u0634:</b> \u0628\u064A\u0639\u062F\u0651\u0648\u0627 \u0641\u064A \u0627\u0644\u0646\u0635.. \u0648\u0633\u0651\u0639!</li>
            </ul></div>
        </div>
        <div class="actions"><button class="back big">\u062A\u0645\u0627\u0645</button></div>
      </div>`),ot("#controls .back").onclick=()=>{ct.play("click"),this.show(this.controlsReturn||"menu")},e("settings",`
      <div class="panel">
        <h2 class="ttl">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</h2>
        <div class="sec"><h3>\u062C\u0648\u062F\u0629 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A</h3><div class="seg" data-k="quality"><button data-v="high">\u0639\u0627\u0644\u064A\u0629</button><button data-v="medium">\u0645\u062A\u0648\u0633\u0637\u0629</button><button data-v="low">\u062E\u0641\u064A\u0641\u0629 (\u0644\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0636\u0639\u064A\u0641\u0629)</button></div></div>
        <div class="sec"><h3>\u0627\u0644\u0635\u0648\u062A</h3><input type="range" min="0" max="100" class="vol"><label class="chk"><input type="checkbox" class="mute"> \u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A</label></div>
        <div class="sec"><h3>\u0627\u0647\u062A\u0632\u0627\u0632 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</h3><div class="seg" data-k="vibrate"><button data-v="on">\u0634\u063A\u0627\u0644</button><button data-v="off">\u0645\u0642\u0641\u0648\u0644</button></div></div>
        <div class="sec"><h3>\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0644\u0648\u062D\u062F\u0647\u0627 \u0644\u0648 \u0627\u0644\u062C\u0647\u0627\u0632 \u0628\u064A\u0647\u0646\u062C</h3><div class="seg" data-k="autoQuality"><button data-v="on">\u0623\u064A\u0648\u0647</button><button data-v="off">\u0644\u0623</button></div></div>
        <div class="sec"><h3>\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062C\u0648\u0646 \u0628\u0627\u0644\u0628\u0637\u064A\u0621</h3><div class="seg" data-k="replay"><button data-v="on">\u0634\u063A\u0627\u0644\u0629</button><button data-v="off">\u0645\u0642\u0641\u0648\u0644\u0629</button></div></div>
        <div class="sec"><h3>\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u0627\u0635\u0629</h3><div class="seg" data-k="passAssist"><button data-v="high">\u0639\u0627\u0644\u064A\u0629</button><button data-v="normal">\u0639\u0627\u062F\u064A\u0629</button><button data-v="manual">\u064A\u062F\u0648\u064A</button></div></div>
        <div class="sec"><h3>\u0632\u0631\u0627\u064A\u0631 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</h3><div class="seg"><button class="touchedit-btn">\u{1F3AE} \u063A\u064A\u0651\u0631 \u0645\u0643\u0627\u0646 \u0648\u062D\u062C\u0645 \u0627\u0644\u0632\u0631\u0627\u064A\u0631</button></div></div>
        <div class="sec"><h3>\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u0632\u0631\u0627\u064A\u0631 \u062A\u062D\u062A</h3><div class="seg" data-k="hints"><button data-v="on">\u062A\u0638\u0647\u0631</button><button data-v="off">\u062A\u0633\u062A\u062E\u0628\u0649</button></div></div>
        <div class="actions"><button class="back big">\u062A\u0645\u0627\u0645</button></div>
      </div>`);let l=this.screens.settings;l.querySelectorAll(".seg").forEach(u=>u.querySelectorAll("button").forEach(f=>f.onclick=()=>{ct.play("click"),this.game.setSetting(u.dataset.k,f.dataset.v),this.refreshSettings()})),ot(".vol",l).oninput=u=>this.game.setSetting("volume",u.target.value/100),ot(".mute",l).onchange=u=>this.game.setSetting("muted",u.target.checked),ot(".back",l).onclick=()=>{ct.play("click"),this.show(this.settingsReturn||"menu")},ot(".touchedit-btn",l).onclick=()=>{ct.play("click"),this.openTouchEditor()};let c=e("touchedit",`
      <div class="panel tebar">
        <h2 class="ttl">\u0638\u0628\u0651\u0637 \u0627\u0644\u0632\u0631\u0627\u064A\u0631 <button class="temini">\u0635\u063A\u0651\u0631 \u25B2</button></h2>
        <div class="tebody">
        <p>\u0627\u0633\u062D\u0628 \u0623\u064A \u0632\u0631\u0627\u0631 \u0623\u0648 \u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0644\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0644\u064A \u064A\u0631\u064A\u062D\u0643\u060C \u0648\u062F\u0648\u0633 \u0639\u0644\u064A\u0647 \u0639\u0634\u0627\u0646 \u062A\u063A\u064A\u0651\u0631 \u062D\u062C\u0645\u0647.</p>
        <div class="terow"><label>\u0627\u0644\u062D\u062C\u0645: <span class="tesel"></span></label><input type="range" class="tesize" min="60" max="160" step="5"><b class="tesizev"></b></div>
        <div class="terow"><label>\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u0632\u0631\u0627\u064A\u0631</label><input type="range" class="teop" min="35" max="100" step="5"><b class="teopv"></b></div>
        </div>
        <div class="actions"><button class="big tesave">\u062D\u0641\u0638</button><button class="tereset">\u0631\u062C\u0651\u0639 \u0632\u064A \u0627\u0644\u0623\u0648\u0644</button><button class="tecancel">\u0625\u0644\u063A\u0627\u0621</button></div>
      </div>`);ot(".temini",c).onclick=()=>{let u=ot(".tebar",c);u.classList.toggle("mini"),ot(".temini",c).textContent=u.classList.contains("mini")?"\u0643\u0628\u0651\u0631 \u25BC":"\u0635\u063A\u0651\u0631 \u25B2"};let h=()=>{let u=this.game.touchPad,f=u.selected||"shoot";return f==="stick"?u.layout.stick:u.layout.buttons[f]};this.refreshTouchEditor=()=>{let u=this.game.touchPad;if(!u)return;let f=u.selected||"shoot";ot(".tesel",c).textContent=u.label(f);let d=Math.round(h().scale*100);ot(".tesize",c).value=d,ot(".tesizev",c).textContent=le(d)+"\u066A";let g=Math.round(u.layout.opacity*100);ot(".teop",c).value=g,ot(".teopv",c).textContent=le(g)+"\u066A"},ot(".tesize",c).oninput=u=>{h().scale=u.target.value/100,this.game.touchPad.applyLayout(),this.refreshTouchEditor()},ot(".teop",c).oninput=u=>{this.game.touchPad.layout.opacity=u.target.value/100,this.game.touchPad.applyLayout(),this.refreshTouchEditor()},ot(".tesave",c).onclick=()=>{ct.play("coin"),this.closeTouchEditor(!0)},ot(".tecancel",c).onclick=()=>{ct.play("click"),this.closeTouchEditor(!1)},ot(".tereset",c).onclick=()=>{ct.play("click");let u=this.game.touchPad;u.layout=u.constructor.defaults(),u.applyLayout(),this.refreshTouchEditor()},e("pause",`
      <div class="panel small">
        <img class="wordimg" src="assets/logo/wordmark-800.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639">
        <h2 class="ttl">\u0627\u0633\u062A\u0631\u0627\u062D\u0629</h2>
        <div class="menu-btns">
          <button data-a="resume" class="big">\u0643\u0645\u0651\u0644</button>
          <button data-a="restart">\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0627\u062A\u0634 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644</button>
          <button data-a="controls">\u0627\u0644\u062A\u062D\u0643\u0645</button>
          <button data-a="settings">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
          <button data-a="quit">\u0627\u062E\u0631\u062C \u0644\u0644\u0642\u0627\u0626\u0645\u0629</button>
        </div>
      </div>`),this.screens.pause.querySelectorAll("button").forEach(u=>u.onclick=()=>{ct.play("click"),this.pauseAction(u.dataset.a)}),e("result",'<div class="panel"><img class="wordimg" src="assets/logo/wordmark-800.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><div class="res"></div><div class="actions"></div></div>'),e("tourney",'<div class="panel wide"><div class="thead"><img class="badgeimg" src="assets/logo/badge-400.png" alt=""><h2 class="ttl">\u{1F3C6} \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</h2></div><div class="tinfo"></div><div class="ladder"></div><div class="actions"></div></div>'),e("shop",'<div class="panel"><h2 class="ttl">\u{1F6D2} \u0645\u062D\u0644 \u0639\u0645 \u0633\u064A\u062F</h2><div class="money"></div><div class="items"></div><div class="actions"><button class="back big">\u062E\u0644\u0635\u062A</button></div></div>'),ot("#shop .back").onclick=()=>{ct.play("click"),this.showTourney()},e("loading",'<div class="loading"><img class="splashimg" src="assets/logo/graffiti-640.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><p>\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u062D\u0627\u0631\u0629...</p></div>')}show(t){for(let[e,i]of Object.entries(this.screens))i.classList.toggle("hidden",e!==t);this.current=t,t==="setup"&&this.refreshSetup(),t==="settings"&&this.refreshSettings()}hideScreens(){this.show(null)}menuAction(t){t==="quick"&&(this.setupSel.versus=!1,ot("#setup .ttl").textContent="\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F",this.show("setup")),t==="versus"&&(this.setupSel.versus=!0,ot("#setup .ttl").textContent="\u0627\u062A\u0646\u064A\u0646 \u0642\u0635\u0627\u062F \u0628\u0639\u0636",this.show("setup")),t==="tourney"&&this.showTourney(),t==="player"&&this.openCreator(),t==="controls"&&(this.controlsReturn="menu",this.show("controls")),t==="settings"&&(this.settingsReturn="menu",this.show("settings"))}pauseAction(t){t==="resume"&&this.game.togglePause(!1),t==="restart"&&this.game.restartMatch(),t==="quit"&&this.game.quitToMenu(),t==="controls"&&(this.controlsReturn="pause",this.show("controls")),t==="settings"&&(this.settingsReturn="pause",this.show("settings"))}refreshSetup(){let t=this.setupSel,e=this.screens.setup;e.querySelectorAll(".mapcard").forEach(i=>i.classList.toggle("on",i.dataset.v===t.map)),ot(".mapdesc",e).textContent=Wn[t.map].desc,e.querySelectorAll(".seg").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===t[i.dataset.k]))),e.querySelectorAll(".teams").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===t[i.dataset.k]))),ot('.seg[data-k="diff"]',e).parentElement.style.display=t.versus?"none":"",e.querySelectorAll(".teams")[0].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0623\u0648\u0644":"\u0641\u0631\u064A\u0642\u0643",e.querySelectorAll(".teams")[1].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u062A\u0627\u0646\u064A":"\u0627\u0644\u062E\u0635\u0645"}openCreator(){this.prof=Tl();let t=this.screens.creator;if(this.show("creator"),!this.preview)try{this.preview=new Rl(ot("canvas",t))}catch{ot(".cr-prev",t).classList.add("nogl")}ot(".cr-name",t).value=this.prof.name,ot(".cr-num",t).value=this.prof.number,this.refreshCreator(!0),this.preview?.start()}refreshCreator(t){let e=this.prof,i=this.screens.creator;if(i.querySelectorAll(".seg[data-k]").forEach(n=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===String(e[n.dataset.k])))),ot(".skins",i).querySelectorAll("button").forEach(n=>n.classList.toggle("on",+n.dataset.v===e.skin)),ot(".cr-nm",i).textContent=Pu(e.name),ot(".cr-no",i).textContent=le(e.number),t&&this.preview){let n=zi[this.setupSel?.home]||zi.home;this.preview.setLook(Al(e,n,{kits:this.game.tourney.mods().kits}))}}closeCreator(t){t&&(this.prof.name=Pu(this.prof.name),Op(this.prof),this.toast(`${this.prof.name} \u062C\u0627\u0647\u0632 \u064A\u0646\u0632\u0644 \u0627\u0644\u0645\u0644\u0639\u0628`)),this.preview?.stop(),this.show("menu")}openTouchEditor(){let t=this.game.ensureTouchPad();this.touchBackup=JSON.parse(JSON.stringify(t.layout)),t.onSelect=()=>this.refreshTouchEditor(),t.onChange=()=>this.refreshTouchEditor(),t.show(!0),t.setEditing(!0),this.show("touchedit"),this.refreshTouchEditor()}closeTouchEditor(t){let e=this.game.touchPad;t?this.game.setSetting("touchLayout",JSON.parse(JSON.stringify(e.layout))):e.setLayout(this.touchBackup),e.setEditing(!1),e.onSelect=e.onChange=null;let i=this.game.match&&!this.game.match.opts.demo&&this.game.touch&&!this.game.match.opts.versus;e.show(!!i&&this.settingsReturn==="pause"),this.show("settings")}refreshSettings(){let t=this.game.settings,e=this.screens.settings;e.querySelectorAll(".seg").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===String(t[i.dataset.k])))),ot(".vol",e).value=Math.round(t.volume*100),ot(".mute",e).checked=!!t.muted}showTourney(){let t=this.game.tourney,e=this.screens.tourney;ot(".tinfo",e).innerHTML=`<div class="money">\u{1F4B0} ${le(t.money)} \u062C\u0646\u064A\u0647</div>${t.s.done?'<div class="champ">\u{1F3C6} \u0625\u0646\u062A\u0648\u0627 \u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062D\u062A\u0629! \u0643\u0633\u0628\u062A\u0648\u0627 \u0627\u0644\u0643\u0627\u0633!</div>':"<p>\u0627\u0643\u0633\u0628 \u0627\u0644\u062E\u0645\u0633 \u0645\u0627\u062A\u0634\u0627\u062A \u0639\u0634\u0627\u0646 \u062A\u0627\u062E\u062F \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629. \u0644\u0648 \u0627\u062A\u0639\u0627\u062F\u0644\u062A\u060C \u0628\u062A\u062A\u062D\u0633\u0645 \u0628\u0636\u0631\u0628\u0627\u062A \u062C\u0632\u0627\u0621.</p>"}`;let i=ot(".ladder",e);i.innerHTML="",pr.forEach((l,c)=>{let h=t.s.results[c],u=c<t.stage?"done":c===t.stage&&!t.s.done?"next":t.s.done?"done":"locked",f=ti("div",`rung ${u}`,`
        <div class="rn">${le(c+1)}</div>
        <div class="ri"><b>${l.title}</b><small>${Wn[l.map].name} \u2022 ${{night:"\u0628\u0627\u0644\u0644\u064A\u0644",sunset:"\u0627\u0644\u0645\u063A\u0631\u0628",day:"\u0627\u0644\u0636\u0647\u0631"}[l.time]}${l.weather==="rain"?" \u2022 \u0645\u0637\u0631":l.weather==="dust"?" \u2022 \u062E\u0645\u0627\u0633\u064A\u0646":""} \u2022 \u0642\u0635\u0627\u062F ${zi[l.opp].name}</small></div>
        <div class="rr">${h?br(h.score[0],h.score[1]):u==="next"?"\u0627\u0644\u062C\u0627\u064A":"\u{1F512}"}</div>`);i.appendChild(f)});let n=ot(".actions",e);n.innerHTML="";let r=ti("button","back","\u0631\u062C\u0648\u0639");r.onclick=()=>{ct.play("click"),this.show("menu")};let o=ti("button","","\u{1F6D2} \u0627\u0644\u0645\u062D\u0644");if(o.onclick=()=>{ct.play("click"),this.showShop()},n.append(r,o),!t.s.done){let l=ti("button","big go","\u0627\u0644\u0639\u0628 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A");l.onclick=()=>{ct.play("click"),this.showBet()},n.append(l)}let a=ti("button","danger","\u0627\u0628\u062F\u0623 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644");a.onclick=()=>{if(!a.dataset.sure){a.dataset.sure="1",a.textContent="\u0645\u062A\u0623\u0643\u062F\u061F \u0647\u062A\u062E\u0633\u0631 \u0627\u0644\u0641\u0644\u0648\u0633 \u0648\u0627\u0644\u062A\u0642\u062F\u0645.. \u062F\u0648\u0633 \u062A\u0627\u0646\u064A";return}t.reset(),this.showTourney()},n.append(a),this.show("tourney")}showBet(){let t=this.game.tourney,e=t.current(),i=this.screens.bet;i||(i=ti("div","screen hidden",'<div class="panel bet"><h2 class="ttl">\u0646\u0644\u0639\u0628 \u0639\u0644\u0649 \u0625\u064A\u0647\u061F</h2><p class="bq"></p><div class="bets"></div><div class="actions"></div></div>'),i.id="bet",this.screenRoot.appendChild(i),this.screens.bet=i);let n=zi[e.opp];ot(".bq",i).innerHTML=`<b style="color:${n.ui==="#3a3a40"?"#ddd":n.ui}">${n.name}</b> \u0628\u064A\u0642\u0648\u0644\u0648\u0627: "\u0627\u0644\u0644\u064A \u064A\u062E\u0633\u0631 \u064A\u0639\u0632\u0645 \u0627\u0644\u062A\u0627\u0646\u064A.. \u0645\u0648\u0627\u0641\u0642\u064A\u0646\u061F"<br><small>\u0645\u0639\u0627\u0643 \u{1F4B0} ${le(t.money)} \u062C\u0646\u064A\u0647</small>`;let r=ot(".bets",i);r.innerHTML="";for(let c of mp){let h=t.money>=c.stake,u=ti("button","betcard"+(h?"":" off"),`<span class="bi">${c.icon}</span><b>${c.name}</b><small>${h?`\u062A\u0643\u0633\u0628 ${le(c.stake)} \u2022 \u062A\u062E\u0633\u0631 ${le(c.stake)}`:`\u0645\u062D\u062A\u0627\u062C ${le(c.stake)} \u062C\u0646\u064A\u0647 \u0641\u064A \u062C\u064A\u0628\u0643`}</small>`);u.disabled=!h,u.onclick=()=>{ct.play("coin"),this.game.startTourneyMatch(c)},r.appendChild(u)}let o=ot(".actions",i);o.innerHTML="";let a=ti("button","back","\u0631\u062C\u0648\u0639");a.onclick=()=>{ct.play("click"),this.showTourney()};let l=ti("button","big","\u0644\u0627\u060C \u0646\u0644\u0639\u0628 \u0639\u0644\u0649 \u0627\u0644\u062D\u0644\u0648");l.onclick=()=>{ct.play("click"),this.game.startTourneyMatch(null)},o.append(a,l),this.show("bet")}showShop(){let t=this.game.tourney,e=this.screens.shop;ot(".money",e).innerHTML=`\u{1F4B0} \u0645\u0639\u0627\u0643 ${le(t.money)} \u062C\u0646\u064A\u0647`;let i=ot(".items",e);i.innerHTML="",il.forEach(n=>{let r=t.owned(n.id),o=!n.consumable&&r>=n.max,a=ti("div","item"+(o?" sold":""),`<div><b>${n.name}</b><small>${n.desc}</small></div><button ${o||t.money<n.price?"disabled":""}>${o?"\u0627\u0634\u062A\u0631\u064A\u062A\u0647 \u2713":le(n.price)+" \u062C\u0646\u064A\u0647"}</button>`);n.consumable&&t.s.foul&&(a.querySelector("small").textContent+=` (\u0645\u0639\u0627\u0643 ${le(t.s.foul)})`),a.querySelector("button").onclick=()=>{t.buy(n.id)&&(ct.play("coin"),this.showShop())},i.appendChild(a)}),this.show("shop")}matchStart(t){if(t.opts.demo){this.hudEl.classList.add("hidden");return}this.hudEl.classList.remove("hidden");let e=this.hudEl,i=t.teamDef(0),n=t.teamDef(1);ot(".sb-home .nm",e).textContent=i.short,ot(".sb-away .nm",e).textContent=n.short,ot(".sb-home .sw",e).style.background=i.ui,ot(".sb-away .sw",e).style.background=n.ui,ot(".m0 small",e).textContent=i.short,ot(".m1 small",e).textContent=n.short,ot(".m0",e).style.setProperty("--tc",i.ui),ot(".m1",e).style.setProperty("--tc",n.ui),ot(".mapname b",e).textContent=t.def.name,ot(".mapname small",e).textContent=(t.night?"\u0628\u0627\u0644\u0644\u064A\u0644 \u2022 \u0627\u0644\u0643\u0634\u0627\u0641\u0627\u062A \u0628\u062A\u0631\u0639\u0634":t.sunset?"\u0627\u0644\u0645\u063A\u0631\u0628 \u2022 \u0646\u0648\u0631 \u062F\u0647\u0628\u064A":"\u0627\u0644\u0636\u0647\u0631")+(t.weather==="rain"?" \u2022 \u0645\u0637\u0631 \u0648\u0627\u0644\u0623\u0631\u0636 \u0628\u062A\u0632\u062D\u0644\u0642":t.weather==="dust"?" \u2022 \u062E\u0645\u0627\u0633\u064A\u0646":""),ot(".hm",e).classList.add("hidden");let r=t.controllers[0]&&t.controllers[1];ot(".keys",e).innerHTML=r?"":`
      <span><kbd>\u2191\u2193\u2190\u2192</kbd>\u062C\u0631\u064A</span><span><kbd>A</kbd>\u0628\u0627\u0635\u0629</span><span><kbd>S</kbd>\u0634\u0648\u0637\u0629</span>
      <span class="hot"><kbd>E</kbd>\u0642\u0637\u0639</span><span class="hot"><kbd>D</kbd>\u0643\u0639\u0628\u0644\u0629</span><span class="hot"><kbd>F</kbd>\u0634\u062F\u0651</span><span><kbd>W</kbd>\u0643\u0648\u0628\u0631\u064A</span>
      <span><kbd>Shift</kbd>\u0633\u0628\u0631\u0646\u062A</span><span><kbd>Space</kbd>\u063A\u064A\u0651\u0631</span>`,ot(".keys",e).style.display=this.game.settings.hints==="off"||this.game.touch?"none":"";for(let o=0;o<2;o++)ot(`.w${o}`,e).classList.toggle("hidden",!t.controllers[o]);this.lastScore=[-1,-1]}matchEnd(){this.hudEl.classList.add("hidden");for(let t of this.bubbles)t.el.remove();this.bubbles=[],ot("#banner").classList.add("hidden")}controlChanged(t,e){let i=ot(`.w${t} b`,this.hudEl);i&&(i.textContent=`${e.name} (${le(e.number)})`)}hud(t,e){if(this.updateBubbles(t,e),t.opts.demo)return;let i=this.hudEl;if(t.score[0]!==this.lastScore[0]||t.score[1]!==this.lastScore[1]){if(ot(".s0",i).textContent=le(t.score[0]),ot(".s1",i).textContent=le(t.score[1]),this.lastScore[0]>=0){let n=ot(".sb-score",i);n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop")}this.lastScore=[...t.score]}ot(".sb-clock",i).textContent=t.opts.rule.type==="time"?zf(t.clock):`\u0623\u0648\u0644 \u0648\u0627\u062D\u062F \u064A\u062C\u064A\u0628 ${le(t.opts.rule.n)}`;for(let n=0;n<2;n++){let r=t.scandal[n],o=ot(`.m${n} .bar i`,i);o.style.width=r+"%",ot(`.m${n}`,i).classList.toggle("hot",r>75);let a=t.teams[n].find(l=>l.ctrl);a&&(ot(`.w${n} .stam i`,i).style.width=Math.round(a.stamina*100)+"%")}for(let n=0;n<2;n++){let r=t.teams[n].find(o=>o.ctrl);this.tag(`ctrl${n}`,r&&r.active&&r.root.visible?r:null,r?r.name:"",t.controllers[n]?.color,t)}}tag(t,e,i,n,r){let o=this.tags.get(t);if(!e){o&&(o.style.display="none");return}o||(o=ti("div","nametag"),this.bubbleLayer.appendChild(o),this.tags.set(t,o)),o.style.display="",o.textContent!==i&&(o.textContent=i),o.style.color=n||"#ffd23f",e.headPos(Yi),Yi.y+=.45;let a=this.project(Yi,r);if(!a){o.style.display="none";return}o.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%, -100%)`}project(t,e){let i=e.camera;if(Yi.copy(t).project(i),Yi.z>1)return null;let n=this.game.width,r=this.game.height;return{x:(Yi.x*.5+.5)*n,y:(-Yi.y*.5+.5)*r}}bubble(t,e,{color:i="#fff",dur:n=2.2,big:r=!1,delay:o=0}={}){if(!t)return;for(let l of this.bubbles)l.who===t&&(l.t=l.dur);let a=ti("div","bubble"+(r?" big":""),e);a.style.background=i,a.style.setProperty("--bc",i),a.style.opacity="0",this.bubbleLayer.appendChild(a),this.bubbles.push({el:a,who:t,t:-o,dur:n})}updateBubbles(t,e){for(let i=this.bubbles.length-1;i>=0;i--){let n=this.bubbles[i];if(n.t+=e,n.t>=n.dur){n.el.remove(),this.bubbles.splice(i,1);continue}if(n.t<0)continue;let r=n.who;try{if(r.headPos)r.headPos(Yi);else if(r.pos)Yi.set(r.pos.x,1.2,r.pos.z);else continue}catch{n.t=n.dur;continue}Yi.y+=.35;let o=this.project(Yi,t);if(!o){n.el.style.opacity="0";continue}let a=Math.min(1,n.t*8,(n.dur-n.t)*4);n.el.style.opacity=String(a);let l=.85+Math.min(1,n.t*10)*.15;n.el.style.transform=`translate(${o.x}px, ${o.y}px) translate(-50%, -100%) scale(${l})`}}banner(t,e="",i="",n=-1){let r=ot("#banner");r.className="show "+i,ot(".bt",r).textContent=t,ot(".bs",r).textContent=e,n>=0&&this.game.match?r.style.setProperty("--tc",this.game.match.teamColor(n)):r.style.removeProperty("--tc"),r.offsetWidth,r.classList.add("anim"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>r.classList.add("hidden"),i==="goal"?3200:i==="end"?4e3:2200)}toast(t){let e=ot("#toast");e.textContent=t,e.className="show",clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.classList.add("hidden"),2600)}power(t,e="\u0634\u0648\u0637\u0629"){let i=ot(".power",this.hudEl);ot("span",i).textContent=e,i.classList.toggle("hidden",t<=0),ot("i",i).style.width=Math.round(t*100)+"%",i.classList.toggle("max",t>=.95)}scandalPulse(t){let e=ot(`.m${t}`,this.hudEl);e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse")}pens(t,e){let i=ot(".pensbar",this.hudEl);if(!t){i.classList.add("hidden");return}i.classList.remove("hidden");for(let n=0;n<2;n++){let r=ot(`.p${n}`,i);ot("b",r).textContent=e.teamDef(n).short,r.style.setProperty("--tc",e.teamColor(n));let o=t.kicks[n],a=Math.max(5,o.length+(t.turn===n?1:0)),l="";for(let c=0;c<a;c++)l+=c<o.length?o[c]?'<i class="ok">\u25CF</i>':'<i class="no">\u2715</i>':"<i>\u25CB</i>";ot("span",r).innerHTML=l,r.classList.toggle("now",t.turn===n&&t.phase!=="setup")}}replay(t){ot(".replaytag",this.hudEl).classList.toggle("hidden",!t),this.hudEl.classList.toggle("replaying",t),ot("#banner").classList.add("hidden"),t&&ot("#toast").classList.add("hidden")}headmaster(t){ot(".hm",this.hudEl).classList.toggle("hidden",!t)}showResult(t){let e=this.screens.result,i=t.teamDef(0),n=t.teamDef(1),r=t.winner,o=t.controllers[0]&&t.controllers[1],a=r===-1?"\u062A\u0639\u0627\u062F\u0644!":o?`${t.teamDef(r).short} \u0643\u0633\u0628\u0648\u0627!`:r===0?"\u0643\u0633\u0628\u062A! \u{1F389}":"\u062E\u0633\u0631\u062A \u0627\u0644\u0645\u0631\u0629 \u062F\u064A",l=null;t.opts.tourney&&(l=this.game.tourney.record(t));let c=t.stats.goals.map(u=>`<li style="--tc:${t.teamColor(u.team)}">\u26BD ${u.name}${u.own?" (\u0641\u064A \u0646\u0641\u0633\u0647)":""}</li>`).join("")||"<li>\u0645\u0641\u064A\u0634 \u062C\u0648\u0627\u0646\u0627\u062A</li>";ot(".res",e).innerHTML=`
      <h2 class="ttl">${a}</h2>
      <div class="final"><span style="--tc:${i.ui}">${i.name}</span><b>${br(t.score[0],t.score[1])}</b><span style="--tc:${n.ui}">${n.name}</span></div>
      ${t.pensResult?`<div class="pensres">\u0636\u0631\u0628\u0627\u062A \u0627\u0644\u062C\u0632\u0627\u0621: ${br(t.pensResult[0],t.pensResult[1])}</div>`:""}
      <ul class="scorers">${c}</ul>
      <div class="stats">
        <div><b>${br(t.stats.fouls[0],t.stats.fouls[1])}</b><small>\u0641\u0627\u0648\u0644\u0627\u062A</small></div>
        <div><b>${br(t.stats.nutmegs[0],t.stats.nutmegs[1])}</b><small>\u0643\u0628\u0627\u0631\u064A</small></div>
        <div><b>${br(t.stats.shots[0],t.stats.shots[1])}</b><small>\u0634\u0648\u0637</small></div>
        <div><b>${le(t.stats.fights)}</b><small>\u062E\u0646\u0627\u0642\u0627\u062A</small></div>
        <div><b>${le(t.stats.momCalls)}</b><small>\u0623\u0645\u0647 \u0646\u0627\u062F\u062A</small></div>
        <div><b>${le(t.stats.windows)}</b><small>\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631</small></div>
      </div>
      ${l?.betRes?`<div class="betres ${l.betRes}">${l.bet.icon} ${l.betRes==="win"?`\u0643\u0633\u0628\u062A \u0627\u0644\u0631\u0647\u0627\u0646! ${l.bet.name} \u0639\u0644\u0649 \u062D\u0633\u0627\u0628\u0647\u0645 (+${le(l.bet.stake)})`:`\u062E\u0633\u0631\u062A \u0627\u0644\u0631\u0647\u0627\u0646.. \u0647\u062A\u0639\u0632\u0645\u0647\u0645 \u0639\u0644\u0649 ${l.bet.name} (-${le(l.bet.stake)})`}</div>`:""}
      ${l?`<div class="earn">\u{1F4B0} ${l.earn>=0?`\u0643\u0633\u0628\u062A ${le(l.earn)}`:`\u062E\u0633\u0631\u062A ${le(-l.earn)}`} \u062C\u0646\u064A\u0647 ${l.result==="win"?"":"\u2022 \u0644\u0627\u0632\u0645 \u062A\u0643\u0633\u0628 \u0639\u0634\u0627\u0646 \u062A\u0643\u0645\u0644"}</div>`:""}`;let h=ot(".actions",e);if(h.innerHTML="",t.opts.tourney){let u=ti("button","big","\u0643\u0645\u0651\u0644 \u0627\u0644\u0628\u0637\u0648\u0644\u0629");u.onclick=()=>{ct.play("click"),this.game.quitToMenu(!0)},h.append(u)}else{let u=ti("button","big","\u0645\u0627\u062A\u0634 \u062A\u0627\u0646\u064A");u.onclick=()=>{ct.play("click"),this.game.restartMatch()};let f=ti("button","","\u0627\u0644\u0642\u0627\u0626\u0645\u0629");f.onclick=()=>{ct.play("click"),this.game.quitToMenu()},h.append(u,f)}this.show("result")}};var Hp="matsh-elhara-tourney-v1";function Iu(){return{stage:0,money:0,owned:{},foul:0,results:[],done:!1}}var Pl=class{constructor(){this.s=Iu();try{let t=localStorage.getItem(Hp);t&&(this.s=Object.assign(Iu(),JSON.parse(t)))}catch{}}save(){try{localStorage.setItem(Hp,JSON.stringify(this.s))}catch{}}reset(){this.s=Iu(),this.save()}get stage(){return this.s.stage}get money(){return this.s.money}get list(){return pr}current(){return pr[this.s.stage]}owned(t){return this.s.owned[t]||0}buy(t){let e=il.find(i=>i.id===t);return!e||this.s.money<e.price||!e.consumable&&this.owned(t)>=e.max?!1:(this.s.money-=e.price,e.consumable?this.s.foul=(this.s.foul||0)+1:this.s.owned[t]=(this.s.owned[t]||0)+1,this.save(),!0)}mods(){let t=this.s.owned,e=this.s.foul>0;return{speed:(t.shoes?1.06:1)*(e?1.03:1),shot:t.ball?1.1:1,control:t.ball?1.2:1,stamina:(t.kits?1.2:1)*(e?1.25:1),kits:!!t.kits,shoes:!!t.shoes}}record(t){let[e,i]=t.score,n=e*ms.goal+t.stats.nutmegs[0]*ms.nutmeg,r="draw",o=t.winner;o===0?(n+=e>i?ms.win:Math.round(ms.win*.75),r="win"):o===-1?n+=ms.draw:r="lose",i===0&&(n+=ms.cleanSheet);let a=t.opts.bet,l=null;return a&&o!==-1&&(l=o===0?"win":"lose",n+=o===0?a.stake:-Math.min(a.stake,this.s.money+n)),this.s.money=Math.max(0,this.s.money+n),this.s.foul>0&&this.s.foul--,this.s.results[this.s.stage]={score:[e,i],result:r,pens:t.pensResult||null},r==="win"&&(this.s.stage++,this.s.stage>=pr.length&&(this.s.done=!0)),this.save(),{earn:n,result:r,bet:a,betRes:l}}};var ku="matsh-elhara-settings-v1",Lu=class{constructor(){this.settings={quality:"high",volume:.8,muted:!1,hints:"on",passAssist:"normal",vibrate:"on",autoQuality:"on",replay:"on"};try{Object.assign(this.settings,JSON.parse(localStorage.getItem(ku)||"{}"))}catch{}Cu()&&!localStorage.getItem?.(ku)&&(this.settings.quality="medium"),ct.setVolume(this.settings.volume),ct.setMuted(this.settings.muted),this.container=document.getElementById("view"),this.renderer=new js({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=qe,this.renderer.toneMapping=hs,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qh,this.container.appendChild(this.renderer.domElement),this.camera=new Ye(40,16/9,.1,900),this.ui=new Cl(this),this.tourney=new Pl,this.touch=Cu(),this.touchPad=null,this.touch&&this.ensureTouchPad(),this.match=null,this.paused=!1,this.clock=new ar,window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),window.addEventListener("keydown",e=>{!this.match||this.match.opts.demo||this.match.state==="end"||(e.code==="Escape"||e.code==="KeyP"&&!this.match.opts.versus)&&this.togglePause()});let t=()=>{ct.init(),this.goLandscape()};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),document.addEventListener("visibilitychange",()=>{document.hidden&&this.match&&!this.match.opts.demo&&!this.paused&&this.togglePause(!0)}),this.resize()}get quality(){return this.settings.quality}ensureTouchPad(){return this.touchPad||(this.touchPad=new Ml(document.getElementById("touch")),this.touchPad.setLayout(this.settings.touchLayout),this.touchPad.show(!1)),this.touchPad}async init(){this.ui.show("loading");try{await Promise.race([Promise.all(["400","700","900"].map(t=>document.fonts.load(`${t} 20px Cairo`,"\u0639\u0631\u0628\u064A"))),new Promise(t=>setTimeout(t,2500))])}catch{}this.startDemo(),this.ui.show("menu"),this.loop(),document.body.dataset.ready="1"}debugStep(t,e=1/60){let i=Math.round(t/e);for(let n=0;n<i;n++)this.match&&this.match.update(e)}setupComposer(){let t=this.match&&this.match.night;this.renderer.toneMappingExposure=this.match&&!t&&this.match.weather==="rain"?.95:1.15;let e=this.quality,i=Math.min(window.devicePixelRatio||1,e==="high"?2:e==="medium"?1.5:1);this.renderer.setPixelRatio(i),this.renderer.shadowMap.enabled=e!=="low"||!t,this.composer=null;let n=this.match&&this.match.opts.demo,r=!1;if(t&&e!=="low"||r){let o=this.renderer.getDrawingBufferSize(new it),a=new Xe(o.x,o.y,{type:ai,samples:e==="high"?4:0}),l=new Fa(this.renderer,a);if(l.addPass(new Ha(this.match.scene,this.camera)),r){let c=new ur(this.match.scene,this.camera,o.x,o.y);c.output=ur.OUTPUT.Default,c.blendIntensity=.85,c.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.2,scale:1,samples:12}),l.addPass(c)}t&&l.addPass(new hr(new it(o.x,o.y),.5,.5,.9)),l.addPass(new Va),this.composer=l}}resize(){let t=this.touch&&window.innerHeight>window.innerWidth;Mr.rot=t,document.documentElement.classList.toggle("rot",t);let e=t?window.innerHeight:window.innerWidth,i=t?window.innerWidth:window.innerHeight,n=document.getElementById("app");n.style.width=e+"px",n.style.height=i+"px",this.width=e,this.height=i,this.renderer.setSize(e,i),this.camera.aspect=e/i,this.camera.fov=e/i<1.2?50:34,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(e,i)}async goLandscape(){if(!(!this.touch||this.triedLock)){this.triedLock=!0;try{let t=document.documentElement;!document.fullscreenElement&&t.requestFullscreen&&await t.requestFullscreen({navigationUI:"hide"}),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}setTimeout(()=>this.resize(),300)}}setSetting(t,e){this.settings[t]=e;try{localStorage.setItem(ku,JSON.stringify(this.settings))}catch{}t==="volume"&&ct.setVolume(e),t==="muted"&&ct.setMuted(e),t==="quality"&&(this.setupComposer(),this.resize())}disposeMatch(){this.match&&(this.match.dispose(),this.match=null,this.composer=null)}startDemo(t,e){this.disposeMatch();let i=Object.keys(zi),n=te(i),r=te(i);for(;r===n;)r=te(i);this.match=new fo(this,{mapId:t||te(el),night:e??Math.random()<.45,sunset:Math.random()<.35,home:n,away:r,difficulty:"normal",controllers:[null,null],rule:{type:"time",seconds:99999},demo:!0}),this.setupComposer(),this.resize(),this.touchPad&&this.touchPad.show(!1)}makeControllers(t){return t?[new _r({keymap:"p1",gamepad:0,color:"#ffd23f",label:"\u0661"}),new _r({keymap:"p2",gamepad:1,color:"#62f0ff",label:"\u0662"})]:[new _r({keymap:"solo",gamepad:0,touch:this.touch?this.touchPad:null,color:"#ffd23f"}),null]}startFromSetup(t){let e=t.rule.startsWith("t")?{type:"time",seconds:+t.rule.slice(1)}:{type:"goals",n:+t.rule.slice(1)};this.startMatch({mapId:t.map,night:t.time==="night",sunset:t.time==="sunset",weather:t.weather||"clear",home:t.home,away:t.away,difficulty:t.diff,versus:t.versus,rule:e})}startTourneyMatch(t=null){let e=this.tourney.current();e&&this.startMatch({mapId:e.map,night:e.time==="night",sunset:e.time==="sunset",weather:e.weather||"clear",home:"home",away:e.opp,difficulty:this.tourney.stage>=3?"hard":"normal",rule:{type:"time",seconds:180},tourney:!0,mods:[this.tourney.mods(),{}],bet:t})}startMatch(t){ct.init(),this.lastOpts=t,this.ui.hideScreens(),this.ui.show("loading"),setTimeout(()=>{this.disposeMatch();let e=this.makeControllers(t.versus);this.match=new fo(this,{...t,controllers:e}),this.setupComposer(),this.resize(),this.paused=!1,this.ui.hideScreens(),this.touchPad&&this.touchPad.show(this.touch&&!t.versus),this.clock.getDelta()},30)}restartMatch(){this.lastOpts&&this.startMatch(this.lastOpts)}quitToMenu(t=!1){this.paused=!1,this.startDemo(),t||this.lastOpts&&this.lastOpts.tourney&&t?this.ui.showTourney():this.ui.show("menu")}togglePause(t){if(!(!this.match||this.match.opts.demo)){this.paused=t!==void 0?t:!this.paused,this.paused?this.ui.show("pause"):this.ui.hideScreens();for(let e of this.match.controllers)e&&e.clear()}}onEvent(){}watchFps(t){let e=this.match;if(!e||e.opts.demo||this.paused||this.settings.autoQuality==="off"||this.settings.quality==="low"){this.fpsT=0,this.fpsN=0;return}if(e!==this.fpsMatch&&(this.fpsMatch=e,this.fpsT=0,this.fpsN=0,this.fpsWarm=0),this.fpsWarm=(this.fpsWarm||0)+t,this.fpsWarm<2||(this.fpsT+=t,this.fpsN++,this.fpsT<4))return;let i=this.fpsN/this.fpsT;if(this.fpsT=0,this.fpsN=0,i<30){let n=this.settings.quality==="high"?"medium":"low";this.setSetting("quality",n),this.ui.toast(n==="medium"?"\u062E\u0641\u0641\u0646\u0627 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0634\u0648\u064A\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0644\u0639\u0628 \u064A\u0628\u0642\u0649 \u0646\u0627\u0639\u0645":"\u062E\u0641\u0641\u0646\u0627 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0644\u0644\u0622\u062E\u0631 \u0639\u0634\u0627\u0646 \u0627\u0644\u062C\u0647\u0627\u0632"),this.fpsWarm=0}}loop(){requestAnimationFrame(()=>this.loop());let t=this.clock.getDelta();this.watchFps(t);let e=Math.min(t,.05);this.match&&!this.paused&&this.match.update(e),this.match&&(this.composer?this.composer.render():this.renderer.render(this.match.scene,this.camera))}};"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})});var Vp=new Lu;window.__game=Vp;Vp.init();})();
