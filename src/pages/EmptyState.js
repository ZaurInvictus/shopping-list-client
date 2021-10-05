import { Link } from "react-router-dom";
import Header from "../components/Header";

const EmptyState = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="auto__container">
          <div className="section__inner">
            <div className="section_empty_state-body">
              <h4> Your shopping list is empty :( </h4>
              <Link to="/add-item" className="btn">
                Add your first item
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyState;
