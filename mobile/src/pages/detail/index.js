import React from 'react';
import {Feather} from '@expo/vector-icons'
import {Text,View,TouchableOpacity,Image} from 'react-native';

import styles from './style';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={()=>{}}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incidents}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD:</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>120 Mt</Text>

                <TouchableOpacity style={styles.detailButton} onPress={navagateToDetail}>
                    <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroText}>Salve o Dia!</Text>
                <Text style={styles.heroText}>Seja o heroi desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contacto:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}