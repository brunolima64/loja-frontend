import { useContext, useEffect, useState } from 'react';
import './App.css';
import { ShowAlert } from './components/ShowAlert';
import { AdCtxProvider } from './contexts/AdCtx';
import { UserContextProvider } from './contexts/UserContext';
import { Routes } from './routes/Routes';
import * as C from "./styles";
import { AlertContext, AlertContextProvider } from './contexts/AlertContext';

export const App = () => {
	const alertCtx = useContext(AlertContext);

	return (
		<C.Container>
			{alertCtx?.alertMsg !== "" &&
				<ShowAlert
					text={alertCtx?.alertMsg === "success" ? "Sucesso!" : "Erro!"}
					img={alertCtx?.alertMsg === "success" ?
						"assets/images/succes.jpg" :
						"assets/images/error.jpg"}
				/>
			}
			<Routes />
		</C.Container>
	)
}

export default App;