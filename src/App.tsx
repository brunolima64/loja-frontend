import './App.css';
import { AdCtxProvider } from './contexts/AdCtx';
import { UserContextProvider } from './contexts/UserContext';
import { Routes } from './routes/Routes';
import * as C from "./styles";

export const App = () => {

	return (
		<UserContextProvider>
			<AdCtxProvider>
				<C.Container>
					<Routes />
				</C.Container>
			</AdCtxProvider>
		</UserContextProvider>

	)
}

export default App;