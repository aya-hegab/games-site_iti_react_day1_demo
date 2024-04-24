function Hero () {
    const username = 'Omnia';
    const image = "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";
    const alertUser = (name) => {
        alert(name)
    }

    const alertDepartment = (e) => {
        alert('Frontend')
    }
    return(
        <>
         <h2>Hero Section</h2>
         <h4>User Details</h4>
         <p>{username}</p>
         <button onClick={(e) => alertUser(e , 'Marina')}>Alert username 1</button>
         <button onClick={() => alertUser('Ahmed')}>Alert username 2</button>
         <button onClick={() => alertUser('Omar')}>Alert username 3</button>

         <br/>

         <button onClick={alertDepartment}>alert department</button>
         <br />
         <img src={image} alt="landscape"/>
        </>
    )
}

export default Hero;