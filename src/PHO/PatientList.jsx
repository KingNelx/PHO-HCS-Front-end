import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom"

const PatientList = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Patients</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">RHU</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jonel</td>
                        <td>Tapia</td>
                        <td>Bato</td>
                        <td>09071205892</td>
                        <td>RHU Bato</td>
                        <td>
                            <Link to="/qrCode" type="button" class="btn btn-outline-primary ">View</Link>
                            <button type="button" class="btn btn-outline-success mx-1">Update</button>
                            <button type="button" class="btn btn-outline-danger ">Disable</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Lebron</td>
                        <td>James</td>
                        <td>Baras</td>
                        <td>09456222029</td>
                        <td>RHU Baras</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary ">View</button>
                            <button type="button" class="btn btn-outline-success mx-1">Update</button>
                            <button type="button" class="btn btn-outline-danger ">Disable</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/phoHome" >Go Back</Link>
        </div >
    );
}

export default PatientList;