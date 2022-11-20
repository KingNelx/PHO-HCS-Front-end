import { Link } from "react-router-dom"

const PHOTopnav = () => {

    const title = "Catanduanes Provincial Health Office"

    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">PHO Admin Dashboard</a>
                    <Link to="/" className="btn btn-outline-primary ms-auto my-2 mx-2">HOME</Link>

                    <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Profile
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">ADMIN PROFILE</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""
                                        style={{ width: "40vh", height: "200px" }} />
                                    <table class="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Admin</th>
                                                <th>Admin@gmail.com</th>
                                                <th>AdminPHO</th>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default PHOTopnav;