import { Link } from "react-router-dom"

const Users = () => {
    const pho = "https://virac-catanduanes.gov.ph/wp-content/uploads/2021/06/pho.png"
    const patient = "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/patient.png"
    const rhu = "https://cdn-icons-png.flaticon.com/512/504/504203.png"

    return (
        <div>
            <nav className="bg-light py-3 shadow-lg user-img">
                <h1 class="modal-title  text-center" id="staticBackdropLabel">Catanduanes Provincial Health Office</h1>
            </nav>
            <div class="container text-center mt-3">
                <div class="row ">
                    <div class="col mx-3 mt-5">
                        <div class="card shadow-lg" >
                            <img src={pho} class="card-img-top user shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PHO</h5>
                                <Link to="/phoLogform" class="btn btn-outline-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col  mx-2 mt-5">
                        <div class="card shadow-lg" >
                            <img src={rhu} class="card-img-top user shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">RHU</h5>
                                <Link to="/rhuLogform" class="btn btn-outline-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col  mx-2 mt-5">
                        <div class="card shadow-lg" >
                            <img src={patient} class="card-img-top user shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Patient</h5>
                                <Link to="/patientLogform" class="btn btn-outline-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;