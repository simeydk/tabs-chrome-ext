import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../background/store';
import Counter from '../../containers/Counter';
import GlobalStyle from '../../components/styles/GlobalStyle';
import { themes, ThemeTypes } from '../../components/styles/themes';

interface IPopupApp {
	theme: ThemeTypes;
	dispatch: Dispatch;
}

function App() {
	const [i, setI] = useState(4)
	// const plus = setI(i+1)
	// const minus = setI(i-1)

	const d = new Date()
	return <div>
		{i} <br/>
		{/* <button onClick={plus}>plus</button>
		<button onClick={minus}>minus</button> */}
		{d.toTimeString()}
		</div>
}



// export default connect(mapStateToProps)(PopupApp);
export default App;

const PopupAppContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;  
    height: 200px;
    width: 300px;
    margin: 10px;
    background-color: ${p => p.theme.backgroundColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;