import { User } from "@/app/types";
import Card from "@/app/components/card";
import Image from 'next/image'
import classNames from "classnames";
import { memo } from 'react';

/**
 * This component utilizes the generic Card component expanding it to include an image and a name.
 * I decided to memoize this component to reduce re-renders and the only state change that
 * should occur after initial data load is the activeUser boolean.
 */

type UserCardInterface = {
  user: User;
  activeUser: boolean;
  setSelectedUser: (user: User) => void;
}

const UserCard = memo(function UserCard({ user, activeUser, setSelectedUser }: UserCardInterface) {
  return (
    <div
      // We can use classNames to do conditional styling like applying the red border when the user is active.
      className={classNames(["container flex flex-col max-w-lg my-5 mr-5 border-2 rounded-md border-gray-dark min-w-80", activeUser ? "border-red-500" : ""])}
      onClick={() => setSelectedUser(user)}
      // Adding data-test attributes for easier hooks into specific elements during testing.
      data-test="user-card"
    >
      <div className="mt-8 ml-4 -mb-8 whitespace-pre">
        <span className="text-xl font-bold text-gray-600">{user.name}</span>
      </div>
      <div className="flex flex-row ml-4">
        <div className="relative w-20 h-20 mt-10 min-w-20">
            <Image
              src={user.image}
              alt="User Profile Image"
              fill={true}
              sizes="(max-width: 5rem) 100vw"
              data-test="user-image"
            />
        </div>
        <Card 
          id={user.id}
          title={user.role}
          subTitle={user.bio}
          bodyText={user.description}
          linkText='See Profile'
          // Some User specific styling to apply to the card and override some of the styling applied to the Title and Subtitle.
          className='flex-col justify-start max-w-sm border-none mt-0 [&_h1]:text-blue-500 [&_h1]:text-lg [&_h2]:text-gray-400 [&_h2]:font-light'
          onClick={() => setSelectedUser(user)}
        />
      </div>
    </div>);
});

export default UserCard;
