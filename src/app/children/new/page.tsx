export default function NewChild() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Create Child Profile</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Child&apos;s Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="age" type="number" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" type="submit">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
