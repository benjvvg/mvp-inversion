import React from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartaInvestigacion from '../components/CartaInvestigacion';
import { misObjetivos } from '../data/objetivos';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.saludo}>Hola, Benjamín</Text>
                    <Text style={styles.totalLabel}>Patrimonio Total</Text>
                    <Text style={styles.montoTotal}>$5.550.000</Text>
                </View>

                <Text style={styles.seccionTitulo}>Tus Objetivos</Text>

                <FlatList 
                data={misObjetivos}
                key={(item) => item.id}
                renderItem={({ item }) => (
                    <CartaInvestigacion
                        nombre={item.nombre}
                        monto={item.monto}
                        ganancia={item.ganancia}
                        color={item.color}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6'
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10
    },
    header: {
        marginBottom: 30,
    },
    saludo: {
        fontSize: 14,
        color: '#6b720',
        marginBottom: 5,
    },
    totalLabel: {
        fontSize: 14,
        color: '#9ca3af',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    montoTotal: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#111827',
    },
    seccionTitulo: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 15,
    },
});