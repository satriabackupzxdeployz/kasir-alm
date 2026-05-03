
/* ============================================================
   ALANSHPEE — Restaurant POS (Single File)
   ============================================================ */
const STORE = {
  brand: "ALANSHPEE",
  tagline: "Premium Restaurant POS",
  taxRate: 0.10,
  serviceRate: 0.05,
};

/* ----------------- Storage Helpers ----------------- */
const LS = {
  get(k, d){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d }catch(e){return d} },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)) }
};

/* ----------------- Default Menu (30 items) ----------------- */
const DEFAULT_MENU = [
  // Makanan (10)
  {id:'m1',name:'Beef Burger Deluxe',price:65000,cat:'food',badge:'Best Seller',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',desc:'Beef patty, cheddar, smoky sauce'},
  {id:'m2',name:'Crispy Fried Chicken',price:45000,cat:'food',badge:'Best Seller',img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80',desc:'Golden crispy, juicy inside'},
  {id:'m3',name:'Truffle French Fries',price:35000,cat:'food',badge:null,img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',desc:'Truffle oil, parmesan'},
  {id:'m4',name:'Margherita Pizza',price:78000,cat:'food',badge:'Promo',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',desc:'Mozzarella, basil, tomato'},
  {id:'m5',name:'Nasi Goreng Spesial',price:42000,cat:'food',badge:null,img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',desc:'Telur, ayam suwir, kerupuk'},
  {id:'m6',name:'Spaghetti Bolognese',price:55000,cat:'food',badge:null,img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80',desc:'Slow-cooked beef ragu'},
  {id:'m7',name:'Chicken Caesar Salad',price:48000,cat:'food',badge:'New',img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80',desc:'Romaine, anchovy, parmesan'},
  {id:'m8',name:'Wagyu Steak 200g',price:185000,cat:'food',badge:'Best Seller',img:'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&q=80',desc:'A4 wagyu, mushroom sauce'},
  {id:'m9',name:'Sushi Roll Platter',price:95000,cat:'food',badge:null,img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',desc:'12 pcs assorted rolls'},
  {id:'m10',name:'Mie Ayam Bakso',price:35000,cat:'food',badge:'Promo',img:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80',desc:'Mie ayam, bakso sapi, pangsit'},

  // Minuman (10)
  {id:'d1',name:'Es Kopi Susu Aren',price:25000,cat:'drink',badge:'Best Seller',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',desc:'Espresso, susu, gula aren'},
  {id:'d2',name:'Matcha Latte',price:32000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80',desc:'Premium ceremonial matcha'},
  {id:'d3',name:'Thai Iced Tea',price:22000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80',desc:'Teh tarik khas thailand'},
  {id:'d4',name:'Strawberry Milkshake',price:35000,cat:'drink',badge:'New',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',desc:'Real strawberry, whipped cream'},
  {id:'d5',name:'Fresh Orange Juice',price:28000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80',desc:'Hand pressed daily'},
  {id:'d6',name:'Cappuccino',price:30000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',desc:'Single origin arabica'},
  {id:'d7',name:'Lemon Mint Sparkling',price:26000,cat:'drink',badge:'Promo',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',desc:'Fresh lemon, mint, soda'},
  {id:'d8',name:'Hot Chocolate',price:28000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80',desc:'Belgian dark chocolate'},
  {id:'d9',name:'Mango Smoothie',price:33000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80',desc:'Mangga harum manis'},
  {id:'d10',name:'Iced Lychee Tea',price:24000,cat:'drink',badge:null,img:'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&q=80',desc:'Black tea, lychee jelly'},

  // Dessert (10)
  {id:'s1',name:'Tiramisu Classic',price:42000,cat:'dessert',badge:'Best Seller',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',desc:'Mascarpone, espresso ladyfingers'},
  {id:'s2',name:'Vanilla Ice Cream',price:25000,cat:'dessert',badge:null,img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',desc:'Madagascar vanilla bean'},
  {id:'s3',name:'Red Velvet Cake',price:38000,cat:'dessert',badge:'Promo',img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',desc:'Cream cheese frosting'},
  {id:'s4',name:'Glazed Donut',price:18000,cat:'dessert',badge:null,img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',desc:'Soft glazed sugar'},
  {id:'s5',name:'Choco Lava Cake',price:45000,cat:'dessert',badge:'Best Seller',img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',desc:'Molten dark chocolate'},
  {id:'s6',name:'Cheesecake NY',price:40000,cat:'dessert',badge:null,img:'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=80',desc:'New York style baked'},
  {id:'s7',name:'Macaron Box (6pcs)',price:55000,cat:'dessert',badge:'New',img:'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80',desc:'Assorted flavors'},
  {id:'s8',name:'Crème Brûlée',price:48000,cat:'dessert',badge:null,img:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80',desc:'Caramelized sugar top'},
  {id:'s9',name:'Mango Sticky Rice',price:35000,cat:'dessert',badge:null,img:'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&q=80',desc:'Thai-style coconut rice'},
  {id:'s10',name:'Brownies à la mode',price:42000,cat:'dessert',badge:'Promo',img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',desc:'Warm brownie + ice cream'},
];

/* ----------------- App State ----------------- */
const State = {
  page: 'login',          // login, customerType, table, menu, payment, receipt, admin
  user: null,             // {role:'admin'|'customer', name}
  orderType: null,        // 'dinein' | 'takeaway'
  table: null,            // 1..10
  cart: [],               // [{id, name, price, qty, img}]
  menu: LS.get('savora_menu', DEFAULT_MENU),
  transactions: LS.get('savora_tx', []),
  pendingTx: LS.get('alanshpee_pending', []),
  occupiedTables: LS.get('savora_tables', []),
  lastPendingId: null,
  adminTab: 'dashboard',
  category: 'all',
  search: '',
  payMethod: null,        // 'qris' | 'transfer' | 'cash'
  bank: 'BCA',
  cashGiven: 0,
  lastReceipt: null,
};

function persistMenu(){ LS.set('savora_menu', State.menu) }
function persistTx(){ LS.set('savora_tx', State.transactions) }
function persistTables(){ LS.set('savora_tables', State.occupiedTables) }
function persistPending(){ LS.set('alanshpee_pending', State.pendingTx) }

/* ----------------- Audio (Web Audio API) ----------------- */
let _audioCtx = null;
function audio(){ if(!_audioCtx){ try{ _audioCtx = new (window.AudioContext||window.webkitAudioContext)() }catch(e){} } return _audioCtx }
function beep(freq=600, dur=.08, type='sine', vol=.07){
  const ctx = audio(); if(!ctx) return;
  const o=ctx.createOscillator(), g=ctx.createGain();
  o.type=type; o.frequency.value=freq; g.gain.value=vol;
  o.connect(g); g.connect(ctx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime+dur);
  o.stop(ctx.currentTime+dur);
}
function clickSound(){ beep(720,.05,'square',.04) }
function addSound(){ beep(880,.06,'sine',.06); setTimeout(()=>beep(1200,.08,'sine',.05),60) }
function successSound(){
  const seq=[523,659,784,1046];
  seq.forEach((f,i)=>setTimeout(()=>beep(f,.12,'triangle',.07), i*100));
}
function errorSound(){ beep(200,.18,'sawtooth',.06) }

/* ----------------- Utility ----------------- */
const fmtIDR = n => 'Rp ' + Math.round(n).toLocaleString('id-ID');
const now = () => new Date();
const fmtDateTime = d => d.toLocaleString('id-ID',{dateStyle:'medium', timeStyle:'short'});
const uid = () => 'TX'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,5).toUpperCase();
const $ = sel => document.querySelector(sel);
const html = (s,...v) => s.reduce((a,c,i)=>a+c+(v[i]??''),''); // template tag passthrough

/* ----------------- Toast ----------------- */
function toast(msg, type='success'){
  const host = $('#toast-host');
  const el = document.createElement('div');
  const colors = {success:'from-emerald-500/90 to-teal-500/90',error:'from-rose-500/90 to-red-600/90',info:'from-indigo-500/90 to-violet-500/90'};
  el.className = `toast-enter glass-strong px-4 py-3 rounded-xl text-sm flex items-center gap-3 min-w-[260px] bg-gradient-to-r ${colors[type]||colors.success} border border-white/10`;
  el.innerHTML = `<span class="text-lg">${type==='error'?'⚠':'✓'}</span><span class="font-medium">${msg}</span>`;
  host.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s, transform .3s'; el.style.opacity='0'; el.style.transform='translateY(-6px)'; setTimeout(()=>el.remove(),300) }, 2200);
}

/* ----------------- Cart Helpers ----------------- */
function cartAdd(item, fromEl){
  const ex = State.cart.find(c=>c.id===item.id);
  if(ex) ex.qty += 1;
  else State.cart.push({id:item.id,name:item.name,price:item.price,qty:1,img:item.img});
  addSound();
  if(fromEl) flyToCart(fromEl, item.img);
  toast(`${item.name} ditambahkan`,'success');
  renderCart();
}
function cartInc(id){ const it=State.cart.find(c=>c.id===id); if(it){ it.qty++; clickSound(); renderCart() } }
function cartDec(id){
  const it=State.cart.find(c=>c.id===id);
  if(!it) return;
  it.qty--; clickSound();
  if(it.qty<=0) State.cart = State.cart.filter(c=>c.id!==id);
  renderCart();
}
function cartRemove(id){ State.cart = State.cart.filter(c=>c.id!==id); clickSound(); renderCart() }
function cartClear(){ State.cart = []; renderCart() }
function cartTotals(){
  const subtotal = State.cart.reduce((a,c)=>a+c.price*c.qty,0);
  const tax = subtotal * STORE.taxRate;
  const service = State.orderType==='dinein' ? subtotal*STORE.serviceRate : 0;
  const total = subtotal + tax + service;
  return {subtotal, tax, service, total};
}

/* ----------------- Fly Animation ----------------- */
function flyToCart(srcEl, img){
  const target = $('#cart-icon-target') || $('#cart-summary');
  if(!target) return;
  const r = srcEl.getBoundingClientRect();
  const tr = target.getBoundingClientRect();
  const node = document.createElement('div');
  node.className='fly';
  node.style.cssText=`left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;transition:transform .7s cubic-bezier(.5,-0.2,.3,1.3),opacity .7s, width .7s, height .7s, border-radius .7s;background-image:url(${img});background-size:cover;background-position:center;`;
  document.body.appendChild(node);
  requestAnimationFrame(()=>{
    const dx = tr.left + tr.width/2 - (r.left + r.width/2);
    const dy = tr.top + tr.height/2 - (r.top + r.height/2);
    node.style.transform=`translate(${dx}px,${dy}px) scale(.15) rotate(20deg)`;
    node.style.opacity='0';
    node.style.borderRadius='999px';
  });
  setTimeout(()=>node.remove(), 720);
}

/* ============================================================
                      RENDER FUNCTIONS
   ============================================================ */
function go(page){ State.page=page; render() }

function render(){
  const root = $('#app');
  root.classList.remove('fade-in'); void root.offsetWidth; root.classList.add('fade-in');
  switch(State.page){
    case 'login': root.innerHTML = viewLogin(); attachLoginEvents(); break;
    case 'customerType': root.innerHTML = viewCustomerType(); break;
    case 'table': root.innerHTML = viewTable(); attachTableEvents(); break;
    case 'menu': root.innerHTML = viewMenu(); renderCart(); attachMenuEvents(); break;
    case 'payment': root.innerHTML = viewPayment(); attachPaymentEvents(); break;
    case 'receipt': root.innerHTML = viewReceipt(); break;
    case 'waiting': root.innerHTML = viewWaiting(); attachWaitingEvents(); break;
    case 'admin': root.innerHTML = viewAdmin(); attachAdminEvents(); break;
    default: root.innerHTML = viewLogin(); attachLoginEvents();
  }
  startClock();
}

/* ----------------- Top Bar (shared) ----------------- */
function topBar(extra=''){
  const date = now();
  return html`
  <div class="flex items-center justify-between px-6 py-4 glass-strong border-b border-white/10 sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl btn-grad grid place-items-center font-bold text-white shadow-lg" data-testid="brand-mark">S</div>
      <div>
        <div class="font-display text-xl tracking-wide leading-none">${STORE.brand}</div>
        <div class="text-[10px] uppercase tracking-[0.2em] text-white/50">${STORE.tagline}</div>
      </div>
    </div>
    <div class="hidden md:flex items-center gap-4 text-sm text-white/70">
      <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot text-emerald-400"></span><span>Online</span></div>
      <div class="clock" id="topclock">${date.toLocaleTimeString('id-ID')}</div>
      <div class="text-white/50">${date.toLocaleDateString('id-ID',{weekday:'long', day:'numeric', month:'long'})}</div>
    </div>
    <div class="flex items-center gap-2">${extra}</div>
  </div>`;
}
let _clockTimer=null;
function startClock(){
  if(_clockTimer) clearInterval(_clockTimer);
  _clockTimer = setInterval(()=>{
    const el = document.getElementById('topclock');
    if(el) el.textContent = new Date().toLocaleTimeString('id-ID');
  }, 1000);
}

/* ----------------- LOGIN VIEW ----------------- */
function viewLogin(){
  return html`
  <div class="min-h-screen grid lg:grid-cols-2">
    <div class="relative hidden lg:flex items-center justify-center p-12 overflow-hidden">
      <div class="absolute inset-0 opacity-60" style="background:radial-gradient(600px 400px at 30% 30%, rgba(255,122,24,.35), transparent 60%), radial-gradient(500px 400px at 70% 80%, rgba(255,61,127,.35), transparent 60%)"></div>
      <div class="relative max-w-md slide-up">
        <div class="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">${STORE.tagline}</div>
        <h1 class="font-display text-6xl leading-[1.05] mb-6"><span class="text-grad">Rasa istimewa</span><br/>kasir cerdas.</h1>
        <p class="text-white/60 text-lg leading-relaxed">Sistem POS modern untuk restoran masa kini — cepat, intuitif, dan elegan. Dirancang untuk pelayan, kasir, dan pelanggan.</p>
        <div class="mt-10 grid grid-cols-3 gap-3">
          ${[['30+','Menu kurasi'],['10','Meja siap'],['24/7','Operasional']].map(([n,l])=>html`
            <div class="glass rounded-xl p-4">
              <div class="text-2xl font-bold text-grad">${n}</div>
              <div class="text-xs text-white/50 mt-1">${l}</div>
            </div>`).join('')}
        </div>
        <div class="mt-10 overflow-hidden">
          <div class="ticker flex gap-10 text-white/30 text-sm whitespace-nowrap">
            ${Array(2).fill(0).map(()=>'★ Beef Burger · Wagyu Steak · Es Kopi Susu Aren · Tiramisu · Margherita Pizza · Matcha Latte · Choco Lava · Sushi Roll · ').join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-md slide-up">
        <div class="glass-strong rounded-3xl p-8 ring-soft">
          <div class="flex items-center gap-3 mb-1">
            <div class="w-12 h-12 rounded-2xl btn-grad grid place-items-center font-bold text-white text-xl">S</div>
            <div>
              <div class="font-display text-2xl">${STORE.brand}</div>
              <div class="text-xs text-white/50">Selamat datang kembali</div>
            </div>
          </div>
          <h2 class="font-display text-3xl mt-6 mb-2">Pilih akses Anda</h2>
          <p class="text-white/50 text-sm mb-6">Masuk sebagai admin untuk mengelola sistem, atau sebagai pelanggan untuk memesan.</p>

          <div class="grid grid-cols-2 gap-3" id="role-toggle">
            <button data-testid="role-customer" class="role-btn active glass rounded-2xl p-4 text-left transition" data-role="customer">
              <div class="text-2xl">🍽️</div>
              <div class="font-semibold mt-2">Customer</div>
              <div class="text-xs text-white/50">Pesan makanan</div>
            </button>
            <button data-testid="role-admin" class="role-btn glass rounded-2xl p-4 text-left transition" data-role="admin">
              <div class="text-2xl">🛠️</div>
              <div class="font-semibold mt-2">Admin</div>
              <div class="text-xs text-white/50">Kelola sistem</div>
            </button>
          </div>

          <form id="login-form" class="mt-6 space-y-4">
            <div id="admin-fields" class="space-y-3 hidden">
              <div>
                <label class="text-xs uppercase tracking-widest text-white/50">Username</label>
                <input data-testid="login-username" id="login-user" class="w-full glass rounded-xl px-4 py-3 mt-1 text-sm" placeholder="alan123" />
              </div>
              <div>
                <label class="text-xs uppercase tracking-widest text-white/50">Password</label>
                <input data-testid="login-password" id="login-pass" type="password" class="w-full glass rounded-xl px-4 py-3 mt-1 text-sm" placeholder="••••" />
              </div>
              <div class="text-xs text-white/40">Hint: <span class="text-white/60">alan123 / 2010</span></div>
            </div>

            <div id="customer-fields" class="space-y-3">
              <div>
                <label class="text-xs uppercase tracking-widest text-white/50">Nama (opsional)</label>
                <input data-testid="customer-name" id="cust-name" class="w-full glass rounded-xl px-4 py-3 mt-1 text-sm" placeholder="Tamu / nama Anda" />
              </div>
            </div>

            <button data-testid="login-submit" type="submit" class="w-full btn-grad rounded-xl py-3 font-semibold tracking-wide text-white">Masuk</button>
          </form>

          <div class="mt-6 text-center text-xs text-white/40">© ${new Date().getFullYear()} ${STORE.brand}. All rights reserved.</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

function attachLoginEvents(){
  const roleBtns = document.querySelectorAll('.role-btn');
  let role='customer';
  const update=()=>{
    roleBtns.forEach(b=>{
      const on=b.dataset.role===role;
      b.classList.toggle('active', on);
      b.style.background = on ? 'linear-gradient(135deg,rgba(255,122,24,.18),rgba(255,61,127,.18))' : '';
      b.style.borderColor = on ? 'rgba(255,61,127,.4)' : '';
    });
    document.getElementById('admin-fields').classList.toggle('hidden', role!=='admin');
    document.getElementById('customer-fields').classList.toggle('hidden', role!=='customer');
  };
  roleBtns.forEach(b=>b.addEventListener('click',()=>{role=b.dataset.role; clickSound(); update()}));
  update();
  document.getElementById('login-form').addEventListener('submit', e=>{
    e.preventDefault();
    if(role==='admin'){
      const u=document.getElementById('login-user').value.trim();
      const p=document.getElementById('login-pass').value.trim();
      if(u==='admin'&&p==='123'){ State.user={role:'admin',name:'Administrator'}; toast('Selamat datang, Admin'); successSound(); go('admin'); }
      else { errorSound(); toast('Username/password salah','error') }
    } else {
      const n=document.getElementById('cust-name').value.trim() || 'Tamu';
      State.user={role:'customer',name:n}; successSound(); toast('Halo, '+n);
      go('customerType');
    }
  });
}

/* ----------------- CUSTOMER TYPE ----------------- */
function viewCustomerType(){
  return html`
  ${topBar(`<button data-testid="back-login" onclick="logout()" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">Keluar</button>`)}
  <div class="max-w-5xl mx-auto px-6 py-12 slide-up">
    <div class="text-[10px] uppercase tracking-[0.4em] text-white/50">Langkah 1 dari 3</div>
    <h2 class="font-display text-4xl md:text-5xl mt-2 mb-2">Halo, ${State.user?.name||'Tamu'}.</h2>
    <p class="text-white/60 mb-10">Pilih tipe pesanan untuk memulai.</p>

    <div class="grid md:grid-cols-2 gap-6">
      <button data-testid="order-dinein" onclick="setOrderType('dinein')" class="menu-card glass-strong rounded-3xl p-8 text-left ring-soft group">
        <div class="text-5xl">🍽️</div>
        <div class="font-display text-3xl mt-6">Dine In</div>
        <div class="text-white/55 text-sm mt-1">Makan di tempat — kami siapkan meja terbaik untuk Anda.</div>
        <div class="mt-6 flex items-center justify-between">
          <span class="text-xs uppercase tracking-widest text-white/40">+5% service</span>
          <span class="px-4 py-2 rounded-full btn-grad text-sm font-semibold">Pilih meja →</span>
        </div>
      </button>
      <button data-testid="order-takeaway" onclick="setOrderType('takeaway')" class="menu-card glass-strong rounded-3xl p-8 text-left ring-soft group">
        <div class="text-5xl">🥡</div>
        <div class="font-display text-3xl mt-6">Take Away</div>
        <div class="text-white/55 text-sm mt-1">Bawa pulang — kemasan rapi, siap dalam 10–15 menit.</div>
        <div class="mt-6 flex items-center justify-between">
          <span class="text-xs uppercase tracking-widest text-white/40">No service charge</span>
          <span class="px-4 py-2 rounded-full btn-emerald text-sm font-semibold">Lanjut ke menu →</span>
        </div>
      </button>
    </div>
  </div>`;
}
function setOrderType(t){
  State.orderType=t; clickSound();
  if(t==='dinein') go('table'); else { State.table=null; go('menu'); }
}

/* ----------------- TABLE ----------------- */
function viewTable(){
  const occupied = State.occupiedTables;
  const tiles = Array.from({length:10},(_,i)=>i+1).map(n=>{
    const occ = occupied.includes(n);
    return html`
      <button ${occ?'disabled':''} data-table="${n}" data-testid="table-${n}" class="table-tile ${occ?'occupied':''} glass rounded-2xl p-5 border border-white/10 text-left">
        <div class="flex items-center justify-between">
          <div class="text-xs uppercase tracking-widest text-white/40">${occ?'Terisi':'Tersedia'}</div>
          <div class="text-xs px-2 py-1 rounded-full ${occ?'bg-rose-500/20 text-rose-300':'bg-emerald-500/20 text-emerald-300'}">${occ?'●':'○'}</div>
        </div>
        <div class="font-display text-3xl mt-4">Meja ${String(n).padStart(2,'0')}</div>
        <div class="mt-2 text-white/40 text-xs">Kapasitas ${n%2?'2':'4'} orang</div>
      </button>`;
  }).join('');

  return html`
  ${topBar(`<button data-testid="back-type" onclick="go('customerType')" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">← Kembali</button>`)}
  <div class="max-w-6xl mx-auto px-6 py-10 slide-up">
    <div class="text-[10px] uppercase tracking-[0.4em] text-white/50">Langkah 2 dari 3</div>
    <h2 class="font-display text-4xl mt-2 mb-2">Pilih meja Anda</h2>
    <p class="text-white/60 mb-8">${10-occupied.length} dari 10 meja tersedia.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" id="tables-grid">${tiles}</div>
  </div>`;
}
function attachTableEvents(){
  document.querySelectorAll('[data-table]').forEach(b=>b.addEventListener('click',()=>{
    if(b.disabled) return;
    const n=parseInt(b.dataset.table); State.table=n; clickSound(); toast('Meja '+n+' dipilih');
    go('menu');
  }));
}

/* ----------------- MENU VIEW (Main POS) ----------------- */
function viewMenu(){
  const cats = [
    {id:'all', label:'Semua', icon:'🍱'},
    {id:'food', label:'Makanan', icon:'🍔'},
    {id:'drink', label:'Minuman', icon:'🥤'},
    {id:'dessert', label:'Dessert', icon:'🍰'},
  ];
  const orderInfo = State.orderType==='dinein' ? `Dine In · Meja ${String(State.table).padStart(2,'0')}` : 'Take Away';

  return html`
  ${topBar(`
    <div class="text-xs px-3 py-2 rounded-lg glass" data-testid="order-info">${orderInfo}</div>
    <button data-testid="back-menu" onclick="go('${State.orderType==='dinein'?'table':'customerType'}')" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">← Ubah</button>
  `)}

  <div class="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[calc(100vh-72px)]">
    <!-- Menu Side -->
    <div class="p-5 lg:p-7">
      <div class="flex flex-wrap items-center gap-3 mb-5">
        <div class="flex-1 min-w-[200px] relative">
          <input data-testid="menu-search" id="menu-search" placeholder="Cari menu… (mis. burger, kopi, tiramisu)" class="w-full glass rounded-xl pl-11 pr-4 py-3 text-sm" value="${State.search}" />
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
        </div>
        <div class="flex flex-wrap gap-2">
          ${cats.map(c=>html`
            <button data-cat="${c.id}" data-testid="cat-${c.id}" class="cat-btn glass rounded-xl px-4 py-2 text-sm ${State.category===c.id?'active':''}" style="${State.category===c.id?'background:linear-gradient(135deg,rgba(255,122,24,.2),rgba(255,61,127,.2));border-color:rgba(255,61,127,.4)':''}">
              <span>${c.icon}</span> <span class="ml-1">${c.label}</span>
            </button>`).join('')}
        </div>
      </div>

      <div id="menu-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        ${renderMenuGrid()}
      </div>
    </div>

    <!-- Cart Side -->
    <aside id="cart-panel" class="border-l border-white/10 glass-strong p-5 lg:p-6 flex flex-col" style="min-height:calc(100vh - 72px)">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-[10px] uppercase tracking-[0.3em] text-white/50">Pesanan Saat Ini</div>
          <div class="font-display text-2xl mt-1" id="cart-icon-target">Keranjang</div>
        </div>
        <button data-testid="cart-clear" onclick="if(State.cart.length){cartClear();toast('Keranjang dikosongkan')}" class="text-xs text-white/60 hover:text-white px-3 py-2 rounded-lg glass">Kosongkan</button>
      </div>

      <div id="cart-list" class="mt-4 flex-1 overflow-y-auto scrollbar pr-1 -mr-1 space-y-2"></div>

      <div id="cart-summary" class="mt-4 pt-4 border-t border-white/10 space-y-2 text-sm">
        <!-- filled by renderCart -->
      </div>

      <button data-testid="checkout-btn" id="checkout-btn" class="mt-4 btn-grad w-full rounded-xl py-3 font-semibold disabled:opacity-40 disabled:cursor-not-allowed" disabled>
        Bayar Sekarang
      </button>
    </aside>
  </div>`;
}

function renderMenuGrid(){
  let items = State.menu.filter(m=>{
    if(State.category!=='all' && m.cat!==State.category) return false;
    if(State.search && !m.name.toLowerCase().includes(State.search.toLowerCase())) return false;
    return true;
  });
  if(!items.length) return `<div class="col-span-full text-center text-white/40 py-12">Tidak ada menu cocok.</div>`;
  return items.map(m=>html`
    <div class="menu-card glass rounded-2xl overflow-hidden ring-soft cursor-pointer group" data-add="${m.id}" data-testid="menu-${m.id}">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img src="${m.img}" alt="${m.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'"/>
        ${m.badge?`<div class="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full ${m.badge==='Best Seller'?'badge-best':m.badge==='Promo'?'badge-promo':'badge-new'}">${m.badge}</div>`:''}
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div class="absolute bottom-3 right-3 w-9 h-9 rounded-full btn-grad grid place-items-center text-lg font-bold shadow-xl group-hover:scale-110 transition">+</div>
      </div>
      <div class="p-4">
        <div class="font-semibold text-[15px] leading-tight">${m.name}</div>
        <div class="text-xs text-white/50 mt-1 line-clamp-1">${m.desc||''}</div>
        <div class="mt-3 flex items-center justify-between">
          <div class="text-grad font-bold num">${fmtIDR(m.price)}</div>
          <div class="text-[10px] uppercase tracking-widest text-white/40">${m.cat==='food'?'Food':m.cat==='drink'?'Drink':'Dessert'}</div>
        </div>
      </div>
    </div>`).join('');
}

function attachMenuEvents(){
  document.querySelectorAll('.cat-btn').forEach(b=>b.addEventListener('click',()=>{
    State.category=b.dataset.cat; clickSound();
    document.getElementById('menu-grid').innerHTML = renderMenuGrid();
    bindMenuCardEvents();
    document.querySelectorAll('.cat-btn').forEach(x=>{
      const on=x.dataset.cat===State.category;
      x.style.background = on?'linear-gradient(135deg,rgba(255,122,24,.2),rgba(255,61,127,.2))':'';
      x.style.borderColor = on?'rgba(255,61,127,.4)':'';
    });
  }));
  const search = document.getElementById('menu-search');
  if(search){
    search.addEventListener('input', e=>{
      State.search = e.target.value;
      document.getElementById('menu-grid').innerHTML = renderMenuGrid();
      bindMenuCardEvents();
    });
  }
  bindMenuCardEvents();
  document.getElementById('checkout-btn').addEventListener('click', ()=>{
    if(!State.cart.length){ errorSound(); toast('Keranjang masih kosong','error'); return }
    clickSound(); go('payment');
  });
}
function bindMenuCardEvents(){
  document.querySelectorAll('[data-add]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const id = el.dataset.add;
      const m = State.menu.find(x=>x.id===id);
      if(m) cartAdd(m, el);
    });
  });
}

function renderCart(){
  const list = document.getElementById('cart-list');
  const sum = document.getElementById('cart-summary');
  const btn = document.getElementById('checkout-btn');
  if(!list || !sum) return;
  if(!State.cart.length){
    list.innerHTML = `<div class="text-center text-white/40 py-10"><div class="text-5xl mb-3">🧺</div><div class="text-sm">Belum ada pesanan</div><div class="text-xs mt-1 text-white/30">Klik menu untuk menambahkan</div></div>`;
  } else {
    list.innerHTML = State.cart.map(c=>html`
      <div class="glass rounded-xl p-3 flex gap-3 items-center fade-in" data-testid="cart-item-${c.id}">
        <img src="${c.img}" class="w-14 h-14 rounded-lg object-cover" />
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium truncate">${c.name}</div>
          <div class="text-xs text-white/50 num">${fmtIDR(c.price)}</div>
          <div class="mt-2 inline-flex items-center gap-1 glass rounded-full px-1 py-1">
            <button class="qty-btn w-7 h-7 rounded-full bg-white/10 hover:bg-white/20" data-dec="${c.id}" data-testid="dec-${c.id}">−</button>
            <span class="w-7 text-center text-sm num" data-testid="qty-${c.id}">${c.qty}</span>
            <button class="qty-btn w-7 h-7 rounded-full btn-grad" data-inc="${c.id}" data-testid="inc-${c.id}">+</button>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-bold num">${fmtIDR(c.price*c.qty)}</div>
          <button class="text-xs text-rose-400 hover:text-rose-300 mt-2" data-rm="${c.id}" data-testid="rm-${c.id}">Hapus</button>
        </div>
      </div>`).join('');
    list.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>cartInc(b.dataset.inc)));
    list.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>cartDec(b.dataset.dec)));
    list.querySelectorAll('[data-rm]').forEach(b=>b.addEventListener('click',()=>cartRemove(b.dataset.rm)));
  }
  const t = cartTotals();
  sum.innerHTML = html`
    <div class="flex justify-between text-white/70"><span>Subtotal</span><span class="num" data-testid="sum-subtotal">${fmtIDR(t.subtotal)}</span></div>
    <div class="flex justify-between text-white/70"><span>PPN 10%</span><span class="num" data-testid="sum-tax">${fmtIDR(t.tax)}</span></div>
    ${State.orderType==='dinein'?`<div class="flex justify-between text-white/70"><span>Service 5%</span><span class="num" data-testid="sum-service">${fmtIDR(t.service)}</span></div>`:''}
    <div class="flex justify-between pt-2 border-t border-white/10 text-base"><span class="text-white/80">Total</span><span class="text-grad font-bold num" data-testid="sum-total">${fmtIDR(t.total)}</span></div>
    <div class="text-[10px] text-white/40 text-right mt-1">${State.cart.reduce((a,c)=>a+c.qty,0)} item</div>
  `;
  if(btn) btn.disabled = !State.cart.length;
}

/* ----------------- PAYMENT ----------------- */
function viewPayment(){
  const t = cartTotals();
  const orderInfo = State.orderType==='dinein' ? `Dine In · Meja ${String(State.table).padStart(2,'0')}` : 'Take Away';
  return html`
  ${topBar(`<button data-testid="back-payment" onclick="go('menu')" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">← Kembali ke menu</button>`)}
  <div class="max-w-6xl mx-auto px-6 py-8 slide-up">
    <div class="text-[10px] uppercase tracking-[0.4em] text-white/50">Langkah 3 dari 3</div>
    <h2 class="font-display text-4xl mt-2 mb-1">Pembayaran</h2>
    <p class="text-white/60 mb-8">${orderInfo} · ${State.cart.reduce((a,c)=>a+c.qty,0)} item</p>

    <div class="grid lg:grid-cols-[1fr_400px] gap-6">
      <!-- Methods -->
      <div class="glass-strong rounded-3xl p-6 ring-soft">
        <div class="font-display text-2xl mb-4">Metode Pembayaran</div>
        <div class="grid sm:grid-cols-3 gap-3" id="pay-methods">
          ${[
            ['qris','QRIS','Scan & bayar instan','📱'],
            ['transfer','Transfer','BCA · BRI · Mandiri','🏦'],
            ['cash','Tunai','Bayar langsung di kasir','💵'],
          ].map(([id,t,d,i])=>html`
            <button data-pay="${id}" data-testid="pay-${id}" class="pay-btn glass rounded-2xl p-4 text-left">
              <div class="text-3xl">${i}</div>
              <div class="font-semibold mt-3">${t}</div>
              <div class="text-xs text-white/50 mt-1">${d}</div>
            </button>`).join('')}
        </div>

        <div id="pay-detail" class="mt-6"></div>
      </div>

      <!-- Summary -->
      <div class="glass-strong rounded-3xl p-6 ring-soft h-max sticky top-24">
        <div class="font-display text-xl mb-3">Ringkasan</div>
        <div class="space-y-2 max-h-64 overflow-y-auto scrollbar pr-1">
          ${State.cart.map(c=>html`
            <div class="flex items-center gap-3 text-sm">
              <img src="${c.img}" class="w-10 h-10 rounded-lg object-cover"/>
              <div class="flex-1 min-w-0">
                <div class="truncate">${c.name}</div>
                <div class="text-xs text-white/40 num">${c.qty} × ${fmtIDR(c.price)}</div>
              </div>
              <div class="num">${fmtIDR(c.qty*c.price)}</div>
            </div>`).join('')}
        </div>
        <div class="mt-4 pt-4 border-t border-white/10 space-y-1 text-sm">
          <div class="flex justify-between text-white/70"><span>Subtotal</span><span class="num">${fmtIDR(t.subtotal)}</span></div>
          <div class="flex justify-between text-white/70"><span>PPN 10%</span><span class="num">${fmtIDR(t.tax)}</span></div>
          ${State.orderType==='dinein'?`<div class="flex justify-between text-white/70"><span>Service 5%</span><span class="num">${fmtIDR(t.service)}</span></div>`:''}
          <div class="flex justify-between pt-2 border-t border-white/10 text-base"><span class="text-white/80">Total</span><span class="text-grad font-bold num" data-testid="pay-total">${fmtIDR(t.total)}</span></div>
        </div>
        <button data-testid="confirm-pay" id="confirm-pay" class="mt-5 btn-emerald w-full rounded-xl py-3 font-semibold disabled:opacity-40" disabled>Bayar Sekarang</button>
      </div>
    </div>
  </div>`;
}

function attachPaymentEvents(){
  document.querySelectorAll('.pay-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      State.payMethod = b.dataset.pay;
      State.cashGiven = 0;
      clickSound();
      document.querySelectorAll('.pay-btn').forEach(x=>{
        const on = x.dataset.pay===State.payMethod;
        x.style.background = on?'linear-gradient(135deg,rgba(255,122,24,.18),rgba(255,61,127,.18))':'';
        x.style.borderColor = on?'rgba(255,61,127,.5)':'';
      });
      renderPayDetail();
      validatePay();
    });
  });
  document.getElementById('confirm-pay').addEventListener('click', confirmPay);
}

function renderPayDetail(){
  const host = document.getElementById('pay-detail');
  if(!host) return;
  const t = cartTotals();
  if(State.payMethod==='qris'){
    host.innerHTML = html`
      <div class="flex flex-col md:flex-row gap-6 items-center fade-in">
        <div class="bg-white p-4 rounded-2xl">
          <div class="w-56 h-56 qris-pattern rounded-lg relative overflow-hidden">
            <div class="absolute inset-0 grid place-items-center">
              <div class="bg-white px-3 py-1 rounded text-[10px] font-bold tracking-widest text-black">QRIS</div>
            </div>
          </div>
          <div class="text-center text-black text-xs mt-2 font-semibold">ALANSHPEE — ${fmtIDR(t.total)}</div>
        </div>
        <div class="flex-1">
          <div class="font-display text-xl mb-1">Scan untuk membayar</div>
          <p class="text-white/60 text-sm">Buka aplikasi e-wallet (GoPay, OVO, DANA, ShopeePay) atau mobile banking, scan QR di samping. Pembayaran akan otomatis terverifikasi.</p>
          <div class="mt-4 flex items-center gap-2 text-xs text-white/50"><span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot text-emerald-400"></span> Menunggu pembayaran…</div>
        </div>
      </div>`;
  } else if(State.payMethod==='transfer'){
    host.innerHTML = html`
      <div class="fade-in">
        <div class="flex flex-wrap gap-2 mb-4" id="bank-pick">
          ${['BCA','BRI','Mandiri'].map(b=>html`<button data-bank="${b}" data-testid="bank-${b}" class="bank-btn glass rounded-xl px-4 py-2 text-sm ${State.bank===b?'active':''}">${b}</button>`).join('')}
        </div>
        <div class="glass rounded-2xl p-5">
          <div class="text-xs uppercase tracking-widest text-white/40">Bank</div>
          <div class="font-display text-2xl mt-1" id="bank-name">${State.bank}</div>
          <div class="text-xs uppercase tracking-widest text-white/40 mt-4">Nomor Rekening</div>
          <div class="font-mono text-2xl tracking-widest mt-1 num" id="bank-acc">${bankAcc(State.bank)}</div>
          <div class="text-xs uppercase tracking-widest text-white/40 mt-4">Atas Nama</div>
          <div class="text-lg mt-1">PT ALANSHPEE KULINER NUSANTARA</div>
          <div class="text-xs uppercase tracking-widest text-white/40 mt-4">Jumlah Transfer</div>
          <div class="text-grad font-bold text-2xl mt-1 num">${fmtIDR(t.total)}</div>
        </div>
        <p class="text-xs text-white/50 mt-3">Pastikan jumlah transfer sesuai. Mutasi otomatis akan diverifikasi dalam 1–3 menit.</p>
      </div>`;
    document.querySelectorAll('.bank-btn').forEach(b=>b.addEventListener('click',()=>{
      State.bank = b.dataset.bank; clickSound();
      document.getElementById('bank-name').textContent = State.bank;
      document.getElementById('bank-acc').textContent = bankAcc(State.bank);
      document.querySelectorAll('.bank-btn').forEach(x=>{
        const on=x.dataset.bank===State.bank;
        x.style.background=on?'linear-gradient(135deg,rgba(255,122,24,.2),rgba(255,61,127,.2))':'';
        x.style.borderColor=on?'rgba(255,61,127,.5)':'';
      });
    }));
    document.querySelectorAll('.bank-btn').forEach(x=>{
      const on=x.dataset.bank===State.bank;
      x.style.background=on?'linear-gradient(135deg,rgba(255,122,24,.2),rgba(255,61,127,.2))':'';
      x.style.borderColor=on?'rgba(255,61,127,.5)':'';
    });
  } else if(State.payMethod==='cash'){
    host.innerHTML = html`
      <div class="fade-in">
        <label class="text-xs uppercase tracking-widest text-white/50">Nominal Diterima</label>
        <input data-testid="cash-input" id="cash-input" type="number" min="0" placeholder="0" class="mt-1 w-full glass rounded-xl px-4 py-3 text-2xl font-bold num" />
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3" id="quick-cash">
          ${[20000,50000,100000,150000,200000,500000].map(v=>html`<button data-qcash="${v}" class="glass rounded-lg px-3 py-2 text-sm hover:bg-white/10 num">${fmtIDR(v)}</button>`).join('')}
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div class="glass rounded-xl p-3">
            <div class="text-xs uppercase tracking-widest text-white/40">Total Tagihan</div>
            <div class="text-grad font-bold text-xl mt-1 num">${fmtIDR(t.total)}</div>
          </div>
          <div class="glass rounded-xl p-3">
            <div class="text-xs uppercase tracking-widest text-white/40">Kembalian</div>
            <div id="cash-change" class="font-bold text-xl mt-1 num text-emerald-300">${fmtIDR(0)}</div>
          </div>
        </div>
      </div>`;
    const inp = document.getElementById('cash-input');
    inp.addEventListener('input', updateCashChange);
    document.querySelectorAll('[data-qcash]').forEach(b=>b.addEventListener('click',()=>{
      const v = parseInt(b.dataset.qcash);
      inp.value = (parseInt(inp.value)||0) + v;
      clickSound();
      updateCashChange();
    }));
  }
}
function bankAcc(bank){
  return ({BCA:'1234 5678 901',BRI:'0987 6543 210',Mandiri:'1122 3344 556'})[bank] || '';
}
function updateCashChange(){
  const inp = document.getElementById('cash-input');
  const t = cartTotals();
  State.cashGiven = parseFloat(inp.value)||0;
  const change = State.cashGiven - t.total;
  const el = document.getElementById('cash-change');
  if(el){
    el.textContent = fmtIDR(Math.max(0,change));
    el.className = 'font-bold text-xl mt-1 num ' + (change<0?'text-rose-400':'text-emerald-300');
  }
  validatePay();
}
function validatePay(){
  const btn = document.getElementById('confirm-pay');
  if(!btn) return;
  const t = cartTotals();
  let ok = !!State.payMethod && State.cart.length>0;
  if(State.payMethod==='cash') ok = ok && State.cashGiven >= t.total;
  btn.disabled = !ok;
}

function confirmPay(){
  if(!State.cart.length){ errorSound(); toast('Keranjang kosong','error'); return }
  if(!State.payMethod){ errorSound(); toast('Pilih metode pembayaran','error'); return }
  const t = cartTotals();
  if(State.payMethod==='cash' && State.cashGiven < t.total){ errorSound(); toast('Uang kurang','error'); return }

  const baseTx = {
    id: uid(),
    time: new Date().toISOString(),
    customer: State.user?.name||'Tamu',
    orderType: State.orderType,
    table: State.table,
    items: State.cart.map(c=>({...c})),
    subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total,
    payMethod: State.payMethod,
    bank: State.payMethod==='transfer'?State.bank:null,
    cashGiven: State.payMethod==='cash'?State.cashGiven:null,
    change: State.payMethod==='cash'?(State.cashGiven-t.total):0,
  };

  if(State.payMethod === 'qris'){
    // QRIS = customer bayar sendiri, langsung sukses
    showPaymentSuccess(()=>{
      const tx = {...baseTx, status:'paid'};
      State.transactions.unshift(tx); persistTx();
      if(State.orderType==='dinein' && State.table){
        if(!State.occupiedTables.includes(State.table)){ State.occupiedTables.push(State.table); persistTables(); }
      }
      State.lastReceipt = tx;
      State.cart = []; State.payMethod=null; State.cashGiven=0;
      successSound();
      go('receipt');
    });
  } else {
    // Transfer / Cash → menunggu konfirmasi kasir/admin
    const pending = {...baseTx, status:'pending'};
    State.pendingTx.unshift(pending); persistPending();
    State.lastPendingId = pending.id;
    successSound();
    toast('Pesanan dikirim ke kasir','info');
    go('waiting');
  }
}

function showPaymentSuccess(cb){
  const host = $('#modal-host');
  host.innerHTML = html`
    <div class="fixed inset-0 z-[80] grid place-items-center bg-black/60 backdrop-blur-sm fade-in">
      <div class="glass-strong rounded-3xl p-10 text-center max-w-sm mx-6 ring-soft">
        <svg viewBox="0 0 100 100" class="w-28 h-28 mx-auto">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" stroke-width="4" class="circle-anim"/>
          <path d="M30 52 L45 67 L72 38" fill="none" stroke="#10b981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="checkmark"/>
        </svg>
        <div class="font-display text-3xl mt-4">Pembayaran Sukses</div>
        <div class="text-white/60 text-sm mt-2">Terima kasih, struk akan segera tampil.</div>
      </div>
    </div>`;
  setTimeout(()=>{ host.innerHTML=''; cb&&cb() }, 1700);
}

/* ----------------- RECEIPT ----------------- */
function viewReceipt(){
  const tx = State.lastReceipt;
  if(!tx){ return `<div class="p-10 text-center">Tidak ada struk. <button class="underline" onclick="go('login')">Kembali</button></div>`; }
  const date = new Date(tx.time);
  return html`
  ${topBar(`<button data-testid="back-home" onclick="finishCustomer()" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">Selesai</button>`)}
  <div class="max-w-3xl mx-auto px-6 py-10 slide-up">
    <div class="text-center mb-6">
      <div class="font-display text-3xl">Pesanan Berhasil 🎉</div>
      <div class="text-white/60 text-sm mt-1">Struk digital Anda siap. Simpan atau cetak sebagai bukti.</div>
    </div>

    <div id="print-area" class="receipt mx-auto max-w-md p-6 rounded-2xl shadow-2xl" data-testid="receipt">
      <div class="text-center">
        <div class="text-2xl font-bold tracking-widest" style="font-family:'Playfair Display',serif">ALANSHPEE</div>
        <div class="text-[11px] tracking-[0.3em] uppercase">Premium Restaurant</div>
        <div class="text-[11px] mt-1">Jl. Sudirman No. 88, Jakarta</div>
        <div class="text-[11px]">Telp: (021) 555-0188 · NPWP: 01.234.567.8-001</div>
      </div>
      <div class="border-t border-dashed border-black my-3"></div>
      <div class="text-[12px] flex justify-between"><span>No. Struk</span><span class="font-bold">${tx.id}</span></div>
      <div class="text-[12px] flex justify-between"><span>Waktu</span><span>${fmtDateTime(date)}</span></div>
      <div class="text-[12px] flex justify-between"><span>Kasir</span><span>ALANSHPEE Auto</span></div>
      <div class="text-[12px] flex justify-between"><span>Pelanggan</span><span>${tx.customer}</span></div>
      <div class="text-[12px] flex justify-between"><span>Tipe</span><span>${tx.orderType==='dinein'?('Dine In · Meja '+String(tx.table).padStart(2,'0')):'Take Away'}</span></div>
      <div class="border-t border-dashed border-black my-3"></div>
      <div class="space-y-1">
        ${tx.items.map(it=>html`
          <div class="text-[12px]">
            <div class="flex justify-between"><span>${it.name}</span><span>${fmtIDR(it.qty*it.price)}</span></div>
            <div class="text-[11px] text-black/70">${it.qty} × ${fmtIDR(it.price)}</div>
          </div>`).join('')}
      </div>
      <div class="border-t border-dashed border-black my-3"></div>
      <div class="text-[12px] flex justify-between"><span>Subtotal</span><span>${fmtIDR(tx.subtotal)}</span></div>
      <div class="text-[12px] flex justify-between"><span>PPN 10%</span><span>${fmtIDR(tx.tax)}</span></div>
      ${tx.service?`<div class="text-[12px] flex justify-between"><span>Service 5%</span><span>${fmtIDR(tx.service)}</span></div>`:''}
      <div class="text-[14px] font-bold flex justify-between mt-1"><span>TOTAL</span><span>${fmtIDR(tx.total)}</span></div>
      <div class="border-t border-dashed border-black my-3"></div>
      <div class="text-[12px] flex justify-between"><span>Metode</span><span class="uppercase">${tx.payMethod}${tx.bank?(' · '+tx.bank):''}</span></div>
      ${tx.payMethod==='cash'?html`
        <div class="text-[12px] flex justify-between"><span>Tunai</span><span>${fmtIDR(tx.cashGiven)}</span></div>
        <div class="text-[12px] flex justify-between"><span>Kembali</span><span>${fmtIDR(tx.change)}</span></div>`:''}
      <div class="border-t border-dashed border-black my-3"></div>
      <div class="text-center text-[11px]">
        <div>Terima kasih sudah berkunjung 💛</div>
        <div class="mt-1">Ikuti @alanshpee.id untuk promo spesial</div>
        <div class="mt-2 inline-block px-3 py-1 border border-black rounded-full text-[10px] tracking-widest">★ POWERED BY ALANSHPEE POS ★</div>
      </div>
    </div>

    <div class="mt-6 flex flex-wrap gap-3 justify-center no-print">
      <button data-testid="print-btn" onclick="window.print()" class="btn-grad px-6 py-3 rounded-xl font-semibold">🖨️ Cetak Struk</button>
      <button data-testid="new-order" onclick="finishCustomer()" class="glass px-6 py-3 rounded-xl font-semibold">Pesanan Baru</button>
      <button data-testid="logout-after" onclick="logout()" class="glass px-6 py-3 rounded-xl">Keluar</button>
    </div>
  </div>`;
}
function finishCustomer(){
  State.cart=[]; State.lastReceipt=null; State.orderType=null; State.table=null;
  go('customerType');
}

/* ----------------- WAITING (Pending Confirmation) ----------------- */
function viewWaiting(){
  const tx = State.pendingTx.find(p=>p.id===State.lastPendingId);
  if(!tx){ return `<div class="p-10 text-center">Pesanan tidak ditemukan. <button class="underline" onclick="finishCustomer()">Pesan lagi</button></div>` }
  const orderInfo = tx.orderType==='dinein' ? `Dine In · Meja ${String(tx.table).padStart(2,'0')}` : 'Take Away';
  const methodLabel = tx.payMethod==='transfer' ? `Transfer Bank ${tx.bank}` : 'Tunai di Kasir';
  return html`
  ${topBar(`<button onclick="cancelWaiting()" data-testid="cancel-wait" class="text-sm text-rose-300 hover:text-rose-200 px-3 py-2 rounded-lg glass">Batalkan</button>`)}
  <div class="max-w-2xl mx-auto px-6 py-12 slide-up text-center">
    <div class="relative w-32 h-32 mx-auto mb-6">
      <div class="absolute inset-0 rounded-full border-4 border-white/10"></div>
      <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-400 border-r-rose-500 animate-spin"></div>
      <div class="absolute inset-0 grid place-items-center text-5xl">⏳</div>
    </div>
    <div class="text-[10px] uppercase tracking-[0.4em] text-amber-300">Menunggu Konfirmasi Kasir</div>
    <h2 class="font-display text-4xl mt-2 mb-3">Pesanan Anda dikirim ke kasir</h2>
    <p class="text-white/60">Silakan tunjukkan layar ini ke kasir untuk pembayaran <b>${methodLabel}</b>. Struk akan otomatis muncul setelah dikonfirmasi.</p>

    <div class="glass-strong rounded-3xl p-6 mt-8 text-left ring-soft">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs uppercase tracking-widest text-white/40">No. Pesanan</div>
          <div class="font-mono text-xl mt-1" data-testid="waiting-id">${tx.id}</div>
        </div>
        <div class="text-right">
          <div class="text-xs uppercase tracking-widest text-white/40">Total</div>
          <div class="text-grad font-bold text-2xl num">${fmtIDR(tx.total)}</div>
        </div>
      </div>
      <div class="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
        <div class="glass rounded-xl p-3"><div class="text-xs text-white/40">Pelanggan</div><div class="mt-1">${tx.customer}</div></div>
        <div class="glass rounded-xl p-3"><div class="text-xs text-white/40">Tipe</div><div class="mt-1">${orderInfo}</div></div>
        <div class="glass rounded-xl p-3"><div class="text-xs text-white/40">Metode</div><div class="mt-1">${methodLabel}</div></div>
      </div>
      <div class="mt-4 pt-4 border-t border-white/10 text-sm space-y-1 max-h-40 overflow-y-auto scrollbar pr-1">
        ${tx.items.map(it=>html`<div class="flex justify-between"><span>${it.qty}× ${it.name}</span><span class="num">${fmtIDR(it.qty*it.price)}</span></div>`).join('')}
      </div>
    </div>
    <div class="mt-6 text-xs text-white/40 flex items-center justify-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-400 pulse-dot text-amber-400"></span>Polling status setiap detik…</div>
  </div>`;
}

let _waitTimer = null;
function attachWaitingEvents(){
  if(_waitTimer) clearInterval(_waitTimer);
  _waitTimer = setInterval(checkPendingStatus, 1000);
}
function checkPendingStatus(){
  if(State.page!=='waiting'){ if(_waitTimer){clearInterval(_waitTimer); _waitTimer=null} return }
  // re-read from storage in case admin confirmed in another tab
  State.pendingTx = LS.get('alanshpee_pending', State.pendingTx);
  State.transactions = LS.get('savora_tx', State.transactions);
  const stillPending = State.pendingTx.find(p=>p.id===State.lastPendingId);
  if(!stillPending){
    // it was confirmed (moved to transactions) or cancelled
    const confirmed = State.transactions.find(t=>t.id===State.lastPendingId);
    if(confirmed){
      clearInterval(_waitTimer); _waitTimer=null;
      State.lastReceipt = confirmed; State.cart=[]; State.payMethod=null; State.cashGiven=0;
      successSound(); toast('Pembayaran dikonfirmasi kasir!','success');
      go('receipt');
    } else {
      // cancelled
      clearInterval(_waitTimer); _waitTimer=null;
      errorSound(); toast('Pesanan dibatalkan kasir','error');
      State.lastPendingId=null;
      go('menu');
    }
  }
}
function cancelWaiting(){
  if(!confirm('Batalkan pesanan ini?')) return;
  State.pendingTx = State.pendingTx.filter(p=>p.id!==State.lastPendingId);
  persistPending();
  State.lastPendingId=null;
  if(_waitTimer){clearInterval(_waitTimer); _waitTimer=null}
  toast('Pesanan dibatalkan');
  go('menu');
}

/* Admin actions on pending */
function adminConfirmPending(id){
  const i = State.pendingTx.findIndex(p=>p.id===id);
  if(i<0) return;
  const tx = {...State.pendingTx[i], status:'paid', confirmedAt: new Date().toISOString()};
  State.transactions.unshift(tx); persistTx();
  if(tx.orderType==='dinein' && tx.table && !State.occupiedTables.includes(tx.table)){
    State.occupiedTables.push(tx.table); persistTables();
  }
  State.pendingTx.splice(i,1); persistPending();
  successSound(); toast('Pembayaran dikonfirmasi · '+tx.id);
  document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
}
function adminCancelPending(id){
  if(!confirm('Tolak/batalkan pesanan ini?')) return;
  State.pendingTx = State.pendingTx.filter(p=>p.id!==id); persistPending();
  errorSound(); toast('Pesanan dibatalkan','error');
  document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
}

/* ----------------- LOGOUT ----------------- */
function logout(){
  State.user=null; State.cart=[]; State.lastReceipt=null; State.orderType=null; State.table=null; State.payMethod=null;
  go('login');
}

/* ============================================================
                          ADMIN
   ============================================================ */
function viewAdmin(){
  const stats = computeStats();
  return html`
  ${topBar(`
    <div class="text-xs px-3 py-2 rounded-lg glass">Admin · ${State.user?.name||''}</div>
    <button data-testid="admin-logout" onclick="logout()" class="text-sm text-white/60 hover:text-white px-3 py-2 rounded-lg glass">Keluar</button>
  `)}
  <div class="grid lg:grid-cols-[260px_1fr] min-h-[calc(100vh-72px)]">
    <!-- Sidebar -->
    <aside class="border-r border-white/10 p-4 glass-strong">
      <div class="text-[10px] uppercase tracking-[0.3em] text-white/40 px-3 mb-3">Navigasi</div>
      <nav class="space-y-1">
        ${[
          ['dashboard','📊','Dashboard'],
          ['pending','⏳','Konfirmasi Bayar'],
          ['menu','🍽️','Kelola Menu'],
          ['tx','🧾','Riwayat Transaksi'],
          ['tables','🪑','Status Meja'],
        ].map(([k,i,l])=>{
          const badge = (k==='pending' && State.pendingTx.length) ? `<span class="ml-auto text-[10px] font-bold bg-rose-500 text-white px-2 py-0.5 rounded-full">${State.pendingTx.length}</span>` : '';
          return html`
          <button data-tab="${k}" data-testid="admin-tab-${k}" class="nav-link w-full text-left px-3 py-2 rounded-xl text-sm flex items-center gap-3 ${State.adminTab===k?'active':''}">
            <span>${i}</span><span>${l}</span>${badge}
          </button>`;
        }).join('')}
      </nav>
      <div class="mt-8 glass rounded-2xl p-4">
        <div class="text-[10px] uppercase tracking-[0.3em] text-white/40">Hari ini</div>
        <div class="text-grad font-bold text-2xl mt-1 num" data-testid="sidebar-revenue">${fmtIDR(stats.todayRevenue)}</div>
        <div class="text-xs text-white/50 mt-1">${stats.todayCount} transaksi</div>
      </div>
    </aside>

    <!-- Content -->
    <main class="p-6 lg:p-8" id="admin-content">
      ${renderAdminTab()}
    </main>
  </div>`;
}

function attachAdminEvents(){
  document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{
    State.adminTab=b.dataset.tab; clickSound();
    document.getElementById('admin-content').innerHTML = renderAdminTab();
    document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active', x.dataset.tab===State.adminTab));
    bindAdminInner();
  }));
  bindAdminInner();
}

function bindAdminInner(){
  // Menu management
  const addBtn = document.getElementById('add-menu-btn');
  if(addBtn) addBtn.addEventListener('click', ()=>openMenuModal(null));
  document.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>{
    const m = State.menu.find(x=>x.id===b.dataset.edit); openMenuModal(m);
  }));
  document.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
    if(confirm('Hapus menu ini?')){
      State.menu = State.menu.filter(x=>x.id!==b.dataset.del); persistMenu(); toast('Menu dihapus');
      document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
    }
  }));
  // Tables free
  document.querySelectorAll('[data-free]').forEach(b=>b.addEventListener('click',()=>{
    const n = parseInt(b.dataset.free);
    State.occupiedTables = State.occupiedTables.filter(x=>x!==n); persistTables();
    toast('Meja '+n+' dikosongkan');
    document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
  }));
  // Tx detail
  document.querySelectorAll('[data-tx]').forEach(b=>b.addEventListener('click',()=>{
    const tx = State.transactions.find(x=>x.id===b.dataset.tx);
    if(tx) showTxModal(tx);
  }));
}

function computeStats(){
  const today = new Date().toDateString();
  const todayTx = State.transactions.filter(t=>new Date(t.time).toDateString()===today);
  const totalRev = State.transactions.reduce((a,t)=>a+t.total,0);
  const todayRevenue = todayTx.reduce((a,t)=>a+t.total,0);
  const itemCount = {};
  State.transactions.forEach(t=>t.items.forEach(it=>itemCount[it.name]=(itemCount[it.name]||0)+it.qty));
  const top = Object.entries(itemCount).sort((a,b)=>b[1]-a[1]).slice(0,5);
  return { todayRevenue, todayCount: todayTx.length, totalRev, totalCount: State.transactions.length, top };
}

function renderAdminTab(){
  if(State.adminTab==='dashboard') return renderDashboard();
  if(State.adminTab==='pending') return renderPendingAdmin();
  if(State.adminTab==='menu') return renderMenuAdmin();
  if(State.adminTab==='tx') return renderTxAdmin();
  if(State.adminTab==='tables') return renderTablesAdmin();
  return '';
}

function renderPendingAdmin(){
  // re-read in case customer added new pending
  State.pendingTx = LS.get('alanshpee_pending', State.pendingTx);
  if(!State.pendingTx.length){
    return html`
      <div class="font-display text-3xl mb-1">Konfirmasi Pembayaran</div>
      <div class="text-white/50 text-sm mb-6">Pesanan Transfer & Tunai menunggu verifikasi kasir.</div>
      <div class="glass-strong rounded-2xl p-12 text-center">
        <div class="text-5xl">✅</div>
        <div class="font-display text-xl mt-3">Tidak ada pesanan menunggu</div>
        <div class="text-white/50 text-sm mt-1">Semua pembayaran sudah dikonfirmasi.</div>
      </div>`;
  }
  return html`
    <div class="font-display text-3xl mb-1">Konfirmasi Pembayaran</div>
    <div class="text-white/50 text-sm mb-6">${State.pendingTx.length} pesanan menunggu verifikasi.</div>
    <div class="grid lg:grid-cols-2 gap-4">
      ${State.pendingTx.map(tx=>{
        const orderInfo = tx.orderType==='dinein'?'Dine In · Meja '+String(tx.table).padStart(2,'0'):'Take Away';
        const methodLabel = tx.payMethod==='transfer'?`Transfer ${tx.bank}`:'Tunai di Kasir';
        return html`
        <div class="glass-strong rounded-2xl p-5 ring-soft border border-amber-500/20" data-testid="pending-${tx.id}">
          <div class="flex items-start justify-between">
            <div>
              <div class="text-xs uppercase tracking-widest text-amber-300">⏳ Menunggu</div>
              <div class="font-mono text-sm mt-1">${tx.id}</div>
              <div class="text-xs text-white/40 mt-1">${new Date(tx.time).toLocaleString('id-ID')}</div>
            </div>
            <div class="text-right">
              <div class="text-xs text-white/40">Total</div>
              <div class="text-grad font-bold text-xl num">${fmtIDR(tx.total)}</div>
            </div>
          </div>
          <div class="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div class="glass rounded-lg p-2"><div class="text-white/40">Pelanggan</div><div>${tx.customer}</div></div>
            <div class="glass rounded-lg p-2"><div class="text-white/40">Tipe</div><div>${orderInfo}</div></div>
            <div class="glass rounded-lg p-2"><div class="text-white/40">Metode</div><div>${methodLabel}</div></div>
          </div>
          <details class="mt-3">
            <summary class="text-xs text-white/60 hover:text-white">▸ Lihat ${tx.items.length} item</summary>
            <div class="mt-2 space-y-1 text-xs glass rounded-lg p-3 max-h-40 overflow-y-auto scrollbar">
              ${tx.items.map(it=>html`<div class="flex justify-between"><span>${it.qty}× ${it.name}</span><span class="num">${fmtIDR(it.qty*it.price)}</span></div>`).join('')}
              ${tx.payMethod==='cash'?`<div class="pt-2 mt-2 border-t border-white/10 flex justify-between text-emerald-300"><span>Tunai diterima</span><span class="num">${fmtIDR(tx.cashGiven)}</span></div><div class="flex justify-between text-emerald-300"><span>Kembalian</span><span class="num">${fmtIDR(tx.change)}</span></div>`:''}
            </div>
          </details>
          <div class="mt-4 flex gap-2">
            <button onclick="adminConfirmPending('${tx.id}')" data-testid="confirm-${tx.id}" class="flex-1 btn-emerald rounded-xl py-2.5 text-sm font-semibold">✓ Konfirmasi Lunas</button>
            <button onclick="adminCancelPending('${tx.id}')" data-testid="reject-${tx.id}" class="px-4 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-sm font-semibold">Tolak</button>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderDashboard(){
  const s = computeStats();
  const cards = [
    ['Penjualan Hari Ini', fmtIDR(s.todayRevenue), 'today-revenue','from-orange-500/20 to-rose-500/20'],
    ['Transaksi Hari Ini', s.todayCount+'', 'today-count','from-emerald-500/20 to-teal-500/20'],
    ['Total Pendapatan', fmtIDR(s.totalRev), 'total-revenue','from-violet-500/20 to-indigo-500/20'],
    ['Total Transaksi', s.totalCount+'', 'total-count','from-cyan-500/20 to-sky-500/20'],
  ];
  return html`
    <div class="font-display text-3xl mb-1">Dashboard</div>
    <div class="text-white/50 text-sm mb-6">Pantau performa restoran Anda secara real-time.</div>
    <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      ${cards.map(([l,v,id,grad])=>html`
        <div class="glass-strong rounded-2xl p-5 ring-soft relative overflow-hidden" data-testid="stat-${id}">
          <div class="absolute -inset-1 bg-gradient-to-br ${grad} opacity-30 blur-2xl"></div>
          <div class="relative">
            <div class="text-xs uppercase tracking-widest text-white/50">${l}</div>
            <div class="font-display text-3xl mt-2 num">${v}</div>
          </div>
        </div>`).join('')}
    </div>

    <div class="grid lg:grid-cols-2 gap-4 mt-6">
      <div class="glass-strong rounded-2xl p-5 ring-soft">
        <div class="font-display text-xl mb-3">Top 5 Menu Terlaris</div>
        ${s.top.length? s.top.map(([n,c],i)=>html`
          <div class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full grid place-items-center text-xs font-bold ${i===0?'btn-grad':'bg-white/10'}">${i+1}</div>
              <div class="text-sm">${n}</div>
            </div>
            <div class="text-sm text-white/60 num">${c}× terjual</div>
          </div>`).join('')
          : `<div class="text-white/40 text-sm">Belum ada data penjualan.</div>`}
      </div>
      <div class="glass-strong rounded-2xl p-5 ring-soft">
        <div class="font-display text-xl mb-3">Transaksi Terbaru</div>
        ${State.transactions.slice(0,5).length? State.transactions.slice(0,5).map(t=>html`
          <div class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div class="text-sm">
              <div class="font-medium">${t.id}</div>
              <div class="text-xs text-white/40">${new Date(t.time).toLocaleString('id-ID')} · ${t.orderType==='dinein'?'Meja '+t.table:'Take Away'}</div>
            </div>
            <div class="text-grad font-bold num">${fmtIDR(t.total)}</div>
          </div>`).join('')
          : `<div class="text-white/40 text-sm">Belum ada transaksi.</div>`}
      </div>
    </div>`;
}

function renderMenuAdmin(){
  return html`
    <div class="flex items-center justify-between mb-1">
      <div>
        <div class="font-display text-3xl">Kelola Menu</div>
        <div class="text-white/50 text-sm">Tambah, edit, atau hapus menu.</div>
      </div>
      <button data-testid="add-menu" id="add-menu-btn" class="btn-grad px-5 py-2.5 rounded-xl font-semibold">+ Tambah Menu</button>
    </div>
    <div class="mt-6 glass-strong rounded-2xl ring-soft overflow-hidden">
      <table class="w-full text-sm">
        <thead class="text-left text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
          <tr><th class="px-4 py-3">Menu</th><th class="px-4 py-3">Kategori</th><th class="px-4 py-3">Harga</th><th class="px-4 py-3">Badge</th><th class="px-4 py-3 text-right">Aksi</th></tr>
        </thead>
        <tbody>
          ${State.menu.map(m=>html`
            <tr class="border-b border-white/5 hover:bg-white/5">
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <img src="${m.img}" class="w-12 h-12 rounded-lg object-cover" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80'"/>
                  <div>
                    <div class="font-medium">${m.name}</div>
                    <div class="text-xs text-white/40">${m.desc||''}</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 capitalize">${m.cat==='food'?'Makanan':m.cat==='drink'?'Minuman':'Dessert'}</td>
              <td class="px-4 py-3 num">${fmtIDR(m.price)}</td>
              <td class="px-4 py-3">${m.badge?`<span class="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full ${m.badge==='Best Seller'?'badge-best':m.badge==='Promo'?'badge-promo':'badge-new'}">${m.badge}</span>`:'<span class="text-white/30">—</span>'}</td>
              <td class="px-4 py-3 text-right space-x-2">
                <button data-edit="${m.id}" data-testid="edit-${m.id}" class="px-3 py-1.5 rounded-lg glass text-xs">Edit</button>
                <button data-del="${m.id}" data-testid="del-${m.id}" class="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs">Hapus</button>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function openMenuModal(item){
  const isEdit = !!item;
  const data = item || {id:'menu_'+Date.now().toString(36), name:'', price:0, cat:'food', badge:'', img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', desc:''};
  const host = $('#modal-host');
  host.innerHTML = html`
    <div class="fixed inset-0 z-[80] grid place-items-center bg-black/70 backdrop-blur-sm fade-in" onclick="if(event.target===this){document.getElementById('modal-host').innerHTML=''}">
      <div class="glass-strong rounded-3xl p-6 w-full max-w-lg ring-soft slide-up">
        <div class="font-display text-2xl mb-4">${isEdit?'Edit Menu':'Tambah Menu Baru'}</div>
        <form id="menu-form" class="space-y-3">
          <div>
            <label class="text-xs uppercase tracking-widest text-white/50">Nama</label>
            <input data-testid="mf-name" id="mf-name" required value="${data.name.replace(/"/g,'&quot;')}" class="w-full glass rounded-xl px-4 py-2.5 mt-1 text-sm"/>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs uppercase tracking-widest text-white/50">Harga</label>
              <input data-testid="mf-price" id="mf-price" type="number" required value="${data.price}" class="w-full glass rounded-xl px-4 py-2.5 mt-1 text-sm num"/>
            </div>
            <div>
              <label class="text-xs uppercase tracking-widest text-white/50">Kategori</label>
              <select data-testid="mf-cat" id="mf-cat" class="w-full glass rounded-xl px-3 py-2.5 mt-1 text-sm bg-[#0a0a0f]">
                <option value="food" ${data.cat==='food'?'selected':''}>Makanan</option>
                <option value="drink" ${data.cat==='drink'?'selected':''}>Minuman</option>
                <option value="dessert" ${data.cat==='dessert'?'selected':''}>Dessert</option>
              </select>
            </div>
          </div>
          <div>
            <label class="text-xs uppercase tracking-widest text-white/50">Badge</label>
            <select data-testid="mf-badge" id="mf-badge" class="w-full glass rounded-xl px-3 py-2.5 mt-1 text-sm bg-[#0a0a0f]">
              <option value="">— Tidak ada —</option>
              <option ${data.badge==='Best Seller'?'selected':''}>Best Seller</option>
              <option ${data.badge==='Promo'?'selected':''}>Promo</option>
              <option ${data.badge==='New'?'selected':''}>New</option>
            </select>
          </div>
          <div>
            <label class="text-xs uppercase tracking-widest text-white/50">URL Gambar</label>
            <input data-testid="mf-img" id="mf-img" value="${data.img}" class="w-full glass rounded-xl px-4 py-2.5 mt-1 text-sm font-mono"/>
          </div>
          <div>
            <label class="text-xs uppercase tracking-widest text-white/50">Deskripsi singkat</label>
            <input data-testid="mf-desc" id="mf-desc" value="${(data.desc||'').replace(/"/g,'&quot;')}" class="w-full glass rounded-xl px-4 py-2.5 mt-1 text-sm"/>
          </div>
          <div class="flex justify-end gap-2 pt-2">
            <button type="button" onclick="document.getElementById('modal-host').innerHTML=''" class="px-4 py-2 rounded-lg glass text-sm">Batal</button>
            <button data-testid="mf-save" type="submit" class="btn-grad px-5 py-2 rounded-lg text-sm font-semibold">${isEdit?'Simpan':'Tambahkan'}</button>
          </div>
        </form>
      </div>
    </div>`;
  document.getElementById('menu-form').addEventListener('submit', e=>{
    e.preventDefault();
    const obj = {
      id: data.id,
      name: document.getElementById('mf-name').value.trim(),
      price: parseInt(document.getElementById('mf-price').value)||0,
      cat: document.getElementById('mf-cat').value,
      badge: document.getElementById('mf-badge').value || null,
      img: document.getElementById('mf-img').value.trim(),
      desc: document.getElementById('mf-desc').value.trim(),
    };
    if(!obj.name || obj.price<=0){ errorSound(); toast('Lengkapi nama & harga','error'); return }
    if(isEdit){
      const i = State.menu.findIndex(x=>x.id===data.id);
      State.menu[i] = obj; toast('Menu diperbarui');
    } else {
      State.menu.push(obj); toast('Menu ditambahkan');
    }
    persistMenu();
    successSound();
    document.getElementById('modal-host').innerHTML='';
    document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
  });
}

function renderTxAdmin(){
  if(!State.transactions.length){
    return html`
      <div class="font-display text-3xl mb-1">Riwayat Transaksi</div>
      <div class="text-white/50 text-sm mb-6">Semua transaksi akan tampil di sini.</div>
      <div class="glass-strong rounded-2xl p-12 text-center">
        <div class="text-5xl">🧾</div>
        <div class="font-display text-xl mt-3">Belum ada transaksi</div>
        <div class="text-white/50 text-sm mt-1">Pesanan pertama akan muncul di sini.</div>
      </div>`;
  }
  return html`
    <div class="font-display text-3xl mb-1">Riwayat Transaksi</div>
    <div class="text-white/50 text-sm mb-6">${State.transactions.length} transaksi tercatat.</div>
    <div class="glass-strong rounded-2xl ring-soft overflow-hidden">
      <table class="w-full text-sm">
        <thead class="text-left text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
          <tr><th class="px-4 py-3">No. Struk</th><th class="px-4 py-3">Waktu</th><th class="px-4 py-3">Pelanggan</th><th class="px-4 py-3">Tipe</th><th class="px-4 py-3">Metode</th><th class="px-4 py-3 text-right">Total</th><th class="px-4 py-3"></th></tr>
        </thead>
        <tbody>
          ${State.transactions.map(t=>html`
            <tr class="border-b border-white/5 hover:bg-white/5">
              <td class="px-4 py-3 font-mono">${t.id}</td>
              <td class="px-4 py-3 text-white/70">${new Date(t.time).toLocaleString('id-ID')}</td>
              <td class="px-4 py-3">${t.customer}</td>
              <td class="px-4 py-3">${t.orderType==='dinein'?'Dine In · Meja '+t.table:'Take Away'}</td>
              <td class="px-4 py-3 uppercase text-xs">${t.payMethod}${t.bank?(' · '+t.bank):''}</td>
              <td class="px-4 py-3 text-right text-grad font-bold num">${fmtIDR(t.total)}</td>
              <td class="px-4 py-3 text-right"><button data-tx="${t.id}" data-testid="view-${t.id}" class="px-3 py-1.5 rounded-lg glass text-xs">Detail</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function showTxModal(tx){
  const host = $('#modal-host');
  host.innerHTML = html`
    <div class="fixed inset-0 z-[80] grid place-items-center bg-black/70 backdrop-blur-sm fade-in" onclick="if(event.target===this){document.getElementById('modal-host').innerHTML=''}">
      <div class="glass-strong rounded-3xl p-6 w-full max-w-md ring-soft slide-up">
        <div class="flex items-center justify-between">
          <div class="font-display text-2xl">Detail Transaksi</div>
          <button onclick="document.getElementById('modal-host').innerHTML=''" class="text-white/60 hover:text-white">✕</button>
        </div>
        <div class="text-xs text-white/50 mt-1 font-mono">${tx.id} · ${new Date(tx.time).toLocaleString('id-ID')}</div>
        <div class="mt-4 space-y-1 text-sm">
          <div class="flex justify-between"><span class="text-white/60">Pelanggan</span><span>${tx.customer}</span></div>
          <div class="flex justify-between"><span class="text-white/60">Tipe</span><span>${tx.orderType==='dinein'?'Dine In · Meja '+tx.table:'Take Away'}</span></div>
          <div class="flex justify-between"><span class="text-white/60">Metode</span><span class="uppercase">${tx.payMethod}${tx.bank?(' · '+tx.bank):''}</span></div>
        </div>
        <div class="mt-4 border-t border-white/10 pt-3 space-y-2 max-h-64 overflow-y-auto scrollbar pr-1">
          ${tx.items.map(it=>html`
            <div class="flex items-center gap-3 text-sm">
              <img src="${it.img}" class="w-10 h-10 rounded-lg object-cover"/>
              <div class="flex-1 min-w-0">
                <div class="truncate">${it.name}</div>
                <div class="text-xs text-white/40 num">${it.qty} × ${fmtIDR(it.price)}</div>
              </div>
              <div class="num">${fmtIDR(it.qty*it.price)}</div>
            </div>`).join('')}
        </div>
        <div class="mt-3 border-t border-white/10 pt-3 text-sm space-y-1">
          <div class="flex justify-between text-white/70"><span>Subtotal</span><span class="num">${fmtIDR(tx.subtotal)}</span></div>
          <div class="flex justify-between text-white/70"><span>PPN</span><span class="num">${fmtIDR(tx.tax)}</span></div>
          ${tx.service?`<div class="flex justify-between text-white/70"><span>Service</span><span class="num">${fmtIDR(tx.service)}</span></div>`:''}
          <div class="flex justify-between font-bold pt-2 border-t border-white/10"><span>Total</span><span class="text-grad num">${fmtIDR(tx.total)}</span></div>
        </div>
      </div>
    </div>`;
}

function renderTablesAdmin(){
  const tiles = Array.from({length:10},(_,i)=>i+1).map(n=>{
    const occ = State.occupiedTables.includes(n);
    return html`
      <div class="glass rounded-2xl p-5 ${occ?'border border-rose-500/30':'border border-emerald-500/20'}">
        <div class="flex items-center justify-between">
          <div class="font-display text-2xl">Meja ${String(n).padStart(2,'0')}</div>
          <span class="text-xs px-2 py-1 rounded-full ${occ?'bg-rose-500/20 text-rose-300':'bg-emerald-500/20 text-emerald-300'}">${occ?'Terisi':'Kosong'}</span>
        </div>
        <div class="mt-3 text-xs text-white/50">Kapasitas ${n%2?'2':'4'} orang</div>
        <button ${occ?'':'disabled'} data-free="${n}" data-testid="free-${n}" class="mt-4 w-full glass rounded-lg py-2 text-xs ${occ?'hover:bg-white/10':'opacity-30 cursor-not-allowed'}">Kosongkan Meja</button>
      </div>`;
  }).join('');
  return html`
    <div class="font-display text-3xl mb-1">Status Meja</div>
    <div class="text-white/50 text-sm mb-6">${10-State.occupiedTables.length} dari 10 meja tersedia.</div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">${tiles}</div>`;
}

/* ============================================================
                          BOOT
   ============================================================ */
document.addEventListener('click',()=>{ if(_audioCtx&&_audioCtx.state==='suspended') _audioCtx.resume() }, {once:true});
// Real-time sync across tabs (customer ↔ admin)
window.addEventListener('storage', (e)=>{
  if(e.key==='alanshpee_pending'){
    State.pendingTx = LS.get('alanshpee_pending', []);
    if(State.page==='admin' && State.adminTab==='pending'){
      document.getElementById('admin-content').innerHTML = renderAdminTab(); bindAdminInner();
    }
    // refresh sidebar badge
    if(State.page==='admin'){
      const navP = document.querySelector('[data-tab="pending"]');
      if(navP){
        const exist = navP.querySelector('span.ml-auto');
        if(exist) exist.remove();
        if(State.pendingTx.length){
          const s = document.createElement('span');
          s.className='ml-auto text-[10px] font-bold bg-rose-500 text-white px-2 py-0.5 rounded-full';
          s.textContent=State.pendingTx.length;
          navP.appendChild(s);
        }
      }
    }
  }
  if(e.key==='savora_tx'){
    State.transactions = LS.get('savora_tx', []);
    if(State.page==='waiting') checkPendingStatus();
  }
});
render();
