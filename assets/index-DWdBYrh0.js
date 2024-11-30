(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();let m,l,o=0,f,L="",T="";const x="https://uat-api-loyalty.therealreward.com",N="b2njfBb8pnBcm3onyI4eaQzW4n12s2nf",q="4wK3xE4kLo3LeNbO";let I="",S=[],P="PUBLISHED",E=Phaser.Math.FloatBetween(2,43);const $={type:Phaser.AUTO,width:690,height:window.innerHeight,parent:"game-container",resolution:2,scene:{preload:V,create:H,update:Q}};let w=[{val:-1,label:"Jelly 1 Stick",code:"C001",weight:0,img:"reward_r001"},{val:-2,label:"Tote Bag",code:"C002",weight:0,img:"reward_r002"},{val:-3,label:"Sakkin Kid",code:"C003",weight:0,img:"reward_r003"},{val:-4,label:"Sakkin 100ml",code:"C004",weight:0,img:"reward_r004"},{val:3,label:"Sakkin Veggie",code:"C005",weight:0,img:"reward_r005"},{val:1,label:"Aojiru 1 Box",code:"C006",weight:0,img:"reward_r006"},{val:2,label:"Aojiru Gift $10",code:"C007",weight:0,img:"reward_r007"},{val:0,label:"Voucher $10",code:"C008",weight:0,img:"reward_r008"}];function j(t){return new URLSearchParams(window.location.search).get(t)}function B(t){const e=CryptoJS.enc.Utf8.parse(N),r=CryptoJS.enc.Utf8.parse(q);return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(t),e,{keySize:128/8,iv:r,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString()}const U=j("_t"),y=atob(U);var A;const R=(A=y==null?void 0:y.split("-"))==null?void 0:A.pop(),D=y.substring(0,y.lastIndexOf("-"));D&&R?(L=D,T=R):window.location.href="404";async function W(){var t,e;try{let r={key:B.call(this,L),secret:B.call(this,T)};const s=await axios.post(`${x}/partner/v1/login`,r,{headers:{"Content-Type":"application/json"}});s.data.response.status>=400&&(window.location.href="404"),s.data.response.status==200&&(I=(e=(t=s.data)==null?void 0:t.results)==null?void 0:e.token)}catch(r){console.error("Error fetching data:",r)}}async function b(){try{await W.call(),S=(await axios.post(`${x}/partner/v1/lucky-reward`,"",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`}})).data.results;let e=localStorage.getItem("rewardLinks");if(e){let r=e==null?void 0:e.split(",");for(let s=0;s<r.length;s++)_.call(this,S,r[s],"CLAIMED")}await ee.call()}catch(t){console.error("Error fetching data:",t)}}async function J(t){try{return await W.call(),(await axios.post(`${x}/partner/v1/lucky-reward/check`,{key:t},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`}})).data.results.code}catch(e){console.error("Error fetching data:",e)}}function V(){F.call(this),this.load.audio("introSound","assets/audios/intro.mp3"),this.load.audio("collectSound","assets/audios/collect.mp3"),this.load.audio("spinSound","assets/audios/spinSound.mp3"),this.load.image("resetIcon","assets/images/reset.png"),this.load.image("scanIcon","assets/images/scan.png"),this.load.image("activeIcon","assets/images/active.png"),this.load.image("forceCloseBtn","assets/images/forceClose.png"),this.load.image("reload","assets/images/reload.png"),this.load.image("background","assets/images/background.png"),this.load.image("wheel","assets/images/wheel.png"),this.load.image("bgWheelTop","assets/images/bgWheelTop.png"),this.load.image("bgWheel","assets/images/bgWheel.png"),this.load.image("pin","assets/images/pin.png"),this.load.image("spinButton","assets/images/spinButton.png"),this.load.image("spinButtonDown","assets/images/spinButtonDown.png"),this.load.image("bgReward","assets/images/blur.png"),this.load.image("box","assets/images/box.png"),this.load.image("btnClaim","assets/images/btnClaim.png"),this.load.image("icSound","assets/images/sound.png"),this.load.image("icSoundOff","assets/images/soundOff.png"),this.load.image("bgCoin","assets/images/bgCoin.png"),this.load.image("btnAdd","assets/images/add.png"),this.load.image("btnMinus","assets/images/minus.png"),this.load.image("reward_r001","assets/images/r001.png"),this.load.image("reward_r002","assets/images/r002.png"),this.load.image("reward_r003","assets/images/r003.png"),this.load.image("reward_r004","assets/images/r004.png"),this.load.image("reward_r005","assets/images/r005.png"),this.load.image("reward_r006","assets/images/r006.png"),this.load.image("reward_r007","assets/images/r007.png"),this.load.image("reward_r008","assets/images/r008.png"),this.load.spritesheet("firework","assets/images/firework.png",{frameWidth:480,frameHeight:480,endFrame:10}),this.load.script("webfont","https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js")}function F(){this.cameras.main.setBackgroundColor("#ffa93a");const t=this.add.text(this.cameras.main.width/2,this.cameras.main.height/2-30,"Loading: 0%",{font:"20px Arial",fill:"#ffffff"}).setOrigin(.5),e=this.add.graphics(),r=(this.cameras.main.width-200)/2,s=this.cameras.main.height/2,a=200,i=10,n=5;e.fillStyle(16777215,.5),e.fillRoundedRect(r,s,a,i,n);const c=this.add.graphics();this.load.on("progress",d=>{c.clear(),c.fillStyle(16777215,1),c.fillRoundedRect(r,s,a*d,i,n),t.setText(`Loading: ${Math.round(d*100)}%`)}),this.load.on("complete",()=>{c.destroy(),e.destroy(),t.destroy()}),this.load.on("complete",()=>{c.destroy(),e.destroy(),t.destroy()})}async function H(){let t=!0;await b.call(),await v.call();const e=this.sound.add("introSound"),r=this.sound.add("collectSound"),s=this.sound.add("spinSound");this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"background").setOrigin(.5,.5).setDisplaySize(this.cameras.main.width,this.cameras.main.height);const a=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2,"icSoundOff");a.setPosition(this.cameras.main.width-12,12),a.setOrigin(1,-.1),a.setScale(.5);const i=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2,"icSound");i.setPosition(this.cameras.main.width-12,12),i.setOrigin(1,-.1),i.setScale(.5);const n=this.add.sprite(50,i.y,"reload");n.setDisplaySize(32,32),n.setOrigin(1,0),n.setInteractive(),n.on("pointerdown",()=>{b.call(this)});const c=this.add.sprite(i.x-190,i.y,"scanIcon");c.setDisplaySize(36,36),c.setOrigin(1,0),c.setInteractive(),c.on("pointerdown",()=>{k.call(this)?G.call(this):u.call(this,"No Reward")});const d=this.add.sprite(100,i.y,"resetIcon");d.setDisplaySize(32,32),d.setOrigin(1,0),d.setInteractive(),d.on("pointerdown",()=>{M.call(this),b.call()});const g=this.add.sprite(i.x-i.displayWidth-10,i.y,"btnAdd");g.setScale(.7),g.setOrigin(1,0),g.setInteractive(),g.on("pointerdown",()=>{o||(o=0),o=parseInt(o)+1,localStorage.setItem("spinNumber",o),v.call(),f.setText(`${o}`)}),f=this.add.text(i.x-i.displayWidth-70,42,`${o}`,{font:"24px Arial",fill:"#000000"}),f.setOrigin(.5,1);const h=this.add.sprite(i.x-i.displayWidth-100,i.y,"btnMinus");h.setScale(.7),h.setOrigin(1,0),h.setInteractive(),h.on("pointerdown",()=>{o>0&&(o=o-1),localStorage.setItem("spinNumber",o),v.call(),f.setText(`${o}`)});const p=this.add.sprite(this.cameras.main.width/2,220,"bgWheelTop");p.setScale(.8),p.setOrigin(.5,.5);const C=this.add.sprite(this.cameras.main.width/2,450,"wheel");C.setScale(.73),C.setOrigin(.5,.5);const O=this.add.sprite(this.cameras.main.width/2,450,"bgWheel");O.setScale(.81),O.setOrigin(.5,.5),l=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height-200,"spinButton"),l.setScale(.55),l.setOrigin(.5,1),l.setInteractive(),l.on("pointerdown",()=>{l.setTexture("spinButtonDown")}),l.on("pointerup",X.bind(this,C,s,r,u)),l.on("pointerout",()=>{l.setTexture("spinButton")}),i.setInteractive(),i.on("pointerdown",()=>{t=!t,e.setMute(t),r.setMute(t),s.setMute(t),t?i.setTexture("icSound"):(i.setTexture("icSoundOff"),e.play())})}function Q(){}new Phaser.Game($);function X(t,e,r,s){if(o<1){s("Please Top up to spin!");return}l.setTexture("spinButton"),l.disableInteractive();const a=K(w),i=w.indexOf(a),n=360/w.length,c=E,d=i*n+c,h=360*Phaser.Math.Between(2,4)+d;this.tweens.add({targets:t,angle:h,ease:Phaser.Math.Easing.Cubic.Out,duration:Phaser.Math.Between(4e3,5e3),onStart:()=>e.play(),onComplete:()=>{e.stop(),r.play(),s(a.label),Y.call(this,a)}})}function K(t){const e=t.reduce((s,a)=>s+a.weight,0);let r=Math.random()*e;for(const s of t){if(r<s.weight)return s;r-=s.weight}}function Y(t){let e=S.find(p=>p.ref==t.code).item;e=e.filter(p=>p.status==P);let r=e[0].data;this.anims.create({key:"fireworkAnim",frames:this.anims.generateFrameNumbers("firework",{frames:[0,1,2,3,4,5,6,7,8,9]}),frameRate:16,repeat:-1}),te.call(this,r),_.call(this,S,r,"CLAIMED"),z.call();const s=this.add.sprite(200,100,"firework");s.play("fireworkAnim",!0),s.setDepth(1e3),s.setDisplaySize(250,250);const a=this.add.sprite(100,300,"firework");a.play("fireworkAnim",!0),a.setDepth(1e3),a.setDisplaySize(200,200);const i=this.add.sprite(this.cameras.main.width-75,250,"firework");i.play("fireworkAnim",!0),i.setDepth(1e3),i.setDisplaySize(150,150);const n=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"bgReward");n.setOrigin(.5,.5),n.setDisplaySize(this.cameras.main.width,this.cameras.main.height);const c=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2-100,`${t.img}`);c.setOrigin(.5,.5),c.setScale(.25);const d={font:"32px Charm",fill:"#ffffff",align:"center",resolution:2},g=this.add.text(this.cameras.main.centerX,c.y+c.displayHeight/2-140,`Congratulations!
You won ${t.label}`,d);g.setOrigin(.5,.5);const h=this.add.sprite(this.cameras.main.width-50,50,"forceCloseBtn");h.setOrigin(.5,.5),h.setScale(1),h.setInteractive(),setTimeout(()=>{n.destroy(),g.destroy(),c.destroy(),s.destroy(),a.destroy(),i.destroy(),h.destroy(),m&&(m.destroy(),m=null,this.textures.exists("qrCanvas")&&this.textures.remove("qrCanvas")),l.setInteractive()},4e3)}function G(){this.anims.create({key:"fireworkAnim",frames:this.anims.generateFrameNumbers("firework",{frames:[0,1,2,3,4,5,6,7,8,9]}),frameRate:16,repeat:-1});const t=this.add.sprite(200,100,"firework");t.play("fireworkAnim",!0),t.setDepth(1e3),t.setDisplaySize(250,250);const e=this.add.sprite(100,300,"firework");e.play("fireworkAnim",!0),e.setDepth(1e3),e.setDisplaySize(200,200);const r=this.add.sprite(this.cameras.main.width-75,250,"firework");r.play("fireworkAnim",!0),r.setDepth(1e3),r.setDisplaySize(150,150);const s=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"bgReward");s.setOrigin(.5,.5),s.setDisplaySize(this.cameras.main.width,this.cameras.main.height);const a=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/2-100,"reward_r001");a.setOrigin(.5,.5),a.setScale(.25),Z.call(this,k.call(this),a);const i=this.add.image(this.cameras.main.centerX,this.cameras.main.height-300,"btnClaim");i.setOrigin(.5,.5),i.setScale(.7),i.setInteractive();const n=this.add.sprite(this.cameras.main.width-50,50,"forceCloseBtn");n.setOrigin(.5,.5),n.setScale(1),n.setInteractive(),i.on("pointerdown",async()=>{let c=await J.call(this,k.call(this));if(!c){u("Something went wrong");return}if(c=="00"){u("Reward Not Claimed");return}else if(c=="02"){u("Reward link is invalid");return}M.call(this),await b.call(),u("Claim Success!"),s.destroy(),a.destroy(),i.destroy(),t.destroy(),e.destroy(),r.destroy(),n.destroy(),m&&(m.destroy(),m=null,this.textures.exists("qrCanvas")&&this.textures.remove("qrCanvas")),l.setInteractive(),z.call()}),n.on("pointerdown",async()=>{s.destroy(),a.destroy(),i.destroy(),t.destroy(),e.destroy(),r.destroy(),n.destroy(),m&&(m.destroy(),m=null,this.textures.exists("qrCanvas")&&this.textures.remove("qrCanvas")),l.setInteractive()})}function _(t,e,r){t.forEach(s=>{s.item.forEach(a=>{a.data.includes(e)&&(a.status=r)})})}function Z(t,e){const r=new QRious({value:t,size:200}),s=new Image;s.src=r.toDataURL(),s.onload=()=>{const a=this.textures.createCanvas("qrCanvas",s.width,s.height);a.context.drawImage(s,0,0),a.refresh(),m=this.add.image(e.x,e.y+e.displayHeight/2-16,"qrCanvas"),m.setOrigin(.5,1)},s.onerror=()=>{console.error("Failed to load QR code image.")}}function v(){const t=localStorage.getItem("spinNumber");t&&(o=t),l&&(o==0?l.disableInteractive():l.setInteractive())}async function ee(){w=w.map(t=>{let e=S.find(s=>s.ref===t.code);const r=e?e.item.filter(s=>s.status===P).length:0;return{...t,weight:r}})}function z(){o&&o>0?o=o-1:o=0,l&&(o==0?l.disableInteractive():l.setInteractive()),localStorage.setItem("spinNumber",o),f.setText(`${o}`)}function u(t){const e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3e3)}function te(t){let e=k.call(this);if(e[0]){let r=(e==null?void 0:e.split(","))||[];r.push(t),localStorage.setItem("rewardLinks",r.join(","))}}function k(){return localStorage.getItem("rewardLinks")}function M(){return localStorage.removeItem("rewardLinks")}
