import { RnViewStyleProp } from "native-base";

export interface textButtonProps {
    active?: boolean;
    rounded?: boolean;
    success?: boolean;
    primary?: boolean;
    light?: boolean;
    danger?:boolean;
    text:string;
    style?: RnViewStyleProp | RnViewStyleProp[];
    onPress?: () => void;
}
