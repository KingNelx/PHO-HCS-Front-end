import RHUDashB from "./RHUDashB";
import RHUTopnav from "./RHUTopnav";

const RHUHome = () => {
    return ( 
        <div>
            <nav>
                <RHUTopnav />
            </nav>

            <section>
                <RHUDashB />
            </section>
        </div>
     );
}
 
export default RHUHome;