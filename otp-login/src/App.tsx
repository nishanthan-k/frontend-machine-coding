import './App.css'
import OtpForm from './components/OtpForm'

function App() {

  const handleSubmit = (otp: string) => console.log('OTP Entered', otp);
  return (
    <>
      <OtpForm handleSubmit={handleSubmit} />
    </>
  )
}

export default App
