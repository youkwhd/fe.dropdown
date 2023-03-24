import Link from "next/link"

export default (): JSX.Element => {
    return (
        <ul className="dropdown__menu dropdown__menu__small">
            <li>
                <Link href="/">Skate</Link>
            </li>
            <li>
                <Link href="/">Basket</Link>
            </li>
        </ul>
    )
}