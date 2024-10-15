import { useContext } from 'react';
import './App.css';
import { ShowAlert } from './components/ShowAlert';
import { Routes } from './routes/Routes';
import * as C from "./styles";
import { AlertContext } from './contexts/AlertContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
	const alertCtx = useContext(AlertContext);

	return (
		<C.Container>
			{alertCtx?.alertMsg !== "" &&
				<ShowAlert />
			}

			<Header />
			<Routes />
			<Footer />
		</C.Container>
	)
}

export default App;