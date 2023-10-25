import React from "react";
import Content from "../../Props/Content";

const Articles = () => {
  const Bullettext =
    "In a new interview with Mike James Rock Show conducted at this weekend's 2000trees festival at Upcote Farm, Withington, near Cheltenham in Gloucestershire, United Kingdom, BULLET FOR MY VALENTINE guitarist Michael \"Padge\" Paget was asked about the band's plans for the coming months.";
  const Thirty =
    "You may know multi-hyphenate Jared Leto as the front man of Thirty Seconds to Mars or from his starring roles in WeCrashed and Dallas Buyers Club. Tuesday night, guests at the Spotify-hosted “An Evening with Jared Leto” got to know him as all that and the host of a Spotify Jam session. ";
  const Ed = "MANILA, Philippines – The ticket prices and seat plan for Ed Sheeran’s upcoming + – = ÷ x concert in the Philippines have been announced on Tuesday, October 24. "
  const Belong ="The music video, which arrived on YouTube yesterday (August 24), sees a man reminiscing about his time with his cancer-stricken partner, who tragically passes away. The sombre short culminates with the man spreading her ashes in a river."
  const DecAve ="MANILA -- OPM band December Avenue and actress and recording artist Belle Mariano have dropped the music video of their collaboration  \"Wala Nang Iba\" on Sunday.The nearly 4-minute clip shows a man struggling to move forward after the death of his partner." 
  return (
    <div className="mt-16 ">
      {" "}
      <h1 className="p-10 mt-10 text-4xl font-extrabold text-center font-Roboto">
        {" "}
        Harmonious Insights:
        <span className="text-textlight"> Music Articles </span>
      </h1>
      <p className="px-5 mt-5 leading-5 text-justify lg:mx-32 xl:mx-96 md:leading-6 font-Roboto">
        &emsp; &emsp;We explore the diverse facets of music, from the history of
        iconic genres to the latest trends in the industry. Our articles are
        like the notes in a grand composition, each contributing to the larger
        tapestry of musical appreciation.
      </p>
      <div className="md:mt-10">
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
      </div>
    </div>
  );
};

export default Articles;
