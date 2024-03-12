const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

//style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
