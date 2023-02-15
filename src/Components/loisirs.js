
import React from 'react' ;
export default function Loisirs({loisir1,loisir2,loisir3,handleChange}){
    return(
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Loisirs</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Loisir 1</label>
                            <input type="text" name="loisir1" className="form-control" value={loisir1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Loisir 2</label>
                            <input type="text" name="loisir2" className="form-control" value={loisir2} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Loisir 3</label>
                            <input type="text" name="loisir3" className="form-control" value={loisir3} onChange={handleChange} required/>
                        </div>

                    </div>
                    <br />       

                </form>
    );
}

