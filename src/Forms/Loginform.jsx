import {Link} from "react-router-dom"

const Loginform = () => {
    return (
        <div className="container col-md-4 mt-5 py-5">
            <h2 className="text-center"> Sign in</h2>
            <form>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Email@" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required placeholder="Password"/>
                </div>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required placeholder="Confirm Password"/>
                </div>
                <Link to="/docsidebar" type="submit" class="btn btn-outline-primary mx-2">Submit</Link>
                <Link to="/" type="submit" class="btn btn-outline-success ">Go Back</Link>
                <Link to="/registerform" className="px-3">No Account? Go Sign up</Link>
            </form>
        </div>
    );
}

export default Loginform;