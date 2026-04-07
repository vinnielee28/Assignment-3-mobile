import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Portal, Dialog, Button, Text, PaperProvider } from 'react-native-paper';
import ChatView from "./ChatView";

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text>Hi from Rich</Text>
                <Portal>
                    <Dialog visible={visible} onDismiss={() => setVisible(false)} style={{ height: '80%' }}>
                        <Dialog.Title>Order Bot</Dialog.Title>
                        <Dialog.Content style={{ flex: 1 }}>
                            <ChatView />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setVisible(false)}>Dismiss</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => setVisible(true)}
                />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, minHeight: '100vh' },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
