import { MotiView, View } from "moti";
import { Dimensions } from "react-native";

const Loading = ({ size }: { size: number }) => {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f2f2f2'
      }}
    >
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
        }}
        animate={{
          width: size + size * 0.2,
          height: size + size * 0.2,
          borderRadius: (size + size * 0.2) / 2,
          borderWidth: size / 8,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: (size + size * 0.2) / 2,
          borderWidth: size / 8,
          borderColor: "#a9a9a9",
        }}
      />
    </View>
  );
};

export default Loading;
