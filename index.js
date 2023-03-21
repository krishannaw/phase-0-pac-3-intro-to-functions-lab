function shout(string) {
    return string;
  } "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string;   
  } 'HELLO'.toLowerCase(); // 'hello'
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(str) {
    console.log(str.toUpperCase());
  }
  function logWhisper (str) {
    console.log (str.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return `Hi ${string}!`;
    }
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return `Hi ${string}!`;
    }
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return `Hi ${string}!`;
    }
  }