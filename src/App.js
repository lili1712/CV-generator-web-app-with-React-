import React from 'react';
import { Steps, useSteps} from 'react-step-builder';
import './App.css';

//Import des différents components du formulaire ainsi que le CV
import InfoPerso from './Components/infoPerso';
import Education from './Components/Education1';
import Experience  from './Components/Exp';
import CompetencesTechniques from './Components/competences_techniques';
import CompetencesLinguistiques from './Components/competences_linguistiques';
import Loisirs from './Components/loisirs';
import Autres from './Components/autres';
import Cv from './Components/cv';
import Intro from './Components/intro';


function App() {

  const userState = {nom : '', prenom:'', profilpersonnel:'', profession:'', email: '', telephone:'', adresse:'',age:'', 
  school1:'', school2:'', school3:'', yeard1 : '', yearf1 : '',yeard2 : '', yearf2 : '', yeard3:'', yearf3:'', localisation1:'', localisation2:'', localisation3:'',
  organisation1:'',position1:'',debut1:'', fin1:'',desc1:'',organisation2:'',position2:'',debut2:'', fin2:'',desc2:'',organisation3:'',position3:'',debut3:'', fin3:'',desc3:'',
  comp1:'', comp2:'', comp3:'',
  langue1:'', langue2:'', langue3:'',
  loisir1:'', loisir2:'', loisir3:'',
  autre1:'', autre2:'', autre3:''};
  
  
  const [user, setUser]=React.useState(userState);
  
  //on appelle la fonction qui va nous permettre de naviguer à travers les différentes rubriques de l'application
  const stepsState = useSteps();

  //fonction qui gère les changements d'états des données entrèes par l'utilisateur
  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  };

  

  return (
    <>
      
        
          <Steps>
            <Intro></Intro>
            <InfoPerso nom={user.nom} prenom={user.prenom} profilpersonnel={user.profilpersonnel} profession={user.profession} email={user.email} telephone={user.telephone} adresse={user.adresse} age={user.age} handleChange={handleChange} />
            <Education school1={user.school1} school2={user.school2} school3={user.school3} yeard1={user.yeard1} yearf1={user.yearf1} yeard2={user.yeard2} yearf2={user.yearf2} yeard3={user.yeard3} yearf3={user.yearf3} localisation1={user.localisation1} localisation2={user.localisation2} localisation3={user.localisation3} handleChange={handleChange} />
            <Experience position1={user.position1} organisation1={user.organisation1} debut1={user.debut1} fin1={user.fin1} desc1={user.desc1} position2={user.position2} organisation2={user.organisation2} debut2={user.debut2} fin2={user.fin2} desc2={user.desc2} position3={user.position3} organisation3={user.organisation3} debut3={user.debut3} fin3={user.fin3} desc3={user.desc3} handleChange={handleChange} />
            <CompetencesTechniques comp1={user.comp1} comp2={user.comp2} comp3={user.comp3} handleChange={handleChange} />
            <CompetencesLinguistiques langue1={user.langue1} langue2={user.langue2} langue3={user.langue3} handleChange={handleChange} />
            <Loisirs loisir1={user.loisir1} loisir2={user.loisir2} loisir3={user.loisir3} handleChange={handleChange} />
            <Autres autre1={user.autre1} autre2={user.autre2} autre3={user.autre3} handleChange={handleChange} />
            <Cv nom={user.nom} prenom={user.prenom} profilpersonnel={user.profilpersonnel} profession={user.profession} email={user.email} telephone={user.telephone} adresse={user.adresse} age={user.age} 
            school1={user.school1} school2={user.school2} school3={user.school3} yeard1={user.yeard1} yearf1={user.yearf1} yeard2={user.yeard2} yearf2={user.yearf2} yeard3={user.yeard3} yearf3={user.yearf3} localisation1={user.localisation1} localisation2={user.localisation2} localisation3={user.localisation3}
            position1={user.position1} organisation1={user.organisation1} debut1={user.debut1} fin1={user.fin1} desc1={user.desc1} position2={user.position2} organisation2={user.organisation2} debut2={user.debut2} fin2={user.fin2} desc2={user.desc2} position3={user.position3} organisation3={user.organisation3} debut3={user.debut3} fin3={user.fin3} desc3={user.desc3}
            comp1={user.comp1} comp2={user.comp2} comp3={user.comp3}
            langue1={user.langue1} langue2={user.langue2} langue3={user.langue3}
            loisir1={user.loisir1} loisir2={user.loisir2} loisir3={user.loisir3}
            autre1={user.autre1} autre2={user.autre2} autre3={user.autre3} />
          </Steps>
        <div className="navigation">
          {/* Definition des boutons de navigation avec les methodes prev et next */}
          <button className='prev-button' onClick={stepsState.prev}>Prev</button>
          <button className='next-button' onClick={stepsState.next}>Next</button>
        </div>
        <footer>
      <div class="footer">
      <p class = "C_footer"> CV En Ligne - 15/11/2022 - © Tous droits réservés </p>
    
      </div>
    </footer>
    </>
    
  );
}

export default App;
