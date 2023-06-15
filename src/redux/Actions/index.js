import axios from "axios";

import * as actions from "./actionsTypes";

export function getLoggedUser() {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `http://localhost:3001/users/getLoggedUser`,
        { headers: headers, withCredentials: true }
      );
      dispatch({
        type: actions.GET_GET_LOGGED_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserDetail(id) {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/users/getUserDetail/${id}`)
      .then((json) =>
        dispatch({ type: actions.GET_GET_USER_DETAIL, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postUserRegister(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/users/postUserRegister", payload)
      .then((json) =>
        dispatch({ type: actions.POST_POST_USER_REGISTER, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postUserLogin(payload) {
  return async function (dispatch) {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const response = await axios.post(
        "http://localhost:3001/users/postUserLogin",
        payload,
        {
          headers: headers,
          withCredentials: true,
        }
      );
      dispatch({
        type: actions.POST_POST_USER_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: actions.POST_POST_USER_LOGIN,
        payload: error.response.data,
      });
    }
  };
}

export function postUserLogout() {
  return async function (dispatch) {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const response = await axios.get(
        "http://localhost:3001/users/postUserLogout",
        {
          headers: headers,
          withCredentials: true,
          credentials: "same-origin",
        }
      );
      dispatch({
        type: actions.POST_POST_USER_LOGOUT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSearch(searchValue) {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/search?name=${searchValue}`)
      .then((json) =>
        dispatch({ type: actions.GET_SEARCH, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getLikedUserSongs(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return await axios
      .get("http://localhost:3001/songs/getLikedUserSongs/" + id, {
        headers: headers,
        withCredentials: true,
      })
      .then((json) =>
        dispatch({ type: actions.GET_GET_LIKED_USER_SONGS, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getUserSongs(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return await axios
      .get("http://localhost:3001/songs/getUserSongs/" + id, {
        headers: headers,
        withCredentials: true,
      })
      .then((json) =>
        dispatch({ type: actions.GET_GET_USER_SONGS, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getPlaylistSongs(id) {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/songs/getPlaylistSongs/" + id)
      .then((json) =>
        dispatch({ type: actions.GET_GET_PLAYLIST_SONGS, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getUserLikedPlaylist(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return await axios
      .get("http://localhost:3001/playlist/getLikedUserPlaylists", {
        headers: headers,
        withCredentials: true,
      })
      .then((json) =>
        dispatch({
          type: actions.GET_GET_LIKED_USER_PLAYLIST,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function setPlaylistSongs(id) {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/songs/getPlaylistSongs/" + id)
      .then((json) =>
        dispatch({ type: actions.SET_PLAYLIST_SONGS, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postSong(formData) {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3001/songs/postSong", formData)
        .then((json) => {
          dispatch({ type: actions.POST_POST_SONG, payload: json.data });
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
}

export function postImage(archivo) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `http://localhost:3001/cloud/upload`,
        archivo
      );
      return dispatch({
        type: actions.POST_IMAGE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postLikeSong(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/songs/likeSong", payload)
      .then((json) =>
        dispatch({ type: actions.POST_POST_LIKE_SONG, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postCommentSong(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/songs/postCommentSong", payload)
      .then((json) =>
        dispatch({ type: actions.POST_POST_COMMENT_SONG, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postCommentPlaylist(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/playlist/postCommentPlaylist", payload)
      .then((json) =>
        dispatch({
          type: actions.POST_POST_COMMENT_PLAYLIST,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function postLikePlaylist(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/playlist/postLikePlaylist", payload)
      .then((json) =>
        dispatch({ type: actions.POST_POST_LIKE_PLAYLIST, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getForYouPlaylist() {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/playlist/getForYouPlaylist")
      .then((json) =>
        dispatch({ type: actions.GET_GET_FOR_YOU_PLAYLIST, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getPlaylistDetail(id) {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/playlist/getPlaylistDetail/" + id)
      .then((json) =>
        dispatch({ type: actions.GET_GET_PLAYLIST_DETAIL, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}

export function postCreatePlaylist(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/playlist/postCreatePlaylist", payload)
      .then((json) =>
        dispatch({
          type: actions.POST_POST_CREATE_PLAYLIST,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function postAddSongToPlaylist(payload) {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/playlist/postAddSongToPlaylist", payload)
      .then((json) =>
        dispatch({
          type: actions.POST_POST_ADD_SONG_TO_PLAYLIST,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function getSongById(id) {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/songs/getSongById/" + id)
      .then((json) =>
        dispatch({
          type: actions.GET_GET_SONG_BY_ID,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function setSong(id) {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/songs/getSongById/" + id)
      .then((json) =>
        dispatch({
          type: actions.SET_SONG,
          payload: json.data,
        })
      )
      .catch((error) => console.log(error));
  };
}
