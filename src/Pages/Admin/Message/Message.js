import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Toast } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const Message = () => {
  const { setMessages, messages } = useAuth();
  useEffect(() => {
    fetch("https://young-tundra-08226.herokuapp.com/message")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const deleteMsg = (id) => {
    fetch(`https://young-tundra-08226.herokuapp.com/message/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const newMessage = messages.filter((msg) => msg._id !== id);
          setMessages(newMessage);
        }
      });
  };
  return (
    <div>
      <Container>
        <h5 className="text-end">Total message {messages?.length}</h5>
        {messages?.map((message) => (
          <div key={message?._id} className="w-100 m-3">
            <div className="row border-bottom">
              <div className="col-md-11 text-decoration-none">
                <div className="row">
                  <div className="col-md-4">
                    <strong className="me-auto">
                      Message from *{message?.personName}*
                    </strong>
                  </div>
                  <div className="col-md-5"></div>
                  <div className="col-md-3 d-flex align-items-center justify-content-between">
                    <p className="m-0">{message?.time}</p>
                    <p className="m-0">{message?.date}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-end">
                <i
                  onClick={() => deleteMsg(message?._id)}
                  className="fas fa-trash"
                ></i>
              </div>
            </div>
            <div className="w-100">
              <p className="m-0">{message?.message}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Message;
