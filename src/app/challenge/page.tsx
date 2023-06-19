//import { useEffect, useState } from 'react';
import Users, { UsersInterface } from './components/users';

async function getData() {
  const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error(res.statusText);
  }


  return res.json();
}

export default async function Challenge() {
  const data = await getData();

  /*
  Since the data is coming in from the server, it should either exist or not, and if exists should be an empty array if no results found is my assumption
  so I just pass it along. The data most likely will always either exist or be an empty array, not allowing for a 'loading state' client side.
  */

  return (
    <main className="flex text-black font-serif min-h-screen flex-col  items-start justify-start p-4 w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <Users users={data} />
    </main>
  )
}
