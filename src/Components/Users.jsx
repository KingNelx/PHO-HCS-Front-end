import { Link } from "react-router-dom"

const Users = () => {
    const pho = "https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/291014256_615903669968840_6190598407861528504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCix8EvGHScz336HNfp5H_35VMbdJlczbflUxt0mVzNpRa3oMy5c96zv5YwfdBYXPktVHWcJspunZQPOnLuKAT&_nc_ohc=Dex9nJVKVsUAX9ypftw&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfB2dlJWd1CR4rW8JF_iYYf8O577LIC3OXlVK_mIgRWjjw&oe=6377A17D"
    const patient = "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/patient.png"
    const rhu = "https://cdn-icons-png.flaticon.com/512/504/504203.png"
    
    return (
        <div className="user-bg">
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col mx-3 mt-5">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src={pho} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PHO</h5>
                                <Link to="/phoLogform" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col  mx-2 mt-5">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src={rhu} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">RHU</h5>
                                <Link to="/rhuLogform" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col  mx-2 mt-5">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src={patient} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Patient</h5>
                                <Link to="/patientLogform" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;