const PatientDashB = () => {

        const telemedicine = "https://www.virtru.com/hubfs/Imported_Blog_Media/telemedicine.jpg"

    return (
        <div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        <div class="card" >
                            <img src={telemedicine} class="card-img-top user" alt="..." 
                           />
                            <div class="card-body shadow-lg">
                                <h5 class="card-title">Telemedicine</h5>
                                <a href="#" class="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-outline-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-outline-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientDashB;