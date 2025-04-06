import { Text, TextInput, View } from "react-native";

const InputCodigo = () => {
  return (
    <TextInput
      className="bg-gray-200 w-12 h-16 rounded-2xl border-transparent focus:border-green-400 border-2"
      keyboardType="number-pad"
    />
  );
};

const LinhaVerificacao = () => {
  return (
    <View className="flex flex-row mt-10">
      <View className="flex flex-row gap-1">
        <InputCodigo />
        <InputCodigo />
        <InputCodigo />
        <InputCodigo />
      </View>
      <View className="flex items-center justify-center p-3">
        <Text className="font-bold text-3xl">-</Text>
      </View>
      <View className="flex flex-row gap-1">
        <InputCodigo />
        <InputCodigo />
        <InputCodigo />
        <InputCodigo />
      </View>
    </View>
  );
};

export default LinhaVerificacao;
