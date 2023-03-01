import './App.css';
import { useState } from 'react';

function App() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'm',
        userType: 'corporate',
        tac: false,
        egn: '',
        eik: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={changeHandler}
                            value={values.username}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" name="password" value={values.password} onChange={changeHandler} />
                    </div>

                    <div>
                        <label htmlFor="age">Age:</label>
                        <input id="age" type="number" name="age" value={values.age} onChange={changeHandler} />
                    </div>

                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
                    </div>

                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="individual-user-type">Individual:</label>
                        <input type="radio" name="userType" id="individual-user-type" value="individual" onChange={changeHandler} checked={values.userType == 'individual'} />
                        <label htmlFor="corporate-user-type">Corporate:</label>
                        <input type="radio" name="userType" id="corporate-user-type" value="corporate" onChange={changeHandler} checked={values.userType == 'corporate'} />
                    </div>

                    <div>
                        <label htmlFor="identifier">{values.userType == 'individual' ? 'EGN' : 'EIK'}</label>

                        {values.userType == 'individual'
                            ? <input type="text" id="identifier" name="egn" value={values.egn} onChange={changeHandler} />
                            : <input type="text" id="identifier" name="eik" value={values.eik} onChange={changeHandler} />
                        }
                    </div>

                    <div>
                        <label htmlFor="tac">Terms and Conditions:</label>
                        <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={changeHandler} />
                    </div>

                    <div>
                        <input type="submit" value="Login" disabled={!values.tac} />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
