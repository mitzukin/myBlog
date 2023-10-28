import React from "react";
import "./Discover.css";
import Icons from "../../Props/Icons";
import Sidebar from "../../components/Sidebar/Sidebar";
import Blogs from "../../Props/Blogs";
import Footer from "../../components/Footer/Footer";

const Discover = () => {
  const Billie =
    "Billie Eilish Says She'd 'Rather Die' Than Not Be a Mom but 'Dreads' the Realities of Parenting";
  const Justin = "Justin Bieber never disappoints with his Halloween look.";
  const Taylor =
    "First Female Artist to Have 4 Albums on Billboard ";

  return (
    <div>
      <div
        className="relative py-10 mt-16 md:px-0 lg:px-12 xl:px-40"
        id="Discover"
      >
        <Icons />
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="relative w-full h-96">
            <div className=" bg-primary">
              <img
                src="https://people.com/thmb/oMuQ1gtPfwI3fo4JbpXC6PssZEs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x59:751x61):format(webp)/Billie-Eilish-c963b26d535044c697a04b08e0529a1c.jpg"
                alt=""
                className="object-cover w-full "
              />
            </div>
            <div className="absolute p-2 duration-300 bg-primary bg-opacity-40 md:bg-none hover:bg-primary hover:bg-opacity-80 -translate-y-28 sm:-translate-y-24 md:pl-4 xl:pl-8 md:-translate-y-32 lg:-translate-y-44">
              <h1 className="text-sm font-bold lg:text-xl xl:text-3xl text-pwhite left-3 font-Roboto">
                {Billie}
              </h1>
              <p className="p-1 text-xs md:text-sm lg:text-xs text-swhite font-Roboto">
                Published on June 23, 2022{" "}
              </p>
              <button className="px-3 py-1 text-xs lg:text-sm lg:py-2 lg:px-5 text-pwhite left-2 bg-textlight">
                <a href="https://people.com/parents/billie-eilish-says-shed-rather-die-than-not-be-mom/">
                  Learn More
                </a>
              </button>
            </div>
          </div>

          <div className="flex flex-row w-full -translate-y-24 md:-translate-y-0 md:w-1/2 md:flex-col">
            <div className="h-1/2">
              <div className="relative w-full">
                <img
                  src="https://people.com/thmb/oMxnXbKEiLtHWm1YvC04A7uMaCw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(717x506:719x508):format(webp)/Justin-Beiber-Halloween-102823-07-47c935857bde4a668a26388f7bfb29ca.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="absolute p-2 duration-300 bg-primary bg-opacity-40 hover:bg-opacity-70 md:pl-4 xl:pl-8 md:-translate-y-28 hover:bg-primary lg:-translate-y-38 xl:-translate-y-32">
                  <h1 className="font-bold text-md md:text-sm lg:text-md xl:text-xl text-pwhite left-3 font-Roboto">
                    {Justin}
                  </h1>
                  <p className="p-1 text-xs md:text-xs lg:text-xs text-swhite font-Roboto">
                    Published on October 28, 2023{" "}
                  </p>
                  <button className="px-3 py-1 text-xs lg:text-xs lg:py-1 lg:px-3 text-pwhite left-2 bg-textlight">
                    <a href="https://people.com/justin-bieber-2023-halloween-costume-casamigos-halloween-party-8379515">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div>

              <div className=":-translate-y-0 h-1/2 md:-translate-y-6 lg:-translate-y-0">
                <div className="relative w-full">
                  <img
                    src="https://people.com/thmb/6Bkio2Cghhalq9iA9G6q9LkjPQs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/taylor-swift-more-tour-dates-062023-36cc3a3df2ed49a2931d48a83b92ab54.jpg"
                    alt=""
                    className=" md:w-screen"
                  />
                  <div className="absolute p-2 duration-300 bg-primary bg-opacity-40 hover:bg-opacity-80 md:pl-4 xl:pl-8 md:-translate-y-28 lg:-translate-y-28 xl:-translate-y-32 hover:bg-primary ">
                    <h1 className="font-bold text-md md:text-sm lg:text-md xl:text-xl text-pwhite left-3 font-Roboto">
                      {Taylor}
                    </h1>
                    <p className="py-1 text-xs text-swhite md:text-xs lg:text-xs font-Roboto">
                      Updated on July 17, 2023{" "}
                    </p>
                    <button className="px-3 py-1 text-xs lg:text-xs lg:py-1 lg:px-3 text-pwhite left-2 bg-textlight">
                      <a href="https://people.com/taylor-swift-first-woman-4-albums-billboard-top-10-7561728 ">
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full px-2 mt-10 xl:flex-row">
          <div className="flex flex-col flex-wrap xl:w-9/12 xl:flex-row">
            <div className="w-full lg:w-full xl:w-1/2 ">
              <div className=":-translate-y-0 h-1/2 md:-translate-y-6 lg:-translate-y-0">
                <div className="relative w-full">
                  <img
                    src="https://people.com/thmb/5Dw3fg5Vmo4DD6gGRtO0jyyM2wg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/justin-timberlake-3-3200f018342743e7ac037b1e921d57bb.jpg"
                    alt=""
                    className="object-cover w-screen"
                  />
                  <div className="absolute p-2 duration-300 bg-primary bg-opacity-40 hover:bg-opacity-80 -translate-y-28 md:pl-4 xl:pl-8 md:-translate-y-20 lg:-translate-y-28 xl:-translate-y-32 hover:bg-primary ">
                    <h1 className="font-bold text-md md:text-sm lg:text-md xl:text-xl text-pwhite left-3 font-Roboto">
                      Is Justin Timberlake Close to Releasing New Music?
                    </h1>
                    <p className="py-1 text-xs text-swhite md:text-xs lg:text-xs font-Roboto">
                      By Alexia Fernandez Published on June 7, 2017 09:23PM EDT
                    </p>
                    <button className="px-3 py-1 text-xs lg:text-xs lg:py-1 lg:px-3 text-pwhite left-2 bg-textlight">
                      <a href="https://people.com/music/justin-timberlake-new-music/">
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-full xl:w-1/2">
              <h1 className="mt-10 mb-5 text-2xl font-bold text-center font-Roboto xl:hidden">
                ENTERTAINMENT FOR ALL MUSICIANS
              </h1>
              <Blogs
                image="https://people.com/thmb/wKAlE2ZeJFg2PzHEFjTbJb55e2Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x398:981x400):format(webp)/billboard-13-2000-3424ad2cda454b9ea47f464f09543b22.jpg"
                header="Post Malone Says He's 'Blown Away' After Winning Top Artist at 2020 Billboard Music Awards"
                paragraph="I'm floored, Post Malone said at the 2020 BBMAs, after winning a total of nine awards"
                date="By Karen Mizoguchi  Published on October 14, 2020 11:46PM EDT"
                referenceLink="https://people.com/music/billboard-music-awards-2020-post-malone-wins-top-artist/"
              />
              <Blogs
                image="https://people.com/thmb/hOMnVZIxKqwoSD_0aFwco2PNqfk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x438:1001x440):format(webp)/drake-2000-c8ebcb71537645499d3d16862ea8e49b.jpg"
                header="Drake to Receive Artist of the Decade Award at 2021 Billboard Music Awards"
                paragraph="The 2021 Billboard Music Awards will air live on Sunday, May 23 at 8 p.m. ET / 5 p.m. PT on NBC"
                date="By Nicholas Rice Published on May 11, 2021 12:50PM EDT"
                referenceLink="https://people.com/music/billboard-music-awards-2020-post-malone-wins-top-artist/"
              />
              <Blogs
                image="https://people.com/thmb/t6lWiCziBhZ39HvQS0n_KyoutsA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/gettyimages-930654258-2000-f6d4af2cf6df45769d49cdde2e5b3b4a.jpg"
                header="Chance the Rapper Shouts Out Prince, Beyoncé and ..."
                paragraph="Chance the Rapper received the 2018 iHeartRadio Innovator Award for his 'groundbreaking accomplishments' and charitable contributions"
                date="By Nicole Sands  Published on March 11, 2018 09:20PM EDT"
                referenceLink="https://people.com/music/iheartradio-music-awards-2018-chance-the-rapper-receives-innovator-award/"
              />
            </div>
            <h1 className="p-6 px-2 mt-5 text-lg md:px-32 md:mb-10 text-pwhite xl:text-xl font-Roboto bg-textlight">
                  Discover the latest trends, artists, and hits in the world of
                  music. Stay updated on the hottest releases, concerts, and
                  music industry insights with our entertainment blog. Groove to
                  the rhythm of the music world.
                </h1>
            <div className="flex flex-col justify-center mt-20 xl:-translate-y-28 bg-pwhite align-center xl:flex-row ">
              <div className="w-full lg:w-full xl:w-1/2">

                <Blogs
                  image="https://people.com/thmb/rtov3IQ6lhaJCimqIIWUpSF29tc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/selena-gomez-who-says-almost-went-to-another-artist-082423-tout-766d5515cae045a9a34a83457a8eba52.jpg"
                  header="Selena Gomez Says Her Self-Love Hit 'Who Says' Almost Went to Another Artist: 'I Fought for It'"
                  paragraph="The pop star reveals she told Disney of the 2011 song, 'I think my fans really need it'"
                  date="By Sadie Bell Published on August 24, 2023 05:30PM EDT"
                  referenceLink="https://people.com/selena-gomez-reveals-who-says-almost-went-to-another-artist-7852566"
                />
                <Blogs
                  image="https://people.com/thmb/YQBM6ON9WXlAroKixXGXxi92Ruc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/shawn-mendes-fan-selfie-1-91322-75e4e820aedf48809901c5f76ad838c3.jpg"
                  header="Shawn Mendes Launches Wonder of Music for Music Therapy at SickKids Hometown Hospital"
                  paragraph="Thursday marked the announcement of Mendes' $1 million commitment to Wonder of Music"
                  date="By Daniela Avila Published on September 15, 2022 09:00AM EDT"
                  referenceLink="https://people.com/music/shawn-mendes-launches-wonder-of-music-foundation/"
                />
                <Blogs
                  image="https://people.com/thmb/r-aZCHKnMT8BE2_I0N5iUBzO6Ik=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/taylor-swift-61fe16f0aa3c418981a484f034076a65.jpg"
                  header="Taylor Swift Becomes First Solo Female Artist to Win the MTV 2020 VMAs Best Director Award"
                  paragraph="'This is amazing,' Swift said while accepting the award. 'This is the very first video that I've ever directed on my own. I'm just so grateful for this'"
                  date="By Nicole Sands  Published on March 11, 2018 09:20PM EDT"
                  referenceLink="https://people.com/music/mtv-vmas-2020-taylor-swift-wins-vmas-best-director/"
                />
              </div>
              <div className="w-full lg:w-full xl:w-1/2">
                <Blogs
                  image="https://people.com/thmb/OAmXI8KQVYdmJ4aMf2HKL85yxbY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(745x123:747x125):format(webp)/bad-bunny-billboard-lmas-100623-912718c4fb574648bb49a22bb4bdafe9.jpg"
                  header="Billboard Latin Music Awards 2023: See the Complete Winners List!"
                  paragraph="The annual star-studded award show aired live from the Watsco Center in Coral Gables, Florida, on Thursday"
                  date="By Ingrid Vasquez Published on October 7, 2023 05:00PM EDT"
                  referenceLink="https://people.com/music/billboard-music-awards-2020-post-malone-wins-top-artist/"
                />
                <Blogs
                  image="https://people.com/thmb/kx_uxx16BoSjfhVvSTbYcRHb-UU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x238:961x240):format(webp)/the-edge-2-d142b82ae19345f79fdb7159ea6c7870.jpg"
                  header="U2's The Edge Launches Guitar Icons Auction to Benefit Music Rising: 'We're Very Excited'"
                  paragraph="The auction will benefit Music Rising, an organization started by The Edge and music producer Bob Ezrin "
                  date="By Rachel DeSantis Published on December 7, 2021 11:00AM EST"
                  referenceLink="https://people.com/music/u2-the-edge-launches-guitar-icons-auction-to-benefit-music-rising/"
                />
                <Blogs
                  image="https://people.com/thmb/PUAo5SXVT9u7c5KtKYVvibdFkbU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/tyler-childers-09182323-01f8353fc8e74ab4ba29034f4d016d86.jpg"
                  header="Tyler Childers 'Honored' That His 'In Your Love' Music Video Has Encouraged Fans to Come Out: 'The Power of Music'"
                  paragraph="Tyler Childers' music video stars Colton Haynes and James Scully as ill-fated lovers in 1950s Appalachia"
                  date="By Rachel DeSantis Published on September 19, 2023 12:05AM EDT"
                  referenceLink="https://people.com/tyler-childers-honored-music-video-encouraged-fans-to-come-out-7971420"
                />
              </div>
            </div>
          </div>

          <div className="w-full xl:w-3/12">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;

