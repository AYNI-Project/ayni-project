// import {useState, useEffect} from 'react'
// import { auth } from "../../firebase";
// import { useAuth } from "../../context/useAuth";
// import {useNavigate} from 'react-router-dom';
// import {sendEmailVerification} from "firebase/auth";

// export default function VerifyEmail() {

//   const {user} = useAuth()
//   const [time, setTime] = useState(60)
//   const {timeActive, setTimeActive} = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const interval = setInterval(() => {
//       user?.reload()
//       .then(() => {
//         if(user?.emailVerified){
//           clearInterval(interval)
//           navigate('/')
//         }
//       })
//       .catch((error) => {
//         alert(error.message)
//       })
//     }, 1000)
//   }, [navigate, user])

//   useEffect(() => {
//     let interval = null
//     if(timeActive && time !== 0 ){
//       interval = setInterval(() => {
//         setTime((time) => time - 1)
//       }, 1000)
//     }else if(time === 0){
//       setTimeActive(false)
//       setTime(60)
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval);
//   }, [timeActive, time, setTimeActive])

//   const resendEmailVerification = () => {
//     sendEmailVerification(auth.user)
//     .then(() => {
//       setTimeActive(true)
//     }).catch((err) => {
//       alert(err.message)
//     })
//   }

//   return (
//     <div className='center'>
//       <div className='verifyEmail'>
//         <h1>Verifica tu Email</h1>
//         <p>
//           <strong>Un email de verificación ha sido enviado a:</strong><br/>
//           <span>{user?.email}</span>
//         </p>
//         <span>Sigue las instrucciones del email para verificar tu cuenta.</span>       
//         <button 
//           onClick={resendEmailVerification}
//           disabled={timeActive}
//         >Reenviar Email {timeActive && time}</button>
//       </div>
//     </div>
//   )
// }