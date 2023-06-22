"use client";

import React, { MouseEvent, useState } from "react";

import Card from "@/app/components/card";
import EmptyState from "@/app/components/empty-state";
import type { User } from "@/app/types";

interface UserResultsProps {
  users: User[];
}

export default function UserResults({ users }: UserResultsProps) {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();

  const handleCardClick = (e: MouseEvent<HTMLElement>, itemId: string) => {
    e.preventDefault();
    setActiveCardId(itemId);
  };

  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {users.map((user: User) => {
        const { id, name, role, bio, image, description } = user;

        return (
          <div
            key={id}
            onClick={(e) => {
              handleCardClick(e, id);
            }}
          >
            <Card
              id={id}
              name={name}
              title={role}
              subTitle={bio}
              image={image}
              bodyText={description}
              linkText="See Profile"
              link="#"
              isActive={activeCardId === id}
              className={"h-full"}
              dataTest={`card-link-${id}`}
            />
          </div>
        );
      })}
    </div>
  );
}
