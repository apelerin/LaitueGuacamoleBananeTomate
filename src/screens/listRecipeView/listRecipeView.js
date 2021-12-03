import React from 'react'
import {SafeAreaView, FlatList} from 'react-native'

import style from './listRecipeView.style'
import RecipeElementView from '../../components/recipeElement/recipeElementView'

const recipeList = [{id: 1, title: 'recette1', picture: 'https://www.themealdb.com/images/media/meals/1525876468.jpg'}, {id: 2, title: 'recette2', picture: 'https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg'}, {id: 3, title: 'recette3', picture: 'https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg'}]

const renderRecipeItem = (item) => {
    return <RecipeElementView recipe={item}/>
}

const listRecipeView = () => {
    return (
        <SafeAreaView style={style.mainContainer}>
            <FlatList data={recipeList} renderItem={({item}) => renderRecipeItem(item)}/>
        </SafeAreaView>
    )
}

export default listRecipeView
