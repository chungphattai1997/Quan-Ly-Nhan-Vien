var nguoiDungSV = new NguoiDungService();

function dangNhap() {
    var taiKhoan = document.getElementById('txtTaiKhoan').value;
    var matKhau = document.getElementById('txtMatKhau').value;
    nguoiDungSV.DangNhap(taiKhoan, matKhau).then(function (res) {
            if (res.data.MaLoaiNguoiDung === "QuanTri") {
                localStorage.setItem("currentUser", JSON.stringify(res.data));
                window.location.assign('index.html');
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
document.getElementById('btnDangNhap').addEventListener('click', dangNhap);