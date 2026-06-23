function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <div className="p-10 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        👤 My Profile
      </h1>

      <div className="bg-white shadow-lg p-8 rounded-xl">

        <p>
          <strong>Name:</strong>
          {" "}
          {user?.name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {user?.email}
        </p>

        <p>
          <strong>Role:</strong>
          {" "}
          {user?.role}
        </p>

      </div>

    </div>
  );
}

export default Profile;