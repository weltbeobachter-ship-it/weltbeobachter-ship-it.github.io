/* Independent magazine. Never accepts arbitrary outbound URLs or private catalog fields. */
(function(root){
  'use strict';
  const labels={fragrance:'Duft & Parfum',fragrances:'Düfte',skincare:'Hautpflege','beauty-skincare':'Hautpflege',makeup:'Make-up',haircare:'Haarpflege','personal-care':'Körperpflege','k-beauty':'Korean Beauty','bags-travel':'Taschen & Reisen','tech-accessories':'Technik & Accessoires',beauty:'Beauty',hair:'Haarpflege',skin:'Hautpflege'};
  const text=(v,max)=>typeof v==='string'&&v.trim()&&v.length<=max&&!/[\u0000-\u001f]/.test(v);
  const validId=v=>typeof v==='string'&&/^[a-z0-9][a-z0-9-]{0,159}$/.test(v);
  function decode(data){
    if(!data||data.schema!==1||!['pending','preview','published'].includes(data.mode)||!Array.isArray(data.products)||data.products.length>10000)throw Error('Ungültiger Katalog');
    if(data.mode==='pending'&&data.products.length)throw Error('Freigabe fehlt');
    const seen=new Set();
    return {mode:data.mode,products:data.products.map(p=>{
      if(!p||!validId(p.id)||seen.has(p.id)||!text(p.name,240)||!text(p.brand,100)||!validId(p.category)||Object.keys(p).some(k=>!['id','name','brand','category','approved'].includes(k))||data.mode==='published'&&p.approved!==true)throw Error('Ungültiges Produkt');
      seen.add(p.id);return {id:p.id,name:p.name,brand:p.brand,category:p.category};
    })};
  }
  function productLink(id){if(!validId(id))throw Error('Ungültiger Produktlink');return 'https://beqva.de/app/product?product='+encodeURIComponent(id);}
  function group(category){if(/fragrance|perfume/.test(category))return 'fragrance';if(/skin|korean|k-beauty/.test(category))return 'skin';if(/hair/.test(category))return 'hair';if(/make.?up|beauty/.test(category))return 'beauty';return category;}
  function match(items,query,category,brand){const words=query.toLocaleLowerCase('de').trim().split(/\s+/).filter(Boolean);return items.filter(p=>(category==='all'||category===p.category||category===group(p.category))&&(brand==='all'||brand===p.brand)&&words.every(w=>(p.brand+' '+p.name+' '+p.category).toLocaleLowerCase('de').includes(w)));}
  if(typeof module==='object'&&module.exports){module.exports={decode,productLink,match,group};return;}
  const d=root.document,$=id=>d.getElementById(id),el=(tag,cls,content)=>{const e=d.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=content;return e;};
  const campaigns=[{kicker:'01 / DUFTWELT',title:'Ein Duft. Dein Moment.',copy:'Entdecke die Welt der Düfte – von frisch bis warm und sinnlich.',word:'DUFT',theme:'duft',category:'fragrance'},{kicker:'02 / PFLEGERITUAL',title:'Zeit für dich.',copy:'Kleine Rituale. Bewusste Pflege. Inspiration für jeden Tag.',word:'PFLEGE',theme:'care',category:'skin'},{kicker:'03 / GESCHENKIDEE',title:'Schön, an dich zu denken.',copy:'Entdecke Beauty-Inspiration für besondere Momente.',word:'GESCHENK',theme:'gift',category:'all'}];
  let index=0,paused=root.matchMedia('(prefers-reduced-motion: reduce)').matches,timer=null,mode='pending',products=[],limit=24;
  function campaign(){const c=campaigns[index];$('campaign-kicker').textContent=c.kicker;$('campaign-title').textContent=c.title;$('campaign-text').textContent=c.copy;$('campaign-word').textContent=c.word;$('campaign-art').dataset.theme=c.theme;$('campaign-count').textContent=(index+1)+' / '+campaigns.length;}
  function move(delta){index=(index+delta+campaigns.length)%campaigns.length;campaign();}
  function playback(){root.clearInterval(timer);$('pause').textContent=paused?'Abspielen':'Pause';$('pause').setAttribute('aria-pressed',String(paused));$('campaign').classList.toggle('paused',paused);if(!paused&&!d.hidden)timer=root.setInterval(()=>move(1),6500);}
  $('prev').onclick=()=>move(-1);$('next').onclick=()=>move(1);$('pause').onclick=()=>{paused=!paused;playback();};d.addEventListener('visibilitychange',playback);campaign();playback();
  function filter(category){$('category').value=Array.from($('category').options).some(o=>o.value===category)?category:'all';$('brand').value='all';$('query').value='';limit=24;render();$('katalog').scrollIntoView({behavior:paused?'auto':'smooth'});}
  $('campaign-link').addEventListener('click',e=>{e.preventDefault();filter(campaigns[index].category);});d.querySelectorAll('[data-select]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.select)));
  function option(select,value,name){const o=el('option','',name);o.value=value;select.append(o);}
  function productCard(p){const card=el('article','product');const art=el('div','product-art');art.append(el('span','','B.'),el('small','',labels[p.category]||p.category.replaceAll('-',' ').toUpperCase()));art.setAttribute('aria-hidden','true');const body=el('div','product-body');body.append(el('p','brand-name',p.brand),el('h3','',p.name),el('p','tag',mode==='published'?'Im BEQVA-Shop ansehen':'Sortimentsvorschau · kein Verkauf'));if(mode==='published'){const a=el('a','button','Produkt entdecken ↗');a.href=productLink(p.id);body.append(a);}card.append(art,body);return card;}
  function render(){const items=match(products,$('query').value,$('category').value,$('brand').value);$('products').replaceChildren(...items.slice(0,limit).map(productCard));$('catalog-status').textContent=items.length+' / '+products.length+' Produkte';$('more').hidden=items.length<=limit;$('catalog-message').hidden=items.length>0;$('catalog-message').textContent=products.length?'Keine passenden Produkte gefunden.':'Das Sortiment wird nach der Freigabe hier automatisch angezeigt.';}
  function renderArticleAds(){for(const article of d.querySelectorAll('.story')){const trigger=article.querySelector('[data-select]');const items=match(products,'',trigger.dataset.select,'all').slice(0,3);if(!items.length)continue;const aside=el('aside','article-ad');aside.append(el('span','ad-label','EIGENWERBUNG · BEQVA'),el('strong','','Passend zum Thema'));for(const p of items){const row=el(mode==='published'?'a':'div','article-product',p.brand+' · '+p.name);if(mode==='published')row.href=productLink(p.id);aside.append(row);}article.querySelector('details').append(aside);}}
  ['query','brand','category'].forEach(id=>$(id).addEventListener(id==='query'?'input':'change',()=>{limit=24;render();}));$('more').onclick=()=>{limit+=24;render();};
  async function load(){try{const response=await root.fetch('data/catalog.json',{credentials:'omit',redirect:'error',cache:'no-cache'});if(!response.ok)throw Error('Katalog nicht erreichbar');const payload=await response.json();const data=decode(payload);mode=data.mode;products=data.products;for(const cat of [...new Set(products.flatMap(p=>[p.category,group(p.category)]))].sort())option($('category'),cat,labels[cat]||cat.replaceAll('-',' '));for(const brand of [...new Set(products.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'de')))option($('brand'),brand,brand);render();renderArticleAds();}catch{products=[];render();$('catalog-message').textContent='Der Katalog ist vorübergehend nicht verfügbar.';}}
  load();
})(typeof window==='undefined'?globalThis:window);
