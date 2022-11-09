import { NavLink } from "react-router-dom";

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

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;