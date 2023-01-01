import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchLogin from "../../shared/useFetchLogin";
import "./style.css";
import logo from "../../Assets/amazoff-logo.jpeg";

function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useFetchLogin(data ? data : null);
  const onSubmit = (data) => {
    setData(data);
    setLoading(false);
  };
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      {loading && <div></div>}
      <div className="container">
        <div className="login-logo">
          <img className="amazoff-logo" src={logo} alt="Amazoff-logo" />
        </div>
        <div className="mb-3 text-input">
          <input
            id="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-3 text-input">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="remember-me-container">
          <label className="remember-me-label" htmlFor="">
            <input className="remember-me-checkbox" type="checkbox" />
            Remember me
          </label>
        </div>
        <div className="login-button-container">
          <button className="login-button" type="submit">
            Sign in
          </button>
        </div>
        <div className="login-info">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </form>
  );
}
export default Login;
