import React from "react";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatePlaylist from "../Forms/CreatePlaylist/CreatePlaylist";

export default function MyPlaylist({ show, setShow }) {
  const playlist = useSelector((state) => state.userLikedPlaylist);
  return (
    <div
      className={`w-fit mt-16 fixed right-0 h-screen z-40 ${
        show ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <Sidebar className="w-96">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Tus playlist</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {playlist && playlist.length > 0 ? (
              playlist.map((p) => (
                <Link to={"/playlist/" + p.id}>
                  <Sidebar.Item href="#">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={p.image} className="w-16" />
                        <p className="font-semibold">{p.name}</p>
                      </div>
                      <div>
                        <p className="text-[12px]">
                          {p.songs.length} canciones
                        </p>
                      </div>
                    </div>
                  </Sidebar.Item>
                </Link>
              ))
            ) : (
              <Sidebar.Item href="#">No tienes playlists!</Sidebar.Item>
            )}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
              <Sidebar.Item href="#" className="flex">
            <CreatePlaylist />
                </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <button onClick={() => setShow(!show)}>
              <Sidebar.Item href="#">Cerrar</Sidebar.Item>
            </button>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
