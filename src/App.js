import './App.css';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import { success } from './message';
import {numbers, upperCaseLetters, lowerCaseLetters, specialCharacters} from './characters'
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify';

 
function App() {

  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState('20')
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includenumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const notify = (message, hasError = false) => {
    console.log('notify')
    if(hasError){
      console.log(message)
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }

      )
    }
  }

  const handleGeneratePassword = (e) => {
    console.log('hereeee')
    if(!includeUppercase && !includeLowercase && !includeSymbols && !includenumbers){
      console.log('in button')
      notify('You Must Select at least one option', true)
    }
  }



  return (
    <div className="App">
      <div className='container'>
        <div className='generator'>
          <h2 className='generator__header'>Password generator</h2>
          <div className='generator__password'>
            <h3></h3>
            <button className='copy__btn'>
              <FiCopy width={25} height={25}/>
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-strength'>Password Length </label>
            <input
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type='number'
            id='password-strenght'
            name='password-strength'
            max='100'
            min='5'
            />
          </div>

          <div className='form-group'>
              <label htmlFor='uppercase-letters'>Include Uppercase</label>
              <input
              type='checkbox'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              id='uppercase-letters'
              name='uppercase-letters'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='lowercase-letters'>Include lowercase</label>
              <input
              type='checkbox'
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              id='lowercase-letters'
              name='lowercase-letters'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='include-numbers'>Include Numbers</label>
              <input
              type='checkbox'
              id='include-numbers'
              checked={includenumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              name='include-numbers'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='include-symbols'>Include Symbols</label>
              <input
              type='checkbox'
              id='include-symbols'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              name='include-symbols'
              />
          </div>

          <button onClick={handleGeneratePassword} className='generator__btn'>Generate Password</button>

          <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />


        </div>
      </div>
    </div>
  );
}

export default App;
