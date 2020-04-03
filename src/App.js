import React ,{useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';

const names = ["ahmed","mohammed","Ali","islam","omar","mena"]
const  id= Math.ceil(Math.random() * 10000);
const username= names[Math.floor((names.length)*Math.random())];
function App(props) {

  const [messages,setMessages]=useState([]);
  const [input,setInput]=useState("");

const subscribe = (messages) => {
  axios.post("http://localhost:3000/subscribe",{id}).then((res) =>{
    setMessages(messages.concat(res.data));
    subscribe(messages.concat(res.data));
  });
}

useEffect( () => {
  subscribe(messages);
},[]);

const handleChange = (e)=> {
  const {target:{value}} = e;
  setInput(value);
}

const addNewMessage = (e)=> {
  setInput("");
  axios.post("http://localhost:3000/messageSubscribers",{content : input,username})
}


  return (
    <div className="App">
       <div className="col-lg-12 app">
    <div className="row app-one">

      <div className="col-sm-4 side">
        <div className="side-one">
          <div className="row heading">
            <div className="col-sm-3 col-xs-3 heading-avatar">
              <div className="heading-avatar-icon">
                <img src="http://shurl.esy.es/y"   alt="profile"></img>
              </div>
            </div>
            <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
              <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
              <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="row searchBox">
            <div className="col-sm-12 searchBox-inner">
              <div className="form-group has-feedback">
                <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search"></input>
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>

          <div className="row sideBar">
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-two">

          <div className="row newMessage-heading">
            <div className="row newMessage-main">
              <div className="col-sm-2 col-xs-2 newMessage-back">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10 col-xs-10 newMessage-title">
                New Chat
              </div>
            </div>
          </div>

          <div className="row composeBox">
            <div className="col-sm-12 composeBox-inner">
              <div className="form-group has-feedback">
                <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People"></input>
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>

          <div className="row compose-sideBar">
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"     alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"    alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"    alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"    alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"    alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"  alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"  alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="http://shurl.esy.es/y"   alt="profile"></img>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col-sm-8 conversation">
        <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div className="heading-avatar-icon">
            </div>
          </div>
          <div className="col-sm-8 col-xs-7 heading-name">
            <a className="heading-name-meta">Ankit Jain
            </a>
            <span className="heading-online">Online</span>
          </div>
          <div className="col-sm-1 col-xs-1  heading-dot pull-right">
            <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
          </div>
        </div>

        <div className="row message" id="conversation">
          <div className="row message-previous">
            <div className="col-sm-12 previous">
              
            </div>
          </div>
          {
            messages.map(message => 
              <div className="row message-body" key={message.content+message.username}>
            <div className={message.username==username?"col-sm-12 message-main-sender":"col-sm-12 message-main-receiver"}>
              <div className={message.username==username?"sender":"receiver"}>
                <div className="message-text">
                 {message.content}
                </div>
                <span className="message-time pull-right">
                {message.username}
                </span>
              </div>
            </div>
          </div>
         
            )} 
      
         
        </div>
            <div className="row reply">
            <div className="col-sm-1 col-xs-1 reply-emojis">
              <i className="fa fa-smile-o fa-2x"></i>
            </div>
            <div className="col-sm-9 col-xs-9 reply-main">
              <textarea className="form-control" rows="1" id="comment"
                        onChange={handleChange}
                        value = {input}
                        ></textarea>
            </div>
            <div className="col-sm-1 col-xs-1 reply-recording">
              <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
            </div>
            <div className="col-sm-1 col-xs-1 reply-send" 
                  onClick={addNewMessage} 
                  >
                <i className="fa fa-send fa-2x" aria-hidden="true"></i>
            </div>
          </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
