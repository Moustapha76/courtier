import SearchBar from '../SearchBar';
export default function Header(props){
    return(
        <div className="header" id={props.page}>
            <div className="banner">
                <div className="slogan">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
                <SearchBar/>
            </div>
        </div>
    )
}