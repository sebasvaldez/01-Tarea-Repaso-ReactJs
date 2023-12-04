import hero from "../../assets/hero-img.png";
export const CustomBanner = () => {
  return (
    <div className="container p-md-5">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center",  }}
      >
        <div className="text-center col-md-7">
          <div style={{ fontSize: "45px", fontWeight: "bold" }}>
            RollingCode
          </div>
          <div style={{ fontSize: "30px" }}>Curso de React Avanzado!</div>
          <button className="btn btn-primary btn-sm btn-md-lg mt-4 mb-4">VER MAS</button>
        </div>
        <div className="col-5  d-md-flex hero-image">
          <img src={hero} alt="header image" />
        </div>
      </div>
    </div>
  );
};
