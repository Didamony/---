(()=>{var Eh="169";var dp=0,Su=1,fp=2;var Od=1,wh=2,rn=3,Mn=0,Fe=1,Ce=2,Be=0,Ms=1,Ci=2,Eu=3,wu=4,Th=5,Ri=100,pp=101,mp=102,gp=103,xp=104,Hs=200,vp=201,yp=202,_p=203,Ql=204,tc=205,pa=206,Mp=207,ma=208,bp=209,Sp=210,Ep=211,wp=212,Tp=213,Ap=214,ec=0,ic=1,nc=2,ws=3,sc=4,rc=5,oc=6,ac=7,Bd=0,Rp=1,Cp=2,_n=0,Ah=1,Rh=2,Ch=3,Ph=4,Pp=5,Ir=6,Ih=7,Tu="attached",Ip="detached",Hd=300,Ts=301,As=302,lc=303,cc=304,ga=306,bi=1e3,Bn=1001,hc=1002,$e=1003,Lp=1004;var Jr=1005;var Oi=1006,fl=1007;var Hn=1008;var Bi=1009,Vd=1010,Gd=1011,gr=1012,Lh=1013,Vn=1014,Yi=1015,Qe=1016,Dh=1017,kh=1018,bn=1020,Wd=35902,Xd=1021,qd=1022,ui=1023,Yd=1024,Zd=1025,bs=1026,Sn=1027,$d=1028,Uh=1029,Kd=1030,Nh=1031;var zh=1033,Io=33776,Lo=33777,Do=33778,ko=33779,uc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,xc=37496,vc=37808,yc=37809,_c=37810,Mc=37811,bc=37812,Sc=37813,Ec=37814,wc=37815,Tc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Uo=36492,Lc=36494,Dc=36495,Jd=36283,kc=36284,Uc=36285,Nc=36286;var zo=2300,zc=2301,pl=2302,Au=2400,Ru=2401,Cu=2402;var Dp=3200,kp=3201;var Fh=0,Up=1,vn="",qe="srgb",An="srgb-linear",Oh="display-p3",xa="display-p3-linear",Fo="linear",Se="srgb",Oo="rec709",Bo="p3";var es=7680;var Pu=519,Np=512,zp=513,Fp=514,jd=515,Op=516,Bp=517,Hp=518,Vp=519,Fc=35044;var Iu="300 es",an=2e3,Ho=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ml=Math.PI/180,Vo=180/Math.PI;function Zi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function Gp(s,t){return(s%t+t)%t}function gl(s,t,e){return(1-e)*s+e*t}function qi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var tt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],_=n[4],M=n[7],C=n[2],T=n[5],R=n[8];return r[0]=o*x+a*y+l*C,r[3]=o*p+a*_+l*T,r[6]=o*m+a*M+l*R,r[1]=c*x+h*y+u*C,r[4]=c*p+h*_+u*T,r[7]=c*m+h*M+u*R,r[2]=d*x+f*y+g*C,r[5]=d*p+f*_+g*T,r[8]=d*m+f*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xl=new $t;function Qd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wp(){let s=Go("canvas");return s.style.display="block",s}var Lu={};function No(s){s in Lu||(Lu[s]=!0,console.warn(s))}function Xp(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function qp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Du=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ku=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[An]:{transfer:Fo,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[qe]:{transfer:Se,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xa]:{transfer:Fo,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ku),fromReference:s=>s.applyMatrix3(Du)},[Oh]:{transfer:Se,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ku),fromReference:s=>s.applyMatrix3(Du).convertLinearToSRGB()}},Zp=new Set([An,xa]),le={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Zp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=er[t].toReference,n=er[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return er[s].primaries},getTransfer:function(s){return s===vn?Fo:er[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(er[t].luminanceCoefficients)}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var is,Oc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=Go("canvas")),is.width=t.width,is.height=t.height;let i=is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ss(e[i]/255)*255):e[i]=Ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$p=0,Wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(yl(n[o].image)):r.push(yl(n[o]))}else r=yl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function yl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kp=0,di=class s extends En{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Bn,n=Bn,r=Oi,o=Hn,a=ui,l=Bi,c=s.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Zi(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Hd;di.DEFAULT_ANISOTROPY=1;var ue=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,C=(m+1)/2,T=(h+d)/4,R=(u+x)/4,I=(g+p)/4;return _>M&&_>C?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=T/i,r=R/i):M>C?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=T/n,r=I/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=R/r,n=I/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends En{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new di(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Bc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Xo=class extends di{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hc=class extends di{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,m*y);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}let M=a*y;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new b,Uu=new wn,Tn=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Qr.subVectors(this.max,ir),ns.subVectors(t.a,ir),ss.subVectors(t.b,ir),rs.subVectors(t.c,ir),dn.subVectors(ss,ns),fn.subVectors(rs,ss),Ln.subVectors(ns,rs);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Ln.z,Ln.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Ln.z,0,-Ln.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Ln.y,Ln.x,0];return!Ml(e,ns,ss,rs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,ns,ss,rs,Qr))?!1:(to.crossVectors(dn,fn),e=[to.x,to.y,to.z],Ml(e,ns,ss,rs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qi=[new b,new b,new b,new b,new b,new b,new b,new b],Ni=new b,jr=new Tn,ns=new b,ss=new b,rs=new b,dn=new b,fn=new b,Ln=new b,ir=new b,Qr=new b,to=new b,Dn=new b;function Ml(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Dn.fromArray(s,r);let a=n.x*Math.abs(Dn.x)+n.y*Math.abs(Dn.y)+n.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jp=new Tn,nr=new b,bl=new b,ln=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Jp.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(nr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(bl)),this.expandByPoint(nr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new b,Sl=new b,eo=new b,pn=new b,El=new b,io=new b,wl=new b,Rs=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Sl.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=pn.dot(this.direction),l=-pn.dot(eo),c=pn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Sl).addScaledVector(eo,d),f}intersectSphere(t,e){tn.subVectors(t.center,this.origin);let i=tn.dot(this.direction),n=tn.dot(tn)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,i,n,r){El.subVectors(e,t),io.subVectors(i,t),wl.crossVectors(El,io);let o=this.direction.dot(wl),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);let l=a*this.direction.dot(io.crossVectors(pn,io));if(l<0)return null;let c=a*this.direction.dot(El.cross(pn));if(c<0||l+c>o)return null;let h=-a*pn.dot(wl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p)}set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Qp)}lookAt(t,e,i){let n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),mn.crossVectors(i,_i),mn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),mn.crossVectors(i,_i)),mn.normalize(),no.crossVectors(_i,mn),n[0]=mn.x,n[4]=no.x,n[8]=_i.x,n[1]=mn.y,n[5]=no.y,n[9]=_i.y,n[2]=mn.z,n[6]=no.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],_=i[7],M=i[11],C=i[15],T=n[0],R=n[4],I=n[8],F=n[12],v=n[1],S=n[5],D=n[9],k=n[13],B=n[2],j=n[6],H=n[10],it=n[14],W=n[3],at=n[7],ct=n[11],mt=n[15];return r[0]=o*T+a*v+l*B+c*W,r[4]=o*R+a*S+l*j+c*at,r[8]=o*I+a*D+l*H+c*ct,r[12]=o*F+a*k+l*it+c*mt,r[1]=h*T+u*v+d*B+f*W,r[5]=h*R+u*S+d*j+f*at,r[9]=h*I+u*D+d*H+f*ct,r[13]=h*F+u*k+d*it+f*mt,r[2]=g*T+x*v+p*B+m*W,r[6]=g*R+x*S+p*j+m*at,r[10]=g*I+x*D+p*H+m*ct,r[14]=g*F+x*k+p*it+m*mt,r[3]=y*T+_*v+M*B+C*W,r[7]=y*R+_*S+M*j+C*at,r[11]=y*I+_*D+M*H+C*ct,r[15]=y*F+_*k+M*it+C*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,_=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,M=h*x*c-g*u*c+g*a*f-o*x*f-h*a*m+o*u*m,C=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,T=e*y+i*_+n*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=y*R,t[1]=(x*d*r-u*p*r-x*n*f+i*p*f+u*n*m-i*d*m)*R,t[2]=(a*p*r-x*l*r+x*n*c-i*p*c-a*n*m+i*l*m)*R,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*R,t[4]=_*R,t[5]=(h*p*r-g*d*r+g*n*f-e*p*f-h*n*m+e*d*m)*R,t[6]=(g*l*r-o*p*r-g*n*c+e*p*c+o*n*m-e*l*m)*R,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*f+e*l*f)*R,t[8]=M*R,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*m-e*u*m)*R,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*R,t[12]=C*R,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*p+e*u*p)*R,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*p-e*a*p)*R,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,_=l*h,M=l*u,C=i.x,T=i.y,R=i.z;return n[0]=(1-(x+m))*C,n[1]=(f+M)*C,n[2]=(g-_)*C,n[3]=0,n[4]=(f-M)*T,n[5]=(1-(d+m))*T,n[6]=(p+y)*T,n[7]=0,n[8]=(g+_)*R,n[9]=(p-y)*R,n[10]=(1-(d+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=os.set(n[0],n[1],n[2]).length(),o=os.set(n[4],n[5],n[6]).length(),a=os.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],zi.copy(this);let c=1/r,h=1/o,u=1/a;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=u,zi.elements[9]*=u,zi.elements[10]*=u,e.setFromRotationMatrix(zi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=an){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(a===an)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ho)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=an){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,f=(i+n)*h,g,x;if(a===an)g=(o+r)*u,x=-2*u;else if(a===Ho)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},os=new b,zi=new Ht,jp=new b(0,0,0),Qp=new b(1,1,1),mn=new b,no=new b,_i=new b,Nu=new Ht,zu=new wn,Pi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},t0=0,Fu=new b,as=new wn,en=new Ht,so=new b,sr=new b,e0=new b,i0=new wn,Ou=new b(1,0,0),Bu=new b(0,1,0),Hu=new b(0,0,1),Vu={type:"added"},n0={type:"removed"},ls={type:"childadded",child:null},Tl={type:"childremoved",child:null},ke=class s extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new b,e=new Pi,i=new wn,n=new b(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ht},normalMatrix:{value:new $t}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Ou,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ou,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?so.copy(t):so.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(sr,so,this.up):en.lookAt(so,sr,this.up),this.quaternion.setFromRotationMatrix(en),n&&(en.extractRotation(n.matrixWorld),as.setFromRotationMatrix(en),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,e0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ke.DEFAULT_UP=new b(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=new b,nn=new b,Al=new b,sn=new b,cs=new b,hs=new b,Gu=new b,Rl=new b,Cl=new b,Pl=new b,Il=new ue,Ll=new ue,Dl=new ue,yn=class s{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Fi.subVectors(t,e),n.cross(Fi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Fi.subVectors(n,e),nn.subVectors(i,e),Al.subVectors(t,e);let o=Fi.dot(Fi),a=Fi.dot(nn),l=Fi.dot(Al),c=nn.dot(nn),h=nn.dot(Al),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,i),Dl.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Il,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(t,e,i,n){return Fi.subVectors(i,e),nn.subVectors(t,e),Fi.cross(nn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Fi.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;cs.subVectors(n,i),hs.subVectors(r,i),Rl.subVectors(t,i);let l=cs.dot(Rl),c=hs.dot(Rl);if(l<=0&&c<=0)return e.copy(i);Cl.subVectors(t,n);let h=cs.dot(Cl),u=hs.dot(Cl);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(cs,o);Pl.subVectors(t,r);let f=cs.dot(Pl),g=hs.dot(Pl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(hs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Gu.subVectors(r,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Gu,a);let m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},ro={h:0,s:0,l:0};function kl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=Gp(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return le.toWorkingColorSpace(this,n),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=tf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=vl(t.r),this.g=vl(t.g),this.b=vl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return le.fromWorkingColorSpace(je.copy(this),t),Math.round(Ye(je.r*255,0,255))*65536+Math.round(Ye(je.g*255,0,255))*256+Math.round(Ye(je.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(je.copy(this),e);let i=je.r,n=je.g,r=je.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=qe){le.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,n=je.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(ro);let i=gl(gn.h,ro.h,e),n=gl(gn.s,ro.s,e),r=gl(gn.l,ro.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Ct;Ct.NAMES=tf;var s0=0,Hi=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ms,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=tc,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Mn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},re=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new b,oo=new tt,Ae=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}};var Yo=class extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Zo=class extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Xt=class extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}},r0=0,Ai=new Ht,Ul=new ke,us=new b,Mi=new Tn,rr=new Tn,We=new b,de=class s extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qd(t)?Zo:Yo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,i){return Ai.makeTranslation(t,e,i),this.applyMatrix4(Ai),this}scale(t,e,i){return Ai.makeScale(t,e,i),this.applyMatrix4(Ai),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(Mi.min,rr.min),Mi.expandByPoint(We),We.addVectors(Mi.max,rr.max),Mi.expandByPoint(We)):(Mi.expandByPoint(rr.min),Mi.expandByPoint(rr.max))}Mi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),We.add(us)),n=Math.max(n,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new b,l[I]=new b;let c=new b,h=new b,u=new b,d=new tt,f=new tt,g=new tt,x=new b,p=new b;function m(I,F,v){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,F),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[I].add(x),a[F].add(x),a[v].add(x),l[I].add(p),l[F].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,F=y.length;I<F;++I){let v=y[I],S=v.start,D=v.count;for(let k=S,B=S+D;k<B;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new b,M=new b,C=new b,T=new b;function R(I){C.fromBufferAttribute(n,I),T.copy(C);let F=a[I];_.copy(F),_.sub(C.multiplyScalar(C.dot(F))).normalize(),M.crossVectors(T,F);let S=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,F=y.length;I<F;++I){let v=y[I],S=v.start,D=v.count;for(let k=S,B=S+D;k<B;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wu=new Ht,kn=new Rs,ao=new ln,Xu=new b,lo=new b,co=new b,ho=new b,Nl=new b,uo=new b,qu=new b,fo=new b,Q=class extends ke{constructor(t=new de,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Nl.fromBufferAttribute(u,t),o?uo.addScaledVector(Nl,h):uo.addScaledVector(Nl.sub(e),h))}e.add(uo)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(ao.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ao,Xu)===null||kn.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),kn.copy(t.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=_;M<C;M+=3){let T=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);n=po(this,m,t,i,c,h,u,T,R,I),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);n=po(this,o,t,i,c,h,u,y,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=_;M<C;M+=3){let T=M,R=M+1,I=M+2;n=po(this,m,t,i,c,h,u,T,R,I),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,_=p+1,M=p+2;n=po(this,o,t,i,c,h,u,y,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function o0(s,t,e,i,n,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Mn,a),l===null)return null;fo.copy(a),fo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:s}}function po(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,lo),s.getVertexPosition(l,co),s.getVertexPosition(c,ho);let h=o0(s,t,e,i,lo,co,ho,qu);if(h){let u=new b;yn.getBarycoord(qu,lo,co,ho,u),n&&(h.uv=yn.getInterpolatedAttribute(n,a,l,c,u,new tt)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new b,materialIndex:0};yn.getNormal(lo,co,ho,d.normal),h.face=d,h.barycoord=u}return h}var ce=class s extends de{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(x,p,m,y,_,M,C,T,R,I,F){let v=M/R,S=C/I,D=M/2,k=C/2,B=T/2,j=R+1,H=I+1,it=0,W=0,at=new b;for(let ct=0;ct<H;ct++){let mt=ct*S-k;for(let It=0;It<j;It++){let Kt=It*v-D;at[x]=Kt*y,at[p]=mt*_,at[m]=B,c.push(at.x,at.y,at.z),at[x]=0,at[p]=0,at[m]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(It/R),u.push(1-ct/I),it+=1}}for(let ct=0;ct<I;ct++)for(let mt=0;mt<R;mt++){let It=d+mt+j*ct,Kt=d+mt+j*(ct+1),Y=d+(mt+1)+j*(ct+1),z=d+(mt+1)+j*ct;l.push(It,Kt,z),l.push(Kt,Y,z),W+=6}a.addGroup(f,W,F),f+=W,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ni(s){let t={};for(let e=0;e<s.length;e++){let i=Cs(s[e]);for(let n in i)t[n]=i[n]}return t}function a0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ef(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ti={clone:Cs,merge:ni},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},$o=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xn=new b,Yu=new tt,Zu=new tt,Ze=class extends $o{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,Zu),e.subVectors(Zu,Yu)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ml*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Vc=class extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ze(ds,fs,t,e);n.layers=this.layers,this.add(n);let r=new Ze(ds,fs,t,e);r.layers=this.layers,this.add(r);let o=new Ze(ds,fs,t,e);o.layers=this.layers,this.add(o);let a=new Ze(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new Ze(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new Ze(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ko=class extends di{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gc=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ko(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ce(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Be});r.uniforms.tEquirect.value=e;let o=new Q(n,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Oi),new Vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},zl=new b,h0=new b,u0=new $t,on=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=zl.subVectors(i,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||u0.getNormalMatrix(t),n=this.coplanarPoint(zl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Un=new ln,mo=new b,xr=class{constructor(t=new on,e=new on,i=new on,n=new on,r=new on,o=new on){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],p=n[11],m=n[12],y=n[13],_=n[14],M=n[15];if(i[0].setComponents(l-r,d-c,p-f,M-m).normalize(),i[1].setComponents(l+r,d+c,p+f,M+m).normalize(),i[2].setComponents(l+o,d+h,p+g,M+y).normalize(),i[3].setComponents(l-o,d-h,p-g,M-y).normalize(),i[4].setComponents(l-a,d-u,p-x,M-_).normalize(),e===an)i[5].setComponents(l+a,d+u,p+x,M+_).normalize();else if(e===Ho)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(mo.x=n.normal.x>0?t.max.x:t.min.x,mo.y=n.normal.y>0?t.max.y:t.min.y,mo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function d0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var be=class s extends de{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*d-o;for(let _=0;_<c;_++){let M=_*u-r;g.push(M,-y,0),x.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let _=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),T=y+1+c*m;f.push(_,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`
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
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,_g=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Og=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:_0,batching_pars_vertex:M0,batching_vertex:b0,begin_vertex:S0,beginnormal_vertex:E0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:k0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:H0,emissivemap_pars_fragment:V0,colorspace_fragment:G0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rm,envmap_vertex:$0,fog_vertex:K0,fog_pars_vertex:J0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:im,lights_lambert_pars_fragment:nm,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:vm,map_fragment:ym,map_pars_fragment:_m,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Em,morphinstance_vertex:wm,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Im,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:km,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Om,opaque_fragment:Bm,packing:Hm,premultiplied_alpha_fragment:Vm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:$m,shadowmap_vertex:Km,shadowmask_pars_fragment:Jm,skinbase_vertex:jm,skinning_pars_vertex:Qm,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ig,specularmap_pars_fragment:ng,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:og,transmission_pars_fragment:ag,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:xg,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:_g,distanceRGBA_frag:Mg,equirect_vert:bg,equirect_frag:Sg,linedashed_vert:Eg,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Ig,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:kg,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:zg,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:Hg,shadow_vert:Vg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:Xg},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Xi={basic:{uniforms:ni([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ni([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ni([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ni([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ni([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ni([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ni([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ni([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ni([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ni([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ni([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ni([ut.common,ut.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ni([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Xi.physical={uniforms:ni([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var go={r:0,b:0,g:0},Nn=new Pi,qg=new Ht;function Yg(s,t,e,i,n,r,o){let a=new Ct(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,M=g(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),_=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===ga)?(h===void 0&&(h=new Q(new ce(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:Cs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Nn.copy(_.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(Nn)),h.material.toneMapped=le.getTransfer(M.colorSpace)!==Se,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Q(new be(2,2),new ye({name:"BackgroundMaterial",uniforms:Cs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=le.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(go,ef(s)),i.buffers.color.setClear(go.r,go.g,go.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function Zg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(v,S,D,k,B){let j=!1,H=u(k,D,S);r!==H&&(r=H,c(r.object)),j=f(v,k,D,B),j&&g(v,k,D,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(v,S,D,k),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,S,D){let k=D.wireframe===!0,B=i[v.id];B===void 0&&(B={},i[v.id]=B);let j=B[S.id];j===void 0&&(j={},B[S.id]=j);let H=j[k];return H===void 0&&(H=d(l()),j[k]=H),H}function d(v){let S=[],D=[],k=[];for(let B=0;B<e;B++)S[B]=0,D[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,S,D,k){let B=r.attributes,j=S.attributes,H=0,it=D.getAttributes();for(let W in it)if(it[W].location>=0){let ct=B[W],mt=j[W];if(mt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),ct===void 0||ct.attribute!==mt||mt&&ct.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(v,S,D,k){let B={},j=S.attributes,H=0,it=D.getAttributes();for(let W in it)if(it[W].location>=0){let ct=j[W];ct===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor));let mt={};mt.attribute=ct,ct&&ct.data&&(mt.data=ct.data),B[W]=mt,H++}r.attributes=B,r.attributesNum=H,r.index=k}function x(){let v=r.newAttributes;for(let S=0,D=v.length;S<D;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let D=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;D[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),B[v]!==S&&(s.vertexAttribDivisor(v,S),B[v]=S)}function y(){let v=r.newAttributes,S=r.enabledAttributes;for(let D=0,k=S.length;D<k;D++)S[D]!==v[D]&&(s.disableVertexAttribArray(D),S[D]=0)}function _(v,S,D,k,B,j,H){H===!0?s.vertexAttribIPointer(v,S,D,B,j):s.vertexAttribPointer(v,S,D,k,B,j)}function M(v,S,D,k){x();let B=k.attributes,j=D.getAttributes(),H=S.defaultAttributeValues;for(let it in j){let W=j[it];if(W.location>=0){let at=B[it];if(at===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),at!==void 0){let ct=at.normalized,mt=at.itemSize,It=t.get(at);if(It===void 0)continue;let Kt=It.buffer,Y=It.type,z=It.bytesPerElement,K=Y===s.INT||Y===s.UNSIGNED_INT||at.gpuType===Lh;if(at.isInterleavedBufferAttribute){let et=at.data,pt=et.stride,gt=at.offset;if(et.isInstancedInterleavedBuffer){for(let Dt=0;Dt<W.locationSize;Dt++)m(W.location+Dt,et.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Dt=0;Dt<W.locationSize;Dt++)_(W.location+Dt,mt/W.locationSize,Y,ct,pt*z,(gt+mt/W.locationSize*Dt)*z,K)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)m(W.location+et,at.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<W.locationSize;et++)p(W.location+et);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let et=0;et<W.locationSize;et++)_(W.location+et,mt/W.locationSize,Y,ct,mt*z,mt/W.locationSize*et*z,K)}}else if(H!==void 0){let ct=H[it];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(W.location,ct);break;case 3:s.vertexAttrib3fv(W.location,ct);break;case 4:s.vertexAttrib4fv(W.location,ct);break;default:s.vertexAttrib1fv(W.location,ct)}}}}y()}function C(){I();for(let v in i){let S=i[v];for(let D in S){let k=S[D];for(let B in k)h(k[B].object),delete k[B];delete S[D]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;let S=i[v.id];for(let D in S){let k=S[D];for(let B in k)h(k[B].object),delete k[B];delete S[D]}delete i[v.id]}function R(v){for(let S in i){let D=i[S];if(D[v.id]===void 0)continue;let k=D[v.id];for(let B in k)h(k[B].object),delete k[B];delete D[v.id]}}function I(){F(),o=!0,r!==n&&(r=n,c(r.object))}function F(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function $g(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kg(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==ui&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===Qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Bi&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yi&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Jg(s){let t=this,e=null,i=0,n=!1,r=!1,o=new on,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,_=y*4,M=m.clippingState||null;l.value=M,M=h(g,d,_,f);for(let C=0;C!==_;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function jg(s){let t=new WeakMap;function e(o,a){return a===lc?o.mapping=Ts:a===cc&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===lc||a===cc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gc(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ps=class extends $o{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,$u=[.125,.215,.35,.446,.526,.582],On=20,Fl=new Ps,Ku=new Ct,Ol=null,Bl=0,Hl=0,Vl=!1,Fn=(1+Math.sqrt(5))/2,ps=1/Fn,Ju=[new b(-Fn,ps,0),new b(Fn,ps,0),new b(-ps,0,Fn),new b(ps,0,Fn),new b(0,Fn,-ps),new b(0,Fn,ps),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,Hl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Qe,format:ui,colorSpace:An,depthBuffer:!1},n=ju(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=tx(r,t,e)}return n}_compileMaterial(t){let e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,Fl)}_sceneToCubeUV(t,e,i,n){let a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ku),h.toneMapping=_n,h.autoClear=!1;let f=new re({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Q(new ce,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Ku),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;xo(n,y*_,m>2?_:0,_,_),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ts||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;xo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Fl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ju[(n-r-1)%Ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Q(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*On-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):On;p>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);let m=[],y=0;for(let R=0;R<On;++R){let I=R/x,F=Math.exp(-I*I/2);m.push(F),R===0?y+=F:R<p&&(y+=2*F)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[n],C=3*M*(n>_-ys?n-_+ys:0),T=4*(this._cubeSize-M);xo(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Fl)}};function Qg(s){let t=[],e=[],i=[],n=s,r=s-ys+1+$u.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-ys?l=$u[o-s+ys-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,I=T>2?0:-1,F=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(F,x*g*T),_.set(d,p*g*T);let v=[T,T,T,T,T,T];M.set(v,m*g*T)}let C=new de;C.setAttribute("position",new Ae(y,x)),C.setAttribute("uv",new Ae(_,p)),C.setAttribute("faceIndex",new Ae(M,m)),t.push(C),n>ys&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ju(s,t,e){let i=new Oe(s,t,e);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function tx(s,t,e){let i=new Float32Array(On),n=new b(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Qu(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function td(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function ex(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===lc||l===cc,h=l===Ts||l===As;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Is(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Is(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ix(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&No("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function nx(s,t,e,i){let n={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,M=y.length;_<M;_+=3){let C=y[_+0],T=y[_+1],R=y[_+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let C=_+0,T=_+1,R=_+2;d.push(C,T,T,R,R,C)}}else return;let p=new(Qd(d)?Zo:Yo)(d,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sx(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function u(d,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<x.length;y++)e.update(m,i,x[y])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ox(s,t,e){let i=new WeakMap,n=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let F=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let M=a.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*C*4*u),R=new Xo(T,M,C,u);R.type=Yi,R.needsUpdate=!0;let I=_*4;for(let v=0;v<u;v++){let S=p[v],D=m[v],k=y[v],B=M*C*4*v;for(let j=0;j<S.count;j++){let H=j*I;f===!0&&(n.fromBufferAttribute(S,j),T[B+H+0]=n.x,T[B+H+1]=n.y,T[B+H+2]=n.z,T[B+H+3]=0),g===!0&&(n.fromBufferAttribute(D,j),T[B+H+4]=n.x,T[B+H+5]=n.y,T[B+H+6]=n.z,T[B+H+7]=0),x===!0&&(n.fromBufferAttribute(k,j),T[B+H+8]=n.x,T[B+H+9]=n.y,T[B+H+10]=n.z,T[B+H+11]=k.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new tt(M,C)},i.set(a,d),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ax(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ls=class extends di{constructor(t,e,i,n,r,o,a,l,c,h=bs){if(h!==bs&&h!==Sn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bs&&(i=Vn),i===void 0&&h===Sn&&(i=bn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sf=new di,ed=new Ls(1,1),rf=new Xo,of=new Hc,af=new Ko,id=[],nd=[],sd=new Float32Array(16),rd=new Float32Array(9),od=new Float32Array(4);function Vs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=id[n];if(r===void 0&&(r=new Float32Array(n),id[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function va(s,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function lx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function dx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;od.set(i),s.uniformMatrix2fv(this.addr,!1,od),Ve(e,i)}}function fx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;rd.set(i),s.uniformMatrix3fv(this.addr,!1,rd),Ve(e,i)}}function px(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;sd.set(i),s.uniformMatrix4fv(this.addr,!1,sd),Ve(e,i)}}function mx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function yx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function Mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function Sx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(ed.compareFunction=jd,r=ed):r=sf,e.setTexture2D(t||r,n)}function Ex(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||of,n)}function wx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||af,n)}function Tx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||rf,n)}function Ax(s){switch(s){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return _x;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(s,t){s.uniform1fv(this.addr,t)}function Cx(s,t){let e=Vs(t,this.size,2);s.uniform2fv(this.addr,e)}function Px(s,t){let e=Vs(t,this.size,3);s.uniform3fv(this.addr,e)}function Ix(s,t){let e=Vs(t,this.size,4);s.uniform4fv(this.addr,e)}function Lx(s,t){let e=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dx(s,t){let e=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kx(s,t){let e=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ux(s,t){s.uniform1iv(this.addr,t)}function Nx(s,t){s.uniform2iv(this.addr,t)}function zx(s,t){s.uniform3iv(this.addr,t)}function Fx(s,t){s.uniform4iv(this.addr,t)}function Ox(s,t){s.uniform1uiv(this.addr,t)}function Bx(s,t){s.uniform2uiv(this.addr,t)}function Hx(s,t){s.uniform3uiv(this.addr,t)}function Vx(s,t){s.uniform4uiv(this.addr,t)}function Gx(s,t,e){let i=this.cache,n=t.length,r=va(e,n);He(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||sf,r[o])}function Wx(s,t,e){let i=this.cache,n=t.length,r=va(e,n);He(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||of,r[o])}function Xx(s,t,e){let i=this.cache,n=t.length,r=va(e,n);He(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||af,r[o])}function qx(s,t,e){let i=this.cache,n=t.length,r=va(e,n);He(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||rf,r[o])}function Yx(s){switch(s){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Dx;case 35676:return kx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return zx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}var Wc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}},Xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},qc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function ad(s,t){s.seq.push(t),s.map[t.id]=t}function Zx(s,t,e){let i=s.name,n=i.length;for(Gl.lastIndex=0;;){let r=Gl.exec(i),o=Gl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ad(e,c===void 0?new Wc(a,s,t):new Xc(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new qc(a),ad(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Zx(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function ld(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var $x=37297,Kx=0;function Jx(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function jx(s){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(s),i;switch(t===e?i="":t===Bo&&e===Oo?i="LinearDisplayP3ToLinearSRGB":t===Oo&&e===Bo&&(i="LinearSRGBToLinearDisplayP3"),s){case An:case xa:return[i,"LinearTransferOETF"];case qe:case Oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function cd(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Jx(s.getShaderSource(t),o)}else return n}function Qx(s,t){let e=jx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tv(s,t){let e;switch(t){case Ah:e="Linear";break;case Rh:e="Reinhard";break;case Ch:e="Cineon";break;case Ph:e="ACESFilmic";break;case Ir:e="AgX";break;case Ih:e="Neutral";break;case Pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vo=new b;function ev(){le.getLuminanceCoefficients(vo);let s=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function nv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ur(s){return s!==""}function hd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(s){return s.replace(rv,av)}var ov=new Map;function av(s,t){let e=Zt[t];if(e===void 0){let i=ov.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}var lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(s){return s.replace(lv,cv)}function cv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function fd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function hv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Od?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function uv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function fv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bd:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function pv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mv(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hv(e),c=uv(e),h=dv(e),u=fv(e),d=pv(e),f=iv(e),g=nv(r),x=n.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Zt.tonemapping_pars_fragment:"",e.toneMapping!==_n?tv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Qx("linearToOutputTexel",e.outputColorSpace),ev(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=Yc(o),o=hd(o,e),o=ud(o,e),a=Yc(a),a=hd(a,e),a=ud(a,e),o=dd(o),a=dd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=y+p+o,M=y+m+a,C=ld(n,n.VERTEX_SHADER,_),T=ld(n,n.FRAGMENT_SHADER,M);n.attachShader(x,C),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(S){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(x).trim(),k=n.getShaderInfoLog(C).trim(),B=n.getShaderInfoLog(T).trim(),j=!0,H=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,C,T);else{let it=cd(n,C,"vertex"),W=cd(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+it+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||B==="")&&(H=!1);H&&(S.diagnostics={runnable:j,programLog:D,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:m}})}n.deleteShader(C),n.deleteShader(T),I=new Es(n,x),F=sv(n,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let F;this.getAttributes=function(){return F===void 0&&R(this),F};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(x,$x)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var gv=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $c(t),e.set(t,i)),i}},$c=class{constructor(t){this.id=gv++,this.code=t,this.usedTimes=0}};function xv(s,t,e,i,n,r,o){let a=new qo,l=new Zc,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,f=n.vertexTextures,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,k,B){let j=k.fog,H=B.geometry,it=v.isMeshStandardMaterial?k.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||it),at=W&&W.mapping===ga?W.image.height:null,ct=x[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,It=mt!==void 0?mt.length:0,Kt=0;H.morphAttributes.position!==void 0&&(Kt=1),H.morphAttributes.normal!==void 0&&(Kt=2),H.morphAttributes.color!==void 0&&(Kt=3);let Y,z,K,et;if(ct){let hi=Xi[ct];Y=hi.vertexShader,z=hi.fragmentShader}else Y=v.vertexShader,z=v.fragmentShader,l.update(v),K=l.getVertexShaderID(v),et=l.getFragmentShaderID(v);let pt=s.getRenderTarget(),gt=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,qt=!!v.map,Tt=!!v.matcap,P=!!W,fe=!!v.aoMap,Jt=!!v.lightMap,te=!!v.bumpMap,Ut=!!v.normalMap,xe=!!v.displacementMap,Nt=!!v.emissiveMap,A=!!v.metalnessMap,E=!!v.roughnessMap,O=v.anisotropy>0,$=v.clearcoat>0,nt=v.dispersion>0,Z=v.iridescence>0,wt=v.sheen>0,ht=v.transmission>0,vt=O&&!!v.anisotropyMap,jt=$&&!!v.clearcoatMap,st=$&&!!v.clearcoatNormalMap,yt=$&&!!v.clearcoatRoughnessMap,zt=Z&&!!v.iridescenceMap,Ft=Z&&!!v.iridescenceThicknessMap,St=wt&&!!v.sheenColorMap,ee=wt&&!!v.sheenRoughnessMap,Vt=!!v.specularMap,ae=!!v.specularColorMap,L=!!v.specularIntensityMap,ft=ht&&!!v.transmissionMap,X=ht&&!!v.thicknessMap,J=!!v.gradientMap,_t=!!v.alphaMap,bt=v.alphaTest>0,se=!!v.alphaHash,Ne=!!v.extensions,ci=_n;v.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ci=s.toneMapping);let he={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:z,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:gt,instancingColor:gt&&B.instanceColor!==null,instancingMorph:gt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:An,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:Tt,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:at,aoMap:fe,lightMap:Jt,bumpMap:te,normalMap:Ut,displacementMap:f&&xe,emissiveMap:Nt,normalMapObjectSpace:Ut&&v.normalMapType===Up,normalMapTangentSpace:Ut&&v.normalMapType===Fh,metalnessMap:A,roughnessMap:E,anisotropy:O,anisotropyMap:vt,clearcoat:$,clearcoatMap:jt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:nt,iridescence:Z,iridescenceMap:zt,iridescenceThicknessMap:Ft,sheen:wt,sheenColorMap:St,sheenRoughnessMap:ee,specularMap:Vt,specularColorMap:ae,specularIntensityMap:L,transmission:ht,transmissionMap:ft,thicknessMap:X,gradientMap:J,opaque:v.transparent===!1&&v.blending===Ms&&v.alphaToCoverage===!1,alphaMap:_t,alphaTest:bt,alphaHash:se,combine:v.combine,mapUv:qt&&p(v.map.channel),aoMapUv:fe&&p(v.aoMap.channel),lightMapUv:Jt&&p(v.lightMap.channel),bumpMapUv:te&&p(v.bumpMap.channel),normalMapUv:Ut&&p(v.normalMap.channel),displacementMapUv:xe&&p(v.displacementMap.channel),emissiveMapUv:Nt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:E&&p(v.roughnessMap.channel),anisotropyMapUv:vt&&p(v.anisotropyMap.channel),clearcoatMapUv:jt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:St&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(v.sheenRoughnessMap.channel),specularMapUv:Vt&&p(v.specularMap.channel),specularColorMapUv:ae&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:ft&&p(v.transmissionMap.channel),thicknessMapUv:X&&p(v.thicknessMap.channel),alphaMapUv:_t&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ut||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(qt||_t),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ci,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===Se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ce,flipSided:v.side===Fe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ne&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&v.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function y(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(S,v),M(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let S=x[v.type],D;if(S){let k=Xi[S];D=ti.clone(k.uniforms)}else D=v.uniforms;return D}function T(v,S){let D;for(let k=0,B=h.length;k<B;k++){let j=h[k];if(j.cacheKey===S){D=j,++D.usedTimes;break}}return D===void 0&&(D=new mv(s,S,v,r),h.push(D)),D}function R(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:F}}function vv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function yv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function md(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||yv),i.length>1&&i.sort(d||pd),n.length>1&&n.sort(d||pd)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function _v(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new md,s.set(i,[o])):n>=r.length?(o=new md,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Mv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Ct};break;case"SpotLight":e={position:new b,direction:new b,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function bv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Sv=0;function Ev(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wv(s){let t=new Mv,e=bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let n=new b,r=new Ht,o=new Ht;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,_=0,M=0,C=0,T=0,R=0;c.sort(Ev);for(let F=0,v=c.length;F<v;F++){let S=c[F],D=S.color,k=S.intensity,B=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*k,u+=D.g*k,d+=D.b*k;else if(S.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(S.sh.coefficients[H],k);R++}else if(S.isDirectionalLight){let H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let it=S.shadow,W=e.get(S);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=S.shadow.matrix,y++}i.directional[f]=H,f++}else if(S.isSpotLight){let H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(D).multiplyScalar(k),H.distance=B,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,i.spot[x]=H;let it=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,it.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[x]=it.matrix,S.castShadow){let W=e.get(S);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=j,M++}x++}else if(S.isRectAreaLight){let H=t.get(S);H.color.copy(D).multiplyScalar(k),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=H,p++}else if(S.isPointLight){let H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){let it=S.shadow,W=e.get(S);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=H,g++}else if(S.isHemisphereLight){let H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(k),H.groundColor.copy(S.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=R,i.version=Sv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let _=c[m];if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),u++}else if(_.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function gd(s){let t=new wv(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tv(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new gd(s),t.set(n,[a])):r>=o.length?(a=new gd(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Kc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Cv(s,t,e){let i=new xr,n=new tt,r=new tt,o=new ue,a=new Kc({depthPacking:kp}),l=new Jc,c={},h=e.maxTextureSize,u={[Mn]:Fe,[Fe]:Mn,[Ce]:Ce},d=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Q(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let m=this.type;this.render=function(T,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let F=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Be),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=m!==rn&&this.type===rn,B=m===rn&&this.type!==rn;for(let j=0,H=T.length;j<H;j++){let it=T[j],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let at=W.getFrameExtents();if(n.multiply(at),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/at.x),n.x=r.x*at.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/at.y),n.y=r.y*at.y,W.mapSize.y=r.y)),W.map===null||k===!0||B===!0){let mt=this.type!==rn?{minFilter:$e,magFilter:$e}:{};W.map!==null&&W.map.dispose(),W.map=new Oe(n.x,n.y,mt),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let ct=W.getViewportCount();for(let mt=0;mt<ct;mt++){let It=W.getViewport(mt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),D.viewport(o),W.updateMatrices(it,mt),i=W.getFrustum(),M(R,I,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===rn&&y(W,I),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(F,v,S)};function y(T,R){let I=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Oe(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,I,f,x,null)}function _(T,R,I,F){let v=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=v.uuid,k=R.uuid,B=c[D];B===void 0&&(B={},c[D]=B);let j=B[k];j===void 0&&(j=v.clone(),B[k]=j,R.addEventListener("dispose",C)),v=j}if(v.visible=R.visible,v.wireframe=R.wireframe,F===rn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=s.properties.get(v);D.light=I}return v}function M(T,R,I,F,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===rn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let k=t.update(T),B=T.material;if(Array.isArray(B)){let j=k.groups;for(let H=0,it=j.length;H<it;H++){let W=j[H],at=B[W.materialIndex];if(at&&at.visible){let ct=_(T,at,F,v);T.onBeforeShadow(s,T,R,I,k,ct,W),s.renderBufferDirect(I,null,k,ct,T,W),T.onAfterShadow(s,T,R,I,k,ct,W)}}}else if(B.visible){let j=_(T,B,F,v);T.onBeforeShadow(s,T,R,I,k,j,null),s.renderBufferDirect(I,null,k,j,T,null),T.onAfterShadow(s,T,R,I,k,j,null)}}let D=T.children;for(let k=0,B=D.length;k<B;k++)M(D[k],R,I,F,v)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let F=c[I],v=T.target.uuid;v in F&&(F[v].dispose(),delete F[v])}}}var Pv={[ec]:ic,[nc]:oc,[sc]:ac,[ws]:rc,[ic]:ec,[oc]:nc,[ac]:sc,[rc]:ws};function Iv(s){function t(){let L=!1,ft=new ue,X=null,J=new ue(0,0,0,0);return{setMask:function(_t){X!==_t&&!L&&(s.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){L=_t},setClear:function(_t,bt,se,Ne,ci){ci===!0&&(_t*=Ne,bt*=Ne,se*=Ne),ft.set(_t,bt,se,Ne),J.equals(ft)===!1&&(s.clearColor(_t,bt,se,Ne),J.copy(ft))},reset:function(){L=!1,X=null,J.set(-1,0,0,0)}}}function e(){let L=!1,ft=!1,X=null,J=null,_t=null;return{setReversed:function(bt){ft=bt},setTest:function(bt){bt?K(s.DEPTH_TEST):et(s.DEPTH_TEST)},setMask:function(bt){X!==bt&&!L&&(s.depthMask(bt),X=bt)},setFunc:function(bt){if(ft&&(bt=Pv[bt]),J!==bt){switch(bt){case ec:s.depthFunc(s.NEVER);break;case ic:s.depthFunc(s.ALWAYS);break;case nc:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case rc:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case ac:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=bt}},setLocked:function(bt){L=bt},setClear:function(bt){_t!==bt&&(s.clearDepth(bt),_t=bt)},reset:function(){L=!1,X=null,J=null,_t=null}}}function i(){let L=!1,ft=null,X=null,J=null,_t=null,bt=null,se=null,Ne=null,ci=null;return{setTest:function(he){L||(he?K(s.STENCIL_TEST):et(s.STENCIL_TEST))},setMask:function(he){ft!==he&&!L&&(s.stencilMask(he),ft=he)},setFunc:function(he,hi,ji){(X!==he||J!==hi||_t!==ji)&&(s.stencilFunc(he,hi,ji),X=he,J=hi,_t=ji)},setOp:function(he,hi,ji){(bt!==he||se!==hi||Ne!==ji)&&(s.stencilOp(he,hi,ji),bt=he,se=hi,Ne=ji)},setLocked:function(he){L=he},setClear:function(he){ci!==he&&(s.clearStencil(he),ci=he)},reset:function(){L=!1,ft=null,X=null,J=null,_t=null,bt=null,se=null,Ne=null,ci=null}}}let n=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,y=null,_=null,M=null,C=null,T=new Ct(0,0,0),R=0,I=!1,F=null,v=null,S=null,D=null,k=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,H=0,it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),j=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),j=H>=2);let W=null,at={},ct=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),It=new ue().fromArray(ct),Kt=new ue().fromArray(mt);function Y(L,ft,X,J){let _t=new Uint8Array(4),bt=s.createTexture();s.bindTexture(L,bt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<X;se++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ft+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return bt}let z={};z[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),o.setClear(0),K(s.DEPTH_TEST),r.setFunc(ws),Jt(!1),te(Su),K(s.CULL_FACE),P(Be);function K(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function et(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function pt(L,ft){return h[L]!==ft?(s.bindFramebuffer(L,ft),h[L]=ft,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ft),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function gt(L,ft){let X=d,J=!1;if(L){X=u.get(ft),X===void 0&&(X=[],u.set(ft,X));let _t=L.textures;if(X.length!==_t.length||X[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,se=_t.length;bt<se;bt++)X[bt]=s.COLOR_ATTACHMENT0+bt;X.length=_t.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function Dt(L){return f!==L?(s.useProgram(L),f=L,!0):!1}let qt={[Ri]:s.FUNC_ADD,[pp]:s.FUNC_SUBTRACT,[mp]:s.FUNC_REVERSE_SUBTRACT};qt[gp]=s.MIN,qt[xp]=s.MAX;let Tt={[Hs]:s.ZERO,[vp]:s.ONE,[yp]:s.SRC_COLOR,[Ql]:s.SRC_ALPHA,[Sp]:s.SRC_ALPHA_SATURATE,[ma]:s.DST_COLOR,[pa]:s.DST_ALPHA,[_p]:s.ONE_MINUS_SRC_COLOR,[tc]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[Mp]:s.ONE_MINUS_DST_ALPHA,[Ep]:s.CONSTANT_COLOR,[wp]:s.ONE_MINUS_CONSTANT_COLOR,[Tp]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function P(L,ft,X,J,_t,bt,se,Ne,ci,he){if(L===Be){g===!0&&(et(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),L!==Th){if(L!==x||he!==I){if((p!==Ri||_!==Ri)&&(s.blendEquation(s.FUNC_ADD),p=Ri,_=Ri),he)switch(L){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFunc(s.ONE,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,M=null,C=null,T.set(0,0,0),R=0,x=L,I=he}return}_t=_t||ft,bt=bt||X,se=se||J,(ft!==p||_t!==_)&&(s.blendEquationSeparate(qt[ft],qt[_t]),p=ft,_=_t),(X!==m||J!==y||bt!==M||se!==C)&&(s.blendFuncSeparate(Tt[X],Tt[J],Tt[bt],Tt[se]),m=X,y=J,M=bt,C=se),(Ne.equals(T)===!1||ci!==R)&&(s.blendColor(Ne.r,Ne.g,Ne.b,ci),T.copy(Ne),R=ci),x=L,I=!1}function fe(L,ft){L.side===Ce?et(s.CULL_FACE):K(s.CULL_FACE);let X=L.side===Fe;ft&&(X=!X),Jt(X),L.blending===Ms&&L.transparent===!1?P(Be):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),n.setMask(L.colorWrite);let J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function te(L){L!==dp?(K(s.CULL_FACE),L!==v&&(L===Su?s.cullFace(s.BACK):L===fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):et(s.CULL_FACE),v=L}function Ut(L){L!==S&&(j&&s.lineWidth(L),S=L)}function xe(L,ft,X){L?(K(s.POLYGON_OFFSET_FILL),(D!==ft||k!==X)&&(s.polygonOffset(ft,X),D=ft,k=X)):et(s.POLYGON_OFFSET_FILL)}function Nt(L){L?K(s.SCISSOR_TEST):et(s.SCISSOR_TEST)}function A(L){L===void 0&&(L=s.TEXTURE0+B-1),W!==L&&(s.activeTexture(L),W=L)}function E(L,ft,X){X===void 0&&(W===null?X=s.TEXTURE0+B-1:X=W);let J=at[X];J===void 0&&(J={type:void 0,texture:void 0},at[X]=J),(J.type!==L||J.texture!==ft)&&(W!==X&&(s.activeTexture(X),W=X),s.bindTexture(L,ft||z[L]),J.type=L,J.texture=ft)}function O(){let L=at[W];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){It.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),It.copy(L))}function St(L){Kt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function ee(L,ft){let X=l.get(ft);X===void 0&&(X=new WeakMap,l.set(ft,X));let J=X.get(L);J===void 0&&(J=s.getUniformBlockIndex(ft,L.name),X.set(L,J))}function Vt(L,ft){let J=l.get(ft).get(L);a.get(ft)!==J&&(s.uniformBlockBinding(ft,J,L.__bindingPointIndex),a.set(ft,J))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,at={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,y=null,_=null,M=null,C=null,T=new Ct(0,0,0),R=0,I=!1,F=null,v=null,S=null,D=null,k=null,It.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),o.reset()}return{buffers:{color:n,depth:r,stencil:o},enable:K,disable:et,bindFramebuffer:pt,drawBuffers:gt,useProgram:Dt,setBlending:P,setMaterial:fe,setFlipSided:Jt,setCullFace:te,setLineWidth:Ut,setPolygonOffset:xe,setScissorTest:Nt,activeTexture:A,bindTexture:E,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:nt,texImage2D:yt,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:Vt,texStorage2D:jt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:vt,scissor:Ft,viewport:St,reset:ae}}function xd(s,t,e,i){let n=Lv(i);switch(e){case Xd:return s*t;case Yd:return s*t;case Zd:return s*t*2;case $d:return s*t/n.components*n.byteLength;case Uh:return s*t/n.components*n.byteLength;case Kd:return s*t*2/n.components*n.byteLength;case Nh:return s*t*2/n.components*n.byteLength;case qd:return s*t*3/n.components*n.byteLength;case ui:return s*t*4/n.components*n.byteLength;case zh:return s*t*4/n.components*n.byteLength;case Io:case Lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Do:case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dc:case pc:return Math.max(s,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(s,8)*Math.max(t,8)/2;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Lc:case Dc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jd:case kc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Uc:case Nc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lv(s){switch(s){case Bi:case Vd:return{byteLength:1,components:1};case gr:case Gd:case Qe:return{byteLength:2,components:1};case Dh:case kh:return{byteLength:2,components:4};case Vn:case Lh:case Yi:return{byteLength:4,components:1};case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Dv(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return f?new OffscreenCanvas(A,E):Go("canvas")}function x(A,E,O){let $=1,nt=Nt(A);if((nt.width>O||nt.height>O)&&($=O/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor($*nt.width),wt=Math.floor($*nt.height);u===void 0&&(u=g(Z,wt));let ht=E?g(Z,wt):u;return ht.width=Z,ht.height=wt,ht.getContext("2d").drawImage(A,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+wt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==$e&&A.minFilter!==Oi}function m(A){s.generateMipmap(A)}function y(A,E,O,$,nt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=E;if(E===s.RED&&(O===s.FLOAT&&(Z=s.R32F),O===s.HALF_FLOAT&&(Z=s.R16F),O===s.UNSIGNED_BYTE&&(Z=s.R8)),E===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.R8UI),O===s.UNSIGNED_SHORT&&(Z=s.R16UI),O===s.UNSIGNED_INT&&(Z=s.R32UI),O===s.BYTE&&(Z=s.R8I),O===s.SHORT&&(Z=s.R16I),O===s.INT&&(Z=s.R32I)),E===s.RG&&(O===s.FLOAT&&(Z=s.RG32F),O===s.HALF_FLOAT&&(Z=s.RG16F),O===s.UNSIGNED_BYTE&&(Z=s.RG8)),E===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RG8UI),O===s.UNSIGNED_SHORT&&(Z=s.RG16UI),O===s.UNSIGNED_INT&&(Z=s.RG32UI),O===s.BYTE&&(Z=s.RG8I),O===s.SHORT&&(Z=s.RG16I),O===s.INT&&(Z=s.RG32I)),E===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),O===s.UNSIGNED_INT&&(Z=s.RGB32UI),O===s.BYTE&&(Z=s.RGB8I),O===s.SHORT&&(Z=s.RGB16I),O===s.INT&&(Z=s.RGB32I)),E===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),O===s.UNSIGNED_INT&&(Z=s.RGBA32UI),O===s.BYTE&&(Z=s.RGBA8I),O===s.SHORT&&(Z=s.RGBA16I),O===s.INT&&(Z=s.RGBA32I)),E===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),E===s.RGBA){let wt=nt?Fo:le.getTransfer($);O===s.FLOAT&&(Z=s.RGBA32F),O===s.HALF_FLOAT&&(Z=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Z=wt===Se?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,E){let O;return A?E===null||E===Vn||E===bn?O=s.DEPTH24_STENCIL8:E===Yi?O=s.DEPTH32F_STENCIL8:E===gr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vn||E===bn?O=s.DEPTH_COMPONENT24:E===Yi?O=s.DEPTH_COMPONENT32F:E===gr&&(O=s.DEPTH_COMPONENT16),O}function M(A,E){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Oi?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){let E=A.target;E.removeEventListener("dispose",C),R(E),E.isVideoTexture&&h.delete(E)}function T(A){let E=A.target;E.removeEventListener("dispose",T),F(E)}function R(A){let E=i.get(A);if(E.__webglInit===void 0)return;let O=A.source,$=d.get(O);if($){let nt=$[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(A),Object.keys($).length===0&&d.delete(O)}i.remove(A)}function I(A){let E=i.get(A);s.deleteTexture(E.__webglTexture);let O=A.source,$=d.get(O);delete $[E.__cacheKey],o.memory.textures--}function F(A){let E=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let nt=0;nt<E.__webglFramebuffer[$].length;nt++)s.deleteFramebuffer(E.__webglFramebuffer[$][nt]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let O=A.textures;for(let $=0,nt=O.length;$<nt;$++){let Z=i.get(O[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(A)}let v=0;function S(){v=0}function D(){let A=v;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),v+=1,A}function k(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){let O=i.get(A);if(A.isVideoTexture&&Ut(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(O,A,E);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+E)}function j(A,E){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Kt(O,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+E)}function H(A,E){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Kt(O,A,E);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+E)}function it(A,E){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+E)}let W={[bi]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[hc]:s.MIRRORED_REPEAT},at={[$e]:s.NEAREST,[Lp]:s.NEAREST_MIPMAP_NEAREST,[Jr]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},ct={[Np]:s.NEVER,[Vp]:s.ALWAYS,[zp]:s.LESS,[jd]:s.LEQUAL,[Fp]:s.EQUAL,[Hp]:s.GEQUAL,[Op]:s.GREATER,[Bp]:s.NOTEQUAL};function mt(A,E){if(E.type===Yi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Oi||E.magFilter===fl||E.magFilter===Jr||E.magFilter===Hn||E.minFilter===Oi||E.minFilter===fl||E.minFilter===Jr||E.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,W[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,W[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,W[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,at[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$e||E.minFilter!==Jr&&E.minFilter!==Hn||E.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function It(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",C));let $=E.source,nt=d.get($);nt===void 0&&(nt={},d.set($,nt));let Z=k(E);if(Z!==A.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[Z].usedTimes++;let wt=nt[A.__cacheKey];wt!==void 0&&(nt[A.__cacheKey].usedTimes--,wt.usedTimes===0&&I(E)),A.__cacheKey=Z,A.__webglTexture=nt[Z].texture}return O}function Kt(A,E,O){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);let nt=It(A,E),Z=E.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+O);let wt=i.get(Z);if(Z.version!==wt.__version||nt===!0){e.activeTexture(s.TEXTURE0+O);let ht=le.getPrimaries(le.workingColorSpace),vt=E.colorSpace===vn?null:le.getPrimaries(E.colorSpace),jt=E.colorSpace===vn||ht===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let st=x(E.image,!1,n.maxTextureSize);st=xe(E,st);let yt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type),Ft=y(E.internalFormat,yt,zt,E.colorSpace,E.isVideoTexture);mt($,E);let St,ee=E.mipmaps,Vt=E.isVideoTexture!==!0,ae=wt.__version===void 0||nt===!0,L=Z.dataReady,ft=M(E,st);if(E.isDepthTexture)Ft=_(E.format===Sn,E.type),ae&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,zt,null));else if(E.isDataTexture)if(ee.length>0){Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,ee[0].width,ee[0].height);for(let X=0,J=ee.length;X<J;X++)St=ee[X],Vt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,zt,St.data):e.texImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,yt,zt,St.data);E.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,yt,zt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,zt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,ee[0].width,ee[0].height,st.depth);for(let X=0,J=ee.length;X<J;X++)if(St=ee[X],E.format!==ui)if(yt!==null)if(Vt){if(L)if(E.layerUpdates.size>0){let _t=xd(St.width,St.height,E.format,E.type);for(let bt of E.layerUpdates){let se=St.data.subarray(bt*_t/St.data.BYTES_PER_ELEMENT,(bt+1)*_t/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,bt,St.width,St.height,1,yt,se,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,st.depth,yt,St.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ft,St.width,St.height,st.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,st.depth,yt,zt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ft,St.width,St.height,st.depth,0,yt,zt,St.data)}else{Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,ee[0].width,ee[0].height);for(let X=0,J=ee.length;X<J;X++)St=ee[X],E.format!==ui?yt!==null?Vt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,zt,St.data):e.texImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,yt,zt,St.data)}else if(E.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,st.width,st.height,st.depth),L)if(E.layerUpdates.size>0){let X=xd(st.width,st.height,E.format,E.type);for(let J of E.layerUpdates){let _t=st.data.subarray(J*X/st.data.BYTES_PER_ELEMENT,(J+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,yt,zt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,zt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,yt,zt,st.data);else if(E.isData3DTexture)Vt?(ae&&e.texStorage3D(s.TEXTURE_3D,ft,Ft,st.width,st.height,st.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,zt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,yt,zt,st.data);else if(E.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height);else{let X=st.width,J=st.height;for(let _t=0;_t<ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ft,X,J,0,yt,zt,null),X>>=1,J>>=1}}else if(ee.length>0){if(Vt&&ae){let X=Nt(ee[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ft,X.width,X.height)}for(let X=0,J=ee.length;X<J;X++)St=ee[X],Vt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt,zt,St):e.texImage2D(s.TEXTURE_2D,X,Ft,yt,zt,St);E.generateMipmaps=!1}else if(Vt){if(ae){let X=Nt(st);e.texStorage2D(s.TEXTURE_2D,ft,Ft,X.width,X.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,zt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ft,yt,zt,st);p(E)&&m($),wt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Y(A,E,O){if(E.image.length!==6)return;let $=It(A,E),nt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let Z=i.get(nt);if(nt.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+O);let wt=le.getPrimaries(le.workingColorSpace),ht=E.colorSpace===vn?null:le.getPrimaries(E.colorSpace),vt=E.colorSpace===vn||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let jt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let J=0;J<6;J++)!jt&&!st?yt[J]=x(E.image[J],!0,n.maxCubemapSize):yt[J]=st?E.image[J].image:E.image[J],yt[J]=xe(E,yt[J]);let zt=yt[0],Ft=r.convert(E.format,E.colorSpace),St=r.convert(E.type),ee=y(E.internalFormat,Ft,St,E.colorSpace),Vt=E.isVideoTexture!==!0,ae=Z.__version===void 0||$===!0,L=nt.dataReady,ft=M(E,zt);mt(s.TEXTURE_CUBE_MAP,E);let X;if(jt){Vt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ee,zt.width,zt.height);for(let J=0;J<6;J++){X=yt[J].mipmaps;for(let _t=0;_t<X.length;_t++){let bt=X[_t];E.format!==ui?Ft!==null?Vt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,bt.width,bt.height,Ft,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,ee,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,bt.width,bt.height,Ft,St,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,ee,bt.width,bt.height,0,Ft,St,bt.data)}}}else{if(X=E.mipmaps,Vt&&ae){X.length>0&&ft++;let J=Nt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ee,J.width,J.height)}for(let J=0;J<6;J++)if(st){Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt[J].width,yt[J].height,Ft,St,yt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,yt[J].width,yt[J].height,0,Ft,St,yt[J].data);for(let _t=0;_t<X.length;_t++){let se=X[_t].image[J].image;Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,se.width,se.height,Ft,St,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,ee,se.width,se.height,0,Ft,St,se.data)}}else{Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ft,St,yt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,Ft,St,yt[J]);for(let _t=0;_t<X.length;_t++){let bt=X[_t];Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,Ft,St,bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,ee,Ft,St,bt.image[J])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function z(A,E,O,$,nt,Z){let wt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),vt=y(O.internalFormat,wt,ht,O.colorSpace);if(!i.get(E).__hasExternalTextures){let st=Math.max(1,E.width>>Z),yt=Math.max(1,E.height>>Z);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,vt,st,yt,E.depth,0,wt,ht,null):e.texImage2D(nt,Z,vt,st,yt,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,nt,i.get(O).__webglTexture,0,Jt(E)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,nt,i.get(O).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(A,E,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){let $=E.depthTexture,nt=$&&$.isDepthTexture?$.type:null,Z=_(E.stencilBuffer,nt),wt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Jt(E);te(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Z,E.width,E.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Z,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,A)}else{let $=E.textures;for(let nt=0;nt<$.length;nt++){let Z=$[nt],wt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),vt=y(Z.internalFormat,wt,ht,Z.colorSpace),jt=Jt(E);O&&te(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,vt,E.width,E.height):te(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,vt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,vt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let $=i.get(E.depthTexture).__webglTexture,nt=Jt(E);if(E.depthTexture.format===bs)te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(E.depthTexture.format===Sn)te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function pt(A){let E=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=$}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");et(E.__webglFramebuffer,A)}else if(O){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),K(E.__webglDepthbuffer[$],A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),K(E.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(A,E,O){let $=i.get(A);E!==void 0&&z($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&pt(A)}function Dt(A){let E=A.texture,O=i.get(A),$=i.get(E);A.addEventListener("dispose",T);let nt=A.textures,Z=A.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let vt=0;vt<E.mipmaps.length;vt++)O.__webglFramebuffer[ht][vt]=s.createFramebuffer()}else O.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)O.__webglFramebuffer[ht]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,vt=nt.length;ht<vt;ht++){let jt=i.get(nt[ht]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&te(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){let vt=nt[ht];O.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);let jt=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),yt=y(vt.internalFormat,jt,st,vt.colorSpace,A.isXRRenderTarget===!0),zt=Jt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,yt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),K(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),mt(s.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)z(O.__webglFramebuffer[ht][vt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else z(O.__webglFramebuffer[ht],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,vt=nt.length;ht<vt;ht++){let jt=nt[ht],st=i.get(jt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),mt(s.TEXTURE_2D,jt),z(O.__webglFramebuffer,A,jt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),p(jt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,$.__webglTexture),mt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)z(O.__webglFramebuffer[vt],A,E,s.COLOR_ATTACHMENT0,ht,vt);else z(O.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,ht,0);p(E)&&m(ht),e.unbindTexture()}A.depthBuffer&&pt(A)}function qt(A){let E=A.textures;for(let O=0,$=E.length;O<$;O++){let nt=E[O];if(p(nt)){let Z=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,wt=i.get(nt).__webglTexture;e.bindTexture(Z,wt),m(Z),e.unbindTexture()}}}let Tt=[],P=[];function fe(A){if(A.samples>0){if(te(A)===!1){let E=A.textures,O=A.width,$=A.height,nt=s.COLOR_BUFFER_BIT,Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=i.get(A),ht=E.length>1;if(ht)for(let vt=0;vt<E.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<E.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let jt=i.get(E[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,nt,s.NEAREST),l===!0&&(Tt.length=0,P.length=0,Tt.push(s.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<E.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let jt=i.get(E[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Jt(A){return Math.min(n.maxSamples,A.samples)}function te(A){let E=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function xe(A,E){let O=A.colorSpace,$=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==An&&O!==vn&&(le.getTransfer(O)===Se?($!==ui||nt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=gt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=z,this.useMultisampledRTT=te}function kv(s,t){function e(i,n=vn){let r,o=le.getTransfer(n);if(i===Bi)return s.UNSIGNED_BYTE;if(i===Dh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Vd)return s.BYTE;if(i===Gd)return s.SHORT;if(i===gr)return s.UNSIGNED_SHORT;if(i===Lh)return s.INT;if(i===Vn)return s.UNSIGNED_INT;if(i===Yi)return s.FLOAT;if(i===Qe)return s.HALF_FLOAT;if(i===Xd)return s.ALPHA;if(i===qd)return s.RGB;if(i===ui)return s.RGBA;if(i===Yd)return s.LUMINANCE;if(i===Zd)return s.LUMINANCE_ALPHA;if(i===bs)return s.DEPTH_COMPONENT;if(i===Sn)return s.DEPTH_STENCIL;if(i===$d)return s.RED;if(i===Uh)return s.RED_INTEGER;if(i===Kd)return s.RG;if(i===Nh)return s.RG_INTEGER;if(i===zh)return s.RGBA_INTEGER;if(i===Io||i===Lo||i===Do||i===ko)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===dc||i===fc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===yc||i===_c||i===Mc||i===bc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Lc||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Uo)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===kc||i===Uc||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var jc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uv={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new di,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ye({vertexShader:Nv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends En{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Qc,p=e.getContextAttributes(),m=null,y=null,_=[],M=[],C=new tt,T=null,R=new Ze;R.layers.enable(1),R.viewport=new ue;let I=new Ze;I.layers.enable(2),I.viewport=new ue;let F=[R,I],v=new jc;v.layers.enable(1),v.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let z=_[Y];return z===void 0&&(z=new dr,_[Y]=z),z.getTargetRaySpace()},this.getControllerGrip=function(Y){let z=_[Y];return z===void 0&&(z=new dr,_[Y]=z),z.getGripSpace()},this.getHand=function(Y){let z=_[Y];return z===void 0&&(z=new dr,_[Y]=z),z.getHandSpace()};function k(Y){let z=M.indexOf(Y.inputSource);if(z===-1)return;let K=_[z];K!==void 0&&(K.update(Y.inputSource,Y.frame,c||o),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",j);for(let Y=0;Y<_.length;Y++){let z=M[Y];z!==null&&(M[Y]=null,_[Y].disconnect(z))}S=null,D=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,y=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",B),n.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){let z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,z),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oe(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let z=null,K=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=p.stencil?Sn:bs,K=p.stencil?bn:Vn);let pt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(pt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Oe(d.textureWidth,d.textureHeight,{format:ui,type:Bi,depthTexture:new Ls(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Kt.setContext(n),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Y){for(let z=0;z<Y.removed.length;z++){let K=Y.removed[z],et=M.indexOf(K);et>=0&&(M[et]=null,_[et].disconnect(K))}for(let z=0;z<Y.added.length;z++){let K=Y.added[z],et=M.indexOf(K);if(et===-1){for(let gt=0;gt<_.length;gt++)if(gt>=M.length){M.push(K),et=gt;break}else if(M[gt]===null){M[gt]=K,et=gt;break}if(et===-1)break}let pt=_[et];pt&&pt.connect(K)}}let H=new b,it=new b;function W(Y,z,K){H.setFromMatrixPosition(z.matrixWorld),it.setFromMatrixPosition(K.matrixWorld);let et=H.distanceTo(it),pt=z.projectionMatrix.elements,gt=K.projectionMatrix.elements,Dt=pt[14]/(pt[10]-1),qt=pt[14]/(pt[10]+1),Tt=(pt[9]+1)/pt[5],P=(pt[9]-1)/pt[5],fe=(pt[8]-1)/pt[0],Jt=(gt[8]+1)/gt[0],te=Dt*fe,Ut=Dt*Jt,xe=et/(-fe+Jt),Nt=xe*-fe;if(z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pt[10]===-1)Y.projectionMatrix.copy(z.projectionMatrix),Y.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let A=Dt+xe,E=qt+xe,O=te-Nt,$=Ut+(et-Nt),nt=Tt*qt/E*A,Z=P*qt/E*A;Y.projectionMatrix.makePerspective(O,$,nt,Z,A,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,z){z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let z=Y.near,K=Y.far;x.texture!==null&&(x.depthNear>0&&(z=x.depthNear),x.depthFar>0&&(K=x.depthFar)),v.near=I.near=R.near=z,v.far=I.far=R.far=K,(S!==v.near||D!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,D=v.far);let et=Y.parent,pt=v.cameras;at(v,et);for(let gt=0;gt<pt.length;gt++)at(pt[gt],et);pt.length===2?W(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),ct(Y,v,et)};function ct(Y,z,K){K===null?Y.matrix.copy(z.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(z.projectionMatrix),Y.projectionMatrixInverse.copy(z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Vo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let mt=null;function It(Y,z){if(h=z.getViewerPose(c||o),g=z,h!==null){let K=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;K.length!==v.cameras.length&&(v.cameras.length=0,et=!0);for(let gt=0;gt<K.length;gt++){let Dt=K[gt],qt=null;if(f!==null)qt=f.getViewport(Dt);else{let P=u.getViewSubImage(d,Dt);qt=P.viewport,gt===0&&(t.setRenderTargetTextures(y,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let Tt=F[gt];Tt===void 0&&(Tt=new Ze,Tt.layers.enable(gt),Tt.viewport=new ue,F[gt]=Tt),Tt.matrix.fromArray(Dt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Dt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(qt.x,qt.y,qt.width,qt.height),gt===0&&(v.matrix.copy(Tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),et===!0&&v.cameras.push(Tt)}let pt=n.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let gt=u.getDepthInformation(K[0]);gt&&gt.isValid&&gt.texture&&x.init(t,gt,n.renderState)}}for(let K=0;K<_.length;K++){let et=M[K],pt=_[K];et!==null&&pt!==void 0&&pt.update(et,z,c||o)}mt&&mt(Y,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}let Kt=new nf;Kt.setAnimationLoop(It),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}},zn=new Pi,Fv=new Ht;function Ov(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ef(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),_=y.envMap,M=y.envMapRotation;_&&(p.envMap.value=_,zn.copy(M),zn.x*=-1,zn.y*=-1,zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(zn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Bv(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let M=_.program;i.uniformBlockBinding(y,M)}function c(y,_){let M=n[y.id];M===void 0&&(g(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",p));let C=_.program;i.updateUBOMapping(y,C);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let _=u();y.__bindingPointIndex=_;let M=s.createBuffer(),C=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=n[y.id],M=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,R=M.length;T<R;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,v=I.length;F<v;F++){let S=I[F];if(f(S,T,F,C)===!0){let D=S.__offset,k=Array.isArray(S.value)?S.value:[S.value],B=0;for(let j=0;j<k.length;j++){let H=k[j],it=x(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,D+B,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,B),B+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,M,C){let T=y.value,R=_+"_"+M;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let I=C[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let _=y.uniforms,M=0,C=16;for(let R=0,I=_.length;R<I;R++){let F=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,S=F.length;v<S;v++){let D=F[v],k=Array.isArray(D.value)?D.value:[D.value];for(let B=0,j=k.length;B<j;B++){let H=k[B],it=x(H),W=M%C,at=W%it.boundary,ct=W+at;M+=at,ct!==0&&C-ct<it.storage&&(M+=C-ct),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=it.storage}}}let T=M%C;return T>0&&(M+=C-T),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){let _=y.target;_.removeEventListener("dispose",p);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function m(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:m}}var Jo=class{constructor(t={}){let{canvas:e=Wp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=_n,this.toneMappingExposure=1;let _=this,M=!1,C=0,T=0,R=null,I=-1,F=null,v=new ue,S=new ue,D=null,k=new Ct(0),B=0,j=e.width,H=e.height,it=1,W=null,at=null,ct=new ue(0,0,j,H),mt=new ue(0,0,j,H),It=!1,Kt=new xr,Y=!1,z=!1,K=new Ht,et=new Ht,pt=new b,gt=new ue,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Tt(){return R===null?it:1}let P=i;function fe(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eh}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){let U="webgl2";if(P=fe(U,w),P===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Jt,te,Ut,xe,Nt,A,E,O,$,nt,Z,wt,ht,vt,jt,st,yt,zt,Ft,St,ee,Vt,ae,L;function ft(){Jt=new ix(P),Jt.init(),Vt=new kv(P,Jt),te=new Kg(P,Jt,t,Vt),Ut=new Iv(P),te.reverseDepthBuffer&&Ut.buffers.depth.setReversed(!0),xe=new rx(P),Nt=new vv,A=new Dv(P,Jt,Ut,Nt,te,Vt,xe),E=new jg(_),O=new ex(_),$=new d0(P),ae=new Zg(P,$),nt=new nx(P,$,xe,ae),Z=new ax(P,nt,$,xe),Ft=new ox(P,te,A),st=new Jg(Nt),wt=new xv(_,E,O,Jt,te,ae,st),ht=new Ov(_,Nt),vt=new _v,jt=new Tv(Jt),zt=new Yg(_,E,O,Ut,Z,d,l),yt=new Cv(_,Z,te),L=new Bv(P,xe,te,Ut),St=new $g(P,Jt,xe),ee=new sx(P,Jt,xe),xe.programs=wt.programs,_.capabilities=te,_.extensions=Jt,_.properties=Nt,_.renderLists=vt,_.shadowMap=yt,_.state=Ut,_.info=xe}ft();let X=new th(_,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(j,H,!1))},this.getSize=function(w){return w.set(j,H)},this.setSize=function(w,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,H=U,e.width=Math.floor(w*it),e.height=Math.floor(U*it),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(j*it,H*it).floor()},this.setDrawingBufferSize=function(w,U,V){j=w,H=U,it=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,U,V,G){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,U,V,G),Ut.viewport(v.copy(ct).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,U,V,G){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,U,V,G),Ut.scissor(S.copy(mt).multiplyScalar(it).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(w){Ut.setScissorTest(It=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(R!==null){let lt=R.texture.format;N=lt===zh||lt===Nh||lt===Uh}if(N){let lt=R.texture.type,Mt=lt===Bi||lt===Vn||lt===gr||lt===bn||lt===Dh||lt===kh,Et=zt.getClearColor(),At=zt.getClearAlpha(),Ot=Et.r,Bt=Et.g,Pt=Et.b;Mt?(f[0]=Ot,f[1]=Bt,f[2]=Pt,f[3]=At,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ot,g[1]=Bt,g[2]=Pt,g[3]=At,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),jt.dispose(),Nt.dispose(),E.dispose(),O.dispose(),Z.dispose(),ae.dispose(),L.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",mu),X.removeEventListener("sessionend",gu),In.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=xe.autoReset,U=yt.enabled,V=yt.autoUpdate,G=yt.needsUpdate,N=yt.type;ft(),xe.autoReset=w,yt.enabled=U,yt.autoUpdate=V,yt.needsUpdate=G,yt.type=N}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){let U=w.target;U.removeEventListener("dispose",se),Ne(U)}function Ne(w){ci(w),Nt.remove(w)}function ci(w){let U=Nt.get(w).programs;U!==void 0&&(U.forEach(function(V){wt.releaseProgram(V)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,lt){U===null&&(U=Dt);let Mt=N.isMesh&&N.matrixWorld.determinant()<0,Et=lp(w,U,V,G,N);Ut.setMaterial(G,Mt);let At=V.index,Ot=1;if(G.wireframe===!0){if(At=nt.getWireframeAttribute(V),At===void 0)return;Ot=2}let Bt=V.drawRange,Pt=V.attributes.position,ve=Bt.start*Ot,Ee=(Bt.start+Bt.count)*Ot;lt!==null&&(ve=Math.max(ve,lt.start*Ot),Ee=Math.min(Ee,(lt.start+lt.count)*Ot)),At!==null?(ve=Math.max(ve,0),Ee=Math.min(Ee,At.count)):Pt!=null&&(ve=Math.max(ve,0),Ee=Math.min(Ee,Pt.count));let Le=Ee-ve;if(Le<0||Le===1/0)return;ae.setup(N,G,Et,V,At);let vi,pe=St;if(At!==null&&(vi=$.get(At),pe=ee,pe.setIndex(vi)),N.isMesh)G.wireframe===!0?(Ut.setLineWidth(G.wireframeLinewidth*Tt()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(N.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),Ut.setLineWidth(Lt*Tt()),N.isLineSegments?pe.setMode(P.LINES):N.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else N.isPoints?pe.setMode(P.POINTS):N.isSprite&&pe.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)pe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,Xe=N._multiDrawCounts,me=N._multiDrawCount,Ui=At?$.get(At).bytesPerElement:1,ts=Nt.get(G).currentProgram.getUniforms();for(let yi=0;yi<me;yi++)ts.setValue(P,"_gl_DrawID",yi),pe.render(Lt[yi]/Ui,Xe[yi])}else if(N.isInstancedMesh)pe.renderInstances(ve,Le,N.count);else if(V.isInstancedBufferGeometry){let Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xe=Math.min(V.instanceCount,Lt);pe.renderInstances(ve,Le,Xe)}else pe.render(ve,Le)};function he(w,U,V){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,Kr(w,U,V),w.side=Mn,w.needsUpdate=!0,Kr(w,U,V),w.side=Ce):Kr(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=jt.get(V),p.init(U),y.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let lt=N.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){let Et=lt[Mt];he(Et,V,N),G.add(Et)}else he(lt,V,N),G.add(lt)}),y.pop(),p=null,G},this.compileAsync=function(w,U,V=null){let G=this.compile(w,U,V);return new Promise(N=>{function lt(){if(G.forEach(function(Mt){Nt.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){N(w);return}setTimeout(lt,10)}Jt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let hi=null;function ji(w){hi&&hi(w)}function mu(){In.stop()}function gu(){In.start()}let In=new nf;In.setAnimationLoop(ji),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){hi=w,X.setAnimationLoop(w),w===null?In.stop():In.start()},X.addEventListener("sessionstart",mu),X.addEventListener("sessionend",gu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,R),p=jt.get(w,y.length),p.init(U),y.push(p),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(et),z=this.localClippingEnabled,Y=st.init(this.clippingPlanes,z),x=vt.get(w,m.length),x.init(),m.push(x),X.enabled===!0&&X.isPresenting===!0){let lt=_.xr.getDepthSensingMesh();lt!==null&&cl(lt,U,-1/0,_.sortObjects)}cl(w,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,at),qt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,qt&&zt.addToRenderList(x,w),this.info.render.frame++,Y===!0&&st.beginShadows();let V=p.state.shadowsArray;yt.render(V,w,U),Y===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=x.opaque,N=x.transmissive;if(p.setupLights(),U.isArrayCamera){let lt=U.cameras;if(N.length>0)for(let Mt=0,Et=lt.length;Mt<Et;Mt++){let At=lt[Mt];vu(G,N,w,At)}qt&&zt.render(w);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){let At=lt[Mt];xu(x,w,At,At.viewport)}}else N.length>0&&vu(G,N,w,U),qt&&zt.render(w),xu(x,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,U),ae.resetDefaultState(),I=-1,F=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function cl(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Kt.intersectsSprite(w)){G&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);let Mt=Z.update(w),Et=w.material;Et.visible&&x.push(w,Mt,Et,V,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Kt.intersectsObject(w))){let Mt=Z.update(w),Et=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),gt.copy(Mt.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Et)){let At=Mt.groups;for(let Ot=0,Bt=At.length;Ot<Bt;Ot++){let Pt=At[Ot],ve=Et[Pt.materialIndex];ve&&ve.visible&&x.push(w,Mt,ve,V,gt.z,Pt)}}else Et.visible&&x.push(w,Mt,Et,V,gt.z,null)}}let lt=w.children;for(let Mt=0,Et=lt.length;Mt<Et;Mt++)cl(lt[Mt],U,V,G)}function xu(w,U,V,G){let N=w.opaque,lt=w.transmissive,Mt=w.transparent;p.setupLightsView(V),Y===!0&&st.setGlobalState(_.clippingPlanes,V),G&&Ut.viewport(v.copy(G)),N.length>0&&$r(N,U,V),lt.length>0&&$r(lt,U,V),Mt.length>0&&$r(Mt,U,V),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function vu(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Oe(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Qe:Bi,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let lt=p.state.transmissionRenderTarget[G.id],Mt=G.viewport||v;lt.setSize(Mt.z,Mt.w);let Et=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(k),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),qt&&zt.render(V);let At=_.toneMapping;_.toneMapping=_n;let Ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Y===!0&&st.setGlobalState(_.clippingPlanes,G),$r(w,V,G),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Pt=0,ve=U.length;Pt<ve;Pt++){let Ee=U[Pt],Le=Ee.object,vi=Ee.geometry,pe=Ee.material,Lt=Ee.group;if(pe.side===Ce&&Le.layers.test(G.layers)){let Xe=pe.side;pe.side=Fe,pe.needsUpdate=!0,yu(Le,V,G,vi,pe,Lt),pe.side=Xe,pe.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}_.setRenderTarget(Et),_.setClearColor(k,B),Ot!==void 0&&(G.viewport=Ot),_.toneMapping=At}function $r(w,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,lt=w.length;N<lt;N++){let Mt=w[N],Et=Mt.object,At=Mt.geometry,Ot=G===null?Mt.material:G,Bt=Mt.group;Et.layers.test(V.layers)&&yu(Et,U,V,At,Ot,Bt)}}function yu(w,U,V,G,N,lt){w.onBeforeRender(_,U,V,G,N,lt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,V,G,w,lt),N.transparent===!0&&N.side===Ce&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,_.renderBufferDirect(V,U,G,N,w,lt),N.side=Mn,N.needsUpdate=!0,_.renderBufferDirect(V,U,G,N,w,lt),N.side=Ce):_.renderBufferDirect(V,U,G,N,w,lt),w.onAfterRender(_,U,V,G,N,lt)}function Kr(w,U,V){U.isScene!==!0&&(U=Dt);let G=Nt.get(w),N=p.state.lights,lt=p.state.shadowsArray,Mt=N.state.version,Et=wt.getParameters(w,N.state,lt,U,V),At=wt.getProgramCacheKey(Et),Ot=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?O:E).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",se),Ot=new Map,G.programs=Ot);let Bt=Ot.get(At);if(Bt!==void 0){if(G.currentProgram===Bt&&G.lightsStateVersion===Mt)return Mu(w,Et),Bt}else Et.uniforms=wt.getUniforms(w),w.onBeforeCompile(Et,_),Bt=wt.acquireProgram(Et,At),Ot.set(At,Bt),G.uniforms=Et.uniforms;let Pt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Mu(w,Et),G.needsLights=hp(w),G.lightsStateVersion=Mt,G.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Bt,G.uniformsList=null,Bt}function _u(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Es.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Mu(w,U){let V=Nt.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function lp(w,U,V,G,N){U.isScene!==!0&&(U=Dt),A.resetTextureUnits();let lt=U.fog,Mt=G.isMeshStandardMaterial?U.environment:null,Et=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,At=(G.isMeshStandardMaterial?O:E).get(G.envMap||Mt),Ot=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!V.morphAttributes.position,ve=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,Le=_n;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=_.toneMapping);let vi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=vi!==void 0?vi.length:0,Lt=Nt.get(G),Xe=p.state.lights;if(Y===!0&&(z===!0||w!==F)){let Ti=w===F&&G.id===I;st.setState(G,w,Ti)}let me=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Xe.state.version||Lt.outputColorSpace!==Et||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==At||G.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==Bt||Lt.morphTargets!==Pt||Lt.morphNormals!==ve||Lt.morphColors!==Ee||Lt.toneMapping!==Le||Lt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Lt.__version=G.version);let Ui=Lt.currentProgram;me===!0&&(Ui=Kr(G,U,N));let ts=!1,yi=!1,hl=!1,De=Ui.getUniforms(),un=Lt.uniforms;if(Ut.useProgram(Ui.program)&&(ts=!0,yi=!0,hl=!0),G.id!==I&&(I=G.id,yi=!0),ts||F!==w){te.reverseDepthBuffer?(K.copy(w.projectionMatrix),qp(K),Yp(K),De.setValue(P,"projectionMatrix",K)):De.setValue(P,"projectionMatrix",w.projectionMatrix),De.setValue(P,"viewMatrix",w.matrixWorldInverse);let Ti=De.map.cameraPosition;Ti!==void 0&&Ti.setValue(P,pt.setFromMatrixPosition(w.matrixWorld)),te.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&De.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,yi=!0,hl=!0)}if(N.isSkinnedMesh){De.setOptional(P,N,"bindMatrix"),De.setOptional(P,N,"bindMatrixInverse");let Ti=N.skeleton;Ti&&(Ti.boneTexture===null&&Ti.computeBoneTexture(),De.setValue(P,"boneTexture",Ti.boneTexture,A))}N.isBatchedMesh&&(De.setOptional(P,N,"batchingTexture"),De.setValue(P,"batchingTexture",N._matricesTexture,A),De.setOptional(P,N,"batchingIdTexture"),De.setValue(P,"batchingIdTexture",N._indirectTexture,A),De.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&De.setValue(P,"batchingColorTexture",N._colorsTexture,A));let ul=V.morphAttributes;if((ul.position!==void 0||ul.normal!==void 0||ul.color!==void 0)&&Ft.update(N,V,Ui),(yi||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,De.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(un.envMap.value=At,un.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),yi&&(De.setValue(P,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&cp(un,hl),lt&&G.fog===!0&&ht.refreshFogUniforms(un,lt),ht.refreshMaterialUniforms(un,G,it,H,p.state.transmissionRenderTarget[w.id]),Es.upload(P,_u(Lt),un,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Es.upload(P,_u(Lt),un,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&De.setValue(P,"center",N.center),De.setValue(P,"modelViewMatrix",N.modelViewMatrix),De.setValue(P,"normalMatrix",N.normalMatrix),De.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ti=G.uniformsGroups;for(let dl=0,up=Ti.length;dl<up;dl++){let bu=Ti[dl];L.update(bu,Ui),L.bind(bu,Ui)}}return Ui}function cp(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function hp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,V){Nt.get(w.texture).__webglTexture=U,Nt.get(w.depthTexture).__webglTexture=V;let G=Nt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let V=Nt.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){R=w,C=U,T=V;let G=!0,N=null,lt=!1,Mt=!1;if(w){let At=Nt.get(w);if(At.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(At.__hasExternalTextures)A.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pt=w.depthTexture;if(At.__boundDepthTexture!==Pt){if(Pt!==null&&Nt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);let Bt=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][V]:N=Bt[U],lt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[V]:N=Bt,v.copy(w.viewport),S.copy(w.scissor),D=w.scissorTest}else v.copy(ct).multiplyScalar(it).floor(),S.copy(mt).multiplyScalar(it).floor(),D=It;if(Ut.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&Ut.drawBuffers(w,N),Ut.viewport(v),Ut.scissor(S),Ut.setScissorTest(D),lt){let At=Nt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,V)}else if(Mt){let At=Nt.get(w.texture),Ot=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ot)}I=-1},this.readRenderTargetPixels=function(w,U,V,G,N,lt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){Ut.bindFramebuffer(P.FRAMEBUFFER,Et);try{let At=w.texture,Ot=At.format,Bt=At.type;if(!te.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&P.readPixels(U,V,G,N,Vt.convert(Ot),Vt.convert(Bt),lt)}finally{let At=R!==null?Nt.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,lt,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){let At=w.texture,Ot=At.format,Bt=At.type;if(!te.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){Ut.bindFramebuffer(P.FRAMEBUFFER,Et);let Pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.bufferData(P.PIXEL_PACK_BUFFER,lt.byteLength,P.STREAM_READ),P.readPixels(U,V,G,N,Vt.convert(Ot),Vt.convert(Bt),0);let ve=R!==null?Nt.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(P.FRAMEBUFFER,ve);let Ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xp(P,Ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,lt),P.deleteBuffer(Pt),P.deleteSync(Ee),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),N=Math.floor(w.image.width*G),lt=Math.floor(w.image.height*G),Mt=U!==null?U.x:0,Et=U!==null?U.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Mt,Et,N,lt),Ut.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let lt,Mt,Et,At,Ot,Bt;V!==null?(lt=V.max.x-V.min.x,Mt=V.max.y-V.min.y,Et=V.min.x,At=V.min.y):(lt=w.image.width,Mt=w.image.height,Et=0,At=0),G!==null?(Ot=G.x,Bt=G.y):(Ot=0,Bt=0);let Pt=Vt.convert(U.format),ve=Vt.convert(U.type);A.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Ee=P.getParameter(P.UNPACK_ROW_LENGTH),Le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vi=P.getParameter(P.UNPACK_SKIP_PIXELS),pe=P.getParameter(P.UNPACK_SKIP_ROWS),Lt=P.getParameter(P.UNPACK_SKIP_IMAGES),Xe=w.isCompressedTexture?w.mipmaps[N]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Et),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Ot,Bt,lt,Mt,Pt,ve,Xe.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Ot,Bt,Xe.width,Xe.height,Pt,Xe.data):P.texSubImage2D(P.TEXTURE_2D,N,Ot,Bt,lt,Mt,Pt,ve,Xe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let lt,Mt,Et,At,Ot,Bt,Pt,ve,Ee,Le=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(lt=V.max.x-V.min.x,Mt=V.max.y-V.min.y,Et=V.max.z-V.min.z,At=V.min.x,Ot=V.min.y,Bt=V.min.z):(lt=Le.width,Mt=Le.height,Et=Le.depth,At=0,Ot=0,Bt=0),G!==null?(Pt=G.x,ve=G.y,Ee=G.z):(Pt=0,ve=0,Ee=0);let vi=Vt.convert(U.format),pe=Vt.convert(U.type),Lt;if(U.isData3DTexture)A.setTexture3D(U,0),Lt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Lt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Xe=P.getParameter(P.UNPACK_ROW_LENGTH),me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ui=P.getParameter(P.UNPACK_SKIP_PIXELS),ts=P.getParameter(P.UNPACK_SKIP_ROWS),yi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bt),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Lt,N,Pt,ve,Ee,lt,Mt,Et,vi,pe,Le.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,N,Pt,ve,Ee,lt,Mt,Et,vi,Le.data):P.texSubImage3D(Lt,N,Pt,ve,Ee,lt,Mt,Et,vi,pe,Le),P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,ts),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yi),N===0&&U.generateMipmaps&&P.generateMipmap(Lt),Ut.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Ut.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Ut.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Oh?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===xa?"display-p3":"srgb"}};var jo=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new b,vr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},si=class extends Hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,or=new b,gs=new b,xs=new b,vs=new tt,ar=new tt,lf=new Ht,yo=new b,lr=new b,_o=new b,vd=new tt,Wl=new tt,yd=new tt,fi=class extends ke{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qo(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new vr(i,3,0,!1)),ms.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=ms,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Mo(yo.set(-.5,-.5,0),xs,o,gs,n,r),Mo(lr.set(.5,-.5,0),xs,o,gs,n,r),Mo(_o.set(.5,.5,0),xs,o,gs,n,r),vd.set(0,0),Wl.set(1,0),yd.set(1,1);let a=t.ray.intersectTriangle(yo,lr,_o,!1,or);if(a===null&&(Mo(lr.set(-.5,.5,0),xs,o,gs,n,r),Wl.set(0,1),a=t.ray.intersectTriangle(yo,_o,lr,!1,or),a===null))return;let l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:yn.getInterpolation(or,yo,lr,_o,vd,Wl,yd,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mo(s,t,e,i,n,r){vs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ar.x=r*vs.x-n*vs.y,ar.y=n*vs.x+r*vs.y):ar.copy(vs),s.copy(t),s.x+=ar.x,s.y+=ar.y,s.applyMatrix4(lf)}var _d=new b,Md=new ue,bd=new ue,Hv=new b,Sd=new Ht,bo=new b,Xl=new ln,Ed=new Ht,ql=new Rs,ta=class extends Q{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,bo),this.boundingBox.expandByPoint(bo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,bo),this.boundingSphere.expandByPoint(bo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xl.copy(this.boundingSphere),Xl.applyMatrix4(n),t.ray.intersectsSphere(Xl)!==!1&&(Ed.copy(n).invert(),ql.copy(t.ray).applyMatrix4(Ed),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ql)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ue,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Md.fromBufferAttribute(n.attributes.skinIndex,t),bd.fromBufferAttribute(n.attributes.skinWeight,t),_d.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=bd.getComponent(r);if(o!==0){let a=Md.getComponent(r);Sd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Hv.copy(_d).applyMatrix4(Sd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},yr=class extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gn=class extends di{constructor(t=null,e=1,i=1,n,r,o,a,l,c=$e,h=$e,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wd=new Ht,Vv=new Ht,ea=class s{constructor(t=[],e=[]){this.uuid=Zi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Ht;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Vv;wd.multiplyMatrices(a,e[r]),wd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Gn(e,t,t,ui,Yi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yr),this.bones.push(o),this.boneInverses.push(new Ht().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){let o=e[n];t.bones.push(o.uuid);let a=i[n];t.boneInverses.push(a.toArray())}return t}};var ks=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ia=new b,na=new b,Td=new Ht,cr=new Rs,So=new ln,Yl=new b,Ad=new b,_r=class extends ke{constructor(t=new de,e=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)ia.fromBufferAttribute(e,n-1),na.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ia.distanceTo(na);t.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(n),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;Td.copy(n).invert(),cr.copy(t.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),_=Eo(this,t,cr,l,m,y);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=Eo(this,t,cr,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=Eo(this,t,cr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Eo(this,t,cr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eo(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(ia.fromBufferAttribute(o,n),na.fromBufferAttribute(o,r),e.distanceSqToSegment(ia,na,Yl,Ad)>i)return;Yl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Yl);if(!(l<t.near||l>t.far))return{distance:l,point:Ad.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Mr=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rd=new Ht,eh=new Rs,wo=new ln,To=new b,sa=class extends ke{constructor(t=new de,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(n),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;Rd.copy(n).invert(),eh.copy(t.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);To.fromBufferAttribute(u,p),Cd(To,p,l,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)To.fromBufferAttribute(u,g),Cd(To,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(s,t,e,i,n,r,o){let a=eh.distanceSqToPoint(s);if(a<e){let l=new b;eh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cn=class extends di{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new tt:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new b,n=[],r=[],o=[],a=new b,l=new Ht;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Ye(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Ii{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ih=class extends br{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Ao=new b,Zl=new Hh,$l=new Hh,Kl=new Hh,nh=class extends Ii{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Ao.subVectors(n[0],n[1]).add(n[0]),c=Ao);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Ao.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Zl.calc(l),$l.calc(l),Kl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pd(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Gv(s,t){let e=1-s;return e*e*t}function Wv(s,t){return 2*(1-s)*s*t}function Xv(s,t){return s*s*t}function fr(s,t,e,i){return Gv(s,t)+Wv(s,e)+Xv(s,i)}function qv(s,t){let e=1-s;return e*e*e*t}function Yv(s,t){let e=1-s;return 3*e*e*s*t}function Zv(s,t){return 3*(1-s)*s*s*t}function $v(s,t){return s*s*s*t}function pr(s,t,e,i,n){return qv(s,t)+Yv(s,e)+Zv(s,i)+$v(s,n)}var ra=class extends Ii{constructor(t=new tt,e=new tt,i=new tt,n=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pr(t,n.x,r.x,o.x,a.x),pr(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sh=class extends Ii{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pr(t,n.x,r.x,o.x,a.x),pr(t,n.y,r.y,o.y,a.y),pr(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends Ii{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rh=class extends Ii{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends Ii{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(fr(t,n.x,r.x,o.x),fr(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oh=class extends Ii{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(fr(t,n.x,r.x,o.x),fr(t,n.y,r.y,o.y),fr(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Pd(a,l.x,c.x,h.x,u.x),Pd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new tt().fromArray(n))}return this}},Id=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:nh,CubicBezierCurve:ra,CubicBezierCurve3:sh,EllipseCurve:br,LineCurve:oa,LineCurve3:rh,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oh,SplineCurve:la}),ah=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Id[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Id[n.type]().fromJSON(n))}return this}},Sr=class extends ah{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new oa(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new aa(this.currentPoint.clone(),new tt(t,e),new tt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new ra(this.currentPoint.clone(),new tt(t,e),new tt(i,n),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new la(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new br(t,e,i,n,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wn=class s extends de{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ye(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new b,d=new tt,f=new b,g=new b,x=new b,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=i+y*h*n,M=Math.sin(_),C=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);let R=l[3*T+0]*M,I=l[3*T+1],F=l[3*T+0]*C;c.push(R,I,F)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let M=_+y*t.length,C=M,T=M+t.length,R=M+t.length+1,I=M+1;r.push(C,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Li=class s extends Wn{constructor(t=1,e=1,i=4,n=8){let r=new Sr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Vi=class s extends de{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new b,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ri=class s extends de{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function y(){let M=new b,C=new b,T=0,R=(e-t)/i;for(let I=0;I<=r;I++){let F=[],v=I/r,S=v*(e-t)+t;for(let D=0;D<=n;D++){let k=D/n,B=k*l+a,j=Math.sin(B),H=Math.cos(B);C.x=S*j,C.y=-v*i+p,C.z=S*H,u.push(C.x,C.y,C.z),M.set(j,R,H).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-v),F.push(g++)}x.push(F)}for(let I=0;I<n;I++)for(let F=0;F<r;F++){let v=x[F][I],S=x[F+1][I],D=x[F+1][I+1],k=x[F][I+1];t>0&&(h.push(v,S,k),T+=3),e>0&&(h.push(S,D,k),T+=3)}c.addGroup(m,T,0),m+=T}function _(M){let C=g,T=new tt,R=new b,I=0,F=M===!0?t:e,v=M===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;let S=g;for(let D=0;D<=n;D++){let B=D/n*l+a,j=Math.cos(B),H=Math.sin(B);R.x=F*H,R.y=p*v,R.z=F*j,u.push(R.x,R.y,R.z),d.push(0,v,0),T.x=j*.5+.5,T.y=H*.5*v+.5,f.push(T.x,T.y),g++}for(let D=0;D<n;D++){let k=C+D,B=S+D;M===!0?h.push(B,B+1,k):h.push(B+1,B,k),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$i=class s extends ri{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lh=class s extends de{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new b,M=new b,C=new b;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],M),f(e[T+2],C),l(_,M,C,y)}function l(y,_,M,C){let T=C+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let F=y.clone().lerp(M,I/T),v=_.clone().lerp(M,I/T),S=T-I;for(let D=0;D<=S;D++)D===0&&I===T?R[I][D]=F:R[I][D]=F.clone().lerp(v,D/S)}for(let I=0;I<T;I++)for(let F=0;F<2*(T-I)-1;F++){let v=Math.floor(F/2);F%2===0?(d(R[I][v+1]),d(R[I+1][v]),d(R[I][v])):(d(R[I][v+1]),d(R[I+1][v+1]),d(R[I+1][v]))}}function c(y){let _=new b;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let y=new b;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],M=o[y+2],C=o[y+4],T=Math.max(_,M,C),R=Math.min(_,M,C);T>.9&&R<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let y=new b,_=new b,M=new b,C=new b,T=new tt,R=new tt,I=new tt;for(let F=0,v=0;F<r.length;F+=9,v+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),T.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),C.copy(y).add(_).add(M).divideScalar(3);let S=p(C);x(T,v+0,y,S),x(R,v+2,_,S),x(I,v+4,M,S)}}function x(y,_,M,C){C<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Er=class extends Sr{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Sr().fromJSON(n))}return this}},Kv={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=cf(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=ey(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return wr(r,o,e,a,l,f,0),o}};function cf(s,t,e,i,n){let r,o;if(n===dy(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Ld(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ld(r,s[r],s[r+1],o);return o&&ya(o,o.next)&&(Ar(o),o=o.next),o}function Xn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ya(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function wr(s,t,e,i,n,r,o){if(!s)return;!o&&r&&oy(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?jv(s,i,n,r):Jv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ar(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qv(Xn(s),t,e),wr(s,t,e,i,n,r,2)):o===2&&ty(s,t,e,i,n,r):wr(Xn(s),t,e,i,n,r,1);break}}}function Jv(s){let t=s.prev,e=s,i=s.next;if(Pe(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=n>r?n>o?n:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&_s(n,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jv(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Pe(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=ch(f,g,t,e,i),y=ch(x,p,t,e,i),_=s.prevZ,M=s.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&_s(a,h,l,u,c,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&_s(a,h,l,u,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&_s(a,h,l,u,c,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&_s(a,h,l,u,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Qv(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!ya(n,r)&&hf(n,i,i.next,r)&&Tr(n,r)&&Tr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ar(i),Ar(i.next),i=s=r),i=i.next}while(i!==s);return Xn(i)}function ty(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cy(o,a)){let l=uf(o,a);o=Xn(o,o.next),l=Xn(l,l.next),wr(o,t,e,i,n,r,0),wr(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function ey(s,t,e,i){let n=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=cf(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(ly(c));for(n.sort(iy),r=0;r<n.length;r++)e=ny(n[r],e);return e}function iy(s,t){return s.x-t.x}function ny(s,t){let e=sy(s,t);if(!e)return t;let i=uf(e,s);return Xn(i,i.next),Xn(e,e.next)}function sy(s,t){let e=t,i=-1/0,n,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,c=n.y,h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Tr(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&ry(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function ry(s,t){return Pe(s.prev,s,t.prev)<0&&Pe(t.next,s,s.next)<0}function oy(s,t,e,i){let n=s;do n.z===0&&(n.z=ch(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,ay(n)}function ay(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function ch(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ly(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _s(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function cy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!hy(s,t)&&(Tr(s,t)&&Tr(t,s)&&uy(s,t)&&(Pe(s.prev,s,t.prev)||Pe(s,t.prev,t))||ya(s,t)&&Pe(s.prev,s,s.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ya(s,t){return s.x===t.x&&s.y===t.y}function hf(s,t,e,i){let n=Co(Pe(s,t,e)),r=Co(Pe(s,t,i)),o=Co(Pe(e,i,s)),a=Co(Pe(e,i,t));return!!(n!==r&&o!==a||n===0&&Ro(s,e,t)||r===0&&Ro(s,i,t)||o===0&&Ro(e,s,i)||a===0&&Ro(e,t,i))}function Ro(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Co(s){return s>0?1:s<0?-1:0}function hy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Tr(s,t){return Pe(s.prev,s,s.next)<0?Pe(s,t,s.next)>=0&&Pe(s,s.prev,t)>=0:Pe(s,t,s.prev)<0||Pe(s,s.next,t)<0}function uy(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function uf(s,t){let e=new hh(s.i,s.x,s.y),i=new hh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ld(s,t,e,i){let n=new hh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dy(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var mr=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];Dd(t),kd(i,t);let o=t.length;e.forEach(Dd);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,kd(i,e[l]);let a=Kv.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function kd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Us=class s extends lh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ca=class s extends de{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new b,g=new tt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let y=m+p,_=y,M=y+i+1,C=y+i+2,T=y+1;a.push(_,M,T),a.push(M,C,T)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ha=class s extends de{constructor(t=new Er([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Xt(n,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function c(h){let u=n.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;mr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];mr.isClockWise(y)===!0&&(g[p]=y.reverse())}let x=mr.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];n.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){let y=x[p],_=y[0]+u,M=y[1]+u,C=y[2]+u;i.push(_,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fy(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function fy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Yt=class s extends de{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new b,d=new b,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],_=m/i,M=0;m===0&&o===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(n+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(n+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(T+M,1-_),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let _=h[m][y+1],M=h[m][y],C=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&f.push(_,M,T),(m!==i-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class s extends de{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ua=class extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var da=class extends Hi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Po(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function py(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ns=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends Ns{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ru:r=t,a=2*e-i;break;case Cu:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:o=t,l=2*i-e;break;case Cu:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+y*o[c+C]+_*o[l+C]+M*o[u+C];return r}},dh=class extends Ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},fh=class extends Ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Gi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Po(e,this.TimeBufferType),this.values=Po(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Po(t.times,Array),values:Po(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case zc:e=this.InterpolantFactoryMethodLinear;break;case pl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&py(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===pl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=zc;var qn=class extends Gi{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=zo;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends Gi{};ph.prototype.ValueTypeName="color";var mh=class extends Gi{};mh.prototype.ValueTypeName="number";var gh=class extends Ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},fa=class extends Gi{InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}};fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends Gi{constructor(t,e,i){super(t,e,i)}};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=zo;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Gi{};xh.prototype.ValueTypeName="vector";var vh=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},my=new vh,yh=class{constructor(t){this.manager=t!==void 0?t:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Jl=new Ht,Ud=new b,Nd=new b,Cr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ud),Nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nd),e.updateMatrixWorld(),Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_h=class extends Cr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Vo*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Fs=class extends zs{constructor(t,e,i=0,n=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zd=new Ht,hr=new b,jl=new b,Mh=class extends Cr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),i.position.copy(hr),jl.copy(i.position),jl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jl),i.updateMatrixWorld(),n.makeTranslation(-hr.x,-hr.y,-hr.z),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}},Os=class extends zs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bh=class extends Cr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Bs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fd(){return performance.now()}var Vh="\\[\\]\\.:\\/",gy=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",xy="[^"+Vh.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",Gh),yy=/(WCOD+)?/.source.replace("WCOD",xy),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),by=new RegExp("^"+vy+yy+_y+My+"$"),Sy=["material","materials","bones","map"],Sh=class{constructor(t,e,i){let n=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(t){let e=by.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Sy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Sh;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);var Rn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ey=new Ps(-1,1,1,-1,0,1),Wh=class extends de{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},wy=new Wh,Ki=class{constructor(t){this._mesh=new Q(wy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ey)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var _a=class extends li{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ti.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ki(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr=class extends li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Ma=class extends li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ba=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _a(Rn),this.copyPass.material.blending=Be,this.clock=new Bs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lr!==void 0&&(o instanceof Lr?i=!0:o instanceof Ma&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sa=class extends li{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var df={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gs=class s extends li{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,o,{type:Qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Oe(r,o,{type:Qe});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Oe(r,o,{type:Qe});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=df;this.highPassUniforms=ti.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Rn;this.copyUniforms=ti.clone(h.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new re,this.fsQuad=new Ki(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gs.BlurDirectionX=new tt(1,0);Gs.BlurDirectionY=new tt(0,1);var ff={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ea=class extends li{constructor(){super();let t=ff;this.uniforms=ti.clone(t.uniforms),this.material=new ua({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ah?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Dr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ht},cameraProjectionMatrixInverse:{value:new Ht},cameraWorldMatrix:{value:new Ht},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new b(-1,-1,-1)},sceneBoxMax:{value:new b(1,1,1)}},vertexShader:`

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
		}`},kr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},wa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function pf(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Ty(t),i=e.length,n=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=e[o],l=2*Math.PI*a/i,c=new b(Math.cos(l),Math.sin(l),0).normalize();n[o*4]=(c.x*.5+.5)*255,n[o*4+1]=(c.y*.5+.5)*255,n[o*4+2]=127,n[o*4+3]=255}let r=new Gn(n,t,t);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}function Ty(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(n===-1&&r===t?(r=t-2,n=0):(r===t&&(r=0),n<0&&(n=t-1)),i[n*t+r]!==0){r-=2,n++;continue}else i[n*t+r]=o++;r++,n--}return i}var Ur={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Xh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraProjectionMatrixInverse:{value:new Ht},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Xh(s,t,e){let i=Ay(s,t,e),n="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=i[r];n+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return n}function Ay(s,t,e){let i=[];for(let n=0;n<s;n++){let r=2*Math.PI*t*n/s,o=Math.pow(n/(s-1),e);i.push(new b(Math.cos(r),Math.sin(r),o))}return i}var Ta=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,r){return t[0]*e+t[1]*i+t[2]*n+t[3]*r}noise(t,e){let i,n,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,x=e-f,p,m;g>x?(p=1,m=0):(p=0,m=1);let y=g-p+h,_=x-m+h,M=g-1+2*h,C=x-1+2*h,T=l&255,R=c&255,I=this.perm[T+this.perm[R]]%12,F=this.perm[T+p+this.perm[R+m]]%12,v=this.perm[T+1+this.perm[R+1]]%12,S=.5-g*g-x*x;S<0?i=0:(S*=S,i=S*S*this.dot(this.grad3[I],g,x));let D=.5-y*y-_*_;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[F],y,_));let k=.5-M*M-C*C;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[v],M,C)),70*(i+n+r)}noise3d(t,e,i){let n,r,o,a,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(i+c),f=1/6,g=(h+u+d)*f,x=h-g,p=u-g,m=d-g,y=t-x,_=e-p,M=i-m,C,T,R,I,F,v;y>=_?_>=M?(C=1,T=0,R=0,I=1,F=1,v=0):y>=M?(C=1,T=0,R=0,I=1,F=0,v=1):(C=0,T=0,R=1,I=1,F=0,v=1):_<M?(C=0,T=0,R=1,I=0,F=1,v=1):y<M?(C=0,T=1,R=0,I=0,F=1,v=1):(C=0,T=1,R=0,I=1,F=1,v=0);let S=y-C+f,D=_-T+f,k=M-R+f,B=y-I+2*f,j=_-F+2*f,H=M-v+2*f,it=y-1+3*f,W=_-1+3*f,at=M-1+3*f,ct=h&255,mt=u&255,It=d&255,Kt=this.perm[ct+this.perm[mt+this.perm[It]]]%12,Y=this.perm[ct+C+this.perm[mt+T+this.perm[It+R]]]%12,z=this.perm[ct+I+this.perm[mt+F+this.perm[It+v]]]%12,K=this.perm[ct+1+this.perm[mt+1+this.perm[It+1]]]%12,et=.6-y*y-_*_-M*M;et<0?n=0:(et*=et,n=et*et*this.dot3(this.grad3[Kt],y,_,M));let pt=.6-S*S-D*D-k*k;pt<0?r=0:(pt*=pt,r=pt*pt*this.dot3(this.grad3[Y],S,D,k));let gt=.6-B*B-j*j-H*H;gt<0?o=0:(gt*=gt,o=gt*gt*this.dot3(this.grad3[z],B,j,H));let Dt=.6-it*it-W*W-at*at;return Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[K],it,W,at)),32*(n+r+o+a)}noise4d(t,e,i,n){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(t+e+i+n)*l,p=Math.floor(t+x),m=Math.floor(e+x),y=Math.floor(i+x),_=Math.floor(n+x),M=(p+m+y+_)*c,C=p-M,T=m-M,R=y-M,I=_-M,F=t-C,v=e-T,S=i-R,D=n-I,k=F>v?32:0,B=F>S?16:0,j=v>S?8:0,H=F>D?4:0,it=v>D?2:0,W=S>D?1:0,at=k+B+j+H+it+W,ct=o[at][0]>=3?1:0,mt=o[at][1]>=3?1:0,It=o[at][2]>=3?1:0,Kt=o[at][3]>=3?1:0,Y=o[at][0]>=2?1:0,z=o[at][1]>=2?1:0,K=o[at][2]>=2?1:0,et=o[at][3]>=2?1:0,pt=o[at][0]>=1?1:0,gt=o[at][1]>=1?1:0,Dt=o[at][2]>=1?1:0,qt=o[at][3]>=1?1:0,Tt=F-ct+c,P=v-mt+c,fe=S-It+c,Jt=D-Kt+c,te=F-Y+2*c,Ut=v-z+2*c,xe=S-K+2*c,Nt=D-et+2*c,A=F-pt+3*c,E=v-gt+3*c,O=S-Dt+3*c,$=D-qt+3*c,nt=F-1+4*c,Z=v-1+4*c,wt=S-1+4*c,ht=D-1+4*c,vt=p&255,jt=m&255,st=y&255,yt=_&255,zt=a[vt+a[jt+a[st+a[yt]]]]%32,Ft=a[vt+ct+a[jt+mt+a[st+It+a[yt+Kt]]]]%32,St=a[vt+Y+a[jt+z+a[st+K+a[yt+et]]]]%32,ee=a[vt+pt+a[jt+gt+a[st+Dt+a[yt+qt]]]]%32,Vt=a[vt+1+a[jt+1+a[st+1+a[yt+1]]]]%32,ae=.6-F*F-v*v-S*S-D*D;ae<0?h=0:(ae*=ae,h=ae*ae*this.dot4(r[zt],F,v,S,D));let L=.6-Tt*Tt-P*P-fe*fe-Jt*Jt;L<0?u=0:(L*=L,u=L*L*this.dot4(r[Ft],Tt,P,fe,Jt));let ft=.6-te*te-Ut*Ut-xe*xe-Nt*Nt;ft<0?d=0:(ft*=ft,d=ft*ft*this.dot4(r[St],te,Ut,xe,Nt));let X=.6-A*A-E*E-O*O-$*$;X<0?f=0:(X*=X,f=X*X*this.dot4(r[ee],A,E,O,$));let J=.6-nt*nt-Z*Z-wt*wt-ht*ht;return J<0?g=0:(J*=J,g=J*J*this.dot4(r[Vt],nt,Z,wt,ht)),27*(h+u+d+f+g)}};var Ws=class s extends li{constructor(t,e,i,n,r,o,a){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=pf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Oe(this.width,this.height,{type:Qe}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ye({defines:Object.assign({},Dr.defines),uniforms:ti.clone(Dr.uniforms),vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new da,this.normalMaterial.blending=Be,this.pdMaterial=new ye({defines:Object.assign({},Ur.defines),uniforms:ti.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ye({defines:Object.assign({},kr.defines),uniforms:ti.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ye({uniforms:ti.clone(Rn.uniforms),vertexShader:Rn.vertexShader,fragmentShader:Rn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ma,blendDst:Hs,blendEquation:Ri,blendSrcAlpha:pa,blendDstAlpha:Hs,blendEquationAlpha:Ri}),this.blendMaterial=new ye({uniforms:ti.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Th,blendSrc:ma,blendDst:Hs,blendEquation:Ri,blendSrcAlpha:pa,blendDstAlpha:Hs,blendEquationAlpha:Ri}),this.fsQuad=new Ki(null),this.originalClearColor=new Ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ls,this.depthTexture.format=Sn,this.depthTexture.type=bn,this.normalRenderTarget=new Oe(this.width,this.height,{minFilter:$e,magFilter:$e,type:Qe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Xh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,i,n,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,r=e.clearAlpha||r,n!=null&&(t.setClearColor(n),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Ta,i=t*t*4,n=new Uint8Array(i);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;n[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,n[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Gn(n,t,t,ui,Bi);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}};Ws.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wt=(s,t,e)=>s<t?t:s>e?e:s,Si=(s,t,e)=>s+(t-s)*e,Aa=s=>s*s*(3-2*s),Ra=(s,t,e)=>Aa(Wt((e-s)/(t-s),0,1)),Ca=(s,t,e,i)=>Si(s,t,1-Math.exp(-e*i)),mf=Math.PI*2;function Ry(s){for(;s>Math.PI;)s-=mf;for(;s<-Math.PI;)s+=mf;return s}function Zn(s,t,e,i){return s+Ry(t-s)*(1-Math.exp(-e*i))}function Ie(s,t,e,i){let n=s-e,r=t-i;return Math.sqrt(n*n+r*r)}function Ke(s=1){let t=s%2147483647;t<=0&&(t+=2147483646);let e=()=>(t=t*16807%2147483647)/2147483647;return e.range=(i,n)=>i+(n-i)*e(),e.int=(i,n)=>Math.floor(i+(n-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}var ot=(s,t)=>s+(t-s)*Math.random(),ie=s=>s[Math.floor(Math.random()*s.length)],ge=s=>Math.random()<s,Cy="\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",Re=s=>String(s).replace(/[0-9]/g,t=>Cy[t]);function gf(s){s=Math.max(0,Math.ceil(s));let t=Math.floor(s/60),e=s%60;return Re(String(t).padStart(2,"0")+":"+String(e).padStart(2,"0"))}function Pa(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=xf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function xf(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}var vf=new Map;function q(s,t=.85,e){let i=s+"|"+t+(e?JSON.stringify(e):""),n=vf.get(i);return n||(n=new Gt(Object.assign({color:s,roughness:t,metalness:0},e||{})),vf.set(i,n)),n}var yf=new Map;function kt(s,t){let e=yf.get(s);return e||(e=t(),yf.set(s,e)),e}function Cn(s,t,e=12){return kt("tp_"+s,()=>{let i=[...t].reverse().map(([n,r])=>new tt(n,r));return new Wn(i,e)})}var Di={thigh:[[0,.03],[.07,.02],[.087,-.02],[.084,-.12],[.075,-.24],[.062,-.35],[.053,-.42],[0,-.445]],pantsThigh:[[0,.035],[.08,.025],[.095,-.02],[.092,-.14],[.084,-.28],[.072,-.4],[.066,-.43],[0,-.445]],shortsLeg:[[0,.04],[.09,.03],[.102,-.03],[.1,-.15],[.098,-.23],[0,-.24]],shin:[[0,.03],[.05,.02],[.055,-.03],[.062,-.1],[.056,-.19],[.043,-.3],[.034,-.39],[0,-.42]],pantsShin:[[0,.03],[.064,.02],[.066,-.06],[.064,-.2],[.062,-.34],[.064,-.4],[0,-.415]],sock:[[0,0],[.046,-0],[.047,-.1],[.04,-.14],[0,-.141]],upperArm:[[0,.03],[.05,.02],[.054,-.04],[.05,-.12],[.043,-.22],[.037,-.28],[0,-.3]],sleeveArm:[[0,.035],[.06,.025],[.063,-.04],[.058,-.14],[.051,-.24],[.047,-.29],[0,-.3]],shortSleeve:[[0,.03],[.058,.025],[.062,-.04],[.06,-.12],[.059,-.15],[0,-.152]],forearm:[[0,.025],[.037,.015],[.043,-.05],[.037,-.14],[.028,-.235],[0,-.25]],sleeveFore:[[0,.025],[.048,.015],[.05,-.06],[.045,-.16],[.04,-.23],[0,-.235]],neck:[[0,.09],[.044,.08],[.047,.03],[.056,-.01],[0,-.02]]};function Nr(s,t,e,i=1,n=1,r=1,o=0){return kt("cap_"+s,()=>{let a=new Li(t,e,4,8);return o&&a.rotateX(o),a.scale(i,n,r),a})}function Rt(s,t,e=!0){let i=new Q(s,t);return i.castShadow=e,i.receiveShadow=!1,i}var qh=new Map;function Py(s,t){let e=s+t;if(qh.has(e))return qh.get(e);let i=document.createElement("canvas");i.width=i.height=128;let n=i.getContext("2d");n.fillStyle=t,n.font="900 96px Cairo, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),64,70);let r=new cn(i);return r.colorSpace=qe,qh.set(e,r),r}var Ef=.92,Yh=.42,Iy=1.04,Ia=.41,Zh=.28,La=.25,_f=s=>q(s,.58),Mf=(s,t)=>"#"+new Ct(s).multiplyScalar(t).getHexString();function ka(s){let t=new ne,e=s.scale||1,i=s.build||1;t.scale.setScalar(e);let n=_f(s.skin),r=_f(Mf(s.skin,.72)),o=s.top||{type:"tshirt",color:"#c33"},a=s.bottom||{type:"pants",color:"#333"},l=q(o.color,.9),c=q(o.color2||"#ffffff",.9),h=q(a.color,.92),u=q(s.shoes||"#e8e4dc",.75),d=q(s.slippers?Mf(s.shoes||"#2e8b57",.7):"#f2f0ea",.8),f=q(s.hair||"#1a1210",.95),g={},x=(z,K,et,pt,gt)=>{let Dt=new yr;return Dt.name=K,Dt.position.set(et,pt,gt),z.add(Dt),g[K]=Dt,Dt},p=x(t,"hips",0,Ef,0),m=o.type==="galabeya"||o.type==="dress",y=Rt(kt("pelvis",()=>new Yt(1,18,12)),m?l:h);y.scale.set(.168*i,.13,.125*i),y.position.y=0,p.add(y);let _=Rt(kt("belt",()=>new oi(.152,.018,6,22)),m?l:h,!1);_.rotation.x=Math.PI/2,_.scale.set(i,.8*i,1),_.position.y=.08,p.add(_);let M=x(p,"spine",0,.06,0),C=kt("torso",()=>{let z=[[0,-.03],[.128,-.02],[.138,.06],[.132,.15],[.145,.25],[.163,.34],[.176,.4],[.172,.45],[.14,.49],[.085,.51],[0,.515]].map(([K,et])=>new tt(K,et));return new Wn(z,22)}),T=Rt(C,l);T.scale.set(1.08*i,1,.66*i),M.add(T);let R=kt("pec",()=>new Yt(.075,12,8));for(let z of[-1,1]){let K=Rt(R,(o.type==="tank",l),!1);K.position.set(z*.06*i,.36,.055*i),K.scale.set(1,.75,.55),M.add(K)}let I=Rt(kt("backM",()=>new Yt(.15,14,8)),l,!1);if(I.position.set(0,.36,-.035*i),I.scale.set(1.05*i,.6,.5*i),M.add(I),!["galabeya","dress","suit"].includes(o.type)){let z=Rt(kt("hem",()=>new oi(.14,.014,6,22)),l,!1);z.rotation.x=Math.PI/2,z.scale.set(1.08*i,.7*i,1),z.position.y=-.015,M.add(z)}if(o.type==="tank"){let z=kt("tankShoulder",()=>new Yt(.07,12,8));for(let et of[-1,1]){let pt=Rt(z,n);pt.position.set(et*.15*i,.45,0),pt.scale.set(1.1,.75,.95),M.add(pt)}let K=Rt(kt("tankV",()=>new Yt(.06,10,8)),n,!1);K.position.set(0,.47,.06*i),K.scale.set(1,.6,.5),M.add(K)}else if(["tshirt","jersey"].includes(o.type)){let z=Rt(kt("crew",()=>new oi(.06,.012,6,16)),o.type==="jersey"?c:l,!1);z.rotation.x=Math.PI/2-.25,z.position.set(0,.5,.008),M.add(z)}if(o.type==="tracksuit"){let z=Rt(kt("zip",()=>new ce(.012,.44,.01)),c,!1);z.position.set(0,.25,.098*i),M.add(z);let K=Rt(kt("tsCollar",()=>new ri(.068,.075,.06,14,1,!0)),l,!1);K.position.y=.52,M.add(K)}if(o.type==="shirt"){let z=Rt(kt("collar",()=>new oi(.062,.02,6,14)),c,!1);z.rotation.x=Math.PI/2-.2,z.position.y=.505,M.add(z);for(let K=0;K<4;K++){let et=Rt(kt("btn",()=>new Yt(.008,6,4)),c,!1);et.position.set(0,.42-K*.1,.1*i+(K===0?.008:0)),M.add(et)}}if(o.type==="suit"){let z=Rt(kt("tie",()=>new ce(.035,.26,.012)),q(o.color2||"#7a1f1f"),!1);z.position.set(0,.36,.098*i),M.add(z);let K=Rt(kt("shirtV",()=>new ce(.08,.14,.01)),q("#f2f2f2"),!1);K.position.set(0,.44,.094*i),M.add(K)}if(o.number!=null){let z=Rt(kt("numPlane",()=>new be(.19,.19)),new Gt({map:Py(o.number,o.numColor||"#fff"),transparent:!0,roughness:.9}),!1);z.position.set(0,.3,-.105*i),z.rotation.y=Math.PI,z.userData.keep=!0,M.add(z)}if(o.type==="galabeya"||o.type==="dress"){let z=Rt(kt("skirt",()=>{let K=[[.165,.1],[.2,-.1],[.26,-.45],[.31,-.8]].map(([et,pt])=>new tt(et,pt));return new Wn(K,22)}),q(o.color,.9,{side:Ce}));z.scale.set(i,1,.8*i),x(p,"skirt",0,0,0).add(z)}let F=x(M,"neck",0,.5,0),v=Rt(Cn("neck",Di.neck,12),n);F.add(v);let S=x(F,"head",0,.062,0);S.scale.setScalar(Iy);let D=Rt(kt("cranium",()=>new Yt(.105,22,16)),n);D.scale.set(.88,1,1),D.position.set(0,.125,-.008),S.add(D);let k=Rt(kt("jaw",()=>new Yt(.08,16,12)),n);k.scale.set(.82,.9,.95),k.position.set(0,.068,.018),S.add(k);for(let z of[-1,1]){let K=Rt(Nr("ear",.016,.03,.55,1,1),n,!1);K.position.set(z*.091,.112,-.006),K.rotation.z=z*.15,S.add(K)}let B=q("#f2eee6",.35),j=q("#2a1a10",.3);for(let z of[-1,1]){let K=Rt(kt("eyeW",()=>new Yt(.0125,10,8)),B,!1);K.position.set(z*.033,.122,.083),K.scale.set(1.25,.8,.6),S.add(K);let et=Rt(kt("eyeP",()=>new Yt(.0075,8,6)),j,!1);et.position.set(z*.033,.122,.0905),S.add(et);let pt=Rt(kt("lid",()=>new Yt(.014,10,6,0,Math.PI*2,0,Math.PI*.45)),n,!1);pt.position.set(z*.033,.124,.081),pt.scale.set(1.25,.8,.75),S.add(pt);let gt=Rt(kt("brow",()=>new ce(.034,.008,.012)),f,!1);gt.position.set(z*.034,.141,.088),gt.rotation.z=z*-.14,S.add(gt)}let H=Rt(kt("nose",()=>{let z=new $i(.016,.042,6);return z.rotateX(Math.PI/2+.55),z}),n,!1);H.position.set(0,.1,.098),S.add(H);let it=Rt(kt("nostril",()=>new Yt(.014,8,6)),n,!1);it.position.set(0,.088,.1),it.scale.set(1.2,.7,.8),S.add(it);let W=Rt(kt("lip",()=>new Li(.008,.026,3,6)),r,!1);if(W.rotation.z=Math.PI/2,W.position.set(0,.062,.09),S.add(W),s.mustache){let z=Rt(kt("mustache",()=>new Li(.009,.04,3,6)),f,!1);z.rotation.z=Math.PI/2,z.position.set(0,.075,.095),S.add(z)}if(s.beard){let z=Rt(kt("beard",()=>new Yt(.085,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2)),f,!1);z.position.set(0,.08,.02),z.scale.set(.9,.7,1),S.add(z)}if(s.glasses){let z=q("#111",.3);for(let et of[-1,1]){let pt=Rt(kt("glass",()=>new oi(.019,.0035,5,14)),z,!1);pt.position.set(et*.034,.122,.095),S.add(pt)}let K=Rt(kt("gbridge",()=>new ce(.03,.004,.004)),z,!1);K.position.set(0,.124,.097),S.add(K)}let at=new ne;S.add(at),Ny(at,s.hairStyle||"short",f,s);let ct=["tracksuit","shirt","galabeya","suit","dress","jacket"].includes(o.type),mt=["tshirt","jersey"].includes(o.type);for(let z of["l","r"]){let K=z==="l"?1:-1,et=x(M,z+"Sh",K*.19*i,.435,0),pt=Rt(kt("delt",()=>new Yt(.055,12,8)),o.type==="tank"?n:l);if(pt.scale.set(1.05,.95,1),et.add(pt),et.add(Rt(Cn(ct?"sleeveArm":"upperArm",ct?Di.sleeveArm:Di.upperArm),ct?l:n)),mt&&et.add(Rt(Cn("shortSleeve",Di.shortSleeve),l)),o.type==="tracksuit"){let P=Rt(kt("armStripe",()=>{let fe=new ce(.012,Zh,.02);return fe.translate(0,-Zh/2,0),fe}),c,!1);P.position.x=K*.05,et.add(P)}let gt=x(et,z+"El",0,-Zh+.02,0);if(gt.add(Rt(Cn(ct?"sleeveFore":"forearm",ct?Di.sleeveFore:Di.forearm),ct?l:n)),o.type==="tracksuit"){let P=Rt(kt("foreStripe",()=>{let fe=new ce(.012,La-.04,.02);return fe.translate(0,-(La-.04)/2,0),fe}),c,!1);P.position.x=K*.044,gt.add(P)}if(ct){let P=Rt(kt("wrist",()=>new ri(.027,.03,.03,8)),n,!1);P.position.y=-La+.01,gt.add(P)}let Dt=x(gt,z+"Hand",0,-La-.01,0),qt=Rt(Nr("palm",.032,.05,1.15,1,.62),n);qt.position.y=-.035,Dt.add(qt);let Tt=Rt(Nr("thumb",.012,.03),n,!1);Tt.position.set(0,-.03,.03),Tt.rotation.x=.6,Dt.add(Tt)}let It=a.type==="shorts",Kt=o.type==="galabeya"||o.type==="dress";for(let z of["l","r"]){let K=z==="l"?1:-1,et=x(p,z+"Th",K*.09*i,-.03,0),pt=Rt(Cn(It||Kt?"thigh":"pantsThigh",It||Kt?Di.thigh:Di.pantsThigh),It?n:h);if(pt.scale.set(Math.sqrt(i),1,Math.sqrt(i)),et.add(pt),It){let Tt=Rt(Cn("shortsLeg",Di.shortsLeg),h);Tt.scale.set(Math.sqrt(i),1,Math.sqrt(i)),et.add(Tt)}if(!It&&(a.type==="tracksuit"||o.type==="tracksuit")){let Tt=Rt(kt("legStripe",()=>{let P=new ce(.014,Yh,.022);return P.translate(0,-Yh/2,0),P}),c,!1);Tt.position.x=K*.088,et.add(Tt)}let gt=x(et,z+"Kn",0,-Yh,0),Dt=Rt(Cn(It?"shin":"pantsShin",It?Di.shin:Di.pantsShin),It?n:h);if(Dt.position.z=It?-.006:0,gt.add(Dt),It&&s.socks){let Tt=Rt(Cn("sock",Di.sock),q(s.socks,.95),!1);Tt.position.y=-Ia+.14,gt.add(Tt)}if(!It&&(a.type==="tracksuit"||o.type==="tracksuit")){let Tt=Rt(kt("shinStripe",()=>{let P=new ce(.014,Ia-.04,.02);return P.translate(0,-(Ia-.04)/2,0),P}),c,!1);Tt.position.x=K*.064,gt.add(Tt)}let qt=x(gt,z+"An",0,-Ia,0);if(s.slippers){let Tt=Rt(Nr("bareFoot",.036,.14,1.05,.62,1,Math.PI/2),n);Tt.position.set(0,-.032,.045),qt.add(Tt);let P=Rt(kt("slipSole",()=>new ce(.095,.018,.25)),d);P.position.set(0,-.062,.045),qt.add(P);let fe=Rt(kt("slipStrap",()=>new ce(.1,.03,.05)),u,!1);fe.position.set(0,-.035,.07),qt.add(fe)}else{let Tt=Rt(Nr("shoe",.046,.16,1.08,.72,1,Math.PI/2),u);Tt.position.set(0,-.032,.045),qt.add(Tt);let P=Rt(kt("sole",()=>new ce(.096,.02,.255)),d);P.position.set(0,-.063,.045),qt.add(P);let fe=Rt(kt("tongue",()=>new ce(.05,.03,.06)),d,!1);fe.position.set(0,-.004,.06),fe.rotation.x=-.4,qt.add(fe)}}let Y=Uy(t);return{root:t,J:g,look:s,scale:e,mesh:Y}}function wf(s){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=s==="cloth"?7:13,n=()=>(i=i*16807%2147483647)/2147483647;if(e.fillStyle="#f2f2f2",e.fillRect(0,0,256,256),s==="cloth"){for(let o=0;o<40;o++){let a=n()*256,l=n()*256,c=30+n()*90,h=n()*Math.PI,u=e.createLinearGradient(a,l,a+Math.cos(h)*c,l+Math.sin(h)*c);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,`rgba(0,0,0,${.06+n()*.08})`),u.addColorStop(1,"rgba(0,0,0,0)"),e.strokeStyle=u,e.lineWidth=4+n()*8,e.lineCap="round",e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+n()*30,l+n()*30,a+Math.cos(h)*c,l+Math.sin(h)*c),e.stroke()}for(let o=0;o<256;o+=2)e.fillStyle=`rgba(0,0,0,${.035+(o%4?.02:0)})`,e.fillRect(0,o,256,1);for(let o=0;o<256;o+=2)e.fillStyle="rgba(255,255,255,0.03)",e.fillRect(o,0,1,256)}else{for(let o=0;o<9e3;o++)e.fillStyle=`rgba(${n()<.5?"90,40,30":"255,230,220"},${n()*.06})`,e.fillRect(n()*256,n()*256,1+n(),1+n());for(let o=0;o<25;o++){let a=n()*256,l=n()*256,c=10+n()*40,h=e.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(160,70,60,0.05)"),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(a-c,l-c,c*2,c*2)}}let r=new cn(t);return r.colorSpace=qe,r.wrapS=r.wrapT=bi,r.repeat.set(s==="cloth"?3:2,s==="cloth"?3:2),r.anisotropy=4,r}var Da=wf("cloth"),bf=wf("skin"),Ly=new Gt({vertexColors:!0,roughness:.9,metalness:0,map:Da,bumpMap:Da,bumpScale:2.2}),Dy=new Gt({vertexColors:!0,roughness:.52,metalness:0,map:bf,bumpMap:bf,bumpScale:.6}),ky=new Gt({vertexColors:!0,roughness:.9,metalness:0,side:Ce,map:Da,bumpMap:Da,bumpScale:2.2});function Uy(s){s.updateMatrixWorld(!0);let t=new Ht().copy(s.matrixWorld).invert(),e=[];s.traverse(c=>{c.isBone&&e.push(c)});let i=new Map(e.map((c,h)=>[c,h])),n={body:[],skin:[],skirt:[]},r=[],o=new Ht;s.traverse(c=>{if(!c.isMesh||c.userData.keep)return;let h=c.parent;for(;h&&!h.isBone;)h=h.parent;if(!h)return;let u=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let y of Object.keys(u.attributes))y!=="position"&&y!=="normal"&&y!=="uv"&&u.deleteAttribute(y);u.attributes.uv||u.setAttribute("uv",new Ae(new Float32Array(u.attributes.position.count*2),2)),o.multiplyMatrices(t,c.matrixWorld),u.applyMatrix4(o);let d=u.attributes.position.count,f=new Float32Array(d*3),g=c.material.color;for(let y=0;y<d;y++)f[y*3]=g.r,f[y*3+1]=g.g,f[y*3+2]=g.b;u.setAttribute("color",new Ae(f,3));let x=new Uint16Array(d*4),p=new Float32Array(d*4),m=i.get(h);for(let y=0;y<d;y++)x[y*4]=m,p[y*4]=1;u.setAttribute("skinIndex",new Ae(x,4)),u.setAttribute("skinWeight",new Ae(p,4)),(c.material.side===Ce?n.skirt:c.material.roughness<.65?n.skin:n.body).push(u),r.push(c)});for(let c of r)c.parent.remove(c);let a=new ea(e),l=null;for(let[c,h]of Object.entries(n)){if(!h.length)continue;let u=Pa(h,!1);h.forEach(f=>f.dispose());let d=new ta(u,c==="skirt"?ky:c==="skin"?Dy:Ly);d.castShadow=!0,d.frustumCulled=!1,s.add(d),d.bind(a),l||(l=d)}return l}function Ny(s,t,e,i){let n=(a,l,c,h,u=1,d=1,f=1,g=0)=>{let x=Rt(a,e,!1);return x.position.set(l,c,h),x.scale.set(u,d,f),x.rotation.x=g,s.add(x),x},r=kt("hairCap2",()=>new Yt(.112,20,12,0,Math.PI*2,0,Math.PI*.6)),o=kt("hairVol",()=>new Yt(.08,14,8));switch(t){case"bald":break;case"buzz":n(r,0,.128,-.01,.86,.97,.98,-.5);break;case"curly":{n(r,0,.13,-.01,.9,1,1,-.5);let a=kt("curl",()=>new Yt(.032,8,6));for(let l=0;l<16;l++){let c=l/16*Math.PI*2;n(a,Math.cos(c)*.075,.205+Math.sin(l*1.7)*.012,Math.sin(c)*.085-.012)}n(o,0,.215,-.01,1,.6,1.1);break}case"cap":{let a=q(i.capColor||"#e8e2d0",.8),l=kt("capDome",()=>new Yt(.114,20,10,0,Math.PI*2,0,Math.PI*.52)),c=Rt(l,a,!1);c.position.set(0,.13,-.008),c.scale.set(.92,1,1.02),c.rotation.x=-.25,s.add(c);let h=Rt(kt("brim2",()=>new ri(.075,.075,.01,16,1,!1,-Math.PI/2,Math.PI)),a,!1);h.position.set(0,.162,.07),h.rotation.set(.2,Math.PI/2,0),h.scale.set(1.15,1,1),s.add(h),n(r,0,.122,-.016,.86,.9,.95,-.7);break}case"scarf":{let a=q(i.scarfColor||"#3b2a4a",.95),l=Rt(kt("scarf",()=>new Yt(.128,18,14,0,Math.PI*2,0,Math.PI*.62)),a,!1);l.position.set(0,.115,-.014),l.scale.set(.92,1,1),l.rotation.x=-.3,s.add(l);let c=Rt(kt("drape",()=>new ri(.11,.19,.24,16,1,!0)),a,!1);c.position.set(0,-.02,-.02),s.add(c);break}case"gray":n(r,0,.12,-.014,.89,.85,.98,-.95);break;case"short":default:{n(r,0,.13,-.01,.89,1,1,-.5),n(o,0,.198,.006,.95,.42,1.12);let a=kt("fringe2",()=>new Li(.018,.1,3,6)),l=n(a,0,.165,.078);l.rotation.z=Math.PI/2;break}}}var Tf=["hy","hrx","hry","hrz","srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex","ltx","ltz","lkx","lax","rtx","rtz","rkx","rax"],$h=["srx","sry","srz","nrx","nry","lsx","lsz","lex","rsx","rsz","rex"],zr={hy:0,hrx:0,hry:0,hrz:0,srx:0,sry:0,srz:0,nrx:0,nry:0,lsx:0,lsz:.1,lex:-.15,rsx:0,rsz:-.1,rex:-.15,ltx:0,ltz:0,lkx:0,lax:0,rtx:0,rtz:0,rkx:0,rax:0};function Ge(s){let t=s.channels==="upper"?$h:s.channels||Tf,e=Object.assign({},zr),i=s.frames.map(([n,r])=>{let o=Object.assign({},r==="def"?zr:e,r==="def"?{}:r);return e=o,[n,o]});return{dur:s.dur??i[i.length-1][0],loop:!!s.loop,hold:!!s.hold,fadeIn:s.fadeIn??.07,fadeOut:s.fadeOut??.15,channels:t,frames:i}}function Sf(s){return Ge({dur:1.5,frames:[[0,"def"],[.12,{hy:-.16,ltx:-.35,lkx:.75,rtx:-.35,rkx:.75,lax:.3,rax:.3,lsx:-1,rsx:-1,srx:.2}],[.38,{hy:-.48,hrz:s*1.3,srx:0,srz:s*.15,lsx:-2.9,rsx:-2.9,lsz:.25,rsz:-.25,lex:-.1,rex:-.1,ltx:-.1,rtx:-.1,ltz:-s*.35,rtz:-s*.25,lkx:.3,rkx:.4,lax:0,rax:0,nrx:0}],[.8,{hy:-.74,hrz:s*1.52}],[1.15,{hy:-.4,hrz:s*.6,lsx:-.6,rsx:-.6,lkx:.9,rkx:.9,ltx:-.5,rtx:-.5}],[1.5,"def"]]})}var zy={kick:Ge({frames:[[0,"def"],[.13,{rtx:.78,rkx:1.5,rax:.35,ltx:-.12,lkx:.28,hy:-.04,lsx:-.7,lsz:.6,rsx:.6,rsz:-.3,srx:.08,sry:.35,nry:-.25,hry:.12}],[.21,{rtx:-1.25,rkx:.12,rax:.4,ltx:.08,lkx:.22,lax:-.1,lsx:.55,lsz:.75,rsx:-.55,rsz:-.45,srx:-.12,sry:-.35,nry:.1,hry:-.15,hy:-.02}],[.36,{rtx:-.75,rkx:.55,rax:.15,srx:-.04,sry:-.15,hry:-.05}],[.52,"def"]]}),pass:Ge({frames:[[0,"def"],[.1,{rtx:.45,rtz:.12,rkx:.85,rax:.1,lkx:.2,lsx:-.3,lsz:.45,rsz:-.4,sry:.2,hry:.18,hy:-.03}],[.17,{rtx:-.62,rtz:-.22,rkx:.22,rax:.15,sry:-.18,hry:-.28,lsz:.5,rsz:-.35}],[.27,{rtx:-.3,rtz:-.08,rkx:.32,hry:-.1}],[.4,"def"]]}),slide:Ge({fadeIn:.05,frames:[[0,"def"],[.13,{hy:-.7,hrx:-.78,srx:.18,nrx:.45,rtx:-.88,rkx:.05,rax:.35,ltx:-1.25,ltz:.35,lkx:1.9,lax:.3,lsx:-.7,lsz:.75,lex:-.3,rsx:.55,rsz:-1.05,rex:-.1}],[.72,{hy:-.7}],[.98,{hy:-.38,hrx:-.1,srx:.3,rtx:-.55,rkx:.9,ltx:-1.3,lkx:1.7,ltz:.1,rsx:.2,rsz:-.5,lsx:-.4,lsz:.4,nrx:0}],[1.22,"def"]]}),fall:Ge({fadeIn:.05,frames:[[0,"def"],[.18,{hy:-.1,hrx:.45,lsx:-1.6,lsz:.5,rsx:-1.4,rsz:-.5,lex:-.3,rex:-.3,ltx:.4,lkx:.6,rtx:-.3,rkx:.3,nrx:-.3}],[.42,{hy:-.73,hrx:1.5,srx:0,lsx:-2.7,lsz:.4,rsx:-2.5,rsz:-.4,lex:-.2,rex:-.2,ltx:.05,lkx:.25,rtx:.1,rkx:.4,nrx:-.65}],[.6,{hy:-.75}],[1,{rkx:1.7,rtx:.25,rax:.5,lsx:-2.2,rsx:-1.2,rsz:-.9,nry:.5,nrx:-.9}],[1.35,{rkx:1.3,lsx:-2.6,rsx:-1.6,nry:.2}],[1.7,{rkx:1.75,lsx:-2.3,rsx:-1.1,nry:.5}],[2.05,{hy:-.44,hrx:.35,srx:.2,ltx:-1.45,lkx:1.7,lax:.25,rtx:.15,rkx:1.6,rax:0,lsx:-.4,lsz:.35,rsx:-.3,rsz:-.35,lex:-.4,rex:-.4,nrx:0,nry:0}],[2.45,{hy:-.14,hrx:.12,srx:.12,ltx:-.5,lkx:.7,lax:0,rtx:.05,rkx:.35,lsx:0,rsx:0,lsz:.15,rsz:-.15,lex:-.2,rex:-.2}],[2.75,"def"]]}),pull:Ge({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.18,{srx:-.18,lsx:-1.45,lsz:.12,lex:-.15,rsx:-1.35,rsz:-.12,rex:-.25,nrx:.12}],[.25,{}]]}),pulled:Ge({channels:"upper",loop:!0,frames:[[0,{srx:.32,lsx:-2.3,lsz:.6,lex:-.3,rsx:-1.2,rsz:-.9,rex:-.4,nrx:-.35}],[.22,{lsx:-1.3,lsz:.95,rsx:-2.25,rsz:-.5}],[.44,{lsx:-2.3,lsz:.6,rsx:-1.2,rsz:-.9}]]}),airplane:Ge({channels:"upper",loop:!0,frames:[[0,{lsx:-.1,lsz:1.45,rsx:-.1,rsz:-1.45,lex:0,rex:0,srz:.18,srx:.05}],[.6,{srz:-.18}],[1.2,{srz:.18}]]}),jump:Ge({loop:!0,frames:[[0,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8,lsz:.35,rsz:-.35,lex:-.2,rex:-.2}],[.32,{hy:.22,ltx:.05,lkx:.15,rtx:.05,rkx:.15,lax:.4,rax:.4,lsx:-3,rsx:-3}],[.64,{hy:-.1,ltx:-.3,lkx:.6,rtx:-.3,rkx:.6,lax:.3,rax:.3,lsx:-2.8,rsx:-2.8}]]}),sad:Ge({channels:"upper",hold:!0,dur:.5,frames:[[0,"def"],[.4,{srx:.15,nrx:.35,lsx:-2.5,lsz:.95,lex:-2,rsx:-2.5,rsz:-.95,rex:-2}],[.5,{}]]}),cheer:Ge({channels:"upper",loop:!0,frames:[[0,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,lsz:.2,rsx:-2.95,rsz:-.2,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}]]}),wave:Ge({channels:"upper",loop:!0,frames:[[0,{rsx:-2.5,rsz:-.45,rex:-.7,lsx:-.2,nrx:.15}],[.25,{rsz:-.95,rex:-.4}],[.5,{rsz:-.45,rex:-.7}]]}),point:Ge({channels:"upper",hold:!0,dur:.3,frames:[[0,"def"],[.25,{rsx:-1.55,rsz:-.15,rex:-.05,srx:-.05,nrx:.05}],[.3,{}]]}),holdBall:Ge({channels:"upper",hold:!0,dur:.25,frames:[[0,"def"],[.2,{lsx:-1.05,rsx:-1.05,lsz:.15,rsz:-.15,lex:-1.15,rex:-1.15}],[.25,{}]]}),throw:Ge({channels:"upper",frames:[[0,{lsx:-1.05,rsx:-1.05,lex:-1.15,rex:-1.15}],[.25,{rsx:-2.95,rsz:-.25,rex:-.9,lsx:-.6,sry:.45,srx:-.15}],[.4,{rsx:-.9,rex:-.1,sry:-.35,srx:.18}],[.7,"def"]]}),dazed:Ge({channels:"upper",loop:!0,frames:[[0,{nry:.32,srz:.08,nrx:.15,lsz:.25,rsz:-.25}],[.8,{nry:-.32,srz:-.08}],[1.6,{nry:.32,srz:.08}]]}),sit:Ge({hold:!0,dur:.4,fadeIn:.2,frames:[[0,"def"],[.35,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,lax:0,rax:0,srx:.06,lsx:-.5,rsx:-.5,lex:-.8,rex:-.8,lsz:.15,rsz:-.15}],[.4,{}]]}),sitCheer:Ge({loop:!0,frames:[[0,{hy:-.45,ltx:-1.5,lkx:1.5,rtx:-1.5,rkx:1.5,srx:.02,lsx:-2.7,lsz:.4,rsx:-2.7,rsz:-.4,lex:-.3,rex:-.3}],[.25,{lsx:-2.95,rsx:-2.95,lex:-.6,rex:-.6}],[.5,{lsx:-2.7,rsx:-2.7,lex:-.3,rex:-.3}]]}),diveL:Sf(-1),diveR:Sf(1),ready:Ge({hold:!0,dur:.3,fadeIn:.2,channels:["hy","srx","ltx","lkx","lax","rtx","rkx","rax","lsz","rsz","lex","rex","lsx","rsx","ltz","rtz"],frames:[[0,"def"],[.3,{hy:-.1,srx:.22,ltx:-.38,lkx:.75,lax:-.38,rtx:-.38,rkx:.75,rax:-.38,ltz:.12,rtz:-.12,lsz:.45,rsz:-.45,lsx:-.4,rsx:-.4,lex:-.7,rex:-.7}]]})},Xs=class{constructor(t){this.c=t,this.phase=Math.random()*Math.PI*2,this.spd=0,this.t=Math.random()*10,this.loco=Object.assign({},zr),this.out=Object.assign({},zr),this.layers=[],this.mode="normal",this.stepLenScale=1,this.ampScale=1,this.onStep=null,this.accel=0,this.turn=0,this.look=0,this.lookX=0}play(t,{speed:e=1,restart:i=!0}={}){let n=zy[t];if(!n)return;let r=n.channels===$h;for(let o of this.layers){if(o.name===t&&!i&&!o.stopping)return;(o.a.channels===$h===r||!r)&&(o.stopping=!0)}this.layers.push({name:t,a:n,t:0,w:0,speed:e,stopping:!1})}stop(t){for(let e of this.layers)(!t||e.name===t)&&(e.stopping=!0)}isPlaying(t){return this.layers.some(e=>e.name===t&&!e.stopping)}update(t,e){this.t+=t,this.spd=Ca(this.spd,e,10,t),this.locomotion(t);let i=this.out;for(let n of Tf)i[n]=this.loco[n];for(let n=0;n<this.layers.length;n++){let r=this.layers[n],o=r.a;r.t+=t*r.speed;let a=!1;r.t>=o.dur&&(o.loop?r.t%=o.dur:o.hold?r.t=o.dur:(r.t=o.dur,a=!0));let l=a||r.stopping?0:1,c=l>r.w?1/Math.max(.01,o.fadeIn):1/Math.max(.01,o.fadeOut);if(r.w=Wt(r.w+Math.sign(l-r.w)*c*t,0,1),(a||r.stopping)&&r.w<=0){this.layers.splice(n--,1);continue}let h=o.frames,u=0;for(;u<h.length-2&&h[u+1][0]<r.t;)u++;let[d,f]=h[u],[g,x]=h[Math.min(u+1,h.length-1)],p=g>d?Aa(Wt((r.t-d)/(g-d),0,1)):1,m=Aa(r.w);for(let y of o.channels)i[y]=Si(i[y],Si(f[y],x[y],p),m)}this.apply(i)}locomotion(t){let e=this.loco,i=this.spd,n=this.t;if(this.mode==="ride"){this.phase+=t*(1.5+i*1.2);let k=this.phase;Object.assign(e,zr),e.hy=-.32,e.srx=.32,e.nrx=-.25,e.ltx=-1.15+.38*Math.sin(k),e.lkx=1.35+.45*Math.cos(k),e.rtx=-1.15-.38*Math.sin(k),e.rkx=1.35-.45*Math.cos(k),e.lsx=-1.05,e.rsx=-1.05,e.lex=-.35,e.rex=-.35,e.lsz=.22,e.rsz=-.22;return}let r=Ra(2.2,5.2,i),o=Ra(.05,.7,i),a=1-o,l=Si(.6,1.3,r)*this.c.scale*this.stepLenScale,c=this.phase;this.phase+=i/l*Math.PI*t,this.onStep&&Math.floor(c/Math.PI)!==Math.floor(this.phase/Math.PI)&&o>.5&&this.onStep(r);let h=this.phase,u=Math.sin(h),d=Math.cos(h),f=Ra(5.6,7.2,i),g=(Si(.36,.7,r)+f*.08)*o*this.ampScale,x=(Si(.72,1.6,r)+f*.15)*o,p=Si(.05,.26,r)*o+.06*a,m=-.12*r,y=Math.max(0,d),_=Math.max(0,-d);e.ltx=-g*u+m,e.rtx=g*u+m,e.lkx=p+x*y*y,e.rkx=p+x*_*_;let M=Math.pow(Math.max(0,u),3),C=Math.pow(Math.max(0,-u),3),T=Math.max(0,-u)*Math.max(0,-d),R=Math.max(0,u)*Math.max(0,d);e.lax=-(e.ltx+e.lkx)*.75*o+y*.3*o-.06*a-M*.22*o+T*.45*o,e.rax=-(e.rtx+e.rkx)*.75*o+_*.3*o-.06*a-C*.22*o+R*.45*o,e.ltz=.02,e.rtz=-.02;let I=Math.abs(u);e.hy=o*Si(-.028*I,.055*(I-.6),r)-.025*r-.012*a,e.hry=-.09*u*o;let F=Wt(-this.turn*i*.022,-.13,.13);e.hrz=.03*u*o*(1-.5*r)+a*.018*Math.sin(n*.7)+F,e.hrx=0,e.srx=Si(.03,.13,r)*o+a*.015*Math.sin(n*2.1)+Wt(this.accel*.02,-.1,.14),e.sry=-e.hry*1.5,e.srz=-e.hrz*.8,e.nrx=-e.srx*.6;let v=a*.25*Math.sin(n*.37+this.phase);e.nry=-e.sry*.85+Wt(this.look+v,-1.15,1.15),e.nrx+=Wt(this.lookX,-.3,.45);let S=Si(.32,.85,r)*o*this.ampScale;e.lsx=S*u,e.rsx=-S*u,e.lsz=Si(.09,.17,r)+a*.01*Math.sin(n*2.1),e.rsz=-e.lsz;let D=Si(.22,1.3,r)*o+.15*a;e.lex=-D-Math.max(0,-e.lsx)*.45,e.rex=-D-Math.max(0,-e.rsx)*.45}apply(t){let e=this.c.J;e.hips.position.y=Ef+t.hy,e.hips.rotation.set(t.hrx,t.hry,t.hrz),e.spine.rotation.set(t.srx,t.sry,t.srz),e.neck.rotation.set(t.nrx*.5,t.nry*.5,0),e.head.rotation.set(t.nrx*.5,t.nry*.5,0),e.lSh.rotation.set(t.lsx,0,t.lsz),e.rSh.rotation.set(t.rsx,0,t.rsz),e.lEl.rotation.x=t.lex,e.rEl.rotation.x=t.rex,e.lTh.rotation.set(t.ltx,0,t.ltz),e.rTh.rotation.set(t.rtx,0,t.rtz),e.lKn.rotation.x=t.lkx,e.rKn.rotation.x=t.rkx,e.lAn.rotation.x=t.lax,e.rAn.rotation.x=t.rax,e.skirt&&(e.skirt.rotation.x=(t.ltx+t.rtx)*.25)}};function ei(s,t,e,{repeat:i,color:n=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=s,o.height=t;let a=o.getContext("2d");e(a,s,t);let l=new cn(o);return n&&(l.colorSpace=qe),l.anisotropy=r,i&&(l.wrapS=l.wrapT=bi,l.repeat.set(i[0],i[1])),l}function $n(s,t,e,i,n,r,o=1,a=4){for(let l=0;l<n;l++){s.fillStyle=r[Math.floor(i()*r.length)];let c=o+i()*(a-o);s.fillRect(i()*t,i()*e,c,c*(.5+i()))}}function pi(s,t,e,i,n,r,o,a){for(let l=0;l<n;l++){let c=i()*t,h=i()*e,u=o+i()*(a-o),d=s.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,r),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.beginPath(),s.ellipse(c,h,u,u*(.4+i()*.6),i()*3,0,7),s.fill()}}function Jh(s,t,e,i,n,r,o=8,a=22){s.strokeStyle=r;for(let l=0;l<n;l++){let c=i()*t,h=i()*e;s.lineWidth=1+i()*1.5,s.beginPath(),s.moveTo(c,h);for(let u=0;u<o;u++)c+=(i()-.5)*a*2,h+=(i()-.5)*a,s.lineTo(c,h),i()<.15&&s.moveTo(c,h);s.stroke()}}function Df(s,t,e,i,n=3){let r=Ke(n),o=48,a=Math.min(4096,Math.round(t*o)),l=Math.min(2048,Math.round(e*o)),c=a/t,h=l/e,u=f=>(f+t/2)*c,d=f=>(f+e/2)*h;return ei(a,l,f=>{if(s==="asphalt"){f.fillStyle="#7d766a",f.fillRect(0,0,a,l),pi(f,a,l,r,60,"rgba(60,55,48,0.35)",40,160),pi(f,a,l,r,40,"rgba(150,130,100,0.35)",40,140),$n(f,a,l,r,6e4,["rgba(40,36,32,0.25)","rgba(200,190,170,0.18)","rgba(120,110,95,0.3)"],1,3);for(let m=0;m<8;m++){f.fillStyle="rgba(60,57,54,0.28)";let y=r()*a,_=r()*l,M=50+r()*120,C=30+r()*60;f.beginPath(),f.moveTo(y,_);for(let T=1;T<=9;T++){let R=T/9*Math.PI*2;f.lineTo(y+Math.cos(R)*M*(.7+r()*.3),_+Math.sin(R)*C*(.7+r()*.3))}f.fill()}pi(f,a,l,r,8,"rgba(20,20,25,0.45)",20,50),Jh(f,a,l,r,60,"rgba(30,26,22,0.55)"),f.fillStyle="rgba(55,50,45,0.4)",f.fillRect(0,d(0)-3,a,6)}else if(s==="dirt"){f.fillStyle="#a58a64",f.fillRect(0,0,a,l),pi(f,a,l,r,90,"rgba(130,105,75,0.22)",40,200),pi(f,a,l,r,60,"rgba(195,170,130,0.3)",40,160),$n(f,a,l,r,7e4,["rgba(80,60,40,0.3)","rgba(220,200,165,0.25)","rgba(140,115,85,0.35)"],1,4),$n(f,a,l,r,3e3,["#8d8577","#c9c1b2","#6f675b"],3,7);for(let m=0;m<900;m++){let y=r()<.5?r()*l*.12:l-r()*l*.12,_=r()*a;f.strokeStyle=r()<.5?"rgba(120,130,60,0.6)":"rgba(150,140,70,0.6)",f.lineWidth=1.5,f.beginPath(),f.moveTo(_,y),f.lineTo(_+(r()-.5)*8,y-6-r()*8),f.stroke()}pi(f,a,l,r,30,"rgba(140,110,75,0.2)",60,120)}else if(s==="tiles"){f.fillStyle="#b9b3a6",f.fillRect(0,0,a,l);let m=.5*c;for(let y=0;y<l;y+=m)for(let _=0;_<a;_+=m){let M=165+Math.floor(r()*30);f.fillStyle=`rgb(${M},${M-6},${M-16})`,f.fillRect(_+1,y+1,m-2,m-2),r()<.06&&(f.fillStyle="rgba(90,85,75,0.5)",f.fillRect(_+1,y+1,m-2,m-2)),r()<.04&&Fy(f,_+m/2,y+m/2,m,r)}pi(f,a,l,r,50,"rgba(70,65,55,0.25)",40,160),$n(f,a,l,r,25e3,["rgba(60,55,50,0.2)","rgba(240,235,225,0.2)"],1,3)}else s==="roof"&&(f.fillStyle="#9b9488",f.fillRect(0,0,a,l),pi(f,a,l,r,30,"rgba(50,48,50,0.22)",40,140),pi(f,a,l,r,40,"rgba(180,170,150,0.35)",30,120),$n(f,a,l,r,5e4,["rgba(60,55,50,0.25)","rgba(220,215,200,0.2)"],1,3),Jh(f,a,l,r,50,"rgba(40,35,30,0.5)"),pi(f,a,l,r,6,"rgba(70,75,80,0.35)",60,140));f.save(),f.strokeStyle=s==="dirt"?"rgba(240,235,220,0.55)":"rgba(245,245,238,0.7)",f.lineWidth=6,f.lineCap="round";let g=(m,y,_,M)=>{f.beginPath(),f.moveTo(m,y);let C=12;for(let T=1;T<=C;T++){let R=T/C;f.lineTo(m+(_-m)*R+(r()-.5)*4,y+(M-y)*R+(r()-.5)*4)}f.stroke()},x=i.halfL,p=i.halfW;if((s==="asphalt"||s==="tiles"||s==="roof")&&(f.setLineDash([22,14]),g(u(0),d(-p),u(0),d(p)),f.setLineDash([]),f.beginPath(),f.arc(u(0),d(0),1.6*c,0,7),f.stroke()),s==="tiles"){f.strokeRect(u(-x),d(-p),2*x*c,2*p*h);for(let _ of[-1,1]){let M=u(_*x),C=u(_*(x-3.5));f.beginPath(),f.moveTo(M,d(-3.5)),f.lineTo(C,d(-3.5)),f.lineTo(C,d(3.5)),f.lineTo(M,d(3.5)),f.stroke()}f.lineWidth=4;let m=u(-x+2),y=d(p+1.2);for(let _=0;_<6;_++)f.strokeRect(m+_*.6*c,y,.6*c,.6*h)}if(s==="dirt"){f.lineWidth=8;for(let m of[-1,1])g(u(m*x),d(-p+.5),u(m*x),d(p-.5)),g(u(m*x),d(-4.5),u(m*(x-4)),d(-4.5)),g(u(m*(x-4)),d(-4.5),u(m*(x-4)),d(4.5)),g(u(m*(x-4)),d(4.5),u(m*x),d(4.5));g(u(0),d(-p+.5),u(0),d(p-.5))}f.restore()})}function Fy(s,t,e,i,n){s.strokeStyle="rgba(60,55,45,0.6)",s.lineWidth=1,s.beginPath(),s.moveTo(t-i/2,e+(n()-.5)*i),s.lineTo(t,e),s.lineTo(t+i/2,e+(n()-.5)*i),s.stroke()}var Kh=new Map;function mi(s,t=1,e={}){let i=s+t+JSON.stringify(e);if(Kh.has(i))return Kh.get(i);let n=Ke(t),r=ei(512,512,(o,a,l)=>{o.fillStyle=s,o.fillRect(0,0,a,l),pi(o,a,l,n,30,"rgba(0,0,0,0.08)",30,120),pi(o,a,l,n,20,"rgba(255,255,255,0.07)",30,100),$n(o,a,l,n,9e3,["rgba(0,0,0,0.07)","rgba(255,255,255,0.06)"],1,3);for(let c=0;c<6;c++){let h=n()*a,u=o.createLinearGradient(0,0,0,l*.6);u.addColorStop(0,"rgba(40,35,30,0.18)"),u.addColorStop(1,"rgba(40,35,30,0)"),o.fillStyle=u,o.fillRect(h,0,6+n()*18,l*.6)}if(e.bricks!==!1)for(let c=0;c<3;c++){let h=n()*a*.8,u=l*.3+n()*l*.6,d=40+n()*60,f=20+n()*40;o.fillStyle="#9a5a3c",o.fillRect(h,u,d,f),o.strokeStyle="rgba(200,190,170,0.6)",o.lineWidth=1;for(let g=u;g<u+f;g+=8)o.beginPath(),o.moveTo(h,g),o.lineTo(h+d,g),o.stroke()}Jh(o,a,l,n,8,"rgba(50,40,30,0.35)",6,14),e.band&&(o.fillStyle=e.band,o.fillRect(0,l*.86,a,l*.14),$n(o,a,l*.14,n,800,["rgba(0,0,0,0.12)"],1,4))},{repeat:[1,1]});return Kh.set(i,r),r}function kf(s="#6f7378"){return ei(128,256,(t,e,i)=>{t.fillStyle=s,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=8)t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,r,e,2),t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,r+3,e,2);let n=Ke(9);pi(t,e,i,n,10,"rgba(120,60,30,0.35)",10,40)})}function jh(s,{w:t=512,h:e=128,bg:i=null,color:n="#fff",font:r="900 72px Cairo",stroke:o=null,rot:a=0,shadow:l=null}={}){return ei(t,e,c=>{i&&(c.fillStyle=i,c.fillRect(0,0,t,e)),c.translate(t/2,e/2),c.rotate(a),c.font=r,c.textAlign="center",c.textBaseline="middle",c.direction="rtl",l&&(c.shadowColor=l,c.shadowBlur=8),o&&(c.strokeStyle=o,c.lineWidth=8,c.strokeText(s,0,4)),c.fillStyle=n,c.fillText(s,0,4)})}function qs(s,t,e="#fff",i=null){return ei(512,128,(n,r,o)=>{n.fillStyle=t,n.fillRect(0,0,r,o),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=6,n.strokeRect(6,6,r-12,o-12),n.fillStyle=e,n.font=i?"900 58px Cairo":"900 68px Cairo",n.textAlign="center",n.textBaseline="middle",n.direction="rtl",n.fillText(s,r/2,i?52:68),i&&(n.font="700 30px Cairo",n.fillText(i,r/2,102));let a=Ke(s.length);pi(n,r,o,a,6,"rgba(0,0,0,0.15)",10,50)})}var Af,Rf,Cf,Pf,If;var Lf;function Kn(){return Af||(Af=ei(128,128,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.6)"),e.addColorStop(.5,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)}))}function Uf(){return Rf||(Rf=ei(128,128,(s,t)=>{let e=Ke(5);for(let i=0;i<9;i++){let n=t/2+(e()-.5)*t*.4,r=t/2+(e()-.5)*t*.4,o=t*(.18+e()*.14),a=s.createRadialGradient(n,r,0,n,r,o);a.addColorStop(0,"rgba(255,255,255,0.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.beginPath(),s.arc(n,r,o,0,7),s.fill()}}))}function Nf(){return Cf||(Cf=ei(64,64,(s,t)=>{s.translate(t/2,t/2),s.fillStyle="#ffd23f",s.strokeStyle="#7a5200",s.lineWidth=3,s.beginPath();for(let e=0;e<10;e++){let i=e%2?11:26,n=e/10*Math.PI*2-Math.PI/2;s.lineTo(Math.cos(n)*i,Math.sin(n)*i)}s.closePath(),s.fill(),s.stroke()}))}function zf(){return Pf||(Pf=ei(64,256,(s,t,e)=>{let i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(.35,"rgba(255,255,255,0.18)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)},{aniso:1}))}function Ff(){return If||(If=ei(128,128,(s,t)=>{s.clearRect(0,0,t,t),s.strokeStyle="rgba(240,240,235,0.9)",s.lineWidth=2.5;for(let e=0;e<=t;e+=16)s.beginPath(),s.moveTo(e,0),s.lineTo(e,t),s.stroke(),s.beginPath(),s.moveTo(0,e),s.lineTo(t,e),s.stroke()},{repeat:[1,1]}))}function Qh(){return Lf||(Lf=ei(128,128,(s,t)=>{s.fillStyle="#20262a",s.fillRect(0,0,t,t),s.strokeStyle="rgba(220,235,245,0.9)",s.lineWidth=2;let e=t*.45,i=t*.55;for(let n=0;n<12;n++){let r=n/12*Math.PI*2+n*.3;s.beginPath(),s.moveTo(e,i),s.lineTo(e+Math.cos(r)*t*.3,i+Math.sin(r)*t*.3),s.lineTo(e+Math.cos(r+.2)*t,i+Math.sin(r+.2)*t),s.stroke()}for(let n=12;n<t;n+=18)s.beginPath(),s.arc(e,i,n,0,7),s.stroke();s.clearRect(e-18,i-14,34,30)}))}function Fr(s,t="rgba(30,30,30,0.75)",e=1024,i=256){return ei(e,i,n=>{n.clearRect(0,0,e,i),n.textAlign="center",n.textBaseline="middle",n.direction="rtl",s.forEach((r,o)=>{n.font=r.font||"900 90px Cairo",n.fillStyle=r.color||t,n.save(),n.translate(e*(r.x??.5),i*(r.y??.5)),n.rotate(r.rot||0),n.fillText(r.text,0,0),n.restore()})})}function rt(s,t,e,i,n=0,r=0,o=0,a){let l=new Q(new ce(s,t,e),i);return l.position.set(n,r,o),l.castShadow=!0,l.receiveShadow=!0,a&&a.add(l),l}function Qt(s,t,e,i,n=0,r=0,o=0,a,l=14){let c=new Q(new ri(s,t,e,l),i);return c.position.set(n,r,o),c.castShadow=!0,c.receiveShadow=!0,a&&a.add(c),c}var tu=new Map;function Oy(s,t,e){let i=s+t+e;return tu.has(i)||tu.set(i,new Gt({map:mi(s,t,{band:e}),roughness:.95})),tu.get(i)}function Or(s,{x0:t,x1:e,z:i,face:n=1,h:r=12,color:o="#c9a982",seed:a=1,floors:l=3,shop:c=null,depth:h=5,roofStuff:u=!0,lit:d=.5,door:f=!1}){let g=s.static,x=Ke(a*31+7),p=e-t,m=(t+e)/2,y=Oy(o,a,"rgba(70,60,50,0.35)"),_=q(new Ct(o).multiplyScalar(.82).getStyle(),.95),M=q("#6a6058",.95),C=[_,_,M,_,n>0?y:_,n>0?_:y],T=new Q(new ce(p,r,h),C);T.position.set(m,r/2,i-n*h/2),T.castShadow=!0,T.receiveShadow=!0,g.add(T),s.colliders.push({min:new b(t,0,Math.min(i,i-n*h)),max:new b(e,r,Math.max(i,i-n*h)),tag:"wall",face:n}),rt(p+.1,.25,.3,q("#d8cfc0"),m,r-.1,i+n*.1,g);for(let S=1;S<l+1;S++)rt(p,.12,.12,q("#b8ad9c"),m,S*3.1,i+n*.04,g);let R=1.05,I=1.35,F=Math.max(1,Math.floor(p/2.4)),v=p/F;for(let S=c?1:0;S<l+1;S++){let D=S*3.1+1.6;if(D+I/2>r-.4)break;for(let k=0;k<F;k++){let B=t+v*(k+.5);f&&S===0&&k===Math.floor(F/2)||By(s,B,D,i,n,R,I,x,d)}}if(f){let S=Math.floor(F/2),D=t+v*(S+.5),k=q("#5a3a22",.8);rt(1.3,2.4,.12,k,D,1.2,i+n*.04,g),rt(1.5,.15,.2,q("#c9c0b0"),D,2.48,i+n*.08,g),rt(1.8,.16,.5,q("#a39a8a"),D,.08,i+n*.25,g),s.doors.push(new b(D,0,i+n*.6))}if(c&&Hy(s,t+.3,e-.3,i,n,c),u){let S=1+Math.floor(x()*3);for(let D=0;D<S;D++){let k=t+.8+x()*(p-1.6),B=x();B<.4?Na(g,k,r,i-n*(1+x()*2),n):B<.7?Br(g,k,r,i-n*2.5):rt(1.2,1.4,1.2,q("#8a7f70"),k,r+.7,i-n*2.5,g)}}x()<.7&&Vy(g,t+.8+x()*(p-1.6),4.4+Math.floor(x()*2)*3.1,i,n)}function By(s,t,e,i,n,r,o,a,l){let c=s.static,h=q("#e2dccf",.8);rt(r+.16,.1,.18,h,t,e-o/2-.05,i+n*.06,c),rt(r+.16,.08,.12,h,t,e+o/2+.04,i+n*.04,c);let u=a(),d=q(a()<.5?"#6b4a2e":"#4f6a52",.85);if(u<.28){let p=rt(r,o,.06,d,t,e,i+n*.03,c);p.castShadow=!1;return}for(let p of[-1,1]){let m=rt(r/2,o,.04,d,t+p*(r/2+r/4+.02),e,i+n*.05,c);m.castShadow=!1}let f=a()<l,g=new Gt({color:f?"#3a3020":"#2c3a42",roughness:.15,metalness:.3,emissive:f?"#ffb85a":"#000000",emissiveIntensity:0}),x=new Q(new be(r,o),g);if(x.position.set(t,e,i+n*.015),n<0&&(x.rotation.y=Math.PI),s.dynamic.add(x),rt(.05,o,.03,h,t,e,i+n*.03,c).castShadow=!1,rt(r,.05,.03,h,t,e+.15,i+n*.03,c).castShadow=!1,a()<.6){let p=new Gt({color:a()<.5?"#c9a0a0":"#a8b8c8",roughness:1,emissive:f?"#ffb070":"#000",emissiveIntensity:0}),m=new Q(new be(r*.35,o*.9),p);m.position.set(t-r*.3,e,i+n*.02),n<0&&(m.rotation.y=Math.PI),s.dynamic.add(m),s.litMats.push({m:p,lit:f,k:.5})}s.litMats.push({m:g,lit:f,k:1}),s.windows.push({mesh:x,x0:t-r/2,x1:t+r/2,y0:e-o/2,y1:e+o/2,z:i,face:n,broken:!1,lit:f})}function Hy(s,t,e,i,n,r){let o=s.static,a=e-t,l=(t+e)/2,c=new Gt({map:kf(r.shutter||"#6f7378"),roughness:.6,metalness:.4});if(r.open){let u=q("#2a2420",1);rt(a*.8,2.5,.1,u,l,1.25,i+n*.02,o);let d=Ke(a*10);for(let x=0;x<3;x++){rt(a*.75,.05,.3,q("#6a4a2a"),l,.6+x*.6,i+n*.15,o);for(let p=0;p<10;p++){let m=["#d84b4b","#f2d24b","#4a8bd8","#3c9a4a","#f08a30","#eee"][Math.floor(d()*6)];rt(.15,.25,.15,q(m),l-a*.35+p/9*a*.7,.75+x*.6,i+n*.18,o).castShadow=!1}}let f={pos:new b(l,2.3,i+n*.8),color:"#ffe0a0",intensity:6,dist:7,shadow:!1};s.pointLights.push(f);let g=new Q(new Yt(.08,8,6),new re({color:"#fff3c8"}));g.position.copy(f.pos),s.dynamic.add(g),s.nightOnly.push(g)}else{let u=rt(a*.8,2.5,.08,c,l,1.25,i+n*.04,o);u.castShadow=!1}let h=new Q(new be(Math.min(a*.85,4.2),1),new Gt({map:qs(r.name,r.bg,"#fff",r.sub),roughness:.7,emissive:"#ffffff",emissiveIntensity:0}));if(h.position.set(l,3,i+n*.1),n<0&&(h.rotation.y=Math.PI),o.add(h),s.litMats.push({m:h.material,lit:!0,k:.25,emissiveMap:!0}),r.awning){let u=Math.floor(a/.5);for(let d=0;d<u;d++){let f=rt(.5,.06,1.3,q(d%2?"#e9e2cf":r.awning),t+.25+d*.5+(a-u*.5)/2,2.6,i+n*.6,o);f.rotation.x=n*.28}}}function Ua(s,t,e,i,n,r=3.2){let o=s.static,a=1.15;rt(r,.16,a,q("#8a8070"),t,e,i+n*a/2,o);let l=q("#2f2a24",.6,{metalness:.5});rt(r,.06,.06,l,t,e+.95,i+n*a,o),rt(.06,.06,a,l,t-r/2,e+.95,i+n*a/2,o),rt(.06,.06,a,l,t+r/2,e+.95,i+n*a/2,o);for(let h=0;h<=14;h++){let u=t-r/2+h/14*r;rt(.035,.9,.035,l,u,e+.5,i+n*a,o).castShadow=!0}for(let h of[-1,1])for(let u=1;u<5;u++)rt(.035,.9,.035,l,t+h*r/2,e+.5,i+n*(u/5)*a,o);rt(1.1,2.1,.06,q("#5a3a22"),t-.4,e+1.1,i+n*.03,o),Qt(.18,.13,.3,q("#a4532e"),t+1.1,e+.23,i+n*.35,o);let c=new Q(new Yt(.28,10,8),q("#3c7a3a"));c.position.set(t+1.1,e+.6,i+n*.35),c.castShadow=!0,o.add(c),s.balconies.push({min:new b(t-r/2,e+.08,Math.min(i,i+n*a)),max:new b(t+r/2,e+1,Math.max(i,i+n*a)),momPos:new b(t+.2,e+.08,i+n*.45),face:n}),s.colliders.push({min:new b(t-r/2,e-.08,Math.min(i,i+n*a)),max:new b(t+r/2,e+.08,Math.max(i,i+n*a)),tag:"balconyFloor"})}function Vy(s,t,e,i,n){let r=q("#e8e4dc",.6);rt(.85,.5,.45,r,t,e,i+n*.25,s);let o=q("#9a9a9a");for(let a=0;a<6;a++)rt(.05,.38,.02,o,t-.3+a*.12,e,i+n*.48,s).castShadow=!1;rt(.03,.03,.3,q("#555"),t+.3,e-.27,i+n*.3,s)}function Na(s,t,e,i,n=1){let r=q("#e4e4e0",.5),o=new Q(new Yt(.55,16,8,0,Math.PI*2,0,Math.PI*.28),r);o.material=q("#e4e4e0",.5,{side:Ce}),o.position.set(t,e+.9,i),o.rotation.x=n*1.9,o.castShadow=!0,s.add(o),Qt(.03,.03,.9,q("#666"),t,e+.45,i,s),Qt(.02,.02,.6,q("#666"),t,e+1,i+n*.3,s).rotation.x=n*.8}function Br(s,t,e,i){let n=q("#2f2f33",.6);Qt(.6,.6,1.4,n,t,e+1.3,i,s,18),Qt(.3,.3,.12,n,t,e+2.05,i,s);for(let r of[-1,1])for(let o of[-1,1])rt(.06,.6,.06,q("#555"),t+r*.4,e+.3,i+o*.4,s)}function za(s,t,e,i,n=.4){let r=[];for(let h=0;h<=10;h++){let u=h/10,d=new b().lerpVectors(t,e,u);d.y-=Math.sin(u*Math.PI)*n,r.push(d)}let o=new _r(new de().setFromPoints(r),new ks({color:"#222"}));s.add(o);let a=["#e0e0ff","#d84b4b","#f2d24b","#4a8bd8","#ffffff","#3c9a4a","#f08a30","#c070c0"],l=[],c=Math.floor(t.distanceTo(e)/.8);for(let h=1;h<c;h++){if(i()<.25)continue;let u=h/c,d=new b().lerpVectors(t,e,u);d.y-=Math.sin(u*Math.PI)*n;let f=.4+i()*.35,g=.45+i()*.45,x=new be(f,g);x.translate(0,-g/2,0);let p=new Q(x,q(a[Math.floor(i()*a.length)],.95,{side:Ce}));p.position.copy(d),p.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,p.castShadow=!0,p.userData.dyn=!0,s.add(p),l.push(p)}return l}function Fa(s,t,e,i=.6,n="#151515"){let r=[];for(let o=0;o<=16;o++){let a=o/16,l=new b().lerpVectors(t,e,a);l.y-=Math.sin(a*Math.PI)*i,r.push(l)}s.add(new _r(new de().setFromPoints(r),new ks({color:n})))}function ki(s,t,e,i,{flicker:n=!1,h:r=5.6,arm:o=1.3,wall:a=!1}={}){let l=s.static,c=q("#2a2a2a",.5,{metalness:.6});a||(Qt(.07,.1,r,c,t,r/2,e,l,8),s.colliders.push({min:new b(t-.1,0,e-.1),max:new b(t+.1,r,e+.1),tag:"pole"}));let h=rt(.06,.06,o,c,t,r,e+i*o/2,l);h.castShadow=!1;let u=new Q(new ri(.08,.28,.18,12),q("#333",.5));u.position.set(t,r-.05,e+i*o),l.add(u);let d=new Gt({color:"#fff5d6",emissive:"#ffd27a",emissiveIntensity:0}),f=new Q(new Yt(.11,10,8),d);f.position.set(t,r-.16,e+i*o),s.dynamic.add(f),s.lamps.push({pos:f.position.clone(),bulbMat:d,flicker:n,face:i,wall:a,color:n?"#ffc070":"#ffd28a"})}function Of(s,t,e,i=0){let n=new ne;n.position.set(t,0,e),n.rotation.y=i,s.static.add(n);let r=q("#2d6aa8",.6);rt(2.4,.9,1.1,r,0,.85,0,n),rt(2.45,.08,1.15,q("#f1c232"),0,1,0,n),rt(2.5,.06,1.2,q("#c8c8c8",.4,{metalness:.6}),0,1.33,0,n);let o=q("#c9c9c9",.3,{metalness:.85});Qt(.32,.36,.55,o,-.6,1.62,0,n),Qt(.25,.28,.45,o,.25,1.58,.1,n),Qt(.3,.3,.04,o,-.6,1.92,0,n);for(let h of[-1,1]){let u=Qt(.35,.35,.12,q("#222"),h*.75,.35,.6,n,16);u.rotation.x=Math.PI/2}let a=new Q(new be(2.2,.45),new Gt({map:qs("\u0641\u0648\u0644 \u0648\u0641\u0644\u0627\u0641\u0644","#2d6aa8","#fff"),roughness:.7}));a.position.set(0,.75,.56),n.add(a),Qt(.025,.025,1.4,q("#555"),.95,2,0,n,6);let l=new b(.95,2.65,0).applyEuler(new Pi(0,i,0)).add(new b(t,0,e));s.pointLights.push({pos:l,color:"#ffeab0",intensity:9,dist:9,shadow:!1});let c=new Q(new Yt(.09,8,6),new re({color:"#fff6d0"}));c.position.copy(l),s.dynamic.add(c),s.nightOnly.push(c),Bf(s,n,2.5,1.4,1.2,.85)}function Bf(s,t,e,i,n,r=i/2){let o=Math.abs(Math.cos(t.rotation.y))>.5,a=(o?e:n)/2,l=(o?n:e)/2;s.colliders.push({min:new b(t.position.x-a,0,t.position.z-l),max:new b(t.position.x+a,r+i/2,t.position.z+l),tag:"obj",solid:!0})}function Hf(s,t,e,i=0,n="#c9b48a"){let r=new ne;r.position.set(t,0,e),r.rotation.y=i,s.static.add(r);let o=q(n,.45,{metalness:.3});rt(3.9,.6,1.6,o,0,.62,0,r),rt(2,.55,1.45,o,-.2,1.18,0,r);let a=q("#2a3540",.1,{metalness:.5});rt(2.02,.42,1.3,a,-.2,1.2,0,r),rt(1.6,.44,1.47,a,-.2,1.2,0,r);let l=q("#d0d0d0",.25,{metalness:.9});rt(.12,.18,1.62,l,1.97,.45,0,r),rt(.12,.18,1.62,l,-1.97,.45,0,r);for(let c of[-1,1]){let h=new Q(new Vi(.12,12),q("#fff8e0",.2));h.position.set(1.96,.72,c*.55),h.rotation.y=Math.PI/2,r.add(h)}for(let c of[-1.25,1.25])for(let h of[-.78,.78]){let u=Qt(.3,.3,.2,q("#1b1b1b"),c,.3,h,r,16);u.rotation.x=Math.PI/2}rt(1.8,.04,1.3,q("#8a7f6a"),-.2,1.47,0,r).castShadow=!1,Bf(s,r,3.9,1.5,1.6,.75)}function Vf(){let s=new ne,t=q("#e0a21c",.4,{metalness:.3}),e=q("#1b1b1b",.7);rt(2.2,.8,1.2,t,0,.75,0,s),rt(1.6,.9,1.25,e,-.25,1.55,0,s).material=q("#111",.9),rt(2.3,.08,1.35,e,-.1,2.05,0,s),rt(.08,.9,1.15,q("#2a3540",.1,{metalness:.5}),.85,1.55,0,s);let i=Qt(.25,.45,.6,t,1.2,.75,0,s);i.rotation.z=Math.PI/2,rt(.4,.04,1.1,q("#ffd23f"),.2,1.15,0,s);let n=new Q(new be(1.1,.35),new re({map:jh("\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",{color:"#b81f1f",font:"900 70px Cairo"}),transparent:!0}));n.position.set(-1.11,1,0),n.rotation.y=-Math.PI/2,s.add(n);let r=[];for(let[l,c]of[[1.25,0],[-.75,.62],[-.75,-.62]]){let h=Qt(.26,.26,.16,e,l,.26,c,s,14);h.rotation.x=Math.PI/2,r.push(h)}let o=new Q(new Yt(.1,8,6),new re({color:"#fff4c0"}));o.position.set(1.45,.95,0),s.add(o);let a=[];for(let l=0;l<6;l++){let c=new Q(new Yt(.045,6,4),new re({color:["#ff3355","#33ff88","#3388ff","#ffdd33"][l%4]}));c.position.set(-1.2+l*.42,2.1,.68),s.add(c),a.push(c)}return s.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),{grp:s,wheels:r,disco:a}}function Gf(s,t,e,i){let n=q("#a8452c",.9),r=q("#c65a3c",.9);for(let o of[-1,1]){let a=o*e,l=rt(.45,.22,.22,n,t,.11,a,s.static);l.rotation.y=.15*o;let c=rt(.45,.22,.22,r,t+.03,.33,a+.02,s.static);c.rotation.y=-.1*o,s.colliders.push({min:new b(t-.24,0,a-.13),max:new b(t+.24,.45,a+.13),tag:"post"})}if(i<0){let o=rt(.26,.03,.1,q("#2e8b57"),t+.2,.015,e+.45,s.static);o.rotation.y=.6}}function Wf(s,t,e){let i=["#2e8b57","#3a6fd8","#e05a30","#222"],n=0;for(let r of[-1,1]){let o=r*e;for(let a of[-.06,.08]){let l=rt(.28,.035,.11,q(i[n++%4],.8),t+a,.018,o+a,s.static);l.rotation.y=r*.4+a*4;let c=rt(.04,.05,.12,q("#eee"),t+a+.05,.04,o+a,s.static);c.rotation.y=l.rotation.y}s.colliders.push({min:new b(t-.18,0,o-.12),max:new b(t+.18,.08,o+.12),tag:"post"})}}function Xf(s,t,e,i,n){let r=q("#8a5a3a",.6,{metalness:.5}),o=q("#d8d4c8",.5,{metalness:.3}),a=1.4,l=.06;for(let d of[-1,1]){let f=Qt(l,l,i,d>0?o:r,t,i/2,d*e,s.static,10);s.colliders.push({min:new b(t-l,0,d*e-l),max:new b(t+l,i,d*e+l),tag:"post",metal:!0});let g=Qt(.03,.03,Math.hypot(a,i),r,t+n*a/2,i/2,d*e,s.static,6);g.rotation.z=n*Math.atan2(a,i),rt(.05,.05,.05,r,t+n*a,.02,d*e,s.static)}let c=Qt(l,l,e*2,o,t,i,0,s.static,10);c.rotation.x=Math.PI/2,s.colliders.push({min:new b(t-l,i-l,-e),max:new b(t+l,i+l,e),tag:"post",metal:!0});let h=new Gt({map:Ff(),transparent:!0,alphaTest:.3,side:Ce,roughness:1});h.map.repeat.set(6,3);let u=new Q(new be(e*2,Math.hypot(a,i)),h);u.position.set(t+n*a/2,i/2,0),u.rotation.y=Math.PI/2,u.rotation.order="YXZ",u.rotation.x=-n*Math.atan2(a,i),s.static.add(u);for(let d of[-1,1]){let f=new Er;f.moveTo(0,0),f.lineTo(n*a,0),f.lineTo(0,i),f.closePath();let g=new Q(new ha(f),h);g.position.set(t,0,d*e),s.static.add(g)}s.colliders.push({min:new b(Math.min(t+n*a,t+n*(a+.1)),0,-e),max:new b(Math.max(t+n*a,t+n*(a+.1)),i,e),tag:"net"}),s.colliders.push({min:new b(Math.min(t,t+n*a),0,-e-.05),max:new b(Math.max(t,t+n*a),i,-e),tag:"net"}),s.colliders.push({min:new b(Math.min(t,t+n*a),0,e),max:new b(Math.max(t,t+n*a),i,e+.05),tag:"net"}),s.colliders.push({min:new b(Math.min(t,t+n*a),i,-e),max:new b(Math.max(t,t+n*a),i+.05,e),tag:"net"})}function qf(s,t,e,i,n){let r=jh("",{w:8,h:8}),o=new re({color:"#f4f2ea",transparent:!0,opacity:.85}),a=.07,l=(c,h,u,d)=>{let f=new Q(new be(c,h),o);f.position.set(t+n*.012,d,u),f.rotation.y=n*Math.PI/2,s.static.add(f)};l(a,i,-e,i/2),l(a,i,e,i/2),l(e*2+a,a,0,i);for(let c=0;c<5;c++)l(.03,i*.9,-e+(c+1)*(e*2)/6,i*.45);for(let c=0;c<3;c++)l(e*2,.03,0,(c+1)*i/4);r.dispose()}function Ys(s,t,e,i=1,n=Math.random){let r=Qt(.14*i,.22*i,2.6*i,q("#5a4030",.95),t,1.3*i,e,s,8);r.rotation.z=(n()-.5)*.15;let o=q(n()<.5?"#4f7a3a":"#5d8a40",.9);for(let a=0;a<6;a++){let l=new Q(new Us((.9+n()*.5)*i,1),o);l.position.set(t+(n()-.5)*1.4*i,(2.8+n()*1.2)*i,e+(n()-.5)*1.4*i),l.castShadow=!0,s.add(l)}}function Hr(s,t,e,i="#3a5a8a"){let n=Qt(.32,.32,.9,q(i,.6,{metalness:.4}),t,.45,e,s,14);for(let r of[.2,.7])Qt(.335,.335,.04,q("#5a3a2a",.6,{metalness:.4}),t,r,e,s,14);return n}function eu(s,t,e,i=3){for(let n=0;n<i;n++){let r=new Q(new oi(.32,.13,8,16),q("#1c1c1c",.9));r.rotation.x=Math.PI/2,r.position.set(t+n%2*.05,.13+n*.24,e),r.castShadow=!0,s.add(r)}}function Oa(s,t,e,i=0,n="#e8e8e2"){let r=new ne;r.position.set(t,0,e),r.rotation.y=i;let o=q(n,.5);rt(.45,.05,.45,o,0,.45,0,r),rt(.45,.45,.04,o,0,.7,-.21,r);for(let a of[-1,1])for(let l of[-1,1])rt(.04,.45,.04,o,a*.19,.22,l*.19,r);return s.add(r),r}function iu(s,t,e){Qt(.35,.35,.04,q("#d8d0c0",.5),t,.72,e,s,16),Qt(.04,.04,.72,q("#666"),t,.36,e,s,6),rt(.4,.04,.25,q("#6a3a1a"),t,.76,e,s);for(let i of[-1,1])Qt(.03,.025,.08,q("#c8603a",.2),t+i*.25,.78,e+.1,s,8)}function Yf(s,t,e){let i=s.static,n=q("#7a5a3a",.9),r=q("#3a3a3a",.7);for(let a of[-1,1])for(let l of[-1,1])rt(.1,2.2,.1,n,t+a*1.2,1.1,e+l*.9,i);rt(2.6,1.6,2,n,t,2.9,e,i),rt(2.5,1.4,.02,r,t,2.9,e+1.01,i);let o=rt(3,.08,2.4,q("#8a8a8a",.5,{metalness:.5}),t,3.8,e,i);o.rotation.z=.08;for(let a=0;a<6;a++)rt(.5,.04,.06,n,t-1.6,.3+a*.38,e+1,i);rt(.05,2.4,.06,n,t-1.85,1.2,e+1,i),rt(.05,2.4,.06,n,t-1.35,1.2,e+1,i),s.colliders.push({min:new b(t-1.3,0,e-1),max:new b(t+1.3,3.8,e+1),tag:"obj",solid:!0})}function Zf(s,t,e){let i=s.static;Qt(.05,.07,8,q("#c0c0c0",.3,{metalness:.8}),t,4,e,i,8);let n=new ne;n.position.set(t,7.3,e);let r=["#ce1126","#ffffff","#000000"];for(let a=0;a<3;a++){let l=new Q(new be(1.5,.33),q(r[a],.9,{side:Ce}));l.position.set(.78,.33-a*.33,0),n.add(l)}let o=new Q(new Vi(.1,10),q("#c09a30",.6,{side:Ce}));o.position.set(.78,0,.005),n.add(o),n.userData.dyn=!0,i.add(n),s.flags.push(n)}function gi(s,t,e,i,n,r,o,{thick:a=.3,collide:l=!0,collideH:c=null,cap:h=!0}={}){let u=Math.hypot(i-t,n-e),d=new Q(new ce(u,r,a),o);if(d.position.set((t+i)/2,r/2,(e+n)/2),d.rotation.y=-Math.atan2(n-e,i-t),d.castShadow=!0,d.receiveShadow=!0,s.static.add(d),h){let f=new Q(new ce(u+.05,.08,a+.08),q("#b3aa9a"));f.position.set(d.position.x,r+.04,d.position.z),f.rotation.y=d.rotation.y,f.castShadow=!0,s.static.add(f)}if(l){let f=Math.abs(i-t)/2+a/2,g=Math.abs(n-e)/2+a/2;s.colliders.push({min:new b((t+i)/2-f,0,(e+n)/2-g),max:new b((t+i)/2+f,c??r,(e+n)/2+g),tag:"wall"})}return d}var Jn={alley:{id:"alley",name:"\u0627\u0644\u062D\u0627\u0631\u0629",desc:"\u062D\u0627\u0631\u0629 \u0636\u064A\u0642\u0629\u060C \u062C\u0648\u0646 \u0628\u0637\u0648\u0628\u062A\u064A\u0646\u060C \u0648\u0627\u0644\u062D\u064A\u0637\u0627\u0646 \u0628\u062A\u0631\u062C\u0651\u0639 \u0627\u0644\u0643\u0648\u0631\u0629. \u062E\u0644\u064A \u0628\u0627\u0644\u0643 \u0645\u0646 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643!",halfL:17,halfW:4.6,goal:{type:"bricks",hw:1.25,h:1.05},teamSize:4},yard:{id:"yard",name:"\u0627\u0644\u062D\u0648\u0634 \u0627\u0644\u0648\u0627\u0633\u0639",desc:"\u0623\u0631\u0636 \u062A\u0631\u0627\u0628 \u0648\u0627\u0633\u0639\u0629 \u0648\u0639\u0627\u0631\u0636\u062A\u064A\u0646 \u062D\u062F\u064A\u062F \u0635\u062F\u064A\u0629. \u0641\u064A\u0647 \u0645\u0633\u0627\u062D\u0629 \u062A\u062C\u0631\u064A \u0641\u064A\u0647\u0627.",halfL:21,halfW:10,goal:{type:"frame",hw:2,h:2},teamSize:5},school:{id:"school",name:"\u062D\u0648\u0634 \u0627\u0644\u0645\u062F\u0631\u0633\u0629",desc:"\u0627\u0644\u062C\u0648\u0646 \u0645\u062A\u0637\u0628\u0627\u0634\u0631 \u0639\u0644\u0649 \u0627\u0644\u062D\u064A\u0637\u0629. \u0648\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u064A\u0637\u0644\u0639 \u0643\u0644 \u0634\u0648\u064A\u0629\u060C \u0644\u0648 \u0634\u0627\u0641\u0643 \u0628\u062A\u0641\u0627\u0648\u0644 \u0647\u064A\u0637\u0631\u062F\u0643!",halfL:18,halfW:8,goal:{type:"chalk",hw:1.6,h:1.9},teamSize:5},roof:{id:"roof",name:"\u0627\u0644\u0633\u0637\u062D",desc:"\u0633\u0637\u062D \u0639\u0645\u0627\u0631\u0629 \u062C\u0646\u0628 \u063A\u064A\u0629 \u0627\u0644\u062D\u0645\u0627\u0645. \u0644\u0648 \u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A \u062D\u062F \u0644\u0627\u0632\u0645 \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!",halfL:12,halfW:6.2,goal:{type:"slippers",hw:1,h:.9},teamSize:3}},Ba=["alley","yard","school","roof"],hn={home:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0627\u0631\u0629",short:"\u0627\u0644\u062D\u064F\u0645\u0631",colors:["#c8322a","#d0342a","#b81f1f","#e04a2f","#a82424"],accent:"#ffffff",ui:"#c8322a"},away:{name:"\u0634\u0644\u0629 \u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0644\u064A \u0648\u0631\u0627",short:"\u0627\u0644\u0632\u064F\u0651\u0631\u0642",colors:["#2a63c8","#3b82d6","#1f4ea0","#2f6fe0","#2456b0"],accent:"#ffffff",ui:"#2a63c8"},green:{name:"\u0639\u064A\u0627\u0644 \u0627\u0644\u062D\u0648\u0634",short:"\u0627\u0644\u062E\u064F\u0636\u0631",colors:["#2f8f46","#3aa356","#237a3a","#2d9a4f","#1f6b33"],accent:"#ffffff",ui:"#2f8f46"},yellow:{name:"\u0648\u0644\u0627\u062F \u062A\u0627\u0644\u062A\u0629 \u062A\u0627\u0644\u062A",short:"\u0627\u0644\u0635\u064F\u0651\u0641\u0631",colors:["#e2b21c","#f0c22a","#d4a00e","#e8b820","#c99a10"],accent:"#222222",ui:"#d4a00e"},black:{name:"\u0634\u0628\u0627\u0628 \u0627\u0644\u0633\u0637\u0648\u062D",short:"\u0627\u0644\u0633\u064F\u0651\u0648\u062F",colors:["#2b2b30","#3a3a40","#222226","#35353b","#2e2e34"],accent:"#ffd23f",ui:"#3a3a40"},white:{name:"\u0643\u0628\u0627\u0631 \u0627\u0644\u062D\u062A\u0629",short:"\u0627\u0644\u0628\u064A\u0636",colors:["#ecebe6","#f4f2ea","#dedcd4","#e8e6de","#d8d6ce"],accent:"#c8322a",ui:"#8d8a80"}},$f=["\u062D\u0645\u0627\u062F\u0629","\u0632\u064A\u0632\u0648","\u0628\u064A\u0628\u0648","\u0634\u064A\u0643\u0627","\u0639\u0628\u062F\u0647","\u062A\u064A\u062A\u0648","\u0645\u064A\u062F\u0648","\u062D\u0648\u062F\u0629","\u0633\u064A\u0643\u0627","\u0623\u0648\u0643\u0627","\u0643\u0631\u064A\u0645","\u0645\u0635\u0637\u0641\u0649","\u0625\u0633\u0644\u0627\u0645","\u0628\u0644\u0628\u0644","\u0634\u0631\u064A\u0641","\u0639\u0645\u0631\u0648","\u0637\u0627\u0631\u0642","\u0633\u0639\u064A\u062F","\u064A\u0627\u0633\u064A\u0646","\u062D\u0633\u0648\u0646\u0629","\u0645\u0627\u0632\u0646","\u0648\u0644\u064A\u062F","\u0631\u0627\u0645\u064A","\u0628\u0648\u062F\u064A","\u0641\u0627\u0631\u0633","\u0633\u0627\u0645\u062D","\u062D\u0633\u0627\u0645","\u0646\u0627\u062F\u0631","\u062A\u0627\u0645\u0631","\u0639\u0635\u0627\u0645"],nu=["#c98b5a","#a86b43","#d9a173","#8a5634","#bf7f50","#e0b088","#9a6040"],Vr=["#1a1210","#20140e","#120c08","#2a1a10","#0f0a07"],oe={goal:["\u062C\u0648\u0648\u0648\u0648\u0648\u0646!","\u062C\u0648\u0648\u0648\u0648\u0646 \u064A\u0627 \u0645\u0639\u0644\u0645!","\u0641\u064A \u0627\u0644\u062C\u0648\u0648\u0648\u0646!","\u064A\u0627 \u0633\u0644\u0627\u0627\u0627\u0645!","\u062C\u0648\u0646 \u0648\u0644\u0627 \u0623\u062D\u0644\u0649!"],goalBricks:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628\u062A\u064A\u0646!","\u062C\u0648\u0646 \u0646\u0636\u064A\u0641 \u0628\u064A\u0646 \u0627\u0644\u0637\u0648\u0628!"],goalSlippers:["\u062F\u062E\u0644\u062A \u0628\u064A\u0646 \u0627\u0644\u0634\u0628\u0634\u0628\u064A\u0646!"],goalChalk:["\u062E\u0628\u0637\u062A \u062C\u0648\u0647 \u0627\u0644\u0637\u0628\u0627\u0634\u064A\u0631!"],miss:["\u064A\u0627\u0627\u0627\u0647! \u062C\u0646\u0628 \u0627\u0644\u0637\u0648\u0628\u0629!","\u0643\u0627\u0646\u062A \u0647\u062A\u062F\u062E\u0644!","\u0637\u0627\u0634\u062A!","\u062F\u0647 \u0625\u0646\u062A \u062A\u0634\u0648\u0637 \u0645\u0646 \u0627\u0644\u0628\u064A\u062A \u0623\u062D\u0633\u0646!"],foul:["\u0641\u0627\u0648\u0648\u0648\u0648\u0644!","\u0641\u0627\u0648\u0644 \u064A\u0627 \u0639\u0645!","\u0625\u064A\u0647 \u062F\u0647\u061F! \u062F\u0647 \u0643\u0633\u0631\u0647!","\u062D\u0631\u0627\u0645 \u0639\u0644\u064A\u0643!"],hurt:["\u0622\u0622\u0622\u0647 \u064A\u0627 \u0631\u062C\u0644\u064A!","\u0622\u0647 \u064A\u0627 \u0631\u0643\u0628\u062A\u064A!","\u0647\u0648 \u0623\u0646\u0627 \u0639\u0645\u0644\u062A\u0644\u0643 \u0625\u064A\u0647\u061F!","\u0631\u062C\u0644\u064A \u0627\u062A\u0643\u0633\u0631\u062A!"],pull:["\u0633\u064A\u0628 \u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u064A\u0627 \u0639\u0645!","\u0647\u062A\u0642\u0637\u0639\u0644\u064A \u0627\u0644\u0641\u0627\u0646\u0644\u0629!","\u0627\u0644\u0641\u0627\u0646\u0644\u0629 \u062F\u064A \u062C\u062F\u064A\u062F\u0629!"],nutmeg:["\u0643\u0648\u0628\u0631\u064A!","\u0627\u062A\u0643\u0628\u0631\u0649 \u062E\u0627\u0644\u0635!","\u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0647!"],nutmegged:["\u0625\u064A\u0647 \u062F\u0647\u061F!","\u0645\u0634 \u0634\u0627\u064A\u0641 \u062D\u0627\u062C\u0629!"],save:["\u0635\u062F\u0651\u0647\u0627!","\u064A\u0627 \u0639\u0645 \u0627\u0644\u062D\u0627\u0631\u0633!","\u0625\u064A\u062F\u064A\u0646 \u0645\u0646 \u062D\u062F\u064A\u062F!"],callPass:["\u0628\u0627\u0635\u064A \u064A\u0627 \u0639\u0645!","\u0647\u0646\u0627! \u0647\u0646\u0627!","\u0623\u0646\u0627 \u0641\u0627\u0636\u064A!"],momCall:s=>`\u064A\u0627 ${s}! \u0627\u0644\u0623\u0643\u0644 \u0647\u064A\u0628\u0631\u062F\u060C \u0627\u0637\u0644\u0639 \u062D\u0627\u0644\u064B\u0627!`,momCallOut:["\u062D\u0627\u0636\u0631 \u064A\u0627 \u0645\u0627\u0645\u0627...","\u062C\u0627\u064A \u0623\u0647\u0648!"],momBack:s=>`${s} \u0631\u062C\u0639 \u0628\u0639\u062F \u0645\u0627 \u0627\u062A\u063A\u062F\u0649!`,fight:["\u062E\u0646\u0627\u0642\u0629! \u062E\u0646\u0627\u0642\u0629!","\u062D\u0648\u0634\u0648\u0627! \u062D\u0648\u0634\u0648\u0627!","\u0633\u064A\u0628\u0648\u0647! \u0633\u064A\u0628\u0648\u0647!"],fightOver:["\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635.. \u0635\u0627\u0641\u064A \u064A\u0627 \u0644\u0628\u0646","\u062E\u0644\u0627\u0635 \u064A\u0627 \u062C\u0645\u0627\u0639\u0629.. \u0646\u0643\u0645\u0644"],balcony:["\u0627\u0644\u0643\u0648\u0631\u0629 \u062F\u062E\u0644\u062A \u0627\u0644\u0628\u0644\u0643\u0648\u0646\u0629!","\u064A\u0627 \u062E\u0628\u0631! \u0628\u0644\u0643\u0648\u0646\u0629 \u0627\u0644\u062D\u0627\u062C\u0629!"],balconyBack:["\u062E\u062F\u0648\u0627 \u0643\u0648\u0631\u062A\u0643\u0645 \u0648\u0627\u062A\u0644\u0647\u0648\u0627!","\u0622\u062E\u0631 \u0645\u0631\u0629 \u0647\u0631\u062C\u0639\u0647\u0627\u0644\u0643\u0645!","\u0627\u0644\u0639\u0628\u0648\u0627 \u0628\u0639\u064A\u062F \u0639\u0646 \u0627\u0644\u0634\u0628\u0627\u0628\u064A\u0643!"],windowBreak:["\u0645\u064A\u0646 \u0627\u0644\u0644\u064A \u0643\u0633\u0631 \u0627\u0644\u0625\u0632\u0627\u0632 \u062F\u0647\u061F!","\u0623\u0646\u0627 \u0646\u0627\u0632\u0644\u0643\u0645!","\u0647\u0642\u0648\u0644 \u0644\u0623\u0628\u0648\u0643!"],run:["\u0627\u062C\u0631\u0631\u0631\u0631\u064A!","\u0627\u0647\u0631\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!"],roofDrop:["\u0627\u0644\u0643\u0648\u0631\u0629 \u0648\u0642\u0639\u062A \u062A\u062D\u062A!","\u062D\u062F \u064A\u0646\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627!"],roofBack:["\u062C\u0628\u062A\u0647\u0627 \u0623\u0647\u0648!"],headmaster:["\u0627\u0644\u0646\u0627\u0638\u0631 \u0628\u0631\u0629! \u0627\u062A\u0644\u0645\u0651\u0648\u0627!"],headmasterCatch:s=>`\u0625\u0646\u062A \u064A\u0627 ${s}! \u0627\u0637\u0644\u0639 \u0628\u0631\u0629!`,sentOff:s=>`${s} \u0627\u062A\u0637\u0631\u062F!`,toktok:["\u062A\u0648\u0643\u062A\u0648\u0643 \u062C\u0627\u064A!","\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u0631\u0628\u064A\u0629!","\u0648\u0633\u0651\u0639\u0648\u0627 \u064A\u0627 \u0634\u0628\u0627\u0628!"],walkerHit:["\u062D\u0627\u0633\u0628 \u064A\u0627 \u0627\u0628\u0646\u064A!","\u0647\u0648 \u062F\u0647 \u0645\u0643\u0627\u0646 \u0643\u0648\u0631\u0629\u061F!","\u064A\u0627 \u0633\u0627\u062A\u0631!","\u0625\u064A\u0647 \u062F\u0647 \u064A\u0627 \u0648\u0644\u062F\u061F!"],kickoff:["\u064A\u0644\u0627 \u0628\u064A\u0646\u0627!","\u064A\u0644\u0627 \u064A\u0627 \u0631\u062C\u0627\u0644\u0629!","\u0627\u0644\u0639\u0628\u0648\u0627!"],win:["\u0643\u0633\u0628\u0646\u0627! \u0643\u0633\u0628\u0646\u0627!","\u0627\u0644\u062D\u0627\u0631\u0629 \u0628\u062A\u0627\u0639\u062A\u0646\u0627!"],lose:["\u062E\u0633\u0631\u0646\u0627 \u0627\u0644\u0645\u0631\u0629 \u062F\u064A...","\u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0647\u0646\u0643\u0633\u0628\u0647\u0645!"],draw:["\u062A\u0639\u0627\u062F\u0644.. \u0645\u0627\u062A\u0634 \u0631\u062C\u0627\u0644\u0629"]},Zs={win:60,draw:25,goal:10,nutmeg:5,cleanSheet:15},Ha=[{id:"ball",name:"\u0643\u0648\u0631\u0629 \u062C\u0644\u062F \u0623\u0635\u0644\u064A\u0629",desc:"\u0627\u0644\u0634\u0648\u0637\u0629 \u0623\u0642\u0648\u0649 \u0648\u0627\u0644\u0643\u0648\u0631\u0629 \u0645\u0627\u0633\u0643\u0629 \u0641\u064A \u0631\u062C\u0644\u0643 \u0623\u0643\u062A\u0631",price:120,max:1},{id:"shoes",name:"\u0643\u0648\u062A\u0634\u064A \u062C\u062F\u064A\u062F",desc:"\u0628\u062F\u0644 \u0627\u0644\u0634\u0628\u0634\u0628.. \u0633\u0631\u0639\u0629 \u0627\u0644\u0641\u0631\u064A\u0642 \u062A\u0632\u064A\u062F",price:140,max:1},{id:"kits",name:"\u0641\u0627\u0646\u0644\u0627\u062A \u0645\u0648\u062D\u062F\u0629",desc:"\u0634\u0643\u0644 \u0627\u0644\u0641\u0631\u064A\u0642 \u0645\u062A\u0648\u062D\u062F\u060C \u0648\u0627\u0644\u0646\u064E\u0641\u064E\u0633 \u0623\u0637\u0648\u0644",price:90,max:1},{id:"foul",name:"\u0633\u0627\u0646\u062F\u0648\u062A\u0634 \u0641\u0648\u0644 \u0642\u0628\u0644 \u0627\u0644\u0645\u0627\u062A\u0634",desc:"\u0637\u0627\u0642\u0629 \u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A \u0628\u0633",price:15,max:99,consumable:!0}],$s=[{map:"alley",time:"day",opp:"away",title:"\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u0623\u0648\u0644: \u0645\u0627\u062A\u0634 \u0627\u0644\u062D\u0627\u0631\u0629"},{map:"yard",time:"night",opp:"green",title:"\u062F\u0648\u0631 \u0627\u0644\u0633\u062A\u0627\u0634\u0631"},{map:"school",time:"day",opp:"yellow",title:"\u062F\u0648\u0631 \u0627\u0644\u062A\u0645\u0627\u0646\u064A\u0629"},{map:"roof",time:"night",opp:"black",title:"\u0646\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"},{map:"alley",time:"night",opp:"white",title:"\u0627\u0644\u0646\u0647\u0627\u0626\u064A: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629"}],Gr={easy:{name:"\u0633\u0647\u0644",react:.45,skill:.45,speed:.9,steal:.8,dirty:.15},normal:{name:"\u0639\u0627\u062F\u064A",react:.28,skill:.65,speed:.97,steal:1,dirty:.3},hard:{name:"\u0635\u0639\u0628",react:.15,skill:.85,speed:1.02,steal:1.25,dirty:.45}},we={jog:5.2,sprint:7.2,withBallMul:.9,accel:22,decel:26,turnRate:13,staminaDrain:.22,staminaRegen:.14,playerRadius:.36,ballRadius:.11,controlDist:.62,stealPerSec:1.15,slideSpeed:8.2,slideTime:1,fallTime:2.75,pullMax:1.6,scandalTackle:30,scandalCleanTrip:8,scandalPullPerSec:14,scandalWindow:35};var Kf=["position","normal","uv"];function Gy(s,t){let e=s.index?s.toNonIndexed():s.clone();for(let i of Object.keys(e.attributes))Kf.includes(i)||e.deleteAttribute(i);return e.attributes.uv||e.setAttribute("uv",new Xt(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.morphAttributes={},e.applyMatrix4(t),e.clearGroups(),e}function Wy(s){let t=s.index?s.toNonIndexed():s;if(!s.groups.length)return[{geo:t,mi:0}];let e=[];for(let i of s.groups){let n=new de;for(let r of Kf){let o=t.attributes[r];if(!o)continue;let a=o.array.slice(i.start*o.itemSize,(i.start+i.count)*o.itemSize);n.setAttribute(r,new Ae(a,o.itemSize))}e.push({geo:n,mi:i.materialIndex})}return e}function Jf(s){s.updateMatrixWorld(!0);let t=new Map,e=[];s.traverse(r=>{if(!r.isMesh||r.isSkinnedMesh||r.userData.dyn||r.userData.keep)return;let o=r.parent;for(;o&&o!==s;){if(o.userData.dyn)return;o=o.parent}let a=Array.isArray(r.material)?r.material:[r.material];for(let{geo:l,mi:c}of Wy(r.geometry)){let h=a[c]||a[0],u=h.uuid+(r.castShadow?"s":"n"),d=t.get(u);d||(d={m:h,cast:r.castShadow,geos:[]},t.set(u,d)),d.geos.push(Gy(l,r.matrixWorld))}e.push(r)});for(let r of e)r.parent.remove(r);let i=new Ht().copy(s.matrixWorld).invert(),n=0;for(let r of t.values()){let o=Pa(r.geos,!1);if(!o)continue;o.applyMatrix4(i),o.computeBoundingSphere();let a=new Q(o,r.m);a.castShadow=r.cast,a.receiveShadow=!0,a.matrixAutoUpdate=!1,s.add(a),n++;for(let l of r.geos)l.dispose()}return n}function Xy(s){return{def:s,root:new ne,static:new ne,dynamic:new ne,colliders:[],windows:[],balconies:[],lamps:[],pointLights:[],litMats:[],nightOnly:[],dayOnly:[],doors:[],flags:[],clothes:[],walkerPaths:[],spectators:[],goals:[],animals:[],extras:{},bounds:null,ballOut:null,camZ:0}}function Va(s,t,e,i,n){let r=s.def,o=Df(t,e,i,r,n),a=new Q(new be(e,i),new Gt({map:o,roughness:1}));return a.rotation.x=-Math.PI/2,a.receiveShadow=!0,s.root.add(a),s.groundMesh=a,a}function Ga(s){let t=s.def,e=t.goal.type==="chalk"?t.halfL+1:t.halfL-.4;for(let i of[-1,1]){let n=i*e;t.goal.type==="bricks"?Gf(s,n,t.goal.hw,i):t.goal.type==="slippers"?Wf(s,n,t.goal.hw):t.goal.type==="frame"?Xf(s,n,t.goal.hw,t.goal.h,i):t.goal.type==="chalk"&&qf(s,n,t.goal.hw,t.goal.h,-i),s.goals.push({side:i,x:n,hw:t.goal.hw,h:t.goal.h,type:t.goal.type})}}function Ei(s,t,e,i,n="kid"){s.spectators.push({pos:new b(t,0,e),rotY:i,kind:n})}function qy(s){let t=s.def,e=Ke(11);Va(s,"asphalt",46,15,4);let i=20.5,n=-6.2,r=6.2;s.bounds={minX:-i+.5,maxX:i-.5,minZ:n+.4,maxZ:r-.4},s.camZ=.4;let o=q("#a39a8a",.95);rt(46,.16,1.2,o,0,.08,n+.6,s.static),rt(46,.16,1.2,o,0,.08,r-.6,s.static),rt(46,.05,.1,q("#e8e2d0"),0,.17,n+1.2,s.static);let a=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#c7b7a0","#b0a08a"];[[-24,-17,10.5,{door:!0}],[-17,-9.5,13,{shop:{name:"\u0642\u0647\u0648\u0629 \u0627\u0644\u0645\u0639\u0644\u0645",bg:"#6a3a1a",open:!0,sub:"\u0634\u0627\u064A \u2022 \u0642\u0647\u0648\u0629 \u2022 \u0634\u064A\u0634\u0629"}}],[-9.5,-2.5,11.5,{door:!0}],[-2.5,4.5,14.5,{shop:{name:"\u0628\u0642\u0627\u0644\u0629 \u0627\u0644\u0623\u0645\u0644",bg:"#1f6b3a",open:!0,awning:"#2f7a48"}}],[4.5,11.5,12,{door:!0}],[11.5,18,13.5,{shop:{name:"\u0645\u0643\u0648\u062C\u064A \u0631\u0650\u062C\u0644",bg:"#8a2a2a",open:!1}}],[18,25,11,{door:!0}]].forEach(([f,g,x,p],m)=>Or(s,{x0:f,x1:g,z:n,face:1,h:x,color:a[m%a.length],seed:m+3,floors:3,lit:.55,...p})),Ua(s,-6.2,3.3,n,1,3),Ua(s,8,6.4,n,1,3),s.extras.momBalcony=0;let c=q("#3a332c",1);for(let f=0;f<7;f++){let g=-24+f*7,x=g+7,p=a[(f+3)%a.length],m=.7+f%2*.15,y=new Gt({map:mi(p,f+20,{band:"rgba(70,60,50,0.35)",bricks:!1}),roughness:.95}),_=rt(7,m,.35,y,(g+x)/2,m/2,r+.18,s.static);rt(7,.04,.36,c,(g+x)/2,m+.02,r+.18,s.static).castShadow=!1,f%2===0&&rt(1.6,.18,.6,q("#a39a8a"),(g+x)/2,.09,r-.2,s.static)}s.colliders.push({min:new b(-30,0,r),max:new b(30,20,r+3),tag:"wall",invisible:!0});let h=new Gt({map:mi("#b9a888",40,{band:"rgba(60,50,40,0.4)"}),roughness:.95});gi(s,-i-.2,n,-i-.2,r,4.2,h,{thick:.4,collideH:20});let u=new Q(new be(9,2.2),new re({map:Fr([{text:"\u0645\u0645\u0646\u0648\u0639 \u0644\u0639\u0628 \u0627\u0644\u0643\u0648\u0631\u0629",y:.33,color:"rgba(160,20,20,0.85)",font:"900 96px Cairo"},{text:"\u0628\u0623\u0645\u0631 \u0627\u0644\u0633\u0643\u0627\u0646",y:.72,color:"rgba(30,30,30,0.8)",font:"900 70px Cairo"}]),transparent:!0}));u.position.set(-i+.01,2.4,0),u.rotation.y=Math.PI/2,s.static.add(u),gi(s,i+.2,n,i+.2,r,3.6,new Gt({map:mi("#7d9a7a",41,{band:"rgba(40,50,40,0.4)"}),roughness:.95}),{thick:.4,collideH:20});let d=new Q(new be(8,2),new re({map:Fr([{text:"\u062D\u0627\u0631\u0629 \u0627\u0644\u0623\u0628\u0637\u0627\u0644",y:.45,color:"rgba(250,245,230,0.9)",font:"900 110px Cairo"}]),transparent:!0}));d.position.set(i-.01,2.3,0),d.rotation.y=-Math.PI/2,s.static.add(d),Hf(s,i-1.8,3.6,Math.PI/2+.08,"#d8c9a0"),Hr(s.static,i-1,-4.2,"#2f5a8a"),Hr(s.static,i-1.7,-4.6,"#8a3a2a"),s.colliders.push({min:new b(i-2.1,0,-5.2),max:new b(i,.9,-3.8),tag:"obj",solid:!0}),Of(s,13.2,n+1.75,0),iu(s.static,-14.5,n+1.9),iu(s.static,-11.8,n+1.9),Oa(s.static,-15.2,n+1.9,Math.PI/2),Oa(s.static,-13.8,n+1.9,-Math.PI/2,"#d8402a"),Oa(s.static,-12.5,n+1.9,Math.PI/2,"#2a6ad8"),Ei(s,-15.2,n+1.9,Math.PI/2,"old"),Ei(s,-12.5,n+1.9,Math.PI/2,"old"),Ei(s,-7,r-.35,Math.PI,"kid"),Ei(s,-6.2,r-.35,Math.PI,"kid"),Ei(s,4.5,r-.35,Math.PI,"kid"),Ei(s,9.5,n+.45,0,"kid"),ki(s,-15.5,n+.9,1,{arm:2.2}),ki(s,-5,n+.9,1,{arm:2.4}),ki(s,4.8,n+.9,1,{flicker:!0,arm:2.4}),ki(s,15.5,n+.9,1,{arm:2.2});for(let[f,g]of[[-15.5,-5],[-5,4.8],[4.8,15.5]])Fa(s.static,new b(f,5.5,n+.9),new b(g,5.5,n+.9),.5);Fa(s.static,new b(-20,9,n),new b(20,8.5,n+.3),1.2,"#222"),s.clothes.push(...za(s.static,new b(-9,7.5,n+.35),new b(-3.2,7.4,n+.35),e,.25)),s.clothes.push(...za(s.static,new b(5,10.6,n+.35),new b(11,10.6,n+.35),e,.2)),rt(1.4,1,.8,q("#2f6a3a",.6,{metalness:.3}),-19,.5,n+.8,s.static),rt(.6,.4,.5,q("#b08a5a"),-18,.2,n+1.4,s.static).rotation.y=.4,s.colliders.push({min:new b(-19.7,0,n+.4),max:new b(-18.3,1,n+1.2),tag:"obj",solid:!0}),s.animals.push({kind:"cat",pos:new b(-18,.4,n+1.4),rot:.4}),s.walkerPaths.push({a:new b(-22,0,n+.7),b:new b(22,0,n+.7)}),s.walkerPaths.push({a:new b(22,0,r-.8),b:new b(-22,0,r-.8)}),s.walkerPaths.push({cross:!0,z0:n+.3,z1:r-.3}),s.extras.toktok={z:.6,from:-i-2,to:i+2},s.extras.bike={z:-2.5},Ga(s)}function Yy(s){let t=s.def,e=Ke(23),i=23.5,n=11.5;Va(s,"dirt",62,34,9),s.bounds={minX:-i+.5,maxX:i-.5,minZ:-n+.5,maxZ:n-.5},s.camZ=.8;let r=new Gt({map:mi("#bdb3a0",50,{band:"rgba(80,70,60,0.35)"}),roughness:.95});r.map.repeat.set(6,1),gi(s,-i,-n,i,-n,3,r,{thick:.35,collideH:30}),gi(s,-i,-n,-i,n,3,r,{thick:.35,collideH:30}),gi(s,i,-n,i,n,3,r,{thick:.35,collideH:30});let o=new Gt({map:mi("#bdb3a0",51,{band:"rgba(80,70,60,0.35)",bricks:!1}),roughness:.95});gi(s,-i,n,i,n,.9,o,{thick:.35,collideH:30});let a=[{x:-12,text:"\u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u062C\u0645\u0629",bg:"#1f4e9a"},{x:0,text:"\u062D\u0648\u0634 \u0627\u0644\u0634\u0628\u0627\u0628",bg:"#8a2a2a",sub:"\u0644\u0644\u062A\u0623\u062C\u064A\u0631 \u2022 \u0643\u0648\u0631\u0629 \u062E\u0645\u0627\u0633\u064A"},{x:12,text:"\u0645\u062E\u0628\u0632 \u0627\u0644\u062D\u0631\u064A\u0629",bg:"#c07a1a",sub:"\u0639\u064A\u0634 \u0628\u0644\u062F\u064A \u0648\u0641\u064A\u0646\u0648"}];for(let d of a){let f=new Q(new be(5.5,1.4),new Gt({map:qs(d.text,d.bg,"#fff",d.sub),roughness:.9}));f.position.set(d.x,1.7,-n+.19),s.static.add(f)}let l=new Q(new be(10,2.2),new re({map:Fr([{text:"\u0627\u0644\u0643\u0648\u0631\u0629 \u0644\u0644\u062C\u0645\u064A\u0639",color:"rgba(30,30,30,0.7)",font:"900 100px Cairo",rot:-.04}]),transparent:!0}));l.position.set(-i+.19,1.6,0),l.rotation.y=Math.PI/2,s.static.add(l);let c=q("#3a5a7a",.6,{metalness:.5});rt(.1,2.6,3,c,i-.15,1.3,-6,s.static);for(let d=0;d<8;d++)rt(.12,2.6,.05,q("#2a4a6a",.6,{metalness:.5}),i-.2,1.3,-7.4+d*.4,s.static);s.doors.push(new b(i-1,0,-6));let h=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94"];for(let d=0;d<8;d++){let f=-30+d*7.5;Or(s,{x0:f,x1:f+7.5,z:-n-4,face:1,h:10+e()*9,color:h[d%6],seed:60+d,floors:5,lit:.45,roofStuff:!0})}Ua(s,-4,6.4,-n-4,1,3);for(let d of[-1,1])Or(s,{x0:d>0?i+3:-i-30,x1:d>0?i+30:-i-3,z:-n-4,face:1,h:14,color:"#b0a08a",seed:70+d,floors:4,lit:.4,roofStuff:!1});Ys(s.static,-i+1.6,-n+1.6,1.1,e),Ys(s.static,i-1.8,n-2.2,1,e),Ys(s.static,-i+2,n-2,.9,e),s.colliders.push({min:new b(-i+1.3,0,-n+1.3),max:new b(-i+1.9,3,-n+1.9),tag:"obj",solid:!0}),eu(s.static,i-1.4,-n+1.4,4),eu(s.static,i-2.3,-n+1.2,2),Hr(s.static,-i+1.2,2.5,"#8a3a2a"),Hr(s.static,-i+1,3.4,"#3a6a3a"),s.colliders.push({min:new b(-i+.6,0,2),max:new b(-i+1.6,.9,3.9),tag:"obj",solid:!0});let u=new ne;for(let d of[-1,1])for(let f of[-1,1])Qt(.08,.08,6,q("#5a5a5a",.5,{metalness:.6}),d*1,3,f*1,u,6);Qt(1.4,1.4,2.2,q("#d8d4c8",.6),0,7.1,0,u,20),u.position.set(16,0,-n-2.2),s.static.add(u);for(let d of[-8,6]){rt(3,.08,.5,q("#7a5a3a"),d,.45,-n+.7,s.static);for(let f of[-1,1])rt(.08,.45,.4,q("#5a4030"),d+f*1.3,.22,-n+.7,s.static)}Ei(s,-8.8,-n+.75,0,"kid"),Ei(s,-7.6,-n+.75,0,"kid"),Ei(s,5.4,-n+.75,0,"old"),Ei(s,6.8,-n+.75,0,"kid"),s.animals.push({kind:"sheep",pos:new b(-i+3.2,0,n-3),rot:.8}),s.colliders.push({min:new b(-i+2.6,0,n-3.5),max:new b(-i+3.8,.9,n-2.5),tag:"sheep",solid:!0});for(let[d,f,g,x]of[[-i+.6,-n+.6,1,!1],[i-.6,-n+.6,1,!0],[-i+.6,n-.6,-1,!1],[i-.6,n-.6,-1,!1]])ki(s,d,f,g,{h:8.5,arm:.8,flicker:x}),s.lamps[s.lamps.length-1].flood=!0;s.walkerPaths.push({a:new b(i-1,0,-6),b:new b(-i+1,0,-n+1.2)}),s.walkerPaths.push({a:new b(-i+1,0,n-1.2),b:new b(i-1,0,-6)}),s.extras.bike={z:n-1.3},Ga(s)}function Zy(s){let t=s.def,e=Ke(37),i=t.halfL+1,n=9.6;Va(s,"tiles",48,26,13),s.bounds={minX:-i+.4,maxX:i-.4,minZ:-n+.4,maxZ:n-.4},s.camZ=.6;let r=-n;Or(s,{x0:-i-6,x1:i+6,z:r,face:1,h:13,color:"#e0c98f",seed:81,floors:3,lit:.25,roofStuff:!1,door:!0});let o=new Q(new be(9,1.5),new Gt({map:qs("\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0646\u0635\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u064A\u0629 \u0628\u0646\u064A\u0646","#1f4e7a","#fff","\u0625\u062F\u0627\u0631\u0629 \u0634\u0631\u0642 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629"),roughness:.8}));o.position.set(0,10.6,r+.08),s.static.add(o),Zf(s,6.5,r+1.2),s.colliders.push({min:new b(6.4,0,r+1.1),max:new b(6.6,8,r+1.3),tag:"pole"});let a=new Q(new be(6,1.4),new re({map:Fr([{text:"\u0627\u0644\u0639\u0644\u0645 \u0646\u0648\u0631",color:"rgba(30,80,150,0.9)",font:"900 120px Cairo"}]),transparent:!0}));a.position.set(-10,1.3,r+.02),s.static.add(a);let l=new Gt({map:mi("#d8cba8",85,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95});l.map.repeat.set(3,1),gi(s,-i,r,-i,n,3.4,l,{thick:.4,collideH:30}),gi(s,i,r,i,n,3.4,l,{thick:.4,collideH:30}),gi(s,-i,n,i,n,.9,new Gt({map:mi("#d8cba8",86,{band:"rgba(40,80,120,0.55)",bricks:!1}),roughness:.95}),{thick:.35,collideH:30}),rt(1,1.4,.5,q("#c8c8c8",.3,{metalness:.7}),13,.7,r+.3,s.static),rt(.5,.06,.2,q("#666"),13,1,r+.6,s.static),s.colliders.push({min:new b(12.5,0,r),max:new b(13.5,1.4,r+.6),tag:"obj",solid:!0});for(let c of[-13,-3,9]){rt(2.6,.08,.45,q("#3a6a9a"),c,.45,r+.6,s.static);for(let h of[-1,1])rt(.08,.45,.4,q("#2a4a6a"),c+h*1.1,.22,r+.6,s.static)}Ei(s,-13.6,r+.65,0,"kid"),Ei(s,-12.4,r+.65,0,"kid"),Ei(s,8.4,r+.65,0,"kid"),Ys(s.static,-i-2,n+2,1.3,e),Ys(s.static,i+2,n+2.5,1.2,e);for(let[c,h]of[[-12,!1],[-1.5,!1],[8,!0],[15,!1]])ki(s,c,r+.05,1,{h:4.6,arm:.9,wall:!0,flicker:h});s.extras.headmaster=!0,s.walkerPaths.push({a:new b(-i+1,0,r+1.2),b:new b(i-1,0,r+1.2)}),Ga(s)}function $y(s){let t=s.def,e=Ke(51),i=-17,n=13.2,r=7.2,o=Va(s,"roof",n-i,r*2,21);o.position.x=(i+n)/2,s.bounds={minX:-t.halfL-.8,maxX:n-.4,minZ:-r+.4,maxZ:r-.4},s.camZ=.4;let a=new Gt({map:mi("#c7bba5",91,{band:"rgba(60,55,50,0.3)",bricks:!1}),roughness:.95});a.map.repeat.set(8,.3);let l=1;gi(s,i,-r,n,-r,l,a,{thick:.3}),gi(s,i,r,n,r,l,a,{thick:.3}),gi(s,n,-r,n,r,l,a,{thick:.3}),gi(s,i,-r,i,r,l,a,{thick:.3});let c=new Gt({map:mi("#bfae94",92,{}),roughness:.95});rt(n-i+.3,30,r*2+.3,c,(i+n)/2,-15.01,0,s.static).castShadow=!1;let h=-14.6,u=4.6,d=rt(3.6,2.8,3.2,new Gt({map:mi("#cdbfa6",93,{}),roughness:.95}),h,1.4,u,s.static);rt(3.8,.15,3.4,q("#8a8070"),h,2.85,u,s.static),rt(1,2.1,.06,q("#4a3a2a"),h+1,1.05,u-1.62,s.static),s.colliders.push({min:new b(h-1.8,0,u-1.6),max:new b(h+1.8,2.9,u+1.6),tag:"wall",solid:!0}),s.doors.push(new b(h+1,0,u-2)),Yf(s,-14.8,-4.6),s.extras.pigeons=new b(-14.8,3.9,-4.6),Br(s.static,-3,0,-r+1),Br(s.static,1,0,-r+1),s.colliders.push({min:new b(-3.7,0,-r+.3),max:new b(1.7,2.1,-r+1.7),tag:"obj",solid:!0});for(let v of[-9,-6.5,5,8])Na(s.static,v,.6,-r+.4,1);s.clothes.push(...za(s.static,new b(4,2.3,-r+.2),new b(12.8,2.3,-r+.2),e,.25));for(let v of[4,12.8])Qt(.03,.03,2.3,q("#555"),v,1.15,-r+.2,s.static,6);let f=["#ff4455","#44dd66","#4488ff","#ffcc33","#ff66cc"],g=new b(-12.6,2.7,u-1.6),x=new b(12.8,2.5,-r+.2);Fa(s.static,g,x,.6,"#222");let p=[];for(let v=1;v<28;v++){let S=v/28,D=new b().lerpVectors(g,x,S);D.y-=Math.sin(S*Math.PI)*.6+.05;let k=new Q(new Yt(.06,6,4),new re({color:f[v%f.length]}));k.position.copy(D),s.dynamic.add(k),p.push(k)}s.extras.fairy=p;let m=new ne,y=q("#c9a040",.35,{metalness:.8});Qt(.02,.18,.18,y,0,.62,0,m,8);let _=new Gt({color:"#ffb040",emissive:"#ff9a30",emissiveIntensity:.4,roughness:.3,transparent:!0,opacity:.9});Qt(.2,.2,.5,_,0,.3,0,m,8),Qt(.2,.08,.15,y,0,-.02,0,m,8),m.position.set(-12.6+.4,1.9,u-1.7),s.static.add(m),s.litMats.push({m:_,lit:!0,k:2.5,dayK:.3}),s.pointLights.push({pos:new b(-12.2,2.1,u-1.9),color:"#ff9a40",intensity:5,dist:6,shadow:!1}),ki(s,h+1.9,u-.6,-1,{h:2.6,arm:.5,wall:!0,flicker:!0}),ki(s,12.6,-r+.4,1,{h:3.4,arm:.7}),ki(s,-4,-r+.3,1,{h:3.6,arm:.9}),ki(s,-9.5,-r+.3,1,{h:3.6,arm:1.6}),ki(s,6,-r+.3,1,{h:3.6,arm:1.6});let M=["#c9a982","#b98d6a","#d7c3a0","#a9907a","#c4a07a","#bfae94","#9a8a78"];for(let v=0;v<26;v++){let S=v/26*Math.PI*2,D=34+e()*22,k=Math.cos(S)*D*1.2,B=Math.sin(S)*D;if(B>8&&Math.abs(k)<30)continue;let j=-8+e()*14,H=8+e()*8,it=8+e()*8,W=new Gt({map:mi(M[v%M.length],100+v,{}),roughness:.95}),at=rt(H,30,it,W,k,j-15,B,s.static);at.castShadow=!1;for(let ct=0;ct<6;ct++){let mt=new Gt({color:"#2a2a2a",emissive:"#ffb860",emissiveIntensity:0}),It=new Q(new be(.9,1.1),mt),Kt=B>0?B-it/2-.01:B+it/2+.01;It.position.set(k-H/2+1+e()*(H-2),j-1.5-Math.floor(e()*4)*3,Kt),B>0&&(It.rotation.y=Math.PI),s.dynamic.add(It),s.litMats.push({m:mt,lit:e()<.7,k:1})}e()<.5&&Br(s.static,k,j,B),e()<.5&&Na(s.static,k+2,j,B,B<0?1:-1)}let C=new ne,T=q("#e8dcc0",.8);Qt(1.2,1.4,22,T,0,11,0,C,10),Qt(1.7,1.7,.5,T,0,18,0,C,12),Qt(.9,1.1,6,T,0,24,0,C,10),Qt(1.3,1.3,.4,T,0,27,0,C,12);let R=new Q(new $i(.9,2.5,10),q("#3a7a5a",.6));R.position.y=28.6,C.add(R);let I=new Q(new oi(.35,.07,6,16,Math.PI*1.4),q("#d8b040",.3,{metalness:.8}));I.position.y=30.3,C.add(I);let F=new Q(new oi(1.72,.06,6,24),new re({color:"#7dffb0"}));F.rotation.x=Math.PI/2,F.position.y=18.3,C.add(F),s.nightOnly.push(F),C.position.set(-30,-12,-48),s.static.add(C),s.ballOut=v=>v.x<i+.1||v.x>n-.1||Math.abs(v.z)>r-.1,s.extras.parapet={X0:i,X1:n,W:r,h:l},s.colliders.push({min:new b(-40,-40,r+.15),max:new b(40,-2,r+3),tag:"void"}),s.walkerPaths.length=0,Ga(s)}var Ky={alley:qy,yard:Yy,school:Zy,roof:$y};function jf(s){let t=Jn[s],e=Xy(t);Ky[s](e);let i={alley:"#5f5950",yard:"#7a6a50",school:"#8a857a",roof:"#6a5f52"}[s],n=new Q(new be(400,400),new Gt({color:i,roughness:1}));n.rotation.x=-Math.PI/2,n.position.y=s==="roof"?-14:-.02,n.receiveShadow=!0,e.root.add(n),e.root.add(e.static),e.root.add(e.dynamic);for(let o of[...e.nightOnly,...e.dayOnly])o.userData.keep=!0;let r=new Set;return e.root.traverse(o=>{if(o.isMesh)for(let a of Array.isArray(o.material)?o.material:[o.material])!a||r.has(a)||!a.isMeshStandardMaterial||!a.map||a.bumpMap||a.transparent||(r.add(a),a.bumpMap=a.map,a.bumpScale=o===e.groundMesh?3.5:2.5,a.needsUpdate=!0)}),Jf(e.static),e.static.traverse(o=>{o.isMesh&&(o.receiveShadow=!0,o.userData.dyn||(o.matrixAutoUpdate=!1,o.updateMatrix()))}),e.static.updateMatrixWorld(!0),e}var Wa=class extends Ds{constructor(){super();let t=new ce;t.deleteAttribute("uv");let e=new Gt({side:Fe}),i=new Gt,n=new Os(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new Q(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Q(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Q(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Q(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Q(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Q(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Q(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Q(t,Ks(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Q(t,Ks(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Q(t,Ks(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Q(t,Ks(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new Q(t,Ks(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Q(t,Ks(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ks(s){let t=new re;return t.color.setScalar(s),t}var Wr=class s extends Q{constructor(){let t=s.SkyShader,e=new ye({name:t.name,uniforms:ti.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new ce(1,1,1),e),this.isSky=!0}};Wr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new b},up:{value:new b(0,1,0)}},vertexShader:`
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

		}`};var su=null;function Jy(s){if(!su){let t=new Is(s);su=t.fromScene(new Wa,.04).texture,t.dispose()}return su}function jy(s){let t=new Yt(400,32,16),e=new ye({side:Fe,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ct(s?"#050a1e":"#4f8fd0")},mid:{value:new Ct(s?"#1c2850":"#9cc7e8")},bottom:{value:new Ct(s?"#2a2030":"#e8dcc0")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.6, h)) : mix(mid, bottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0); }`}),i=new Q(t,e);return i.renderOrder=-10,i}function Qy(){let t=new Float32Array(2700);for(let i=0;i<900;i++){let n=Math.random()*Math.PI*2,r=Math.random()*.45+.08;t[i*3]=Math.cos(n)*Math.cos(r*Math.PI/2)*380,t[i*3+1]=Math.sin(r*Math.PI/2)*380,t[i*3+2]=Math.sin(n)*Math.cos(r*Math.PI/2)*380}let e=new de;return e.setAttribute("position",new Ae(t,3)),new sa(e,new Mr({color:"#ffffff",size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1}))}var Xa=class{constructor(t,e,{night:i,quality:n,renderer:r}){if(this.scene=t,this.ctx=e,this.night=i,this.quality=n,this.group=new ne,t.add(this.group),this.flickers=[],this.t=0,i)this.group.add(jy(i));else{let c=new Wr;c.scale.setScalar(450);let h=c.material.uniforms;h.turbidity.value=7,h.rayleigh.value=1.6,h.mieCoefficient.value=.006,h.mieDirectionalG.value=.8,h.sunPosition.value.set(14,30,16).normalize(),c.material.depthWrite=!1,c.renderOrder=-10,this.group.add(c)}r&&(t.environment=Jy(r),t.environmentIntensity=i?.06:.32),t.fog=new jo(i?"#0a0f22":"#c8d4d8",i?30:60,i?110:170),t.background=new Ct(i?"#050a1e":"#9cc7e8");let o=n==="high";if(i){this.group.add(Qy());let c=new fi(new si({map:Kn(),color:"#dfe8ff",fog:!1,depthWrite:!1}));c.position.set(-120,160,-260),c.scale.setScalar(40),this.group.add(c);let h=new Q(new Vi(6,24),new re({color:"#f4f6ff",fog:!1}));h.position.copy(c.position),h.lookAt(0,0,0),this.group.add(h),this.group.add(new Rr("#3a4a80","#120e10",.7));let u=new Pr("#8a9ad8",.55);u.position.set(8,30,30),this.group.add(u)}else{this.group.add(new Rr("#dfefff","#7a6a55",1));let c=new Pr("#fff0d4",2.6);c.position.set(14,30,16),c.castShadow=!0;let h=o?4096:2048;c.shadow.mapSize.set(h,h);let u=c.shadow.camera;u.left=-36,u.right=36,u.top=26,u.bottom=-26,u.near=1,u.far=120,c.shadow.bias=-4e-4,c.shadow.normalBias=.03,this.group.add(c),this.group.add(c.target),this.sun=c}let a=o?3:n==="medium"?1:0,l=Kn();for(let c of e.lamps){if(c.bulbMat.emissiveIntensity=i?3:0,!i)continue;let h=new Ct(c.color),u=new Fs(h,c.flood?170:55,c.flood?48:20,c.flood?.8:1.05,.65,1.5);u.position.copy(c.pos);let d=c.pos.clone();d.y=0,c.flood?(d.x*=.55,d.z*=.4):d.z+=(c.face||0)*(c.wall?5:2.5),u.target.position.copy(d),a>0&&!c.flicker&&(u.castShadow=!0,u.shadow.mapSize.set(o?1024:512,o?1024:512),u.shadow.bias=-6e-4,u.shadow.normalBias=.04,a--),this.group.add(u,u.target);let f=new fi(new si({map:l,color:h,blending:Ci,depthWrite:!1,transparent:!0,opacity:.9}));f.position.copy(c.pos),f.scale.setScalar(c.flood?3.2:2),this.group.add(f);let g=c.pos.y,x=c.flood?6:g*.62,p=new ri(.12,x,g,24,1,!0);p.translate(0,-g/2,0);let m=new re({map:zf(),color:h,transparent:!0,opacity:.16,blending:Ci,depthWrite:!1,side:Ce,fog:!1}),y=new Q(p,m);y.position.copy(c.pos),this.group.add(y);let _={L:c,spot:u,sprite:f,cone:y,base:u.intensity,coneBase:m.opacity,level:1,target:1,timer:0};c.flicker&&this.flickers.push(_)}for(let c of e.pointLights){if(!i)continue;let h=new Os(c.color,c.intensity*1.2,c.dist,1.6);h.position.copy(c.pos),this.group.add(h);let u=new fi(new si({map:l,color:c.color,blending:Ci,depthWrite:!1,transparent:!0,opacity:.7}));u.position.copy(c.pos),u.scale.setScalar(1.4),this.group.add(u)}for(let c of e.litMats)c.m.emissiveIntensity=i?c.lit?c.k*ot(.7,1.2):0:c.dayK||0,c.emissiveMap&&i&&(c.m.emissiveMap=c.m.map,c.m.emissiveIntensity=c.k);for(let c of e.nightOnly)c.visible=i;for(let c of e.dayOnly)c.visible=!i;if(e.extras.fairy)for(let c of e.extras.fairy)c.visible=!0}update(t){this.t+=t;for(let e of this.flickers){if(e.timer-=t,e.timer<=0){let n=Math.random();n<.12?(e.target=.02,e.timer=ot(.05,.35)):n<.45?(e.target=ot(.15,.6),e.timer=ot(.03,.12)):(e.target=ot(.75,1),e.timer=ot(.1,.9))}e.level+=(e.target-e.level)*Math.min(1,t*40);let i=e.level*(.92+.08*Math.sin(this.t*90));e.spot.intensity=e.base*i,e.sprite.material.opacity=.9*i,e.cone.material.opacity=e.coneBase*i,e.L.bulbMat.emissiveIntensity=3*i}if(this.ctx.extras.fairy){let e=this.ctx.extras.fairy;for(let i=0;i<e.length;i++)e[i].visible=(Math.floor(this.t*2.5)+i)%3!==0||!this.night}for(let e of this.ctx.flags)e.children.forEach((i,n)=>{i.rotation.y=Math.sin(this.t*3+i.position.x*2)*.25});for(let e of this.ctx.clothes)e.rotation.x=Math.sin(this.t*1.7+e.position.x)*.12}dispose(){this.scene.remove(this.group)}};function t_(){return ei(512,256,(s,t,e)=>{s.fillStyle="#f4f1e8",s.fillRect(0,0,t,e);let i=[];i.push([0,90],[0,-90]);for(let n=0;n<5;n++)i.push([n*72,27]),i.push([n*72+36,-27]);s.fillStyle="#1b1b1b";for(let[n,r]of i)for(let o of[-360,0,360]){let a=(n+o+180)/360*t,l=(90-r)/180*e,c=26/Math.max(.35,Math.cos(r*Math.PI/180));s.beginPath();for(let h=0;h<5;h++){let u=h/5*Math.PI*2-Math.PI/2;s.lineTo(a+Math.cos(u)*c,l+Math.sin(u)*24)}s.closePath(),s.fill()}s.strokeStyle="rgba(80,70,60,0.35)",s.lineWidth=2;for(let n=0;n<40;n++){s.beginPath();let r=Math.random()*t,o=Math.random()*e;s.moveTo(r,o),s.lineTo(r+Math.random()*30-15,o+Math.random()*10-5),s.stroke()}})}var Pn=new b,ru=new b,qa=class{constructor(t){this.r=we.ballRadius,this.mesh=new Q(new Yt(this.r,24,16),new Gt({map:t_(),roughness:.55})),this.mesh.castShadow=!0,t.add(this.mesh),this.blob=new Q(new Vi(this.r*1.3,16),new re({color:"#000",transparent:!0,opacity:.35,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=1,t.add(this.blob),this.glow=new fi(new si({map:Kn(),color:"#fff6e0",transparent:!0,opacity:0,depthWrite:!1,blending:Ci})),this.glow.scale.setScalar(.9),t.add(this.glow),this.pos=new b(0,this.r,0),this.vel=new b,this.lastTouch=null,this.lastKickTeam=-1,this.frozen=!1,this.friction=.85,this.onBounce=null,this.onHit=null,this.spinAxis=new b(1,0,0)}place(t,e,i=this.r){this.pos.set(t,i,e),this.vel.set(0,0,0)}kick(t,e,i,n){this.vel.set(t,e,i),n&&(this.lastTouch=n,this.lastKickTeam=n.team)}speed(){return this.vel.length()}groundSpeed(){return Math.hypot(this.vel.x,this.vel.z)}update(t,e,i){if(this.frozen){this.syncMesh(t,0);return}if(i){this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z));return}let n=this.vel.length(),r=Math.min(8,Math.max(1,Math.ceil(n*t/.08))),o=t/r;for(let a=0;a<r;a++)this.step(o,e);this.syncMesh(t,Math.hypot(this.vel.x,this.vel.z))}step(t,e){let i=this.vel,n=this.pos,r=this.r,o=n.y>r+.02;i.y-=9.81*t;let a=o?.12:0;if(i.multiplyScalar(1-a*t),n.addScaledVector(i,t),n.y<r)if(n.y=r,i.y<-.6){let l=-i.y;i.y=l*.56,i.x*=.88,i.z*=.88,this.onBounce&&this.onBounce(l)}else i.y=0;if(n.y<=r+.01){let l=this.friction*t,c=Math.hypot(i.x,i.z);if(c>0){let h=Math.max(0,c-(l*1.4+c*l*.35));i.x*=h/c,i.z*=h/c}}for(let l of e){if(l.tag==="void")continue;ru.set(Math.max(l.min.x,Math.min(n.x,l.max.x)),Math.max(l.min.y,Math.min(n.y,l.max.y)),Math.max(l.min.z,Math.min(n.z,l.max.z))),Pn.subVectors(n,ru);let c=Pn.length();if(c>=r)continue;if(c<1e-5){let u=n.x-l.min.x,d=l.max.x-n.x,f=n.z-l.min.z,g=l.max.z-n.z,x=l.max.y-n.y,p=Math.min(u,d,f,g,x);Pn.set(p===u?-1:p===d?1:0,p===x?1:0,p===f?-1:p===g?1:0),c=0,n.addScaledVector(Pn,p+r)}else Pn.divideScalar(c),n.copy(ru).addScaledVector(Pn,r);let h=i.dot(Pn);if(h<0){let u=l.tag==="net"?.08:l.metal?.72:l.tag==="sheep"?.4:.58;i.addScaledVector(Pn,-(1+u)*h),l.tag==="net"?i.multiplyScalar(.3):i.multiplyScalar(.94),this.onHit&&this.onHit(l,-h,n)}}}syncMesh(t,e){this.mesh.position.copy(this.pos),e>.05&&(this.spinAxis.set(this.vel.z,0,-this.vel.x).normalize(),this.mesh.rotateOnWorldAxis(this.spinAxis,e*t/this.r)),this.blob.position.set(this.pos.x,.012,this.pos.z);let i=Math.max(0,this.pos.y-this.r),n=Math.max(.25,1-i*.25);this.blob.scale.setScalar(n),this.blob.material.opacity=.35*n,this.glow.position.copy(this.pos)}setNight(t){this.glow.material.opacity=t?.22:0}dispose(t){t.remove(this.mesh,this.blob,this.glow)}};var wi=new b,Qf,Ya;function e_(){return Qf||(Qf=new Vi(.55,24))}function i_(){if(Ya)return Ya;let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.5,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new cn(s);return Ya=new re({map:i,transparent:!0,depthWrite:!1}),Ya}var q1=new b,Za=class{constructor(t,e,i,n,r){this.match=t,this.team=e,this.idx=i,this.name=r.name,this.number=r.number,this.isGK=!!r.isGK,this.char=ka(n),this.anim=new Xs(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new b,this.vel=new b,this.facing=e===0?Math.PI/2:-Math.PI/2,this.want=new tt,this.wantSprint=!1,this.lookAt=null,this.state="play",this.stateT=0,this.stateDur=0,this.stamina=1,this.ctrl=null,this.ai={t:Math.random()*.3,plan:null,target:new b,dirty:0},this.mods={speed:1,shot:1,control:1,stamina:1},this.cool={kick:0,steal:0,slide:0,touch:0,pull:0,call:0},this.pending=null,this.pullTarget=null,this.pulledBy=null,this.pullT=0,this.walkTo=null,this.onArrive=null,this.home=new b,this.radius=we.playerRadius*this.char.scale,this.stats={goals:0,fouls:0,nutmegs:0};let o=new re({color:t.teamColor(e),transparent:!0,opacity:.5,depthWrite:!1});this.ring=new Q(new ca(.36,.41,32),o),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=2,t.scene.add(this.ring),this.contact=new Q(e_(),i_()),this.contact.rotation.x=-Math.PI/2,this.contact.renderOrder=1,t.scene.add(this.contact),this.marker=null,this.anim.onStep=a=>t.onFootstep(this,a)}get dir(){return this.team===0?1:-1}get hasBall(){return this.match.owner===this}get active(){return!["out","hidden","leaving","returning","fetch","fetched"].includes(this.state)}get canAct(){return this.state==="play"&&!this.pending}get down(){return this.state==="fallen"||this.state==="slide"||this.state==="nutmegged"||this.state==="dive"}fwd(t=wi){return t.set(Math.sin(this.facing),0,Math.cos(this.facing))}headPos(t=new b){return t.set(this.pos.x,(this.state==="fallen"?.8:2.2)*this.char.scale,this.pos.z)}setMarker(t){if(this.marker&&(this.root.remove(this.marker),this.marker=null),!t)return;let e=new ne,i=new Q(new $i(.13,.26,4),new re({color:t,depthTest:!1}));i.rotation.x=Math.PI,i.renderOrder=10,e.add(i),e.position.y=2.45,this.marker=e,this.root.add(e),this.ring.material.opacity=1}setState(t,e=0){this.state=t,this.stateT=0,this.stateDur=e}place(t,e,i){this.pos.set(t,0,e),this.vel.set(0,0,0),i!==void 0&&(this.facing=i),this.sync()}show(t){this.root.visible=t,this.ring.visible=t,this.contact&&(this.contact.visible=t)}update(t){for(let f in this.cool)this.cool[f]>0&&(this.cool[f]-=t);if(this.stateT+=t,this.pending&&(this.pending.t-=t,this.pending.t<=0)){let f=this.pending.fn;this.pending=null,f()}let e=this.state;if(e==="out"||e==="hidden"||e==="fetched")return;let i=1,n=!0;switch(e){case"kick":i=.3,this.stateT>=this.stateDur&&this.setState("play");break;case"slide":{n=!1;let f=Math.max(0,1-this.stateT/.75);this.fwd(wi),this.vel.set(wi.x*this.slideSpeed*f,0,wi.z*this.slideSpeed*f),this.stateT>=we.slideTime+.2&&(this.setState("play"),this.cool.slide=.6);break}case"fallen":case"nutmegged":case"dive":n=!1,this.vel.multiplyScalar(Math.max(0,1-t*(e==="dive"?2.2:5))),this.stateT>=this.stateDur&&this.setState("play");break;case"gkhold":n=!1,this.vel.set(0,0,0);break;case"dazed":i=.35,this.stateT>=this.stateDur&&(this.setState("play"),this.anim.stop("dazed"));break;case"leaving":case"returning":case"fetch":n=!1,this.walkStep(t,e==="fetch"?4.2:2.4),this.walkTo&&this.stateT>9&&(this.pos.copy(this.walkTo),this.walkStep(t,1));break;default:break}n&&this.locomote(t,i),this.pos.addScaledVector(this.vel,t);let r=Math.hypot(this.vel.x,this.vel.z);e==="slide"||e==="fallen"||e==="dive"||(r>.45&&e!=="gkhold"?this.facing=Zn(this.facing,Math.atan2(this.vel.x,this.vel.z),we.turnRate,t):this.lookAt&&(this.facing=Zn(this.facing,Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z),6,t)));let o=this.anim,a=this.prevSp??r,l=this.prevFacing??this.facing,c=this.facing-l;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;o.accel+=((r-a)/Math.max(t,.001)-o.accel)*Math.min(1,t*6),o.turn+=(c/Math.max(t,.001)-o.turn)*Math.min(1,t*8),this.prevSp=r,this.prevFacing=this.facing;let h=0,u=0,d=this.lookAt||this.match.ball.pos;if(d&&e!=="fallen"&&e!=="slide"){let f=Math.atan2(d.x-this.pos.x,d.z-this.pos.z)-this.facing;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;Math.abs(f)<2.2&&(h=f*.7);let g=Math.hypot(d.x-this.pos.x,d.z-this.pos.z);u=g<3?(3-g)*.12:0}o.look+=(h-o.look)*Math.min(1,t*5),o.lookX+=(u-o.lookX)*Math.min(1,t*5),o.update(t,e==="slide"||e==="fallen"||e==="dive"?0:r),this.sync()}locomote(t,e){let i=this.want,n=Math.min(1,i.length()),r=this.wantSprint&&this.stamina>.05&&n>.3,o=(r?we.sprint:we.jog)*this.mods.speed*e;this.hasBall&&(o*=we.withBallMul),this.pulledBy&&(o*=.42),this.pullTarget&&(o*=.85),this.state==="celebrate"&&(o*=.9),r?this.stamina=Math.max(0,this.stamina-we.staminaDrain*t/this.mods.stamina):this.stamina=Math.min(1,this.stamina+we.staminaRegen*t*this.mods.stamina*(n<.2?1.6:1));let a=n>.01?i.x/Math.max(1e-6,i.length())*n*o:0,l=n>.01?i.y/Math.max(1e-6,i.length())*n*o:0,c=a-this.vel.x,h=l-this.vel.z,u=Math.hypot(c,h),f=(a*a+l*l>this.vel.x*this.vel.x+this.vel.z*this.vel.z?we.accel:we.decel)*t;u<=f?(this.vel.x=a,this.vel.z=l):(this.vel.x+=c/u*f,this.vel.z+=h/u*f)}walkStep(t,e){if(!this.walkTo)return;let i=this.walkTo.x-this.pos.x,n=this.walkTo.z-this.pos.z,r=Math.hypot(i,n);if(r<.25){this.vel.set(0,0,0);let o=this.onArrive;this.onArrive=null,this.walkTo=null,o&&o();return}this.vel.set(i/r*e,0,n/r*e)}sync(){if(this.root.position.copy(this.pos),this.root.rotation.y=this.facing,this.ring.position.set(this.pos.x,.02,this.pos.z),this.contact){this.contact.position.set(this.pos.x,.015,this.pos.z);let t=this.state==="fallen"||this.state==="slide"||this.state==="dive";this.contact.scale.set(t?1.6:1,t?1.6:1,1),this.contact.visible=this.root.visible}}pass(t,e=0,i=0,n=.4){if(!this.hasBall||!this.canAct)return!1;let r=this.match,o,a;if(t){let l=r.ball.pos,c=0;for(let h=0;h<2;h++){let u=t.pos.x+t.vel.x*c*.8,d=t.pos.z+t.vel.z*c*.8,f=Math.hypot(u-l.x,d-l.z);c=r.passTime(f,r.passSpeedFor(f,6.5))}o=t.pos.x+t.vel.x*c*.8,a=t.pos.z+t.vel.z*c*.8}else{let l=Math.hypot(e,i)||1,c=3+Wt(n,0,1)*19;o=this.pos.x+e/l*c,a=this.pos.z+i/l*c}return this.faceTo(wi.set(o,0,a)),this.setState("kick",.32),this.anim.play("pass",{speed:1.3}),this.pending={t:.12,fn:()=>{if(!this.hasBall)return;let l=r.ball.pos,c=o-l.x,h=a-l.z,u=Math.max(.5,Math.hypot(c,h)),d=t?r.passSpeedFor(u,6.5):r.passSpeedFor(u,0),f=.3;if(t&&r.lineBlocked(l.x,l.z,o,a,this.team)){let p=Wt(u/11,.5,1.6);d=u/p,f=4.9*p}let g=(this.ctrl?.025:(1-r.aiSkill(this))*.08)*Math.min(1,u/15),x=Math.atan2(c,h)+ot(-g,g);r.kickBall(this,Math.sin(x)*d,f,Math.cos(x)*d,{pass:t,kind:"pass"})}},!0}shoot(t,e=0,i=0){if(!this.hasBall||!this.canAct)return!1;let n=this.match,r=n.goalFor(this.team);return this.faceTo(wi.set(r.x,0,e*r.hw)),this.setState("kick",.5),this.anim.play("kick",{speed:1.15}),this.pending={t:.17,fn:()=>{if(!this.hasBall)return;let o=n.ball.pos,a=this.ctrl?1:this.match.aiSkill(this),l=n.pressureOn(this),c=(1-a*.75)*.9+l*.4+Math.max(0,t-.92)*2.5,h=Wt(e,-1,1)*r.hw*.78+ot(-1,1)*c*r.hw*.7,d=r.x+Math.sign(r.x)*.6-o.x,f=h-o.z,g=Math.max(1,Math.hypot(d,f)),x=(10.5+t*15.5)*this.mods.shot,p=g/x,y=(Wt(r.h*(.15+i*.55)+ot(-.1,.35)*c+t*.12,.12,r.h*1.6)-o.y+.5*9.81*p*p)/p;y=Wt(y,.2,14),n.kickBall(this,d/g*x,y,f/g*x,{kind:"shot",power:t})}},!0}slide(){if(!this.canAct||this.hasBall||this.cool.slide>0||this.isGK&&!this.ctrl&&ge(.5))return!1;this.releasePull(),this.setState("slide",we.slideTime);let t=Math.hypot(this.vel.x,this.vel.z);return this.slideSpeed=Math.max(t*1.15,we.slideSpeed),this.slideHit=new Set,this.slideBallFirst=!1,this.slideTouchedBall=!1,this.anim.play("slide"),this.match.onSlide(this),!0}pull(t){return!this.canAct||this.hasBall||!t||t.pulledBy||this.cool.pull>0||t.state!=="play"&&t.state!=="kick"?!1:(this.pullTarget=t,t.pulledBy=this,this.pullT=0,this.anim.play("pull"),t.anim.play("pulled"),this.match.onPullStart(this,t),!0)}releasePull(t=!1){let e=this.pullTarget;e&&(this.pullTarget=null,e.pulledBy=null,this.anim.stop("pull"),e.anim.stop("pulled"),this.cool.pull=1.2,this.match.onPullEnd(this,e,t))}nutmeg(){if(!this.hasBall||!this.canAct)return!1;let t=this.match,e=t.nutmegVictim(this);return e?(this.faceTo(e.pos),this.setState("kick",.25),this.anim.play("pass",{speed:1.6}),this.pending={t:.09,fn:()=>{if(!this.hasBall)return;let i=t.ball.pos,n=e.pos.x-i.x,r=e.pos.z-i.z,o=Math.max(.3,Math.hypot(n,r)),a=e.pos.x+n/o*2.2,l=e.pos.z+r/o*2.2,c=a-i.x,h=l-i.z,u=Math.hypot(c,h),d=7.5;t.kickBall(this,c/u*d,.2,h/u*d,{kind:"nutmeg",victim:e})}},!0):(this.setState("kick",.3),this.anim.play("pass",{speed:1.5}),this.pending={t:.1,fn:()=>{this.hasBall&&(this.fwd(wi),t.kickBall(this,wi.x*6.5,3.4,wi.z*6.5,{kind:"chip"}))}},!0)}fall(t=we.fallTime){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.hasBall&&this.match.loseBall(this,3),this.pending=null,this.setState("fallen",t),this.anim.play("fall",{speed:we.fallTime/t})}gkCatch(){this.setState("gkhold"),this.anim.play("holdBall")}gkThrow(t){if(this.state!=="gkhold")return;let e=this.match;this.faceTo(t?t.pos:wi.set(this.pos.x+this.dir*8,0,this.pos.z)),this.anim.stop("holdBall"),this.anim.play("throw"),this.setState("kick",.6),this.pending={t:.36,fn:()=>{if(!this.hasBall)return;let i=e.ball.pos,n=t?t.pos.x:this.pos.x+this.dir*9,r=t?t.pos.z:this.pos.z,o=n-i.x,a=r-i.z,l=Math.max(1,Math.hypot(o,a)),c=Wt(5+l*.8,7,14);e.kickBall(this,o/l*c,2.6,a/l*c,{pass:t,kind:"throw"})}}}dive(t,e=5.5){this.setState("dive",1.4),this.anim.play(t>0?"diveR":"diveL"),this.fwd(wi),this.vel.set(-wi.z*t*e,0,wi.x*t*e)}faceTo(t){this.facing=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)}celebrate(t){this.setState("celebrate"),this.anim.play(t)}stopCelebrate(){this.anim.stop("airplane"),this.anim.stop("jump"),this.anim.stop("sad"),this.anim.stop("cheer"),this.state==="celebrate"&&this.setState("play")}resetForKickoff(){this.releasePull(),this.pulledBy&&this.pulledBy.releasePull(),this.pending=null,this.anim.stop(),this.active&&this.setState("play"),this.stamina=Math.max(this.stamina,.6),this.want.set(0,0)}dispose(){this.match.scene.remove(this.root),this.match.scene.remove(this.ring),this.match.scene.remove(this.contact)}};var Js=new b,Ji=new b;function jn(s,t,e,i=2,n=6){let r=t-s.pos.x,o=e-s.pos.z,a=Math.hypot(r,o);if(a<.15)return s.want.set(0,0),s.wantSprint=!1,a;let l=Math.min(1,a/i);return s.want.set(r/a*l,o/a*l),s.wantSprint=a>n&&s.stamina>.25,a}function n_(s,t,e,i){let n=s.ai,r=t.goalFor(s.team),o=r.x,a=t.def,l=o-s.pos.x,c=0-s.pos.z,h=Math.hypot(l,c);if(n.t-=e,n.t<=0){n.t=ot(.12,.28)+i.react*.5;let u=t.pressureDist(s),d=Math.min(13,a.halfL*.72);if(h<d&&s.cool.kick<=0){let x=!t.lineBlocked(s.pos.x,s.pos.z,o,0,s.team,.6),m=h<d*.45?.85:x?.55:.18;if(ge(m*(.6+i.skill*.5))){let y=t.goalkeeper(1-s.team),_=ot(.35,.9)*(ge(.5)?1:-1);y&&Math.abs(y.pos.z)>.2&&(_=-Math.sign(y.pos.z)*ot(.45,.95));let M=Wt(h/d+ot(-.1,.15),.5,.93);if(s.shoot(M,_,r.type==="frame"||r.type==="chalk"?ot(0,.8):ot(0,.25)))return}}let f=t.bestPassTarget(s,null);if(f&&(u<1.7&&f.score>-.4&&ge(.55+i.skill*.3)||f.score>.55&&ge(.25))&&s.pass(f.player)||u<2&&ge(.1+i.skill*.12)&&t.nutmegVictim(s)&&s.nutmeg())return;Ji.set(l,0,c).normalize(),Js.set(0,0,0);for(let x of t.teams[1-s.team]){if(!x.active||x.down)continue;let p=s.pos.x-x.pos.x,m=s.pos.z-x.pos.z,y=Math.hypot(p,m);if(y>4.5||y<.01||-(p*Ji.x+m*Ji.z)/y<-.2)continue;let M=(4.5-y)/4.5,C=Math.sign(p*Ji.z-m*Ji.x)||(ge(.5)?1:-1);Js.x+=-Ji.z*C*M*1.6+p/y*M*.6,Js.z+=Ji.x*C*M*1.6+m/y*M*.6}let g=t.ctx.bounds;s.pos.z<g.minZ+1.5&&(Js.z+=1),s.pos.z>g.maxZ-1.5&&(Js.z-=1),Ji.add(Js).normalize(),n.dribble=n.dribble||new tt,n.dribble.set(Ji.x,Ji.z),n.sprint=t.pressureDist(s)>2.5&&s.stamina>.4&&ge(.6)}n.dribble&&(s.want.copy(n.dribble),s.wantSprint=n.sprint)}function s_(s,t,e,i){let n=t.ball,r=t.owner;if(r&&r.team!==s.team){let g=t.ownGoal(s.team).x-r.pos.x,x=-r.pos.z,p=Math.hypot(g,x)||1,m=Math.hypot(r.pos.x-s.pos.x,r.pos.z-s.pos.z),y=m>2?1.2:.35;if(jn(s,r.pos.x+g/p*y+r.vel.x*.2,r.pos.z+x/p*y+r.vel.z*.2,1,3),s.wantSprint=m>1.5&&s.stamina>.2,s.ai.dirtyT=(s.ai.dirtyT||0)-e,s.ai.dirtyT<=0&&s.canAct){s.ai.dirtyT=ot(.35,.7);let _=(r.pos.x-s.pos.x)*Math.sin(r.facing)+(r.pos.z-s.pos.z)*Math.cos(r.facing)>0;if(m<2.6&&m>.9&&ge(i.dirty*.45)){let M=Math.sin(s.facing),C=Math.cos(s.facing);if(((n.pos.x-s.pos.x)*M+(n.pos.z-s.pos.z)*C)/Math.max(.1,Math.hypot(n.pos.x-s.pos.x,n.pos.z-s.pos.z))>.75){s.faceTo(n.pos),s.slide();return}}m<1.15&&_&&ge(i.dirty*.5)&&s.pull(r)&&(s.ai.pullFor=ot(.6,1.3))}return}let o=n.pos.x,a=n.pos.z,l=Math.hypot(o-s.pos.x,a-s.pos.z),c=Wt(l/6.5,0,1.4),h=o+n.vel.x*c*.7,u=a+n.vel.z*c*.7,d=t.ctx.bounds;h=Wt(h,d.minX+.3,d.maxX-.3),u=Wt(u,d.minZ+.3,d.maxZ-.3),jn(s,h,u,.6,2.5)}function r_(s,t,e,i,n,r){let o=t.def,a=t.ball.pos,l=t.ctx.bounds,c=s.dir,h=n<=1?[0]:n===2?[-.5,.5]:[-.62,0,.62],u=h[i%h.length]*o.halfW,d,f;if(r)d=a.x+c*(4+i%2*3.5),f=u+Math.sin(t.time*.6+s.idx)*1.2,d=Wt(d,-o.halfL+2,o.halfL-2.5);else{let g=t.ownGoal(s.team),x=.42+i%2*.18;d=g.x+(a.x-g.x)*x,f=a.z*.45+u*.6;let p=null,m=4.5;for(let y of t.teams[1-s.team]){if(!y.active||y===t.owner)continue;let _=Math.hypot(y.pos.x-d,y.pos.z-f);_<m&&(m=_,p=y)}if(p){let y=g.x-p.pos.x,_=-p.pos.z,M=Math.hypot(y,_)||1;d=p.pos.x+y/M*1.4,f=p.pos.z+_/M*1.4}}d=Wt(d,l.minX+.6,l.maxX-.6),f=Wt(f,l.minZ+.6,l.maxZ-.6),jn(s,d,f,2.2,7)}function o_(s,t,e,i){let n=t.ownGoal(s.team),r=t.ball,o=s.dir,a=n.x+o*(n.type==="chalk"?1.1:.9);if(s.lookAt=r.pos,s.state==="gkhold"){if(s.ai.holdT=(s.ai.holdT||0)+e,s.ai.holdT>.9){s.ai.holdT=0;let f=t.bestPassTarget(s,null,!0);s.gkThrow(f?f.player:null)}return}if(!s.canAct)return;let l=r.vel.x;if(!t.owner&&l*o<-3.5){let f=(a-r.pos.x)/l;if(f>0&&f<1.1){let g=r.pos.z+r.vel.z*f,x=r.pos.y+r.vel.y*f-4.9*f*f,p=g-s.pos.z;if(s.ai.seen=(s.ai.seen||0)+e,s.ai.seen>i.react*.6&&Math.abs(g)<n.hw+.6&&x<n.h+.4){if(Math.abs(p)>.75&&f<.55){let m=p*Math.sin(s.facing)>0?1:-1;s.dive(m,Wt(Math.abs(p)/Math.max(.25,f)*.8,3,7.5)),s.ai.seen=0;return}jn(s,a,Wt(g,-n.hw,n.hw),.4,1),s.wantSprint=!0;return}}}else s.ai.seen=0;let c=Math.hypot(r.pos.x-n.x,r.pos.z);if(!t.owner&&c<5.5&&t.nearestTo(r.pos,s.team)===s&&r.speed()<9){jn(s,r.pos.x,r.pos.z,.5,2);return}let u=t.owner&&t.owner.team!==s.team&&c<6?1.6:0,d=Wt(r.pos.z*.5,-n.hw*.85,n.hw*.85);jn(s,a+o*u,d,.8,3)}function ou(s,t,e){if(!s.active)return;let i=t.aiLevel(s.team);if(s.lookAt=t.ball.pos,s.pullTarget){s.ai.pullFor=(s.ai.pullFor||1)-e;let o=s.pullTarget;jn(s,o.pos.x-Math.sin(o.facing)*.6,o.pos.z-Math.cos(o.facing)*.6,.5,1),s.ai.pullFor<=0&&s.releasePull(ge(.4));return}if(s.state==="celebrate")return;if(s.isGK){o_(s,t,e,i);return}if(!s.canAct&&s.state!=="kick"){s.want.set(0,0);return}if(s.hasBall){n_(s,t,e,i);return}let n=t.roles[s.team];if(n.chaser===s){s_(s,t,e,i);return}if(t.pendingPass&&t.pendingPass.target===s&&!t.owner){t.receiveSteer(s);return}let r=t.owner?t.owner.team===s.team:t.ball.lastKickTeam===s.team&&t.ball.groundSpeed()>3;r_(s,t,e,n.slots.get(s)??0,n.nSlots,r)}var Xr=["#26262b","#3b4a6b","#4a4038","#2f3a4a","#555046"],au=["short","curly","buzz","short","cap","short","curly"];function tp(s,t,e,{kits:i=!1,shoes:n=!1,isGK:r=!1}={}){let o=Ke(e*97+t*13+5),a=s.colors[t%s.colors.length],l=o.pick(nu),c=o.pick(Vr),h=[1,7,10,9,4,11,8,5,3,6][t%10],u=!n&&o.chance(.35);if(i)return{skin:l,hair:c,hairStyle:o.pick(au),top:{type:"jersey",color:r?"#2f2f33":s.colors[0],number:h,numColor:s.accent},bottom:{type:"shorts",color:r?"#2f2f33":s.accent==="#ffffff"?"#f2f2f2":"#222"},socks:s.colors[0],shoes:"#1a1a1a",scale:o.range(.92,1),build:o.range(.95,1.08),capColor:s.colors[0]};let d=r?"tracksuit":o.pick(["tracksuit","tshirt","tank","jersey","tshirt","shirt"]),f,g;switch(d){case"tracksuit":f={type:"tracksuit",color:a,color2:"#ffffff"},g={type:"pants",color:o.chance(.6)?a:"#26262b"};break;case"tank":f={type:"tank",color:a},g={type:o.chance(.5)?"shorts":"pants",color:o.pick(Xr)};break;case"jersey":f={type:"jersey",color:a,number:h,numColor:s.accent},g={type:"shorts",color:o.chance(.5)?"#f2f2f2":"#222"};break;case"shirt":f={type:"shirt",color:a,color2:"#ffffff"},g={type:"pants",color:o.pick(Xr)};break;default:f={type:"tshirt",color:a,number:o.chance(.4)?h:null,numColor:s.accent},g={type:o.chance(.4)?"shorts":"pants",color:o.pick(Xr)}}return r&&(f={type:"tracksuit",color:"#2f2f33",color2:a},g={type:"pants",color:"#2f2f33"}),{skin:l,hair:c,hairStyle:o.pick(au),capColor:o.pick([a,"#222","#eee"]),top:f,bottom:g,slippers:u,shoes:u?o.pick(["#2e8b57","#3a6fd8","#e05a30","#222"]):o.pick(["#e8e4dc","#e8e4dc","#222","#c8c0b0"]),socks:o.chance(.5)?"#f2f2f2":null,scale:o.range(.9,1),build:o.range(.94,1.1)}}function js(s,t){let e=Ke(t*31+3),i=e.pick(nu);switch(s){case"woman":return{skin:i,hairStyle:"scarf",scarfColor:e.pick(["#3b2a4a","#1c1c24","#6a2a3a","#2a4a5a","#a07a5a"]),top:{type:"dress",color:e.pick(["#2e2e3a","#4a1f3a","#3a4a2a","#5a4a3a","#222"])},bottom:{type:"pants",color:"#222"},shoes:"#1a1a1a",scale:e.range(.92,.98)};case"mom":return{skin:i,hairStyle:"scarf",scarfColor:"#1c1c24",top:{type:"dress",color:"#4a1f3a"},bottom:{type:"pants",color:"#222"},shoes:"#222",scale:.96,build:1.15};case"old":return{skin:i,hair:"#9a9a9a",hairStyle:e.pick(["gray","bald","gray"]),mustache:!0,top:{type:"galabeya",color:e.pick(["#8a7a5e","#d8d4c8","#5a6a7a","#7a6a5a","#c8c0a8"])},bottom:{type:"pants",color:"#555"},shoes:"#4a3a2a",slippers:e.chance(.5),scale:e.range(.94,1),build:e.range(1,1.15)};case"headmaster":return{skin:i,hair:"#555",hairStyle:"bald",mustache:!0,glasses:!0,top:{type:"suit",color:"#4a4a52",color2:"#7a1f1f"},bottom:{type:"pants",color:"#4a4a52"},shoes:"#111",scale:1.02,build:1.2};case"kid":return{skin:i,hair:e.pick(Vr),hairStyle:e.pick(au),top:{type:"tshirt",color:e.pick(["#e8b830","#3aa356","#e05a30","#7a5ad8","#eee","#30a0c0"])},bottom:{type:"shorts",color:e.pick(Xr)},slippers:e.chance(.6),shoes:"#2e8b57",scale:e.range(.72,.82)};case"baker":return{skin:i,hair:e.pick(Vr),hairStyle:"buzz",mustache:!0,top:{type:"tshirt",color:"#e8e4dc"},bottom:{type:"pants",color:"#5a5a5a"},shoes:"#333",scale:.98};case"man":default:return{skin:i,hair:e.pick(Vr),hairStyle:e.pick(["short","buzz","gray"]),mustache:e.chance(.6),top:{type:e.pick(["shirt","tshirt","galabeya"]),color:e.pick(["#8a7a5e","#5a7a9a","#d8d4c8","#7a4a3a","#3a5a4a"]),color2:"#eee"},bottom:{type:"pants",color:e.pick(Xr)},shoes:"#2a2a2a",scale:e.range(.95,1.02),build:e.range(1,1.15)}}}var lu=100,Qn=class{constructor(t,e){this.m=t,this.char=ka(e),this.anim=new Xs(this.char),this.root=this.char.root,t.scene.add(this.root),this.pos=new b,this.facing=0,this.radius=.32,this.height=1.75*this.char.scale}headPos(t=new b){return t.set(this.pos.x,this.height+.35,this.pos.z)}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}remove(){this.m.scene.remove(this.root)}},$a=class extends Qn{constructor(t,e){let i=ie(["man","woman","old","man","woman","kid"]);if(super(t,js(i,lu++)),this.kind=i,(i==="old"||this.char.look.top.type==="galabeya")&&(this.anim.ampScale=.55),i==="woman"&&(this.anim.ampScale=.6),this.speed=i==="old"?.95:i==="kid"?1.9:ot(1.15,1.45),e.cross){let n=t.ctx.bounds,r=ot(n.minX*.7,n.maxX*.7),o=ge(.5);this.a=new b(r,0,o?e.z0:e.z1),this.b=new b(r+ot(-3,3),0,o?e.z1:e.z0)}else{let n=ge(.5);this.a=(n?e.b:e.a).clone(),this.b=(n?e.a:e.b).clone()}if(this.pos.copy(this.a),this.state="walk",this.t=0,this.done=!1,this.carry=null,i==="woman"&&ge(.6)){let n=rt(.28,.32,.18,q("#f0f0f0"),0,-.2,0);this.char.J.rHand.add(n)}if(i==="man"&&ge(.4)){let n=rt(.25,.32,.03,q("#dcd8cc"),0,-.1,.05);this.char.J.lHand.add(n)}}hitByBall(t){this.state!=="walk"||t<2.5||(this.state="react",this.t=0,this.facing=Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),this.anim.play("point"),this.m.say(this,ie(oe.walkerHit),{color:"#fff"}),this.m.audio.play("ouch"))}update(t){this.t+=t;let e=0;if(this.state==="walk"){let i=this.b.x-this.pos.x,n=this.b.z-this.pos.z,r=Math.hypot(i,n);if(r<.3){this.done=!0;return}let o=!1;for(let a of this.m.allPlayers){if(!a.active)continue;let l=a.pos.x-this.pos.x,c=a.pos.z-this.pos.z;if(Math.hypot(l,c)<.75&&l*i+c*n>0){o=!0;break}}e=o?0:this.speed,this.pos.x+=i/r*e*t,this.pos.z+=n/r*e*t,this.facing=Zn(this.facing,Math.atan2(i,n),6,t)}else this.state==="react"&&this.t>1.8&&(this.state="walk",this.anim.stop("point"));this.anim.update(t,e),this.sync()}},Ka=class extends Qn{constructor(t,e){super(t,js("baker",lu++)),this.anim.mode="ride";let i=t.ctx.bounds;this.dir=ge(.5)?1:-1,this.pos.set(this.dir>0?i.minX-3:i.maxX+3,0,e),this.end=this.dir>0?i.maxX+3:i.minX-3,this.facing=this.dir>0?Math.PI/2:-Math.PI/2,this.speed=3.4,this.radius=.55,this.done=!1;let n=new ne,r=q("#1b1b1b",.6);for(let c of[-.55,.55]){let h=new Q(new oi(.33,.035,6,20),r);h.rotation.y=Math.PI/2,h.position.set(0,.35,c),h.castShadow=!0,n.add(h)}let o=q("#2a5a8a",.5,{metalness:.5}),a=rt(.05,.05,1,o,0,.62,0,n);a.rotation.x=.1,rt(.05,.5,.05,o,0,.6,-.2,n),rt(.5,.04,.04,o,0,1,.45,n),rt(.18,.05,.25,q("#222"),0,.88,-.25,n),this.bike=n,this.root.add(n),this.char.J.hips.position.z=-.25;let l=new ne;rt(1.1,.06,.55,q("#8b5a2b"),0,0,0,l);for(let c=0;c<10;c++){let h=new Q(new Yt(.11,8,6),q("#d8a860"));h.scale.set(1,.4,1),h.position.set(-.42+c%5*.21,.06,c<5?-.12:.12),l.add(h)}l.position.set(0,.32,0),this.char.J.head.add(l),this.char.J.head.scale.multiplyScalar(1),this.rang=!1}hitByBall(){this.m.say(this,"\u062D\u0627\u0633\u0628 \u0627\u0644\u0639\u064A\u0634 \u064A\u0627 \u0627\u0628\u0646\u064A!")}update(t){this.pos.x+=this.dir*this.speed*t,(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),!this.rang&&Math.abs(this.pos.x-this.m.ball.pos.x)<8&&(this.rang=!0,this.m.audio.play("bell")),this.anim.update(t,this.speed),this.sync()}},Ja=class{constructor(t,e){this.m=t;let{grp:i,wheels:n,disco:r}=Vf();if(this.grp=i,this.wheels=n,this.disco=r,t.scene.add(i),this.dir=ge(.5)?1:-1,this.pos=new b(this.dir>0?e.from:e.to,0,e.z),this.end=this.dir>0?e.to:e.from,this.speed=5.2,this.grp.rotation.y=this.dir>0?0:Math.PI,this.done=!1,this.t=0,this.honked=0,this.collider={min:new b,max:new b,tag:"toktok",solid:!0},t.night){let o=new Fs("#fff0c0",120,18,.5,.5,1.5);o.position.set(1.45,.95,0),o.target.position.set(8,0,0),i.add(o,o.target)}this.update(0)}update(t){this.t+=t;let e=1;for(let n of this.m.allPlayers){if(!n.active)continue;let r=(n.pos.x-this.pos.x)*this.dir;r>0&&r<3.5&&Math.abs(n.pos.z-this.pos.z)<1.3&&(e=Math.min(e,.25))}this.vx=this.dir*this.speed*e,this.pos.x+=this.vx*t,this.honked-=t,e<1&&this.honked<=0&&(this.m.audio.play("horn"),this.honked=1.4),(this.dir>0&&this.pos.x>this.end||this.dir<0&&this.pos.x<this.end)&&(this.done=!0),this.grp.position.copy(this.pos),this.grp.position.y=Math.abs(Math.sin(this.t*14))*.02;for(let n of this.wheels)n.rotation.y+=this.vx*t*3;this.disco.forEach((n,r)=>{n.visible=(Math.floor(this.t*6)+r)%2===0});let i=this.collider;i.min.set(this.pos.x-1.6,0,this.pos.z-.7),i.max.set(this.pos.x+1.6,2.1,this.pos.z+.7)}remove(){this.m.scene.remove(this.grp)}},qr=class extends Qn{constructor(t,e){super(t,js(e.kind,lu++)),this.pos.copy(e.pos),this.facing=e.rotY,this.anim.play("sit"),this.cheerT=0,this.sync(),this.anim.update(1,0)}cheer(t=3){this.cheerT=t,this.anim.play("sitCheer")}update(t){this.cheerT>0&&(this.cheerT-=t,this.cheerT<=0&&this.anim.play("sit")),this.anim.update(t,0),this.sync()}},ja=class extends Qn{constructor(t,e){super(t,js("mom",7)),this.balc=e,this.pos.copy(e.momPos),this.facing=e.face>0?0:Math.PI,this.root.visible=!1,this.t=0,this.mode=null,this.anim.ampScale=.6,this.sync()}headPos(t=new b){return t.set(this.pos.x,this.pos.y+2.1,this.pos.z)}call(t){this.root.visible=!0,this.mode="call",this.t=0,this.anim.play("wave"),this.m.say(this,oe.momCall(t),{color:"#ffe9f0",dur:3.6}),this.m.audio.play("mom")}catchBall(){this.root.visible=!0,this.mode="ball",this.t=0,this.anim.stop(),this.anim.play("holdBall")}update(t){if(this.t+=t,this.mode==="call"&&this.t>4&&(this.mode=null,this.root.visible=!1,this.anim.stop()),this.mode==="ball"){let e=this.m,i=new b;if(this.char.J.rHand.getWorldPosition(i),this.t<2.6&&e.ball.place(i.x,i.z+(this.balc.face>0?.25:-.25),i.y),this.t>.6&&this.t<.7&&e.say(this,ie(oe.balconyBack),{color:"#ffe9f0",dur:2.6}),this.t>2&&!this.thrown&&(this.thrown=!0,this.anim.play("throw")),this.t>2.38&&!this.released){this.released=!0,e.ball.frozen=!1;let n=ot(-3,3),r=0,o=n-e.ball.pos.x,a=r-e.ball.pos.z,l=Math.hypot(o,a);e.ball.kick(o/l*6,3,a/l*6,null),e.onBalconyReturn()}this.t>3.6&&(this.mode=null,this.root.visible=!1,this.thrown=this.released=!1,this.anim.stop())}this.root.visible&&(this.anim.update(t,0),this.sync())}},Qa=class extends Qn{constructor(t,e){super(t,js("headmaster",3)),this.door=e.clone(),this.pos.copy(e),this.root.visible=!1,this.state="inside",this.t=0,this.wait=ot(25,40),this.anim.ampScale=.8;let i=Qt(.015,.015,.8,q("#6a4a2a"),0,-.35,.05);i.rotation.x=.4,this.char.J.rHand.add(i),this.target=new b}get watching(){return this.state==="patrol"||this.state==="out"}update(t){this.t+=t;let e=0,i=(n,r,o)=>{let a=n-this.pos.x,l=r-this.pos.z,c=Math.hypot(a,l);return c<.2?!0:(this.pos.x+=a/c*o*t,this.pos.z+=l/c*o*t,this.facing=Zn(this.facing,Math.atan2(a,l),6,t),e=o,!1)};switch(this.state){case"inside":this.t>this.wait&&(this.state="out",this.t=0,this.root.visible=!0,this.target.set(this.door.x+ot(-8,8),0,this.door.z+ot(1,2)),this.m.onHeadmaster(!0));break;case"out":i(this.target.x,this.target.z,1.2)&&(this.state="patrol",this.t=0);break;case"patrol":this.facing=Zn(this.facing,Math.atan2(this.m.ball.pos.x-this.pos.x,this.m.ball.pos.z-this.pos.z),3,t),this.t>11&&(this.state="back",this.t=0,this.anim.stop("point"));break;case"back":i(this.door.x,this.door.z,1.3)&&(this.state="inside",this.t=0,this.wait=ot(30,50),this.root.visible=!1,this.m.onHeadmaster(!1));break}this.root.visible&&(this.anim.update(t,e),this.sync())}scold(t){this.anim.play("point"),this.m.say(this,oe.headmasterCatch(t.name),{color:"#ffeaa0",dur:3}),this.m.audio.play("whistle")}},tl=class{constructor(t,e){this.m=t;let i=new ne,n=q("#d98a3a",.95),r=new Q(new Li(.11,.26,4,8),n);r.rotation.z=Math.PI/2,r.position.y=.12,i.add(r);let o=new Q(new Yt(.09,10,8),n);o.position.set(.25,.18,0),i.add(o);for(let l of[-1,1]){let c=new Q(new $i(.03,.06,4),n);c.position.set(.26,.27,l*.045),i.add(c)}let a=new Q(new Li(.02,.25,3,6),n);a.position.set(-.25,.18,0),a.rotation.z=.9,i.add(a),this.tail=a,i.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.position.copy(e.pos),i.rotation.y=e.rot,t.scene.add(i),this.g=i,this.t=Math.random()*5,this.run=0}update(t){this.t+=t,this.tail.rotation.x=Math.sin(this.t*2)*.4;let e=this.m.ball.pos;!this.run&&Math.hypot(e.x-this.g.position.x,e.z-this.g.position.z)<1.4&&this.m.ball.speed()>2&&(this.run=1,this.m.audio.play("meow")),this.run&&(this.g.position.x-=t*6,this.g.position.y=Math.max(0,this.g.position.y-t),this.g.position.x<-40&&(this.g.visible=!1))}},el=class{constructor(t,e){this.m=t;let i=new ne,n=q("#efeadf",1),r=new Q(new Us(.42,1),n);r.scale.set(1.4,.95,1),r.position.y=.62,i.add(r);let o=new Q(new Yt(.15,10,8),q("#3a3030"));o.scale.set(1.3,1,.9),o.position.set(.62,.78,0),i.add(o),this.head=o;for(let[a,l]of[[.3,.18],[.3,-.18],[-.32,.18],[-.32,-.18]]){let c=new Q(new ri(.04,.04,.42,6),q("#3a3030"));c.position.set(a,.21,l),i.add(c)}i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),i.position.copy(e.pos),i.rotation.y=e.rot,t.scene.add(i),this.g=i,this.t=0,this.hop=0}hit(){this.hop=.5,this.m.audio.play("baa"),this.m.say({headPos:(t=new b)=>t.set(this.g.position.x,1.6,this.g.position.z)},"\u0645\u0627\u0627\u0627\u0627\u0621!")}update(t){this.t+=t,this.head.position.y=.78+Math.sin(this.t*1.3)*.05,this.head.rotation.z=Math.sin(this.t*.7)*.2,this.hop>0&&(this.hop-=t,this.g.position.y=Math.sin((.5-this.hop)*Math.PI*2)*.25*(this.hop>0?1:0))}},il=class{constructor(t,e){this.m=t,this.center=e,this.birds=[];for(let i=0;i<9;i++){let n=new ne,r=ge(.3)?"#e8e4dc":ge(.5)?"#7a7a88":"#5a4a3a",o=new Q(new Yt(.09,8,6),q(r));o.scale.set(1.6,.9,.9),n.add(o);let a=[];for(let l of[-1,1]){new be(.28,.12).translate(0,0,l*.14);let h=new Q(new ce(.16,.01,.26),q(r,.9));h.geometry.translate(0,0,l*.13),n.add(h),a.push(h)}this.m.scene.add(n),this.birds.push({g:n,wings:a,a:i/9*Math.PI*2,r:ot(4,8),h:ot(5,9),sp:ot(.6,.9),ph:Math.random()*6})}this.t=0}update(t){this.t+=t;for(let e of this.birds){e.a+=e.sp*t;let i=this.center.x+Math.cos(e.a)*e.r*1.6+6,n=this.center.z+Math.sin(e.a)*e.r;e.g.position.set(i,e.h+Math.sin(this.t+e.ph)*.6,n),e.g.rotation.y=-e.a;let r=Math.sin(this.t*14+e.ph)*.8;e.wings[0].rotation.x=r,e.wings[1].rotation.x=-r}}};var nl=class{constructor(t){this.scene=t,this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[],this.puffTex=Uf(),this.starTex=Nf(),this.shardGeo=new de,this.shardGeo.setAttribute("position",new Xt([0,0,0,.12,.02,0,.03,.14,0],3)),this.shardGeo.computeVertexNormals(),this.shardMat=new re({color:"#cfe8f5",transparent:!0,opacity:.85,side:Ce})}puff(t,{color:e="#c8b08a",n:i=6,size:n=.6,spread:r=.4,up:o=.6,life:a=.9,opacity:l=.7}={}){for(let c=0;c<i;c++){let h=new fi(new si({map:this.puffTex,color:e,transparent:!0,opacity:l,depthWrite:!1}));h.position.set(t.x+ot(-r,r),t.y+ot(0,r*.5),t.z+ot(-r,r));let u=n*ot(.7,1.2);h.scale.setScalar(u),this.scene.add(h),this.puffs.push({s:h,vx:ot(-.6,.6),vy:ot(.2,o),vz:ot(-.6,.6),life:a,t:0,sc:u,op:l})}}shatter(t,e){for(let i=0;i<26;i++){let n=new Q(this.shardGeo,this.shardMat);n.position.set(t.x+ot(-.4,.4),t.y+ot(-.5,.5),t.z),n.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(n),this.shards.push({m:n,v:new b(ot(-2,2),ot(0,2.5),e*ot(1,4)),w:new b(ot(-9,9),ot(-9,9),0),t:0})}}trail(t,e){let i=new fi(new si({map:Kn(),color:e?"#fff0c0":"#ffffff",transparent:!0,opacity:.55,depthWrite:!1,blending:Ci}));i.position.copy(t),i.scale.setScalar(.32),this.scene.add(i),this.puffs.push({s:i,vx:0,vy:0,vz:0,life:.22,t:0,sc:.32,op:.55})}impact(t){this.impactTex||(this.impactTex=ei(256,256,(i,n)=>{i.translate(n/2,n/2),i.beginPath();for(let r=0;r<24;r++){let o=r%2?62:118,a=r/24*Math.PI*2;i.lineTo(Math.cos(a)*o,Math.sin(a)*o)}i.closePath(),i.fillStyle="#ffd23f",i.fill(),i.lineWidth=10,i.strokeStyle="#c8322a",i.stroke(),i.fillStyle="#c8322a",i.font="900 78px Cairo",i.textAlign="center",i.textBaseline="middle",i.fillText("\u0637\u0627\u062E!",0,8)}));let e=new fi(new si({map:this.impactTex,transparent:!0,depthTest:!1}));e.position.copy(t),e.renderOrder=20,this.scene.add(e),this.puffs.push({s:e,vx:0,vy:.4,vz:0,life:.55,t:0,sc:1.1,op:1,pop:!0})}dizzy(t,e=2.5){let i=new ne;for(let n=0;n<3;n++){let r=new fi(new si({map:this.starTex,depthWrite:!1,transparent:!0}));r.scale.setScalar(.28),i.add(r)}this.scene.add(i),this.stars.push({g:i,getPos:t,t:0,dur:e})}fight(t,e=4){let i={pos:t.clone(),t:0,dur:e,spawn:0};return this.clouds.push(i),i}update(t){for(let e=this.puffs.length-1;e>=0;e--){let i=this.puffs[e];i.t+=t;let n=i.t/i.life;if(n>=1){this.scene.remove(i.s),i.s.material.dispose(),this.puffs.splice(e,1);continue}i.s.position.x+=i.vx*t,i.s.position.y+=i.vy*t,i.s.position.z+=i.vz*t,i.pop?(i.s.scale.setScalar(i.sc*(n<.15?n/.15:1+(n-.15)*.3)),i.s.material.opacity=n<.7?1:(1-n)/.3):(i.s.scale.setScalar(i.sc*(1+n*1.4)),i.s.material.opacity=i.op*(1-n))}for(let e=this.shards.length-1;e>=0;e--){let i=this.shards[e];i.t+=t,i.v.y-=9.8*t,i.m.position.addScaledVector(i.v,t),i.m.position.y<.01&&(i.m.position.y=.01,i.v.set(0,0,0),i.w.set(0,0,0)),i.m.rotation.x+=i.w.x*t,i.m.rotation.y+=i.w.y*t,i.t>8&&(this.scene.remove(i.m),this.shards.splice(e,1))}for(let e=this.stars.length-1;e>=0;e--){let i=this.stars[e];if(i.t+=t,i.t>i.dur){this.scene.remove(i.g),this.stars.splice(e,1);continue}let n=i.getPos();i.g.position.copy(n),i.g.children.forEach((r,o)=>{let a=i.t*5+o/3*Math.PI*2;r.position.set(Math.cos(a)*.32,Math.sin(i.t*7+o)*.05,Math.sin(a)*.32)})}for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];if(i.t+=t,i.spawn-=t,i.t<i.dur&&i.spawn<=0){if(i.spawn=.045,this.puff(new b(i.pos.x,.6+Math.random()*1,i.pos.z),{color:"#efe4d0",n:3,size:1.9,spread:1.1,up:.6,life:.8,opacity:.95}),Math.random()<.7){let n=new Q(new Li(.08,.5,3,6),new Gt({color:Math.random()<.5?"#c98b5a":"#a86b43"})),r=Math.random()*Math.PI*2;n.position.set(i.pos.x+Math.cos(r)*1.3,.5+Math.random()*1.2,i.pos.z+Math.sin(r)*1.3),n.rotation.set(Math.random()*3,0,Math.PI/2+r),this.scene.add(n),this.limbs.push({m:n,t:0})}if(Math.random()<.3){let n=new fi(new si({map:this.starTex,transparent:!0,depthWrite:!1}));n.position.set(i.pos.x+ot(-1,1),ot(.8,2),i.pos.z+ot(-1,1)),n.scale.setScalar(.45),this.scene.add(n),this.limbs.push({m:n,t:0})}}i.t>i.dur+1&&this.clouds.splice(e,1)}for(let e=this.limbs.length-1;e>=0;e--){let i=this.limbs[e];i.t+=t,i.t>.22&&(this.scene.remove(i.m),this.limbs.splice(e,1))}}clear(){for(let t of this.puffs)this.scene.remove(t.s);for(let t of this.shards)this.scene.remove(t.m);for(let t of this.stars)this.scene.remove(t.g);for(let t of this.limbs)this.scene.remove(t.m);this.puffs=[],this.shards=[],this.stars=[],this.clouds=[],this.limbs=[]}};var sl=class{constructor(t,e,i){this.cam=t,this.def=e,this.ctx=i,this.focus=new b,this.zoom=1,this.zoomTarget=1,this.shakeT=0,this.shakeA=0,this.baseD=11+e.halfW*1.15,this.orbit=0,this.mode="follow"}shake(t=.3,e=.35){this.shakeA=Math.max(this.shakeA,t),this.shakeT=Math.max(this.shakeT,e)}snap(t){this.focus.copy(t),this.update(.001,t,!0)}update(t,e,i=!1){let n=this.ctx.bounds,r=this.cam.aspect,o=this.baseD*this.zoom,a=o*.62,l=Math.tan(this.cam.fov*Math.PI/360)*Math.hypot(o,a)*r*.9,c=e.x,h=n.minX+l*.7,u=n.maxX-l*.7;c=h<u?Wt(c,h,u):(n.minX+n.maxX)/2;let d=e.y>1.6,f=d?e.z+2.5:Wt(e.z*.45,-this.def.halfW*.4,this.def.halfW*.4)+this.ctx.camZ,g=d?e.y*.8:0,x=i?1:1-Math.exp(-3.2*t);this.focus.x+=(c-this.focus.x)*x,this.focus.z+=(f-this.focus.z)*x,this.focus.y+=(g-this.focus.y)*x,this.zoom=Ca(this.zoom,this.zoomTarget,2.5,t);let p,m,y;if(this.mode==="orbit"){this.orbit+=t*.12;let _=o*1.2;p=this.focus.x+Math.sin(this.orbit)*_*.6,y=this.focus.z+Math.cos(this.orbit)*_*.35+o*.7,m=a*.75}else p=this.focus.x,m=a+this.focus.y*.6,y=this.focus.z+o;if(this.shakeT>0){this.shakeT-=t;let _=this.shakeA*Math.max(0,this.shakeT)*3;p+=ot(-_,_),m+=ot(-_,_)*.5,this.shakeT<=0&&(this.shakeA=0)}this.cam.position.set(p,m,y),this.cam.lookAt(this.focus.x,.6+this.focus.y,this.focus.z-.8)}};var cu=class{constructor(){this.ctx=null,this.master=null,this.volume=.8,this.muted=!1,this.amb=null,this.toktokLoop=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination);let i=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,i,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let r=0;r<i;r++)n[r]=Math.random()*2-1}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=this.muted?0:t)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:this.volume)}env(t,e,i,n,r,o=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(n,e+i),t.gain.exponentialRampToValueAtTime(o,e+i+r)}noise(t,e,{type:i="bandpass",f:n=1e3,q:r=1,gain:o=.5,a=.005,f2:l=null,dest:c=null}={}){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;let d=h.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(n,t),d.Q.value=r,l&&d.frequency.exponentialRampToValueAtTime(l,t+e);let f=h.createGain();return this.env(f,t,a,o,e),u.connect(d),d.connect(f),f.connect(c||this.master),u.start(t,Math.random()),u.stop(t+a+e+.05),f}tone(t,e,{type:i="sine",f:n=440,f2:r=null,gain:o=.3,a=.005,dest:l=null,vib:c=0,vibF:h=6}={}){let u=this.ctx,d=u.createOscillator();if(d.type=i,d.frequency.setValueAtTime(n,t),r&&d.frequency.exponentialRampToValueAtTime(r,t+e),c){let g=u.createOscillator(),x=u.createGain();g.frequency.value=h,x.gain.value=c,g.connect(x),x.connect(d.frequency),g.start(t),g.stop(t+a+e+.05)}let f=u.createGain();return this.env(f,t,a,o,e),d.connect(f),f.connect(l||this.master),d.start(t),d.stop(t+a+e+.05),d}play(t,e=1){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.005;switch(t){case"kick":{let n=Math.min(1.4,e);this.tone(i,.12,{f:140,f2:50,gain:.5*n,type:"sine"}),this.noise(i,.06,{type:"lowpass",f:1800,gain:.35*n});break}case"pass":this.tone(i,.08,{f:160,f2:70,gain:.3}),this.noise(i,.04,{type:"lowpass",f:1500,gain:.18});break;case"bounce":this.tone(i,.07,{f:110,f2:60,gain:Math.min(.35,.05*e)});break;case"wall":this.noise(i,.12,{type:"lowpass",f:600,gain:Math.min(.5,.05*e)}),this.tone(i,.09,{f:90,f2:50,gain:Math.min(.4,.04*e)});break;case"metal":for(let n of[520,1310,2150])this.tone(i,.9,{f:n,gain:.12,type:"sine",a:.002});this.noise(i,.05,{type:"highpass",f:3e3,gain:.2});break;case"brick":this.noise(i,.08,{type:"bandpass",f:900,q:2,gain:.4});break;case"whistle":{let n=e>1;this.tone(i,n?.9:.35,{f:2900,gain:.18,vib:140,vibF:28,type:"sine"}),this.noise(i,n?.9:.35,{type:"bandpass",f:2900,q:8,gain:.08}),e>2&&(this.tone(i+1.1,.35,{f:2900,gain:.18,vib:140,vibF:28}),this.tone(i+1.6,1,{f:2900,gain:.18,vib:140,vibF:28}));break}case"cheer":this.noise(i,2.6,{type:"bandpass",f:1300,q:.6,gain:.35,a:.25}),this.noise(i+.1,2.2,{type:"bandpass",f:700,q:.8,gain:.25,a:.3});for(let n=0;n<6;n++)this.tone(i+ot(0,.8),ot(.4,.9),{type:"sawtooth",f:ot(380,650),f2:ot(500,900),gain:.025,a:.05,vib:20});break;case"ooh":for(let n=0;n<5;n++)this.tone(i+ot(0,.1),.9,{type:"triangle",f:ot(260,420),f2:ot(170,240),gain:.05,a:.1});this.noise(i,.9,{type:"bandpass",f:500,q:1,gain:.12,a:.1});break;case"glass":this.noise(i,.5,{type:"highpass",f:2500,gain:.5,f2:6e3});for(let n=0;n<14;n++)this.tone(i+ot(0,.6),ot(.05,.25),{f:ot(2500,7e3),gain:.06,a:.001});this.noise(i,.15,{type:"lowpass",f:400,gain:.4});break;case"bell":for(let n of[0,.22])this.tone(i+n,.7,{f:2100,gain:.15,a:.001}),this.tone(i+n,.5,{f:3370,gain:.06,a:.001});break;case"horn":this.tone(i,.32,{type:"square",f:440,gain:.07}),this.tone(i,.32,{type:"square",f:554,gain:.05}),this.tone(i+.4,.2,{type:"square",f:440,gain:.07});break;case"ouch":this.tone(i,.35,{type:"sawtooth",f:520,f2:260,gain:.06,vib:12});break;case"thud":this.tone(i,.2,{f:90,f2:40,gain:.45}),this.noise(i,.12,{type:"lowpass",f:500,gain:.3});break;case"slide":this.noise(i,.45,{type:"bandpass",f:1200,q:.7,gain:.25,f2:500,a:.02});break;case"rip":for(let n=0;n<8;n++)this.noise(i+n*.035,.03,{type:"highpass",f:2500,gain:.15});break;case"meow":this.tone(i,.45,{type:"triangle",f:700,f2:450,gain:.08,vib:30,vibF:8});break;case"baa":this.tone(i,.7,{type:"sawtooth",f:330,f2:300,gain:.07,vib:25,vibF:11});break;case"mom":this.tone(i,.35,{type:"triangle",f:620,gain:.07,vib:8}),this.tone(i+.38,.6,{type:"triangle",f:520,f2:480,gain:.07,vib:8});break;case"schoolbell":for(let n=0;n<14;n++)this.tone(i+n*.08,.08,{type:"square",f:1450,gain:.04,a:.001});break;case"fight":for(let n=0;n<18;n++)this.noise(i+n*.15+ot(0,.1),.06,{type:"lowpass",f:700,gain:.35}),n%3===0&&this.tone(i+n*.15,.12,{type:"sawtooth",f:ot(300,600),f2:200,gain:.04});break;case"click":this.tone(i,.04,{f:900,gain:.08,type:"triangle"});break;case"coin":this.tone(i,.08,{f:988,gain:.08,type:"square"}),this.tone(i+.08,.3,{f:1319,gain:.08,type:"square"});break;case"save":this.tone(i,.12,{f:200,f2:90,gain:.4}),this.noise(i,.1,{type:"bandpass",f:1200,gain:.25});break;case"buzz":this.tone(i,.08,{type:"sawtooth",f:100,gain:.03});break;default:break}}startAmbience(t,e){if(this.stopAmbience(),!this.ctx)return;let i=this.ctx,n=i.createGain();n.gain.value=1e-4,n.gain.exponentialRampToValueAtTime(1,i.currentTime+2),n.connect(this.master);let r=[],o=i.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=t?220:380;let l=i.createGain();l.gain.value=t?.05:.09,o.connect(a),a.connect(l),l.connect(n),o.start(),r.push(o),this.amb={g:n,nodes:r,night:t,kind:e,timer:0}}tickAmbience(t){let e=this.amb;if(!e||!this.ctx||this.muted||(e.timer-=t,e.timer>0))return;let i=this.ctx.currentTime;if(e.night){e.timer=ot(.4,1.2);let n=ot(4200,5200);for(let r=0;r<3;r++)this.tone(i+r*.07,.04,{f:n,gain:.018,a:.002,dest:e.g});Math.random()<.04&&this.bark(i,e.g)}else{e.timer=ot(1.5,4);let n=Math.random();if(n<.25)this.tone(i,.25,{type:"square",f:ot(380,480),gain:.012,dest:e.g});else if(n<.6)for(let r=0;r<3;r++)this.tone(i+r*.12,.08,{f:ot(2800,3800),f2:ot(2400,3200),gain:.015,dest:e.g})}}bark(t,e){for(let i=0;i<2;i++)this.tone(t+i*.28,.12,{type:"sawtooth",f:420,f2:250,gain:.03,dest:e}),this.noise(t+i*.28,.1,{type:"bandpass",f:800,gain:.04,dest:e})}stopAmbience(){if(this.amb){try{this.amb.nodes.forEach(t=>t.stop())}catch{}this.amb.g.disconnect(),this.amb=null}}toktokMusic(t){if(this.ctx)if(t&&!this.toktokLoop){let e=this.ctx,i=e.createGain();i.gain.value=.05,i.connect(this.master);let n=[392,440,466,440,392,349,392,440],r=0,o=setInterval(()=>{if(this.muted)return;let a=e.currentTime;this.tone(a,.12,{type:"square",f:n[r%n.length],gain:.5,dest:i}),r%2===0&&this.tone(a,.08,{f:110,f2:60,gain:.8,dest:i}),r++},160);this.toktokLoop={g:i,id:o}}else!t&&this.toktokLoop&&(clearInterval(this.toktokLoop.id),this.toktokLoop.g.disconnect(),this.toktokLoop=null)}},dt=new cu;var Qs=["pass","shoot","tackle","pull","skill","sprint","switch","press"],a_={solo:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyA"],shoot:["KeyS"],tackle:["KeyD"],pull:["KeyF"],skill:["KeyW"],sprint:["ShiftLeft","ShiftRight"],switch:["Space"],press:["KeyE"]},p1:{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],pass:["KeyF"],shoot:["KeyG"],tackle:["KeyH"],pull:["KeyR"],skill:["KeyT"],sprint:["ShiftLeft"],switch:["KeyQ"],press:["KeyC"]},p2:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],pass:["KeyK","Numpad1"],shoot:["KeyL","Numpad2"],tackle:["Semicolon","Numpad3"],pull:["KeyO","Numpad4"],skill:["KeyP","Numpad5"],sprint:["ShiftRight","Numpad0"],switch:["Enter","NumpadEnter"],press:["KeyI","Numpad6"]}},rl=new Set,hu=new Set,ep=!1;function l_(){ep||(ep=!0,window.addEventListener("keydown",s=>{s.target&&(s.target.tagName==="INPUT"||s.target.tagName==="SELECT")||(rl.add(s.code),s.repeat||hu.add(s.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(s.code)&&s.preventDefault())}),window.addEventListener("keyup",s=>rl.delete(s.code)),window.addEventListener("blur",()=>rl.clear()))}var tr=class{constructor({keymap:t=null,gamepad:e=null,touch:i=null,color:n="#ffd23f",label:r=""}={}){l_(),this.keymap=t?a_[t]:null,this.gamepad=e,this.touch=i,this.color=n,this.label=r,this.axis={x:0,z:0},this.b={};for(let o of Qs)this.b[o]={down:!1,pressed:!1,released:!1,t:0}}update(t){let e=0,i=0,n={};for(let a of Qs)n[a]=!1;let r=this.keymap;if(r){let a=l=>l.some(c=>rl.has(c)||hu.has(c));a(r.left)&&(e-=1),a(r.right)&&(e+=1),a(r.up)&&(i-=1),a(r.down)&&(i+=1);for(let l of Qs)a(r[l])&&(n[l]=!0)}if(this.gamepad!==null){let a=navigator.getGamepads?navigator.getGamepads():[],l=a&&a[this.gamepad];if(l){let c=l.axes[0]||0,h=l.axes[1]||0;Math.hypot(c,h)>.2&&(e+=c,i+=h);let u=d=>l.buttons[d]&&l.buttons[d].pressed;u(14)&&(e-=1),u(15)&&(e+=1),u(12)&&(i-=1),u(13)&&(i+=1),n.pass||(n.pass=u(0)),n.tackle||(n.tackle=u(1)),n.shoot||(n.shoot=u(2)),n.skill||(n.skill=u(3)),n.pull||(n.pull=u(4)||u(6)),n.switch||(n.switch=u(5)),n.sprint||(n.sprint=u(7))}}if(this.touch){e+=this.touch.axis.x,i+=this.touch.axis.z;for(let a of Qs)n[a]||(n[a]=!!this.touch.btn[a])}let o=Math.hypot(e,i);o>1&&(e/=o,i/=o),this.axis.x=e,this.axis.z=i;for(let a of Qs){let l=this.b[a];l.pressed=n[a]&&!l.down,l.released=!n[a]&&l.down,l.t=n[a]?l.t+t:0,l.down=n[a]}}clear(){for(let t of Qs){let e=this.b[t];e.pressed=e.released=!1}}};function sp(){hu.clear()}var c_={shoot:'<circle cx="15" cy="12" r="5.2"/><path d="M2.5 9h5M1.5 12h6M2.5 15h5"/>',pass:'<path d="M3 12h15M13 6.5l5.5 5.5-5.5 5.5"/>',sprint:'<path d="M4 6l6 6-6 6M11 6l6 6-6 6"/>',press:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.4"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>',tackle:'<path d="M2.5 17.5h8l7-6.5"/><path d="M6 13.5l4.5 4"/><circle cx="20" cy="9" r="2.5"/>',pull:'<path d="M8 12V6.2a1.4 1.4 0 012.8 0V11M10.8 10.5V4.6a1.4 1.4 0 012.8 0v5.9M13.6 10.5V5.8a1.4 1.4 0 012.8 0V13c0 4.5-2.5 7.5-6.5 7.5-3 0-4.6-1.8-5.6-4L3.6 13a1.4 1.4 0 012.4-1.4L8 14"/>',skill:'<path d="M3 19C6 6 18 6 21 19"/><circle cx="12" cy="18.5" r="2.4"/>',switch:'<path d="M4.5 9.5A8 8 0 0118 6.5M19.5 14.5A8 8 0 016 17.5"/><path d="M18.5 2.5v4.5H14M5.5 21.5V17H10"/>'},ip={shoot:"\u0634\u0648\u0637\u0629",pass:"\u0628\u0627\u0635\u0629",sprint:"\u062C\u0631\u064A",press:"\u0642\u0637\u0639",tackle:"\u0643\u0639\u0628\u0644\u0629",pull:"\u0634\u062F\u0651",skill:"\u0643\u0648\u0628\u0631\u064A",switch:"\u0628\u062F\u0651\u0644"},np={shoot:[86,8,62],pass:[76,104,8],sprint:[62,202,10],press:[66,106,98],tackle:[60,18,164],pull:[54,92,186],skill:[54,160,160],switch:[46,212,96]},h_=["shoot","skill"],u_=["press","tackle","pull"],ol=class s{constructor(t){this.axis={x:0,z:0},this.btn={},this.el=document.createElement("div"),this.el.className="touchpad";let e='<div class="tzone"><div class="stick"><i class="tick t1"></i><i class="tick t2"></i><i class="tick t3"></i><i class="tick t4"></i><div class="knob"></div></div></div><div class="tcluster">';for(let u of Object.keys(np))e+=`<button data-b="${u}" class="tb tb-${u}"><svg viewBox="0 0 24 24">${c_[u]}</svg><span>${ip[u]}</span></button>`;e+="</div>",this.el.innerHTML=e,t.appendChild(this.el),this.cluster=this.el.querySelector(".tcluster");let i=this.el.querySelector(".tzone"),n=this.el.querySelector(".stick"),r=this.el.querySelector(".knob"),o=null,a=0,l=0;i.addEventListener("touchstart",u=>{if(o!==null||this.editing)return;let d=u.changedTouches[0];o=d.identifier;let f=i.getBoundingClientRect(),g=n.getBoundingClientRect();a=d.clientX,l=d.clientY,n.style.left=d.clientX-f.left-g.width/2+"px",n.style.top=d.clientY-f.top-g.height/2+"px",n.style.bottom="auto",n.classList.add("on"),u.preventDefault()},{passive:!1});let c=u=>{for(let d of u.changedTouches){if(d.identifier!==o)continue;let f=d.clientX-a,g=d.clientY-l,x=Math.hypot(f,g),p=this.R;x>p&&(f*=p/x,g*=p/x),r.style.transform=`translate(${f}px,${g}px)`;let m=Math.min(1,x/p);this.axis.x=x>6?f/Math.max(x,.001)*Math.max(m,.35):0,this.axis.z=x>6?g/Math.max(x,.001)*Math.max(m,.35):0}},h=u=>{for(let d of u.changedTouches)d.identifier===o&&(o=null,this.axis.x=this.axis.z=0,r.style.transform="",n.classList.remove("on"),n.style.left="",n.style.top="",n.style.bottom="")};window.addEventListener("touchmove",c,{passive:!0}),window.addEventListener("touchend",h),window.addEventListener("touchcancel",h),this.el.querySelectorAll(".tb").forEach(u=>{let d=u.dataset.b,f=x=>{this.editing||(this.btn[d]=!0,u.classList.add("on"),x.preventDefault())},g=x=>{this.btn[d]=!1,u.classList.remove("on"),x.preventDefault()};u.addEventListener("touchstart",f,{passive:!1}),u.addEventListener("touchend",g,{passive:!1}),u.addEventListener("touchcancel",g,{passive:!1})}),this.ctx="",this.stick=n,this.zone=i,this.editing=!1,this.layout=s.defaults(),this.applyLayout(),this.setupEditing()}static defaults(){let t={buttons:{},stick:{left:26,bottom:22,scale:1},opacity:1};for(let[e,[i,n,r]]of Object.entries(np))t.buttons[e]={size:i,r:n,b:r,scale:1};return t}setLayout(t){let e=s.defaults();if(t&&typeof t=="object"){for(let i of Object.keys(e.buttons))Object.assign(e.buttons[i],t.buttons?.[i]||{});Object.assign(e.stick,t.stick||{}),typeof t.opacity=="number"&&(e.opacity=t.opacity)}this.layout=e,this.applyLayout()}applyLayout(){let t=this.layout;this.el.querySelectorAll(".tb").forEach(n=>{let r=t.buttons[n.dataset.b],o=Math.round(r.size*r.scale);n.style.width=n.style.height=o+"px",n.style.right=Math.round(r.r+(r.size-o)/2)+"px",n.style.bottom=Math.round(r.b+(r.size-o)/2)+"px"});let e=this.stick,i=Math.round(132*t.stick.scale);e.style.width=e.style.height=i+"px",e.style.setProperty("--rest-left",t.stick.left+"px"),e.style.setProperty("--rest-bottom",t.stick.bottom+"px"),this.el.style.setProperty("--tp-opacity",t.opacity),this.R=52*t.stick.scale}setupEditing(){let t=null,e=r=>{if(!this.editing)return;let o=r.target.closest(".tb, .stick");if(!o)return;r.preventDefault();let a=o.classList.contains("stick")?"stick":o.dataset.b,l=o.getBoundingClientRect();t={key:a,el:o,dx:r.clientX-(l.left+l.width/2),dy:r.clientY-(l.top+l.height/2),id:r.pointerId},this.select(a)},i=r=>{if(!t||r.pointerId!==t.id)return;let o=r.clientX-t.dx,a=r.clientY-t.dy,l=window.innerWidth,c=window.innerHeight;if(t.key==="stick"){let h=this.layout.stick,u=132*h.scale,d=this.zone.getBoundingClientRect();h.left=Math.round(Math.min(Math.max(0,o-d.left-u/2),l-u)),h.bottom=Math.round(Math.min(Math.max(0,d.bottom-a-u/2),c-u))}else{let h=this.layout.buttons[t.key],u=this.cluster.getBoundingClientRect(),d=u.width/300||1;h.r=Math.round(Math.min(Math.max(0,(u.right-o)/d-h.size/2),l/d-h.size)),h.b=Math.round(Math.min(Math.max(0,(u.bottom-a)/d-h.size/2),c/d-h.size))}this.applyLayout()},n=r=>{t&&r.pointerId===t.id&&(t=null,this.onChange&&this.onChange())};this.el.addEventListener("pointerdown",e),window.addEventListener("pointermove",i),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n)}select(t){this.selected=t,this.el.querySelectorAll(".tb, .stick").forEach(e=>e.classList.toggle("sel",(e.dataset.b||"stick")===t)),this.onSelect&&this.onSelect(t)}setEditing(t){this.editing=t,this.el.classList.toggle("editing",t);for(let e in this.btn)this.btn[e]=!1;this.axis.x=this.axis.z=0,t?(this.setContext(""),this.select(this.selected||"shoot")):this.el.querySelectorAll(".sel").forEach(e=>e.classList.remove("sel"))}label(t){return t==="stick"?"\u0627\u0644\u0627\u0633\u062A\u064A\u0643":ip[t]}setContext(t){t!==this.ctx&&(this.ctx=t,this.cluster.querySelectorAll(".tb").forEach(e=>{let i=e.dataset.b;e.classList.toggle("dim",t==="attack"&&u_.includes(i)||t==="defend"&&h_.includes(i)),e.classList.toggle("hint",t==="defend"&&i==="press")}))}show(t){this.el.style.display=t?"":"none"}},uu=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;var Ue=new b,_e=new b,rp={3:[[.06,0],[.62,-.38],[.62,.38]],4:[[.06,0],[.42,0],[.78,-.45],[.78,.45]],5:[[.06,0],[.38,-.38],[.38,.38],[.78,-.28],[.78,.28]]},Yr=class{constructor(t,e){this.game=t,this.ui=t.ui,this.audio=dt,this.opts=e,this.scene=new Ds,this.camera=t.camera,this.def=Jn[e.mapId],this.night=e.night,this.teamKeys=[e.home,e.away],this.difficulty=e.difficulty||"normal",this.humanTeams=e.controllers.map(o=>!!o),this.controllers=e.controllers,this.time=0,this.clock=e.rule.type==="time"?e.rule.seconds:0,this.score=[0,0],this.scandal=[0,0],this.stats={fouls:[0,0],nutmegs:[0,0],shots:[0,0],goals:[],windows:0,fights:0,momCalls:0},this.owner=null,this.pendingPass=null,this.reserved=null,this.state="intro",this.stateT=0,this.queue=[],this.headmasterWatching=!1,this.roles=[{chaser:null,slots:new Map,nSlots:1},{chaser:null,slots:new Map,nSlots:1}],this.charge=0,this.lastSwitch=[0,0],this.stretch=new Map,this.timers=[],this.ctx=jf(e.mapId),this.scene.add(this.ctx.root),this.env=new Xa(this.scene,this.ctx,{night:this.night,quality:t.quality,renderer:t.renderer}),this.ball=new qa(this.scene),this.ball.setNight(this.night),this.ball.friction=e.mapId==="yard"?1.15:e.mapId==="school"?.75:.85,this.ball.onBounce=o=>{o>1.5&&dt.play("bounce",o),o>2&&e.mapId==="yard"&&this.fx.puff(this.ball.pos,{n:2,size:.4,life:.6,up:.3,opacity:.5})},this.ball.onHit=(o,a,l)=>this.onBallHit(o,a,l),this.fx=new nl(this.scene),this.rig=new sl(this.camera,this.def,this.ctx);let i=[...$f].sort(()=>Math.random()-.5),n=0;this.teams=[[],[]];let r=Math.floor(Math.random()*1e3);for(let o=0;o<2;o++){let a=hn[this.teamKeys[o]],l=e.mods?.[o]||{};for(let c=0;c<this.def.teamSize;c++){let h=i[n++%i.length];o===0&&c===1&&this.humanTeams[0]&&(h="\u062D\u0645\u0627\u062F\u0629"),h==="\u062D\u0645\u0627\u062F\u0629"&&!(o===0&&c===1)&&(h=i[n++%i.length]);let u=tp(a,c,r+o*50,{kits:!!l.kits,shoes:!!l.shoes,isGK:c===0}),d=new Za(this,o,c,u,{name:h,number:[1,7,10,9,4,11,8][c%7],isGK:c===0});d.mods.speed=(l.speed||1)*(this.humanTeams[o]?1:Gr[this.difficulty].speed),d.mods.shot=l.shot||1,d.mods.control=l.control||1,d.mods.stamina=l.stamina||1,this.teams[o].push(d)}}this.allPlayers=[...this.teams[0],...this.teams[1]],this.npcs=[],this.walkers=[];for(let o of this.ctx.spectators)this.npcs.push(new qr(this,o));this.mom=this.ctx.balconies.length?new ja(this,this.ctx.balconies[0]):null,this.mom&&this.npcs.push(this.mom),this.headmaster=this.ctx.extras.headmaster?new Qa(this,this.ctx.doors[0]):null,this.headmaster&&this.npcs.push(this.headmaster),this.animals=this.ctx.animals.map(o=>o.kind==="cat"?new tl(this,o):new el(this,o)),this.ctx.extras.pigeons&&this.npcs.push(new il(this,this.ctx.extras.pigeons)),this.walkerT=ot(4,9),this.toktok=null,this.toktokT=this.ctx.extras.toktok?ot(35,60):1/0,this.bike=null,this.bikeT=this.ctx.extras.bike?ot(15,30):1/0,this.dynColliders=[];for(let o=0;o<2;o++)this.controllers[o]&&this.setControl(o,this.teams[o][1]);this.placeKickoff(ge(.5)?0:1),this.rig.snap(new b(0,0,0)),this.rig.mode="orbit",this.rig.zoomTarget=1.15,this.rig.zoom=1.3,this.ui.matchStart(this),e.demo||(dt.startAmbience(this.night,e.mapId),e.mapId==="school"&&this.after(.6,()=>dt.play("schoolbell")))}teamColor(t){return hn[this.teamKeys[t]].ui}teamDef(t){return hn[this.teamKeys[t]]}aiLevel(t){return Gr[this.humanTeams[t]?"normal":this.difficulty]}aiSkill(t){return this.aiLevel(t.team).skill}goalFor(t){return this.ctx.goals.find(e=>e.side===(t===0?1:-1))}ownGoal(t){return this.ctx.goals.find(e=>e.side===(t===0?-1:1))}goalkeeper(t){return this.teams[t].find(e=>e.isGK&&e.active)}nearestTo(t,e,i){let n=null,r=1/0;for(let o of this.teams[e]){if(!o.active||i&&!i(o))continue;let a=Ie(o.pos.x,o.pos.z,t.x,t.z);a<r&&(r=a,n=o)}return n}pressureDist(t){let e=99;for(let i of this.teams[1-t.team]){if(!i.active||i.down)continue;let n=Ie(i.pos.x,i.pos.z,t.pos.x,t.pos.z);n<e&&(e=n)}return e}pressureOn(t){return Wt((2.5-this.pressureDist(t))/2.5,0,1)}lineBlocked(t,e,i,n,r,o=.8){let a=i-t,l=n-e,c=a*a+l*l;if(c<.01)return!1;for(let h of this.teams[1-r]){if(!h.active||h.down)continue;let u=((h.pos.x-t)*a+(h.pos.z-e)*l)/c;if(u<.08||u>.95)continue;let d=t+a*u,f=e+l*u;if(Ie(d,f,h.pos.x,h.pos.z)<o)return!0}return!1}bestPassTarget(t,e,i=!1,n=null){let r=null,o=this.goalFor(t.team).x,a=e&&(e.x||e.z);if(a&&n!==null&&n<=0)return null;for(let l of this.teams[t.team]){if(l===t||!l.active||l.isGK||l.state==="fallen")continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z,u=Math.hypot(c,h);if(u<1.5||u>30)continue;let d=0;if(a){let f=Math.atan2(e.x,e.z),g=c+l.vel.x*.5,x=h+l.vel.z*.5,p=(_,M)=>{let C=Math.atan2(_,M)-f;for(;C>Math.PI;)C-=2*Math.PI;for(;C<-Math.PI;)C+=2*Math.PI;return Math.abs(C)},m=Math.min(p(c,h),p(g,x));if(m>(n??.6))continue;d=-m*4-u/40+Math.min(4,this.pressureDist(l))/4*.3,this.lineBlocked(t.pos.x,t.pos.z,l.pos.x,l.pos.z,t.team)&&(d-=.3)}else{let f=(Math.abs(o-t.pos.x)-Math.abs(o-l.pos.x))/10;d+=f*(i?.3:1);let g=Math.min(4,this.pressureDist(l))/4;d+=g*.8-u/28,this.lineBlocked(t.pos.x,t.pos.z,l.pos.x,l.pos.z,t.team)&&(d-=.7)}(!r||d>r.score)&&(r={player:l,score:d})}return r}passSpeedFor(t,e){let i=this.ball.friction,n=1/60,r=2,o=30;for(let a=0;a<18;a++){let l=(r+o)/2,c=l,h=0;for(;h<t&&c>.05;)h+=c*n,c=Math.max(0,c-(i*n*1.4+c*i*n*.35));h>=t&&c>=e?o=l:r=l}return Math.min(22,o)}passTime(t,e){let i=this.ball.friction,n=1/30,r=e,o=0,a=0;for(;o<t&&r>.05&&a<4;)o+=r*n,a+=n,r=Math.max(0,r-(i*n*1.4+r*i*n*.35));return a}receiveSteer(t){let e=this.ball,i=e.groundSpeed(),n=e.pos.x,r=e.pos.z;if(i>1.5){let c=e.vel.x/i,h=e.vel.z/i,u=Math.max(0,(t.pos.x-e.pos.x)*c+(t.pos.z-e.pos.z)*h);n=e.pos.x+c*u,r=e.pos.z+h*u}let o=n-t.pos.x,a=r-t.pos.z,l=Math.hypot(o,a);l>.12?t.want.set(o/l*Math.min(1,l/1.2),a/l*Math.min(1,l/1.2)):t.want.set(0,0),t.wantSprint=l>3,t.lookAt=e.pos}nutmegVictim(t){let e=Math.sin(t.facing),i=Math.cos(t.facing),n=null,r=2.4;for(let o of this.teams[1-t.team]){if(!o.active||o.down||o.state==="gkhold")continue;let a=o.pos.x-t.pos.x,l=o.pos.z-t.pos.z,c=Math.hypot(a,l);c>r||c<.3||(a*e+l*i)/c<.55||(r=c,n=o)}return n}kickBall(t,e,i,n,r={}){let o=this.ball;this.owner===t&&(this.owner=null),o.frozen=!1,o.pos.y=Math.max(o.pos.y,o.r),o.kick(e,i,n,t),t.cool.touch=.28,t.cool.kick=.4,this.pendingPass=null;let a=Math.hypot(e,i,n);if(r.kind==="shot"?(dt.play("kick",.6+(r.power||.5)*.8),this.stats.shots[t.team]++,this.lastShot={team:t.team,t:this.time,by:t},r.power>.8&&this.rig.shake(.12,.2),this.fx.puff(Ue.set(o.pos.x,.05,o.pos.z),{n:3,size:.4,life:.6})):dt.play("pass",a/10),r.pass&&(this.pendingPass={target:r.pass,t:0,from:t},t.ctrl&&r.pass&&!r.pass.isGK&&this.setControl(t.team,r.pass)),r.kind==="nutmeg"){let l=r.victim;this.reserved={p:t,t:1.7},l.pending=null,l.setState("nutmegged",1),l.anim.play("dazed"),this.after(.9,()=>l.anim.stop("dazed")),t.stats.nutmegs++,this.stats.nutmegs[t.team]++,this.say(t,ie(oe.nutmeg),{color:"#ffd23f",big:!0}),this.say(l,ie(oe.nutmegged),{delay:.4}),dt.play("ooh"),this.ui.banner("\u0643\u0648\u0628\u0631\u064A!",`${t.name} \u0639\u062F\u0651\u0627\u0647\u0627 \u0645\u0646 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 ${l.name}`,"nut"),this.slowmo(.4,.5),this.game.onEvent?.("nutmeg",t.team)}}loseBall(t,e=2){if(this.owner!==t)return;this.owner=null;let i=this.ball;i.vel.set(t.vel.x*.6+ot(-e,e),.5,t.vel.z*.6+ot(-e,e)),i.lastTouch=t,t.cool.touch=.5,t.state==="gkhold"&&t.setState("play")}giveBall(t){this.owner&&this.owner!==t&&(this.owner.cool.touch=.4),this.owner=t,this.ball.frozen=!1,this.ball.lastTouch=t,this.ball.lastKickTeam=t.team,this.pendingPass=null,this.reserved=null,t.cool.steal=.45,t.ai.t=0,this.humanTeams[t.team]&&!t.isGK&&!t.ctrl&&this.teams[t.team].find(i=>i.ctrl)&&this.setControl(t.team,t)}setControl(t,e){let i=this.controllers[t];if(!(!i||!e)){for(let n of this.teams[t])n.ctrl&&(n.ctrl=null,n.setMarker(null),n.ring.material.opacity=.5);e.ctrl=i,e.setMarker(i.color),this.lastSwitch[t]=this.time,this.ui.controlChanged(t,e)}}passCone(){let t=this.game.settings.passAssist||"normal";return t==="high"?.62:t==="manual"?0:.36}humanControl(t,e,i){let n=this.ball;if(t.want.set(e.axis.x,e.axis.z),t.wantSprint=e.b.sprint.down,t.lookAt=n.pos,t.pullTarget){e.b.pull.down||t.releasePull(!1);return}if(t.active){if(t.hasBall||(this.passHeld=!1),this.pendingPass&&this.pendingPass.target===t&&!this.owner&&this.pendingPass.t<1.8&&t.canAct){this.receiveSteer(t);return}if(t.hasBall){if(e.b.pass.pressed&&(this.passHeld=!0),this.passHeld&&e.b.pass.down&&e.b.pass.t>.15&&this.ui.power(Math.min(1,(e.b.pass.t-.15)/.85),"\u0628\u0627\u0635\u0629"),this.passHeld&&e.b.pass.released){this.passHeld=!1;let r=this.lastPassT||0,o=r<.15?.15:Math.min(1,.15+(r-.15)/.85*.85);this.ui.power(0);let l=Math.hypot(e.axis.x,e.axis.z)>.25?{x:e.axis.x,z:e.axis.z}:{x:Math.sin(t.facing),z:Math.cos(t.facing)},c=this.bestPassTarget(t,l,!1,this.passCone());t.pass(c?c.player:null,l.x,l.z,o)}if(e.b.pass.down&&(this.lastPassT=e.b.pass.t),e.b.shoot.down&&(this.charge=Math.min(1,e.b.shoot.t/.85),this.ui.power(this.charge)),e.b.shoot.released){let r=Math.max(.25,this.charge);t.shoot(r,e.axis.z*(t.team===0,1),r*.35),this.charge=0,this.ui.power(0)}e.b.skill.pressed&&t.nutmeg()}else{this.charge&&(this.charge=0,this.ui.power(0));let r=this.owner&&this.owner.team!==t.team,o=e.b.press.down||e.b.pass.down&&(r||!this.owner);if(t.pressing=o,o&&Math.hypot(e.axis.x,e.axis.z)<.25&&t.canAct){let a,l;if(r){let d=this.owner,g=this.ownGoal(t.team).x-d.pos.x,x=-d.pos.z,p=Math.hypot(g,x)||1,y=Ie(d.pos.x,d.pos.z,t.pos.x,t.pos.z)>2.5?.9:.25;a=d.pos.x+d.vel.x*.25+g/p*y,l=d.pos.z+d.vel.z*.25+x/p*y}else{let d=Wt(Ie(n.pos.x,n.pos.z,t.pos.x,t.pos.z)/7,0,1);a=n.pos.x+n.vel.x*d*.7,l=n.pos.z+n.vel.z*d*.7}let c=a-t.pos.x,h=l-t.pos.z,u=Math.hypot(c,h);u>.15?t.want.set(c/u*Math.min(1,u/.6),h/u*Math.min(1,u/.6)):t.want.set(0,0)}if(e.b.tackle.pressed&&(e.axis.x||e.axis.z?t.facing=Math.atan2(e.axis.x,e.axis.z):t.faceTo(r&&Ie(this.owner.pos.x,this.owner.pos.z,t.pos.x,t.pos.z)<4?this.owner.pos:n.pos),t.slide()),e.b.pull.pressed){let a=null,l=1.35;for(let c of this.teams[1-t.team]){if(!c.active||c.down)continue;let h=Ie(c.pos.x,c.pos.z,t.pos.x,t.pos.z);h<l&&(l=h,a=c)}a&&t.pull(a)}if((e.b.pass.pressed||e.b.press.pressed)&&this.owner&&this.owner.team===t.team&&!this.owner.ctrl&&t.cool.call<=0){t.cool.call=1.2,this.say(t,ie(oe.callPass));let a=this.owner;this.after(.18,()=>{this.owner===a&&a.canAct&&a.pass(t)})}}e.b.switch.pressed&&this.switchNext(t.team)}}switchNext(t){let e=this.teams[t].find(r=>r.ctrl),i=this.ball.pos,n=this.teams[t].filter(r=>r.active&&!r.isGK&&r!==e&&r.state!=="fallen");n.length&&(n.sort((r,o)=>Ie(r.pos.x,r.pos.z,i.x,i.z)-Ie(o.pos.x,o.pos.z,i.x,i.z)),this.setControl(t,n[0]))}autoSwitch(t){let e=this.teams[t].find(a=>a.ctrl);if(!e){this.switchNext(t);return}if(!e.active){this.switchNext(t);return}if(e.hasBall||e.pullTarget||e.state==="slide"||e.pending||this.time-this.lastSwitch[t]<.9||this.owner&&this.owner.team===t)return;let i=this.ball.pos,n=Ie(e.pos.x,e.pos.z,i.x,i.z),r=null,o=n-3;for(let a of this.teams[t]){if(a===e||!a.active||a.isGK||a.down)continue;let l=Ie(a.pos.x,a.pos.z,i.x,i.z);l<o&&(o=l,r=a)}r&&this.setControl(t,r)}computeRoles(){let t=this.ball.pos;for(let e=0;e<2;e++){let i=this.roles[e];i.slots.clear();let n=this.teams[e].find(c=>c.ctrl),r=this.teams[e].filter(c=>c.active&&!c.isGK&&!c.ctrl&&c.state!=="fallen"),o=null,a=1/0;for(let c of r){let h=Ie(c.pos.x,c.pos.z,t.x,t.z)+(c.state==="play"?0:3);h<a&&(a=h,o=c)}if(n&&o){let c=Ie(n.pos.x,n.pos.z,t.x,t.z),h=this.owner&&this.owner.team!==e;a<c-1.5||h&&a<7||(o=null)}this.owner&&this.owner.team===e&&(o=null),i.chaser=o;let l=r.filter(c=>c!==o).sort((c,h)=>c.pos.z-h.pos.z);l.forEach((c,h)=>i.slots.set(c,h)),i.nSlots=Math.max(1,l.length)}}placeKickoff(t){let e=this.def;this.owner=null,this.pendingPass=null,this.reserved=null,this.kickTeam=t;for(let i=0;i<2;i++){let n=rp[e.teamSize]||rp[4],r=this.ownGoal(i),o=i===0?1:-1,a=this.teams[i];a.forEach((l,c)=>{if(l.resetForKickoff(),!l.active)return;let[h,u]=n[c]||[.5,0],d=r.x+o*h*(Math.abs(r.x)-.6),f=u*e.halfW;i===t&&c===a.length-1&&(d=-o*.5,f=0),i!==t&&(d=o>0?Math.min(d,-1.8):Math.max(d,1.8)),l.place(d,f,i===0?Math.PI/2:-Math.PI/2),l.anim.update(.016,0)})}this.ball.place(0,0),this.ball.frozen=!1}startPlay(){let t=this.teams[this.kickTeam][this.teams[this.kickTeam].length-1];this.setState("play"),t&&t.active&&this.giveBall(t),dt.play("whistle"),this.humanTeams[this.kickTeam]&&t&&!t.ctrl&&this.setControl(this.kickTeam,t)}setState(t){this.state=t,this.stateT=0}after(t,e){this.timers.push({t,fn:e})}runTimers(t){if(!this.timers.length)return;let e=[];for(let i of this.timers)i.t-=t,i.t<=0&&e.push(i);if(e.length){this.timers=this.timers.filter(i=>i.t>0);for(let i of e)i.fn()}}slowmo(t,e){this.slow={scale:t,t:e}}update(t){t=Math.min(t,1/20),this.slow&&(this.slow.t-=t,t*=this.slow.scale,this.slow.t<=0&&(this.slow=null)),this.time+=t,this.stateT+=t;for(let r of this.controllers)r&&r.update(t);let e=this.controllers[0];switch(e&&e.touch&&e.touch.setContext(this.owner&&this.owner.team===0?"attack":"defend"),sp(),this.env.update(t),dt.tickAmbience(t),this.runTimers(t),this.state){case"intro":if(this.opts.demo){this.stateT>1&&this.setState("kickoff");break}(this.stateT>2.6||this.anyPressed())&&(this.rig.mode="follow",this.rig.zoomTarget=1,this.setState("kickoff"),this.ui.banner(ie(oe.kickoff),`${this.teamDef(0).name} \xD7 ${this.teamDef(1).name}`,"start"),!this.opts.versus&&!this.game.touch&&this.after(3,()=>this.ui.toast("\u062F\u0648\u0633 S \u0643\u062A\u064A\u0631 = \u0634\u0648\u0637\u0629 \u0623\u0642\u0648\u0649 \u2022 D \u0643\u0639\u0628\u0644\u0629 \u2022 F \u0634\u062F\u0651 \u0645\u0646 \u0627\u0644\u0647\u062F\u0648\u0645 \u2022 W \u0643\u0648\u0628\u0631\u064A")));break;case"kickoff":this.stateT>1.3&&this.startPlay();break;case"play":this.opts.rule.type==="time"?(this.clock-=t,this.clock<=0&&(this.clock=0,this.endMatch())):this.clock+=t;break;case"goal":if(this.stateT>4.2){for(let r of this.allPlayers)r.stopCelebrate();this.opts.rule.type==="goals"&&Math.max(...this.score)>=this.opts.rule.n?this.endMatch():this.opts.rule.type==="time"&&this.clock<=0?this.endMatch():(this.placeKickoff(this.concededTeam),this.setState("kickoff"))}break;case"freekick":this.updateFreekick(t);break;case"event":this.updateEvent(t);break;case"end":this.stateT>3.2&&!this.resultShown&&(this.resultShown=!0,this.ui.showResult(this));break}let i=this.state==="play";(i||this.state==="freekick"||this.state==="event")&&this.computeRoles();for(let r of this.allPlayers)i?r.ctrl?this.humanControl(r,r.ctrl,t):this.freezeAI?r.want.set(0,0):ou(r,this,t):this.state==="freekick"||this.state==="event"?r.ctrl&&r.state==="play"?(r.want.set(r.ctrl.axis.x,r.ctrl.axis.z),r.wantSprint=r.ctrl.b.sprint.down):r.ctrl||this.idleAI(r):this.state==="goal"||this.state==="end"?this.celebrateAI(r):(r.want.set(0,0),r.lookAt=this.ball.pos),r.update(t);if(i)for(let r=0;r<2;r++)this.controllers[r]&&this.autoSwitch(r);this.resolveCollisions(),i&&(this.updatePulls(t),this.updateSlides()),this.updateBall(t,i),!this.owner&&this.ball.speed()>13&&!this.ball.frozen&&this.fx.trail(this.ball.pos,this.night),i&&(this.checkGoal(),this.checkSpecialBall()),this.updateNPCs(t),this.fx.update(t);for(let r of this.animals)r.update(t);this.reserved&&(this.reserved.t-=t,this.reserved.t<=0&&(this.reserved=null)),this.pendingPass&&(this.pendingPass.t+=t,this.pendingPass.t>2.5&&(this.pendingPass=null));let n=this.ball.pos;this.state==="goal"&&this.scorer&&this.scorer.active&&(n=this.scorer.pos),this.focusOverride&&(n=this.focusOverride),this.rig.update(t,n),this.updateStretch(),this.ui.hud(this,t)}anyPressed(){return this.controllers.some(t=>t&&Object.values(t.b).some(e=>e.pressed))}idleAI(t){if(!t.active||t.state!=="play")return;t.lookAt=this.ball.pos;let e=this.ball.pos,i=Ie(t.pos.x,t.pos.z,e.x,e.z);if(this.freekick&&t.team!==this.freekick.team&&i<3.2){let n=(3.2-i)/3.2;t.want.set((t.pos.x-e.x)/Math.max(.1,i)*n*1.5,(t.pos.z-e.z)/Math.max(.1,i)*n*1.5)}else if(this.fleeFrom){let n=t.pos.x-this.fleeFrom.x,r=t.pos.z-this.fleeFrom.z,o=Math.hypot(n,r)||1;t.want.set(n/o,r/o),t.wantSprint=!0}else ou(t,this,.016),t.hasBall&&t.want.set(0,0)}celebrateAI(t){if(t.want.set(0,0),t.wantSprint=!1,t===this.scorer&&t.state==="celebrate"){let i=this.def.halfW*.8-t.pos.z;Math.abs(i)>.6&&t.want.set(-t.dir*.25,Math.sign(i)*.9),t.wantSprint=!0}else if(this.scorer&&t.team===this.scorer.team&&t.state==="celebrate"&&!t.isGK){let e=this.scorer.pos.x-t.pos.x,i=this.scorer.pos.z-t.pos.z,n=Math.hypot(e,i);n>1.6&&t.want.set(e/n,i/n)}t.lookAt=this.scorer?this.scorer.pos:this.ball.pos}resolveCollisions(){let t=this.allPlayers;for(let i=0;i<t.length;i++){let n=t[i];if(!(!n.active||n.state==="fallen")){for(let r=i+1;r<t.length;r++){let o=t[r];if(!o.active||o.state==="fallen"||n.pullTarget===o||o.pullTarget===n||n.state==="slide"||o.state==="slide")continue;let a=o.pos.x-n.pos.x,l=o.pos.z-n.pos.z,c=Math.hypot(a,l),h=n.radius+o.radius;if(c<h&&c>1e-4){let u=(h-c)/2,d=a/c,f=l/c;n.pos.x-=d*u,n.pos.z-=f*u,o.pos.x+=d*u,o.pos.z+=f*u}}for(let r of this.walkers){let o=n.pos.x-r.pos.x,a=n.pos.z-r.pos.z,l=Math.hypot(o,a),c=n.radius+r.radius;l<c&&l>1e-4&&(n.pos.x+=o/l*(c-l),n.pos.z+=a/l*(c-l))}}}let e=this.ctx.colliders.filter(i=>i.solid||i.tag==="wall"||i.tag==="pole");this.toktok&&e.push(this.toktok.collider);for(let i of t){if(!i.active&&i.state!=="leaving"&&i.state!=="returning"&&i.state!=="fetch")continue;let n=i.radius;for(let r of e){if(r.min.y>1.2)continue;let o=Wt(i.pos.x,r.min.x,r.max.x),a=Wt(i.pos.z,r.min.z,r.max.z),l=i.pos.x-o,c=i.pos.z-a,h=Math.hypot(l,c);if(h<n)if(h>1e-4)i.pos.x=o+l/h*n,i.pos.z=a+c/h*n;else{let u=[[r.min.x-n-i.pos.x,0],[r.max.x+n-i.pos.x,0],[0,r.min.z-n-i.pos.z],[0,r.max.z+n-i.pos.z]];u.sort((d,f)=>Math.hypot(...d)-Math.hypot(...f)),i.pos.x+=u[0][0],i.pos.z+=u[0][1]}}if(i.active){let r=this.ctx.bounds;i.pos.x=Wt(i.pos.x,r.minX,r.maxX),i.pos.z=Wt(i.pos.z,r.minZ,r.maxZ)}i.sync()}}updateBall(t,e){let i=this.ball,n=this.owner;if(n&&(!n.active||n.state==="fallen"||n.state==="nutmegged")&&this.loseBall(n,2),this.owner){let l=this.owner;if(l.state==="gkhold"||l.isGK&&l.anim.isPlaying("throw"))l.char.J.rHand.getWorldPosition(Ue),l.char.J.lHand.getWorldPosition(_e),Ue.add(_e).multiplyScalar(.5),l.fwd(_e),i.pos.set(Ue.x+_e.x*.12,Math.max(i.r,Ue.y),Ue.z+_e.z*.12),i.vel.set(0,0,0);else{l.fwd(_e);let c=Math.hypot(l.vel.x,l.vel.z),h=(l.anim.phase%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2),d=.36+Wt((c-1.2)*.13,0,.8)*(1-h)*(1-h*.3),f=l.pos.x+_e.x*d,g=l.pos.z+_e.z*d,x=1-Math.exp(-(c>1.5?11:22)*t);i.pos.x+=(f-i.pos.x)*x,i.pos.z+=(g-i.pos.z)*x,i.pos.y=i.r,i.vel.set(l.vel.x+_e.x*.5,0,l.vel.z+_e.z*.5)}i.update(t,null,!0),e&&this.updateSteals(t);return}let r=this.dynColliders.length||this.toktok?[...this.ctx.colliders,...this.toktok?[this.toktok.collider]:[]]:this.ctx.colliders;if(i.update(t,r,!1),!e&&this.state!=="freekick"||(this.ballVsPeople(),!e))return;let o=null,a=1/0;for(let l of this.allPlayers){if(!l.active||l.cool.touch>0||l.state!=="play"&&l.state!=="dive"&&!(l.state==="kick"&&!l.pending)||this.reserved&&this.reserved.p!==l)continue;l.fwd(_e);let c=l.pos.x+_e.x*.28,h=l.pos.z+_e.z*.28,u=Ie(c,h,i.pos.x,i.pos.z),d=l.isGK&&this.inOwnBox(l)?l.state==="dive"?1.25:.95:0,f=Math.max(we.controlDist,d),g=d?2.3:.75;u<f&&i.pos.y<g&&u<a&&(a=u,o=l)}o&&this.touchBall(o)}inOwnBox(t){let e=this.ownGoal(t.team);return Math.abs(t.pos.x-e.x)<4.5&&Math.abs(t.pos.z)<e.hw+3}touchBall(t){let e=this.ball,i=Math.hypot(e.vel.x-t.vel.x,e.vel.z-t.vel.z);if(t.isGK&&this.inOwnBox(t)){let o=t.ctrl?.8:this.aiSkill(t),a=e.speed()>9&&e.lastKickTeam!==t.team;if(!a||ge(Wt(o*1.15-(e.speed()-12)*.04,.25,.95))){if(this.owner=t,this.pendingPass=null,e.lastTouch=t,e.lastKickTeam=t.team,t.gkCatch(),a){dt.play("save"),this.say(t,ie(oe.save),{color:"#ffd23f"});for(let l of this.npcs)l.cheer&&l.cheer(1.5)}t.ai.holdT=0;return}e.vel.x*=-.45,e.vel.z=e.vel.z*.5+ot(-4,4),e.vel.y=Math.abs(e.vel.y)*.5+2,t.cool.touch=.5,e.lastTouch=t,dt.play("save"),this.say(t,"\u0635\u062F\u0651\u0647\u0627!",{color:"#ffd23f"});return}let n=this.pendingPass&&this.pendingPass.target===t,r=Wt(1.25-(i-9)*.06*(1/t.mods.control)+(n?.35:0),.35,1);if(i>9&&!ge(r)){e.vel.x=e.vel.x*-.35+t.vel.x*.5+ot(-1.5,1.5),e.vel.z=e.vel.z*-.35+t.vel.z*.5+ot(-1.5,1.5),e.vel.y=Math.abs(e.vel.y)*.3+.8,t.cool.touch=.35,e.lastTouch=t,dt.play("bounce",6);return}this.giveBall(t)}updateSteals(t){let e=this.owner;if(!(!e||e.state==="gkhold"||e.cool.steal>0))for(let i of this.teams[1-e.team]){if(!i.active||i.state!=="play"||i.cool.touch>0||i.pulledBy)continue;i.fwd(_e);let n=i.pos.x+_e.x*.3,r=i.pos.z+_e.z*.3;if(Ie(n,r,this.ball.pos.x,this.ball.pos.z)>.68)continue;let a=i.ctrl?i.pressing?1.7:1:this.aiLevel(i.team).steal,l=we.stealPerSec*a*(e.wantSprint?1.25:1)/(e.mods.control*(e.ctrl?1.15:1));if(Math.random()<l*t){this.owner=null,dt.play("pass",.5),this.giveBall(i),e.cool.touch=.5;return}}}ballVsPeople(){let t=this.ball,e=t.pos,i=(n,r,o,a,l)=>{if(e.y>a)return;let c=e.x-n,h=e.z-r,u=Math.hypot(c,h),d=o+t.r;if(u>=d||u<1e-4)return;let f=c/u,g=h/u;e.x=n+f*d,e.z=r+g*d;let x=t.vel.x*f+t.vel.z*g;x<0&&(t.vel.x-=1.5*x*f,t.vel.z-=1.5*x*g,l&&l(-x))};for(let n of this.walkers)i(n.pos.x,n.pos.z,n.radius,n.height,r=>{n.hitByBall(r),dt.play("bounce",r)});this.bike&&i(this.bike.pos.x,this.bike.pos.z,.5,2.2,n=>{n>3&&this.bike.hitByBall()});for(let n of this.animals)n.hit&&i(n.g.position.x,n.g.position.z,.6,1,r=>{r>2.5&&n.hit()});for(let n of this.allPlayers)n.active&&(n.state==="fallen"||n.state==="slide"||t.pos.y>.75&&t.pos.y<2&&n.cool.touch<=0&&!(n.isGK&&this.inOwnBox(n))&&Ie(n.pos.x,n.pos.z,e.x,e.z)<.42&&(t.vel.x=t.vel.x*-.25+n.vel.x*.6,t.vel.z=t.vel.z*-.25+n.vel.z*.6,t.vel.y=Math.max(.5,t.vel.y*-.2),n.cool.touch=.3,t.lastTouch=n,t.lastKickTeam=n.team,dt.play("bounce",5)))}onSlide(t){dt.play("slide"),this.fx.puff(Ue.set(t.pos.x,.1,t.pos.z),{n:4,size:.5,life:.7})}updateSlides(){let t=this.ball;for(let e of this.allPlayers){if(e.state!=="slide"||e.stateT<.05||e.stateT>.78)continue;e.fwd(_e);let i=e.pos.x+_e.x*.6,n=e.pos.z+_e.z*.6;if(Math.random()<.3&&this.fx.puff(Ue.set(e.pos.x,.05,e.pos.z),{n:1,size:.45,life:.6,up:.3}),!e.slideTouchedBall&&Ie(i,n,t.pos.x,t.pos.z)<.7&&t.pos.y<.55){if(e.slideTouchedBall=!0,e.slideHit.size===0&&(e.slideBallFirst=!0),this.owner){let r=this.owner;this.owner=null,r.cool.touch=.6}t.kick(_e.x*7+ot(-2,2),1.2,_e.z*7+ot(-2,2),e),e.cool.touch=.4,dt.play("kick",.6)}for(let r of this.allPlayers){if(r===e||!r.active||e.slideHit.has(r)||r.down||r.state==="gkhold"&&!1||Ie(i,n,r.pos.x,r.pos.z)>.78&&Ie(e.pos.x+_e.x*.25,e.pos.z+_e.z*.25,r.pos.x,r.pos.z)>.6)continue;e.slideHit.add(r);let o=r.team!==e.team&&!e.slideBallFirst;if(r.fall(),dt.play("thud"),this.after(.25,()=>dt.play("ouch")),this.rig.shake(.25,.4),this.fx.dizzy(()=>r.headPos(Ue.set(0,0,0)).add(_e.set(0,-.6,0)),2.6),this.fx.puff(Ue.set(r.pos.x,.15,r.pos.z),{n:6,size:.6}),r.team===e.team){this.say(r,"\u0625\u0646\u062A \u0628\u062A\u0643\u0639\u0628\u0644\u0646\u064A \u0623\u0646\u0627\u061F!");continue}if(this.addScandal(e.team,o?we.scandalTackle:we.scandalCleanTrip),this.after(.5,()=>this.say(r,ie(oe.hurt),{color:"#ffe0e0"})),this.fx.impact(Ue.set(r.pos.x,.9,r.pos.z)),o){this.slowmo(.35,.45),e.stats.fouls++,this.stats.fouls[e.team]++;let a=this.nearestTo(r.pos,r.team,l=>l!==r)||r;this.say(a,ie(oe.foul),{color:"#ffd23f",big:!0});for(let l of this.npcs)l.cheer&&ge(.4)&&l.cheer(1);this.headmasterWatching&&this.expel(e),this.callFoul(r.team,r.pos,e,r)}}}}onPullStart(t,e){dt.play("rip"),this.say(e,ie(oe.pull),{color:"#ffe0e0"}),this.headmasterWatching&&this.expel(t);let i=new Q(new ce(.22,.12,1),new Gt({color:e.char.look.top.color,roughness:.9}));i.castShadow=!0,this.scene.add(i),this.stretch.set(t,{m:i,t:e})}onPullEnd(t,e,i){let n=this.stretch.get(t);n&&(this.scene.remove(n.m),this.stretch.delete(t)),i&&e.active&&(e.fall(2.2),dt.play("thud"),this.addScandal(t.team,15),this.stats.fouls[t.team]++,t.stats.fouls++,this.say(e,"\u0648\u0642\u0639\u0646\u064A \u0645\u0646 \u0627\u0644\u0641\u0627\u0646\u0644\u0629!",{color:"#ffe0e0"}),this.state==="play"&&this.callFoul(e.team,e.pos,t,e))}updatePulls(t){for(let e of this.allPlayers){if(!e.pullTarget)continue;let i=e.pullTarget;e.pullT+=t,this.addScandal(e.team,we.scandalPullPerSec*t,!0);let n=Ie(e.pos.x,e.pos.z,i.pos.x,i.pos.z);if(n>.9){let r=Math.min(1,(n-.9)*4*t*10);e.pos.x+=(i.pos.x-e.pos.x)/n*r*.2,e.pos.z+=(i.pos.z-e.pos.z)/n*r*.2}i.hasBall&&e.pullT>.7&&this.loseBall(i,1.5),(n>1.9||e.pullT>we.pullMax||!i.active||i.down||e.down)&&e.releasePull(e.pullT>1.2&&ge(.35))}}updateStretch(){for(let[t,e]of this.stretch){t.char.J.rHand.getWorldPosition(Ue),e.t.char.J.spine.getWorldPosition(_e),_e.y+=.25*e.t.char.scale;let i=Ue.distanceTo(_e);e.m.position.copy(Ue).add(_e).multiplyScalar(.5),e.m.lookAt(_e),e.m.scale.set(1,1,Math.max(.05,i))}}addScandal(t,e,i=!1){let n=this.scandal[t];this.scandal[t]=Math.min(100,this.scandal[t]+e),n<100&&this.scandal[t]>=100&&this.queue.push({type:ge(.5)?"fight":"mom",team:t}),!i&&e>10&&this.ui.scandalPulse(t)}callFoul(t,e,i,n){if(this.state!=="play")return;this.foulInfo={fouler:i,victim:n};let r=e.clone();this.after(.65,()=>{this.state==="play"&&this.startFreekick(t,r)})}startFreekick(t,e){let i=this.ctx.bounds,n=Wt(e.x,i.minX+1.2,i.maxX-1.2),r=Wt(e.z,i.minZ+1,i.maxZ-1);if(this.owner){let o=this.owner;this.owner=null,o.state==="gkhold"&&o.setState("play")}this.ball.place(n,r),this.freekick={team:t,x:n,z:r},this.setState("freekick"),dt.play("whistle");for(let o of this.allPlayers)o.pullTarget&&o.releasePull();this.queue.length&&this.runQueuedEvent()}updateFreekick(t){let e=this.freekick;if(this.state!=="freekick")return;let i=this.nearestTo(this.ball.pos,e.team,n=>!n.isGK&&n.state==="play");if(i){i.want.set(0,0);let n=i.dir;Ue.set(e.x-n*.55,0,e.z);let r=Ue.x-i.pos.x,o=Ue.z-i.pos.z,a=Math.hypot(r,o);a>.2&&(i.want.set(r/a,o/a),i.wantSprint=a>3),i.lookAt=this.ball.pos}this.stateT>1.6&&!this.eventActive&&(this.setState("play"),this.freekick=null,i&&(i.place(e.x-i.dir*.45,e.z,i.dir>0?Math.PI/2:-Math.PI/2),this.giveBall(i),this.humanTeams[e.team]&&this.setControl(e.team,i)),dt.play("whistle"))}runQueuedEvent(){let t=this.queue.shift();if(!t)return;let e=t.team;t.type==="fight"?this.startFight(e):this.momCalls(e),this.scandal[e]=0}startFight(t){let e=this.foulInfo?.fouler?.active?this.foulInfo.fouler:this.teams[t].find(l=>l.active&&!l.isGK),i=this.foulInfo?.victim?.active?this.foulInfo.victim:this.nearestTo(e.pos,1-t,l=>!l.isGK);if(!e||!i)return;let n=Ue.copy(e.pos).add(i.pos).multiplyScalar(.5).clone(),r=[this.nearestTo(n,t,l=>l!==e&&!l.isGK),this.nearestTo(n,1-t,l=>l!==i&&!l.isGK)].filter(Boolean),o=[e,i,...r];this.eventActive={type:"fight",t:0,who:o,center:n},this.setState("event"),this.stats.fights++,this.focusOverride=n,this.rig.zoomTarget=.78;for(let l of o)l.releasePull(),this.owner===l&&(this.owner=null),l.setState("hidden"),l.show(!1);this.fx.fight(n,4),dt.play("fight"),this.rig.shake(.18,3.5),this.ui.banner("\u062E\u0646\u0627\u0642\u0629!",`${e.name} \u0648${i.name} \u0627\u062A\u062E\u0627\u0646\u0642\u0648\u0627`,"fight");for(let l of this.npcs)l.cheer&&l.cheer(4);let a=this.npcs.filter(l=>l instanceof qr);a.length&&this.say(ie(a),ie(oe.fight),{color:"#fff"})}momCalls(t){let e=this.teams[t].filter(n=>n.active&&!n.isGK);if(e.length<=1){this.startFight(t);return}let i=this.foulInfo?.fouler&&e.includes(this.foulInfo.fouler)?this.foulInfo.fouler:ie(e);if(this.stats.momCalls++,this.mom)this.mom.call(i.name),this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.after(2.6,()=>{this.focusOverride=null});else{let n=this.ctx.doors[0]||new b(0,0,this.ctx.bounds.minZ);this.say({headPos:(r=new b)=>r.set(n.x,3.2,n.z)},oe.momCall(i.name),{color:"#ffe9f0",dur:3.6}),dt.play("mom")}this.ui.banner("\u0623\u0645\u0647 \u0646\u0627\u062F\u062A \u0639\u0644\u064A\u0647!",`${i.name} \u0644\u0627\u0632\u0645 \u064A\u0637\u0644\u0639 \u0627\u0644\u0628\u064A\u062A`,"mom"),this.after(1.5,()=>this.say(i,ie(oe.momCallOut))),this.sendAway(i,40,()=>this.ui.toast(oe.momBack(i.name)))}expel(t){!t.active||t.expelled||(t.expelled=!0,this.headmaster?.scold(t),this.ui.banner("\u0627\u062A\u0637\u0631\u062F!",oe.sentOff(t.name)+" (\u0627\u0644\u0646\u0627\u0638\u0631 \u0634\u0627\u0641\u0647)","red"),this.sendAway(t,45,()=>{t.expelled=!1,this.ui.toast(`${t.name} \u0631\u062C\u0639 \u0627\u0644\u0645\u0644\u0639\u0628`)}))}sendAway(t,e,i){if(t.releasePull(),this.owner===t&&this.loseBall(t,1),t.ctrl){let r=t.team;t.ctrl=null,t.setMarker(null),this.after(0,()=>this.switchNext(r))}let n=this.nearestDoor(t.pos);t.pending=null,t.anim.stop(),t.setState("leaving"),t.walkTo=n,t.onArrive=()=>{t.setState("out"),t.show(!1),this.after(e,()=>{t.place(n.x,n.z),t.show(!0),t.setState("returning"),t.walkTo=new b(n.x*.8,0,Wt(n.z,this.ctx.bounds.minZ+1,this.ctx.bounds.maxZ-1)),t.onArrive=()=>{t.setState("play"),i&&i()}})}}nearestDoor(t){let e=null,i=1/0;for(let n of this.ctx.doors){let r=Ie(n.x,n.z,t.x,t.z);r<i&&(i=r,e=n)}return(!e||i>25)&&(e=new b(t.x,0,this.ctx.bounds.maxZ+2.5)),e.clone()}updateEvent(t){let e=this.eventActive;if(!e){this.setState("play");return}if(e.t+=t,e.type==="fight"&&e.t>4.2){this.ui.banner(ie(oe.fightOver),"","small");for(let i of e.who){i.show(!0),i.setState("dazed",2.6),i.anim.play("dazed");let n=i;this.fx.dizzy(()=>n.headPos(Ue.set(0,0,0)),2.6),i.pos.x+=ot(-1,1),i.pos.z+=ot(-1,1)}this.focusOverride=null,this.rig.zoomTarget=1,this.eventActive=null,this.setState("freekick"),this.stateT=.3}else e.type==="balcony"?e.t>4.2&&!this.ball.frozen&&this.endBallEvent():e.type==="window"?e.t>2.6&&(this.fleeFrom=null,this.focusOverride=null,this.eventActive=null,this.startFreekick(1-e.team,new b(e.pos.x*.7,0,0))):e.type==="roof"&&this.updateRoofFetch(e,t)}endBallEvent(){this.eventActive=null,this.focusOverride=null,this.setState("play")}checkGoal(){let t=this.ball.pos;for(let e of this.ctx.goals)if(!(!(e.type==="chalk"?Math.abs(t.x)>Math.abs(e.x)-this.ball.r-.08:Math.abs(t.x)>Math.abs(e.x)+(e.type==="frame"?.15:.05))||Math.sign(t.x)!==Math.sign(e.x))){if(Math.abs(t.z)<e.hw-.02&&t.y<e.h){let n=e.side>0?0:1;this.goalScored(n,e);return}this.lastShot&&this.time-this.lastShot.t<2.5&&this.lastShot.team===(e.side>0?0:1)&&Math.abs(t.z)<e.hw+2.5&&(this.lastShot=null,this.say(this.nearestTo(t,e.side>0?0:1)||this.ball,ie(oe.miss)),dt.play("ooh"))}}goalScored(t,e){this.score[t]++,this.concededTeam=1-t;let i=this.ball.lastTouch,n=i&&i.team===t?i:null,r=i&&i.team!==t;n&&n.stats.goals++,this.stats.goals.push({team:t,name:n?n.name:i?i.name:"\u061F",own:r,t:this.clock}),this.scorer=n||this.teams[t].find(a=>a.active&&!a.isGK)||null,this.owner=null,this.pendingPass=null,this.setState("goal");for(let a of this.allPlayers)a.releasePull();let o=e.type==="bricks"?oe.goalBricks:e.type==="slippers"?oe.goalSlippers:e.type==="chalk"?oe.goalChalk:[];this.ui.banner(ie(oe.goal),r?`\u062C\u0648\u0646 \u0641\u064A \u0646\u0641\u0633\u0647! (${i.name})`:`${this.scorer?this.scorer.name:""} ${o.length?"\u2022 "+ie(o):""}`,"goal",t),dt.play("cheer"),dt.play("whistle"),this.rig.zoomTarget=.82,this.rig.shake(.2,.5),this.slowmo(.3,.9),this.after(.5,()=>{this.ball.vel.multiplyScalar(.2)});for(let a of this.allPlayers)!a.active||a.state==="fallen"||(a===this.scorer?a.celebrate("airplane"):a.team===t?a.celebrate("jump"):a.celebrate("sad"));for(let a of this.npcs)a.cheer&&a.cheer(3.5);this.game.onEvent?.("goal",t)}checkSpecialBall(){let t=this.ball;if(this.mom)for(let e of this.ctx.balconies){let i=t.pos;if(i.x>e.min.x&&i.x<e.max.x&&i.y>e.min.y&&i.y<e.max.y&&i.z>e.min.z&&i.z<e.max.z&&this.mom.balc===e){this.ballOnBalcony();return}}this.ctx.ballOut&&this.ctx.ballOut(t.pos)&&t.pos.y>this.ctx.extras.parapet.h*.6&&this.ballOffRoof(),t.pos.y<-2&&this.ballOffRoof()}ballOnBalcony(){let t=this.ball;t.frozen=!0,t.vel.set(0,0,0),this.owner=null,this.setState("event"),this.eventActive={type:"balcony",t:0},this.focusOverride=this.mom.pos.clone().setY(this.mom.pos.y+1.5),this.rig.zoomTarget=.85,this.ui.banner(ie(oe.balcony),"","small"),dt.play("ooh"),this.after(.7,()=>this.mom.catchBall())}onBalconyReturn(){this.focusOverride=null,this.rig.zoomTarget=1,this.after(.3,()=>{this.state==="event"&&this.endBallEvent()})}onBallHit(t,e,i){if(t.tag==="post")dt.play(t.metal?"metal":"brick"),e>6&&this.say(this.ball.lastTouch||this.ball,t.metal?"\u0627\u0644\u0639\u0627\u0631\u0636\u0629!":"\u0627\u0644\u0637\u0648\u0628\u0629!");else if(t.tag==="wall"||t.tag==="obj"||t.tag==="balconyFloor")dt.play("wall",e);else if(t.tag==="toktok"&&this.toktok){dt.play("metal");let n=this.toktok;this.say({headPos:(r=new b)=>r.set(n.pos.x,2.6,n.pos.z)},"\u062D\u0627\u0633\u0628 \u0627\u0644\u062A\u0648\u0643\u062A\u0648\u0643 \u064A\u0627 \u0639\u0645!")}else if(t.tag==="sheep"){let n=this.animals.find(r=>r.hit);n&&n.hit()}if(t.tag==="wall"&&e>9.5&&this.state==="play"){for(let n of this.ctx.windows)if(!n.broken&&!(Math.abs(i.z-n.z)>.4||i.x<n.x0-.05||i.x>n.x1+.05||i.y<n.y0-.05||i.y>n.y1+.05)){this.breakWindow(n);break}}}breakWindow(t){t.broken=!0;let e=t.mesh.material;e.map=Qh(),e.color.set("#ffffff"),e.emissiveIntensity=0,e.needsUpdate=!0,this.fx.shatter(Ue.set((t.x0+t.x1)/2,(t.y0+t.y1)/2,t.z+t.face*.1),t.face),dt.play("glass"),this.rig.shake(.3,.5),this.stats.windows++;let i=this.ball.lastKickTeam>=0?this.ball.lastKickTeam:0;this.addScandal(i,we.scandalWindow);let n=new b((t.x0+t.x1)/2,t.y1+.6,t.z+t.face*.3);this.after(.4,()=>this.say({headPos:(r=new b)=>r.copy(n)},ie(oe.windowBreak),{color:"#ffe0e0",dur:3})),this.ui.banner("\u0627\u0644\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631!",ie(oe.run),"red"),this.owner=null,this.setState("event"),this.eventActive={type:"window",t:0,team:i,pos:n},this.fleeFrom=n;for(let r of this.allPlayers)r.active&&ge(.5)&&this.after(ot(.2,.9),()=>this.say(r,ie(oe.run)))}ballOffRoof(){if(this.state!=="play")return;let t=this.ball,e=t.lastKickTeam>=0?t.lastKickTeam:0;t.frozen=!0,t.mesh.visible=!1,t.blob.visible=!1,t.place(0,0,-50),this.owner=null,this.setState("event");let i=this.nearestTo(this.ctx.doors[0]||new b,e,r=>!r.isGK&&r.state==="play")||this.teams[e][1];this.eventActive={type:"roof",t:0,team:e,fetcher:i,phase:0},this.ui.banner(ie(oe.roofDrop),`${i.name} \u0646\u0627\u0632\u0644 \u064A\u062C\u064A\u0628\u0647\u0627`,"small"),dt.play("ooh"),i.ctrl&&(i.ctrl=null,i.setMarker(null),this.after(0,()=>this.switchNext(e)));let n=this.nearestDoor(i.pos);i.setState("fetch"),i.walkTo=n,i.onArrive=()=>{i.setState("fetched"),i.show(!1)},this.eventActive.door=n}updateRoofFetch(t){let e=t.fetcher;if(t.phase===0&&e.state==="fetched"&&(t.phase=1,t.t=0),t.phase===1&&t.t>3){t.phase=2,e.place(t.door.x,t.door.z),e.show(!0),e.setState("play"),this.say(e,ie(oe.roofBack));let i=this.ball;i.mesh.visible=!0,i.blob.visible=!0,i.frozen=!1,this.eventActive=null,this.startFreekick(1-t.team,new b(t.door.x+3,0,t.door.z-1))}}onHeadmaster(t){this.headmasterWatching=t,t&&(this.ui.banner(ie(oe.headmaster),"\u0623\u064A \u0641\u0627\u0648\u0644 \u062F\u0644\u0648\u0642\u062A\u064A = \u0637\u0631\u062F!","warn"),dt.play("whistle")),this.ui.headmaster(t)}updateNPCs(t){for(let e of this.npcs)e.update(t);this.walkerT-=t,this.walkerT<=0&&this.ctx.walkerPaths.length&&this.walkers.length<3&&(this.walkerT=ot(7,16),this.walkers.push(new $a(this,ie(this.ctx.walkerPaths))));for(let e=this.walkers.length-1;e>=0;e--){let i=this.walkers[e];i.update(t),i.done&&(i.remove(),this.walkers.splice(e,1))}if(this.toktokT-=t,this.toktokT<=0&&!this.toktok&&this.state==="play"&&this.ctx.extras.toktok&&(this.toktok=new Ja(this,this.ctx.extras.toktok),this.ui.banner(ie(oe.toktok),"","warn"),dt.play("horn"),dt.toktokMusic(!0)),this.toktok){this.toktok.update(t);for(let e of this.allPlayers){if(!e.active||e.ctrl)continue;let i=e.pos.z-this.toktok.pos.z,n=(e.pos.x-this.toktok.pos.x)*this.toktok.dir;n>-2&&n<6&&Math.abs(i)<2.2&&(e.want.y+=Math.sign(i||1)*1.2)}this.toktok.done&&(this.toktok.remove(),this.toktok=null,this.toktokT=ot(60,100),dt.toktokMusic(!1))}this.bikeT-=t,this.bikeT<=0&&!this.bike&&(this.bike=new Ka(this,this.ctx.extras.bike.z)),this.bike&&(this.bike.update(t),this.bike.done&&(this.bike.remove(),this.bike=null,this.bikeT=ot(35,60)))}onFootstep(t,e){this.opts.mapId==="yard"&&e>.6&&Math.random()<.35&&this.fx.puff(Ue.set(t.pos.x,.05,t.pos.z),{n:1,size:.35,life:.5,up:.2,opacity:.45})}say(t,e,i={}){this.ui.bubble(t,e,i)}endMatch(){if(this.state==="end")return;this.setState("end"),this.owner=null,dt.play("whistle",3);let[t,e]=this.score,i=t>e?0:e>t?1:-1;this.winner=i;for(let n of this.allPlayers)n.releasePull(),!(!n.active||n.state==="fallen")&&(n.setState("celebrate"),i!==-1&&n.anim.play(n.team===i?"jump":"sad"));this.scorer=null,this.ui.banner("\u062E\u0644\u0635 \u0627\u0644\u0645\u0627\u062A\u0634!",`${this.teamDef(0).short} ${Re(this.score[0])} \u2022 ${this.teamDef(1).short} ${Re(this.score[1])}`,"end"),dt.toktokMusic(!1)}dispose(){this.disposed=!0,dt.toktokMusic(!1),dt.stopAmbience(),this.fx.clear(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.ui.matchEnd()}};var xt=(s,t=document)=>t.querySelector(s),xi=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Wi=new b,Zr=(s,t)=>`<span>${Re(s)}</span><i>-</i><span>${Re(t)}</span>`,al=class{constructor(t){this.game=t,this.root=xt("#ui"),this.bubbles=[],this.tags=new Map,this.screens={},this.build()}build(){let t=this.root;t.innerHTML=`
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
    `,xt(".pausebtn",t).onclick=()=>this.game.togglePause(),this.hudEl=xt("#hud",t),this.bubbleLayer=xt("#bubbles",t),this.screenRoot=xt("#screens",t),this.makeScreens()}makeScreens(){let t=this.screenRoot,e=(c,h)=>{let u=xi("div","screen hidden",h);return u.id=c,t.appendChild(u),this.screens[c]=u,u};e("menu",`
      <div class="logo"><img class="logoimg" src="assets/logo/icon-512.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><p>\u0628\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u062D\u062A\u0629</p></div>
      <div class="menu-btns">
        <button data-a="quick" class="big">\u26BD \u0645\u0627\u062A\u0634 \u0633\u0631\u064A\u0639</button>
        <button data-a="tourney">\u{1F3C6} \u0627\u0644\u0628\u0637\u0648\u0644\u0629: \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</button>
        <button data-a="versus">\u{1F465} \u0627\u062A\u0646\u064A\u0646 \u0639\u0644\u0649 \u0643\u064A\u0628\u0648\u0631\u062F \u0648\u0627\u062D\u062F</button>
        <button data-a="controls">\u{1F3AE} \u0627\u0644\u062A\u062D\u0643\u0645</button>
        <button data-a="settings">\u2699\uFE0F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
      </div>
      <div class="foot">\u0643\u0644 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A \u0645\u0639\u0645\u0648\u0644\u0629 \u0628\u0627\u0644\u0643\u0648\u062F \u2022 \u0627\u0644\u0639\u0628 \u0628\u0627\u0644\u0643\u064A\u0628\u0648\u0631\u062F \u0623\u0648 \u0627\u0644\u062F\u0631\u0627\u0639 \u0623\u0648 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</div>
    `).querySelectorAll("button").forEach(c=>c.onclick=()=>{dt.init(),dt.play("click"),this.menuAction(c.dataset.a)});let n=e("setup",`
      <div class="panel wide">
        <h2 class="ttl">\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F</h2>
        <div class="sec"><h3>\u0627\u0644\u0645\u0643\u0627\u0646</h3><div class="maps"></div></div>
        <div class="row">
          <div class="sec"><h3>\u0627\u0644\u0648\u0642\u062A</h3><div class="seg" data-k="time"><button data-v="day">\u2600\uFE0F \u0627\u0644\u0636\u0647\u0631</button><button data-v="night">\u{1F319} \u0628\u0627\u0644\u0644\u064A\u0644</button></div></div>
          <div class="sec"><h3>\u0627\u0644\u0635\u0639\u0648\u0628\u0629</h3><div class="seg" data-k="diff">${Object.entries(Gr).map(([c,h])=>`<button data-v="${c}">${h.name}</button>`).join("")}</div></div>
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
    `);this.setupSel={map:"alley",time:"day",diff:"normal",rule:"t180",home:"home",away:"away",versus:!1};let r=xt(".maps",n);Ba.forEach(c=>{let h=Jn[c],u=xi("button","mapcard",`<div class="mc-art mc-${c}"></div><b>${h.name}</b><small>${h.desc}</small><em>${Re(h.teamSize)} \xD7 ${Re(h.teamSize)}</em>`);u.dataset.v=c,u.onclick=()=>{dt.play("click"),this.setupSel.map=c,this.refreshSetup()},r.appendChild(u)}),n.querySelectorAll(".seg").forEach(c=>c.querySelectorAll("button").forEach(h=>h.onclick=()=>{dt.play("click"),this.setupSel[c.dataset.k]=h.dataset.v,this.refreshSetup()})),n.querySelectorAll(".teams").forEach(c=>{Object.entries(hn).forEach(([h,u])=>{let d=xi("button","teambtn",`<span style="background:${u.ui}"></span>${u.name}`);d.dataset.v=h,d.onclick=()=>{dt.play("click");let f=c.dataset.k==="home"?"away":"home";this.setupSel[f]===h&&(this.setupSel[f]=this.setupSel[c.dataset.k]),this.setupSel[c.dataset.k]=h,this.refreshSetup()},c.appendChild(d)})}),xt(".back",n).onclick=()=>{dt.play("click"),this.show("menu")},xt(".go",n).onclick=()=>{dt.play("click"),this.game.startFromSetup(this.setupSel)},e("controls",`
      <div class="panel wide">
        <h2 class="ttl">\u0627\u0644\u062A\u062D\u0643\u0645</h2>
        <div class="ctrl-grid">
          <div class="ccard"><h3>\u0644\u0627\u0639\u0628 \u0648\u0627\u062D\u062F</h3>
            <table>
              <tr><td><kbd>\u2191</kbd><kbd>\u2193</kbd><kbd>\u2190</kbd><kbd>\u2192</kbd></td><td>\u062C\u0631\u064A</td></tr>
              <tr><td><kbd>A</kbd></td><td>\u0628\u0627\u0635\u0629: \u0644\u0644\u0632\u0645\u064A\u0644 \u0627\u0644\u0644\u064A \u0641\u064A \u0627\u062A\u062C\u0627\u0647\u0643\u060C \u0648\u0644\u0648 \u0645\u0641\u064A\u0634 \u062A\u0645\u0634\u064A \u0641\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647. \u0641\u0636\u0644 \u062F\u0627\u0633\u0633 = \u0623\u0628\u0639\u062F</td></tr>
              <tr><td><kbd>S</kbd></td><td>\u0634\u0648\u0637\u0629 (\u062F\u0648\u0633 \u0643\u062A\u064A\u0631 = \u0623\u0642\u0648\u0649)</td></tr>
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
      </div>`),xt("#controls .back").onclick=()=>{dt.play("click"),this.show(this.controlsReturn||"menu")},e("settings",`
      <div class="panel">
        <h2 class="ttl">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</h2>
        <div class="sec"><h3>\u062C\u0648\u062F\u0629 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A</h3><div class="seg" data-k="quality"><button data-v="high">\u0639\u0627\u0644\u064A\u0629</button><button data-v="medium">\u0645\u062A\u0648\u0633\u0637\u0629</button><button data-v="low">\u062E\u0641\u064A\u0641\u0629 (\u0644\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0636\u0639\u064A\u0641\u0629)</button></div></div>
        <div class="sec"><h3>\u0627\u0644\u0635\u0648\u062A</h3><input type="range" min="0" max="100" class="vol"><label class="chk"><input type="checkbox" class="mute"> \u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A</label></div>
        <div class="sec"><h3>\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u0627\u0635\u0629</h3><div class="seg" data-k="passAssist"><button data-v="high">\u0639\u0627\u0644\u064A\u0629</button><button data-v="normal">\u0639\u0627\u062F\u064A\u0629</button><button data-v="manual">\u064A\u062F\u0648\u064A</button></div></div>
        <div class="sec"><h3>\u0632\u0631\u0627\u064A\u0631 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</h3><div class="seg"><button class="touchedit-btn">\u{1F3AE} \u063A\u064A\u0651\u0631 \u0645\u0643\u0627\u0646 \u0648\u062D\u062C\u0645 \u0627\u0644\u0632\u0631\u0627\u064A\u0631</button></div></div>
        <div class="sec"><h3>\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u0632\u0631\u0627\u064A\u0631 \u062A\u062D\u062A</h3><div class="seg" data-k="hints"><button data-v="on">\u062A\u0638\u0647\u0631</button><button data-v="off">\u062A\u0633\u062A\u062E\u0628\u0649</button></div></div>
        <div class="actions"><button class="back big">\u062A\u0645\u0627\u0645</button></div>
      </div>`);let o=this.screens.settings;o.querySelectorAll(".seg").forEach(c=>c.querySelectorAll("button").forEach(h=>h.onclick=()=>{dt.play("click"),this.game.setSetting(c.dataset.k,h.dataset.v),this.refreshSettings()})),xt(".vol",o).oninput=c=>this.game.setSetting("volume",c.target.value/100),xt(".mute",o).onchange=c=>this.game.setSetting("muted",c.target.checked),xt(".back",o).onclick=()=>{dt.play("click"),this.show(this.settingsReturn||"menu")},xt(".touchedit-btn",o).onclick=()=>{dt.play("click"),this.openTouchEditor()};let a=e("touchedit",`
      <div class="panel tebar">
        <h2 class="ttl">\u0638\u0628\u0651\u0637 \u0627\u0644\u0632\u0631\u0627\u064A\u0631 <button class="temini">\u0635\u063A\u0651\u0631 \u25B2</button></h2>
        <div class="tebody">
        <p>\u0627\u0633\u062D\u0628 \u0623\u064A \u0632\u0631\u0627\u0631 \u0623\u0648 \u0627\u0644\u0627\u0633\u062A\u064A\u0643 \u0644\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0644\u064A \u064A\u0631\u064A\u062D\u0643\u060C \u0648\u062F\u0648\u0633 \u0639\u0644\u064A\u0647 \u0639\u0634\u0627\u0646 \u062A\u063A\u064A\u0651\u0631 \u062D\u062C\u0645\u0647.</p>
        <div class="terow"><label>\u0627\u0644\u062D\u062C\u0645: <span class="tesel"></span></label><input type="range" class="tesize" min="60" max="160" step="5"><b class="tesizev"></b></div>
        <div class="terow"><label>\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u0632\u0631\u0627\u064A\u0631</label><input type="range" class="teop" min="35" max="100" step="5"><b class="teopv"></b></div>
        </div>
        <div class="actions"><button class="big tesave">\u062D\u0641\u0638</button><button class="tereset">\u0631\u062C\u0651\u0639 \u0632\u064A \u0627\u0644\u0623\u0648\u0644</button><button class="tecancel">\u0625\u0644\u063A\u0627\u0621</button></div>
      </div>`);xt(".temini",a).onclick=()=>{let c=xt(".tebar",a);c.classList.toggle("mini"),xt(".temini",a).textContent=c.classList.contains("mini")?"\u0643\u0628\u0651\u0631 \u25BC":"\u0635\u063A\u0651\u0631 \u25B2"};let l=()=>{let c=this.game.touchPad,h=c.selected||"shoot";return h==="stick"?c.layout.stick:c.layout.buttons[h]};this.refreshTouchEditor=()=>{let c=this.game.touchPad;if(!c)return;let h=c.selected||"shoot";xt(".tesel",a).textContent=c.label(h);let u=Math.round(l().scale*100);xt(".tesize",a).value=u,xt(".tesizev",a).textContent=Re(u)+"\u066A";let d=Math.round(c.layout.opacity*100);xt(".teop",a).value=d,xt(".teopv",a).textContent=Re(d)+"\u066A"},xt(".tesize",a).oninput=c=>{l().scale=c.target.value/100,this.game.touchPad.applyLayout(),this.refreshTouchEditor()},xt(".teop",a).oninput=c=>{this.game.touchPad.layout.opacity=c.target.value/100,this.game.touchPad.applyLayout(),this.refreshTouchEditor()},xt(".tesave",a).onclick=()=>{dt.play("coin"),this.closeTouchEditor(!0)},xt(".tecancel",a).onclick=()=>{dt.play("click"),this.closeTouchEditor(!1)},xt(".tereset",a).onclick=()=>{dt.play("click");let c=this.game.touchPad;c.layout=c.constructor.defaults(),c.applyLayout(),this.refreshTouchEditor()},e("pause",`
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
      </div>`),this.screens.pause.querySelectorAll("button").forEach(c=>c.onclick=()=>{dt.play("click"),this.pauseAction(c.dataset.a)}),e("result",'<div class="panel"><img class="wordimg" src="assets/logo/wordmark-800.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><div class="res"></div><div class="actions"></div></div>'),e("tourney",'<div class="panel wide"><div class="thead"><img class="badgeimg" src="assets/logo/badge-400.png" alt=""><h2 class="ttl">\u{1F3C6} \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629</h2></div><div class="tinfo"></div><div class="ladder"></div><div class="actions"></div></div>'),e("shop",'<div class="panel"><h2 class="ttl">\u{1F6D2} \u0645\u062D\u0644 \u0639\u0645 \u0633\u064A\u062F</h2><div class="money"></div><div class="items"></div><div class="actions"><button class="back big">\u062E\u0644\u0635\u062A</button></div></div>'),xt("#shop .back").onclick=()=>{dt.play("click"),this.showTourney()},e("loading",'<div class="loading"><img class="splashimg" src="assets/logo/graffiti-640.png" alt="\u0643\u0631\u0629 \u0627\u0644\u0634\u0648\u0627\u0631\u0639"><p>\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u062D\u0627\u0631\u0629...</p></div>')}show(t){for(let[e,i]of Object.entries(this.screens))i.classList.toggle("hidden",e!==t);this.current=t,t==="setup"&&this.refreshSetup(),t==="settings"&&this.refreshSettings()}hideScreens(){this.show(null)}menuAction(t){t==="quick"&&(this.setupSel.versus=!1,xt("#setup .ttl").textContent="\u0645\u0627\u062A\u0634 \u062C\u062F\u064A\u062F",this.show("setup")),t==="versus"&&(this.setupSel.versus=!0,xt("#setup .ttl").textContent="\u0627\u062A\u0646\u064A\u0646 \u0642\u0635\u0627\u062F \u0628\u0639\u0636",this.show("setup")),t==="tourney"&&this.showTourney(),t==="controls"&&(this.controlsReturn="menu",this.show("controls")),t==="settings"&&(this.settingsReturn="menu",this.show("settings"))}pauseAction(t){t==="resume"&&this.game.togglePause(!1),t==="restart"&&this.game.restartMatch(),t==="quit"&&this.game.quitToMenu(),t==="controls"&&(this.controlsReturn="pause",this.show("controls")),t==="settings"&&(this.settingsReturn="pause",this.show("settings"))}refreshSetup(){let t=this.setupSel,e=this.screens.setup;e.querySelectorAll(".mapcard").forEach(i=>i.classList.toggle("on",i.dataset.v===t.map)),e.querySelectorAll(".seg").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===t[i.dataset.k]))),e.querySelectorAll(".teams").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===t[i.dataset.k]))),xt('.seg[data-k="diff"]',e).parentElement.style.display=t.versus?"none":"",e.querySelectorAll(".teams")[0].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0623\u0648\u0644":"\u0641\u0631\u064A\u0642\u0643",e.querySelectorAll(".teams")[1].previousElementSibling.textContent=t.versus?"\u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u062A\u0627\u0646\u064A":"\u0627\u0644\u062E\u0635\u0645"}openTouchEditor(){let t=this.game.ensureTouchPad();this.touchBackup=JSON.parse(JSON.stringify(t.layout)),t.onSelect=()=>this.refreshTouchEditor(),t.onChange=()=>this.refreshTouchEditor(),t.show(!0),t.setEditing(!0),this.show("touchedit"),this.refreshTouchEditor()}closeTouchEditor(t){let e=this.game.touchPad;t?this.game.setSetting("touchLayout",JSON.parse(JSON.stringify(e.layout))):e.setLayout(this.touchBackup),e.setEditing(!1),e.onSelect=e.onChange=null;let i=this.game.match&&!this.game.match.opts.demo&&this.game.touch&&!this.game.match.opts.versus;e.show(!!i&&this.settingsReturn==="pause"),this.show("settings")}refreshSettings(){let t=this.game.settings,e=this.screens.settings;e.querySelectorAll(".seg").forEach(i=>i.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.v===String(t[i.dataset.k])))),xt(".vol",e).value=Math.round(t.volume*100),xt(".mute",e).checked=!!t.muted}showTourney(){let t=this.game.tourney,e=this.screens.tourney;xt(".tinfo",e).innerHTML=`<div class="money">\u{1F4B0} ${Re(t.money)} \u062C\u0646\u064A\u0647</div>${t.s.done?'<div class="champ">\u{1F3C6} \u0625\u0646\u062A\u0648\u0627 \u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062D\u062A\u0629! \u0643\u0633\u0628\u062A\u0648\u0627 \u0627\u0644\u0643\u0627\u0633!</div>':"<p>\u0627\u0643\u0633\u0628 \u0627\u0644\u062E\u0645\u0633 \u0645\u0627\u062A\u0634\u0627\u062A \u0639\u0634\u0627\u0646 \u062A\u0627\u062E\u062F \u0643\u0623\u0633 \u0627\u0644\u062D\u062A\u0629. \u0627\u0644\u062A\u0639\u0627\u062F\u0644 \u064A\u0639\u0646\u064A \u062A\u0639\u064A\u062F \u0627\u0644\u0645\u0627\u062A\u0634.</p>"}`;let i=xt(".ladder",e);i.innerHTML="",$s.forEach((l,c)=>{let h=t.s.results[c],u=c<t.stage?"done":c===t.stage&&!t.s.done?"next":t.s.done?"done":"locked",d=xi("div",`rung ${u}`,`
        <div class="rn">${Re(c+1)}</div>
        <div class="ri"><b>${l.title}</b><small>${Jn[l.map].name} \u2022 ${l.time==="night"?"\u0628\u0627\u0644\u0644\u064A\u0644":"\u0627\u0644\u0636\u0647\u0631"} \u2022 \u0642\u0635\u0627\u062F ${hn[l.opp].name}</small></div>
        <div class="rr">${h?Zr(h.score[0],h.score[1]):u==="next"?"\u0627\u0644\u062C\u0627\u064A":"\u{1F512}"}</div>`);i.appendChild(d)});let n=xt(".actions",e);n.innerHTML="";let r=xi("button","back","\u0631\u062C\u0648\u0639");r.onclick=()=>{dt.play("click"),this.show("menu")};let o=xi("button","","\u{1F6D2} \u0627\u0644\u0645\u062D\u0644");if(o.onclick=()=>{dt.play("click"),this.showShop()},n.append(r,o),!t.s.done){let l=xi("button","big go","\u0627\u0644\u0639\u0628 \u0627\u0644\u0645\u0627\u062A\u0634 \u0627\u0644\u062C\u0627\u064A");l.onclick=()=>{dt.play("click"),this.game.startTourneyMatch()},n.append(l)}let a=xi("button","danger","\u0627\u0628\u062F\u0623 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644");a.onclick=()=>{if(!a.dataset.sure){a.dataset.sure="1",a.textContent="\u0645\u062A\u0623\u0643\u062F\u061F \u0647\u062A\u062E\u0633\u0631 \u0627\u0644\u0641\u0644\u0648\u0633 \u0648\u0627\u0644\u062A\u0642\u062F\u0645.. \u062F\u0648\u0633 \u062A\u0627\u0646\u064A";return}t.reset(),this.showTourney()},n.append(a),this.show("tourney")}showShop(){let t=this.game.tourney,e=this.screens.shop;xt(".money",e).innerHTML=`\u{1F4B0} \u0645\u0639\u0627\u0643 ${Re(t.money)} \u062C\u0646\u064A\u0647`;let i=xt(".items",e);i.innerHTML="",Ha.forEach(n=>{let r=t.owned(n.id),o=!n.consumable&&r>=n.max,a=xi("div","item"+(o?" sold":""),`<div><b>${n.name}</b><small>${n.desc}</small></div><button ${o||t.money<n.price?"disabled":""}>${o?"\u0627\u0634\u062A\u0631\u064A\u062A\u0647 \u2713":Re(n.price)+" \u062C\u0646\u064A\u0647"}</button>`);n.consumable&&t.s.foul&&(a.querySelector("small").textContent+=` (\u0645\u0639\u0627\u0643 ${Re(t.s.foul)})`),a.querySelector("button").onclick=()=>{t.buy(n.id)&&(dt.play("coin"),this.showShop())},i.appendChild(a)}),this.show("shop")}matchStart(t){if(t.opts.demo){this.hudEl.classList.add("hidden");return}this.hudEl.classList.remove("hidden");let e=this.hudEl,i=t.teamDef(0),n=t.teamDef(1);xt(".sb-home .nm",e).textContent=i.short,xt(".sb-away .nm",e).textContent=n.short,xt(".sb-home .sw",e).style.background=i.ui,xt(".sb-away .sw",e).style.background=n.ui,xt(".m0 small",e).textContent=i.short,xt(".m1 small",e).textContent=n.short,xt(".m0",e).style.setProperty("--tc",i.ui),xt(".m1",e).style.setProperty("--tc",n.ui),xt(".mapname b",e).textContent=t.def.name,xt(".mapname small",e).textContent=t.night?"\u0628\u0627\u0644\u0644\u064A\u0644 \u2022 \u0627\u0644\u0643\u0634\u0627\u0641\u0627\u062A \u0628\u062A\u0631\u0639\u0634":"\u0627\u0644\u0636\u0647\u0631",xt(".hm",e).classList.add("hidden");let r=t.controllers[0]&&t.controllers[1];xt(".keys",e).innerHTML=r?"":`
      <span><kbd>\u2191\u2193\u2190\u2192</kbd>\u062C\u0631\u064A</span><span><kbd>A</kbd>\u0628\u0627\u0635\u0629</span><span><kbd>S</kbd>\u0634\u0648\u0637\u0629</span>
      <span class="hot"><kbd>E</kbd>\u0642\u0637\u0639</span><span class="hot"><kbd>D</kbd>\u0643\u0639\u0628\u0644\u0629</span><span class="hot"><kbd>F</kbd>\u0634\u062F\u0651</span><span><kbd>W</kbd>\u0643\u0648\u0628\u0631\u064A</span>
      <span><kbd>Shift</kbd>\u0633\u0628\u0631\u0646\u062A</span><span><kbd>Space</kbd>\u063A\u064A\u0651\u0631</span>`,xt(".keys",e).style.display=this.game.settings.hints==="off"||this.game.touch?"none":"";for(let o=0;o<2;o++)xt(`.w${o}`,e).classList.toggle("hidden",!t.controllers[o]);this.lastScore=[-1,-1]}matchEnd(){this.hudEl.classList.add("hidden");for(let t of this.bubbles)t.el.remove();this.bubbles=[],xt("#banner").classList.add("hidden")}controlChanged(t,e){let i=xt(`.w${t} b`,this.hudEl);i&&(i.textContent=`${e.name} (${Re(e.number)})`)}hud(t,e){if(this.updateBubbles(t,e),t.opts.demo)return;let i=this.hudEl;if(t.score[0]!==this.lastScore[0]||t.score[1]!==this.lastScore[1]){if(xt(".s0",i).textContent=Re(t.score[0]),xt(".s1",i).textContent=Re(t.score[1]),this.lastScore[0]>=0){let n=xt(".sb-score",i);n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop")}this.lastScore=[...t.score]}xt(".sb-clock",i).textContent=t.opts.rule.type==="time"?gf(t.clock):`\u0623\u0648\u0644 \u0648\u0627\u062D\u062F \u064A\u062C\u064A\u0628 ${Re(t.opts.rule.n)}`;for(let n=0;n<2;n++){let r=t.scandal[n],o=xt(`.m${n} .bar i`,i);o.style.width=r+"%",xt(`.m${n}`,i).classList.toggle("hot",r>75);let a=t.teams[n].find(l=>l.ctrl);a&&(xt(`.w${n} .stam i`,i).style.width=Math.round(a.stamina*100)+"%")}for(let n=0;n<2;n++){let r=t.teams[n].find(o=>o.ctrl);this.tag(`ctrl${n}`,r&&r.active&&r.root.visible?r:null,r?r.name:"",t.controllers[n]?.color,t)}}tag(t,e,i,n,r){let o=this.tags.get(t);if(!e){o&&(o.style.display="none");return}o||(o=xi("div","nametag"),this.bubbleLayer.appendChild(o),this.tags.set(t,o)),o.style.display="",o.textContent!==i&&(o.textContent=i),o.style.color=n||"#ffd23f",e.headPos(Wi),Wi.y+=.45;let a=this.project(Wi,r);if(!a){o.style.display="none";return}o.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%, -100%)`}project(t,e){let i=e.camera;if(Wi.copy(t).project(i),Wi.z>1)return null;let n=this.game.width,r=this.game.height;return{x:(Wi.x*.5+.5)*n,y:(-Wi.y*.5+.5)*r}}bubble(t,e,{color:i="#fff",dur:n=2.2,big:r=!1,delay:o=0}={}){if(!t)return;for(let l of this.bubbles)l.who===t&&(l.t=l.dur);let a=xi("div","bubble"+(r?" big":""),e);a.style.background=i,a.style.setProperty("--bc",i),a.style.opacity="0",this.bubbleLayer.appendChild(a),this.bubbles.push({el:a,who:t,t:-o,dur:n})}updateBubbles(t,e){for(let i=this.bubbles.length-1;i>=0;i--){let n=this.bubbles[i];if(n.t+=e,n.t>=n.dur){n.el.remove(),this.bubbles.splice(i,1);continue}if(n.t<0)continue;let r=n.who;try{if(r.headPos)r.headPos(Wi);else if(r.pos)Wi.set(r.pos.x,1.2,r.pos.z);else continue}catch{n.t=n.dur;continue}Wi.y+=.35;let o=this.project(Wi,t);if(!o){n.el.style.opacity="0";continue}let a=Math.min(1,n.t*8,(n.dur-n.t)*4);n.el.style.opacity=String(a);let l=.85+Math.min(1,n.t*10)*.15;n.el.style.transform=`translate(${o.x}px, ${o.y}px) translate(-50%, -100%) scale(${l})`}}banner(t,e="",i="",n=-1){let r=xt("#banner");r.className="show "+i,xt(".bt",r).textContent=t,xt(".bs",r).textContent=e,n>=0&&this.game.match?r.style.setProperty("--tc",this.game.match.teamColor(n)):r.style.removeProperty("--tc"),r.offsetWidth,r.classList.add("anim"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>r.classList.add("hidden"),i==="goal"?3200:i==="end"?4e3:2200)}toast(t){let e=xt("#toast");e.textContent=t,e.className="show",clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.classList.add("hidden"),2600)}power(t,e="\u0634\u0648\u0637\u0629"){let i=xt(".power",this.hudEl);xt("span",i).textContent=e,i.classList.toggle("hidden",t<=0),xt("i",i).style.width=Math.round(t*100)+"%",i.classList.toggle("max",t>=.95)}scandalPulse(t){let e=xt(`.m${t}`,this.hudEl);e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse")}headmaster(t){xt(".hm",this.hudEl).classList.toggle("hidden",!t)}showResult(t){let e=this.screens.result,i=t.teamDef(0),n=t.teamDef(1),r=t.winner,o=t.controllers[0]&&t.controllers[1],a=r===-1?"\u062A\u0639\u0627\u062F\u0644!":o?`${t.teamDef(r).short} \u0643\u0633\u0628\u0648\u0627!`:r===0?"\u0643\u0633\u0628\u062A! \u{1F389}":"\u062E\u0633\u0631\u062A \u0627\u0644\u0645\u0631\u0629 \u062F\u064A",l=null;t.opts.tourney&&(l=this.game.tourney.record(t));let c=t.stats.goals.map(u=>`<li style="--tc:${t.teamColor(u.team)}">\u26BD ${u.name}${u.own?" (\u0641\u064A \u0646\u0641\u0633\u0647)":""}</li>`).join("")||"<li>\u0645\u0641\u064A\u0634 \u062C\u0648\u0627\u0646\u0627\u062A</li>";xt(".res",e).innerHTML=`
      <h2 class="ttl">${a}</h2>
      <div class="final"><span style="--tc:${i.ui}">${i.name}</span><b>${Zr(t.score[0],t.score[1])}</b><span style="--tc:${n.ui}">${n.name}</span></div>
      <ul class="scorers">${c}</ul>
      <div class="stats">
        <div><b>${Zr(t.stats.fouls[0],t.stats.fouls[1])}</b><small>\u0641\u0627\u0648\u0644\u0627\u062A</small></div>
        <div><b>${Zr(t.stats.nutmegs[0],t.stats.nutmegs[1])}</b><small>\u0643\u0628\u0627\u0631\u064A</small></div>
        <div><b>${Zr(t.stats.shots[0],t.stats.shots[1])}</b><small>\u0634\u0648\u0637</small></div>
        <div><b>${Re(t.stats.fights)}</b><small>\u062E\u0646\u0627\u0642\u0627\u062A</small></div>
        <div><b>${Re(t.stats.momCalls)}</b><small>\u0623\u0645\u0647 \u0646\u0627\u062F\u062A</small></div>
        <div><b>${Re(t.stats.windows)}</b><small>\u0625\u0632\u0627\u0632 \u0627\u062A\u0643\u0633\u0631</small></div>
      </div>
      ${l?`<div class="earn">\u{1F4B0} \u0643\u0633\u0628\u062A ${Re(l.earn)} \u062C\u0646\u064A\u0647 ${l.result==="win"?"":l.result==="draw"?"\u2022 \u062A\u0639\u0627\u062F\u0644 \u064A\u0639\u0646\u064A \u062A\u0639\u064A\u062F \u0627\u0644\u0645\u0627\u062A\u0634":"\u2022 \u0644\u0627\u0632\u0645 \u062A\u0643\u0633\u0628 \u0639\u0634\u0627\u0646 \u062A\u0643\u0645\u0644"}</div>`:""}`;let h=xt(".actions",e);if(h.innerHTML="",t.opts.tourney){let u=xi("button","big","\u0643\u0645\u0651\u0644 \u0627\u0644\u0628\u0637\u0648\u0644\u0629");u.onclick=()=>{dt.play("click"),this.game.quitToMenu(!0)},h.append(u)}else{let u=xi("button","big","\u0645\u0627\u062A\u0634 \u062A\u0627\u0646\u064A");u.onclick=()=>{dt.play("click"),this.game.restartMatch()};let d=xi("button","","\u0627\u0644\u0642\u0627\u0626\u0645\u0629");d.onclick=()=>{dt.play("click"),this.game.quitToMenu()},h.append(u,d)}this.show("result")}};var op="matsh-elhara-tourney-v1";function du(){return{stage:0,money:0,owned:{},foul:0,results:[],done:!1}}var ll=class{constructor(){this.s=du();try{let t=localStorage.getItem(op);t&&(this.s=Object.assign(du(),JSON.parse(t)))}catch{}}save(){try{localStorage.setItem(op,JSON.stringify(this.s))}catch{}}reset(){this.s=du(),this.save()}get stage(){return this.s.stage}get money(){return this.s.money}get list(){return $s}current(){return $s[this.s.stage]}owned(t){return this.s.owned[t]||0}buy(t){let e=Ha.find(i=>i.id===t);return!e||this.s.money<e.price||!e.consumable&&this.owned(t)>=e.max?!1:(this.s.money-=e.price,e.consumable?this.s.foul=(this.s.foul||0)+1:this.s.owned[t]=(this.s.owned[t]||0)+1,this.save(),!0)}mods(){let t=this.s.owned,e=this.s.foul>0;return{speed:(t.shoes?1.06:1)*(e?1.03:1),shot:t.ball?1.1:1,control:t.ball?1.2:1,stamina:(t.kits?1.2:1)*(e?1.25:1),kits:!!t.kits,shoes:!!t.shoes}}record(t){let[e,i]=t.score,n=e*Zs.goal+t.stats.nutmegs[0]*Zs.nutmeg,r="draw";return e>i?(n+=Zs.win,r="win"):e===i?n+=Zs.draw:r="lose",i===0&&(n+=Zs.cleanSheet),this.s.money+=n,this.s.foul>0&&this.s.foul--,this.s.results[this.s.stage]={score:[e,i],result:r},r==="win"&&(this.s.stage++,this.s.stage>=$s.length&&(this.s.done=!0)),this.save(),{earn:n,result:r}}};var fu="matsh-elhara-settings-v1",pu=class{constructor(){this.settings={quality:"high",volume:.8,muted:!1,hints:"on",passAssist:"normal"};try{Object.assign(this.settings,JSON.parse(localStorage.getItem(fu)||"{}"))}catch{}uu()&&!localStorage.getItem?.(fu)&&(this.settings.quality="medium"),dt.setVolume(this.settings.volume),dt.setMuted(this.settings.muted),this.container=document.getElementById("view"),this.renderer=new Jo({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=qe,this.renderer.toneMapping=Ir,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wh,this.container.appendChild(this.renderer.domElement),this.camera=new Ze(40,16/9,.1,900),this.ui=new al(this),this.tourney=new ll,this.touch=uu(),this.touchPad=null,this.touch&&this.ensureTouchPad(),this.match=null,this.paused=!1,this.clock=new Bs,window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>{!this.match||this.match.opts.demo||this.match.state==="end"||(e.code==="Escape"||e.code==="KeyP"&&!this.match.opts.versus)&&this.togglePause()});let t=()=>dt.init();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),document.addEventListener("visibilitychange",()=>{document.hidden&&this.match&&!this.match.opts.demo&&!this.paused&&this.togglePause(!0)}),this.resize()}get quality(){return this.settings.quality}ensureTouchPad(){return this.touchPad||(this.touchPad=new ol(document.getElementById("touch")),this.touchPad.setLayout(this.settings.touchLayout),this.touchPad.show(!1)),this.touchPad}async init(){this.ui.show("loading");try{await Promise.race([Promise.all(["400","700","900"].map(t=>document.fonts.load(`${t} 20px Cairo`,"\u0639\u0631\u0628\u064A"))),new Promise(t=>setTimeout(t,2500))])}catch{}this.startDemo(),this.ui.show("menu"),this.loop(),document.body.dataset.ready="1"}debugStep(t,e=1/60){let i=Math.round(t/e);for(let n=0;n<i;n++)this.match&&this.match.update(e)}setupComposer(){let t=this.match&&this.match.night,e=this.quality,i=Math.min(window.devicePixelRatio||1,e==="high"?2:e==="medium"?1.5:1);this.renderer.setPixelRatio(i),this.renderer.shadowMap.enabled=e!=="low"||!t,this.composer=null;let n=this.match&&this.match.opts.demo,r=!1;if(t&&e!=="low"||r){let o=this.renderer.getDrawingBufferSize(new tt),a=new Oe(o.x,o.y,{type:Qe,samples:e==="high"?4:0}),l=new ba(this.renderer,a);if(l.addPass(new Sa(this.match.scene,this.camera)),r){let c=new Ws(this.match.scene,this.camera,o.x,o.y);c.output=Ws.OUTPUT.Default,c.blendIntensity=.85,c.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.2,scale:1,samples:12}),l.addPass(c)}t&&l.addPass(new Gs(new tt(o.x,o.y),.5,.5,.9)),l.addPass(new Ea),this.composer=l}}resize(){let t=window.innerWidth,e=window.innerHeight;this.width=t,this.height=e,this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.fov=t/e<1.2?50:34,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(t,e)}setSetting(t,e){this.settings[t]=e;try{localStorage.setItem(fu,JSON.stringify(this.settings))}catch{}t==="volume"&&dt.setVolume(e),t==="muted"&&dt.setMuted(e),t==="quality"&&(this.setupComposer(),this.resize())}disposeMatch(){this.match&&(this.match.dispose(),this.match=null,this.composer=null)}startDemo(t,e){this.disposeMatch();let i=Object.keys(hn),n=ie(i),r=ie(i);for(;r===n;)r=ie(i);this.match=new Yr(this,{mapId:t||ie(Ba),night:e??Math.random()<.5,home:n,away:r,difficulty:"normal",controllers:[null,null],rule:{type:"time",seconds:99999},demo:!0}),this.setupComposer(),this.resize(),this.touchPad&&this.touchPad.show(!1)}makeControllers(t){return t?[new tr({keymap:"p1",gamepad:0,color:"#ffd23f",label:"\u0661"}),new tr({keymap:"p2",gamepad:1,color:"#62f0ff",label:"\u0662"})]:[new tr({keymap:"solo",gamepad:0,touch:this.touch?this.touchPad:null,color:"#ffd23f"}),null]}startFromSetup(t){let e=t.rule.startsWith("t")?{type:"time",seconds:+t.rule.slice(1)}:{type:"goals",n:+t.rule.slice(1)};this.startMatch({mapId:t.map,night:t.time==="night",home:t.home,away:t.away,difficulty:t.diff,versus:t.versus,rule:e})}startTourneyMatch(){let t=this.tourney.current();t&&this.startMatch({mapId:t.map,night:t.time==="night",home:"home",away:t.opp,difficulty:this.tourney.stage>=3?"hard":"normal",rule:{type:"time",seconds:180},tourney:!0,mods:[this.tourney.mods(),{}]})}startMatch(t){dt.init(),this.lastOpts=t,this.ui.hideScreens(),this.ui.show("loading"),setTimeout(()=>{this.disposeMatch();let e=this.makeControllers(t.versus);this.match=new Yr(this,{...t,controllers:e}),this.setupComposer(),this.resize(),this.paused=!1,this.ui.hideScreens(),this.touchPad&&this.touchPad.show(this.touch&&!t.versus),this.clock.getDelta()},30)}restartMatch(){this.lastOpts&&this.startMatch(this.lastOpts)}quitToMenu(t=!1){this.paused=!1,this.startDemo(),t||this.lastOpts&&this.lastOpts.tourney&&t?this.ui.showTourney():this.ui.show("menu")}togglePause(t){if(!(!this.match||this.match.opts.demo)){this.paused=t!==void 0?t:!this.paused,this.paused?this.ui.show("pause"):this.ui.hideScreens();for(let e of this.match.controllers)e&&e.clear()}}onEvent(){}loop(){requestAnimationFrame(()=>this.loop());let t=Math.min(this.clock.getDelta(),.05);this.match&&!this.paused&&this.match.update(t),this.match&&(this.composer?this.composer.render():this.renderer.render(this.match.scene,this.camera))}},ap=new pu;window.__game=ap;ap.init();})();
