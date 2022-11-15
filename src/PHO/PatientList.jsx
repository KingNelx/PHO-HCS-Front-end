import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom"

const PatientList = () => {
    return (
        <div className="container mt-5">
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
                            <Buttons />
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
                            <Buttons />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/phoHome" >Go Back</Link>
        </div >
    );
}

export default PatientList;