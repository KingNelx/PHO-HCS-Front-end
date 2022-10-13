import { Link } from "react-router-dom"
const DoctorSidebar = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </nav>
        </div>
    );
}

export default DoctorSidebar;