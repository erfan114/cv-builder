import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center">
      <Result
        status="404"
        title="صفحه یافت نشد"
        subTitle="شرمنده اما صفحه ای که شما به دنبال آن هستید وجود ندارد"
        extra={
          <Button
            type="primary"
            href="/"
          >
            بازگشت به خانه
          </Button>
        }
      />
    </div>
  );
}
