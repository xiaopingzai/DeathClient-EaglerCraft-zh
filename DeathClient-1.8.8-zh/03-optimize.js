
(function(){if(window.__dcVKeys)return;window.__dcVKeys=true;var closed=false;
function fK(t,c,k,kc){try{var e=new KeyboardEvent(t,{key:k,code:c,keyCode:kc,which:kc,bubbles:true,cancelable:true,view:window});window.dispatchEvent(e);}catch(e){}}
function pK(c,k,kc){fK('keydown',c,k,kc);setTimeout(function(){fK('keyup',c,k,kc);},60);}
function pC(mc,mk,mkc,kc,k,k2){fK('keydown',mc,mk,mkc);setTimeout(function(){fK('keydown',kc,k,k2);setTimeout(function(){fK('keyup',kc,k,k2);setTimeout(function(){fK('keyup',mc,mk,mkc);},90);},80);},110);}
var M=[['Esc','Escape','Escape',27],['Tab','Tab','Tab',9],['E 背包','KeyE','e',69],['Q 丢弃','KeyQ','q',81],['T 聊天','KeyT','t',84],['F','KeyF','f',70],['G','KeyG','g',71],['B','KeyB','b',66],['空格','Space',' ',32]];
var D=[['右Shift','ShiftRight','Shift',16],['左Shift','ShiftLeft','Shift',16],['Ctrl','ControlLeft','Control',17],['Alt','AltLeft','Alt',18]];
var F=[];for(var i=1;i<=12;i++)F.push(['F'+i,'F'+i,'F'+i,111+i]);
var C=[['F3+G 区块','F3','F3',114,'KeyG','g',71],['F3+B 碰撞','F3','F3',114,'KeyB','b',66],['F3+N 旁观','F3','F3',114,'KeyN','n',78],['F3+T 重载','F3','F3',114,'KeyT','t',84]];
var T=[['材质包','resource'],['FPS','fps'],['优化','optimize'],['右键:关','rightclick'],['开放世界','openworld']];
function mount(){if(closed||document.querySelector('#__dcvk'))return;
var s=document.createElement('style');s.textContent='#__dcvk{position:fixed;right:6px;top:20%;z-index:2147483000;font-family:PingFang SC,Microsoft YaHei,sans-serif;user-select:none;touch-action:none;background:rgba(20,20,24,0.78);border:1px solid rgba(255,255,255,0.18);border-radius:12px;padding:6px;color:#fff;}#__dcvk .hd{font-size:11px;text-align:center;padding:2px 6px 4px;color:#9ecbff;display:flex;justify-content:space-between;}#__dcvk .hd .x{background:rgba(255,90,90,0.3);border-radius:6px;padding:0 6px;cursor:pointer;font-size:14px;}#__dcvk .row{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;}#__dcvk .k{min-width:44px;text-align:center;font-size:12px;padding:6px 4px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.16);border-radius:7px;cursor:pointer;}#__dcvk .k.mod{background:rgba(255,190,70,0.22);border-color:rgba(255,190,70,0.4);}#__dcvk .k.combo{background:rgba(120,220,120,0.16);border-color:rgba(120,220,120,0.35);}#__dcvk .k.tool{background:rgba(180,120,220,0.16);border-color:rgba(180,120,220,0.35);}#__dcvk .sec{font-size:10px;color:#8fa3bb;text-align:center;margin:5px 0 2px;}#__dcvk_show{position:fixed;right:6px;top:6px;z-index:2147483000;background:rgba(20,20,24,0.78);border:1px solid rgba(255,255,255,0.18);border-radius:8px;padding:6px 10px;color:#9ecbff;font-family:sans-serif;font-size:12px;cursor:pointer;display:none;}';
document.head.appendChild(s);var sh=document.createElement('div');sh.id='__dcvk_show';sh.textContent='虚拟键盘';sh.onclick=function(){closed=false;sh.style.display='none';mount();};document.body.appendChild(sh);
var r=document.createElement('div');r.id='__dcvk';var h='<div class="hd"><span>虚拟按键</span><span class="x" id="__dcvx">×</span></div><div class="bd">';
h+='<div class="sec">常用</div><div class="row">';M.forEach(function(k){h+='<div class="k" data-c="'+k[1]+'" data-k="'+k[2]+'" data-kc="'+k[3]+'">'+k[0]+'</div>';});
h+='</div><div class="sec">修饰</div><div class="row">';D.forEach(function(k){h+='<div class="k mod" data-c="'+k[1]+'" data-k="'+k[2]+'" data-kc="'+k[3]+'">'+k[0]+'</div>';});
h+='</div><div class="sec">功能键</div><div class="row">';F.forEach(function(k){h+='<div class="k" data-c="'+k[1]+'" data-k="'+k[2]+'" data-kc="'+k[3]+'">'+k[0]+'</div>';});
h+='</div><div class="sec">组合键</div><div class="row">';C.forEach(function(k){h+='<div class="k combo" data-combo="'+k.join('|')+'">'+k[0]+'</div>';});
h+='</div><div class="sec">工具</div><div class="row">';T.forEach(function(k){h+='<div class="k tool" data-tool="'+k[1]+'">'+k[0]+'</div>';});
h+='</div></div>';r.innerHTML=h;document.body.appendChild(r);
document.getElementById('__dcvx').onclick=function(){closed=true;r.remove();sh.style.display='block';};
r.querySelectorAll('.k:not(.combo)').forEach(function(e){e.onclick=function(){pK(e.dataset.c,e.dataset.k,parseInt(e.dataset.kc));};});
r.querySelectorAll('.k.combo').forEach(function(e){e.onclick=function(){var p=e.dataset.combo.split('|');pC(p[0],p[1],parseInt(p[2]),p[3],p[4],parseInt(p[5]));};});
r.querySelectorAll('.k.tool').forEach(function(e){e.onclick=function(){var t=e.dataset.tool;
// 真正的功能：模拟键盘按键
if(t==='fps'){pK('F3','F3',114);} // F3显示调试信息（包含FPS）
else if(t==='optimize'){pK('F6','F6',117);} // F6通常是优化/快捷菜单
else if(t==='rightclick'){pK('V','v',86);} // V键切换各种模式
else if(t==='openworld'){pK('Esc','Escape',27);} // Esc打开菜单，再手动选开放世界
else if(t==='resource'){pK('Esc','Escape',27);} // Esc打开菜单，再手动选资源包
};});
}mount();setInterval(mount,3000);})();
