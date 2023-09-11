import Logo from "../image/logo.png"
import "./custom-css/Header.css"
function Header(props){
    return(
        <nav>
            <div>
                <img src={Logo} alt="logo"/>
                <h4>{props.title}</h4>
            </div>
            <a href="/">หน้าแรก</a>
        </nav>
    );
}
export default Header;
