import React, { useState } from 'react'

export default function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        isAccepted: "false"
    })
    return (
        <div>
            <form>
                <h2>SignUP</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" name='name' value={data.name} />
                </div>
                <div>
                    <label>Eamil:</label>
                    <input type="text" name='email' value={data.email} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name='password' value={data.password} />
                </div>
                <div>
                    <label>ConfirmPassword:</label>
                    <input type="text" name='ConfirmPassword' value={data.confirmpassword} />
                </div>
                <div>
                    <label>I accept terms of privacy policy:</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} />
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
