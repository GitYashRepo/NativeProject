import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
// import { tokenCache } from "@clerk/clerk-expo/token-cache";
import * as SecureStore from "expo-secure-store";
import SafeScreen from "@/components/SafeScreen";

const tokenCache = {
  getToken: (key: any) => SecureStore.getItemAsync(key),
  saveToken: (key: any, value: string) => SecureStore.setItemAsync(key, value),
};

export default function RootLayout() {
  return (
    <ClerkProvider
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
    >
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
