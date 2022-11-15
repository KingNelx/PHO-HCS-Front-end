import { Link } from "react-router-dom"

const RHURegform = () => {
    return (
        <div>
            <div>
                <div className="container mt-5 py-5">
                    <h2>Sign up</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Firstname</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Lastname</label>
                            <input type="text" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Permanent Address</label>
                            <input type="text" class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Contact Number</label>
                            <input type="text" class="form-control" id="inputAddress2" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">RHU</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>Baras</option>
                                <option>Gigmoto</option>
                                <option>Caramoran</option>
                                <option>Bato</option>
                                <option>San Andres</option>
                                <option>San Miguel</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <Link to="/phoLogform" type="submit" class="btn btn-primary">Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RHURegform;