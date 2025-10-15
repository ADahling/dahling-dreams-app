export default function Library() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold mb-8">Story Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Example Story</h2>
          <p className="text-gray-600 mb-4">A wonderful adventure...</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Read Story
          </button>
        </div>
      </div>
    </main>
  );
}
