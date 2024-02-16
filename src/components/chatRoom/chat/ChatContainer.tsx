'use client';

import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { Socket, io } from 'socket.io-client';
import { useSearchParams } from 'next/navigation';
import { userMessageProperty } from './chatInterface';
import MessageContainer from './MessageContainer';

const URL = 'http://localhost:5000';

const ChatContainer = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chat, setChat] = useState<userMessageProperty[]>([]);
  const [room, setRoom] = useState<any>();
  const name = useSearchParams()?.get('name');
  const [userMessage, setUserMessage] = useState<userMessageProperty>({
    name: name || '',
    message: '',
  });

  useEffect(() => {
    const newSocket = io(URL);
    setSocket(newSocket);
    const roomId = prompt('Hi Enter Room Id');
    console.log(roomId, 'This is the room Id');
    setRoom(roomId);

    newSocket.on('when-connected', (data) => {
      console.log(data);
    });

    newSocket?.emit('join-room', roomId);

    // newSocket.on('broadcast-message', (msg) => {
    //   console.log(msg, 'To All users');
    //   setChat((prevChat) => [...prevChat, msg]);
    // });

    newSocket?.on('receive-message', ({ room, name, message }) => {
      console.log(room, name, message, 'receiver');

      setChat((prevChat) => [...prevChat, { name: name, message: message }]);
    });

    return () => {
      console.log('This is unmounted');
      newSocket.disconnect();
    };
  }, []);

  console.log(chat, 'chat message array');

  const handleSend = () => {
    if (userMessage?.message) {
      if (socket) {
        setUserMessage({ ...userMessage, message: '' });
        socket.emit('send-chat-message', {
          roomId: room,
          name: name,
          message: userMessage?.message,
        });
        setChat([...chat, userMessage]);
      }
      // if (socket) {
      //   socket.emit('send-broadcast-message', message);
      // }
    } else {
      alert('Message can not be blank');
    }
  };

  return (
    <section className="border-l">
      <header className=" rounded-l-full flex justify-between items-center p-2 h-16">
        <IoArrowBackCircleOutline className="text-2xl text-orange-600" />
        <strong className="text-center font-semibold">Live Chat</strong>
        <CiSettings className="text-2xl text-gray-600" />
      </header>
      <main className="bg-gray-100 min-h-[83vh]">
        {chat?.map((item, index) => <MessageContainer key={index} {...item} />)}
      </main>
      <footer>
        <form
          className="pl-3 pt-3 grid grid-cols-12 gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-span-10">
            <input
              value={userMessage?.message}
              onChange={(e) =>
                setUserMessage({ ...userMessage, message: e.target.value })
              }
              className="w-[100%] text-md focus:border-b placeholder:font-thin placeholder:text-gray-800 focus:outline-none"
              placeholder="Start Typing..."
            />
          </div>
          <div className="col-span-2 flex justify-center bg-orange-400 rounded-full w-fit p-2 items-center">
            <button onClick={handleSend}>
              <FiSend className="text-xl text-white" />
            </button>
          </div>
        </form>
      </footer>
    </section>
  );
};

export default ChatContainer;
