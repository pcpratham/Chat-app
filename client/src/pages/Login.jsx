import React, { useState } from 'react'
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material'
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from "../components/styles/StyledComponents"
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { usernameValidator } from '../utils/validator'


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin(false);
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword("");
    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSignup = (e) =>{
        e.preventDefault();
    }
    const avatar = useFileHandler("single");

    return (
        <Container component={"main"} maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {
                    isLogin ? (<>
                        <Typography variant="h5" >Login</Typography>
                        <form
                            style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}
                            onSubmit={handleLogin}
                        >
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {
                                username.error && (
                                    <Typography color="error" variant="caption">
                                        {username.error}
                                    </Typography>
                                )
                            }
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            {
                                password.error && (
                                    <Typography color="error" variant="caption">
                                        {password.error}
                                    </Typography>
                                )
                            }

                            <Button
                                sx={{
                                    marginTop: "1rem"
                                }}
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Login
                            </Button>

                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button
                                variant="text"
                                onClick={toggleLogin}
                                fullWidth
                            >
                                Sign up Insted
                            </Button>

                        </form>
                    </>) : (
                        <>
                            <Typography variant="h5" >Sign up</Typography>
                            <form
                                style={{
                                    width: "100%",
                                    marginTop: "1rem"
                                }}

                                onSubmit={handleSignup}
                            >
                                <Stack position={"relative"} width={"10rem"} margin={"auto"}  >
                                    <Avatar sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain"
                                    }}
                                        src={avatar.preview}
                                    />
                                    {
                                        avatar.error && (
                                            <Typography color="error" variant="caption">
                                                {avatar.error}
                                            </Typography>
                                        )
                                    }
                                    <IconButton sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        color: "white",
                                        right: "0",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)"
                                        }
                                    }} component="label" >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    variant='outlined'
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Bio"
                                    margin="normal"
                                    variant='outlined'
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant='outlined'
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                {
                                    username.error && (
                                        <Typography color="error" variant="caption">
                                            {username.error}
                                        </Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant='outlined'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                {
                                    password.error && (
                                        <Typography color="error" variant="caption">
                                            {password.error}
                                        </Typography>
                                    )
                                }

                                <Button
                                    sx={{
                                        marginTop: "1rem"
                                    }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                >
                                    Sign up
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button
                                    variant="text"
                                    onClick={() => setIsLogin(true)}
                                    fullWidth
                                >
                                    Login Insted
                                </Button>

                            </form>
                        </>
                    )
                }
            </Paper>
        </Container>
    )
}

export default Login