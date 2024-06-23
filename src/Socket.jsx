import { createContext, useContext, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { io } from 'socket.io-client';
import { setAmountView } from './features/amountView/amountView';

const url = process.env.REACT_APP_URL_SOCKET;
console.log(url);

const SocketContext = createContext(null);

const socket = io(url);

export const useSocket = () => {
  const context = useContext(SocketContext);
  return context;
};

export const SocketProvider = ({ children }) => {


  const dispatch= useDispatch();


  useEffect( ()=>{

		socket.emit("get:amount");

		socket.on("get:amount", (data)=>{
			dispatch(setAmountView(data))
		});

  },[])


  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
