
const btnTinh = document.getElementById("btnTinh");

btnTinh.onclick = function () {
    // Lấy số người dùng nhập
    const so = Number(document.getElementById("so").value);

    // Lấy hàng đơn vị và hàng chục
    const soHangDV = so % 10;
    const soHangChuc = Math.floor(so / 10);

    // Tính tổng 2 ký số
    const tong = soHangDV + soHangChuc;

    // Hiển thị kết quả
    const pThongBao = document.getElementById("pThongBao");

    pThongBao.innerHTML = `Số ${so}: ${soHangChuc} + ${soHangDV} = ${tong}`;

    pThongBao.style.backgroundColor = "red";
    pThongBao.style.color = "white";
    pThongBao.style.textAlign = "center";
    pThongBao.style.fontSize = "30px";

    };


