type HeaderProps = {
    name: string,
}

function Header({name}: HeaderProps) {
    return <h2>{name}</h2>
}

export default Header;