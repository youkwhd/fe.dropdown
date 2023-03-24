import Link from "next/link"

import Large from "@/components/Dropdown/Large"
import Small from "@/components/Dropdown/Small"

const Dropdown = ({ DropdownType }: { DropdownType: React.ReactNode }): JSX.Element => {
    return (
        <li className="dropdown">
            <Link href="/">Products</Link>
            {DropdownType}
        </li>
    )
}

export default {
    "Large": () => <Dropdown DropdownType={<Large />} />,
    "Small": () => <Dropdown DropdownType={<Small />} />
}