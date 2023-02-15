import React from 'react' ;
export default function Education({school1, school2, school3, yeard1, yearf1, yeard2, yearf2, yeard3, yearf3, localisation1, localisation2, localisation3, handleChange}){

    return(
                
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Formation et diplômes</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1" style={{color: '#000000'}} ></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Formation 1</label>
                            <input type="text" name="school1" className="form-control" value={school1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de début jj/mm/aaaa</label>
                            <input type="text" name="yeard1" className="form-control" value={yeard1} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="text" name="yearf1" className="form-control" value={yearf1} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Localisation</label>
                            <input type="text" name="localisation1" className="form-control" value={localisation1} onChange={handleChange} required/>
                        </div>

                    </div>

                    <br />    

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Formation 2</label>
                            <input type="text" name="school2" className="form-control" value={school2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de début jj/mm/aaaa</label>
                            <input type="text" name="yeard2" className="form-control" value={yeard2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="text" name="yearf2" className="form-control" value={yearf2} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Localisation</label>
                            <input type="text" name="localisation2" className="form-control" value={localisation2} onChange={handleChange} required/>
                        </div>

                    </div>
                    <br />

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>3</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Formation 3</label>
                            <input type="text" name="school3" className="form-control" value={school3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de début jj/mm/aaaa</label>
                            <input type="text" name="yeard3" className="form-control" value={yeard3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="text" name="yearf3" className="form-control" value={yearf3} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Localisation</label>
                            <input type="text" name="localisation3" className="form-control" value={localisation3} onChange={handleChange} required/>
                        </div>

                    </div>
                    <br />

                </form>
    );
}
