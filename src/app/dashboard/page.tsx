export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Your Children</h2>
          <p className="text-gray-600">Manage child profiles</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Stories</h2>
          <p className="text-gray-600">View generated stories</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Create New Story</h2>
          <p className="text-gray-600">Generate a new story</p>
        </div>
      </div>
    </main>
  );
}
