import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import { Badge, Surface, Text, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const IconSize = 24;

export const Header = ({
	style,
	menu,
	onPressMenu,
	back,
	onPressBack,
	title,
	right,
	rightComponent,
	onRightPress,
	optionalBtn,
	optionalBtnPress,
	headerBg = "#fefaf9",
	iconColor = 'black',
	titleAlight,
	optionalBadge,
    profil,
    navigation,
}) => {


	const user = JSON.parse(localStorage.getItem('user'));

	const LeftView = () => (
		<View style={styles.view}>
			{menu && <TouchableOpacity onPress={onPressMenu}>
				<Feather name="menu" size={IconSize} color={iconColor} />
			</TouchableOpacity>}
			{back && 
                <TouchableOpacity onPress={onPressBack}>
                    <Feather name="arrow-left" size={IconSize} color={iconColor} />
                </TouchableOpacity>
            }
            {profil &&
                <View style={styles.profilContainer}>

                    <Pressable activeOpacity={1} onPress={() => navigation.navigate('Login')} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: user?.image?.url}} />
                        </View>
                    </Pressable>

                    <View style={styles.greetings}>
                        <Text style={{ fontSize: 12.5, color: 'gray', marginBottom: 3 }}>
                            Bienvenue
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500}}>
                            {user?.firstname + ' ' + user?.lastname}
                        </Text>
                    </View>

                </View>
            }
		</View>
	)
	const RightView = () => (
		rightComponent ? rightComponent :
			<View style={[styles.view, styles.rightView]}>
				{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
					<Feather name={optionalBtn} size={IconSize} color={iconColor} />
					{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
				</TouchableOpacity>}
				{right !== '' && <TouchableOpacity onPress={onRightPress}>
					<Feather name={right} size={IconSize} color={iconColor} />
				</TouchableOpacity>}
			</View>
	)
	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
		</View>
	)
	return (
		<Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
			<LeftView />
            {title && 
              <TitleView />
            }
			{/* <RightView /> */}
		</Surface>
	)
}


const styles = StyleSheet.create({
	header: {
		height: 65,
		elevation: 0,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
        fontFamily: 'lucida grande',
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleView: {
		flex: 1,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},

    profilContainer:{
        width: 200,
        display: 'flex',
		flexDirection: 'row',
        marginRight: 5,

    },

    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#ede6e7",
        marginRight: 10,

    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    greetings: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

})