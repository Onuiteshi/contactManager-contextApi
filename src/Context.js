import React , {Component} from 'react'

const Context = React.createContext()

const reducer = (state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        default: 
            return state
    }
}


export class Provider extends Component {
    state = {
        contacts :[
            {
                id: 1,
                name: 'John Doe',
                phone: '08180303700',
                email: 'jdoe@gmail.com'
            },
            {
                id: 2,
                name: 'Karen Doe',
                phone: '09080453700',
                email: 'kdoe@gmail.com'
            },
            {
                id: 3,
                name: 'Iteshi Doe',
                phone: '08080303755',
                email: 'iteshidoe@gmail.com'
            }
        ],
        dispatch : action => this.setState(
            state =>
                reducer(state,action)
            
        )

    }

    render() {
        return (
            <div>
                <Context.Provider value={this.state} >
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer


