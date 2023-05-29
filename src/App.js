import React from "react";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark " : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>login</h1>
        <div className="container">
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-apple"></i>
          </div>

          <p className="divider">{/* <span>Or</span> */}</p>

          <form>
            <input type="email" placeholder="please inter your mail " />
            <input type="password" placeholder="please inter your password " />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="button">
            <p>For Forget Your Password</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i onClick={switchTheme} className="fas fa-toggle-on"></i>
        </div>
      </div>
    </div>
  );
};

export default App;
