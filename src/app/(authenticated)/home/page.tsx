"use client";

// import usePayment from "@/resources/payment/payment-hook";
import Button from "@atoms/Button/button";

export default function Home() {
  // const { createPayment, loading } = usePayment();

  return (
    <div>
      <h1>You are authenticated as a user</h1>
      <Button>New Payment</Button>
    </div>
  );
}
