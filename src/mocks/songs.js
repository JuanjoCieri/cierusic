

const songs = [
    {
        id: 1,
        name: "Lady (Here me Tonight)",
        artist: "Modjo",
        image: "https://lastfm.freetls.fastly.net/i/u/ar0/92057e350d344b6acb66b62862177241.jpg",
        file: "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/GTA%20V%20Radio%20%5BNon-Stop-Pop-FM%5D%20Modjo%20-%20Lady%20(Here%20Me%20Tonight)%20(online-audio-converter.com).mp3?alt=media&token=fe40ddee-321d-465b-9788-064602823632",
        date: "5 de mayo del 2023"
    },
    {
        id: 2,
        name: "Breath deepplyy",
        artist: "Jazz Hop",
        image: "https://i.ytimg.com/vi/7NOSDKb0HlU/maxresdefault.jpg",
        file: "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/breath.mp3?alt=media&token=839fed3b-9f0a-42b3-acba-1acd908db600",
        date: "5 de mayo del 2023"
    },
    {
        id: 3,
        name: "Breath deepplyyy",
        artist: "Jazz Hop",
        image: "https://i.ytimg.com/vi/7NOSDKb0HlU/maxresdefault.jpg",
        file: "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/breath.mp3?alt=media&token=839fed3b-9f0a-42b3-acba-1acd908db600",
        date: "5 de mayo del 2023"
    },
    {
        id: 4,
        name: "Breath deepplyyyy",
        artist: "Jazz Hop",
        image: "https://i.ytimg.com/vi/7NOSDKb0HlU/maxresdefault.jpg",
        file: "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/breath.mp3?alt=media&token=839fed3b-9f0a-42b3-acba-1acd908db600",
        date: "5 de mayo del 2023"
    },
    {
        id: 5,
        name: "Breath deepplyyyyy",
        artist: "Jazz Hop",
        image: "https://i.ytimg.com/vi/7NOSDKb0HlU/maxresdefault.jpg",
        file: "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/breath.mp3?alt=media&token=839fed3b-9f0a-42b3-acba-1acd908db600",
        date: "5 de mayo del 2023"
    }
]

export default songs

// const [toggle, setToggle] = useState(false);

// return (
//   <Navbar
//     fluid={true}
//     rounded={false}
//     className="w-full fixed z-50 top-0 h-16"
//   >
//     <div className="w-3/4">
//       <Navbar.Brand className="container flex items-center justify-around mx-auto ">
//         <Link to="/" className="flex items-center">
//           <span className="self-center text-3xl font-semibold whitespace-nowrap font-poppins text-fuchsia-600 dark:text-white">
//             NIKITA
//           </span>
//         </Link>
//         <div className="hidden lg:block">
//           <Link className="dark:text-white p-5 font-poppins" to="/">
//             INICIO
//           </Link>
//           <Link
//             className="dark:text-white p-5 font-poppins"
//             to="/products/pantuflas"
//           >
//             PANTUFLAS
//           </Link>
//           <Link
//             className="dark:text-white p-5 font-poppins"
//             to="/products/pijamas"
//           >
//             PIJAMAS
//           </Link>
//           <Link
//             className="dark:text-white p-5 font-poppins"
//             to="/products/alfombras"
//           >
//             ALFOMBRAS
//           </Link>
//         </div>
//         <div className="flex md:order-2">
//           <div className="lg:hidden flex align-middle justify-center p-1 text-gray-800 dark:text-white">
//             <IconContext.Provider value={{ size: 30 }}>
//               <BsMenuUp onClick={(e) => setToggle(!toggle)} />
//             </IconContext.Provider>
//           </div>
//         </div>
//       </Navbar.Brand>
//     </div>
//     {toggle ? (
//       <div className="p-2 m-5 bg-white dark:bg-gray-600 rounded-lg dark:text-white w-full">
//         <div>
//           <Navbar.Link as={Link} to="/">
//             INICIO
//           </Navbar.Link>

//           <Navbar.Link as={Link} to="/academy">
//             PANTUFLAS
//           </Navbar.Link>

//           <Navbar.Link as={Link} to="/academy">
//             PIJAMAS
//           </Navbar.Link>

//           <Navbar.Link as={Link} to="/academy">
//             ALFOMBRAS
//           </Navbar.Link>
//         </div>
//       </div>
//     ) : null}
//     <div className="w-1/4 flex justify-around items-center">
//       <Dropdown
//         arrowIcon={false}
//         inline={true}
//         label={
//           <Avatar
//             alt="User settings"
//             img={cartIcon}
//             rounded={true}
//             className="w-6"
//           />
//         }
//         className="w-[500px]"
//       >
//         <Dropdown.Header>
//           <span className="block text-sm">Hola!</span>
//           <span className="block truncate text-sm font-medium">
//             Tu carrito
//           </span>
//         </Dropdown.Header>
//         <Link to={"/users/"}>
//           <Dropdown.Item>
//             <div className="w-[450px] flex border">
//               <div className="w-1/4">
//                 <img
//                   src={pantuflas[0]?.imagen[0]}
//                   alt="cart"
//                   className="w-[150px]"
//                 />
//               </div>
//               <div className="w-2/4 flex flex-col justify-around items-center">
//                 <div>
//                   <p className="font-poppins text-center px-4">
//                     {pantuflas[0]?.nombre} ({pantuflas[0]?.talle[0]})
//                   </p>
//                 </div>
//                 <div className="w-full flex items-center justify-center">
//                   <p className="text-xl font-poppins text-fuchsia-400">
//                     {pantuflas[0]?.precio.toLocaleString("es-AR", {
//                       style: "currency",
//                       currency: "ARS",
//                     })}
//                   </p>
//                 </div>
//               </div>
//               <div className="w-1/4 flex justify-center items-center">
//                 <svg
//                   width="40"
//                   height="40"
//                   class="w-8 h-8 m-auto text-black"
//                   fill="currentColor"
//                   viewBox="0 0 1792 1792"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
//                 </svg>
//               </div>
//             </div>
//           </Dropdown.Item>
//         </Link>
//         <Dropdown.Divider />
//         <Link to="/notifications">
//           <Dropdown.Item>
//             <div className="w-[450px] flex justify-center items-center">
//               <button
//                 type="button"
//                 class="py-2 px-4  bg-fuchsia-600 hover:bg-fuchsia-800 focus:ring-fuchsia-800 focus:ring-offset-fuchsia-200 text-white w-full transition ease-in duration-200 text-center text-base font-poppins shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//               >
//                 Realizar pedido
//               </button>{" "}
//             </div>
//           </Dropdown.Item>
//         </Link>
//       </Dropdown>
//       <Dropdown
//         arrowIcon={false}
//         inline={true}
//         label={
//           <Avatar
//             alt="User settings"
//             img={userIcon}
//             rounded={true}
//             className="w-6"
//           />
//         }
//       >
//         <Dropdown.Header>
//           <span className="block text-sm">Usuario</span>
//           <span className="block truncate text-sm font-medium">email</span>
//         </Dropdown.Header>
//         <Link to={"/users/"}>
//           <Dropdown.Item>Mi cuenta</Dropdown.Item>
//         </Link>
//         <Link to="/notifications">
//           <Dropdown.Item>Mis pedidos</Dropdown.Item>
//         </Link>
//         <Dropdown.Divider />
//         <Link to="/">
//           <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
//         </Link>
//       </Dropdown>
//     </div>
//   </Navbar>
// );
// };