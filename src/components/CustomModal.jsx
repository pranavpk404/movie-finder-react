import Modal from "react-modal";
import "./css/Modal.css";
import { useState } from "react";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.9)";

function CustomModal({
  name,
  title,
  original_name,
  poster_path,
  overview,
  release_date,
  vote_average,
  vote_color,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  // To check if the api has given date
  const checkDate = () => {
    if (release_date === "") {
      return "";
    }
    return release_date;
  };
  const imgBaseURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div>
      <button
        className="modalOpenButton"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        More Info
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Info"
        className="CustomModal"
      >
        <div id="closeModalButton" onClick={closeModal}></div>
        <div className="ModalContainer">
          <div className="modalImageContainer">
            <img
              src={`${imgBaseURL}${poster_path}`}
              alt="Avatar"
              className="modalImage"
            />
          </div>
          <div className="ModalMovieInfo">
            <div className="margin-bottom-1rem">
              <h2>{title || name || original_name}</h2>
            </div>
            <div className="margin-bottom-1rem">{overview}</div>
            <div className="margin-bottom-1rem">{checkDate()}</div>
            <div
              className={`rating margin-bottom-1rem ${vote_color}`}
            >{`${vote_average}/10`}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default CustomModal;
