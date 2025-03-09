import { FlatList, View } from "react-native";
import Page from "../../ui/Page";
import { SQLiteDatabase, useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { CustomLoad } from "../../../db/types";
import { GetRecentCustomLoads } from "../../../db/custom_loads";
import BodyText from "../../ui/BodyText";
import HeaderText from "../../ui/HeaderText";
import ActionButton from "../../ui/LinkButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CustomLoadsStackParamList } from "./CustomLoadsStack";

type Props = NativeStackScreenProps<CustomLoadsStackParamList, "Custom Loads">;

export default function CustomLoadsScreen({ navigation }: Props) {
  const db = useSQLiteContext();

  return (
    <Page>
      <View style={{ height: "10%", width: "100%" }}>
        <HeaderText>Custom Loads</HeaderText>
      </View>
      <View style={{ height: "90%", width: "100%" }}>
        <RecentCustomList db={db} />
        <ActionButton
          label="New Load"
          onPress={() => navigation.navigate("New Custom Load")}
        />
      </View>
      <View></View>
    </Page>
  );
}

function RecentCustomList({ db }: { db: SQLiteDatabase }) {
  const [loads, setLoads] = useState<CustomLoad[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoads(await GetRecentCustomLoads(db, 5));
    }
    fetchData();
  }, []);

  return (
    <FlatList
      data={loads}
      renderItem={(item) => <CustomLoadPreview load={item.item} />}
    />
  );
}

function CustomLoadPreview({ load }: { load: CustomLoad }) {
  return (
    <View>
      <BodyText>{load.name}</BodyText>
      <BodyText>{load.cartridge}</BodyText>
      <BodyText>{load.bullet}</BodyText>
      <BodyText>{load.updated_at}</BodyText>
    </View>
  );
}
