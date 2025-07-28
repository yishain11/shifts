export interface ShiftReqBody {
  start_time: Date;
  end_time: Date;
  assigned_soldier_name: string;
}

export interface ShiftData {
  end_time: Date;
  start_time: Date;
  assigned_soldier: { id: number };
}
