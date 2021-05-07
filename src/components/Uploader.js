import styled from "styled-components";
import icon from "../assets/image.svg";

const PreviwContainer = styled.div`
  width: 100%;
  height: 100%;
  
`;
const Preview = styled.label`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

const UploaderIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Uploader = () => {
  return (
    <PreviwContainer>
      <Preview>
        <input
          type="file"
          accept=".pdf,image/*"
          style={{ display: "none" }}></input>
        <div>
          <UploaderIcon src={icon} alt="" />
        </div>
        <span>Drop your image here or browse</span>
        <span>supports: pdf, images</span>
      </Preview>
    </PreviwContainer>
  );
};

export default Uploader;
