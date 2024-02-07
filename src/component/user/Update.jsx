import React, { useCallback, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateUser } from '../../Action/UserAction'
import { useDispatch } from 'react-redux'
import { readSingleUser } from '../../API/UserApi'
import { toast } from 'react-toastify'

function Update() {
  const [user,setUser] = useState({
    name: '',
    email: '',
    mobile: ''
  })
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const readInput = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value})
  }

  const initData = useCallback(() => {
    const read = async () => {
      await readSingleUser(params.id)
        .then(res => {
          setUser(res.data)
        }).catch(err => toast.error(err.response.data.message))
    }
    read()
  },[])

  useEffect(() => {
    initData()
  },[])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUser({user, id: params.id}))
        .unwrap()
        .then(res => {
          toast.success("User data updated successfully")
          navigate(`/users`)
        }).catch(err => toast.error(err.message))
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Update User</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" method='post' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" value={user.name} onChange={readInput} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={user.email} onChange={readInput} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={readInput} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Update User" className='btn btn-success' required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update