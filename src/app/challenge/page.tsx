import getUsers from "../actions/getUsers";
import { DataItem } from "../types";
import Results from "./components/ResultsList";

export default async function Challenge() {
  const data: DataItem[] = await getUsers();

  return (
    <main className="flex flex-col items-start justify-start w-full min-h-screen p-4 font-serif text-black">
      <h1 className="text-4xl font-bold text-center">The Challenge</h1>
      <Results data={data} />
    </main>
  );
}
