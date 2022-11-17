const Home = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;