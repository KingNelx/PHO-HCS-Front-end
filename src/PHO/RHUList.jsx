import { Link } from "react-router-dom"
import Buttons from "../Components/Buttons";

const RHUList = () => {
    return (
        <div className="container mt-5">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>RHUBato</td>
                        <td>09071205892</td>
                        <td>RHUBato@gmail.com</td>
                        <td>
                            <Buttons />
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>RHUBaras</td>
                        <td>09456222029</td>
                        <td>RHUBaras@gmail.com</td>
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

export default RHUList;