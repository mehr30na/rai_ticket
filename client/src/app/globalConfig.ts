/**
 * Created by mehr30na on 5/2/17.
 */
export class GlobalConfig {

  // static url = "http://172.25.137.25:8000/api/";
  static url = "http://172.25.137.15/raiticket/server/public/api/";
  // static url = "http://localhost/test/server/public/api/";
  // static url = "http://localhost:8000/api/";
  // static url="http://localhost:8000/api/";

  
  alertAudio() {
    var audio = new Audio();
    audio.src = "./assets/audio/1.mp3";
    audio.load();
    audio.play();
  }


}
