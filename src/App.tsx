import './App.css';
import { AdCtxProvider } from './contexts/AdCtx';
import { Routes } from './routes/Routes';
import * as C from "./styles";

export const App = () => {

	return (
		<AdCtxProvider>
			<C.Container>
				<Routes />
			</C.Container>
		</AdCtxProvider>

	)
}

export default App;