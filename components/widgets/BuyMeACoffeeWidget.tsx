const BuyMeACoffeeWidget = () => {
  const path = `https://www.buymeacoffee.com/widget/page/${process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_USERNAME}?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%235F7FFF`;

  console.log("handler is ", process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_USERNAME);
  return (
    <div className="flex justify-center rounded" style={{ height: "700px" }}>
      <iframe className="m-10" src={path} />
    </div>
  );
};
export default BuyMeACoffeeWidget;
