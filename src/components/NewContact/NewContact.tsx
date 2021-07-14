import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../../store/actionCreators/contacts";

import { Button, Grid, TextField } from "@material-ui/core";

import styles from './styles.module.css';


export const NewContact: FC = () => {

  const [inputsState, setInputsState] = useState({
    name: '',
    lastname: '',
    age: '',
    pager: ''
  });

  const dispatch = useDispatch();

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(addContact({
      name: inputsState.name,
      lastname: inputsState.lastname,
      age: +inputsState.age,
      pager: +inputsState.pager
    }));

    setInputsState({
      name: '',
      lastname: '',
      age: '',
      pager: ''
    });

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputsState((prevState) => ({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Grid container spacing={2}>

        <Grid item container direction="column">
          <TextField
            required
            label="First Name"
            placeholder="First Name"
            name="name"
            value={inputsState.name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Last Name"
            placeholder="Last Name"
            name="lastname"
            value={inputsState.lastname}
            onChange={handleChange}
          />
          <TextField
            required
            label="Age"
            placeholder="Age"
            type="number"
            name="age"
            value={inputsState.age}
            onChange={handleChange}
          />
          <TextField
            required
            label="Pager"
            placeholder="Pager"
            type="number"
            name="pager"
            value={inputsState.pager}
            onChange={handleChange}
          />
        </Grid>

        <Grid item container justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
        
      </Grid>
    </form>
  )
}
