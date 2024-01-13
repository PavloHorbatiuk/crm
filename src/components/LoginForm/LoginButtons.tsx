import React from "react";
import { Button } from "@mui/material";
import { User } from "../../store/slices/login/types/user";
import { NavLink } from "react-router-dom";

interface IProps {
    authData: User | undefined;
    logOut: () => void;
    login?: () => void;
}

const LoginButtons = ({ authData, logOut, login }: IProps) => {
    return (
        <>
            {authData?.accessToken ? (
                <>
                    <NavLink to='/user-page'>
                        <Button>Account</Button>
                    </NavLink>
                    <Button onClick={logOut}>Log out</Button>
                </>
            ) : (
                <Button onClick={login}>login</Button>
            )}
        </>
    );
};

export default LoginButtons;
