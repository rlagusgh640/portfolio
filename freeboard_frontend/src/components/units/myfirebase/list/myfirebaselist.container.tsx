import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MyFireBaseListPageUI from "./myfirebaselist.presenter";
import {
  collection,
  getDocs,
  getFirestore,
  type DocumentData,
} from "firebase/firestore/lite";
import { firebaseapp } from "../../../../common/libraries/firebase";

export default function MyfirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseapp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    }
    void fetchBoards();
  }, []);

  const onClickMoveToBoardNew = () => {
    void router.push("/myfirebase/new");
  };

  return (
    <MyFireBaseListPageUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
