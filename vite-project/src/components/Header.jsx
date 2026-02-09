import './Header.css'

export default function Header({card}){
    return (
        <>
            {/* <h1>{title}</h1> */}
            {card}

            <nav>
                <a href="#">HOME </a>
                <a href="#">ContactUs </a>
                <a href="#">NextWebpage </a>

            </nav>
        </>

        
    )
}