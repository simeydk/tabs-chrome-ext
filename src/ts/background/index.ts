import {browser} from 'webextension-polyfill-ts';

async function getAllTabs() {
	const windows = await browser.windows.getAll({populate:true})
	const tabs: any[] = []
	windows.forEach(window => tabs.push(...window.tabs))
	return tabs
}

getAllTabs().then(console.table)

browser.runtime.onMessage.addListener(async (message, sender) => {
	if(message.message === "getAllTabs") {
		return await getAllTabs()
	} else {
		return null
	}
})