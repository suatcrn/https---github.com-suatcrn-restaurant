import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <>
          <Text>{errorMessage}</Text>
        </>
      ) : (
        <>
          {results.length === 0 ? (
            <></>
          ) : (
            <>
            
              <ResultList
                title="Billiges Restaurants"
                results={filterResultByPrice("€")}
              />
              <ResultList
                title="Günstiges Restaurants"
                results={filterResultByPrice("€€")}
              />
              <ResultList
                title="Teuresten Restaurants"
                results={filterResultByPrice("€€€€")}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
