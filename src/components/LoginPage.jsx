import React from "react";
import "./LoginPage.css";
import logo from "../assets/logo/logo.pngg.jpg";

function LoginPage({ loginForm, setLoginForm, handleLogin }) {
  return (
    <div className="login-container">

    
    <div className="login-wrapper">

      <div className="login-card">

        {/* Logo Section */}
        <div className="logo-section">

          <img
            src={logo}
            alt="ClientConnect Logo"
            className="crm-logo"
          />

          <h1 className="brand-title">ClientConnect</h1>
          <p className="brand-subtitle">Customer Relationship Management</p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">

          <label>Work Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            required
          />

          <div className="remember">

            <label>
              <input type="checkbox" />
              Remember device
            </label>

            <span className="forgot">Forgot password?</span>

          </div>

          <button type="submit" className="login-btn">
            Enter Dashboard →
          </button>

        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>ClientConnect CRM Platform</p>
        </div>

      </div>

    </div>
    </div>
  );
}

export default LoginPage;