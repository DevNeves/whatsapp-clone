import { Text, TouchableOpacity, View } from "react-native";

type FiltroChatProps = {
  filtro: string;
  selecionado: boolean;
  onPress: () => void;
};

const FiltroChat = (props: FiltroChatProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        className={`${
          props.selecionado ? "bg-green-100" : "bg-gray-100"
        } p-2 pl-4 pr-4 rounded-full`}
      >
        <Text className={`${props.selecionado ? "color-green-400" : "color-gray-400"} font-medium`}>
          {props.filtro}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FiltroChat;
