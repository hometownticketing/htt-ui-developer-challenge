import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export interface UserInterface {
  className?: string;
  id: string;
  name?: string;
  role?: string;
  bio?: string;
  image?: string;
  description?: string;
}

/*

Pretty straight forward here, only passing on what we need to the card, along with className to allow the selected border color to be 
easily passed through as needed, while allowing the card itself to remain intact to be used elsewhere as needed.

*/

export default function User({ className, id, name, role, bio, description, image }: UserInterface) {
  const userId = `${id}`;

  return (
    <div className={classNames(`overflow-hidden border-2 border-gray-dark rounded-md flex flex-col h-full`, className)}
      id={userId} data-test="user">
      <div className="grow content p-4 w-full">
        {name && <h1 className="headline text-xl text-[#6e6e6e] font-bold capitalize w-full">{name}</h1>}
        <div className='flex gap-4 mt-2'>
          <div className='min-w-[128px] w-[128px]'>
            {image && <Image alt={name || ''} width="128" height="128" src={image} />}
          </div>
          <div className=''>
            {role && <h2 className="w-full text-base font-semibold capitalize text-sky-600">{role}</h2>}
            {bio && <h3 className="w-full text-base lowercase text-gray-500">{bio}</h3>}
            {description && <p className="grow">{description}</p>}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-full pl-4 pr-4 pt-2 pb-2 text-sm" data-test="card-footer">
        <a
          href='#'
          className="text-[#6e6e6e] font-normal hover:text-gray-900"
          onClick={(e) => e.stopPropagation()}
        >
          See Profile &rarr;
        </a>
      </div>
    </div>
  );
}
