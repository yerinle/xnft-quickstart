import {Text} from "react-native";
import tw from "twrnc";

import {Screen} from "../components/Screen";
import {usePublicKeys} from "../hooks/xnft-hooks";

export function WalletScreen() {
    let publicKeys = usePublicKeys();
    console.log(`public keys ${publicKeys}`);
    return (
        <Screen>
            <Text style={tw`mb-4`}>
                Wallet Information Below:
            </Text>
        </Screen>
    );
}
