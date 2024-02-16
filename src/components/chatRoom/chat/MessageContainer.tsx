import React from 'react';
import { userMessageProperty } from './chatInterface';
import { useSearchParams } from 'next/navigation';

const MessageContainer = (props: userMessageProperty) => {
  console.log(props, 'Props inside message container');
  const { name, message } = props;
  const loggedName = useSearchParams()?.get('name');

  console.log(name, 'Name inside msg container');
  const messageBoxClass =
    name === loggedName ? 'flex p-3 gap-1 justify-end' : 'flex p-3 gap-1';

  const profileLogoClass =
    name === loggedName
      ? 'text-sm rounded-full flex justify-center items-center mt-1 bg-orange-400 h-8 text-white font-bold p-3'
      : 'text-sm rounded-full flex justify-center items-center mt-1 bg-blue-400 h-8 text-white font-bold p-3';

  return (
    <div className={messageBoxClass}>
      <div className={profileLogoClass}>
        {name?.toLocaleUpperCase()?.charAt(0) || 'X'}
      </div>
      <div className="border bg-white p-4 rounded-b-xl font-thin w-[80%]">
        <div>{message}</div>
      </div>
    </div>
  );
};

export default MessageContainer;
