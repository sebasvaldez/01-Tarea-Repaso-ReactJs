export const CardSection = ({ news }) => {
  return (
    <div className="row g-4 py-5 row-cols-3 ">
      {news.map((item) => (
        <div className="feature col " key={item.id}>
          <h3 className="fs-2">{item.title}</h3>
          <p>{item.description}</p>
          <a href="#" className="text-info">
            Call to action
          </a>
        </div>
      ))}
    </div>
  );
};

CardSection.defaultProps = {
  news: [
    {
      id: 1,
      title: "Heading",
      description:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
      id: 2,
      title: "Heading",
      description:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
      id: 3,
      title: "Heading",
      description:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo.",
    },
  ],
};
