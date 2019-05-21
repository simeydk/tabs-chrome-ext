import React, {useState, useEffect} from 'react';
import {browser} from 'webextension-polyfill-ts';
import useRefresh from './useRefresh'

const rootEl: HTMLElement = document.getElementById('popup-root')

rootEl.innerHTML = "JS is working"
const getAllTabs = () :Promise<any> => browser.runtime.sendMessage({message:"getAllTabs"})

// getAllTabs().then(tabs => JSON.stringify(tabs,null,2)).then(txt => rootEl.innerHTML = txt)
// function useCounter(start: number = 0) {
// 	const [i, setI] = useState(start)
// 	const increment = (n:number = 1) => setI(i+n)
// 	const decrement = (n:number = 1) => setI(i-n)
// 	return [i, increment, decrement, setI]
// }

function PopupApp() {

	// const [tabs, refreshTabs] = useRefresh(getAllTabs,[])
	// const [counter, plus, minus, setCounter] = useCounter(0)


	return (
		<div>Hello</div>
	);
}


export default PopupApp;