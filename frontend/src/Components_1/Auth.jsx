import React, { useState } from "react"
// import "../App.css"
import "./Auth.css"
import axios from "axios"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  let [details, setDetails] = useState({
    name: "",
    rollNo: "",
    email: "",
    profession: "",
    password: "",
    confirmPassword: "",
  })
  let { name, rollNo, email, profession, password, confirmPassword } =  details

  let [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
    profession: "",
  })

  const handleSignin = (e) => {
    e.preventDefault()
    console.log(signinDetails.email)
    console.log(signinDetails.password)
    console.log(signinDetails.profession)
    if(signinDetails.email && signinDetails.password && signinDetails.profession){
      if(signinDetails.profession === "Student"){
        axios.post("http://localhost:8080/authenticate", {
          email: signinDetails.email,
          password: signinDetails.password,
        }).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
      } else if(signinDetails.profession === "Teacher"){
        axios.post("http://localhost:8080/authenticateTeacher", {
          email: signinDetails.email,
          password: signinDetails.password,
        }).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }

  const handleSigninChange = (e) => {
    setSigninDetails({ ...signinDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (authMode === "signup") {
      if (password === confirmPassword && name && rollNo && email && profession && password && confirmPassword) {
        console.log(name)
        console.log(rollNo)
        console.log(email)
        console.log(profession)
        console.log(password)

        if(profession === "Student"){
          axios.post("http://localhost:8080/signup", {
            name,
            profession,
            email,
            password,
            rollNo,
          }).then((res) => {
            console.log(res.data,res.status)
          }).catch((err) => {
            console.log(err)
          })
        } else if(profession === "Teacher"){
          axios.post("http://localhost:8080/signupTeacher", {
            name,
            email,
            password,
            profession,
            rollNo,
          }).then((res) => {
            console.log(res.data)
          }).catch((err) => {
            console.log(err)
          })
        }
      } else {
        console.log("Error")
      }
    } else {
      console.log("Sign In")
    }
  }
  // get all the details from signup form and set it to details state
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={handleSigninChange}
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={handleSigninChange}
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Profession</label>
              <select
                className="form-control mt-1"
                name="profession"
                id="profession"
                onChange={handleSigninChange}
              >
                <option value="" style={{color:'gray'}}>Select Profession</option>
                <option value="Teacher" style={{color:'gray'}}>Teacher</option>
                <option value="Student" style={{color:'gray'}}>Student</option>
            </select>
          </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleSignin}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Roll Number</label>
            <input
              onChange={handleChange}
              name="rollNo"
              type="text"
              className="form-control mt-1"
              placeholder="LCS2022012"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Profession</label>
            <select
              className="form-control mt-1"
              name="profession"
              id="profession"
              onChange={handleChange}
            >
              <option value="" style={{color:'gray'}}>Select Profession</option>
              <option value="Teacher" style={{color:'gray'}}>Teacher</option>
              <option value="Student" style={{color:'gray'}}>Student</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}