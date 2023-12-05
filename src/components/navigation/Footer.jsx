import { FormFooter } from "./FormFooter";
import { MenuFooter } from "./MenuFooter";


export const Footer = () => {
  

  return (
    <footer className="py-5 px-5 bg-white container">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <MenuFooter />
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <MenuFooter />
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <MenuFooter />
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <FormFooter />
        </div>
      </div>
    </footer>
  );
};
