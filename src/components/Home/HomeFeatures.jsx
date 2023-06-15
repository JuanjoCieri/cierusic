import React from "react";

export default function HomeFeatures() {
  return (
    <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <svg
              width="30px"
              height="30px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
            >
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.5 12.5l5.5 2L7 18l1 3M17 20.5l-.5-2.5-2.5-1v-3.5l3-1 4.5.5M19 5.5L18.5 7l-3.5.5v3l2.5-1h2l2 1M2.5 10.5l2.5-2L7.5 8l2-3-1-2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Descubrí
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          En Cierusic vas a a poder descubrir música de todos los géneros,
          siempre vas a encontrar una cancion o playlist indicada para cada
          momento.
        </p>
      </div>
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
            >
              <path
                d="M18 22a3 3 0 100-6 3 3 0 000 6zM18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.5 6.5l-7 4M8.5 13.5l7 4"
                stroke="white"
                stroke-width="1.5"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Compartí
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          Aquí vas a poder compartir toda la música que desees. Comparte tu
          música para que pueda expandirse y que mas gente pueda escucharla.
        </p>
      </div>
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <svg
              width="30px"
              height="30px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
            >
              <path
                d="M12 4v16M8 9v6M20 10v4M4 10v4M16 7v10"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Disfrutá
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          Disfruta toda la música que quieras sin limites ni anuncios. Aquí vas
          a poder estar horas escuchando sin ningún corte ni interrupción.
        </p>
      </div>
    </div>
  );
}
