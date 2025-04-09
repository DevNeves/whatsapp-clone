import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import BotaoAdicionar from "../../components/Chats/BotaoAdicionar";

const Status = () => {
  return (
    <View className="p-5 flex flex-col justify-end">
      {/* Header */}
      <View className="flex flex-row justify-between items-center h-14">
        <Text className="text-gray-600 font-medium text-3xl">Atualizações</Text>
        <View className="flex flex-row gap-8">
          <TouchableOpacity>
            <Icon name="search" size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Meus status */}
      <View className="mt-7">
        <View className="flex flex-row items-center bg-gray-100 rounded-full h-14">
          <Text className="text-2xl text-gray-600 font-medium">Status</Text>
        </View>
        <TouchableOpacity className="flex flex-row gap-3">
          <View className="relative">
            <View className="bg-gray-400 w-14 h-14 rounded-full items-center justify-center">
              <Text>User</Text>
            </View>
            <View className="bg-green-200 h-6 w-6 rounded-full border-white border flex items-center justify-center bottom-6 left-9">
              <Icon name="add" color={"white"} />
            </View>
          </View>
          <View className="flex-1">
            <Text className="font-medium text-xl">Meu Status</Text>
            <Text>Pressione para adicionar um status</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Status  */}
      <ScrollView className="mt-4 h-full">
        {/* Atualizações recentes (nao vistas) */}
        <Text className="text-gray-400 text-xl mb-4">Atualizações Recentes</Text>

        <TouchableOpacity className="flex flex-row h-16 items-center gap-3 mb-4">
          <View className="bg-gray-400 w-14 h-14 rounded-full border-green-200 border-[3px] justify-center items-center">
            <Text>User</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-medium text-lg ">Victoria</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>18:25</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row h-16 items-center gap-3 mb-4">
          <View className="bg-gray-400 w-14 h-14 rounded-full border-green-200 border-[3px] justify-center items-center">
            <Text>User</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-medium text-lg ">Nicole</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>36 minutos atrás</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Atualizações já vistas  */}
        <Text className="text-gray-400 text-xl mb-4">Visto Recentemente</Text>

        <TouchableOpacity className="flex flex-row h-16 items-center gap-3 mb-4">
          <View className="bg-gray-200 w-14 h-14 rounded-full border-gray-300 border-[3px] justify-center items-center">
            <Text>User</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-medium text-lg ">Victoria</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>18:25</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row h-16 items-center gap-3 mb-4">
          <View className="bg-gray-200 w-14 h-14 rounded-full border-gray-300 border-[3px] justify-center items-center">
            <Text>User</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-medium text-lg ">Victoria</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>45 minutos atrás</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Botao add no canto */}
      <BotaoAdicionar icone="camera-alt" />
    </View>
  );
};

export default Status;
