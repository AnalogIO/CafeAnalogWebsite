import { IntervalOpeningHourDTO } from './interval-opening-hour-dto';
import { OpeningHourEmployeeDTO } from './opening-hour-employee-dto';

export class IntervalOpeningHoursDTO {
    startHour: number;
    endHour: number;
    intervalMinutes: number;
    shifts: IntervalOpeningHourDTO[];
    checkedInEmployees: OpeningHourEmployeeDTO[];
}
