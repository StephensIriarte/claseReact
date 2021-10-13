import React, {useEffect, useState} from 'react'

const Event = () => {

    const [state, setState] = useState({
        name:"" ,
        email:"",
        password: "",
    });

    const {name, email, password} = state;

    const handleChange = (e) => {
        setState({
               ...state,
               [e.target.name]: e.target.value, 

        });
    };

const handleClick = (e) => {
e.preventDefaut();
if(!name || !email || !password) {
   alert("hay campo vacios");
   return;
}
console.log(state);
};

    return (
        <div>
            <form onSubmit={handleClick}>
                <input name="name" value={name} onChange={(e)=> handleChange(e)} type="text"/>
                <input name="email" value={email} onChange={(e)=> handleChange(e)} type="text"/>
                <input name="password" value={password} onChange={(e)=> handleChange(e)} type="text"/>
                <button onClick={handleClick} type="submit"> Tira Alerta  </button>
            </form>
        </div>
    )
}

export default Event
