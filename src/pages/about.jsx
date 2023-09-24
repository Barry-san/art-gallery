function About() {
  return (
    <div className="about">
      <h1 className="title">About Artsy!</h1>
      <div className="about">
        <p>
          Artsy is a project born from my interest in coding, and a desire to
          build interactive and dynamic user interfaces using the React.js
          library. Atrsy is powered by the publicly available Art institute of
          chicago API, and all content on it, belongs to the AIC
        </p>
        <div className="tools">
          <h2 className="title">Tools</h2>
          <p>
            Artsy was built using the Public API provided by the AIC, and a
            number of web tools for building dynamic websites
          </p>
          <ul>
            <li>Vite - Code bundler</li>
            <li>React.js - Declarative UI library</li>
            <li>Yarn - package manager</li>
            <li>Git & Github - Version control</li>
            <li></li>
          </ul>
        </div>
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
