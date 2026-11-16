import { useState } from "react";
import { LikeButtonWrap } from "./likeButtonStyle";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(24);

  const handleClick = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <LikeButtonWrap className="likeButton">
      <button
        className={liked ? "likeButtonBox liked" : "likeButtonBox"}
        onClick={handleClick}
      >
        <span className="likeButtonIcon">{liked ? "♥" : "♡"}</span>
        <span className="likeButtonCount">{count}</span>
      </button>
    </LikeButtonWrap>
  );
};

export default LikeButton;