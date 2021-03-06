import { DriveFlag, ICommandWithRaw } from './types';
export declare const factory: (seq?: () => number) => {
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
