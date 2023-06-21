'use client';
import React, { KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';

/*
  I tried to not change the Card component.  It seems like a great generic implementation
  that other parts of the project may utilize and I don't want to introduce User specific
  features into it.
*/

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
  onClick?: (e: MouseEvent | KeyboardEvent) => void;
  dataTest?: string;
}

export default function Card({ className, id = 0, name, title, subTitle, bodyText, children, count = 0, quantity = 0, link = '#', linkText, onClick, dataTest }: CardInterface) {
  const cardId = `${id}`;

  return (
    <div className={classNames("flex flex-wrap border-2 border-gray-dark rounded-md mt-6 text-gray-dark dark:b-gray-dark dark:border-gray-cool", className)} id={cardId} data-test="card">
      <div className="flex flex-wrap w-full p-4 content">
        { title && (
          <h1 className="w-full text-xl font-bold capitalize headline">{title}</h1>
        )}
        { subTitle && (
          <h2 className="w-full text-base font-semibold capitalize">{subTitle}</h2>
        )}
        {bodyText}
        {children}
      </div>
      <div className="flex items-center justify-end w-full pt-2 pb-2 pl-4 pr-4 text-sm bg-gray-light rounded-bl-md rounded-br-md" data-test="card-footer">
        <a
          href={link}
          className="relative flex flex-row pb-0 pr-5 font-normal leading-none capitalize border-b-2 border-transparent cursor-pointer hover:border-black"
          data-test={dataTest}
          {...(link === '#' && onClick ? { onClick } : { onClick: () => {} })}
        >
          {linkText}
          <span className="absolute top-0.5 right-0 leading-none" data-test="card-footer-option">&#8594;</span>
        </a>
      </div>
    </div>
  );
}
