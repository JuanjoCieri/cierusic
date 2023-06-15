import React, { useState } from "react";
import { Modal, Label, TextInput, FileInput, Accordion } from "flowbite-react";
import { ArrowDownIcon, PlusIcon } from "../../../utils/Emojis/emojis";
import { useDispatch, useSelector } from "react-redux";
import { postSong } from "../../../redux/Actions";
import { postImage } from "../../../redux/Actions";
import Loader from "./Loader";
import { toast } from "react-hot-toast";

export default function Upload() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    file: null,
    image: null,
  });

  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("folder", "cierusic");
    setLoadingImage(true);
    dispatch(postImage(data)).then((e) => {
      setImage(e.payload.url);
      setFormData({
        ...formData,
        image: e.payload.url,
      });
      setLoadingImage(false);
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const songData = new FormData();
      songData.append("name", formData.name);
      songData.append("desc", formData.desc);
      songData.append("image", formData.image);
      songData.append("artist", loggedUser.name);
      songData.append("artistId", loggedUser.id)
      songData.append("file", formData.file);

      dispatch(postSong(songData)).then(() => {
        setLoading(false); 
        toast.success("Canción subida con éxito!")
      });
    } catch (error) {
      console.error(error);
      setLoading(false); 
    }
  };

  return (
    <>
      <button
        onClick={onClick}
        className="text-fuchsia-800 font-semibold flex items-center justify-center gap-2"
      >
        {<PlusIcon />} Subir canción
      </button>

      <Modal show={show} size="md" popup={true} onClose={onClose} className="h-screen">
        <Modal.Header />
        <Modal.Body>
          {/* {loading === true ? (<p>Subiendo canción...</p>) : ( */}

            <form action="/songs" method="post" enctype="multipart/form-data">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Agregar archivo</Accordion.Title>
                <Accordion.Content>
                  <div id="fileUpload">
                    <div className="mb-2 block">
                      <Label htmlFor="file" value="Agregar" />
                    </div>
                    <FileInput
                      id="file"
                      helperText=".mp3 .wav .ogg"
                      accept="audio/mpeg, audio/wav, audio/ogg"
                      name="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Agregar datos</Accordion.Title>
                <Accordion.Content>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Titulo" />
                    </div>
                    <TextInput
                      id="name"
                      name="name"
                      placeholder="Nombre de la canción"
                      required={true}
                      onBlur={handleInputChange}
                      />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="desc" value="Descripción" />
                    </div>
                    <TextInput
                      id="descc"
                      name="desc"
                      placeholder="Añade una descripción"
                      required={true}
                      onBlur={handleInputChange}
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
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Subir</Accordion.Title>
                <Accordion.Content>
                  <div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="py-2 px-4  bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-fuchsia-500 focus:ring-offset-fuchsia-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                      >
                      Subir
                    </button>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </form>
        {/* )} */}
        </Modal.Body>
        </Modal>
      {loading && <Loader />}
    </>
  );
}
