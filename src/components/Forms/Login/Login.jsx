import React, { useState } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";
import { postUserLogin } from "../../../redux/Actions";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit() {
    dispatch(postUserLogin(input)).then((response) => {
      if (response?.payload?.error === "User does not exist") toast.error("El usuario no existe");
      if (response?.payload?.error === "Incorrect password") toast.error("Contraseña incorrecta");
      if (!response?.payload?.error) window.location.reload("");
    });
  }

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="py-1 px-3 hover:bg-gray-400 focus:ring-gray-500 focus:ring-offset-gray-200 text-black transition ease-in duration-200 text-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border bg-gray-200"
      >
        Inicia sesión
      </button>
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Inicia sesión
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="emaill"
                name="email"
                defaultValue={input.email}
                onBlur={(e) => handleChange(e)}
                placeholder="nombre@hotmail.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="passwordd"
                type="password"
                name="password"
                defaultValue={input.password}
                onBlur={(e) => handleChange(e)}
                required={true}
              />
            </div>

            <div className="w-full flex justify-center items-center">
              <Button onClick={handleSubmit}>Entrar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
