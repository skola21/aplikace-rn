import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { TabContext } from '../../contexts/TabContext'

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },

    left: {
        flexDirection: 'row',
        backgroundColor: 'red',
    },

    right: {
        flexDirection: 'row',
    },

    header: {
        backgroundColor: 'lightgray',
    },

    content: {
        backgroundColor: 'white',
    },

    rightPane: {
        backgroundColor: 'darkgray',
    },
})

interface FrameProps {
    content: React.ReactNode
    rightPaneContent: React.ReactNode
}

export const Frame: React.FunctionComponent<FrameProps> = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.left}>
                <View style={styles.header}>
                    <View>
                        {/* tlacitko menu a home */}
                    </View>

                    <View>
                        {/* levy taby */}
                    </View>

                    <View>
                        {/* tlacitko se sipkou dolu na taby co se nevesly
                         pokud v right nic neni, tak tady i cloud */}
                    </View>
                </View>

                <View style={styles.content}>
                    
                </View>
            </View>

            <View style={styles.left}>
                <View style={styles.header}>
                    <View>
                        {/* pravy taby */}
                    </View>

                    <View>
                        {/* tlacitko se sipkou dolu na taby co se nevesly
                        tady vzdycky cloud */}
                    </View>
                </View>

                <View style={styles.content}>
                    
                </View>
            </View>
        </View>
    )
}
