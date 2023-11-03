import React from "react";
import Side from "../../components/Sidebar/Side";
import Text from "../../Props/Text";
import Digital from "./Digital";
import Choosing from "./Choosing";
import Footer from "../../components/Footer/Footer"
const Instruments = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-9/12 ">
          <section id="introduction">
            <h1 className="text-4xl font-bold text-center font-Roboto xl:ml-80 md:mx-36">
              Introduction to Instruments
            </h1>
            <p className="px-2 mt-5 leading-5 text-justify md:text-left xl:ml-80 xl:mx-8 md:mx-24 md:mt-20 md:text-lg text-md font-Roboto">
              In the world of music, instruments are the voice through which
              artists communicate their emotions, stories, and creativity. From
              the haunting melodies of a violin to the thundering rhythm of a
              drum, each instrument brings its unique character to the symphony
              of sound.
              <br />
              <br />
              In this captivating world, musicians communicate emotions,
              stories, and experiences through the strings of a guitar, the keys
              of a saxophone, or the delicate touch of a violin's bow. Each
              instrument brings its unique character and voice to the
              composition, and musicians master the art of harmonizing these
              voices to produce harmonious symphonies or dynamic rock anthems.
              <br />
              <br />
              Whether it's the soothing notes of a flute in a serene forest or
              the electrifying power of an electric guitar on a crowded stage,
              instruments are the vessels through which musicians weave the
              tapestry of human emotion and expression. The music world is a
              testament to the universal language that transcends boundaries,
              forging connections and resonating with the hearts of people
              around the globe.
              <br />
              <br />
              Join us on a journey to discover the magic and diversity of
              instruments, their historical significance, and their role in
              creating the melodies that move our souls.
            </p>

            <div className="mt-10 xl:ml-80 md:mx-24">
              <img
                src="https://cdn.pixabay.com/photo/2014/06/04/17/53/piano-362251_1280.jpg"
                alt=""
              />
              <p className="px-1 mt-10 text-justify text-md md:text-left font-Roboto">
                Musical instruments are devices designed to produce sound, and
                they play a fundamental role in the creation and performance of
                music across cultures and genres. These instruments come in a
                wide variety of types, each with its own unique sound-producing
                mechanisms and characteristics. Here is an introduction to
                musical instruments
              </p>
              <Text
                title="Classification of Musical Instruments"
                text="Musical instruments can be broadly classified into several categories based on how they produce sound"
              />
              <Text
                title="Historical Significance"
                text="Musical instruments have a rich history dating back thousands of years. They have been used for communication, cultural expression, religious rituals, and entertainment. The evolution of instruments has led to the diverse range of sounds and music we have today."
              />
              <Text
                title="Cultural Diversity"
                text="Different cultures and regions have developed their own unique musical instruments, reflecting their traditions and values. For example, the sitar in India, the djembe in West Africa, and the bagpipes in Scotland are all culturally specific instruments."
              />
              <Text
                title="Orchestras and Ensembles"
                text="Many musical compositions involve a combination of different instruments played together in harmony. Orchestras, bands, and ensembles bring together various instruments to create complex and beautiful music."
              />
              <Text
                title="Music Education"
                text="Learning to play a musical instrument is a popular and fulfilling pursuit. It not only offers a means of self-expression but also enhances cognitive and motor skills. Music education often begins with learning to play instruments like the piano, violin, or recorder."
              />
              <Text
                title="Technology and Innovation"
                text="Advancements in technology have given rise to electronic and digital musical instruments, expanding the possibilities of sound creation and manipulation. Synthesizers, drum machines, and digital audio workstations (DAWs) are examples of such innovations."
              />
              <Text
                title="Professional and Amateur Musicians"
                text="Musicians can be categorized as professional performers, composers, and educators, or as amateur enthusiasts who play for personal enjoyment. Many professional musicians dedicate their lives to mastering their chosen instrument."
              />
              <Text
                title="Global Impact"
                text="Music is a universal language, and musical instruments are essential tools for musicians to convey their emotions and stories to audiences worldwide. Music transcends language barriers and has the power to evoke strong emotions and connect people from diverse backgrounds."
              />
            </div>
          </section>
          <section id="traditional" className="mt-20 md:ml-24 xl:ml-80">
            <h1 className="pl-1 text-2xl font-semibold font-Roboto">
              Traditional Instruments
            </h1>
            <p className="px-1 mt-5 text-justify text-md md:text-left font-Roboto">
              Traditional instruments are musical instruments that have been
              used for generations within a specific culture or region, often
              carrying deep historical, social, and cultural significance. These
              instruments are an integral part of traditional music, rituals,
              ceremonies, and storytelling in their respective societies.
              Traditional instruments vary widely across different cultures and
              can be made from various materials, reflecting the unique
              traditions and musical styles of each community. Here are some
              examples of traditional instruments from various parts of the
              world
            </p>

            <div className="grid grid-cols-2 grid-rows-3 gap-2 p-2 font-Roboto md:grid-cols-3 md:grid-rows-2 md:p-10">
              <div className="relative group ">
                <img
                  src="https://i.pinimg.com/564x/5d/7f/69/5d7f69328dd590758d44df01dc31a7ae.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white">
                    Djembe (West Africa)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    A Djembe is a traditional West African drum that originates
                    from the Mande people in the region that includes countries
                    like Mali, Guinea, Ivory Coast, Burkina Faso, Senegal, and
                    other parts of West Africa.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://i.pinimg.com/564x/2f/72/05/2f7205168dcf81a263540626b1595f13.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white">
                    Shamisen (Japan)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    The shamisen is a traditional Japanese musical instrument
                    with a distinctive three-stringed design. It is an integral
                    part of traditional Japanese music and has a history dating
                    back several centuries.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://i.pinimg.com/564x/07/e1/5e/07e15e72a22ed23d57179d9d66469a9d.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white">
                    Bagpipes (Various)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    Bagpipes are a class of musical instruments that have a
                    characteristic sound produced by the vibration of reeds and
                    the compression of air through a bag.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://cdn.britannica.com/42/200242-050-A3CBC338/Ravi-Shankar.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white">
                    Sitar (India)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    The sitar is a traditional plucked string instrument that
                    originates from India. It is one of the most iconic and
                    recognizable musical instruments associated with Indian
                    classical music.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://doctorofthesoul.com/wp-content/uploads/2023/03/shutterstock-417370723_orig.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white">
                    Didgeridoo (Australia)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    The didgeridoo is a traditional musical instrument that
                    originates from Indigenous Australian cultures, particularly
                    those of Aboriginal people in the northern regions of
                    Australia.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://answersafrica.com/wp-content/uploads/2014/08/The-Kora.jpg"
                  alt="Image"
                  className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-center text-white ">
                    Kora (West Africa)
                  </p>
                  <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
                    The kora is a traditional stringed instrument originating
                    from West Africa, particularly associated with the Mandinka
                    people of the Gambia, Senegal, Guinea, Mali, and other
                    neighboring regions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="Digital" className="mt-20 md:ml-24 xl:ml-80">
            <Digital />
          </section>
          <section id="Choose" className="mt-20 md:ml-24 xl:ml-80">
            <Choosing />
          </section>
        </div>

        <div className="hidden mt-10 lg:block lg:3/12">
          <div className="fixed">
            <Side />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Instruments;
