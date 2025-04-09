import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const Comunidade = () => {
  return (
    <View className="p-5 flex flex-col justify-end">
      {/* Header */}
      <View className="flex flex-row justify-between items-center h-14">
        <Text className="text-gray-600 font-medium text-3xl">Comunidades</Text>
        <View className="flex flex-row gap-8">
          <TouchableOpacity>
            <Icon name="more-vert" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Meus status */}
      <View className="mt-7">
        <TouchableOpacity className="flex flex-row gap-3 items-center h-14">
          <View>
            <View className="bg-gray-300 w-14 h-14 rounded-lg items-center justify-center relative">
              <Icon name="groups" size={28} color={"gray"} />
              <View className="bg-green-200 h-6 w-6 rounded-full absolute border-white border flex items-center justify-center -bottom-1 -right-2">
                <Icon name="add" color={"white"} />
              </View>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-xl">Nova Comunidade</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comunidade;
