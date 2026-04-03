const API_URL = 'https://backendcsdl.onrender.com/api'; 

const schemaConfig = {
    thongke: { title: 'Thống Kê Doanh Thu', icon: 'bx-pie-chart-alt-2', isDashboard: true },
    banhang: { title: 'Bán Hàng', icon: 'bx-cart-add', isPOS: true },
    loaisp: {
        title: 'Loại Sản Phẩm', endpoint: '/loaisp', primaryKey: 'MaLoai', icon: 'bx-category',
        fields: [ { key: 'MaLoai', label: 'Mã Loại', type: 'text' }, { key: 'TenLoai', label: 'Tên Loại', type: 'text' } ]
    },
    sanpham: {
        title: 'Sản Phẩm', endpoint: '/sanpham', primaryKey: 'MaSP', icon: 'bx-box',
        fields: [ { key: 'MaSP', label: 'Mã Sản Phẩm', type: 'text' }, { key: 'Ten', label: 'Tên Sản Phẩm', type: 'text' }, { key: 'MoTa', label: 'Mô Tả', type: 'text' }, { key: 'DonGia', label: 'Đơn Giá', type: 'number' }, { key: 'MaLoai', label: 'Loại Sản Phẩm', type: 'select', sourceEndpoint: '/loaisp', valueKey: 'MaLoai', labelKey: 'TenLoai' } ]
    },
    donvicungcap: {
        title: 'Nhà Cung Cấp', endpoint: '/donvicungcap', primaryKey: 'MaDV', icon: 'bx-buildings',
        fields: [ { key: 'MaDV', label: 'Mã NCC', type: 'text' }, { key: 'TenDV', label: 'Tên NCC', type: 'text' }, { key: 'SDT', label: 'Số điện thoại', type: 'text' }, { key: 'DiaChi', label: 'Địa Chỉ', type: 'text' } ]
    },
    diadiem: {
        title: 'Địa Điểm (Kho/Chi nhánh)', endpoint: '/diadiem', primaryKey: 'MaDD', icon: 'bx-store',
        fields: [ { key: 'MaDD', label: 'Mã Địa Điểm', type: 'text' }, { key: 'Ten', label: 'Tên Địa Điểm', type: 'text' }, { key: 'SoNha', label: 'Số Nhà', type: 'text' }, { key: 'Phuong', label: 'Phường', type: 'text' }, { key: 'Quan', label: 'Quận', type: 'text' }, { key: 'ThanhPho', label: 'Thành Phố', type: 'text' }, { key: 'LoaiDD', label: 'Loại', type: 'text' } ]
    },
    nhanvien: {
        title: 'Nhân Viên', endpoint: '/nhanvien', primaryKey: 'MaNV', icon: 'bx-id-card',
        fields: [ { key: 'MaNV', label: 'Mã NV', type: 'text' }, { key: 'HoTen', label: 'Họ Tên', type: 'text' }, { key: 'SDT', label: 'SĐT', type: 'text' }, { key: 'Email', label: 'Email', type: 'text' }, { key: 'MucLuong', label: 'Mức Lương', type: 'number' }, { key: 'ViTri', label: 'Vị Trí', type: 'text' }, { key: 'MaDD', label: 'Nơi làm việc', type: 'select', sourceEndpoint: '/diadiem', valueKey: 'MaDD', labelKey: 'Ten' } ]
    },
    khachhang: {
        title: 'Khách Hàng', endpoint: '/khachhang', primaryKey: 'MaKH', icon: 'bx-group',
        fields: [ { key: 'MaKH', label: 'Mã KH', type: 'text' }, { key: 'TenKH', label: 'Tên KH', type: 'text' }, { key: 'SDT', label: 'SĐT', type: 'text' }, { key: 'Email', label: 'Email', type: 'email' }, { key: 'TheTichDiem', label: 'Thẻ Tích Điểm', type: 'text' }, { key: 'DiaChi', label: 'Địa Chỉ', type: 'text' } ]
    },
    donhang: {
        title: 'Hóa Đơn', endpoint: '/donhang', primaryKey: 'MaDH', icon: 'bx-receipt',
        fields: [ 
            { key: 'MaDH', label: 'Mã Hóa Đơn', type: 'text' }, 
            { key: 'NgayMua', label: 'Ngày Lập', type: 'date' }, 
            { key: 'TongTien', label: 'Tổng Tiền', type: 'number' },
            { key: 'PhuongThuc', label: 'Thanh Toán', type: 'text' },
            { key: 'TrangThaiGD', label: 'Trạng Thái', type: 'text' },
            { key: 'MaKH', label: 'Khách Hàng', type: 'select', sourceEndpoint: '/khachhang', valueKey: 'MaKH', labelKey: 'TenKH'}, 
            { key: 'MaNV', label: 'Thu Ngân', type: 'select', sourceEndpoint: '/nhanvien', valueKey: 'MaNV', labelKey: 'HoTen'} 
        ]
    },
    phieukho: {
        title: 'Lịch sử Phiếu Kho', endpoint: '/phieukho', primaryKey: 'MaPhieu', icon: 'bx-transfer-alt',
        fields: [ 
            { key: 'MaPhieu', label: 'Mã Phiếu', type: 'text', hideInForm: true }, 
            { key: 'NgayLap', label: 'Ngày Lập', type: 'date', hideInForm: true }, 
            { key: 'LoaiPhieu', label: 'Loại Phiếu', type: 'select', options: [{val: 'Nhập NCC', lbl: 'Nhập từ Nhà Cung Cấp'}, {val: 'Điều chuyển', lbl: 'Điều chuyển kho'}] }, 
            { key: 'MaNV', label: 'Người Lập (Thủ kho)', type: 'select', sourceEndpoint: '/nhanvien', valueKey: 'MaNV', labelKey: 'HoTen' }, 
            { key: 'MaDD', label: 'Địa Điểm', type: 'select', sourceEndpoint: '/diadiem', valueKey: 'MaDD', labelKey: 'Ten', hideInForm: true },
            { key: 'MaSP', label: 'Sản Phẩm Nhập', type: 'select', sourceEndpoint: '/sanpham', valueKey: 'MaSP', labelKey: 'Ten', hideInTable: true },
            { key: 'MaKe', label: 'Cất vào Kệ', type: 'select', sourceEndpoint: '/kehang', valueKey: 'MaKe', labelKey: 'TenKe', hideInTable: true },
            { key: 'SoLuong', label: 'Số Lượng Nhập', type: 'number', hideInTable: true }
        ]
    },
    khuvuc: {
        title: 'Khu Vực', endpoint: '/khuvuc', primaryKey: 'MaKhu', icon: 'bx-map-alt',
        fields: [ { key: 'MaKhu', label: 'Mã Khu', type: 'text' }, { key: 'TenKhu', label: 'Tên Khu Vực', type: 'text' }, { key: 'MaDD', label: 'Thuộc Địa Điểm', type: 'select', sourceEndpoint: '/diadiem', valueKey: 'MaDD', labelKey: 'Ten' } ]
    },
    kehang: {
        title: 'Kệ Hàng', endpoint: '/kehang', primaryKey: 'MaKe', icon: 'bx-server',
        fields: [ { key: 'MaKe', label: 'Mã Kệ', type: 'text' }, { key: 'TenKe', label: 'Tên Kệ', type: 'text' }, { key: 'SucChua', label: 'Sức Chứa (Cái)', type: 'number' }, { key: 'SoTang', label: 'Số Tầng', type: 'number' }, { key: 'MaKhu', label: 'Thuộc Khu', type: 'select', sourceEndpoint: '/khuvuc', valueKey: 'MaKhu', labelKey: 'TenKhu' } ]
    },
    tonkho: {
        title: 'Tồn Kho', endpoint: '/tonkho', primaryKey: 'MaSP', icon: 'bx-package',
        fields: [ { key: 'MaSP', label: 'Sản Phẩm', type: 'select', sourceEndpoint: '/sanpham', valueKey: 'MaSP', labelKey: 'Ten' }, { key: 'MaKe', label: 'Nằm trên Kệ', type: 'select', sourceEndpoint: '/kehang', valueKey: 'MaKe', labelKey: 'TenKe' }, { key: 'SoLuong', label: 'Số Lượng', type: 'number' } ]
    },
};

const STAFF_MENUS = ['banhang', 'khachhang', 'donhang', 'phieukho'];
const ADMIN_MENUS = Object.keys(schemaConfig);

let currentEntityKey = null;
let isAdmin = true;
let chartInstance1 = null;
let chartInstance2 = null;

let cart = [];
let posProducts = [];
let posStaffs = [];
let posCustomers = [];
const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 2500 });
const formatVND = (num) => Number(num).toLocaleString('vi-VN') + ' đ';

const sidebarMenu = document.getElementById('sidebar-menu');
for (const [key, config] of Object.entries(schemaConfig)) {
    sidebarMenu.innerHTML += `<li id="li-${key}"><a onclick="loadEntity('${key}')" id="menu-${key}"><i class='bx ${config.icon}'></i> ${config.title}</a></li>`;
}

async function loadEntity(key) {
    document.querySelectorAll('.nav-list a').forEach(el => el.classList.remove('active'));
    document.getElementById(`menu-${key}`).classList.add('active');
    currentEntityKey = key;
    const config = schemaConfig[key];

    document.getElementById('page-title').innerText = config.title;
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('btn-add-new').style.display = 'none';
    
    if (config.isDashboard) return renderDashboard();
    if (config.isPOS) return renderPOS(); 

    document.getElementById('search-container').style.display = 'flex';
    document.getElementById('search-input').value = '';
    
    if (isAdmin && key !== 'donhang' && key !== 'tonkho') {
        document.getElementById('btn-add-new').style.display = 'flex'; 
    }

    document.getElementById('table-container').innerHTML = `<div style="text-align:center; padding: 40px;"><i class='bx bx-loader bx-spin' style="font-size: 30px; color: var(--primary);"></i><p style="margin-top:10px;">Đang tải dữ liệu ${config.title}...</p></div>`;

    try {
        const res = await axios.get(`${API_URL}${config.endpoint}`);
        const data = res.data;

        let visibleFields = config.fields.filter(f => !f.hideInTable);

        let tableHTML = `<table><thead><tr>`;
        visibleFields.forEach(f => tableHTML += `<th>${f.label}</th>`);
        
        let hasAction = isAdmin || key === 'donhang' || key === 'phieukho';
        if (hasAction) tableHTML += `<th width="200" style="text-align:center;">Hành động</th>`;
        tableHTML += `</tr></thead><tbody>`;

        if (data.length === 0) {
            tableHTML += `<tr><td colspan="${visibleFields.length + (hasAction ? 1 : 0)}" style="text-align:center; color:#999; padding:20px;">Chưa có dữ liệu nào.</td></tr>`;
        } else {
            data.forEach(item => {
                tableHTML += `<tr>`;
                visibleFields.forEach(f => {
                    let cellValue = item[f.key] !== null && item[f.key] !== undefined ? item[f.key] : '';
                    
                    if (f.type === 'date' && cellValue) {
                        let d = new Date(cellValue);
                        let h = String(d.getHours()).padStart(2, '0');
                        let m = String(d.getMinutes()).padStart(2, '0');
                        let s = String(d.getSeconds()).padStart(2, '0');
                        let day = String(d.getDate()).padStart(2, '0');
                        let mon = String(d.getMonth() + 1).padStart(2, '0');
                        let yr = d.getFullYear();
                        cellValue = `${h}:${m}:${s} - ${day}/${mon}/${yr}`;
                    }
                    
                    if ((f.label.includes("Giá") || f.label.includes("Tiền") || f.label.includes("Lương")) && cellValue !== '') cellValue = formatVND(cellValue);
                    
                    if(f.key === 'TrangThaiGD' && cellValue === 'Thành công') cellValue = `<span class="badge badge-success">${cellValue}</span>`;
                    else if(f.key === 'TrangThaiGD') cellValue = `<span class="badge" style="background:#eee;">${cellValue}</span>`;
                    
                    tableHTML += `<td>${cellValue}</td>`;
                });

                if (hasAction) {
                    tableHTML += `<td style="text-align:center; white-space: nowrap;">`;
                    const idVal = item[config.primaryKey];
                    const encodedItem = encodeURIComponent(JSON.stringify(item));
                    
                    if (key === 'phieukho') {
                        tableHTML += `<button class="btn-add" style="background:#e74c3c; padding: 6px 10px; font-size: 13px; display:inline-block; margin-right:5px;" onclick="printPDF('${idVal}')"><i class='bx bxs-file-pdf'></i> Xuất Phiếu</button>`;
                    } 
                    if (key === 'donhang') {
                        tableHTML += `<button class="btn-add" style="background:#28a745; padding: 6px 10px; font-size: 13px; display:inline-block; margin-right:5px;" onclick="printInvoicePDF('${idVal}')"><i class='bx bx-receipt'></i> In Hóa Đơn</button>`;
                    }
                    
                    if (isAdmin && key !== 'phieukho' && key !== 'donhang') {
                        tableHTML += `<button class="action-btn btn-edit" title="Sửa" onclick="showModal(false, '${encodedItem}')"><i class='bx bx-edit'></i></button>
                                      <button class="action-btn btn-delete" title="Xóa" onclick="deleteRecord('${idVal}')"><i class='bx bx-trash'></i></button>`;
                    }
                    tableHTML += `</td>`;
                }
                tableHTML += `</tr>`;
            });
        }
        tableHTML += `</tbody></table>`;
        document.getElementById('table-container').innerHTML = tableHTML;
    } catch (error) {
        document.getElementById('table-container').innerHTML = `<div style="text-align:center; color:#e74c3c; padding:20px;"><i class='bx bx-error-alt' style="font-size: 40px;"></i><p>Lỗi kết nối Backend: ${error.message}</p></div>`;
    }
}

async function renderPOS() {
    document.getElementById('table-container').innerHTML = `<div style="text-align:center; padding: 40px;"><i class='bx bx-loader bx-spin' style="font-size: 30px; color: var(--primary);"></i><p style="margin-top:10px;">Đang tải máy POS...</p></div>`;
    cart = []; 
    try {
        // GỌI THÊM API LẤY DANH SÁCH KHÁCH HÀNG
        const [resSP, resNV, resKH] = await Promise.all([ 
            axios.get(`${API_URL}/pos/sanpham`), 
            axios.get(`${API_URL}/nhanvien`),
            axios.get(`${API_URL}/khachhang`)
        ]);
        posProducts = resSP.data; 
        posStaffs = resNV.data;
        posCustomers = resKH.data;

        let posHTML = `
            <div class="pos-container">
                <div class="pos-products">
                    <div style="grid-column: 1 / -1; margin-bottom: 5px;">
                        <div class="search-box" style="margin: 0; width: 100%; background: #fff; padding: 10px 15px; max-width: none;">
                            <i class='bx bx-search'></i>
                            <input type="text" id="pos-search-input" placeholder="Nhập tên đồ chơi để tìm nhanh..." onkeyup="searchPOS()" style="width: 100%; font-size: 15px;">
                        </div>
                    </div>
                    ${posProducts.map(sp => `
                        <div class="product-card pos-item" onclick="addToCart('${sp.MaSP}', '${sp.Ten}', ${sp.DonGia}, ${sp.TongTonKho})">
                            <h4>${sp.Ten}</h4><div class="price">${formatVND(sp.DonGia)}</div><div class="stock">Kho: ${sp.TongTonKho}</div>
                        </div>
                    `).join('')}
                    ${posProducts.length === 0 ? '<p style="color:#999; grid-column: 1/-1; text-align:center; margin-top:50px;">Kho trống.</p>' : ''}
                </div>
                <div class="pos-cart">
                    <div class="cart-header">Giỏ Hàng Của Khách</div>
                    <div class="cart-items" id="cart-items"><div style="text-align:center; color:#999; margin-top:20px;">Giỏ hàng đang trống</div></div>
                    <div class="cart-footer">
                        <div class="cart-total"><span>Tổng cộng:</span><span id="cart-total-price">0 đ</span></div>
                        <div class="cart-form">
                            <select id="pos-khachhang">
                                <option value="" selected>-- Khách vãng lai (Bỏ trống nếu không có thông tin) --</option>
                                ${posCustomers.map(kh => `<option value="${kh.MaKH}">${kh.TenKH} - SĐT: ${kh.SDT || 'Không có'}</option>`).join('')}
                            </select>

                            <select id="pos-nhanvien"><option value="" disabled selected>-- Chọn Nhân Viên Bán (Bắt buộc) --</option>${posStaffs.map(nv => `<option value="${nv.MaNV}">${nv.HoTen} (${nv.MaNV})</option>`).join('')}</select>
                            <select id="pos-pttt"><option value="Tiền mặt" selected>Thanh toán: Tiền mặt</option><option value="Chuyển khoản">Thanh toán: Chuyển khoản</option><option value="Quẹt thẻ">Thanh toán: Quẹt thẻ</option></select>
                            <button class="btn-checkout" id="btn-checkout" onclick="processCheckout()"><i class='bx bx-check-circle'></i> THANH TOÁN</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('table-container').innerHTML = posHTML;
        document.getElementById('btn-checkout').disabled = true;
    } catch (error) { document.getElementById('table-container').innerHTML = `<div style="text-align:center; color:#e74c3c; padding:20px;"><i class='bx bx-error-alt' style="font-size: 40px;"></i><p>Lỗi tải POS: ${error.message}</p></div>`; }
}
function searchPOS() {
    let input = document.getElementById("pos-search-input").value.toLowerCase();
    let cards = document.querySelectorAll(".pos-item");
    cards.forEach(card => {
        let name = card.querySelector("h4").innerText.toLowerCase();
        card.style.display = name.includes(input) ? "" : "none";
    });
}

function addToCart(maSP, ten, donGia, tonKho) {
    const existItem = cart.find(item => item.MaSP === maSP);
    if (existItem) {
        if (existItem.SoLuongMua < tonKho) existItem.SoLuongMua++;
        else Toast.fire({ icon: 'warning', title: 'Hết hàng trong kho!' });
    } else cart.push({ MaSP: maSP, Ten: ten, DonGiaBan: donGia, SoLuongMua: 1, TonKho: tonKho });
    updateCartUI();
}

function changeQty(maSP, delta) {
    const itemIndex = cart.findIndex(item => item.MaSP === maSP);
    if (itemIndex > -1) {
        const newQty = cart[itemIndex].SoLuongMua + delta;
        if (newQty > cart[itemIndex].TonKho) return Toast.fire({ icon: 'warning', title: 'Không đủ hàng!' });
        if (newQty <= 0) cart.splice(itemIndex, 1);
        else cart[itemIndex].SoLuongMua = newQty;
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const btnCheckout = document.getElementById('btn-checkout');
    const totalPriceEl = document.getElementById('cart-total-price');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div style="text-align:center; color:#999; margin-top:20px;">Giỏ hàng đang trống</div>';
        totalPriceEl.innerText = '0 đ'; btnCheckout.disabled = true; return;
    }
    let html = ''; let total = 0;
    cart.forEach(item => {
        total += (item.DonGiaBan * item.SoLuongMua);
        html += `<div class="cart-item"><div class="cart-item-info"><h5>${item.Ten}</h5><p>${formatVND(item.DonGiaBan)}</p></div><div class="cart-item-actions"><button onclick="changeQty('${item.MaSP}', -1)">-</button><span>${item.SoLuongMua}</span><button onclick="changeQty('${item.MaSP}', 1)">+</button></div></div>`;
    });
    cartItemsDiv.innerHTML = html; totalPriceEl.innerText = formatVND(total); btnCheckout.disabled = false; cartItemsDiv.scrollTop = cartItemsDiv.scrollHeight;
}

async function processCheckout() {
    const btnCheckout = document.getElementById('btn-checkout');
    btnCheckout.disabled = true; 
    btnCheckout.innerHTML = `<i class='bx bx-loader bx-spin'></i> Đang xử lý...`;
    const maNV = document.getElementById('pos-nhanvien').value; 
    const pttt = document.getElementById('pos-pttt').value;
    const maKH = document.getElementById('pos-khachhang').value || null;
    if (!maNV) {
        btnCheckout.disabled = false; btnCheckout.innerHTML = `<i class='bx bx-check-circle'></i> THANH TOÁN`;
        return Swal.fire('Lỗi', 'Vui lòng chọn Nhân viên bán!', 'warning');
    }
    let tongTien = 0; cart.forEach(item => tongTien += (item.DonGiaBan * item.SoLuongMua));
    let maDonHangMoi = null;
    try { 
        const resId = await axios.get(`${API_URL}/donhang/generate-id`); 
        maDonHangMoi = resId.data.newId; 
    } catch (error) { 
        btnCheckout.disabled = false; btnCheckout.innerHTML = `<i class='bx bx-check-circle'></i> THANH TOÁN`;
        return Swal.fire('Lỗi', 'Không thể tạo mã đơn hàng', 'error'); 
    }

    if (pttt === 'Chuyển khoản') {
        const BANK_ID = 'MB'; const STK = '0975810393'; const TEN_TK = 'NGUYEN DINH CUONG QUOC'; 
        const qrUrl = `https://img.vietqr.io/image/${BANK_ID}-${STK}-compact2.png?amount=${tongTien}&addInfo=Thanh toan ${maDonHangMoi}&accountName=${TEN_TK}`;
        let checkInterval;
        const result = await Swal.fire({
            title: `Mã Đơn: ${maDonHangMoi}`,
            html: `Vui lòng quét QR để thanh toán <b>${formatVND(tongTien)}</b><br><br><span style="color:#007bff; font-weight:600; font-size:16px;"><i class='bx bx-loader-circle bx-spin' ></i> Chờ tiền vào...</span>`,
            imageUrl: qrUrl, imageWidth: 300, imageHeight: 300, showCancelButton: true, showConfirmButton: false, cancelButtonText: 'Hủy Đơn Này', allowOutsideClick: false,
            didOpen: () => { 
                checkInterval = setInterval(async () => { 
                    try { 
                        const checkRes = await axios.get(`${API_URL}/check-payment/${maDonHangMoi}`); 
                        if (checkRes.data.isPaid) { clearInterval(checkInterval); Swal.close({ isPaid: true }); } 
                    } catch(e) {} 
                }, 1500); 
            },
            willClose: () => clearInterval(checkInterval)
        });
        if (result.dismiss && !(result.value && result.value.isPaid)) {
            btnCheckout.disabled = false; btnCheckout.innerHTML = `<i class='bx bx-check-circle'></i> THANH TOÁN`;
            return; 
        }
    }

    try {
        const payload = { MaDonHang: maDonHangMoi, NgayMua: new Date().toISOString().split('T')[0], PhuongThucThanhToan: pttt, MaKH: maKH, MaNV: maNV, ChiTiet: cart.map(item => ({ MaSP: item.MaSP, SoLuongMua: item.SoLuongMua, DonGiaBan: item.DonGiaBan })) };
        const res = await axios.post(`${API_URL}/donhang`, payload);
        Swal.fire({ icon: 'success', title: 'Thành công!', text: res.data.message, timer: 3000, showConfirmButton: false });
        renderPOS(); 
    } catch (error) {
        Swal.fire('Lỗi', error.response?.data?.error || error.message, 'error');
        btnCheckout.disabled = false; btnCheckout.innerHTML = `<i class='bx bx-check-circle'></i> THANH TOÁN`;
    }
}

async function renderDashboard() {
    document.getElementById('table-container').innerHTML = `<div style="text-align:center; padding: 40px;"><i class='bx bx-loader bx-spin' style="font-size: 30px; color: var(--primary);"></i><p style="margin-top:10px;">Đang tổng hợp dữ liệu...</p></div>`;
    try {
        const res = await axios.get(`${API_URL}/thongke`); const data = res.data;
        if(chartInstance1) chartInstance1.destroy(); if(chartInstance2) chartInstance2.destroy();
        document.getElementById('table-container').innerHTML = `
            <div class="dashboard-cards">
                <div class="card"><div class="card-icon"><i class='bx bx-money'></i></div><div class="card-info"><p>Tổng Doanh Thu</p><h3>${formatVND(data.tongDoanhThu)}</h3></div></div>
                <div class="card"><div class="card-icon green"><i class='bx bx-shopping-bag'></i></div><div class="card-info"><p>Tổng Hóa Đơn</p><h3>${data.tongDonHang} Đơn</h3></div></div>
            </div>
            <div class="charts-container">
                <div class="chart-box"><h4>Doanh Thu Theo Chi Nhánh</h4><canvas id="branchChart"></canvas></div>
                <div class="chart-box"><h4>Doanh Thu Theo Thành Phố</h4><canvas id="cityChart"></canvas></div>
            </div>
        `;
        const ctx1 = document.getElementById('branchChart').getContext('2d'); chartInstance1 = new Chart(ctx1, { type: 'bar', data: { labels: data.chiNhanh.map(i => i.ChiNhanh), datasets: [{ label: 'Doanh thu (VNĐ)', data: data.chiNhanh.map(i => i.DoanhThu), backgroundColor: '#007bff' }] }});
        const ctx2 = document.getElementById('cityChart').getContext('2d'); chartInstance2 = new Chart(ctx2, { type: 'doughnut', data: { labels: data.thanhPho.map(i => i.ThanhPho), datasets: [{ data: data.thanhPho.map(i => i.DoanhThu), backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#ff9f40', '#9966ff'] }] }});
    } catch (error) { document.getElementById('table-container').innerHTML = `<div style="text-align:center; color:#e74c3c; padding:20px;"><i class='bx bx-error-alt' style="font-size: 40px;"></i><p>Lỗi tải thống kê: ${error.message}</p></div>`; }
}

async function showModal(isAdd = true, encodedData = null) {
    const config = schemaConfig[currentEntityKey];
    const itemData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : {};
    if (config.fields.some(f => f.type === 'select')) Swal.fire({ title: 'Đang tải...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    
    let htmlInputs = '';
    for (let i = 0; i < config.fields.length; i++) {
        const f = config.fields[i]; 
        
        if (f.hideInForm) continue; 

        const isPK = (f.key === config.primaryKey);
        if (isAdd && isPK && currentEntityKey !== 'tonkho') continue;
        let val = isAdd ? '' : (itemData[f.key] || '');
        if(!isAdd && f.type === 'date' && val) val = new Date(val).toISOString().split('T')[0];
        let inputState = (!isAdd && isPK) ? 'disabled style="background:#eee; cursor:not-allowed;"' : '';
        
        if (f.type === 'select') {
            if (f.options) {
                htmlInputs += `<select id="swal-${f.key}" class="swal2-select" style="display:flex; height:45px;" ${inputState}>
                    <option value="" disabled ${!val ? 'selected' : ''}>-- Chọn ${f.label} --</option>
                    ${f.options.map(opt => `<option value="${opt.val}" ${opt.val === val ? 'selected' : ''}>${opt.lbl}</option>`).join('')}
                </select>`;
            } else {
                try {
                    const resD = await axios.get(`${API_URL}${f.sourceEndpoint}`);
                    htmlInputs += `<select id="swal-${f.key}" class="swal2-select" style="display:flex; height:45px;" ${inputState}><option value="" disabled ${!val ? 'selected' : ''}>-- Chọn ${f.label} --</option>${resD.data.map(opt => `<option value="${opt[f.valueKey]}" ${String(opt[f.valueKey])===String(val)?'selected':''}>${opt[f.labelKey]} (${opt[f.valueKey]})</option>`).join('')}</select>`;
                } catch (err) { htmlInputs += `<input id="swal-${f.key}" class="swal2-input" value="Lỗi tải dữ liệu" disabled>`; }
            }
        } else { 
            htmlInputs += `<input id="swal-${f.key}" type="${f.type}" class="swal2-input" placeholder="${f.label}" value="${val}" ${inputState}>`; 
        }
    }
    Swal.close();
    const { value: formValues } = await Swal.fire({
        title: isAdd ? `Thêm mới ${config.title}` : `Sửa ${config.title}`, html: htmlInputs, focusConfirm: false, showCancelButton: true, confirmButtonText: 'Lưu dữ liệu', cancelButtonText: 'Hủy', width: '600px', preConfirm: () => {
            let data = {}; config.fields.forEach(f => { const el = document.getElementById(`swal-${f.key}`); if(el) data[f.key] = el.value; }); return data;
        }
    });
    if (formValues) {
        try {
            if (isAdd) await axios.post(`${API_URL}${config.endpoint}`, formValues); else await axios.put(`${API_URL}${config.endpoint}/${itemData[config.primaryKey]}`, formValues);
            Toast.fire({ icon: 'success', title: isAdd ? 'Thành công!' : 'Đã cập nhật!' }); loadEntity(currentEntityKey);
        } catch (error) { Swal.fire('Lỗi', error.response?.data?.error || error.message, 'error'); }
    }
}

function deleteRecord(id) {
    Swal.fire({ title: 'Bạn có chắc?', text: `Dữ liệu mã [${id}] sẽ bị xóa!`, icon: 'warning', showCancelButton: true, confirmButtonColor: '#e74c3c', confirmButtonText: 'Xóa ngay' }).then(async (result) => {
        if (result.isConfirmed) {
            try { await axios.delete(`${API_URL}${schemaConfig[currentEntityKey].endpoint}/${id}`); Toast.fire({ icon: 'success', title: 'Đã xóa!' }); loadEntity(currentEntityKey); } catch (error) { Swal.fire('Lỗi!', 'Không thể xóa (dính khóa ngoại).', 'error'); }
        }
    });
}

function searchTable() {
    let input = document.getElementById("search-input").value.toLowerCase();
    document.querySelectorAll("#table-container tbody tr").forEach(row => { if(row.cells.length > 1) row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none"; });
}

document.getElementById('btn-add-new').addEventListener('click', () => showModal(true));
function applyRole(adminMode) {
    isAdmin = adminMode;
    document.getElementById('lbl-admin').style.fontWeight = adminMode ? '700' : '400'; document.getElementById('lbl-admin').style.color = adminMode ? '#007bff' : '#888';
    document.getElementById('lbl-nv').style.fontWeight = adminMode ? '400' : '700'; document.getElementById('lbl-nv').style.color = adminMode ? '#888' : '#28a745';
    ADMIN_MENUS.forEach(key => { const li = document.getElementById(`li-${key}`); if (li) li.style.display = (!adminMode && !STAFF_MENUS.includes(key)) ? 'none' : ''; });
    if (!adminMode && currentEntityKey && !STAFF_MENUS.includes(currentEntityKey)) {
        currentEntityKey = null; document.querySelectorAll('.nav-list a').forEach(el => el.classList.remove('active')); document.getElementById('page-title').innerText = 'Chào mừng'; document.getElementById('table-container').innerHTML = `<div style="text-align:center; margin-top:60px;"><i class='bx bx-lock' style="font-size:48px; color:#e74c3c;"></i><p>Bạn không có quyền truy cập.</p></div>`;
    } else if (currentEntityKey) { loadEntity(currentEntityKey); }
}
document.getElementById('role-toggle').addEventListener('change', function () { applyRole(this.checked); });

async function printPDF(maPhieu) {
    try {
        Swal.fire({ title: 'Đang tạo PDF...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
        const res = await axios.get(`${API_URL}/phieukho/${maPhieu}/chitiet`);
        const data = res.data;
        Swal.close();
        if (!data || data.length === 0) return Swal.fire('Lỗi', 'Phiếu kho này bị rỗng!', 'error');
        const p = data[0];
        
        let d = new Date(p.NgayLap);
        let timeFmt = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} - ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

        const printWindow = window.open('', '_blank');
        printWindow.document.head.innerHTML = `<meta charset="UTF-8"><title>Phiếu Kho - ${p.MaPhieu}</title><style>body { font-family: Arial; padding: 40px; color: #222; }.header { text-align: center; border-bottom: 2px solid #222; margin-bottom: 30px; }table { width: 100%; border-collapse: collapse; margin-top: 20px; }th, td { border: 1px solid #aaa; padding: 10px; }th { background: #eee; }.footer { display: flex; justify-content: space-around; margin-top: 50px; }</style>`;
        printWindow.document.body.innerHTML = `<div class="header"><h1>PHIẾU KHO: ${p.LoaiPhieu.toUpperCase()}</h1><p>Mã: ${p.MaPhieu} | Ngày lập: ${timeFmt}</p></div><p><b>Người lập:</b> ${p.NguoiLap}</p><p><b>Cất tại:</b> ${p.TenKho}</p><table><thead><tr><th>STT</th><th>Sản phẩm</th><th>Số lượng</th></tr></thead><tbody>${data.map((item, i) => `<tr><td>${i + 1}</td><td>${item.TenSP}</td><td>${item.SoLuongNhap}</td></tr>`).join('')}</tbody></table><div class="footer"><div>Người lập phiếu<br><i>(Ký, ghi rõ họ tên)</i></div><div>Thủ kho<br><i>(Ký, ghi rõ họ tên)</i></div><div>Quản lý<br><i>(Ký, đóng dấu)</i></div></div>`;
        printWindow.onload = () => { printWindow.focus(); printWindow.print(); };
    } catch (e) { Swal.fire('Lỗi', 'Không thể tải dữ liệu', 'error'); }
}

async function printInvoicePDF(maDH) {
    try {
        Swal.fire({ title: 'Đang tạo Hóa Đơn...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
        const res = await axios.get(`${API_URL}/donhang/${maDH}/chitiet`);
        const data = res.data;
        Swal.close();
        if (!data || data.length === 0) return Swal.fire('Lỗi', 'Đơn hàng rỗng!', 'error');
        const p = data[0];
        
        let d = new Date(p.NgayMua);
        let timeFmt = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} - ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

        const printWindow = window.open('', '_blank');
        printWindow.document.head.innerHTML = `<meta charset="UTF-8"><title>Hóa đơn - ${p.MaDH}</title><style>body { font-family: monospace; padding: 30px; max-width: 600px; margin: auto; }table { width: 100%; border-collapse: collapse; margin-top: 15px; }th, td { border-bottom: 1px dashed #ddd; padding: 8px; }.total { text-align: right; font-weight: bold; margin-top: 20px; font-size: 16px;}.payment-method { text-align: right; margin-top: 10px; font-style: italic; color: #555; }</style>`;
        printWindow.document.body.innerHTML = `<h2 style="text-align:center;">HÓA ĐƠN MUA HÀNG</h2><p><b>Mã đơn:</b> ${p.MaDH}</p><p><b>Ngày mua:</b> ${timeFmt}</p><p><b>Khách hàng:</b> ${p.TenKH || 'Khách lẻ'}</p><p><b>Thu ngân:</b> ${p.NguoiBan}</p><table><thead><tr><th style="text-align: left;">Sản phẩm</th><th>SL</th><th style="text-align: right;">Đơn Giá</th><th style="text-align: right;">Thành Tiền</th></tr></thead><tbody>${data.map(item => `<tr><td>${item.TenSP}</td><td style="text-align: center;">${item.SoLuongMua}</td><td style="text-align: right;">${formatVND(item.DonGiaBan)}</td><td style="text-align: right;">${formatVND(item.ThanhTien)}</td></tr>`).join('')}</tbody></table><div class="payment-method">Hình thức thanh toán: <b>${p.PhuongThuc || 'Tiền mặt'}</b></div><div class="total">TỔNG THANH TOÁN: ${formatVND(p.TongTien)}</div><p style="text-align:center; margin-top:40px;">Cảm ơn quý khách đã mua sắm tại cửa hàng!<br>Hẹn gặp lại quý khách!</p>`;
        printWindow.onload = () => { printWindow.focus(); printWindow.print(); };
    } catch (e) { Swal.fire('Lỗi', 'Không thể xuất hóa đơn', 'error'); }
}