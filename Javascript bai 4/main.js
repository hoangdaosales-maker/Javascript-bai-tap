
const btnTinh = document.getElementById("btnTinh");

btnTinh.onclick = function () {
    // Lấy chiều dài và chiều rộng
    const chieuDai = Number(document.getElementById("chieuDai").value);
    const chieuRong = Number(document.getElementById("chieuRong").value);

    // Tính diện tích và chu vi
    const dienTich = chieuDai * chieuRong;
    const chuVi = (chieuDai + chieuRong) * 2;

    // Hiển thị kết quả
    const pThongBao = document.getElementById("pThongBao");

    pThongBao.innerHTML ='Diện tích: ' + dienTich +
        '<br>Chu vi: ' + chuVi;
        pThongBao.style.backgroundColor = "red";
        pThongBao.style.color = "white";
        pThongBao.style.textAlign = "center";
        pThongBao.style.fontSize = "30px";
};
