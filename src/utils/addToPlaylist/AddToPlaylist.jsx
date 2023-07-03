import { Dropdown } from "flowbite-react";
import React from "react";
import { AddToPlaylistIcon } from "../Emojis/emojis";
import { useDispatch, useSelector } from "react-redux";
import { postAddSongToPlaylist } from "../../redux/Actions";
import { toast } from "react-hot-toast";

export default function AddToPlaylist({ songId }) {
  const userLikedPlaylists = useSelector((state) => state.userLikedPlaylist);
  const loggedUser = useSelector((state) => state.loggedUser);
  const userPlaylistIds = loggedUser.playlist;
  const dispatch = useDispatch();

  const userPlaylists = userLikedPlaylists.filter((playlist) =>
    userPlaylistIds?.includes(playlist.id)
  );

  const isSongInPlaylist = (playlist) => {
    const songs = playlist?.songs?.map((song) => song.songId);
    return songs.includes(songId);
  };

  const handleAddToPlaylist = (playlistId) => {
    const payload = {
      userId: loggedUser.id,
      playlistId: playlistId,
      songId: songId
    };
    dispatch(postAddSongToPlaylist(payload));
    toast.success("Canción agregada correctamente!")
  };

  console.log(userPlaylists)

  return (
    <>
      <Dropdown
        label={<AddToPlaylistIcon />}
        placement="left"
        arrowIcon={false}
        inline={true}
        className="rounded-xl"
      >
        <div className="w-44">
          <Dropdown.Header>
            <p className="font-inter font-semibold text-black break-words">
              Agregar a playlist
            </p>
          </Dropdown.Header>
          <div className="flex flex-col items-center justify-center">
            {userPlaylists.length === 0 ? (<p className="p-2">No tienes playlist</p>) : (<>
            
            {userPlaylists.map((playlist) => (
              <button
              className={`py-4 my-1 w-full text-start pl-3 break-words hover:bg-gray-200 ${isSongInPlaylist(playlist) ? 'bg-green-500 text-white' : ''}`}
              onClick={() => handleAddToPlaylist(playlist.id)}
              key={playlist.id}
              >
                {playlist.name}
              </button>
            ))}
            </>)}
          </div>
        </div>
      </Dropdown>
    </>
  );
}