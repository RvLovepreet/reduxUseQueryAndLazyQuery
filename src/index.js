import React from 'react';
import {View, Text, SafeAreaView, FlatList, Button} from 'react-native';
import {useLazyGetAllCountryQuery, useGetCityQuery} from './service/FetchAPI';
const Main = () => {
  /*   const {data, error, isLoading} = useGetAllCountryQuery(); */
  const [uselazyfun, {data, error, isLoading}] = useLazyGetAllCountryQuery();
  const {
    data: cities,
    error: cityError,
    isLoading: cityLoading,
  } = useGetCityQuery('india');

  return (
    <SafeAreaView>
      <View>
        <Button onPress={() => uselazyfun()} title="fectAPI" />
        <Text>Main data</Text>
        {data ? (
          <FlatList
            data={data.data}
            renderItem={({item}) => <Text>{item.country}</Text>}
          />
        ) : isLoading ? (
          <Text>Data is loading</Text>
        ) : error ? (
          <Text>Opp Erroe</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Main;
