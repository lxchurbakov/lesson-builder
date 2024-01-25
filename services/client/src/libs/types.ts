export type Input<T> = { value: T, onChange: (v: T) => void };
export type Option<T extends string> = { value: T, label: string };

export type Mode = 'edit' | 'answer';

export const MODES = [
    { value: 'edit', label: 'Edit', },
    { value: 'answer', label: 'Answer', },
] as Option<Mode>[];

export type Task = any;
