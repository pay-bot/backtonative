import React, { useState, useEffect } from "react";

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
        
          <div className="md:w-9/12  mx-auto justify-center flex bg-gray-100 rounded">
            <div className="my-10">
            <div className="users-form">
              <form action="/action_page.php">
                <div className="my-4">
                  <div className="flex my-8 ">
                    <div className="block mx-2 w-full">
                      <label for="name" className="block text-lg font-semibold">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="border py-2 px-5 w-full"
                        placeholder="Your name.."
                        size="35"
                      />
                    </div>
                    <div className="block mx-2 w-full">
                      <label for="username" className="block text-lg font-semibold">User Name</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="border py-2 px-5 w-full"
                        size="35"
                        placeholder="Your user name.."
                      />
                    </div>
                  </div>
                  <div className="flex my-8 ">
                    <div className="block mx-2 w-full">
                      <label for="email" className="block text-lg font-semibold">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="border py-2 px-5 w-full"
                        size="35"
                        placeholder="Your email.."
                      />
                    </div>
                    <div className="block mx-2 w-full">
                      
                      <label for="phone" className="block text-lg font-semibold">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border py-2 px-5 w-full"
                        size="35"
                        placeholder="Your phone.."
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                <button className="bg-blue-500 py-2 px-3 rounded text-white">SUBMIT</button>
                </div>
                
              </form>
            </div>
            <div className="my-8">
              <table className="table-auto ">
                <tr className="">
                  <th className="bg-blue-400 py-2 px-3 border text-gray-800 ">Id</th>
                  <th className="bg-blue-400 py-2 px-3 border text-gray-800 ">Name</th>
                  <th className="bg-blue-400 py-2 px-3 border text-gray-800 ">User Name</th>
                  <th className="bg-blue-400 py-2 px-3 border text-gray-800 ">Email</th>
                  <th className="bg-blue-400 py-2 px-3 border text-gray-800 ">Phone</th>
                </tr>
                {users.map((user) => (
                  <tr>
                    <td className="py-2 px-3 border bg-white">{user.id}</td>
                    <td className="py-2 px-3 border bg-white">{user.name}</td>
                    <td className="py-2 px-3 border bg-white">{user.username}</td>
                    <td className="py-2 px-3 border bg-white">{user.email}</td>
                    <td className="py-2 px-3 border bg-white">{user.phone}</td>
                  </tr>
                ))}
              </table>
              </div>
            </div>
          </div>
    </>
  );
}
