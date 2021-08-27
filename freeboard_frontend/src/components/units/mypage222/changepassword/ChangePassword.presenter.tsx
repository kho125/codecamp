import Button01 from "../../../commons/buttons/Button01";
import Inputmain from "../../../commons/inputs/Inputmain";
import { Wrapper } from "./ChangePassword.styles";

export default function ChangePasswordUI(props) {
  return (
    <>
      <Wrapper>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <Inputmain
            inputName="비밀번호"
            type="text"
            register={{ ...props.register("password") }}
            errorMessage={props.errors.password?.message}
          />
          <Button01
            buttonName="비밀번호 변경"
            type="submit"
            isActive={props.isActive}
          />
        </form>
      </Wrapper>
    </>
  );
}