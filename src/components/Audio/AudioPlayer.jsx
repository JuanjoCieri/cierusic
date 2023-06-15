import React, { useEffect, useState, createContext, useRef } from "react";
import ReactH5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { RHAP_UI } from "react-h5-audio-player";
import { useSelector } from "react-redux";
import { Modal } from "flowbite-react";
import {
  PlayerNextIcon,
  PlayerPlayIcon,
  PlayerPreviousIcon,
  PlayerStopIcon,
} from "../../utils/Emojis/emojis";

const AudioPlayerContext = createContext();

const AudioPlayer = () => {
  const songs = useSelector((state) => state.songs.songs);
  const currentt = localStorage.getItem("current")
  const [currentSong, setCurrentSong] = useState(0);
  const [playlist, setPlaylist] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const audioPlayerRef = useRef(null);
  const audioPlayerRefModal = useRef(null);

  useEffect(() => {
    setCurrentSong(Number(currentt))
  }, [currentt])

  useEffect(() => {
    setPlaylist(songs);
  }, [songs]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (isPlaying) {
      if (isDesktop) {
        audioPlayerRef.current.audio?.pause();
        audioPlayerRef.current.audio?.setCurrentTime(0);
      } else {
        audioPlayerRefModal?.current?.audio.pause();
        audioPlayerRefModal.current.audio?.setCurrentTime(0);
      }
    }
    if (currentSong < playlist.length - 1) {
      localStorage.setItem("current", currentSong + 1)
      localStorage.setItem("currentId", playlist[currentSong + 1]?.id)
      setCurrentSong(currentSong + 1);
    }
  };

  const handlePrev = () => {
    if (isPlaying) {
      if (isDesktop) {
        audioPlayerRef.current.audio?.pause();
        audioPlayerRef.current.audio?.setCurrentTime(0);
      } else {
        audioPlayerRefModal.current.audio?.pause();
        audioPlayerRefModal.current.audio?.setCurrentTime(0);
      }
    }
    if (currentSong > 0) {
      localStorage.setItem("current", currentSong - 1)
      localStorage.setItem("currentId", playlist[currentSong - 1]?.id)
      setCurrentSong(currentSong - 1);
    }
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isDesktop) {
      if (isPlaying) {
        audioPlayerRefModal.current.audio.pause();
      }
    } else {
      if (isPlaying) {
        audioPlayerRef?.current?.audio?.pause();
      }
    }
  }, [isPlaying, isDesktop]);

  if (!playlist) {
    return null;
  }

  return (
    <AudioPlayerContext.Provider
      value={{ currentSong, setCurrentSong, toggleAudio }}
    >
      <nav className="fixed w-full h-auto bottom-0 bg-white flex justify-around items-center border-t border-gray-200">
        <div className="lg:w-1/4 flex items-center gap-2 pl-4">
          <div className="w-16 h-16 flex justify-center items-center hidden md:block bg-red-200">
            <img src={playlist[currentSong]?.image} alt="a" className="w-16 h-16 object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-black font-medium text-[18px]">
              {playlist[currentSong]?.name}
            </p>
            <p className="text-gray-600 text-[13px]">
              {playlist[currentSong]?.artist[0]}
            </p>
          </div>
        </div>
        <div className="lg:w-3/4">
          {isDesktop && (
            <ReactH5AudioPlayer
              ref={audioPlayerRef}
              autoPlay
              autoPlayAfterSrcChange={true}
              src={playlist[currentSong]?.fileUrl}
              playlist={playlist}
              showJumpControls={false}
              showSkipControls={true}
              layout="stacked-reverse"
              customProgressBarSection={[
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION,
              ]}
              onClickNext={handleNext}
              onClickPrevious={handlePrev}
              onClickPlay={toggleAudio}
              onClickPause={toggleAudio}
              playing={isPlaying}
            />
          )}
          {!isDesktop && (
            <div className="md:hidden">
              <div onClick={() => setShowModal(true)}>
                <img
                  src={playlist[currentSong]?.image}
                  alt="a"
                  className="w-16 h-16"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      <Modal
        show={showModal}
        onClose={() => {
          toggleAudio();
          setShowModal(false);
        }}
        size="xl"
        popup={false}
        className="h-screen flex justify-center items-center backdrop-blur-lg"
      >
        <div className="bg-gradient-to-r from-violet-400 to-violet-200 rounded-lg mt-20">
          <Modal.Header className="border-none "></Modal.Header>
          <div className="w-full h-52 flex justify-center items-center">
            <img
              src={playlist[currentSong]?.image}
              alt="a"
              className="w-52 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 py-4 h-32">
            <p className="text-black font-medium text-[25px] text-center">
              {playlist[currentSong]?.name}
            </p>
            <p className="text-gray-600">{playlist[currentSong]?.artist[0]}</p>
          </div>
          {!isDesktop && (
            <ReactH5AudioPlayer
              autoPlay={!isDesktop}
              ref={audioPlayerRefModal}
              src={playlist[currentSong]?.fileUrl}
              playlist={playlist}
              showJumpControls={false}
              showSkipControls={true}
              layout="stacked-reverse"
              customProgressBarSection={[
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION,
              ]}
              onClickNext={handleNext}
              onClickPrevious={handlePrev}
              onClickPlay={toggleAudio}
              onClickPause={toggleAudio}
              playing={isPlaying}
              customControlsSection={[
                <div></div>,
                RHAP_UI.MAIN_CONTROLS,
                <div></div>,
              ]}
              customIcons={{
                play: <PlayerPlayIcon />,
                pause: <PlayerStopIcon />,
                next: <PlayerNextIcon />,
                previous: <PlayerPreviousIcon />,
              }}
              className="bg-transparent"
            />
          )}
          <div className="w-full h-8 rounded-lg "></div>
        </div>
      </Modal>
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayer;
