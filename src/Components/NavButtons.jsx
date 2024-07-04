
export default function NavButtons({onClickContent,name, onClick, isActive, ...props}){
    return(
<li><button className={isActive ? "nav-button-active" : "nav-button"} onClick={onClick} {...props}>{name}</button></li>
    );
}