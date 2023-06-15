import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  HomeIcon,
  NotificationIcon,
} from "../../utils/Emojis/emojis";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Searchbar from "../Search/Searchbar";
import LoginForm from "../Forms/Login/Login";
import RegisterForm from "../Forms/Register/Register";
import MyPlaylist from "../Playlist/myPlaylist";
import { postUserLogout } from "../../redux/Actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const [show, setShow] = useState(false);

  function handleClick() {
    dispatch(postUserLogout());
    window.location.reload("");
  }

  return (
    <>
      <Navbar
        fluid={false}
        rounded={true}
        className="flex justify-center items-center top-0 w-screen fixed h-16 bg-[#f8f7f7] z-50 shadow-lg shadow-purple-500/20 dark:shadow-lg dark:shadow-purple-800/80"
      >
        <Navbar.Brand as={Link} to={"/"}>
          <span className="md:hidden self-center whitespace-nowrap text-2xl text-fuchsia-700 font-semibold dark:text-white">
            <HomeIcon />
          </span>
          <span className="hidden md:block self-center whitespace-nowrap text-2xl text-fuchsia-700 font-semibold dark:text-white">
            Cierusic
          </span>
        </Navbar.Brand>
        <div className="h-full">
          <Searchbar />
        </div>
        <div className="flex md:order-2 justify-center items-center gap-3">
          {!loggedUser || Object.keys(loggedUser).length === 0 ? (
            <>
              <LoginForm />
              <RegisterForm />
            </>
          ) : (
            <>
              <Link to={loggedUser.id ? "/user/likes/" + loggedUser.id : ""}>
                <HeartIcon />
              </Link>
              <NotificationIcon />
              <Dropdown
                className="z-50"
                arrowIcon={false}
                inline={true}
                label={
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src={loggedUser.image}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{loggedUser.name || ""}</span>
                  <span className="block truncate text-sm font-medium">
                    {loggedUser.email || ""}
                  </span>
                </Dropdown.Header>
                <Link to={loggedUser.id ? "/users/" + loggedUser.id : ""}>
                  <Dropdown.Item>Perfil</Dropdown.Item>
                </Link>
                <Link to={loggedUser.id ? "/user/likes/" + loggedUser.id : ""}>
                  <Dropdown.Item>Tus me gusta</Dropdown.Item>
                </Link>
                <button onClick={() => setShow(!show)}>
                  <Dropdown.Item>Tus playlist</Dropdown.Item>
                </button>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleClick}>
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown>
            </>
          )}
        </div>
      </Navbar>
      <MyPlaylist show={show} setShow={setShow} />
    </>
  );
}
