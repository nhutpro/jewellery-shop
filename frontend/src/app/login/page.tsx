import Button from "../components/Button/Button";
import { ICON } from "../components/Icon";
import { PLACEHOLDER } from "../components/Input";
import Input from "../components/Input/Input";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div className="login__container">
      <div className="login__greeting">
        <p>Chào Mừng Trở Lại!</p>
      </div>

      <div className="login__form">
        <div className="login__form-wrapper">
          <p className="login__form-title">Đăng Nhập</p>
          <form>
            <Input icon={ICON.LOGIN} placeholder={PLACEHOLDER.USERNAME} />
            <Input icon={ICON.LOGIN} placeholder={PLACEHOLDER.PASSWORD} />
            <Button text="Submit" />
          </form>
        </div>
        <div className="login__signup-button">
          <p>Bạn Muốn Tạo Tài Khoản Mới?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
