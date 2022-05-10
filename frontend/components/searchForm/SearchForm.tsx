import React from "react";
import { StyledView, StyledInput, StyledIconButton } from "./StyledSearchForm";
import { Platform } from "react-native";

interface Props {
  label: string;
  placeholder?: string;
  width: string;
  handlePress: (searchFor: string) => void;
  loading: boolean;
}

export default function SearchForm({
  label,
  placeholder,
  width,
  handlePress,
  loading,
}: Props) {
  const [text, setText] = React.useState("");

  const handleSearch = () => {
    handlePress(text);
    setText("");
  };

  return (
    <StyledView>
      <StyledInput
        value={text}
        onChangeText={setText}
        autoComplete
        mode="outlined"
        label={label}
        placeholder={placeholder ? placeholder : "Type here.."}
        activeOutlineColor={Platform.OS === "ios" ? "#006ee6" : "black"}
        width={width ? width : ""}
      />
      <StyledIconButton
        icon={loading ? "loading" : "magnify"}
        color={Platform.OS === "ios" ? "#006ee6" : "black"}
        size={35}
        onPress={handleSearch}
        disabled={text ? false : true}
      />
    </StyledView>
  );
}
