import Link from "next/link"

export default ({ name, url }: { name: string, url: string }) => {
    return (
        <li>
            <Link href={url}>{name}</Link>
        </li>
    )
}