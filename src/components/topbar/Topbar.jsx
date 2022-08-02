import './topbar.scss';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';



export default function Topbar({ open, setMenuOpen}) {
  return (
    <div className={"topbar "+(open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Vivek_Raj.</a>
                   
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!open)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
