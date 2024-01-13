import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/material";

const Profile = () => {
    const [isLock, setIsLock] = useState(true);

    const unLockForm = () => {
        isLock ? setIsLock(false) : setIsLock(true);
    };

    return (
        <Box
            component='form'
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete='off'
        >
            <Stack spacing={1} direction={"row"}>
                <TextField
                    disabled={isLock}
                    id='outlined-required'
                    label='Name'
                    defaultValue='My Name'
                />
                <div onClick={unLockForm}>
                    <EditIcon />
                </div>
            </Stack>
        </Box>
    );
};

export default Profile;