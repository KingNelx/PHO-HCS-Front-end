import { Link } from "react-router-dom"

const Registerform = () => {
    return (
        <div className="container mt-5 py-5 ">
            <h2 className="text-center"> Sign up</h2>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Jonel" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Tapia" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Email</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required placeholder="Email" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Permanent Address</label>
                    <input type="text" class="form-control" id="validationCustom03" required placeholder="Permanent Address" />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Gender</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="validationCustom05" required />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <Link to="/loginform" class="btn btn-primary" type="submit">Create Account</Link>
                </div>
            </form>
        </div>
    );
} //  <div id="emailHelp" class="form-text">We'll never share your Info with anyone else.</div>

export default Registerform;