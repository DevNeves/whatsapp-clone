import { Text, TouchableOpacity, View } from "react-native";
import LinhaVerificacao from "./components/LinhaVerificacao";
import { Link } from "expo-router";

const Verificacao = () => {
  return (
    <View className="p-4 h-full w-full">
      <Text className="text-left text-xl">
        Para receber o código, abre o Whatsapp no navegador ou em outro aparelho e clique em{" "}
        <Text className="font-bold">Conectar com número de telefone. </Text>
        <Text className="text-blue-300 font-bold text-xl">Saiba Mais</Text>
      </Text>
      <LinhaVerificacao />
      <View className="mt-20">
        <Link href={"/home/chats"} asChild>
          <TouchableOpacity className="bg-green-400 p-3 w-full rounded-full mb-20">
            <Text className="color-white text-center font-medium text-lg">Avançar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Verificacao;
