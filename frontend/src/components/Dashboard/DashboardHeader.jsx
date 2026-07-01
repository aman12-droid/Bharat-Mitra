function DashboardHeader() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (

    <div className="bg-white shadow rounded-xl p-6 mb-8">

      <h1 className="text-3xl font-bold">
        Welcome,
        {" "}
        {user.full_name || "Citizen"} 👋
      </h1>

      <p className="text-gray-600 mt-2">
        Manage complaints and government
        services easily.
      </p>

    </div>

  );

}

export default DashboardHeader;