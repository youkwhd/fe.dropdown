import Dropdown from "@/components/Dropdown"
import NavLink from "@/components/Header/Navbar/NavLink"

/* suggestion: create function 
 * to create unique key prop
 **/
export default () => {
    return (
        <nav>
            <ul>
                <Dropdown.Small title="Products" NavLinks={[
                    <NavLink name="Milo Nestle" url="/products/milo-nestle" key="1" />,
                    <NavLink name="Dendeng Lambok" url="/products/dendeng-lambok" key="2" />
                ]} />

                <Dropdown.Small title="Developer" NavLinks={[
                    <NavLink name="API Docs" url="/api/docs" key="1" />,
                ]} />

                <NavLink name="Log In" url="/login" />
            </ul>
        </nav>
    )
}
