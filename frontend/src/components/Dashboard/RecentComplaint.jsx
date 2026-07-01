function RecentComplaint({ complaint }) {

  return (

    <div className="bg-white shadow rounded-xl p-4">

      <h2 className="font-bold text-lg">
        {complaint.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {complaint.description}
      </p>

      <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        {complaint.status}
      </span>

    </div>

  );

}

export default RecentComplaint;