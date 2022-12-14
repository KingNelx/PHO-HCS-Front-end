import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom"

const DoctorsList = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-5">List of Doctors</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Specialties</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jonel</td>
                        <td>Tapia</td>
                        <td>Bato</td>
                        <td>Dermatology</td>
                        <td>
                            <Buttons />
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Virac</td>
                        <td>Medical genetics</td>
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

export default DoctorsList;