import { IPeer } from "./peer";
import { IPeerSuspension } from "./peer-guard";

export interface IPeerStorage {
    getPeers(): IPeer[];
    hasPeers(): boolean;
    getPeer(ip: string): IPeer;
    setPeer(peer: IPeer): void;
    forgetPeer(peer: IPeer): void;
    hasPeer(ip: string): boolean;

    getPendingPeers(): IPeer[];
    hasPendingPeers(): boolean;
    getPendingPeer(ip: string): IPeer;
    setPendingPeer(peer: IPeer): void;
    forgetPendingPeer(peer: IPeer): void;
    hasPendingPeer(ip: string): boolean;

    getSuspendedPeers(): IPeerSuspension[];
    hasSuspendedPeers(): boolean;
    getSuspendedPeer(ip: string): IPeerSuspension;
    setSuspendedPeer(suspension: IPeerSuspension): void;
    forgetSuspendedPeer(suspension: IPeerSuspension): void;
    hasSuspendedPeer(ip: string): boolean;

    getSameSubnetPeers(ip: string): IPeer[];

    savePeers(): void;
}

export interface IPeerRepository<T> {
    all(): Map<string, T>;
    entries(): Array<[string, T]>;
    keys(): string[];
    values(): T[];

    pull(ip: string): T;
    get(ip: string): T;
    set(ip: string, peer: T): void;

    forget(ip: string): void;
    flush(): void;

    has(ip: string): boolean;
    missing(ip: string): boolean;
    count(): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;

    random(): T;

    toJson(): string;
}