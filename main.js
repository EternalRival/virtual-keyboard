(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var d=s.getElementsByTagName("script");if(d.length)for(var i=d.length-1;i>-1&&!t;)t=d[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=new Map([["Backquote",{locale:{en:{default:"`",shifted:"~"},ru:{default:"ё",shifted:"Ё"}}}],["Digit1",{locale:{en:{default:"1",shifted:"!"},ru:{default:"1",shifted:"!"}}}],["Digit2",{locale:{en:{default:"2",shifted:"@"},ru:{default:"2",shifted:'"'}}}],["Digit3",{locale:{en:{default:"3",shifted:"#"},ru:{default:"3",shifted:"№"}}}],["Digit4",{locale:{en:{default:"4",shifted:"$"},ru:{default:"4",shifted:";"}}}],["Digit5",{locale:{en:{default:"5",shifted:"%"},ru:{default:"5",shifted:"%"}}}],["Digit6",{locale:{en:{default:"6",shifted:"^"},ru:{default:"6",shifted:":"}}}],["Digit7",{locale:{en:{default:"7",shifted:"&"},ru:{default:"7",shifted:"?"}}}],["Digit8",{locale:{en:{default:"8",shifted:"*"},ru:{default:"8",shifted:"*"}}}],["Digit9",{locale:{en:{default:"9",shifted:"("},ru:{default:"9",shifted:"("}}}],["Digit0",{locale:{en:{default:"0",shifted:")"},ru:{default:"0",shifted:")"}}}],["Minus",{locale:{en:{default:"-",shifted:"_"},ru:{default:"-",shifted:"_"}}}],["Equal",{locale:{en:{default:"=",shifted:"+"},ru:{default:"=",shifted:"+"}}}],["Backspace",{locale:{en:{default:"⌫",shifted:"⌫"},ru:{default:"⌫",shifted:"⌫"}}}],["Delete",{locale:{en:{default:"␡",shifted:"␡"},ru:{default:"␡",shifted:"␡"}}}],["Tab",{locale:{en:{default:"↹",shifted:"↹"},ru:{default:"↹",shifted:"↹"}}}],["KeyQ",{locale:{en:{default:"q",shifted:"Q"},ru:{default:"й",shifted:"Й"}}}],["KeyW",{locale:{en:{default:"w",shifted:"W"},ru:{default:"ц",shifted:"Ц"}}}],["KeyE",{locale:{en:{default:"e",shifted:"E"},ru:{default:"у",shifted:"У"}}}],["KeyR",{locale:{en:{default:"r",shifted:"R"},ru:{default:"к",shifted:"К"}}}],["KeyT",{locale:{en:{default:"t",shifted:"T"},ru:{default:"е",shifted:"Е"}}}],["KeyY",{locale:{en:{default:"y",shifted:"Y"},ru:{default:"н",shifted:"Н"}}}],["KeyU",{locale:{en:{default:"u",shifted:"U"},ru:{default:"г",shifted:"Г"}}}],["KeyI",{locale:{en:{default:"i",shifted:"I"},ru:{default:"ш",shifted:"Ш"}}}],["KeyO",{locale:{en:{default:"o",shifted:"O"},ru:{default:"щ",shifted:"Щ"}}}],["KeyP",{locale:{en:{default:"p",shifted:"P"},ru:{default:"з",shifted:"З"}}}],["BracketLeft",{locale:{en:{default:"[",shifted:"{"},ru:{default:"х",shifted:"Х"}}}],["BracketRight",{locale:{en:{default:"]",shifted:"}"},ru:{default:"ъ",shifted:"Ъ"}}}],["Backslash",{locale:{en:{default:"\\",shifted:"|"},ru:{default:"\\",shifted:"/"}}}],["CapsLock",{locale:{en:{default:"⇪",shifted:"⇪"},ru:{default:"⇪",shifted:"⇪"}}}],["KeyA",{locale:{en:{default:"a",shifted:"A"},ru:{default:"ф",shifted:"Ф"}}}],["KeyS",{locale:{en:{default:"s",shifted:"S"},ru:{default:"ы",shifted:"Ы"}}}],["KeyD",{locale:{en:{default:"d",shifted:"D"},ru:{default:"в",shifted:"В"}}}],["KeyF",{locale:{en:{default:"f",shifted:"F"},ru:{default:"а",shifted:"А"}}}],["KeyG",{locale:{en:{default:"g",shifted:"G"},ru:{default:"п",shifted:"П"}}}],["KeyH",{locale:{en:{default:"h",shifted:"H"},ru:{default:"р",shifted:"Р"}}}],["KeyJ",{locale:{en:{default:"j",shifted:"J"},ru:{default:"о",shifted:"О"}}}],["KeyK",{locale:{en:{default:"k",shifted:"K"},ru:{default:"л",shifted:"Л"}}}],["KeyL",{locale:{en:{default:"l",shifted:"L"},ru:{default:"д",shifted:"Д"}}}],["Semicolon",{locale:{en:{default:";",shifted:":"},ru:{default:"ж",shifted:"Ж"}}}],["Quote",{locale:{en:{default:"'",shifted:'"'},ru:{default:"э",shifted:"Э"}}}],["Enter",{locale:{en:{default:"↵",shifted:"↵"},ru:{default:"↵",shifted:"↵"}}}],["ShiftLeft",{locale:{en:{default:"⇧",shifted:"⇧"},ru:{default:"⇧",shifted:"⇧"}}}],["KeyZ",{locale:{en:{default:"z",shifted:"Z"},ru:{default:"я",shifted:"Я"}}}],["KeyX",{locale:{en:{default:"x",shifted:"X"},ru:{default:"ч",shifted:"Ч"}}}],["KeyC",{locale:{en:{default:"c",shifted:"C"},ru:{default:"с",shifted:"С"}}}],["KeyV",{locale:{en:{default:"v",shifted:"V"},ru:{default:"м",shifted:"М"}}}],["KeyB",{locale:{en:{default:"b",shifted:"B"},ru:{default:"и",shifted:"И"}}}],["KeyN",{locale:{en:{default:"n",shifted:"N"},ru:{default:"т",shifted:"Т"}}}],["KeyM",{locale:{en:{default:"m",shifted:"M"},ru:{default:"ь",shifted:"Ь"}}}],["Comma",{locale:{en:{default:",",shifted:"<"},ru:{default:"б",shifted:"Б"}}}],["Period",{locale:{en:{default:".",shifted:">"},ru:{default:"ю",shifted:"Ю"}}}],["Slash",{locale:{en:{default:"/",shifted:"?"},ru:{default:".",shifted:","}}}],["ArrowUp",{locale:{en:{default:"↑",shifted:"↑"},ru:{default:"↑",shifted:"↑"}}}],["ShiftRight",{locale:{en:{default:"⇧",shifted:"⇧"},ru:{default:"⇧",shifted:"⇧"}}}],["ControlLeft",{locale:{en:{default:"⎈",shifted:"⎈"},ru:{default:"⎈",shifted:"⎈"}}}],["MetaLeft",{locale:{en:{default:"⊞",shifted:"⊞"},ru:{default:"⊞",shifted:"⊞"}}}],["AltLeft",{locale:{en:{default:"⎇",shifted:"⎇"},ru:{default:"⎇",shifted:"⎇"}}}],["Space",{locale:{en:{default:" ",shifted:" "},ru:{default:" ",shifted:" "}}}],["AltRight",{locale:{en:{default:"⎇",shifted:"⎇"},ru:{default:"⎇",shifted:"⎇"}}}],["ArrowLeft",{locale:{en:{default:"←",shifted:"←"},ru:{default:"←",shifted:"←"}}}],["ArrowDown",{locale:{en:{default:"↓",shifted:"↓"},ru:{default:"↓",shifted:"↓"}}}],["ArrowRight",{locale:{en:{default:"→",shifted:"→"},ru:{default:"→",shifted:"→"}}}],["ControlRight",{locale:{en:{default:"⎈",shifted:"⎈"},ru:{default:"⎈",shifted:"⎈"}}}]]);class s{static prefix="[er-virtual-keyboard]";static set(e,t){localStorage[this.prefix+e]=JSON.stringify({value:t})}static get(e,t){const s=localStorage[this.prefix+e];return s?JSON.parse(s).value:t||null}}class d{constructor(e,t,s,d){const i=document.createElement(e);t&&(i.className=t),s&&Object.assign(i,s),d&&d.append(i),this.node=i}append(...e){this.node.append(...e.map((e=>(e=>"string"==typeof e?document.createTextNode(e):e instanceof d?e.node:e)(e))))}}class i extends d{constructor(e,t,s,d){super("button",`${s} ${e}`,{},d),this.data=t}get value(){return this.node.value}setKey(e,{shift:t,caps:s}){const d=this.data.locale[e][t?"shifted":"default"];this.node.value=s?d[t?"toLowerCase":"toUpperCase"]():d}}class l extends d{keys=new Map;mods={ShiftLeft:!1,ShiftRight:!1,CapsLock:!1,AltLeft:!1};constructor(e,s,l){super("ul","keyboard",s,l),this.textField=e,t.forEach(((e,t)=>{const s=new d("li","keyboard__item",null,this.node),l=new i(t,e,"keyboard__key",s.node);this.keys.set(t,l)})),this.mods=new Proxy(this.mods,{get:(e,t)=>e[t],set:(e,t,s)=>(Object.assign(e,{[t]:s}),this.getNode(t).classList[s?"add":"remove"]("toggled"),this.renderLayout(),!0)});const a={Backspace:()=>e.useAction("backspace"),Delete:()=>e.useAction("delete"),Tab:()=>e.useAction("tab"),Enter:()=>e.useAction("enter"),CapsLock:()=>{this.mods.CapsLock=!this.mods.CapsLock},ShiftLeft:({repeat:e})=>{this.mods.ShiftLeft=e||!this.mods.ShiftLeft,this.mods.AltLeft&&this.switchLocale()},ShiftRight:({repeat:e})=>{this.mods.ShiftRight=e||!this.mods.ShiftRight},ControlLeft:()=>{},ControlRight:()=>{},AltLeft:()=>{this.mods.AltLeft=!this.mods.AltLeft,this.mods.ShiftLeft&&this.switchLocale()},AltRight:()=>{},MetaLeft:()=>{},ArrowUp:()=>e.useAction("up"),ArrowLeft:()=>e.useAction("left"),ArrowDown:()=>e.useAction("down"),ArrowRight:()=>e.useAction("right"),default:(t,{value:s})=>{e.useAction("insert",s),t.shiftKey||(this.mods.ShiftLeft=!1,this.mods.ShiftRight=!1)}};this.useHandler=(e,t,s)=>(a[t]??a.default)(e,s),this.renderLayout(),this.init()}init(){window.addEventListener("keydown",(e=>{const t=this.getNode(e.code);t&&(t.classList.add("active"),this.useHandler(e,e.code,t),e.preventDefault())})),window.addEventListener("keyup",(e=>{const t=this.getNode(e.code);t&&("ShiftLeft"===e.code&&(this.mods.ShiftLeft=!1),"ShiftRight"===e.code&&(this.mods.ShiftRight=!1),t.classList.remove("active"),e.preventDefault())})),this.keys.forEach((({node:e},t)=>e.addEventListener("click",(s=>this.useHandler(s,t,e)))))}renderLayout(){this.keys.forEach((e=>{e.setKey(l.locale,{shift:this.mods.ShiftLeft||this.mods.ShiftRight,caps:this.mods.CapsLock})}))}switchLocale(){const e="en"===l.locale?"ru":"en";l.locale=e,[this.mods.ShiftLeft,this.mods.AltLeft]=[!1,!1]}getNode(e){return this.keys.get(e)?.node}static set locale(e){s.set("locale",e)}static get locale(){return s.get("locale","en")}}const a=e.p+"c4e573428c57576dc136.jpg",f=e.p+"d108ad65c5881b9fe9bc.mp4";class o extends d{constructor(e){super("video","bg-video",{autoplay:!0,loop:!0,muted:!0,poster:a},e);const t=new d("source","bg-video__source",{src:f,type:"video/mp4"});this.append(t)}}const n=e.p+"f17adfe119861945d686.webm";class u extends d{static quack=new Audio(n);constructor(e,t){super("span","duck",{textContent:"🦆",...e},t),this.node.addEventListener("mousedown",(()=>u.sayQuack()))}static sayQuack(){return this.quack.currentTime=0,this.quack.play()}}class h extends d{constructor(e,t,s){super("textarea",e||"text-field",{autofocus:!0,rows:4,cols:60,...t},s)}useAction(e,...t){this[e](...t),this.node.blur(),this.node.focus()}insert(e){const{selectionStart:t,selectionEnd:s,value:d}=this.node,[i,l]=[t,s];this.node.value=`${d.slice(0,i)}${e}${d.slice(l)}`,this.node.selectionEnd=i+e.length}enter(){this.insert("\n")}tab(){this.insert("\t")}backspace(){const{selectionStart:e,selectionEnd:t,value:s}=this.node,[d,i]=[e-(e===t),t];i&&(this.node.value=`${s.slice(0,d)}${s.slice(i)}`,this.node.selectionEnd=d)}delete(){const{selectionStart:e,selectionEnd:t,value:s}=this.node,[d,i]=[e,t+(e===t)];this.node.value=`${s.slice(0,d)}${s.slice(i)}`,this.node.selectionEnd=d}left(){this.node.selectionStart-=1,this.node.selectionEnd=this.node.selectionStart}right(){this.node.selectionEnd+=1,this.node.selectionStart=this.node.selectionEnd}up(){const{selectionStart:e,cols:t,value:s}=this.node;this.node.selectionEnd=Math.max(s.lastIndexOf("\n",e-1),e-t-1,0),this.node.selectionStart=this.node.selectionEnd}down(){const{cols:e,selectionEnd:t,value:s}=this.node;this.node.selectionEnd=Math.min(s.indexOf("\n",t+1),t+e+1,s.length),this.node.selectionStart=this.node.selectionEnd}}new class{constructor(e){this.root=e}run(){const e=new o(document.body),t=new d("main","main"),s=new d("section","section"),i=new h,a=new d("h1","heading",{textContent:"Virtual Keyboard"}),f=new u,n=new l(i),c=new d("p","disclaimer",{innerText:"The keyboard was created in the Windows 10 OS\nCombination for language switch: "}),r=new d("span","combination",{textContent:"left alt[⎇] + shift[⇧]",onclick:()=>n.switchLocale()});this.root.append(e.node,t.node),t.append(s),a.append(f),c.append(r),s.append(a,i,n,c)}}(document.body).run()})();