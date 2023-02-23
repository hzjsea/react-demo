import { useRef, useState } from 'react';

export default function Refr(){
    const ref = useRef(0)

    function handleRefResult(){
        ref.current = ref.current + 1
    }

    function handleRefResultAndAlert(){
        handleRefResult()
        alert('You clicked ' + ref.current + ' times!')
    }


    // stop watch
    // state因为有实时渲染的特点，所以时间的变化由state完成
    // ref因为存在于整个生命周期，所以你可以理解为她是一个临时的缓存点
    const [startTime, setStartTime] = useState<number>(0);
    const [now, setNow] = useState<number>(0);
    const intervalRef = useRef<any>(null);

    function handlerTimeStart(){
        setStartTime(Date.now)
        setNow(Date.now)
        
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        }, 30)
    }

    function handleStop(){
        clearInterval(intervalRef.current)
        
    }


    return (
        <div>
            {/*refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!*/}
            {/*通过span的方式无法观察到ref.current数据的变化，这是因为ref的改变不会通知react重新渲染，但是state的改变会 */}
            <span>{ref.current}</span> 
            {/* <button onClick={()=> {ref.current = ref.current + 1}}>click</button> */}
            <button onClick={handleRefResult}>click me</button>
            
            {/*如果想要看到具体的变化，可以通过实时渲染组件完成，比如弹窗，在每次点击的时候都会出现弹窗 */}
            <button onClick={handleRefResultAndAlert}>click me, and ref.current update</button>
        
            <br></br>
            <span>计数器</span>
            <span>开始时间:{startTime}</span>
            <span>当前时间:{now}</span>
            
            <button onClick={handlerTimeStart}>开始</button>
            <button  onClick={handleStop}>暂停</button>

        </div>
    )
}