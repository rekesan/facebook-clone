import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export const RenderIcon = ({ isFocused, tabName }) => {
  let iconName: any;
  const size = 24;
  const color = isFocused ? "#1a74e4" : "#a8a8a8";
  switch (tabName) {
    case "feed":
      iconName = isFocused ? "md-home-sharp" : "md-home-outline";
      break;
    case "friend":
      iconName = isFocused ? "people" : "people-outline";
      break;
    case "watch":
      iconName = isFocused ? "md-tv-sharp" : "md-tv-outline";
      break;
    case "marketplace":
      iconName = isFocused ? "storefront" : "storefront-outline";
      return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
    case "notification":
      iconName = isFocused
        ? "md-notifications-sharp"
        : "md-notifications-outline";
      break;
    case "menu":
      iconName = isFocused ? "md-menu-sharp" : "md-menu-outline";
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};
