import './NavigationBar.css'
function NavigationBar(){
    return(
        <>
        <nav>
            <h1 id= "name">
                <a href="#/Home">SAVANNAH LYLES</a>
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="#/Home">home</a></li>
                    <li><a href="#/About">about</a></li>
                    <li><a href="#/Portfolio">portfolio</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar