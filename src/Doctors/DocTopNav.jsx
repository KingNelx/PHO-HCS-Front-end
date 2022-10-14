import { Link } from "react-router-dom"
import DoctorDashB from "./DoctorDashB";
const DocTopNav = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand mx-2" href="#">
                        <img src="https://www.nicepng.com/png/full/260-2608480_doctor-symbol-clipart-greek-mythology-doctor-symbol.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
                        Dashboard
                    </a>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="/profile" class="dropdown-item" type="button">Profile</Link></li>
                            <li><Link to="/" class="dropdown-item" type="button">Signout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="mt-5 py-5">
                <DoctorDashB />
            </section>
        </div>
    );
}

export default DocTopNav;