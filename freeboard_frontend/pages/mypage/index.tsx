import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/myPage.container";

function myPage() {
  return <MyPage />;
}
export default withAuth(myPage);
