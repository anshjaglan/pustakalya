import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-8">
          📚 Create Account
        </h1>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={handleChange}
          >
            <option value="customer">
              Customer
            </option>

            <option value="author">
              Author
            </option>

            <option value="publisher">
              Publisher
            </option>

            <option value="book_store">
              Book Store
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">

          Already Registered?

          <Link
            to="/login"
            className="text-blue-600 font-bold ml-2"
          >
            Login Here
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;