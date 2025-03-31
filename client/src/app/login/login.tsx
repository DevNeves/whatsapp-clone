import { useState } from "react";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Select from "../components/Select";

export interface Pais {
  nomePais: string;
  codPais: string;
}

const Login = () => {
  const [pais, setPais] = useState<Pais>({
    nomePais: "",
    codPais: "",
  });
  const [numero, setNumero] = useState<string>("");

  return (
    <View className="p-4 h-full w-full">
      <View>
        <Ionicons name="close" size={30} />
      </View>
      <View className="flex h-full justify-between mt-10">
        <View className="items-center">
          <Text className="font-medium text-3xl">Insira seu número de telefone</Text>
          <Text className="text-center color-slate-400 text-[1.3rem] p-5">
            O WhatsApp precisa confirmar seu número de telefone. Essa ação está sujeita á cobranças
            da sua operadora. Qual é o meu número de telefone ?
          </Text>
          <View className="mb-3">
            <Select setPais={setPais} pais={pais} />
            <View className="flex flex-row gap-4 h-14">
              <TextInput
                placeholder="+55"
                className="border-b-green-400 border-b w-10"
                value={pais.codPais}
              />
              <TextInput
                placeholder="Número de telefone"
                className="border-b-green-400 border-b w-48"
                value={numero}
                onChangeText={(e) => setNumero(e)}
              />
            </View>
          </View>
        </View>
        <Link href={"/login/verificacao"} asChild>
          <TouchableOpacity className="bg-green-400 p-3 w-full rounded-full mb-20">
            <Text className="color-white text-center font-medium text-lg">Avançar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Login;
