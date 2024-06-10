import { Stock } from '../models/FinTechAPI/stock';
import { StockData } from '../models/FinTechAPI/stock-data';

const API_ENDPOINT = 'https://fintechcloud.azurewebsites.net';

export async function getStock(symbol: string = 'PLCE'): Promise<Stock | undefined> {
	if (!symbol) {
		return Promise.resolve(undefined);
	}
	const response = await fetch(`${API_ENDPOINT}/stocks/${symbol}`);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function getStockList(): Promise<Stock[]> {
	const response = await fetch(`${API_ENDPOINT}/stocks`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getStockDataList(symbol: string = 'UNH'): Promise<StockData[]> {
	if (!symbol) {
		return Promise.resolve([]);
	}
	const response = await fetch(`${API_ENDPOINT}/stockprices/${symbol}`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}
