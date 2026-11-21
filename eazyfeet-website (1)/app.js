/* ====== SETTINGS: yahan apni details badlein ====== */
var WHATSAPP_NUMBER = '91XXXXXXXXXX';   // apna WhatsApp number, country code 91 ke saath, bina + ke
var MEESHO_LINK = '#';                  // apne Meesho store ka link
var SNAPDEAL_LINK = '#';                // apne Snapdeal store ka link
var INDIAMART_LINK = '#';               // apne IndiaMART page ka link
/* =================================================== */

var THONG = 'M30 98 Q50 72 60 40 Q70 72 90 98';
var SLIDE = 'M30 74 L90 74';
var SOLE = 'M60 8 C88 8 100 40 98 75 C96 105 86 120 88 150 C90 180 78 194 60 194 C42 194 30 180 32 150 C34 120 24 105 22 75 C20 40 32 8 60 8 Z';

function pairSVG(sole, color, strapD, strapW, size) {
  var one = function (t) {
    return '<g transform="' + t + '"><path d="' + SOLE + '" fill="' + sole + '"/><path d="' + strapD + '" stroke="' + color + '" stroke-width="' + strapW + '" stroke-linecap="round" fill="none"/></g>';
  };
  return '<svg viewBox="0 0 220 220" width="' + size + '" height="' + size + '" aria-hidden="true">' +
    one('translate(22 6) rotate(-10 60 100)') + one('translate(92 20) rotate(10 60 100)') + '</svg>';
}

var PRODUCTS = [
  { id: 'hawai-blue', name: 'Classic Hawai Chappal – Blue', tag: 'MEN · RUBBER', color: '#2F6F8F', sole: '#FBFAF7', bg: '#DCE8EF', strap: 'thong', w: 9, mrp: 299, price: 179, rating: '4.3', reviews: '1.2k' },
  { id: 'cloudsoft', name: 'CloudSoft Slider – Black', tag: 'MEN · EVA', color: '#1C1B19', sole: '#E8E4DC', bg: '#EDE7DC', strap: 'slide', w: 44, mrp: 599, price: 349, rating: '4.4', reviews: '860' },
  { id: 'ortho-grey', name: 'Ortho Walk Slipper – Grey', tag: 'UNISEX · ORTHO', color: '#55606A', sole: '#FBFAF7', bg: '#E3E7EA', strap: 'slide', w: 40, mrp: 799, price: 499, rating: '4.5', reviews: '2.1k' },
  { id: 'flip-orange', name: 'Everyday Flip-Flop – Orange', tag: 'WOMEN · EVA', color: '#C2410C', sole: '#FBFAF7', bg: '#F6E1D3', strap: 'thong', w: 9, mrp: 349, price: 199, rating: '4.2', reviews: '540' },
  { id: 'party-rose', name: 'Party Thong – Rose', tag: 'WOMEN · PU', color: '#B0306A', sole: '#F4DDE8', bg: '#F9ECF2', strap: 'thong', w: 7, mrp: 699, price: 419, rating: '4.1', reviews: '310' },
  { id: 'kids-yellow', name: 'Comfy Kids Slider – Yellow', tag: 'KIDS · EVA', color: '#E9A23B', sole: '#FBFAF7', bg: '#FBEBD0', strap: 'slide', w: 38, mrp: 399, price: 229, rating: '4.4', reviews: '420' },
  { id: 'home-green', name: 'Anti-Skid Home Slipper – Green', tag: 'UNISEX · RUBBER', color: '#1F7A4D', sole: '#FBFAF7', bg: '#DCEBE3', strap: 'slide', w: 40, mrp: 449, price: 269, rating: '4.3', reviews: '980' },
  { id: 'tan-thong', name: 'Tan Casual Thong – Men', tag: 'MEN · PU', color: '#8A5A33', sole: '#EFE3D4', bg: '#F3EDE3', strap: 'thong', w: 10, mrp: 899, price: 599, rating: '4.2', reviews: '275' }
];

function waLink(text) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
}

function setCommonLinks() {
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waLink(a.getAttribute('data-wa') || 'Hi EazyFeet, mujhe order karna hai.');
    a.target = '_blank'; a.rel = 'noopener';
  });
  var map = { meesho: MEESHO_LINK, snapdeal: SNAPDEAL_LINK, indiamart: INDIAMART_LINK };
  document.querySelectorAll('[data-market]').forEach(function (a) {
    a.href = map[a.getAttribute('data-market')] || '#';
    if (a.href.indexOf('http') === 0) { a.target = '_blank'; a.rel = 'noopener'; }
  });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
}

function renderHome() {
  var cats = [
    ['Hawai Chappal', '#2F6F8F', '#DCE8EF', THONG, 9], ['Sliders', '#1C1B19', '#EDE7DC', SLIDE, 44],
    ['Flip-Flops', '#C2410C', '#F6E1D3', THONG, 9], ['Ortho Comfort', '#1F7A4D', '#DCEBE3', SLIDE, 40],
    ['Women Fancy', '#B0306A', '#F4DDE8', THONG, 7], ['Kids', '#E9A23B', '#FBEBD0', SLIDE, 38]
  ];
  var c = document.getElementById('cats');
  if (c) c.innerHTML = cats.map(function (k) {
    return '<a href="#bestsellers" class="cat"><span class="circ" style="background:' + k[2] + '"><svg viewBox="0 0 120 200" width="50" height="84" aria-hidden="true"><path d="' + SOLE + '" fill="#FBFAF7"/><path d="' + k[3] + '" stroke="' + k[1] + '" stroke-width="' + k[4] + '" stroke-linecap="round" fill="none"/></svg></span>' + k[0] + '</a>';
  }).join('');
  var g = document.getElementById('grid');
  if (g) g.innerHTML = PRODUCTS.map(function (p) {
    var off = Math.round((1 - p.price / p.mrp) * 100);
    return '<a class="card" href="product.html?id=' + p.id + '"><div class="img" style="background:' + p.bg + '">' +
      pairSVG(p.sole, p.color, p.strap === 'thong' ? THONG : SLIDE, p.w, 180) +
      '<span class="off">' + off + '% OFF</span></div><div class="info"><div class="tag">' + p.tag + '</div><div class="name">' + p.name +
      '</div><div class="rate"><b>' + p.rating + ' ★</b>(' + p.reviews + ')</div><div class="price"><strong>₹' + p.price + '</strong><s>₹' + p.mrp + '</s></div></div></a>';
  }).join('');
}

function renderProduct() {
  var root = document.getElementById('pdp'); if (!root) return;
  var id = new URLSearchParams(location.search).get('id') || 'cloudsoft';
  var p = PRODUCTS.filter(function (x) { return x.id === id; })[0] || PRODUCTS[1];
  var strapD = p.strap === 'thong' ? THONG : SLIDE;
  var palette = [
    { name: 'Original', hex: p.color, sole: p.sole, bg: p.bg },
    { name: 'Black', hex: '#1C1B19', sole: '#E8E4DC', bg: '#EDE7DC' },
    { name: 'Navy', hex: '#24395C', sole: '#FBFAF7', bg: '#DFE5EE' },
    { name: 'Olive', hex: '#5B6B3A', sole: '#F3EFE3', bg: '#E7EADB' }
  ];
  var state = { ci: 0, size: null };
  var off = Math.round((1 - p.price / p.mrp) * 100);

  document.title = p.name + ' | EazyFeet.in';
  document.getElementById('crumb').textContent = p.name;
  document.getElementById('ptag').textContent = p.tag;
  document.getElementById('pname').textContent = p.name;
  document.getElementById('prate').textContent = p.rating + ' ★';
  document.getElementById('previews').textContent = p.reviews + ' ratings';
  document.getElementById('pprice').textContent = '₹' + p.price;
  document.getElementById('pmrp').textContent = 'MRP ₹' + p.mrp;
  document.getElementById('psave').textContent = 'You save ₹' + (p.mrp - p.price);
  document.getElementById('poff').textContent = off + '% OFF';

  var sw = document.getElementById('swatches');
  sw.innerHTML = palette.map(function (c, i) {
    return '<button class="sw" type="button" aria-label="' + c.name + '" aria-pressed="' + (i === 0) + '" data-i="' + i + '" style="background:' + c.hex + '"></button>';
  }).join('');
  var sz = document.getElementById('sizes');
  sz.innerHTML = [6, 7, 8, 9, 10, 11].map(function (n) {
    return '<button class="sz" type="button" aria-pressed="false" data-n="' + n + '">' + n + '</button>';
  }).join('');

  function paint() {
    var c = palette[state.ci];
    var m = document.getElementById('mainimg');
    m.style.background = c.bg;
    m.querySelector('.art').innerHTML = pairSVG(c.sole, c.hex, strapD, p.w, 380);
    document.getElementById('cname').textContent = c.name;
    sw.querySelectorAll('.sw').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.i === state.ci)); });
    sz.querySelectorAll('.sz').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.n === state.size)); });
  }
  sw.addEventListener('click', function (e) { var b = e.target.closest('.sw'); if (b) { state.ci = +b.dataset.i; paint(); } });
  sz.addEventListener('click', function (e) { var b = e.target.closest('.sz'); if (b) { state.size = +b.dataset.n; document.getElementById('sizemsg').hidden = true; paint(); } });

  function order() {
    if (!state.size) { var m = document.getElementById('sizemsg'); m.hidden = false; return; }
    var c = palette[state.ci];
    var text = 'Hi EazyFeet, mujhe ye order karna hai:\n' + p.name + '\nColour: ' + c.name + '\nSize (UK): ' + state.size + '\nPrice: ₹' + p.price + '\n\nNaam:\nAddress:\nPincode:';
    window.open(waLink(text), '_blank', 'noopener');
  }
  document.getElementById('buy').addEventListener('click', order);
  document.getElementById('wabuy').addEventListener('click', order);

  document.getElementById('pinform').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = document.getElementById('pin').value.replace(/\D/g, '');
    var out = document.getElementById('pinmsg');
    if (v.length === 6) { out.textContent = 'Delivery in 3–5 days · COD available'; out.style.color = '#1F6B47'; }
    else { out.textContent = 'Sahi 6-digit pincode daalein'; out.style.color = '#B42318'; }
  });
  paint();
}

document.addEventListener('DOMContentLoaded', function () { setCommonLinks(); renderHome(); renderProduct(); });
