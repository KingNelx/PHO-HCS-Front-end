import { Link } from "react-router-dom"

const PatientTopnav = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Patient Dashboard</a>
                    <Link to="/" className="btn btn-outline-primary ms-auto my-2 mx-2">HOME</Link>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        PROFILE
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Patient Profile</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/patient.png" alt=""
                                        style={{ height: "20vh" }} />
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">First name</th>
                                                <th scope="col">Last name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Sex</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jonel</td>
                                                <td>Tapia</td>
                                                <td>Bato</td>
                                                <td>22</td>
                                                <td>Male</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default PatientTopnav;