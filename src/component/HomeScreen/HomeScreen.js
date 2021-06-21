import React, { useState } from 'react'
import Form from '../Form/Form'
import Output from '../Output/Output';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function HomeScreen() {

    const [todos, setTodos] = useState([])
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [mess, setMess] = React.useState()

    // const handleClick = () => {
    //   setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const addTodo = (e) => {
        e.preventDefault()
        if (name == '') {
            setMess('Заполните свое имя')
            setOpen(true)
        } else if (about == '') {
            setMess('Заполните About')
            setOpen(true)
        } else {
            const todo = {
                id: todos.length == 0 ? 1 : todos[todos.length - 1].id + 1,
                name,
                about,
                status: 'new',
                createData: new Date()
            }
            setTodos([...todos, todo])
            setName('')
            setAbout('')
            setMess('')
        }



        console.log(todos);


    }

    const delTask = (id) => {
        setTodos(todos.filter(el => el.id != id))
    }
    const doneTask = (id) => {
        todos.map(el => {
            if (id == el.id) {
                if (el.status == 'new') {
                    el.status = 'process'
                } else {
                    el.status = 'finish'
                }
            }
        })
        setTodos([...todos])
    }

    return (
        <div>
            <Form
                addTodo={addTodo}
                setName={setName}
                setAbout={setAbout}
                name={name}
                about={about}
            />
            <Output
                data={todos}
                del={delTask}
                status={doneTask}
                mess={setMess}
            />
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {mess}
                </Alert>
            </Snackbar>

        </div>
    )
}
