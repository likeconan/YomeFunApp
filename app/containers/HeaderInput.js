import React, { Component } from 'react';
import { View } from 'react-native';
import FormTextField from '../components/FormTextField';
import IconTextButton from '../components/IconTextButton';
import SearchIcon from '../components/Icons/SearchIcon';
import Styles from './Styles/HeaderInput';
import enumerator from '../lib/enumerator';

class HeaderInput extends Component {
    render() {
        const placeholder = enumerator.typePlaceholder[this.props.type]
        return (
            <View style={Styles.view}>
                <FormTextField
                    white={true}
                    placeholder={placeholder}
                    viewStyle={Styles.formView} />
                <View style={Styles.btnView}>
                    <IconTextButton color='transparent'>
                        <SearchIcon color='white' />
                    </IconTextButton>
                </View>
            </View>

        );
    }
}

export default HeaderInput;