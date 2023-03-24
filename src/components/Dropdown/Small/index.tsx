export default ({ NavLinks }: { NavLinks: React.ReactNode[] }): JSX.Element => {
    return (
        <ul className="dropdown__menu dropdown__menu__small">
            {NavLinks.map((NavLink) => NavLink)}
        </ul>
    )
}