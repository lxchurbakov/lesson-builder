import React from 'react';

import { BaseProps, Flex, Card, Base, Clickable, Container, Text } from './libs/atoms';
import { TextInput } from './libs/inputs';
import { colors } from './libs/theme';

export type Input<T> = { value: T, onChange: (v: T) => void };
export type Option<T extends string> = { value: T, label: string };

const Tabs = <T extends string>({ options, value, onChange, ...props }: BaseProps & Input<T> & { options: Option<T>[] }) => {
    const select = React.useCallback((value: T) => () => {
        onChange(value);
    }, [onChange]);

    return (
        <Base style={{ borderBottom: '1px solid #ccc' }} {...props}>
            <Flex gap="12px" justify="flex-start" >   
                {options.map((option) => (
                    <Clickable style={{paddingBottom: 4,  borderBottom: option.value === value ? '1px solid #333' : 'none' }} onClick={select(option.value)} key={option.value}>
                        <Text size="16px" weight={option.value === value ? '800' : '400'} color={option.value === value ? colors.text : colors.grey}>{option.label}</Text>
                    </Clickable>
                ))}
            </Flex> 
        </Base>
    );
};

export type Mode = 'edit' | 'answer';

const MODE_OPTIONS = [
    { value: 'edit', label: 'Edit', },
    { value: 'answer', label: 'Answer', },
] as Option<Mode>[];

const Task = ({ mode, question, onChangeQuestion, answer, onChangeAnswer, onSubmit }) => {
    // const [question, setQuestion] = React.useState('');
    // const [value, setValue] = React.useState('');

    return (
        <Card background="#f0f0f0" p="16px" radius="4px" w="100%">
            {mode === 'edit' && (
                <Base>
                    <Text mb="8px" size="14px">Enter the question text:</Text>
                    <TextInput placeholder="Question" background="#e5e5e5" size="16px" value={question} onChange={onChangeQuestion} />
                </Base>
            )}

            {mode === 'answer' && (
                <Base>
                    <Text mb="8px" size="14px">The question:</Text>
                    <Text mb="24px" size="16px" weight="400">{question || 'Empty question'}</Text>

                    <Text mb="8px" size="14px">Your answer:</Text>
                    <TextInput mb="24px" placeholder="Question" background="#e5e5e5" size="16px" value={answer} onChange={onChangeAnswer} />

                    <Clickable onClick={onSubmit} mb="12px" background="#673ab7" p="8px 12px" radius="8px">
                        <Text color={colors.white}>Answer</Text>
                    </Clickable>
                </Base>
            )}
        </Card>            
    );
};

export default () => {
    const [mode, setMode] = React.useState('edit' as Mode);
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    const submit = React.useCallback(() => {
        console.log('Submit', question, answer);
    }, [question, answer]);

    return (
        <Container p="64px 0">
            <Base mb="24px">
                <Text size="32px" weight="800">Lesson Builder Pet Project</Text>
                <Text size="18px" weight="400">Build your lesson, share, complete and review the results.</Text>
            </Base>

            <Tabs<Mode> mb="24px" value={mode} onChange={setMode} options={MODE_OPTIONS} />

            <Task question={question} onChangeQuestion={setQuestion} answer={answer} onChangeAnswer={setAnswer} mode={mode} onSubmit={submit} />
        </Container>
    );
};
