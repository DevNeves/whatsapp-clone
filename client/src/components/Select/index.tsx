import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

import { Pais } from "../../app/login";

interface SelectProps {
  setPais: React.Dispatch<React.SetStateAction<Pais>>;
  pais: Pais;
}
const Select = ({ setPais, pais }: SelectProps) => {
  const [modalVisivel, setModalVisivel] = useState(false);

  const paises = [
    {
      nomePais: "Brasil",
      codPais: "55",
    },
  ];

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisivel(true)}>
        <View className="flex flex-row items-center justify-between border-b-green-400 border-b p-2">
          {pais?.nomePais ? <Text>{pais.nomePais}</Text> : <Text>Escolha um país</Text>}
          <Ionicons name="arrow-down" />
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisivel} animationType="fade" transparent>
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white w-4/5 p-6 rounded-lg shadow-lg">
            <Text className="text-lg font-bold">Selecione um país</Text>
            <FlatList
              data={paises}
              keyExtractor={(item) => item.codPais}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setPais(item);
                    setModalVisivel(false);
                  }}
                  className="p-3 border-b border-gray-300"
                >
                  <Text>
                    {item.nomePais} (+{item.codPais})
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisivel(false)}
              className="mt-4 p-2 bg-green-400 rounded"
            >
              <Text className="text-white text-center">Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Select;
