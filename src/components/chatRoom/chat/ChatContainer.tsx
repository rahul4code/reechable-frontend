'use client';

import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { Socket, io } from 'socket.io-client';
import { useSearchParams } from 'next/navigation';

const URL = 'http://localhost:5000';

const ChatContainer = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chat, setChat] = useState<string[]>([]);
  const [room, setRoom] = useState<any>();
  const name = useSearchParams()?.get('name');

  useEffect(() => {
    const newSocket = io(URL);
    setSocket(newSocket);
    const roomId = prompt('Hi Enter Room Id');
    console.log(roomId, 'This is the room Id');
    setRoom(roomId);

    newSocket.on('when-connected', (data) => {
      console.log(data);
    });

    newSocket.emit('join-room', roomId);

    newSocket.on('broadcast-message', (msg) => {
      console.log(msg, 'To All users');
      setChat((prevChat) => [...prevChat, msg]);
    });

    newSocket.on('receive-message', ({ room, message }) => {
      console.log(room, message, 'receiver');
      setChat((prevChat) => [...prevChat, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (socket) {
      socket.emit('send-chat-message', { roomId: room, message: message });
      setMessage('');
    }
    // if (socket) {
    //   socket.emit('send-broadcast-message', message);
    // }
  };

  return (
    <section className="border-l">
      <header className=" rounded-l-full flex justify-between items-center p-2 h-16">
        <IoArrowBackCircleOutline className="text-2xl text-orange-600" />
        <strong className="text-center font-semibold">Live Chat</strong>
        <CiSettings className="text-2xl text-gray-600" />
      </header>
      <main className="bg-gray-100 min-h-[83vh]">
        <div className="flex justify-end p-3 gap-1">
          <div className="text-sm rounded-full flex justify-center items-center mt-1 bg-orange-400 h-8 text-white font-bold p-3">
            {name?.toLocaleUpperCase()?.charAt(0) || 'X'}
          </div>
          <div className="border bg-white p-4 rounded-b-xl font-thin w-[80%]">
            <div>
              It is a long established fact that a reader will be distracted by
              the readas a more-or-less normal distribution of letters, as
              opposed to using Content here
            </div>
          </div>
        </div>

        {chat?.length > 0 && (
          <div className="flex p-3 gap-1">
            <div className="text-sm rounded-full flex justify-center items-center mt-1 bg-blue-400 h-8 text-white font-bold p-3">
              Y
            </div>
            <div className="border bg-white p-4 rounded-b-xl font-thin w-[80%]">
              <div>{chat[0]}</div>
            </div>
          </div>
        )}
      </main>
      <footer>
        <form
          className="pl-3 pt-3 grid grid-cols-12 gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-span-10">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
