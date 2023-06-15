import React from "react";
import { CommentIcon } from "../../utils/Emojis/emojis";
import CommentsSong from "../../utils/comments/CommentsSong";
import { Link } from "react-router-dom";

export default function SongComents({comments, songId}) {
  return (
    <>
      <div class="w-full p-4 my-12 bg-white shadow-xl shadow-purple-500/50 dark:shadow-xl dark:shadow-purple-800/80 rounded-2xl dark:bg-gray-700 ">
        <div className="w-full flex items-center justify-between pb-4">
          <p class="font-bold text-black text-md dark:text-white">
            Comentarios
          </p>
          <div className="flex items-center justify-center gap-1">
            <p class="font-medium text-black text-sm dark:text-white">
              Agregar comentario
            </p>
            <CommentIcon />
          </div>
        </div>
        {comments?.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <p className="py-10">No hay comentarios</p>
          </div>
        ) : (
          <ul>
            {comments?.map((com) => (
              <li class="flex items-center my-6 space-x-2">
                <a href="#" class="relative block">
                  <Link to={"/users/" + com.userId}>
                    <img
                      alt="profil"
                      src={com.userImage}
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </Link>
                </a>
                <div class="flex flex-col max-w-xs">
                  <Link to={"/users/" + com.userId}>
                    <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white text-black">
                      {com.userName}
                    </span>
                  </Link>
                  <span class="ml-2 break-words text-sm text-gray-400 dark:text-gray-300">
                    {com.comment}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div>
          <CommentsSong songId={songId} />
        </div>
      </div>
    </>
  );
}
