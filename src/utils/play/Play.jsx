import React from "react";
import { PlayIcon } from "../Emojis/emojis";
import { useDispatch } from "react-redux";
import { setPlaylistSongs, setSong } from "../../redux/Actions";

export default function Play({ playlistId, index, song }) {
  const dispatch = useDispatch();
  const id = playlistId;

  function onClick() {
    if (id) {
      dispatch(setPlaylistSongs(id));
    }
    if (song) {
      dispatch(setSong(song));
    }
    localStorage.setItem("current", index);
  }
  return (
    <button onClick={onClick}>
      <PlayIcon />
    </button>
  );
}
