import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="page-container">
          <SideBar />
          <div className="user-contain">
            <div className="users-form">
              <form action="/action_page.php">
                <div className="form1">
                  <div className="formm">
                    <div className="form-field">
                      <label for="fname">Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                      />
                    </div>
                    <div className="form-field">
                      <label for="lname">User Name</label>
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                      />
                    </div>
                  </div>
                  <div className="formm">
                    <div className="form-field">
                      <label for="fname">Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                      />
                    </div>
                    <div className="form-field">
                      <label for="lname">User Name</label>
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                <button className="btn-form">SUBMIT</button>
                </div>
                
              </form>
            </div>
            <div className="user-table">
              <table className="users">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                {users.map((user) => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
