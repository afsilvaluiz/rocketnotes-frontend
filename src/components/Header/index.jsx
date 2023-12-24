import { Container, Profile } from './styles'

export function Header() {
  return (
		<Container>      
			<Profile>        
				<img src="https://github.com/afsilvaluiz.png" 
        alt="User image" />

				<div>
					<span>Welcome</span>
					<strong>Luiz Silva</strong>
				</div>
        
			</Profile>

		</Container>
	  )
  }

