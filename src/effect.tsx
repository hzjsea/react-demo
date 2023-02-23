import { useEffect, useState, useRef } from 'react';
import Refr from './ref';
export default function UseEffectr(){

    const [value ,change] = useState(0)
    const storeRef = useRef(0)
    const [count, setCount] = useState(0)

    // 初始化的时候
    useEffect(()=>{
        storeRef.current = value
        alert("init"+storeRef.current)
    },[])

    // 每次value改变的时候
    useEffect(() => {
        alert("value change " + value + "refvalue not change" + storeRef.current)
    },[value])


    // 初始化一个计时器，当计时器销毁的时候的，清除计时器
    useEffect(() => {
		const timer = setInterval(() => {
			setCount(old => old + 1)
		}, 100)
		return () => {
			clearInterval(timer)
		}
	}, [])



    return (
        <div>
            <span>helloworl</span>
            <span>{value}</span>
            <button onClick={()=>{change(value + 1)}}>click me</button>
            <button onClick={()=>{change(storeRef.current = value); alert("ref value" + storeRef.current)}}>sync value to ref current </button>
            <span>{count}</span>

        </div>
    )

}
