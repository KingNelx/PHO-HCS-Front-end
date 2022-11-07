import { Link } from "react-router-dom"

const DoctorDashB = () => {
    return (
        <div>
            <div class="container text-center ">
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/patient.png" class="card-img-top" alt="..." style={
                                { height: "35vh" }
                            } />
                            <div class="card-body ">
                                <h5 class="card-title">Patients</h5>
                                <Link to="/patientlist" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://img.freepik.com/premium-vector/calendar-icon-hand-circles-date-calendar-logo-template-deadline-concept-illustration_168129-210.jpg?w=2000" class="card-img-top" alt="..." style={
                                { height: "35vh" }
                            } />
                            <div class="card-body">
                                <h5 class="card-title">Schedule</h5>
                                <a href="#" class="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.creativefabrica.com/wp-content/uploads/2020/07/17/Medicine-Logo-Graphics-4647232-1-580x386.jpg" class="card-img-top" alt="..." style={
                                { height: "35vh" }
                            } />
                            <div class="card-body">
                                <h5 class="card-title ">Medicines</h5>
                                <a href="#" class="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorDashB;