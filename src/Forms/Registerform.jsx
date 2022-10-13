import { Link } from "react-router-dom"

const Registerform = () => {
    return (
        <div className="container mt-2 py-2 ">
            <h2 className="text-center"> Sign up</h2>
            <p className="fw-bold"> Doctor's Information</p>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label fw-bold">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Jonel" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label fw-bold">Last name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Tapia" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label fw-bold">Email</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required placeholder="Email" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label fw-bold">Permanent Address</label>
                    <input type="text" class="form-control" id="validationCustom03" required placeholder="Permanent Address" />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label fw-bold">Gender</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label fw-bold">Contact Number</label>
                    <input type="text" class="form-control" id="validationCustom05" required />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label fw-bold">Civil Status</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Widowed</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label ">PRC Number</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="PRC" required />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label fw-bold">PTR Number</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="PTR" required />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label fw-bold">S2 License Number</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="S2 License Number" required />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
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