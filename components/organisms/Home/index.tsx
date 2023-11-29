import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../molecules/user-header';
import { StackNavigationProp } from "@react-navigation/stack";
import AddHeader from '../../molecules/add-food-header/index';
import useFoodStorage from '../../../hooks/usedFoodStorage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState, useCallback, useEffect } from 'react';
import TodayCaloriesList from '../today-calories/today-calories';
import { TodayCaloriesProps } from "../../organisms/today-calories/today-calories";
import { Meal , RootStackParams } from '../../type';

const totalCalories =2000;

export default function Home({}) {
  const [todayFood, setTodayFood] = useState([]);
  const { onGetTodayFood } = useFoodStorage();
  const [todayStatistics, setTodayStatistics] = useState<TodayCaloriesProps>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();
  const calculateTodayStatistics = (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals.reduce((acum, curr) => acum + Number(curr.calories), 0);
      const remainingCalories = totalCalories - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCalories) * 100
      setTodayStatistics({
        total: totalCalories,
        consumed: caloriesConsumed,
        calories: remainingCalories,
        percentage: percentage
    });
    } catch (error) {
      console.error(error);
    }
  };


  const loadTodayFood = useCallback(async () => {
    try {
        const todayFoodResponse = (await onGetTodayFood()) as Meal[];
        calculateTodayStatistics(todayFoodResponse);
        setTodayFood(todayFoodResponse);
    } catch (error) {
        setTodayFood([]);
        console.error(error);
    }
}, [])

useFocusEffect(
    useCallback(() => {
        loadTodayFood().catch(null)
    }, [loadTodayFood])
    );
const handleAddCaloriesPress = () => {
      navigate('AddFood');
  }
  return (
    <View style={styles.container}>
     <Header />

    <AddHeader setVisible={true} />
   <TodayCaloriesList {...todayStatistics} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 12,
   marginTop: 10,
   backgroundColor: '#fff',
    
  },

});
