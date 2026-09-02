
function Field({ fieldName, type = "text" }) {
  return (
    <div className="field">
      <label>{fieldName}</label>
      <input type={type} />
    </div>
  );
}

function Button({ buttonName }) {
  return (
    <button type="button" className="login-button">
      {buttonName}
    </button>
  );
}

function Login() {
  return (
    <main className="login-page">
      <form className="login-container">

        <div className="login-header">
          <div className="logo-mark">&gt;_</div>
          <span>SECURE LOGIN</span>
        </div>

        <div className="login-content">

          <div className="system-status">
            <span />
            SYSTEM ONLINE
          </div>

          <h2>WELCOME</h2>

          <p className="subtitle">
            Enter your credentials to continue
          </p>

          <div className="fields">

            <Field fieldName="USERNAME" />

            <Field
              fieldName="PASSWORD"
              type="password"
            />

          </div>

          <div className="buttons">
            <Button buttonName="LOG IN" />
            <Button buttonName="SIGN IN" />
          </div>

          <div className="login-status">
            SECURE CONNECTION // ENCRYPTED
          </div>

        </div>

      </form>
    </main>
  );
}

export default Login;

