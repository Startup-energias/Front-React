function ProjectTeam(props) {
  function RenderMemebers({ list }) {
    return list.map((item) => {
      return (
        <div className="block mx-6" key={item.name}>
          <div className="content team-content">
              <img src={item.image} alt={item.name} />
              <strong className="title is-size-6 has-text-info">{item.name}</strong>
          </div>
          <p className=" has-text-white is-italic">{"\""+item.comment+"\""}</p>
        </div>
      );
    });
  }

  return (
    <div className="content mt-6">
      <RenderMemebers list={props.team} />
    </div>
  );
}

export default ProjectTeam;
