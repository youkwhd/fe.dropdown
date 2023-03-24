import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

import Large from "@/components/Dropdown/Large"
import Small from "@/components/Dropdown/Small"

const Dropdown = ({ Type, title }: { Type: React.ReactNode, title: string }): JSX.Element => {
    return (
        <li className="dropdown">
            <div className="dropdown__title">
                <span>{title}</span>
                <BiChevronDown />
            </div>
            {Type}
        </li>
    )
}

export default {
    "Large": ({ title, NavLinks }: { title: string, NavLinks: React.ReactNode[] }) => 
        <Dropdown Type={<Large NavLinks={NavLinks} />} title={title} />,
    "Small": ({ title, NavLinks }: { title: string, NavLinks: React.ReactNode[] }) => 
        <Dropdown Type={<Small NavLinks={NavLinks} />} title={title} />
}