import React from 'react' ;
export default function Autres({autre1,autre2,autre3,handleChange}){
    return(
                <form >
                    <div className="card-body">
                        <h3 className="card-title">Autres</h3>
                        <hr />
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Autre 1</label>
                            <input type="text" name="autre1" className="form-control" value={autre1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Autre 2</label>
                            <input type="text" name="autre2" className="form-control" value={autre2} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Autre 3</label>
                            <input type="text" name="autre3" className="form-control" value={autre3} onChange={handleChange} required/>
                        </div>

                    </div>
                    <br />       

                </form>
    );
}

