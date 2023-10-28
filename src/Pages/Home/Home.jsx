import React from "react";
import Buttons from "../../Props/Buttons";
import Cdmusic from "/src/assets/Cdmusic.png";
import "./Home.css";
import Card from "../../Props/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Icons from "../../Props/Icons";


const Home = () => {

  return (
    <div>
    
      <div className="p-0 pt-32 mx-0 lg:p-0">
        <div className="flex flex-col mb-10 md::mx-0 xl:mx-32 md:flex-col xl:flex-row xl:bg-pwhite">
          <div className="flex-1 p-5 lg:mt-10 lg:p-10 xl:ml-32 ">
            <h1 className="pt-5 text-6xl font-semibold lg:text-8xl font-Roboto text-primary xl:mt-16 lg:mt-10">
              Welcome To <span className="text-textlight">Music</span> In One
            </h1>
            <p className="p-2 mt-5 font-semibold text-secondary">
              Our website is designed to be your one-stop destination for all
              things music-related. From artist profiles and song lyrics to
              curated playlists and music news, you can find it all in one
              place.
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
        <div className="p-10 bg-primary">
          <div className="flex justify-center mb-2">
        <Icons />
        </div>
        <h1 className="text-4xl font-bold text-center text-pwhite font-Roboto">
          Shuffle and Share: Card Stories and Secrets
        </h1>
        <p className="px-5 mt-2 mb-10 text-center text-pwhite font-Roboto">
          Tune in for in-depth conversations about all things music.
        </p>
        </div>
        
        <div class="flex flex-col gap-2 mx-0 md:mx-0 lg:flex-row bg-pwhite pt-10 xl:px-6">
          <div className="p-4 lg:p-0 w-7/10">
            <div className="grid grid-cols-1 gap-2 mx-1 md:grid-cols-3 xl:ml-10 lg:grid-cols-3 xl:grid-cols-4">
              <div className=" border-opacity-30">
                <Card
                  image="https://static.independent.co.uk/2023/10/19/17/1164d00d9ec18e60fcca6e11a97dd9d8Y29udGVudHNlYXJjaGFwaSwxNjk3ODE1NTg1-2.72237240.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp"
                  title="Ed Sheeran ticket price row fuels criticism of Royal Albert Hall"
                  paragraph="The musician has condemned the soaring cost of seats, amid demand for action to tackle ‘conflicts of interest’ at the institution."
                  referenceLink="https://www.independent.co.uk/news/uk/bill-royal-albert-hall-ed-sheeran-parliament-westminster-b2432652.html"
                />
              </div>
              <div className="">
                <Card
                  image="https://www.rollingstone.com/wp-content/uploads/2023/10/GettyImages-1730743112.jpeg?w=1581&h=1054&crop=1"
                  title="Taylor Swift Seemingly Teases Coffee-Themed ‘From the Vault’ Lyrics Ahead of ‘1989 TV’ Release"
                  paragraph="Taylor Swift attends Taylor Swift: The Eras Tour Concert World Premiere on October 11, 2023 in Los Angeles"
                  referenceLink="https://www.rollingstone.com/music/music-news/taylor-swift-teases-1989-taylors-version-lyrics-1234861679/"
                />
              </div>
              <div className="">
                <Card
                  image="https://static.independent.co.uk/2023/10/24/09/newFile-1.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp"
                  title="British Airways flight carrying Ed Sheeran met by police after passenger hurls ‘racist abuse’ at cabin crew"
                  paragraph="The popstar was said to be on the Airbus A380 ‘SuperJumbo’ from Miami to London"
                  referenceLink="https://www.independent.co.uk/travel/news-and-advice/british-airways-racist-abuse-ed-sheeran-b2434886.html"
                />
              </div>
              <div className="">
                <Card
                  image="https://www.udiscovermusic.com/wp-content/uploads/2023/07/BFMV-Katja-Ogrin-copy-1000x600.jpg"
                  title="Bullet For My Valentine Announces Fall 2023 North American Tour"
                  paragraph="The UK alt-metal outfit will be supported by Of Mice & Men and Vendred on their first US trek in five years."
                  referenceLink="https://www.udiscovermusic.com/news/bullet-valentine-fall-2023-north-american-tour/"
                />
              </div>
              <div className="">
                <Card
                  image="data:image/jpeg;base64,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"
                  title="OPM Artist Juan Karlos Makes Spotify History'"
                  paragraph="Originally, “Ere” debuted at 177th on the Spotify Global Charts on Sunday Oct. 8 with 1.22M streams before cracking the top 100 at #87 later thanks to earning 1.45M streams."
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
                  image="https://theflyinglugawph.files.wordpress.com/2019/11/sud.jpg"
                  title="TRCK REVIEW: SUD – Baliw"
                  paragraph="Despite, or perhaps because of the band’s inoffensively intrusive nature, they were once the biggest band of the local scene."
                  referenceLink="https://www.npr.org/2023/10/23/1207427173/northern-soul"
                />
              </div>
              <div className="">
                <Card
                  image="https://i0.wp.com/aliandalexblogs.com/wp-content/uploads/2023/02/IMG_1660.jpg?resize=560%2C373&ssl=1"
                  title="Recapping Multi-Instrumentalist Daniel Seavey’s Solo Return to NYC"
                  paragraph="If you would have told us in June that Daniel Seavey would be on a solo tour across the country"
                  referenceLink="https://www.npr.org/2023/10/18/1206759047/jahari-stampley-jazz-herbie-hancock"
                />
              </div>
              <div className="">
                <Card
                  image="https://www.udiscovermusic.com/wp-content/uploads/2023/10/Calum-Scott-Zoe-Wees-Press-Shot-1000x600.jpg"
                  title="Calum Scott And Zoe Wees Team Up For New Version Of ‘At Your Worst’"
                  paragraph="The original track marked Calum’s first solo single since the mid-2022 release of his acclaimed sophomore album ‘Bridges.’"
                  referenceLink="https://www.udiscovermusic.com/news/calum-scott-zoe-wees-at-your-worst-new-version/"
                />
              </div>
              <div className="">
                <Card
                  image="https://www.nme.com/wp-content/uploads/2021/10/i-belong-to-the-zoo-kapiling-argee-guerrero@2000x1270-696x442.jpg"
                  title="I Belong To The Zoo on new album ‘Kapiling’: “I put those emotions I can’t verbalise into my music”"
                  paragraph="Singer-songwriter Argee Guerrero talks new album ‘Kapiling’ and why ‘hugot’ culture endures in the Philippines’"
                  referenceLink="https://www.nme.com/en_asia/features/music-interviews/i-belong-to-the-zoo-argee-guerrero-kapiling-album-3078148"
                />
              </div>
              <div className="">
                <Card
                  image="https://www.billboard.com/wp-content/uploads/2022/01/Camila-Cabello-Shawn-Mendes-2019-billboard-1548.jpg?w=237&h=147&crop=1"
                  title="Here’s Why Fans Think Camila Cabello’s New Song Is About Making Up With Shawn Mendes"
                  paragraph="Fans are convinced her the 'June Gloom' clip is a not-so-subtle ode to the 'Stitches' singer."
                  referenceLink="https://www.billboard.com/music/music-news/camila-cabello-new-song-shawn-mendes-romance-hints-1235311089/"
                />
              </div>
              <div className="">
                <Card
                  image="https://s.yimg.com/ny/api/res/1.2/mSFcntzTxTIG3eqRUspFPw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE2MDA7aD04NTA7Y2Y9d2VicA--/https://media.zenfs.com/en/nextshark_articles_509/cb892d1edf5cceef9dea1ab9377d8ffa"
                  title="AJ Rafael and Simu Liu’s ‘Have Yourself a White Christmas’ is the holiday classic we’re playing on loop
                  "
                  paragraph="AJ Rafael and Simu Liu’s “Have Yourself a White Christmas” medley is making a comeback for the Yuletide season — and we’re all for the nostalgia on repeat."
                  referenceLink="https://news.yahoo.com/aj-rafael-simu-liu-yourself-231316758.html"
                />
              </div>
            </div>
            <h1 className="px-5 mt-10 text-lg font-semibold text-center">
              Music is the key that unlocks the door to our deepest emotions and
              innermost thoughts.
            </h1>
          </div>

          <div class="lg:w-3/10 w-full block lg:block p-2 ">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <div className="lg:mx-56">
       
        <h1 className="mb-10 text-2xl font-bold text-center md:text-4xl font-Roboto">

        <span className="text-3xl md:text-6xl">'' </span>Music is the divine expression of the human soul, composing emotions
          that words alone cannot capture.<span className="text-3xl md:text-6xl">'' </span>
          <span className="text-xl font-normal">
            - Ludwig van Beethoven
            
          </span>
        </h1>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
