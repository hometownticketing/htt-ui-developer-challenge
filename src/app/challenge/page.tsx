import { User } from '@/app/types';
import UserList from '@/app/components/User/user-list';

async function getData() {
  const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Challenge() {
  const data: User[] = await getData();

  return (
    <main className="flex flex-col items-start justify-start w-full min-h-screen p-4 font-serif text-black">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex flex-row flex-wrap">
          <UserList users={data} />
        </div>
      </div> 
    </main>
  )
}
