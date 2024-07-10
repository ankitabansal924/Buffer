import React ,{useState} from "react";

const Login = () =>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("Login email : ",email , " Password");
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type = "email" placeholder="Enter Email" value = {email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type = "password" placeholder="Enter Password" value = {password} onChange={(e) => setPassword(e.target.value)} required/>

                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;