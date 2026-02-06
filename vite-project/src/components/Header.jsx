import './Header.css'

export default function Header({title}){
    return (
        <>
            <h1>{title}</h1>

            <nav>
                <a href="#">HOME </a>
                <a href="#">ContactUs </a>
                <a href="#">NextWebpage </a>

            </nav>
        </>

        
    )
}