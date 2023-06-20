'use client'
import React, { MouseEvent, useState } from 'react';
import { UserCard } from './UserCard';

export interface User {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  description: string;
}

interface CardsContainerProps {
  userData: User[]
}

const formatUserData = (user: User) => {
  const { role, bio, description } = user;

  return {
    ...user,
    linkText: 'See Profile',
    title: role,
    bodyText: description,
    subTitle: bio,
  }
}

export const CardsContainer = ({ userData }: CardsContainerProps) => {
  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);

  const handleCardClick = (index: number) => {
    setActiveCard(index)
  }

  return (
    <div className="grid grid-cols-2 w-full gap-4">
        {userData.map((user: User, index: number) => {
          return (
            <UserCard key={index} {...formatUserData(user)} isActive={index === activeCard} onClick={(e) => handleCardClick(index)}>
              <img src={user.image} />
            </UserCard>
          )    
        })}
      </div> 
  )
}

export default CardsContainer