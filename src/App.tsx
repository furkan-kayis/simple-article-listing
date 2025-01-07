const articles = [
  {
    title:
      "Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions",
    date: "November 12, 2024",
    image: {
      src: "/photo_1.png",
      alt: "A bed resting atop a large stack of colorful pillows, creating a cozy and inviting atmosphere.",
    },
  },
  {
    title:
      "The Future of AI: How Machine Learning is Revolutionizing Industries",
    date: "November 12, 2024",
    image: {
      src: "/photo_3.png",
      alt: "A crystal cube covered in green moss-like growth on a light background.",
    },
  },
  {
    title:
      "The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work",
    date: "November 12, 2024",
    image: {
      src: "/photo_2.png",
      alt: "A glowing glass cube with colorful reflections on a blue background.",
    },
  },
];

export default function App() {
  return (
    <main className="px-8 py-12 font-poppins">
      <div className="mx-auto space-y-11 max-w-[45.5rem]">
        <h1 className="text-[2.25rem] font-semibold text-center max-w-[25ch] mx-auto">
          We release interesting articles about technology
        </h1>
        <img
          src="/Seperator.svg"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="mx-auto"
        />

        <ul className="space-y-11">
          {articles.map((article) => (
            <li key={article.title}>
              <article className="flex rounded-lg gap-x-12 gap-y-6 sm:items-center max-sm:flex-col">
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  fetchPriority="high"
                  className="rounded-xl size-40"
                />
                <div>
                  <h2 className="font-semibold text-[1.25rem]">
                    {article.title}
                  </h2>
                  <span className="font-medium text-[0.875rem] text-custom-gray-600 inline-block mt-3">
                    {article.date}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
