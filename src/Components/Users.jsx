import { Link } from "react-router-dom"

const Users = () => {
    return (
        <div className="mt-5 py-5 users">
            <div class="container overflow-hidden text-center">
                <div class="row gy-5">
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="card" >
                                <img src="https://virac-catanduanes.gov.ph/wp-content/uploads/2021/06/pho.png" class="card-img-top" alt="..." style={
                                    { height: "40vh", width: "50%" }
                                } />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="card" >
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="card" >
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="card" >
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;