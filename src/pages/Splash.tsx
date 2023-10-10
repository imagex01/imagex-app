import { useEffect, useRef } from "react";
import Bg0 from '../img/bg_0.png'
import Icon0 from '../img/icon_0.png'
import { RouteComponentProps } from "react-router-dom";

interface MenuProps extends RouteComponentProps {
}

const Splash: React.FC<MenuProps> = ({history, match}) => {

    const timeRef = useRef<any>(null);


    useEffect(() => {
        // getOrderDetail()
        let second = 0
        const timer = setInterval(() => {

            if (second > 1) {
                
                clearInterval(timer);
                history.push('/login')
                return
            }
            second = second + 1;
        }, 1000);
        timeRef.current = timer
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(timeRef.current);
        }
    }, []);

    return <div className="relative w-screen h-screen" >
        <img src={Bg0} className=" absolute object-cover w-screen h-screen" />
        <div className=" absolute z-40 bg-opacity-40 bg-black w-screen h-screen" />
        <div onClick={()=>{
            history.push('/login')
        }} className=' z-50 absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center'>
            <img src={Icon0} className=" w-16 h-16" />
            <div className='mt-4 text-white font-bold'>
                Life is share
            </div>
        </div>


    </div>

}

export default Splash;


