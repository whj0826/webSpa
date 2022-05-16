import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home/Home";
import {CircularProgress} from "@mui/material";

const SignIn = React.lazy(() => import('./sign/SignIn') ); //不能加{}
const SignUp = React.lazy(() =>import('./sign/SignUp') );
const ForgetPassword = React.lazy(() => import('./sign/ForgetPassword'));
const Comment = React.lazy(()=> import('./comment/Comment'));
// import Comment from "./comment/Comment";
// const Comment = React.lazy(()=>import('./comment/Comment'));

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/SignIn" element={ <SignIn/> } />
                <Route path="/SignUp" element={ <SignUp/> } />
                <Route path="/ForgetPassword" element={ <ForgetPassword/> } />
                <Route path="/Comment" element={ <Comment/> }/>
                {/*<Route path="/Comment" element={<Comment/>}/>*/}
            </Routes>
        </Suspense>
    </BrowserRouter>
)