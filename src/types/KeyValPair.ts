import React from "react";

export interface KeyValPair {
    key: string;
    val: string | number | React.ReactNode;
    url?: {
        path: string;
        linkType: "internal" | "external";
    };
}
