import React, { useState, useEffect } from 'react';
import execTeam from '../assets/exec-team.json';

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

    const importedImages = Object.keys(imageContext).map((key) => imageContext[key].default);

    return importedImages;
  };

  return (
    <div className="image-gallery">
    
    {execTeam[(props.directory == "Executive Team")?'exec-team':'trainers/coaches'].map((person) => (
      <div key={person.name} className="photos">
        <img className='photoCard' key={person.name} src={images.find((image) => {
          var path = image.split("/");
          return path[path.length - 1] === person.photo;
        })} alt={person.name}/>
          { (props.directory == "Executive Team") ? 
          <div>
            <p className='photoCardTextName font-semibold text-white pt-2'>{person.name}</p>
            <p className='photoCardTextDescription text-white'>{person.title}</p> 
          </div> : 
          <p className='photoCardTextName font-semibold text-white pt-2'>{person.name}</p>
          }
      </div>
    ))
      
      }
    </div>
  );
};

export default PhotoCards;