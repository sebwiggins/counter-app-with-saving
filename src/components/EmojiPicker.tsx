import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState(String);
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState(String);

  const handleHappyEmoji = () => {
    queueRerenderWithNewEmojiValue("😀");
  };

  const handleSadEmoji = () => {
    queueRerenderWithNewEmojiValue("😢");  
  };

  const handleCheekyEmoji = () => {
    queueRerenderWithNewEmojiValue("😏");  
  };

  const handleHungryEmoji = () => {
    queueRerenderWithNewEmojiValue("🍔"); 
  };

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender+favouriteValueFromCurrentRender);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your mood combo: {favouriteValueFromCurrentRender}</p>
      <p>Current mood: {emojiValueFromCurrentRender}</p>
      <button onClick={handleSadEmoji}>😢</button>
      <button onClick={handleHappyEmoji}>😀</button>
      <button onClick={handleCheekyEmoji}>😏</button>
      <button onClick={handleHungryEmoji}>🍔</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current mood</button>
    </>
  );
}
