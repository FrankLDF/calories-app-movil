import React, {FC} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MealItem from '../meal-item';
import {Meal} from '../../../types';

type TodayMealsProps = {
  foods: Meal[];
  onCompleteAddRemove?: () => void;
};

const TodayMeals: FC<TodayMealsProps> = ({foods, onCompleteAddRemove}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meals</Text>
      <ScrollView style={styles.content}>
        {foods?.map((meal: Meal, index) => (
          <MealItem
            key={`today-meal-item-${meal.name}-${index}`}
            {...meal}
            onCompleteAddRemove={onCompleteAddRemove}
            itemPosition={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  content: {
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default TodayMeals;
