import { Link } from "react-router-dom"
const UserHome = () => {
    return (
        <div className="container mt-5 py-5 px-auto">
            <div className="container text-center">
                <h2 className="mb-5"> Select User. </h2>
                <div className="row">
                    <div className="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img style={{
                                height: "40vh"
                            }} src="https://www.nicepng.com/png/full/260-2608480_doctor-symbol-clipart-greek-mythology-doctor-symbol.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Doctor</h5>
                                <Link to="/loginform" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img style={{
                                height: "40vh"
                            }} src="https://virac-catanduanes.gov.ph/wp-content/uploads/2021/06/pho.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PHO-Admin</h5>
                                <a href="#" class="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img style={{
                                height: "40vh"
                            }} src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/patient.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Patient</h5>
                                <a href="#" class="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;