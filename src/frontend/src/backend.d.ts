import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    addOwner(): Promise<void>;
    deleteMessage(id: bigint): Promise<void>;
    getAllMessages(): Promise<Array<Message>>;
    getContactInfo(): Promise<{
        email: string;
        company: string;
        address: string;
        pincode: string;
        phone1: string;
        phone2: string;
    }>;
    isOwner(user: Principal): Promise<boolean>;
    submitMessage(name: string, email: string, message: string, timestamp: bigint): Promise<bigint>;
}
