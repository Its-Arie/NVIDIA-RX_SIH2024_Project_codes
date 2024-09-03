const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import WritingPad from "./screens/WritingPad";
import Profile from "./screens/Profile";
import LessonPlan2 from "./screens/LessonPlan2";
import AuthMain1 from "./screens/AuthMain1";
import Section from "./screens/Section";
import SignToText from "./screens/SignToText";
import LessonPlan1 from "./screens/LessonPlan1";
import TextToSpeech from "./screens/TextToSpeech";
import LessonPlan3 from "./screens/LessonPlan3";
import Mathematics from "./screens/Mathematics";
import NewsFeed from "./screens/NewsFeed";
import Welcome1 from "./screens/Welcome1";
import LearnSentences from "./screens/LearnSentences";
import Science from "./screens/Science";
import TextToSign from "./screens/TextToSign";
import SpeechToSign from "./screens/SpeechToSign";
import LessonPlan from "./screens/LessonPlan";
import DashboardGujrati from "./screens/DashboardGujrati";
import ImageTracking from "./screens/ImageTracking";
import Dashboard from "./screens/Dashboard";
import SearchMenu from "./screens/SearchMenu";
import AuthMain from "./screens/AuthMain";
import LearnWords from "./screens/LearnWords";
import LessonPlan4 from "./screens/LessonPlan4";
import Welcome from "./screens/Welcome";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WritingPad"
              component={WritingPad}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonPlan2"
              component={LessonPlan2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthMain1"
              component={AuthMain1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Section"
              component={Section}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignToText"
              component={SignToText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonPlan1"
              component={LessonPlan1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TextToSpeech"
              component={TextToSpeech}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonPlan3"
              component={LessonPlan3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mathematics"
              component={Mathematics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsFeed"
              component={NewsFeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome1"
              component={Welcome1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LearnSentences"
              component={LearnSentences}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Science"
              component={Science}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TextToSign"
              component={TextToSign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpeechToSign"
              component={SpeechToSign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonPlan"
              component={LessonPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardGujrati"
              component={DashboardGujrati}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ImageTracking"
              component={ImageTracking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchMenu"
              component={SearchMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthMain"
              component={AuthMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LearnWords"
              component={LearnWords}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonPlan4"
              component={LessonPlan4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
