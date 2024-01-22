import React from 'react';

import { Container, Text } from './libs/atoms';
import { TextInput } from './libs/inputs';

export default () => {
    const [value, setValue] = React.useState('');

    return (
        <Container>
            <Text>It works</Text>

            <TextInput background="#f0f0f0" size="14px" value={value} onChange={setValue} />
        </Container>
    );
};
