function ProjectTeam(props) {
  function RenderMemebers({ list }) {
    return list.map((item) => {
      return (
        <div className="block mx-6" key={item.name}>
          <div className="media">
            <figure className="media-left">
              <figure className="image is-64x64">
                <img className="is-rounded" src={item.image} alt={item.name} />
              </figure>
            </figure>

            <div className="media-content">
              <div className="content">
                <p>
                  <br />
                  <strong className="title is-size-6 has-text-info">{item.name}</strong>
                </p>
              </div>
            </div>
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
