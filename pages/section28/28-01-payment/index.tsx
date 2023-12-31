import Head from "next/head";

declare const window: typeof globalThis & { IMP: any };

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    window.IMP.init("imp36106767"); // 예: 'imp00000000a'
    window.IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011", 주석처리를 하면 랜덤으로 id가 생성이된다
        name: "회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", //모바일에서는 결제시 페이지 주소가 바뀜, 따라서 결제 끝나고 돌아갈 주소를 지정
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          //   백엔드에 결제 정보 넘겨주기
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결재하기</button>
    </>
  );
}
