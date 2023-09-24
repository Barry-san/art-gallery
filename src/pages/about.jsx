function About() {
  return (
    <div>
      <div className="about">
        <h1 className="title">About Artsy!</h1>
        <p>
          Artsy is a project born from my interest in coding, and a desire to
          build interactive and dynamic user interfaces using the React.js
          library. Atrsy is powered by the publicly available Art institute of
          chicago API, and all content on it, belongs to the AIC
        </p>
        <h2 className="title">The Art Institute of Chicago</h2>
        <p>
          The Art Institute of Chicago is home to a vast and diverse collection
          of art spanning centuries and cultures. It&apos;s a treasure trove of
          inspiration for artists, historians, and art enthusiasts worldwide.
          Our project serves as a gateway to this incredible collection,
          allowing you to discover, explore, and appreciate art like never
          before.
        </p>
        <div className="tools">
          <h2 className="title">Tools</h2>
          <p>
            We&apos;ve chosen React.js, a powerful JavaScript library for
            building user interfaces, as the foundation for our project. Its
            flexibility and efficiency make it an ideal choice for creating a
            dynamic and responsive art exploration platform.
          </p>
          <p>
            For the visual aesthetics, we&apos;ve utilized vanilla CSS to craft
            a unique and visually appealing user experience. Our design is
            inspired by the art itself, combining elegance and simplicity to
            ensure that the art takes center stage.
          </p>
          <ul>
            <li>
              <span>Explore the Collection:</span> Browse through a vast
              selection of artworks from different eras, styles, and artists.
            </li>
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
