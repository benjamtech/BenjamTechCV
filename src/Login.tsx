import React, { useState } from "react";
import "./Login.css";
import Store, { StoreOne } from "./StoreSystem";

interface PropShape {
    setIsLoggedIn(value: boolean): any,
    setData(value: StoreOne | null): any,
}

export default (props: PropShape) => {
    // Datastore of type string
    const [password, setPassword] = useState<string>("");

    const login = (e: React.FormEvent) => {
        // Prevents refresh of page
        e.preventDefault();

        // Calls the static funciton in StoreSystems Store class
        const value = Store.DecryptStore("encone", password);

        if (value === null) {
            alert("Wrong password");
        } else {
            // login successful
            props.setData(value);
            props.setIsLoggedIn(true);
        }
    }

    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Updates the state with new value from password input 
        setPassword(e.target.value);
    }

    // Some simple HTML for the loginform (with React syntax)
    return (
        <div className="loginPage">
            <form onSubmit={login}>
                <input type="password" placeholder="Password" value={password} onChange={passwordChange} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}