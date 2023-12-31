import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import LoginButtons from "../LoginForm/LoginButtons";
import { getUserAuthData } from "../../store/slices/user/selectors.ts/getAuthData";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../LoginModal/LoginModal";
import { userActions } from "../../store/slices/user/userSlice";

function Header() {
    const [isOpen, setIsopen] = useState(false);
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const onCloseModal = () => {
        setIsopen(false);
        dispatch(userActions.setError(""));
    };

    const onShowModal = useCallback(() => {
        setIsopen(true);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    console.log("header rerender");
    return (
        <HeaderWrapper>
            <h1>CRM</h1>
            <LoginButtons
                login={onShowModal}
                authData={authData}
                logOut={onLogout}
            />
            {isOpen && (
                <LoginModal
                    title={"Enter"}
                    isOpen={isOpen}
                    onClose={onCloseModal}
                />
            )}
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled("div")`
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--yellow);
`;
