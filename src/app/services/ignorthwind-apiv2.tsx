import { CustomerDto } from '../models/IGNorthwindAPIv2/customer-dto';
import { OrderDto } from '../models/IGNorthwindAPIv2/order-dto';
import { ProductDto } from '../models/IGNorthwindAPIv2/product-dto';
import { OrderDetailDto } from '../models/IGNorthwindAPIv2/order-detail-dto';
import { EmployeeDto } from '../models/IGNorthwindAPIv2/employee-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getCustomerDto(id: string = 'BLONP'): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function getOrderDtoList(id: string = 'BLONP'): Promise<OrderDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}/Orders`, options);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getProductDtoList(id: number): Promise<ProductDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Orders/${id}/Products`, options);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getOrderDetailDtoList(id: number): Promise<OrderDetailDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Orders/${id}/Details`, options);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'GET',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Employees`, options);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function putCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'PUT',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function postCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'POST',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'DELETE',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function putEmployeeDto(data: any): Promise<EmployeeDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'PUT',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Employees`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}
