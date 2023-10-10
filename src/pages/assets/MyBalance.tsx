import { useState } from "react"
import MyBalancePreIcon from '../../img/Assest_icon_Balance_pre.png'


export default function MyBalance() {

    const [list, setList] = useState<any>([
        {
            tokenName: 'USDT',
            balance: '10000.00',
            rate: '+0.55%'
        },
        {
            tokenName: 'XIM',
            balance: '8800.00',
            rate: '+20.88%'
        },
    ]);

    return <div className=" p-4 text-white">

        {
            list.map((item: any, index: number) => {
                return <div key={index} className="flex items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-4 rounded-md mb-4" 
                style={{background: '#2E2B3B',border: '2px solid rgba(255,255,255,0.2)'}}>
                    <div>{item.tokenName}</div>
                    <div className="ml-4 flex-1 flex flex-col justify-center text-center items-center">
                        <div className="flex items-center">
                            <img className="w-4 mr-2" src={MyBalancePreIcon} />
                            <div className=" font-bold">{item.balance}</div>
                        </div>
                        <div className=" text-green-600">{item.rate}</div>
                    </div>
                    <div className=" rounded-full border px-3 py-1 border-gray-200 border-solid">Withdraw</div>
                </div>
            })
        }

    </div>


}