import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type BotaoProps = {
  icone: keyof typeof MaterialIcons.glyphMap;
};

const BotaoAdicionar = (props: BotaoProps) => {
  return (
    <TouchableOpacity className="w-16 h-16 bg-green-200 absolute right-6 bottom-8 rounded-2xl flex items-center justify-center">
      <MaterialIcons name={props.icone} size={26} color={"white"} />
    </TouchableOpacity>
  );
};

export default BotaoAdicionar;
