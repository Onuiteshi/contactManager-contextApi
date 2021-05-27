import React, { Component } from 'react'
import { Consumer } from '../Context'
import {v1 as uuid} from "uuid";
import classnames from 'classnames'


class AddContact extends Component {
    state = {
        name : '',
        email: '',
        phone: '',
        error:{}
    }

    // Handle field change
    handleChange = input => e =>{
        this.setState({
            [input] : e.target.value,
        })
    }

    handleSubmit = (dispatch,e)=> {
        e.preventDefault()

        const {name,email,phone} = this.state
        const newContact ={
            id: uuid(),
            name,
            email,
            phone,
        }

        if(name === ''){
            this.setState({error:{name:'Name is required'} })
            return 
        }

        if(email === ''){
            this.setState({error:{email:'Email is required'}})
            return 
        }

        if(phone === ''){
            this.setState({error:{phone:'Phone is required'}})
            return 
        }

        dispatch({
            type:"ADD_CONTACT",
            payload: newContact
        })

        // CLEAR STATE
        this.setState({
            name:'',
            email:'',
            phone:'',
            error:{}
        })

        this.props.history.push('/')
    }

    render() {
        const {name,email,phone,error} = this.state
        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h4>Add Contact</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name..."
                                            className={classnames("form-control form-control-lg",{
                                                'is-invalid':error.name
                                            })}
                                            // className="form-control form-control-lg is-invalid"
                                            value={name}
                                            onChange = {this.handleChange('name')}
                                        />
                                        {error.name && <div className='invalid-feedback'>{error.name}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email..."
                                            className={classnames("form-control form-control-lg",{
                                                'is-invalid':error.email
                                            })}
                                            value={email}
                                            onChange = {this.handleChange('email')}
                                        />
                                        {error.email && <div className='invalid-feedback'>{error.email}</div>}
                                        
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input 
                                            type="text"
                                            name="phone"
                                            placeholder="Enter Phone..."
                                            className={classnames("form-control form-control-lg",{
                                                'is-invalid':error.phone
                                            })}
                                            // className="form-control form-control-lg is-invalid"
                                            value={phone}
                                            onChange = {this.handleChange('phone')}
                                        />
                                        {error.phone && <div className='invalid-feedback'>{error.phone}</div>}
                                    </div>

                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact
