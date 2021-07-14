import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { ContactsTable } from './components/ContactsTable/ContactsTable';
import { NewContact } from './components/NewContact/NewContact';

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4} container justifyContent="center">
          <NewContact />
        </Grid>
        <Grid item xs={12} md={8}>
          <ContactsTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
