import { FiMail, FiLock } from 'react-icons/fi'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from "react-router-dom"
>>>>>>> developer

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignIn() {
  return (
		<Container>
			<Form>
				<h1>Rocket Notes</h1>
				<p>App to save and manage your useful links</p>

        <h2>Log in</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}        
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}        
        />

        <Button title="Enter" />

<<<<<<< HEAD
        <Link to="/register">
=======
      <Link to="/register">
>>>>>>> developer
          Sign Up
        </Link>
			</Form>

      <Background />

		</Container>
	);
}