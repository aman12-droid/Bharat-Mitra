function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white shadow flex justify-between items-center p-5">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div>

        <h2 className="font-semibold">
          {user?.full_name}
        </h2>

        <p className="text-gray-500">
          {user?.email}
        </p>

      </div>

    </div>
  );
}

export default Topbar;