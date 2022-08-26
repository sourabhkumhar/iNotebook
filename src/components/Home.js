import FetchNotes from './FetchNotes';

export default function Home(props) {
  return (
      <div className="my-4">
        <FetchNotes showAlert={props.showAlert} />
      </div>
  )
}
