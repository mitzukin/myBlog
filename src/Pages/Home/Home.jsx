import React from "react";
import Buttons from "../../Props/Buttons";
import Cdmusic from "/src/assets/Cdmusic.png";
import "./Home.css";
import Card from "../../Props/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
    <div className="p-1 pt-32 mx-0 md:p-10 lg:mx-10 ">
      <div className="flex flex-col lg:mx-32 md:flex-col xl:flex-row">
        <div className="flex-1 p-5 lg:mt-10 lg:p-10 ">
          <h1 className="pt-5 font-semibold text-8xl lg:text-8xl font-Roboto text-primary xl:mt-16 lg:mt-10">
            Welcome To <span className="text-textlight">Music</span> In One
          </h1>
          <p className="p-2 mt-5 font-semibold text-secondary">
            Our website is designed to be your one-stop destination for all
            things music-related. From artist profiles and song lyrics to
            curated playlists and music news, you can find it all in one place.
          </p>
          <div className="flex gap-2 pb-32 mt-3 ml-2">
            <Buttons text="Learn More" />
            <Buttons text="Create an Account" />
          </div>
        </div>
        <div className="flex-1 hidden mx-auto mt-0 lg:mt-20 w-96 md:hidden xl:block">
          <img src={Cdmusic} alt="" className="" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-center font-Roboto">Shuffle and Share: Card Stories and Secrets</h1>
      <p className="px-5 mt-2 mb-10 text-center text-secondary font-Roboto">Tune in for in-depth conversations about all things music.</p>
      <div class="flex flex-col gap-2 mt-4 lg:flex-row">
        
      <div className="w-full p-4">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    <div className=" border-opacity-30">
      <Card
        image="https://www.makingmusic.org.uk/sites/makingmusic.org.uk/files/styles/cb-breakpoints_theme_bootstrap_makingmusic_2015_992_1x/public/Exeter%20Festival%20Chorus_1140x480.jpg?itok=V0J2Hi0z&timestamp=1693306880"
        title="Coming out to your music group"
        paragraph="Michelle Devon, member of the Exeter Festival Chorus and Axminster Choral Society, talks to us about how her music groups accepted her as Michelle."
        referenceLink="https://www.makingmusic.org.uk/news/coming-out-your-music-group"
      />
    </div>
    <div className="">
      <Card
        image="https://www.makingmusic.org.uk/sites/makingmusic.org.uk/files/styles/cb-breakpoints_theme_bootstrap_makingmusic_2015_992_1x/public/web-banner-SCG_0.jpg?itok=ONGsj6aZ&timestamp=1687359101"
        title="Sir Charles Groves Prize awarded to founder of Paraorchestra, Charles Hazlewood"
        paragraph="Making Music has presented acclaimed conductor Charles Hazlewood with the Sir Charles Groves Prize for his outstanding contribution to the musical life of the United Kingdom."
        referenceLink="https://www.makingmusic.org.uk/news/sir-charles-groves-prize-charles-hazlewood"
      />
    </div>
    <div className="">
      <Card
        image="https://www.makingmusic.org.uk/sites/makingmusic.org.uk/files/styles/cb-breakpoints_theme_bootstrap_makingmusic_2015_992_1x/public/Female%20composers%20of%20colour.jpg?itok=sporlKaj&timestamp=1678291221"
        title="Six inspiring female composers of colour"
        paragraph="In celebration of Women’s History Month, Making Music spotlights six iconic female composers of colour, a demographic that very often gets underrepresented in the music industry."
        referenceLink="https://www.makingmusic.org.uk/news/six-inspiring-female-composers-colour"
      />
    </div>
    <div className="">
      <Card
        image="https://imusician.imgix.net/images/9-Best-Smartlink-Tools-Meta.jpg?fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&auto=compress,format&w=491&h=256.956666666665"
        title="9 Best Music Smartlink Tools for Musicians"
        paragraph="Smartlinks have taken over, allowing you to send your audience directly to your streaming & download platforms, merch store and tour dates, etc."
        referenceLink="https://imusician.pro/en/resources"
      />
    </div>
    <div className="">
      <Card
        image="https://www.musicbusinessworldwide.com/files/2023/10/boomy-648x366.jpg"
        title="Ai Music Startup Boomy Partners with fraud detection company BeatDapp to 'Ensure The Integrity of its Platform'"
        paragraph="Back in May, California-based generative AI music startup Boomy found itself caught in a storm over streaming fraud."
        referenceLink="https://www.musicbusinessworldwide.com/ai-music-startup-boomy-partners-with-fraud-detection-company-beatdapp-to-ensure-the-integrity-of-its-platform/"
      />
    </div>
    <div className="">
      <Card
        image="https://media.pitchfork.com/photos/6536ff9697508fa5f2f7b27b/2:1/w_1280,c_limit/GettyImages-1637208780.jpg"
        title="Taylor Swift Earns 10th No. 1 Song With “Cruel Summer,” Reaches Singles Chart Milestone"
        paragraph="She’s tied with Stevie Wonder and Janet Jackson for ninth place for the most No. 1 songs on the Billboard Hot 100"
        referenceLink="https://pitchfork.com/news/taylor-swift-earns-10th-no-1-song-with-cruel-summer-reaches-singles-chart-milestone/"
      />
    </div>
    <div className="">
      <Card
        image="https://media.npr.org/assets/img/2023/10/20/credit-greta-kaur-taylor---new-century-1_custom-3954234bbe90e94d99efe5b97a04585f37f3801d-s600-c85.webp"
        title="Northern Soul is thriving across the U.K. thanks to Gen Z looking to dance"
        paragraph="Northern Soul, the up-tempo Black American music made during the '60s and '70s, is experiencing a resurgence."
        referenceLink="https://www.npr.org/2023/10/23/1207427173/northern-soul"
      />
    </div>
    <div className="">
      <Card
        image="https://media.npr.org/assets/img/2023/10/19/-ninaditscheid_baertschhauschka_essenphilharmonie2015-4714_wide-eba96a344e248e3d82e65628c36d343502a0bee0.jpg?s=600"
        title="Hauschka's prepared piano is a layered canvas of sounds in new album"
        paragraph="On Philanthropy, the artist's 14th studio album, Volker Bertelmann, also known as Hauschka, returns to his signature prepared piano sound in music he hopes will strengthen connections between people."
        referenceLink="https://www.npr.org/2023/10/18/1206759047/jahari-stampley-jazz-herbie-hancock"
      />
    </div>
    <div className="">
      <Card
        image="https://media.npr.org/assets/img/2023/10/23/jw-etw-press-photo-credit-andrea-nakhla_wide-c30f9b26bcdd9a8ccc55689a59a6ff15774101b2.jpg?s=600"
        title="Jonathan Wilson goes against the grain on 'Eat The Worm'"
        paragraph="Musician and producer Jonathan Wilson talks about his latest album, Eat The Worm, as well as his take on the use of AI in both audio and visual art."
        referenceLink="https://www.npr.org/sections/world-cafe/2023/10/23/1207974471/jonathan-wilson-on-album-eat-the-worm"
      />
    </div>
  </div>
  <h1 className="px-5 mt-3 text-lg font-semibold text-center">Music is the key that unlocks the door to our deepest emotions and innermost thoughts.</h1>
</div>


        <div class="lg:w-1/3 w-full  block lg:block p-4 ">
      <Sidebar/>
        </div>
      </div>
      
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;
