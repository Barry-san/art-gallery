function About() {
  return (
    <div className="about_container">
      <h1>Artsy!</h1>
      <div className="about">
        <p>
          Artsy is a project born from my interest in coding, and a desire to
          build interactive and dynamic user interfaces using the React.js
          library.
        </p>
      </div>
      <div className="about_links">
        <ul>
          <li>
            <a
              href="http://github.com/barry-san"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="http://Linkdin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkdin
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/barry9ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
