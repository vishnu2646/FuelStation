export interface IUser {
    Userpwd: String,
    UserName: String
}

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
    Rate: number;
}

export interface IDashboard {
    GetPumpList: {
        Table: IDashboardTableData[];
    }
}

export interface IExpenseTableData {
    Pdocid: number;
    ExpId: number;
    particulars: string;
    ExpById: number;
    ExpAmount: number;
    ExpDate: number;
}