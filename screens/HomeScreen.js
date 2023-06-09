import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
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
            </SafeAreaView >
        </View >
    );
}
export default HomeScreen;