import * as actions from "./Actions/actionsTypes.js";

const initialState = {
  loggedUser: [],
  userId: [],
  songs: [],
  playlistSongs: [],
  search: [],
  forYouPlaylist: [],
  playlist: [],
  userDetail: [],
  likedSongs: [],
  userSongs: [],
  songDetail: [],
  userLikedPlaylist: [],
};

export default function rootReducer(state = initialState, payload) {
  switch (payload.type) {
    case actions.GET_GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: payload.payload,
      };
    case actions.GET_GET_FOR_YOU_PLAYLIST:
      return {
        ...state,
        forYouPlaylist: payload.payload,
      };
    case actions.GET_SEARCH:
      return {
        ...state,
        search: payload.payload,
      };
    case actions.GET_GET_PLAYLIST_DETAIL:
      return {
        ...state,
        playlist: payload.payload,
      };
    case actions.GET_GET_USER_DETAIL:
      return {
        ...state,
        userDetail: payload.payload,
      };
    case actions.GET_GET_LIKED_USER_SONGS:
      return {
        ...state,
        likedSongs: payload.payload,
      };
      case actions.GET_GET_USER_SONGS:
      return {
        ...state,
        userSongs: payload.payload,
      };
    case actions.GET_GET_PLAYLIST_SONGS:
      return {
        ...state,
        playlistSongs: payload.payload,
      };
    case actions.GET_GET_LIKED_USER_PLAYLIST:
      return {
        ...state,
        userLikedPlaylist: payload.payload,
      };
    case actions.SET_PLAYLIST_SONGS:
      return {
        ...state,
        songs: payload.payload,
      };
    case actions.SET_SONG:
      return {
        songs: payload.payload,z
      };
    case actions.GET_GET_SONG_BY_ID:
      return {
        ...state,
        songDetail: payload.payload,
      };
    case actions.POST_IMAGE:
      return {
        ...state,
      };
    case actions.POST_POST_ADD_SONG_TO_PLAYLIST:
      return {
        ...state,
      };
    case actions.POST_POST_COMMENT_SONG:
      return {
        ...state,
      };
    case actions.POST_POST_COMMENT_PLAYLIST:
      return {
        ...state,
      };
    case actions.POST_POST_LIKE_PLAYLIST:
      return {
        ...state,
      };
    case actions.POST_POST_CREATE_PLAYLIST:
      return {
        ...state,
      };
    case actions.POST_POST_LIKE_SONG:
      return {
        ...state,
      };
    case actions.POST_POST_SONG:
      return {
        ...state,
      };
    case actions.POST_POST_USER_LOGIN:
      return {
        ...state,
        userId: payload.payload,
      };
    case actions.POST_POST_USER_LOGOUT:
      return {
        ...state,
      };
    case actions.POST_POST_USER_REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
