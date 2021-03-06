import React, { Component } from 'react'
import { Consumer } from '../Context'
import Contact from '../pages/Contact'

class Contacts extends Component {
   
    render() {
        return(
            <Consumer>
                {value => {
                    const {contacts} = value
                    return (
                        <div >
                            <h1 className='display-4 mb-2'>
                                <span className='text-danger'>Contact</span> List
                            </h1>
                            {contacts.map((contact)=>{
                            return  <Contact contact = {contact} key= {contact.id}  />
                            })}
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

export default Contacts
