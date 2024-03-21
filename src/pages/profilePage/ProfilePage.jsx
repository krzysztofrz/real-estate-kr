import Chat from "../../components/card/chat/chat";
import List from "../../components/list/List";
import "./ProfilePage.scss";

const ProfilePage = () => {
	return (
		<div className="profilePage">
			<div className="details">
				<div className="wrapper">
					<div className="title">
						<h1>User Information</h1>
						<button>Update Profile</button>
					</div>
					<div className="info">
						<span>
							Avatar:{" "}
							<img
								src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
						</span>
						<span>
							Name: <b>Tomasz Nowakowski</b>
						</span>
						<span>
							email: <b>nowakowski@gmail.com</b>
						</span>
					</div>
					<div className="title">
						<h1>My List</h1>
						<button>Create New Post</button>
					</div>
					<List />
					<div className="title">
						<h1>Saved List</h1>
					</div>
					<List />
				</div>
			</div>
			<div className="chatContainer">
				<div className="wrapper">
					<Chat />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
