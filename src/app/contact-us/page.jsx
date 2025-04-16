import InnerHero from "../components/common/sections/InnerHero";
import FormSc from "../components/contact/FormSc";


export default function ContactUs() {
  return (
    <div>
      <InnerHero
        title="Get In Touch With Us"
        description="We revolutionizing digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
        imageSrc="/images/contact-img/hero-img.png"
        imageAlt="AI Technology"
      />
      <FormSc />
    </div>
  );
}
