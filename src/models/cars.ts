export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    status: 'available' | 'rented' | 'maintenance';
}