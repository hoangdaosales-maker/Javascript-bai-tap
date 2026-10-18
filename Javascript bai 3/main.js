
const btnQuyDoi = document.getElementById("btnQuyDoi");

btnQuyDoi.onclick = function () {
    // Lấy số tiền USD
    const tienUSD = Number(document.getElementById("tienUSD").value);

    // Quy đổi sang VND
    const tienVND = tienUSD * 23500;

    // Hiển thị kết quả
    const pThongBao = document.getElementById("pThongBao");

    
pThongBao.innerHTML = 'Số tiền sau quy đổi là: ' + tienVND.toLocaleString("vi-VN") + ' VND';
    pThongBao.style.backgroundColor = "red";
    pThongBao.style.color = "white";
    pThongBao.style.textAlign = "center";
    pThongBao.style.fontSize = "30px";
};
