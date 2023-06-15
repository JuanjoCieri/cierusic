import React, { useState } from "react";
import { SendCommentIcon } from "../Emojis/emojis";
import { useDispatch, useSelector } from "react-redux";
import { postCommentSong } from "../../redux/Actions";
import { toast } from "react-hot-toast";

export default function CommentsSong({ songId }) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    comment: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function onClick() {
    if (loggedUser.length === 0) {
      toast(
        (t) => (
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-center">
              Debes tener una <b>cuenta</b> iniciada para comentar
            </span>
            <button
              onClick={() => toast.dismiss(t.id)}
              class="py-1 px-3 hover:bg-gray-400 focus:ring-gray-500 focus:ring-offset-gray-200 text-black transition ease-in duration-200 text-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border bg-gray-200"
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
        songId: songId,
        userId: loggedUser.id,
        comment: input.comment,
        userName: loggedUser.name,
        userImage: loggedUser.image,
      };
      console.log(payload)
      dispatch(postCommentSong(payload));
      setInput({
        comment: ""
      })
    }
  }

  return (
    <form class="flex justify-center items-center md:flex-row md:w-full md:space-x-3 md:space-y-0 border-t py-5">
      <div class="relative">
        <input
          type="text"
          id="comment"
          name="comment"
          value={input.comment}
          onChange={(e) => handleChange(e)}
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Escribe aquí..."
        />
      </div>
      <button class="px-4 py-2" type="button" onClick={onClick}>
        <SendCommentIcon />
      </button>
    </form>
  );
}
