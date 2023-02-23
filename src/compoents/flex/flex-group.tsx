import {Link, Route, Router, Routes, NavLink, useNavigate, useLocation, Outlet,} from "react-router-dom";
import About from "../about/about";
import {useEffect} from "react";

interface stateStatus{
    id: number
    name: string
}
export default function Home(){
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=>{
        if (location.state != null){
            console.log((location.state as stateStatus).id)
            console.log((location.state as stateStatus).name) // emmm, undefined
        }
    }, [location])
    return (
        <div>
            <span>hello, flex</span>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/home/footer">footer</Link>
                </li>
                <li>
                    <Link to="/home/abort">abort</Link>
                </li>
                <li>
                    <button onClick={() => {navigate("/")}}>点击我返回首页/</button>
                    <button onClick={()=>{navigate("/home/abort")}}>点击我返回home-abort</button>
                    <button onClick={()=>{navigate("/home/aaa", {state:{id:123}})}}>click me, 传递参数</button>
                </li>
            </ul>
                <Routes>
                    <Route path="/home/abort"  element={<Abort/>}></Route>
                    <Route path="/home/footer" element={<Footer/>}></Route>
                </Routes>
            <Outlet></Outlet>
        </div>
    )
}

function AAA(){
    return <div>aaa</div>
}

function Abort(){
    return <div>abort</div>
}

function Footer(){
    return <div>footer</div>
}

export {Abort, Footer, AAA}
