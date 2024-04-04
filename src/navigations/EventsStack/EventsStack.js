import { createStackNavigator } from "@react-navigation/stack";
import EventDetailsScreen from "../../screens/EventDetailsScreen";
import EventsScreen from "../../screens/EventsScreen";

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Event" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}
