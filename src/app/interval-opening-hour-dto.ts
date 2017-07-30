import { OpeningHourEmployeeDTO } from './opening-hour-employee-dto';

export class IntervalOpeningHourDTO {
    shiftStart: string;
    open: boolean;
    employees: OpeningHourEmployeeDTO[];
}
