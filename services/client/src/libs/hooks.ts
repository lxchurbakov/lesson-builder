import React from 'react';

export const useField = ([value, onChange], name) => {
    const fieldValue = React.useMemo(() => value[name], [value, name]);
    const fieldUpdater = React.useCallback(($) => onChange({ ...value, [name]: $ }), [onChange, value, name]);

    return React.useMemo(() => ([fieldValue, fieldUpdater] as const), [fieldValue, fieldUpdater]);
};

export const useIndexedField = ([value, onChange]) => {
    const get = React.useCallback((index) => value[index], [value]);
    const set = React.useCallback((index, $) => onChange(value.map(($$, j) => index === j ? $ : $$)), [onChange, value]);

    return React.useMemo(() => ([get, set] as const), [get, set]);
};
