import React, { useState } from "react";
import { CreateIcon } from "../../../utils/Emojis/emojis";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { postCreatePlaylist, postImage } from "../../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export default function CreatePlaylist() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  const [input, setInput] = useState({
    userId: loggedUser?.id,
    userName: loggedUser?.name,
    name: "",
    desc: "",
    image: "",
  });

  console.log(input, "Aca");

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

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit() {
    const payload = {
      userId: loggedUser?.id,
      userName: loggedUser?.name,
      name: input.name,
      desc: input.desc,
      image: input.image,
    };
    console.log(payload)
    dispatch(postCreatePlaylist(payload));
    toast.success("Playlist creada correctamente");
    window.location.reload("");
  }

  return (
    <>
      <button
        className="flex items-center justify-center gap-2 text-green-400"
        onClick={onClick}
      >
        <CreateIcon /> Crear playlist
      </button>
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body className="shadow-xl shadow-green-500/50 dark:shadow-xl dark:shadow-green-800/80">
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Crear nueva playlist
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nombre de la playlist" />
              </div>
              <TextInput
                id="name"
                type="name"
                name="name"
                defaultValue={input.name}
                onBlur={(e) => handleChange(e)}
                placeholder="Nueva playlist"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="desc" value="Descripción" />
              </div>
              <TextInput
                id="descripcionPlaylist"
                type="text"
                name="desc"
                defaultValue={input.desc}
                onBlur={(e) => handleChange(e)}
                placeholder={`"Música para relajarse"`}
                required={true}
              />
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="image" value="Imagen" />
              </div>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              {loadingImage ? (
                <h3 className="font-light text-white text-xl">
                  Cargando imagen...
                </h3>
              ) : (
                <img src={image} alt="" width="300px" />
              )}
            </div>
            <div className="w-full flex justify-center items-center">
              <Button onClick={handleSubmit}>Crear playlist</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
