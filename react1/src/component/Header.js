function Header(){
    const headingStyle={
        "color":"#edb652",
        "font-size":"56px",
        "font-family":"serif",
        "font-style":"italic"
    };
    const line=<hr></hr>;
    return(
        <>
            <h1 align="center" style={headingStyle}><u>Hello App.....</u></h1>
        </>
    )
}
export default Header;