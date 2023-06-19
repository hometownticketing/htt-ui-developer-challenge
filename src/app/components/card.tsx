'use client'
import React, { MouseEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface CardInterface extends PropsWithChildren {
  className?: string;
  name?: string;
  id?: number | string;
  title?: string;
  subTitle?: string;
  bodyText?: string;
  count?: number;
  quantity?: number;
  link?: string;
  linkText: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  dataTest?: string;
  isActive: boolean;
}

export const Card = ({ className, id = 0, name, title, subTitle, bodyText, children, count = 0, quantity = 0, link = '#', linkText, onClick, dataTest, isActive }: CardInterface) => {
  const cardId = `${ id }`;

  return (
    <div className={classNames(`border-2 flex flex-col ${isActive ? 'border-red-500' : 'border-gray-dark'} rounded-md text-gray-dark p-2 transition-colors`, className)} id={cardId} data-test="card">
      {name && (
        <p className='font-bold mb-2'>{name}</p>
      )}
      <div className='flex flex-col flex-grow justify-between'>
        <div className='flex justify-between'>
          <div className='w-24 min-w-24'>
            {children}
          </div>
          <div className='pl-4'>
            {title && (
              <h2 className="headline text-l font-bold text-blue-600 capitalize w-full">{title}</h2>
            )}
            {subTitle && (
              <p className="w-full text-base text-gray-400 capitalize">{subTitle}</p>
            )}
            <p className="w-full text-base text-gray-500">
              {bodyText}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center p-4 pb-0 text-sm" data-test="card-footer">
          <a
            href={link}
            className="flex flex-row font-normal align-center capitalize border-b-2 border-transparent hover:border-black cursor-pointer pb-0 pr-5 relative leading-none"
            data-test={dataTest}
            onClick={(e) => {
              // Just preventing default here to keep the page from scrolling back to the top
              // since we are not actually linking to the profile
              // This is not a real life scenario. Would never do this in a prod env
              e.preventDefault();
              onClick?.(e)
            }}
          >
            {linkText}
            <span className="absolute top-0.5 right-0 leading-none" data-test="card-footer-option">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card