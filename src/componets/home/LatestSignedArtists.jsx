import React from 'react';
import curve from '../../assets/curveImage.jpg'
const artists = [
  {
    name: 'MizzieLmb',
    image:
      'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/bb0cfb4651b4fd60bd61928cd0d593ab6c731d0a+(1).jpg',
    description:
      'is a talented artist from Zimbabwe, celebrated for her strong voice and electrifying energy. As part of The Chordifiers Studio, she’s redefining music with her unique approach. Don’t miss her latest creations!',
  },
  {
    name: 'Sweta',
    image:
      'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/23f4e11a55b906a4310e045982373adcbcdbef9a.jpg',
    description:
      'a rising artist from Kurseong, is known for her heartfelt and soothing voice. Proudly representing The Chordifiers Studio, she’s bringing fresh energy to the music scene. Stay tuned for her upcoming projects!',
  },
  {
    name: 'Diyaan',
    image:
      'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/ddd2b1b879f16ccc4ece2ec94c7d7b6abb4f315d.jpg',
    description:
      'is a artist from Kashmir, known for their unique sound and captivating music. Representing The Chordifiers Studio, he is making waves from his heart out. Stay tuned for their latest hits!',
  },
];

const LatestSignedArtists = () => {
  return (
    <section className="bg-black text-white w-full pt-16 ">
      {/* Header */}
      <div className="text-center mb-12 px-5 ">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Our latest Signed artist</h2>
        <p className="text-sm md:text-lg max-w-3xl mx-auto text-gray-300 font-light">
          Meet the newest talent to join our creative family. With a unique sound and undeniable passion, this artist is set to make waves in the music industry. Stay tuned for their upcoming releases, exclusive performances, and more as they embark on an exciting journey with us.
        </p>
      </div>

      {/* Artists */}
      <div className="space-y-20 px-5 ">
        {artists.map((artist, index) => (
          <div
            key={artist.name}
            className={`flex flex-col md:flex-row items-center justify-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } gap-10 md:gap-16`}
          >
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-[85%] md:w-[350px] rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
              <p className="text-sm md:text-base text-gray-300">{artist.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Curve */}
      <div className="min-w-full mt-20">
        <img
          src={curve}
          alt="Curve Divider"
          className="min-w-full h-auto block -mt-4"
        />
      </div>
    </section>
  );
};

export default LatestSignedArtists;
