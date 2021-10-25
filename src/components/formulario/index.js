import * as React from 'react';
import { View, TextInput } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { RectButtonProps } from 'react-native-gesture-handler';
import style from './styles';

type Props = RectButtonProps & {
    title: string;
}

export default function Formulario({ title }: Props) {

    const [importance, setImportance] = React.useState('');
    const [satisfaction, setSatisfaction] = React.useState('');
    return (
        <View>
            <Text style={style.titleP}>{title}</Text>
            <RadioButton.Group onValueChange={newValue => setImportance(newValue)} value={importance}>
                <Text style={style.title}>Nivel de Importância</Text>
                <View style={{ justifyContent: 'space-around' }}>
                    <RadioButton.Item label="Alta" value="alta" />
                    <RadioButton.Item label="Media" value="media" />
                    <RadioButton.Item label="Baixa" value="baixa" />
                </View>
            </RadioButton.Group>
            <RadioButton.Group onValueChange={newValue => setSatisfaction(newValue)} value={satisfaction}>
                <Text style={style.title}>Nivel de Satisfação</Text>
                <View style={{ justifyContent: 'center' }}>
                    <RadioButton.Item label="Ótimo" value="otimo" />
                    <RadioButton.Item label="Bom" value="bom" />
                    <RadioButton.Item label="Regular" value="regular" />
                    <RadioButton.Item label="Ruim" value="ruim" />
                    <RadioButton.Item label="Não se Aplica" value="nao_se_aplica" />
                </View>
            </RadioButton.Group>
            {satisfaction === 'regular' || satisfaction === 'ruim'
                ?
                <View>
                    <Text style={style.text}>
                        Seu feedback é importante para melhorar a qualidade do serviço prestado.
                    </Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite aqui"
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
                :
                null
            }
        </View>

    );
};