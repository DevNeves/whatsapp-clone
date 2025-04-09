import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useState } from "react";

import FiltroChat from "../../components/Chats/FiltroChat";
import BotaoAdicionar from "../../components/Chats/BotaoAdicionar";

const Chats = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState(1);

  return (
    <View className="p-5 flex flex-col justify-end">
      {/* Header */}
      <View className="flex flex-row justify-between items-center h-14">
        <Text className="text-green-400 font-bold text-4xl">Whatsapp</Text>
        <View className="flex flex-row gap-8">
          <TouchableOpacity>
            <Icon name="camera-alt" size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input pesquisa */}
      <View className="mt-7">
        <View className="flex flex-row items-center bg-gray-100 rounded-full h-14">
          <Icon name="search" size={28} className="ml-4" color={"#656769"} />
          <TextInput className="w-full text-xl" placeholder="Pergunte ao Meta IA ou Pesquise" />
        </View>
      </View>

      {/* Filtros */}
      <View className="flex flex-row mt-6 gap-2">
        <FiltroChat
          filtro={"Tudo"}
          selecionado={filtroSelecionado === 1}
          onPress={() => setFiltroSelecionado(1)}
        />
        <FiltroChat
          filtro={"Não Lidas"}
          selecionado={filtroSelecionado === 2}
          onPress={() => setFiltroSelecionado(2)}
        />
        <FiltroChat
          filtro={"Favoritos"}
          selecionado={filtroSelecionado === 3}
          onPress={() => setFiltroSelecionado(3)}
        />
        <FiltroChat
          filtro={"Grupos"}
          selecionado={filtroSelecionado === 4}
          onPress={() => setFiltroSelecionado(4)}
        />
        <TouchableOpacity>
          <View className="bg-gray-100 rounded-full w-14 h-9 items-center">
            <Icon name="add" size={28} color={"#656769"} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Chats */}
      <ScrollView className="mt-4 h-full">
        <TouchableOpacity className="flex flex-row h-16 items-center gap-3 mb-4">
          <View className="bg-gray-400 w-14 h-14 rounded-full items-center justify-center">
            <Text>User</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-medium text-lg ">+55 44 9999-9999</Text>
              <Text>18:23</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>v</Text>
              <Text>Lorem ipsum sit is</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Botao add no canto */}
      <BotaoAdicionar icone="add-box" />
    </View>
  );
};

export default Chats;
