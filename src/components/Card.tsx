import Link from "next/link";

import { Modal } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
import { useState } from "react";

const cleanUrl = (link: string) => {
  return (
    link
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .slice(0, 29) + (link.length > 29 ? "..." : "")
  );
};

export default function Header({
  name,
  link,
  description,
  pngLink,
  svgLink,
  scrImg,
  socials,
}: {
  name: string;
  link: string;
  description: string;
  pngLink: string;
  svgLink: string;
  scrImg: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
    facebook: string;
  };
}) {
  const [previewCardIsOpen, setPreviewCardIsOpen] = useState(false);
  const handlePreviewCardOpen = () => {
    setPreviewCardIsOpen(true);
  };
  const handlePreviewCardClose = () => {
    setPreviewCardIsOpen(false);
  };

  return (
    <>
      <Modal show={previewCardIsOpen} onHide={handlePreviewCardClose}>
        <PreviewCard
          handlePreviewCardClose={handlePreviewCardClose}
          name={name}
          link={link}
          description={description}
          pngLink={pngLink}
          svgLink={svgLink}
          scrImg={scrImg}
          socials={socials}
        />
      </Modal>
      <div className="card" onClick={handlePreviewCardOpen}>
        <div className="card-container">
          <h2>{name}</h2>
          <Link
            href={link}
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {cleanUrl(link)}
          </Link>
        </div>
      </div>
    </>
  );
}
