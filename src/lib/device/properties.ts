import { Device, DynamicLighting, IndexedProperty, Picture, PropertyName, RGBColor } from "eufy-security-client"
import { Modify } from "../state.js";

export interface DevicePropertiesSchema0 {
    name: string;
    model: string;
    serialNumber: string;
    hardwareVersion: string;
    softwareVersion: string;
    type: number;
    stationSerialNumber: string;
    battery: number;
    batteryTemperature: number;
    batteryLow: boolean;
    batteryIsCharging: boolean;
    lastChargingDays: number;
    lastChargingTotalEvents: number;
    lastChargingRecordedEvents: number;
    lastChargingFalseEvents: number;
    batteryUsageLastWeek: number;
    wifiRssi: number;
    wifiSignalLevel: number;
    enabled: boolean;
    antitheftDetection: boolean;
    autoNightvision: boolean;
    nightvision: boolean;
    statusLed: boolean;
    motionDetection: boolean;
    motionDetectionType: number;
    motionDetectionSensitivity: number;
    motionDetectionTypeHuman: boolean;
    motionDetectionTypeHumanRecognition: boolean;
    motionDetectionTypePet: boolean;
    motionDetectionTypeVehicle: boolean;
    motionDetectionTypeAllOtherMotions: boolean;
    motionZone: string;
    motionDetectionRange: boolean;
    motionDetectionRangeStandardSensitivity: number;
    motionDetectionRangeAdvancedLeftSensitivity: number;
    motionDetectionRangeAdvancedMiddleSensitivity: number;
    motionDetectionRangeAdvancedRightSensitivity: number;
    motionDetectionTestMode: boolean;
    motionDetected: boolean;
    motionTracking: boolean;
    motionTrackingSensitivity: number;
    motionAutoCruise: boolean;
    motionOutOfViewDetection: boolean;
    personDetected: boolean;
    personName: string;
    rtspStream: boolean;
    rtspStreamUrl: string;
    watermark: number;
    pictureUrl?: string;
    state: number;
    petDetection: boolean;
    petDetected: boolean;
    soundDetection: boolean;
    soundDetectionType: number;
    soundDetectionSensitivity: number;
    soundDetected: boolean;
    cryingDetected: boolean;
    sensorOpen: boolean;
    sensorChangeTime: number;
    motionSensorPirEvent: number;
    locked: boolean;
    ringing: boolean;
    lockStatus: number;
    light: boolean;
    microphone: boolean;
    speaker: boolean;
    speakerVolume: number;
    ringtoneVolume: number;
    audioRecording: boolean;
    powerSource: number;
    powerWorkingMode: number;
    chargingStatus: number;
    recordingEndClipMotionStops: boolean;
    recordingClipLength: number;
    recordingRetriggerInterval: number;
    videoStreamingQuality: number;
    videoRecordingQuality: number;
    videoWdr: boolean;
    lightSettingsEnable: boolean;
    lightSettingsBrightnessManual: number;
    lightSettingsColorTemperatureManual: number;
    lightSettingsBrightnessMotion: number;
    lightSettingsColorTemperatureMotion: number;
    lightSettingsBrightnessSchedule: number;
    lightSettingsColorTemperatureSchedule: number;
    lightSettingsMotionTriggered: boolean;
    lightSettingsMotionActivationMode: number;
    lightSettingsMotionTriggeredDistance: number;
    lightSettingsMotionTriggeredTimer: number;
    chimeIndoor: boolean;
    chimeHomebase: boolean;
    chimeHomebaseRingtoneVolume: number;
    chimeHomebaseRingtoneType: number;
    notificationType: number;
    rotationSpeed: number;
    imageMirrored: boolean;
    notificationPerson: boolean;
    notificationPet: boolean;
    notificationAllOtherMotion: boolean;
    notificationCrying: boolean;
    notificationAllSound: boolean;
    notificationIntervalTime: boolean;
    notificationRing: boolean;
    notificationMotion: boolean;
    notificationRadarDetector: boolean;
    continuousRecording: boolean;
    continuousRecordingType: number;
    chirpVolume: number;
    chirpTone: number;
    videoHdr: boolean;
    videoDistortionCorrection: boolean;
    videoRingRecord: number;
    videoNightvisionImageAdjustment: boolean;
    videoColorNightvision: boolean;
    autoCalibration: boolean;
    autoLock: boolean;
    autoLockTimer: number;
    autoLockSchedule: boolean;
    autoLockScheduleStartTime: string;
    autoLockScheduleEndTime: string;
    oneTouchLocking: boolean;
    wrongTryProtection: boolean;
    wrongTryAttempts: number;
    wrongTryLockdownTime: number;
    scramblePasscode: boolean;
    sound: number;
    notification: boolean;
    notificationUnlocked: boolean;
    notificationLocked: boolean;
    loiteringDetection: boolean;
    loiteringDetectionRange: number;
    loiteringDetectionLength: number;
    motionDetectionSensitivityMode: number;
    motionDetectionSensitivityStandard: number;
    motionDetectionSensitivityAdvancedA: number;
    motionDetectionSensitivityAdvancedB: number;
    motionDetectionSensitivityAdvancedC: number;
    motionDetectionSensitivityAdvancedD: number;
    motionDetectionSensitivityAdvancedE: number;
    motionDetectionSensitivityAdvancedF: number;
    motionDetectionSensitivityAdvancedG: number;
    motionDetectionSensitivityAdvancedH: number;
    loiteringCustomResponsePhoneNotification: boolean;
    loiteringCustomResponseAutoVoiceResponse: boolean;
    loiteringCustomResponseAutoVoiceResponseVoice: number;
    loiteringCustomResponseHomeBaseNotification: boolean;
    loiteringCustomResponseTimeFrom: string;
    loiteringCustomResponseTimeTo: string;
    deliveryGuard: boolean;
    deliveryGuardPackageGuarding: boolean;
    deliveryGuardPackageGuardingVoiceResponseVoice: number;
    deliveryGuardPackageGuardingActivatedTimeFrom: string;
    deliveryGuardPackageGuardingActivatedTimeTo: string;
    deliveryGuardUncollectedPackageAlert: boolean;
    deliveryGuardUncollectedPackageAlertTimeToCheck: string;
    deliveryGuardPackageLiveCheckAssistance: boolean;
    dualCamWatchViewMode: number;
    ringAutoResponse: boolean;
    ringAutoResponseVoiceResponse: boolean;
    ringAutoResponseVoiceResponseVoice: number;
    ringAutoResponseTimeFrom: string;
    ringAutoResponseTimeTo: string;
    defaultAngle: boolean;
    defaultAngleIdleTime: number;
    soundDetectionRoundLook: boolean;
    packageDelivered: boolean;
    packageStranded: boolean;
    packageTaken: boolean;
    someoneLoitering: boolean;
    radarMotionDetected: boolean;
    leftOpenAlarm: boolean;
    leftOpenAlarmDuration: number;
    dualUnlock: boolean;
    powerSave: boolean;
    interiorBrightness: number;
    interiorBrightnessDuration: number;
    tamperAlarm: number;
    remoteUnlock: boolean;
    remoteUnlockMasterPIN: boolean;
    alarmVolume: number;
    promptVolume: number;
    notificationUnlockByKey: boolean;
    notificationUnlockByPIN: boolean;
    notificationUnlockByFingerprint: boolean;
    notificationUnlockByApp: boolean;
    notificationDualUnlock: boolean;
    notificationDualLock: boolean;
    notificationWrongTryProtect: boolean;
    notificationJammed: boolean;
    jammedAlert: boolean;
    "911Alert": boolean;
    "911AlertEvent": boolean;
    shakeAlert: boolean;
    shakeAlertEvent: boolean;
    lowBatteryAlert: boolean;
    longTimeNotCloseAlert: boolean;
    wrongTryProtectAlert: boolean;
    videoTypeStoreToNAS: number;
    snooze: boolean;
    snoozeTime: number;
    identityPersonDetected: boolean;
    strangerPersonDetected: boolean;
    vehicleDetected: boolean;
    dogDetected: boolean;
    dogLickDetected: boolean;
    dogPoopDetected: boolean;
    detectionStatisticsWorkingDays: number;
    detectionStatisticsDetectedEvents: number;
    detectionStatisticsRecordedEvents: number;
}

type DevicePropertiesSchema1 = Modify<
DevicePropertiesSchema0,
{
    snoozeStartTime: number;
    snoozeHomebase: boolean;
    snoozeMotion: boolean;
    snoozeChime: boolean;
}
>;

type DevicePropertiesSchema2 = Modify<
DevicePropertiesSchema1,
{
    cellularRSSI: number;
    cellularSignalLevel: number;
    cellularSignal: string;
    cellularBand: string;
    cellularIMEI: string;
    cellularICCID: string;
}
>;

type DevicePropertiesSchema3 = Omit<
Modify<
DevicePropertiesSchema2,
{
    picture: Picture;
}>,
"pictureUrl"
>;

type DevicePropertiesSchema4 = Modify<
DevicePropertiesSchema3,
{
    lightSettingsManualLightingActiveMode: number;
    lightSettingsManualDailyLighting: number;
    lightSettingsManualColoredLighting: RGBColor;
    lightSettingsManualDynamicLighting: number;
    lightSettingsMotionLightingActiveMode: number;
    lightSettingsMotionDailyLighting: number;
    lightSettingsMotionColoredLighting: RGBColor;
    lightSettingsMotionDynamicLighting: number;
    lightSettingsScheduleLightingActiveMode: number;
    lightSettingsScheduleDailyLighting: number;
    lightSettingsScheduleColoredLighting: RGBColor;
    lightSettingsScheduleDynamicLighting: number;
    lightSettingsColoredLightingColors: RGBColor[];
    lightSettingsDynamicLightingThemes: DynamicLighting[];
    doorControlWarning: boolean;
    door1Open: boolean;
    door2Open: boolean;
    doorSensor1Status: number;
    doorSensor2Status: number;
    doorSensor1MacAddress: string;
    doorSensor2MacAddress: string;
    doorSensor1Name: string;
    doorSensor2Name: string;
    doorSensor1SerialNumber: string;
    doorSensor2SerialNumber: string;
    doorSensor1Version: string;
    doorSensor2Version: string;
    doorSensor1LowBattery: boolean;
    doorSensor2LowBattery: boolean;
    doorSensor1BatteryLevel: number;
    doorSensor2BatteryLevel: number;
}
>;

type DevicePropertiesSchema5 = Modify<
DevicePropertiesSchema4,
{
    locationCoordinates: string;
    locationAddress: string;
    locationLastUpdate: number;
    trackerType: number;
    leftBehindAlarm: boolean;
    findPhone: boolean;
}
>;

type DevicePropertiesSchema6 = Modify<
DevicePropertiesSchema5,
{
    notificationVehicle: boolean;
    flickerAdjustment: number;
    leavingDetection: boolean;
    leavingReactionNotification: boolean;
    leavingReactionStartTime: string;
    leavingReactionEndTime: string;
    someoneGoing: boolean;
    lockEventOrigin: number;
    beepVolume: number;
    nightvisionOptimization: boolean;
    nightvisionOptimizationSide: number;
    deliveries: number;
    openMethod: number;
    motionActivatedPrompt: boolean;
    open: boolean;
    openedByType: number;
    openedByName: string;
    tamperingAlert: boolean;
    lowTemperatureAlert: boolean;
    highTemperatureAlert: boolean;
    lidStuckAlert: boolean;
    pinIncorrectAlert: boolean;
    batteryFullyChargedAlert: boolean;
    isDeliveryDenied: boolean;
    hasMasterPin: boolean;
}
>;

export type DeviceProperties = 
  | DevicePropertiesSchema0
  | DevicePropertiesSchema1
  | DevicePropertiesSchema2
  | DevicePropertiesSchema3
  | DevicePropertiesSchema4
  | DevicePropertiesSchema5
  | DevicePropertiesSchema6;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dumpDeviceProperties = (device: Device, schemaVersion: number): DeviceProperties => {
    const base: DevicePropertiesSchema0 = {
        name: device.getPropertyValue(PropertyName.Name) as string,
        model: device.getPropertyValue(PropertyName.Model) as string,
        serialNumber: device.getPropertyValue(PropertyName.SerialNumber) as string,
        hardwareVersion: device.getPropertyValue(PropertyName.HardwareVersion) as string,
        softwareVersion: device.getPropertyValue(PropertyName.SoftwareVersion) as string,
        type: device.getPropertyValue(PropertyName.Type) as number,
        stationSerialNumber: device.getPropertyValue(PropertyName.DeviceStationSN) as string,
        battery: device.getPropertyValue(PropertyName.DeviceBattery) as number,
        batteryTemperature: device.getPropertyValue(PropertyName.DeviceBatteryTemp) as number,
        batteryLow: device.getPropertyValue(PropertyName.DeviceBatteryLow) as boolean,
        batteryIsCharging: device.getPropertyValue(PropertyName.DeviceBatteryIsCharging) as boolean,
        lastChargingDays: device.getPropertyValue(PropertyName.DeviceLastChargingDays) as number,
        lastChargingTotalEvents: device.getPropertyValue(PropertyName.DeviceLastChargingTotalEvents) as number,
        lastChargingRecordedEvents: device.getPropertyValue(PropertyName.DeviceLastChargingRecordedEvents) as number,
        lastChargingFalseEvents: device.getPropertyValue(PropertyName.DeviceLastChargingFalseEvents) as number,
        batteryUsageLastWeek: device.getPropertyValue(PropertyName.DeviceBatteryUsageLastWeek) as number,
        wifiRssi: device.getPropertyValue(PropertyName.DeviceWifiRSSI) as number,
        wifiSignalLevel: device.getPropertyValue(PropertyName.DeviceWifiSignalLevel) as number,
        enabled: device.getPropertyValue(PropertyName.DeviceEnabled) as boolean,
        antitheftDetection: device.getPropertyValue(PropertyName.DeviceAntitheftDetection) as boolean,
        autoNightvision: device.getPropertyValue(PropertyName.DeviceAutoNightvision) as boolean,
        nightvision: device.getPropertyValue(PropertyName.DeviceNightvision) as boolean,
        statusLed: device.getPropertyValue(PropertyName.DeviceStatusLed) as boolean,
        motionDetection: device.getPropertyValue(PropertyName.DeviceMotionDetection) as boolean,
        motionDetectionType: device.getPropertyValue(PropertyName.DeviceMotionDetectionType) as number,
        motionDetectionSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivity) as number,
        motionDetectionTypeHuman: device.getPropertyValue(PropertyName.DeviceMotionDetectionTypeHuman) as boolean,
        motionDetectionTypeHumanRecognition: device.getPropertyValue(PropertyName.DeviceMotionDetectionTypeHumanRecognition) as boolean,
        motionDetectionTypePet: device.getPropertyValue(PropertyName.DeviceMotionDetectionTypePet) as boolean,
        motionDetectionTypeVehicle: device.getPropertyValue(PropertyName.DeviceMotionDetectionTypeVehicle) as boolean,
        motionDetectionTypeAllOtherMotions: device.getPropertyValue(PropertyName.DeviceMotionDetectionTypeAllOtherMotions) as boolean,
        motionZone: device.getPropertyValue(PropertyName.DeviceMotionZone) as string,
        motionDetectionRange: device.getPropertyValue(PropertyName.DeviceMotionDetectionRange) as boolean,
        motionDetectionRangeStandardSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeStandardSensitivity) as number,
        motionDetectionRangeAdvancedLeftSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedLeftSensitivity) as number,
        motionDetectionRangeAdvancedMiddleSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedMiddleSensitivity) as number,
        motionDetectionRangeAdvancedRightSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedRightSensitivity) as number,
        motionDetectionTestMode: device.getPropertyValue(PropertyName.DeviceMotionDetectionTestMode) as boolean,
        motionDetected: device.getPropertyValue(PropertyName.DeviceMotionDetected) as boolean,
        motionTracking: device.getPropertyValue(PropertyName.DeviceMotionTracking) as boolean,
        motionTrackingSensitivity: device.getPropertyValue(PropertyName.DeviceMotionTrackingSensitivity) as number,
        motionAutoCruise: device.getPropertyValue(PropertyName.DeviceMotionAutoCruise) as boolean,
        motionOutOfViewDetection: device.getPropertyValue(PropertyName.DeviceMotionOutOfViewDetection) as boolean,
        personDetected: device.getPropertyValue(PropertyName.DevicePersonDetected) as boolean,
        personName: device.getPropertyValue(PropertyName.DevicePersonName) as string,
        rtspStream: device.getPropertyValue(PropertyName.DeviceRTSPStream) as boolean,
        rtspStreamUrl: device.getPropertyValue(PropertyName.DeviceRTSPStreamUrl) as string,
        watermark: device.getPropertyValue(PropertyName.DeviceWatermark) as number,
        pictureUrl: device.hasProperty(PropertyName.DevicePictureUrl) ? device.getPropertyValue(PropertyName.DevicePictureUrl) as string : "",
        state: device.getPropertyValue(PropertyName.DeviceState) as number,
        petDetection: device.getPropertyValue(PropertyName.DevicePetDetection) as boolean,
        petDetected: device.getPropertyValue(PropertyName.DevicePetDetected) as boolean,
        soundDetection: device.getPropertyValue(PropertyName.DeviceSoundDetection) as boolean,
        soundDetectionType: device.getPropertyValue(PropertyName.DeviceSoundDetectionType) as number,
        soundDetectionSensitivity: device.getPropertyValue(PropertyName.DeviceSoundDetectionSensitivity) as number,
        soundDetected: device.getPropertyValue(PropertyName.DeviceSoundDetected) as boolean,
        cryingDetected: device.getPropertyValue(PropertyName.DeviceCryingDetected) as boolean,
        sensorOpen: device.getPropertyValue(PropertyName.DeviceSensorOpen) as boolean,
        sensorChangeTime: device.getPropertyValue(PropertyName.DeviceSensorChangeTime) as number,
        motionSensorPirEvent: device.getPropertyValue(PropertyName.DeviceMotionSensorPIREvent) as number,
        locked: device.getPropertyValue(PropertyName.DeviceLocked) as boolean,
        ringing: device.getPropertyValue(PropertyName.DeviceRinging) as boolean,
        lockStatus: device.getPropertyValue(PropertyName.DeviceLockStatus) as number,
        light: device.getPropertyValue(PropertyName.DeviceLight) as boolean,
        microphone: device.getPropertyValue(PropertyName.DeviceMicrophone) as boolean,
        speaker: device.getPropertyValue(PropertyName.DeviceSpeaker) as boolean,
        speakerVolume: device.getPropertyValue(PropertyName.DeviceSpeakerVolume) as number,
        ringtoneVolume: device.getPropertyValue(PropertyName.DeviceRingtoneVolume) as number,
        audioRecording: device.getPropertyValue(PropertyName.DeviceAudioRecording) as boolean,
        powerSource: device.getPropertyValue(PropertyName.DevicePowerSource) as number,
        powerWorkingMode: device.getPropertyValue(PropertyName.DevicePowerWorkingMode) as number,
        chargingStatus: device.getPropertyValue(PropertyName.DeviceChargingStatus) as number,
        recordingEndClipMotionStops: device.getPropertyValue(PropertyName.DeviceRecordingEndClipMotionStops) as boolean,
        recordingClipLength: device.getPropertyValue(PropertyName.DeviceRecordingClipLength) as number,
        recordingRetriggerInterval: device.getPropertyValue(PropertyName.DeviceRecordingRetriggerInterval) as number,
        videoStreamingQuality: device.getPropertyValue(PropertyName.DeviceVideoStreamingQuality) as number,
        videoRecordingQuality: device.getPropertyValue(PropertyName.DeviceVideoRecordingQuality) as number,
        videoWdr: device.getPropertyValue(PropertyName.DeviceVideoWDR) as boolean,
        lightSettingsEnable: device.getPropertyValue(PropertyName.DeviceLightSettingsEnable) as boolean,
        lightSettingsBrightnessManual: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessManual) as number,
        lightSettingsColorTemperatureManual: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureManual) as number,
        lightSettingsBrightnessMotion: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessMotion) as number,
        lightSettingsColorTemperatureMotion: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureMotion) as number,
        lightSettingsBrightnessSchedule: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessSchedule) as number,
        lightSettingsColorTemperatureSchedule: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureSchedule) as number,
        lightSettingsMotionTriggered: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggered) as boolean,
        lightSettingsMotionActivationMode: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionActivationMode) as number,
        lightSettingsMotionTriggeredDistance: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggeredDistance) as number,
        lightSettingsMotionTriggeredTimer: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggeredTimer) as number,
        chimeIndoor: device.getPropertyValue(PropertyName.DeviceChimeIndoor) as boolean,
        chimeHomebase: device.getPropertyValue(PropertyName.DeviceChimeHomebase) as boolean,
        chimeHomebaseRingtoneVolume: device.getPropertyValue(PropertyName.DeviceChimeHomebaseRingtoneVolume) as number,
        chimeHomebaseRingtoneType: device.getPropertyValue(PropertyName.DeviceChimeHomebaseRingtoneType) as number,
        notificationType: device.getPropertyValue(PropertyName.DeviceNotificationType) as number,
        rotationSpeed: device.getPropertyValue(PropertyName.DeviceRotationSpeed) as number,
        imageMirrored: device.getPropertyValue(PropertyName.DeviceImageMirrored) as boolean,
        notificationPerson: device.getPropertyValue(PropertyName.DeviceNotificationPerson) as boolean,
        notificationPet: device.getPropertyValue(PropertyName.DeviceNotificationPet) as boolean,
        notificationAllOtherMotion: device.getPropertyValue(PropertyName.DeviceNotificationAllOtherMotion) as boolean,
        notificationCrying: device.getPropertyValue(PropertyName.DeviceNotificationCrying) as boolean,
        notificationAllSound: device.getPropertyValue(PropertyName.DeviceNotificationAllSound) as boolean,
        notificationIntervalTime: device.getPropertyValue(PropertyName.DeviceNotificationIntervalTime) as boolean,
        notificationRing: device.getPropertyValue(PropertyName.DeviceNotificationRing) as boolean,
        notificationMotion: device.getPropertyValue(PropertyName.DeviceNotificationMotion) as boolean,
        notificationRadarDetector: device.getPropertyValue(PropertyName.DeviceNotificationRadarDetector) as boolean,
        continuousRecording: device.getPropertyValue(PropertyName.DeviceContinuousRecording) as boolean,
        continuousRecordingType: device.getPropertyValue(PropertyName.DeviceContinuousRecordingType) as number,
        chirpVolume: device.getPropertyValue(PropertyName.DeviceChirpVolume) as number,
        chirpTone: device.getPropertyValue(PropertyName.DeviceChirpTone) as number,
        videoHdr: device.getPropertyValue(PropertyName.DeviceVideoHDR) as boolean,
        videoDistortionCorrection: device.getPropertyValue(PropertyName.DeviceVideoDistortionCorrection) as boolean,
        videoRingRecord: device.getPropertyValue(PropertyName.DeviceVideoRingRecord) as number,
        videoNightvisionImageAdjustment: device.getPropertyValue(PropertyName.DeviceVideoNightvisionImageAdjustment) as boolean,
        videoColorNightvision: device.getPropertyValue(PropertyName.DeviceVideoColorNightvision) as boolean,
        autoCalibration: device.getPropertyValue(PropertyName.DeviceAutoCalibration) as boolean,
        autoLock: device.getPropertyValue(PropertyName.DeviceAutoLock) as boolean,
        autoLockTimer: device.getPropertyValue(PropertyName.DeviceAutoLockTimer) as number,
        autoLockSchedule: device.getPropertyValue(PropertyName.DeviceAutoLockSchedule) as boolean,
        autoLockScheduleStartTime: device.getPropertyValue(PropertyName.DeviceAutoLockScheduleStartTime) as string,
        autoLockScheduleEndTime: device.getPropertyValue(PropertyName.DeviceAutoLockScheduleEndTime) as string,
        oneTouchLocking: device.getPropertyValue(PropertyName.DeviceOneTouchLocking) as boolean,
        wrongTryProtection: device.getPropertyValue(PropertyName.DeviceWrongTryProtection) as boolean,
        wrongTryAttempts: device.getPropertyValue(PropertyName.DeviceWrongTryAttempts) as number,
        wrongTryLockdownTime: device.getPropertyValue(PropertyName.DeviceWrongTryLockdownTime) as number,
        scramblePasscode: device.getPropertyValue(PropertyName.DeviceScramblePasscode) as boolean,
        sound: device.getPropertyValue(PropertyName.DeviceSound) as number,
        notification: device.getPropertyValue(PropertyName.DeviceNotification) as boolean,
        notificationUnlocked: device.getPropertyValue(PropertyName.DeviceNotificationUnlocked) as boolean,
        notificationLocked: device.getPropertyValue(PropertyName.DeviceNotificationLocked) as boolean,
        loiteringDetection: device.getPropertyValue(PropertyName.DeviceLoiteringDetection) as boolean,
        loiteringDetectionRange: device.getPropertyValue(PropertyName.DeviceLoiteringDetectionRange) as number,
        loiteringDetectionLength: device.getPropertyValue(PropertyName.DeviceLoiteringDetectionLength) as number,
        motionDetectionSensitivityMode: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityMode) as number,
        motionDetectionSensitivityStandard: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityStandard) as number,
        motionDetectionSensitivityAdvancedA: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedA) as number,
        motionDetectionSensitivityAdvancedB: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedB) as number,
        motionDetectionSensitivityAdvancedC: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedC) as number,
        motionDetectionSensitivityAdvancedD: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedD) as number,
        motionDetectionSensitivityAdvancedE: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedE) as number,
        motionDetectionSensitivityAdvancedF: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedF) as number,
        motionDetectionSensitivityAdvancedG: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedG) as number,
        motionDetectionSensitivityAdvancedH: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedH) as number,
        loiteringCustomResponsePhoneNotification: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponsePhoneNotification) as boolean,
        loiteringCustomResponseAutoVoiceResponse: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponse) as boolean,
        loiteringCustomResponseAutoVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponseVoice) as number,
        loiteringCustomResponseHomeBaseNotification: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseHomeBaseNotification) as boolean,
        loiteringCustomResponseTimeFrom: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseTimeFrom) as string,
        loiteringCustomResponseTimeTo: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseTimeTo) as string,
        deliveryGuard: device.getPropertyValue(PropertyName.DeviceDeliveryGuard) as boolean,
        deliveryGuardPackageGuarding: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuarding) as boolean,
        deliveryGuardPackageGuardingVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingVoiceResponseVoice) as number,
        deliveryGuardPackageGuardingActivatedTimeFrom: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeFrom) as string,
        deliveryGuardPackageGuardingActivatedTimeTo: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeTo) as string,
        deliveryGuardUncollectedPackageAlert: device.getPropertyValue(PropertyName.DeviceDeliveryGuardUncollectedPackageAlert) as boolean,
        deliveryGuardUncollectedPackageAlertTimeToCheck: device.getPropertyValue(PropertyName.DeviceDeliveryGuardUncollectedPackageAlertTimeToCheck) as string,
        deliveryGuardPackageLiveCheckAssistance: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageLiveCheckAssistance) as boolean,
        dualCamWatchViewMode: device.getPropertyValue(PropertyName.DeviceDualCamWatchViewMode) as number,
        ringAutoResponse: device.getPropertyValue(PropertyName.DeviceRingAutoResponse) as boolean,
        ringAutoResponseVoiceResponse: device.getPropertyValue(PropertyName.DeviceRingAutoResponseVoiceResponse) as boolean,
        ringAutoResponseVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceRingAutoResponseVoiceResponseVoice) as number,
        ringAutoResponseTimeFrom: device.getPropertyValue(PropertyName.DeviceRingAutoResponseTimeFrom) as string,
        ringAutoResponseTimeTo: device.getPropertyValue(PropertyName.DeviceRingAutoResponseTimeTo) as string,
        defaultAngle: device.getPropertyValue(PropertyName.DeviceDefaultAngle) as boolean,
        defaultAngleIdleTime: device.getPropertyValue(PropertyName.DeviceDefaultAngleIdleTime) as number,
        soundDetectionRoundLook: device.getPropertyValue(PropertyName.DeviceSoundDetectionRoundLook) as boolean,
        packageDelivered: device.getPropertyValue(PropertyName.DevicePackageDelivered) as boolean,
        packageStranded: device.getPropertyValue(PropertyName.DevicePackageStranded) as boolean,
        packageTaken: device.getPropertyValue(PropertyName.DevicePackageTaken) as boolean,
        someoneLoitering: device.getPropertyValue(PropertyName.DeviceSomeoneLoitering) as boolean,
        radarMotionDetected: device.getPropertyValue(PropertyName.DeviceRadarMotionDetected) as boolean,
        leftOpenAlarm: device.getPropertyValue(PropertyName.DeviceLeftOpenAlarm) as boolean,
        leftOpenAlarmDuration: device.getPropertyValue(PropertyName.DeviceLeftOpenAlarmDuration) as number,
        dualUnlock: device.getPropertyValue(PropertyName.DeviceDualUnlock) as boolean,
        powerSave: device.getPropertyValue(PropertyName.DevicePowerSave) as boolean,
        interiorBrightness: device.getPropertyValue(PropertyName.DeviceInteriorBrightness) as number,
        interiorBrightnessDuration: device.getPropertyValue(PropertyName.DeviceInteriorBrightnessDuration) as number,
        tamperAlarm: device.getPropertyValue(PropertyName.DeviceTamperAlarm) as number,
        remoteUnlock: device.getPropertyValue(PropertyName.DeviceRemoteUnlock) as boolean,
        remoteUnlockMasterPIN: device.getPropertyValue(PropertyName.DeviceRemoteUnlockMasterPIN) as boolean,
        alarmVolume: device.getPropertyValue(PropertyName.DeviceAlarmVolume) as number,
        promptVolume: device.getPropertyValue(PropertyName.DevicePromptVolume) as number,
        notificationUnlockByKey: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByKey) as boolean,
        notificationUnlockByPIN: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByPIN) as boolean,
        notificationUnlockByFingerprint: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByFingerprint) as boolean,
        notificationUnlockByApp: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByApp) as boolean,
        notificationDualUnlock: device.getPropertyValue(PropertyName.DeviceNotificationDualUnlock) as boolean,
        notificationDualLock: device.getPropertyValue(PropertyName.DeviceNotificationDualLock) as boolean,
        notificationWrongTryProtect: device.getPropertyValue(PropertyName.DeviceNotificationWrongTryProtect) as boolean,
        notificationJammed: device.getPropertyValue(PropertyName.DeviceNotificationJammed) as boolean,
        jammedAlert: device.getPropertyValue(PropertyName.DeviceJammedAlert) as boolean,
        "911Alert": device.getPropertyValue(PropertyName.Device911Alert) as boolean,
        "911AlertEvent": device.getPropertyValue(PropertyName.Device911AlertEvent) as boolean,
        shakeAlert: device.getPropertyValue(PropertyName.DeviceShakeAlert) as boolean,
        shakeAlertEvent: device.getPropertyValue(PropertyName.DeviceShakeAlertEvent) as boolean,
        lowBatteryAlert: device.getPropertyValue(PropertyName.DeviceLowBatteryAlert) as boolean,
        longTimeNotCloseAlert: device.getPropertyValue(PropertyName.DeviceLongTimeNotCloseAlert) as boolean,
        wrongTryProtectAlert: device.getPropertyValue(PropertyName.DeviceWrongTryProtectAlert) as boolean,
        videoTypeStoreToNAS: device.getPropertyValue(PropertyName.DeviceVideoTypeStoreToNAS) as number,
        snooze: device.getPropertyValue(PropertyName.DeviceSnooze) as boolean,
        snoozeTime: device.getPropertyValue(PropertyName.DeviceSnoozeTime) as number,
        identityPersonDetected: device.getPropertyValue(PropertyName.DeviceIdentityPersonDetected) as boolean,
        strangerPersonDetected: device.getPropertyValue(PropertyName.DeviceStrangerPersonDetected) as boolean,
        vehicleDetected: device.getPropertyValue(PropertyName.DeviceVehicleDetected) as boolean,
        dogDetected: device.getPropertyValue(PropertyName.DeviceDogDetected) as boolean,
        dogLickDetected: device.getPropertyValue(PropertyName.DeviceDogLickDetected) as boolean,
        dogPoopDetected: device.getPropertyValue(PropertyName.DeviceDogPoopDetected) as boolean,
        detectionStatisticsWorkingDays: device.getPropertyValue(PropertyName.DeviceDetectionStatisticsWorkingDays) as number,
        detectionStatisticsDetectedEvents: device.getPropertyValue(PropertyName.DeviceDetectionStatisticsDetectedEvents) as number,
        detectionStatisticsRecordedEvents: device.getPropertyValue(PropertyName.DeviceDetectionStatisticsRecordedEvents) as number,
    }

    if (schemaVersion <= 14) {
        return base;
    }

    const device1 = base as DevicePropertiesSchema1;
    device1.snoozeStartTime = device.getPropertyValue(PropertyName.DeviceSnoozeStartTime) as number;
    device1.snoozeHomebase = device.getPropertyValue(PropertyName.DeviceSnoozeHomebase) as boolean;
    device1.snoozeMotion = device.getPropertyValue(PropertyName.DeviceSnoozeMotion) as boolean;
    device1.snoozeChime = device.getPropertyValue(PropertyName.DeviceSnoozeChime) as boolean;

    if (schemaVersion <= 15) {
        return device1;
    }

    const device2 = device1 as DevicePropertiesSchema2;
    device2.cellularRSSI = device.getPropertyValue(PropertyName.DeviceCellularRSSI) as number;
    device2.cellularSignalLevel = device.getPropertyValue(PropertyName.DeviceCellularSignalLevel) as number;
    device2.cellularSignal = device.getPropertyValue(PropertyName.DeviceCellularSignal) as string;
    device2.cellularBand = device.getPropertyValue(PropertyName.DeviceCellularBand) as string;
    device2.cellularIMEI = device.getPropertyValue(PropertyName.DeviceCellularIMEI) as string;
    device2.cellularICCID = device.getPropertyValue(PropertyName.DeviceCellularICCID) as string;

    if (schemaVersion <= 16) {
        return device2;
    }

    delete device2["pictureUrl"];
    const device3 = device2 as DevicePropertiesSchema3;
    device3.picture = device.getPropertyValue(PropertyName.DevicePicture) as Picture;
    
    if (schemaVersion <= 18) {
        return device3;
    }

    const device4 = device3 as DevicePropertiesSchema4;
    device4.lightSettingsManualLightingActiveMode = device.getPropertyValue(PropertyName.DeviceLightSettingsManualLightingActiveMode) as number;
    device4.lightSettingsManualDailyLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsManualDailyLighting) as number;
    device4.lightSettingsManualColoredLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsManualColoredLighting) as RGBColor;
    device4.lightSettingsManualDynamicLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsManualDynamicLighting) as number;
    device4.lightSettingsMotionLightingActiveMode = device.getPropertyValue(PropertyName.DeviceLightSettingsMotionLightingActiveMode) as number;
    device4.lightSettingsMotionDailyLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsMotionDailyLighting) as number;
    device4.lightSettingsMotionColoredLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsMotionColoredLighting) as RGBColor;
    device4.lightSettingsMotionDynamicLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsMotionDynamicLighting) as number;
    device4.lightSettingsScheduleLightingActiveMode = device.getPropertyValue(PropertyName.DeviceLightSettingsScheduleLightingActiveMode) as number;
    device4.lightSettingsScheduleDailyLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsScheduleDailyLighting) as number;
    device4.lightSettingsScheduleColoredLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsScheduleColoredLighting) as RGBColor;
    device4.lightSettingsScheduleDynamicLighting = device.getPropertyValue(PropertyName.DeviceLightSettingsScheduleDynamicLighting) as number;
    device4.lightSettingsColoredLightingColors = device.getPropertyValue(PropertyName.DeviceLightSettingsColoredLightingColors) as RGBColor[];
    device4.lightSettingsDynamicLightingThemes = device.getPropertyValue(PropertyName.DeviceLightSettingsDynamicLightingThemes) as DynamicLighting[];
    device4.doorControlWarning = device.getPropertyValue(PropertyName.DeviceDoorControlWarning) as boolean;
    device4.door1Open = device.getPropertyValue(PropertyName.DeviceDoor1Open) as boolean;
    device4.door2Open = device.getPropertyValue(PropertyName.DeviceDoor2Open) as boolean;
    device4.doorSensor1Status = device.getPropertyValue(PropertyName.DeviceDoorSensor1Status) as number;
    device4.doorSensor2Status = device.getPropertyValue(PropertyName.DeviceDoorSensor2Status) as number;
    device4.doorSensor1MacAddress = device.getPropertyValue(PropertyName.DeviceDoorSensor1MacAddress) as string;
    device4.doorSensor2MacAddress = device.getPropertyValue(PropertyName.DeviceDoorSensor2MacAddress) as string;
    device4.doorSensor1Name = device.getPropertyValue(PropertyName.DeviceDoorSensor1Name) as string;
    device4.doorSensor2Name = device.getPropertyValue(PropertyName.DeviceDoorSensor2Name) as string;
    device4.doorSensor1SerialNumber = device.getPropertyValue(PropertyName.DeviceDoorSensor1SerialNumber) as string;
    device4.doorSensor2SerialNumber = device.getPropertyValue(PropertyName.DeviceDoorSensor2SerialNumber) as string;
    device4.doorSensor1Version = device.getPropertyValue(PropertyName.DeviceDoorSensor1Version) as string;
    device4.doorSensor2Version = device.getPropertyValue(PropertyName.DeviceDoorSensor2Version) as string;
    device4.doorSensor1LowBattery = device.getPropertyValue(PropertyName.DeviceDoorSensor1LowBattery) as boolean;
    device4.doorSensor2LowBattery = device.getPropertyValue(PropertyName.DeviceDoorSensor2LowBattery) as boolean;
    device4.doorSensor1BatteryLevel = device.getPropertyValue(PropertyName.DeviceDoorSensor1BatteryLevel) as number;
    device4.doorSensor2BatteryLevel = device.getPropertyValue(PropertyName.DeviceDoorSensor2BatteryLevel) as number;

    if (schemaVersion <= 19) {
        return device4;
    }

    // All schemas <= 20
    const device5 = device4 as DevicePropertiesSchema5;
    device5.locationCoordinates = device.getPropertyValue(PropertyName.DeviceLocationCoordinates) as string;
    device5.locationAddress = device.getPropertyValue(PropertyName.DeviceLocationAddress) as string;
    device5.locationLastUpdate = device.getPropertyValue(PropertyName.DeviceLocationLastUpdate) as number;
    device5.trackerType = device.getPropertyValue(PropertyName.DeviceTrackerType) as number;
    device5.leftBehindAlarm = device.getPropertyValue(PropertyName.DeviceLeftBehindAlarm) as boolean;
    device5.findPhone = device.getPropertyValue(PropertyName.DeviceFindPhone) as boolean;

    if (schemaVersion <= 20) {
        return device5;
    }

    // All schemas >= 21
    const device6 = device5 as DevicePropertiesSchema6;
    device6.notificationVehicle = device.getPropertyValue(PropertyName.DeviceNotificationVehicle) as boolean;
    device6.flickerAdjustment = device.getPropertyValue(PropertyName.DeviceFlickerAdjustment) as number;
    device6.leavingDetection = device.getPropertyValue(PropertyName.DeviceLeavingDetection) as boolean;
    device6.leavingReactionNotification = device.getPropertyValue(PropertyName.DeviceLeavingReactionNotification) as boolean;
    device6.leavingReactionStartTime = device.getPropertyValue(PropertyName.DeviceLeavingReactionStartTime) as string;
    device6.leavingReactionEndTime = device.getPropertyValue(PropertyName.DeviceLeavingReactionEndTime) as string;
    device6.someoneGoing = device.getPropertyValue(PropertyName.DeviceSomeoneGoing) as boolean;
    device6.lockEventOrigin = device.getPropertyValue(PropertyName.DeviceLockEventOrigin) as number;
    device6.beepVolume = device.getPropertyValue(PropertyName.DeviceBeepVolume) as number;
    device6.nightvisionOptimization = device.getPropertyValue(PropertyName.DeviceNightvisionOptimization) as boolean;
    device6.nightvisionOptimizationSide = device.getPropertyValue(PropertyName.DeviceNightvisionOptimizationSide) as number;
    device6.deliveries = device.getPropertyValue(PropertyName.DeviceDeliveries) as number;
    device6.openMethod = device.getPropertyValue(PropertyName.DeviceOpenMethod) as number;
    device6.motionActivatedPrompt = device.getPropertyValue(PropertyName.DeviceMotionActivatedPrompt) as boolean;
    device6.open = device.getPropertyValue(PropertyName.DeviceOpen) as boolean;
    device6.openedByType = device.getPropertyValue(PropertyName.DeviceOpenedByType) as number;
    device6.openedByName = device.getPropertyValue(PropertyName.DeviceOpenedByName) as string;
    device6.tamperingAlert = device.getPropertyValue(PropertyName.DeviceTamperingAlert) as boolean;
    device6.lowTemperatureAlert = device.getPropertyValue(PropertyName.DeviceLowTemperatureAlert) as boolean;
    device6.highTemperatureAlert = device.getPropertyValue(PropertyName.DeviceHighTemperatureAlert) as boolean;
    device6.lidStuckAlert = device.getPropertyValue(PropertyName.DeviceLidStuckAlert) as boolean;
    device6.pinIncorrectAlert = device.getPropertyValue(PropertyName.DevicePinIncorrectAlert) as boolean;
    device6.batteryFullyChargedAlert = device.getPropertyValue(PropertyName.DeviceBatteryFullyChargedAlert) as boolean;
    device6.isDeliveryDenied = device.getPropertyValue(PropertyName.DeviceIsDeliveryDenied) as boolean;
    device6.hasMasterPin = device.getPropertyValue(PropertyName.DeviceHasMasterPin) as boolean;

    return device6;
}

export const dumpDevicePropertiesMetadata = (device: Device, schemaVersion: number): IndexedProperty => {
    const metadata = device.getPropertiesMetadata(true);
    const result: IndexedProperty = {
        name: metadata[PropertyName.Name],
        model: metadata[PropertyName.Model],
        serialNumber: metadata[PropertyName.SerialNumber],
        hardwareVersion: metadata[PropertyName.HardwareVersion],
        softwareVersion: metadata[PropertyName.SoftwareVersion],
        type: metadata[PropertyName.Type],
        stationSerialNumber: metadata[PropertyName.DeviceStationSN],
        battery: metadata[PropertyName.DeviceBattery],
        batteryTemperature: metadata[PropertyName.DeviceBatteryTemp],
        batteryLow: metadata[PropertyName.DeviceBatteryLow],
        batteryIsCharging: metadata[PropertyName.DeviceBatteryIsCharging],
        lastChargingDays: metadata[PropertyName.DeviceLastChargingDays],
        lastChargingTotalEvents: metadata[PropertyName.DeviceLastChargingTotalEvents],
        lastChargingRecordedEvents: metadata[PropertyName.DeviceLastChargingRecordedEvents],
        lastChargingFalseEvents: metadata[PropertyName.DeviceLastChargingFalseEvents],
        batteryUsageLastWeek: metadata[PropertyName.DeviceBatteryUsageLastWeek],
        wifiRssi: metadata[PropertyName.DeviceWifiRSSI],
        wifiSignalLevel: metadata[PropertyName.DeviceWifiSignalLevel],
        enabled: metadata[PropertyName.DeviceEnabled],
        antitheftDetection: metadata[PropertyName.DeviceAntitheftDetection],
        autoNightvision: metadata[PropertyName.DeviceAutoNightvision],
        nightvision: metadata[PropertyName.DeviceNightvision],
        statusLed: metadata[PropertyName.DeviceStatusLed],
        motionDetection: metadata[PropertyName.DeviceMotionDetection],
        motionDetectionType: metadata[PropertyName.DeviceMotionDetectionType],
        motionDetectionSensitivity: metadata[PropertyName.DeviceMotionDetectionSensitivity],
        motionDetectionTypeHuman: metadata[PropertyName.DeviceMotionDetectionTypeHuman],
        motionDetectionTypeHumanRecognition: metadata[PropertyName.DeviceMotionDetectionTypeHumanRecognition],
        motionDetectionTypePet: metadata[PropertyName.DeviceMotionDetectionTypePet],
        motionDetectionTypeVehicle: metadata[PropertyName.DeviceMotionDetectionTypeVehicle],
        motionDetectionTypeAllOtherMotions: metadata[PropertyName.DeviceMotionDetectionTypeAllOtherMotions],
        motionZone: metadata[PropertyName.DeviceMotionZone],
        motionDetectionRange: metadata[PropertyName.DeviceMotionDetectionRange],
        motionDetectionRangeStandardSensitivity: metadata[PropertyName.DeviceMotionDetectionRangeStandardSensitivity],
        motionDetectionRangeAdvancedLeftSensitivity: metadata[PropertyName.DeviceMotionDetectionRangeAdvancedLeftSensitivity],
        motionDetectionRangeAdvancedMiddleSensitivity: metadata[PropertyName.DeviceMotionDetectionRangeAdvancedMiddleSensitivity],
        motionDetectionRangeAdvancedRightSensitivity: metadata[PropertyName.DeviceMotionDetectionRangeAdvancedRightSensitivity],
        motionDetectionTestMode: metadata[PropertyName.DeviceMotionDetectionTestMode],
        motionDetected: metadata[PropertyName.DeviceMotionDetected],
        motionTracking: metadata[PropertyName.DeviceMotionTracking],
        motionTrackingSensitivity: metadata[PropertyName.DeviceMotionTrackingSensitivity],
        motionAutoCruise: metadata[PropertyName.DeviceMotionAutoCruise],
        motionOutOfViewDetection: metadata[PropertyName.DeviceMotionOutOfViewDetection],
        personDetected: metadata[PropertyName.DevicePersonDetected],
        personName: metadata[PropertyName.DevicePersonName],
        rtspStream: metadata[PropertyName.DeviceRTSPStream],
        rtspStreamUrl: metadata[PropertyName.DeviceRTSPStreamUrl],
        watermark: metadata[PropertyName.DeviceWatermark],
        pictureUrl: metadata[PropertyName.DevicePictureUrl],
        state: metadata[PropertyName.DeviceState],
        petDetection: metadata[PropertyName.DevicePetDetection],
        petDetected: metadata[PropertyName.DevicePetDetected],
        soundDetection: metadata[PropertyName.DeviceSoundDetection],
        soundDetectionType: metadata[PropertyName.DeviceSoundDetectionType],
        soundDetectionSensitivity: metadata[PropertyName.DeviceSoundDetectionSensitivity],
        soundDetected: metadata[PropertyName.DeviceSoundDetected],
        cryingDetected: metadata[PropertyName.DeviceCryingDetected],
        sensorOpen: metadata[PropertyName.DeviceSensorOpen],
        sensorChangeTime: metadata[PropertyName.DeviceSensorChangeTime],
        motionSensorPirEvent: metadata[PropertyName.DeviceMotionSensorPIREvent],
        locked: metadata[PropertyName.DeviceLocked],
        ringing: metadata[PropertyName.DeviceRinging],
        lockStatus: metadata[PropertyName.DeviceLockStatus],
        light: metadata[PropertyName.DeviceLight],
        microphone: metadata[PropertyName.DeviceMicrophone],
        speaker: metadata[PropertyName.DeviceSpeaker],
        speakerVolume: metadata[PropertyName.DeviceSpeakerVolume],
        ringtoneVolume: metadata[PropertyName.DeviceRingtoneVolume],
        audioRecording: metadata[PropertyName.DeviceAudioRecording],
        powerSource: metadata[PropertyName.DevicePowerSource],
        powerWorkingMode: metadata[PropertyName.DevicePowerWorkingMode],
        chargingStatus: metadata[PropertyName.DeviceChargingStatus],
        recordingEndClipMotionStops: metadata[PropertyName.DeviceRecordingEndClipMotionStops],
        recordingClipLength: metadata[PropertyName.DeviceRecordingClipLength],
        recordingRetriggerInterval: metadata[PropertyName.DeviceRecordingRetriggerInterval],
        videoStreamingQuality: metadata[PropertyName.DeviceVideoStreamingQuality],
        videoRecordingQuality: metadata[PropertyName.DeviceVideoRecordingQuality],
        videoWdr: metadata[PropertyName.DeviceVideoWDR],
        lightSettingsEnable: metadata[PropertyName.DeviceLightSettingsEnable],
        lightSettingsBrightnessManual: metadata[PropertyName.DeviceLightSettingsBrightnessManual],
        lightSettingsColorTemperatureManual: metadata[PropertyName.DeviceLightSettingsColorTemperatureManual],
        lightSettingsBrightnessMotion: metadata[PropertyName.DeviceLightSettingsBrightnessMotion],
        lightSettingsColorTemperatureMotion: metadata[PropertyName.DeviceLightSettingsColorTemperatureMotion],
        lightSettingsBrightnessSchedule: metadata[PropertyName.DeviceLightSettingsBrightnessSchedule],
        lightSettingsColorTemperatureSchedule: metadata[PropertyName.DeviceLightSettingsColorTemperatureSchedule],
        lightSettingsMotionTriggered: metadata[PropertyName.DeviceLightSettingsMotionTriggered],
        lightSettingsMotionActivationMode: metadata[PropertyName.DeviceLightSettingsMotionActivationMode],
        lightSettingsMotionTriggeredDistance: metadata[PropertyName.DeviceLightSettingsMotionTriggeredDistance],
        lightSettingsMotionTriggeredTimer: metadata[PropertyName.DeviceLightSettingsMotionTriggeredTimer],
        chimeIndoor: metadata[PropertyName.DeviceChimeIndoor],
        chimeHomebase: metadata[PropertyName.DeviceChimeHomebase],
        chimeHomebaseRingtoneVolume: metadata[PropertyName.DeviceChimeHomebaseRingtoneVolume],
        chimeHomebaseRingtoneType: metadata[PropertyName.DeviceChimeHomebaseRingtoneType],
        notificationType: metadata[PropertyName.DeviceNotificationType],
        rotationSpeed: metadata[PropertyName.DeviceRotationSpeed],
        imageMirrored: metadata[PropertyName.DeviceImageMirrored],
        notificationPerson: metadata[PropertyName.DeviceNotificationPerson],
        notificationPet: metadata[PropertyName.DeviceNotificationPet],
        notificationAllOtherMotion: metadata[PropertyName.DeviceNotificationAllOtherMotion],
        notificationCrying: metadata[PropertyName.DeviceNotificationCrying],
        notificationAllSound: metadata[PropertyName.DeviceNotificationAllSound],
        notificationIntervalTime: metadata[PropertyName.DeviceNotificationIntervalTime],
        notificationRing: metadata[PropertyName.DeviceNotificationRing],
        notificationMotion: metadata[PropertyName.DeviceNotificationMotion],
        notificationRadarDetector: metadata[PropertyName.DeviceNotificationRadarDetector],
        continuousRecording: metadata[PropertyName.DeviceContinuousRecording],
        continuousRecordingType: metadata[PropertyName.DeviceContinuousRecordingType],
        chirpVolume: metadata[PropertyName.DeviceChirpVolume],
        chirpTone: metadata[PropertyName.DeviceChirpTone],
        videoHdr: metadata[PropertyName.DeviceVideoHDR],
        videoDistortionCorrection: metadata[PropertyName.DeviceVideoDistortionCorrection],
        videoRingRecord: metadata[PropertyName.DeviceVideoRingRecord],
        videoNightvisionImageAdjustment: metadata[PropertyName.DeviceVideoNightvisionImageAdjustment],
        videoColorNightvision: metadata[PropertyName.DeviceVideoColorNightvision],
        autoCalibration: metadata[PropertyName.DeviceAutoCalibration],
        autoLock: metadata[PropertyName.DeviceAutoLock],
        autoLockTimer: metadata[PropertyName.DeviceAutoLockTimer],
        autoLockSchedule: metadata[PropertyName.DeviceAutoLockSchedule],
        autoLockScheduleStartTime: metadata[PropertyName.DeviceAutoLockScheduleStartTime],
        autoLockScheduleEndTime: metadata[PropertyName.DeviceAutoLockScheduleEndTime],
        oneTouchLocking: metadata[PropertyName.DeviceOneTouchLocking],
        wrongTryProtection: metadata[PropertyName.DeviceWrongTryProtection],
        wrongTryAttempts: metadata[PropertyName.DeviceWrongTryAttempts],
        wrongTryLockdownTime: metadata[PropertyName.DeviceWrongTryLockdownTime],
        scramblePasscode: metadata[PropertyName.DeviceScramblePasscode],
        sound: metadata[PropertyName.DeviceSound],
        notification: metadata[PropertyName.DeviceNotification],
        notificationUnlocked: metadata[PropertyName.DeviceNotificationUnlocked],
        notificationLocked: metadata[PropertyName.DeviceNotificationLocked],
        loiteringDetection: metadata[PropertyName.DeviceLoiteringDetection],
        loiteringDetectionRange: metadata[PropertyName.DeviceLoiteringDetectionRange],
        loiteringDetectionLength: metadata[PropertyName.DeviceLoiteringDetectionLength],
        motionDetectionSensitivityMode: metadata[PropertyName.DeviceMotionDetectionSensitivityMode],
        motionDetectionSensitivityStandard: metadata[PropertyName.DeviceMotionDetectionSensitivityStandard],
        motionDetectionSensitivityAdvancedA: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedA],
        motionDetectionSensitivityAdvancedB: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedB],
        motionDetectionSensitivityAdvancedC: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedC],
        motionDetectionSensitivityAdvancedD: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedD],
        motionDetectionSensitivityAdvancedE: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedE],
        motionDetectionSensitivityAdvancedF: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedF],
        motionDetectionSensitivityAdvancedG: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedG],
        motionDetectionSensitivityAdvancedH: metadata[PropertyName.DeviceMotionDetectionSensitivityAdvancedH],
        loiteringCustomResponsePhoneNotification: metadata[PropertyName.DeviceLoiteringCustomResponsePhoneNotification],
        loiteringCustomResponseAutoVoiceResponse: metadata[PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponse],
        loiteringCustomResponseAutoVoiceResponseVoice: metadata[PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponseVoice],
        loiteringCustomResponseHomeBaseNotification: metadata[PropertyName.DeviceLoiteringCustomResponseHomeBaseNotification],
        loiteringCustomResponseTimeFrom: metadata[PropertyName.DeviceLoiteringCustomResponseTimeFrom],
        loiteringCustomResponseTimeTo: metadata[PropertyName.DeviceLoiteringCustomResponseTimeTo],
        deliveryGuard: metadata[PropertyName.DeviceDeliveryGuard],
        deliveryGuardPackageGuarding: metadata[PropertyName.DeviceDeliveryGuardPackageGuarding],
        deliveryGuardPackageGuardingVoiceResponseVoice: metadata[PropertyName.DeviceDeliveryGuardPackageGuardingVoiceResponseVoice],
        deliveryGuardPackageGuardingActivatedTimeFrom: metadata[PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeFrom],
        deliveryGuardPackageGuardingActivatedTimeTo: metadata[PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeTo],
        deliveryGuardUncollectedPackageAlert: metadata[PropertyName.DeviceDeliveryGuardUncollectedPackageAlert],
        deliveryGuardUncollectedPackageAlertTimeToCheck: metadata[PropertyName.DeviceDeliveryGuardUncollectedPackageAlertTimeToCheck],
        deliveryGuardPackageLiveCheckAssistance: metadata[PropertyName.DeviceDeliveryGuardPackageLiveCheckAssistance],
        dualCamWatchViewMode: metadata[PropertyName.DeviceDualCamWatchViewMode],
        ringAutoResponse: metadata[PropertyName.DeviceRingAutoResponse],
        ringAutoResponseVoiceResponse: metadata[PropertyName.DeviceRingAutoResponseVoiceResponse],
        ringAutoResponseVoiceResponseVoice: metadata[PropertyName.DeviceRingAutoResponseVoiceResponseVoice],
        ringAutoResponseTimeFrom: metadata[PropertyName.DeviceRingAutoResponseTimeFrom],
        ringAutoResponseTimeTo: metadata[PropertyName.DeviceRingAutoResponseTimeTo],
        defaultAngle: metadata[PropertyName.DeviceDefaultAngle],
        defaultAngleIdleTime: metadata[PropertyName.DeviceDefaultAngleIdleTime],
        soundDetectionRoundLook: metadata[PropertyName.DeviceSoundDetectionRoundLook],
        packageDelivered: metadata[PropertyName.DevicePackageDelivered],
        packageStranded: metadata[PropertyName.DevicePackageStranded],
        packageTaken: metadata[PropertyName.DevicePackageTaken],
        someoneLoitering: metadata[PropertyName.DeviceSomeoneLoitering],
        radarMotionDetected: metadata[PropertyName.DeviceRadarMotionDetected],
        leftOpenAlarm: metadata[PropertyName.DeviceLeftOpenAlarm],
        leftOpenAlarmDuration: metadata[PropertyName.DeviceLeftOpenAlarmDuration],
        dualUnlock: metadata[PropertyName.DeviceDualUnlock],
        powerSave: metadata[PropertyName.DevicePowerSave],
        interiorBrightness: metadata[PropertyName.DeviceInteriorBrightness],
        interiorBrightnessDuration: metadata[PropertyName.DeviceInteriorBrightnessDuration],
        tamperAlarm: metadata[PropertyName.DeviceTamperAlarm],
        remoteUnlock: metadata[PropertyName.DeviceRemoteUnlock],
        remoteUnlockMasterPIN: metadata[PropertyName.DeviceRemoteUnlockMasterPIN],
        alarmVolume: metadata[PropertyName.DeviceAlarmVolume],
        promptVolume: metadata[PropertyName.DevicePromptVolume],
        notificationUnlockByKey: metadata[PropertyName.DeviceNotificationUnlockByKey],
        notificationUnlockByPIN: metadata[PropertyName.DeviceNotificationUnlockByPIN],
        notificationUnlockByFingerprint: metadata[PropertyName.DeviceNotificationUnlockByFingerprint],
        notificationUnlockByApp: metadata[PropertyName.DeviceNotificationUnlockByApp],
        notificationDualUnlock: metadata[PropertyName.DeviceNotificationDualUnlock],
        notificationDualLock: metadata[PropertyName.DeviceNotificationDualLock],
        notificationWrongTryProtect: metadata[PropertyName.DeviceNotificationWrongTryProtect],
        notificationJammed: metadata[PropertyName.DeviceNotificationJammed],
        jammedAlert: metadata[PropertyName.DeviceJammedAlert],
        "911Alert": metadata[PropertyName.Device911Alert],
        "911AlertEvent": metadata[PropertyName.Device911AlertEvent],
        shakeAlert: metadata[PropertyName.DeviceShakeAlert],
        shakeAlertEvent: metadata[PropertyName.DeviceShakeAlertEvent],
        lowBatteryAlert: metadata[PropertyName.DeviceLowBatteryAlert],
        longTimeNotCloseAlert: metadata[PropertyName.DeviceLongTimeNotCloseAlert],
        wrongTryProtectAlert: metadata[PropertyName.DeviceWrongTryProtectAlert],
        videoTypeStoreToNAS: metadata[PropertyName.DeviceVideoTypeStoreToNAS],
        snooze: metadata[PropertyName.DeviceSnooze],
        snoozeTime: metadata[PropertyName.DeviceSnoozeTime],
        identityPersonDetected: metadata[PropertyName.DeviceIdentityPersonDetected],
        strangerPersonDetected: metadata[PropertyName.DeviceStrangerPersonDetected],
        vehicleDetected: metadata[PropertyName.DeviceVehicleDetected],
        dogDetected: metadata[PropertyName.DeviceDogDetected],
        dogLickDetected: metadata[PropertyName.DeviceDogLickDetected],
        dogPoopDetected: metadata[PropertyName.DeviceDogPoopDetected],
        detectionStatisticsWorkingDays: metadata[PropertyName.DeviceDetectionStatisticsWorkingDays],
        detectionStatisticsDetectedEvents: metadata[PropertyName.DeviceDetectionStatisticsDetectedEvents],
        detectionStatisticsRecordedEvents: metadata[PropertyName.DeviceDetectionStatisticsRecordedEvents],
    };

    if (schemaVersion <= 14) {
        return result;
    }

    result["snoozeStartTime"] = metadata[PropertyName.DeviceSnoozeStartTime];
    result["snoozeHomebase"] = metadata[PropertyName.DeviceSnoozeHomebase];
    result["snoozeMotion"] = metadata[PropertyName.DeviceSnoozeMotion];
    result["snoozeChime"] = metadata[PropertyName.DeviceSnoozeChime];

    if (schemaVersion <= 15) {
        return result;
    }
    
    result["cellularRSSI"] = metadata[PropertyName.DeviceCellularRSSI];
    result["cellularSignalLevel"] = metadata[PropertyName.DeviceCellularSignalLevel];
    result["cellularSignal"] = metadata[PropertyName.DeviceCellularSignal];
    result["cellularBand"] = metadata[PropertyName.DeviceCellularBand];
    result["cellularIMEI"] = metadata[PropertyName.DeviceCellularIMEI];
    result["cellularICCID"] = metadata[PropertyName.DeviceCellularICCID];

    if (schemaVersion <= 16) {
        return result;
    }

    delete result["pictureUrl"];
    result["picture"] = metadata[PropertyName.DevicePicture];

    if (schemaVersion <= 18) {
        return result;
    }

    result["lightSettingsManualLightingActiveMode"] = metadata[PropertyName.DeviceLightSettingsManualLightingActiveMode];
    result["lightSettingsManualDailyLighting"] = metadata[PropertyName.DeviceLightSettingsManualDailyLighting];
    result["lightSettingsManualColoredLighting"] = metadata[PropertyName.DeviceLightSettingsManualColoredLighting];
    result["lightSettingsManualDynamicLighting"] = metadata[PropertyName.DeviceLightSettingsManualDynamicLighting];
    result["lightSettingsMotionLightingActiveMode"] = metadata[PropertyName.DeviceLightSettingsMotionLightingActiveMode];
    result["lightSettingsMotionDailyLighting"] = metadata[PropertyName.DeviceLightSettingsMotionDailyLighting];
    result["lightSettingsMotionColoredLighting"] = metadata[PropertyName.DeviceLightSettingsMotionColoredLighting];
    result["lightSettingsMotionDynamicLighting"] = metadata[PropertyName.DeviceLightSettingsMotionDynamicLighting];
    result["lightSettingsScheduleLightingActiveMode"] = metadata[PropertyName.DeviceLightSettingsScheduleLightingActiveMode];
    result["lightSettingsScheduleDailyLighting"] = metadata[PropertyName.DeviceLightSettingsScheduleDailyLighting];
    result["lightSettingsScheduleColoredLighting"] = metadata[PropertyName.DeviceLightSettingsScheduleColoredLighting];
    result["lightSettingsScheduleDynamicLighting"] = metadata[PropertyName.DeviceLightSettingsScheduleDynamicLighting];
    result["lightSettingsColoredLightingColors"] = metadata[PropertyName.DeviceLightSettingsColoredLightingColors];
    result["lightSettingsDynamicLightingThemes"] = metadata[PropertyName.DeviceLightSettingsDynamicLightingThemes];
    result["doorControlWarning"] = metadata[PropertyName.DeviceDoorControlWarning];
    result["door1Open"] = metadata[PropertyName.DeviceDoor1Open];
    result["door2Open"] = metadata[PropertyName.DeviceDoor2Open];
    result["doorSensor1Status"] = metadata[PropertyName.DeviceDoorSensor1Status];
    result["doorSensor2Status"] = metadata[PropertyName.DeviceDoorSensor2Status];
    result["doorSensor1MacAddress"] = metadata[PropertyName.DeviceDoorSensor1MacAddress];
    result["doorSensor2MacAddress"] = metadata[PropertyName.DeviceDoorSensor2MacAddress];
    result["doorSensor1Name"] = metadata[PropertyName.DeviceDoorSensor1Name];
    result["doorSensor2Name"] = metadata[PropertyName.DeviceDoorSensor2Name];
    result["doorSensor1SerialNumber"] = metadata[PropertyName.DeviceDoorSensor1SerialNumber];
    result["doorSensor2SerialNumber"] = metadata[PropertyName.DeviceDoorSensor2SerialNumber];
    result["doorSensor1Version"] = metadata[PropertyName.DeviceDoorSensor1Version];
    result["doorSensor2Version"] = metadata[PropertyName.DeviceDoorSensor2Version];
    result["doorSensor1LowBattery"] = metadata[PropertyName.DeviceDoorSensor1LowBattery];
    result["doorSensor2LowBattery"] = metadata[PropertyName.DeviceDoorSensor2LowBattery];
    result["doorSensor1BatteryLevel"] = metadata[PropertyName.DeviceDoorSensor1BatteryLevel];
    result["doorSensor2BatteryLevel"] = metadata[PropertyName.DeviceDoorSensor2BatteryLevel];
    
    if (schemaVersion <= 19) {
        return result;
    }

    result["locationCoordinates"] = metadata[PropertyName.DeviceLocationCoordinates];
    result["locationAddress"] = metadata[PropertyName.DeviceLocationAddress];
    result["locationLastUpdate"] = metadata[PropertyName.DeviceLocationLastUpdate];
    result["trackerType"] = metadata[PropertyName.DeviceTrackerType];
    result["leftBehindAlarm"] = metadata[PropertyName.DeviceLeftBehindAlarm];
    result["findPhone"] = metadata[PropertyName.DeviceFindPhone];

    if (schemaVersion <= 20) {
        return result;
    }

    // All schemas >= 21
    result["notificationVehicle"] = metadata[PropertyName.DeviceNotificationVehicle];
    result["flickerAdjustment"] = metadata[PropertyName.DeviceFlickerAdjustment];
    result["leavingDetection"] = metadata[PropertyName.DeviceLeavingDetection];
    result["leavingReactionNotification"] = metadata[PropertyName.DeviceLeavingReactionNotification];
    result["leavingReactionStartTime"] = metadata[PropertyName.DeviceLeavingReactionStartTime];
    result["leavingReactionEndTime"] = metadata[PropertyName.DeviceLeavingReactionEndTime];
    result["someoneGoing"] = metadata[PropertyName.DeviceSomeoneGoing];
    result["lockEventOrigin"] = metadata[PropertyName.DeviceLockEventOrigin];
    result["beepVolume"] = metadata[PropertyName.DeviceBeepVolume];
    result["nightvisionOptimization"] = metadata[PropertyName.DeviceNightvisionOptimization];
    result["nightvisionOptimizationSide"] = metadata[PropertyName.DeviceNightvisionOptimizationSide];
    result["deliveries"] = metadata[PropertyName.DeviceDeliveries];
    result["openMethod"] = metadata[PropertyName.DeviceOpenMethod];
    result["motionActivatedPrompt"] = metadata[PropertyName.DeviceMotionActivatedPrompt];
    result["open"] = metadata[PropertyName.DeviceOpen];
    result["openedByType"] = metadata[PropertyName.DeviceOpenedByType];
    result["openedByName"] = metadata[PropertyName.DeviceOpenedByName];
    result["tamperingAlert"] = metadata[PropertyName.DeviceTamperingAlert];
    result["lowTemperatureAlert"] = metadata[PropertyName.DeviceLowTemperatureAlert];
    result["highTemperatureAlert"] = metadata[PropertyName.DeviceHighTemperatureAlert];
    result["lidStuckAlert"] = metadata[PropertyName.DeviceLidStuckAlert];
    result["pinIncorrectAlert"] = metadata[PropertyName.DevicePinIncorrectAlert];
    result["batteryFullyChargedAlert"] = metadata[PropertyName.DeviceBatteryFullyChargedAlert];
    result["isDeliveryDenied"] = metadata[PropertyName.DeviceIsDeliveryDenied];
    result["hasMasterPin"] = metadata[PropertyName.DeviceHasMasterPin];
    
    return result;
}