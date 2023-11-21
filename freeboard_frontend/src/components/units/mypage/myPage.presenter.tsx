export default function MyPageUi(props: any) {
  return (
    <>
      <div>
        <div>이미지</div>
        <div>{props.data?.fetchUserLoggedIn.name}님</div>
        <div>마일리지</div>
      </div>
    </>
  );
}
