export default async function StoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold mb-8">Story: {id}</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-gray-600">Story viewer - Audio narration and pages coming soon</p>
      </div>
    </main>
  );
}
