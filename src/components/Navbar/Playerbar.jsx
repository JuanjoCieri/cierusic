// import React, { useEffect } from "react";
// import AudioPlayer from "../Audio/AudioPlayer.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { getForYouPlaylist } from "../../redux/Actions/index.js";

// export default function Playerbar() {

//   const dispatch = useDispatch()

//   const songs = useSelector((state) => state.songs)

//   useEffect(() => {
//     dispatch(getForYouPlaylist())
//   }, [])
  
//   return (
//     <nav className="fixed w-full h-auto bottom-0 bg-white flex justify-around items-center border-t border-gray-200">
//       <div className="w-1/4 flex items-center gap-2 pl-4">
//         <div className="w-16 h-16 flex justify-center items-center">
//           <img src={songs[0].image} alt="a" className="" />
//         </div>
//         <div className="flex flex-col">
//           <p className="text-black font-medium text-[18px]">{songs[0].name}</p>
//           <p className="text-gray-600 text-[13px]">
//             {songs[0].artist[0]}
//           </p>
//         </div>
//       </div>
//       <div className=" w-3/4">
//         <AudioPlayer src={songs[0].file} />
//       </div>
//     </nav>
//   );
// }
