import React from 'react';
import './componentstyle.css';



export default function InfoPerso ({nom, prenom, profilpersonnel, profession, email, telephone, adresse, age, handleChange}){
    return(
        

                
                <form>
                    <div className="card-body">
                        <h3 className="card-title">Informations Personnelles</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Nom </label>
                            <input type="text" name="nom" className="form-control" value={nom} onChange={handleChange}  required />
                            <small></small>
                        </div>

                        <div className="col-lg-4 text-left">
                            <label>Prénom </label>
                            <input type="text" name="prenom" className="form-control" value={prenom} onChange={handleChange}  required />
                            <small></small>
                        </div>

                        <div className="col-lg-4 text-left">
                            <label>Profil personnel </label>
                            <input type="text" name="profilpersonnel" className="form-control" value={profilpersonnel} onChange={handleChange}  required />
                            <small></small>    
                        </div>

                        <div className="col-lg-4 text-left">
                            <label>Profession </label>
                            <input type="text" name="profession" className="form-control" value={profession} onChange={handleChange}  required />        
                        </div>

                        <div className="col-lg-4 text-left">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" value={email} onChange={handleChange} required />
                            <small></small>
                        </div>

                        <div className="col-lg-4 text-left">
                            <label>Numéro de Téléphone</label>
                            <input type="text" name="telephone" className="form-control" value={telephone} onChange={handleChange} required />
                            <small></small>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Adresse</label>
                            <input type="text" name="adresse" className="form-control" value={adresse} onChange={handleChange} />
                            <small></small>
                        </div>
                    </div>

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Age</label>
                            <input type="text" name="age" className="form-control" value={age} onChange={handleChange} />
                            <small></small>
                        </div>
                    </div>    
                </form>

        )
    
}

   
    

      
    