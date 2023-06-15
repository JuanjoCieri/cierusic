import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLikePlaylist } from "../../redux/Actions";
import { HeartIcon, HeartSongsIcon } from "../Emojis/emojis";
import { toast } from "react-hot-toast";

export default function LikesPlaylist({ playlistId }) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (loggedUser && loggedUser.likedPlaylist && loggedUser.likedPlaylist.indexOf(playlistId) !== -1) {
      setLiked(true);
    }
  }, [loggedUser, playlistId]);

  const dispatch = useDispatch();

  function onClick() {
    if (loggedUser.length === 0) {
      toast(
        (t) => (
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-center">
              Debes tener una <b>cuenta</b> iniciada para dar me gusta
            </span>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="py-1 px-3 hover:bg-gray-400 focus:ring-gray-500 focus:ring-offset-gray-200 text-black transition ease-in duration-200 text-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border bg-gray-200"
            >
              Aceptar
            </button>
          </div>
        ),
        {
          duration: 4000,
        }
      );
    } else {
      let payload = {
        userId: loggedUser.id,
        playlistId: playlistId,
      };
      dispatch(postLikePlaylist(payload));
      setLiked(!liked);
    }
  }

  return (
    <>
      {loggedUser ? (
        liked ? (
          <button onClick={onClick} className="text-black bg-transparent border-none">
            <HeartSongsIcon />
          </button>
        ) : (
          <button onClick={onClick} className="text-black bg-transparent border-none">
            <HeartIcon />
          </button>
        )
      ) : null}
    </>
  );
}
