import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

import Large from "@/components/Dropdown/Large"
import Small from "@/components/Dropdown/Small"

const Dropdown = ({ Type, title }: { Type: React.ReactNode, title: string }): JSX.Element => {
    return (
        <li className="dropdown">
            <Link href="/">
                <span>{title}</span>
                <BiChevronDown />
            </Link>
            {Type}
        </li>
    )
}

export default {
    "Large": ({ title }: { title: string }) => <Dropdown Type={<Large />} title={title} />,
    "Small": ({ title }: { title: string }) => <Dropdown Type={<Small />} title={title} />
}