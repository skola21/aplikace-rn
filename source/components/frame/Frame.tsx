import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { TabContext } from '../../contexts/TabContext'

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },

    left: {
        flexDirection: 'column',
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

interface Tab {

}

interface FrameProps {
}

export const Frame: React.FunctionComponent<FrameProps> = (props) => {
    const [leftTabs, setLeftTabs] = React.useState<Tab[]>([])
    const [leftIndex, setLeftIndex] = React.useState<number | null>(null)

    const [rightTabs, setRightTabs] = React.useState<Tab[]>([])
    const [rightIndex, setRightIndex] = React.useState<number | null>(null)

    // pokud je nejaky tab vpravo a vlevo je to prazdne, presun vse vlevo a zrus taby vprav
    if (leftTabs.length === 0 && rightTabs.length > 0) {
        setLeftTabs([...rightTabs])
        setLeftIndex(0)
        setRightTabs([])
    }

    const cloud = (
        <View />
    )

    const right = rightTabs.length === 0 ? null : (
        <View style={styles.right}>
            <View style={styles.header}>
                <View>
                    {rightTabs.map((tab, index) => (<View />)) /* TODO tady se transformuje Tab objekt na komponentu */}
                </View>

                <View>
                    {/* tlacitko se sipkou dolu na taby co se nevesly*/}
                    {cloud}
                </View>
            </View>

            <View style={styles.content}>
                
            </View>
        </View>
    )

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
                        {/* TODO tlacitko se sipkou dolu pro taby co se nevesly */}
                        {rightTabs.length > 0 ? null : cloud}
                    </View>
                </View>

                <View style={styles.content}>
                    
                </View>
            </View>

            {right}
        </View>
    )
}
