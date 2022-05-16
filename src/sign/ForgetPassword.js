import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import {Fragment, useState} from "react";
import * as React from 'react';
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";


export default function ForgetPassword(){

    const [code,setCode] = useState(0);
    const [onePassword,setOnePassword] = useState('');
    const [towPassword,setTowPassword] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(
            {
                userName:data.get('userName'),
                password:data.get('twoPassword'),
            }
        )
    }
    const getOnePassword = (event) =>{
        console.log(event.target.value);
        setOnePassword(event.target.value)
    }
    const getTwoPassword = (event) =>{
        console.log(event.target.value)
        setTowPassword(event.target.value)
    }
    const getEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const sendCode = () =>{
        console.log('send...')
    }

    return(
        <Fragment>
        <Container component="main" maxWidth="xs">
            <Box
                 sx={{
                     marginTop: 8,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                 }}
            >
                <div>找回密码</div>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id="userName"
                                label="userName"
                                name="userName"
                                required={true}
                                fullWidth={true}
                                autoFocus={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="onePassword"
                                label="新密码"
                                name="onePassword"
                                type={"password"}
                                required={true}
                                fullWidth={true}
                                onChange={getOnePassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="twoPassword"
                                label="确认密码"
                                name="twoPassword"
                                type={"password"}
                                required={true}
                                fullWidth={true}
                                onChange={getTwoPassword}
                            />
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={8}>
                                <TextField
                                    id="email"
                                    label="email"
                                    name="email"
                                    required={true}
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 1, mb: 1 }}
                                    onClick={sendCode}
                                >发送验证码</Button>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={8}>
                                <TextField
                                    id="code"
                                    label="验证码"
                                    name="code"
                                    required={true}
                                    fullWidth={true}
                                    onChange={getEmail}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <div>555555</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >提交</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/SignIn">登录</NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Fragment>
    );
}