import { Link } from "react-router-dom"

const PHODashB = () => {

    const title = "Catanduanes Provincial Health Office"
    const doctors = "https://post.healthline.com/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail-1-732x549.jpg"
    const rhu = "https://educaloi.qc.ca/wp-content/uploads/10069454_1200x563.jpg"
    const patients = "https://cdn2.hubspot.net/hubfs/4184981/images/blog/patient%20care%20in%20hospitals.jpg"
    return (
        <div>
            <h2 className=" text-center shadow p-3 bg-body rounded">{title}</h2>
            <div class="container text-center mt-5">
                <div class="row pho-img-dashb">
                    <div class="col">
                        <div class="card">
                            <img src={doctors} class="card-img-top shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">List of Doctors</h5>
                                <Link to="/phoDocList" class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={rhu} class="card-img-top shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">List of RHU</h5>
                                  <Link to="/phoRhuList" class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={patients} class="card-img-top shadow-lg" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">List of Patients</h5>
                                  <Link to="/phoPatientList" class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PHODashB;