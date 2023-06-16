import Card from "../components/card";
interface IUser {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  description: string;
}
async function getData() {
  const res = await fetch("http://localhost:3000/api");

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
      <div className="flex flex-row flex-wrap justify-start gap-4">
        {data.map((user: IUser) => (
          <Card
            name={user.name}
            id={user.id}
            title={user.role}
            subTitle={user.bio}
            bodyText={user.description}
            linkText={user.image}
            className="basis-1/2"
          />
        ))}
      </div>
    </main>
  );
}
