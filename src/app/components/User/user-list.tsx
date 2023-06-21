'use client';
import { useState } from "react";
import { User } from "@/app/types";
import UserCard from "@/app/components/User/user-card";

/**
 * Simple component that accepts a list of users and renders 
 * the cards with a key attached for efficient re-renders.
 * 
 * We show a simple message to the user if there are no users provided.
 */

type UserListInterface = {
  users: User[];
}

export default function UserList({ users }: UserListInterface) {
  const [ selectedUser, setSelectedUser ] = useState<User>();

  if (!users || users.length === 0) {
   return <span>No Users Found</span>
  }
  return users.map((user: User) => (
    <UserCard 
      key={user.id}
      user={user}
      activeUser={selectedUser === user}
      setSelectedUser={setSelectedUser}
    />
  ));
};
