(function(){
  var btn=document.querySelector('.menu-btn'),d=document.getElementById('drawer'),x=d.querySelector('.drawer__close');
  function set(o){d.classList.toggle('is-open',o);btn.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';if(o)x.focus();else btn.focus();}
  btn.addEventListener('click',function(){set(true)});
  x.addEventListener('click',function(){set(false)});
  d.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&d.classList.contains('is-open'))set(false)});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  // 桌機版創辦人經歷全部展開；手機版為摺疊
  var mq=window.matchMedia('(min-width:641px)');
  function syncBio(){document.querySelectorAll('.bio__g').forEach(function(g,i){g.open=mq.matches||i===0;});}
  if(document.querySelector('.bio__g')){syncBio();mq.addEventListener('change',syncBio);}
})();
