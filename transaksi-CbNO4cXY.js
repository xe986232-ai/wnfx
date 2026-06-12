import"./modulepreload-polyfill-Dezn_h7o.js";import{initializeApp as e}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getDatabase as t,onValue as n,ref as r}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";var i=t(e({apiKey:`AIzaSyAaPyl0-gKKhxKjhyCmqduUF11N6C1ngZ4`,authDomain:`omwnfx1.firebaseapp.com`,databaseURL:`https://omwnfx1-default-rtdb.asia-southeast1.firebasedatabase.app`,projectId:`omwnfx1`,storageBucket:`omwnfx1.firebasestorage.app`,messagingSenderId:`1063248927187`,appId:`1:1063248927187:web:6bd23f24517b1c2d53b726`,measurementId:`G-N4BK425V1X`})),a=localStorage.getItem(`userData`);a?o(JSON.parse(a).uid):document.getElementById(`orderContainer`).innerHTML=`
        <div class="empty-state">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Kamu belum terdaftar.</p>
            <a href="index.html" style="color:var(--accent-mint); font-size:12px; text-decoration:none;">Kembali ke Home →</a>
        </div>`;function o(e){let t=document.getElementById(`orderContainer`);n(r(i,`orderan/`+e),e=>{if(!e.exists()){t.innerHTML=`
                        <div class="empty-state">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>Belum ada transaksi.</p>
                            <a href="produk.html" style="color:var(--accent-mint); font-size:12px; text-decoration:none;">Mulai Belanja →</a>
                        </div>`;return}t.innerHTML=``;let n=e.val();Object.keys(n).map(e=>({id:e,...n[e]})).sort((e,t)=>t.timestamp-e.timestamp).forEach(e=>{let n=e.timestamp?new Date(e.timestamp).toLocaleDateString(`id-ID`):`N/A`,r=e.status?e.status.toLowerCase():`pending`,i=r===`success`||r===`berhasil`,a=`
                        <div class="order-card">
                            <img src="${e.avatar||e.itemImg||`https://via.placeholder.com/150`}" class="order-img" onerror="this.src='https://via.placeholder.com/150'">
                            <div class="order-info">
                                <h3>${e.productTitle||`Unknown Product`}</h3>
                                <p>${n} • ID: ${e.orderId?e.orderId.substring(0,8):e.id.substring(0,8)}</p>
                                ${i&&e.downloadUrl?`<a href="${e.downloadUrl}" class="btn-download" target="_blank"><i class="fa-solid fa-download"></i> DOWNLOAD</a>`:`<span class="status-badge ${i?`status-success`:`status-pending`}">${e.status||`Pending`}</span>`}
                            </div>
                            <div style="font-size: 13px; font-weight: 800; color: var(--accent-mint);">${e.price||`FREE`}</div>
                        </div>
                    `;t.innerHTML+=a})},e=>{console.error(`Gagal mengambil data:`,e),t.innerHTML=`<p style="text-align:center; font-size:11px; color:red;">Gagal memuat data pesanan.</p>`})}