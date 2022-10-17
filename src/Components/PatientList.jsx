import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react";
import Time from "./TIme";

const PatientList = () => {

    const [patients, setPatients] = useState([])
    useEffect(() => {
        loadPatient()
    }, [])

    const loadPatient = async() => {
        const loadPatients = await axios.get("http://localhost:8080/showPatients");
    }

    const addPatient = () => {
        const addPatients = axios.post("http://localhost:8080/addPatients");
    }

    return (
        <div>
            <p className="d-flex justify-content-center mt-5 py-5"> <b>Current Time: </b> <Time /></p>
            <div className="container text-center">
                <h2> List of Patients </h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date Admitted</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Jonel</td>
                            <td>Tapia</td>
                            <td>Bato</td>
                            <td>Monday @ October 5 2022</td>
                            <td>
                                <button className="mx-2 btn btn-outline-primary">View</button>
                                <button className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/DocTopNav"> Go Back </Link>
            </div>
        </div>
    );
}

export default PatientList;