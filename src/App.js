import './App.css';
import { FiCopy } from 'react-icons/fi';


function App() {
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
            defaultValue=''
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
              id='uppercase-letters'
              name='uppercase-letters'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='lowercase-letters'>Include lowercase</label>
              <input
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='include-numbers'>Include Numbers</label>
              <input
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
              />
          </div>

          <div className='form-group'>
              <label htmlFor='include-symbols'>Include Symbols</label>
              <input
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
              />
          </div>

          <button className='generator__btn'>Generate Password</button>

        </div>
      </div>
    </div>
  );
}

export default App;
