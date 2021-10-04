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
                      <label for="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                      />
                    </div>
                    <div className="form-field">
                      <label for="username">User Name</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your user name.."
                      />
                    </div>
                  </div>
                  <div className="formm">
                    <div className="form-field">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                      />
                    </div>
                    <div className="form-field">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Your phone.."
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
