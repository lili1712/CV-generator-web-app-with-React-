import './intro_style.css';

function Intro() {
  return (
    <div className="App">
      <header>
        <div className="first">
          <div className="logo">
            <img src="./logo.png"/>
          </div>
          <ul className="list">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Créer Votre CV</a></li>
          </ul>
        </div>
        <div>
          <h1 className="title">
            Créer Votre CV 
            professionnel en un click
          </h1>
        </div>
        <div className="boutton">
          <a className="btn" href="#">Pour remplir le formulaiare clickez sur Next</a>
        </div>
      </header>
    </div>
  );
}

export default Intro;
