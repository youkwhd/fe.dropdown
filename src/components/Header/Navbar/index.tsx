import Dropdown from "@/components/Dropdown"
import Link from "next/link"

export default () => {
    return (
        <nav>
            <ul>
                <Dropdown.Small title="Products" />
                <Dropdown.Small title="Developer" />
                <li>
                    <Link href="/login">Log in</Link>
                </li>
            </ul>
        </nav>
    )
}
