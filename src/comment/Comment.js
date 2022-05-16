import React, {Fragment} from "react";
import {Avatar, Box, Grid} from "@mui/material";

const comments = [
    {
        "id":"1",
        "name":"小明",
        "userLink":"#",
        "icon":"D:\\graduation-project\\web-spa\\src\\comment\\example\\favicon.ico",
        "text":"123456789中文中文中文abcabcabc",
        "like":10,
        "trample":6,
        "replyNum":3,
        "replyToName":"小红",
        "child":[]
    },
    {
        "id":"2",
        "name":"小明01",
        "userLink":"#",
        "icon":"D:\\graduation-project\\web-spa\\src\\comment\\example\\favicon.ico",
        "text":"123456789中文中文中文abcabcabc",
        "like":10,
        "trample":6,
        "replyNum":3,
        "replyToName":"小红",
        "child":[]
    },
    {
        "id":"3",
        "name":"小明02",
        "userLink":"#",
        "icon":"D:\\graduation-project\\web-spa\\src\\comment\\example\\favicon.ico",
        "text":"123456789中文中文中文abcabcabc",
        "like":10,
        "trample":6,
        "replyNum":3,
        "replyToName":"小红",
        "child":[]
    }
]


function Comment(){
    return(
        <Fragment>
            <Box
            sx={{
                width: '60%'
            }}
            >
                <Grid container >
                    <Grid item xs={2}>
                        <Avatar src=""/>
                    </Grid>
                    <Grid item xs={2}>
                        <div>名字</div>
                    </Grid>
                    <Grid item xs={2}>
                        时间
                    </Grid>
                </Grid>
                <Grid container  item>
                    <div>123</div>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item >点赞</Grid>
                    <Grid item >查看回复(6)</Grid>
                    <Grid item >回复</Grid>
                    <Grid item >举报</Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
export default Comment;