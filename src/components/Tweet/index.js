import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stat from "./Stat";

import { TweetContext } from "../TweetContext";


const Tweet = () => {
  const {
    tweetContents, 
    displayName, 
    username, 
    avatarSrc, 
    numOfLikes, 
    numOfRetweets, 
    date, 
    isLikedByCurrentUser,
    isRetweetedByCurrentUser,
  } = useContext(TweetContext);

  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats><strong>{numOfRetweets}</strong> Retweets</Stats>
      <Stats><strong>{numOfLikes}</strong> Likes</Stats>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
  margin: 15px 0px;
`;

const Stats = styled.div`
  display: inline;
  align-items: center;
  height: 48px;
  margin-right: 50px;
`;

export default Tweet;
