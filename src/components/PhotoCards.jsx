import React, { useState, useEffect } from "react";
import execTeam from "../assets/exec-team.json";

const PhotoCards = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    importImages().then((importedImages) => {
      setImages(importedImages);
    });
  }, []);

  const importImages = async () => {
    var imageContext;

    imageContext = await import.meta.globEager("../assets/exec_team/*");

    const importedImages = Object.keys(imageContext).map(
      (key) => imageContext[key].default
    );

    return importedImages;
  };

  return (
    <div className="flex px-4 md:px-32 xl:px-[20%] flex-wrap justify-center gap-8">
      {execTeam[
        props.directory == "Executive Team" ? "exec-team" : "trainers/coaches"
      ].map((person) => (
        <div key={person.name} className="max-w-[320px]">
          <img
            className="object-cover w-full"
            key={person.name}
            src={images.find((image) => {
              var path = image.split("/");
              return path[path.length - 1] === person.photo;
            })}
            alt={person.name}
          />
          {props.directory == "Executive Team" ? (
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
