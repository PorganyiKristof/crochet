import Crochets from "@components/Crochets";
import SendMainBtn from "@components/SendMainBtn";

export default function page() {
  return (
    <section className="w-screen flex-center flex-col mt-10 md:mt-20">
      <h1 className="text-3xl font-bold md:text-6xl text-center w-full px-5">
        Crochet.Dorka.com
        <br />
        <span className="custom_gradient text-center w-full">
          Guess what, I`ll do it
        </span>
      </h1>
      <p className="text-center text-xl lg:w-1/3 m-auto mt-4 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil
        quas eum, pariatur aut animi ut veritatis praesentium!
      </p>
      <SendMainBtn />
      <Crochets />
    </section>
  );
}
