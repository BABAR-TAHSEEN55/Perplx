import Heading from "../shared/heading";
import SmolText from "../shared/smol-text";
import SubHeading from "../shared/sub-heading";

const UseCases = () => {
  return (
    <section className="mt-20 pt-8 " id="features">
      <SmolText text="Use Cases" className="text-backy" />
      <Heading className="text-center">
        Built for how you actually learn content
      </Heading>
      <SubHeading className="text-center">
        Whether you’re creating content daily or scaling it across a team,
        Verseo adapts to your workflow.
      </SubHeading>
    </section>
  );
};

export default UseCases;
