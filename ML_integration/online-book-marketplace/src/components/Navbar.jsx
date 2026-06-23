import { Link, useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaShoppingCart,
  FaBook,
  FaUserCircle,
  FaSignOutAlt,
  FaHeart,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    alert("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg px-8 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaBook className="text-blue-600 text-3xl" />

          <h1 className="text-3xl font-bold text-blue-600">
            BookVerse AI
          </h1>
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          {/* Browse Books */}

          <div className="relative group">

            <button className="hover:text-blue-600 font-medium">
              Browse Books ▼
            </button>

            <div
              className="
              absolute
              left-0
              top-full
              hidden
              group-hover:block
              bg-white
              shadow-2xl
              rounded-xl
              w-64
              border
              z-50"
            >

              <Link
                to="/books"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📚 All Books
              </Link>

              <Link
                to="/books?category=ncert"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                🎓 NCERT Books
              </Link>

              <Link
                to="/books?category=technology"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                💻 Technology
              </Link>

              <Link
                to="/books?category=business"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📈 Business
              </Link>

              <Link
                to="/books?category=education"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                🏫 Education
              </Link>

              <Link
                to="/books?category=hindi"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📕 Hindi Books
              </Link>

              <Link
                to="/books?category=english"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📗 English Books
              </Link>

              <Link
                to="/books?category=fiction"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📖 Fiction
              </Link>

            </div>

          </div>

          {/* Marketplace */}

          <div className="relative group">

            <button className="hover:text-blue-600 font-medium">
              Marketplace ▼
            </button>

            <div
              className="
              absolute
              left-0
              top-full
              hidden
              group-hover:block
              bg-white
              shadow-2xl
              rounded-xl
              w-60
              border
              z-50"
            >

              <Link
                to="/books"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📚 Buy Books
              </Link>

              <Link
                to="/seller"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                💰 Sell Books
              </Link>

              <Link
                to="/rent"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                🔄 Rent Books
              </Link>

              <Link
                to="/wishlist"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                ❤️ Wishlist
              </Link>

              <Link
                to="/orders"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                📦 My Orders
              </Link>

            </div>

          </div>

          {/* AI Picks */}

          <Link
            to="/recommendations"
            className="hover:text-blue-600 font-medium"
          >
            ✨ AI Picks
          </Link>

          {/* AI Assistant */}

          <Link
            to="/assistant"
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
            flex
            items-center
            gap-2
            hover:bg-blue-700
            transition"
          >
            <FaRobot />
            AI Assistant
          </Link>



          {/* Cart */}

          <Link
            to="/cart"
            className="
            relative
            flex
            items-center
            gap-2
            hover:text-blue-600"
          >
            <FaShoppingCart />

            Cart

            {cart.length > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-4
                bg-red-500
                text-white
                text-xs
                rounded-full
                px-2"
              >
                {cart.length}
              </span>
            )}
          </Link>

          {/* User */}

          {user ? (
            <div className="flex items-center gap-3">

              <Link
                to="/profile"
                className="
                bg-green-600
                text-white
                px-4
                py-2
                rounded-lg
                flex
                items-center
                gap-2"
              >
                <FaUserCircle />

                {user.name}
              </Link>

              <button
                onClick={handleLogout}
                className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                flex
                items-center
                gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="
              bg-green-600
              text-white
              px-4
              py-2
              rounded-lg"
            >
              Login
            </Link>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;