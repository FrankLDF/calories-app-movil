import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import Header from '../../molecules/user-header';
import AddFoodHeader from '../../molecules/add-food-header';
import SearchBar from '../../molecules/search-bar';
import AddFoodModal from '../../molecules/add-food-modal';
import useFoodStorage from '../../../hooks/usedFoodStorage';
import MealItem from '../../organisms/meatitem';
import { Meal } from '../../type';

export default function AddFood() {
    const [visible, setVisible] = useState(false);
    const [foods, setFoods] = useState<Meal[]>([]);
    const {onGetFood} = useFoodStorage();
    const [search, setSearch] = useState<string>('');
    const loadFoods = async() => {
      try {
        const foodsResponse = await onGetFood();
        setFoods(foodsResponse);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      loadFoods().catch(null);
    }, []);

    const handleModalClose = async (shouldUpdate?: boolean) => {
      if (shouldUpdate) {
      Alert.alert('Food Saved succesfully');
      loadFoods();  
      try {
          const foodsResponse = await onGetFood();
          console.log(foodsResponse);
      } catch (error) {
        console.error(error);
      }
    
      }
      setVisible(false); 
    };
    const handleSearchPress = async () => {
      try {
        const result = await onGetFood();
        setFoods(result.filter((item: Meal) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
       
      } catch (error) {
        console.error(error);
        setFoods([]);
      }
    }
  return (
    <View style={styles.container}>
      <Header />
      <AddFoodHeader  setVisible={setVisible}/>
      <SearchBar
  value={search}
  handleSearchPress={handleSearchPress}
  onChangeText={(text) => setSearch(text)}
/>
     <ScrollView style={styles.content}>
     {foods?.map((meal, index) => <MealItem key={`my-meal-item-${index}-${meal.name}`} {...meal}/>)}
     </ScrollView>
      <AddFoodModal visible={visible}  onClose={handleModalClose}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
  },
  content:{
    
  },
});