import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
<<<<<<< HEAD
  return(
=======
  return (
>>>>>>> developer
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> developer
