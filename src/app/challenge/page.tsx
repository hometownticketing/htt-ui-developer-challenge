import type { User } from "../types";
import UserResults from "./components/user-results";

import getUsers from "../actions/getUsers";

export default async function Challenge() {
  const users: User[] = await getUsers();

  return (
    <main className="flex flex-col items-start justify-start w-full min-h-screen p-4 font-serif text-black">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <UserResults users={users} />
    </main>
  );
}
