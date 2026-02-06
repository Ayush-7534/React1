export default function Registration(){
    return(
        <>
        <form action="onSubmit">
            <label for="username"> Username </label>
            <input type="text" id="username" placeholder="Provide our name"></input>
            <br></br>
            <label for="age">Age </label>
            <input type="number" id="age" placeholder="Provide your age"></input>
            <br></br>
            <input type="text" placeholder="Provide your address"></input>

        </form>
        </>
    )
}