import Results from "./components/ResultsList";

const apiUrl = process.env.BASE_PATH || "http://localhost:3000";

async function getData() {
  const res = await fetch(`${apiUrl}/api`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Challenge() {
  const data = await getData();

  return (
    <main className="flex flex-col items-start justify-start w-full min-h-screen p-4 font-serif text-black">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <Results data={data} />
    </main>
  );
}
