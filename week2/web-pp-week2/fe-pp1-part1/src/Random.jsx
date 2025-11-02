import "./Random.css";

function Random(props) {
  return (
    <div className="Random">
      Random value between {props.min} and {props.max}=>
      {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}
    </div>
  );
}

export default Random;
