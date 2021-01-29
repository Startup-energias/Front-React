import './scss/_blogSection.scss';

function BlogSection() {
  return (
    <section className="blog has-background-info">
      <div
        className="background"
      >
        <div className="container p-5">
          <h1 className="has-text-white title is-1 mb-5">
            Explore and learn about innovation and renewable technologies at Inoverte
          </h1>
          <a className="button is-large is-white" href="#projects">
            News page
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
