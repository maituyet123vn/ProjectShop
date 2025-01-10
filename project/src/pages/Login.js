import React, { useState } from 'react'
import { register, login } from '../services/AuthService'

const Login = () => {
  const [formRegisterData, setFormRegisterData] = useState({});
  const [formLoginData, setFormLoginData] = useState({});

  /*  
    Hàm xử lý thay đổi giá trị của input trong form
    formLoginData: Hàm này xử lý sự kiện khi người dùng thay đổi giá trị của các input trong form. 
    Nó cập nhật formLoginData dựa trên tên và giá trị của input được thay đổi.
    */
    const handleLoginChange = (e) => {
      // Dùng cú pháp destructuring trong ES6
      const { name, value } = e.target;
      console.log(e.target);
      console.log(name)
      console.log(value)
      // Cập nhật formLoginData với giá trị mới khi input thay đổi
      // { ...formLoginData } là cách sử dụng cú pháp spread để tạo một bản sao mới của formLoginData
      // [name]: value: Đây là cú pháp sử dụng computed property name. 
      // Nó cho phép thêm hoặc cập nhật một thuộc tính trong đối tượng mới với tên là giá trị của biến name 
      // và gán giá trị value cho thuộc tính đó
      setFormLoginData((formLoginData) => ({ ...formLoginData, [name]: value }));
      console.log(formLoginData);
    };

    // Hàm xử lý khi người dùng lưu thông tin sản phẩm (thêm mới hoặc cập nhật)
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formLoginData);
    if (
      formLoginData.name &&
      formLoginData.password
    ) {
      try {
        const res = await login(formLoginData);
        console.log(res);
        alert("Đăng nhập thành công");
        let jsonData = JSON.stringify(res.data);
        localStorage.setItem("login", jsonData);
        //window.location.href = "/";
      } catch (error) {
        console.log("Login account error: ", error);
        alert("Đăng nhập không thành công");
      }
    } else {
      alert("Vui lòng nhập hợp lệ");
      return console.log("Không hợp lệ");
    }
  };

  /*  
    Hàm xử lý thay đổi giá trị của input trong form
    handleRegisterChange: Hàm này xử lý sự kiện khi người dùng thay đổi giá trị của các input trong form. 
    Nó cập nhật formRegisterData dựa trên tên và giá trị của input được thay đổi.
    */
  const handleRegisterChange = (e) => {
    // Dùng cú pháp destructuring trong ES6
    const { name, value } = e.target;
    console.log(e.target);
    console.log(name)
    console.log(value)
    // Cập nhật formRegisterData với giá trị mới khi input thay đổi
    // { ...formRegisterData } là cách sử dụng cú pháp spread để tạo một bản sao mới của formRegisterData
    // [name]: value: Đây là cú pháp sử dụng computed property name. 
    // Nó cho phép thêm hoặc cập nhật một thuộc tính trong đối tượng mới với tên là giá trị của biến name 
    // và gán giá trị value cho thuộc tính đó
    setFormRegisterData((formRegisterData) => ({ ...formRegisterData, [name]: value }));
    console.log(formRegisterData);
  };

  // Hàm xử lý khi người dùng lưu thông tin sản phẩm (thêm mới hoặc cập nhật)
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formRegisterData);
    if (formRegisterData.password != formRegisterData.rePassword) {
      alert("Mật khẩu không trùng khớp");
      return console.log("Mật khẩu không trùng khớp");
    } else {
      if (
        formRegisterData.name &&
        formRegisterData.password &&
        formRegisterData.fullname &&
        formRegisterData.email
      ) {
        try {
          const res = await register(formRegisterData);
          console.log(res);
          alert("Đăng ký thành công");
          window.location.href = "/";
        } catch (error) {
          console.log("Register account error: ", error);
          alert("Đăng ký không thành công");
        }
      } else {
        alert("Vui lòng nhập hợp lệ");
        return console.log("Không hợp lệ");
      }
    }
  };

  return (
    <>
      <div className="gray py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= Top Breadcrubms ======================== */}
      {/* ======================= Login Detail ======================== */}
      <section className="middle">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <form onSubmit={handleLogin}>
                <div className="card">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="id">Tên đăng nhập</label>
                      <input
                        type="text"
                        formcontrolname="name"
                        id="name"
                        name="name"
                        value={formLoginData.name}
                        onChange={handleLoginChange}
                        className="form-control"
                        placeholder="Input any Username"
                        aria-describedby="idHelpId"
                      />
                      <small id="idHelpId" className="text-muted">
                        Username is required
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Mật khẩu</label>
                      <input
                        type="password"
                        formcontrolname="password"
                        id="password"
                        name="password"
                        value={formLoginData.password}
                        onChange={handleLoginChange}
                        className="form-control"
                        placeholder="Input any password"
                        aria-describedby="nameHelpId"
                      />
                      <small id="nameHelpId" className="text-muted">
                        Password is required and at least 6 characters
                      </small>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mfliud">
              <form onSubmit={handleRegister} className="border p-3 rounded">
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Tên đăng nhập</label>
                    <input
                      type="text"
                      className="form-control"
                      formcontrolname="name"
                      id="name"
                      name="name"
                      value={formRegisterData.name}
                      onChange={handleRegisterChange}
                      placeholder="Vd: phuongnl21"
                    />
                    <div>
                      <div className="text-danger">
                        Tên đăng nhâp tối thiểu 6 ký tự.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Họ Và Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      formcontrolname="fullname"
                      id="fullname"
                      name="fullname"
                      value={formRegisterData.fullname}
                      onChange={handleRegisterChange}
                      placeholder="Vd: Nguyễn Lê Phương"
                    />
                    <div>
                      <div className="text-danger">
                        Họ Và Tên không được chứa từ 'ma tuý' hoặc 'hàng trắng'.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="text"
                    className="form-control"
                    formcontrolname="email"
                    id="email"
                    name="email"
                    value={formRegisterData.email}
                    onChange={handleRegisterChange}
                    placeholder="name@email.com*"
                  />
                  <div>
                    <div
                      className="text-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Email </strong> không hợp lệ
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Mật khẩu *</label>
                    <input
                      type="password"
                      className="form-control"
                      formcontrolname="password"
                      id="password"
                      name="password"
                      value={formRegisterData.password}
                      onChange={handleRegisterChange}
                      placeholder="Password*"
                    />
                    <div>
                      <div className="text-danger">Mật khẩu tối thiểu 6 ký tự.</div>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Nhập lại mật khẩu *</label>
                    <input
                      type="password"
                      className="form-control"
                      formcontrolname="rePassword"
                      id="rePassword"
                      name="rePassword"
                      value={formRegisterData.rePassword}
                      onChange={handleRegisterChange}
                      placeholder="Confirm Password*"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    Mật khẩu không khớp.
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-md full-width bg-dark text-light fs-md ft-medium"
                  >
                    Tạo tài khoản
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Login End ======================== */}
    </>
  )
}

export default Login