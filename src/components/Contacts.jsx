import React from 'react'

 function Contacts(props) {
    console.log(props)

    return (
        <div >
        <h2>Name: {props.name}</h2>
        <p>email'as yra {props.email}</p>
        </div>
    );
}
export default Contacts;





