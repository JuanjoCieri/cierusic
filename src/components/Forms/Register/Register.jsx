import React, { useState } from "react";
import {
  Modal,
  Button,
  Label,
  TextInput,
  Accordion,
  FileInput,
} from "flowbite-react";
import { postImage, postUserRegister } from "../../../redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    desc: "",
    image: "",
  });

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  function validate(input) {
    let errors = {};

    let regex = new RegExp("^[0-9]+$");

    if (input.name) {
      if (
        !/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g.test(
          input.name
        )
      ) {
        errors.first_name = "El nombre solo puede tener letras";
      } else if (input.name.length > 20) {
        errors.name = "El nombre no puede tener más de 20 caracteres";
      } else errors.name = "";
    } else errors.name = "El nombre es necesario";

    if (input.email) {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
        errors.email = "El email debe ser valido!";
      } else errors.email = "";
    } else errors.email = "El email es necesario";

    if (input.password) {
      if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,14}$/.test(input.password)) {
        errors.password =
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula (No puede tener otros simbolos)";
      } else errors.password = "";
    } else errors.password = "La contraseña es necesaria";

    return errors;
  }

  const have = () => {
    if (errors.name !== "" || errors.email !== "" || errors.password !== "") {
      return true;
    } else if (input.name && input.email && input.password) {
      return false;
    } else {
      return "e";
    }
  };

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("folder", "cierusic");
    setLoadingImage(true);
    dispatch(postImage(data)).then((e) => {
      setImage(e.payload.url);
      setInput({
        ...input,
        image: e.payload.url,
      });
      setLoadingImage(false);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (have() === false) {
      dispatch(postUserRegister(input));
      setInput({
        name: "",
        email: "",
        password: "",
        desc: "",
        city: "",
        image:
          "https://assets.stickpng.com/images/585e4beacb11b227491c3399.png",
      });
      toast.success("Usuario creado con éxito");
      navigate("/", { replace: true });
    } else if (have() === "e") {
      alert("faltan datos");
    } else alert("faltan datos");
  }

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="py-1 px-3 hover:bg-gray-400 focus:ring-gray-500 focus:ring-offset-gray-200 text-black transition ease-in duration-200 text-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border bg-gray-200"
      >
        Registrate
      </button>
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Registrate
              </h3>
              <div>
                <div className="mb-2 block flex gap-1">
                  <Label htmlFor="name" value="Nombre" />
                  <p className="text-red-600">*</p>
                </div>
                <TextInput
                  key={input.name}
                  id="name"
                  name="name"
                  defaultValue={input.name}
                  onBlur={(e) => handleChange(e)}
                  placeholder="Juan Perez"
                  required={true}
                />
                {errors.name && (
                  <p className="font-bold text-red-700 text-center p-2">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block flex gap-1">
                  <Label htmlFor="email" value="Email" />
                  <p className="text-red-600">*</p>
                </div>
                <TextInput
                  key={input.email}
                  id="email"
                  name="email"
                  defaultValue={input.email}
                  onBlur={(e) => handleChange(e)}
                  placeholder="nombre@hotmail.com"
                  required={true}
                />
                {errors.email && (
                  <p className="font-bold text-red-700 text-center p-2">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block flex gap-1">
                  <Label htmlFor="password" value="Contraseña" />
                  <p className="text-red-600">*</p>
                </div>
                <TextInput
                  key={input.password}
                  id="password"
                  type="password"
                  required={true}
                  name="password"
                  defaultValue={input.password}
                  onBlur={(e) => handleChange(e)}
                />
                {errors.password && (
                  <p className="font-bold text-red-700 text-center p-2">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>Adicional</Accordion.Title>
                    <Accordion.Content>
                      <div className="flex flex-col gap-2">
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="city" value="Ubicación" />
                          </div>
                          <TextInput
                            key={input.city}
                            name="city"
                            defaultValue={input.city}
                            onBlur={(e) => handleChange(e)}
                            id="city"
                            placeholder="Buenos Aires, Argentina"
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="desc" value="Descripción" />
                          </div>
                          <TextInput
                            key={input.desc}
                            id="descripcionUsuario"
                            name="desc"
                            defaultValue={input.desc}
                            onBlur={(e) => handleChange(e)}
                            placeholder={`"Me encanta la música!"`}
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="email" value="Imagen" />
                          </div>
                          <FileInput
                            id="inputt"
                            name="image"
                            accept=".jpg, .png, .jpeg"
                            onChange={(e) => handleImage(e)}
                          />
                          {loadingImage ? (
                            <h3 className="font-light text-white text-xl">
                              Cargando imagen...
                            </h3>
                          ) : (
                            <img src={image} alt="" width="300px" />
                          )}
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>

              <div className="w-full flex justify-center items-center">
                <Button type="submit">Registrate</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
