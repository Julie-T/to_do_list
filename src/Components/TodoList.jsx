import React, {useState} from 'react'
import TodoListElement from "./TodoListElement";
import {nanoid} from 'nanoid';

const TodoList = (props) => {

    let elements = [
        {text: 'housework', done: false, id: nanoid(),},
        {text: 'walk the dog', done: true, id: nanoid(),},
        {text: 'car wash', done: false, id: nanoid(),},
        {text: 'new curtains', done: false, id: nanoid(),},
        {text: 'pink shorts', done: true, id: nanoid(),},
    ]

    const [notes, setNote] = useState(elements);
    const [newElement, setNewElement] = useState('');
    const [checked, setChecked] = useState(false);

    console.log(notes)

    const onNewNoteChange = (e) => {
        setNewElement(e.target.value);

    }
    const onAddNewNoteClick = (e) => {
        e.preventDefault();
        const newNote = {text: newElement, done: false, id: nanoid()}
        setNote([...notes, newNote]);
    }
    const onChangeCheckbox = (e, id) => {
        const tmpElements = notes.map(note => {
            if (note.id === id) {
                note.done = !note.done
            }
            return note
        })
        setNote(tmpElements)
        console.log(tmpElements)

    }

    return (
        <div>
            <textarea
                placeholder={'New text note'}
                onChange={(e) => onNewNoteChange(e)}/>
            <div>
                <button onClick={(e) => onAddNewNoteClick(e)}>Add Note</button>
            </div>
            <div>{notes.map(i =>
                <div key={i.id}>
                    <TodoListElement text={i.text} done={i.done}/>
                    <input type='checkbox'
                           defaultChecked={i.done}
                           onChange={(e) => onChangeCheckbox(e, i.id)}/>
                </div>)}
            </div>
        </div>
    )
}

export default TodoList