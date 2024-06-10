import { AddressDto } from './address-dto';

export interface EmployeeDto {
	employeeId: number;
	lastName: string;
	firstName: string;
	title: string;
	titleOfCourtesy: string;
	birthDate: string;
	hireDate: string;
	addressId: string;
	address: AddressDto;
	notes: string;
	avatarUrl: string;
	reportsTo: number;
}
