import './SignUp.css';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for form submission/validation
  };

  return (
    <div className="container">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <div className="name-group">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <select id="sex" name="sex" required>
              <option value="">None Selected</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Phone Number" />
          </div>
          <div className="password-group">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign Up" />
          </div>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
