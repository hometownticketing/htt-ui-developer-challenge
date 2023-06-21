"use client";

import React, { MouseEvent, PropsWithChildren, useCallback } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface CardInterface extends PropsWithChildren {
  className?: string;
  name?: string;
  id?: number | string;
  title?: string;
  subTitle?: string;
  bodyText?: string;
  image?: string;
  count?: number;
  quantity?: number;
  link?: string;
  linkText: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  dataTest?: string;
  isActive?: boolean;
}

export default function Card({
  className,
  id = 0,
  name,
  title,
  subTitle,
  bodyText,
  image,
  children,
  count = 0,
  quantity = 0,
  link = "#",
  linkText,
  onClick,
  dataTest,
  isActive = false,
}: CardInterface) {
  const cardId = `${id}`;

  const onClickAction = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onClick && onClick(e);
    },
    [onClick]
  );

  return (
    <div
      className={classNames(
        "flex flex-wrap border-2 rounded-md mt-6 text-gray-dark dark:text-white hover:border-danger",
        isActive
          ? "bg-danger-medium border-danger"
          : "border-gray-dark dark:border-gray-cool",
        className
      )}
      id={cardId}
      data-test="card"
    >
      <div className="flex w-full p-4 flex-nowrap content">
        <div className="flex flex-col">
          {name && (
            <h1
              className={classNames(
                "w-full mb-2 text-xl font-bold capitalize headline",
                isActive ? "text-nlack" : "text-gray-dark"
              )}
            >
              {name}
            </h1>
          )}
          <div className="flex flex-row w-full">
            {image && (
              <div className="flex-none w-20">
                <Image
                  src={image}
                  width="80"
                  height="80"
                  alt={name ? name : ""}
                  className="block w-20"
                />
              </div>
            )}
            <div className="flex-1 ml-4">
              {title && (
                <h2 className="w-full text-base font-bold capitalize headline text-primary">
                  {title}
                </h2>
              )}
              {subTitle && (
                <h3
                  className={classNames(
                    "w-full text-base font-semibold capitalize",
                    isActive ? "text-white" : "text-gray-cool"
                  )}
                >
                  {subTitle}
                </h3>
              )}
              <p className="text-base text-black">{bodyText}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-end w-full pt-2 pb-2 pl-4 pr-4 text-sm rounded-bl-md rounded-br-md"
        data-test="card-footer"
      >
        <a
          href={link}
          className={classNames(
            "relative flex flex-row pb-0 pr-5 font-normal leading-none capitalize border-b-2 border-transparent cursor-pointer hover:border-black ",
            isActive
              ? "text-white hover:text-white"
              : "text-gray-dark hover:text-danger"
          )}
          data-test={dataTest}
          {...(link === "#" && onClick && { onClick: onClickAction })}
        >
          {linkText}
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
