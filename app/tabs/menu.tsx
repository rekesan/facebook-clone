import { View } from "dripsy";

import Header from "../header";
import { CustomButton } from "../../components/CustomButton";
import { useRouter } from "expo-router";

const Menu = () => {
  const router = useRouter()

  return (
    <View sx={{ alignItems: "center", gap: 10 }}>
      <Header
        title="Menu"
        settings
        search
        searchOnPress={() => null}
        settingsOnPress={() => null}
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />

      <CustomButton
        text="Log out"
        variant={["secondary", "width-90"]}
        textVariant={["darkFont"]}
        onPress={() => router.replace('../Login')}
      />
    </View>
  );
};

export default Menu;
