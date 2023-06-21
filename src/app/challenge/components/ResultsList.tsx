"use client";

import React, { MouseEvent, useState } from "react";

import Card from "@/app/components/card";

type DataItem = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  description: string;
};

interface ResultListProps {
  data: DataItem[];
}

export default function Results({ data }: ResultListProps) {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();

  const handleClick = (e: MouseEvent<HTMLElement>, itemId: string) => {
    e.preventDefault();
    setActiveCardId(itemId);
  };

  if (!data) {
    return (
      <main className="flex flex-col items-center justify-center w-full min-h-screen p-4 font-serif text-black">
        <h1 className="w-full mb-2 text-xl font-bold text-center capitalize headline text-gray-dark">
          No results found
        </h1>
      </main>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {data.map((item: DataItem) => (
        <div
          onClick={(e) => {
            handleClick(e, item.id);
          }}
        >
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.role}
            subTitle={item.bio}
            image={item.image}
            bodyText={item.description}
            linkText="See Profile"
            link="#"
            isActive={activeCardId === item.id}
            className={"h-full"}
          />
        </div>
      ))}
    </div>
  );
}
