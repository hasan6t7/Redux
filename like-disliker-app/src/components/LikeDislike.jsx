import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseDislikes, increaseLikes, resetLikeDislike } from "../redux/features/like-dislike/likeDislikeSlice";

const LikeDislike = () => {
  const { likes, dislikes } = useSelector((state) => state.likeDislike);

  const dispatch = useDispatch();

  const handleIncreaseLikes = () => {
    dispatch(increaseLikes());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md max-w-md mx-auto rounded-lg p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-5">Like/Disliker App</h1>

        <div>
          <p>
            Likes: <span className="text-green-500">{likes}</span>
          </p>
          <p>
            Dislikes: <span className="text-red-500">{dislikes}</span>
          </p>
        </div>

        <div className="space-x-4">
          <button
            onClick={handleIncreaseLikes}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Add Like
          </button>
          <button onClick={() => dispatch(increaseDislikes())} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Add DisLike
          </button>
          <button onClick={() => dispatch(resetLikeDislike())} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;
