import { CardsContainer } from '../components';

async function getData() {
  const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Challenge() {
  const userData = await getData();

  return (
    <main className="text-black font-serif min-h-screen p-4 w-full">
      <h1 className="text-4xl font-bold mb-4">The Challenge</h1>
      <CardsContainer userData={userData} />
    </main>
  )
}
