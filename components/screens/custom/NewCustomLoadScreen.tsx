import { Alert, ScrollView, View } from "react-native";
import { useState } from "react";
import Page from "../../ui/Page";
import TextField from "../../ui/TextField";
import ActionButton from "../../ui/LinkButton";
import { useSQLiteContext } from "expo-sqlite";
import { NewCustomLoadData } from "../../../db/types";
import { AddCustomLoad } from "../../../db/custom_loads";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CustomLoadsStackParamList } from "./CustomLoadsStack";

type Props = NativeStackScreenProps<
  CustomLoadsStackParamList,
  "New Custom Load"
>;

export default function NewCustomLoadScreen({ navigation }: Props) {
  const db = useSQLiteContext();

  const [name, setName] = useState<string>("");
  const [cartridge, setCartridge] = useState<string>("");
  const [coal, setCoal] = useState<string>("");
  const [caseName, setCaseName] = useState<string>("");
  const [caseLen, setCaseLen] = useState<string>("");
  const [bullet, setBullet] = useState<string>("");
  const [powder, setPowder] = useState<string>("");
  const [primer, setPrimer] = useState<string>("");

  async function HandleSave() {
    const data: NewCustomLoadData = {
      name: name,
      status: "New",
      cartridge: cartridge,
      coal: coal,
      case_name: caseName,
      case_len: caseLen,
      bullet: bullet,
      powder: powder,
      primer: primer,
    };

    const err = await AddCustomLoad(db, data);

    if (err != null) {
      Alert.alert(err);
      return;
    }

    navigation.navigate("Custom Loads");
  }

  return (
    <Page>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View
          style={{ height: "100%", width: "100%", padding: 8, paddingEnd: 24 }}
        >
          <TextField
            label="Name"
            changeHandler={(value: string) => setName(value)}
            value={name}
          />
          <TextField
            label="Cartridge"
            changeHandler={(value: string) => setCartridge(value)}
            value={cartridge}
          />
          <TextField
            label="COAL"
            changeHandler={(value: string) => setCoal(value)}
            value={coal}
          />
          <TextField
            label="Case Name"
            changeHandler={(value: string) => setCaseName(value)}
            value={caseName}
          />
          <TextField
            label="Case Length"
            changeHandler={(value: string) => setCaseLen(value)}
            value={caseLen}
          />
          <TextField
            label="Bullet"
            changeHandler={(value: string) => setBullet(value)}
            value={bullet}
          />
          <TextField
            label="Powder"
            changeHandler={(value: string) => setPowder(value)}
            value={powder}
          />
          <TextField
            label="Primer"
            changeHandler={(value: string) => setPrimer(value)}
            value={primer}
          />
          <View
            style={{
              // flexDirection: "row",
              flexGrow: 1,
              padding: 24,
              gap: 16,
              maxWidth: "100%",
            }}
          >
            <ActionButton
              onPress={() => navigation.navigate("Custom Loads")}
              label="Cancel"
            />
            <ActionButton onPress={HandleSave} label="Save" />
          </View>
        </View>
      </ScrollView>
    </Page>
  );
}
