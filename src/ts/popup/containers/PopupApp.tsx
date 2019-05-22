import React, {useState} from 'react';

function App() {
	const [i, setI] = useState(4)
	const plus = () => setI(i+1)
	const minus = () => setI(i-1)

	const d = new Date()
	return <div>
		{i} <br/>
		<button onClick={plus} >plus</button>
		<button onClick={minus}>minus</button>
		{d.toTimeString()}
		</div>
}



// export default connect(mapStateToProps)(PopupApp);
export default App;