
export interface IDashboardTableData {
    pumpid: number;
    PumpNo: string;
    itemid: number;
    partno: string;
    OpReading: number;
    TransId: number;
    OperatorId: number;
    OperatorName: string;
    Status: string;
}

export interface IDashboard {
    GetPumpList: {
        Table: IDashboardTableData[];
    }
}