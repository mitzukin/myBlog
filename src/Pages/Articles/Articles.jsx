import React from "react";
import Content from "../../Props/Content";
import Footer from "../../components/Footer/Footer";

const Articles = () => {
  const Bullettext =
    "In a new interview with Mike James Rock Show conducted at this weekend's 2000trees festival at Upcote Farm, Withington, near Cheltenham in Gloucestershire, United Kingdom, BULLET FOR MY VALENTINE guitarist Michael \"Padge\" Paget was asked about the band's plans for the coming months.";
  const Thirty =
    "You may know multi-hyphenate Jared Leto as the front man of Thirty Seconds to Mars or from his starring roles in WeCrashed and Dallas Buyers Club. Tuesday night, guests at the Spotify-hosted “An Evening with Jared Leto” got to know him as all that and the host of a Spotify Jam session. ";
  const Ed =
    "MANILA, Philippines – The ticket prices and seat plan for Ed Sheeran’s upcoming + – = ÷ x concert in the Philippines have been announced on Tuesday, October 24. Sheeran’s Manila stop will be on March 9, 2024, at the SMDC Festival Grounds in Parañaque City, with special guest and singer-songwriter Callum Scott also performing at the show.";
  const Belong =
    "The music video, which arrived on YouTube yesterday (August 24), sees a man reminiscing about his time with his cancer-stricken partner, who tragically passes away. The sombre short culminates with the man spreading her ashes in a river.";
  const DecAve =
    'MANILA -- OPM band December Avenue and actress and recording artist Belle Mariano have dropped the music video of their collaboration  "Wala Nang Iba" on Sunday.The nearly 4-minute clip shows a man struggling to move forward after the death of his partner.';
  const justin =
    "The Manila show, which was initially set for October 2022 and was postponed, is now tagged as 'officially canceled' MANILA, Philippines – It’s official: we won’t be seeing Justin Bieber anytime soon, Filipino Beliebers.";
  const whydontwe =
    "The U.S. boy band Why Don't We will visit Korea in November as part of its Asia tour, \"Why Don't We ― 8 Letters Tour.\" Why Don't We has been referred to as a next-generation band that will storm the global music scene, following in the footsteps of U.K. boy band One Direction and U.S. pop group NSYNC.";

  return (
    <div className="mt-16 bg-backArticle ">
      {" "}
      <h1 className="p-10 mt-10 text-4xl font-extrabold text-center text-pwhite font-Roboto">
        {" "}
        Harmonious Insights:
        <span className="text-textlight"> Music Articles </span>
      </h1>
      <p className="px-5 mt-5 text-lg leading-5 text-justify text-pwhite lg:mx-32 xl:mx-96 md:leading-6 font-Roboto">
        &emsp; &emsp;We explore the diverse facets of music, from the history of
        iconic genres to the latest trends in the industry. Our articles are
        like the notes in a grand composition, each contributing to the larger
        tapestry of musical appreciation.
      </p>
      <div className="mt-10 md:mt-10">
        <Content
          title="BULLET FOR MY VALENTINE To Spend 2024 Working On New Studio Album"
          paragraph={Bullettext}
          image="https://distortedsoundmag.com/wp-content/uploads/2021/10/Bullet-For-My-Valentine-2021-2.jpg"
          referenceLink="https://blabbermouth.net/news/bullet-for-my-valentine-to-spend-2024-working-on-new-studio-album"
        />
        <Content
          title=" Jared Leto and Spotify Come Together in NYC to Jam in Honor of Thirty Seconds to Mars’ New Album"
          paragraph={Thirty}
          image="https://storage.googleapis.com/pr-newsroom-wp/1/2023/10/1728738727-2-1440x733.jpg"
          referenceLink="https://blabbermouth.net/news/bullet-for-my-valentine-to-spend-2024-working-on-new-studio-album"
        />
        <Content
          title="Ticket prices, seat plan: Ed Sheeran’s 2024 concert in Manila"
          paragraph={Ed}
          image="https://www.rappler.com/tachyon/2023/10/ed-sheeran-concert.png?resize=920%2C697&zoom=1"
          referenceLink="https://www.rappler.com/entertainment/music/ticket-prices-seat-plan-ed-sheeran-concert-manila-march-2024/"
        />
        <div className="my-20 md:mx-20 lg:mx-56 ">
          <h1 className="px-2 mb-4 text-4xl font-semibold font-Roboto text-pwhite xl:ml-32">
            Artistry Beyond Boundaries: Defining a Unique Style
          </h1>
          <p className="px-2 text-justify md:text-left text-pwhite font-Roboto xl:ml-32">
            In the ever-evolving world of art and creativity, one artist has
            managed to captivate audiences worldwide and ascend to the pinnacle
            of popularity through their extraordinary talent and unique artistic
            expression. This enigmatic figure has become the talk of the town,
            drawing admiration and accolades from both critics and art
            enthusiasts alike.
            <br /> <br />
            With an innate ability to translate their innermost thoughts and
            emotions onto canvas, this artist has developed a distinctive style
            that transcends conventional boundaries. Their work not only
            resonates with viewers on a profound level but also pushes the
            boundaries of artistic innovation.
            <br /> <br />
            What sets this artist apart is not just their technical prowess, but
            their capacity to evoke powerful emotions and provoke thought
            through their creations. Each piece of art they produce tells a
            story, takes the audience on a journey, and leaves a lasting impact.
            It's this unique ability to communicate, transcend cultures, and
            bridge gaps that has contributed significantly to their meteoric
            rise in popularity.
          </p>
        </div>
        <Content
          title="Watch I Belong To The Zoo’s heartbreaking music video for ‘Oras’"
          paragraph={Belong}
          image="https://www.nme.com/wp-content/uploads/2021/08/i-belong-to-the-zoo-oras@2000x1270-696x442.jpg"
          referenceLink="https://www.nme.com/en_asia/news/music/watch-the-heartbreaking-music-video-for-i-belong-to-the-zoos-oras-3028139"
        />
        <Content
          title="WATCH: Belle Mariano, December Avenue drop 'Wala Nang Iba' MV’"
          paragraph={DecAve}
          image="https://sa.kapamilya.com/absnews/abscbnnews/media/2023/entertainment/08/08/20230808-opm-band.jpg"
          referenceLink="https://www.nme.com/en_asia/news/music/watch-the-heartbreaking-music-video-for-i-belong-to-the-zoos-oras-3028139"
        />
        <Content
          title="Justin Bieber cancels rest of ‘Justice’ world tour dates – including Manila 
          "
          paragraph={justin}
          image="https://www.rappler.com/tachyon/2023/03/justin-bieber-cancels-concert-tour.jpeg?resize=828%2C643&zoom=1"
          referenceLink="https://www.rappler.com/entertainment/music/justin-bieber-cancels-justice-world-tour-dates-including-manila/"
        />
        <Content
          title="Multitalented US boy band to perform in Seoul in November’"
          paragraph={whydontwe}
          image="https://img.koreatimes.co.kr/upload/newsV2/images/201910/a0ebd2c893924ca9b936146b25a86c4b.jpg/dims/resize/740/optimize"
          referenceLink="https://www.koreatimes.co.kr/www/art/2023/10/398_277452.html"
        />
        <div className="my-20 md:mx-20 lg:mx-56">
          <h1 className="px-2 mb-4 text-4xl font-semibold font-Roboto text-pwhite xl:ml-32">
            Galleries of Prestige and Coveted Collections
          </h1>
          <p className="px-2 text-justify md:text-left text-pwhite font-Roboto xl:ml-32">
            Their work can be found in prestigious galleries and exhibitions
            around the world, with collectors vying for the chance to own a
            piece of their genius. Art critics often laud their creations as the
            epitome of contemporary art, and the artist has received numerous
            awards and accolades throughout their career.
            <br /> <br />
            In an age where the art world is flooded with talent, this artist's
            rise to popularity is a testament to their unwavering dedication,
            their unwavering commitment to pushing the boundaries of artistic
            expression, and their undeniable gift for evoking emotion and
            thought through their work. As they continue to gain global
            recognition, it's clear that their impact on the art world is far
            from fleeting, and their talents have solidified their position as
            one of the most celebrated artists of our time
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
