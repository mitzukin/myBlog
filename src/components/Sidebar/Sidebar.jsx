import React from "react";
import Sheets from "../../Props/Sheets";
const Sidebar = () => {
  return (
    <div>
      <h1 className="p-4 text-sm text-justify">
        <span className="font-semibold">
          &emsp;&emsp;Music is the universal language
        </span>{" "}
        that transcends borders, cultures, and time. It has the power to evoke
        emotions, tell stories, and connect people on a profound level. Whether
        it's the rhythm of a favorite song, the harmony of a beautiful melody,
        or the lyrics that resonate with our souls, music touches our lives in
        countless ways.
      </h1>
      <div className="flex flex-col max-h-full gap-2 p-3 bg-white border border-opacity-50 rounded shadow-md md:h-screen md:overflow-y-auto">
        <h1 className="mt-10 mb-3 text-xl font-bold text-center font-Roboto ">
          Music Taste Album
        </h1>
        <div className="">
          <Sheets
            title="I Killed Your Dog"
            author="L'Rain"
            paragraph="With an elliptical and bewitching new album, Taja Cheek turns her expansive, introspective compositions toward surreal humor and playfulness."
            date="October 12, 2023"
            image="https://media.pitchfork.com/photos/64e56ecff3405f6aaf587659/1:1/w_320,c_limit/lrain-i-killed-your-dog.jpg"
            referenceLink="https://pitchfork.com/reviews/albums/lrain-i-killed-your-dog/"
          />
        </div>
        <div className="">
          <Sheets
            title="Will Anybody Ever Love Me?"
            author="Sufjan Stevens"
            paragraph="Here’s a new Sufjan song that might make you cry even before you listen."
            date="September 14 2023"
            image="https://media.pitchfork.com/photos/64da26788c7859bd272cc6df/1:1/w_320,c_limit/Sufjan-Stevens-Javelin.jpg"
            referenceLink="https://pitchfork.com/reviews/tracks/sufjan-stevens-will-anybody-ever-love-me/"
          />
        </div>
        <div className="">
          <Sheets
            title="Bad Idea Right?"
            author="Olivia Rodrigo"
            paragraph="The second single from Guts is hammy, blasé, and brilliant. "
            date="October 12, 2023"
            image="https://media.pitchfork.com/photos/64d78bf694b0ef4633cc8380/1:1/w_320,c_limit/Olivia-Rodrigo-Bad-Idea-Right.jpg"
            referenceLink="https://pitchfork.com/reviews/tracks/olivia-rodrigo-bad-idea-right/"
          />
        </div>
        <div className="">
          <Sheets
            title="Softscars"
            author="Yeule"
            paragraph="On their riveting new album, the 25-year-old singer-songwriter-producer shifts from future-shocked electronic pop to a super-sized emotional bloodletting steeped in ’90s alternative."
            date="September 22, 2023"
            image="https://media.pitchfork.com/photos/64aed34788ee50644a417143/1:1/w_320,c_limit/Yeule-Softscars.jpg"
            referenceLink="https://pitchfork.com/reviews/albums/yeule-softscars/"
          />
        </div>
        <div className="">
          <Sheets
            title="Psychedelic Switch"
            author="Carly Rae Jepsen"
            paragraph="The joyous, floor-filling highlight of The Loveliest Time is as transcendent as its subject matter."
            date="	July 28, 2023"
            image="https://media.pitchfork.com/photos/64bee93d08cb381a6cdf7a5f/1:1/w_320,c_limit/Carly%20Rae%20Jepsen-%20The%20Loveliest%20Time.jpg"
            referenceLink="https://pitchfork.com/reviews/tracks/carly-rae-jepsen-psychedelic-switch/"
          />
        </div>
        <div className="">
          <Sheets
            title="Hold Your Horse Is (Deluxe Reissue)"
            author="Hella"
            paragraph="The Sacramento duo’s 2002 debut album might be the platonic ideal of math rock, but its real joy lies in the way it seems to escape the bounds of logic altogether."
            date="October 12, 2023"
            image="https://media.pitchfork.com/photos/64eccbdf8491d896ae8c1057/1:1/w_320,c_limit/Hella-%20Hold%20Your%20Horse%20Is%20(Deluxe%20Reissue).jpeg"
            referenceLink="https://pitchfork.com/reviews/albums/hella-hold-your-horse-is-deluxe-reissue/"
          />
        </div>
      </div>

      <h1 className="p-4 text-sm text-justify">
        &emsp;&emsp;From{" "}
        <span className="font-semibold">
          classical compositions to modern hits
        </span>
        , music is the soundtrack of our journeys, offering solace, celebration,
        and inspiration. It's a reminder that in a world filled with noise,
        music has the ability to bring us together, heal our hearts, and speak
        when words fall short.
      </h1>
    </div>
  );
};

export default Sidebar;
