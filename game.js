(()=>{var th="169";var Mf=0,$h=1,bf=2;var id=1,eh=2,Zn=3,fi=0,$e=1,Ce=2,On=0,us=1,Bn=2,Zh=3,Kh=4,Sf=5,Pi=100,Ef=101,wf=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,If=203,Rl=204,Cl=205,Lf=206,Df=207,kf=208,Uf=209,Nf=210,zf=211,Ff=212,Of=213,Bf=214,Pl=0,Il=1,Ll=2,ms=3,Dl=4,kl=5,Ul=6,Nl=7,sd=0,Hf=1,Vf=2,di=0,nh=1,ih=2,sh=3,yr=4,Gf=5,rh=6,ah=7;var rd=300,gs=301,xs=302,zl=303,Fl=304,Ka=306,ir=1e3,Li=1001,Ol=1002,bn=1003,Wf=1004;var kr=1005;var Ln=1006,Wo=1007;var Di=1008;var ti=1009,ad=1010,od=1011,sr=1012,oh=1013,ki=1014,Jn=1015,mn=1016,lh=1017,ch=1018,ys=1020,ld=35902,cd=1021,hd=1022,Dn=1023,ud=1024,dd=1025,ds=1026,vs=1027,fd=1028,hh=1029,pd=1030,uh=1031;var dh=1033,da=33776,fa=33777,pa=33778,ma=33779,Bl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,$l=37809,Zl=37810,Kl=37811,Jl=37812,Ql=37813,jl=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,ga=36492,oc=36494,lc=36495,md=36283,cc=36284,hc=36285,uc=36286;var ya=2300,dc=2301,Xo=2302,Jh=2400,Qh=2401,jh=2402;var Xf=3200,qf=3201;var gd=0,Yf=1,hi="",Ye="srgb",xi="srgb-linear",fh="display-p3",Ja="display-p3-linear",va="linear",me="srgb",_a="rec709",Ma="p3";var Xi=7680;var tu=519,$f=512,Zf=513,Kf=514,xd=515,Jf=516,Qf=517,jf=518,tp=519,fc=35044;var eu="300 es",Qn=2e3,ba=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,Sa=180/Math.PI;function jn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function He(s,t,e){return Math.max(t,Math.min(e,s))}function ep(s,t){return(s%t+t)%t}function Yo(s,t,e){return(1-e)*s+e*t}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Q=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],v=i[4],b=i[7],C=i[2],T=i[5],R=i[8];return r[0]=a*x+o*_+l*C,r[3]=a*m+o*v+l*T,r[6]=a*p+o*b+l*R,r[1]=c*x+h*_+u*C,r[4]=c*m+h*v+u*T,r[7]=c*p+h*b+u*R,r[2]=f*x+d*_+g*C,r[5]=f*m+d*v+g*T,r[8]=f*p+d*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new Bt;function yd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function np(){let s=Ea("canvas");return s.style.display="block",s}var nu={};function xa(s){s in nu||(nu[s]=!0,console.warn(s))}function ip(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var iu=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),su=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[xi]:{transfer:va,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ye]:{transfer:me,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ja]:{transfer:va,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(su),fromReference:s=>s.applyMatrix3(iu)},[fh]:{transfer:me,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(su),fromReference:s=>s.applyMatrix3(iu).convertLinearToSRGB()}},ap=new Set([xi,Ja]),se={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ap.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Vs[t].toReference,i=Vs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Vs[s].primaries},getTransfer:function(s){return s===hi?va:Vs[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Vs[t].luminanceCoefficients)}};function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qi,pc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Ea("canvas")),qi.width=t.width,qi.height=t.height;let n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},op=0,wa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ko(i[a].image)):r.push(Ko(i[a]))}else r=Ko(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ko(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lp=0,fn=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Li,i=Li,r=Ln,a=Di,o=Dn,l=ti,c=s.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=jn(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=rd;fn.DEFAULT_ANISOTROPY=1;var fe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(d+1)/2,C=(p+1)/2,T=(h+f)/4,R=(u+x)/4,I=(g+m)/4;return v>b&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=R/n):b>C?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ta=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,p*_);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let b=o*_;if(l=l*m+f*b,c=c*m+d*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new M,ru=new mi,Ui=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Nr.subVectors(this.max,Gs),Yi.subVectors(t.a,Gs),$i.subVectors(t.b,Gs),Zi.subVectors(t.c,Gs),si.subVectors($i,Yi),ri.subVectors(Zi,$i),Si.subVectors(Yi,Zi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Si.z,Si.y,si.z,0,-si.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-si.y,si.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!Qo(e,Yi,$i,Zi,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,Yi,$i,Zi,Nr))?!1:(zr.crossVectors(si,ri),e=[zr.x,zr.y,zr.z],Qo(e,Yi,$i,Zi,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new M,new M,new M,new M,new M,new M,new M,new M],Cn=new M,Ur=new Ui,Yi=new M,$i=new M,Zi=new M,si=new M,ri=new M,Si=new M,Gs=new M,Nr=new M,zr=new M,Ei=new M;function Qo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ei.fromArray(s,r);let o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cp=new Ui,Ws=new M,jo=new M,Ni=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(jo)),this.expandByPoint(Ws.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new M,tl=new M,Fr=new M,ai=new M,el=new M,Or=new M,nl=new M,rr=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tl.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=ai.dot(this.direction),l=-ai.dot(Fr),c=ai.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(tl).addScaledVector(Fr,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){el.subVectors(e,t),Or.subVectors(n,t),nl.crossVectors(el,Or);let a=this.direction.dot(nl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);let l=o*this.direction.dot(Or.crossVectors(ai,Or));if(l<0)return null;let c=o*this.direction.dot(el.cross(ai));if(c<0||l+c>a)return null;let h=-o*ai.dot(nl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hp,t,up)}lookAt(t,e,n){let i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(n,un),oi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(n,un)),oi.normalize(),Br.crossVectors(un,oi),i[0]=oi.x,i[4]=Br.x,i[8]=un.x,i[1]=oi.y,i[5]=Br.y,i[9]=un.y,i[2]=oi.z,i[6]=Br.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],v=n[7],b=n[11],C=n[15],T=i[0],R=i[4],I=i[8],X=i[12],y=i[1],E=i[5],U=i[9],N=i[13],O=i[2],J=i[6],H=i[10],G=i[14],z=i[3],et=i[7],lt=i[11],dt=i[15];return r[0]=a*T+o*y+l*O+c*z,r[4]=a*R+o*E+l*J+c*et,r[8]=a*I+o*U+l*H+c*lt,r[12]=a*X+o*N+l*G+c*dt,r[1]=h*T+u*y+f*O+d*z,r[5]=h*R+u*E+f*J+d*et,r[9]=h*I+u*U+f*H+d*lt,r[13]=h*X+u*N+f*G+d*dt,r[2]=g*T+x*y+m*O+p*z,r[6]=g*R+x*E+m*J+p*et,r[10]=g*I+x*U+m*H+p*lt,r[14]=g*X+x*N+m*G+p*dt,r[3]=_*T+v*y+b*O+C*z,r[7]=_*R+v*E+b*J+C*et,r[11]=_*I+v*U+b*H+C*lt,r[15]=_*X+v*N+b*G+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,b=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,C=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,T=e*_+n*v+i*b+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=_*R,t[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*R,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*R,t[4]=v*R,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*R,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*R,t[8]=b*R,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*R,t[12]=C*R,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=l*c,v=l*h,b=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(x+p))*C,i[1]=(d+b)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(d-b)*T,i[5]=(1-(f+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+v)*R,i[9]=(m-_)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ki.set(i[0],i[1],i[2]).length(),a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Pn.copy(this);let c=1/r,h=1/a,u=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(o===Qn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Qn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h,g,x;if(o===Qn)g=(a+r)*u,x=-2*u;else if(o===ba)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new M,Pn=new _e,hp=new M(0,0,0),up=new M(1,1,1),oi=new M,Br=new M,un=new M,au=new _e,ou=new mi,Sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,lu=new M,Ji=new mi,qn=new _e,Hr=new M,Xs=new M,fp=new M,pp=new mi,cu=new M(1,0,0),hu=new M(0,1,0),uu=new M(0,0,1),du={type:"added"},mp={type:"removed"},Qi={type:"childadded",child:null},il={type:"childremoved",child:null},De=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new M,e=new Sn,n=new mi,i=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Bt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Xs,Hr,this.up):qn.lookAt(Hr,Xs,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(qn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mp),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};De.DEFAULT_UP=new M(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new M,Yn=new M,sl=new M,$n=new M,ji=new M,ts=new M,fu=new M,rl=new M,al=new M,ol=new M,ll=new fe,cl=new fe,hl=new fe,ui=class s{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Yn.subVectors(n,e),sl.subVectors(t,e);let a=In.dot(In),o=In.dot(Yn),l=In.dot(sl),c=Yn.dot(Yn),h=Yn.dot(sl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(hl,r.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Yn.subVectors(t,e),In.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),In.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ji.subVectors(i,n),ts.subVectors(r,n),rl.subVectors(t,n);let l=ji.dot(rl),c=ts.dot(rl);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,i);let h=ji.dot(al),u=ts.dot(al);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);ol.subVectors(t,r);let d=ji.dot(ol),g=ts.dot(ol);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ts,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return fu.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(fu,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(ji,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ul(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=ep(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ul(a,r,t+1/3),this.g=ul(a,r,t),this.b=ul(a,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return se.fromWorkingColorSpace(qe.copy(this),t),Math.round(He(qe.r*255,0,255))*65536+Math.round(He(qe.g*255,0,255))*256+Math.round(He(qe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ye){se.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Vr);let n=Yo(li.h,Vr.h,e),i=Yo(li.s,Vr.s,e),r=Yo(li.l,Vr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Rt;Rt.NAMES=vd;var gp=0,Hn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=us,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},le=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new M,Gr=new Q,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}};var Ra=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ht=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},xp=0,Mn=new _e,dl=new De,es=new M,dn=new Ui,qs=new Ui,Oe=new M,ge=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?Ca:Ra)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(dn.min,qs.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,qs.max),dn.expandByPoint(Oe)):(dn.expandByPoint(qs.min),dn.expandByPoint(qs.max))}dn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),Oe.add(es)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new M,l[I]=new M;let c=new M,h=new M,u=new M,f=new Q,d=new Q,g=new Q,x=new M,m=new M;function p(I,X,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,X),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),o[I].add(x),o[X].add(x),o[y].add(x),l[I].add(m),l[X].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,X=_.length;I<X;++I){let y=_[I],E=y.start,U=y.count;for(let N=E,O=E+U;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new M,b=new M,C=new M,T=new M;function R(I){C.fromBufferAttribute(i,I),T.copy(C);let X=o[I];v.copy(X),v.sub(C.multiplyScalar(C.dot(X))).normalize(),b.crossVectors(T,X);let E=b.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,E)}for(let I=0,X=_.length;I<X;++I){let y=_[I],E=y.start,U=y.count;for(let N=E,O=E+U;N<O;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new M,r=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pu=new _e,wi=new rr,Wr=new Ni,mu=new M,Xr=new M,qr=new M,Yr=new M,fl=new M,$r=new M,gu=new M,Zr=new M,ot=class extends De{constructor(t=new ge,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fl.fromBufferAttribute(u,t),a?$r.addScaledVector(fl,h):$r.addScaledVector(fl.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Wr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Wr,mu)===null||wi.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),wi.copy(t.ray).applyMatrix4(pu),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=_,C=v;b<C;b+=3){let T=o.getX(b),R=o.getX(b+1),I=o.getX(b+2);i=Kr(this,p,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);i=Kr(this,a,t,n,c,h,u,_,v,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=_,C=v;b<C;b+=3){let T=b,R=b+1,I=b+2;i=Kr(this,p,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,b=m+2;i=Kr(this,a,t,n,c,h,u,_,v,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function yp(s,t,e,n,i,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===fi,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:s}}function Kr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Xr),s.getVertexPosition(l,qr),s.getVertexPosition(c,Yr);let h=yp(s,t,e,n,Xr,qr,Yr,gu);if(h){let u=new M;ui.getBarycoord(gu,Xr,qr,Yr,u),i&&(h.uv=ui.getInterpolatedAttribute(i,o,l,c,u,new Q)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new M,materialIndex:0};ui.getNormal(Xr,qr,Yr,f.normal),h.face=f,h.barycoord=u}return h}var xe=class s extends ge{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(x,m,p,_,v,b,C,T,R,I,X){let y=b/R,E=C/I,U=b/2,N=C/2,O=T/2,J=R+1,H=I+1,G=0,z=0,et=new M;for(let lt=0;lt<H;lt++){let dt=lt*E-N;for(let Ct=0;Ct<J;Ct++){let Yt=Ct*y-U;et[x]=Yt*_,et[m]=dt*v,et[p]=O,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[p]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Ct/R),u.push(1-lt/I),G+=1}}for(let lt=0;lt<I;lt++)for(let dt=0;dt<R;dt++){let Ct=f+dt+J*lt,Yt=f+dt+J*(lt+1),Y=f+(dt+1)+J*(lt+1),j=f+(dt+1)+J*lt;l.push(Ct,Yt,j),l.push(Yt,Y,j),z+=6}o.addGroup(d,z,X),d+=z,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}function vp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _d(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var yi={clone:_s,merge:Ke},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pa=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new M,xu=new Q,yu=new Q,Ve=class extends Pa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,xu,yu),e.subVectors(yu,xu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,is=1,xc=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(ns,is,t,e);i.layers=this.layers,this.add(i);let r=new Ve(ns,is,t,e);r.layers=this.layers,this.add(r);let a=new Ve(ns,is,t,e);a.layers=this.layers,this.add(a);let o=new Ve(ns,is,t,e);o.layers=this.layers,this.add(o);let l=new Ve(ns,is,t,e);l.layers=this.layers,this.add(l);let c=new Ve(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ia=class extends fn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yc=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ia(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xe(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:On});r.uniforms.tEquirect.value=e;let a=new ot(i,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Ln),new xc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},pl=new M,bp=new M,Sp=new Bt,Kn=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=pl.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),i=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Ni,Jr=new M,ar=class{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],v=i[14],b=i[15];if(n[0].setComponents(l-r,f-c,m-d,b-p).normalize(),n[1].setComponents(l+r,f+c,m+d,b+p).normalize(),n[2].setComponents(l+a,f+h,m+g,b+_).normalize(),n[3].setComponents(l-a,f-h,m-g,b-_).normalize(),n[4].setComponents(l-o,f-u,m-x,b-v).normalize(),e===Qn)n[5].setComponents(l+o,f+u,m+x,b+v).normalize();else if(e===ba)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Jr.x=i.normal.x>0?t.max.x:t.min.x,Jr.y=i.normal.y>0?t.max.y:t.min.y,Jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Md(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ep(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var pe=class s extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-a;for(let v=0;v<c;v++){let b=v*u-r;g.push(b,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let v=_+c*p,b=_+c*(p+1),C=_+1+c*(p+1),T=_+1+c*p;d.push(v,b,T),d.push(b,C,T)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`
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
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:kp,begin_vertex:Up,beginnormal_vertex:Np,bsdfs:zp,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:$p,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:jp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:_m,lights_phong_pars_fragment:Mm,lights_physical_fragment:bm,lights_physical_pars_fragment:Sm,lights_fragment_begin:Em,lights_fragment_maps:wm,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Pm,map_fragment:Im,map_pars_fragment:Lm,map_particle_fragment:Dm,map_particle_pars_fragment:km,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:zm,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Gm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:jm,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:x0,transmission_fragment:y0,transmission_pars_fragment:v0,uv_pars_fragment:_0,uv_pars_vertex:M0,uv_vertex:b0,worldpos_vertex:S0,background_vert:E0,background_frag:w0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:I0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:k0,equirect_frag:U0,linedashed_vert:N0,linedashed_frag:z0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:$0,meshphysical_frag:Z0,meshtoon_vert:K0,meshtoon_frag:J0,points_vert:Q0,points_frag:j0,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},zn={basic:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ke([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ke([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ke([ct.points,ct.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ke([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ke([ct.common,ct.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ke([ct.sprite,ct.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ke([ct.common,ct.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ke([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};zn.physical={uniforms:Ke([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Qr={r:0,b:0,g:0},Ai=new Sn,sg=new _e;function rg(s,t,e,n,i,r,a){let o=new Rt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,b=g(_);b===null?p(o,l):b&&b.isColor&&(p(b,1),v=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===Ka)?(h===void 0&&(h=new ot(new xe(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:_s(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Ai)),h.material.toneMapped=se.getTransfer(b.colorSpace)!==me,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ot(new pe(2,2),new Pe({name:"BackgroundMaterial",uniforms:_s(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=se.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Qr,_d(s)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:x,addToRenderList:m}}function ag(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,E,U,N,O){let J=!1,H=u(N,U,E);r!==H&&(r=H,c(r.object)),J=d(y,N,U,O),J&&g(y,N,U,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(y,E,U,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,E,U){let N=U.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let J=O[E.id];J===void 0&&(J={},O[E.id]=J);let H=J[N];return H===void 0&&(H=f(l()),J[N]=H),H}function f(y){let E=[],U=[],N=[];for(let O=0;O<e;O++)E[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,E,U,N){let O=r.attributes,J=E.attributes,H=0,G=U.getAttributes();for(let z in G)if(G[z].location>=0){let lt=O[z],dt=J[z];if(dt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),lt===void 0||lt.attribute!==dt||dt&&lt.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(y,E,U,N){let O={},J=E.attributes,H=0,G=U.getAttributes();for(let z in G)if(G[z].location>=0){let lt=J[z];lt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));let dt={};dt.attribute=lt,lt&&lt.data&&(dt.data=lt.data),O[z]=dt,H++}r.attributes=O,r.attributesNum=H,r.index=N}function x(){let y=r.newAttributes;for(let E=0,U=y.length;E<U;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){let U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),O[y]!==E&&(s.vertexAttribDivisor(y,E),O[y]=E)}function _(){let y=r.newAttributes,E=r.enabledAttributes;for(let U=0,N=E.length;U<N;U++)E[U]!==y[U]&&(s.disableVertexAttribArray(U),E[U]=0)}function v(y,E,U,N,O,J,H){H===!0?s.vertexAttribIPointer(y,E,U,O,J):s.vertexAttribPointer(y,E,U,N,O,J)}function b(y,E,U,N){x();let O=N.attributes,J=U.getAttributes(),H=E.defaultAttributeValues;for(let G in J){let z=J[G];if(z.location>=0){let et=O[G];if(et===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){let lt=et.normalized,dt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;let Yt=Ct.buffer,Y=Ct.type,j=Ct.bytesPerElement,ht=Y===s.INT||Y===s.UNSIGNED_INT||et.gpuType===oh;if(et.isInterleavedBufferAttribute){let it=et.data,At=it.stride,It=et.offset;if(it.isInstancedInterleavedBuffer){for(let Qt=0;Qt<z.locationSize;Qt++)p(z.location+Qt,it.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Qt=0;Qt<z.locationSize;Qt++)m(z.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Qt=0;Qt<z.locationSize;Qt++)v(z.location+Qt,dt/z.locationSize,Y,lt,At*j,(It+dt/z.locationSize*Qt)*j,ht)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)p(z.location+it,et.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<z.locationSize;it++)m(z.location+it);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let it=0;it<z.locationSize;it++)v(z.location+it,dt/z.locationSize,Y,lt,dt*j,dt/z.locationSize*it*j,ht)}}else if(H!==void 0){let lt=H[G];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(z.location,lt);break;case 3:s.vertexAttrib3fv(z.location,lt);break;case 4:s.vertexAttrib4fv(z.location,lt);break;default:s.vertexAttrib1fv(z.location,lt)}}}}_()}function C(){I();for(let y in n){let E=n[y];for(let U in E){let N=E[U];for(let O in N)h(N[O].object),delete N[O];delete E[U]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let U in E){let N=E[U];for(let O in N)h(N[O].object),delete N[O];delete E[U]}delete n[y.id]}function R(y){for(let E in n){let U=n[E];if(U[y.id]===void 0)continue;let N=U[y.id];for(let O in N)h(N[O].object),delete N[O];delete U[y.id]}}function I(){X(),a=!0,r!==i&&(r=i,c(r.object))}function X(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:X,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function og(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)e.update(g,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Dn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:C,maxSamples:T}}function cg(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Kn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,b=p.clippingState||null;l.value=b,b=h(g,f,v,d);for(let C=0;C!==v;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=d;v!==x;++v,b+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hg(s){let t=new WeakMap;function e(a,o){return o===zl?a.mapping=gs:o===Fl&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===zl||o===Fl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ms=class extends Pa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,vu=[.125,.215,.35,.446,.526,.582],Ii=20,ml=new Ms,_u=new Rt,gl=null,xl=0,yl=0,vl=!1,Ci=(1+Math.sqrt(5))/2,ss=1/Ci,Mu=[new M(-Ci,ss,0),new M(Ci,ss,0),new M(-ss,0,Ci),new M(ss,0,Ci),new M(0,Ci,-ss),new M(0,Ci,ss),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],La=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,xl,yl),this._renderer.xr.enabled=vl,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:mn,format:Dn,colorSpace:xi,depthBuffer:!1},i=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return i}_compileMaterial(t){let e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,i){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_u),h.toneMapping=di,h.autoClear=!1;let d=new le({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new ot(new xe,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(_u),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;jr(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gs||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mu[(i-r-1)%Mu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],_=0;for(let R=0;R<Ii;++R){let I=R/x,X=Math.exp(-I*I/2);p.push(X),R===0?_+=X:R<m&&(_+=2*X)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let b=this._sizeLods[i],C=3*b*(i>v-cs?i-v+cs:0),T=4*(this._cubeSize-b);jr(e,C,T,3*b,2*b),l.setRenderTarget(e),l.render(u,ml)}};function ug(s){let t=[],e=[],n=[],i=s,r=s-cs+1+vu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-cs?l=vu[a-s+cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),v=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,I=T>2?0:-1,X=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];_.set(X,x*g*T),v.set(f,m*g*T);let y=[T,T,T,T,T,T];b.set(y,p*g*T)}let C=new ge;C.setAttribute("position",new Je(_,x)),C.setAttribute("uv",new Je(v,m)),C.setAttribute("faceIndex",new Je(b,p)),t.push(C),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(s,t,e){let n=new Ge(s,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dg(s,t,e){let n=new Float32Array(Ii),i=new M(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Su(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Eu(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function fg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===zl||l===Fl,h=l===gs||l===xs;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new La(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new La(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mg(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,b=_.length;v<b;v+=3){let C=_[v+0],T=_[v+1],R=_[v+2];f.push(C,T,T,R,R,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,b=_.length/3-1;v<b;v+=3){let C=v+0,T=v+1,R=v+2;f.push(C,T,T,R,R,C)}}else return;let m=new(yd(f)?Ca:Ra)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gg(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_];for(let _=0;_<x.length;_++)e.update(p,n,x[_])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yg(s,t,e){let n=new WeakMap,i=new fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let X=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",X)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let b=o.attributes.position.count*v,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*C*4*u),R=new Ta(T,b,C,u);R.type=Jn,R.needsUpdate=!0;let I=v*4;for(let y=0;y<u;y++){let E=m[y],U=p[y],N=_[y],O=b*C*4*y;for(let J=0;J<E.count;J++){let H=J*I;d===!0&&(i.fromBufferAttribute(E,J),T[O+H+0]=i.x,T[O+H+1]=i.y,T[O+H+2]=i.z,T[O+H+3]=0),g===!0&&(i.fromBufferAttribute(U,J),T[O+H+4]=i.x,T[O+H+5]=i.y,T[O+H+6]=i.z,T[O+H+7]=0),x===!0&&(i.fromBufferAttribute(N,J),T[O+H+8]=i.x,T[O+H+9]=i.y,T[O+H+10]=i.z,T[O+H+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new Q(b,C)},n.set(o,f),o.addEventListener("dispose",X)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function vg(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Da=class extends fn{constructor(t,e,n,i,r,a,o,l,c,h=ds){if(h!==ds&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=ki),n===void 0&&h===vs&&(n=ys),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bd=new fn,wu=new Da(1,1),Sd=new Ta,Ed=new gc,wd=new Ia,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function Ps(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Tu[i];if(r===void 0&&(r=new Float32Array(i),Tu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qa(s,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _g(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Eg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Pu.set(n),s.uniformMatrix2fv(this.addr,!1,Pu),Ne(e,n)}}function wg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Cu.set(n),s.uniformMatrix3fv(this.addr,!1,Cu),Ne(e,n)}}function Tg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ru.set(n),s.uniformMatrix4fv(this.addr,!1,Ru),Ne(e,n)}}function Ag(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function Cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function Ig(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function Ug(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wu.compareFunction=xd,r=wu):r=bd,e.setTexture2D(t||r,i)}function Ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ed,i)}function zg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wd,i)}function Fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sd,i)}function Og(s){switch(s){case 5126:return _g;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return Eg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(s,t){s.uniform1fv(this.addr,t)}function Hg(s,t){let e=Ps(t,this.size,2);s.uniform2fv(this.addr,e)}function Vg(s,t){let e=Ps(t,this.size,3);s.uniform3fv(this.addr,e)}function Gg(s,t){let e=Ps(t,this.size,4);s.uniform4fv(this.addr,e)}function Wg(s,t){let e=Ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xg(s,t){let e=Ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qg(s,t){let e=Ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Yg(s,t){s.uniform1iv(this.addr,t)}function $g(s,t){s.uniform2iv(this.addr,t)}function Zg(s,t){s.uniform3iv(this.addr,t)}function Kg(s,t){s.uniform4iv(this.addr,t)}function Jg(s,t){s.uniform1uiv(this.addr,t)}function Qg(s,t){s.uniform2uiv(this.addr,t)}function jg(s,t){s.uniform3uiv(this.addr,t)}function tx(s,t){s.uniform4uiv(this.addr,t)}function ex(s,t,e){let n=this.cache,i=t.length,r=Qa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||bd,r[a])}function nx(s,t,e){let n=this.cache,i=t.length,r=Qa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ed,r[a])}function ix(s,t,e){let n=this.cache,i=t.length,r=Qa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||wd,r[a])}function sx(s,t,e){let n=this.cache,i=t.length,r=Qa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Sd,r[a])}function rx(s){switch(s){case 5126:return Bg;case 35664:return Hg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return jg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rx(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},_l=/(\w+)(\])?(\[|\.)?/g;function Iu(s,t){s.seq.push(t),s.map[t.id]=t}function ax(s,t,e){let n=s.name,i=n.length;for(_l.lastIndex=0;;){let r=_l.exec(n),a=_l.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Iu(e,c===void 0?new vc(o,s,t):new _c(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Mc(o),Iu(e,u)),e=u}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);ax(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Lu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ox=37297,lx=0;function cx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hx(s){let t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(s),n;switch(t===e?n="":t===Ma&&e===_a?n="LinearDisplayP3ToLinearSRGB":t===_a&&e===Ma&&(n="LinearSRGBToLinearDisplayP3"),s){case xi:case Ja:return[n,"LinearTransferOETF"];case Ye:case fh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Du(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+cx(s.getShaderSource(t),a)}else return i}function ux(s,t){let e=hx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dx(s,t){let e;switch(t){case nh:e="Linear";break;case ih:e="Reinhard";break;case sh:e="Cineon";break;case yr:e="ACESFilmic";break;case rh:e="AgX";break;case ah:e="Neutral";break;case Gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ta=new M;function fx(){se.getLuminanceCoefficients(ta);let s=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function mx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Qs(s){return s!==""}function ku(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(xx,vx)}var yx=new Map;function vx(s,t){let e=Ot[t];if(e===void 0){let n=yx.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(s){return s.replace(_x,Mx)}function Mx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function bx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ex(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function wx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sd:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Vf:t="ENVMAP_BLENDING_ADD";break}return t}function Tx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ax(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bx(e),c=Sx(e),h=Ex(e),u=wx(e),f=Tx(e),d=px(e),g=mx(r),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ot.tonemapping_pars_fragment:"",e.toneMapping!==di?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,ux("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=bc(a),a=ku(a,e),a=Uu(a,e),o=bc(o),o=ku(o,e),o=Uu(o,e),a=Nu(a),o=Nu(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+a,b=_+p+o,C=Lu(i,i.VERTEX_SHADER,v),T=Lu(i,i.FRAGMENT_SHADER,b);i.attachShader(x,C),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(E){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(T).trim(),J=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,T);else{let G=Du(i,C,"vertex"),z=Du(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+G+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||O==="")&&(H=!1);H&&(E.diagnostics={runnable:J,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(C),i.deleteShader(T),I=new ps(i,x),X=gx(i,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let X;this.getAttributes=function(){return X===void 0&&R(this),X};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,ox)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var Rx=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ec(t),e.set(t,n)),n}},Ec=class{constructor(t){this.id=Rx++,this.code=t,this.usedTimes=0}};function Cx(s,t,e,n,i,r,a){let o=new Aa,l=new Sc,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures,g=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,U,N,O){let J=N.fog,H=O.geometry,G=y.isMeshStandardMaterial?N.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),et=z&&z.mapping===Ka?z.image.height:null,lt=x[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=dt!==void 0?dt.length:0,Yt=0;H.morphAttributes.position!==void 0&&(Yt=1),H.morphAttributes.normal!==void 0&&(Yt=2),H.morphAttributes.color!==void 0&&(Yt=3);let Y,j,ht,it;if(lt){let je=zn[lt];Y=je.vertexShader,j=je.fragmentShader}else Y=y.vertexShader,j=y.fragmentShader,l.update(y),ht=l.getVertexShaderID(y),it=l.getFragmentShaderID(y);let At=s.getRenderTarget(),It=O.isInstancedMesh===!0,Qt=O.isBatchedMesh===!0,ue=!!y.map,jt=!!y.matcap,P=!!z,ln=!!y.aoMap,Zt=!!y.lightMap,ne=!!y.bumpMap,Dt=!!y.normalMap,Me=!!y.displacementMap,Nt=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,F=y.anisotropy>0,Z=y.clearcoat>0,tt=y.dispersion>0,$=y.iridescence>0,St=y.sheen>0,ut=y.transmission>0,yt=F&&!!y.anisotropyMap,ie=Z&&!!y.clearcoatMap,rt=Z&&!!y.clearcoatNormalMap,vt=Z&&!!y.clearcoatRoughnessMap,kt=$&&!!y.iridescenceMap,Ut=$&&!!y.iridescenceThicknessMap,_t=St&&!!y.sheenColorMap,Kt=St&&!!y.sheenRoughnessMap,zt=!!y.specularMap,ve=!!y.specularColorMap,L=!!y.specularIntensityMap,gt=ut&&!!y.transmissionMap,q=ut&&!!y.thicknessMap,K=!!y.gradientMap,pt=!!y.alphaMap,xt=y.alphaTest>0,te=!!y.alphaHash,Ie=!!y.extensions,Qe=di;y.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Qe=s.toneMapping);let re={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:j,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:xi,alphaToCoverage:!!y.alphaToCoverage,map:ue,matcap:jt,envMap:P,envMapMode:P&&z.mapping,envMapCubeUVHeight:et,aoMap:ln,lightMap:Zt,bumpMap:ne,normalMap:Dt,displacementMap:d&&Me,emissiveMap:Nt,normalMapObjectSpace:Dt&&y.normalMapType===Yf,normalMapTangentSpace:Dt&&y.normalMapType===gd,metalnessMap:A,roughnessMap:S,anisotropy:F,anisotropyMap:yt,clearcoat:Z,clearcoatMap:ie,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:$,iridescenceMap:kt,iridescenceThicknessMap:Ut,sheen:St,sheenColorMap:_t,sheenRoughnessMap:Kt,specularMap:zt,specularColorMap:ve,specularIntensityMap:L,transmission:ut,transmissionMap:gt,thicknessMap:q,gradientMap:K,opaque:y.transparent===!1&&y.blending===us&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:xt,alphaHash:te,combine:y.combine,mapUv:ue&&m(y.map.channel),aoMapUv:ln&&m(y.aoMap.channel),lightMapUv:Zt&&m(y.lightMap.channel),bumpMapUv:ne&&m(y.bumpMap.channel),normalMapUv:Dt&&m(y.normalMap.channel),displacementMapUv:Me&&m(y.displacementMap.channel),emissiveMapUv:Nt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:yt&&m(y.anisotropyMap.channel),clearcoatMapUv:ie&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&m(y.sheenRoughnessMap.channel),specularMapUv:zt&&m(y.specularMap.channel),specularColorMapUv:ve&&m(y.specularColorMap.channel),specularIntensityMapUv:L&&m(y.specularIntensityMap.channel),transmissionMapUv:gt&&m(y.transmissionMap.channel),thicknessMapUv:q&&m(y.thicknessMap.channel),alphaMapUv:pt&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Dt||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ue||pt),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Yt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ce,flipSided:y.side===$e,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function _(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(v(E,y),b(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){let E=x[y.type],U;if(E){let N=zn[E];U=yi.clone(N.uniforms)}else U=y.uniforms;return U}function T(y,E){let U;for(let N=0,O=h.length;N<O;N++){let J=h[N];if(J.cacheKey===E){U=J,++U.usedTimes;break}}return U===void 0&&(U=new Ax(s,E,y,r),h.push(U)),U}function R(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:X}}function Px(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ix(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ou(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ix),n.length>1&&n.sort(f||Fu),i.length>1&&i.sort(f||Fu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Lx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Ou,s.set(n,[a])):i>=r.length?(a=new Ou,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new Rt};break;case"SpotLight":e={position:new M,direction:new M,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new M,halfWidth:new M,halfHeight:new M};break}return s[t.id]=e,e}}}function kx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ux=0;function Nx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zx(s){let t=new Dx,e=kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);let i=new M,r=new _e,a=new _e;function o(c){let h=0,u=0,f=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,v=0,b=0,C=0,T=0,R=0;c.sort(Nx);for(let X=0,y=c.length;X<y;X++){let E=c[X],U=E.color,N=E.intensity,O=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],N);R++}else if(E.isDirectionalLight){let H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,z=e.get(E);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=E.shadow.matrix,_++}n.directional[d]=H,d++}else if(E.isSpotLight){let H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(U).multiplyScalar(N),H.distance=O,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[x]=H;let G=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,G.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[x]=G.matrix,E.castShadow){let z=e.get(E);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=J,b++}x++}else if(E.isRectAreaLight){let H=t.get(E);H.color.copy(U).multiplyScalar(N),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=H,m++}else if(E.isPointLight){let H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){let G=E.shadow,z=e.get(E);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=E.shadow.matrix,v++}n.point[g]=H,g++}else if(E.isHemisphereLight){let H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(N),H.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==v||I.numSpotShadows!==b||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=v,I.numSpotShadows=b,I.numSpotMaps=C,I.numLightProbes=R,n.version=Ux++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Bu(s){let t=new zx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Bu(s),t.set(i,[o])):r>=a.length?(o=new Bu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wc=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tc=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;function Hx(s,t,e){let n=new ar,i=new Q,r=new Q,a=new fe,o=new wc({depthPacking:qf}),l=new Tc,c={},h=e.maxTextureSize,u={[fi]:$e,[$e]:fi,[Ce]:Ce},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let X=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),U=s.state;U.setBlending(On),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let J=0,H=T.length;J<H;J++){let G=T[J],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let et=z.getFrameExtents();if(i.multiply(et),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||N===!0||O===!0){let dt=this.type!==Zn?{minFilter:bn,magFilter:bn}:{};z.map!==null&&z.map.dispose(),z.map=new Ge(i.x,i.y,dt),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let lt=z.getViewportCount();for(let dt=0;dt<lt;dt++){let Ct=z.getViewport(dt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),U.viewport(a),z.updateMatrices(G,dt),n=z.getFrustum(),b(R,I,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&_(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(X,y,E)};function _(T,R){let I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ge(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,I,d,x,null)}function v(T,R,I,X){let y=null,E=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let U=y.uuid,N=R.uuid,O=c[U];O===void 0&&(O={},c[U]=O);let J=O[N];J===void 0&&(J=y.clone(),O[N]=J,R.addEventListener("dispose",C)),y=J}if(y.visible=R.visible,y.wireframe=R.wireframe,X===Zn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=s.properties.get(y);U.light=I}return y}function b(T,R,I,X,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let N=t.update(T),O=T.material;if(Array.isArray(O)){let J=N.groups;for(let H=0,G=J.length;H<G;H++){let z=J[H],et=O[z.materialIndex];if(et&&et.visible){let lt=v(T,et,X,y);T.onBeforeShadow(s,T,R,I,N,lt,z),s.renderBufferDirect(I,null,N,lt,T,z),T.onAfterShadow(s,T,R,I,N,lt,z)}}}else if(O.visible){let J=v(T,O,X,y);T.onBeforeShadow(s,T,R,I,N,J,null),s.renderBufferDirect(I,null,N,J,T,null),T.onAfterShadow(s,T,R,I,N,J,null)}}let U=T.children;for(let N=0,O=U.length;N<O;N++)b(U[N],R,I,X,y)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let X=c[I],y=T.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}var Vx={[Pl]:Il,[Ll]:Ul,[Dl]:Nl,[ms]:kl,[Il]:Pl,[Ul]:Ll,[Nl]:Dl,[kl]:ms};function Gx(s){function t(){let L=!1,gt=new fe,q=null,K=new fe(0,0,0,0);return{setMask:function(pt){q!==pt&&!L&&(s.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){L=pt},setClear:function(pt,xt,te,Ie,Qe){Qe===!0&&(pt*=Ie,xt*=Ie,te*=Ie),gt.set(pt,xt,te,Ie),K.equals(gt)===!1&&(s.clearColor(pt,xt,te,Ie),K.copy(gt))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function e(){let L=!1,gt=!1,q=null,K=null,pt=null;return{setReversed:function(xt){gt=xt},setTest:function(xt){xt?ht(s.DEPTH_TEST):it(s.DEPTH_TEST)},setMask:function(xt){q!==xt&&!L&&(s.depthMask(xt),q=xt)},setFunc:function(xt){if(gt&&(xt=Vx[xt]),K!==xt){switch(xt){case Pl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Ll:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Dl:s.depthFunc(s.EQUAL);break;case kl:s.depthFunc(s.GEQUAL);break;case Ul:s.depthFunc(s.GREATER);break;case Nl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=xt}},setLocked:function(xt){L=xt},setClear:function(xt){pt!==xt&&(s.clearDepth(xt),pt=xt)},reset:function(){L=!1,q=null,K=null,pt=null}}}function n(){let L=!1,gt=null,q=null,K=null,pt=null,xt=null,te=null,Ie=null,Qe=null;return{setTest:function(re){L||(re?ht(s.STENCIL_TEST):it(s.STENCIL_TEST))},setMask:function(re){gt!==re&&!L&&(s.stencilMask(re),gt=re)},setFunc:function(re,je,Gn){(q!==re||K!==je||pt!==Gn)&&(s.stencilFunc(re,je,Gn),q=re,K=je,pt=Gn)},setOp:function(re,je,Gn){(xt!==re||te!==je||Ie!==Gn)&&(s.stencilOp(re,je,Gn),xt=re,te=je,Ie=Gn)},setLocked:function(re){L=re},setClear:function(re){Qe!==re&&(s.clearStencil(re),Qe=re)},reset:function(){L=!1,gt=null,q=null,K=null,pt=null,xt=null,te=null,Ie=null,Qe=null}}}let i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,_=null,v=null,b=null,C=null,T=new Rt(0,0,0),R=0,I=!1,X=null,y=null,E=null,U=null,N=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,H=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=H>=2);let z=null,et={},lt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),Ct=new fe().fromArray(lt),Yt=new fe().fromArray(dt);function Y(L,gt,q,K){let pt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(L,xt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<q;te++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(gt+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return xt}let j={};j[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),r.setFunc(ms),Zt(!1),ne($h),ht(s.CULL_FACE),P(On);function ht(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function it(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function At(L,gt){return h[L]!==gt?(s.bindFramebuffer(L,gt),h[L]=gt,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=gt),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function It(L,gt){let q=f,K=!1;if(L){q=u.get(gt),q===void 0&&(q=[],u.set(gt,q));let pt=L.textures;if(q.length!==pt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,te=pt.length;xt<te;xt++)q[xt]=s.COLOR_ATTACHMENT0+xt;q.length=pt.length,K=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,K=!0);K&&s.drawBuffers(q)}function Qt(L){return d!==L?(s.useProgram(L),d=L,!0):!1}let ue={[Pi]:s.FUNC_ADD,[Ef]:s.FUNC_SUBTRACT,[wf]:s.FUNC_REVERSE_SUBTRACT};ue[Tf]=s.MIN,ue[Af]=s.MAX;let jt={[Rf]:s.ZERO,[Cf]:s.ONE,[Pf]:s.SRC_COLOR,[Rl]:s.SRC_ALPHA,[Nf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[Lf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[Cl]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Df]:s.ONE_MINUS_DST_ALPHA,[zf]:s.CONSTANT_COLOR,[Ff]:s.ONE_MINUS_CONSTANT_COLOR,[Of]:s.CONSTANT_ALPHA,[Bf]:s.ONE_MINUS_CONSTANT_ALPHA};function P(L,gt,q,K,pt,xt,te,Ie,Qe,re){if(L===On){g===!0&&(it(s.BLEND),g=!1);return}if(g===!1&&(ht(s.BLEND),g=!0),L!==Sf){if(L!==x||re!==I){if((m!==Pi||v!==Pi)&&(s.blendEquation(s.FUNC_ADD),m=Pi,v=Pi),re)switch(L){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,_=null,b=null,C=null,T.set(0,0,0),R=0,x=L,I=re}return}pt=pt||gt,xt=xt||q,te=te||K,(gt!==m||pt!==v)&&(s.blendEquationSeparate(ue[gt],ue[pt]),m=gt,v=pt),(q!==p||K!==_||xt!==b||te!==C)&&(s.blendFuncSeparate(jt[q],jt[K],jt[xt],jt[te]),p=q,_=K,b=xt,C=te),(Ie.equals(T)===!1||Qe!==R)&&(s.blendColor(Ie.r,Ie.g,Ie.b,Qe),T.copy(Ie),R=Qe),x=L,I=!1}function ln(L,gt){L.side===Ce?it(s.CULL_FACE):ht(s.CULL_FACE);let q=L.side===$e;gt&&(q=!q),Zt(q),L.blending===us&&L.transparent===!1?P(On):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),i.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):it(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(L){X!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),X=L)}function ne(L){L!==Mf?(ht(s.CULL_FACE),L!==y&&(L===$h?s.cullFace(s.BACK):L===bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):it(s.CULL_FACE),y=L}function Dt(L){L!==E&&(J&&s.lineWidth(L),E=L)}function Me(L,gt,q){L?(ht(s.POLYGON_OFFSET_FILL),(U!==gt||N!==q)&&(s.polygonOffset(gt,q),U=gt,N=q)):it(s.POLYGON_OFFSET_FILL)}function Nt(L){L?ht(s.SCISSOR_TEST):it(s.SCISSOR_TEST)}function A(L){L===void 0&&(L=s.TEXTURE0+O-1),z!==L&&(s.activeTexture(L),z=L)}function S(L,gt,q){q===void 0&&(z===null?q=s.TEXTURE0+O-1:q=z);let K=et[q];K===void 0&&(K={type:void 0,texture:void 0},et[q]=K),(K.type!==L||K.texture!==gt)&&(z!==q&&(s.activeTexture(q),z=q),s.bindTexture(L,gt||j[L]),K.type=L,K.texture=gt)}function F(){let L=et[z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){Ct.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ct.copy(L))}function _t(L){Yt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function Kt(L,gt){let q=l.get(gt);q===void 0&&(q=new WeakMap,l.set(gt,q));let K=q.get(L);K===void 0&&(K=s.getUniformBlockIndex(gt,L.name),q.set(L,K))}function zt(L,gt){let K=l.get(gt).get(L);o.get(gt)!==K&&(s.uniformBlockBinding(gt,K,L.__bindingPointIndex),o.set(gt,K))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},z=null,et={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,_=null,v=null,b=null,C=null,T=new Rt(0,0,0),R=0,I=!1,X=null,y=null,E=null,U=null,N=null,Ct.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ht,disable:it,bindFramebuffer:At,drawBuffers:It,useProgram:Qt,setBlending:P,setMaterial:ln,setFlipSided:Zt,setCullFace:ne,setLineWidth:Dt,setPolygonOffset:Me,setScissorTest:Nt,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:vt,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:ie,texStorage3D:rt,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:yt,scissor:Ut,viewport:_t,reset:ve}}function Hu(s,t,e,n){let i=Wx(n);switch(e){case cd:return s*t;case ud:return s*t;case dd:return s*t*2;case fd:return s*t/i.components*i.byteLength;case hh:return s*t/i.components*i.byteLength;case pd:return s*t*2/i.components*i.byteLength;case uh:return s*t*2/i.components*i.byteLength;case hd:return s*t*3/i.components*i.byteLength;case Dn:return s*t*4/i.components*i.byteLength;case dh:return s*t*4/i.components*i.byteLength;case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Gl:return Math.max(s,16)*Math.max(t,8)/4;case Bl:case Vl:return Math.max(s,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ga:case oc:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case md:case cc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wx(s){switch(s){case ti:case ad:return{byteLength:1,components:1};case sr:case od:case mn:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case ki:case oh:case Jn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xx(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Ea("canvas")}function x(A,S,F){let Z=1,tt=Nt(A);if((tt.width>F||tt.height>F)&&(Z=F/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Z*tt.width),St=Math.floor(Z*tt.height);u===void 0&&(u=g($,St));let ut=S?g($,St):u;return ut.width=$,ut.height=St,ut.getContext("2d").drawImage(A,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+St+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==bn&&A.minFilter!==Ln}function p(A){s.generateMipmap(A)}function _(A,S,F,Z,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=S;if(S===s.RED&&(F===s.FLOAT&&($=s.R32F),F===s.HALF_FLOAT&&($=s.R16F),F===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.R8UI),F===s.UNSIGNED_SHORT&&($=s.R16UI),F===s.UNSIGNED_INT&&($=s.R32UI),F===s.BYTE&&($=s.R8I),F===s.SHORT&&($=s.R16I),F===s.INT&&($=s.R32I)),S===s.RG&&(F===s.FLOAT&&($=s.RG32F),F===s.HALF_FLOAT&&($=s.RG16F),F===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RG8UI),F===s.UNSIGNED_SHORT&&($=s.RG16UI),F===s.UNSIGNED_INT&&($=s.RG32UI),F===s.BYTE&&($=s.RG8I),F===s.SHORT&&($=s.RG16I),F===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGB8UI),F===s.UNSIGNED_SHORT&&($=s.RGB16UI),F===s.UNSIGNED_INT&&($=s.RGB32UI),F===s.BYTE&&($=s.RGB8I),F===s.SHORT&&($=s.RGB16I),F===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGBA8UI),F===s.UNSIGNED_SHORT&&($=s.RGBA16UI),F===s.UNSIGNED_INT&&($=s.RGBA32UI),F===s.BYTE&&($=s.RGBA8I),F===s.SHORT&&($=s.RGBA16I),F===s.INT&&($=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),S===s.RGBA){let St=tt?va:se.getTransfer(Z);F===s.FLOAT&&($=s.RGBA32F),F===s.HALF_FLOAT&&($=s.RGBA16F),F===s.UNSIGNED_BYTE&&($=St===me?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,S){let F;return A?S===null||S===ki||S===ys?F=s.DEPTH24_STENCIL8:S===Jn?F=s.DEPTH32F_STENCIL8:S===sr&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===ys?F=s.DEPTH_COMPONENT24:S===Jn?F=s.DEPTH_COMPONENT32F:S===sr&&(F=s.DEPTH_COMPONENT16),F}function b(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==bn&&A.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){let S=A.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),X(S)}function R(A){let S=n.get(A);if(S.__webglInit===void 0)return;let F=A.source,Z=f.get(F);if(Z){let tt=Z[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(A),Object.keys(Z).length===0&&f.delete(F)}n.remove(A)}function I(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let F=A.source,Z=f.get(F);delete Z[S.__cacheKey],a.memory.textures--}function X(A){let S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let tt=0;tt<S.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let Z=0,tt=F.length;Z<tt;Z++){let $=n.get(F[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(A)}let y=0;function E(){y=0}function U(){let A=y;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),y+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){let F=n.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(F,A,S);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function J(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Yt(F,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function H(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Yt(F,A,S);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function G(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let z={[ir]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[Ol]:s.MIRRORED_REPEAT},et={[bn]:s.NEAREST,[Wf]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Wo]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR},lt={[$f]:s.NEVER,[tp]:s.ALWAYS,[Zf]:s.LESS,[xd]:s.LEQUAL,[Kf]:s.EQUAL,[jf]:s.GEQUAL,[Jf]:s.GREATER,[Qf]:s.NOTEQUAL};function dt(A,S){if(S.type===Jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ln||S.magFilter===Wo||S.magFilter===kr||S.magFilter===Di||S.minFilter===Ln||S.minFilter===Wo||S.minFilter===kr||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,z[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,z[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,z[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,et[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==kr&&S.minFilter!==Di||S.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));let Z=S.source,tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));let $=N(S);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[$].usedTimes++;let St=tt[A.__cacheKey];St!==void 0&&(tt[A.__cacheKey].usedTimes--,St.usedTimes===0&&I(S)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return F}function Yt(A,S,F){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let tt=Ct(A,S),$=S.source;e.bindTexture(Z,A.__webglTexture,s.TEXTURE0+F);let St=n.get($);if($.version!==St.__version||tt===!0){e.activeTexture(s.TEXTURE0+F);let ut=se.getPrimaries(se.workingColorSpace),yt=S.colorSpace===hi?null:se.getPrimaries(S.colorSpace),ie=S.colorSpace===hi||ut===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let rt=x(S.image,!1,i.maxTextureSize);rt=Me(S,rt);let vt=r.convert(S.format,S.colorSpace),kt=r.convert(S.type),Ut=_(S.internalFormat,vt,kt,S.colorSpace,S.isVideoTexture);dt(Z,S);let _t,Kt=S.mipmaps,zt=S.isVideoTexture!==!0,ve=St.__version===void 0||tt===!0,L=$.dataReady,gt=b(S,rt);if(S.isDepthTexture)Ut=v(S.format===vs,S.type),ve&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,vt,kt,null));else if(S.isDataTexture)if(Kt.length>0){zt&&ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ut,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)_t=Kt[q],zt?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,vt,kt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,vt,kt,_t.data);S.generateMipmaps=!1}else zt?(ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ut,rt.width,rt.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,vt,kt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,vt,kt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ut,Kt[0].width,Kt[0].height,rt.depth);for(let q=0,K=Kt.length;q<K;q++)if(_t=Kt[q],S.format!==Dn)if(vt!==null)if(zt){if(L)if(S.layerUpdates.size>0){let pt=Hu(_t.width,_t.height,S.format,S.type);for(let xt of S.layerUpdates){let te=_t.data.subarray(xt*pt/_t.data.BYTES_PER_ELEMENT,(xt+1)*pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,xt,_t.width,_t.height,1,vt,te,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,rt.depth,vt,_t.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ut,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,rt.depth,vt,kt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ut,_t.width,_t.height,rt.depth,0,vt,kt,_t.data)}else{zt&&ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ut,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)_t=Kt[q],S.format!==Dn?vt!==null?zt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,vt,kt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,vt,kt,_t.data)}else if(S.isDataArrayTexture)if(zt){if(ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ut,rt.width,rt.height,rt.depth),L)if(S.layerUpdates.size>0){let q=Hu(rt.width,rt.height,S.format,S.type);for(let K of S.layerUpdates){let pt=rt.data.subarray(K*q/rt.data.BYTES_PER_ELEMENT,(K+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,vt,kt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,kt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,vt,kt,rt.data);else if(S.isData3DTexture)zt?(ve&&e.texStorage3D(s.TEXTURE_3D,gt,Ut,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,kt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,vt,kt,rt.data);else if(S.isFramebufferTexture){if(ve)if(zt)e.texStorage2D(s.TEXTURE_2D,gt,Ut,rt.width,rt.height);else{let q=rt.width,K=rt.height;for(let pt=0;pt<gt;pt++)e.texImage2D(s.TEXTURE_2D,pt,Ut,q,K,0,vt,kt,null),q>>=1,K>>=1}}else if(Kt.length>0){if(zt&&ve){let q=Nt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ut,q.width,q.height)}for(let q=0,K=Kt.length;q<K;q++)_t=Kt[q],zt?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,vt,kt,_t):e.texImage2D(s.TEXTURE_2D,q,Ut,vt,kt,_t);S.generateMipmaps=!1}else if(zt){if(ve){let q=Nt(rt);e.texStorage2D(s.TEXTURE_2D,gt,Ut,q.width,q.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,kt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ut,vt,kt,rt);m(S)&&p(Z),St.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,F){if(S.image.length!==6)return;let Z=Ct(A,S),tt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);let $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+F);let St=se.getPrimaries(se.workingColorSpace),ut=S.colorSpace===hi?null:se.getPrimaries(S.colorSpace),yt=S.colorSpace===hi||St===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ie=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let K=0;K<6;K++)!ie&&!rt?vt[K]=x(S.image[K],!0,i.maxCubemapSize):vt[K]=rt?S.image[K].image:S.image[K],vt[K]=Me(S,vt[K]);let kt=vt[0],Ut=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Kt=_(S.internalFormat,Ut,_t,S.colorSpace),zt=S.isVideoTexture!==!0,ve=$.__version===void 0||Z===!0,L=tt.dataReady,gt=b(S,kt);dt(s.TEXTURE_CUBE_MAP,S);let q;if(ie){zt&&ve&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,kt.width,kt.height);for(let K=0;K<6;K++){q=vt[K].mipmaps;for(let pt=0;pt<q.length;pt++){let xt=q[pt];S.format!==Dn?Ut!==null?zt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,xt.width,xt.height,Ut,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Kt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,xt.width,xt.height,Ut,_t,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Kt,xt.width,xt.height,0,Ut,_t,xt.data)}}}else{if(q=S.mipmaps,zt&&ve){q.length>0&&gt++;let K=Nt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt[K].width,vt[K].height,Ut,_t,vt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,vt[K].width,vt[K].height,0,Ut,_t,vt[K].data);for(let pt=0;pt<q.length;pt++){let te=q[pt].image[K].image;zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,te.width,te.height,Ut,_t,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Kt,te.width,te.height,0,Ut,_t,te.data)}}else{zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ut,_t,vt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Ut,_t,vt[K]);for(let pt=0;pt<q.length;pt++){let xt=q[pt];zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Ut,_t,xt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Kt,Ut,_t,xt.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),$.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function j(A,S,F,Z,tt,$){let St=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),yt=_(F.internalFormat,St,ut,F.colorSpace);if(!n.get(S).__hasExternalTextures){let rt=Math.max(1,S.width>>$),vt=Math.max(1,S.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,yt,rt,vt,S.depth,0,St,ut,null):e.texImage2D(tt,$,yt,rt,vt,0,St,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ne(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,n.get(F).__webglTexture,0,Zt(S)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,n.get(F).__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(A,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=v(S.stencilBuffer,tt),St=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Zt(S);ne(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,$,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,A)}else{let Z=S.textures;for(let tt=0;tt<Z.length;tt++){let $=Z[tt],St=r.convert($.format,$.colorSpace),ut=r.convert($.type),yt=_($.internalFormat,St,ut,$.colorSpace),ie=Zt(S);F&&ne(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,yt,S.width,S.height):ne(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,yt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,yt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let Z=n.get(S.depthTexture).__webglTexture,tt=Zt(S);if(S.depthTexture.format===ds)ne(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===vs)ne(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function At(A){let S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");it(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ht(S.__webglDepthbuffer[Z],A,!1);else{let tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ht(S.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(A,S,F){let Z=n.get(A);S!==void 0&&j(Z.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&At(A)}function Qt(A){let S=A.texture,F=n.get(A),Z=n.get(S);A.addEventListener("dispose",T);let tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let yt=0;yt<S.mipmaps.length;yt++)F.__webglFramebuffer[ut][yt]=s.createFramebuffer()}else F.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)F.__webglFramebuffer[ut]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(St)for(let ut=0,yt=tt.length;ut<yt;ut++){let ie=n.get(tt[ut]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ne(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let yt=tt[ut];F.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let ie=r.convert(yt.format,yt.colorSpace),rt=r.convert(yt.type),vt=_(yt.internalFormat,ie,rt,yt.colorSpace,A.isXRRenderTarget===!0),kt=Zt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(s.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)j(F.__webglFramebuffer[ut][yt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else j(F.__webglFramebuffer[ut],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,yt=tt.length;ut<yt;ut++){let ie=tt[ut],rt=n.get(ie);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),dt(s.TEXTURE_2D,ie),j(F.__webglFramebuffer,A,ie,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(ie)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),dt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)j(F.__webglFramebuffer[yt],A,S,s.COLOR_ATTACHMENT0,ut,yt);else j(F.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}A.depthBuffer&&At(A)}function ue(A){let S=A.textures;for(let F=0,Z=S.length;F<Z;F++){let tt=S[F];if(m(tt)){let $=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get(tt).__webglTexture;e.bindTexture($,St),p($),e.unbindTexture()}}}let jt=[],P=[];function ln(A){if(A.samples>0){if(ne(A)===!1){let S=A.textures,F=A.width,Z=A.height,tt=s.COLOR_BUFFER_BIT,$=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(A),ut=S.length>1;if(ut)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);let ie=n.get(S[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,F,Z,0,0,F,Z,tt,s.NEAREST),l===!0&&(jt.length=0,P.length=0,jt.push(s.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(jt.push($),P.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);let ie=n.get(S[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,ie,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Zt(A){return Math.min(i.maxSamples,A.samples)}function ne(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Me(A,S){let F=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==xi&&F!==hi&&(se.getTransfer(F)===me?(Z!==Dn||tt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ne}function qx(s,t){function e(n,i=hi){let r,a=se.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===lh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return s.BYTE;if(n===od)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===oh)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===Jn)return s.FLOAT;if(n===mn)return s.HALF_FLOAT;if(n===cd)return s.ALPHA;if(n===hd)return s.RGB;if(n===Dn)return s.RGBA;if(n===ud)return s.LUMINANCE;if(n===dd)return s.LUMINANCE_ALPHA;if(n===ds)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===fd)return s.RED;if(n===hh)return s.RED_INTEGER;if(n===pd)return s.RG;if(n===uh)return s.RG_INTEGER;if(n===dh)return s.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Hl||n===Vl||n===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===$l||n===Zl||n===Kl||n===Jl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===oc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===cc||n===hc||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ac=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jt=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yx={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new fn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:$x,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Rc,m=e.getContextAttributes(),p=null,_=null,v=[],b=[],C=new Q,T=null,R=new Ve;R.layers.enable(1),R.viewport=new fe;let I=new Ve;I.layers.enable(2),I.viewport=new fe;let X=[R,I],y=new Ac;y.layers.enable(1),y.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=v[Y];return j===void 0&&(j=new js,v[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=v[Y];return j===void 0&&(j=new js,v[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=v[Y];return j===void 0&&(j=new js,v[Y]=j),j.getHandSpace()};function N(Y){let j=b.indexOf(Y.inputSource);if(j===-1)return;let ht=v[j];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,c||a),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",J);for(let Y=0;Y<v.length;Y++){let j=b[Y];j!==null&&(b[Y]=null,v[Y].disconnect(j))}E=null,U=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,_=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ge(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?vs:ds,ht=m.stencil?ys:ki);let At={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(At),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ge(f.textureWidth,f.textureHeight,{format:Dn,type:ti,depthTexture:new Da(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Y){for(let j=0;j<Y.removed.length;j++){let ht=Y.removed[j],it=b.indexOf(ht);it>=0&&(b[it]=null,v[it].disconnect(ht))}for(let j=0;j<Y.added.length;j++){let ht=Y.added[j],it=b.indexOf(ht);if(it===-1){for(let It=0;It<v.length;It++)if(It>=b.length){b.push(ht),it=It;break}else if(b[It]===null){b[It]=ht,it=It;break}if(it===-1)break}let At=v[it];At&&At.connect(ht)}}let H=new M,G=new M;function z(Y,j,ht){H.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);let it=H.distanceTo(G),At=j.projectionMatrix.elements,It=ht.projectionMatrix.elements,Qt=At[14]/(At[10]-1),ue=At[14]/(At[10]+1),jt=(At[9]+1)/At[5],P=(At[9]-1)/At[5],ln=(At[8]-1)/At[0],Zt=(It[8]+1)/It[0],ne=Qt*ln,Dt=Qt*Zt,Me=it/(-ln+Zt),Nt=Me*-ln;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let A=Qt+Me,S=ue+Me,F=ne-Nt,Z=Dt+(it-Nt),tt=jt*ue/S*A,$=P*ue/S*A;Y.projectionMatrix.makePerspective(F,Z,tt,$,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,ht=Y.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),y.near=I.near=R.near=j,y.far=I.far=R.far=ht,(E!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,U=y.far);let it=Y.parent,At=y.cameras;et(y,it);for(let It=0;It<At.length;It++)et(At[It],it);At.length===2?z(y,R,I):y.projectionMatrix.copy(R.projectionMatrix),lt(Y,y,it)};function lt(Y,j,ht){ht===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let dt=null;function Ct(Y,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let it=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let It=0;It<ht.length;It++){let Qt=ht[It],ue=null;if(d!==null)ue=d.getViewport(Qt);else{let P=u.getViewSubImage(f,Qt);ue=P.viewport,It===0&&(t.setRenderTargetTextures(_,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(_))}let jt=X[It];jt===void 0&&(jt=new Ve,jt.layers.enable(It),jt.viewport=new fe,X[It]=jt),jt.matrix.fromArray(Qt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Qt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ue.x,ue.y,ue.width,ue.height),It===0&&(y.matrix.copy(jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(jt)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){let It=u.getDepthInformation(ht[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let ht=0;ht<v.length;ht++){let it=b[ht],At=v[ht];it!==null&&At!==void 0&&At.update(it,j,c||a)}dt&&dt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Yt=new Md;Yt.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){dt=Y},this.dispose=function(){}}},Ri=new Sn,Kx=new _e;function Jx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_d(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,b=_.envMapRotation;v&&(m.envMap.value=v,Ri.copy(b),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Ri)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qx(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let b=v.program;n.uniformBlockBinding(_,b)}function c(_,v){let b=i[_.id];b===void 0&&(g(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){let v=u();_.__bindingPointIndex=v;let b=s.createBuffer(),C=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=i[_.id],b=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,R=b.length;T<R;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let X=0,y=I.length;X<y;X++){let E=I[X];if(d(E,T,X,C)===!0){let U=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],O=0;for(let J=0;J<N.length;J++){let H=N[J],G=x(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+O,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,b,C){let T=_.value,R=v+"_"+b;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let I=C[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(_){let v=_.uniforms,b=0,C=16;for(let R=0,I=v.length;R<I;R++){let X=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,E=X.length;y<E;y++){let U=X[y],N=Array.isArray(U.value)?U.value:[U.value];for(let O=0,J=N.length;O<J;O++){let H=N[O],G=x(H),z=b%C,et=z%G.boundary,lt=z+et;b+=et,lt!==0&&C-lt<G.storage&&(b+=C-lt),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=G.storage}}}let T=b%C;return T>0&&(b+=C-T),_.__size=b,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ka=class{constructor(t={}){let{canvas:e=np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=di,this.toneMappingExposure=1;let v=this,b=!1,C=0,T=0,R=null,I=-1,X=null,y=new fe,E=new fe,U=null,N=new Rt(0),O=0,J=e.width,H=e.height,G=1,z=null,et=null,lt=new fe(0,0,J,H),dt=new fe(0,0,J,H),Ct=!1,Yt=new ar,Y=!1,j=!1,ht=new _e,it=new _e,At=new M,It=new fe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function jt(){return R===null?G:1}let P=n;function ln(w,D){return e.getContext(w,D)}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${th}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),P===null){let D="webgl2";if(P=ln(D,w),P===null)throw ln(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Zt,ne,Dt,Me,Nt,A,S,F,Z,tt,$,St,ut,yt,ie,rt,vt,kt,Ut,_t,Kt,zt,ve,L;function gt(){Zt=new pg(P),Zt.init(),zt=new qx(P,Zt),ne=new lg(P,Zt,t,zt),Dt=new Gx(P),ne.reverseDepthBuffer&&Dt.buffers.depth.setReversed(!0),Me=new xg(P),Nt=new Px,A=new Xx(P,Zt,Dt,Nt,ne,zt,Me),S=new hg(v),F=new fg(v),Z=new Ep(P),ve=new ag(P,Z),tt=new mg(P,Z,Me,ve),$=new vg(P,tt,Z,Me),Ut=new yg(P,ne,A),rt=new cg(Nt),St=new Cx(v,S,F,Zt,ne,ve,rt),ut=new Jx(v,Nt),yt=new Lx,ie=new Fx(Zt),kt=new rg(v,S,F,Dt,$,f,l),vt=new Hx(v,$,ne),L=new Qx(P,Me,ne,Dt),_t=new og(P,Zt,Me),Kt=new gg(P,Zt,Me),Me.programs=St.programs,v.capabilities=ne,v.extensions=Zt,v.properties=Nt,v.renderLists=yt,v.shadowMap=vt,v.state=Dt,v.info=Me}gt();let q=new Cc(v,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(J,H,!1))},this.getSize=function(w){return w.set(J,H)},this.setSize=function(w,D,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,H=D,e.width=Math.floor(w*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(J*G,H*G).floor()},this.setDrawingBufferSize=function(w,D,B){J=w,H=D,G=B,e.width=Math.floor(w*B),e.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,D,B,V){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,D,B,V),Dt.viewport(y.copy(lt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,D,B,V){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,D,B,V),Dt.scissor(E.copy(dt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){Dt.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,D=!0,B=!0){let V=0;if(w){let k=!1;if(R!==null){let at=R.texture.format;k=at===dh||at===uh||at===hh}if(k){let at=R.texture.type,mt=at===ti||at===ki||at===sr||at===ys||at===lh||at===ch,Mt=kt.getClearColor(),bt=kt.getClearAlpha(),Pt=Mt.r,Lt=Mt.g,Et=Mt.b;mt?(d[0]=Pt,d[1]=Lt,d[2]=Et,d[3]=bt,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=Pt,g[1]=Lt,g[2]=Et,g[3]=bt,P.clearBufferiv(P.COLOR,0,g))}else V|=P.COLOR_BUFFER_BIT}D&&(V|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),yt.dispose(),ie.dispose(),Nt.dispose(),S.dispose(),F.dispose(),$.dispose(),ve.dispose(),L.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bh),q.removeEventListener("sessionend",Hh),bi.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=Me.autoReset,D=vt.enabled,B=vt.autoUpdate,V=vt.needsUpdate,k=vt.type;gt(),Me.autoReset=w,vt.enabled=D,vt.autoUpdate=B,vt.needsUpdate=V,vt.type=k}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){let D=w.target;D.removeEventListener("dispose",te),Ie(D)}function Ie(w){Qe(w),Nt.remove(w)}function Qe(w){let D=Nt.get(w).programs;D!==void 0&&(D.forEach(function(B){St.releaseProgram(B)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,V,k,at){D===null&&(D=Qt);let mt=k.isMesh&&k.matrixWorld.determinant()<0,Mt=xf(w,D,B,V,k);Dt.setMaterial(V,mt);let bt=B.index,Pt=1;if(V.wireframe===!0){if(bt=tt.getWireframeAttribute(B),bt===void 0)return;Pt=2}let Lt=B.drawRange,Et=B.attributes.position,he=Lt.start*Pt,be=(Lt.start+Lt.count)*Pt;at!==null&&(he=Math.max(he,at.start*Pt),be=Math.min(be,(at.start+at.count)*Pt)),bt!==null?(he=Math.max(he,0),be=Math.min(be,bt.count)):Et!=null&&(he=Math.max(he,0),be=Math.min(be,Et.count));let Te=be-he;if(Te<0||Te===1/0)return;ve.setup(k,V,Mt,B,bt);let cn,ae=_t;if(bt!==null&&(cn=Z.get(bt),ae=Kt,ae.setIndex(cn)),k.isMesh)V.wireframe===!0?(Dt.setLineWidth(V.wireframeLinewidth*jt()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(k.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Dt.setLineWidth(Tt*jt()),k.isLineSegments?ae.setMode(P.LINES):k.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else k.isPoints?ae.setMode(P.POINTS):k.isSprite&&ae.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Tt=k._multiDrawStarts,Be=k._multiDrawCounts,oe=k._multiDrawCount,Rn=bt?Z.get(bt).bytesPerElement:1,Wi=Nt.get(V).currentProgram.getUniforms();for(let hn=0;hn<oe;hn++)Wi.setValue(P,"_gl_DrawID",hn),ae.render(Tt[hn]/Rn,Be[hn])}else if(k.isInstancedMesh)ae.renderInstances(he,Te,k.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Be=Math.min(B.instanceCount,Tt);ae.renderInstances(he,Te,Be)}else ae.render(he,Te)};function re(w,D,B){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,Dr(w,D,B),w.side=fi,w.needsUpdate=!0,Dr(w,D,B),w.side=Ce):Dr(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),m=ie.get(B),m.init(D),_.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let V=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let at=k.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Mt=at[mt];re(Mt,B,k),V.add(Mt)}else re(at,B,k),V.add(at)}),_.pop(),m=null,V},this.compileAsync=function(w,D,B=null){let V=this.compile(w,D,B);return new Promise(k=>{function at(){if(V.forEach(function(mt){Nt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){k(w);return}setTimeout(at,10)}Zt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let je=null;function Gn(w){je&&je(w)}function Bh(){bi.stop()}function Hh(){bi.start()}let bi=new Md;bi.setAnimationLoop(Gn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){je=w,q.setAnimationLoop(w),w===null?bi.stop():bi.start()},q.addEventListener("sessionstart",Bh),q.addEventListener("sessionend",Hh),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,R),m=ie.get(w,_.length),m.init(D),_.push(m),it.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Yt.setFromProjectionMatrix(it),j=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,j),x=yt.get(w,p.length),x.init(),p.push(x),q.enabled===!0&&q.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&Bo(at,D,-1/0,v.sortObjects)}Bo(w,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(z,et),ue=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ue&&kt.addToRenderList(x,w),this.info.render.frame++,Y===!0&&rt.beginShadows();let B=m.state.shadowsArray;vt.render(B,w,D),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,k=x.transmissive;if(m.setupLights(),D.isArrayCamera){let at=D.cameras;if(k.length>0)for(let mt=0,Mt=at.length;mt<Mt;mt++){let bt=at[mt];Gh(V,k,w,bt)}ue&&kt.render(w);for(let mt=0,Mt=at.length;mt<Mt;mt++){let bt=at[mt];Vh(x,w,bt,bt.viewport)}}else k.length>0&&Gh(V,k,w,D),ue&&kt.render(w),Vh(x,w,D);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,D),ve.resetDefaultState(),I=-1,X=null,_.pop(),_.length>0?(m=_[_.length-1],Y===!0&&rt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Bo(w,D,B,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Yt.intersectsSprite(w)){V&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);let mt=$.update(w),Mt=w.material;Mt.visible&&x.push(w,mt,Mt,B,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Yt.intersectsObject(w))){let mt=$.update(w),Mt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),It.copy(mt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(Mt)){let bt=mt.groups;for(let Pt=0,Lt=bt.length;Pt<Lt;Pt++){let Et=bt[Pt],he=Mt[Et.materialIndex];he&&he.visible&&x.push(w,mt,he,B,It.z,Et)}}else Mt.visible&&x.push(w,mt,Mt,B,It.z,null)}}let at=w.children;for(let mt=0,Mt=at.length;mt<Mt;mt++)Bo(at[mt],D,B,V)}function Vh(w,D,B,V){let k=w.opaque,at=w.transmissive,mt=w.transparent;m.setupLightsView(B),Y===!0&&rt.setGlobalState(v.clippingPlanes,B),V&&Dt.viewport(y.copy(V)),k.length>0&&Lr(k,D,B),at.length>0&&Lr(at,D,B),mt.length>0&&Lr(mt,D,B),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Gh(w,D,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Ge(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?mn:ti,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let at=m.state.transmissionRenderTarget[V.id],mt=V.viewport||y;at.setSize(mt.z,mt.w);let Mt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(N),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),ue&&kt.render(B);let bt=v.toneMapping;v.toneMapping=di;let Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Y===!0&&rt.setGlobalState(v.clippingPlanes,V),Lr(w,B,V),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Et=0,he=D.length;Et<he;Et++){let be=D[Et],Te=be.object,cn=be.geometry,ae=be.material,Tt=be.group;if(ae.side===Ce&&Te.layers.test(V.layers)){let Be=ae.side;ae.side=$e,ae.needsUpdate=!0,Wh(Te,B,V,cn,ae,Tt),ae.side=Be,ae.needsUpdate=!0,Lt=!0}}Lt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Mt),v.setClearColor(N,O),Pt!==void 0&&(V.viewport=Pt),v.toneMapping=bt}function Lr(w,D,B){let V=D.isScene===!0?D.overrideMaterial:null;for(let k=0,at=w.length;k<at;k++){let mt=w[k],Mt=mt.object,bt=mt.geometry,Pt=V===null?mt.material:V,Lt=mt.group;Mt.layers.test(B.layers)&&Wh(Mt,D,B,bt,Pt,Lt)}}function Wh(w,D,B,V,k,at){w.onBeforeRender(v,D,B,V,k,at),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,D,B,V,w,at),k.transparent===!0&&k.side===Ce&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,v.renderBufferDirect(B,D,V,k,w,at),k.side=fi,k.needsUpdate=!0,v.renderBufferDirect(B,D,V,k,w,at),k.side=Ce):v.renderBufferDirect(B,D,V,k,w,at),w.onAfterRender(v,D,B,V,k,at)}function Dr(w,D,B){D.isScene!==!0&&(D=Qt);let V=Nt.get(w),k=m.state.lights,at=m.state.shadowsArray,mt=k.state.version,Mt=St.getParameters(w,k.state,at,D,B),bt=St.getProgramCacheKey(Mt),Pt=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",te),Pt=new Map,V.programs=Pt);let Lt=Pt.get(bt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===mt)return qh(w,Mt),Lt}else Mt.uniforms=St.getUniforms(w),w.onBeforeCompile(Mt,v),Lt=St.acquireProgram(Mt,bt),Pt.set(bt,Lt),V.uniforms=Mt.uniforms;let Et=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=rt.uniform),qh(w,Mt),V.needsLights=vf(w),V.lightsStateVersion=mt,V.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function Xh(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=ps.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function qh(w,D){let B=Nt.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function xf(w,D,B,V,k){D.isScene!==!0&&(D=Qt),A.resetTextureUnits();let at=D.fog,mt=V.isMeshStandardMaterial?D.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xi,bt=(V.isMeshStandardMaterial?F:S).get(V.envMap||mt),Pt=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!B.morphAttributes.position,he=!!B.morphAttributes.normal,be=!!B.morphAttributes.color,Te=di;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=v.toneMapping);let cn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=cn!==void 0?cn.length:0,Tt=Nt.get(V),Be=m.state.lights;if(Y===!0&&(j===!0||w!==X)){let _n=w===X&&V.id===I;rt.setState(V,w,_n)}let oe=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Be.state.version||Tt.outputColorSpace!==Mt||k.isBatchedMesh&&Tt.batching===!1||!k.isBatchedMesh&&Tt.batching===!0||k.isBatchedMesh&&Tt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Tt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Tt.instancing===!1||!k.isInstancedMesh&&Tt.instancing===!0||k.isSkinnedMesh&&Tt.skinning===!1||!k.isSkinnedMesh&&Tt.skinning===!0||k.isInstancedMesh&&Tt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Tt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Tt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Tt.instancingMorph===!1&&k.morphTexture!==null||Tt.envMap!==bt||V.fog===!0&&Tt.fog!==at||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==rt.numPlanes||Tt.numIntersection!==rt.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==Lt||Tt.morphTargets!==Et||Tt.morphNormals!==he||Tt.morphColors!==be||Tt.toneMapping!==Te||Tt.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Tt.__version=V.version);let Rn=Tt.currentProgram;oe===!0&&(Rn=Dr(V,D,k));let Wi=!1,hn=!1,Ho=!1,Re=Rn.getUniforms(),ii=Tt.uniforms;if(Dt.useProgram(Rn.program)&&(Wi=!0,hn=!0,Ho=!0),V.id!==I&&(I=V.id,hn=!0),Wi||X!==w){ne.reverseDepthBuffer?(ht.copy(w.projectionMatrix),sp(ht),rp(ht),Re.setValue(P,"projectionMatrix",ht)):Re.setValue(P,"projectionMatrix",w.projectionMatrix),Re.setValue(P,"viewMatrix",w.matrixWorldInverse);let _n=Re.map.cameraPosition;_n!==void 0&&_n.setValue(P,At.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Re.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,hn=!0,Ho=!0)}if(k.isSkinnedMesh){Re.setOptional(P,k,"bindMatrix"),Re.setOptional(P,k,"bindMatrixInverse");let _n=k.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Re.setValue(P,"boneTexture",_n.boneTexture,A))}k.isBatchedMesh&&(Re.setOptional(P,k,"batchingTexture"),Re.setValue(P,"batchingTexture",k._matricesTexture,A),Re.setOptional(P,k,"batchingIdTexture"),Re.setValue(P,"batchingIdTexture",k._indirectTexture,A),Re.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Re.setValue(P,"batchingColorTexture",k._colorsTexture,A));let Vo=B.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0)&&Ut.update(k,B,Rn),(hn||Tt.receiveShadow!==k.receiveShadow)&&(Tt.receiveShadow=k.receiveShadow,Re.setValue(P,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ii.envMap.value=bt,ii.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(ii.envMapIntensity.value=D.environmentIntensity),hn&&(Re.setValue(P,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&yf(ii,Ho),at&&V.fog===!0&&ut.refreshFogUniforms(ii,at),ut.refreshMaterialUniforms(ii,V,G,H,m.state.transmissionRenderTarget[w.id]),ps.upload(P,Xh(Tt),ii,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ps.upload(P,Xh(Tt),ii,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(P,"center",k.center),Re.setValue(P,"modelViewMatrix",k.modelViewMatrix),Re.setValue(P,"normalMatrix",k.normalMatrix),Re.setValue(P,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let _n=V.uniformsGroups;for(let Go=0,_f=_n.length;Go<_f;Go++){let Yh=_n[Go];L.update(Yh,Rn),L.bind(Yh,Rn)}}return Rn}function yf(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function vf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,B){Nt.get(w.texture).__webglTexture=D,Nt.get(w.depthTexture).__webglTexture=B;let V=Nt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let B=Nt.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){R=w,C=D,T=B;let V=!0,k=null,at=!1,mt=!1;if(w){let bt=Nt.get(w);if(bt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(bt.__hasExternalTextures)A.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Et=w.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&Nt.has(Et)&&(w.width!==Et.image.width||w.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(mt=!0);let Lt=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?k=Lt[D][B]:k=Lt[D],at=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?k=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[B]:k=Lt,y.copy(w.viewport),E.copy(w.scissor),U=w.scissorTest}else y.copy(lt).multiplyScalar(G).floor(),E.copy(dt).multiplyScalar(G).floor(),U=Ct;if(Dt.bindFramebuffer(P.FRAMEBUFFER,k)&&V&&Dt.drawBuffers(w,k),Dt.viewport(y),Dt.scissor(E),Dt.setScissorTest(U),at){let bt=Nt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,B)}else if(mt){let bt=Nt.get(w.texture),Pt=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.__webglTexture,B||0,Pt)}I=-1},this.readRenderTargetPixels=function(w,D,B,V,k,at,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){Dt.bindFramebuffer(P.FRAMEBUFFER,Mt);try{let bt=w.texture,Pt=bt.format,Lt=bt.type;if(!ne.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&B>=0&&B<=w.height-k&&P.readPixels(D,B,V,k,zt.convert(Pt),zt.convert(Lt),at)}finally{let bt=R!==null?Nt.get(R).__webglFramebuffer:null;Dt.bindFramebuffer(P.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,D,B,V,k,at,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){let bt=w.texture,Pt=bt.format,Lt=bt.type;if(!ne.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&B>=0&&B<=w.height-k){Dt.bindFramebuffer(P.FRAMEBUFFER,Mt);let Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(D,B,V,k,zt.convert(Pt),zt.convert(Lt),0);let he=R!==null?Nt.get(R).__webglFramebuffer:null;Dt.bindFramebuffer(P.FRAMEBUFFER,he);let be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ip(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Et),P.deleteSync(be),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,B=0){w.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-B),k=Math.floor(w.image.width*V),at=Math.floor(w.image.height*V),mt=D!==null?D.x:0,Mt=D!==null?D.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,mt,Mt,k,at),Dt.unbindTexture()},this.copyTextureToTexture=function(w,D,B=null,V=null,k=0){w.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],k=arguments[3]||0,B=null);let at,mt,Mt,bt,Pt,Lt;B!==null?(at=B.max.x-B.min.x,mt=B.max.y-B.min.y,Mt=B.min.x,bt=B.min.y):(at=w.image.width,mt=w.image.height,Mt=0,bt=0),V!==null?(Pt=V.x,Lt=V.y):(Pt=0,Lt=0);let Et=zt.convert(D.format),he=zt.convert(D.type);A.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let be=P.getParameter(P.UNPACK_ROW_LENGTH),Te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cn=P.getParameter(P.UNPACK_SKIP_PIXELS),ae=P.getParameter(P.UNPACK_SKIP_ROWS),Tt=P.getParameter(P.UNPACK_SKIP_IMAGES),Be=w.isCompressedTexture?w.mipmaps[k]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Pt,Lt,at,mt,Et,he,Be.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Pt,Lt,Be.width,Be.height,Et,Be.data):P.texSubImage2D(P.TEXTURE_2D,k,Pt,Lt,at,mt,Et,he,Be),P.pixelStorei(P.UNPACK_ROW_LENGTH,be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),k===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B=null,V=null,k=0){w.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],k=arguments[4]||0);let at,mt,Mt,bt,Pt,Lt,Et,he,be,Te=w.isCompressedTexture?w.mipmaps[k]:w.image;B!==null?(at=B.max.x-B.min.x,mt=B.max.y-B.min.y,Mt=B.max.z-B.min.z,bt=B.min.x,Pt=B.min.y,Lt=B.min.z):(at=Te.width,mt=Te.height,Mt=Te.depth,bt=0,Pt=0,Lt=0),V!==null?(Et=V.x,he=V.y,be=V.z):(Et=0,he=0,be=0);let cn=zt.convert(D.format),ae=zt.convert(D.type),Tt;if(D.isData3DTexture)A.setTexture3D(D,0),Tt=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)A.setTexture2DArray(D,0),Tt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Be=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Wi=P.getParameter(P.UNPACK_SKIP_ROWS),hn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Tt,k,Et,he,be,at,mt,Mt,cn,ae,Te.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,k,Et,he,be,at,mt,Mt,cn,Te.data):P.texSubImage3D(Tt,k,Et,he,be,at,mt,Mt,cn,ae,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hn),k===0&&D.generateMipmaps&&P.generateMipmap(Tt),Dt.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Dt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Dt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===fh?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Ja?"display-p3":"srgb"}};var Ua=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Na=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new M,za=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends Hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rs,Ys=new M,as=new M,os=new M,ls=new Q,$s=new Q,Td=new _e,ea=new M,Zs=new M,na=new M,Vu=new Q,Ml=new Q,Gu=new Q,En=class extends De{constructor(t=new pn){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pc(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new za(n,3,0,!1)),rs.setAttribute("uv",new za(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ia(ea.set(-.5,-.5,0),os,a,as,i,r),ia(Zs.set(.5,-.5,0),os,a,as,i,r),ia(na.set(.5,.5,0),os,a,as,i,r),Vu.set(0,0),Ml.set(1,0),Gu.set(1,1);let o=t.ray.intersectTriangle(ea,Zs,na,!1,Ys);if(o===null&&(ia(Zs.set(-.5,.5,0),os,a,as,i,r),Ml.set(0,1),o=t.ray.intersectTriangle(ea,na,Zs,!1,Ys),o===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:ui.getInterpolation(Ys,ea,Zs,na,Vu,Ml,Gu,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(s,t,e,n,i,r){ls.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?($s.x=r*ls.x-i*ls.y,$s.y=i*ls.x+r*ls.y):$s.copy(ls),s.copy(t),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Td)}var bs=class extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new M,Oa=new M,Wu=new _e,Ks=new rr,sa=new Ni,bl=new M,Xu=new M,or=class extends De{constructor(t=new ge,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Fa.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Oa);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Wu.copy(i).invert(),Ks.copy(t.ray).applyMatrix4(Wu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),v=ra(this,t,Ks,l,p,_);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=ra(this,t,Ks,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=ra(this,t,Ks,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ra(this,t,Ks,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ra(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Fa.fromBufferAttribute(a,i),Oa.fromBufferAttribute(a,r),e.distanceSqToSegment(Fa,Oa,bl,Xu)>n)return;bl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:Xu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var lr=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qu=new _e,Ic=new rr,aa=new Ni,oa=new M,Ba=class extends De{constructor(t=new ge,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;qu.copy(i).invert(),Ic.copy(t.ray).applyMatrix4(qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);oa.fromBufferAttribute(u,m),Yu(oa,m,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)oa.fromBufferAttribute(u,g),Yu(oa,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yu(s,t,e,n,i,r,a){let o=Ic.distanceSqToPoint(s);if(o<e){let l=new M;Ic.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ss=class extends fn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Q:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new M,i=[],r=[],a=[],o=new M,l=new _e;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new M)}r[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(He(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends wn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lc=class extends cr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var la=new M,Sl=new mh,El=new mh,wl=new mh,Dc=class extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new M){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(la.subVectors(i[0],i[1]).add(i[0]),c=la);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(la.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=la),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),El.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),wl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),El.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sl.calc(l),El.calc(l),wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new M().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $u(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function jx(s,t){let e=1-s;return e*e*t}function ty(s,t){return 2*(1-s)*s*t}function ey(s,t){return s*s*t}function tr(s,t,e,n){return jx(s,t)+ty(s,e)+ey(s,n)}function ny(s,t){let e=1-s;return e*e*e*t}function iy(s,t){let e=1-s;return 3*e*e*s*t}function sy(s,t){return 3*(1-s)*s*s*t}function ry(s,t){return s*s*s*t}function er(s,t,e,n,i){return ny(s,t)+iy(s,e)+sy(s,n)+ry(s,i)}var Ha=class extends wn{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,i.x,r.x,a.x,o.x),er(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kc=class extends wn{constructor(t=new M,e=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new M){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,i.x,r.x,a.x,o.x),er(t,i.y,r.y,a.y,o.y),er(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends wn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends wn{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends wn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,i.x,r.x,a.x),tr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends wn{constructor(t=new M,e=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new M){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,i.x,r.x,a.x),tr(t,i.y,r.y,a.y),tr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set($u(o,l.x,c.x,h.x,u.x),$u(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Q().fromArray(i))}return this}},Zu=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:Dc,CubicBezierCurve:Ha,CubicBezierCurve3:kc,EllipseCurve:cr,LineCurve:Va,LineCurve3:Uc,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Nc,SplineCurve:Wa}),zc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Zu[i.type]().fromJSON(i))}return this}},hr=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Va(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ga(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Ha(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new cr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Es=class s extends ge{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=He(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new M,f=new Q,d=new M,g=new M,x=new M,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){let v=n+_*h*i,b=Math.sin(v),C=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*b,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),o.push(f.x,f.y);let R=l[3*T+0]*b,I=l[3*T+1],X=l[3*T+0]*C;c.push(R,I,X)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let b=v+_*t.length,C=b,T=b+t.length,R=b+t.length+1,I=b+1;r.push(C,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("uv",new Ht(o,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},kn=class s extends Es{constructor(t=1,e=1,n=4,i=8){let r=new hr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},ei=class s extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new M,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class s extends ge{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function _(){let b=new M,C=new M,T=0,R=(e-t)/n;for(let I=0;I<=r;I++){let X=[],y=I/r,E=y*(e-t)+t;for(let U=0;U<=i;U++){let N=U/i,O=N*l+o,J=Math.sin(O),H=Math.cos(O);C.x=E*J,C.y=-y*n+m,C.z=E*H,u.push(C.x,C.y,C.z),b.set(J,R,H).normalize(),f.push(b.x,b.y,b.z),d.push(N,1-y),X.push(g++)}x.push(X)}for(let I=0;I<i;I++)for(let X=0;X<r;X++){let y=x[X][I],E=x[X+1][I],U=x[X+1][I+1],N=x[X][I+1];t>0&&(h.push(y,E,N),T+=3),e>0&&(h.push(E,U,N),T+=3)}c.addGroup(p,T,0),p+=T}function v(b){let C=g,T=new Q,R=new M,I=0,X=b===!0?t:e,y=b===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;let E=g;for(let U=0;U<=i;U++){let O=U/i*l+o,J=Math.cos(O),H=Math.sin(O);R.x=X*H,R.y=m*y,R.z=X*J,u.push(R.x,R.y,R.z),f.push(0,y,0),T.x=J*.5+.5,T.y=H*.5*y+.5,d.push(T.x,T.y),g++}for(let U=0;U<i;U++){let N=C+U,O=E+U;b===!0?h.push(O,O+1,N):h.push(O+1,O,N),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gi=class s extends tn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fc=class s extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new M,b=new M,C=new M;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],b),d(e[T+2],C),l(v,b,C,_)}function l(_,v,b,C){let T=C+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let X=_.clone().lerp(b,I/T),y=v.clone().lerp(b,I/T),E=T-I;for(let U=0;U<=E;U++)U===0&&I===T?R[I][U]=X:R[I][U]=X.clone().lerp(y,U/E)}for(let I=0;I<T;I++)for(let X=0;X<2*(T-I)-1;X++){let y=Math.floor(X/2);X%2===0?(f(R[I][y+1]),f(R[I+1][y]),f(R[I][y])):(f(R[I][y+1]),f(R[I+1][y+1]),f(R[I+1][y]))}}function c(_){let v=new M;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(_),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let _=new M;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let b=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;a.push(b,1-C)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],b=a[_+2],C=a[_+4],T=Math.max(v,b,C),R=Math.min(v,b,C);T>.9&&R<.1&&(v<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let b=_*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let _=new M,v=new M,b=new M,C=new M,T=new Q,R=new Q,I=new Q;for(let X=0,y=0;X<r.length;X+=9,y+=6){_.set(r[X+0],r[X+1],r[X+2]),v.set(r[X+3],r[X+4],r[X+5]),b.set(r[X+6],r[X+7],r[X+8]),T.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),C.copy(_).add(v).add(b).divideScalar(3);let E=m(C);x(T,y+0,_,E),x(R,y+2,v,E),x(I,y+4,b,E)}}function x(_,v,b,C){C<0&&_.x===1&&(a[v]=_.x-1),b.x===0&&b.z===0&&(a[v]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var ur=class extends hr{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new hr().fromJSON(i))}return this}},ay={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Ad(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=uy(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return dr(r,a,e,o,l,d,0),a}};function Ad(s,t,e,n,i){let r,a;if(i===by(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Ku(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ku(r,s[r],s[r+1],a);return a&&ja(a,a.next)&&(pr(a),a=a.next),a}function zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ja(e,e.next)||we(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&gy(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ly(s,n,i,r):oy(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),pr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=cy(zi(s),t,e),dr(s,t,e,n,i,r,2)):a===2&&hy(s,t,e,n,i,r):dr(zi(s),t,e,n,i,r,1);break}}}function oy(s){let t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&hs(i,o,r,l,a,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ly(s,t,e,n){let i=s.prev,r=s,a=s.next;if(we(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Oc(d,g,t,e,n),_=Oc(x,m,t,e,n),v=s.prevZ,b=s.nextZ;for(;v&&v.z>=p&&b&&b.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&hs(o,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&hs(o,h,l,u,c,f,b.x,b.y)&&we(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&hs(o,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&hs(o,h,l,u,c,f,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function cy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ja(i,r)&&Rd(i,n,n.next,r)&&fr(i,r)&&fr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function hy(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vy(a,o)){let l=Cd(a,o);a=zi(a,a.next),l=zi(l,l.next),dr(a,t,e,n,i,r,0),dr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function uy(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Ad(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(yy(c));for(i.sort(dy),r=0;r<i.length;r++)e=fy(i[r],e);return e}function dy(s,t){return s.x-t.x}function fy(s,t){let e=py(s,t);if(!e)return t;let n=Cd(e,s);return zi(n,n.next),zi(e,e.next)}function py(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),fr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&my(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function my(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function gy(s,t,e,n){let i=s;do i.z===0&&(i.z=Oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,xy(i)}function xy(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function yy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hs(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function vy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!_y(s,t)&&(fr(s,t)&&fr(t,s)&&My(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||ja(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ja(s,t){return s.x===t.x&&s.y===t.y}function Rd(s,t,e,n){let i=ha(we(s,t,e)),r=ha(we(s,t,n)),a=ha(we(e,n,s)),o=ha(we(e,n,t));return!!(i!==r&&a!==o||i===0&&ca(s,e,t)||r===0&&ca(s,n,t)||a===0&&ca(e,s,n)||o===0&&ca(e,t,n))}function ca(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ha(s){return s>0?1:s<0?-1:0}function _y(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Rd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function fr(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function My(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Cd(s,t){let e=new Bc(s.i,s.x,s.y),n=new Bc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ku(s,t,e,n){let i=new Bc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function by(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var nr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Ju(t),Qu(n,t);let a=t.length;e.forEach(Ju);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Qu(n,e[l]);let o=ay.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ju(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Qu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ws=class s extends Fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Xa=class s extends ge{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new M,g=new Q;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,v=_,b=_+n+1,C=_+n+2,T=_+1;o.push(v,b,T),o.push(b,C,T)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},qa=class s extends ge{constructor(t=new ur([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ht(i,3)),this.setAttribute("normal",new Ht(r,3)),this.setAttribute("uv",new Ht(a,2));function c(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;nr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];nr.isClockWise(_)===!0&&(g[m]=_.reverse())}let x=nr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){let _=d[m];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){let _=x[m],v=_[0]+u,b=_[1]+u,C=_[2]+u;n.push(v,b,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Sy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function Sy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Xt=class s extends ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,f=new M,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+b,1-v),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],b=h[p][_],C=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&d.push(v,b,T),(p!==n-1||l<Math.PI)&&d.push(b,C,T)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class s extends ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new M,u=new M,f=new M;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,_=(i+1)*d+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ya=class extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ua(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ey(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qh:r=t,o=2*e-n;break;case jh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qh:a=t,l=2*n-e;break;case jh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+_*a[c+C]+v*a[l+C]+b*a[u+C];return r}},Vc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Gc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ua(e,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ua(t.times,Array),values:ua(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Ey(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=dc;var Fi=class extends Un{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ya;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Un{};Wc.prototype.ValueTypeName="color";var Xc=class extends Un{};Xc.prototype.ValueTypeName="number";var qc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$a=class extends Un{InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Un{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ya;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends Un{};Yc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},wy=new $c,Zc=class{constructor(t){this.manager=t!==void 0?t:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mr=class extends As{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new _e,ju=new M,td=new M,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kc=class extends gr{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Sa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Rs=class extends As{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ed=new _e,Js=new M,Al=new M,Jc=class extends gr{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Al.copy(n.position),Al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Al),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}},Za=class extends As{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Qc=class extends gr{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=nd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nd(){return performance.now()}var gh="\\[\\]\\.:\\/",Ty=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Ay="[^"+gh.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",xh),Cy=/(WCOD+)?/.source.replace("WCOD",Ay),Py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Ly=new RegExp("^"+Ry+Cy+Py+Iy+"$"),Dy=["material","materials","bones","map"],jc=class{constructor(t,e,n){let i=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ty,"")}static parseTrackName(t){let e=Ly.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=jc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);var to={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ky=new Ms(-1,1,1,-1,0,1),yh=class extends ge{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}},Uy=new yh,vi=class{constructor(t){this._mesh=new ot(Uy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ky)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var eo=class extends gn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yi.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var vr=class extends gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},no=class extends gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var io=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eo(to),this.copyPass.material.blending=On,this.clock=new Cs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vr!==void 0&&(a instanceof vr?n=!0:a instanceof no&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var so=class extends gn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var Pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Is=class s extends gn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,a,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ge(r,a,{type:mn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ge(r,a,{type:mn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Pd;this.highPassUniforms=yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=to;this.copyUniforms=yi.clone(h.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new le,this.fsQuad=new vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Is.BlurDirectionX=new Q(1,0);Is.BlurDirectionY=new Q(0,1);var Id={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ro=class extends gn{constructor(){super();let t=Id;this.uniforms=yi.clone(t.uniforms),this.material=new Ya({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ah&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vt=(s,t,e)=>s<t?t:s>e?e:s,xn=(s,t,e)=>s+(t-s)*e,ao=s=>s*s*(3-2*s),vh=(s,t,e)=>ao(Vt((e-s)/(t-s),0,1)),oo=(s,t,e,n)=>xn(s,t,1-Math.exp(-e*n)),Ld=Math.PI*2;function Ny(s){for(;s>Math.PI;)s-=Ld;for(;s<-Math.PI;)s+=Ld;return s}function Bi(s,t,e,n){return s+Ny(t-s)*(1-Math.exp(-e*n))}function ze(s,t,e,n){let i=s-e,r=t-n;return Math.sqrt(i*i+r*r)}function We(s=1){let t=s%2147483647;t<=0&&(t+=2147483646);let e=()=>(t=t*16807%2147483647)/2147483647;return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var st=(s,t)=>s+(t-s)*Math.random(),$t=s=>s[Math.floor(Math.random()*s.length)],ce=s=>Math.random()<s,zy="\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",Ae=s=>String(s).replace(/[0-9]/g,t=>zy[t]);function Dd(s){s=Math.max(0,Math.ceil(s));let t=Math.floor(s/60),e=s%60;return Ae(String(t).padStart(2,"0")+":"+String(e).padStart(2,"0"))}var kd=new Map;function W(s,t=.85,e){let n=s+"|"+t+(e?JSON.stringify(e):""),i=kd.get(n);return i||(i=new Gt(Object.assign({color:s,roughness:t,metalness:0},e||{})),kd.set(n,i)),i}var Ud=new Map;function Wt(s,t){let e=Ud.get(s);return e||(e=t(),Ud.set(s,e)),e}function Ls(s,t){return Wt("limb"+s+"_"+t,()=>{let e=new kn(s,Math.max(.001,t-2*s),5,10);return e.translate(0,-t/2,0),e})}function Ft(s,t,e=!0){let n=new ot(s,t);return n.castShadow=e,n.receiveShadow=!1,n}var _h=new Map;function Fy(s,t){let e=s+t;if(_h.has(e))return _h.get(e);let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle=t,i.font="900 96px Cairo, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),64,70);let r=new Ss(n);return r.colorSpace=Ye,_h.set(e,r),r}var zd=.92,lo=.42,Oy=1.16,co=.41,ho=.28,uo=.25;function fo(s){let t=new Jt,e=s.scale||1,n=s.build||1;t.scale.setScalar(e);let i=W(s.skin),r=s.top||{type:"tshirt",color:"#c33"},a=s.bottom||{type:"pants",color:"#333"},o=W(r.color,.9),l=W(r.color2||"#ffffff",.9),c=W(a.color,.92),h=W(s.shoes||"#e8e4dc",.7),u=W(s.hair||"#1a1210",.95),f={},d=(G,z,et,lt,dt)=>{let Ct=new Jt;return Ct.position.set(et,lt,dt),G.add(Ct),f[z]=Ct,Ct},g=d(t,"hips",0,zd,0),x=r.type==="galabeya"||r.type==="dress",m=Ft(Wt("pelvis",()=>new Xt(1,16,10)),x?o:c);m.scale.set(.18*n,.125,.13*n),m.position.y=.01,g.add(m);let p=d(g,"spine",0,.06,0),_=Wt("torso",()=>{let G=[[0,-.02],[.135,0],[.15,.1],[.155,.22],[.172,.34],[.182,.41],[.16,.47],[.1,.505],[.05,.515],[0,.515]].map(([z,et])=>new Q(z,et));return new Es(G,20)}),v=(r.type==="tank",o),b=Ft(_,v);if(b.scale.set(1.1*n,1,.72*n),p.add(b),r.type==="tank"){let G=Wt("tankShoulder",()=>new Xt(.075,10,8));for(let z of[-1,1]){let et=Ft(G,i);et.position.set(z*.15*n,.455,0),et.scale.set(1,.8,1),p.add(et)}}if(r.type==="tracksuit"){let G=Ft(Wt("zip",()=>new xe(.012,.42,.01)),l,!1);G.position.set(0,.25,.104*n),p.add(G)}if(r.type==="shirt"){let G=Ft(Wt("collar",()=>new Tn(.06,.018,6,14)),l,!1);G.rotation.x=Math.PI/2,G.position.y=.5,p.add(G)}if(r.type==="suit"){let G=Ft(Wt("tie",()=>new xe(.035,.26,.012)),W(r.color2||"#7a1f1f"),!1);G.position.set(0,.36,.105*n),p.add(G);let z=Ft(Wt("shirtV",()=>new xe(.08,.14,.01)),W("#f2f2f2"),!1);z.position.set(0,.44,.1*n),p.add(z)}if(r.number!=null){let G=Ft(Wt("numPlane",()=>new pe(.2,.2)),new Gt({map:Fy(r.number,r.numColor||"#fff"),transparent:!0,roughness:.9}),!1);G.position.set(0,.3,-.112*n),G.rotation.y=Math.PI,p.add(G)}if(r.type==="galabeya"||r.type==="dress"){let G=Ft(Wt("skirt",()=>{let z=[[.17,.1],[.21,-.1],[.27,-.45],[.33,-.8]].map(([et,lt])=>new Q(et,lt));return new Es(z,20)}),W(r.color,.9,{side:Ce}));G.scale.set(n,1,.8*n),g.add(G),f.skirt=G}let C=d(p,"neck",0,.5,0),T=Ft(Wt("neckM",()=>new tn(.048,.055,.1,10)),i);T.position.y=.03,C.add(T);let R=d(C,"head",0,.075,0);R.scale.setScalar(Oy);let I=Ft(Wt("skull",()=>new Xt(.115,20,16)),i);I.scale.set(.93,1.06,1),I.position.y=.105,R.add(I);let X=Wt("ear",()=>new Xt(.028,8,6));for(let G of[-1,1]){let z=Ft(X,i,!1);z.position.set(G*.105,.1,-.005),z.scale.set(.5,1,.8),R.add(z)}let y=W("#f4f1ea",.4),E=W("#1b120c",.3);for(let G of[-1,1]){let z=Ft(Wt("eyeW",()=>new Xt(.017,8,6)),y,!1);z.position.set(G*.038,.112,.099),z.scale.set(1,.85,.6),R.add(z);let et=Ft(Wt("eyeP",()=>new Xt(.011,8,6)),E,!1);et.position.set(G*.038,.111,.108),R.add(et);let lt=Ft(Wt("brow",()=>new xe(.04,.009,.012)),u,!1);lt.position.set(G*.04,.142,.104),lt.rotation.z=G*-.12,R.add(lt)}let U=Ft(Wt("nose",()=>new Xt(.018,8,6)),i,!1);U.position.set(0,.09,.113),U.scale.set(.9,1.1,1),R.add(U);let N=Ft(Wt("mouth",()=>new xe(.045,.008,.01)),W("#5a2a22"),!1);if(N.position.set(0,.055,.104),R.add(N),s.mustache){let G=Ft(Wt("mustache",()=>new xe(.06,.014,.015)),u,!1);G.position.set(0,.07,.11),R.add(G)}if(s.beard){let G=Ft(Wt("beard",()=>new Xt(.1,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2)),u,!1);G.position.set(0,.09,.015),G.scale.set(.95,.75,1),R.add(G)}if(s.glasses){let G=W("#111",.3);for(let z of[-1,1]){let et=Ft(Wt("glass",()=>new Tn(.022,.004,5,14)),G,!1);et.position.set(z*.038,.115,.113),R.add(et)}}By(R,s.hairStyle||"short",u,s);let O=["tracksuit","shirt","galabeya","suit","dress","jacket"].includes(r.type),J=["tshirt","jersey"].includes(r.type);for(let G of["l","r"]){let z=G==="l"?1:-1,et=d(p,G+"Sh",z*.205*n,.44,0),lt=Ft(Wt("shBall",()=>new Xt(.068,10,8)),r.type==="tank"?i:o);et.add(lt);let dt=Ft(Ls(.055,ho),O?o:i);if(et.add(dt),J){let ht=Ft(Ls(.068,.16),o);ht.position.y=.01,et.add(ht)}if(r.type==="tracksuit"){let ht=Ft(Wt("armStripe",()=>{let it=new xe(.012,ho,.02);return it.translate(0,-ho/2,0),it}),l,!1);ht.position.x=z*.044,et.add(ht)}let Ct=d(et,G+"El",0,-ho+.02,0),Yt=Ft(Ls(.047,uo),O?o:i),Y=Ft(Wt("elbowBall",()=>new Xt(.05,8,6)),O?o:i,!1);if(Ct.add(Y),Ct.add(Yt),r.type==="tracksuit"){let ht=Ft(Wt("foreStripe",()=>{let it=new xe(.012,uo-.04,.02);return it.translate(0,-(uo-.04)/2,0),it}),l,!1);ht.position.x=z*.038,Ct.add(ht)}let j=Ft(Wt("hand",()=>new Xt(.052,10,8)),i);j.position.y=-uo-.015,j.scale.set(.8,1.1,.9),Ct.add(j),f[G+"Hand"]=j}let H=a.type==="shorts";for(let G of["l","r"]){let z=G==="l"?1:-1,et=d(g,G+"Th",z*.092*n,-.03,0),lt=Ft(Ls(.085*Math.sqrt(n),lo),H?i:c);if(et.add(lt),H){let it=Ft(Ls(.1*Math.sqrt(n),.26),c);it.position.y=.02,et.add(it)}if((a.type==="tracksuit"||r.type==="tracksuit")&&!H){let it=Ft(Wt("legStripe",()=>{let At=new xe(.014,lo,.022);return At.translate(0,-lo/2,0),At}),l,!1);it.position.x=z*.07,et.add(it)}let dt=d(et,G+"Kn",0,-lo,0),Ct=H?s.socks?W(s.socks):i:c,Yt=Ft(Ls(.066,co),Ct),Y=Ft(Wt("kneeBall",()=>new Xt(.072,8,6)),H?i:c,!1);if(dt.add(Y),dt.add(Yt),!H&&(a.type==="tracksuit"||r.type==="tracksuit")){let it=Ft(Wt("shinStripe",()=>{let At=new xe(.014,co-.04,.02);return At.translate(0,-(co-.04)/2,0),At}),l,!1);it.position.x=z*.054,dt.add(it)}let j=d(dt,G+"An",0,-co,0),ht=s.slippers?Ft(Wt("slipper",()=>{let it=new xe(.1,.025,.25);return it.translate(0,-.06,.045),it}),h):Ft(Wt("shoe",()=>{let it=new kn(.048,.15,4,10);return it.rotateX(Math.PI/2),it.scale(1.05,.75,1),it.translate(0,-.035,.045),it}),h);if(j.add(ht),s.slippers){let it=Ft(Wt("bareFoot",()=>{let At=new kn(.04,.12,4,8);return At.rotateX(Math.PI/2),At.scale(1,.6,1),At.translate(0,-.03,.04),At}),i);j.add(it)}f[G+"Foot"]=ht}return t.traverse(G=>{G.isMesh&&(G.frustumCulled=!0)}),{root:t,J:f,look:s,scale:e}}function By(s,t,e,n){let i=(a,o,l,c,h=1,u=1,f=1)=>{let d=Ft(a,e,!1);return d.position.set(o,l,c),d.scale.set(h,u,f),s.add(d),d},r=Wt("hairCap",()=>new Xt(.122,18,10,0,Math.PI*2,0,Math.PI*.55));switch(t){case"bald":break;case"buzz":i(r,0,.11,-.005,.95,.95,1);break;case"curly":{i(r,0,.115,-.005,.98,1,1.02);let a=Wt("curl",()=>new Xt(.04,8,6));for(let o=0;o<14;o++){let l=o/14*Math.PI*2,c=.09;i(a,Math.cos(l)*c*.95,.2+Math.sin(o*1.7)*.015,Math.sin(l)*c-.01)}i(a,0,.23,0,1.6,.9,1.6);break}case"cap":{let a=W(n.capColor||"#e8e2d0",.8),o=Ft(r,a,!1);o.position.set(0,.12,0),s.add(o);let l=Ft(Wt("brim",()=>new tn(.09,.09,.012,16,1,!1,-Math.PI/2,Math.PI)),a,!1);l.position.set(0,.155,.1),l.rotation.y=Math.PI/2,l.scale.set(1,1,.8),s.add(l);break}case"scarf":{let a=W(n.scarfColor||"#3b2a4a",.95),o=Ft(Wt("scarf",()=>new Xt(.135,18,14,0,Math.PI*2,0,Math.PI*.62)),a,!1);o.position.set(0,.1,-.012),o.rotation.x=-.25,s.add(o);let l=Ft(Wt("drape",()=>new tn(.12,.2,.25,16,1,!0)),a,!1);l.position.set(0,-.04,-.02),s.add(l);break}case"gray":case"short":default:{i(r,0,.115,-.008,1,1,1.03);let a=Wt("fringe",()=>new xe(.17,.035,.05));i(a,0,.19,.075);break}}}var Fd=["hy","hrx","hry","hrz","srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex","ltx","ltz","lkx","lax","rtx","rtz","rkx","rax"],Mh=["srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex"],_r={hy:0,hrx:0,hry:0,hrz:0,srx:0,sry:0,srz:0,nrx:0,nry:0,lsx:0,lsz:.1,lex:-.15,rsx:0,rsz:-.1,rex:-.15,ltx:0,ltz:0,lkx:0,lax:0,rtx:0,rtz:0,rkx:0,rax:0};function Fe(s){let t=s.channels==="upper"?Mh:s.channels||Fd,e=Object.assign({},_r),n=s.frames.map(([i,r])=>{let a=Object.assign({},r==="def"?_r:e,r==="def"?{}:r);return e=a,[i,a]});return{dur:s.dur??n[n.length-1][0],loop:!!s.loop,hold:!!s.hold,fadeIn:s.fadeIn??.07,fadeOut:s.fadeOut??.15,channels:t,frames:n}}function Nd(s){return Fe({dur:1.5,frames:[[0,"def"],[.12,{hy:-.16,ltx:-.35,lkx:.75,rtx:-.35,rkx:.75,lax:.3,rax:.3,lsx:-1,rsx:-1,srx:.2}],[.38,{hy:-.48,hrz:s*1.3,srx:0,srz:s*.15,lsx:-2.9,rsx:-2.9,lsz:.25,rsz:-.25,lex:-.1,rex:-.1,ltx:-.1,rtx:-.1,ltz:-s*.35,rtz:-s*.25,lkx:.3,rkx:.4,lax:0,rax:0,nrx:0}],[.8,{hy:-.74,hrz:s*1.52}],[1.15,{hy:-.4,hrz:s*.6,lsx:-.6,rsx:-.6,lkx:.9,rkx:.9,ltx:-.5,rtx:-.5}],[1.5,"def"]]})}var Hy={kick:Fe({frames:[[0,"def"],[.13,{rtx:.78,rkx:1.5,rax:.35,ltx:-.12,lkx:.28,hy:-.04,lsx:-.7,lsz:.6,rsx:.6,rsz:-.3,srx:.08,sry:.35,nry:-.25,hry:.12}],[.21,{rtx:-1.25,rkx:.12,rax:.4,ltx:.08,lkx:.22,lax:-.1,lsx:.55,lsz:.75,rsx:-.55,rsz:-.45,srx:-.12,sry:-.35,nry:.1,hry:-.15,hy:-.02}],[.36,{rtx:-.75,rkx:.55,rax:.15,srx:-.04,sry:-.15,hry:-.05}],[.52,"def"]]}),pass:Fe({frames:[[0,"def"],[.1,{rtx:.45,rtz:.12,rkx:.85,rax:.1,lkx:.2,lsx:-.3,lsz:.45,rsz:-.4,sry:.2,hry:.18,hy:-.03}],[.17,{rtx:-.62,rtz:-.22,rkx:.22,rax:.15,sry:-.18,hry:-.28,lsz:.5,rsz:-.35}],[.27,{rtx:-.3,rtz:-.08,rkx:.32,hry:-.1}],[.4,"def"]]}),slide:Fe({fadeIn:.05,frames:[[0,"def"],[.13,{hy:-.7,hrx:-.78,srx:.18,nrx:.45,rtx:-.88,rkx:.05,rax:.35,ltx:-1.25,ltz:.35,lkx:1.9,lax:.3,lsx:-.7,lsz:.75,lex:-.3,rsx:.55,rsz:-1.05,rex:-.1}],[.72,{hy:-.7}],[.98,{hy:-.38,hrx:-.1,srx:.3,rtx:-.55,rkx:.9,ltx:-1.3,lkx:1.7,ltz:.1,rsx:.2,rsz:-.5,lsx:-.4,lsz:.4,nrx:0}],[1.22,"def"]]}),fall:Fe({fadeIn:.05,frames:[[0,"def"],[.18,{hy:-.1,hrx:.45,lsx:-1.6,lsz:.5,rsx:-1.4,rsz:-.5,lex:-.3,rex:-.3,ltx:.4,lkx:.6,rtx:-.3,rkx:.3,nrx:-.3}],[.42,{hy:-.73,hrx:1.5,srx:0,lsx:-2.7,lsz:.4,rsx:-2.5,rsz:-.4,lex:-.2,rex:-.2,ltx:.05,lkx:.25,rtx:.1,rkx:.4,nrx:-.65}],[.6,{hy:-.75}],[1,{rkx:1.7,rtx:.25,rax:.5,lsx:-2.2,rsx:-1.2,rsz:-.9,nry:.5,nrx:-.9}],[1.35,{rkx:1.3,lsx:-2.6,rsx:-1.6,nry:.2}],[1.7,{rkx:1.75,lsx:-2.3,rsx:-1.1,nry:.5}],[2.05,{hy:-.44,hrx:.35,srx:.2,ltx:-1.45,lkx:1.7,lax:.25,rtx:.15,rkx:1.6,rax:0,lsx:-.4,lsz:.35,rsx:-.3,rsz:-.35,lex:-.4,rex:-.4,nrx:0,nry:0}],[2.45,{hy:-.14,hrx:.12,srx:.12,ltx:-.5,lkx:.7,lax:0,rtx:.05,rkx:.35,lsx:0,rsx:0,lsz:.15,rsz:-.15,lex:-.2,rex:-.2}],[2.75,"def"]]}),pull:Fe({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.18,{srx:-.18,lsx:-1.45,lsz:.12,lex:-.15,rsx:-1.35,rsz:-.12,rex:-.25,nrx:.12}],[.25,{}]]}),pulled:Fe({channels:"upper",loop:!0,frames:[[0,{srx:.32,lsx:-2.3,lsz:.6,lex:-.3,rsx:-1.2,rsz:-.9,rex:-.4,nrx:-.35}],[.22,{lsx:-1.3,lsz:.95,rsx:-2.25,rsz:-.5}],[.44,{lsx:-2.3,lsz:.6,rsx:-1.2,rsz:-.9}]]}),airplane:Fe({channels:"upper",loop:!0,frames:[[0,{lsx:-.1,lsz:1.45,rsx:-.1,rsz:-1.45,lex:0,rex:0,srz:.18,srx:.05}],[.6,{srz:-.18}],[1.2,{srz:.18}]]}),jump:Fe({loop:!0,frames:[[0,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8,lsz:.35,rsz:-.35,lex:-.2,rex:-.2}],[.32,{hy:.22,ltx:.05,lkx:.15,rtx:.05,rkx:.15,lax:.4,rax:.4,lsx:-3,rsx:-3}],[.64,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8}]]}),sad:Fe({channels:"upper",hold:!0,dur:.5,frames:[[0,"def"],[.4,{srx:.15,nrx:.35,lsx:-2.5,lsz:.95,lex:-2,rsx:-2.5,rsz:-.95,rex:-2}],[.5,{}]]}),cheer:Fe({channels:"upper",loop:!0,frames:[[0,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,lsz:.2,rsx:-2.95,rsz:-.2,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}]]}),wave:Fe({channels:"upper",loop:!0,frames:[[0,{rsx:-2.5,rsz:-.45,rex:-.7,lsx:-.2,nrx:.15}],[.25,{rsz:-.95,rex:-.4}],[.5,{rsz:-.45,rex:-.7}]]}),point:Fe({channels:"upper",hold:!0,dur:.3,frames:[[0,"def"],[.25,{rsx:-1.55,rsz:-.15,rex:-.05,srx:-.05,nrx:.05}],[.3,{}]]}),holdBall:Fe({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.2,{lsx:-1.05,rsx:-1.05,lsz:.15,rsz:-.15,lex:-1.15,rex:-1.15}],[.25,{}]]}),throw:Fe({channels:"upper",frames:[[0,{lsx:-1.05,rsx:-1.05,lex:-1.15,rex:-1.15}],[.25,{rsx:-2.95,rsz:-.25,rex:-.9,lsx:-.6,sry:.45,srx:-.15}],[.4,{rsx:-.9,rex:-.1,sry:-.35,srx:.18}],[.7,"def"]]}),dazed:Fe({channels:"upper",loop:!0,frames:[[0,{nry:.32,srz:.08,nrx:.15,lsz:.25,rsz:-.25}],[.8,{nry:-.32,srz:-.08}],[1.6,{nry:.32,srz:.08}]]}),sit:Fe({hold:!0,dur:.4,fadeIn:.2,frames:[[0,"def"],[.35,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,lax:0,rax:0,srx:.06,lsx:-.5,rsx:-.5,lex:-.8,rex:-.8,lsz:.15,rsz:-.15}],[.4,{}]]}),sitCheer:Fe({loop:!0,frames:[[0,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,srx:.02,lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,rsx:-2.95,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,rsx:-2.7,lex:-.3,rex:-.3}]]}),diveL:Nd(-1),diveR:Nd(1),ready:Fe({hold:!0,dur:.3,fadeIn:.2,channels:["hy","srx","ltx","lkx","lax","rtx","rkx","rax","lsz","rsz","lex","rex","lsx","rsx","ltz","rtz"],frames:[[0,"def"],[.3,{hy:-.1,srx:.22,ltx:-.38,lkx:.75,lax:-.38,rtx:-.38,rkx:.75,rax:-.38,ltz:.12,rtz:-.12,lsz:.45,rsz:-.45,lsx:-.4,rsx:-.4,lex:-.7,rex:-.7}]]})},Ds=class{constructor(t){this.c=t,this.phase=Math.random()*Math.PI*2,this.spd=0,this.t=Math.random()*10,this.loco=Object.assign({},_r),this.out=Object.assign({},_r),this.layers=[],this.mode="normal",this.stepLenScale=1,this.ampScale=1,this.onStep=null}play(t,{speed:e=1,restart:n=!0}={}){let i=Hy[t];if(!i)return;let r=i.channels===Mh;for(let a of this.layers){if(a.name===t&&!n&&!a.stopping)return;(a.a.channels===Mh===r||!r)&&(a.stopping=!0)}this.layers.push({name:t,a:i,t:0,w:0,speed:e,stopping:!1})}stop(t){for(let e of this.layers)(!t||e.name===t)&&(e.stopping=!0)}isPlaying(t){return this.layers.some(e=>e.name===t&&!e.stopping)}update(t,e){this.t+=t,this.spd=oo(this.spd,e,10,t),this.locomotion(t);let n=this.out;for(let i of Fd)n[i]=this.loco[i];for(let i=0;i<this.layers.length;i++){let r=this.layers[i],a=r.a;r.t+=t*r.speed;let o=!1;r.t>=a.dur&&(a.loop?r.t%=a.dur:a.hold?r.t=a.dur:(r.t=a.dur,o=!0));let l=o||r.stopping?0:1,c=l>r.w?1/Math.max(.01,a.fadeIn):1/Math.max(.01,a.fadeOut);if(r.w=Vt(r.w+Math.sign(l-r.w)*c*t,0,1),(o||r.stopping)&&r.w<=0){this.layers.splice(i--,1);continue}let h=a.frames,u=0;for(;u<h.length-2&&h[u+1][0]<r.t;)u++;let[f,d]=h[u],[g,x]=h[Math.min(u+1,h.length-1)],m=g>f?ao(Vt((r.t-f)/(g-f),0,1)):1,p=ao(r.w);for(let _ of a.channels)n[_]=xn(n[_],xn(d[_],x[_],m),p)}this.apply(n)}locomotion(t){let e=this.loco,n=this.spd,i=this.t;if(this.mode==="ride"){this.phase+=t*(1.5+n*1.2);let T=this.phase;Object.assign(e,_r),e.hy=-.32,e.srx=.32,e.nrx=-.25,e.ltx=-1.15+.38*Math.sin(T),e.lkx=1.35+.45*Math.cos(T),e.rtx=-1.15-.38*Math.sin(T),e.rkx=1.35-.45*Math.cos(T),e.lsx=-1.05,e.rsx=-1.05,e.lex=-.35,e.rex=-.35,e.lsz=.22,e.rsz=-.22;return}let r=vh(2.2,5.2,n),a=vh(.05,.7,n),o=1-a,l=xn(.6,1.08,r)*this.c.scale*this.stepLenScale,c=this.phase;this.phase+=n/l*Math.PI*t,this.onStep&&Math.floor(c/Math.PI)!==Math.floor(this.phase/Math.PI)&&a>.5&&this.onStep(r);let h=this.phase,u=Math.sin(h),f=Math.cos(h),d=xn(.36,.7,r)*a*this.ampScale,g=xn(.72,1.6,r)*a,x=xn(.05,.26,r)*a+.06*o,m=-.12*r,p=Math.max(0,f),_=Math.max(0,-f);e.ltx=-d*u+m,e.rtx=d*u+m,e.lkx=x+g*p*p,e.rkx=x+g*_*_,e.lax=-(e.ltx+e.lkx)*.75*a+p*.3*a-.06*o,e.rax=-(e.rtx+e.rkx)*.75*a+_*.3*a-.06*o,e.ltz=.02,e.rtz=-.02;let v=Math.abs(u);e.hy=a*xn(-.028*v,.055*(v-.6),r)-.025*r-.012*o,e.hry=-.09*u*a,e.hrz=.03*u*a*(1-.5*r)+o*.018*Math.sin(i*.7),e.hrx=0,e.srx=xn(.03,.13,r)*a+o*.015*Math.sin(i*2.1),e.sry=-e.hry*1.5,e.srz=-e.hrz*.8,e.nrx=-e.srx*.6,e.nry=-e.sry*.85;let b=xn(.32,.85,r)*a*this.ampScale;e.lsx=b*u,e.rsx=-b*u,e.lsz=xn(.09,.17,r)+o*.01*Math.sin(i*2.1),e.rsz=-e.lsz;let C=xn(.22,1.3,r)*a+.15*o;e.lex=-C-Math.max(0,-e.lsx)*.45,e.rex=-C-Math.max(0,-e.rsx)*.45}apply(t){let e=this.c.J;e.hips.position.y=zd+t.hy,e.hips.rotation.set(t.hrx,t.hry,t.hrz),e.spine.rotation.set(t.srx,t.sry,t.srz),e.neck.rotation.set(t.nrx*.5,t.nry*.5,0),e.head.rotation.set(t.nrx*.5,t.nry*.5,0),e.lSh.rotation.set(t.lsx,0,t.lsz),e.rSh.rotation.set(t.rsx,0,t.rsz),e.lEl.rotation.x=t.lex,e.rEl.rotation.x=t.rex,e.lTh.rotation.set(t.ltx,0,t.ltz),e.rTh.rotation.set(t.rtx,0,t.rtz),e.lKn.rotation.x=t.lkx,e.rKn.rotation.x=t.rkx,e.lAn.rotation.x=t.lax,e.rAn.rotation.x=t.rax,e.skirt&&(e.skirt.rotation.x=(t.ltx+t.rtx)*.25)}};function sn(s,t,e,{repeat:n,color:i=!0,aniso:r=8}={}){let a=document.createElement("canvas");a.width=s,a.height=t;let o=a.getContext("2d");e(o,s,t);let l=new Ss(a);return i&&(l.colorSpace=Ye),l.anisotropy=r,n&&(l.wrapS=l.wrapT=ir,l.repeat.set(n[0],n[1])),l}function Hi(s,t,e,n,i,r,a=1,o=4){for(let l=0;l<i;l++){s.fillStyle=r[Math.floor(n()*r.length)];let c=a+n()*(o-a);s.fillRect(n()*t,n()*e,c,c*(.5+n()))}}function nn(s,t,e,n,i,r,a,o){for(let l=0;l<i;l++){let c=n()*t,h=n()*e,u=a+n()*(o-a),f=s.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,r),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.beginPath(),s.ellipse(c,h,u,u*(.4+n()*.6),n()*3,0,7),s.fill()}}function Sh(s,t,e,n,i,r,a=8,o=22){s.strokeStyle=r;for(let l=0;l<i;l++){let c=n()*t,h=n()*e;s.lineWidth=1+n()*1.5,s.beginPath(),s.moveTo(c,h);for(let u=0;u<a;u++)c+=(n()-.5)*o*2,h+=(n()-.5)*o,s.lineTo(c,h),n()<.15&&s.moveTo(c,h);s.stroke()}}function Xd(s,t,e,n,i=3){let r=We(i),a=48,o=Math.min(4096,Math.round(t*a)),l=Math.min(2048,Math.round(e*a)),c=o/t,h=l/e,u=d=>(d+t/2)*c,f=d=>(d+e/2)*h;return sn(o,l,d=>{if(s==="asphalt"){d.fillStyle="#7d766a",d.fillRect(0,0,o,l),nn(d,o,l,r,60,"rgba(60,55,48,0.35)",40,160),nn(d,o,l,r,40,"rgba(150,130,100,0.35)",40,140),Hi(d,o,l,r,6e4,["rgba(40,36,32,0.25)","rgba(200,190,170,0.18)","rgba(120,110,95,0.3)"],1,3);for(let p=0;p<8;p++){d.fillStyle="rgba(60,57,54,0.28)";let _=r()*o,v=r()*l,b=50+r()*120,C=30+r()*60;d.beginPath(),d.moveTo(_,v);for(let T=1;T<=9;T++){let R=T/9*Math.PI*2;d.lineTo(_+Math.cos(R)*b*(.7+r()*.3),v+Math.sin(R)*C*(.7+r()*.3))}d.fill()}nn(d,o,l,r,8,"rgba(20,20,25,0.45)",20,50),Sh(d,o,l,r,60,"rgba(30,26,22,0.55)"),d.fillStyle="rgba(55,50,45,0.4)",d.fillRect(0,f(0)-3,o,6)}else if(s==="dirt"){d.fillStyle="#a58a64",d.fillRect(0,0,o,l),nn(d,o,l,r,90,"rgba(130,105,75,0.22)",40,200),nn(d,o,l,r,60,"rgba(195,170,130,0.3)",40,160),Hi(d,o,l,r,7e4,["rgba(80,60,40,0.3)","rgba(220,200,165,0.25)","rgba(140,115,85,0.35)"],1,4),Hi(d,o,l,r,3e3,["#8d8577","#c9c1b2","#6f675b"],3,7);for(let p=0;p<900;p++){let _=r()<.5?r()*l*.12:l-r()*l*.12,v=r()*o;d.strokeStyle=r()<.5?"rgba(120,130,60,0.6)":"rgba(150,140,70,0.6)",d.lineWidth=1.5,d.beginPath(),d.moveTo(v,_),d.lineTo(v+(r()-.5)*8,_-6-r()*8),d.stroke()}nn(d,o,l,r,30,"rgba(140,110,75,0.2)",60,120)}else if(s==="tiles"){d.fillStyle="#b9b3a6",d.fillRect(0,0,o,l);let p=.5*c;for(let _=0;_<l;_+=p)for(let v=0;v<o;v+=p){let b=165+Math.floor(r()*30);d.fillStyle=`rgb(${b},${b-6},${b-16})`,d.fillRect(v+1,_+1,p-2,p-2),r()<.06&&(d.fillStyle="rgba(90,85,75,0.5)",d.fillRect(v+1,_+1,p-2,p-2)),r()<.04&&Vy(d,v+p/2,_+p/2,p,r)}nn(d,o,l,r,50,"rgba(70,65,55,0.25)",40,160),Hi(d,o,l,r,25e3,["rgba(60,55,50,0.2)","rgba(240,235,225,0.2)"],1,3)}else s==="roof"&&(d.fillStyle="#9b9488",d.fillRect(0,0,o,l),nn(d,o,l,r,30,"rgba(50,48,50,0.22)",40,140),nn(d,o,l,r,40,"rgba(180,170,150,0.35)",30,120),Hi(d,o,l,r,5e4,["rgba(60,55,50,0.25)","rgba(220,215,200,0.2)"],1,3),Sh(d,o,l,r,50,"rgba(40,35,30,0.5)"),nn(d,o,l,r,6,"rgba(70,75,80,0.35)",60,140));d.save(),d.strokeStyle=s==="dirt"?"rgba(240,235,220,0.55)":"rgba(245,245,238,0.7)",d.lineWidth=6,d.lineCap="round";let g=(p,_,v,b)=>{d.beginPath(),d.moveTo(p,_);let C=12;for(let T=1;T<=C;T++){let R=T/C;d.lineTo(p+(v-p)*R+(r()-.5)*4,_+(b-_)*R+(r()-.5)*4)}d.stroke()},x=n.halfL,m=n.halfW;if((s==="asphalt"||s==="tiles"||s==="roof")&&(d.setLineDash([22,14]),g(u(0),f(-m),u(0),f(m)),d.setLineDash([]),d.beginPath(),d.arc(u(0),f(0),1.6*c,0,7),d.stroke()),s==="tiles"){d.strokeRect(u(-x),f(-m),2*x*c,2*m*h);for(let v of[-1,1]){let b=u(v*x),C=u(v*(x-3.5));d.beginPath(),d.moveTo(b,f(-3.5)),d.lineTo(C,f(-3.5)),d.lineTo(C,f(3.5)),d.lineTo(b,f(3.5)),d.stroke()}d.lineWidth=4;let p=u(-x+2),_=f(m+1.2);for(let v=0;v<6;v++)d.strokeRect(p+v*.6*c,_,.6*c,.6*h)}if(s==="dirt"){d.lineWidth=8;for(let p of[-1,1])g(u(p*x),f(-m+.5),u(p*x),f(m-.5)),g(u(p*x),f(-4.5),u(p*(x-4)),f(-4.5)),g(u(p*(x-4)),f(-4.5),u(p*(x-4)),f(4.5)),g(u(p*(x-4)),f(4.5),u(p*x),f(4.5));g(u(0),f(-m+.5),u(0),f(m-.5))}d.restore()})}function Vy(s,t,e,n,i){s.strokeStyle="rgba(60,55,45,0.6)",s.lineWidth=1,s.beginPath(),s.moveTo(t-n/2,e+(i()-.5)*n),s.lineTo(t,e),s.lineTo(t+n/2,e+(i()-.5)*n),s.stroke()}var bh=new Map;function rn(s,t=1,e={}){let n=s+t+JSON.stringify(e);if(bh.has(n))return bh.get(n);let i=We(t),r=sn(512,512,(a,o,l)=>{a.fillStyle=s,a.fillRect(0,0,o,l),nn(a,o,l,i,30,"rgba(0,0,0,0.08)",30,120),nn(a,o,l,i,20,"rgba(255,255,255,0.07)",30,100),Hi(a,o,l,i,9e3,["rgba(0,0,0,0.07)","rgba(255,255,255,0.06)"],1,3);for(let c=0;c<6;c++){let h=i()*o,u=a.createLinearGradient(0,0,0,l*.6);u.addColorStop(0,"rgba(40,35,30,0.18)"),u.addColorStop(1,"rgba(40,35,30,0)"),a.fillStyle=u,a.fillRect(h,0,6+i()*18,l*.6)}if(e.bricks!==!1)for(let c=0;c<3;c++){let h=i()*o*.8,u=l*.3+i()*l*.6,f=40+i()*60,d=20+i()*40;a.fillStyle="#9a5a3c",a.fillRect(h,u,f,d),a.strokeStyle="rgba(200,190,170,0.6)",a.lineWidth=1;for(let g=u;g<u+d;g+=8)a.beginPath(),a.moveTo(h,g),a.lineTo(h+f,g),a.stroke()}Sh(a,o,l,i,8,"rgba(50,40,30,0.35)",6,14),e.band&&(a.fillStyle=e.band,a.fillRect(0,l*.86,o,l*.14),Hi(a,o,l*.14,i,800,["rgba(0,0,0,0.12)"],1,4))},{repeat:[1,1]});return bh.set(n,r),r}function qd(s="#6f7378"){return sn(128,256,(t,e,n)=>{t.fillStyle=s,t.fillRect(0,0,e,n);for(let r=0;r<n;r+=8)t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,r,e,2),t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,r+3,e,2);let i=We(9);nn(t,e,n,i,10,"rgba(120,60,30,0.35)",10,40)})}function Eh(s,{w:t=512,h:e=128,bg:n=null,color:i="#fff",font:r="900 72px Cairo",stroke:a=null,rot:o=0,shadow:l=null}={}){return sn(t,e,c=>{n&&(c.fillStyle=n,c.fillRect(0,0,t,e)),c.translate(t/2,e/2),c.rotate(o),c.font=r,c.textAlign="center",c.textBaseline="middle",c.direction="rtl",l&&(c.shadowColor=l,c.shadowBlur=8),a&&(c.strokeStyle=a,c.lineWidth=8,c.strokeText(s,0,4)),c.fillStyle=i,c.fillText(s,0,4)})}function ks(s,t,e="#fff",n=null){return sn(512,128,(i,r,a)=>{i.fillStyle=t,i.fillRect(0,0,r,a),i.strokeStyle="rgba(255,255,255,0.5)",i.lineWidth=6,i.strokeRect(6,6,r-12,a-12),i.fillStyle=e,i.font=n?"900 58px Cairo":"900 68px Cairo",i.textAlign="center",i.textBaseline="middle",i.direction="rtl",i.fillText(s,r/2,n?52:68),n&&(i.font="700 30px Cairo",i.fillText(n,r/2,102));let o=We(s.length);nn(i,r,a,o,6,"rgba(0,0,0,0.15)",10,50)})}var Od,Bd,Hd,Vd,Gd;var Wd;function Mr(){return Od||(Od=sn(128,128,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.6)"),e.addColorStop(.5,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)}))}function Yd(){return Bd||(Bd=sn(128,128,(s,t)=>{let e=We(5);for(let n=0;n<9;n++){let i=t/2+(e()-.5)*t*.4,r=t/2+(e()-.5)*t*.4,a=t*(.18+e()*.14),o=s.createRadialGradient(i,r,0,i,r,a);o.addColorStop(0,"rgba(255,255,255,0.75)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.beginPath(),s.arc(i,r,a,0,7),s.fill()}}))}function $d(){return Hd||(Hd=sn(64,64,(s,t)=>{s.translate(t/2,t/2),s.fillStyle="#ffd23f",s.strokeStyle="#7a5200",s.lineWidth=3,s.beginPath();for(let e=0;e<10;e++){let n=e%2?11:26,i=e/10*Math.PI*2-Math.PI/2;s.lineTo(Math.cos(i)*n,Math.sin(i)*n)}s.closePath(),s.fill(),s.stroke()}))}function Zd(){return Vd||(Vd=sn(64,256,(s,t,e)=>{let n=s.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(.35,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)},{aniso:1}))}function Kd(){return Gd||(Gd=sn(128,128,(s,t)=>{s.clearRect(0,0,t,t),s.strokeStyle="rgba(240,240,235,0.9)",s.lineWidth=2.5;for(let e=0;e<=t;e+=16)s.beginPath(),s.moveTo(e,0),s.lineTo(e,t),s.stroke(),s.beginPath(),s.moveTo(0,e),s.lineTo(t,e),s.stroke()},{repeat:[1,1]}))}function wh(){return Wd||(Wd=sn(128,128,(s,t)=>{s.fillStyle="#20262a",s.fillRect(0,0,t,t),s.strokeStyle="rgba(220,235,245,0.9)",s.lineWidth=2;let e=t*.45,n=t*.55;for(let i=0;i<12;i++){let r=i/12*Math.PI*2+i*.3;s.beginPath(),s.moveTo(e,n),s.lineTo(e+Math.cos(r)*t*.3,n+Math.sin(r)*t*.3),s.lineTo(e+Math.cos(r+.2)*t,n+Math.sin(r+.2)*t),s.stroke()}for(let i=12;i<t;i+=18)s.beginPath(),s.arc(e,n,i,0,7),s.stroke();s.clearRect(e-18,n-14,34,30)}))}function br(s,t="rgba(30,30,30,0.75)",e=1024,n=256){return sn(e,n,i=>{i.clearRect(0,0,e,n),i.textAlign="center",i.textBaseline="middle",i.direction="rtl",s.forEach((r,a)=>{i.font=r.font||"900 90px Cairo",i.fillStyle=r.color||t,i.save(),i.translate(e*(r.x??.5),n*(r.y??.5)),i.rotate(r.rot||0),i.fillText(r.text,0,0),i.restore()})})}function nt(s,t,e,n,i=0,r=0,a=0,o){let l=new ot(new xe(s,t,e),n);return l.position.set(i,r,a),l.castShadow=!0,l.receiveShadow=!0,o&&o.add(l),l}function qt(s,t,e,n,i=0,r=0,a=0,o,l=14){let c=new ot(new tn(s,t,e,l),n);return c.position.set(i,r,a),c.castShadow=!0,c.receiveShadow=!0,o&&o.add(c),c}var Th=new Map;function Gy(s,t,e){let n=s+t+e;return Th.has(n)||Th.set(n,new Gt({map:rn(s,t,{band:e}),roughness:.95})),Th.get(n)}function Sr(s,{x0:t,x1:e,z:n,face:i=1,h:r=12,color:a="#c9a982",seed:o=1,floors:l=3,shop:c=null,depth:h=5,roofStuff:u=!0,lit:f=.5,door:d=!1}){let g=s.static,x=We(o*31+7),m=e-t,p=(t+e)/2,_=Gy(a,o,"rgba(70,60,50,0.35)"),v=W(new Rt(a).multiplyScalar(.82).getStyle(),.95),b=W("#6a6058",.95),C=[v,v,b,v,i>0?_:v,i>0?v:_],T=new ot(new xe(m,r,h),C);T.position.set(p,r/2,n-i*h/2),T.castShadow=!0,T.receiveShadow=!0,g.add(T),s.colliders.push({min:new M(t,0,Math.min(n,n-i*h)),max:new M(e,r,Math.max(n,n-i*h)),tag:"wall",face:i}),nt(m+.1,.25,.3,W("#d8cfc0"),p,r-.1,n+i*.1,g);for(let E=1;E<l+1;E++)nt(m,.12,.12,W("#b8ad9c"),p,E*3.1,n+i*.04,g);let R=1.05,I=1.35,X=Math.max(1,Math.floor(m/2.4)),y=m/X;for(let E=c?1:0;E<l+1;E++){let U=E*3.1+1.6;if(U+I/2>r-.4)break;for(let N=0;N<X;N++){let O=t+y*(N+.5);d&&E===0&&N===Math.floor(X/2)||Wy(s,O,U,n,i,R,I,x,f)}}if(d){let E=Math.floor(X/2),U=t+y*(E+.5),N=W("#5a3a22",.8);nt(1.3,2.4,.12,N,U,1.2,n+i*.04,g),nt(1.5,.15,.2,W("#c9c0b0"),U,2.48,n+i*.08,g),nt(1.8,.16,.5,W("#a39a8a"),U,.08,n+i*.25,g),s.doors.push(new M(U,0,n+i*.6))}if(c&&Xy(s,t+.3,e-.3,n,i,c),u){let E=1+Math.floor(x()*3);for(let U=0;U<E;U++){let N=t+.8+x()*(m-1.6),O=x();O<.4?mo(g,N,r,n-i*(1+x()*2),i):O<.7?Er(g,N,r,n-i*2.5):nt(1.2,1.4,1.2,W("#8a7f70"),N,r+.7,n-i*2.5,g)}}x()<.7&&qy(g,t+.8+x()*(m-1.6),4.4+Math.floor(x()*2)*3.1,n,i)}function Wy(s,t,e,n,i,r,a,o,l){let c=s.static,h=W("#e2dccf",.8);nt(r+.16,.1,.18,h,t,e-a/2-.05,n+i*.06,c),nt(r+.16,.08,.12,h,t,e+a/2+.04,n+i*.04,c);let u=o(),f=W(o()<.5?"#6b4a2e":"#4f6a52",.85);if(u<.28){let m=nt(r,a,.06,f,t,e,n+i*.03,c);m.castShadow=!1;return}for(let m of[-1,1]){let p=nt(r/2,a,.04,f,t+m*(r/2+r/4+.02),e,n+i*.05,c);p.castShadow=!1}let d=o()<l,g=new Gt({color:d?"#3a3020":"#2c3a42",roughness:.15,metalness:.3,emissive:d?"#ffb85a":"#000000",emissiveIntensity:0}),x=new ot(new pe(r,a),g);if(x.position.set(t,e,n+i*.015),i<0&&(x.rotation.y=Math.PI),s.dynamic.add(x),nt(.05,a,.03,h,t,e,n+i*.03,c).castShadow=!1,nt(r,.05,.03,h,t,e+.15,n+i*.03,c).castShadow=!1,o()<.6){let m=new Gt({color:o()<.5?"#c9a0a0":"#a8b8c8",roughness:1,emissive:d?"#ffb070":"#000",emissiveIntensity:0}),p=new ot(new pe(r*.35,a*.9),m);p.position.set(t-r*.3,e,n+i*.02),i<0&&(p.rotation.y=Math.PI),s.dynamic.add(p),s.litMats.push({m,lit:d,k:.5})}s.litMats.push({m:g,lit:d,k:1}),s.windows.push({mesh:x,x0:t-r/2,x1:t+r/2,y0:e-a/2,y1:e+a/2,z:n,face:i,broken:!1,lit:d})}function Xy(s,t,e,n,i,r){let a=s.static,o=e-t,l=(t+e)/2,c=new Gt({map:qd(r.shutter||"#6f7378"),roughness:.6,metalness:.4});if(r.open){let u=W("#2a2420",1);nt(o*.8,2.5,.1,u,l,1.25,n+i*.02,a);let f=We(o*10);for(let x=0;x<3;x++){nt(o*.75,.05,.3,W("#6a4a2a"),l,.6+x*.6,n+i*.15,a);for(let m=0;m<10;m++){let p=["#d84b4b","#f2d24b","#4a8bd8","#3c9a4a","#f08a30","#eee"][Math.floor(f()*6)];nt(.15,.25,.15,W(p),l-o*.35+m/9*o*.7,.75+x*.6,n+i*.18,a).castShadow=!1}}let d={pos:new M(l,2.3,n+i*.8),color:"#ffe0a0",intensity:6,dist:7,shadow:!1};s.pointLights.push(d);let g=new ot(new Xt(.08,8,6),new le({color:"#fff3c8"}));g.position.copy(d.pos),s.dynamic.add(g),s.nightOnly.push(g)}else{let u=nt(o*.8,2.5,.08,c,l,1.25,n+i*.04,a);u.castShadow=!1}let h=new ot(new pe(Math.min(o*.85,4.2),1),new Gt({map:ks(r.name,r.bg,"#fff",r.sub),roughness:.7,emissive:"#ffffff",emissiveIntensity:0}));if(h.position.set(l,3,n+i*.1),i<0&&(h.rotation.y=Math.PI),a.add(h),s.litMats.push({m:h.material,lit:!0,k:.25,emissiveMap:!0}),r.awning){let u=Math.floor(o/.5);for(let f=0;f<u;f++){let d=nt(.5,.06,1.3,W(f%2?"#e9e2cf":r.awning),t+.25+f*.5+(o-u*.5)/2,2.6,n+i*.6,a);d.rotation.x=i*.28}}}function po(s,t,e,n,i,r=3.2){let a=s.static,o=1.15;nt(r,.16,o,W("#8a8070"),t,e,n+i*o/2,a);let l=W("#2f2a24",.6,{metalness:.5});nt(r,.06,.06,l,t,e+.95,n+i*o,a),nt(.06,.06,o,l,t-r/2,e+.95,n+i*o/2,a),nt(.06,.06,o,l,t+r/2,e+.95,n+i*o/2,a);for(let h=0;h<=14;h++){let u=t-r/2+h/14*r;nt(.035,.9,.035,l,u,e+.5,n+i*o,a).castShadow=!0}for(let h of[-1,1])for(let u=1;u<5;u++)nt(.035,.9,.035,l,t+h*r/2,e+.5,n+i*(u/5)*o,a);nt(1.1,2.1,.06,W("#5a3a22"),t-.4,e+1.1,n+i*.03,a),qt(.18,.13,.3,W("#a4532e"),t+1.1,e+.23,n+i*.35,a);let c=new ot(new Xt(.28,10,8),W("#3c7a3a"));c.position.set(t+1.1,e+.6,n+i*.35),c.castShadow=!0,a.add(c),s.balconies.push({min:new M(t-r/2,e+.08,Math.min(n,n+i*o)),max:new M(t+r/2,e+1,Math.max(n,n+i*o)),momPos:new M(t+.2,e+.08,n+i*.45),face:i}),s.colliders.push({min:new M(t-r/2,e-.08,Math.min(n,n+i*o)),max:new M(t+r/2,e+.08,Math.max(n,n+i*o)),tag:"balconyFloor"})}function qy(s,t,e,n,i){let r=W("#e8e4dc",.6);nt(.85,.5,.45,r,t,e,n+i*.25,s);let a=W("#9a9a9a");for(let o=0;o<6;o++)nt(.05,.38,.02,a,t-.3+o*.12,e,n+i*.48,s).castShadow=!1;nt(.03,.03,.3,W("#555"),t+.3,e-.27,n+i*.3,s)}function mo(s,t,e,n,i=1){let r=W("#e4e4e0",.5),a=new ot(new Xt(.55,16,8,0,Math.PI*2,0,Math.PI*.28),r);a.material=W("#e4e4e0",.5,{side:Ce}),a.position.set(t,e+.9,n),a.rotation.x=i*1.9,a.castShadow=!0,s.add(a),qt(.03,.03,.9,W("#666"),t,e+.45,n,s),qt(.02,.02,.6,W("#666"),t,e+1,n+i*.3,s).rotation.x=i*.8}function Er(s,t,e,n){let i=W("#2f2f33",.6);qt(.6,.6,1.4,i,t,e+1.3,n,s,18),qt(.3,.3,.12,i,t,e+2.05,n,s);for(let r of[-1,1])for(let a of[-1,1])nt(.06,.6,.06,W("#555"),t+r*.4,e+.3,n+a*.4,s)}function go(s,t,e,n,i=.4){let r=[];for(let h=0;h<=10;h++){let u=h/10,f=new M().lerpVectors(t,e,u);f.y-=Math.sin(u*Math.PI)*i,r.push(f)}let a=new or(new ge().setFromPoints(r),new bs({color:"#222"}));s.add(a);let o=["#e0e0ff","#d84b4b","#f2d24b","#4a8bd8","#ffffff","#3c9a4a","#f08a30","#c070c0"],l=[],c=Math.floor(t.distanceTo(e)/.8);for(let h=1;h<c;h++){if(n()<.25)continue;let u=h/c,f=new M().lerpVectors(t,e,u);f.y-=Math.sin(u*Math.PI)*i;let d=.4+n()*.35,g=.45+n()*.45,x=new pe(d,g);x.translate(0,-g/2,0);let m=new ot(x,W(o[Math.floor(n()*o.length)],.95,{side:Ce}));m.position.copy(f),m.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,m.castShadow=!0,m.userData.dyn=!0,s.add(m),l.push(m)}return l}function xo(s,t,e,n=.6,i="#151515"){let r=[];for(let a=0;a<=16;a++){let o=a/16,l=new M().lerpVectors(t,e,o);l.y-=Math.sin(o*Math.PI)*n,r.push(l)}s.add(new or(new ge().setFromPoints(r),new bs({color:i})))}function An(s,t,e,n,{flicker:i=!1,h:r=5.6,arm:a=1.3,wall:o=!1}={}){let l=s.static,c=W("#2a2a2a",.5,{metalness:.6});o||(qt(.07,.1,r,c,t,r/2,e,l,8),s.colliders.push({min:new M(t-.1,0,e-.1),max:new M(t+.1,r,e+.1),tag:"pole"}));let h=nt(.06,.06,a,c,t,r,e+n*a/2,l);h.castShadow=!1;let u=new ot(new tn(.08,.28,.18,12),W("#333",.5));u.position.set(t,r-.05,e+n*a),l.add(u);let f=new Gt({color:"#fff5d6",emissive:"#ffd27a",emissiveIntensity:0}),d=new ot(new Xt(.11,10,8),f);d.position.set(t,r-.16,e+n*a),s.dynamic.add(d),s.lamps.push({pos:d.position.clone(),bulbMat:f,flicker:i,face:n,wall:o,color:i?"#ffc070":"#ffd28a"})}function Jd(s,t,e,n=0){let i=new Jt;i.position.set(t,0,e),i.rotation.y=n,s.static.add(i);let r=W("#2d6aa8",.6);nt(2.4,.9,1.1,r,0,.85,0,i),nt(2.45,.08,1.15,W("#f1c232"),0,1,0,i),nt(2.5,.06,1.2,W("#c8c8c8",.4,{metalness:.6}),0,1.33,0,i);let a=W("#c9c9c9",.3,{metalness:.85});qt(.32,.36,.55,a,-.6,1.62,0,i),qt(.25,.28,.45,a,.25,1.58,.1,i),qt(.3,.3,.04,a,-.6,1.92,0,i);for(let h of[-1,1]){let u=qt(.35,.35,.12,W("#222"),h*.75,.35,.6,i,16);u.rotation.x=Math.PI/2}let o=new ot(new pe(2.2,.45),new Gt({map:ks("\u0641\u0648\u0644 \u0648\u0641\u0644\u0627\u0641\u0644","#2d6aa8","#fff"),roughness:.7}));o.position.set(0,.75,.56),i.add(o),qt(.025,.025,1.4,W("#555"),.95,2,0,i,6);let l=new M(.95,2.65,0).applyEuler(new Sn(0,n,0)).add(new M(t,0,e));s.pointLights.push({pos:l,color:"#ffeab0",intensity:9,dist:9,shadow:!1});let c=new ot(new Xt(.09,8,6),new le({color:"#fff6d0"}));c.position.copy(l),s.dynamic.add(c),s.nightOnly.push(c),Qd(s,i,2.5,1.4,1.2,.85)}function Qd(s,t,e,n,i,r=n/2){let a=Math.abs(Math.cos(t.rotation.y))>.5,o=(a?e:i)/2,l=(a?i:e)/2;s.colliders.push({min:new M(t.position.x-o,0,t.position.z-l),max:new M(t.position.x+o,r+n/2,t.position.z+l),tag:"obj",solid:!0})}function jd(s,t,e,n=0,i="#c9b48a"){let r=new Jt;r.position.set(t,0,e),r.rotation.y=n,s.static.add(r);let a=W(i,.45,{metalness:.3});nt(3.9,.6,1.6,a,0,.62,0,r),nt(2,.55,1.45,a,-.2,1.18,0,r);let o=W("#2a3540",.1,{metalness:.5});nt(2.02,.42,1.3,o,-.2,1.2,0,r),nt(1.6,.44,1.47,o,-.2,1.2,0,r);let l=W("#d0d0d0",.25,{metalness:.9});nt(.12,.18,1.62,l,1.97,.45,0,r),nt(.12,.18,1.62,l,-1.97,.45,0,r);for(let c of[-1,1]){let h=new ot(new ei(.12,12),W("#fff8e0",.2));h.position.set(1.96,.72,c*.55),h.rotation.y=Math.PI/2,r.add(h)}for(let c of[-1.25,1.25])for(let h of[-.78,.78]){let u=qt(.3,.3,.2,W("#1b1b1b"),c,.3,h,r,16);u.rotation.x=Math.PI/2}nt(1.8,.04,1.3,W("#8a7f6a"),-.2,1.47,0,r).castShadow=!1,Qd(s,r,3.9,1.5,1.6,.75)}function tf(){let s=new Jt,t=W("#e0a21c",.4,{metalness:.3}),e=W("#1b1b1b",.7);nt(2.2,.8,1.2,t,0,.75,0,s),nt(1.6,.9,1.25,e,-.25,1.55,0,s).material=W("#111",.9),nt(2.3,.08,1.35,e,-.1,2.05,0,s),nt(.08,.9,1.15,W("#2a3540",.1,{metalness:.5}),.85,1.55,0,s);let n=qt(.25,.45,.6,t,1.2,.75,0,s);n.rotation.z=Math.PI/2,nt(.4,.04,1.1,W("#ffd23f"),.2,1.15,0,s);let i=new ot(new pe(1.1,.35),new le({map:Eh("\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",{color:"#b81f1f",font:"900 70px Cairo"}),transparent:!0}));i.position.set(-1.11,1,0),i.rotation.y=-Math.PI/2,s.add(i);let r=[];for(let[l,c]of[[1.25,0],[-.75,.62],[-.75,-.62]]){let h=qt(.26,.26,.16,e,l,.26,c,s,14);h.rotation.x=Math.PI/2,r.push(h)}let a=new ot(new Xt(.1,8,6),new le({color:"#fff4c0"}));a.position.set(1.45,.95,0),s.add(a);let o=[];for(let l=0;l<6;l++){let c=new ot(new Xt(.045,6,4),new le({color:["#ff3355","#33ff88","#3388ff","#ffdd33"][l%4]}));c.position.set(-1.2+l*.42,2.1,.68),s.add(c),o.push(c)}return s.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),{grp:s,wheels:r,disco:o}}function ef(s,t,e,n){let i=W("#a8452c",.9),r=W("#c65a3c",.9);for(let a of[-1,1]){let o=a*e,l=nt(.45,.22,.22,i,t,.11,o,s.static);l.rotation.y=.15*a;let c=nt(.45,.22,.22,r,t+.03,.33,o+.02,s.static);c.rotation.y=-.1*a,s.colliders.push({min:new M(t-.24,0,o-.13),max:new M(t+.24,.45,o+.13),tag:"post"})}if(n<0){let a=nt(.26,.03,.1,W("#2e8b57"),t+.2,.015,e+.45,s.static);a.rotation.y=.6}}function nf(s,t,e){let n=["#2e8b57","#3a6fd8","#e05a30","#222"],i=0;for(let r of[-1,1]){let a=r*e;for(let o of[-.06,.08]){let l=nt(.28,.035,.11,W(n[i++%4],.8),t+o,.018,a+o,s.static);l.rotation.y=r*.4+o*4;let c=nt(.04,.05,.12,W("#eee"),t+o+.05,.04,a+o,s.static);c.rotation.y=l.rotation.y}s.colliders.push({min:new M(t-.18,0,a-.12),max:new M(t+.18,.08,a+.12),tag:"post"})}}function sf(s,t,e,n,i){let r=W("#8a5a3a",.6,{metalness:.5}),a=W("#d8d4c8",.5,{metalness:.3}),o=1.4,l=.06;for(let f of[-1,1]){let d=qt(l,l,n,f>0?a:r,t,n/2,f*e,s.static,10);s.colliders.push({min:new M(t-l,0,f*e-l),max:new M(t+l,n,f*e+l),tag:"post",metal:!0});let g=qt(.03,.03,Math.hypot(o,n),r,t+i*o/2,n/2,f*e,s.static,6);g.rotation.z=i*Math.atan2(o,n),nt(.05,.05,.05,r,t+i*o,.02,f*e,s.static)}let c=qt(l,l,e*2,a,t,n,0,s.static,10);c.rotation.x=Math.PI/2,s.colliders.push({min:new M(t-l,n-l,-e),max:new M(t+l,n+l,e),tag:"post",metal:!0});let h=new Gt({map:Kd(),transparent:!0,alphaTest:.3,side:Ce,roughness:1});h.map.repeat.set(6,3);let u=new ot(new pe(e*2,Math.hypot(o,n)),h);u.position.set(t+i*o/2,n/2,0),u.rotation.y=Math.PI/2,u.rotation.order="YXZ",u.rotation.x=-i*Math.atan2(o,n),s.static.add(u);for(let f of[-1,1]){let d=new ur;d.moveTo(0,0),d.lineTo(i*o,0),d.lineTo(0,n),d.closePath();let g=new ot(new qa(d),h);g.position.set(t,0,f*e),s.static.add(g)}s.colliders.push({min:new M(Math.min(t+i*o,t+i*(o+.1)),0,-e),max:new M(Math.max(t+i*o,t+i*(o+.1)),n,e),tag:"net"}),s.colliders.push({min:new M(Math.min(t,t+i*o),0,-e-.05),max:new M(Math.max(t,t+i*o),n,-e),tag:"net"}),s.colliders.push({min:new M(Math.min(t,t+i*o),0,e),max:new M(Math.max(t,t+i*o),n,e+.05),tag:"net"}),s.colliders.push({min:new M(Math.min(t,t+i*o),n,-e),max:new M(Math.max(t,t+i*o),n+.05,e),tag:"net"})}function rf(s,t,e,n,i){let r=Eh("",{w:8,h:8}),a=new le({color:"#f4f2ea",transparent:!0,opacity:.85}),o=.07,l=(c,h,u,f)=>{let d=new ot(new pe(c,h),a);d.position.set(t+i*.012,f,u),d.rotation.y=i*Math.PI/2,s.static.add(d)};l(o,n,-e,n/2),l(o,n,e,n/2),l(e*2+o,o,0,n);for(let c=0;c<5;c++)l(.03,n*.9,-e+(c+1)*(e*2)/6,n*.45);for(let c=0;c<3;c++)l(e*2,.03,0,(c+1)*n/4);r.dispose()}function Us(s,t,e,n=1,i=Math.random){let r=qt(.14*n,.22*n,2.6*n,W("#5a4030",.95),t,1.3*n,e,s,8);r.rotation.z=(i()-.5)*.15;let a=W(i()<.5?"#4f7a3a":"#5d8a40",.9);for(let o=0;o<6;o++){let l=new ot(new ws((.9+i()*.5)*n,1),a);l.position.set(t+(i()-.5)*1.4*n,(2.8+i()*1.2)*n,e+(i()-.5)*1.4*n),l.castShadow=!0,s.add(l)}}function wr(s,t,e,n="#3a5a8a"){let i=qt(.32,.32,.9,W(n,.6,{metalness:.4}),t,.45,e,s,14);for(let r of[.2,.7])qt(.335,.335,.04,W("#5a3a2a",.6,{metalness:.4}),t,r,e,s,14);return i}function Ah(s,t,e,n=3){for(let i=0;i<n;i++){let r=new ot(new Tn(.32,.13,8,16),W("#1c1c1c",.9));r.rotation.x=Math.PI/2,r.position.set(t+i%2*.05,.13+i*.24,e),r.castShadow=!0,s.add(r)}}function yo(s,t,e,n=0,i="#e8e8e2"){let r=new Jt;r.position.set(t,0,e),r.rotation.y=n;let a=W(i,.5);nt(.45,.05,.45,a,0,.45,0,r),nt(.45,.45,.04,a,0,.7,-.21,r);for(let o of[-1,1])for(let l of[-1,1])nt(.04,.45,.04,a,o*.19,.22,l*.19,r);return s.add(r),r}function Rh(s,t,e){qt(.35,.35,.04,W("#d8d0c0",.5),t,.72,e,s,16),qt(.04,.04,.72,W("#666"),t,.36,e,s,6),nt(.4,.04,.25,W("#6a3a1a"),t,.76,e,s);for(let n of[-1,1])qt(.03,.025,.08,W("#c8603a",.2),t+n*.25,.78,e+.1,s,8)}function af(s,t,e){let n=s.static,i=W("#7a5a3a",.9),r=W("#3a3a3a",.7);for(let o of[-1,1])for(let l of[-1,1])nt(.1,2.2,.1,i,t+o*1.2,1.1,e+l*.9,n);nt(2.6,1.6,2,i,t,2.9,e,n),nt(2.5,1.4,.02,r,t,2.9,e+1.01,n);let a=nt(3,.08,2.4,W("#8a8a8a",.5,{metalness:.5}),t,3.8,e,n);a.rotation.z=.08;for(let o=0;o<6;o++)nt(.5,.04,.06,i,t-1.6,.3+o*.38,e+1,n);nt(.05,2.4,.06,i,t-1.85,1.2,e+1,n),nt(.05,2.4,.06,i,t-1.35,1.2,e+1,n),s.colliders.push({min:new M(t-1.3,0,e-1),max:new M(t+1.3,3.8,e+1),tag:"obj",solid:!0})}function of(s,t,e){let n=s.static;qt(.05,.07,8,W("#c0c0c0",.3,{metalness:.8}),t,4,e,n,8);let i=new Jt;i.position.set(t,7.3,e);let r=["#ce1126","#ffffff","#000000"];for(let o=0;o<3;o++){let l=new ot(new pe(1.5,.33),W(r[o],.9,{side:Ce}));l.position.set(.78,.33-o*.33,0),i.add(l)}let a=new ot(new ei(.1,10),W("#c09a30",.6,{side:Ce}));a.position.set(.78,0,.005),i.add(a),n.add(i),s.flags.push(i)}function an(s,t,e,n,i,r,a,{thick:o=.3,collide:l=!0,collideH:c=null,cap:h=!0}={}){let u=Math.hypot(n-t,i-e),f=new ot(new xe(u,r,o),a);if(f.position.set((t+n)/2,r/2,(e+i)/2),f.rotation.y=-Math.atan2(i-e,n-t),f.castShadow=!0,f.receiveShadow=!0,s.static.add(f),h){let d=new ot(new xe(u+.05,.08,o+.08),W("#b3aa9a"));d.position.set(f.position.x,r+.04,f.position.z),d.rotation.y=f.rotation.y,d.castShadow=!0,s.static.add(d)}if(l){let d=Math.abs(n-t)/2+o/2,g=Math.abs(i-e)/2+o/2;s.colliders.push({min:new M((t+n)/2-d,0,(e+i)/2-g),max:new M((t+n)/2+d,c??r,(e+i)/2+g),tag:"wall"})}return f}var Vi={alley:{id:"alley",name:"\u0627\u0644\u062D\u0627\u0631\u0629",desc:"\u062D\u0627\u0631\u0629 \u0636\u064A\u0642\u0629\u060C \u062C\u0648\u0646 \u0628\u0637\u0648\u0628\u062A\u064A\u0646\u060C \u0648\u0627\u0644\u062D\u064A\u0637\u0627\u0646 \u0628\u062A\u0631\u062C\u0651\u0639 \u0627\u0644\u0643\u0648\u0631\u0629. \u062E\u0644\u064A \u0628\u0627\u0644\u0643 \u0645\u0646 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643!",halfL:17,halfW:4.6,goal:{type:"bricks",hw:1.25,h:1.05},teamSize:4},yard:{id:"yard",name:"\u0627\u0644\u062D\u0648\u0634 \u0627\u0644\u0648\u0627\u0633\u0639",desc:"\u0623\u0631\u0636 \u062A\u0631\u0627\u0628 \u0648\u0627\u0633\u0639\u0629 \u0648\u0639\u0627\u0631\u0636\u062A\u064A\u0646 \u062D\u062F\u064A\u062F \u0635\u062F\u064A\u0629. \u0641\u064A\u0647 \u0645\u0633\u0627\u062D\u0629 \u062A\u062C\u0631\u064A \u0641\u064A\u0647\u0627.",halfL:21,halfW:10,goal:{type:"frame",hw:2,h:2},teamSize:5},school:{id:"school",name:"\u062D\u0648\u0634 \u0627\u0644\u0645\u062F\u0631\u0633\u0629",desc:"\u0627\u0644\u062C\u0648\u0646 \u0645\u062A\u0637\u0628\u0627\u0634\u0631 \u0639\u0644\u0649 \u0627\u0644\u062D\u064A\u0637\u0629. \u0648\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u064A\u0637\u0644\u0639 \u0643\u0644 \u0634\u0648\u064A\u0629\u060C \u0644\u0648 \u0634\u0627\u0641\u0643 \u0628\u062A\u0641\u0627\u0648\u0644 \u0647\u064A\u0637\u0631\u062F\u0643!",halfL:18,halfW:8,goal:{type:"chalk",hw:1.6,h:1.9},teamSize:5},roof:{id:"roof",name:"\u0627\u0644\u0633\u0637\u062D",desc:"\u0633\u0637\u062D \u0639\u0645\u0627\u0631\u0629 \u062C\u0646\u0628 \u063A\u064A\u0629 \u0627\u0644\u062D\u0645\u0627\u0645. \u0644\u0648 \u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A \u062D\u062F \u0644\u0627\u0632\u0645 \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!",halfL:12,halfW:6.2,goal:{type:"slippers",hw:1,h:.9},teamSize:3}},vo=["alley","yard","school","roof"],ni={home:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0627\u0631\u0629",short:"\u0627\u0644\u062D\u064F\u0645\u0631",colors:["#c8322a","#d0342a","#b81f1f","#e04a2f","#a82424"],accent:"#ffffff",ui:"#c8322a"},away:{name:"\u0634\u0644\u0629 \u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0644\u064A \u0648\u0631\u0627",short:"\u0627\u0644\u0632\u064F\u0651\u0631\u0642",colors:["#2a63c8","#3b82d6","#1f4ea0","#2f6fe0","#2456b0"],accent:"#ffffff",ui:"#2a63c8"},green:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0648\u0634",short:"\u0627\u0644\u062E\u064F\u0636\u0631",colors:["#2f8f46","#3aa356","#237a3a","#2d9a4f","#1f6b33"],accent:"#ffffff",ui:"#2f8f46"},yellow:{name:"\u0648\u0644\u0627\u062F \u062A\u0627\u0644\u062A\u0629 \u062A\u0627\u0644\u062A",short:"\u0627\u0644\u0635\u064F\u0651\u0641\u0631",colors:["#e2b21c","#f0c22a","#d4a00e","#e8b820","#c99a10"],accent:"#222222",ui:"#d4a00e"},black:{name:"\u0634\u0628\u0627\u0628 \u0627\u0644\u0633\u0637\u0648\u062D",short:"\u0627\u0644\u0633\u064F\u0651\u0648\u062F",colors:["#2b2b30","#3a3a40","#222226","#35353b","#2e2e34"],accent:"#ffd23f",ui:"#3a3a40"},white:{name:"\u0643\u0628\u0627\u0631 \u0627\u0644\u062D\u062A\u0629",short:"\u0627\u0644\u0628\u064A\u0636",colors:["#ecebe6","#f4f2ea","#dedcd4","#e8e6de","#d8d6ce"],accent:"#c8322a",ui:"#8d8a80"}},lf=["\u062D\u0645\u0627\u062F\u0629","\u0632\u064A\u0632\u0648","\u0628\u064A\u0628\u0648","\u0634\u064A\u0643\u0627","\u0639\u0628\u062F\u0647","\u062A\u064A\u062A\u0648","\u0645\u064A\u062F\u0648","\u062D\u0648\u062F\u0629","\u0633\u064A\u0643\u0627","\u0623\u0648\u0643\u0627","\u0643\u0631\u064A\u0645","\u0645\u0635\u0637\u0641\u0649","\u0625\u0633\u0644\u0627\u0645","\u0628\u0644\u0628\u0644","\u0634\u0631\u064A\u0641","\u0639\u0645\u0631\u0648","\u0637\u0627\u0631\u0642","\u0633\u0639\u064A\u062F","\u064A\u0627\u0633\u064A\u0646","\u062D\u0633\u0648\u0646\u0629","\u0645\u0627\u0632\u0646","\u0648\u0644\u064A\u062F","\u0631\u0627\u0645\u064A","\u0628\u0648\u062F\u064A","\u0641\u0627\u0631\u0633","\u0633\u0627\u0645\u062D","\u062D\u0633\u0627\u0645","\u0646\u0627\u062F\u0631","\u062A\u0627\u0645\u0631","\u0639\u0635\u0627\u0645"],Ch=["#c98b5a","#a86b43","#d9a173","#8a5634","#bf7f50","#e0b088","#9a6040"],Tr=["#1a1210","#20140e","#120c08","#2a1a10","#0f0a07"],ee={goal:["\u062C\u0648\u0648\u0648\u0648\u0648\u0646!","\u062C\u0648\u0648\u0648\u0648\u0646 \u064A\u0627 \u0645\u0639\u0644\u0645!","\u0641\u064A \u0627\u0644\u062C\u0648\u0648\u0648\u0646!","\u064A\u0627 \u0633\u0644\u0627\u0627\u0627\u0645!","\u062C\u0648\u0646 \u0648\u0644\u0627 \u0623\u062D\u0644\u0649!"],goalBricks:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628\u062A\u064A\u0646!","\u062C\u0648\u0646 \u0646\u0636\u064A\u0641 \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628!"],goalSlippers:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0634\u0628\u0634\u0628\u064A\u0646!"],goalChalk:["\u062E\u0628\u0637\u062A \u062C\u0648\u0647 \u0627\u0644\u0637\u0628\u0627\u0634\u064A\u0631!"],miss:["\u064A\u0627\u0627\u0627\u0647! \u062C\u0646\u0628 \u0627\u0644\u0637\u0648\u0628\u0629!","\u0643\u0627\u0646\u062A \u0647\u062A\u062F\u062E\u0644!","\u0637\u0627\u0634\u062A!","\u062F\u0647 \u0625\u0646\u062A \u062A\u0634\u0648\u0637 \u0645\u0646 \u0627\u0644\u0628\u064A\u062A \u0623\u062D\u0633\u0646!"],foul:["\u0641\u0627\u0648\u0648\u0648\u0648\u0644!","\u0641\u0627\u0648\u0644 \u064A\u0627 \u0639\u0645!","\u0625\u064A\u0647 \u062F\u0647\u061F! \u062F\u0647 \u0643\u0633\u0631\u0647!","\u062D\u0631\u0627\u0645 \u0639\u0644\u064A\u0643!"],hurt:["\u0622\u0622\u0622\u0647 \u064A\u0627 \u0631\u062C\u0644\u064A!","\u0622\u0647 \u064A\u0627 \u0631\u0643\u0628\u062A\u064A!","\u0647\u0648 \u0623\u0646\u0627 \u0639\u0645\u0644\u062A\u0644\u0643 \u0625\u064A\u0647\u061F!","\u0631\u062C\u0644\u064A \u0627\u062A\u0643\u0633\u0631\u062A!"],pull:["\u0633\u064A\u0628 \u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u064A\u0627 \u0639\u0645!","\u0647\u062A\u0642\u0637\u0639\u0644\u064A \u0627\u0644\u0641\u0627\u0646\u0644\u0629!","\u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u062F\u064A \u062C\u062F\u064A\u062F\u0629!"],nutmeg:["\u0643\u0648\u0628\u0631\u064A!","\u0627\u062A\u0643\u0628\u0631\u0649 \u062E\u0627\u0644\u0635!","\u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0647!"],nutmegged:["\u0625\u064A\u0647 \u062F\u0647\u061F!","\u0645\u0634 \u0634\u0627\u064A\u0641 \u062D\u0627\u062C\u0629!"],save:["\u0635\u062F\u0651\u0647\u0627!","\u064A\u0627 \u0639\u0645 \u0627\u0644\u062D\u0627\u0631\u0633!","\u0625\u064A\u062F\u064A\u0646 \u0645\u0646 \u062D\u062F\u064A\u062F!"],callPass:["\u0628\u0627\u0635\u064A \u064A\u0627 \u0639\u0645!","\u0647\u0646\u0627! \u0647\u0646\u0627!","\u0623\u0646\u0627 \u0641\u0627\u0636\u064A!"],momCall:s=>`\u064A\u0627 ${s}! \u0627\u0644\u0623\u0643\u0644 \u0647\u064A\u0628\u0631\u062F\u060C \u0627\u0637\u0644\u0639 \u062D\u0627\u0644\u064B\u0627!`,momCallOut:["\u062D\u0627\u0636\u0631 \u064A\u0627 \u0645\u0627\u0645\u0627...","\u062C\u0627\u064A \u0623\u0647\u0648!"],momBack:s=>`${s} \u0631\u062C\u0639 \u0628\u0639\u062F \u0645\u0627 \u0627\u062A\u063A\u062F\u0649!`,fight:["\u062E\u0646\u0627\u0642\u0629! \u062E\u0646\u0627\u0642\u0629!","\u062D\u0648\u0634\u0648\u0627! \u062D\u0648\u0634\u0648\u0627!","\u0633\u064A\u0628\u0648\u0647! \u0633\u064A\u0628\u0648\u0647!"],fightOver:["\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635.. \u0635\u0627\u0641\u064A \u064A\u0627 \u0644\u0628\u0646","\u062E\u0644\u0627\u0635 \u064A\u0627 \u062C\u0645\u0627\u0639\u0629.. \u0646\u0643\u0645\u0644"],balcony:["\u0627\u0644\u0643\u0648\u0631\u0629 \u062F\u062E\u0644\u062A \u0627\u0644\u0628\u0644\u0643\u0648\u0646\u0629!","\u064A\u0627 \u062E\u0628\u0631! \u0628\u0644\u0643\u0648\u0646\u0629 \u0627\u0644\u062D\u0627\u062C\u0629!"],balconyBack:["\u062E\u062F\u0648\u0627 \u0643\u0648\u0631\u062A\u0643\u0645 \u0648\u0627\u062A\u0644\u0647\u0648\u0627!","\u0622\u062E\u0631 \u0645\u0631\u0629 \u0647\u0631\u062C\u0639\u0647\u0627\u0644\u0643\u0645!","\u0627\u0644\u0639\u0628\u0648\u0627 \u0628\u0639\u064A\u062F \u0639\u0646 \u0627\u0644\u0634\u0628\u0627\u0628\u064A\u0643!"],windowBreak:["\u0645\u064A\u0646 \u0627\u0644\u0644\u064A \u0643\u0633\u0631 \u0627\u0644\u0625\u0632\u0627\u0632 \u062F\u0647\u061F!","\u0623\u0646\u0627 \u0646\u0627\u0632\u0644\u0643\u0645!","\u0647\u0642\u0648\u0644 \u0644\u0623\u0628\u0648\u0643!"],run:["\u0627\u062C\u0631\u0631\u0631\u0631\u064A!","\u0627\u0647\u0631\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!"],roofDrop:["\u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A!","\u062D\u062F \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!"],roofBack:["\u062C\u0628\u062A\u0647\u0627 \u0623\u0647\u0648!"],headmaster:["\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u0631\u0629! \u0627\u062A\u0644\u0645\u0651\u0648\u0627!"],headmasterCatch:s=>`\u0625\u0646\u062A \u064A\u0627 ${s}! \u0627\u0637\u0644\u0639 \u0628\u0631\u0629!`,sentOff:s=>`${s} \u0627\u062A\u0637\u0631\u062F!`,toktok:["\u062A\u0648\u0643\u062A\u0648\u0643 \u062C\u0627\u064A!","\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u0631\u0628\u064A\u0629!","\u0648\u0633\u0651\u0639\u0648\u0627 \u064A\u0627 \u0634\u0628\u0627\u0628!"],walkerHit:["\u062D\u0627\u0633\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!","\u0647\u0648 \u062F\u0647 \u0645\u0643\u0627\u0646 \u0643\u0648\u0631\u0629\u061F!","\u064A\u0627 \u0633\u0627\u062A\u0631!","\u0625\u064A\u0647 \u062F\u0647 \u064A\u0627 \u0648\u0644\u062F\u061F!"],kickoff:["\u064A\u0644\u0627 \u0628\u064A\u0646\u0627!","\u064A\u0644\u0627 \u064A\u0627 \u0631\u062C\u0627\u0644\u0629!","\u0627\u0644\u0639\u0628\u0648\u0627!"],win:["\u0643\u0633\u0628\u0646\u0627! \u0643\u0633\u0628\u0646\u0627!","\u0627\u0644\u062D\u0627\u0631\u0629 \u0628\u062A\u0627\u0639\u062A\u0646\u0627!"],lose:["\u062E\u0633\u0631\u0646\u0627 \u0627\u0644\u0645\u0631\u0629 \u062F\u064A...","\u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0647\u0646\u0643\u0633\u0628\u0647\u0645!"],draw:["\u062A\u0639\u0627\u062F\u0644.. \u0645\u0627\u062A\u0634 \u0631\u062C\u0627\u0644\u0629"]},Ns={win:60,draw:25,goal:10,nutmeg:5,cleanSheet:15},_o=[{id:"ball",name:"\u0643\u0648\u0631\u0629 \u062C\u0644\u062F \u0623\u0635\u0644\u064A\u0629",desc:"\u0627\u0644\u0634\u0648\u0637\u0629 \u0623\u0642\u0648\u0649 \u0648\u0627\u0644\u0643\u0648\u0631\u0629 \u0645\u0627\u0633\u0643\u0629 \u0641\u064A \u0631\u062C\u0644\u0643 \u0623\u0643\u062A\u0631",price:120,max:1},{id:"shoes",name:"\u0643\u0648\u062A\u0634\u064A \u062C\u062F\u064A\u062F",desc:"\u0628\u062F\u0644 \u0627\u0644\u0634\u0628\u0634\u0628.. \u0633\u0631\u0639\u0629 \u0627\u0644\u0641\u0631\u064A\u0642 \u062A\u0632\u064A\u062F",price:140,max:1},{id:"kits",name:"\u0641\u0627\u0646\u0644\u0627\u062A \u0645\u0648\u062D\u062F\u0629",desc:"\u0634\u0643\u0644 \u0627\u0644\u0641\u0631\u064A\u0642 \u0645\u062A\u0648\u062D\u062F\u060C \u0648\u0627\u0644\u0646\u064E\u0641\u064E\u0633 \u0623\u0637\u0648\u0644",price:90,max:1},{id:"foul",name:"\u0633\u0627\u0646\u062F\u0648\u062A\u0634 \u0641\u0648\u0644 \u0642\u0628\u0644 \u0627\u0644\u0645\u0627\u062A\u0634",desc:"\u0637\u0627\u0642\u0629 \u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A \u0628\u0633",price:15,max:99,consumable:!0}],zs=[{map:"alley",time:"day",opp:"away",title:"\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u0623\u0648\u0644: \u0645\u0627\u062A\u0634 \u0627\u0644\u062D\u0627\u0631\u0629"},{map:"yard",time:"night",opp:"green",title:"\u062F\u0648\u0631 \u0627\u0644\u0633\u062A\u0627\u0634\u0631"},{map:"school",time:"day",opp:"yellow",title:"\u062F\u0648\u0631 \u0627\u0644\u062A\u0645\u0627\u0646\u064A\u0629"},{map:"roof",time:"night",opp:"black",title:"\u0646\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"},{map:"alley",time:"night",opp:"white",title:"\u0627\u0644\u0646\u0647\u0627\u0626\u064A: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629"}],Ar={easy:{name:"\u0633\u0647\u0644",react:.45,skill:.45,speed:.9,steal:.8,dirty:.15},normal:{name:"\u0639\u0627\u062F\u064A",react:.28,skill:.65,speed:.97,steal:1,dirty:.3},hard:{name:"\u0635\u0639\u0628",react:.15,skill:.85,speed:1.02,steal:1.25,dirty:.45}},Se={jog:5.2,sprint:7.2,withBallMul:.9,accel:22,decel:26,turnRate:13,staminaDrain:.22,staminaRegen:.14,playerRadius:.36,ballRadius:.11,controlDist:.62,stealPerSec:1.15,slideSpeed:8.2,slideTime:1,fallTime:2.75,pullMax:1.6,scandalTackle:30,scandalCleanTrip:8,scandalPullPerSec:14,scandalWindow:35};function Yy(s){return{def:s,root:new Jt,static:new Jt,dynamic:new Jt,colliders:[],windows:[],balconies:[],lamps:[],pointLights:[],litMats:[],nightOnly:[],dayOnly:[],doors:[],flags:[],clothes:[],walkerPaths:[],spectators:[],goals:[],animals:[],extras:{},bounds:null,ballOut:null,camZ:0}}function Mo(s,t,e,n,i){let r=s.def,a=Xd(t,e,n,r,i),o=new ot(new pe(e,n),new Gt({map:a,roughness:1}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,s.root.add(o),o}function bo(s){let t=s.def,e=t.goal.type==="chalk"?t.halfL+1:t.halfL-.4;for(let n of[-1,1]){let i=n*e;t.goal.type==="bricks"?ef(s,i,t.goal.hw,n):t.goal.type==="slippers"?nf(s,i,t.goal.hw):t.goal.type==="frame"?sf(s,i,t.goal.hw,t.goal.h,n):t.goal.type==="chalk"&&rf(s,i,t.goal.hw,t.goal.h,-n),s.goals.push({side:n,x:i,hw:t.goal.hw,h:t.goal.h,type:t.goal.type})}}function yn(s,t,e,n,i="kid"){s.spectators.push({pos:new M(t,0,e),rotY:n,kind:i})}function $y(s){let t=s.def,e=We(11);Mo(s,"asphalt",46,15,4);let n=20.5,i=-6.2,r=6.2;s.bounds={minX:-n+.5,maxX:n-.5,minZ:i+.4,maxZ:r-.4},s.camZ=.4;let a=W("#a39a8a",.95);nt(46,.16,1.2,a,0,.08,i+.6,s.static),nt(46,.16,1.2,a,0,.08,r-.6,s.static),nt(46,.05,.1,W("#e8e2d0"),0,.17,i+1.2,s.static);let o=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#c7b7a0","#b0a08a"];[[-24,-17,10.5,{door:!0}],[-17,-9.5,13,{shop:{name:"\u0642\u0647\u0648\u0629 \u0627\u0644\u0645\u0639\u0644\u0645",bg:"#6a3a1a",open:!0,sub:"\u0634\u0627\u064A \u2022 \u0642\u0647\u0648\u0629 \u2022 \u0634\u064A\u0634\u0629"}}],[-9.5,-2.5,11.5,{door:!0}],[-2.5,4.5,14.5,{shop:{name:"\u0628\u0642\u0627\u0644\u0629 \u0627\u0644\u0623\u0645\u0644",bg:"#1f6b3a",open:!0,awning:"#2f7a48"}}],[4.5,11.5,12,{door:!0}],[11.5,18,13.5,{shop:{name:"\u0645\u0643\u0648\u062C\u064A \u0631\u0650\u062C\u0644",bg:"#8a2a2a",open:!1}}],[18,25,11,{door:!0}]].forEach(([d,g,x,m],p)=>Sr(s,{x0:d,x1:g,z:i,face:1,h:x,color:o[p%o.length],seed:p+3,floors:3,lit:.55,...m})),po(s,-6.2,3.3,i,1,3),po(s,8,6.4,i,1,3),s.extras.momBalcony=0;let c=W("#3a332c",1);for(let d=0;d<7;d++){let g=-24+d*7,x=g+7,m=o[(d+3)%o.length],p=1.15+d%2*.25,_=new Gt({map:rn(m,d+20,{band:"rgba(70,60,50,0.35)",bricks:!1}),roughness:.95}),v=nt(7,p,.35,_,(g+x)/2,p/2,r+.18,s.static);nt(7,.04,.36,c,(g+x)/2,p+.02,r+.18,s.static).castShadow=!1,d%2===0&&nt(1.6,.18,.6,W("#a39a8a"),(g+x)/2,.09,r-.2,s.static)}s.colliders.push({min:new M(-30,0,r),max:new M(30,20,r+3),tag:"wall",invisible:!0});let h=new Gt({map:rn("#b9a888",40,{band:"rgba(60,50,40,0.4)"}),roughness:.95});an(s,-n-.2,i,-n-.2,r,4.2,h,{thick:.4,collideH:20});let u=new ot(new pe(9,2.2),new le({map:br([{text:"\u0645\u0645\u0646\u0648\u0639 \u0644\u0639\u0628 \u0627\u0644\u0643\u0648\u0631\u0629",y:.33,color:"rgba(160,20,20,0.85)",font:"900 96px Cairo"},{text:"\u0628\u0623\u0645\u0631 \u0627\u0644\u0633\u0643\u0627\u0646",y:.72,color:"rgba(30,30,30,0.8)",font:"900 70px Cairo"}]),transparent:!0}));u.position.set(-n+.01,2.4,0),u.rotation.y=Math.PI/2,s.static.add(u),an(s,n+.2,i,n+.2,r,3.6,new Gt({map:rn("#7d9a7a",41,{band:"rgba(40,50,40,0.4)"}),roughness:.95}),{thick:.4,collideH:20});let f=new ot(new pe(8,2),new le({map:br([{text:"\u062D\u0627\u0631\u0629 \u0627\u0644\u0623\u0628\u0637\u0627\u0644",y:.45,color:"rgba(250,245,230,0.9)",font:"900 110px Cairo"}]),transparent:!0}));f.position.set(n-.01,2.3,0),f.rotation.y=-Math.PI/2,s.static.add(f),jd(s,n-1.8,3.6,Math.PI/2+.08,"#d8c9a0"),wr(s.static,n-1,-4.2,"#2f5a8a"),wr(s.static,n-1.7,-4.6,"#8a3a2a"),s.colliders.push({min:new M(n-2.1,0,-5.2),max:new M(n,.9,-3.8),tag:"obj",solid:!0}),Jd(s,13.2,i+1.75,0),Rh(s.static,-14.5,i+1.9),Rh(s.static,-11.8,i+1.9),yo(s.static,-15.2,i+1.9,Math.PI/2),yo(s.static,-13.8,i+1.9,-Math.PI/2,"#d8402a"),yo(s.static,-12.5,i+1.9,Math.PI/2,"#2a6ad8"),yn(s,-15.2,i+1.9,Math.PI/2,"old"),yn(s,-12.5,i+1.9,Math.PI/2,"old"),yn(s,-7,r-.35,Math.PI,"kid"),yn(s,-6.2,r-.35,Math.PI,"kid"),yn(s,4.5,r-.35,Math.PI,"kid"),yn(s,9.5,i+.45,0,"kid"),An(s,-15.5,i+.9,1,{arm:2.2}),An(s,-5,i+.9,1,{arm:2.4}),An(s,4.8,i+.9,1,{flicker:!0,arm:2.4}),An(s,15.5,i+.9,1,{arm:2.2});for(let[d,g]of[[-15.5,-5],[-5,4.8],[4.8,15.5]])xo(s.static,new M(d,5.5,i+.9),new M(g,5.5,i+.9),.5);xo(s.static,new M(-20,9,i),new M(20,8.5,i+.3),1.2,"#222"),s.clothes.push(...go(s.static,new M(-9,7.5,i+.35),new M(-3.2,7.4,i+.35),e,.25)),s.clothes.push(...go(s.static,new M(5,10.6,i+.35),new M(11,10.6,i+.35),e,.2)),nt(1.4,1,.8,W("#2f6a3a",.6,{metalness:.3}),-19,.5,i+.8,s.static),nt(.6,.4,.5,W("#b08a5a"),-18,.2,i+1.4,s.static).rotation.y=.4,s.colliders.push({min:new M(-19.7,0,i+.4),max:new M(-18.3,1,i+1.2),tag:"obj",solid:!0}),s.animals.push({kind:"cat",pos:new M(-18,.4,i+1.4),rot:.4}),s.walkerPaths.push({a:new M(-22,0,i+.7),b:new M(22,0,i+.7)}),s.walkerPaths.push({a:new M(22,0,r-.8),b:new M(-22,0,r-.8)}),s.walkerPaths.push({cross:!0,z0:i+.3,z1:r-.3}),s.extras.toktok={z:.6,from:-n-2,to:n+2},s.extras.bike={z:-2.5},bo(s)}function Zy(s){let t=s.def,e=We(23),n=23.5,i=11.5;Mo(s,"dirt",62,34,9),s.bounds={minX:-n+.5,maxX:n-.5,minZ:-i+.5,maxZ:i-.5},s.camZ=.8;let r=new Gt({map:rn("#bdb3a0",50,{band:"rgba(80,70,60,0.35)"}),roughness:.95});r.map.repeat.set(6,1),an(s,-n,-i,n,-i,3,r,{thick:.35,collideH:30}),an(s,-n,-i,-n,i,3,r,{thick:.35,collideH:30}),an(s,n,-i,n,i,3,r,{thick:.35,collideH:30});let a=new Gt({map:rn("#bdb3a0",51,{band:"rgba(80,70,60,0.35)",bricks:!1}),roughness:.95});an(s,-n,i,n,i,.9,a,{thick:.35,collideH:30});let o=[{x:-12,text:"\u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u062C\u0645\u0629",bg:"#1f4e9a"},{x:0,text:"\u062D\u0648\u0634 \u0627\u0644\u0634\u0628\u0627\u0628",bg:"#8a2a2a",sub:"\u0644\u0644\u062A\u0623\u062C\u064A\u0631 \u2022 \u0643\u0648\u0631\u0629 \u062E\u0645\u0627\u0633\u064A"},{x:12,text:"\u0645\u062E\u0628\u0632 \u0627\u0644\u062D\u0631\u064A\u0629",bg:"#c07a1a",sub:"\u0639\u064A\u0634 \u0628\u0644\u062F\u064A \u0648\u0641\u064A\u0646\u0648"}];for(let f of o){let d=new ot(new pe(5.5,1.4),new Gt({map:ks(f.text,f.bg,"#fff",f.sub),roughness:.9}));d.position.set(f.x,1.7,-i+.19),s.static.add(d)}let l=new ot(new pe(10,2.2),new le({map:br([{text:"\u0627\u0644\u0643\u0648\u0631\u0629 \u0644\u0644\u062C\u0645\u064A\u0639",color:"rgba(30,30,30,0.7)",font:"900 100px Cairo",rot:-.04}]),transparent:!0}));l.position.set(-n+.19,1.6,0),l.rotation.y=Math.PI/2,s.static.add(l);let c=W("#3a5a7a",.6,{metalness:.5});nt(.1,2.6,3,c,n-.15,1.3,-6,s.static);for(let f=0;f<8;f++)nt(.12,2.6,.05,W("#2a4a6a",.6,{metalness:.5}),n-.2,1.3,-7.4+f*.4,s.static);s.doors.push(new M(n-1,0,-6));let h=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94"];for(let f=0;f<8;f++){let d=-30+f*7.5;Sr(s,{x0:d,x1:d+7.5,z:-i-4,face:1,h:10+e()*9,color:h[f%6],seed:60+f,floors:5,lit:.45,roofStuff:!0})}po(s,-4,6.4,-i-4,1,3);for(let f of[-1,1])Sr(s,{x0:f>0?n+3:-n-30,x1:f>0?n+30:-n-3,z:-i-4,face:1,h:14,color:"#b0a08a",seed:70+f,floors:4,lit:.4,roofStuff:!1});Us(s.static,-n+1.6,-i+1.6,1.1,e),Us(s.static,n-1.8,i-2.2,1,e),Us(s.static,-n+2,i-2,.9,e),s.colliders.push({min:new M(-n+1.3,0,-i+1.3),max:new M(-n+1.9,3,-i+1.9),tag:"obj",solid:!0}),Ah(s.static,n-1.4,-i+1.4,4),Ah(s.static,n-2.3,-i+1.2,2),wr(s.static,-n+1.2,2.5,"#8a3a2a"),wr(s.static,-n+1,3.4,"#3a6a3a"),s.colliders.push({min:new M(-n+.6,0,2),max:new M(-n+1.6,.9,3.9),tag:"obj",solid:!0});let u=new Jt;for(let f of[-1,1])for(let d of[-1,1])qt(.08,.08,6,W("#5a5a5a",.5,{metalness:.6}),f*1,3,d*1,u,6);qt(1.4,1.4,2.2,W("#d8d4c8",.6),0,7.1,0,u,20),u.position.set(16,0,-i-2.2),s.static.add(u);for(let f of[-8,6]){nt(3,.08,.5,W("#7a5a3a"),f,.45,-i+.7,s.static);for(let d of[-1,1])nt(.08,.45,.4,W("#5a4030"),f+d*1.3,.22,-i+.7,s.static)}yn(s,-8.8,-i+.75,0,"kid"),yn(s,-7.6,-i+.75,0,"kid"),yn(s,5.4,-i+.75,0,"old"),yn(s,6.8,-i+.75,0,"kid"),s.animals.push({kind:"sheep",pos:new M(-n+3.2,0,i-3),rot:.8}),s.colliders.push({min:new M(-n+2.6,0,i-3.5),max:new M(-n+3.8,.9,i-2.5),tag:"sheep",solid:!0});for(let[f,d,g,x]of[[-n+.6,-i+.6,1,!1],[n-.6,-i+.6,1,!0],[-n+.6,i-.6,-1,!1],[n-.6,i-.6,-1,!1]])An(s,f,d,g,{h:8.5,arm:.8,flicker:x}),s.lamps[s.lamps.length-1].flood=!0;s.walkerPaths.push({a:new M(n-1,0,-6),b:new M(-n+1,0,-i+1.2)}),s.walkerPaths.push({a:new M(-n+1,0,i-1.2),b:new M(n-1,0,-6)}),s.extras.bike={z:i-1.3},bo(s)}function Ky(s){let t=s.def,e=We(37),n=t.halfL+1,i=9.6;Mo(s,"tiles",48,26,13),s.bounds={minX:-n+.4,maxX:n-.4,minZ:-i+.4,maxZ:i-.4},s.camZ=.6;let r=-i;Sr(s,{x0:-n-6,x1:n+6,z:r,face:1,h:13,color:"#e0c98f",seed:81,floors:3,lit:.25,roofStuff:!1,door:!0});let a=new ot(new pe(9,1.5),new Gt({map:ks("\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0646\u0635\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u064A\u0629 \u0628\u0646\u064A\u0646","#1f4e7a","#fff","\u0625\u062F\u0627\u0631\u0629 \u0634\u0631\u0642 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629"),roughness:.8}));a.position.set(0,10.6,r+.08),s.static.add(a),of(s,6.5,r+1.2),s.colliders.push({min:new M(6.4,0,r+1.1),max:new M(6.6,8,r+1.3),tag:"pole"});let o=new ot(new pe(6,1.4),new le({map:br([{text:"\u0627\u0644\u0639\u0644\u0645 \u0646\u0648\u0631",color:"rgba(30,80,150,0.9)",font:"900 120px Cairo"}]),transparent:!0}));o.position.set(-10,1.3,r+.02),s.static.add(o);let l=new Gt({map:rn("#d8cba8",85,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95});l.map.repeat.set(3,1),an(s,-n,r,-n,i,3.4,l,{thick:.4,collideH:30}),an(s,n,r,n,i,3.4,l,{thick:.4,collideH:30}),an(s,-n,i,n,i,.9,new Gt({map:rn("#d8cba8",86,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95}),{thick:.35,collideH:30}),nt(1,1.4,.5,W("#c8c8c8",.3,{metalness:.7}),13,.7,r+.3,s.static),nt(.5,.06,.2,W("#666"),13,1,r+.6,s.static),s.colliders.push({min:new M(12.5,0,r),max:new M(13.5,1.4,r+.6),tag:"obj",solid:!0});for(let c of[-13,-3,9]){nt(2.6,.08,.45,W("#3a6a9a"),c,.45,r+.6,s.static);for(let h of[-1,1])nt(.08,.45,.4,W("#2a4a6a"),c+h*1.1,.22,r+.6,s.static)}yn(s,-13.6,r+.65,0,"kid"),yn(s,-12.4,r+.65,0,"kid"),yn(s,8.4,r+.65,0,"kid"),Us(s.static,-n-2,i+2,1.3,e),Us(s.static,n+2,i+2.5,1.2,e);for(let[c,h]of[[-12,!1],[-1.5,!1],[8,!0],[15,!1]])An(s,c,r+.05,1,{h:4.6,arm:.9,wall:!0,flicker:h});s.extras.headmaster=!0,s.walkerPaths.push({a:new M(-n+1,0,r+1.2),b:new M(n-1,0,r+1.2)}),bo(s)}function Jy(s){let t=s.def,e=We(51),n=-17,i=13.2,r=7.2,a=Mo(s,"roof",i-n,r*2,21);a.position.x=(n+i)/2,s.bounds={minX:-t.halfL-.8,maxX:i-.4,minZ:-r+.4,maxZ:r-.4},s.camZ=.4;let o=new Gt({map:rn("#c7bba5",91,{band:"rgba(60,55,50,0.3)",bricks:!1}),roughness:.95});o.map.repeat.set(8,.3);let l=1;an(s,n,-r,i,-r,l,o,{thick:.3}),an(s,n,r,i,r,l,o,{thick:.3}),an(s,i,-r,i,r,l,o,{thick:.3}),an(s,n,-r,n,r,l,o,{thick:.3});let c=new Gt({map:rn("#bfae94",92,{}),roughness:.95});nt(i-n+.3,30,r*2+.3,c,(n+i)/2,-15.01,0,s.static).castShadow=!1;let h=-14.6,u=4.6,f=nt(3.6,2.8,3.2,new Gt({map:rn("#cdbfa6",93,{}),roughness:.95}),h,1.4,u,s.static);nt(3.8,.15,3.4,W("#8a8070"),h,2.85,u,s.static),nt(1,2.1,.06,W("#4a3a2a"),h+1,1.05,u-1.62,s.static),s.colliders.push({min:new M(h-1.8,0,u-1.6),max:new M(h+1.8,2.9,u+1.6),tag:"wall",solid:!0}),s.doors.push(new M(h+1,0,u-2)),af(s,-14.8,-4.6),s.extras.pigeons=new M(-14.8,3.9,-4.6),Er(s.static,-3,0,-r+1),Er(s.static,1,0,-r+1),s.colliders.push({min:new M(-3.7,0,-r+.3),max:new M(1.7,2.1,-r+1.7),tag:"obj",solid:!0});for(let y of[-9,-6.5,5,8])mo(s.static,y,.6,-r+.4,1);s.clothes.push(...go(s.static,new M(4,2.3,-r+.2),new M(12.8,2.3,-r+.2),e,.25));for(let y of[4,12.8])qt(.03,.03,2.3,W("#555"),y,1.15,-r+.2,s.static,6);let d=["#ff4455","#44dd66","#4488ff","#ffcc33","#ff66cc"],g=new M(-12.6,2.7,u-1.6),x=new M(12.8,2.5,-r+.2);xo(s.static,g,x,.6,"#222");let m=[];for(let y=1;y<28;y++){let E=y/28,U=new M().lerpVectors(g,x,E);U.y-=Math.sin(E*Math.PI)*.6+.05;let N=new ot(new Xt(.06,6,4),new le({color:d[y%d.length]}));N.position.copy(U),s.dynamic.add(N),m.push(N)}s.extras.fairy=m;let p=new Jt,_=W("#c9a040",.35,{metalness:.8});qt(.02,.18,.18,_,0,.62,0,p,8);let v=new Gt({color:"#ffb040",emissive:"#ff9a30",emissiveIntensity:.4,roughness:.3,transparent:!0,opacity:.9});qt(.2,.2,.5,v,0,.3,0,p,8),qt(.2,.08,.15,_,0,-.02,0,p,8),p.position.set(-12.6+.4,1.9,u-1.7),s.static.add(p),s.litMats.push({m:v,lit:!0,k:2.5,dayK:.3}),s.pointLights.push({pos:new M(-12.2,2.1,u-1.9),color:"#ff9a40",intensity:5,dist:6,shadow:!1}),An(s,h+1.9,u-.6,-1,{h:2.6,arm:.5,wall:!0,flicker:!0}),An(s,12.6,-r+.4,1,{h:3.4,arm:.7}),An(s,-4,-r+.3,1,{h:3.6,arm:.9}),An(s,-9.5,-r+.3,1,{h:3.6,arm:1.6}),An(s,6,-r+.3,1,{h:3.6,arm:1.6});let b=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#9a8a78"];for(let y=0;y<26;y++){let E=y/26*Math.PI*2,U=34+e()*22,N=Math.cos(E)*U*1.2,O=Math.sin(E)*U;if(O>8&&Math.abs(N)<30)continue;let J=-8+e()*14,H=8+e()*8,G=8+e()*8,z=new Gt({map:rn(b[y%b.length],100+y,{}),roughness:.95}),et=nt(H,30,G,z,N,J-15,O,s.static);et.castShadow=!1;for(let lt=0;lt<6;lt++){let dt=new Gt({color:"#2a2a2a",emissive:"#ffb860",emissiveIntensity:0}),Ct=new ot(new pe(.9,1.1),dt),Yt=O>0?O-G/2-.01:O+G/2+.01;Ct.position.set(N-H/2+1+e()*(H-2),J-1.5-Math.floor(e()*4)*3,Yt),O>0&&(Ct.rotation.y=Math.PI),s.dynamic.add(Ct),s.litMats.push({m:dt,lit:e()<.7,k:1})}e()<.5&&Er(s.static,N,J,O),e()<.5&&mo(s.static,N+2,J,O,O<0?1:-1)}let C=new Jt,T=W("#e8dcc0",.8);qt(1.2,1.4,22,T,0,11,0,C,10),qt(1.7,1.7,.5,T,0,18,0,C,12),qt(.9,1.1,6,T,0,24,0,C,10),qt(1.3,1.3,.4,T,0,27,0,C,12);let R=new ot(new gi(.9,2.5,10),W("#3a7a5a",.6));R.position.y=28.6,C.add(R);let I=new ot(new Tn(.35,.07,6,16,Math.PI*1.4),W("#d8b040",.3,{metalness:.8}));I.position.y=30.3,C.add(I);let X=new ot(new Tn(1.72,.06,6,24),new le({color:"#7dffb0"}));X.rotation.x=Math.PI/2,X.position.y=18.3,C.add(X),s.nightOnly.push(X),C.position.set(-30,-12,-48),s.static.add(C),s.ballOut=y=>y.x<n+.1||y.x>i-.1||Math.abs(y.z)>r-.1,s.extras.parapet={X0:n,X1:i,W:r,h:l},s.colliders.push({min:new M(-40,-40,r+.15),max:new M(40,-2,r+3),tag:"void"}),s.walkerPaths.length=0,bo(s)}var Qy={alley:$y,yard:Zy,school:Ky,roof:Jy};function cf(s){let t=Vi[s],e=Yy(t);Qy[s](e);let n={alley:"#5f5950",yard:"#7a6a50",school:"#8a857a",roof:"#6a5f52"}[s],i=new ot(new pe(400,400),new Gt({color:n,roughness:1}));return i.rotation.x=-Math.PI/2,i.position.y=s==="roof"?-14:-.02,i.receiveShadow=!0,e.root.add(i),e.root.add(e.static),e.root.add(e.dynamic),e.static.traverse(r=>{r.isMesh&&(r.receiveShadow=!0,r.userData.dyn||(r.matrixAutoUpdate=!1,r.updateMatrix()))}),e.static.updateMatrixWorld(!0),e}function jy(s){let t=new Xt(400,32,16),e=new Pe({side:$e,depthWrite:!1,fog:!1,uniforms:{top:{value:new Rt(s?"#050a1e":"#4f8fd0")},mid:{value:new Rt(s?"#1c2850":"#9cc7e8")},bottom:{value:new Rt(s?"#2a2030":"#e8dcc0")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.6, h)) : mix(mid, bottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0); }`}),n=new ot(t,e);return n.renderOrder=-10,n}function tv(){let t=new Float32Array(2700);for(let n=0;n<900;n++){let i=Math.random()*Math.PI*2,r=Math.random()*.45+.08;t[n*3]=Math.cos(i)*Math.cos(r*Math.PI/2)*380,t[n*3+1]=Math.sin(r*Math.PI/2)*380,t[n*3+2]=Math.sin(i)*Math.cos(r*Math.PI/2)*380}let e=new ge;return e.setAttribute("position",new Je(t,3)),new Ba(e,new lr({color:"#ffffff",size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1}))}var So=class{constructor(t,e,{night:n,quality:i}){this.scene=t,this.ctx=e,this.night=n,this.quality=i,this.group=new Jt,t.add(this.group),this.flickers=[],this.t=0,this.group.add(jy(n)),t.fog=new Ua(n?"#0a0f22":"#c8d4d8",n?30:60,n?110:170),t.background=new Rt(n?"#050a1e":"#9cc7e8");let r=i==="high";if(n){this.group.add(tv());let l=new En(new pn({map:Mr(),color:"#dfe8ff",fog:!1,depthWrite:!1}));l.position.set(-120,160,-260),l.scale.setScalar(40),this.group.add(l);let c=new ot(new ei(6,24),new le({color:"#f4f6ff",fog:!1}));c.position.copy(l.position),c.lookAt(0,0,0),this.group.add(c),this.group.add(new mr("#3a4a80","#120e10",.7));let h=new xr("#8a9ad8",.55);h.position.set(8,30,30),this.group.add(h)}else{this.group.add(new mr("#dfefff","#7a6a55",1));let l=new xr("#fff0d4",2.6);l.position.set(14,30,16),l.castShadow=!0;let c=r?4096:2048;l.shadow.mapSize.set(c,c);let h=l.shadow.camera;h.left=-36,h.right=36,h.top=26,h.bottom=-26,h.near=1,h.far=120,l.shadow.bias=-4e-4,l.shadow.normalBias=.03,this.group.add(l),this.group.add(l.target),this.sun=l}let a=r?3:i==="medium"?1:0,o=Mr();for(let l of e.lamps){if(l.bulbMat.emissiveIntensity=n?3:0,!n)continue;let c=new Rt(l.color),h=new Rs(c,l.flood?170:55,l.flood?48:20,l.flood?.8:1.05,.65,1.5);h.position.copy(l.pos);let u=l.pos.clone();u.y=0,l.flood?(u.x*=.55,u.z*=.4):u.z+=(l.face||0)*(l.wall?5:2.5),h.target.position.copy(u),a>0&&!l.flicker&&(h.castShadow=!0,h.shadow.mapSize.set(r?1024:512,r?1024:512),h.shadow.bias=-6e-4,h.shadow.normalBias=.04,a--),this.group.add(h,h.target);let f=new En(new pn({map:o,color:c,blending:Bn,depthWrite:!1,transparent:!0,opacity:.9}));f.position.copy(l.pos),f.scale.setScalar(l.flood?3.2:2),this.group.add(f);let d=l.pos.y,g=l.flood?6:d*.62,x=new tn(.12,g,d,24,1,!0);x.translate(0,-d/2,0);let m=new le({map:Zd(),color:c,transparent:!0,opacity:.16,blending:Bn,depthWrite:!1,side:Ce,fog:!1}),p=new ot(x,m);p.position.copy(l.pos),this.group.add(p);let _={L:l,spot:h,sprite:f,cone:p,base:h.intensity,coneBase:m.opacity,level:1,target:1,timer:0};l.flicker&&this.flickers.push(_)}for(let l of e.pointLights){if(!n)continue;let c=new Za(l.color,l.intensity*1.2,l.dist,1.6);c.position.copy(l.pos),this.group.add(c);let h=new En(new pn({map:o,color:l.color,blending:Bn,depthWrite:!1,transparent:!0,opacity:.7}));h.position.copy(l.pos),h.scale.setScalar(1.4),this.group.add(h)}for(let l of e.litMats)l.m.emissiveIntensity=n?l.lit?l.k*st(.7,1.2):0:l.dayK||0,l.emissiveMap&&n&&(l.m.emissiveMap=l.m.map,l.m.emissiveIntensity=l.k);for(let l of e.nightOnly)l.visible=n;for(let l of e.dayOnly)l.visible=!n;if(e.extras.fairy)for(let l of e.extras.fairy)l.visible=!0}update(t){this.t+=t;for(let e of this.flickers){if(e.timer-=t,e.timer<=0){let i=Math.random();i<.12?(e.target=.02,e.timer=st(.05,.35)):i<.45?(e.target=st(.15,.6),e.timer=st(.03,.12)):(e.target=st(.75,1),e.timer=st(.1,.9))}e.level+=(e.target-e.level)*Math.min(1,t*40);let n=e.level*(.92+.08*Math.sin(this.t*90));e.spot.intensity=e.base*n,e.sprite.material.opacity=.9*n,e.cone.material.opacity=e.coneBase*n,e.L.bulbMat.emissiveIntensity=3*n}if(this.ctx.extras.fairy){let e=this.ctx.extras.fairy;for(let n=0;n<e.length;n++)e[n].visible=(Math.floor(this.t*2.5)+n)%3!==0||!this.night}for(let e of this.ctx.flags)e.children.forEach((n,i)=>{n.rotation.y=Math.sin(this.t*3+n.position.x*2)*.25});for(let e of this.ctx.clothes)e.rotation.x=Math.sin(this.t*1.7+e.position.x)*.12}dispose(){this.scene.remove(this.group)}};function ev(){return sn(512,256,(s,t,e)=>{s.fillStyle="#f4f1e8",s.fillRect(0,0,t,e);let n=[];n.push([0,90],[0,-90]);for(let i=0;i<5;i++)n.push([i*72,27]),n.push([i*72+36,-27]);s.fillStyle="#1b1b1b";for(let[i,r]of n)for(let a of[-360,0,360]){let o=(i+a+180)/360*t,l=(90-r)/180*e,c=26/Math.max(.35,Math.cos(r*Math.PI/180));s.beginPath();for(let h=0;h<5;h++){let u=h/5*Math.PI*2-Math.PI/2;s.lineTo(o+Math.cos(u)*c,l+Math.sin(u)*24)}s.closePath(),s.fill()}s.strokeStyle="rgba(80,70,60,0.35)",s.lineWidth=2;for(let i=0;i<40;i++){s.beginPath();let r=Math.random()*t,a=Math.random()*e;s.moveTo(r,a),s.lineTo(r+Math.random()*30-15,a+Math.random()*10-5),s.stroke()}})}var _i=new M,Ph=new M,Eo=class{constructor(t){this.r=Se.ballRadius,this.mesh=new ot(new Xt(this.r,24,16),new Gt({map:ev(),roughness:.55})),this.mesh.castShadow=!0,t.add(this.mesh),this.blob=new ot(new ei(this.r*1.3,16),new le({color:"#000",transparent:!0,opacity:.35,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=1,t.add(this.blob),this.glow=new En(new pn({map:Mr(),color:"#fff6e0",transparent:!0,opacity:0,depthWrite:!1,blending:Bn})),this.glow.scale.setScalar(.9),t.add(this.glow),this.pos=new M(0,this.r,0),this.vel=new M,this.lastTouch=null,this.lastKickTeam=-1,this.frozen=!1,this.friction=.85,this.onBounce=null,this.onHit=null,this.spinAxis=new M(1,0,0)}place(t,e,n=this.r){this.pos.set(t,n,e),this.vel.set(0,0,0)}kick(t,e,n,i){this.vel.set(t,e,n),i&&(this.lastTouch=i,this.lastKickTeam=i.team)}speed(){return this.vel.length()}groundSpeed(){return Math.hypot(this.vel.x,this.vel.z)}update(t,e,n){if(this.frozen){this.syncMesh(t,0);return}if(n){this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z));return}let i=this.vel.length(),r=Math.min(8,Math.max(1,Math.ceil(i*t/.08))),a=t/r;for(let o=0;o<r;o++)this.step(a,e);this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z))}step(t,e){let n=this.vel,i=this.pos,r=this.r,a=i.y>r+.02;n.y-=9.81*t;let o=a?.12:0;if(n.multiplyScalar(1-o*t),i.addScaledVector(n,t),i.y<r)if(i.y=r,n.y<-.6){let l=-n.y;n.y=l*.56,n.x*=.88,n.z*=.88,this.onBounce&&this.onBounce(l)}else n.y=0;if(i.y<=r+.01){let l=this.friction*t,c=Math.hypot(n.x,n.z);if(c>0){let h=Math.max(0,c-(l*1.4+c*l*.35));n.x*=h/c,n.z*=h/c}}for(let l of e){if(l.tag==="void")continue;Ph.set(Math.max(l.min.x,Math.min(i.x,l.max.x)),Math.max(l.min.y,Math.min(i.y,l.max.y)),Math.max(l.min.z,Math.min(i.z,l.max.z))),_i.subVectors(i,Ph);let c=_i.length();if(c>=r)continue;if(c<1e-5){let u=i.x-l.min.x,f=l.max.x-i.x,d=i.z-l.min.z,g=l.max.z-i.z,x=l.max.y-i.y,m=Math.min(u,f,d,g,x);_i.set(m===u?-1:m===f?1:0,m===x?1:0,m===d?-1:m===g?1:0),c=0,i.addScaledVector(_i,m+r)}else _i.divideScalar(c),i.copy(Ph).addScaledVector(_i,r);let h=n.dot(_i);if(h<0){let u=l.tag==="net"?.08:l.metal?.72:l.tag==="sheep"?.4:.58;n.addScaledVector(_i,-(1+u)*h),l.tag==="net"?n.multiplyScalar(.3):n.multiplyScalar(.94),this.onHit&&this.onHit(l,-h,i)}}}syncMesh(t,e){this.mesh.position.copy(this.pos),e>.05&&(this.spinAxis.set(this.vel.z,0,-this.vel.x).normalize(),this.mesh.rotateOnWorldAxis(this.spinAxis,e*t/this.r)),this.blob.position.set(this.pos.x,.012,this.pos.z);let n=Math.max(0,this.pos.y-this.r),i=Math.max(.25,1-n*.25);this.blob.scale.setScalar(i),this.blob.material.opacity=.35*i,this.glow.position.copy(this.pos)}setNight(t){this.glow.material.opacity=t?.22:0}dispose(t){t.remove(this.mesh,this.blob,this.glow)}};var vn=new M,nv=new M,wo=class{constructor(t,e,n,i,r){this.match=t,this.team=e,this.idx=n,this.name=r.name,this.number=r.number,this.isGK=!!r.isGK,this.char=fo(i),this.anim=new Ds(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new M,this.vel=new M,this.facing=e===0?Math.PI/2:-Math.PI/2,this.want=new Q,this.wantSprint=!1,this.lookAt=null,this.state="play",this.stateT=0,this.stateDur=0,this.stamina=1,this.ctrl=null,this.ai={t:Math.random()*.3,plan:null,target:new M,dirty:0},this.mods={speed:1,shot:1,control:1,stamina:1},this.cool={kick:0,steal:0,slide:0,touch:0,pull:0,call:0},this.pending=null,this.pullTarget=null,this.pulledBy=null,this.pullT=0,this.walkTo=null,this.onArrive=null,this.home=new M,this.radius=Se.playerRadius*this.char.scale,this.stats={goals:0,fouls:0,nutmegs:0};let a=new le({color:t.teamColor(e),transparent:!0,opacity:.85,depthWrite:!1});this.ring=new ot(new Xa(.42,.52,32),a),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=2,t.scene.add(this.ring),this.marker=null,this.anim.onStep=o=>t.onFootstep(this,o)}get dir(){return this.team===0?1:-1}get hasBall(){return this.match.owner===this}get active(){return!["out","hidden","leaving","returning","fetch","fetched"].includes(this.state)}get canAct(){return this.state==="play"&&!this.pending}get down(){return this.state==="fallen"||this.state==="slide"||this.state==="nutmegged"||this.state==="dive"}fwd(t=vn){return t.set(Math.sin(this.facing),0,Math.cos(this.facing))}headPos(t=new M){return t.set(this.pos.x,(this.state==="fallen"?.8:2.2)*this.char.scale,this.pos.z)}setMarker(t){if(this.marker&&(this.root.remove(this.marker),this.marker=null),!t)return;let e=new Jt,n=new ot(new gi(.13,.26,4),new le({color:t,depthTest:!1}));n.rotation.x=Math.PI,n.renderOrder=10,e.add(n),e.position.y=2.45,this.marker=e,this.root.add(e),this.ring.material.opacity=1}setState(t,e=0){this.state=t,this.stateT=0,this.stateDur=e}place(t,e,n){this.pos.set(t,0,e),this.vel.set(0,0,0),n!==void 0&&(this.facing=n),this.sync()}show(t){this.root.visible=t,this.ring.visible=t}update(t){for(let a in this.cool)this.cool[a]>0&&(this.cool[a]-=t);if(this.stateT+=t,this.pending&&(this.pending.t-=t,this.pending.t<=0)){let a=this.pending.fn;this.pending=null,a()}let e=this.state;if(e==="out"||e==="hidden"||e==="fetched")return;let n=1,i=!0;switch(e){case"kick":n=.3,this.stateT>=this.stateDur&&this.setState("play");break;case"slide":{i=!1;let a=Math.max(0,1-this.stateT/.75);this.fwd(vn),this.vel.set(vn.x*this.slideSpeed*a,0,vn.z*this.slideSpeed*a),this.stateT>=Se.slideTime+.2&&(this.setState("play"),this.cool.slide=.6);break}case"fallen":case"nutmegged":case"dive":i=!1,this.vel.multiplyScalar(Math.max(0,1-t*(e==="dive"?2.2:5))),this.stateT>=this.stateDur&&this.setState("play");break;case"gkhold":i=!1,this.vel.set(0,0,0);break;case"dazed":n=.35,this.stateT>=this.stateDur&&(this.setState("play"),this.anim.stop("dazed"));break;case"leaving":case"returning":case"fetch":i=!1,this.walkStep(t,e==="fetch"?4.2:2.4);break;default:break}i&&this.locomote(t,n),this.pos.addScaledVector(this.vel,t);let r=Math.hypot(this.vel.x,this.vel.z);e==="slide"||e==="fallen"||e==="dive"||(r>.45&&e!=="gkhold"?this.facing=Bi(this.facing,Math.atan2(this.vel.x,this.vel.z),Se.turnRate,t):this.lookAt&&(this.facing=Bi(this.facing,Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z),6,t))),this.anim.update(t,e==="slide"||e==="fallen"||e==="dive"?0:r),this.sync()}locomote(t,e){let n=this.want,i=Math.min(1,n.length()),r=this.wantSprint&&this.stamina>.05&&i>.3,a=(r?Se.sprint:Se.jog)*this.mods.speed*e;this.hasBall&&(a*=Se.withBallMul),this.pulledBy&&(a*=.42),this.pullTarget&&(a*=.85),this.state==="celebrate"&&(a*=.9),r?this.stamina=Math.max(0,this.stamina-Se.staminaDrain*t/this.mods.stamina):this.stamina=Math.min(1,this.stamina+Se.staminaRegen*t*this.mods.stamina*(i<.2?1.6:1));let o=i>.01?n.x/Math.max(1e-6,n.length())*i*a:0,l=i>.01?n.y/Math.max(1e-6,n.length())*i*a:0,c=o-this.vel.x,h=l-this.vel.z,u=Math.hypot(c,h),d=(o*o+l*l>this.vel.x*this.vel.x+this.vel.z*this.vel.z?Se.accel:Se.decel)*t;u<=d?(this.vel.x=o,this.vel.z=l):(this.vel.x+=c/u*d,this.vel.z+=h/u*d)}walkStep(t,e){if(!this.walkTo)return;let n=this.walkTo.x-this.pos.x,i=this.walkTo.z-this.pos.z,r=Math.hypot(n,i);if(r<.25){this.vel.set(0,0,0);let a=this.onArrive;this.onArrive=null,this.walkTo=null,a&&a();return}this.vel.set(n/r*e,0,i/r*e)}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing,this.ring.position.set(this.pos.x,.02,this.pos.z)}pass(t,e=0,n=0){if(!this.hasBall||!this.canAct)return!1;let i=this.match;return this.faceTo(t?t.pos:vn.set(this.pos.x+e,0,this.pos.z+n)),this.setState("kick",.32),this.anim.play("pass",{speed:1.3}),this.pending={t:.12,fn:()=>{if(!this.hasBall)return;let r=i.ball.pos,a,o,l=!1;if(t){let g=Vt(nv.set(t.pos.x-r.x,0,t.pos.z-r.z).length()/13,.1,.9);a=t.pos.x+t.vel.x*g,o=t.pos.z+t.vel.z*g,l=i.lineBlocked(r.x,r.z,a,o,this.team)}else{let g=Math.hypot(e,n)||1;a=r.x+e/g*9,o=r.z+n/g*9}let c=a-r.x,h=o-r.z,u=Math.max(.5,Math.hypot(c,h)),f=Vt(5.5+u*1.05,7,18),d=.4;l&&(f*=.72,d=Vt(2.5+u*.38,3,7.5)),i.kickBall(this,c/u*f,d,h/u*f,{pass:t,kind:"pass"})}},!0}shoot(t,e=0,n=0){if(!this.hasBall||!this.canAct)return!1;let i=this.match,r=i.goalFor(this.team);return this.faceTo(vn.set(r.x,0,e*r.hw)),this.setState("kick",.5),this.anim.play("kick",{speed:1.15}),this.pending={t:.17,fn:()=>{if(!this.hasBall)return;let a=i.ball.pos,o=this.ctrl?1:this.match.aiSkill(this),l=i.pressureOn(this),c=(1-o*.75)*.9+l*.4+Math.max(0,t-.92)*2.5,h=Vt(e,-1,1)*r.hw*.78+st(-1,1)*c*r.hw*.7,f=r.x+Math.sign(r.x)*.6-a.x,d=h-a.z,g=Math.max(1,Math.hypot(f,d)),x=(10.5+t*15.5)*this.mods.shot,m=g/x,_=(Vt(r.h*(.15+n*.55)+st(-.1,.35)*c+t*.12,.12,r.h*1.6)-a.y+.5*9.81*m*m)/m;_=Vt(_,.2,14),i.kickBall(this,f/g*x,_,d/g*x,{kind:"shot",power:t})}},!0}slide(){if(!this.canAct||this.hasBall||this.cool.slide>0||this.isGK&&!this.ctrl&&ce(.5))return!1;this.releasePull(),this.setState("slide",Se.slideTime);let t=Math.hypot(this.vel.x,this.vel.z);return this.slideSpeed=Math.max(t*1.15,Se.slideSpeed),this.slideHit=new Set,this.slideBallFirst=!1,this.slideTouchedBall=!1,this.anim.play("slide"),this.match.onSlide(this),!0}pull(t){return!this.canAct||this.hasBall||!t||t.pulledBy||this.cool.pull>0||t.state!=="play"&&t.state!=="kick"?!1:(this.pullTarget=t,t.pulledBy=this,this.pullT=0,this.anim.play("pull"),t.anim.play("pulled"),this.match.onPullStart(this,t),!0)}releasePull(t=!1){let e=this.pullTarget;e&&(this.pullTarget=null,e.pulledBy=null,this.anim.stop("pull"),e.anim.stop("pulled"),this.cool.pull=1.2,this.match.onPullEnd(this,e,t))}nutmeg(){if(!this.hasBall||!this.canAct)return!1;let t=this.match,e=t.nutmegVictim(this);return e?(this.faceTo(e.pos),this.setState("kick",.25),this.anim.play("pass",{speed:1.6}),this.pending={t:.09,fn:()=>{if(!this.hasBall)return;let n=t.ball.pos,i=e.pos.x-n.x,r=e.pos.z-n.z,a=Math.max(.3,Math.hypot(i,r)),o=e.pos.x+i/a*2.2,l=e.pos.z+r/a*2.2,c=o-n.x,h=l-n.z,u=Math.hypot(c,h),f=7.5;t.kickBall(this,c/u*f,.2,h/u*f,{kind:"nutmeg",victim:e})}},!0):(this.setState("kick",.3),this.anim.play("pass",{speed:1.5}),this.pending={t:.1,fn:()=>{this.hasBall&&(this.fwd(vn),t.kickBall(this,vn.x*6.5,3.4,vn.z*6.5,{kind:"chip"}))}},!0)}fall(t=Se.fallTime){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.hasBall&&this.match.loseBall(this,3),this.pending=null,this.setState("fallen",t),this.anim.play("fall",{speed:Se.fallTime/t})}gkCatch(){this.setState("gkhold"),this.anim.play("holdBall")}gkThrow(t){if(this.state!=="gkhold")return;let e=this.match;this.faceTo(t?t.pos:vn.set(this.pos.x+this.dir*8,0,this.pos.z)),this.anim.stop("holdBall"),this.anim.play("throw"),this.setState("kick",.6),this.pending={t:.36,fn:()=>{if(!this.hasBall)return;let n=e.ball.pos,i=t?t.pos.x:this.pos.x+this.dir*9,r=t?t.pos.z:this.pos.z,a=i-n.x,o=r-n.z,l=Math.max(1,Math.hypot(a,o)),c=Vt(5+l*.8,7,14);e.kickBall(this,a/l*c,2.6,o/l*c,{pass:t,kind:"throw"})}}}dive(t,e=5.5){this.setState("dive",1.4),this.anim.play(t>0?"diveR":"diveL"),this.fwd(vn),this.vel.set(-vn.z*t*e,0,vn.x*t*e)}faceTo(t){this.facing=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)}celebrate(t){this.setState("celebrate"),this.anim.play(t)}stopCelebrate(){this.anim.stop("airplane"),this.anim.stop("jump"),this.anim.stop("sad"),this.anim.stop("cheer"),this.state==="celebrate"&&this.setState("play")}resetForKickoff(){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.pending=null,this.anim.stop(),this.active&&this.setState("play"),this.stamina=Math.max(this.stamina,.6),this.want.set(0,0)}dispose(){this.match.scene.remove(this.root),this.match.scene.remove(this.ring)}};var Fs=new M,Vn=new M;function Mi(s,t,e,n=2,i=6){let r=t-s.pos.x,a=e-s.pos.z,o=Math.hypot(r,a);if(o<.15)return s.want.set(0,0),s.wantSprint=!1,o;let l=Math.min(1,o/n);return s.want.set(r/o*l,a/o*l),s.wantSprint=o>i&&s.stamina>.25,o}function iv(s,t,e,n){let i=s.ai,r=t.goalFor(s.team),a=r.x,o=t.def,l=a-s.pos.x,c=0-s.pos.z,h=Math.hypot(l,c);if(i.t-=e,i.t<=0){i.t=st(.12,.28)+n.react*.5;let u=t.pressureDist(s),f=Math.min(13,o.halfL*.72);if(h<f&&s.cool.kick<=0){let x=!t.lineBlocked(s.pos.x,s.pos.z,a,0,s.team,.6),p=h<f*.45?.85:x?.55:.18;if(ce(p*(.6+n.skill*.5))){let _=t.goalkeeper(1-s.team),v=st(.35,.9)*(ce(.5)?1:-1);_&&Math.abs(_.pos.z)>.2&&(v=-Math.sign(_.pos.z)*st(.45,.95));let b=Vt(h/f+st(-.1,.15),.5,.93);if(s.shoot(b,v,r.type==="frame"||r.type==="chalk"?st(0,.8):st(0,.25)))return}}let d=t.bestPassTarget(s,null);if(d&&(u<1.7&&d.score>-.4&&ce(.55+n.skill*.3)||d.score>.55&&ce(.25))&&s.pass(d.player)||u<2&&ce(.1+n.skill*.12)&&t.nutmegVictim(s)&&s.nutmeg())return;Vn.set(l,0,c).normalize(),Fs.set(0,0,0);for(let x of t.teams[1-s.team]){if(!x.active||x.down)continue;let m=s.pos.x-x.pos.x,p=s.pos.z-x.pos.z,_=Math.hypot(m,p);if(_>4.5||_<.01||-(m*Vn.x+p*Vn.z)/_<-.2)continue;let b=(4.5-_)/4.5,C=Math.sign(m*Vn.z-p*Vn.x)||(ce(.5)?1:-1);Fs.x+=-Vn.z*C*b*1.6+m/_*b*.6,Fs.z+=Vn.x*C*b*1.6+p/_*b*.6}let g=t.ctx.bounds;s.pos.z<g.minZ+1.5&&(Fs.z+=1),s.pos.z>g.maxZ-1.5&&(Fs.z-=1),Vn.add(Fs).normalize(),i.dribble=i.dribble||new Q,i.dribble.set(Vn.x,Vn.z),i.sprint=t.pressureDist(s)>2.5&&s.stamina>.4&&ce(.6)}i.dribble&&(s.want.copy(i.dribble),s.wantSprint=i.sprint)}function sv(s,t,e,n){let i=t.ball,r=t.owner;if(r&&r.team!==s.team){let g=t.ownGoal(s.team).x-r.pos.x,x=-r.pos.z,m=Math.hypot(g,x)||1,p=Math.hypot(r.pos.x-s.pos.x,r.pos.z-s.pos.z),_=p>2?1.2:.35;if(Mi(s,r.pos.x+g/m*_+r.vel.x*.2,r.pos.z+x/m*_+r.vel.z*.2,1,3),s.wantSprint=p>1.5&&s.stamina>.2,s.ai.dirtyT=(s.ai.dirtyT||0)-e,s.ai.dirtyT<=0&&s.canAct){s.ai.dirtyT=st(.35,.7);let v=(r.pos.x-s.pos.x)*Math.sin(r.facing)+(r.pos.z-s.pos.z)*Math.cos(r.facing)>0;if(p<2.6&&p>.9&&ce(n.dirty*.45)){let b=Math.sin(s.facing),C=Math.cos(s.facing);if(((i.pos.x-s.pos.x)*b+(i.pos.z-s.pos.z)*C)/Math.max(.1,Math.hypot(i.pos.x-s.pos.x,i.pos.z-s.pos.z))>.75){s.faceTo(i.pos),s.slide();return}}p<1.15&&v&&ce(n.dirty*.5)&&s.pull(r)&&(s.ai.pullFor=st(.6,1.3))}return}let a=i.pos.x,o=i.pos.z,l=Math.hypot(a-s.pos.x,o-s.pos.z),c=Vt(l/6.5,0,1.4),h=a+i.vel.x*c*.7,u=o+i.vel.z*c*.7,f=t.ctx.bounds;h=Vt(h,f.minX+.3,f.maxX-.3),u=Vt(u,f.minZ+.3,f.maxZ-.3),Mi(s,h,u,.6,2.5)}function rv(s,t,e,n,i,r){let a=t.def,o=t.ball.pos,l=t.ctx.bounds,c=s.dir,h=i<=1?[0]:i===2?[-.5,.5]:[-.62,0,.62],u=h[n%h.length]*a.halfW,f,d;if(r)f=o.x+c*(4+n%2*3.5),d=u+Math.sin(t.time*.6+s.idx)*1.2,f=Vt(f,-a.halfL+2,a.halfL-2.5);else{let g=t.ownGoal(s.team),x=.42+n%2*.18;f=g.x+(o.x-g.x)*x,d=o.z*.45+u*.6;let m=null,p=4.5;for(let _ of t.teams[1-s.team]){if(!_.active||_===t.owner)continue;let v=Math.hypot(_.pos.x-f,_.pos.z-d);v<p&&(p=v,m=_)}if(m){let _=g.x-m.pos.x,v=-m.pos.z,b=Math.hypot(_,v)||1;f=m.pos.x+_/b*1.4,d=m.pos.z+v/b*1.4}}f=Vt(f,l.minX+.6,l.maxX-.6),d=Vt(d,l.minZ+.6,l.maxZ-.6),Mi(s,f,d,2.2,7)}function av(s,t,e,n){let i=t.ownGoal(s.team),r=t.ball,a=s.dir,o=i.x+a*(i.type==="chalk"?1.1:.9);if(s.lookAt=r.pos,s.state==="gkhold"){if(s.ai.holdT=(s.ai.holdT||0)+e,s.ai.holdT>.9){s.ai.holdT=0;let d=t.bestPassTarget(s,null,!0);s.gkThrow(d?d.player:null)}return}if(!s.canAct)return;let l=r.vel.x;if(!t.owner&&l*a<-3.5){let d=(o-r.pos.x)/l;if(d>0&&d<1.1){let g=r.pos.z+r.vel.z*d,x=r.pos.y+r.vel.y*d-4.9*d*d,m=g-s.pos.z;if(s.ai.seen=(s.ai.seen||0)+e,s.ai.seen>n.react*.6&&Math.abs(g)<i.hw+.6&&x<i.h+.4){if(Math.abs(m)>.75&&d<.55){let p=m*Math.sin(s.facing)>0?1:-1;s.dive(p,Vt(Math.abs(m)/Math.max(.25,d)*.8,3,7.5)),s.ai.seen=0;return}Mi(s,o,Vt(g,-i.hw,i.hw),.4,1),s.wantSprint=!0;return}}}else s.ai.seen=0;let c=Math.hypot(r.pos.x-i.x,r.pos.z);if(!t.owner&&c<5.5&&t.nearestTo(r.pos,s.team)===s&&r.speed()<9){Mi(s,r.pos.x,r.pos.z,.5,2);return}let u=t.owner&&t.owner.team!==s.team&&c<6?1.6:0,f=Vt(r.pos.z*.5,-i.hw*.85,i.hw*.85);Mi(s,o+a*u,f,.8,3)}function Ih(s,t,e){if(!s.active)return;let n=t.aiLevel(s.team);if(s.lookAt=t.ball.pos,s.pullTarget){s.ai.pullFor=(s.ai.pullFor||1)-e;let a=s.pullTarget;Mi(s,a.pos.x-Math.sin(a.facing)*.6,a.pos.z-Math.cos(a.facing)*.6,.5,1),s.ai.pullFor<=0&&s.releasePull(ce(.4));return}if(s.state==="celebrate")return;if(s.isGK){av(s,t,e,n);return}if(!s.canAct&&s.state!=="kick"){s.want.set(0,0);return}if(s.hasBall){iv(s,t,e,n);return}let i=t.roles[s.team];if(i.chaser===s){sv(s,t,e,n);return}if(t.pendingPass&&t.pendingPass.target===s){let a=t.ball,o=Vt(Math.hypot(a.pos.x-s.pos.x,a.pos.z-s.pos.z)/Math.max(4,a.groundSpeed()),0,1.2);Mi(s,a.pos.x+a.vel.x*o,a.pos.z+a.vel.z*o,.6,3);return}let r=t.owner?t.owner.team===s.team:t.ball.lastKickTeam===s.team&&t.ball.groundSpeed()>3;rv(s,t,e,i.slots.get(s)??0,i.nSlots,r)}var Rr=["#26262b","#3b4a6b","#4a4038","#2f3a4a","#555046"],Lh=["short","curly","buzz","short","cap","short","curly"];function hf(s,t,e,{kits:n=!1,shoes:i=!1,isGK:r=!1}={}){let a=We(e*97+t*13+5),o=s.colors[t%s.colors.length],l=a.pick(Ch),c=a.pick(Tr),h=[1,7,10,9,4,11,8,5,3,6][t%10],u=!i&&a.chance(.35);if(n)return{skin:l,hair:c,hairStyle:a.pick(Lh),top:{type:"jersey",color:r?"#2f2f33":s.colors[0],number:h,numColor:s.accent},bottom:{type:"shorts",color:r?"#2f2f33":s.accent==="#ffffff"?"#f2f2f2":"#222"},socks:s.colors[0],shoes:"#1a1a1a",scale:a.range(.92,1),build:a.range(.95,1.08),capColor:s.colors[0]};let f=r?"tracksuit":a.pick(["tracksuit","tshirt","tank","jersey","tshirt","shirt"]),d,g;switch(f){case"tracksuit":d={type:"tracksuit",color:o,color2:"#ffffff"},g={type:"pants",color:a.chance(.6)?o:"#26262b"};break;case"tank":d={type:"tank",color:o},g={type:a.chance(.5)?"shorts":"pants",color:a.pick(Rr)};break;case"jersey":d={type:"jersey",color:o,number:h,numColor:s.accent},g={type:"shorts",color:a.chance(.5)?"#f2f2f2":"#222"};break;case"shirt":d={type:"shirt",color:o,color2:"#ffffff"},g={type:"pants",color:a.pick(Rr)};break;default:d={type:"tshirt",color:o,number:a.chance(.4)?h:null,numColor:s.accent},g={type:a.chance(.4)?"shorts":"pants",color:a.pick(Rr)}}return r&&(d={type:"tracksuit",color:"#2f2f33",color2:o},g={type:"pants",color:"#2f2f33"}),{skin:l,hair:c,hairStyle:a.pick(Lh),capColor:a.pick([o,"#222","#eee"]),top:d,bottom:g,slippers:u,shoes:u?a.pick(["#2e8b57","#3a6fd8","#e05a30","#222"]):a.pick(["#e8e4dc","#e8e4dc","#222","#c8c0b0"]),socks:a.chance(.5)?"#f2f2f2":null,scale:a.range(.9,1),build:a.range(.94,1.1)}}function Os(s,t){let e=We(t*31+3),n=e.pick(Ch);switch(s){case"woman":return{skin:n,hairStyle:"scarf",scarfColor:e.pick(["#3b2a4a","#1c1c24","#6a2a3a","#2a4a5a","#a07a5a"]),top:{type:"dress",color:e.pick(["#2e2e3a","#4a1f3a","#3a4a2a","#5a4a3a","#222"])},bottom:{type:"pants",color:"#222"},shoes:"#1a1a1a",scale:e.range(.92,.98)};case"mom":return{skin:n,hairStyle:"scarf",scarfColor:"#1c1c24",top:{type:"dress",color:"#4a1f3a"},bottom:{type:"pants",color:"#222"},shoes:"#222",scale:.96,build:1.15};case"old":return{skin:n,hair:"#9a9a9a",hairStyle:e.pick(["gray","bald","gray"]),mustache:!0,top:{type:"galabeya",color:e.pick(["#8a7a5e","#d8d4c8","#5a6a7a","#7a6a5a","#c8c0a8"])},bottom:{type:"pants",color:"#555"},shoes:"#4a3a2a",slippers:e.chance(.5),scale:e.range(.94,1),build:e.range(1,1.15)};case"headmaster":return{skin:n,hair:"#555",hairStyle:"bald",mustache:!0,glasses:!0,top:{type:"suit",color:"#4a4a52",color2:"#7a1f1f"},bottom:{type:"pants",color:"#4a4a52"},shoes:"#111",scale:1.02,build:1.2};case"kid":return{skin:n,hair:e.pick(Tr),hairStyle:e.pick(Lh),top:{type:"tshirt",color:e.pick(["#e8b830","#3aa356","#e05a30","#7a5ad8","#eee","#30a0c0"])},bottom:{type:"shorts",color:e.pick(Rr)},slippers:e.chance(.6),shoes:"#2e8b57",scale:e.range(.72,.82)};case"baker":return{skin:n,hair:e.pick(Tr),hairStyle:"buzz",mustache:!0,top:{type:"tshirt",color:"#e8e4dc"},bottom:{type:"pants",color:"#5a5a5a"},shoes:"#333",scale:.98};case"man":default:return{skin:n,hair:e.pick(Tr),hairStyle:e.pick(["short","buzz","gray"]),mustache:e.chance(.6),top:{type:e.pick(["shirt","tshirt","galabeya"]),color:e.pick(["#8a7a5e","#5a7a9a","#d8d4c8","#7a4a3a","#3a5a4a"]),color2:"#eee"},bottom:{type:"pants",color:e.pick(Rr)},shoes:"#2a2a2a",scale:e.range(.95,1.02),build:e.range(1,1.15)}}}var Dh=100,Gi=class{constructor(t,e){this.m=t,this.char=fo(e),this.anim=new Ds(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new M,this.facing=0,this.radius=.32,this.height=1.75*this.char.scale}headPos(t=new M){return t.set(this.pos.x,this.height+.35,this.pos.z)}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}remove(){this.m.scene.remove(this.root)}},To=class extends Gi{constructor(t,e){let n=$t(["man","woman","old","man","woman","kid"]);if(super(t,Os(n,Dh++)),this.kind=n,(n==="old"||this.char.look.top.type==="galabeya")&&(this.anim.ampScale=.55),n==="woman"&&(this.anim.ampScale=.6),this.speed=n==="old"?.95:n==="kid"?1.9:st(1.15,1.45),e.cross){let i=t.ctx.bounds,r=st(i.minX*.7,i.maxX*.7),a=ce(.5);this.a=new M(r,0,a?e.z0:e.z1),this.b=new M(r+st(-3,3),0,a?e.z1:e.z0)}else{let i=ce(.5);this.a=(i?e.b:e.a).clone(),this.b=(i?e.a:e.b).clone()}if(this.pos.copy(this.a),this.state="walk",this.t=0,this.done=!1,this.carry=null,n==="woman"&&ce(.6)){let i=nt(.28,.32,.18,W("#f0f0f0"),0,-.2,0);this.char.J.rHand.add(i)}if(n==="man"&&ce(.4)){let i=nt(.25,.32,.03,W("#dcd8cc"),0,-.1,.05);this.char.J.lHand.add(i)}}hitByBall(t){this.state!=="walk"||t<2.5||(this.state="react",this.t=0,this.facing=Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),this.anim.play("point"),this.m.say(this,$t(ee.walkerHit),{color:"#fff"}),this.m.audio.play("ouch"))}update(t){this.t+=t;let e=0;if(this.state==="walk"){let n=this.b.x-this.pos.x,i=this.b.z-this.pos.z,r=Math.hypot(n,i);if(r<.3){this.done=!0;return}let a=!1;for(let o of this.m.allPlayers){if(!o.active)continue;let l=o.pos.x-this.pos.x,c=o.pos.z-this.pos.z;if(Math.hypot(l,c)<.75&&l*n+c*i>0){a=!0;break}}e=a?0:this.speed,this.pos.x+=n/r*e*t,this.pos.z+=i/r*e*t,this.facing=Bi(this.facing,Math.atan2(n,i),6,t)}else this.state==="react"&&this.t>1.8&&(this.state="walk",this.anim.stop("point"));this.anim.update(t,e),this.sync()}},Ao=class extends Gi{constructor(t,e){super(t,Os("baker",Dh++)),this.anim.mode="ride";let n=t.ctx.bounds;this.dir=ce(.5)?1:-1,this.pos.set(this.dir>0?n.minX-3:n.maxX+3,0,e),this.end=this.dir>0?n.maxX+3:n.minX-3,this.facing=this.dir>0?Math.PI/2:-Math.PI/2,this.speed=3.4,this.radius=.55,this.done=!1;let i=new Jt,r=W("#1b1b1b",.6);for(let c of[-.55,.55]){let h=new ot(new Tn(.33,.035,6,20),r);h.rotation.y=Math.PI/2,h.position.set(0,.35,c),h.castShadow=!0,i.add(h)}let a=W("#2a5a8a",.5,{metalness:.5}),o=nt(.05,.05,1,a,0,.62,0,i);o.rotation.x=.1,nt(.05,.5,.05,a,0,.6,-.2,i),nt(.5,.04,.04,a,0,1,.45,i),nt(.18,.05,.25,W("#222"),0,.88,-.25,i),this.bike=i,this.root.add(i),this.char.J.hips.position.z=-.25;let l=new Jt;nt(1.1,.06,.55,W("#8b5a2b"),0,0,0,l);for(let c=0;c<10;c++){let h=new ot(new Xt(.11,8,6),W("#d8a860"));h.scale.set(1,.4,1),h.position.set(-.42+c%5*.21,.06,c<5?-.12:.12),l.add(h)}l.position.set(0,.32,0),this.char.J.head.add(l),this.char.J.head.scale.multiplyScalar(1),this.rang=!1}hitByBall(){this.m.say(this,"\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u064A\u0634 \u064A\u0627 \u0627\u0628\u0646\u064A!")}update(t){this.pos.x+=this.dir*this.speed*t,(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),!this.rang&&Math.abs(this.pos.x-this.m.ball.pos.x)<8&&(this.rang=!0,this.m.audio.play("bell")),this.anim.update(t,this.speed),this.sync()}},Ro=class{constructor(t,e){this.m=t;let{grp:n,wheels:i,disco:r}=tf();if(this.grp=n,this.wheels=i,this.disco=r,t.scene.add(n),this.dir=ce(.5)?1:-1,this.pos=new M(this.dir>0?e.from:e.to,0,e.z),this.end=this.dir>0?e.to:e.from,this.speed=5.2,this.grp.rotation.y=this.dir>0?0:Math.PI,this.done=!1,this.t=0,this.honked=0,this.collider={min:new M,max:new M,tag:"toktok",solid:!0},t.night){let a=new Rs("#fff0c0",120,18,.5,.5,1.5);a.position.set(1.45,.95,0),a.target.position.set(8,0,0),n.add(a,a.target)}this.update(0)}update(t){this.t+=t;let e=1;for(let i of this.m.allPlayers){if(!i.active)continue;let r=(i.pos.x-this.pos.x)*this.dir;r>0&&r<3.5&&Math.abs(i.pos.z-this.pos.z)<1.3&&(e=Math.min(e,.25))}this.vx=this.dir*this.speed*e,this.pos.x+=this.vx*t,this.honked-=t,e<1&&this.honked<=0&&(this.m.audio.play("horn"),this.honked=1.4),(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),this.grp.position.copy(this.pos),this.grp.position.y=Math.abs(Math.sin(this.t*14))*.02;for(let i of this.wheels)i.rotation.y+=this.vx*t*3;this.disco.forEach((i,r)=>{i.visible=(Math.floor(this.t*6)+r)%2===0});let n=this.collider;n.min.set(this.pos.x-1.6,0,this.pos.z-.7),n.max.set(this.pos.x+1.6,2.1,this.pos.z+.7)}remove(){this.m.scene.remove(this.grp)}},Cr=class extends Gi{constructor(t,e){super(t,Os(e.kind,Dh++)),this.pos.copy(e.pos),this.facing=e.rotY,this.anim.play("sit"),this.cheerT=0,this.sync(),this.anim.update(1,0)}cheer(t=3){this.cheerT=t,this.anim.play("sitCheer")}update(t){this.cheerT>0&&(this.cheerT-=t,this.cheerT<=0&&this.anim.play("sit")),this.anim.update(t,0),this.sync()}},Co=class extends Gi{constructor(t,e){super(t,Os("mom",7)),this.balc=e,this.pos.copy(e.momPos),this.facing=e.face>0?0:Math.PI,this.root.visible=!1,this.t=0,this.mode=null,this.anim.ampScale=.6,this.sync()}headPos(t=new M){return t.set(this.pos.x,this.pos.y+2.1,this.pos.z)}call(t){this.root.visible=!0,this.mode="call",this.t=0,this.anim.play("wave"),this.m.say(this,ee.momCall(t),{color:"#ffe9f0",dur:3.6}),this.m.audio.play("mom")}catchBall(){this.root.visible=!0,this.mode="ball",this.t=0,this.anim.stop(),this.anim.play("holdBall")}update(t){if(this.t+=t,this.mode==="call"&&this.t>4&&(this.mode=null,this.root.visible=!1,this.anim.stop()),this.mode==="ball"){let e=this.m,n=new M;if(this.char.J.rHand.getWorldPosition(n),this.t<2.6&&e.ball.place(n.x,n.z+(this.balc.face>0?.25:-.25),n.y),this.t>.6&&this.t<.7&&e.say(this,$t(ee.balconyBack),{color:"#ffe9f0",dur:2.6}),this.t>2&&!this.thrown&&(this.thrown=!0,this.anim.play("throw")),this.t>2.38&&!this.released){this.released=!0,e.ball.frozen=!1;let i=st(-3,3),r=0,a=i-e.ball.pos.x,o=r-e.ball.pos.z,l=Math.hypot(a,o);e.ball.kick(a/l*6,3,o/l*6,null),e.onBalconyReturn()}this.t>3.6&&(this.mode=null,this.root.visible=!1,this.thrown=this.released=!1,this.anim.stop())}this.root.visible&&(this.anim.update(t,0),this.sync())}},Po=class extends Gi{constructor(t,e){super(t,Os("headmaster",3)),this.door=e.clone(),this.pos.copy(e),this.root.visible=!1,this.state="inside",this.t=0,this.wait=st(25,40),this.anim.ampScale=.8;let n=qt(.015,.015,.8,W("#6a4a2a"),0,-.35,.05);n.rotation.x=.4,this.char.J.rHand.add(n),this.target=new M}get watching(){return this.state==="patrol"||this.state==="out"}update(t){this.t+=t;let e=0,n=(i,r,a)=>{let o=i-this.pos.x,l=r-this.pos.z,c=Math.hypot(o,l);return c<.2?!0:(this.pos.x+=o/c*a*t,this.pos.z+=l/c*a*t,this.facing=Bi(this.facing,Math.atan2(o,l),6,t),e=a,!1)};switch(this.state){case"inside":this.t>this.wait&&(this.state="out",this.t=0,this.root.visible=!0,this.target.set(this.door.x+st(-8,8),0,this.door.z+st(1,2)),this.m.onHeadmaster(!0));break;case"out":n(this.target.x,this.target.z,1.2)&&(this.state="patrol",this.t=0);break;case"patrol":this.facing=Bi(this.facing,Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),3,t),this.t>11&&(this.state="back",this.t=0,this.anim.stop("point"));break;case"back":n(this.door.x,this.door.z,1.3)&&(this.state="inside",this.t=0,this.wait=st(30,50),this.root.visible=!1,this.m.onHeadmaster(!1));break}this.root.visible&&(this.anim.update(t,e),this.sync())}scold(t){this.anim.play("point"),this.m.say(this,ee.headmasterCatch(t.name),{color:"#ffeaa0",dur:3}),this.m.audio.play("whistle")}},Io=class{constructor(t,e){this.m=t;let n=new Jt,i=W("#d98a3a",.95),r=new ot(new kn(.11,.26,4,8),i);r.rotation.z=Math.PI/2,r.position.y=.12,n.add(r);let a=new ot(new Xt(.09,10,8),i);a.position.set(.25,.18,0),n.add(a);for(let l of[-1,1]){let c=new ot(new gi(.03,.06,4),i);c.position.set(.26,.27,l*.045),n.add(c)}let o=new ot(new kn(.02,.25,3,6),i);o.position.set(-.25,.18,0),o.rotation.z=.9,n.add(o),this.tail=o,n.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n.position.copy(e.pos),n.rotation.y=e.rot,t.scene.add(n),this.g=n,this.t=Math.random()*5,this.run=0}update(t){this.t+=t,this.tail.rotation.x=Math.sin(this.t*2)*.4;let e=this.m.ball.pos;!this.run&&Math.hypot(e.x-this.g.position.x,e.z-this.g.position.z)<1.4&&this.m.ball.speed()>2&&(this.run=1,this.m.audio.play("meow")),this.run&&(this.g.position.x-=t*6,this.g.position.y=Math.max(0,this.g.position.y-t),this.g.position.x<-40&&(this.g.visible=!1))}},Lo=class{constructor(t,e){this.m=t;let n=new Jt,i=W("#efeadf",1),r=new ot(new ws(.42,1),i);r.scale.set(1.4,.95,1),r.position.y=.62,n.add(r);let a=new ot(new Xt(.15,10,8),W("#3a3030"));a.scale.set(1.3,1,.9),a.position.set(.62,.78,0),n.add(a),this.head=a;for(let[o,l]of[[.3,.18],[.3,-.18],[-.32,.18],[-.32,-.18]]){let c=new ot(new tn(.04,.04,.42,6),W("#3a3030"));c.position.set(o,.21,l),n.add(c)}n.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),n.position.copy(e.pos),n.rotation.y=e.rot,t.scene.add(n),this.g=n,this.t=0,this.hop=0}hit(){this.hop=.5,this.m.audio.play("baa"),this.m.say({headPos:(t=new M)=>t.set(this.g.position.x,1.6,this.g.position.z)},"\u0645\u0627\u0627\u0627\u0627\u0621!")}update(t){this.t+=t,this.head.position.y=.78+Math.sin(this.t*1.3)*.05,this.head.rotation.z=Math.sin(this.t*.7)*.2,this.hop>0&&(this.hop-=t,this.g.position.y=Math.sin((.5-this.hop)*Math.PI*2)*.25*(this.hop>0?1:0))}},Do=class{constructor(t,e){this.m=t,this.center=e,this.birds=[];for(let n=0;n<9;n++){let i=new Jt,r=ce(.3)?"#e8e4dc":ce(.5)?"#7a7a88":"#5a4a3a",a=new ot(new Xt(.09,8,6),W(r));a.scale.set(1.6,.9,.9),i.add(a);let o=[];for(let l of[-1,1]){new pe(.28,.12).translate(0,0,l*.14);let h=new ot(new xe(.16,.01,.26),W(r,.9));h.geometry.translate(0,0,l*.13),i.add(h),o.push(h)}this.m.scene.add(i),this.birds.push({g:i,wings:o,a:n/9*Math.PI*2,r:st(4,8),h:st(5,9),sp:st(.6,.9),ph:Math.random()*6})}this.t=0}update(t){this.t+=t;for(let e of this.birds){e.a+=e.sp*t;let n=this.center.x+Math.cos(e.a)*e.r*1.6+6,i=this.center.z+Math.sin(e.a)*e.r;e.g.position.set(n,e.h+Math.sin(this.t+e.ph)*.6,i),e.g.rotation.y=-e.a;let r=Math.sin(this.t*14+e.ph)*.8;e.wings[0].rotation.x=r,e.wings[1].rotation.x=-r}}};var ko=class{constructor(t){this.scene=t,this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[],this.puffTex=Yd(),this.starTex=$d(),this.shardGeo=new ge,this.shardGeo.setAttribute("position",new Ht([0,0,0,.12,.02,0,.03,.14,0],3)),this.shardGeo.computeVertexNormals(),this.shardMat=new le({color:"#cfe8f5",transparent:!0,opacity:.85,side:Ce})}puff(t,{color:e="#c8b08a",n=6,size:i=.6,spread:r=.4,up:a=.6,life:o=.9,opacity:l=.7}={}){for(let c=0;c<n;c++){let h=new En(new pn({map:this.puffTex,color:e,transparent:!0,opacity:l,depthWrite:!1}));h.position.set(t.x+st(-r,r),t.y+st(0,r*.5),t.z+st(-r,r));let u=i*st(.7,1.2);h.scale.setScalar(u),this.scene.add(h),this.puffs.push({s:h,vx:st(-.6,.6),vy:st(.2,a),vz:st(-.6,.6),life:o,t:0,sc:u,op:l})}}shatter(t,e){for(let n=0;n<26;n++){let i=new ot(this.shardGeo,this.shardMat);i.position.set(t.x+st(-.4,.4),t.y+st(-.5,.5),t.z),i.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(i),this.shards.push({m:i,v:new M(st(-2,2),st(0,2.5),e*st(1,4)),w:new M(st(-9,9),st(-9,9),0),t:0})}}dizzy(t,e=2.5){let n=new Jt;for(let i=0;i<3;i++){let r=new En(new pn({map:this.starTex,depthWrite:!1,transparent:!0}));r.scale.setScalar(.28),n.add(r)}this.scene.add(n),this.stars.push({g:n,getPos:t,t:0,dur:e})}fight(t,e=4){let n={pos:t.clone(),t:0,dur:e,spawn:0};return this.clouds.push(n),n}update(t){for(let e=this.puffs.length-1;e>=0;e--){let n=this.puffs[e];n.t+=t;let i=n.t/n.life;if(i>=1){this.scene.remove(n.s),n.s.material.dispose(),this.puffs.splice(e,1);continue}n.s.position.x+=n.vx*t,n.s.position.y+=n.vy*t,n.s.position.z+=n.vz*t,n.s.scale.setScalar(n.sc*(1+i*1.4)),n.s.material.opacity=n.op*(1-i)}for(let e=this.shards.length-1;e>=0;e--){let n=this.shards[e];n.t+=t,n.v.y-=9.8*t,n.m.position.addScaledVector(n.v,t),n.m.position.y<.01&&(n.m.position.y=.01,n.v.set(0,0,0),n.w.set(0,0,0)),n.m.rotation.x+=n.w.x*t,n.m.rotation.y+=n.w.y*t,n.t>8&&(this.scene.remove(n.m),this.shards.splice(e,1))}for(let e=this.stars.length-1;e>=0;e--){let n=this.stars[e];if(n.t+=t,n.t>n.dur){this.scene.remove(n.g),this.stars.splice(e,1);continue}let i=n.getPos();n.g.position.copy(i),n.g.children.forEach((r,a)=>{let o=n.t*5+a/3*Math.PI*2;r.position.set(Math.cos(o)*.32,Math.sin(n.t*7+a)*.05,Math.sin(o)*.32)})}for(let e=this.clouds.length-1;e>=0;e--){let n=this.clouds[e];if(n.t+=t,n.spawn-=t,n.t<n.dur&&n.spawn<=0){if(n.spawn=.045,this.puff(new M(n.pos.x,.6+Math.random()*1,n.pos.z),{color:"#efe4d0",n:3,size:1.9,spread:1.1,up:.6,life:.8,opacity:.95}),Math.random()<.7){let i=new ot(new kn(.08,.5,3,6),new Gt({color:Math.random()<.5?"#c98b5a":"#a86b43"})),r=Math.random()*Math.PI*2;i.position.set(n.pos.x+Math.cos(r)*1.3,.5+Math.random()*1.2,n.pos.z+Math.sin(r)*1.3),i.rotation.set(Math.random()*3,0,Math.PI/2+r),this.scene.add(i),this.limbs.push({m:i,t:0})}if(Math.random()<.3){let i=new En(new pn({map:this.starTex,transparent:!0,depthWrite:!1}));i.position.set(n.pos.x+st(-1,1),st(.8,2),n.pos.z+st(-1,1)),i.scale.setScalar(.45),this.scene.add(i),this.limbs.push({m:i,t:0})}}n.t>n.dur+1&&this.clouds.splice(e,1)}for(let e=this.limbs.length-1;e>=0;e--){let n=this.limbs[e];n.t+=t,n.t>.22&&(this.scene.remove(n.m),this.limbs.splice(e,1))}}clear(){for(let t of this.puffs)this.scene.remove(t.s);for(let t of this.shards)this.scene.remove(t.m);for(let t of this.stars)this.scene.remove(t.g);for(let t of this.limbs)this.scene.remove(t.m);this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[]}};var Uo=class{constructor(t,e,n){this.cam=t,this.def=e,this.ctx=n,this.focus=new M,this.zoom=1,this.zoomTarget=1,this.shakeT=0,this.shakeA=0,this.baseD=8.6+e.halfW*1.1,this.orbit=0,this.mode="follow"}shake(t=.3,e=.35){this.shakeA=Math.max(this.shakeA,t),this.shakeT=Math.max(this.shakeT,e)}snap(t){this.focus.copy(t),this.update(.001,t,!0)}update(t,e,n=!1){let i=this.ctx.bounds,r=this.cam.aspect,a=this.baseD*this.zoom,o=a*.96,l=Math.tan(this.cam.fov*Math.PI/360)*Math.hypot(a,o)*r*.9,c=e.x,h=i.minX+l*.7,u=i.maxX-l*.7;c=h<u?Vt(c,h,u):(i.minX+i.maxX)/2;let f=e.y>1.6,d=f?e.z+2.5:Vt(e.z*.45,-this.def.halfW*.4,this.def.halfW*.4)+this.ctx.camZ,g=f?e.y*.8:0,x=n?1:1-Math.exp(-3.2*t);this.focus.x+=(c-this.focus.x)*x,this.focus.z+=(d-this.focus.z)*x,this.focus.y+=(g-this.focus.y)*x,this.zoom=oo(this.zoom,this.zoomTarget,2.5,t);let m,p,_;if(this.mode==="orbit"){this.orbit+=t*.12;let v=a*1.2;m=this.focus.x+Math.sin(this.orbit)*v*.6,_=this.focus.z+Math.cos(this.orbit)*v*.35+a*.7,p=o*.75}else m=this.focus.x,p=o+this.focus.y*.6,_=this.focus.z+a;if(this.shakeT>0){this.shakeT-=t;let v=this.shakeA*Math.max(0,this.shakeT)*3;m+=st(-v,v),p+=st(-v,v)*.5,this.shakeT<=0&&(this.shakeA=0)}this.cam.position.set(m,p,_),this.cam.lookAt(this.focus.x,.6+this.focus.y,this.focus.z-.8)}};var kh=class{constructor(){this.ctx=null,this.master=null,this.volume=.8,this.muted=!1,this.amb=null,this.toktokLoop=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination);let n=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=this.muted?0:t)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:this.volume)}env(t,e,n,i,r,a=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(a,e+n+r)}noise(t,e,{type:n="bandpass",f:i=1e3,q:r=1,gain:a=.5,a:o=.005,f2:l=null,dest:c=null}={}){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;let f=h.createBiquadFilter();f.type=n,f.frequency.setValueAtTime(i,t),f.Q.value=r,l&&f.frequency.exponentialRampToValueAtTime(l,t+e);let d=h.createGain();return this.env(d,t,o,a,e),u.connect(f),f.connect(d),d.connect(c||this.master),u.start(t,Math.random()),u.stop(t+o+e+.05),d}tone(t,e,{type:n="sine",f:i=440,f2:r=null,gain:a=.3,a:o=.005,dest:l=null,vib:c=0,vibF:h=6}={}){let u=this.ctx,f=u.createOscillator();if(f.type=n,f.frequency.setValueAtTime(i,t),r&&f.frequency.exponentialRampToValueAtTime(r,t+e),c){let g=u.createOscillator(),x=u.createGain();g.frequency.value=h,x.gain.value=c,g.connect(x),x.connect(f.frequency),g.start(t),g.stop(t+o+e+.05)}let d=u.createGain();return this.env(d,t,o,a,e),f.connect(d),d.connect(l||this.master),f.start(t),f.stop(t+o+e+.05),f}play(t,e=1){if(!this.ctx||this.muted)return;let n=this.ctx.currentTime+.005;switch(t){case"kick":{let i=Math.min(1.4,e);this.tone(n,.12,{f:140,f2:50,gain:.5*i,type:"sine"}),this.noise(n,.06,{type:"lowpass",f:1800,gain:.35*i});break}case"pass":this.tone(n,.08,{f:160,f2:70,gain:.3}),this.noise(n,.04,{type:"lowpass",f:1500,gain:.18});break;case"bounce":this.tone(n,.07,{f:110,f2:60,gain:Math.min(.35,.05*e)});break;case"wall":this.noise(n,.12,{type:"lowpass",f:600,gain:Math.min(.5,.05*e)}),this.tone(n,.09,{f:90,f2:50,gain:Math.min(.4,.04*e)});break;case"metal":for(let i of[520,1310,2150])this.tone(n,.9,{f:i,gain:.12,type:"sine",a:.002});this.noise(n,.05,{type:"highpass",f:3e3,gain:.2});break;case"brick":this.noise(n,.08,{type:"bandpass",f:900,q:2,gain:.4});break;case"whistle":{let i=e>1;this.tone(n,i?.9:.35,{f:2900,gain:.18,vib:140,vibF:28,type:"sine"}),this.noise(n,i?.9:.35,{type:"bandpass",f:2900,q:8,gain:.08}),e>2&&(this.tone(n+1.1,.35,{f:2900,gain:.18,vib:140,vibF:28}),this.tone(n+1.6,1,{f:2900,gain:.18,vib:140,vibF:28}));break}case"cheer":this.noise(n,2.6,{type:"bandpass",f:1300,q:.6,gain:.35,a:.25}),this.noise(n+.1,2.2,{type:"bandpass",f:700,q:.8,gain:.25,a:.3});for(let i=0;i<6;i++)this.tone(n+st(0,.8),st(.4,.9),{type:"sawtooth",f:st(380,650),f2:st(500,900),gain:.025,a:.05,vib:20});break;case"ooh":for(let i=0;i<5;i++)this.tone(n+st(0,.1),.9,{type:"triangle",f:st(260,420),f2:st(170,240),gain:.05,a:.1});this.noise(n,.9,{type:"bandpass",f:500,q:1,gain:.12,a:.1});break;case"glass":this.noise(n,.5,{type:"highpass",f:2500,gain:.5,f2:6e3});for(let i=0;i<14;i++)this.tone(n+st(0,.6),st(.05,.25),{f:st(2500,7e3),gain:.06,a:.001});this.noise(n,.15,{type:"lowpass",f:400,gain:.4});break;case"bell":for(let i of[0,.22])this.tone(n+i,.7,{f:2100,gain:.15,a:.001}),this.tone(n+i,.5,{f:3370,gain:.06,a:.001});break;case"horn":this.tone(n,.32,{type:"square",f:440,gain:.07}),this.tone(n,.32,{type:"square",f:554,gain:.05}),this.tone(n+.4,.2,{type:"square",f:440,gain:.07});break;case"ouch":this.tone(n,.35,{type:"sawtooth",f:520,f2:260,gain:.06,vib:12});break;case"thud":this.tone(n,.2,{f:90,f2:40,gain:.45}),this.noise(n,.12,{type:"lowpass",f:500,gain:.3});break;case"slide":this.noise(n,.45,{type:"bandpass",f:1200,q:.7,gain:.25,f2:500,a:.02});break;case"rip":for(let i=0;i<8;i++)this.noise(n+i*.035,.03,{type:"highpass",f:2500,gain:.15});break;case"meow":this.tone(n,.45,{type:"triangle",f:700,f2:450,gain:.08,vib:30,vibF:8});break;case"baa":this.tone(n,.7,{type:"sawtooth",f:330,f2:300,gain:.07,vib:25,vibF:11});break;case"mom":this.tone(n,.35,{type:"triangle",f:620,gain:.07,vib:8}),this.tone(n+.38,.6,{type:"triangle",f:520,f2:480,gain:.07,vib:8});break;case"schoolbell":for(let i=0;i<14;i++)this.tone(n+i*.08,.08,{type:"square",f:1450,gain:.04,a:.001});break;case"fight":for(let i=0;i<18;i++)this.noise(n+i*.15+st(0,.1),.06,{type:"lowpass",f:700,gain:.35}),i%3===0&&this.tone(n+i*.15,.12,{type:"sawtooth",f:st(300,600),f2:200,gain:.04});break;case"click":this.tone(n,.04,{f:900,gain:.08,type:"triangle"});break;case"coin":this.tone(n,.08,{f:988,gain:.08,type:"square"}),this.tone(n+.08,.3,{f:1319,gain:.08,type:"square"});break;case"save":this.tone(n,.12,{f:200,f2:90,gain:.4}),this.noise(n,.1,{type:"bandpass",f:1200,gain:.25});break;case"buzz":this.tone(n,.08,{type:"sawtooth",f:100,gain:.03});break;default:break}}startAmbience(t,e){if(this.stopAmbience(),!this.ctx)return;let n=this.ctx,i=n.createGain();i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(1,n.currentTime+2),i.connect(this.master);let r=[],a=n.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=t?220:380;let l=n.createGain();l.gain.value=t?.05:.09,a.connect(o),o.connect(l),l.connect(i),a.start(),r.push(a),this.amb={g:i,nodes:r,night:t,kind:e,timer:0}}tickAmbience(t){let e=this.amb;if(!e||!this.ctx||this.muted||(e.timer-=t,e.timer>0))return;let n=this.ctx.currentTime;if(e.night){e.timer=st(.4,1.2);let i=st(4200,5200);for(let r=0;r<3;r++)this.tone(n+r*.07,.04,{f:i,gain:.018,a:.002,dest:e.g});Math.random()<.04&&this.bark(n,e.g)}else{e.timer=st(1.5,4);let i=Math.random();if(i<.25)this.tone(n,.25,{type:"square",f:st(380,480),gain:.012,dest:e.g});else if(i<.6)for(let r=0;r<3;r++)this.tone(n+r*.12,.08,{f:st(2800,3800),f2:st(2400,3200),gain:.015,dest:e.g})}}bark(t,e){for(let n=0;n<2;n++)this.tone(t+n*.28,.12,{type:"sawtooth",f:420,f2:250,gain:.03,dest:e}),this.noise(t+n*.28,.1,{type:"bandpass",f:800,gain:.04,dest:e})}stopAmbience(){if(this.amb){try{this.amb.nodes.forEach(t=>t.stop())}catch{}this.amb.g.disconnect(),this.amb=null}}toktokMusic(t){if(this.ctx)if(t&&!this.toktokLoop){let e=this.ctx,n=e.createGain();n.gain.value=.05,n.connect(this.master);let i=[392,440,466,440,392,349,392,440],r=0,a=setInterval(()=>{if(this.muted)return;let o=e.currentTime;this.tone(o,.12,{type:"square",f:i[r%i.length],gain:.5,dest:n}),r%2===0&&this.tone(o,.08,{f:110,f2:60,gain:.8,dest:n}),r++},160);this.toktokLoop={g:n,id:a}}else!t&&this.toktokLoop&&(clearInterval(this.toktokLoop.id),this.toktokLoop.g.disconnect(),this.toktokLoop=null)}},ft=new kh;var Bs=["pass","shoot","tackle","pull","skill","sprint","switch"],ov={solo:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyA"],shoot:["KeyS"],tackle:["KeyD"],pull:["KeyF"],skill:["KeyW"],sprint:["ShiftLeft","ShiftRight"],switch:["Space"]},p1:{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],pass:["KeyF"],shoot:["KeyG"],tackle:["KeyH"],pull:["KeyR"],skill:["KeyT"],sprint:["ShiftLeft"],switch:["KeyQ"]},p2:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyK","Numpad1"],shoot:["KeyL","Numpad2"],tackle:["Semicolon","Numpad3"],pull:["KeyO","Numpad4"],skill:["KeyP","Numpad5"],sprint:["ShiftRight","Numpad0"],switch:["Enter","NumpadEnter"]}},No=new Set,Uh=new Set,uf=!1;function lv(){uf||(uf=!0,window.addEventListener("keydown",s=>{s.target&&(s.target.tagName==="INPUT"||s.target.tagName==="SELECT")||(No.add(s.code),s.repeat||Uh.add(s.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(s.code)&&s.preventDefault())}),window.addEventListener("keyup",s=>No.delete(s.code)),window.addEventListener("blur",()=>No.clear()))}var Hs=class{constructor({keymap:t=null,gamepad:e=null,touch:n=null,color:i="#ffd23f",label:r=""}={}){lv(),this.keymap=t?ov[t]:null,this.gamepad=e,this.touch=n,this.color=i,this.label=r,this.axis={x:0,z:0},this.b={};for(let a of Bs)this.b[a]={down:!1,pressed:!1,released:!1,t:0}}update(t){let e=0,n=0,i={};for(let o of Bs)i[o]=!1;let r=this.keymap;if(r){let o=l=>l.some(c=>No.has(c)||Uh.has(c));o(r.left)&&(e-=1),o(r.right)&&(e+=1),o(r.up)&&(n-=1),o(r.down)&&(n+=1);for(let l of Bs)o(r[l])&&(i[l]=!0)}if(this.gamepad!==null){let o=navigator.getGamepads?navigator.getGamepads():[],l=o&&o[this.gamepad];if(l){let c=l.axes[0]||0,h=l.axes[1]||0;Math.hypot(c,h)>.2&&(e+=c,n+=h);let u=f=>l.buttons[f]&&l.buttons[f].pressed;u(14)&&(e-=1),u(15)&&(e+=1),u(12)&&(n-=1),u(13)&&(n+=1),i.pass||(i.pass=u(0)),i.tackle||(i.tackle=u(1)),i.shoot||(i.shoot=u(2)),i.skill||(i.skill=u(3)),i.pull||(i.pull=u(4)||u(6)),i.switch||(i.switch=u(5)),i.sprint||(i.sprint=u(7))}}if(this.touch){e+=this.touch.axis.x,n+=this.touch.axis.z;for(let o of Bs)i[o]||(i[o]=!!this.touch.btn[o])}let a=Math.hypot(e,n);a>1&&(e/=a,n/=a),this.axis.x=e,this.axis.z=n;for(let o of Bs){let l=this.b[o];l.pressed=i[o]&&!l.down,l.released=!i[o]&&l.down,l.t=i[o]?l.t+t:0,l.down=i[o]}}clear(){for(let t of Bs){let e=this.b[t];e.pressed=e.released=!1}}};function df(){Uh.clear()}var zo=class{constructor(t){this.axis={x:0,z:0},this.btn={},this.el=document.createElement("div"),this.el.className="touchpad",this.el.innerHTML=`
      <div class="stick"><div class="knob"></div></div>
      <div class="tbtns">
        <button data-b="shoot" class="tb big">\u0634\u0648\u0637\u0629</button>
        <button data-b="pass" class="tb big">\u0628\u0627\u0635\u0629</button>
        <button data-b="tackle" class="tb hot">\u0643\u0639\u0628\u0644\u0629</button>
        <button data-b="pull" class="tb hot">\u0634\u062F\u0651</button>
        <button data-b="skill" class="tb">\u0643\u0648\u0628\u0631\u064A</button>
        <button data-b="sprint" class="tb">\u062C\u0631\u064A</button>
        <button data-b="switch" class="tb sm">\u0628\u062F\u0651\u0644</button>
      </div>`,t.appendChild(this.el);let e=this.el.querySelector(".stick"),n=this.el.querySelector(".knob"),i=null,r=0,a=0,o=50;e.addEventListener("touchstart",h=>{i=h.changedTouches[0].identifier;let f=e.getBoundingClientRect();r=f.left+f.width/2,a=f.top+f.height/2,h.preventDefault()},{passive:!1});let l=h=>{for(let u of h.changedTouches){if(u.identifier!==i)continue;let f=u.clientX-r,d=u.clientY-a,g=Math.hypot(f,d);g>o&&(f*=o/g,d*=o/g),n.style.transform=`translate(${f}px,${d}px)`,this.axis.x=f/o,this.axis.z=d/o}},c=h=>{for(let u of h.changedTouches)u.identifier===i&&(i=null,this.axis.x=this.axis.z=0,n.style.transform="")};window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",c),window.addEventListener("touchcancel",c),this.el.querySelectorAll(".tb").forEach(h=>{let u=h.dataset.b;h.addEventListener("touchstart",f=>{this.btn[u]=!0,h.classList.add("on"),f.preventDefault()},{passive:!1}),h.addEventListener("touchend",f=>{this.btn[u]=!1,h.classList.remove("on"),f.preventDefault()},{passive:!1})})}show(t){this.el.style.display=t?"":"none"}},Nh=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;var ke=new M,ye=new M,ff={3:[[.06,0],[.62,-.38],[.62,.38]],4:[[.06,0],[.42,0],[.78,-.45],[.78,.45]],5:[[.06,0],[.38,-.38],[.38,.38],[.78,-.28],[.78,.28]]},Pr=class{constructor(t,e){this.game=t,this.ui=t.ui,this.audio=ft,this.opts=e,this.scene=new Na,this.camera=t.camera,this.def=Vi[e.mapId],this.night=e.night,this.teamKeys=[e.home,e.away],this.difficulty=e.difficulty||"normal",this.humanTeams=e.controllers.map(a=>!!a),this.controllers=e.controllers,this.time=0,this.clock=e.rule.type==="time"?e.rule.seconds:0,this.score=[0,0],this.scandal=[0,0],this.stats={fouls:[0,0],nutmegs:[0,0],shots:[0,0],goals:[],windows:0,fights:0,momCalls:0},this.owner=null,this.pendingPass=null,this.reserved=null,this.state="intro",this.stateT=0,this.queue=[],this.headmasterWatching=!1,this.roles=[{chaser:null,slots:new Map,nSlots:1},{chaser:null,slots:new Map,nSlots:1}],this.charge=0,this.lastSwitch=[0,0],this.stretch=new Map,this.timers=[],this.ctx=cf(e.mapId),this.scene.add(this.ctx.root),this.env=new So(this.scene,this.ctx,{night:this.night,quality:t.quality}),this.ball=new Eo(this.scene),this.ball.setNight(this.night),this.ball.friction=e.mapId==="yard"?1.15:e.mapId==="school"?.75:.85,this.ball.onBounce=a=>{a>1.5&&ft.play("bounce",a)},this.ball.onHit=(a,o,l)=>this.onBallHit(a,o,l),this.fx=new ko(this.scene),this.rig=new Uo(this.camera,this.def,this.ctx);let n=[...lf].sort(()=>Math.random()-.5),i=0;this.teams=[[],[]];let r=Math.floor(Math.random()*1e3);for(let a=0;a<2;a++){let o=ni[this.teamKeys[a]],l=e.mods?.[a]||{};for(let c=0;c<this.def.teamSize;c++){let h=n[i++%n.length];a===0&&c===1&&this.humanTeams[0]&&(h="\u062D\u0645\u0627\u062F\u0629"),h==="\u062D\u0645\u0627\u062F\u0629"&&!(a===0&&c===1)&&(h=n[i++%n.length]);let u=hf(o,c,r+a*50,{kits:!!l.kits,shoes:!!l.shoes,isGK:c===0}),f=new wo(this,a,c,u,{name:h,number:[1,7,10,9,4,11,8][c%7],isGK:c===0});f.mods.speed=(l.speed||1)*(this.humanTeams[a]?1:Ar[this.difficulty].speed),f.mods.shot=l.shot||1,f.mods.control=l.control||1,f.mods.stamina=l.stamina||1,this.teams[a].push(f)}}this.allPlayers=[...this.teams[0],...this.teams[1]],this.npcs=[],this.walkers=[];for(let a of this.ctx.spectators)this.npcs.push(new Cr(this,a));this.mom=this.ctx.balconies.length?new Co(this,this.ctx.balconies[0]):null,this.mom&&this.npcs.push(this.mom),this.headmaster=this.ctx.extras.headmaster?new Po(this,this.ctx.doors[0]):null,this.headmaster&&this.npcs.push(this.headmaster),this.animals=this.ctx.animals.map(a=>a.kind==="cat"?new Io(this,a):new Lo(this,a)),this.ctx.extras.pigeons&&this.npcs.push(new Do(this,this.ctx.extras.pigeons)),this.walkerT=st(4,9),this.toktok=null,this.toktokT=this.ctx.extras.toktok?st(35,60):1/0,this.bike=null,this.bikeT=this.ctx.extras.bike?st(15,30):1/0,this.dynColliders=[];for(let a=0;a<2;a++)this.controllers[a]&&this.setControl(a,this.teams[a][1]);this.placeKickoff(ce(.5)?0:1),this.rig.snap(new M(0,0,0)),this.rig.mode="orbit",this.rig.zoomTarget=1.15,this.rig.zoom=1.3,this.ui.matchStart(this),e.demo||(ft.startAmbience(this.night,e.mapId),e.mapId==="school"&&this.after(.6,()=>ft.play("schoolbell")))}teamColor(t){return ni[this.teamKeys[t]].ui}teamDef(t){return ni[this.teamKeys[t]]}aiLevel(t){return Ar[this.humanTeams[t]?"normal":this.difficulty]}aiSkill(t){return this.aiLevel(t.team).skill}goalFor(t){return this.ctx.goals.find(e=>e.side===(t===0?1:-1))}ownGoal(t){return this.ctx.goals.find(e=>e.side===(t===0?-1:1))}goalkeeper(t){return this.teams[t].find(e=>e.isGK&&e.active)}nearestTo(t,e,n){let i=null,r=1/0;for(let a of this.teams[e]){if(!a.active||n&&!n(a))continue;let o=ze(a.pos.x,a.pos.z,t.x,t.z);o<r&&(r=o,i=a)}return i}pressureDist(t){let e=99;for(let n of this.teams[1-t.team]){if(!n.active||n.down)continue;let i=ze(n.pos.x,n.pos.z,t.pos.x,t.pos.z);i<e&&(e=i)}return e}pressureOn(t){return Vt((2.5-this.pressureDist(t))/2.5,0,1)}lineBlocked(t,e,n,i,r,a=.8){let o=n-t,l=i-e,c=o*o+l*l;if(c<.01)return!1;for(let h of this.teams[1-r]){if(!h.active||h.down)continue;let u=((h.pos.x-t)*o+(h.pos.z-e)*l)/c;if(u<.08||u>.95)continue;let f=t+o*u,d=e+l*u;if(ze(f,d,h.pos.x,h.pos.z)<a)return!0}return!1}bestPassTarget(t,e,n=!1){let i=null,r=this.goalFor(t.team).x;for(let a of this.teams[t.team]){if(a===t||!a.active||a.isGK||a.state==="fallen")continue;let o=a.pos.x-t.pos.x,l=a.pos.z-t.pos.z,c=Math.hypot(o,l);if(c<2||c>26)continue;let h=0;if(e&&(e.x||e.z)){let f=Math.hypot(e.x,e.z),d=(o*e.x+l*e.z)/(c*f);if(d<.35)continue;h+=d*2.5-c/30}else{let f=(Math.abs(r-t.pos.x)-Math.abs(r-a.pos.x))/10;h+=f*(n?.3:1)}let u=Math.min(4,this.pressureDist(a))/4;h+=u*.8-c/28,this.lineBlocked(t.pos.x,t.pos.z,a.pos.x,a.pos.z,t.team)&&(h-=.7),(!i||h>i.score)&&(i={player:a,score:h})}return i}nutmegVictim(t){let e=Math.sin(t.facing),n=Math.cos(t.facing),i=null,r=2.4;for(let a of this.teams[1-t.team]){if(!a.active||a.down||a.state==="gkhold")continue;let o=a.pos.x-t.pos.x,l=a.pos.z-t.pos.z,c=Math.hypot(o,l);c>r||c<.3||(o*e+l*n)/c<.55||(r=c,i=a)}return i}kickBall(t,e,n,i,r={}){let a=this.ball;this.owner===t&&(this.owner=null),a.frozen=!1,a.pos.y=Math.max(a.pos.y,a.r),a.kick(e,n,i,t),t.cool.touch=.28,t.cool.kick=.4,this.pendingPass=null;let o=Math.hypot(e,n,i);if(r.kind==="shot"?(ft.play("kick",.6+(r.power||.5)*.8),this.stats.shots[t.team]++,this.lastShot={team:t.team,t:this.time,by:t},r.power>.8&&this.rig.shake(.12,.2),this.fx.puff(ke.set(a.pos.x,.05,a.pos.z),{n:3,size:.4,life:.6})):ft.play("pass",o/10),r.pass&&(this.pendingPass={target:r.pass,t:0,from:t},t.ctrl&&r.pass&&!r.pass.isGK&&this.setControl(t.team,r.pass)),r.kind==="nutmeg"){let l=r.victim;this.reserved={p:t,t:1.7},l.pending=null,l.setState("nutmegged",1),l.anim.play("dazed"),this.after(.9,()=>l.anim.stop("dazed")),t.stats.nutmegs++,this.stats.nutmegs[t.team]++,this.say(t,$t(ee.nutmeg),{color:"#ffd23f",big:!0}),this.say(l,$t(ee.nutmegged),{delay:.4}),ft.play("ooh"),this.ui.banner("\u0643\u0648\u0628\u0631\u064A!",`${t.name} \u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 ${l.name}`,"nut"),this.game.onEvent?.("nutmeg",t.team)}}loseBall(t,e=2){if(this.owner!==t)return;this.owner=null;let n=this.ball;n.vel.set(t.vel.x*.6+st(-e,e),.5,t.vel.z*.6+st(-e,e)),n.lastTouch=t,t.cool.touch=.5,t.state==="gkhold"&&t.setState("play")}giveBall(t){this.owner&&this.owner!==t&&(this.owner.cool.touch=.4),this.owner=t,this.ball.frozen=!1,this.ball.lastTouch=t,this.ball.lastKickTeam=t.team,this.pendingPass=null,this.reserved=null,t.cool.steal=.45,t.ai.t=0,this.humanTeams[t.team]&&!t.isGK&&!t.ctrl&&this.teams[t.team].find(n=>n.ctrl)&&this.setControl(t.team,t)}setControl(t,e){let n=this.controllers[t];if(!(!n||!e)){for(let i of this.teams[t])i.ctrl&&(i.ctrl=null,i.setMarker(null),i.ring.material.opacity=.85);e.ctrl=n,e.setMarker(n.color),this.lastSwitch[t]=this.time,this.ui.controlChanged(t,e)}}humanControl(t,e,n){let i=this.ball;if(t.want.set(e.axis.x,e.axis.z),t.wantSprint=e.b.sprint.down,t.lookAt=i.pos,t.pullTarget){e.b.pull.down||t.releasePull(!1);return}if(t.active){if(t.hasBall){if(e.b.pass.pressed){let r=e.axis.x||e.axis.z?{x:e.axis.x,z:e.axis.z}:{x:Math.sin(t.facing),z:Math.cos(t.facing)},a=this.bestPassTarget(t,r);t.pass(a?a.player:null,r.x,r.z)}if(e.b.shoot.down&&(this.charge=Math.min(1,e.b.shoot.t/.85),this.ui.power(this.charge)),e.b.shoot.released){let r=Math.max(.25,this.charge);t.shoot(r,e.axis.z*(t.team===0,1),r*.35),this.charge=0,this.ui.power(0)}e.b.skill.pressed&&t.nutmeg()}else{if(this.charge&&(this.charge=0,this.ui.power(0)),e.b.tackle.pressed&&(e.axis.x||e.axis.z?t.facing=Math.atan2(e.axis.x,e.axis.z):t.faceTo(i.pos),t.slide()),e.b.pull.pressed){let r=null,a=1.35;for(let o of this.teams[1-t.team]){if(!o.active||o.down)continue;let l=ze(o.pos.x,o.pos.z,t.pos.x,t.pos.z);l<a&&(a=l,r=o)}r&&t.pull(r)}if(e.b.pass.pressed&&this.owner&&this.owner.team===t.team&&!this.owner.ctrl&&t.cool.call<=0){t.cool.call=1.2,this.say(t,$t(ee.callPass));let r=this.owner;this.after(.18,()=>{this.owner===r&&r.canAct&&r.pass(t)})}}e.b.switch.pressed&&this.switchNext(t.team)}}switchNext(t){let e=this.teams[t].find(r=>r.ctrl),n=this.ball.pos,i=this.teams[t].filter(r=>r.active&&!r.isGK&&r!==e&&r.state!=="fallen");i.length&&(i.sort((r,a)=>ze(r.pos.x,r.pos.z,n.x,n.z)-ze(a.pos.x,a.pos.z,n.x,n.z)),this.setControl(t,i[0]))}autoSwitch(t){let e=this.teams[t].find(o=>o.ctrl);if(!e){this.switchNext(t);return}if(!e.active){this.switchNext(t);return}if(e.hasBall||e.pullTarget||e.state==="slide"||e.pending||this.time-this.lastSwitch[t]<.9||this.owner&&this.owner.team===t)return;let n=this.ball.pos,i=ze(e.pos.x,e.pos.z,n.x,n.z),r=null,a=i-3;for(let o of this.teams[t]){if(o===e||!o.active||o.isGK||o.down)continue;let l=ze(o.pos.x,o.pos.z,n.x,n.z);l<a&&(a=l,r=o)}r&&this.setControl(t,r)}computeRoles(){let t=this.ball.pos;for(let e=0;e<2;e++){let n=this.roles[e];n.slots.clear();let i=this.teams[e].find(c=>c.ctrl),r=this.teams[e].filter(c=>c.active&&!c.isGK&&!c.ctrl&&c.state!=="fallen"),a=null,o=1/0;for(let c of r){let h=ze(c.pos.x,c.pos.z,t.x,t.z)+(c.state==="play"?0:3);h<o&&(o=h,a=c)}if(i&&a){let c=ze(i.pos.x,i.pos.z,t.x,t.z),h=this.owner&&this.owner.team!==e;o<c-1.5||h&&o<7||(a=null)}this.owner&&this.owner.team===e&&(a=null),n.chaser=a;let l=r.filter(c=>c!==a).sort((c,h)=>c.pos.z-h.pos.z);l.forEach((c,h)=>n.slots.set(c,h)),n.nSlots=Math.max(1,l.length)}}placeKickoff(t){let e=this.def;this.owner=null,this.pendingPass=null,this.reserved=null,this.kickTeam=t;for(let n=0;n<2;n++){let i=ff[e.teamSize]||ff[4],r=this.ownGoal(n),a=n===0?1:-1,o=this.teams[n];o.forEach((l,c)=>{if(l.resetForKickoff(),!l.active)return;let[h,u]=i[c]||[.5,0],f=r.x+a*h*(Math.abs(r.x)-.6),d=u*e.halfW;n===t&&c===o.length-1&&(f=-a*.5,d=0),n!==t&&(f=a>0?Math.min(f,-1.8):Math.max(f,1.8)),l.place(f,d,n===0?Math.PI/2:-Math.PI/2),l.anim.update(.016,0)})}this.ball.place(0,0),this.ball.frozen=!1}startPlay(){let t=this.teams[this.kickTeam][this.teams[this.kickTeam].length-1];this.setState("play"),t&&t.active&&this.giveBall(t),ft.play("whistle"),this.humanTeams[this.kickTeam]&&t&&!t.ctrl&&this.setControl(this.kickTeam,t)}setState(t){this.state=t,this.stateT=0}after(t,e){this.timers.push({t,fn:e})}runTimers(t){if(!this.timers.length)return;let e=[];for(let n of this.timers)n.t-=t,n.t<=0&&e.push(n);if(e.length){this.timers=this.timers.filter(n=>n.t>0);for(let n of e)n.fn()}}update(t){t=Math.min(t,1/20),this.time+=t,this.stateT+=t;for(let i of this.controllers)i&&i.update(t);switch(df(),this.env.update(t),ft.tickAmbience(t),this.runTimers(t),this.state){case"intro":if(this.opts.demo){this.stateT>1&&this.setState("kickoff");break}(this.stateT>2.6||this.anyPressed())&&(this.rig.mode="follow",this.rig.zoomTarget=1,this.setState("kickoff"),this.ui.banner($t(ee.kickoff),`${this.teamDef(0).name} \xD7 ${this.teamDef(1).name}`,"start"));break;case"kickoff":this.stateT>1.3&&this.startPlay();break;case"play":this.opts.rule.type==="time"?(this.clock-=t,this.clock<=0&&(this.clock=0,this.endMatch())):this.clock+=t;break;case"goal":if(this.stateT>4.2){for(let i of this.allPlayers)i.stopCelebrate();this.opts.rule.type==="goals"&&Math.max(...this.score)>=this.opts.rule.n?this.endMatch():this.opts.rule.type==="time"&&this.clock<=0?this.endMatch():(this.placeKickoff(this.concededTeam),this.setState("kickoff"))}break;case"freekick":this.updateFreekick(t);break;case"event":this.updateEvent(t);break;case"end":this.stateT>3.2&&!this.resultShown&&(this.resultShown=!0,this.ui.showResult(this));break}let e=this.state==="play";(e||this.state==="freekick"||this.state==="event")&&this.computeRoles();for(let i of this.allPlayers)e?i.ctrl?this.humanControl(i,i.ctrl,t):this.freezeAI?i.want.set(0,0):Ih(i,this,t):this.state==="freekick"||this.state==="event"?i.ctrl&&i.state==="play"?(i.want.set(i.ctrl.axis.x,i.ctrl.axis.z),i.wantSprint=i.ctrl.b.sprint.down):i.ctrl||this.idleAI(i):this.state==="goal"||this.state==="end"?this.celebrateAI(i):(i.want.set(0,0),i.lookAt=this.ball.pos),i.update(t);if(e)for(let i=0;i<2;i++)this.controllers[i]&&this.autoSwitch(i);this.resolveCollisions(),e&&(this.updatePulls(t),this.updateSlides()),this.updateBall(t,e),e&&(this.checkGoal(),this.checkSpecialBall()),this.updateNPCs(t),this.fx.update(t);for(let i of this.animals)i.update(t);this.reserved&&(this.reserved.t-=t,this.reserved.t<=0&&(this.reserved=null)),this.pendingPass&&(this.pendingPass.t+=t,this.pendingPass.t>2.5&&(this.pendingPass=null));let n=this.ball.pos;this.state==="goal"&&this.scorer&&this.scorer.active&&(n=this.scorer.pos),this.focusOverride&&(n=this.focusOverride),this.rig.update(t,n),this.updateStretch(),this.ui.hud(this,t)}anyPressed(){return this.controllers.some(t=>t&&Object.values(t.b).some(e=>e.pressed))}idleAI(t){if(!t.active||t.state!=="play")return;t.lookAt=this.ball.pos;let e=this.ball.pos,n=ze(t.pos.x,t.pos.z,e.x,e.z);if(this.freekick&&t.team!==this.freekick.team&&n<3.2){let i=(3.2-n)/3.2;t.want.set((t.pos.x-e.x)/Math.max(.1,n)*i*1.5,(t.pos.z-e.z)/Math.max(.1,n)*i*1.5)}else if(this.fleeFrom){let i=t.pos.x-this.fleeFrom.x,r=t.pos.z-this.fleeFrom.z,a=Math.hypot(i,r)||1;t.want.set(i/a,r/a),t.wantSprint=!0}else Ih(t,this,.016),t.hasBall&&t.want.set(0,0)}celebrateAI(t){if(t.want.set(0,0),t.wantSprint=!1,t===this.scorer&&t.state==="celebrate"){let n=this.def.halfW*.8-t.pos.z;Math.abs(n)>.6&&t.want.set(-t.dir*.25,Math.sign(n)*.9),t.wantSprint=!0}else if(this.scorer&&t.team===this.scorer.team&&t.state==="celebrate"&&!t.isGK){let e=this.scorer.pos.x-t.pos.x,n=this.scorer.pos.z-t.pos.z,i=Math.hypot(e,n);i>1.6&&t.want.set(e/i,n/i)}t.lookAt=this.scorer?this.scorer.pos:this.ball.pos}resolveCollisions(){let t=this.allPlayers;for(let n=0;n<t.length;n++){let i=t[n];if(!(!i.active||i.state==="fallen")){for(let r=n+1;r<t.length;r++){let a=t[r];if(!a.active||a.state==="fallen"||i.pullTarget===a||a.pullTarget===i)continue;let o=a.pos.x-i.pos.x,l=a.pos.z-i.pos.z,c=Math.hypot(o,l),h=i.radius+a.radius;if(c<h&&c>1e-4){let u=(h-c)/2,f=o/c,d=l/c;i.pos.x-=f*u,i.pos.z-=d*u,a.pos.x+=f*u,a.pos.z+=d*u}}for(let r of this.walkers){let a=i.pos.x-r.pos.x,o=i.pos.z-r.pos.z,l=Math.hypot(a,o),c=i.radius+r.radius;l<c&&l>1e-4&&(i.pos.x+=a/l*(c-l),i.pos.z+=o/l*(c-l))}}}let e=this.ctx.colliders.filter(n=>n.solid||n.tag==="wall"||n.tag==="pole");this.toktok&&e.push(this.toktok.collider);for(let n of t){if(!n.active&&n.state!=="leaving"&&n.state!=="returning"&&n.state!=="fetch")continue;let i=n.radius;for(let r of e){if(r.min.y>1.2)continue;let a=Vt(n.pos.x,r.min.x,r.max.x),o=Vt(n.pos.z,r.min.z,r.max.z),l=n.pos.x-a,c=n.pos.z-o,h=Math.hypot(l,c);if(h<i)if(h>1e-4)n.pos.x=a+l/h*i,n.pos.z=o+c/h*i;else{let u=[[r.min.x-i-n.pos.x,0],[r.max.x+i-n.pos.x,0],[0,r.min.z-i-n.pos.z],[0,r.max.z+i-n.pos.z]];u.sort((f,d)=>Math.hypot(...f)-Math.hypot(...d)),n.pos.x+=u[0][0],n.pos.z+=u[0][1]}}if(n.active){let r=this.ctx.bounds;n.pos.x=Vt(n.pos.x,r.minX,r.maxX),n.pos.z=Vt(n.pos.z,r.minZ,r.maxZ)}n.sync()}}updateBall(t,e){let n=this.ball,i=this.owner;if(i&&(!i.active||i.state==="fallen"||i.state==="nutmegged")&&this.loseBall(i,2),this.owner){let l=this.owner;if(l.state==="gkhold"||l.isGK&&l.anim.isPlaying("throw"))l.char.J.rHand.getWorldPosition(ke),l.char.J.lHand.getWorldPosition(ye),ke.add(ye).multiplyScalar(.5),l.fwd(ye),n.pos.set(ke.x+ye.x*.12,Math.max(n.r,ke.y),ke.z+ye.z*.12),n.vel.set(0,0,0);else{l.fwd(ye);let c=Math.hypot(l.vel.x,l.vel.z),u=.4+(c>1?Math.abs(Math.sin(l.anim.phase*.5))*.16:0)+Math.min(.15,c*.02),f=l.pos.x+ye.x*u,d=l.pos.z+ye.z*u,g=1-Math.exp(-22*t);n.pos.x+=(f-n.pos.x)*g,n.pos.z+=(d-n.pos.z)*g,n.pos.y=n.r,n.vel.set(l.vel.x+ye.x*.5,0,l.vel.z+ye.z*.5)}n.update(t,null,!0),e&&this.updateSteals(t);return}let r=this.dynColliders.length||this.toktok?[...this.ctx.colliders,...this.toktok?[this.toktok.collider]:[]]:this.ctx.colliders;if(n.update(t,r,!1),!e&&this.state!=="freekick"||(this.ballVsPeople(),!e))return;let a=null,o=1/0;for(let l of this.allPlayers){if(!l.active||l.cool.touch>0||l.state!=="play"&&l.state!=="dive"&&!(l.state==="kick"&&!l.pending)||this.reserved&&this.reserved.p!==l)continue;l.fwd(ye);let c=l.pos.x+ye.x*.28,h=l.pos.z+ye.z*.28,u=ze(c,h,n.pos.x,n.pos.z),f=l.isGK&&this.inOwnBox(l)?l.state==="dive"?1.25:.95:0,d=Math.max(Se.controlDist,f),g=f?2.3:.75;u<d&&n.pos.y<g&&u<o&&(o=u,a=l)}a&&this.touchBall(a)}inOwnBox(t){let e=this.ownGoal(t.team);return Math.abs(t.pos.x-e.x)<4.5&&Math.abs(t.pos.z)<e.hw+3}touchBall(t){let e=this.ball,n=Math.hypot(e.vel.x-t.vel.x,e.vel.z-t.vel.z);if(t.isGK&&this.inOwnBox(t)){let r=t.ctrl?.8:this.aiSkill(t),a=e.speed()>9&&e.lastKickTeam!==t.team;if(!a||ce(Vt(r*1.15-(e.speed()-12)*.04,.25,.95))){if(this.owner=t,this.pendingPass=null,e.lastTouch=t,e.lastKickTeam=t.team,t.gkCatch(),a){ft.play("save"),this.say(t,$t(ee.save),{color:"#ffd23f"});for(let o of this.npcs)o.cheer&&o.cheer(1.5)}t.ai.holdT=0;return}e.vel.x*=-.45,e.vel.z=e.vel.z*.5+st(-4,4),e.vel.y=Math.abs(e.vel.y)*.5+2,t.cool.touch=.5,e.lastTouch=t,ft.play("save"),this.say(t,"\u0635\u062F\u0651\u0647\u0627!",{color:"#ffd23f"});return}let i=Vt(1.25-(n-9)*.06*(1/t.mods.control),.35,1);if(n>9&&!ce(i)){e.vel.x=e.vel.x*-.35+t.vel.x*.5+st(-1.5,1.5),e.vel.z=e.vel.z*-.35+t.vel.z*.5+st(-1.5,1.5),e.vel.y=Math.abs(e.vel.y)*.3+.8,t.cool.touch=.35,e.lastTouch=t,ft.play("bounce",6);return}this.giveBall(t)}updateSteals(t){let e=this.owner;if(!(!e||e.state==="gkhold"||e.cool.steal>0))for(let n of this.teams[1-e.team]){if(!n.active||n.state!=="play"||n.cool.touch>0||n.pulledBy)continue;n.fwd(ye);let i=n.pos.x+ye.x*.3,r=n.pos.z+ye.z*.3;if(ze(i,r,this.ball.pos.x,this.ball.pos.z)>.68)continue;let o=n.ctrl?1:this.aiLevel(n.team).steal,l=Se.stealPerSec*o*(e.wantSprint?1.25:1)/(e.mods.control*(e.ctrl?1.15:1));if(Math.random()<l*t){this.owner=null,ft.play("pass",.5),this.giveBall(n),e.cool.touch=.5;return}}}ballVsPeople(){let t=this.ball,e=t.pos,n=(i,r,a,o,l)=>{if(e.y>o)return;let c=e.x-i,h=e.z-r,u=Math.hypot(c,h),f=a+t.r;if(u>=f||u<1e-4)return;let d=c/u,g=h/u;e.x=i+d*f,e.z=r+g*f;let x=t.vel.x*d+t.vel.z*g;x<0&&(t.vel.x-=1.5*x*d,t.vel.z-=1.5*x*g,l&&l(-x))};for(let i of this.walkers)n(i.pos.x,i.pos.z,i.radius,i.height,r=>{i.hitByBall(r),ft.play("bounce",r)});this.bike&&n(this.bike.pos.x,this.bike.pos.z,.5,2.2,i=>{i>3&&this.bike.hitByBall()});for(let i of this.animals)i.hit&&n(i.g.position.x,i.g.position.z,.6,1,r=>{r>2.5&&i.hit()});for(let i of this.allPlayers)i.active&&(i.state==="fallen"||i.state==="slide"||t.pos.y>.75&&t.pos.y<2&&i.cool.touch<=0&&!(i.isGK&&this.inOwnBox(i))&&ze(i.pos.x,i.pos.z,e.x,e.z)<.42&&(t.vel.x=t.vel.x*-.25+i.vel.x*.6,t.vel.z=t.vel.z*-.25+i.vel.z*.6,t.vel.y=Math.max(.5,t.vel.y*-.2),i.cool.touch=.3,t.lastTouch=i,t.lastKickTeam=i.team,ft.play("bounce",5)))}onSlide(t){ft.play("slide"),this.fx.puff(ke.set(t.pos.x,.1,t.pos.z),{n:4,size:.5,life:.7})}updateSlides(){let t=this.ball;for(let e of this.allPlayers){if(e.state!=="slide"||e.stateT<.05||e.stateT>.78)continue;e.fwd(ye);let n=e.pos.x+ye.x*.6,i=e.pos.z+ye.z*.6;if(Math.random()<.3&&this.fx.puff(ke.set(e.pos.x,.05,e.pos.z),{n:1,size:.45,life:.6,up:.3}),!e.slideTouchedBall&&ze(n,i,t.pos.x,t.pos.z)<.7&&t.pos.y<.55){if(e.slideTouchedBall=!0,e.slideHit.size===0&&(e.slideBallFirst=!0),this.owner){let r=this.owner;this.owner=null,r.cool.touch=.6}t.kick(ye.x*7+st(-2,2),1.2,ye.z*7+st(-2,2),e),e.cool.touch=.4,ft.play("kick",.6)}for(let r of this.allPlayers){if(r===e||!r.active||e.slideHit.has(r)||r.down||r.state==="gkhold"&&!1||ze(n,i,r.pos.x,r.pos.z)>.75)continue;e.slideHit.add(r);let a=r.team!==e.team&&!e.slideBallFirst;if(r.fall(),ft.play("thud"),this.after(.25,()=>ft.play("ouch")),this.rig.shake(.25,.4),this.fx.dizzy(()=>r.headPos(ke.set(0,0,0)).add(ye.set(0,-.6,0)),2.6),this.fx.puff(ke.set(r.pos.x,.15,r.pos.z),{n:6,size:.6}),r.team===e.team){this.say(r,"\u0625\u0646\u062A \u0628\u062A\u0643\u0639\u0628\u0644\u0646\u064A \u0623\u0646\u0627\u061F!");continue}if(this.addScandal(e.team,a?Se.scandalTackle:Se.scandalCleanTrip),this.after(.5,()=>this.say(r,$t(ee.hurt),{color:"#ffe0e0"})),a){e.stats.fouls++,this.stats.fouls[e.team]++;let o=this.nearestTo(r.pos,r.team,l=>l!==r)||r;this.say(o,$t(ee.foul),{color:"#ffd23f",big:!0});for(let l of this.npcs)l.cheer&&ce(.4)&&l.cheer(1);this.headmasterWatching&&this.expel(e),this.callFoul(r.team,r.pos,e,r)}}}}onPullStart(t,e){ft.play("rip"),this.say(e,$t(ee.pull),{color:"#ffe0e0"}),this.headmasterWatching&&this.expel(t);let n=new ot(new xe(.22,.12,1),new Gt({color:e.char.look.top.color,roughness:.9}));n.castShadow=!0,this.scene.add(n),this.stretch.set(t,{m:n,t:e})}onPullEnd(t,e,n){let i=this.stretch.get(t);i&&(this.scene.remove(i.m),this.stretch.delete(t)),n&&e.active&&(e.fall(2.2),ft.play("thud"),this.addScandal(t.team,15),this.stats.fouls[t.team]++,t.stats.fouls++,this.say(e,"\u0648\u0642\u0639\u0646\u064A \u0645\u0646 \u0627\u0644\u0641\u0627\u0646\u0644\u0629!",{color:"#ffe0e0"}),this.state==="play"&&this.callFoul(e.team,e.pos,t,e))}updatePulls(t){for(let e of this.allPlayers){if(!e.pullTarget)continue;let n=e.pullTarget;e.pullT+=t,this.addScandal(e.team,Se.scandalPullPerSec*t,!0);let i=ze(e.pos.x,e.pos.z,n.pos.x,n.pos.z);if(i>.9){let r=Math.min(1,(i-.9)*4*t*10);e.pos.x+=(n.pos.x-e.pos.x)/i*r*.2,e.pos.z+=(n.pos.z-e.pos.z)/i*r*.2}n.hasBall&&e.pullT>.7&&this.loseBall(n,1.5),(i>1.9||e.pullT>Se.pullMax||!n.active||n.down||e.down)&&e.releasePull(e.pullT>1.2&&ce(.35))}}updateStretch(){for(let[t,e]of this.stretch){t.char.J.rHand.getWorldPosition(ke),e.t.char.J.spine.getWorldPosition(ye),ye.y+=.25*e.t.char.scale;let n=ke.distanceTo(ye);e.m.position.copy(ke).add(ye).multiplyScalar(.5),e.m.lookAt(ye),e.m.scale.set(1,1,Math.max(.05,n))}}addScandal(t,e,n=!1){let i=this.scandal[t];this.scandal[t]=Math.min(100,this.scandal[t]+e),i<100&&this.scandal[t]>=100&&this.queue.push({type:ce(.5)?"fight":"mom",team:t}),!n&&e>10&&this.ui.scandalPulse(t)}callFoul(t,e,n,i){if(this.state!=="play")return;this.foulInfo={fouler:n,victim:i};let r=e.clone();this.after(.65,()=>{this.state==="play"&&this.startFreekick(t,r)})}startFreekick(t,e){let n=this.ctx.bounds,i=Vt(e.x,n.minX+1.2,n.maxX-1.2),r=Vt(e.z,n.minZ+1,n.maxZ-1);if(this.owner){let a=this.owner;this.owner=null,a.state==="gkhold"&&a.setState("play")}this.ball.place(i,r),this.freekick={team:t,x:i,z:r},this.setState("freekick"),ft.play("whistle");for(let a of this.allPlayers)a.pullTarget&&a.releasePull();this.queue.length&&this.runQueuedEvent()}updateFreekick(t){let e=this.freekick;if(this.state!=="freekick")return;let n=this.nearestTo(this.ball.pos,e.team,i=>!i.isGK&&i.state==="play");if(n){n.want.set(0,0);let i=n.dir;ke.set(e.x-i*.55,0,e.z);let r=ke.x-n.pos.x,a=ke.z-n.pos.z,o=Math.hypot(r,a);o>.2&&(n.want.set(r/o,a/o),n.wantSprint=o>3),n.lookAt=this.ball.pos}this.stateT>1.6&&!this.eventActive&&(this.setState("play"),this.freekick=null,n&&(n.place(e.x-n.dir*.45,e.z,n.dir>0?Math.PI/2:-Math.PI/2),this.giveBall(n),this.humanTeams[e.team]&&this.setControl(e.team,n)),ft.play("whistle"))}runQueuedEvent(){let t=this.queue.shift();if(!t)return;let e=t.team;t.type==="fight"?this.startFight(e):this.momCalls(e),this.scandal[e]=0}startFight(t){let e=this.foulInfo?.fouler?.active?this.foulInfo.fouler:this.teams[t].find(l=>l.active&&!l.isGK),n=this.foulInfo?.victim?.active?this.foulInfo.victim:this.nearestTo(e.pos,1-t,l=>!l.isGK);if(!e||!n)return;let i=ke.copy(e.pos).add(n.pos).multiplyScalar(.5).clone(),r=[this.nearestTo(i,t,l=>l!==e&&!l.isGK),this.nearestTo(i,1-t,l=>l!==n&&!l.isGK)].filter(Boolean),a=[e,n,...r];this.eventActive={type:"fight",t:0,who:a,center:i},this.setState("event"),this.stats.fights++,this.focusOverride=i,this.rig.zoomTarget=.78;for(let l of a)l.releasePull(),this.owner===l&&(this.owner=null),l.setState("hidden"),l.show(!1);this.fx.fight(i,4),ft.play("fight"),this.rig.shake(.18,3.5),this.ui.banner("\u062E\u0646\u0627\u0642\u0629!",`${e.name} \u0648${n.name} \u0627\u062A\u062E\u0627\u0646\u0642\u0648\u0627`,"fight");for(let l of this.npcs)l.cheer&&l.cheer(4);let o=this.npcs.filter(l=>l instanceof Cr);o.length&&this.say($t(o),$t(ee.fight),{color:"#fff"})}momCalls(t){let e=this.teams[t].filter(i=>i.active&&!i.isGK);if(e.length<=1){this.startFight(t);return}let n=this.foulInfo?.fouler&&e.includes(this.foulInfo.fouler)?this.foulInfo.fouler:$t(e);if(this.stats.momCalls++,this.mom)this.mom.call(n.name),this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.after(2.6,()=>{this.focusOverride=null});else{let i=this.ctx.doors[0]||new M(0,0,this.ctx.bounds.minZ);this.say({headPos:(r=new M)=>r.set(i.x,3.2,i.z)},ee.momCall(n.name),{color:"#ffe9f0",dur:3.6}),ft.play("mom")}this.ui.banner("\u0623\u0645\u0647 \u0646\u0627\u062F\u062A \u0639\u0644\u064A\u0647!",`${n.name} \u0644\u0627\u0632\u0645 \u064A\u0637\u0644\u0639 \u0627\u0644\u0628\u064A\u062A`,"mom"),this.after(1.5,()=>this.say(n,$t(ee.momCallOut))),this.sendAway(n,40,()=>this.ui.toast(ee.momBack(n.name)))}expel(t){!t.active||t.expelled||(t.expelled=!0,this.headmaster?.scold(t),this.ui.banner("\u0627\u062A\u0637\u0631\u062F!",ee.sentOff(t.name)+" (\u0627\u0644\u0646\u0627\u0638\u0631 \u0634\u0627\u0641\u0647)","red"),this.sendAway(t,45,()=>{t.expelled=!1,this.ui.toast(`${t.name} \u0631\u062C\u0639 \u0627\u0644\u0645\u0644\u0639\u0628`)}))}sendAway(t,e,n){if(t.releasePull(),this.owner===t&&this.loseBall(t,1),t.ctrl){let r=t.team;t.ctrl=null,t.setMarker(null),this.after(0,()=>this.switchNext(r))}let i=this.nearestDoor(t.pos);t.pending=null,t.anim.stop(),t.setState("leaving"),t.walkTo=i,t.onArrive=()=>{t.setState("out"),t.show(!1),this.after(e,()=>{t.place(i.x,i.z),t.show(!0),t.setState("returning"),t.walkTo=new M(i.x*.8,0,Vt(i.z,this.ctx.bounds.minZ+1,this.ctx.bounds.maxZ-1)),t.onArrive=()=>{t.setState("play"),n&&n()}})}}nearestDoor(t){let e=null,n=1/0;for(let i of this.ctx.doors){let r=ze(i.x,i.z,t.x,t.z);r<n&&(n=r,e=i)}return(!e||n>25)&&(e=new M(t.x,0,this.ctx.bounds.maxZ+2.5)),e.clone()}updateEvent(t){let e=this.eventActive;if(!e){this.setState("play");return}if(e.t+=t,e.type==="fight"&&e.t>4.2){this.ui.banner($t(ee.fightOver),"","small");for(let n of e.who){n.show(!0),n.setState("dazed",2.6),n.anim.play("dazed");let i=n;this.fx.dizzy(()=>i.headPos(ke.set(0,0,0)),2.6),n.pos.x+=st(-1,1),n.pos.z+=st(-1,1)}this.focusOverride=null,this.rig.zoomTarget=1,this.eventActive=null,this.setState("freekick"),this.stateT=.3}else e.type==="balcony"?e.t>4.2&&!this.ball.frozen&&this.endBallEvent():e.type==="window"?e.t>2.6&&(this.fleeFrom=null,this.focusOverride=null,this.eventActive=null,this.startFreekick(1-e.team,new M(e.pos.x*.7,0,0))):e.type==="roof"&&this.updateRoofFetch(e,t)}endBallEvent(){this.eventActive=null,this.focusOverride=null,this.setState("play")}checkGoal(){let t=this.ball.pos;for(let e of this.ctx.goals)if(!(!(e.type==="chalk"?Math.abs(t.x)>Math.abs(e.x)-this.ball.r-.08:Math.abs(t.x)>Math.abs(e.x)+(e.type==="frame"?.15:.05))||Math.sign(t.x)!==Math.sign(e.x))){if(Math.abs(t.z)<e.hw-.02&&t.y<e.h){let i=e.side>0?0:1;this.goalScored(i,e);return}this.lastShot&&this.time-this.lastShot.t<2.5&&this.lastShot.team===(e.side>0?0:1)&&Math.abs(t.z)<e.hw+2.5&&(this.lastShot=null,this.say(this.nearestTo(t,e.side>0?0:1)||this.ball,$t(ee.miss)),ft.play("ooh"))}}goalScored(t,e){this.score[t]++,this.concededTeam=1-t;let n=this.ball.lastTouch,i=n&&n.team===t?n:null,r=n&&n.team!==t;i&&i.stats.goals++,this.stats.goals.push({team:t,name:i?i.name:n?n.name:"\u061F",own:r,t:this.clock}),this.scorer=i||this.teams[t].find(o=>o.active&&!o.isGK)||null,this.owner=null,this.pendingPass=null,this.setState("goal");for(let o of this.allPlayers)o.releasePull();let a=e.type==="bricks"?ee.goalBricks:e.type==="slippers"?ee.goalSlippers:e.type==="chalk"?ee.goalChalk:[];this.ui.banner($t(ee.goal),r?`\u062C\u0648\u0646 \u0641\u064A \u0646\u0641\u0633\u0647! (${n.name})`:`${this.scorer?this.scorer.name:""} ${a.length?"\u2022 "+$t(a):""}`,"goal",t),ft.play("cheer"),ft.play("whistle"),this.rig.zoomTarget=.82,this.rig.shake(.2,.5),this.after(.5,()=>{this.ball.vel.multiplyScalar(.2)});for(let o of this.allPlayers)!o.active||o.state==="fallen"||(o===this.scorer?o.celebrate("airplane"):o.team===t?o.celebrate("jump"):o.celebrate("sad"));for(let o of this.npcs)o.cheer&&o.cheer(3.5);this.game.onEvent?.("goal",t)}checkSpecialBall(){let t=this.ball;if(this.mom)for(let e of this.ctx.balconies){let n=t.pos;if(n.x>e.min.x&&n.x<e.max.x&&n.y>e.min.y&&n.y<e.max.y&&n.z>e.min.z&&n.z<e.max.z&&this.mom.balc===e){this.ballOnBalcony();return}}this.ctx.ballOut&&this.ctx.ballOut(t.pos)&&t.pos.y>this.ctx.extras.parapet.h*.6&&this.ballOffRoof(),t.pos.y<-2&&this.ballOffRoof()}ballOnBalcony(){let t=this.ball;t.frozen=!0,t.vel.set(0,0,0),this.owner=null,this.setState("event"),this.eventActive={type:"balcony",t:0},this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.rig.zoomTarget=.85,this.ui.banner($t(ee.balcony),"","small"),ft.play("ooh"),this.after(.7,()=>this.mom.catchBall())}onBalconyReturn(){this.focusOverride=null,this.rig.zoomTarget=1,this.after(.3,()=>{this.state==="event"&&this.endBallEvent()})}onBallHit(t,e,n){if(t.tag==="post")ft.play(t.metal?"metal":"brick"),e>6&&this.say(this.ball.lastTouch||this.ball,t.metal?"\u0627\u0644\u0639\u0627\u0631\u0636\u0629!":"\u0627\u0644\u0637\u0648\u0628\u0629!");else if(t.tag==="wall"||t.tag==="obj"||t.tag==="balconyFloor")ft.play("wall",e);else if(t.tag==="toktok")ft.play("metal"),this.say({headPos:(i=new M)=>i.set(this.toktok.pos.x,2.6,this.toktok.pos.z)},"\u062D\u0627\u0633\u0628 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643 \u064A\u0627 \u0639\u0645!");else if(t.tag==="sheep"){let i=this.animals.find(r=>r.hit);i&&i.hit()}if(t.tag==="wall"&&e>9.5&&this.state==="play"){for(let i of this.ctx.windows)if(!i.broken&&!(Math.abs(n.z-i.z)>.4||n.x<i.x0-.05||n.x>i.x1+.05||n.y<i.y0-.05||n.y>i.y1+.05)){this.breakWindow(i);break}}}breakWindow(t){t.broken=!0;let e=t.mesh.material;e.map=wh(),e.color.set("#ffffff"),e.emissiveIntensity=0,e.needsUpdate=!0,this.fx.shatter(ke.set((t.x0+t.x1)/2,(t.y0+t.y1)/2,t.z+t.face*.1),t.face),ft.play("glass"),this.rig.shake(.3,.5),this.stats.windows++;let n=this.ball.lastKickTeam>=0?this.ball.lastKickTeam:0;this.addScandal(n,Se.scandalWindow);let i=new M((t.x0+t.x1)/2,t.y1+.6,t.z+t.face*.3);this.after(.4,()=>this.say({headPos:(r=new M)=>r.copy(i)},$t(ee.windowBreak),{color:"#ffe0e0",dur:3})),this.ui.banner("\u0627\u0644\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631!",$t(ee.run),"red"),this.owner=null,this.setState("event"),this.eventActive={type:"window",t:0,team:n,pos:i},this.fleeFrom=i;for(let r of this.allPlayers)r.active&&ce(.5)&&this.after(st(.2,.9),()=>this.say(r,$t(ee.run)))}ballOffRoof(){if(this.state!=="play")return;let t=this.ball,e=t.lastKickTeam>=0?t.lastKickTeam:0;t.frozen=!0,t.mesh.visible=!1,t.blob.visible=!1,t.place(0,0,-50),this.owner=null,this.setState("event");let n=this.nearestTo(this.ctx.doors[0]||new M,e,r=>!r.isGK&&r.state==="play")||this.teams[e][1];this.eventActive={type:"roof",t:0,team:e,fetcher:n,phase:0},this.ui.banner($t(ee.roofDrop),`${n.name} \u0646\u0627\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627`,"small"),ft.play("ooh"),n.ctrl&&(n.ctrl=null,n.setMarker(null),this.after(0,()=>this.switchNext(e)));let i=this.nearestDoor(n.pos);n.setState("fetch"),n.walkTo=i,n.onArrive=()=>{n.setState("fetched"),n.show(!1)},this.eventActive.door=i}updateRoofFetch(t){let e=t.fetcher;if(t.phase===0&&e.state==="fetched"&&(t.phase=1,t.t=0),t.phase===1&&t.t>3){t.phase=2,e.place(t.door.x,t.door.z),e.show(!0),e.setState("play"),this.say(e,$t(ee.roofBack));let n=this.ball;n.mesh.visible=!0,n.blob.visible=!0,n.frozen=!1,this.eventActive=null,this.startFreekick(1-t.team,new M(t.door.x+3,0,t.door.z-1))}}onHeadmaster(t){this.headmasterWatching=t,t&&(this.ui.banner($t(ee.headmaster),"\u0623\u064A \u0641\u0627\u0648\u0644 \u062F\u0644\u0648\u0642\u062A\u064A = \u0637\u0631\u062F!","warn"),ft.play("whistle")),this.ui.headmaster(t)}updateNPCs(t){for(let e of this.npcs)e.update(t);this.walkerT-=t,this.walkerT<=0&&this.ctx.walkerPaths.length&&this.walkers.length<3&&(this.walkerT=st(7,16),this.walkers.push(new To(this,$t(this.ctx.walkerPaths))));for(let e=this.walkers.length-1;e>=0;e--){let n=this.walkers[e];n.update(t),n.done&&(n.remove(),this.walkers.splice(e,1))}if(this.toktokT-=t,this.toktokT<=0&&!this.toktok&&this.state==="play"&&(this.toktok=new Ro(this,this.ctx.extras.toktok),this.ui.banner($t(ee.toktok),"","warn"),ft.play("horn"),ft.toktokMusic(!0)),this.toktok){this.toktok.update(t);for(let e of this.allPlayers){if(!e.active||e.ctrl)continue;let n=e.pos.z-this.toktok.pos.z,i=(e.pos.x-this.toktok.pos.x)*this.toktok.dir;i>-2&&i<6&&Math.abs(n)<2.2&&(e.want.y+=Math.sign(n||1)*1.2)}this.toktok.done&&(this.toktok.remove(),this.toktok=null,this.toktokT=st(60,100),ft.toktokMusic(!1))}this.bikeT-=t,this.bikeT<=0&&!this.bike&&(this.bike=new Ao(this,this.ctx.extras.bike.z)),this.bike&&(this.bike.update(t),this.bike.done&&(this.bike.remove(),this.bike=null,this.bikeT=st(35,60)))}onFootstep(t,e){this.opts.mapId==="yard"&&e>.6&&Math.random()<.35&&this.fx.puff(ke.set(t.pos.x,.05,t.pos.z),{n:1,size:.35,life:.5,up:.2,opacity:.45})}say(t,e,n={}){this.ui.bubble(t,e,n)}endMatch(){if(this.state==="end")return;this.setState("end"),this.owner=null,ft.play("whistle",3);let[t,e]=this.score,n=t>e?0:e>t?1:-1;this.winner=n;for(let i of this.allPlayers)i.releasePull(),!(!i.active||i.state==="fallen")&&(i.setState("celebrate"),n!==-1&&i.anim.play(i.team===n?"jump":"sad"));this.scorer=null,this.ui.banner("\u062E\u0644\u0635 \u0627\u0644\u0645\u0627\u062A\u0634!",`${this.teamDef(0).short} ${Ae(this.score[0])} \u2022 ${this.teamDef(1).short} ${Ae(this.score[1])}`,"end"),ft.toktokMusic(!1)}dispose(){this.disposed=!0,ft.toktokMusic(!1),ft.stopAmbience(),this.fx.clear(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.ui.matchEnd()}};var wt=(s,t=document)=>t.querySelector(s),on=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Nn=new M,Ir=(s,t)=>`<span>${Ae(s)}</span><i>-</i><span>${Ae(t)}</span>`,pf='<svg viewBox="0 0 100 100" class="ballsvg"><circle cx="50" cy="50" r="46" fill="#f4f1e8" stroke="#1b1b1b" stroke-width="4"/><polygon points="50,30 67,42 61,62 39,62 33,42" fill="#1b1b1b"/><path d="M50 30 L50 6 M67 42 L89 34 M61 62 L74 84 M39 62 L26 84 M33 42 L11 34" stroke="#1b1b1b" stroke-width="4"/></svg>',Fo=class{constructor(t){this.game=t,this.root=wt("#ui"),this.bubbles=[],this.tags=new Map,this.screens={},this.build()}build(){let t=this.root;t.innerHTML=`
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
    `,wt(".pausebtn",t).onclick=()=>this.game.togglePause(),this.hudEl=wt("#hud",t),this.bubbleLayer=wt("#bubbles",t),this.screenRoot=wt("#screens",t),this.makeScreens()}makeScreens(){let t=this.screenRoot,e=(o,l)=>{let c=on("div","screen hidden",l);return c.id=o,t.appendChild(c),this.screens[o]=c,c};e("menu",`
      <div class="logo">${pf}<h1>\u0645\u0627\u062A\u0634 \u0627\u0644\u062D\u0627\u0631\u0629</h1><p>\u0643\u0648\u0631\u0629 \u0634\u0648\u0627\u0631\u0639.. \u0628\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u062D\u062A\u0629</p></div>
      <div class="menu-btns">
        <button data-a="quick" class="big">\u26BD \u0645\u0627\u062A\u0634 \u0633\u0631\u064A\u0639</button>
        <button data-a="tourney">\u{1F3C6} \u0627\u0644\u0628\u0637\u0648\u0644\u0629: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</button>
        <button data-a="versus">\u{1F465} \u0627\u062A\u0646\u064A\u0646 \u0639\u0644\u0649 \u0643\u064A\u0628\u0648\u0631\u062F \u0648\u0627\u062D\u062F</button>
        <button data-a="controls">\u{1F3AE} \u0627\u0644\u062A\u062D\u0643\u0645</button>
        <button data-a="settings">\u2699\uFE0F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
      </div>
      <div class="foot">\u0643\u0644 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A \u0645\u0639\u0645\u0648\u0644\u0629 \u0628\u0627\u0644\u0643\u0648\u062F \u2022 \u0627\u0644\u0639\u0628 \u0628\u0627\u0644\u0643\u064A\u0628\u0648\u0631\u062F \u0623\u0648 \u0627\u0644\u062F\u0631\u0627\u0639 \u0623\u0648 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</div>
    `).querySelectorAll("button").forEach(o=>o.onclick=()=>{ft.init(),ft.play("click"),this.menuAction(o.dataset.a)});let i=e("setup",`
      <div class="panel wide">
        <h2 class="ttl">\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F</h2>
        <div class="sec"><h3>\u0627\u0644\u0645\u0643\u0627\u0646</h3><div class="maps"></div></div>
        <div class="row">
          <div class="sec"><h3>\u0627\u0644\u0648\u0642\u062A</h3><div class="seg" data-k="time"><button data-v="day">\u2600\uFE0F \u0627\u0644\u0636\u0647\u0631</button><button data-v="night">\u{1F319} \u0628\u0627\u0644\u0644\u064A\u0644</button></div></div>
          <div class="sec"><h3>\u0627\u0644\u0635\u0639\u0648\u0628\u0629</h3><div class="seg" data-k="diff">${Object.entries(Ar).map(([o,l])=>`<button data-v="${o}">${l.name}</button>`).join("")}</div></div>
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
    `);this.setupSel={map:"alley",time:"day",diff:"normal",rule:"t180",home:"home",away:"away",versus:!1};let r=wt(".maps",i);vo.forEach(o=>{let l=Vi[o],c=on("button","mapcard",`<div class="mc-art mc-${o}"></div><b>${l.name}</b><small>${l.desc}</small><em>${Ae(l.teamSize)} \xD7 ${Ae(l.teamSize)}</em>`);c.dataset.v=o,c.onclick=()=>{ft.play("click"),this.setupSel.map=o,this.refreshSetup()},r.appendChild(c)}),i.querySelectorAll(".seg").forEach(o=>o.querySelectorAll("button").forEach(l=>l.onclick=()=>{ft.play("click"),this.setupSel[o.dataset.k]=l.dataset.v,this.refreshSetup()})),i.querySelectorAll(".teams").forEach(o=>{Object.entries(ni).forEach(([l,c])=>{let h=on("button","teambtn",`<span style="background:${c.ui}"></span>${c.name}`);h.dataset.v=l,h.onclick=()=>{ft.play("click");let u=o.dataset.k==="home"?"away":"home";this.setupSel[u]===l&&(this.setupSel[u]=this.setupSel[o.dataset.k]),this.setupSel[o.dataset.k]=l,this.refreshSetup()},o.appendChild(h)})}),wt(".back",i).onclick=()=>{ft.play("click"),this.show("menu")},wt(".go",i).onclick=()=>{ft.play("click"),this.game.startFromSetup(this.setupSel)},e("controls",`
      <div class="panel wide">
        <h2 class="ttl">\u0627\u0644\u062A\u062D\u0643\u0645</h2>
        <div class="ctrl-grid">
          <div class="ccard"><h3>\u0644\u0627\u0639\u0628 \u0648\u0627\u062D\u062F</h3>
            <table>
              <tr><td><kbd>\u2191</kbd><kbd>\u2193</kbd><kbd>\u2190</kbd><kbd>\u2192</kbd></td><td>\u062C\u0631\u064A</td></tr>
              <tr><td><kbd>A</kbd></td><td>\u0628\u0627\u0635\u0629 (\u0648\u0645\u0646 \u063A\u064A\u0631 \u0643\u0648\u0631\u0629: \u0627\u0637\u0644\u0628 \u0627\u0644\u0643\u0648\u0631\u0629)</td></tr>
              <tr><td><kbd>S</kbd></td><td>\u0634\u0648\u0637\u0629 (\u062F\u0648\u0633 \u0643\u062A\u064A\u0631 = \u0623\u0642\u0648\u0649)</td></tr>
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
              <tr><td>\u063A\u064A\u0651\u0631</td><td><kbd>Q</kbd></td><td><kbd>Enter</kbd></td></tr>
            </table></div>
          <div class="ccard"><h3>\u0627\u0644\u062F\u0631\u0627\u0639 (Gamepad)</h3>
            <table>
              <tr><td>\u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0627\u0644\u0634\u0645\u0627\u0644</td><td>\u062C\u0631\u064A</td></tr>
              <tr><td><kbd>A</kbd></td><td>\u0628\u0627\u0635\u0629</td></tr><tr><td><kbd>X</kbd></td><td>\u0634\u0648\u0637\u0629</td></tr>
              <tr><td><kbd>B</kbd></td><td>\u0643\u0639\u0628\u0644\u0629</td></tr><tr><td><kbd>LB</kbd> / <kbd>LT</kbd></td><td>\u0634\u062F\u0651</td></tr>
              <tr><td><kbd>Y</kbd></td><td>\u0643\u0648\u0628\u0631\u064A</td></tr><tr><td><kbd>RT</kbd></td><td>\u0633\u0628\u0631\u0646\u062A</td></tr><tr><td><kbd>RB</kbd></td><td>\u063A\u064A\u0651\u0631</td></tr>
            </table>
            <p class="note">\u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0647\u062A\u0644\u0627\u0642\u064A \u0627\u0633\u062A\u064A\u0643 \u0648\u0632\u0631\u0627\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.</p></div>
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
      </div>`),wt("#controls .back").onclick=()=>{ft.play("click"),this.show(this.controlsReturn||"menu")},e("settings",`
      <div class="panel">
        <h2 class="ttl">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</h2>
        <div class="sec"><h3>\u062C\u0648\u062F\u0629 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A</h3><div class="seg" data-k="quality"><button data-v="high">\u0639\u0627\u0644\u064A\u0629</button><button data-v="medium">\u0645\u062A\u0648\u0633\u0637\u0629</button><button data-v="low">\u062E\u0641\u064A\u0641\u0629 (\u0644\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0636\u0639\u064A\u0641\u0629)</button></div></div>
        <div class="sec"><h3>\u0627\u0644\u0635\u0648\u062A</h3><input type="range" min="0" max="100" class="vol"><label class="chk"><input type="checkbox" class="mute"> \u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A</label></div>
        <div class="sec"><h3>\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u0632\u0631\u0627\u064A\u0631 \u062A\u062D\u062A</h3><div class="seg" data-k="hints"><button data-v="on">\u062A\u0638\u0647\u0631</button><button data-v="off">\u062A\u0633\u062A\u062E\u0628\u0649</button></div></div>
        <div class="actions"><button class="back big">\u062A\u0645\u0627\u0645</button></div>
      </div>`);let a=this.screens.settings;a.querySelectorAll(".seg").forEach(o=>o.querySelectorAll("button").forEach(l=>l.onclick=()=>{ft.play("click"),this.game.setSetting(o.dataset.k,l.dataset.v),this.refreshSettings()})),wt(".vol",a).oninput=o=>this.game.setSetting("volume",o.target.value/100),wt(".mute",a).onchange=o=>this.game.setSetting("muted",o.target.checked),wt(".back",a).onclick=()=>{ft.play("click"),this.show(this.settingsReturn||"menu")},e("pause",`
      <div class="panel small">
        <h2 class="ttl">\u0627\u0633\u062A\u0631\u0627\u062D\u0629</h2>
        <div class="menu-btns">
          <button data-a="resume" class="big">\u0643\u0645\u0651\u0644</button>
          <button data-a="restart">\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0627\u062A\u0634 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644</button>
          <button data-a="controls">\u0627\u0644\u062A\u062D\u0643\u0645</button>
          <button data-a="settings">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
          <button data-a="quit">\u0627\u062E\u0631\u062C \u0644\u0644\u0642\u0627\u0626\u0645\u0629</button>
        </div>
      </div>`),this.screens.pause.querySelectorAll("button").forEach(o=>o.onclick=()=>{ft.play("click"),this.pauseAction(o.dataset.a)}),e("result",'<div class="panel"><div class="res"></div><div class="actions"></div></div>'),e("tourney",'<div class="panel wide"><h2 class="ttl">\u{1F3C6} \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</h2><div class="tinfo"></div><div class="ladder"></div><div class="actions"></div></div>'),e("shop",'<div class="panel"><h2 class="ttl">\u{1F6D2} \u0645\u062D\u0644 \u0639\u0645 \u0633\u064A\u062F</h2><div class="money"></div><div class="items"></div><div class="actions"><button class="back big">\u062E\u0644\u0635\u062A</button></div></div>'),wt("#shop .back").onclick=()=>{ft.play("click"),this.showTourney()},e("loading",`<div class="loading">${pf}<p>\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u062D\u0627\u0631\u0629...</p></div>`)}show(t){for(let[e,n]of Object.entries(this.screens))n.classList.toggle("hidden",e!==t);this.current=t,t==="setup"&&this.refreshSetup(),t==="settings"&&this.refreshSettings()}hideScreens(){this.show(null)}menuAction(t){t==="quick"&&(this.setupSel.versus=!1,wt("#setup .ttl").textContent="\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F",this.show("setup")),t==="versus"&&(this.setupSel.versus=!0,wt("#setup .ttl").textContent="\u0627\u062A\u0646\u064A\u0646 \u0642\u0635\u0627\u062F \u0628\u0639\u0636",this.show("setup")),t==="tourney"&&this.showTourney(),t==="controls"&&(this.controlsReturn="menu",this.show("controls")),t==="settings"&&(this.settingsReturn="menu",this.show("settings"))}pauseAction(t){t==="resume"&&this.game.togglePause(!1),t==="restart"&&this.game.restartMatch(),t==="quit"&&this.game.quitToMenu(),t==="controls"&&(this.controlsReturn="pause",this.show("controls")),t==="settings"&&(this.settingsReturn="pause",this.show("settings"))}refreshSetup(){let t=this.setupSel,e=this.screens.setup;e.querySelectorAll(".mapcard").forEach(n=>n.classList.toggle("on",n.dataset.v===t.map)),e.querySelectorAll(".seg").forEach(n=>n.querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.v===t[n.dataset.k]))),e.querySelectorAll(".teams").forEach(n=>n.querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.v===t[n.dataset.k]))),wt('.seg[data-k="diff"]',e).parentElement.style.display=t.versus?"none":"",e.querySelectorAll(".teams")[0].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0623\u0648\u0644":"\u0641\u0631\u064A\u0642\u0643",e.querySelectorAll(".teams")[1].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u062A\u0627\u0646\u064A":"\u0627\u0644\u062E\u0635\u0645"}refreshSettings(){let t=this.game.settings,e=this.screens.settings;e.querySelectorAll(".seg").forEach(n=>n.querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.v===String(t[n.dataset.k])))),wt(".vol",e).value=Math.round(t.volume*100),wt(".mute",e).checked=!!t.muted}showTourney(){let t=this.game.tourney,e=this.screens.tourney;wt(".tinfo",e).innerHTML=`<div class="money">\u{1F4B0} ${Ae(t.money)} \u062C\u0646\u064A\u0647</div>${t.s.done?'<div class="champ">\u{1F3C6} \u0625\u0646\u062A\u0648\u0627 \u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062D\u062A\u0629! \u0643\u0633\u0628\u062A\u0648\u0627 \u0627\u0644\u0643\u0627\u0633!</div>':"<p>\u0627\u0643\u0633\u0628 \u0627\u0644\u062E\u0645\u0633 \u0645\u0627\u062A\u0634\u0627\u062A \u0639\u0634\u0627\u0646 \u062A\u0627\u062E\u062F \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629. \u0627\u0644\u062A\u0639\u0627\u062F\u0644 \u064A\u0639\u0646\u064A \u062A\u0639\u064A\u062F \u0627\u0644\u0645\u0627\u062A\u0634.</p>"}`;let n=wt(".ladder",e);n.innerHTML="",zs.forEach((l,c)=>{let h=t.s.results[c],u=c<t.stage?"done":c===t.stage&&!t.s.done?"next":t.s.done?"done":"locked",f=on("div",`rung ${u}`,`
        <div class="rn">${Ae(c+1)}</div>
        <div class="ri"><b>${l.title}</b><small>${Vi[l.map].name} \u2022 ${l.time==="night"?"\u0628\u0627\u0644\u0644\u064A\u0644":"\u0627\u0644\u0636\u0647\u0631"} \u2022 \u0642\u0635\u0627\u062F ${ni[l.opp].name}</small></div>
        <div class="rr">${h?Ir(h.score[0],h.score[1]):u==="next"?"\u0627\u0644\u062C\u0627\u064A":"\u{1F512}"}</div>`);n.appendChild(f)});let i=wt(".actions",e);i.innerHTML="";let r=on("button","back","\u0631\u062C\u0648\u0639");r.onclick=()=>{ft.play("click"),this.show("menu")};let a=on("button","","\u{1F6D2} \u0627\u0644\u0645\u062D\u0644");if(a.onclick=()=>{ft.play("click"),this.showShop()},i.append(r,a),!t.s.done){let l=on("button","big go","\u0627\u0644\u0639\u0628 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A");l.onclick=()=>{ft.play("click"),this.game.startTourneyMatch()},i.append(l)}let o=on("button","danger","\u0627\u0628\u062F\u0623 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644");o.onclick=()=>{confirm("\u0645\u062A\u0623\u0643\u062F\u061F \u0647\u062A\u062E\u0633\u0631 \u0643\u0644 \u0627\u0644\u062A\u0642\u062F\u0645 \u0648\u0627\u0644\u0641\u0644\u0648\u0633.")&&(t.reset(),this.showTourney())},i.append(o),this.show("tourney")}showShop(){let t=this.game.tourney,e=this.screens.shop;wt(".money",e).innerHTML=`\u{1F4B0} \u0645\u0639\u0627\u0643 ${Ae(t.money)} \u062C\u0646\u064A\u0647`;let n=wt(".items",e);n.innerHTML="",_o.forEach(i=>{let r=t.owned(i.id),a=!i.consumable&&r>=i.max,o=on("div","item"+(a?" sold":""),`<div><b>${i.name}</b><small>${i.desc}</small></div><button ${a||t.money<i.price?"disabled":""}>${a?"\u0627\u0634\u062A\u0631\u064A\u062A\u0647 \u2713":Ae(i.price)+" \u062C\u0646\u064A\u0647"}</button>`);i.consumable&&t.s.foul&&(o.querySelector("small").textContent+=` (\u0645\u0639\u0627\u0643 ${Ae(t.s.foul)})`),o.querySelector("button").onclick=()=>{t.buy(i.id)&&(ft.play("coin"),this.showShop())},n.appendChild(o)}),this.show("shop")}matchStart(t){if(t.opts.demo){this.hudEl.classList.add("hidden");return}this.hudEl.classList.remove("hidden");let e=this.hudEl,n=t.teamDef(0),i=t.teamDef(1);wt(".sb-home .nm",e).textContent=n.short,wt(".sb-away .nm",e).textContent=i.short,wt(".sb-home .sw",e).style.background=n.ui,wt(".sb-away .sw",e).style.background=i.ui,wt(".m0 small",e).textContent=n.short,wt(".m1 small",e).textContent=i.short,wt(".m0",e).style.setProperty("--tc",n.ui),wt(".m1",e).style.setProperty("--tc",i.ui),wt(".mapname b",e).textContent=t.def.name,wt(".mapname small",e).textContent=t.night?"\u0628\u0627\u0644\u0644\u064A\u0644 \u2022 \u0627\u0644\u0643\u0634\u0627\u0641\u0627\u062A \u0628\u062A\u0631\u0639\u0634":"\u0627\u0644\u0636\u0647\u0631",wt(".hm",e).classList.add("hidden");let r=t.controllers[0]&&t.controllers[1];wt(".keys",e).innerHTML=r?"":`
      <span><kbd>\u2191\u2193\u2190\u2192</kbd>\u062C\u0631\u064A</span><span><kbd>A</kbd>\u0628\u0627\u0635\u0629</span><span><kbd>S</kbd>\u0634\u0648\u0637\u0629</span>
      <span class="hot"><kbd>D</kbd>\u0643\u0639\u0628\u0644\u0629</span><span class="hot"><kbd>F</kbd>\u0634\u062F\u0651</span><span><kbd>W</kbd>\u0643\u0648\u0628\u0631\u064A</span>
      <span><kbd>Shift</kbd>\u0633\u0628\u0631\u0646\u062A</span><span><kbd>Space</kbd>\u063A\u064A\u0651\u0631</span>`,wt(".keys",e).style.display=this.game.settings.hints==="off"||this.game.touch?"none":"";for(let a=0;a<2;a++)wt(`.w${a}`,e).classList.toggle("hidden",!t.controllers[a]);this.lastScore=[-1,-1]}matchEnd(){this.hudEl.classList.add("hidden");for(let t of this.bubbles)t.el.remove();this.bubbles=[],wt("#banner").classList.add("hidden")}controlChanged(t,e){let n=wt(`.w${t} b`,this.hudEl);n&&(n.textContent=`${e.name} (${Ae(e.number)})`)}hud(t,e){if(this.updateBubbles(t,e),t.opts.demo)return;let n=this.hudEl;if(t.score[0]!==this.lastScore[0]||t.score[1]!==this.lastScore[1]){if(wt(".s0",n).textContent=Ae(t.score[0]),wt(".s1",n).textContent=Ae(t.score[1]),this.lastScore[0]>=0){let i=wt(".sb-score",n);i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}this.lastScore=[...t.score]}wt(".sb-clock",n).textContent=t.opts.rule.type==="time"?Dd(t.clock):`\u0623\u0648\u0644 \u0648\u0627\u062D\u062F \u064A\u062C\u064A\u0628 ${Ae(t.opts.rule.n)}`;for(let i=0;i<2;i++){let r=t.scandal[i],a=wt(`.m${i} .bar i`,n);a.style.width=r+"%",wt(`.m${i}`,n).classList.toggle("hot",r>75);let o=t.teams[i].find(l=>l.ctrl);o&&(wt(`.w${i} .stam i`,n).style.width=Math.round(o.stamina*100)+"%")}for(let i=0;i<2;i++){let r=t.teams[i].find(a=>a.ctrl);this.tag(`ctrl${i}`,r&&r.active&&r.root.visible?r:null,r?r.name:"",t.controllers[i]?.color,t)}}tag(t,e,n,i,r){let a=this.tags.get(t);if(!e){a&&(a.style.display="none");return}a||(a=on("div","nametag"),this.bubbleLayer.appendChild(a),this.tags.set(t,a)),a.style.display="",a.textContent!==n&&(a.textContent=n),a.style.color=i||"#ffd23f",e.headPos(Nn),Nn.y+=.45;let o=this.project(Nn,r);if(!o){a.style.display="none";return}a.style.transform=`translate(${o.x}px, ${o.y}px) translate(-50%, -100%)`}project(t,e){let n=e.camera;if(Nn.copy(t).project(n),Nn.z>1)return null;let i=this.game.width,r=this.game.height;return{x:(Nn.x*.5+.5)*i,y:(-Nn.y*.5+.5)*r}}bubble(t,e,{color:n="#fff",dur:i=2.2,big:r=!1,delay:a=0}={}){if(!t)return;for(let l of this.bubbles)l.who===t&&(l.t=l.dur);let o=on("div","bubble"+(r?" big":""),e);o.style.background=n,o.style.setProperty("--bc",n),o.style.opacity="0",this.bubbleLayer.appendChild(o),this.bubbles.push({el:o,who:t,t:-a,dur:i})}updateBubbles(t,e){for(let n=this.bubbles.length-1;n>=0;n--){let i=this.bubbles[n];if(i.t+=e,i.t>=i.dur){i.el.remove(),this.bubbles.splice(n,1);continue}if(i.t<0)continue;let r=i.who;if(r.headPos)r.headPos(Nn);else if(r.pos)Nn.set(r.pos.x,1.2,r.pos.z);else continue;Nn.y+=.35;let a=this.project(Nn,t);if(!a){i.el.style.opacity="0";continue}let o=Math.min(1,i.t*8,(i.dur-i.t)*4);i.el.style.opacity=String(o);let l=.85+Math.min(1,i.t*10)*.15;i.el.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%, -100%) scale(${l})`}}banner(t,e="",n="",i=-1){let r=wt("#banner");r.className="show "+n,wt(".bt",r).textContent=t,wt(".bs",r).textContent=e,i>=0&&this.game.match?r.style.setProperty("--tc",this.game.match.teamColor(i)):r.style.removeProperty("--tc"),r.offsetWidth,r.classList.add("anim"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>r.classList.add("hidden"),n==="goal"?3200:n==="end"?4e3:2200)}toast(t){let e=wt("#toast");e.textContent=t,e.className="show",clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.classList.add("hidden"),2600)}power(t){let e=wt(".power",this.hudEl);e.classList.toggle("hidden",t<=0),wt("i",e).style.width=Math.round(t*100)+"%",e.classList.toggle("max",t>=.95)}scandalPulse(t){let e=wt(`.m${t}`,this.hudEl);e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse")}headmaster(t){wt(".hm",this.hudEl).classList.toggle("hidden",!t)}showResult(t){let e=this.screens.result,n=t.teamDef(0),i=t.teamDef(1),r=t.winner,a=t.controllers[0]&&t.controllers[1],o=r===-1?"\u062A\u0639\u0627\u062F\u0644!":a?`${t.teamDef(r).short} \u0643\u0633\u0628\u0648\u0627!`:r===0?"\u0643\u0633\u0628\u062A! \u{1F389}":"\u062E\u0633\u0631\u062A \u0627\u0644\u0645\u0631\u0629 \u062F\u064A",l=null;t.opts.tourney&&(l=this.game.tourney.record(t));let c=t.stats.goals.map(u=>`<li style="--tc:${t.teamColor(u.team)}">\u26BD ${u.name}${u.own?" (\u0641\u064A \u0646\u0641\u0633\u0647)":""}</li>`).join("")||"<li>\u0645\u0641\u064A\u0634 \u062C\u0648\u0627\u0646\u0627\u062A</li>";wt(".res",e).innerHTML=`
      <h2 class="ttl">${o}</h2>
      <div class="final"><span style="--tc:${n.ui}">${n.name}</span><b>${Ir(t.score[0],t.score[1])}</b><span style="--tc:${i.ui}">${i.name}</span></div>
      <ul class="scorers">${c}</ul>
      <div class="stats">
        <div><b>${Ir(t.stats.fouls[0],t.stats.fouls[1])}</b><small>\u0641\u0627\u0648\u0644\u0627\u062A</small></div>
        <div><b>${Ir(t.stats.nutmegs[0],t.stats.nutmegs[1])}</b><small>\u0643\u0628\u0627\u0631\u064A</small></div>
        <div><b>${Ir(t.stats.shots[0],t.stats.shots[1])}</b><small>\u0634\u0648\u0637</small></div>
        <div><b>${Ae(t.stats.fights)}</b><small>\u062E\u0646\u0627\u0642\u0627\u062A</small></div>
        <div><b>${Ae(t.stats.momCalls)}</b><small>\u0623\u0645\u0647 \u0646\u0627\u062F\u062A</small></div>
        <div><b>${Ae(t.stats.windows)}</b><small>\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631</small></div>
      </div>
      ${l?`<div class="earn">\u{1F4B0} \u0643\u0633\u0628\u062A ${Ae(l.earn)} \u062C\u0646\u064A\u0647 ${l.result==="win"?"":l.result==="draw"?"\u2022 \u062A\u0639\u0627\u062F\u0644 \u064A\u0639\u0646\u064A \u062A\u0639\u064A\u062F \u0627\u0644\u0645\u0627\u062A\u0634":"\u2022 \u0644\u0627\u0632\u0645 \u062A\u0643\u0633\u0628 \u0639\u0634\u0627\u0646 \u062A\u0643\u0645\u0644"}</div>`:""}`;let h=wt(".actions",e);if(h.innerHTML="",t.opts.tourney){let u=on("button","big","\u0643\u0645\u0651\u0644 \u0627\u0644\u0628\u0637\u0648\u0644\u0629");u.onclick=()=>{ft.play("click"),this.game.quitToMenu(!0)},h.append(u)}else{let u=on("button","big","\u0645\u0627\u062A\u0634 \u062A\u0627\u0646\u064A");u.onclick=()=>{ft.play("click"),this.game.restartMatch()};let f=on("button","","\u0627\u0644\u0642\u0627\u0626\u0645\u0629");f.onclick=()=>{ft.play("click"),this.game.quitToMenu()},h.append(u,f)}this.show("result")}};var mf="matsh-elhara-tourney-v1";function zh(){return{stage:0,money:0,owned:{},foul:0,results:[],done:!1}}var Oo=class{constructor(){this.s=zh();try{let t=localStorage.getItem(mf);t&&(this.s=Object.assign(zh(),JSON.parse(t)))}catch{}}save(){try{localStorage.setItem(mf,JSON.stringify(this.s))}catch{}}reset(){this.s=zh(),this.save()}get stage(){return this.s.stage}get money(){return this.s.money}get list(){return zs}current(){return zs[this.s.stage]}owned(t){return this.s.owned[t]||0}buy(t){let e=_o.find(n=>n.id===t);return!e||this.s.money<e.price||!e.consumable&&this.owned(t)>=e.max?!1:(this.s.money-=e.price,e.consumable?this.s.foul=(this.s.foul||0)+1:this.s.owned[t]=(this.s.owned[t]||0)+1,this.save(),!0)}mods(){let t=this.s.owned,e=this.s.foul>0;return{speed:(t.shoes?1.06:1)*(e?1.03:1),shot:t.ball?1.1:1,control:t.ball?1.2:1,stamina:(t.kits?1.2:1)*(e?1.25:1),kits:!!t.kits,shoes:!!t.shoes}}record(t){let[e,n]=t.score,i=e*Ns.goal+t.stats.nutmegs[0]*Ns.nutmeg,r="draw";return e>n?(i+=Ns.win,r="win"):e===n?i+=Ns.draw:r="lose",n===0&&(i+=Ns.cleanSheet),this.s.money+=i,this.s.foul>0&&this.s.foul--,this.s.results[this.s.stage]={score:[e,n],result:r},r==="win"&&(this.s.stage++,this.s.stage>=zs.length&&(this.s.done=!0)),this.save(),{earn:i,result:r}}};var Fh="matsh-elhara-settings-v1",Oh=class{constructor(){this.settings={quality:"high",volume:.8,muted:!1,hints:"on"};try{Object.assign(this.settings,JSON.parse(localStorage.getItem(Fh)||"{}"))}catch{}Nh()&&!localStorage.getItem?.(Fh)&&(this.settings.quality="medium"),ft.setVolume(this.settings.volume),ft.setMuted(this.settings.muted),this.container=document.getElementById("view"),this.renderer=new ka({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ye,this.renderer.toneMapping=yr,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eh,this.container.appendChild(this.renderer.domElement),this.camera=new Ve(40,16/9,.1,900),this.ui=new Fo(this),this.tourney=new Oo,this.touch=Nh(),this.touchPad=this.touch?new zo(document.getElementById("touch")):null,this.touchPad&&this.touchPad.show(!1),this.match=null,this.paused=!1,this.clock=new Cs,window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>{(e.code==="Escape"||e.code==="KeyP")&&this.match&&!this.match.opts.demo&&this.match.state!=="end"&&this.togglePause()});let t=()=>ft.init();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),document.addEventListener("visibilitychange",()=>{document.hidden&&this.match&&!this.match.opts.demo&&!this.paused&&this.togglePause(!0)}),this.resize()}get quality(){return this.settings.quality}async init(){this.ui.show("loading");try{await Promise.race([Promise.all(["400","700","900"].map(t=>document.fonts.load(`${t} 20px Cairo`,"\u0639\u0631\u0628\u064A"))),new Promise(t=>setTimeout(t,2500))])}catch{}this.startDemo(),this.ui.show("menu"),this.loop(),document.body.dataset.ready="1"}debugStep(t,e=1/60){let n=Math.round(t/e);for(let i=0;i<n;i++)this.match&&this.match.update(e)}setupComposer(){let t=this.match&&this.match.night,e=this.quality,n=Math.min(window.devicePixelRatio||1,e==="high"?2:e==="medium"?1.5:1);if(this.renderer.setPixelRatio(n),this.renderer.shadowMap.enabled=e!=="low"||!t,this.composer=null,t&&e!=="low"&&this.match){let i=this.renderer.getDrawingBufferSize(new Q),r=new Ge(i.x,i.y,{type:mn,samples:e==="high"?4:0}),a=new io(this.renderer,r);a.addPass(new so(this.match.scene,this.camera)),a.addPass(new Is(new Q(i.x,i.y),.5,.5,.9)),a.addPass(new ro),this.composer=a}}resize(){let t=window.innerWidth,e=window.innerHeight;this.width=t,this.height=e,this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.fov=t/e<1.2?55:40,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(t,e)}setSetting(t,e){this.settings[t]=e;try{localStorage.setItem(Fh,JSON.stringify(this.settings))}catch{}t==="volume"&&ft.setVolume(e),t==="muted"&&ft.setMuted(e),t==="quality"&&(this.setupComposer(),this.resize())}disposeMatch(){this.match&&(this.match.dispose(),this.match=null,this.composer=null)}startDemo(t,e){this.disposeMatch();let n=Object.keys(ni),i=$t(n),r=$t(n);for(;r===i;)r=$t(n);this.match=new Pr(this,{mapId:t||$t(vo),night:e??Math.random()<.5,home:i,away:r,difficulty:"normal",controllers:[null,null],rule:{type:"time",seconds:99999},demo:!0}),this.setupComposer(),this.resize(),this.touchPad&&this.touchPad.show(!1)}makeControllers(t){return t?[new Hs({keymap:"p1",gamepad:0,color:"#ffd23f",label:"\u0661"}),new Hs({keymap:"p2",gamepad:1,color:"#62f0ff",label:"\u0662"})]:[new Hs({keymap:"solo",gamepad:0,touch:this.touchPad,color:"#ffd23f"}),null]}startFromSetup(t){let e=t.rule.startsWith("t")?{type:"time",seconds:+t.rule.slice(1)}:{type:"goals",n:+t.rule.slice(1)};this.startMatch({mapId:t.map,night:t.time==="night",home:t.home,away:t.away,difficulty:t.diff,versus:t.versus,rule:e})}startTourneyMatch(){let t=this.tourney.current();t&&this.startMatch({mapId:t.map,night:t.time==="night",home:"home",away:t.opp,difficulty:this.tourney.stage>=3?"hard":"normal",rule:{type:"time",seconds:180},tourney:!0,mods:[this.tourney.mods(),{}]})}startMatch(t){ft.init(),this.lastOpts=t,this.ui.hideScreens(),this.ui.show("loading"),setTimeout(()=>{this.disposeMatch();let e=this.makeControllers(t.versus);this.match=new Pr(this,{...t,controllers:e}),this.setupComposer(),this.resize(),this.paused=!1,this.ui.hideScreens(),this.touchPad&&this.touchPad.show(!t.versus),this.clock.getDelta()},30)}restartMatch(){this.lastOpts&&this.startMatch(this.lastOpts)}quitToMenu(t=!1){this.paused=!1,this.startDemo(),t||this.lastOpts&&this.lastOpts.tourney&&t?this.ui.showTourney():this.ui.show("menu")}togglePause(t){if(!(!this.match||this.match.opts.demo)){this.paused=t!==void 0?t:!this.paused,this.paused?this.ui.show("pause"):this.ui.hideScreens();for(let e of this.match.controllers)e&&e.clear()}}onEvent(){}loop(){requestAnimationFrame(()=>this.loop());let t=Math.min(this.clock.getDelta(),.05);this.match&&!this.paused&&this.match.update(t),this.match&&(this.composer?this.composer.render():this.renderer.render(this.match.scene,this.camera))}},gf=new Oh;window.__game=gf;gf.init();})();
