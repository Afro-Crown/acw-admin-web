export interface ScheduleEntity {
  id: string;
  staff_name: string;
  date: Date;
  days: string[];
  times: string[];
  service_name: string;
  price: string;
  duration: string;
  isConfirmed: boolean;
}
