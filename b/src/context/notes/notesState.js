import React, { Component } from 'react';
import { NotesContext } from './notesContext';


// export const NotesState = ({children}) => {
    
    
    
// }

export class NotesState extends Component {
    state = {
        notes: []
      };
    

    getNoteInfo = e => {
        e.preventDefault();
        const note = e.target.elements[0].value
        this.setState(prevState => ({
          notes: [...prevState.notes, note]
        }));
      };
    
    render() {

        const { children } = this.props;
        const { notes } = this.state;
        return <NotesContext.Provider 
            value={{
                handleSubmit: this.getNoteInfo,
                notes,
        }}>
        {children}
        </NotesContext.Provider>
    }
}
