import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState(String);
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState<string[]>([]);

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
      queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,emojiValueFromCurrentRender])
  };
console.log(favouriteValueFromCurrentRender)
  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your Emoji History: {favouriteValueFromCurrentRender.map((emoji, index) => {
        console.log(emoji)
        return <li key={index}>{emoji}</li>
      })
      }</p>
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
