import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
	return (
		<Container>
			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Header />

			<Menu>
				<li>
					<ButtonText title="All" />
				</li>
				<li>
					<ButtonText title="React" />
				</li>
				<li>
					<ButtonText title="Nodejs" />
				</li>
			</Menu>

			<Search>
				<Input placeholder="Search by Title" icon={FiSearch} />
			</Search>

			<Content>
				<Section title=" My Notes">
					<Note
						data={{
							title: "React",
							tags: [
								{ id: "1", name: "react" },
								{ id: "2", name: "nodejs" },
							],
						}}
					/>
				</Section>
			</Content>

			<NewNote to="/new">
				<FiPlus />
				Create Note
			</NewNote>
		</Container>
	);
}
