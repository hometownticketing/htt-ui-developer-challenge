async function getData() {
  const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Challenge() {
  const data = await getData();

  return (
    <main className="flex text-black font-serif min-h-screen flex-col  items-start justify-start p-4 w-full">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <div className="flex flex-row flex-wrap gap-4">
      </div> 
    </main>
  )
}
