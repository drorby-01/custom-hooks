import React, { useState } from "react";
import useCustomForm from "../hooks/useCustomForm";

export default function Login() {
  const initialState = { firstName: "", lastName: "", password: "" };

  //with CustomHook - useCustomForm
  const [userData, onChangeA] = useCustomForm(initialState);

  // without Custom Hook
  // const [userData, setUserData] = useState(initialState);
  // const onChangeInput = (e: any) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  const register = () => {
    console.log(userData);
  };

  return (
    <div>
      <div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-25">
                <label>First Name</label>
              </div>
              <div className="col-75">
                <input
                  onChange={onChangeA}
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Last Name</label>
              </div>
              <div className="col-75">
                <input
                  onChange={onChangeA}
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Password</label>
              </div>
              <div className="col-75">
                <input
                  onChange={onChangeA}
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Your password.."
                />
              </div>
            </div>
            {/* <div className="row">
              <div className="col-25">
                <label>Country</label>
              </div>
              <div className="col-75">
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div> */}

            <div className="row">
              <input type="button" onClick={register} value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
