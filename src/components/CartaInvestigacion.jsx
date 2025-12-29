import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CartaInvestigacion ({ nombre, monto, ganancia, color }) {
    const isNegative = ganancia.incluedes('-');
    const textColor = isNegative ? '#ef4444' : '#10b981';

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={[styles.iconIndicator, { backgroundColor: color }]} />
                <Text style={styles.cardTitle}>{nombre}</Text>
            </View>
            <Text style={styles.cardAmount}>{monto}</Text>
            <Text style={[styles.cardProfit, {color: textColor}]}>
                {ganancia}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
    cardProfit: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4,
    }
})