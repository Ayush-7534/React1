import './Header.css'

export default function Header(x){
    return (
        <>
            <h1>{x.title}</h1>

            <nav>
                <a href="#">HOME </a>
                <a href="#">ContactUs </a>
                <a href="#">NextWebpage </a>

            </nav>
        </>

        
    )
}