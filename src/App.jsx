import './App.css';
// import backgroundImage from '../image/background.jpg'; // Importing the background image
import logoImage from '../image/logo.png'; // Importing the logo image
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can implement your login logic here
    // For instance, validate the username and password
    // Then perform necessary actions, such as authentication or redirecting to another page
  };

  return (
    <div className="container">
      <img src={logoImage} alt="Logo Image" className="logo" /> {/* Display logo above the login form */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>Don't have an account? Sign In</p>      
          {/* <Link to="/signup">Sign Up</Link> */}
        </form>
      </div>
    </div>
  );
}

export default App;
