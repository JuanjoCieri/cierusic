import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import PlaylistPage from "./components/Playlist/PlaylistPage";
import Profile from "./components/Profile/Profile";
import UserLikes from "./components/UserLikes/UserLikes";
import { useDispatch } from "react-redux";
import {
  getForYouPlaylist,
  getLikedUserSongs,
  getLoggedUser,
  getUserLikedPlaylist,
  getUserSongs,
} from "./redux/Actions";
import { useCookies } from 'react-cookie';
import SongPage from "./components/Song/SongPage";
import SearchPage from "./components/Search/SearchPage";

function App() {
  const [cookies] = useCookies(["res_sess"]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.res_sess === "1") {
      dispatch(getLoggedUser());
      dispatch(getUserLikedPlaylist())
      // dispatch(getLikedUserSongs())
      // dispatch(getUserSongs())
    }
    dispatch(getForYouPlaylist());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/playlist/:id"} element={<PlaylistPage />} />
        <Route path={"/users/:id"} element={<Profile />} />
        <Route path={"/user/likes/:id"} element={<UserLikes />} />
        <Route path={"/song/:id"} element={<SongPage />} />
        <Route path={"/search"} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
