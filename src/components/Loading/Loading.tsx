import { ScaleLoader } from "react-spinners";
import { colors } from "../../utils";
import { LoadingContainer } from "./LoadingStyles";

const Loading = () => {
  return (
    <LoadingContainer>
      <ScaleLoader color={colors.black} />
    </LoadingContainer>
  );
};

export default Loading;
