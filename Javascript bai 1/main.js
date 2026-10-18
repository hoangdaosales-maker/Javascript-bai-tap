
const btnTinhLuong = document.getElementById("btnTinhLuong");

btnTinhLuong.onclick = function () {
    // Lấy dữ liệu từ hai ô nhập
    let LuongMotNgay = document.getElementById("LuongMotNgay").value;
    let SoNgayLamViec = document.getElementById("SoNgayLamViec").value;

    // Chuyển chuỗi thành số
    LuongMotNgay = Number(LuongMotNgay);
    SoNgayLamViec = Number(SoNgayLamViec);

    // Tính tổng tiền lương
    let tongTien = LuongMotNgay * SoNgayLamViec;

    // Hiển thị trong Console
    console.log("Tổng tiền lương là: " + tongTien);
    const pThongBao = document.getElementById("pThongBao");
pThongBao.innerHTML = 'Tổng tiền lương là: ' + tongTien.toLocaleString("vi-VN") + ' VND';
pThongBao.style.backgroundColor = "red";
pThongBao.style.color = "white";
pThongBao.style.textAlign = "center";
pThongBao.style.fontSize = "30px";
};

