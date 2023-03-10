import Image from "next/image";
import Link from "next/link";

export default function FormUpload({
  handlePreviewCardClose,
}: {
  handlePreviewCardClose: () => void;
}) {
  return (
    <div className="form-upload">
      <div className="card-upload">
        <div className="card-upload__close" onClick={handlePreviewCardClose}>
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1H1"
              stroke="#374151"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="card-upload__form">
          <div className="form-text">
            <input
              type="text"
              placeholder="Name logo - example : Dark Code *"
              required
            />
            <textarea
              cols={30}
              rows={5}
              placeholder="A litle description company *"
              required
            ></textarea>
            <input type="text" placeholder="links facebook" />
            <input type="text" placeholder="links twitter" />
            <input type="text" placeholder="links github" />
            <input type="text" placeholder="links linkedin" />
            <input type="text" placeholder="Categories" />
          </div>
          <div className="form-media">
            <div>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15C-2.41411e-08 14.4477 0.447715 14 1 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H1C0.447715 16 2.41411e-08 15.5523 0 15ZM3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L6 8.58579L6 1C6 0.447716 6.44771 2.41411e-08 7 0C7.55228 -2.41411e-08 8 0.447715 8 1L8 8.58579L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12C6.73478 12 6.48043 11.8946 6.29289 11.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z"
                  fill="#374151"
                />
              </svg>
              <p>
                <span> Glissez & Déposez </span>
                votre logo au format svg ici
              </p>
            </div>
            <div>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15C-2.41411e-08 14.4477 0.447715 14 1 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H1C0.447715 16 2.41411e-08 15.5523 0 15ZM3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L6 8.58579L6 1C6 0.447716 6.44771 2.41411e-08 7 0C7.55228 -2.41411e-08 8 0.447715 8 1L8 8.58579L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12C6.73478 12 6.48043 11.8946 6.29289 11.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z"
                  fill="#374151"
                />
              </svg>
              <p>
                <span> Glissez & Déposez </span>
                votre logo au format png ici
              </p>
            </div>
          </div>
        </div>
        <div className="card-upload__submit">
          <button>Save logo</button>
          <button onClick={handlePreviewCardClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
