import PatientDashB from "./PatientDashB";
import PatientTopnav from "./PatientTopnav";

const PatientHOME = () => {
    return (
        <div>
            <nav>
                <PatientTopnav />
            </nav>

            <section>
                <PatientDashB />
            </section>
        </div>
    );
}

export default PatientHOME;