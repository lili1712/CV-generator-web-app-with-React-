import React from 'react';

export default function CompetencesTechniques({comp1, comp2, comp3, handleChange}){
    
        return (
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Competences Techniques</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 md-form">
                            <label htmlFor="extra_1">Competance 1</label>
                            <input type="text" name="comp1" className="form-control" value={comp1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label htmlFor="extra_2">Competance 2</label>
                            <input type="text" name="comp2" className="form-control" value={comp2} onChange={handleChange} required />
                            
                        </div>
                        <div className="col-lg-6 md-form">
                            <label htmlFor="extra_2">Competance 3</label>
                            <input type="text" name="comp3" className="form-control" value={comp3} onChange={handleChange} required />
                            
                        </div>
                        
                    </div>
                    <br />
                </form>


        )
}

