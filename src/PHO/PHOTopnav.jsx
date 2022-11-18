import { Link } from "react-router-dom"

const PHOTopnav = () => {
    return (
        <div>
            <ul class="nav justify-content-end bg-warning py-3 text-danger">
                <li class="nav-item ">
                    <a class="btn btn-primary" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Account</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link to="/" class="dropdown-item" href="#">Sign out</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default PHOTopnav;