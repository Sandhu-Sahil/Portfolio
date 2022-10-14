import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar(props) {
    return(
        <>
            <div>
                <div>
                    <NavLink to={"/"}>
                        Portfolio.here()
                    </NavLink>
                </div>
                <div>
                    <div>
                        <NavLink to={`/`}>
                            Name.here()
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/'}>
                            .contact()
                        </NavLink>
                    </div>
                    <div>
                        <SocialIcon/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;