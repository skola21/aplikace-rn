import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { TabContext } from '../../contexts/TabContext'

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },

    header: {},

})

interface FrameProps {
    content: React.ReactNode
    rightPaneContent: React.ReactNode
}

export const Frame: React.FunctionComponent<FrameProps> = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View>
                    {/* tlacitko menu */}
                </View>

                <View>
                    {/* taby */}
                </View>

                <View>
                    {/* cloud */}
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.navigation}>
                </View>

                <View style={styles.content}>
                    <TabContext.Provider value={null}>
                        {props.content}
                    </TabContext.Provider>
                </View>

                <View style={styles.rightPane}>
                    {props.rightPaneContent}
                </View>
            </View>
        </View>
    )
}
