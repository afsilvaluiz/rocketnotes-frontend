import { FiUser, FiMail, FiLock} from "react-icons/fi";
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from "react-router-dom"
>>>>>>> developer

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
	return (
		<Container>
			<Background />
			<Form>
				<h1>Rocket Notes</h1>
				<p>App to save and manage your useful links</p>

				<h2>Create new account</h2>

				<Input placeholder="Name" type="text" icon={FiUser} />

				<Input placeholder="E-mail" type="text" icon={FiMail} />

				<Input placeholder="Password" type="password" icon={FiLock} />
        


				<Button title="Sign Up" />

<<<<<<< HEAD
=======

>>>>>>> developer
				<Link to="/">Return to login</Link>
			</Form>
		</Container>
	);
}
