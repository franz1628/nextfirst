'use client'

import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const socket = io('http://localhost:4000', {
    transports: ['websocket'], // Usar WebSocket directamente, evitar polling si es posible
  });

export default function Chat(){
    const [mensajes, setMensajes] = useState<String[]>([])

    useEffect(() => {
        socket.on("connect", () => {
          console.log("Conectado al servidor");
        });
    
        socket.on("message", (data) => {
          setMensajes((prevMensajes) => [...prevMensajes, data]);
        }); 
     
        return () => {
            console.log('Cerra');
            
          socket.disconnect();
        };
    }, []);
    
    const sendMessage = (event:string, data:string) => {
        console.log('adgadg');
        
        socket.emit(event, data);
    };


    return <>
        <table>
          {mensajes.map((x,i)=>
            <tr key={i}>
              <td>{x}</td>
            </tr>
          )}
        </table>

        <Button color="success" onClick={()=>sendMessage("message","Hola2")}>
            Enviar
        </Button>
    </>
}