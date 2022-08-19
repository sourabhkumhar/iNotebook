import FetchNotes from './FetchNotes';

export default function Home(props) {
  return (
    <div>
      
      <div className="my-4">
        <FetchNotes showAlert={props.showAlert} />
      </div>
    </div>
  )
}
