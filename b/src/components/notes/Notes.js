import React, { Component } from "react";
import Form from "../form/Form"
import List from "../list/List"
import { DefaultContext } from "../../App";
import {NotesState} from '../../context/notes/notesState'
import {NotesContext} from '../../context/notes/notesContext'

class Notes extends Component {
  state = {
    notes: []
  };

  render() {
    console.log("re-re-nder");
    return (
      <DefaultContext.Consumer>
        {defContext => {
            console.log("defContext" ,defContext)
            return(
              <NotesState>
                <Form  />
                <List />
            </NotesState>
            )
          }
        }
      </DefaultContext.Consumer>
    );
  }
}

export default Notes;