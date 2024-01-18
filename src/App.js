import { useState } from "react";
import "./styles.css";
import Input from "./components/input";

export default function App() {
  const videoData = [
    "https://www.shutterstock.com/shutterstock/videos/1079752463/preview/stock-footage-funny-cute-pug-dog-do-fitness-workout-at-home-dumbbell-in-the-paw-doing-dumbbells-exercise-dog.webm",
    "https://www.shutterstock.com/shutterstock/videos/1024867412/preview/stock-footage-a-dog-driving-a-car-on-a-suburban-street-wearing-funny-sunglasses.webm",
    "https://www.shutterstock.com/shutterstock/videos/1108250403/preview/stock-footage-jack-russell-terrier-dog-dressed-in-a-plaid-bandana-rides-a-longboard.webm",
    "https://www.shutterstock.com/shutterstock/videos/1019442721/preview/stock-footage-dog-dachshund-black-and-tan-relaxed-from-spa-procedures-on-face-with-cucumber-covered-with-a.webm"
  ];

  const [selectedRadio, setSelectedRadio] = useState(videoData[0]);
  const [videoUrl, setVideoUrl] = useState(videoData[0]);

  const handleChange = (value) => {
    // console.log(value);
    setSelectedRadio(value);
    setVideoUrl(value);
  };

  return (
    <>
      <h1>Video Player</h1>
      <div className="App">
        <label className="Card">
          {videoData.map((data, index, id) => {
            return (
              <Input
                value={data}
                checked={selectedRadio === data}
                handleChange={handleChange}
                name={index + 1}
                key={crypto.randomUUID()}
              />
            );
          })}
        </label>
        <br /> <br />
        <video src={videoUrl} width="400" height="300" controls></video>
      </div>
    </>
  );
}
