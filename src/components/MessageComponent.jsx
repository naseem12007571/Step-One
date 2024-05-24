import React, { useState, useEffect } from "react";
import "../Sass/MessageComponent.scss";
import MessageCard from "./common/MessageCard";
import messageIcon from "../assets/messageIcon.png";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export default function MessageComponent({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [messageData, setMessageData] = useState([]);
  const [typingData, setTypingData] = useState(false);
  function handleSubmit(data) {
    setMessageData([...messageData, data]);
  }

  function setType(data) {
    setTypingData(data);
  }
  return (
    <>
      <div>
        <div className="post-status">
          <Stack bg="green" color="white" p="0 10px">
            <HStack justifyContent="space-between">
              <Text>Messaging</Text>
              <HStack gap="20px">
                {" "}
                <FaVideo />
                <MdAddCall />
              </HStack>
            </HStack>
          </Stack>

          <MessageCard handleSubmit={handleSubmit} setType={setType} />
          {messageData.map((ele) => {
            return <p className="message-row">{ele}</p>;
          })}
          {typingData ? (
            <p
              style={{
                fontStyle: "italic",
                marginLeft: "2vw",
                fontSize: "small",
              }}
            >
              typing....
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}
