import React, { PropsWithChildren } from "react";
import classNames from "classnames";

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

export default function Card({
  className,
  id = 0,
  name,
  title,
  subTitle,
  bodyText,
  children,
  count = 0,
  quantity = 0,
  link = "#",
  linkText,
  onClick,
  dataTest,
}: CardInterface) {
  const cardId = `${id}`;

  return (
    <div
      className={classNames(
        "flex flex-wrap max-w-xl border-2 p-6 border-gray-dark rounded-md mt-6 text-gray-dark dark:b-gray-dark dark:border-gray-cool dark:text-white hover:border-red-400",
        className
      )}
      id={cardId}
      data-test="card"
    >
      {name && (
        <h1 className="headline text-xl font-bold capitalize w-full text-gray-600 p-1">
          {name}
        </h1>
      )}
      <div className="flex flex-row">
        <img src={linkText} className="max-h-24 max-w-24 p-4" />
        <div className="content flex flex-wrap p-4 w-full text-gray-800">
          {title && (
            <h1 className="headline text-xl font-bold capitalize w-full text-blue-400">
              {title}
            </h1>
          )}
          {subTitle && (
            <h2 className="w-full text-base font-semibold capitalize text-gray-400">
              {subTitle}
            </h2>
          )}
          {bodyText}
          {children}
        </div>
      </div>

      <div
        className="flex justify-end text-gray-800 items-center w-full pl-4 pr-4 pt-2 pb-2 bg-gray-light rounded-bl-md rounded-br-md text-sm"
        data-test="card-footer"
      >
        <a
          href={link}
          className="flex  flex-row font-normal capitalize border-b-2 border-transparent hover:border-black cursor-pointer pb-0 pr-5 relative leading-none"
          data-test={dataTest}
          // {...(link === '#' && onClick ? { onClick } : { onClick: () => {} })}
        >
          See Profile
          <span
            className="absolute top-0.5 right-0 leading-none"
            data-test="card-footer-option"
          >
            &#8594;
          </span>
        </a>
      </div>
    </div>
  );
}
