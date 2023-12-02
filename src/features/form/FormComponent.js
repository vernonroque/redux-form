import React, {useState} from 'react'
import styles from './form.module.css'
import {useSelector,useDispatch} from 'react-redux';

import {addCredentials,selectForm} from './formSlice';

export function Form(){
  const formState = useSelector(selectForm);
  //console.log("The form state is >>>", formState);
  const dispatch = useDispatch();
  const [formSubmitted,setFormSubmitted] = useState(false);
  const [currentButton, setCurrentButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

  }
  const handleInputChange = (e) => {
    const {name,value} = e.target
    dispatch(addCredentials({[name]:value}));
  }
  const handleClick = () => {
    setCurrentButton(true);

  }
  return (
    <>
      <form className = {styles.mainForm} onSubmit = {handleSubmit}>
        <label htmlFor="firstName"> Enter first name</label>
        <input type="text" name="firstName" value ={formState.firstName} 
              onChange={handleInputChange} 
              placeholder="First Name" />

        <label htmlFor="lastName"> Enter last name</label>
        <input type="text" name="lastName" value = {formState.lastName} 
               onChange={handleInputChange} 
               placeholder="Last Name" />

        <button type="submit">Submit</button>


      </form>

      <button onClick={handleClick}>Get the current state</button>

        {formSubmitted ? <h1>Current credentials are: {formState.firstName}</h1> :''
        
      }
      {currentButton ? <h1>The current state is: {formState.status}</h1>: ''

      }
    
    </>
  )
}
