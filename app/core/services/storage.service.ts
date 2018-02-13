import { Injectable } from '@angular/core';

@Injectable()
export abstract class StorageService {

  constructor() {}

  abstract setItem<T>(key: string, value: T): void;

  abstract getItem<T>(key: string): T;

  abstract removeItem<T>(key: string, value: T): void;

  abstract key<T>(keyIndex: number): string;

  abstract clear(): void;
}
