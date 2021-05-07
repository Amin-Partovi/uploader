import "./cssReset.scss";
import styled from "styled-components";

import Uploader from "./Uploader";

const UploaderContainer = styled.div`
  border: 1px solid green;
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
`;

const App = () => {
  return (
    <UploaderContainer>
      <Uploader />
    </UploaderContainer>
  );
};
export default App;
