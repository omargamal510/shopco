const dressStyles = [
  {
    text: "casual",
    url: "url('./home/casual.png')",
  },

  {
    text: "formal",
    url: "url('./home/formal.png')",
  },

  {
    text: "party",
    url: "url('./home/party.avif')",
  },

  {
    text: "gym",
    url: "url('./home/gym.png')",
  },
];

function HomeDressStyle() {
  return (
    <div className="min-h-[300px] rounded-lg p-10 grid grid-cols-12 gap-5 w-full bg-default-grey">
      {dressStyles.map((e, i) => (
        <div
          style={{ backgroundImage: e.url, backgroundSize: "cover" }}
          className={`${
            i === 0 || i === 3
              ? "lg:col-span-4 col-span-12"
              : "col-span-12 lg:col-span-8"
          } h-[400px] small-shadow rounded-lg bg-center bg-no-repeat`}
          key={i}
        >
          <h3 className="p-5 text-2xl font-bold">{e.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default HomeDressStyle;
