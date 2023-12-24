import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
	return (
		<Container>
			<Header />

			<main>
				<Content>
					<ButtonText title="Delete Note" />

					<h1>Overview of React</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ea voluptatibus eum, officia ad non, placeat ipsum quo veniam beatae quaerat! Nemo deserunt voluptas aliquam eligendi unde facere incidunt voluptatibus!</p>

					<Section title="Useful Links">
						<Links>
							<li>
								<a href="#">https://www.google.com</a>
							</li>
							<li>
								<a href="#">https://www.google.com</a>
							</li>
						</Links>
					</Section>

					<Section title="Tags">
						<Tag title="express" />
						<Tag title="nodejs" />
					</Section>
					<Button title="Back" />
				</Content>
			</main>
		</Container>
	);
}
