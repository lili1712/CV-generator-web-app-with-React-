import React from 'react' ;
export default function CompetencesLinguistiques ({langue1,langue2,langue3,handleChange}){
    return(
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Competences Linguistiques</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Langue 1</label>
                            <input type="text" name="langue1" className="form-control" value={langue1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Langue 2</label>
                            <input type="text" name="langue2" className="form-control" value={langue2} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Langue 3</label>
                            <input type="text" name="langue3" className="form-control" value={langue3} onChange={handleChange} required/>
                        </div>

                    </div>
                    <br />       

                </form>
    );
}

