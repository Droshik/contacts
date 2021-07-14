import { FC, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchContacts } from "../../store/actionCreators/contacts";

import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, LinearProgress } from "@material-ui/core";

export const ContactsTable: FC = () => {
  const contacts = useTypedSelector(state => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {(!!contacts.length
        ? <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Pager</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts?.map(contact => {
                return (
                  <TableRow key={contact.pager}>
                    <TableCell>
                      {contact.name}
                    </TableCell>
                    <TableCell>
                      {contact.lastname}
                    </TableCell>
                    <TableCell>
                      {contact.age}
                    </TableCell>
                    <TableCell>
                      {contact.pager}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        : <LinearProgress />
      )}
    </>



  )
}