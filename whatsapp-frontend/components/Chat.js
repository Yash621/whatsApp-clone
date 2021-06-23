import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getReciepientEmail from "../utils/getReciepientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();
  const user = useAuthState(auth);

  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getReciepientEmail(users, user))
  );
  const recipientEmail = getReciepientEmail(users, user);
  const recipient = recipientSnapshot?.docs?.[1]?.data;
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={enterChat}>
      {/* {recipient ? (<UserAvatar src={recipient?.photoUrl}>):(<UserAvatar>{reciepientEmail[0]}</UserAvatar>)} */}
      {recipient ? (
        <UserAvatar src={recipient?.photoUrl} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

export default Chat;
