import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay} from "lucide-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Navbar from "@/components/navbar/navbar";
import { Badge } from "@/components/ui/badge";
import StyledExample from "@/components/ui/DemoCarousel";
import Footer from "@/components/ui/Footer";
import { TextHoverEffect } from "@/components/ui/Text-Hover";
import { Bento } from "@/components/ui/BentoGrid";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden ">      
      {/* Full-page background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Show on sm and up: Elliptical Gradient */}
        <div className="hidden xs:block w-full h-full animate-pulseGradient bg-[radial-gradient(ellipse_at_center,_#000_10%,_#005fff_55%,_#ff73a1_80%,_#ff9900_90%)]"></div>

        {/* Show only on small screens: Circular Gradient */}
        <div className="block xs:hidden w-full h-full animate-pulseGradient bg-[radial-gradient(circle_at_center,_#000_10%,_#005fff_55%,_#ff73a1_80%,_#ff9900_90%)]"></div>
      </div>

      <InteractiveGridPattern
        className="absolute inset-0 z-0 top-0 h-[200vh] left-0 pointer-events-auto [mask-image:radial-gradient(800px_circle_at_center,black,transparent)]"
        width={40}
        height={40}
        squares={[48, 32]} // tune these for coverage
        squaresClassName="hover:fill-blue-700"
      />
      

      <Navbar />
      
      <div className="md:mt-64 sm:mt-60 mt-60 flex-grow flex items-center justify-center">
        <div className="relative z-10 text-center max-w-2xl pointer-events-none ">
          <Badge className="pointer-events-auto bg-gradient-to-br via-70% from-primary via-muted-foreground to-primary rounded-full py-1 border-none">
            Just Dropped v1.0 — Equation Magic!
          </Badge>
          <h1 className="pointer-events-none text-white mt-6 text-5xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Math Meets Magic ✨
          </h1>
          <p className="pointer-events-none mt-4 text-white md:mt-6 text-[17px] font-medium md:text-lg">
            Inquate turns your hand-drawn equations and physics problems into instant AI-powered solutions. 
            No typing. No limits. Just draw it, click solve, and let the math magic happen.
          </p>
          <div className="md:mt-8 mt-6 flex items-center justify-center gap-4">
            <Button size="lg" className="pointer-events-auto rounded-full text-base" onClick={() => navigate("/sign-up")}>
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="pointer-events-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <StyledExample />
      <Bento />
      <Testimonial />
      <Pricing />
      

    </div>

  <Footer />

      <div className="h-[40rem] z-10 bg-black flex items-center text-muted/50 justify-center">
        <TextHoverEffect text="INQUATE" />
      </div>

    </>
    
  );
}

