'use client'
import React, { MouseEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface CardInterface {
  className?: string;
  id?: string | number;
  dataTest?: string;
  isActive: boolean;
}

// Abstracting Card out. Might make sense to have as a reusable component if we'd use this pattern over again in another place
export const Card = ({ className, id = 0, dataTest, isActive, children }: PropsWithChildren<CardInterface>) => {
  return (
    <div className={classNames(`border-2 flex flex-col ${isActive ? 'border-red-500' : 'border-gray-dark'} rounded-md text-gray-dark p-2 transition-colors`, className)} id={id} data-test={dataTest}>
      {children}
    </div>
  );
}

export default Card