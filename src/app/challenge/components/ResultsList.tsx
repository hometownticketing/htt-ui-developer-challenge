"use client";

import React, { MouseEvent, useState } from "react";

import Card from "@/app/components/card";
import { DataItem } from "@/app/types";

interface ResultListProps {
  data: DataItem[];
}

export default function Results({ data }: ResultListProps) {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();

  const handleClick = (e: MouseEvent<HTMLElement>, itemId: string) => {
    e.preventDefault();
    setActiveCardId(itemId);
  };

  if (!data || data.length === 0) {
    return (
      <span className="w-full mt-20 mb-2 text-xl font-bold text-center capitalize headline text-gray-dark">
        No results found
      </span>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {data.map((item: DataItem) => (
        <div
          key={item.id}
          onClick={(e) => {
            handleClick(e, item.id);
          }}
        >
          <Card
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
            dataTest={`card-link-${item.id}`}
          />
        </div>
      ))}
    </div>
  );
}
