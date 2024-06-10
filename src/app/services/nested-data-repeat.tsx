import { NestedDataType } from '../models/NestedDataRepeat/nested-data-type';

export async function getNestedData(): Promise<NestedDataType | undefined> {
	const response = await fetch('https://raw.githubusercontent.com/zdrawku/data/master/IGDSC-Library.json');
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}
