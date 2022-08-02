import './menu.scss';

export default function Menu({ open, setMenuOpen}) {
  return (
    <div className={'menu ' +( open && 'active')}>
        <ul>
            <li onClick={()=> setMenuOpen(!open)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=> setMenuOpen(!open)}>
                <a href="#education">Education</a>
            </li>
            <li onClick={()=> setMenuOpen(!open)}>
                <a href="#work">Projects</a>
            </li>
            <li onClick={()=> setMenuOpen(!open)}>
                <a href="#profile">Profiles</a>
            </li>
            <li onClick={()=> setMenuOpen(!open)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
