import githubLogo from "../assets/svg/github.svg";
import computer from '../assets/images/vintage-computer.jpg';
import apple from "../assets/images/vintage-apple.jpg";
import game from "../assets/images/vintage-game.jpg";
import music from "../assets/images/vintage-music.jpg";
import typewritter from "../assets/images/typewriter.jpg";

const projects = [ 
    {
        name:'procrastinot',
        description:'Procrastinot is a full-stack application for managing timers built with Node.js, Express.js, Handlebars.js, MySQL, and Sequelize ORM. It allows users to start, stop, and reset timers for different tasks.',
        image: apple,
        githubLink:'https://github.com/MauryIV/procrastinot',
        projectLink:'https://procrastinot.onrender.com/'
    },
    {
        name: 'CineSpin The Reel Roulette',
        description:'The Reel Roulette, your ultimate movie-deciding assistant! Tired of endlessly scrolling through streaming services trying to pick a movie? Let CineSpin do the hard work for you.',
        image: game,
        githubLink:'https://github.com/HaleighElkins/CineSpin-The-Reel-Roulette-',
        projectLink:'https://haleighelkins.github.io/CineSpin-The-Reel-Roulette-/',
    },
    {
        name:'ReadME Generator',
        description:'Using Node you will be able to enter what your project title is, a description, the ususage, contributors, test instructions, licenses, and questions.',
        image: computer,
        githubLink:'https://github.com/HaleighElkins/README-Generator',
        projectLink:'https://github.com/HaleighElkins/README-Generator',
    },
    {
        name:'Note Taker',
        description:'AS A small business owner I WANT to be able to write and save notes SO THAT I can organize my thoughts and keep track of tasks I need to complete',
        image: typewritter,
        githubLink:'https://github.com/HaleighElkins/Note-Taker',
        projectLink:'https://note-taker-1-00vu.onrender.com/',
    },
    {
        name:'Logo Maker',
        description:'AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I dont have to pay a graphic designer',
        image: music,
        githubLink:'https://github.com/HaleighElkins/Logo-Maker',
        projectLink:'https://drive.google.com/file/d/1dDDtImlwgfFc-7esOvazsTbly-holLY5/view',
    },
]
export default function Portfolio() {
  return (
    <div className="container pt-4" style={{ paddingLeft: '40%', paddingRight: '1%' }}>
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 position-relative" style={{ backgroundColor: 'inherit' }}>
              <a
                className="hoverBox"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-body text-light p-2 d-flex flex-column">
                  <h4 className="align-self-start">{project.name}</h4>
                  <img
                    className="portImage img-fluid"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src={project.image}
                    alt={project.name}
                  />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={githubLogo}
                      className="logo github portGithub mt-2"
                      alt="Github logo"
                    />
                  </a>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
