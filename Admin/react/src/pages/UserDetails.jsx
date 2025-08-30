import React from 'react'
import { useContext } from 'react'
import Mycontext from '../context/Mycontext'

function UserDetails() {
    var{usergetData}=useContext(Mycontext)
  return (
    <>
    <div className="container mt-3">
                <h1>User Datails</h1>
              <table className="table border-primary table-bordered text-center p-5 mt-2">
                <thead>
                  <tr>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Password</td>
                  </tr>
                </thead>
                <tbody>
                  {usergetData.length !== 0 ? (
                    usergetData.map((value, index) => {
                      // console.log(value.image);
                      return (
                        <tr align="center" valign="middle" key={index}>
                          
                          <td>{value.username}</td>
                          <td>{value.email}</td>
                          <td>{value.password}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="3">No user found</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* table end */}
            </div>
    </>
  )
}

export default UserDetails