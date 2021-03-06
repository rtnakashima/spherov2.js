import { ICharacteristic, IPeripheral } from '../ble';
import { DriveFlag, ICommandWithRaw } from '../commands/types';
export declare const commandsType: {
    api: {
        echo: () => ICommandWithRaw;
    };
    driving: {
        drive: (speed: number, heading: number, flags: DriveFlag[]) => ICommandWithRaw;
    };
    power: {
        batteryVoltage: () => ICommandWithRaw;
        sleep: () => ICommandWithRaw;
        something2: () => ICommandWithRaw;
        something3: () => ICommandWithRaw;
        something4: () => ICommandWithRaw;
        wake: () => ICommandWithRaw;
    };
    somethingApi: {
        something5: () => ICommandWithRaw;
    };
    systemInfo: {
        appVersion: () => ICommandWithRaw;
        something: () => ICommandWithRaw;
        something6: () => ICommandWithRaw;
        something7: () => ICommandWithRaw;
    };
    userIo: {
        allLEDsRaw: (payload: number[]) => ICommandWithRaw;
        setBackLedIntensity: (i: number) => ICommandWithRaw;
        setMainLedBlueIntensity: (b: number) => ICommandWithRaw;
        setMainLedColor: (r: number, g: number, b: number) => ICommandWithRaw;
        setMainLedGreenIntensity: (g: number) => ICommandWithRaw;
        setMainLedRedIntensity: (r: number) => ICommandWithRaw;
    };
};
export declare const decodeType: {
    add(byte: number): number | void;
};
export interface IQueuePayload {
    command: ICommandWithRaw;
    characteristic?: ICharacteristic;
}
export declare class Core {
    protected commands: typeof commandsType;
    private peripheral;
    private apiV2Characteristic?;
    private dfuControlCharacteristic?;
    private antiDoSCharacteristic?;
    private decoder;
    private started;
    private queue;
    private initPromise;
    private initPromiseResolve;
    constructor(p: IPeripheral);
    batteryVoltage(): Promise<number>;
    wake(): Promise<IQueuePayload>;
    sleep(): Promise<IQueuePayload>;
    start(): Promise<void>;
    protected queueCommand(command: ICommandWithRaw): Promise<IQueuePayload>;
    private init();
    private onExecute(item);
    private match(commandA, commandB);
    private bindServices();
    private bindListeners();
    private onPacketRead(error, command);
    private onApiRead(data, isNotification);
    private onApiNotify(data, isNotification);
    private onDFUControlNotify(data, isNotification);
    private write(c, data);
}
