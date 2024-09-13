import { useContext, useState } from 'react'
import {InputBox} from './components'
import useCurrency from './hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

const convert =()=>{
  setConvertedAmount(amount*currencyInfo[to])
}

  return (
    <>
     <div className='w-full h-60 flex flex-col items-center justify-center space-y-4 p-4 bg-white bg-opacity-80 shadow-md rounded-md '>
     <form className='flex flex-col items-center justify-center space-y-2'
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
    <InputBox
    label='From'
    amount={amount}
    currencyOption={options}
    onCurrencyChange={(currency)=>setAmount(currency)}
    selectCurrency={from}
    onAmountChange={(amount)=>setAmount(amount)}
  
    />
    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
    onClick={swap}>
        &#8645; Swap
      </button>
    <InputBox
    label='To'
    amount={convertedAmount}
    currencyOption={options}
    onCurrencyChange={(currency)=>setTo(currency)}
    selectCurrency={to}
    amountDisable
    />
    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
    Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
    </form>
  </div>
    </>
  )
}

export default App
