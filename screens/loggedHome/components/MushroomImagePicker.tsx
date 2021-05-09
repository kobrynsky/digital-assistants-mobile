import React, { useEffect } from "react";
import { Image, View, Platform, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import StyledButton from "../../../components/StyledButton";
import { useDispatch, useSelector } from "react-redux";
import {
  clearShroomsState,
  setImageUrl,
} from "../../../state/shrooms/shrooms.slice";
import { RootState } from "../../../state/root.reducer";
import { StatusType } from "../../../state/_utils/statusType";
import { ScrollView } from "react-native-gesture-handler";

export interface MushroomImagePickerProps {
  checkShroom: Function;
  checkShroomStatus: StatusType;
  predictedClass: string;
  percentageProbability: number;
}

const MushroomImagePicker = ({
  checkShroom,
  checkShroomStatus,
  predictedClass,
  percentageProbability,
}: MushroomImagePickerProps) => {
  const dispatch = useDispatch();

  const imageUrl = useSelector((state: RootState) => state.shrooms.imageUrl);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [16, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(clearShroomsState());
      dispatch(setImageUrl(result.uri));
    }
  };

  const getShroomDescription = () => {
    if (checkShroomStatus == StatusType.SUCCESS) {
      switch (predictedClass) {
        case "Agaricus":
          return `
            Agaricus is a genus of mushrooms containing both edible and poisonous species, with possibly over 300 members worldwide. The genus includes the common (\"button\") mushroom (Agaricus bisporus) and the field mushroom (A. campestris), the dominant cultivated mushrooms of the West.

            Members of Agaricus are characterized by having a fleshy cap or pileus, from the underside of which grow a number of radiating plates or gills on which are produced the naked spores. They are distinguished from other members of their family, Agaricaceae, by their chocolate-brown spores. Members of Agaricus also have a stem or stipe, which elevates it above the object on which the mushroom grows, or substrate, and a partial veil, which protects the developing gills and later forms a ring or annulus on the stalk.
        `;
        case "Amanita":
          return `
            The genus Amanita contains about 600 species of agarics, including some of the most toxic known mushrooms found worldwide, as well as some well-regarded edible species. This genus is responsible for approximately 95% of the fatalities resulting from mushroom poisoning, with the death cap accounting for about 50% on its own. The most potent toxin present in these mushrooms is α-amanitin.

            The genus also contains many edible mushrooms, but mycologists discourage mushroom hunters, other than knowledgeable experts, from selecting any of these for human consumption. Nonetheless, in some cultures, the larger local edible species of Amanita are mainstays of the markets in the local growing season. Samples of this are Amanita zambiana and other fleshy species in central Africa, A. basii and similar species in Mexico, A. caesarea and the \"Blusher\" Amanita rubescens in Europe, and A. chepangiana in South-East Asia. Other species are used for colouring sauces, such as the red A. jacksonii, with a range from eastern Canada to eastern Mexico.
          `;
        case "Boletus":
          return `
            Boletus is a genus of mushroom-producing fungi, comprising over 100 species. The genus Boletus was originally broadly defined and described by Carl Linnaeus in 1753, essentially containing all fungi with hymenial pores instead of gills. Since then, other genera have been defined gradually, such as Tylopilus by Petter Adolf Karsten in 1881, and old names such as Leccinum have been resurrected or redefined. Some mushrooms listed in older books as members of the genus have now been placed in separate genera. These include such as Boletus scaber, now Leccinum scabrum, Tylopilus felleus, Chalciporus piperatus and Suillus luteus. Most boletes have been found to be ectomycorrhizal fungi, which mean that they form a mutualistic relationship with the roots system of certain kinds of plants. More recently, Boletus has been found to be massively polyphyletic, with only a small percentage of the over 300 species that have been assigned to Boletus actually belonging there and necessitating the description and resurrection of many more genera.
          `;
        case "Cortinarius":
          return `
            Cortinarius is a globally distributed genus of mushrooms in the family Cortinariaceae. It is suspected to be the largest genus of agarics, containing over 2,000 widespread species. A common feature among all species in the genus Cortinarius is that young specimens have a cortina (veil) between the cap and the stem, hence the name, meaning curtained. Most of the fibres of the cortina are ephemeral and will leave no trace once gone, except for limited remnants on the stem or cap edge in some species. All have a rusty brown spore print. The common names cortinar and webcap refer to members of the genus. Due to dangerous toxicity of several species (such as Cortinarius orellanus) and the fact that it is difficult to distinguish between various species of the genus, non-expert consumption of mushrooms from the genus is discouraged.
          `;
        case "Entoloma":
          return `
            Entoloma is a large genus of terrestrial pink-gilled mushrooms, with about 1,000 species. Most have a drab appearance, pink gills which are attached to the stem, a smooth thick cap, and angular spores. Many entolomas are saprobic but some are mycorrhizal. The best-known member of the genus is the livid agaric (Entoloma sinuatum), responsible for a number of poisonings over the years in Europe and North America, and Entoloma rhodopolium in Japan. Some southern hemisphere species such as Entoloma rodwayi and Entoloma viridomarginatum from Australia, and Entoloma hochstetteri from New Zealand, are very colourful, with caps of unusual shades of green and blue-green. Most entolomas are dull shades of olive, brown, or grey.
          `;
        case "Hygrocybe":
          return `
            Hygrocybe is a genus of agarics (gilled fungi) in the family Hygrophoraceae. Called waxcaps in English (sometimes waxy caps in North America), basidiocarps (fruit bodies) are often brightly coloured and have waxy to slimy caps, white spores, and smooth, ringless stems. In Europe they are characteristic of old, unimproved grasslands (termed waxcap grasslands) which are a declining habitat, making many Hygrocybe species of conservation concern. Elsewhere they are more typically found in woodlands. Most are ground-dwelling and all are believed to be moss associates. Around 150 species are recognized worldwide. Fruit bodies of several Hygrocybe species are considered edible and are sometimes offered for sale in local markets.
          `;
        case "Lactarius":
          return `
            Lactarius is a genus of mushroom-producing, ectomycorrhizal fungi, containing several edible species. The species of the genus, commonly known as milk-caps, are characterized by the milky fluid (\"latex\") they exude when cut or damaged. Like the closely related genus Russula, their flesh has a distinctive brittle consistency. It is a large genus with over 500 known species, mainly distributed in the Northern hemisphere. Recently, the genus Lactifluus has been separated from Lactarius based on molecular phylogenetic evidence.
          `;
        case "Russula":
          return `
            Around 750 worldwide species of ectomycorrhizal mushrooms compose the genus Russula. They are typically common, fairly large, and brightly colored – making them one of the most recognizable genera among mycologists and mushroom collectors. Their distinguishing characteristics include usually brightly coloured caps, a white to dark yellow spore print, brittle, attached gills, an absence of latex, and absence of partial veil or volva tissue on the stem. Microscopically, the genus is characterised by the amyloid ornamented spores and flesh (trama) composed of spherocysts. Members of the related genus Lactarius have similar characteristics but emit a milky latex when their gills are broken. The genus was described by Christian Hendrik Persoon in 1796.
          `;
        case "Suillus":
          return `
            Suillus is a genus of basidiomycete fungi in the family Suillaceae and order Boletales. Species in the genus are associated with trees in the pine family (Pinaceae), and are mostly distributed in temperate locations in the Northern Hemisphere, although some species have been introduced to the Southern Hemisphere.
          `;

        default:
          return "";
      }
    }
    return "";
  };

  const getShroomDescriptionImgUrl = () => {
    if (checkShroomStatus == StatusType.SUCCESS) {
      switch (predictedClass) {
        case "Agaricus":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Agaricus-campestris-michoacan.jpg/330px-Agaricus-campestris-michoacan.jpg`;
        case "Amanita":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Fliegenpilz-1.jpg/330px-Fliegenpilz-1.jpg`;
        case "Boletus":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Boletus_edulis1.jpg/330px-Boletus_edulis1.jpg`;
        case "Cortinarius":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cortinarius_archeri.jpg/330px-Cortinarius_archeri.jpg`;
        case "Entoloma":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Entoloma_sinuatum_group.JPG/330px-Entoloma_sinuatum_group.JPG`;
        case "Hygrocybe":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hygrocybe_coccinea_and_Hygrocybe_virginea_Rosemary_Winnall.JPG/330px-Hygrocybe_coccinea_and_Hygrocybe_virginea_Rosemary_Winnall.JPG`;
        case "Lactarius":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Lactarius_vietus041031w.jpg/330px-Lactarius_vietus041031w.jpg`;
        case "Russula":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Russulamexicana.jpg/330px-Russulamexicana.jpg`;
        case "Suillus":
          return `https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Suillus_luteus_2.jpg/330px-Suillus_luteus_2.jpg`;

        default:
          return "";
      }
    }
    return "";
  };

  return (
    <View style={styles.view}>
      <View style={styles.view__buttonsView}>
        <View style={styles.view__buttonsView__button}>
          <StyledButton
            onPress={() => pickImage()}
            text="Pick image"
            touchStyle={styles.button}
          />
        </View>
      </View>

      <View style={styles.view__imageView}>
        <View>
          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          )}
        </View>
        <View>
          {imageUrl && !(checkShroomStatus === StatusType.SUCCESS) && (
            <StyledButton
              onPress={() => checkShroom()}
              text="Check shroom!"
              touchStyle={styles.button}
            />
          )}
        </View>
        <View style={styles.view__predictView}>
          {checkShroomStatus === StatusType.SUCCESS && (
            <>
              <Text style={styles.view__predictView__text_hmm}>
                Hmmm... It is probably
              </Text>
              <Text style={styles.view__predictView__text_predictedClass}>
                {predictedClass}!
              </Text>
              <Text style={styles.view__predictView__text}>
                (for like {percentageProbability.toFixed(0)}%)
              </Text>
              <ScrollView
                style={styles.scroll__view}
                persistentScrollbar
                scrollEnabled
              >
                <Text style={styles.shroom__description}>
                  {getShroomDescription()}
                </Text>
                <Image
                  source={{ uri: getShroomDescriptionImgUrl() }}
                  style={styles.image__description}
                />
              </ScrollView>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  view__imageView: {
    flex: 1,
    alignContent: "flex-end",
  },
  view__buttonsView: {
    flexDirection: "row",
  },
  view__buttonsView__button: {
    margin: 5,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
  view__predictView: {
    alignItems: "center",
  },
  view__predictView__text: {
    color: "white",
    fontSize: 13,
  },
  view__predictView__text_hmm: {
    color: "white",
    fontSize: 20,
  },
  view__predictView__text_predictedClass: {
    color: "white",
    fontSize: 30,
    fontFamily: "space-mono",
    marginBottom: 10,
  },
  view__predictView__text_description: {
    color: "white",
    fontSize: 15,
    flexWrap: "wrap",
  },
  image__description: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "center",
    resizeMode: "contain",
  },
  scroll__view: { flexGrow: 0.5, maxWidth: 350 },
  shroom__description: {
    fontSize: 15,
    color: "white",
  },
});

export default MushroomImagePicker;
