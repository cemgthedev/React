import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    
    function onAddMeetup(meetupData) {
        fetch('https://study-react-a6f49-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetup}/>
        </section>
    );
}

export default NewMeetupPage;