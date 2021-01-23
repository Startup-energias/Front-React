function ProjectTeam(props) {
  function RenderMemebers({ list }) {
    return list.map((item) => {
      return (
        <div className="block" key={item.name}>
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
                  <strong>{item.name}</strong>
                </p>
              </div>
            </div>
          </div>
          <p className="is-italic has-text-grey-light">{"\""+item.comment+"\""}</p>
        </div>
      );
    });
  }

  return (
    <div className="content">
      <hr />
      <h6 className="subtitle is-6 has-text-grey">PROJECT BY</h6>
      <hr />

      <RenderMemebers list={props.team} />
    </div>
  );
}

export default ProjectTeam;
