import { MyInput, Wrapper } from "./myfirebasewrite.style";
import type { IMyfirebaseWriteUIProps } from "./myfirebasewrite.type";

export default function MyFirebaseWritePageUI(props: IMyfirebaseWriteUIProps) {
  return (
    <Wrapper>
      <div>
        작성자: <MyInput type="text" onChange={props.onChangeWriter} />
      </div>
      <div>
        제 목: <MyInput type="text" onChange={props.onChangeTitle} />
      </div>
      <div>
        내 용: <MyInput type="text" onChange={props.onChangeContents} />
      </div>
      <div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>
    </Wrapper>
  );
}
