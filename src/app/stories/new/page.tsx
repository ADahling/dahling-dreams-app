export default function NewStory() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Create New Story</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
                Story Theme
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="theme" type="text" placeholder="e.g., Adventure, Space, Animals" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
                Language
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700" id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
                <option value="hi">Hindi</option>
                <option value="ja">Japanese</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" type="submit">
              Generate Story
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
