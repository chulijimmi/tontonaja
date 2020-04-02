import React, {
  useState,
  useCallback,
  useRef,
  createRef,
  forwardRef
} from "react";
import "./people-detail-knowfor.scss";
import { useOnClickOutside } from "../Component/link-menu";

// Render Memoize Button Component
const ButtonComponent = props => {
  return (
    <button className="know-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

const propsButtonComponent = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

const MemoButton = React.memo(ButtonComponent, propsButtonComponent);

// Render Memoize Overview Component
const OverviewComponent = React.forwardRef((props, ref) => {
  return (
    <div className={"know-overview"} ref={ref}>
      <p>{props.text}</p>
    </div>
  );
});

const propsOverview = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text;
};

const MemoOverview = React.memo(OverviewComponent, propsOverview);
const OverviewRef = forwardRef((props, ref) => {
  return <MemoOverview ref={ref} {...props} />;
});

// Overview Compoenent
// Handling click with memoize component
function Overview(props) {
  const ref = createRef();
  const [visible, setVisible] = useState(false);
  const handleVisible = useCallback(() => setVisible(true));
  useOnClickOutside(ref, () => setVisible(false));
  return (
    <div>
      {visible ? (
        <OverviewRef
          text={props.item.overview}
          ref={ref}
          key={props.item.overview}
        />
      ) : (
        <MemoButton
          label={"Overview"}
          onClick={handleVisible}
          key={props.item.id}
        />
      )}
    </div>
  );
}

// Render KnowFor Component
function KnowForComponent({ movie }) {
  return (
    movie && (
      <div className="know-for">
        <h4 className="know-head">Known For</h4>
        {movie.map((item, index) => {
          return (
            item.backdrop_path && (
              <div className="know-container" key={index.toString()}>
                <div className="know-name">
                  <p>
                    {item.title}{" "}
                    <span className="vote-rate">
                      Rating {item.vote_average}
                    </span>
                  </p>
                </div>
                <div className="know-backdrop">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  />
                </div>
                <Overview item={item} />
              </div>
            )
          );
        })}
      </div>
    )
  );
}

export default KnowForComponent;
