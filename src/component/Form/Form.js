import { Input } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import React from 'react'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Form({ addTodo, about, name, setName, setAbout }) {
    const classes = useStyles();

    return (
        <div>
            <form onSubmit={addTodo}>
                <Input
                    defaultValue="name"
                    error inputProps={{ 'aria-label': 'description' }}
                    setName={name}
                    placeholder='name'
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }
                />
                <Input
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="outlined"
                    label="Outlined"
                    setAbout={about}
                    placeholder='about'
                    value={about}
                    onChange={
                        (e) => setAbout(e.target.value)
                    }
                />
                
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}

                >ADD</Button>
                
                
            </form>
        </div>
    )
}
