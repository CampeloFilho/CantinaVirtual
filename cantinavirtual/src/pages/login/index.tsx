import React from "react";
import {View, Text, Image, TextInput} from "react-native";
import {style} from "./styles";
import Logo from "../../assets/logo.png";
export default function Login (){
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source ={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de Volta</Text>
            </View>
            <View style={style.boxMid}>
                <Text>Endereço de Email</Text>
                <TextInput
                    placeholder = "Digite seu endereço de email"
                />
                <Text>Senha</Text>
                <TextInput
                    placeholder = "Digite sua senha"
                    secureTextEntry={true}
                />
            </View>
            <View style={style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    );
}