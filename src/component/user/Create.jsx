import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createUser } from '../../Action/UserAction'
import { useNavigate } from 'react-router-dom'

function Create() {
  const dispatch = useDispatch() // action dispatcher
  const fname = useRef()
  const femail = useRef()
  const fmobile = useRef()
  
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      let data = {
        name: fname.current.value,
        email: femail.current.value,
        mobile: fmobile.current.value
      }
      // console.log(`new user =`, data)
      dispatch(createUser(data))
        .unwrap()
        .then(res => {
          toast.success("new user data added successfully")
          navigate('/')
        })
        .catch(err => toast.error(err.response.data.message))
      
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Create User</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" method='post' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" ref={fname} id="name" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" ref={femail} id="email" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input type="number" name="mobile" ref={fmobile} id="mobile" className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Create User" className='btn btn-success' required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create