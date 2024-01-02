import { RiShutDownLine } from 	'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'

export function Header() {
	const { signOut } = useAuth()


  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/afsilvaluiz.png" alt="User image" />

        <div>
          <span>Welcome</span>
          <strong>Luiz Silva</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
  }

