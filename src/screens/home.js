
import React, {useState, useEffect} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native";


// IMPORT ICONS
import {Feather, FontAwesome6} from '@expo/vector-icons';

export default function Home() {

    const router = useNavigation();

    const [notes, setNotes] = useState([
        {id: 1, title: 'Teste de título', text: 'Teste de texto'},
        {id: 2, title: 'Teste de título 2', text: 'Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto'},
    ]);

    
    const [search, setSearch] = useState(null);


    // MENU DATA
    const [menu, setMenu] = useState(false);

    const [categories, setCategories] = useState([]);


    const renderNotes = ({item, index}) => {
        return (
            <View 
                style={[styles.noteComponent]}
            >
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteText}>{item.text}</Text>
            </View>
        )
    }


    const renderCategories = ({item}) => {

    }


    return (
        <>
        {menu == true && (
                <View style={styles.menuArea}>
                    <View style={styles.overflow}/>

                    <View style={styles.menu}>
                            <View style={styles.userArea}>
                                <FontAwesome6 name="circle-user" size={30} color={'#000'}/>
                                <Text style={{marginLeft: 15}}>Nome de usuário</Text>
                            </View>

                            <View style={styles.categoriesArea}>
                                <Text>Categorias:</Text>

                                <FlatList
                                    data={categories}
                                    renderItem={renderCategories}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>

                            <TouchableOpacity style={styles.exitButton}>
                                <Text>Sair</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            )}

            <>
                <View style={styles.topArea}>
                    <TouchableOpacity style={styles.btnMenu} onPress={() => {console.log('MENU', menu); setMenu(!menu)}}>
                        <Feather name="menu" size={30} color={'#000'}/>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.input}
                        placeholder="Pesquisar..."
                        placeholderTextColor={'#999'}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <TouchableOpacity style={styles.btnAccount}>
                        <FontAwesome6 name="circle-user" size={30} color={'#000'}/>
                    </TouchableOpacity>

                </View>

                <View style={styles.notesArea}>
                    <FlatList
                        style={{height: '100%', marginTop: 30, alignSelf: 'center', padding: 10}}
                        data={notes}
                        numColumns={notes.length == 1 ? 1 : 2}
                        renderItem={renderNotes}
                        keyExtractor={(item) => item.id}
                    />
                </View>


                <TouchableOpacity style={styles.addButton}>
                    <Feather name="plus" size={24} color={'#333'}/>
                </TouchableOpacity>
            </>

            
        </>
    )
}


const styles = StyleSheet.create({
    topArea:{
        width: '85%',
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#666',
        shadowOpacity: 0.5,
        shadowOffset:{
            width: 0,
            height: 3,
        },
    },

    input:{
        width: '70%',
        height: 50,
    },



    /* NOTES AREA */
    noteComponent:{
        width: '45%',
        height: 'auto',
        padding: 15,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#666',
        shadowOpacity: 1,
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowRadius: 3,
        
    },


    addButton:{
        padding: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#666',
        shadowOpacity: 1,
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowRadius: 3,
    },





    // MENU CONFIG

    menuArea:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 2,
    },

    overflow:{
        width: '100%',
        height: '100%',
        backgroundColor: '#333',
        opacity: 0.5,
        zIndex: 3,
    },

    menu:{
        width: '70%',
        height: '100%',
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
        backgroundColor: '#fff',
        zIndex: 5,
    },


    // USER ÁREA
    userArea:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 50,
    },

    
})