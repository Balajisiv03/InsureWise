const LifeForm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Book Life Insurance</h1>
      <form>
        <div className="mb-4">
          <label className="text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Phone</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Book now
        </button>
      </form>
    </div>
  );
};

export default LifeForm;
