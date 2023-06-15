import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongById } from "../../redux/Actions";
import SongMain from "./SongMain";
import SongLikes from "./SongLikes";
import SongComents from "./SongComents";

export default function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const songDetail = useSelector((state) => state.songDetail);
  useEffect(() => {
    dispatch(getSongById(id));
  }, [dispatch, id]);

  if (songDetail?.length === 0) {
    return <p className="left-0">Cargando...</p>;
  }

  return (
    <>
      <NavBar />
      <main>
        <SongMain
          image={songDetail?.image}
          name={songDetail?.name}
          artist={songDetail?.artist[0]}
          likes={songDetail?.likes}
          // date={songDetail?.date}
          songId={songDetail?.id}
          fileUrl={songDetail?.fileUrl}
        />
        <section className="w-full flex justify-center items-center mb-24">
          <div className="lg:w-[70%]">
            <SongComents
              comments={songDetail?.comments}
              songId={songDetail?.id}
            />
          </div>
        </section>
      </main>
    </>
  );
}
