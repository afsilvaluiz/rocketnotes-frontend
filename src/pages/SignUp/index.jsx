import { FiUser, FiMail, FiLock} from "react-icons/fi";

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

				<h2>Create Account</h2>

				<Input placeholder="Name" type="text" icon={FiUser} />

				<Input placeholder="E-mail" type="text" icon={FiMail} />

				<Input placeholder="Password" type="password" icon={FiLock} />
        


				<Button title="Enter" />

				<a href="#">Return to login</a>
			</Form>
		</Container>
	);
}
