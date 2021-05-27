import React, { Component } from 'react'
import { Consumer } from '../Context'


class Contact extends Component {
    state = {
        showContactInfo : false
    }

    onShowClick = ()=>{
        this.setState({ showContactInfo : !this.state.showContactInfo})
    }

    onDeleteContact=(id,dispatch)=>{
        dispatch({type: 'DELETE_CONTACT',payload:id})
    }

    render() {
        const {id,name,email,phone} = this.props.contact
        const {showContactInfo} = this.state
        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value
                    return(
                        <div className='card card-body mb-3'>
                            <h4>
                                {name} 
                                <i onClick={this.onShowClick} className="fas fa-sort-down"
                                style={{cursor:'pointer'}}></i>
                                <i onClick={this.onDeleteContact.bind(this,id,dispatch)} className="fas fa-times"
                                style={{cursor:'pointer',color:'red',float:'right'}}></i>
                            </h4>
                            {showContactInfo ? (
                                <ul className='list-group'>
                                <li className='list-group-item'>Phone : {phone}</li>
                                <li className='list-group-item'>Email : {email}</li>
                            </ul>
                            ):null}
                            
                        </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

export default Contact
