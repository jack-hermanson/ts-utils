import { ReactNode } from "react";

export interface AlertType {
    text?: string;
    color: string;
    children?: ReactNode;
}
