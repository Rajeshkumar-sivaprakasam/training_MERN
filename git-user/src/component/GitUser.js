import "../App.css";
import React, { useEffect, useState } from "react";
import { Table, FormGroup, Form } from "reactstrap";
import axios from "axios";
import { Link, Button, IconButton, Input, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";

const TableStyle = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "auto",
  paddingRight: "auto",
  marginTop: 16,
};

// const SearchBar = () => (
//   const [user, setUser] = useState();
//   <>
//     <Form>
//       <FormGroup>

//       </FormGroup>
//     </Form>
//   </>
// );
export const GitUserList = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState([]);
  const history = useHistory();
  const fetchData = async () => {
    const res = await axios.get(" https://api.github.com/users");
    setUserList(res.data);
  };

  const onView = async (user) => {
    // e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${user}`);
    console.log(res);
    console.log(res.data);

    localStorage.setItem("avatar_url", res.data.avatar_url);
    localStorage.setItem("login", res.data.login);
    history.push("/view");
  };
  const onSearch = async (e) => {
    e.preventDefault();
    console.log(user.trim());
    // setUser("mojombo");
    const res = await axios.get(`https://api.github.com/users/${user}`);
    setUserList(res.data);
    // console.log(res.data);
  };
  useEffect(() => {
    localStorage.clear();
    fetchData();
  }, []);
  return (
    <>
      <Typography variant="h3" style={{ marginBottom: 16 }}>
        Git User List
      </Typography>
      {/* <SearchBar /> */}
      <label htmlFor="user-search">
        <span>Search User</span> &emsp;
      </label>
      <Input
        type="text"
        id="user-search"
        placeholder="Search User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        name="s"
      />
      &emsp;
      <Button
        color="primary"
        size="small"
        variant="contained"
        onClick={onSearch}
      >
        Search
      </Button>
      <Table hover responsive style={TableStyle}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Repo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((row, index) => {
            return (
              <tr key={index}>
                <td>
                  <Button color="danger">{row.login}</Button>
                </td>
                <td>
                  <Link href={row.repos_url}>{row.repos_url}</Link>
                </td>
                <IconButton
                  color="secondary"
                  size="small"
                  variant="contained"
                  onClick={(e) => {
                    onView(row.login);
                  }}
                >
                  <VisibilityIcon />
                  View{" "}
                </IconButton>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
