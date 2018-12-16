function NguoiDungService() {
    this.DangNhap = function (taiKhoan, matKhau) {
        var url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
        return axios({
            method: 'POST',
            url: url
        })
    }
}