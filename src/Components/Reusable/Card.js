import React from "react";

const CustomCard = ({ icon, title, imageSrc, projectName, liveSiteLink, link, description, imageClassName, imageSize, borderClass }) => {
  return (
    <div className={`border-8 rounded ${borderClass || "border-green-800"}`}>
      {icon && <div className="text-white">{icon}</div>}
      {imageSrc && <img src={imageSrc} alt={projectName} className={`project-image ${imageClassName}`} style={{ width: imageSize.width, height: imageSize.height }} />}
      {title && <h3 className="title">{title}</h3>}
      {description && <p className="description">{description}</p>}
      {liveSiteLink && (
        <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      )}
    </div>
  );
};

export default CustomCard;
