import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';

import { CalendarDaysIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
function HomeScreen() {
    const [showSearch, toggleSearch] = useState(false)
    const [locations, setLocations] = useState([1, 2, 3])
    const onSelectLocation = (loc) => {
        console.log(loc)
    }
    return (
        <View className="flex-1 relative">
            <StatusBar style='dark' />
            <Image
                blurRadius={70}
                source={require('../assets/images/bg.png')} className='absolute w-full h-full'></Image>
            <SafeAreaView className='flex flex-1'>
                {/* Search Section*/}
                {
                    BuildSearchSection()

                }
                {/* Forecast Section*/}
                {
                    BuildForceCastSection()
                }
            </SafeAreaView >
        </View >
    );

}


function BuildSearchSection() {
    const [showSearch, toggleSearch] = useState(false)
    const [locations, setLocations] = useState([1, 2, 3])
    const onSelectLocation = (loc) => {
        console.log(loc)
    }
    return (
        <View
            style={{
                height: '7%'
            }}
            className='mx-4 relative z-50'
        >
            <View className='flex-row justify-end items-center rounded-full'
                style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }}
            >
                {
                    showSearch ? (<TextInput placeholder='Search City' placeholderTextColor={'lightgray'}
                        className="pl-6 h-10 pb-1 flex-1 text-base text-white rounded-lg"
                    ></TextInput>) : null
                }

                <TouchableOpacity
                    onPress={() => {
                        toggleSearch(!showSearch)
                    }}
                    style={{
                        backgroundColor: theme.bgWhite(0.3),

                    }}
                    className='rounded-full p-3 m-1'>
                    <MagnifyingGlassIcon size="25" color="white"></MagnifyingGlassIcon>
                </TouchableOpacity>
            </View>
            <View>
                {
                    locations.length > 0 && showSearch ?

                        <View className="absolute w-full bg-gray-300 rounded-3xl top-2">
                            {

                                locations.map((loc, index) => {
                                    let showBorder = index + 1 != locations.length;
                                    let borderClass = showBorder ? 'border-b-2 border-b-grey-400' : ''
                                    return <TouchableOpacity
                                        onPress={() => {
                                            onSelectLocation(loc)
                                        }}
                                        key={index}
                                        className={'flex-row items-center border-0 p-3 px-4 mb-1 ' + borderClass}
                                    >
                                        <MapPinIcon size="25" color="gray"></MapPinIcon>
                                        <Text className="text-black text-lg ml-2">HaNoi, VietNam</Text>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                        : null
                }
            </View>
        </View>
    )
}


function BuildForceCastSection() {
    return (
        <View
            className="mx-4 flex justify-around flex-1 mb-2"
        >
            {/*Location*/}
            <Text className="text-white text-center text-2xl font-bold">HaNoi,
                <Text className="text-lg font-semibold text-gray-300">VietNam</Text>
            </Text>
            {/*Weather Image*/}
            <View className="flex-row justify-center">
                <Image
                    source={require('../assets/images/partlycloudy.png')}
                    className="w-52 h-52"
                ></Image>
            </View>
            {/*Degree Celcius*/}
            <View className="space-y-2">
                <Text className="text-center font-bold text-white text-6xl ml-5">23&#176;</Text>
                <View className="space-y-2">
                    <Text className="text-center text-white text-xl tracking-widest">Partly clouldy</Text>
                </View>
            </View>

            {/*Other Statstics*/}
            <View
                className="flex-row justify-between mx-4"
            >
                <View
                    className="flex-row space-x-2 items-center">
                    <Image
                        className="h-6 w-6"
                        source={require('../assets/icons/wind.png')}></Image>
                    <Text className="text-white font-semibold text-base">22km</Text>
                </View>

                <View
                    className="flex-row space-x-2 items-center">
                    <Image
                        className="h-6 w-6"
                        source={require('../assets/icons/drop.png')}></Image>
                    <Text className="text-white font-semibold text-base">23%</Text>
                </View>

                <View
                    className="flex-row space-x-2 items-center">
                    <Image
                        className="h-6 w-6"
                        source={require('../assets/icons/sun.png')}></Image>
                    <Text className="text-white font-semibold text-base">6:05 AM</Text>
                </View>
            </View>
            {/* Forecast for next day*/}
            <View className="mb-2 space-y-3">
                <View className="flex-row items-center mx-5 space-x-2">
                    <CalendarDaysIcon size="22" color="white"></CalendarDaysIcon>
                    <Text className="text-white text-base">Daily forecast</Text>
                </View>
                <ScrollView
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    showsHorizontalScrollIndicator={false}
                >
                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>

                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>

                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>

                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>

                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>

                    <View
                        className="flex justify-center w-24 rounded-3xl py-3 space-y-1 items-center mx-3"
                        style={{
                            backgroundColor: theme.bgWhite(0.2)
                        }}
                    >
                        <Image
                            className="h-11 w-11"
                            source={require('../assets/images/heavyrain.png')}></Image>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">13&#176;</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default HomeScreen;