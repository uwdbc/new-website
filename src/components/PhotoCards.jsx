import React, { useState, useRef } from "react";
import execTeam from "../team/exec-team.json";
import LoadingModal from "./LoadingModal";

const PhotoCards = ({ directory }) => {
  const imagesLoaded = useRef(0);
  const [loading, setLoading] = useState(true);
  const num_images = execTeam[directory].length;

  function onImageLoad(e) {
    imagesLoaded.current++;
    if (imagesLoaded.current >= num_images) {
      setLoading(false);
    }
  }

  return (
    <div className="flex px-4 md:px-32 xl:px-[20%] flex-wrap justify-center gap-8">
      {loading && <LoadingModal />}
      {execTeam[directory].map((person) => (
        <div key={person.name} className="max-w-[320px]">
          <img
            className="object-cover w-full"
            key={person.name}
            src={"exec_team/" + person.photo}
            alt={person.name}
            onLoad={onImageLoad}
          />
          {directory == "exec-team" ? (
            <div>
              <p className="break-words font-semibold text-white pt-2">
                {person.name}
              </p>
              <p className="break-words text-sm text-white">{person.title}</p>
            </div>
          ) : (
            <p className="break-words font-semibold text-white pt-2">
              {person.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoCards;
