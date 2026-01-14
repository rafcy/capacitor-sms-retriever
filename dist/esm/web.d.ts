import { WebPlugin } from '@capacitor/core';
import type { CapacitorSmsRetrieverPlugin, HashCodeResponse, PresentOptions, StartSuccessResponse } from './definitions';
export declare class CapacitorSmsRetrieverWeb extends WebPlugin implements CapacitorSmsRetrieverPlugin {
    startListening(): Promise<StartSuccessResponse>;
    stopListening(): Promise<void>;
    present(options?: PresentOptions): Promise<{
        code: string;
    }>;
    getHashCode(): Promise<HashCodeResponse>;
}
