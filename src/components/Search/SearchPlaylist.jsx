import React from "react";
import { Link } from "react-router-dom";

export default function SearchPlaylist({ playlist }) {
  return (
    <div className="w-full border-b">
      <p className="font-inter text-black pl-4 py-2">Playlist</p>
      <div className="w-full">
        {playlist?.length === 0 ? (
          <div className="w-full flex justify-center items-center py-5">
            <p className="font-inter text-black text-center">
              No se encontraron playlist con ese nombre.
            </p>
          </div>
        ) : (
          <table class="min-w-full leading-normal border-t">
            <tbody>
              {playlist?.map((s) => (
                <tr className="hover:bg-red-200">
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <Link to={"/playlist/" + s.id}>
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src={s.image}
                              class="mx-auto object-cover h-10 w-10"
                            />
                          </a>
                        </Link>
                      </div>
                      <div class="ml-3 flex flex-col">
                        <Link to={"/playlist/" + s.id}>
                          <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 font-semibold">
                            {s.name}
                          </p>
                        </Link>
                        <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 ">
                          by {s.author[0]}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
