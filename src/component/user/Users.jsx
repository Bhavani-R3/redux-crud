import React, { useEffect, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, readUser } from '../../Action/UserAction';
import { toast } from 'react-toastify';

function Users() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initFetch = useCallback(() => {
    dispatch(readUser())
  },[])

  useEffect(() => {
    initFetch()
  },[])

  // read data from redux
  const users = useSelector((item) => item.users)

  const deleteHandler = async (id) => {
    if(window.confirm(`Are you sure to delete user id ${id}?`)) {
      dispatch(deleteUser({id}))
        .unwrap()
        .then(res => {
          toast.success('user data deleted successfully')
        }).catch(err => toast.error(err.message))
    }
  }

  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <NavLink to={`/user/create`} className="btn btn-dark float-end">Add User</NavLink>
          {
            !users ? <h3 className="display-3 text-secondary">No Users</h3> : <h3 className="display-3 text-success">Users</h3>
          }
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td> { item.id } </td>
                      <td> { item.name } </td>
                      <td> { item.email } </td>
                      <td> { item.mobile } </td>
                      <td>
                        <NavLink to={`/user/edit/${item.id}`} className="btn btn-info"><i className='bi bi-pencil'></i></NavLink>
                        <button onClick={() => deleteHandler(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users