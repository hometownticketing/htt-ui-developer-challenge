import Image from "next/image"

export default function Home() {
  return (
    <main className="flex text-black font-serif min-h-screen flex-col items-start justify-start p-4 w-full">
      <h1 className="text-4xl font-bold text-center">Instructions</h1>
      <p>For this challenge we want you to update the challenge page to look like the screenshot included below.</p>
      <p>The data should be provided for you. Please keep track fo the active card on click and change the background to red on click.</p>
      <Image src="/challenge.png" alt="Challenge" width={1440} height={900} />
    </main>
  )
}
