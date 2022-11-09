const Users = () => {
    return (
        <div className="mt-5 py-5 users">
            <div class="container text-center">
                <div class="row row-cols-4 ">
                    <div class="col mx-4">
                        <div class="card " style={{
                            width: "18rem"
                        }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">RHU</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-auto">
                        <div class="card" style={{
                            width: "18rem"
                        }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">PHO</p>
                            </div>
                        </div></div>
                    <div class="col mx-auto">
                        <div class="card" style={{
                            width: "18rem"
                        }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Doctor</p>
                            </div>
                        </div></div>
                    <div class="col mx-auto mt-5">
                        <div class="card" style={{
                            width: "18rem"
                        }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Patient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;