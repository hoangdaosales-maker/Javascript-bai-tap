
const btnTinh = document.getElementById("btnTinh");

btnTinh.onclick = function () {
    // Lấy dữ liệu từ 5 ô nhập
    const so1 = Number(document.getElementById("so1").value);
    const so2 = Number(document.getElementById("so2").value);
    const so3 = Number(document.getElementById("so3").value);
    const so4 = Number(document.getElementById("so4").value);
    const so5 = Number(document.getElementById("so5").value);

    // Tính giá trị trung bình
    const trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    // Hiển thị kết quả
    const pThongBao = document.getElementById("pThongBao");
    pThongBao.innerHTML = 'Giá trị trung bình là: ' + trungBinh ;
    pThongBao.style.backgroundColor = "red";
    pThongBao.style.color = "white";
    pThongBao.style.textAlign = "center";
    pThongBao.style.fontSize = "30px";


}
