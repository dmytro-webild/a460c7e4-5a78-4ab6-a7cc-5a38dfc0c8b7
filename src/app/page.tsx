"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Crown, Facebook, Instagram, MessageCircle, Ruler, Scissors, Shirt, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="fluid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Jorla Akins Apparel"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Why Choose Us", id: "why-choose-us" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Custom Outfit", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="home" data-section="home">
        <HeroBillboardGallery
          title="Elegant Fashion. Perfectly Crafted."
          description="Custom-designed outfits and premium clothing tailored to express your unique style. Designed with passion in Ibadan, Oyo State, Nigeria. Trusted by 50+ satisfied customers. Call / WhatsApp: 09064117714"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Order Custom Outfit", href: "#contact" },
            { text: "Contact Us", href: "#contact" }
          ]}
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-stylish-woman-wearing-punk-outfit_23-2149267472.jpg", imageAlt: "Elegant fashion model posing in luxurious outfit" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-classic-elegant-suit-luxury-retro-vintage-woman-suit_482257-45290.jpg", imageAlt: "Fashion designer working in atelier" },
            { imageSrc: "http://img.b2bpic.net/free-photo/t-shirt-painting-indoors-still-life_23-2150572754.jpg", imageAlt: "Close up of tailoring details" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-fabric_23-2148817485.jpg", imageAlt: "Mannequin with an elegant dress" },
            { imageSrc: "http://img.b2bpic.net/free-photo/stylish-african-american-woman-yellow-dress-posed-against-stone-texture-background_627829-1926.jpg", imageAlt: "Fashion model in bespoke attire" },
            { imageSrc: "http://img.b2bpic.net/free-photo/i-need-write-it-down-until-it-slipped-my-mind-focused-creative-clothes-designer-sitting-workshop-drawing-new-project-garment-she-will-sew-sewing-machine-first-is-plan-action_176420-14584.jpg", imageAlt: "Designer sketching a new collection" }
          ]}
          mediaAnimation="slide-up"
          ariaLabel="Hero section for Jorla Akins Apparel"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Fashion Designed to Make You Stand Out"
          description="At Jorla Akins Apparel, we specialize in creating stylish and high-quality outfits for individuals who value elegance and originality. Our team focuses on attention to detail, quality fabrics, and modern fashion trends to create clothing that fits perfectly and looks amazing."
          metrics={[
            { value: "50+", title: "Satisfied Clients" },
            { value: "10+", title: "Years Experience" },
            { value: "100%", title: "Quality Guarantee" }
          ]}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cheerful-young-fashion-designer-linen-red-dress-smiles-sincerely-charming-woman-holds-pencils-draws-cloth-pattern-craft-paper-sheet_197531-29816.jpg"
          imageAlt="Fashion designer at work in her studio"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          ariaLabel="About Jorla Akins Apparel"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Our Services"
          description="Discover the range of services Jorla Akins Apparel offers to elevate your wardrobe and style."
          features={[
            {
              title: "Fashion Design",              description: "Custom fashion concepts designed to match your unique style and personality.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-creating-inspiring-vision-board_23-2150104657.jpg", imageAlt: "Fashion design sketch" },
                { imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-digital-art_23-2151197887.jpg", imageAlt: "Digital fashion rendering" }
              ]
            },
            {
              title: "Custom Clothing / Cloth Making",              description: "Tailored outfits made specifically to your measurements for a perfect fit.",              icon: Scissors,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-sewing-with-machine_23-2148875360.jpg", imageAlt: "Tailor measuring fabric" },
                { imageSrc: "http://img.b2bpic.net/free-photo/smiley-fashion-designers-atelier-with-dress-form_23-2148846770.jpg", imageAlt: "Hands sewing delicate fabric" }
              ]
            },
            {
              title: "Traditional & Cultural Wear",              description: "Beautiful traditional outfits designed for weddings, ceremonies, and special events.",              icon: Crown,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/woman-paints-indian-groom-s-knees-face-with-turmeric-paste_8353-759.jpg", imageAlt: "Traditional African print fabric" },
                { imageSrc: "http://img.b2bpic.net/free-vector/golden-islamic-mosque-window-shape-pattern-banner_1017-64008.jpg", imageAlt: "Elegant traditional attire" }
              ]
            },
            {
              title: "Ready-to-Wear Collections",              description: "Stylish ready-made clothing available for quick purchase and immediate elegance.",              icon: Shirt,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/clothes-hang_1339-2708.jpg", imageAlt: "Ready-to-wear collection display" },
                { imageSrc: "http://img.b2bpic.net/free-photo/young-caucasian-woman-holding-shopping-bags-make-selfie-by-camera-clothing-store_839833-1916.jpg", imageAlt: "Woman trying on a dress" }
              ]
            },
            {
              title: "Clothing Alterations",              description: "Adjusting and improving existing clothing to achieve the perfect, flattering fit.",              icon: Ruler,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/man-studio-creates-leather-ware_1157-33196.jpg", imageAlt: "Tailor adjusting suit sleeve" },
                { imageSrc: "http://img.b2bpic.net/free-photo/colorful-buttons-spool-with-pink-knitted-needles-white-textured-backdrop_23-2147899113.jpg", imageAlt: "Sewing kit for alterations" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Jorla Akins Apparel services"
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <MetricCardTwo
          title="Why Choose Jorla Akins Apparel"
          description="Experience the difference of dedicated craftsmanship and personalized service."
          metrics={[
            { id: "m1", value: "Skilled", description: "Fashion Designers" },
            { id: "m2", value: "Premium", description: "Quality Fabrics" },
            { id: "m3", value: "Precise", description: "Craftsmanship" },
            { id: "m4", value: "Unique", description: "Custom Designs" },
            { id: "m5", value: "50+", description: "Happy Clients" }
          ]}
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Reasons to choose Jorla Akins Apparel"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Customers Say"
          description="Hear from our delighted clients about their experience with Jorla Akins Apparel."
          testimonials={[
            {
              id: "1",              title: "Stunning Designs",              quote: "“Beautiful designs and perfect fitting. I always receive compliments when I wear their outfits.”",              name: "Aisha T.",              role: "Client",              imageSrc: "http://img.b2bpic.net/free-photo/joyful-girl-green-tshirt-denim-skirt-posing-pink-background-charming-darkhaired-african-woman-jacket-smiling-isolated-backdrop_197531-29001.jpg",              imageAlt: "Portrait of Aisha T."
            },
            {
              id: "2",              title: "Professional & Creative",              quote: "“Very professional and creative fashion brand.”",              name: "Kunle O.",              role: "Entrepreneur",              imageSrc: "http://img.b2bpic.net/free-photo/man-blue-suit-posing-white-artistic-wall-from-bricks_613910-10624.jpg",              imageAlt: "Portrait of Kunle O."
            },
            {
              id: "3",              title: "Exceptional Quality",              quote: "“Great service and amazing clothing quality.”",              name: "Fatima G.",              role: "Fashion Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-shine-clothes-posing-camera_613910-11033.jpg",              imageAlt: "Portrait of Fatima G."
            },
            {
              id: "4",              title: "Tailored to Perfection",              quote: "“Jorla Akins Apparel truly understands my vision and brings it to life with incredible skill and precision. Highly recommend!”",              name: "Biodun S.",              role: "Business Owner",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-business-man-outdoor_23-2148479594.jpg",              imageAlt: "Portrait of Biodun S."
            },
            {
              id: "5",              title: "Beyond Expectations",              quote: "“The attention to detail and quality of fabric is unparalleled. My custom outfit exceeded all expectations.”",              name: "Chioma E.",              role: "Event Planner",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-bearded-man-wearing-blue-suit-standing-with-measure-tape-wardrobe_171337-19177.jpg",              imageAlt: "Portrait of Chioma E."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Customer Testimonials"
        />
      </div>

      <div id="process" data-section="process">
        <FaqBase
          title="Our Bespoke Design Process"
          description="From concept to completion, we guide you through every step of creating your dream outfit."
          faqs={[
            { id: "faq1", title: "Step 1: Consultation", content: "It all begins with a personal consultation to understand your unique design ideas, style preferences, and the specific occasion for your outfit." },
            { id: "faq2", title: "Step 2: Measurement & Design", content: "Our expert team will take precise measurements and translate your vision into a custom design, ensuring a perfect fit and aesthetic." },
            { id: "faq3", title: "Step 3: Crafting Your Outfit", content: "With your design approved, our skilled artisans meticulously craft your clothing using only the highest quality fabrics and attention to every detail." },
            { id: "faq4", title: "Step 4: Final Fitting & Delivery", content: "Before delivery, we conduct a final fitting to guarantee absolute perfection. Your exquisite outfit is then ready to be unveiled." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Our Design Process"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Ready to Design Your Perfect Outfit?"
          description="Contact Jorla Akins Apparel today and let us create something beautiful for you. We are open Monday – Saturday: Open 24 Hours. Sunday: Closed. Find us in Ibadan, Oyo State, Nigeria. Call / WhatsApp: 09064117714"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543677.jpg"
          imageAlt="Fashion studio contact area"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Your Email Address"
          buttonText="Order Custom Outfit"
          termsText="By clicking Order Custom Outfit you're confirming that you agree with our Terms and Conditions."
          onSubmit={() => {}}
          ariaLabel="Contact section for custom outfit orders"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Jorla Akins Apparel"
          copyrightText="© 2024 Jorla Akins Apparel. All rights reserved."
          socialLinks={[
            { icon: Facebook, href: "#", ariaLabel: "Facebook page" },
            { icon: Instagram, href: "#", ariaLabel: "Instagram profile" },
            { icon: MessageCircle, href: "https://wa.me/09064117714", ariaLabel: "WhatsApp us" }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
