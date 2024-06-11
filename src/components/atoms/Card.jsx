

export default function Card(props) {
  return (
    <div id="card">
      <img src={props.img} alt="img" state={props.state} />
    </div>
  )
}
