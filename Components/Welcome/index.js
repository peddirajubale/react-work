const Welcome =props=>{
    const {greeting, name} = props
    return(
        <h1>{greeting} {name}</h1>
    )
}

export default Welcome