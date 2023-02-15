import React from 'react';
export default function Experience ({position1, organisation1,debut1, fin1, desc1, position2, organisation2,debut2, fin2, desc2, organisation3, position3, debut3, fin3, desc3, handleChange}){
    return(
        
        
                
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Experience Professionel</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        
                        <div className="col-lg-4 text-left">
                            <label>Position</label>
                            <input type="text" name="position1" className="form-control" values={position1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Institution/Organisation</label>
                            <input type="text" name="organisation1" className="form-control" values={organisation1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de début jj/mm/aaaa</label>
                            <input type="number" name="debut1" className="form-control" values={debut1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="number" name="fin1" className="form-control" values={fin1} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="description1" className="form-control" values={desc1} onChange={handleChange} required />
                        </div>
                    </div>

                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Position</label>
                            <input type="text" name="position2" className="form-control" values={position2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Institution/Organisation</label>
                            <input type="text" name="organisation2" className="form-control" values={organisation2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Datz de début jj/mm/aaaa</label>
                            <input type="number" name="debut2" className="form-control" values={debut2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="number" name="fin2" className="form-control" values={fin2} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="description2" className="form-control" values={desc2} onChange={handleChange} required />
                        </div>
                    </div>
                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>3</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Position</label>
                            <input type="text" name="position3" className="form-control" values={position3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Institution/Organisation</label>
                            <input type="text" name="organisation3" className="form-control" values={organisation3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de début jj/mm/aaaa</label>
                            <input type="number" name="debut3" className="form-control" values={debut3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Date de fin jj/mm/aaaa</label>
                            <input type="number" name="fin3" className="form-control" values={fin3} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="description3" className="form-control" values={desc3} onChange={handleChange} required />
                        </div>
                    </div>
                </form>
        );
    
}





    
    
