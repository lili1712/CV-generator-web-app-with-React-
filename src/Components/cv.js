
import './cv_style.css';
import { ImPhone } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { DiCelluloid } from "react-icons/di";


export default function Cv({nom, prenom, profilpersonnel, profession, photo, email, telephone, adresse, age,
    school1, school2, school3, yeard1, yearf1, yeard2, yearf2, yeard3, yearf3, localisation1, localisation2, localisation3,
    organisation1, position1, debut1, fin1, desc1, organisation2, position2, debut2, fin2, desc2, organisation3, position3, debut3, fin3, desc3,
    comp1, comp2, comp3,
    langue1, langue2, langue3,
    loisir1, loisir2, loisir3,
    autre1, autre2, autre3}) {
  return (
    <div className="App">
      <div className="container">
        <div className="sideBar">

        <div className="profil">
            <div className="image_div">
                <img src='./avatar.jpg' className='image' alt="" />
            </div>
            <h1 className="user_name">{nom} {prenom} </h1>
            <p className="profession"> {profession} </p>
            <br/>

            <div className="profil_personnel">
                <h2>
                PROFIL PERSONNEL
                </h2>
                <p>
                {profilpersonnel}
                </p>
            </div>

        </div>

          

        <div className="Coordonnees">
            <div className="infoPerso">
                <h2>
                COORDONNÉES
                </h2>
                <p className="infos"><ImPhone /> {telephone} </p>
                <p className="infos"><ImEnvelop /> {email} </p>
                <p className="infos"><ImLocation /> {adresse} </p>
                <p className="infos"><ImCalendar /> {age} </p>

            </div>

        </div>      


        <div>
        <div className="others">
            <h2 className="loisirs_title">LOISIRS</h2>
            <p className="other_title"><DiCelluloid /> {loisir1} </p>
            <p className="other_title"><DiCelluloid />{loisir2}</p>
            <p className="other_title"><DiCelluloid />{loisir3}</p>
            

        </div>

        <div className="others">
            <h2 className="Autres_title">AUTRES</h2>
            <p className="other_title"><DiCelluloid /> {autre1} </p>
            <p className="other_title"><DiCelluloid />{autre2}</p>
            <p className="other_title"><DiCelluloid />{autre3}</p>
        
        </div>
        </div>

        
        </div>

        <div className="main">


        <div>


<div className="Exp">
            <h2 className="experiences">EXPÉRIENCE PROFESSIONNELLE</h2>
             
            
            <div className="grid_row">
                <div className="grid_item">
                    <p className="grid_date">{debut1} - {fin1} :</p>
                </div>

                <div className="grid_item">
                    <h3 className="grid_title"> {organisation1} </h3>
                    <p className="grid_location"> {position1} </p>
                    <p className="grid_text"> {desc1} </p>
                </div>

            </div>
            

            <div className="grid_row">
                <div className="grid_item">
                    <p className="grid_date">{debut2} - {fin2} :</p>
                </div>

                <div className="grid_item">
                    <h3 className="grid_title"> {organisation2} </h3>
                    <p className="grid_location">{position2}</p>
                    <p className="grid_text">{desc2}</p>
                </div>

            </div>


            <div className="grid_row">
                <div className="grid_item">
                    <p className="grid_date">{debut3} - {fin3} :</p>
                </div>

                <div className="grid_item">
                    <h3 className="grid_title">{organisation3}</h3>
                    <p className="grid_location">{position3}</p>
                    <p className="grid_text">{desc3}</p>
                </div>

            </div>

            
        
        </div>




            <div className="Etudes">
            <h2 className="formationsDiplomes">FORMATIONS ET DIPLÔMES</h2>
             
            
            <div className="grid_row">
                <div className="grid_item">
                    <p className="grid_date">{yeard1} - {yearf1} :</p>
                </div>

                <div className="grid_item">
                    <h3 className="grid_title"> {school1} </h3>
                    <p className="grid_location"> {localisation1} </p>
                </div>


                <div className="grid_item">
                    <p className="grid_date">{yeard2} - {yearf2} :</p>
                </div>

                <div className="grid_item">
                    <h3 className="grid_title">{school2}</h3>
                    <p className="grid_location">{localisation2}</p>
                </div>


                <div className="grid_item">
                    <p className="grid_date">{yeard3} - {yearf3} :</p>
                </div>


                <div className="grid_item">
                    <h3 className="grid_title">{school3}</h3>
                    <p className="grid_location">{localisation3}</p>
                </div>

            </div>
            
            
            </div>


        
        </div>

          
        <div>
        <div className="competences">
            <h2 className="Competences_title">COMPÉTENCES TECHNIQUES</h2>
            <p className="competence_title"><DiCelluloid />{comp1}</p>
            <p className="competence_title"><DiCelluloid />{comp2}</p>
            <p className="competence_title"><DiCelluloid />{comp3}</p>

            <h2 className="Competences_title">COMPÉTENCES LINGUISTIQUES</h2>
            <p className="competence_title"><DiCelluloid /> {langue1} </p>
            <p className="competence_title"><DiCelluloid />{langue2}</p>
            <p className="competence_title"><DiCelluloid />{langue3}</p>

        </div>
        </div>  



        </div>

      </div>
    </div>
  );
}


