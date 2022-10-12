const Loginform = () => {
    return (
        <div className="container col-md-4 mt-5 py-5">
            <form>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3  mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary mx-auto">Submit</button>
            </form>
        </div>
    );
}

export default Loginform;